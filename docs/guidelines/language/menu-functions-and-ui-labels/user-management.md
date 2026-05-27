---
sidebar_position: 5
sidebar_label: User management
title: User management
doc-type: 'banner'
component-tabs: ['']
no_single_tab: true
description: 'User management involves guiding people through tasks like creating accounts, assigning roles and managing software access. Clear, consistent language is essential as these actions often carry security, compliance and cost implications.'
---

#

## General terms

Use consistent terms across products.

Use the term “role” to refer to a collection of “permissions”. 

Use “permissions” instead of “right” and “privilege” as these are becoming less common due to localization and translation challenges. Avoid “right”, “rights” and “privilege” in both the UI and user documentation.

| Term | Definition |
| --- | --- |
| Role | A collection of access rights and permissions. |
| Permissions | Authorization to perform operations associated with a specific shared resource that must be granted by a system administrator to individual user accounts or administrative groups. |
| Credentials | Information that includes identification and proof of identification and is used to gain access to local and network resources. |

## General rules

Write user roles in short, clear and descriptive terms and give users access to role descriptions.

<div className="dos-and-donts">
<div className="dos">
  <ul aria-label="Recommended practices">
    <li>Line operator</li>
  </ul>
</div>
<div className="donts">
  <ul aria-label="Practices to avoid">
    <li>Basic user</li>
  </ul>
</div>
</div>

Use role names consistently within workflows and across the whole product.

<div className="dos-and-donts">
<div className="dos">
  <ul aria-label="Recommended practices">
    <li>Device administrator / Device administrator / Device administrator</li>
  </ul>
</div>
<div className="donts">
  <ul aria-label="Practices to avoid">
    <li>Device Admin / Asset Admins / Administrator / Device Manager / Officer for devices</li>
  </ul>
</div>
</div>

Focus on personas instead of generic and unclear titles when creating roles for your product.

<div className="dos-and-donts">
<div className="dos">
  <ul aria-label="Recommended practices">
    <li>Line operator</li>
    <li>Plant operator</li>
    <li>Service engineer</li>
  </ul>
</div>
<div className="donts">
  <ul aria-label="Practices to avoid">
    <li>Technician</li>
    <li>Team lead</li>
    <li>Expert user</li>
  </ul>
</div>
</div>

Avoid mixing location with function when creating roles for your product.

<div className="dos-and-donts">
<div className="dos">
  <ul aria-label="Recommended practices">
    <li>User</li>
  </ul>
</div>
<div className="donts">
  <ul aria-label="Practices to avoid">
    <li>External user</li>
    <li>Local user</li>
    <li>International user</li>
  </ul>
</div>
</div>

Avoid creating vague user roles without a clear persona or scope that can be misunderstood.

<div className="dos-and-donts">
<div className="dos">
  <ul aria-label="Recommended practices">
    <li>Production report creator</li>
    <li>Quality report reviewer</li>
    <li>Batch approver (review and release)</li>
  </ul>
</div>
<div className="donts">
  <ul aria-label="Practices to avoid">
    <li>Read-only user</li>
    <li>Write-only user</li>
  </ul>
</div>
</div>

Use “read only” as a specific role permission, not a unique role name.

<div className="dos-and-donts">
<div className="dos">
  <ul aria-label="Recommended practices">
    <li>External consultant (read-only)</li>
  </ul>
</div>
<div className="donts">
  <ul aria-label="Practices to avoid">
    <li>Read-only user</li>
  </ul>
</div>
</div>

Avoid easily misunderstood permissions such as “view”, be specific about what users can do.

<div className="dos-and-donts">
<div className="dos">
  <ul aria-label="Recommended practices">
    <li>record / log / configure / override</li>
    <li>adjust / review / modify / correct</li>
    <li>monitor / review / inspect</li>
    <li>track / display / observe</li>
  </ul>
</div>
<div className="donts">
  <ul aria-label="Practices to avoid">
    <li>write</li>
    <li>edit</li>
    <li>read-only</li>
    <li>view</li>
  </ul>
</div>
</div>

Use sentence case for all user roles.

