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

## Anatomy

Across the references, the uploader usually includes these structural elements:

- Label
- Helper text
- Input button
- Drag-and-drop target area
- File rows or stacked uploaded items (not part of the component)

From the iX Figma specification:

- The uploader is treated as a form control with a label and optional hint text.
- If there is an error, the message appears after the label, or in the equivalent place if no label is present.
- The component already includes the idea of a drop area and the notion that the control can wrap text across lines.

From Horizon / Element:

- The upload area can be a dedicated drop zone with a visible action button.
- Uploaded files appear as list items below the drop area.
- The uploaded file bar contains status, message, and removal affordance.

From Carbon:

- The file uploader normally shows files below the control.
- Each uploaded file has a remove x action.
- The relation to the rest of the form is intentional; height should align with other form inputs.

---

## Variants

- single file
  - once a single file is successfully uploaded, the drop zone may disappear or convert to a single uploaded item state
  - the user can reopen or replace the file via action button or replace link
  - file limit is enforced before upload
- Multi-file uploader
  - multiple files in a single drop zone
  - queueing or list ordering
  - file count restriction with maxCount or file limit rules
  - each file row can show size, status, and actions

---

## Behavior in context

- Interaction:
  - click-to-select
  - drag-and-drop

## States

Idle, drag over, in progress, success, error, queued, disabled

## Options and properties to consider

### Required / highly likely

- label: field title
- description or hint: optional contextual guidance
- accept: allowed file types (mime types or extensions)
- multiple: whether more than one file can be selected
- maxFiles: maximum file count allowed
- maxFileSize: file size cap per item
- disabled: disables interaction
- required: marks the field as required
- mode: click, drag-drop, or both
- buttonLabel: text shown on the action trigger
- onSelect / onAdd / onRemove / onError / onUploadComplete: state lifecycle callbacks

### Recommended / common additional options

- allowRemove: enable delete action
- allowReplace: replace existing file in single-file mode
- showProgress: whether to render progress for in-flight file items
- showFileName: optional display of filename in the item row
- showFileSize: display size metadata alongside file name
- showValidationMessage: inline field validation or soft error message
- allowDragAndDrop: whether drag and drop is enabled
- preview: whether to support image preview or thumbnail rendering
- allowDirectoryUpload: advanced, less common, but present in some systems
- customRequest: for full control over upload request flow
- beforeUpload: validation hook before uploading begins
- itemRender or customRow: flexible row content for custom implementations
- defaultFileList: pre-seeded uploaded files

---

## UX recommendations from the reviewed systems

Do
- Keep the field consistent with form controls (for consistency with other controls)
- Be explicit about file constraints, position it near the control, and don't hide it in a tooltip:
  - describe allowed file type
  - describe max file size
  - say whether multiple files are allowed
  - say whether drag-and-drop is supported
- Inline feedback is better than a toast for most validation errors unless it is system-level and the upload as a whole is blocked

## Design recommendations for individual files

### States

Recommended states (aligns with Horizon):

- queued
- uploading
- uploaded/success
- error
- removed

### Behavior in context

- Text overflow: Truncate long filenames with ellipsis and show full name on hover (-> long file names are common and will otherwise break layout)
- Interaction:
  - Keyboard: Tab to focus, Enter or Space to remove the item

### 4.7 Drop zone behavior must feel active

Element and Horizon call out active drag states and highlight changes when a file is over the drop zone.

This is a UX affordance, not decoration:

- it tells users the target is valid
- it communicates the system recognized the dragged item
- it makes drag-and-drop feel reliable

### 4.8 Single-file flows should be explicit

Carbon says when only a single file is allowed, the upload area may be replaced by the uploaded file and the user can remove or replace it.

This is a stronger user experience than keeping a multi-file list when the business rule is a single file.

---

## 5) Noteworthy state and validation patterns

### Status states to align on

The design systems converge on a small set of statuses:

- idle / none selected
- upload in progress
- uploaded / success / done
- invalid / rejected / error
- removed / cancelled
- queued (when multi-file ordering matters)

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

## 6) Design-system findings from the reviewed sources

### iX Figma component

The iX design already suggests a strong minimal baseline:

- single uploader form control
- text can wrap to more than one line
- strong focus handling and mouse state design
- keyboard support and reading order were considered
- tokenized styling is already planned

This means the existing design direction is not a raw file input; it is a deliberately styled, enterprise-aware uploader control.

