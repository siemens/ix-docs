# Overview

> The ability to design effective messages is essential for intuitive, user-friendly interfaces that inform and support users. This page explains general UX writing rules and how to choose the right message type for your needs.

#

## Message types

First define your use case and message type from the list below, then use this overview and the other sections for message-specific guidance and examples.

| Message type                      | Usage                                                                                                                               | Best practice example                                                                                                                                 |
| :-------------------------------- | :---------------------------------------------------------------------------------------------------------------------------------- | :---------------------------------------------------------------------------------------------------------------------------------------------------- |
| Error messages                    | Notify users of operational issues that have already happened and require their immediate action to resolve.                        | **Heading:** No data received**Description:** Unable to receive data as sensor is inactive.**Instructions:** Check sensor                   |
| Warning messages                  | Alert users to a potential problem or risk. Advises caution or suggests different actions to prevent unwanted future consequences.  | **Heading:** Temperature approaching threshold**Description:** Temperature in Zone 3 approaching 30° threshold.**Instructions:** Check zone |
| Non-critical information messages | Inform users about general information. Often no action is required.                                                                | System backup completed at 21:00 CET.                                                                                                                 |
| Empty-state messages              | Tell users the empty space is intentional, i.e. not an error, and how it can be filled.                                             | **Heading:** No zones created**Description:** Create zones to display on dashboard.**Button:** Create zone                                  |
| Toast messages                    | Give short and often quickly disappearing feedback to a user action.                                                                | **Heading:** Asset deleted**Description:** Valve 4a/203/22                                                                                       |
| Tooltips                          | Provide brief additional information about the tool with contextual help. Answer the question, “What is this?”                      | Shows machine activity and operator actions.                                                                                                          |
| Infotips                          | Provide more detailed explanations or guidance regarding user actions. Answer the question, “Why is this here and what does it do?” | Hover over icons or labels to see more details about their function or status.                                                                        |
| Time-related messages             | Provide specific timeframes with actionable guidance.                                                                               | System maintenance scheduled for 22 August, 02:00–04:00 CEST.                                                                                         |

## General rules

Use sentence casing for all message descriptions (except toast messages) and add full stops.

 
  - Create zones from your dashboard.
  - You have no new notifications.
 
 
  - Add regions from your dashboard
 

Avoid overcommunicating by only adding relevant, beneficial information to your messages.

 
  - We received your error report and will process it within 24 to 48 hours.
 
 
  - The support team has received your bug report but they only work from 9–5 CEST time at the moment and there is a skeleton crew working over the summer.
 

Provide specifics, e.g. objects, values, reasons and solutions, instead of generic messaging.

 
  - Failed to upload file due to connection error.
 
 
  - Something happened.
  - An error occurred.
 

Use urgent wording to signal serious and irreversible consequences from ignoring messages.

 
  - Immediate software update required to save data securely.
  - Update software now to save data.
  - Contact support by 14:00 CET to avoid shutdown.
  - Urgent: Order spare part replacement by August 31st for valve 532/a.
 

Use the same key words in your messaging, but do not repeat headings and descriptions.

 
  - **Heading:** Bad request
  **Description:** We could not process your request. Check and try again.
 
 
  - **Heading:** Bad request
  **Description:** Bad request.
 

Use the same grammar patterns across all your messaging within your product.

 
  - No assets added. / No dashboards created. / No data downloaded.
 
 
  - No assets added. / You haven’t added any assets. / You have no assets yet.
 

Avoid asking patronizing “Are you sure…?” questions to your expert users.

 
  - Deleting this file removes all dependencies.
 
 
  - Are you sure you want to delete this file?
 

Use action labels that match the action of the message without mixing verbs or using synonyms.

 
  - Close
  - Save
  - Continue
  - Delete
 
 
  - OK
  - Confirm
 

Allow users to go back to change actions and avoid “OK” which is often understood as “Yes”.

 
  - Heading: Unsaved changes 
  Description: You are about to leave the page. Unsaved changes will be lost.
  Button: Exit without saving 
  Button: Go back
 
 
  - Description: Are you sure you want to cancel? 
  Button: OK 
  Button: Cancel 
  Button: Yes 
 

## Dos and Don’ts

- Do first classify what kind of message is required
- Do make a record or changelog of your messages for consistency and changes
- Don’t over communicate with irrelevant or unrelated information
- Don’t repeat the exact same wording in both the heading and description

## Related

- [Icon usage](../../../icons/icon-usage.mdx)
- [Warning messages](./warning-messages.mdx)
- [Error messages](./error-messages.mdx)
- [Empty-state messages](./empty-state-messages.mdx)