<div className="dos-and-donts">
<div className="dos">
  <ul aria-label="Recommended practices">
    <li>Service engineer</li>
  </ul>
</div>
<div className="donts">
  <ul aria-label="Practices to avoid">
    <li>Service Engineer</li>
  </ul>
</div>
</div>

Avoid jargon or internal terms, instead use language everyone understands.

<div className="dos-and-donts">
<div className="dos">
  <ul aria-label="Recommended practices">
    <li>Plant manager</li>
  </ul>
</div>
<div className="donts">
  <ul aria-label="Practices to avoid">
    <li>Top tier</li>
  </ul>
</div>
</div>

Keep role names short, preferably not more than three words.

<div className="dos-and-donts">
<div className="dos">
  <ul aria-label="Recommended practices">
    <li>Safety incident investigator</li>
    <li>Shift handover reporter</li>
  </ul>
</div>
<div className="donts">
  <ul aria-label="Practices to avoid">
    <li>Gateway and portal maintenance manager for Plant 3 and 5 (read-only permissions)</li>
  </ul>
</div>
</div>

Avoid using functions or features as roles or permissions, instead focus on persona and tasks.

<div className="dos-and-donts">
<div className="dos">
  <ul aria-label="Recommended practices">
    <li>Shift supervisor – Production floor</li>
  </ul>
</div>
<div className="donts">
  <ul aria-label="Practices to avoid">
    <li>Dashboard user</li>
  </ul>
</div>
</div>

## Identity and access

Although often used interchangeably, the terms “account”, “user” and “profile” have distinct meanings.

| Word | Definition | Usage and context |
| --- | --- | --- |
| account | A digital key that gives users access to a system or service. | Includes login credentials (username / email and password), permissions and sometimes billing or subscription details.<br/><br/>Use when talking about access, permissions and authentication. |
| user | The person (or system) working within software using an account. | Represents the person or system / maschine behind the account.<br/><br/>Use when talking about actions and roles in the system. |
| profile | Personalized or system-specific settings and information. | Includes details like name, photo, job title, preferences, language, time zone and other customizable settings.<br/><br/>Use when talking about personal information and preferences. |

## Common wording pairs

Many user management words often appear together in familiar, expected combinations (collocates). Use these common pairings to sound professional, while avoiding uncommon and “weird” combinations. 

| Verb | Common paired nouns | Definition | UI text examples |
| --- | --- | --- | --- |
| activate | accounts<br/>permissions | Temporarily enable access without deleting information. | Button: Activate account |
| add | users<br/>permissions | Include users or permissions in a system. | Confirmation dialog: Add permissions for immediate access. |
| approve | users<br/>requests<br/>access | Grant users access to the system following review. | Notification: 5 user requests approved |
| assign | users<br/>tasks<br/>roles | Connect users to roles, groups or resources to enable specific permissions. | Toast message: Role assigned |
| authenticate | users<br/>identity<br/>credentials | Users prove identity to gain secure access to an application. | Login screen: Authenticate with your ID |
| authorize | users<br/>roles<br/>access<br/>actions<br/>requests | Determine what authenticated users are allowed to access or do. | Error message: Not authorized. Check your credentials and try again. |
| block | users<br/>profiles<br/>accounts<br/>domains<br/>devices<br/>addresses | Restrict interaction, communication or access. | Administrator action: Block IP address due to suspicious activity |
| create | accounts<br/>roles<br/>groups<br/>projects<br/>workspaces<br/>profiles<br/>permissions | Establish something new in the system. | Form heading: Create user account<br/><br/>Form heading: Create new workspace |
| duplicate | roles<br/>permissions<br/>configurations<br/>projects | Create another instance (a copy) that matches the original. | Button: Duplicate configuration |
| edit | profiles<br/>permissions<br/>roles<br/>settings<br/>details<br/>properties | Modify existing details and properties. | Form heading: Edit user profile |
| manage | accounts<br/>users<br/>permissions<br/>settings | Supervise and control accounts, roles and permissions within systems. | Navigation label: Manage users<br/><br/>Navigation label: User management |
| remove | users<br/>permissions<br/>roles<br/>members<br/>access | Detach or revoke users’ access or association while keeping their account active. | Warning message: Removing this role will disable any associated permissions. |
| revoke | permissions<br/>access<br/>authorization<br/>licenses | Withdraw something formally that was previously granted often in access control contexts. | Button: Revoke all permissions |
| verify | users<br/>identity<br/>accounts<br/>data | Confirm identity, authenticity and accuracy of something. Often performed by administrators. | User action: Click the link to verify your account. |
| view | profiles<br/>details<br/>history | Displaying and accessing details without the ability to modify (uncommon permission similar to read-only). | Permission: Can view user profiles |

