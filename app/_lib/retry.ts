/**
 * Retry utility with exponential backoff
 * Implements senior-level error recovery patterns
 */

interface RetryOptions {
  maxRetries?: number;
  initialDelay?: number;
  maxDelay?: number;
  backoffMultiplier?: number;
  onRetry?: (attempt: number, error: Error) => void;
}

const DEFAULT_OPTIONS: Required<RetryOptions> = {
  maxRetries: 3,
  initialDelay: 1000,
  maxDelay: 10000,
  backoffMultiplier: 2,
  onRetry: () => {},
};

/**
 * Retry a function with exponential backoff
 * @param fn - Function to retry
 * @param options - Retry configuration
 * @returns Result of the function
 */
export async function retryWithBackoff<T>(
  fn: () => Promise<T>,
  options: RetryOptions = {}
): Promise<T> {
  const config = { ...DEFAULT_OPTIONS, ...options };
  let lastError: Error | null = null;
  let delay = config.initialDelay;

  for (let attempt = 0; attempt <= config.maxRetries; attempt++) {
    try {
      return await fn();
    } catch (error) {
      lastError = error instanceof Error ? error : new Error(String(error));

      if (attempt < config.maxRetries) {
        config.onRetry(attempt + 1, lastError);
        await new Promise((resolve) => setTimeout(resolve, delay));
        delay = Math.min(delay * config.backoffMultiplier, config.maxDelay);
      }
    }
  }

  throw lastError || new Error('Max retries exceeded');
}

/**
 * Retry a fetch request with exponential backoff
 * @param url - URL to fetch
 * @param options - Fetch options
 * @param retryOptions - Retry configuration
 * @returns Fetch response
 */
export async function retryFetch(
  url: string,
  options?: RequestInit,
  retryOptions: RetryOptions = {}
): Promise<Response> {
  return retryWithBackoff(
    () => fetch(url, options),
    {
      ...retryOptions,
      onRetry: (attempt, error) => {
        console.warn(`Fetch retry attempt ${attempt} for ${url}:`, error.message);
        retryOptions.onRetry?.(attempt, error);
      },
    }
  );
}

/**
 * Retry a callback with exponential backoff
 * @param callback - Callback to retry
 * @param options - Retry configuration
 * @returns Result of the callback
 */
export async function retryCallback<T>(
  callback: () => T | Promise<T>,
  options: RetryOptions = {}
): Promise<T> {
  return retryWithBackoff(() => Promise.resolve(callback()), options);
}
