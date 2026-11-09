# Tandem versions and preserved work

## Canonical source

[Neonat/tandem](https://github.com/Neonat/tandem) is the canonical repository. The current application is the root `tandem-care` package, with routes in `app/` and shared code in `components/` and `lib/`. At the review baseline, `847fd5b921ca1869b83c41ebc60e4869785a67c1`, this repository retains the project's 43-commit history.

The nested [`tandem/`](../tandem/README.md) directory is an earlier, independent local-first prototype. It has its own package and browser storage model; it is not a second setup step for the current app. Both packages happen to declare version `0.1.0`; those package versions do not establish which implementation is current.

## Private deployment snapshots

`Neonat/tandem-app` and `Neonat/tandem-app-1` began this review as private one-commit snapshots. Their reviewed default-branch trees were identical (`caccecaf36d541fc26318f45c2c5c6a326f86a17`):

| Repository | Reviewed commit | Relationship |
| --- | --- | --- |
| `Neonat/tandem-app` | `cef2d9039034b7b89f4b6841c4232174581eeefe` | Snapshot with partial localisation work |
| `Neonat/tandem-app-1` | `ad76debb5594bc0cbff644730dd8d7d1d5402f04` | Same source tree as `tandem-app` |

Use the canonical repository for future development. The snapshots remain unarchived because both have GitHub Production deployment records associated with Vercel. Their latest reported deployment statuses were failures at review time; this does not establish whether the Vercel projects are disconnected or unused. Confirm or repoint deployment connections before archiving either copy.

## Preserved localisation experiment

[`localisation-snapshot.patch`](localisation-snapshot.patch) preserves the exact five-file source delta from the canonical baseline to either snapshot:

- Adds `lib/i18n.ts`: English and Chinese dictionaries, interpolation, English fallback and a hook using the saved caregiver language.
- Wires translated labels into navigation, selected Settings headings/controls, the splash screen and the Health page title.
- Includes the snapshot's splash layout/focus changes, Health icon adjustment and removal of an unused Settings import.

This is partial UI localisation. Most page content remains English. The existing language picker lists eleven languages, but this experiment only supplies English and Chinese dictionaries; other choices fall back to English. It has not been adopted into the current application or represented as complete language support.

The only other tree difference was the snapshot's absence of `tandem/next-env.d.ts`, a generated Next.js declaration file. That deletion is excluded from the preservation patch.

### Reviewing or adopting the patch

The patch was checked against the canonical baseline with `git apply --check` and applied in a temporary checkout; all five resulting files matched the snapshot byte for byte. No runtime or language-quality validation is implied by that preservation check.

For a future adoption, create a feature branch, review the unrelated splash changes separately, test language changes and persistence in the browser, check accessibility and text wrapping, and run the current app's tests, typecheck, lint and build. Submit functional changes through a pull request before merging.

To inspect the preserved experiment at its original baseline:

```bash
git switch -c codex/review-tandem-localisation 847fd5b921ca1869b83c41ebc60e4869785a67c1
git apply --check /absolute/path/to/localisation-snapshot.patch
git apply /absolute/path/to/localisation-snapshot.patch
```

Use the patch from the documentation revision you are reading, since it was added after the original baseline. Applying it to newer code may require reconciliation.
