# User management

> User management involves guiding people through tasks like creating accounts, assigning roles and managing software access. Clear, consistent language is essential as these actions often carry security, compliance and cost implications.

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

  
    Line operator
  

  
    Basic user
  

Use role names consistently within workflows and across the whole product.

  
    Device administrator / Device administrator / Device administrator
  

  
    Device Admin / Asset Admins / Administrator / Device Manager / Officer for devices
  

Focus on personas instead of generic and unclear titles when creating roles for your product.

  
    Line operator
    Plant operator
    Service engineer
  

  
    Technician
    Team lead
    Expert user
  

Avoid mixing location with function when creating roles for your product.

  
    User
  

  
    External user
    Local user
    International user
  

Avoid creating vague user roles without a clear persona or scope that can be misunderstood.

  
    Production report creator
    Quality report reviewer
    Batch approver (review and release)
  

  
    Read-only user
    Write-only user
  

Use “read only” as a specific role permission, not a unique role name.

  
    External consultant (read-only)
  

  
    Read-only user
  

Avoid easily misunderstood permissions such as “view”, be specific about what users can do.

  
    record / log / configure / override
    adjust / review / modify / correct
    monitor / review / inspect
    track / display / observe
  

  
    write
    edit
    read-only
    view
  

Use sentence case for all user roles.

  
    Service engineer
  

  
    Service Engineer
  

Avoid jargon or internal terms, instead use language everyone understands.

  
    Plant manager
  

  
    Top tier
  

Keep role names short, preferably not more than three words.

  
    Safety incident investigator
    Shift handover reporter
  

  
    Gateway and portal maintenance manager for Plant 3 and 5 (read-only permissions)
  

Avoid using functions or features as roles or permissions, instead focus on persona and tasks.

  
    Shift supervisor – Production floor
  

  
    Dashboard user
  

## Identity and access

Although often used interchangeably, the terms “account”, “user” and “profile” have distinct meanings.

| Word | Definition | Usage and context |
| --- | --- | --- |
| account | A digital key that gives users access to a system or service. | Includes login credentials (username / email and password), permissions and sometimes billing or subscription details.Use when talking about access, permissions and authentication. |
| user | The person (or system) working within software using an account. | Represents the person or system / maschine behind the account.Use when talking about actions and roles in the system. |
| profile | Personalized or system-specific settings and information. | Includes details like name, photo, job title, preferences, language, time zone and other customizable settings.Use when talking about personal information and preferences. |

## Common wording pairs

Many user management words often appear together in familiar, expected combinations (collocates). Use these common pairings to sound professional, while avoiding uncommon and “weird” combinations. 

| Verb | Common paired nouns | Definition | UI text examples |
| --- | --- | --- | --- |
| activate | accountspermissions | Temporarily enable access without deleting information. | Button: Activate account |
| add | userspermissions | Include users or permissions in a system. | Confirmation dialog: Add permissions for immediate access. |
| approve | usersrequestsaccess | Grant users access to the system following review. | Notification: 5 user requests approved |
| assign | userstasksroles | Connect users to roles, groups or resources to enable specific permissions. | Toast message: Role assigned |
| authenticate | usersidentitycredentials | Users prove identity to gain secure access to an application. | Login screen: Authenticate with your ID |
| authorize | usersrolesaccessactionsrequests | Determine what authenticated users are allowed to access or do. | Error message: Not authorized. Check your credentials and try again. |
| block | usersprofilesaccountsdomainsdevicesaddresses | Restrict interaction, communication or access. | Administrator action: Block IP address due to suspicious activity |
| create | accountsrolesgroupsprojectsworkspacesprofilespermissions | Establish something new in the system. | Form heading: Create user accountForm heading: Create new workspace |
| duplicate | rolespermissionsconfigurationsprojects | Create another instance (a copy) that matches the original. | Button: Duplicate configuration |
| edit | profilespermissionsrolessettingsdetailsproperties | Modify existing details and properties. | Form heading: Edit user profile |
| manage | accountsuserspermissionssettings | Supervise and control accounts, roles and permissions within systems. | Navigation label: Manage usersNavigation label: User management |
| remove | userspermissionsrolesmembersaccess | Detach or revoke users’ access or association while keeping their account active. | Warning message: Removing this role will disable any associated permissions. |
| revoke | permissionsaccessauthorizationlicenses | Withdraw something formally that was previously granted often in access control contexts. | Button: Revoke all permissions |
| verify | usersidentityaccountsdata | Confirm identity, authenticity and accuracy of something. Often performed by administrators. | User action: Click the link to verify your account. |
| view | profilesdetailshistory | Displaying and accessing details without the ability to modify (uncommon permission similar to read-only). | Permission: Can view user profiles |

## Common wording mistakes

Avoid using “deny” and “disapprove” with “user” as opposites to “approve”.

  
    Reject access request
  

  
    Admin denied user
    Disapprove user
  

Avoid using “deauthenticate” as the opposite of authenticate.

  
    Log out
    End session
  

  
    Deauthenticate
    Click to deauthenticate
  

Avoid using “grant” with “permissions” in casual UI contexts as this has become outdated.

  
    Assign permissions to user
    Give user access to reports
  

  
    Grant permissions to user
  

Avoid using “read” for viewing UI elements like profiles, permissions and roles.

  
    View user profile
    View role details
  

  
    Read user profile
    Read permissions
  

Avoid using “write” for editing or modifying UI elements.

  
    Edit permissions
    Modify settings
  

  
    Write permissions
    Write role details
    Write to database
  

Avoid using “delete” for simple removals; use “delete” only for permanent erasure. 

  
    Unassign
    Remove user from team
    Remove role from user
    Delete user account (permanent)
    Delete file (permanent)
  

  
    Delete user from team
    Delete role from user
  

Avoid using “revoke” with people and users as direct objects.

  
    Revoke all permissions
    Revoke API key
  

  
    Revoke user
    Revoke the employee
  

## Dos and Don’ts

  
    
      Do ensure role behaviors are transparent and easy to understand
      Do use clear, descriptive role names that reflect user responsibilities
      Do group related permissions logically within roles
    
  
  
    
      Don’t create excessive amounts of roles because this causes confusion
      Don’t create overlapping roles with unclear differences
    
  

## Related

- [UI terminology](./ui-terminology.md)
- [License management](./license-management.md)
