# Toast messages

> Toast messages briefly inform users about the outcome of an action. Typically displayed near the bottom or top of the interface, they often close automatically without requiring user interaction.

#

## Best practice template

This section focuses on messages that give feedback to user actions and often automatically close. For system event messages with different levels of criticality, please see the status and event section of this guide.

Although always short, toast messages vary in length and complexity:

* One-line messages briefly inform users about the outcome of their action.
* Two-line messages have a heading and description to provide more context or details.
* Three-line messages include a heading, a description, and actions.

| Step | Purpose | Description | Examples |
|------|---------|-------------|------------------------|
| 1.  | Heading or one-line toast  | Tell users the exact outcome of their action (for system toast messages, see the status and event section). | Noun + simple past tense verb:Data downloadedAsset deletedDevice deletedConnection restoredScan cancelledAsset not offboarded |
| 2.  | Description or two-line toast | Provide additional, relevant information.  | **Heading:** Maintenance scheduled**Description:** Exchange filer in room 500 on August 10.**Heading:** File 4a.ext not uploaded**Description:** File 4a.ext exceeds 25 MB |
| 3. | Actions | Give users the ability to undo the action or provide a link to further information. | Action verb + noun:Heading: Asset deletedDescription: Asset 4a_203/22Action: UndoHeading: Scan scheduledDescription: Scan gateway ANC_GW February 12Action: Open scheduleHeading: Asset not onboardedDescription: Failed to reach Asset 4aAction: Try again |

## General rules

Use simple past tense verbs to state what happened.

- Assets uploaded

- Assets have been uploaded

Use "not" or "failed to" with the verb to signal failure.

- File not imported
- Failed to import file

- File type not recognized

Use present progressive verbs for background or ongoing actions.

- Update application → Updating application… → Application updated

Use the same verbs and nouns from the dialog and button that initiated the toast message.

- Upload file → File uploaded
- Connect → Gateway connected

- Upload file → File added
- Connect → Gateway established

Avoid punctuation as this takes up extra space and adds to visual clutter.

- Scan finished

- Scan finished.
- Scan not finished!

Avoid adding additional words or verbs such as "you", "your", "is" or "was".

- Maintenance scheduled
- Asset onboarded

- Your maintenance was scheduled
- Onboarding for asset was successfully completed

Avoid generic toast messages, such as "successful", "unsuccessful", "error" and "failure".

- Connected
- Failed to connect

- Successful
- Failed

Avoid using "successful" and "successfully" as this adds to the reading load and effort.

- Connected

- Connection successfully established
- Connection established successfully

## Dos and Don'ts

* Do add extra time when there is an action option
* Do use consistent wording to help users scan toast messages easier
* Don’t use full sentences or complex verb forms
* Don’t add an action unless absolutely necessary

## Related

* [Error messages](./error-messages.mdx)
* [Warning messages](./warning-messages.mdx)
* [Progress updates](./progress-updates.mdx)