### Horizon

Horizon adds the most complete interaction specification for drag-and-drop and uploaded file bars.

Notable points:

- drag-and-drop is a first-class behavior
- multiple upload and single upload variants are both considered
- file type and size limits are explicitly part of the specification
- uploaded file states include progress, success, and error
- queue ordering is a valid concept for multiple uploads
- the upload bar is treated as a separate interactive visual element with progress semantics

### Element

Element is especially useful for product-level guidance.

Notable points:

- uploader is a form component with standard file-based content
- drag-and-drop is explicitly supported as a first-class mechanism
- option for single or multiple uploads is part of the system logic
- uploaded files are represented as statusful rows below the drop area
- label, hint, and error placement are clearly considered
- the file uploader is comfortable as a standalone element, not only inside forms

### Carbon

Carbon gives the clearest UX guidance for content, placement, and behavior.

Notable points:

- use a tertiary or primary button depending on page context
- left-align files relative to the control
- use the same height as adjacent form inputs
- button label and helper text should be concise
- ellipsis + tooltip on long filenames
- keyboard support for the remove icon is explicitly required
- single-file upload can replace the drop zone after successful upload

### Ant Design

Ant Design is the most useful source for what a mature upload API looks like in production.

Notable points:

- very strong support for acceptance rules and lifecycle hooks
- file list and item states are first-class concepts
- custom request path and async hook support are normal
- examples cover drag and drop, image preview, max count, manually uploading, custom progress bars, and directory upload
- it shows that upload is really a stateful pattern, not just an input

---

## 7) Internal decision questions

These are the questions we should settle as a team, because there is no single correct answer.

▶️ Should iX ship one general uploader with modes, or separate variants for single-file and multi-file upload?

▶️ Should drag-and-drop be default-enabled for all uploaders, or only in a dedicated drag-and-drop variant?

▶️ Should the component support a built-in file list by default, or should the file list be optional depending on use case?

▶️ Should we prioritize a drop zone pattern or a form-button pattern as the default appearance?

▶️ Do we want one standard file-status row pattern, or should it be fully customizable for custom upload flows?

▶️ How much validation should be built into the component versus delegated to form validation patterns and backend validation?

▶️ Should max-file-size and accept validation be inline only, or also surfaced as toasts or banners?

▶️ Should single-file upload auto-replace the control after success, or keep a persistent upload row plus replace action?

▶️ Do we need a strong visual difference between upload error and validation error, or can they share the same state semantics?

▶️ Should filenames be truncated with ellipsis by default, or should we let them wrap when layout allows?

▶️ Should item removal always be visible, or only in context of uploaded rows versus pending uploads?

▶️ Is a dedicated progress bar necessary in the base iX component, or is a lighter status badge enough for the initial release?

---

## 8) Recommended direction for iX

Based on the combined evidence, the most balanced direction for iX is:

1. Define a base uploader primitive that supports a trigger button and optional helper text.
2. Offer a drag-and-drop mode as a variant, not as a completely separate component family.
3. Support both single-file and multi-file modes through a clear mode or maxFiles constraint.
4. Keep file rows as a built-in pattern because upload status is a core workflow requirement.
5. Provide standard UX states: idle, uploading, success, error, removed.
6. Keep validation inline and near the field or file item.
7. Make keyboard interaction and remove behavior first-class requirements.
8. Use text constraints such as accept, max size, and max count as visible helper copy instead of hidden rules.

This approach keeps iX consistent with enterprise uploader conventions without overbuilding the component beyond the probable default use cases.

---

## 9) Short design recommendation list

If we want a concise working proposal for the component spec, this is the shortlist:

- Default pattern: clickable trigger + optional helper text + file list below
- Optional mode: drag-and-drop zone
- Support both single-file and multi-file
- File size and accepted types are explicit and visible
- Error feedback appears inline close to the field or item
- Long filenames use ellipsis and tooltip
- Remove action is visible and keyboard accessible
- Progress and success states are explicit, even in simple form
- Form height should match adjacent inputs

---

## 10) Bottom line

The strongest cross-system pattern is not “a single file input with a button,” but “a stateful file workflow.” The uploader should be designed as a small upload system with clear states, validation, file rows, and actions.

The iX component should likely aim for a simple but comprehensive default that covers the most common actual use cases, while leaving space for richer upload flows through variants and extension points.
