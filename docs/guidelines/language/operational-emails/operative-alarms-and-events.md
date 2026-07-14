---
sidebar_position: 3
sidebar_label: Operative alarms and system event emails
title: Operative alarms and system event emails
doc-type: 'banner'
description: 'Critical notifications require careful communication. Emails about alarms and security events must inform users quickly while maintaining clarity and calm.'
---

#

:::note

Use these rules alongside the [General rules](./operational-emails-general-rules/index.mdx). All placeholders are shown with square brackets, e.g. [placeholder]. We have used [App name] as the standard placeholder for you to adapt individually to your product. 
:::

## Subject lines

State reason and criticality of the email directly in the subject line.

<div className="dos-and-donts" markdown="true">
<div className="dos" markdown="true">

- [App name] | Failure detected in Plant A
- [App name] | Critical risk of cyberattack
- [App name] | Threshold change for asset TG_1234

</div>
</div>

Use language that reflects the urgency of the email and mentions if actions are required.

<div className="dos-and-donts" markdown="true">
<div className="dos" markdown="true">

- [App name] | Immediate action required | Security vulnerability fix
- [App name] | No action required | New events detected

</div>
<div className="donts" markdown="true">

- [App name] | Security issue

</div>
</div>

## Body text

Be as specific as possible and tell users exactly what happened (what, when, how).

<div className="dos-and-donts" markdown="true">
<div className="dos" markdown="true">

- Critical alarm immediate attention required: Power supply failure detected in Plant A.<br/>
  &nbsp;&nbsp;&bull; Power supply failure detected in Plant A.<br/>
  &nbsp;&nbsp;&bull; Event details: Overload detected on Transformer T-102 at 14:35 (UTC+2).<br/>
  &nbsp;&nbsp;&bull; Location: Nuremberg facility 32/A.

</div>
</div>

Explain consequences and solutions about the event whenever possible.

<div className="dos-and-donts" markdown="true">
<div className="dos" markdown="true">

What you should do<br/>
- Immediate: Reduce the load on T-102 by redistributing power to backup transformers.
- Short-term: Inspect the transformer for signs of damage or wear.
- Monitor: Check the load distribution system to identify why the overload occurred.
- Follow-up: Schedule a maintenance review to prevent future overloads.

</div>
</div>

Avoid vague timing or unclear instructions.

<div className="dos-and-donts" markdown="true">
<div className="dos" markdown="true">

- Act immediately.

</div>
<div className="donts" markdown="true">

- Act soon.

</div>
</div>

Use clear, action-oriented instructions for users, avoiding words like may, should or recommend.

<div className="dos-and-donts" markdown="true">
<div className="dos" markdown="true">

- Switch to backup power and confirm system status in the portal.

</div>
<div className="donts" markdown="true">

- You should switch to backup power when possible.
- You may want to switch to an alternative power supply.

</div>
</div>

Explain if and how users can resolve issues or act with links, buttons, and suggestions.

<div className="dos-and-donts" markdown="true">
<div className="dos" markdown="true">

- No action required. The vulnerabilities have been located and logged. [Open Log files] for more details.

</div>
<div className="donts" markdown="true">

- We found 1000 vulnerabilities! This means your plant is in danger!

</div>
</div>

## Best practice example for alarms

**Subject**<br/>
[App name] | Immediate action required | Batch threshold exceeded

**Body**<br/>
Dear [App name] user,<br/>
Batch BTH-20260304-A127 threshold exceeded<br/>
- Parameter: Temperature<br/>
- Current value: 87.3°C<br/>
- Threshold limit: 85.0°C<br/>
- Deviation: +2.3°C (+2.7%)<br/>
- Duration: 00:03:47<br/>

Batch details<br/>
- Batch ID: BTH-20260304-A127<br/>
- Product line: Beverage Mixing Line 3<br/>
- Product: Orange Juice Concentrate<br/>
- Location: Plant A, Nuremberg facility<br/>
- Time: 2026-03-04 08:55:21<br/>

What you need to do<br/>
- Open Batch list to stop processing or adjust thresholds.

Button: Open Batch list

If you have any questions or need assistance, contact our team at [email address].

Kind regards,<br/>
[App name] team

[Company disclaimer]<br/>
[Company legal footer]

## Best practice example for cyberattacks

**Subject**<br/>
[App name] | Immediate action required | Critical risk of cyber attacks

**Body**<br/>
Dear [App name] user,<br/>

A new cyberattack has been detected in your monitored environment. Immediate attention is required.<br/>

Event details<br/>
- Attack type: Unauthorized access attempt<br/>
- Location: Erlangen facility<br/>
- Time: 2026-03-04 08:55:21<br/>

What you need to do<br/>
- Switch to backup security protocols immediately.<br/>
- Confirm system status in the Security portal.<br/>
- Review recent logs for suspicious activity.<br/>
We will continue monitoring the system and provide updates as needed.

Button: Open

If you have any questions or need assistance, contact our team at [email address].

Kind regards,<br/>
Your [App name] team

[Company disclaimer]<br/>
[Company legal footer]

## Related

- [Dates](../formatting/date.mdx)
- [Time and time zones](../formatting/timezones.mdx)
- [Time related messages](../messaging/time-related-messages.mdx)
- [Error messages](../messaging/error-messages.mdx)
- [Warning messages](../messaging/warning-messages.mdx)
- [Non-critical information messages](../messaging/non-critical-information-messages.mdx)
