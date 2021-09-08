# ChickenTinder API

This repo contains the backend REST API that powers the ChickenTinder mobile app.

## Running the Server

To start a development server, with automatic code reloading, run the following command.

```bash
npm start
```

To start the server for production, make sure to build the code before running it. You can use the following commands.

```bash
npm run build && npm run start:prod
```

## Testing

You can run all tests with the following command.

```bash
npm test
```

Tests are defined by the `.spec.ts` extension.

## Validation Checks

This happens during the CI job, which will prevent incorrect PRs from being merged in. You can run this process locally with the following commands.

```bash
npm run build
npm run validate
npm test
```
