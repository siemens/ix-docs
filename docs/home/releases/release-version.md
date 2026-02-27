# Versioning and releases

> Our Siemens Industrial Experience design team strive to provide a stable and reliable system that is constantly evolving to meet your needs. This section describes our practices for new features and changes, deprecating and removing outdated features, and our long-term support for older versions.

#

## Versioning

We use [semantic versioning](https://semver.org/) for our releases. Version numbers indicate the level of changes introduced by the release and follow the standard major, minor and patch format.

| Release type | Details                                                                                                                                                                                                                                                                                                          |
| ------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Major        | Contains significant new features and changes, might include breaking changes. Updating requires some developer efforts and includes backward incompatible changes to APIs, file paths, component behavior and/or dependencies. Formerly deprecated components are removed when updating to a new major version. |
| Minor        | Contains smaller features and changes. Updating requires no developer efforts. Minor versions can include components changing their status to deprecated. They are fully backward compatible.                                                                                                                    |
| Patch        | Contains bug fixes. Updating requires no developer efforts.                                                                                                                                                                                                                                                      |

## Release frequency

We follow a time-based release schedule consisting of:

- One major release every 6 months
- 1-3 minor releases for each major release
- Patch releases as hotfixes when necessary

## Support policy

All major releases receive support for approximately 12 months. We distinguish between two support stages for major releases:

| Support stage | Support window | Details                                        |
| ------------- | :------------: | ---------------------------------------------- |
| Latest        |    6 months    | Receives regular minor releases                |
| Maintenance   |    6 months    | Receives patch releases to fix critical issues |
| End of Life   |       -        | Receives no support and no further releases    |

Our support policy applies to all components of the design system including the code base, Figma design kits and our documentation.

We recommend always following the active release. When a version moves from the active stage to the LTS stage, projects should start migrating to the new active major version.

## Supported versions

| Version |   Status    | Released     | Maintenance support since | End of life since |
| ------- | :---------: | ------------ | ---------------- | ----------------- |
| V4.0.0  |   Latest    | November 2025 | -                | -                 |
| V3.0.0  | Maintenance  | May 2025 | November 2025     | -                 |
| V2.0.0  | End of Life | September 2023 | May 2025     | November 2025      |
