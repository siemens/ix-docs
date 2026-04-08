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

Use permissions instead of “right” and “privilege” as these are becoming less common due to localization and translation challenges. Avoid “right”, “rights” and “privilege” in both the UI and user documentation.

| Term | Definition |
| --- | --- |
| Role | A collection of access rights and permissions. |
| Permissions | Authorization to perform operations associated with a specific shared resource that must be granted by a system administrator to individual user accounts or administrative groups. |
| Credentials | Information that includes identification and proof of identification and is used to gain access to local and network resources. |

## General rules

Write user roles in short, clear and descriptive terms and give users access to role descriptions.

<div className="dos-and-donts" markdown>
<div className="dos" markdown>
- Line operator
</div>
<div className="donts" markdown>
- Basic user
</div>
</div>

Use role names consistently within workflows and across the whole product.

<div className="dos-and-donts" markdown>
<div className="dos" markdown>
- Device administrator / Device administrator / Device administrator
</div>
<div className="donts" markdown>
- Device Admin / Asset Admins / Administrator / Device Manager / Officer for devices
</div>
</div>

Focus on personas instead of generic and unclear titles when creating roles for your product.

<div className="dos-and-donts" markdown>
<div className="dos" markdown>
- Line operator
- Plant operator
- Service engineer
</div>
<div className="donts" markdown>
- Technician
- Team lead
- Expert user
</div>
</div>

Avoid mixing location with function when creating roles for your product.

<div className="dos-and-donts" markdown>
<div className="dos" markdown>
- User
</div>
<div className="donts" markdown>
- External user
- Local user
- International user
</div>
</div>

Avoid creating vague user roles without a clear persona or scope that can be misunderstood.

<div className="dos-and-donts" markdown>
<div className="dos" markdown>
- Production report creator
- Quality report reviewer
- Batch approver (review and release)
</div>
<div className="donts" markdown>
- Read-only user
- Write-only user
</div>
</div>

Use “read only” as a specific role permission, not a unique role name.

<div className="dos-and-donts" markdown>
<div className="dos" markdown>
- External consultant (read-only)
</div>
<div className="donts" markdown>
- Read-only user
</div>
</div>

Avoid easily misunderstood permissions such as “view”, be specific about what users can do.

<div className="dos-and-donts" markdown>
<div className="dos" markdown>
- record / log / configure / override
- adjust / review / modify / correct
- monitor / review / inspect
- track / display / observe
</div>
<div className="donts" markdown>
- write
- edit
- read-only
- view
</div>
</div>

Use sentence case for all user roles.

<div className="dos-and-donts" markdown>
<div className="dos" markdown>
- Service engineer
</div>
<div className="donts" markdown>
- Service Engineer
</div>
</div>

Avoid jargon or internal terms, instead use language everyone understands.

<div className="dos-and-donts" markdown>
<div className="dos" markdown>
- Plant manager
</div>
<div className="donts" markdown>
- Top tier
</div>
</div>

Keep role names short, preferably not more than three words.

<div className="dos-and-donts" markdown>
<div className="dos" markdown>
- Safety incident investigator
- Shift handover reporter
</div>
<div className="donts" markdown>
- Gateway and portal maintenance manager for Plant 3 and 5 (read-only permissions)
</div>
</div>

Avoid using functions or features as roles or permissions, instead focus on persona and tasks.

<div className="dos-and-donts" markdown>
<div className="dos" markdown>
- Shift supervisor – Production floor
</div>
<div className="donts" markdown>
- Dashboard user
</div>
</div>

## Identity and access

Although often used interchangeably, the terms “account”, “user” and “profile” have distinct meanings.

| Word | Definition | Usage and context |
| --- | --- | --- |
| account | A digital key that gives users access to a system or service. | Includes login credentials (username / email and password), permissions and sometimes billing or subscription details.<br/><br/>Use when talking about access, permissions and authentication. |
| user | The person or system working within software using an account. | Represents the person or system / maschine behind the account.<br/><br/>Use when talking about actions and roles in the system. |
| profile | Personalized or system-specific settings and information. | Includes details like name, photo, job title, preferences, language, time zone and other customizable settings.<br/><br/>Use when talking about personal information and preferences. |

## Common wording pairs

Many user management words often appear together in familiar, expected combinations (collocates). Use these common pairings to sound professional, while avoiding uncommon and “weird” combinations. 

