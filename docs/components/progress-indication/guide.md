---
doc-type: 'tab-item'
---

import DoAndDont from '@site/src/components/DoAndDont';

# Progress indicator - Usage

## Linear progress bar

The primary purpose of progress bars is to offer a clear indication of how much of the task has been completed and how much remains. Progress bars are commonly employed in various applications, ranging from software installations and file downloads to form submissions and multi-step processes.

![Progress bar anatomy](https://www.figma.com/design/wEptRgAezDU1z80Cn3eZ0o/iX-Documentation-illustrations?node-id=2094-345&t=pq3AmdWOVOjIx4S4-4)

1. **Label:** The label text describes the process the progress bar refers to. 
2. **Helper:**  The helper displays additional information about the process.
3. **Value indicator:** shows how much a determinated process has progressed. For indeterminated processes the indicator bar moves from left to right in a continuous loop.
4. **Background track:** the area that the indicator fills or moves across. For an determinated process it marks the expected length.

## Options

- **Alignment:** Linear progress bars can either be left or center aligned.
- **Display mode:** Set the progress bar to inline to display it without label and content, we typically use this option when nested in another component.
- **Label:** The label can optionally be hidden.
- **Helper:** The helper text can optionally be hidden. If the helper text is not shown below the progress bar, it is accessible as tooltip.
- **Height:** Progress bars come in five different heights `xs`, `sm`, `md`, `lg` and `xl`.
- **Value:** The min and max values can also be customized appropriately for whatever the progress bar is showing. By default, the min value starts at 0 and the max value is set to 100.
- **Indeterminate:** This progress bar animates continuously until the process is complete. It indicates that work is occurring without indicating a scope for completion or implying an estimate for how long it will take. We typically use it for unknown load times.
- **Error:** The error indicates that the action did not successfully complete. If an error occurs, an inline notification or error handling within the form should appear. As soon as a process fails, the indicator bar’s progress turns red. A failed icon is also shown.

## States

The linear progress bar comes in six different states: Default, Success, Error, Info, Warning and Pause.

## Behavior in context

Progress bars show real-time status of operations, maintaining consistent width within containers. Labels and helper text provide additional context when enabled.

**Re-sizing:** The width of a progress bar can be customized appropriately for its context. When the label is too long for the available horizontal space, it wraps to form another line. 

![Progress bar resizing](https://www.figma.com/design/wEptRgAezDU1z80Cn3eZ0o/iX-Documentation-illustrations?node-id=5650-16162&t=pq3AmdWOVOjIx4S4-4)



## Dos and Don’ts

<DoAndDont>
  <DoAndDont.Do>
    <DoAndDont.Item>Do make sure the progress bar clearly shows how much is done.</DoAndDont.Item>
    <DoAndDont.Item>Do place text close to the progress bar.</DoAndDont.Item>
    <DoAndDont.Item>Do keep a width based on content.</DoAndDont.Item>
  </DoAndDont.Do>
  <DoAndDont.Dont>
    <DoAndDont.Item>Don't neglect to provide clear error messages.</DoAndDont.Item>
    <DoAndDont.Item>Don't use long information, instead keep it short.</DoAndDont.Item>
    <DoAndDont.Item>Don’t use in constrained spaces indicating indeterminate loading state.</DoAndDont.Item>
    <DoAndDont.Item>Don't leave users wondering if a task is complete; provide clear feedback.</DoAndDont.Item>
  </DoAndDont.Dont>
</DoAndDont>


## Related

- [Spinner](../spinner)