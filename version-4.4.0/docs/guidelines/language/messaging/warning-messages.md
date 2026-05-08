# Warning messages

> Warning messages inform users of potential issues or risks. In industrial environments, warning messages help operators understand, anticipate and prevent problems before they escalate.

#

## Best practice template

We follow this three-step approach when creating our warning messages. This ensures users clearly understand the consequences of their actions. Although not every warning message in a product requires all three steps, aim for this whenever possible.

| Step | Purpose | Description | Example |
|------|---------|-------------|---------|
| 1. | Heading | Explain why the warning has been triggered. | Reset device |
| 2. | Description  | Provide context to help users understand the consequences of ignoring the warning. | A reset restores the device to its factory settings, deleting all applications and user data. This action cannot be undone. |
| 3.  | Instructions | Explain how users can avoid these consequences and find solutions with links, buttons and suggestions. | Reset   Cancel |

## General rules

Use warning messages only when an action or awareness is genuinely needed.

- Temperature readings from Zone 3 approaching 30°. Check cooling system and ensure all windows and doors are closed.

Use clear, understandable titles and avoid generic warning messages.

- Temperature approaching 30°

- Temperature warning

Provide specific and clear consequences and solutions.

- Heading: Leave without saving
Description: You’re about to leave this page. Unsaved changes will be lost. Go back to save changes or exit without saving.
Button: Leave without saving
Button: Go back

- Do you want to leave the page?
Button: Continue
Button: OK
Button: Cancel

Avoid using words like "may", "might" or "possibly will" when explaining problems.

- Your changes will be lost if not saved.

- Your changes might be lost if not saved.

Include links to help pages or troubleshooting steps to avoid the consequences when possible.

- Heading: Login attempt from unknown device
Description: Review access settings or security guidelines to prevent unauthorized access.
Button: Open guidelines
Button: Open access settings

- Heading: Unauthorized access attempt on Control Panel A
Description: Review access logs and verify user credentials.
Button: Open access logs

Avoid repeating your message in both the heading and description.

- Heading: Pressure in Tank B approaching limit
Description: Initiate release protocol to avoid exceeding threshold.

- Heading: Pressure in Tank B approaching limit
Description: Pressure in Tank B approaching limit so initiate release protocol.

Avoid asking "Are you sure?" as this is vague, has no context, consequences and causes hesitation.

- This action will delete all sensor data from the last 24 hours. Do you want to proceed and delete?

- Are you sure you want to delete?

Use clear, urgent wording for irreversible actions.

- Heading: Reset device
Description: A reset restores the device to its factory settings, deleting all applications and user data. This action cannot be undone.
Button: Reset
Button: Cancel

- Press reset to proceed.

Avoid using all uppercase text as it can be difficult to read and may seem like we’re shouting.

- WARNING!! FAILURE! IMMEDIATE ACTION REQUIRED!!

## Dos and Don’ts

* Do be consistent by re-using the verbs of the message and buttons
* Do make sure users understand the warning’s context
* Do give users actions to avoid any negative consequences
* Don’t use "please" with the call to action or options
* Don’t use patronizing questions such as "Are you sure…?"

## Related

* [Non-critical information messages](./non-critical-information-messages.mdx)
* [Error messages](./error-messages.mdx)
* [Empty-state messages](./empty-state-messages.mdx)
* [Form validation (component)](../../../components/forms-validation/guide.md)
* [Message modal (component)](../../../components/message-modal/guide.md)
* [Message bar (component)](../../../components/messagebar/code.mdx)
* [Toast (component)](../../../components/toast/guide.md)
* [Icon usage](../../../icons/icon-usage.mdx)
