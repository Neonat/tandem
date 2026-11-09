# Tandem versions and shared source

## Public collaborative repository

[Neonat/tandem](https://github.com/Neonat/tandem) is the public shared repository for this Build for Good project. It retains the project history and the collaborator access for `papermelon` and `JAMES-WLC`.

The current application is the root `tandem-care` package, with routes in `app/` and shared code in `components/` and `lib/`. The nested [`tandem/`](../tandem/README.md) directory is an earlier independent local-first prototype with its own package and browser storage model. It is not an additional setup step for the current app.

## Shared-main integration

The repository organisation review on 10 November 2026 compared source history rather than documentation timestamps. [papermelon/tandem-app](https://github.com/papermelon/tandem-app) retained five later main-branch commits after the common baseline `847fd5b921ca1869b83c41ebc60e4869785a67c1`, ending at `7c1d8fbbe37d16026124808f8dd5203b31228674`.

Those shared-main commits are incorporated here with their history. Their net source changes cover partial English/Chinese localisation, the splash layout/focus behaviour and the Health page icon/title. The integration retains the existing `recipient` state and `CareProfileSummary` import used by Settings; the incoming version had removed those references while its later JSX still needed them.

Unmerged experimental branches in either repository remain separate. The collaborator-owned repository has not been renamed, made private or otherwise modified by this organisation pass.

## Private deployment snapshots

The following owned repositories are private historical deployment copies:

| Current repository | Previous name | Original snapshot commit |
| --- | --- | --- |
| [tandem-snapshot-a](https://github.com/Neonat/tandem-snapshot-a) | `tandem-app` | `cef2d9039034b7b89f4b6841c4232174581eeefe` |
| [tandem-snapshot-b](https://github.com/Neonat/tandem-snapshot-b) | `tandem-app-1` | `ad76debb5594bc0cbff644730dd8d7d1d5402f04` |

Their application source matched each other at review time. They preserve the partial-localisation experiment and existing Vercel deployment records, rather than separate products or a preferred development branch. They remain unarchived so their deployment connections can be deliberately retired or repointed later.

## Historical localisation patch

[`localisation-snapshot.patch`](localisation-snapshot.patch) preserves the original exact five-file source delta from the common baseline to the private snapshots. It was previously checked with `git apply --check` and applied in a temporary checkout; all five resulting files matched the snapshot blobs byte for byte.

That experiment is now represented in the shared-main integration above. The patch remains a historical preservation artifact and should not be applied again to the current source. Its original comparison excluded the generated `tandem/next-env.d.ts` deletion in the snapshots.

Language support remains partial: navigation and selected Settings/onboarding labels have English and Chinese dictionaries, while much of the interface is still English. The language picker lists eleven languages; unsupported choices fall back to English. Existing mounted consumers read the saved language on mount and require a full page reload after changes. This does not establish complete translation quality or coverage.

To inspect the historical delta independently, use a disposable checkout at `847fd5b921ca1869b83c41ebc60e4869785a67c1` and the preserved patch from this documentation revision. Use the public shared repository and its current setup guide for development.
