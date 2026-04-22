/**
 * SEO Utilities - Structured Data and Meta Tags
 * Implements JSON-LD and Open Graph for better SEO
 */

export interface SEOMetadata {
  title: string;
  description: string;
  image?: string;
  url?: string;
  type?: 'website' | 'article' | 'profile';
  author?: string;
  publishedDate?: string;
  modifiedDate?: string;
}

/**
 * Generate JSON-LD structured data for Person (Portfolio)
 */
export function generatePersonSchema(data: {
  name: string;
  title: string;
  description: string;
  image: string;
  url: string;
  email?: string;
  phone?: string;
  sameAs?: string[];
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: data.name,
    jobTitle: data.title,
    description: data.description,
    image: data.image,
    url: data.url,
    email: data.email,
    telephone: data.phone,
    sameAs: data.sameAs || [],
  };
}

/**
 * Generate JSON-LD structured data for Project
 */
export function generateProjectSchema(data: {
  name: string;
  description: string;
  image: string;
  url: string;
  creator: string;
  datePublished?: string;
  technologies?: string[];
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'SoftwareSourceCode',
    name: data.name,
    description: data.description,
    image: data.image,
    url: data.url,
    creator: {
      '@type': 'Person',
      name: data.creator,
    },
    datePublished: data.datePublished,
    programmingLanguage: data.technologies || [],
  };
}

/**
 * Generate JSON-LD structured data for Organization
 */
export function generateOrganizationSchema(data: {
  name: string;
  description: string;
  url: string;
  logo: string;
  email?: string;
  phone?: string;
  address?: string;
  sameAs?: string[];
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: data.name,
    description: data.description,
    url: data.url,
    logo: data.logo,
    email: data.email,
    telephone: data.phone,
    address: data.address,
    sameAs: data.sameAs || [],
  };
}

/**
 * Generate Open Graph meta tags
 */
export function generateOpenGraphTags(metadata: SEOMetadata) {
  return {
    'og:title': metadata.title,
    'og:description': metadata.description,
    'og:image': metadata.image || '/PortfolioLogo.png',
    'og:url': metadata.url || 'https://yoursite.com',
    'og:type': metadata.type || 'website',
    'twitter:card': 'summary_large_image',
    'twitter:title': metadata.title,
    'twitter:description': metadata.description,
    'twitter:image': metadata.image || '/PortfolioLogo.png',
  };
}

/**
 * Generate Twitter Card meta tags
 */
export function generateTwitterCardTags(metadata: SEOMetadata) {
  return {
    'twitter:card': 'summary_large_image',
    'twitter:title': metadata.title,
    'twitter:description': metadata.description,
    'twitter:image': metadata.image || '/PortfolioLogo.png',
    'twitter:creator': metadata.author || '@yourhandle',
  };
}

/**
 * Generate canonical URL meta tag
 */
export function generateCanonicalTag(url: string) {
  return {
    rel: 'canonical',
    href: url,
  };
}

/**
 * Generate robots meta tag
 */
export function generateRobotsMeta(options: {
  index?: boolean;
  follow?: boolean;
  nosnippet?: boolean;
  noarchive?: boolean;
} = {}) {
  const directives = [];

  if (options.index !== false) directives.push('index');
  else directives.push('noindex');

  if (options.follow !== false) directives.push('follow');
  else directives.push('nofollow');

  if (options.nosnippet) directives.push('nosnippet');
  if (options.noarchive) directives.push('noarchive');

  return directives.join(', ');
}

/**
 * Generate viewport meta tag
 */
export function generateViewportMeta() {
  return 'width=device-width, initial-scale=1, maximum-scale=5';
}

/**
 * Generate complete SEO metadata object
 */
export function generateSEOMetadata(data: SEOMetadata) {
  return {
    title: data.title,
    description: data.description,
    keywords: [
      'portfolio',
      'developer',
      'full-stack',
      'react',
      'next.js',
    ].join(', '),
    authors: data.author ? [{ name: data.author }] : [],
    openGraph: generateOpenGraphTags(data),
    twitter: generateTwitterCardTags(data),
    robots: generateRobotsMeta({ index: true, follow: true }),
    viewport: generateViewportMeta(),
    canonical: data.url,
  };
}
