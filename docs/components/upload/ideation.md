# Upload component ideation

## Sources reviewed

- iX Figma component: https://www.figma.com/design/r2nqdNNXXZtPmWuVjIlM1Q/iX-Components?node-id=134765-17335&t=UeFeMNmssYkXsgww-11
- Horizon drag-and-drop file upload spec: https://www.figma.com/design/aQT3swXMXGBMUH53NpUGcq/DISW-Components?node-id=108298-522596&t=7fqmbU8BhLqi90NI-11
- Element file uploader: https://element.siemens.io/components/forms-inputs/file-uploader/
- Carbon file uploader guidance: https://carbondesignsystem.com/components/file-uploader/usage/
- Ant Design Upload API and examples: https://ant.design/components/upload/
- General design-system conventions from broader web reviews (Carbon, Ant Design, PatternFly, and common enterprise uploader patterns)

---

## Executive summary

The upload component is best understood as a workflow pattern rather than a single control. Across systems, the core recipe is consistent:

- a trigger area or button to pick files
- an optional drag-and-drop zone
- a validation/acceptance layer for file type and file size
- a file list with upload status and actions
- removal of files and error recovery
- clear keyboard and screen-reader support

The main design choice is whether iX should model one universal uploader or a small set of variants:

- click-to-select uploader
- drag-and-drop uploader
- single-file uploader
- multi-file uploader with list

The strongest common ground is: keep it simple, form-friendly, and strongly tied to other form controls.

---

## Explicit Single-file flows

Carbon says when only a single file is allowed, the upload area may be replaced by the uploaded file and the user can remove or replace it.

This is a stronger user experience than keeping a multi-file list when the business rule is a single file.

---

## 5) Noteworthy state and validation patterns

### Validation scenarios to support

- file type not allowed
- file size exceeds limit
- max number of files exceeded
- upload failed because of network or backend issue
- malformed or corrupted file

### Error handling guidance

- show the reason next to the item and/or next to the field
- keep the user in context rather than forcing them to discover the issue elsewhere
- do not hide the invalid item without a recovery path

Horizon specifically notes a toast message pattern for max file limit reached, which is useful as a system-level error but should be paired with inline feedback.

---

## 7) Internal decision questions

These are the questions we should settle as a team, because there is no single correct answer.

▶️ Should we describe recommendations for file lists at all??
  ▶️ Should item removal always be visible, or only in context of uploaded rows versus pending uploads?

▶️ How much validation should be built into the component versus delegated to form validation patterns and backend validation?

▶️ Should max-file-size and accept validation be inline only, or also surfaced as toasts or banners?

▶️ Should single-file upload auto-replace the control after success, or keep a persistent upload row plus replace action?

▶️ Do we need a strong visual difference between upload error and validation error, or can they share the same state semantics?

▶️ When should labels be truncated with ellipsis / when not?

---