## Common wording mistakes

Avoid using “deny” and “disapprove” with “user” as opposites to “approve”.

<div className="dos-and-donts">
<div className="dos">
  <ul aria-label="Recommended practices">
    <li>Reject access request</li>
  </ul>
</div>
<div className="donts">
  <ul aria-label="Practices to avoid">
    <li>Admin denied user</li>
    <li>Disapprove user</li>
  </ul>
</div>
</div>

Avoid using “deauthenticate” as the opposite of authenticate.

<div className="dos-and-donts">
<div className="dos">
  <ul aria-label="Recommended practices">
    <li>Log out</li>
    <li>End session</li>
  </ul>
</div>
<div className="donts">
  <ul aria-label="Practices to avoid">
    <li>Deauthenticate</li>
    <li>Click to deauthenticate</li>
  </ul>
</div>
</div>

Avoid using “grant” with “permissions” in casual UI contexts as this has become outdated.

<div className="dos-and-donts">
<div className="dos">
  <ul aria-label="Recommended practices">
    <li>Assign permissions to user</li>
    <li>Give user access to reports</li>
  </ul>
</div>
<div className="donts">
  <ul aria-label="Practices to avoid">
    <li>Grant permissions to user</li>
  </ul>
</div>
</div>

Avoid using “read” for viewing UI elements like profiles, permissions and roles.

<div className="dos-and-donts">
<div className="dos">
  <ul aria-label="Recommended practices">
    <li>View user profile</li>
    <li>View role details</li>
  </ul>
</div>
<div className="donts">
  <ul aria-label="Practices to avoid">
    <li>Read user profile</li>
    <li>Read permissions</li>
  </ul>
</div>
</div>

Avoid using “write” for editing or modifying UI elements.

<div className="dos-and-donts">
<div className="dos">
  <ul aria-label="Recommended practices">
    <li>Edit permissions</li>
    <li>Modify settings</li>
  </ul>
</div>
<div className="donts">
  <ul aria-label="Practices to avoid">
    <li>Write permissions</li>
    <li>Write role details</li>
    <li>Write to database</li>
  </ul>
</div>
</div>

Avoid using “delete” for simple removals; use “delete” only for permanent erasure. 

<div className="dos-and-donts">
<div className="dos">
  <ul aria-label="Recommended practices">
    <li>Unassign</li>
    <li>Remove user from team</li>
    <li>Remove role from user</li>
    <li>Delete user account (permanent)</li>
    <li>Delete file (permanent)</li>
  </ul>
</div>
<div className="donts">
  <ul aria-label="Practices to avoid">
    <li>Delete user from team</li>
    <li>Delete role from user</li>
  </ul>
</div>
</div>

Avoid using “revoke” with people and users as direct objects.

<div className="dos-and-donts">
<div className="dos">
  <ul aria-label="Recommended practices">
    <li>Revoke all permissions</li>
    <li>Revoke API key</li>
  </ul>
</div>
<div className="donts">
  <ul aria-label="Practices to avoid">
    <li>Revoke user</li>
    <li>Revoke the employee</li>
  </ul>
</div>
</div>

## Dos and Don’ts

- Do ensure role behaviors are transparent and easy to understand
- Do use clear, descriptive role names that reflect user responsibilities
- Do group related permissions logically within roles
- Don’t create excessive amounts of roles because this causes confusion
- Don’t create overlapping roles with unclear differences

## Related

- [UI terminology](./ui-terminology.md)
- [License management](./license-management.md)
