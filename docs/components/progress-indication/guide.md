---
doc-type: 'tab-item'
---

import DoAndDont from '@site/src/components/DoAndDont';

# Progress indicator - Usage

Progress indicators inform users about the status of ongoing processes, such as loading data, submitting forms or processing non-blocking operations.

![Progress indicator anatomy](https://www.figma.com/design/wEptRgAezDU1z80Cn3eZ0o/iX-Documentation-illustrations?node-id=2094-345&t=pq3AmdWOVOjIx4S4-4)

1. Label
2. Helper text
3. Fill
4. Track
5. Content slot

The basic anatomy of progress indicators consists of a value indicator moving along a background track. For determinate processes, the track represents the total expected length while the indicator shows the current progress. For indeterminate processes, where the completion time is unknown, the indicator moves along the track in a continuous loop to show that the process is ongoing.

## Options

We offer both a **linear progress bar** and a **circular progress indicator**, each supporting the same options. As a general guideline, the linear progress bar is ideal for determinate loading in horizontal layouts, while the circular indicator is better suited for indeterminate loading in compact or centered layouts.

- **Status:** Use the status to reflect the outcome or current condition of a process such as success, error, warning, info or paused.
- **Alignment:** Progress indicators are aligned either left, center or right, relative to their label and helper text.
- **Display mode:** The default mode includes full styling with padding and spacing. The inline mode offers a more compact version without text, padding, or margins—ideal for use within other components such as the [card](../card/index.mdx).
- **Label:** Add a label to describe the process being tracked, helping users understand what operation is in progress.
- **Helper text:** Use helper text to provide additional context, such as percentage complete, estimated time remaining, or validation states. 
- **Show text as tooltip:** This option hides the helper text and displays it only when the user hovers or focuses the progress indicator.
- **Size:** Progress indicators are available in five predefined heights `xs`, `sm`, `md`, `lg` and `xl`.
- **Value, min and max:** The progress range is customizable. By default, it spans from 0 to 100, adjust the min and max values to suit the specific use case.
- **Indeterminate:** In this mode, the indicator animates continuously to show that a process is ongoing, without conveying how long it will take. We typically use this when the duration or progress of the task is unknown.
- **Content slot:** Use this slot to display additional content such as percentage values or custom elements like icons.

## Behavior in context

Progress bars show real-time status of operations, maintaining consistent width within containers. Labels and helper text provide additional context when enabled.

**Re-sizing:** The width of a progress bar can be customized appropriately for its context. When the label is too long for the available horizontal space, it wraps to form another line. 

![Progress bar resizing](https://www.figma.com/design/wEptRgAezDU1z80Cn3eZ0o/iX-Documentation-illustrations?node-id=5650-16162&t=pq3AmdWOVOjIx4S4-4)



## Dos and Don’ts

<DoAndDont>
  <DoAndDont.Do>
    <DoAndDont.Item>Do use progress indication consistently for similar processes.</DoAndDont.Item>
    <DoAndDont.Item>Do use linear progress bars for determinate processes where progress can be measured.</DoAndDont.Item>
    <DoAndDont.Item>Do use circular progress indicators for indeterminate processes or quick loading states.</DoAndDont.Item>
    <DoAndDont.Item>Do use linear progress bars in horizontal layouts and circular indicators in compact spaces or centered layouts.</DoAndDont.Item>    
  </DoAndDont.Do>
  <DoAndDont.Dont>
    <DoAndDont.Item>Don't use progress indicators for operations shorter than one second.</DoAndDont.Item>
    <DoAndDont.Item>Don't mix inline and standard display modes in the same context.</DoAndDont.Item>
    <DoAndDont.Item>Don't overcrowd the center content slot with too much information.</DoAndDont.Item>
    <DoAndDont.Item>Don’t stop at visual completion, always provide clear confirmation that the task is finished, such as a success message or the display of loaded content.</DoAndDont.Item>
  </DoAndDont.Dont>
</DoAndDont>


## Related

- [Spinner](../spinner)