# ChickenTinder API

This repo contains the backend REST API that powers the ChickenTinder mobile app.

## Install Dependencies

```bash
npm install
```

## Running the Server

```bash
# Development environment
npm start

# Watch mode
npm run start:dev

# Production mode
npm run build && npm run start:prod
```

## Test

Tests are defined by the .spec.ts extension. You can run them with the following commands.

```bash
# Unit tests
npm test

# e2e tests
npm run test:e2e

# Test coverage
npm run test:cov
```

## Validation Checks

This happens during the CI job, which will prevent incorrect PRs from being merged in. You can run this process locally with the following commands.

```bash
npm run build
npm run validate
npm test
```
