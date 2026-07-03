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

| Message type                      | Usage                                                                                                                               | Best practice example                                                                                                                                 |
| :-------------------------------- | :---------------------------------------------------------------------------------------------------------------------------------- | :---------------------------------------------------------------------------------------------------------------------------------------------------- |
| Error messages                    | Notify users of operational issues that have already happened and require their immediate action to resolve.                        | **Heading:** No data received<br/>**Description:** Unable to receive data as sensor is inactive.<br/>**Instructions:** Check sensor                   |
| Warning messages                  | Alert users to a potential problem or risk. Advises caution or suggests different actions to prevent unwanted future consequences.  | **Heading:** Temperature approaching threshold<br/>**Description:** Temperature in Zone 3 approaching 30° threshold.<br/>**Instructions:** Check zone |
| Non-critical information messages | Inform users about general information. Often no action is required.                                                                | System backup completed at 21:00 CET.                                                                                                                 |
| Empty-state messages              | Tell users the empty space is intentional, i.e. not an error, and how it can be filled.                                             | **Heading:** No zones created<br/>**Description:** Create zones to display on dashboard.<br/>**Button:** Create zone                                  |
| Toast messages                    | Give short and often quickly disappearing feedback to a user action.                                                                | **Heading:** Asset deleted<br/>**Description:** Valve 4a/203/22                                                                                       |
| Tooltips                          | Provide brief additional information about the tool with contextual help. Answer the question, “What is this?”                      | Shows machine activity and operator actions.                                                                                                          |
| Infotips                          | Provide more detailed explanations or guidance regarding user actions. Answer the question, “Why is this here and what does it do?” | Hover over icons or labels to see more details about their function or status.                                                                        |
| Time-related messages             | Provide specific timeframes with actionable guidance.                                                                               | System maintenance scheduled for 22 August, 02:00–04:00 CEST.                                                                                         |

## General rules

Use sentence casing for all message descriptions (except toast messages) and add full stops.

<div className="dos-and-donts">
 <div className="dos">
   <ul aria-label="Recommended practices">
     <li>Create zones from your dashboard.</li>
     <li>You have no new notifications.</li>
   </ul>
 </div>
 <div className="donts">
   <ul aria-label="Practices to avoid">
     <li>Add regions from your dashboard</li>
   </ul>
 </div>
</div>

Avoid overcommunicating by only adding relevant, beneficial information to your messages.

<div className="dos-and-donts">
 <div className="dos">
   <ul aria-label="Recommended practices">
     <li>We received your error report and will process it within 24 to 48 hours.</li>
   </ul>
 </div>
 <div className="donts">
   <ul aria-label="Practices to avoid">
     <li>The support team has received your bug report but they only work from 9–5 CEST time at the moment and there is a skeleton crew working over the summer.</li>
   </ul>
 </div>
</div>

Provide specifics, e.g. objects, values, reasons and solutions, instead of generic messaging.

<div className="dos-and-donts">
 <div className="dos">
   <ul aria-label="Recommended practices">
     <li>Failed to upload file due to connection error.</li>
   </ul>
 </div>
 <div className="donts">
   <ul aria-label="Practices to avoid">
     <li>Something happened.</li>
     <li>An error occurred.</li>
   </ul>
 </div>
</div>

Use urgent wording to signal serious and irreversible consequences from ignoring messages.

<div className="dos-and-donts">
 <div className="dos">
   <ul aria-label="Recommended practices">
     <li>Immediate software update required to save data securely.</li>
     <li>Update software now to save data.</li>
     <li>Contact support by 14:00 CET to avoid shutdown.</li>
     <li>Urgent: Order spare part replacement by August 31st for valve 532/a.</li>
   </ul>
 </div>
</div>

Use the same key words in your messaging, but do not repeat headings and descriptions.

<div className="dos-and-donts">
 <div className="dos">
   <ul aria-label="Recommended practices">
     <li>**Heading:** Bad request<br />
     **Description:** We could not process your request. Check and try again.</li>
   </ul>
 </div>
 <div className="donts">
   <ul aria-label="Practices to avoid">
     <li>**Heading:** Bad request<br/>
     **Description:** Bad request.</li>
   </ul>
 </div>
</div>

Use the same grammar patterns across all your messaging within your product.

<div className="dos-and-donts">
 <div className="dos">
   <ul aria-label="Recommended practices">
     <li>No assets added. / No dashboards created. / No data downloaded.</li>
   </ul>
 </div>
 <div className="donts">
   <ul aria-label="Practices to avoid">
     <li>No assets added. / You haven’t added any assets. / You have no assets yet.</li>
   </ul>
 </div>
</div>

Avoid asking patronizing “Are you sure…?” questions to your expert users.

<div className="dos-and-donts">
 <div className="dos">
   <ul aria-label="Recommended practices">
     <li>Deleting this file removes all dependencies.</li>
   </ul>
 </div>
 <div className="donts">
   <ul aria-label="Practices to avoid">
     <li>Are you sure you want to delete this file?</li>
   </ul>
 </div>
</div>

Use action labels that match the action of the message without mixing verbs or using synonyms.

<div className="dos-and-donts">
 <div className="dos">
   <ul aria-label="Recommended practices">
     <li>Close</li>
     <li>Save</li>
     <li>Continue</li>
     <li>Delete</li>
   </ul>
 </div>
 <div className="donts">
   <ul aria-label="Practices to avoid">
     <li>OK</li>
     <li>Confirm</li>
   </ul>
 </div>
</div>

Allow users to go back to change actions and avoid “OK” which is often understood as “Yes”.

<div className="dos-and-donts">
 <div className="dos">
   <ul aria-label="Recommended practices">
     <li>Heading: Unsaved changes <br />
     Description: You are about to leave the page. Unsaved changes will be lost.<br />
     Button: Exit without saving <br />
     Button: Go back</li>
   </ul>
 </div>
 <div className="donts">
   <ul aria-label="Practices to avoid">
     <li>Description: Are you sure you want to cancel? <br />
     Button: OK <br />
     Button: Cancel <br />
     Button: Yes</li>
   </ul>
 </div>
</div>

## Dos and Don’ts

<div class="dos-and-donts">
  <div class="dos">
    <ul aria-label="Recommended practices">
      <li>Do first classify what kind of message is required</li>
      <li>Do make a record or changelog of your messages for consistency and changes</li>
    </ul>
  </div>
  <div class="donts">
    <ul aria-label="Practices to avoid">
      <li>Don’t over communicate with irrelevant or unrelated information</li>
      <li>Don’t repeat the exact same wording in both the heading and description</li>
    </ul>
  </div>
</div>

## Related

- [Icon usage](../../../icons/icon-usage.mdx)
- [Warning messages](./warning-messages.mdx)
- [Error messages](./error-messages.mdx)
- [Empty-state messages](./empty-state-messages.mdx)
