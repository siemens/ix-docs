# Upload - Usage

> Usage guide for upload component.

# Upload - Usage

Uploads help users add files to a form or workflow from their device. Use them when users need to provide one or more files as part of a task, and make the file rules and upload status visible near the control.

![Upload anatomy](https://www.figma.com/design/wEptRgAezDU1z80Cn3eZ0o/iX-Documentation-illustrations?node-id=8251-222)

1. Drag-and-drop target area
2. Instruction text
3. Button

## Variants

- **Single file:** Use when the task needs one file only, e.g. a profile image, configuration file or certificate. After a successful upload, replace the drop zone with the uploaded item or provide a clear replace action.
- **Multiple files:** Use when users are able to submit more than one file. Show the uploaded files in a list so users can review each file’s name, size, status and available actions.

## Options

- **Accepted file types:** Describe the permitted file types with familiar names and extensions, e.g. “PDF or PNG”. Use the accepted file types to prevent unsupported files from being uploaded.
- **Directory upload:** Allow folder selection when the task involves a complete set of files and the target browser supports it. Use multiple-file upload when users need to choose individual files.
- **Label:** Use short, specific labels for the default, checking, success, failed and disabled states. Keep the action clear, e.g. “Select file” or “Select files”.
- **Multiline:** Use multiline labels when the available width is limited or the instruction needs more context. Keep the label concise so the upload area remains easy to scan.

:::tip

Make the upload form-ready by using [custom fields](../custom-field/), e.g. to add a label and helper text and to integrate with [form validation](../forms-validation).

:::

## Behavior in context

- **Interaction:** Users select files by clicking the button or dragging files into the target area. Keep both methods available. Although drag-and-drop is useful, it isn’t available or convenient in every environment.
- **Overflow:** Let labels, helper text and validation messages wrap onto multiple lines. Keep file names readable and provide an action such as remove or replace instead of hiding important text with a tooltip.
- **Placement:** Place uploads near the related form fields or task action. Use [form fields](../forms-field) when the upload needs a label, helper text or validation message.
- **Responsiveness:** Let the upload area fill the available form width and use the multiline option when its label becomes difficult to scan at narrow widths. Keep the control height aligned with nearby fields when it appears in a form.
- **Feedback:** Show loading or checking progress and file-level errors next to the affected file or upload area. Use a [toast](../toast) only for system-level feedback that doesn’t need to stay connected to a specific file.

## States

Uploads have six states: Default, drag over, checking, success, fail and disabled. The checking states keep users informed while the file is being inspected, while success and fail communicate the result of the upload. Multi-file implementations can also show queued or completed statuses on individual file rows.

![Upload states](https://www.figma.com/design/wEptRgAezDU1z80Cn3eZ0o/iX-Documentation-illustrations?node-id=8251-245)

## Dos and Don’ts

  
    Do state the allowed file types, maximum size and whether users can select multiple files
    Do keep upload feedback close to the upload area or the affected file
    Do provide a replace or remove action after users select a file
    Do keep the upload area aligned with adjacent form controls
  

  
    Don’t hide file restrictions in a tooltip
    Don’t rely on drag-and-drop as the only way to select files
    Don’t use toast messages for a file-level validation error
  

## Related

- [Custom field](../custom-field)
- [Form field](../forms-field)
- [Validation](../forms-validation)
- [Select](../select)
- [UX writing](../../guidelines/language/writing-style-guide-getting-started.md)
- [Accessibility](../../guidelines/accessibility)
