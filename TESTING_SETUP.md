# Testing Setup Guide - Senior Level

This guide provides comprehensive testing setup for the portfolio project following industry best practices.

---

## 1. Unit Testing with Jest & React Testing Library

### Installation

```bash
npm install --save-dev jest @testing-library/react @testing-library/jest-dom @testing-library/user-event jest-environment-jsdom @types/jest
```

### Jest Configuration

Create `jest.config.js`:

```javascript
const nextJest = require('next/jest')

const createJestConfig = nextJest({
  dir: './',
})

const customJestConfig = {
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  testEnvironment: 'jest-environment-jsdom',
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/app/$1',
    '^@components/(.*)$': '<rootDir>/app/(site)/_components/$1',
    '^@hooks/(.*)$': '<rootDir>/app/(site)/_hooks/$1',
    '^@lib/(.*)$': '<rootDir>/app/_lib/$1',
    '^@context/(.*)$': '<rootDir>/app/(site)/_context/$1',
    '^@content/(.*)$': '<rootDir>/app/(site)/_content/$1',
    '^@types/(.*)$': '<rootDir>/app/_types/$1',
  },
  collectCoverageFrom: [
    'app/**/*.{js,jsx,ts,tsx}',
    '!app/**/*.d.ts',
    '!app/**/layout.tsx',
    '!app/**/page.tsx',
  ],
}

module.exports = createJestConfig(customJestConfig)
```

Create `jest.setup.js`:

```javascript
import '@testing-library/jest-dom'
```

### Example Unit Test

Create `app/(site)/_components/ui/__tests__/ToggleButton.test.tsx`:

```typescript
import { render, screen, fireEvent } from '@testing-library/react'
import ToggleButton from '../ToggleButton'
import { ThemeProvider } from '@context/ThemeContext'

describe('ToggleButton', () => {
  it('renders toggle button', () => {
    render(
      <ThemeProvider>
        <ToggleButton />
      </ThemeProvider>
    )
    
    const button = screen.getByRole('button')
    expect(button).toBeInTheDocument()
  })

  it('toggles dark mode on click', () => {
    render(
      <ThemeProvider>
        <ToggleButton />
      </ThemeProvider>
    )
    
    const button = screen.getByRole('button')
    fireEvent.click(button)
    
    expect(document.documentElement.classList.contains('dark')).toBe(true)
  })

  it('has proper accessibility attributes', () => {
    render(
      <ThemeProvider>
        <ToggleButton />
      </ThemeProvider>
    )
    
    const button = screen.getByRole('button')
    expect(button).toHaveAttribute('title')
    expect(button).toHaveAttribute('aria-label')
  })
})
```

---

## 2. Integration Testing

### Example Integration Test

Create `app/api/contact/__tests__/route.test.ts`:

```typescript
import { POST } from '../route'
import { NextRequest } from 'next/server'

describe('Contact API', () => {
  it('validates email format', async () => {
    const request = new NextRequest('http://localhost:3000/api/contact', {
      method: 'POST',
      body: JSON.stringify({
        name: 'Test',
        email: 'invalid-email',
        message: 'Test message',
      }),
    })

    const response = await POST(request)
    expect(response.status).toBe(400)
  })

  it('rate limits requests', async () => {
    // Test rate limiting logic
    const requests = Array(6).fill(null).map(() =>
      new NextRequest('http://localhost:3000/api/contact', {
        method: 'POST',
        body: JSON.stringify({
          name: 'Test',
          email: 'test@example.com',
          message: 'Test message',
        }),
      })
    )

    const responses = await Promise.all(requests.map(POST))
    const rateLimited = responses.some(r => r.status === 429)
    expect(rateLimited).toBe(true)
  })
})
```

---

## 3. E2E Testing with Cypress

### Installation

```bash
npm install --save-dev cypress
npx cypress open
```

### Example E2E Test

Create `cypress/e2e/portfolio.cy.ts`:

