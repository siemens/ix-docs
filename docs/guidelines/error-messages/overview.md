---
title: Error messages
---

## Error messages

Error messages inform users when a system encounters a problem or unexpected condition. Unlike general notifications, error messages must both attract user attention and prompt corrective actions.

### Best practice template

We follow this three-step approach when creating our error messages. This empowers users when encountering errors and gives them the knowledge and confidence they need to move on. For more guidance on error messages with different severity levels, see states and events.

Although not every error message in a product requires all three steps, aim for this whenever possible.

1. Heading — What?

- Be specific and tell users exactly what happened. Effective error messages should clearly describe the issue.

  Example: No data received

2. Description — Why?

- Give a clear reason for the error and explain any consequences. Provide context to help users understand the error.

  Example: Unable to receive data as sensor is inactive.

3. Instructions — How?

- Explain how users can move forward, resolve issues, or take action with links, buttons and suggestions.

  Example: Check sensor


## General rules

Use the template when the error stops users moving forward.

DO:

HEADING: No data received

DESCRIPTION: Unable to receive data as sensor is inactive.

INSTRUCTIONS: Check sensor / Open sensor management

Avoid generic error messages or codes; instead provide specific data, value and solutions.

DO: Failed to export data due to a connection error.

DON’T: Something happened.

DON’T: An error occurred.

DON’T: Error 172.00046ERR

Give clear reasons for input validation errors to ease user frustration.

DO: Value out of range. Enter a number between 1 and 100.

DO: Number between 1 and 100 required.

DON’T: Invalid value.

Avoid repeating your message in both the title and description.

DO: Bad request: Sorry, we could not process the request. Please check and try again.

DON’T: Bad request. Sorry, bad request.

Avoid blaming the user with “you” and “your” — use passive voice as an exception.

DO: Device could not be deleted.

DO: Failed to delete device.

DON’T: You have failed to delete the device.

Provide specific and clear solutions to avoid making assumptions about user knowledge.

DO: Unsupported file type. Upload supported file types: .pdf and .docx.

DON’T: Unsupported file type. Upload supported file type.

If the error is our responsibility and fault, use authentic and transparent apologies (say “sorry”).

DO: Sorry, we’ve moved this page. Please check the changelog for the new location.

DON’T: Sorry you entered the wrong address.

Use “please” only for extra or unexpected user actions that correct system-caused disruptions.

DO:

HEADING: Page Not Found

DESCRIPTION: We could not find what you were looking for.

INSTRUCTIONS: Please contact the owner of the site that linked you to the original URL and let them know their link is broken.

Show urgency with wording, e.g. “immediately” if there are consequences from ignoring the error.

DO: Update your software version immediately to avoid losing data.

Use positive framing and avoid negative and alarming words like “wrong” and “catastrophic”.

DO: Value out of range. Enter a number between 1 and 100.

DON’T: Wrong number.

Use softening words, i.e. unfortunately and avoid negative contractions (“do not” instead of “don’t”).

DO: Unfortunately, you cannot open this page.

DON’T: You don’t have access.

DON’T: You can’t open this page.

Be honest and transparent when you cannot explain the error or how to move the user forward.

DO: Something went wrong and we couldn't complete your request. Try again later.

DON’T: Operation stopped for unknown reason.

Avoid generic wording telling users to contact their admin or support as this is unhelpful.

DO: Open the chat window and paste the error into the input field for support.

DO: Send error log to administrator.

DON’T: Contact admin to solve this issue.

Avoid overpromising solutions to errors unless the team is working on the problem.

DON’T: Our team is working overtime to fix this for you and it will be fixed by morning.


## Dos and Don’ts

- **Do** make all messages consistent in terms of grammar and punctuation
- **Do** take the blame when the error originates from your app or product
- **Do** give users a reversible solution whenever possible
- **Don’t** panic your users with dramatic or urgent language
- **Don’t** use all upper case characters


## Related

- Icon usage: https://ix.siemens.io/docs/icons/icon-usage
- Warnings
- General notifications
- Error pages
- Empty states
- Form validation
- Modal (message)
- Message bar
- Toast
