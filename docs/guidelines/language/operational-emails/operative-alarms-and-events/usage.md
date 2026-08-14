# Usage

> Usage guide for operative alarms and system event emails

:::note

Use these rules alongside the [General rules](../overview-operational-emails/usage.mdx#general-rules). All placeholders are shown with square brackets, e.g. [placeholder]. We have used [App name] as the standard placeholder for you to adapt individually to your product.
:::

## Subject lines

State reason and criticality of the email directly in the subject line.

  
    [App name] | Failure detected in Plant A
    [App name] | Critical risk of cyberattack
    [App name] | Threshold change for asset TG_1234
  

Use language that reflects the urgency of the email and mentions if actions are required.

  
    [App name] | Immediate action required | Security vulnerability fix
    [App name] | No action required | New events detected
  

  
    [App name] | Security issue
  

## Body text

Be as specific as possible and tell users exactly what happened (what, when, how).

  
    Critical alarm immediate attention required: Power supply failure detected in Plant A.
  &nbsp;&nbsp;&bull; Power supply failure detected in Plant A.
  &nbsp;&nbsp;&bull; Event details: Overload detected on Transformer T-102 at 14:35 (UTC+2).
  &nbsp;&nbsp;&bull; Location: Nuremberg facility 32/A.
  

Explain consequences and solutions about the event whenever possible.

  
    What you should do
    Immediate: Reduce the load on T-102 by redistributing power to backup transformers.
    Short-term: Inspect the transformer for signs of damage or wear.
    Monitor: Check the load distribution system to identify why the overload occurred.
    Follow-up: Schedule a maintenance review to prevent future overloads.
  

Avoid vague timing or unclear instructions.

  
    Act immediately.
  

  
    Act soon.
  

Use clear, action-oriented instructions for users, avoiding words like may, should or recommend.

  
    Switch to backup power and confirm system status in the portal.
  

  
    You should switch to backup power when possible.
    You may want to switch to an alternative power supply.
  

Explain if and how users can resolve issues or act with links, buttons, and suggestions.

  
    No action required. The vulnerabilities have been located and logged. [Open Log files] for more details.
  

  
    We found 1000 vulnerabilities! This means your plant is in danger!
  

## Related

- [Dates](../../formatting/date.mdx)
- [Time and time zones](../../formatting/timezones.mdx)
- [Time related messages](../../messaging/time-related-messages.mdx)
- [Error messages](../../messaging/error-messages.mdx)
- [Warning messages](../../messaging/warning-messages.mdx)
- [Non-critical information messages](../../messaging/non-critical-information-messages.mdx)
