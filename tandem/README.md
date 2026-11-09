# Tandem — early local-first prototype

This directory preserves the early Tandem prototype introduced in commit [`6fe18b1`](https://github.com/Neonat/tandem/commit/6fe18b1). The current application lives at the repository root; start with the [main README](../README.md).

The prototype is an independent Next.js 15 application with its own `package.json`, lockfile and `src/` tree. It explores shared care records, Ground Truth decision records, tasks, QR handover tokens and citation-based keyword queries. State is stored in the browser's IndexedDB, and a service worker is registered for the local app. Its state model is separate from the current root application's localStorage and Supabase integrations.

This code remains as historical reference. The root TypeScript and ESLint configurations exclude this directory; root checks do not validate it. If exploring it locally, use a separate port/origin from the current app so its service worker and browser data remain separate.

See [version relationships](../docs/versions.md) for the other Tandem copies and the preserved localisation experiment.
