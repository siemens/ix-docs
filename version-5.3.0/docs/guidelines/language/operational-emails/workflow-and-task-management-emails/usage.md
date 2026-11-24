# Usage

> Usage guide for workflow and task management emails

:::note

Use these rules alongside the [General rules](../overview-operational-emails/usage.mdx#general-rules). All placeholders are shown with square brackets, e.g. [placeholder]. We have used [App name] as the standard placeholder for you to adapt individually to your product.
:::

## Subject lines

State the clear purpose or topic of the email with a descriptive title for context.

  
    [App name] | Task #234 created | Spare part maintenance
    [App name] | Task #659 assigned to you | Log file management
    [App name] | Task #012 completed | Turbine overhaul
    [App name] | Maintenance scheduled for Nov 11, 2026, 10:00
  

State any time urgency, criticality or workflow impact within the subject line.

  
    [App name] | Immediate action required | Firmware update
    [App name] | Task #134 | Review due Nov 11, 2026, 14:30
    [App name] | Task #879 | Approval requested
    [App name] | Task #987 | Overdue
  

## Body text

Use clear and unambiguous headings to tell users what needs to be managed.

  
    Task assigned
    Approval required
    Task overdue
    Review required
  

  
    Task for you
    Task
  

Include bullet points to enhance readability and highlight key information.

  
    New task assigned
 &nbsp;&nbsp;&bull; Task ID: 462
 &nbsp;&nbsp;&bull; Task description: Spare part replacement for sensor 672_A
 &nbsp;&nbsp;&bull; Assigned by: Operator
 &nbsp;&nbsp;&bull; Assigned: February 10, 2026
 &nbsp;&nbsp;&bull; Due: February 15, 2026
  

Avoid vague statements about impact or required actions.

  
    This update will require a restart and cause 5 minutes of downtime for [Asset name].
    Software update
&nbsp;&nbsp;&bull; Software: Update to Version 4.3.6
&nbsp;&nbsp;&bull; Date: November 10, 2025
&nbsp;&nbsp;&bull; Time: 01:00–01:05 (UTC+2)
&nbsp;&nbsp;&bull; Impact: Brief downtime (approx. 5 minutes)
  

  
    This update might require a restart.
  

## Task management and progress

Include specific and quantifiable progress updates whenever possible.

  
    Software patch deployment for SCADA system is 75% complete.
    Maintenance for [production line] is currently underway, estimated completion in 2 hours (10:00 UTC+2).
  

Include expected completion times or clear next steps.

  
    Expected completion by November 10, 2025, 22:00 (UTC+2). You will receive a notification once the system is fully operational.
  

## Status updates

Use clear indicators (operational, degraded, offline, standby) and state the impact immediately.

  
    Status update | Remote monitoring system | Degraded performance
    Status update | Conveyor belt system | Offline
    Status update | Backup generator | Standby
  

Avoid sending repetitive updates or leaving long gaps without communication during critical incidents. Only mention the previous status when it adds useful information.

  
    Ticket #274 status changed from "active" to "closed".
    We will provide an update every 2 hours until resolution, or sooner if the status changes significantly. Our next update is scheduled for 14:00 (UTC+2).
  

## Related

- [Time-related messages](../../messaging/time-related-messages.mdx)
- [Progress updates](../../messaging/progress-updates.mdx)
- [Dates](../../formatting/date.mdx)
- [Time and time zones](../../formatting/timezones.mdx)
