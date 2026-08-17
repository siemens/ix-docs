---
doc-type: 'tab-item'
description: 'Usage guide for upload component.'
---

# Upload - Usage

![Anatomy]()

- Label
- Helper text
- Input button
- Drag-and-drop target area
- File rows or stacked uploaded items (not part of the component)

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

## Options

- Accept: allowed file types (mime types or extensions)
- Directory upload: If the browser supports it, allow users to upload a folder of files.
- Label: Separate text for disabled, loading, select file, failed, success
- Multiline: If the label is long, it can wrap to multiple lines.

## Behavior in context

- **Interaction:**
  - Click-to-select
  - Drag-and-drop

Recommendation for file items:
- Text overflow: Truncate long filenames with ellipsis and show full name on hover (-> long file names are common and will otherwise break layout)
- Interaction:
  - Keyboard: Tab to focus, Enter or Space to remove the item

## States

For upload area: Drag over, loading, success, error, queued (when multi-file ordering matters), disabled

File items should have row-level states for file-specific issues: queued, uploading, uploaded/success, error, removed

## Dos and Don’ts

Do
- Keep the field consistent with form controls (for consistency with other controls)
- Be explicit about file constraints, position it near the control, and don't hide it in a tooltip:
  - describe allowed file type
  - describe max file size
  - say whether multiple files are allowed
  - say whether drag-and-drop is supported
- Inline feedback is better than a toast for most validation errors unless it is system-level and the upload as a whole is blocked
- Form height should match adjacent inputs
