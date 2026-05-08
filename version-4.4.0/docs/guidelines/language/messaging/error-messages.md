# Error messages

> Error messages inform users when a system encounters a problem or unexpected condition. Unlike general notifications, error messages must both attract user attention and prompt corrective actions.

#

## Best practice template

We follow this three-step approach when creating our error messages. This empowers users when encountering errors and gives them the knowledge and confidence they need to move on. For more guidance on error messages with different severity levels, see states and events.

Although not every error message in a product requires all three steps, aim for this whenever possible.

| Step  | Purpose | Description | Example  |
| :--------- | :---------- | :--------- |:--------- |
| 1. | Heading | Be specific and tell users exactly what happened. Effective error messages should clearly describe the issue. | No data received |
| 2. | Description | Give a clear reason for the error and explain any consequences. Provide context to help users understand the error.| Unable to receive data as sensor is inactive.  |
| 3. | Instructions | Explain how users can move forward, resolve issues, or take action with links, buttons and suggestions.  | Check sensor   |

## General rules

Use the template when the error stops users moving forward.

 
- Heading: No data received
Description: Unable to receive data as sensor is inactive.
Instructions: Check sensor / Open sensor management
 

Avoid generic error messages or codes, instead provide specific data, value and solutions.

- Failed to export data due to a connection error.

- Something happened.
- An error occurred.
- Error 172.00046ERR

Give clear reasons for input validation errors to ease user frustration.

- Value out of range. Enter a number between 1 and 100.
- Number between 1 and 100 required.

- Invalid value.

Avoid repeating your message in both the title and description.

 
- Bad request: Sorry, we could not process the request. Please check and try again.
 
 
- Bad request. Sorry, bad request.
 

Avoid blaming the user with “you” and “your” and use passive voice as an exception.

- Device could not be deleted.
- Failed to delete device.

- You have failed to delete the device.

Provide specific and clear solutions to avoid making assumptions about user knowledge.

 
- Unsupported file type. Upload supported file types: .pdf and .docx.
 

 
- Unsupported file type. Upload the supported and correct file type.
 

If the error is our responsibility and fault, use authentic and transparent apologies.

 
- We’ve moved this page. Please check the changelog for the new location.
 

 
- Sorry you entered the wrong address.
 

Use “please” only for extra or unexpected user actions that correct system-caused disruptions.

 
- Heading: Page Not Found
Description: We could not find what you were looking for.
Instruction: Please contact the owner of the site that linked you to the original URL and let them know their link is broken.
 

Show urgency with wording, e.g. “immediately” if there are consequences from ignoring the error.

 
- Update your software version immediately to avoid losing data.
 

Use positive framing and avoid negative and alarming words like “wrong” and “catastrophic”.

 
- Value out of range. Enter a number between 1 and 100.
 

 
- Wrong number.
 

Use softening words, e.g. unfortunately and avoid negative contractions (“do not” instead of “don’t”).

- Unfortunately, you cannot open this page.

- You don't have access.
- You can't open this page.

Be honest and transparent when you cannot explain the error or how to move the user forward.

 
- Something went wrong and we couldn't complete your request. Try again later.
 

 
- Operation stopped for unknown reason.
 

Avoid generic wording telling users to contact their admin or support as this is unhelpful.

- Open the chat window and paste the error into the input field for support.
- Send error log to administrator.

- Contact admin to solve this issue.

Avoid overpromising solutions to errors unless the team is working on the problem.

 
   - Our team is working overtime to fix this for you and it will be fixed by morning.
 

## Dos and Don’ts

* Do make all messages consistent in terms of grammar and punctuation
* Do take the blame when the error originates from your app or product
* Do give users a reversible solution whenever possible
* Don’t panic your users with dramatic or urgent language
* Don’t use all upper case characters

## Related

* [Icon usage](../../../icons/icon-usage.mdx)
* [Warning messages](./warning-messages.mdx)
* [Empty-state messages](./empty-state-messages.mdx)
* [Form validation](../../../components/forms-validation/code.mdx)
* [Message bar](../../../components/messagebar/code.mdx)
