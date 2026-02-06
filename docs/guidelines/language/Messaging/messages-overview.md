---
sidebar_position: 1
sidebar_label: Overview
title: Overview
doc-type: 'banner'
components-tabs: ['']
no_single_tab: true
description: 'The ability to design effective messages is essential for intuitive, user-friendly interfaces that inform and support users. This page explains general UX writing rules and how to choose the right message type for your needs.'
---


#

## Message types

First define your use case and message type from the list below, then use this overview and the other sections for message-specific guidance and examples.



 | Message type                       | Usage                                                                                                                              | Best practice example                                                                                                                            |
| :--------------------------------- | :--------------------------------------------------------------------------------------------------------------------------------- | :----------------------------------------------------------------------------------------------------------------------------------------------- |
| Error messages                     | Notify users of operational issues that have already happened and require their immediate action to resolve.                       | **Heading:** No data received<br/>**Description:** Unable to receive data as sensor is inactive.<br/>**Instructions:** Check sensor              |
| Warning messages                   | Alert users to a potential problem or risk. Advises caution or suggests different actions to prevent unwanted future consequences. | **Heading:** Temperature approaching threshold<br/>**Description:** Temperature in Zone 3 approaching 30° threshold.<br/>**Instructions:** Check zone |
| Non-critical information messages  | Inform users about general information. Often no action is required.                                                               | System backup completed at 21:00 CET.                                                                                                            |
| Empty-state messages               | Tell users the empty space is intentional, i.e. not an error, and how it can be filled.                                            | **Heading:** No zones created<br/>**Description:** Create zones to display on dashboard.<br/>**Button:** Create zone                             |
| Toast messages                     | Give short and often quickly disappearing feedback to a user action.                                                               | **Heading:** Asset deleted<br/>**Description:** Valve 4a/203/22                                                                                  |
| Tooltips                           | Provide brief additional information about the tool with contextual help. Answer the question, “What is this?”                     | Shows machine activity and operator actions.                                                                                                     |
| Infotips                           | Provide more detailed explanations or guidance regarding user actions. Answer the question, “Why is this here and what does it do?” | Hover over icons or labels to see more details about their function or status.                                                                   |
| Time-related messages              | Provide specific timeframes with actionable guidance.                                                                              | System maintenance scheduled for 22 August, 02:00–04:00 CEST.                                                                                    |

## General rules

Use sentence casing for all message descriptions (except toast messages) and add full stops.
<div className="dos-and-donts" markdown="true">
 <div className="dos" markdown="true">
  - Create zones from your dashboard.
  - You have no new notifications.
 </div>
 <div className="donts" markdown="true">
  - Add regions from your dashboard
 </div>
</div>

Avoid overcommunicating by only adding relevant, beneficial information to your messages.
<div className="dos-and-donts" markdown="true">
 <div className="dos" markdown="true">
  - We received your error report and will process it within 24 to 48 hours.
 </div>
 <div className="donts" markdown="true">
  - The support team has received your bug report but they only work from 9–5 CEST time at the moment and there is a skeleton crew working over the summer.
 </div>
</div>

Provide specifics, e.g. objects, values, reasons and solutions, instead of generic messaging.
<div className="dos-and-donts" markdown="true">
 <div className="dos" markdown="true">
  - Failed to upload file due to connection error.
 </div>
 <div className="donts" markdown="true">
  - Something happened.
  - An error occurred.
 </div>
</div>

Use urgent wording to signal serious and irreversible consequences from ignoring messages.
<div className="dos-and-donts" markdown="true">
 <div className="dos" markdown="true">
  - Immediate software update required to save data securely.
  - Update software now to save data.
  - Contact support by 14:00 CET to avoid shutdown.
  - Urgent: Order spare part replacement by August 31st for valve 532/a.
 </div>
</div>

Use the same key words in your messaging, but do not repeat headings and descriptions.
<div className="dos-and-donts" markdown="true">
 <div className="dos" markdown="true">
  - **Heading:** Bad request<br />
  **Description:** We could not process your request. Check and try again.
 </div>
 <div className="donts" markdown="true">
  - **Heading:** Bad request<br/>
  **Description:** Bad request.
 </div>
</div>

Use the same grammar patterns across all your messaging within your product.
<div className="dos-and-donts" markdown="true">
 <div className="dos" markdown="true">
  - No assets added. / No dashboards created. / No data downloaded.
 </div>
 <div className="donts" markdown="true">
  - No assets added. / You haven’t added any assets. / You have no assets yet.
 </div>
</div>

Avoid asking patronizing “Are you sure…?” questions to your expert users.
<div className="dos-and-donts" markdown="true">
 <div className="dos" markdown="true">
  - Deleting this file removes all dependencies.
 </div>
 <div className="donts" markdown="true">
  - Are you sure you want to delete this file?
 </div>
</div>

Use action labels that match the action of the message without mixing verbs or using synonyms.
<div className="dos-and-donts" markdown="true">
 <div className="dos" markdown="true">
  - Close
  - Save
  - Continue
  - Delete
 </div>
 <div className="donts" markdown="true">
  - OK
  - Confirm
 </div>
</div>

Allow users to go back to change actions and avoid “OK” which is often understood as “Yes”.

<div className="dos-and-donts" markdown="true">
 <div className="dos" markdown="true">
  - **Heading:** Unsaved changes <br />
  **Description:** You are about to leave the page. Unsaved changes will be lost.<br />
  **Button:** Exit without saving <br />
  **Button:** Go back
 </div>
 <div className="donts" markdown="true">
  - **Description:** Are you sure you want to cancel? <br />
  **Button:** OK <br />
  **Button:** Cancel <br />
  **Button:** Yes 
 </div>
</div>

## Dos and Don’ts
*   Do first classify what kind of message is required
*   Do make a record or changelog of your messages for consistency and changes
*   Don’t over communicate with irrelevant or unrelated information
*   Don’t repeat the exact same wording in both the heading and description

## Related

*   [Icon usage](https://ix.siemens.io/docs/icons/icon-usage#status-icons)
*   Warning messages LINK TO BE ADDED
*   Error pages LINK TO BE ADDED
*   Empty-state messages LINK TO BE ADDED
*   Error messages LINK TO BE ADDED