| Verb | Common paired nouns | Definition | UI text examples |
| --- | --- | --- | --- |
| activate | accounts</br>permissions | Temporarily enable access without deleting information. | Button: Activate account |
| add | users</br>permissions | Include users or permissions in a system. | Confirmation dialog: Add permissions for immediate access. |
| approve | users</br>requests</br>access | Grant users access to the system following review. | Notification: 5 user requests approved |
| assign | users</br>tasks</br>roles | Connect users to roles, groups or resources to enable specific permissions. | Toast message: Role assigned |
| authenticate | users</br>identity</br>credentials | Users prove identity to gain secure access to an application. | Login screen: Authenticate with your ID |
| authorize | users</br>roles</br>access</br>actions</br>requests | Determine what authenticated users are allowed to access or do. | Error message: Not authorized. Check your credentials and try again. |
| block | users</br>profiles</br>accounts</br>domains</br>devices</br>addresses | Restrict interaction, communication or access. | Administrator action: Block IP address due to suspicious activity |
| create | accounts</br>roles</br>groups</br>projects</br>workspaces</br>profiles</br>permissions | Establish something new in the system. | Form heading: Create user account<br/><br/>Form heading: Create new workspace |
| duplicate | roles</br>permissions</br>configurations</br>projects | Create another instance (a copy) that matches the original. | Button: Duplicate configuration |
| edit | profiles</br>permissions</br>roles</br>settings</br>details</br>properties | Modify existing details and properties. | Form heading: Edit user profile |
| manage | accounts</br>users</br>permissions</br>settings | Supervise and control accounts, roles and permissions within systems. | Navigation label: Manage users<br/><br/>Navigation label: User management |
| remove | users</br>permissions</br>roles</br>members</br>access | Detach or revoke users’ access or association while keeping their account active. | Warning message: Removing this role will disable any associated permissions. |
| revoke | permissions</br>access</br>authorization</br>licenses | Withdraw something formally that was previously granted often in access control contexts. | Button: Revoke all permissions |
| verify | users</br>identity</br>accounts</br>data | Confirm identity, authenticity and accuracy of something. Often performed by administrators. | User action: Click the link to verify your account. |
| view | profiles</br>details</br>history | Displaying and accessing details without the ability to modify (uncommon permission similar to read-only). | Permission: Can view user profiles |

## Common wording mistakes

Avoid using “deny” and “disapprove” with “user” as opposites to “approve”.

<div className="dos-and-donts" markdown>
<div className="dos" markdown>
- Reject access request
</div>
<div className="donts" markdown>
- Admin denied user
- Disapprove user
</div>
</div>

Avoid using “deauthenticate” as the opposite of authenticate.

<div className="dos-and-donts" markdown>
<div className="dos" markdown>
- Log out
- End session
</div>
<div className="donts" markdown>
- Deauthenticate
- Click to deauthenticate
</div>
</div>

Avoid using “grant” with “permissions” in casual UI contexts as this has become outdated.

<div className="dos-and-donts" markdown>
<div className="dos" markdown>
- Assign permissions to user
- Give user access to reports
</div>
<div className="donts" markdown>
- Grant permissions to user
</div>
</div>

Avoid using “read” for viewing UI elements like profiles, permissions and roles.

<div className="dos-and-donts" markdown>
<div className="dos" markdown>
- View user profile
- View role details
</div>
<div className="donts" markdown>
- Read user profile
- Read permissions
</div>
</div>

Avoid using “write” for editing or modifying UI elements.

<div className="dos-and-donts" markdown>
<div className="dos" markdown>
- Edit permissions
- Modify settings
</div>
<div className="donts" markdown>
- Write permissions
- Write role details
- Write to database
</div>
</div>

Avoid using “delete” for simple removals; use “delete” only for permanent erasure. 

<div className="dos-and-donts" markdown>
<div className="dos" markdown>
- Unassign
- Remove user from team
- Remove role from user
- Delete user account (permanent)
- Delete file (permanent)
</div>
<div className="donts" markdown>
- Delete user from team
- Delete role from user
</div>
</div>

Avoid using “revoke” with people and users as direct objects.

<div className="dos-and-donts" markdown>
<div className="dos" markdown>
- Revoke all permissions
- Revoke API key
</div>
<div className="donts" markdown>
- Revoke user
- Revoke the employee
</div>
</div>

## Dos and Don’ts

- Do ensure role behaviors are transparent and easy to understand
- Do use clear, descriptive role names that reflect user responsibilities
- Do group related permissions logically within roles
- Don’t create excessive amounts of roles because this causes confusion
- Don’t create overlapping roles with unclear differences

## Related

- [UI terminology](./UI-terminology.md)
- [License management](./license-management.md/)