```typescript
describe('Portfolio Website', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000')
  })

  it('loads homepage', () => {
    cy.get('main').should('be.visible')
  })

  it('navigates to sections', () => {
    cy.get('a[href="#about"]').click()
    cy.get('#about').should('be.visible')
  })

  it('submits contact form', () => {
    cy.get('input[name="name"]').type('John Doe')
    cy.get('input[name="email"]').type('john@example.com')
    cy.get('textarea[name="message"]').type('Test message')
    cy.get('button[type="submit"]').click()
    cy.contains('Message sent successfully').should('be.visible')
  })

  it('toggles dark mode', () => {
    cy.get('button[title*="Dark"]').click()
    cy.get('html').should('have.class', 'dark')
  })

  it('is accessible', () => {
    cy.injectAxe()
    cy.checkA11y()
  })
})
```

### Cypress Configuration

Create `cypress.config.ts`:

```typescript
import { defineConfig } from 'cypress'

export default defineConfig({
  e2e: {
    baseUrl: 'http://localhost:3000',
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
})
```

---

## 4. Performance Testing

### Lighthouse CI

```bash
npm install --save-dev @lhci/cli@0.9.x @lhci/server@0.9.x
```

Create `lighthouserc.json`:

```json
{
  "ci": {
    "collect": {
      "url": ["http://localhost:3000"],
      "numberOfRuns": 3,
      "settings": {
        "configPath": "./lighthouse-config.js"
      }
    },
    "upload": {
      "target": "temporary-public-storage"
    },
    "assert": {
      "preset": "lighthouse:recommended",
      "assertions": {
        "categories:performance": ["error", { "minScore": 0.9 }],
        "categories:accessibility": ["error", { "minScore": 0.9 }],
        "categories:best-practices": ["error", { "minScore": 0.9 }],
        "categories:seo": ["error", { "minScore": 0.9 }]
      }
    }
  }
}
```

---

## 5. Test Coverage

### Generate Coverage Report

```bash
npm test -- --coverage
```

### Coverage Thresholds

Add to `jest.config.js`:

```javascript
coverageThreshold: {
  global: {
    branches: 70,
    functions: 70,
    lines: 70,
    statements: 70,
  },
}
```

---

## 6. CI/CD Integration

### GitHub Actions Workflow

Create `.github/workflows/test.yml`:

```yaml
name: Tests

on: [push, pull_request]

jobs:
  test:
    runs-on: ubuntu-latest
    
    steps:
      - uses: actions/checkout@v3
      
      - uses: actions/setup-node@v3
        with:
          node-version: '18'
          cache: 'npm'
      
      - run: npm ci
      
      - run: npm run lint
      
      - run: npm run test -- --coverage
      
      - run: npm run build
      
      - uses: codecov/codecov-action@v3
        with:
          files: ./coverage/coverage-final.json
```

---

## 7. NPM Scripts

Add to `package.json`:

```json
{
  "scripts": {
    "test": "jest",
    "test:watch": "jest --watch",
    "test:coverage": "jest --coverage",
    "test:e2e": "cypress open",
    "test:e2e:run": "cypress run",
    "test:lighthouse": "lhci autorun",
    "test:all": "npm run lint && npm run test:coverage && npm run build && npm run test:e2e:run"
  }
}
```

---

## 8. Best Practices

### ✅ Do's
- Write tests for critical paths
- Test user interactions, not implementation
- Use semantic queries (getByRole, getByLabelText)
- Keep tests focused and isolated
- Mock external dependencies
- Test accessibility

### ❌ Don'ts
- Don't test implementation details
- Don't use test IDs unless necessary
- Don't test third-party libraries
- Don't write tests that are too brittle
- Don't skip accessibility tests

---

## 9. Running Tests

```bash
# Unit tests
npm test

# Watch mode
npm run test:watch

# Coverage report
npm run test:coverage

# E2E tests
npm run test:e2e

# All tests
npm run test:all
```

---

## Target Coverage

- **Statements**: 70%+
- **Branches**: 70%+
- **Functions**: 70%+
- **Lines**: 70%+

---

This setup provides comprehensive testing coverage following industry best practices and senior-level standards.
