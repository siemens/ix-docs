# Empty state - Language

> Language guide for the ix-empty-state
# Empty state - Language

## Best practice template

We follow this three-step approach when creating our empty-state messages. They explain why data is missing, suggest how to populate it, or offer links to relevant tools and documentation. Although not every empty-state message in a product requires all three steps, aim for this whenever possible.

| Step | Purpose      | Description                                                                                                                 | Example                                                               |
| :--- | :----------- | :-------------------------------------------------------------------------------------------------------------------------- | :-------------------------------------------------------------------- |
| 1.   | Heading      | Explain this is empty intentionally and should be there, i.e. this empty space is not an error.                             | No projects added                                                     |
| 2.   | Description  | Give a clear reason why this space is empty. Provide context to help users understand the purpose of the empty-state space. | To display projects here, first add a project from your Project list. |
| 3.   | Instructions | Explain how users can fill the space by adding links, buttons and suggestions to move the user forward.                     | Add projects                                                          |

## General rules

Use the template when the error stops users moving forward.

<div className="dos-and-donts">
  <div className="dos">
    <ul aria-label="Recommended practices">
      <li><div>Heading: No zones added<br/>
      Description: Add zones to your profile to see them listed here.<br/>
      Button: Add zones</div></li>
    </ul>
  </div>

  <div className="donts">
    <ul aria-label="Practices to avoid">
      <li><div>Heading: No zones created<br/>
      Description: Add region from your dashboard.<br/>
      Button: Make sectors</div></li>
    </ul>
  </div>
</div>

Use clear action verbs to show users how to fill the empty state.

<div className="dos-and-donts">
  <div className="dos">
    <ul aria-label="Recommended practices">
      <li><div>Heading: No users added <br />
      Description: Add users in User management.<br />
      Button: Open User management</div></li>
    </ul>
  </div>
</div>

Use neutral framing of the empty state and avoid making it seem like a user failure.

<div className="dos-and-donts">
<div className="dos">
  <ul aria-label="Recommended practices">
    <li>No users added</li>
  </ul>
</div>

<div className="donts">
  <ul aria-label="Practices to avoid">
    <li>You haven’t added any of your users</li>
  </ul>
</div>
</div>

Avoid “yet” or other expectation-related terms in headings.

<div className="dos-and-donts">
<div className="dos">
  <ul aria-label="Recommended practices">
    <li>Heading: No users added</li>
  </ul>
</div>

<div className="donts">
  <ul aria-label="Practices to avoid">
    <li>Heading: No users added yet</li>
  </ul>
</div>
</div>

## Dos and Don’ts

<div class="dos-and-donts">
  <div class="dos">
    <ul aria-label="Recommended practices">
      <li>Do make all messages consistent in terms of grammar and punctuation</li>
      <li>Do make sure users understand the space is not an error or a bug</li>
      <li>Do provide an option to fill the empty space with a button or link</li>
    </ul>
  </div>
  <div class="donts">
    <ul aria-label="Practices to avoid">
      <li>Don’t overcommunicate about the function of the empty state</li>
    </ul>
  </div>
</div>

## Related

- [Icon usage](../../../icons/icon-usage.mdx)
- [Error messages](./error-messages.mdx)
- [Warning messages](./warning-messages.mdx)
- [Non-critical information messages](./non-critical-information-messages.mdx)
