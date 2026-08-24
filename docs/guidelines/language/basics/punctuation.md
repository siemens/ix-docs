---
sidebar_position: 3
sidebar_label: Punctuation
title: Punctuation
doc-type: 'banner'
component-tabs: ['']
no_single_tab: true
description: 'We recommend a minimal approach to punctuation as it can add cognitive load and presents consistency challenges across products, portfolios and teams.'
---

#

## Ampersand `&`

Use only when part of an official or registered product or company name. Although space-saving, many screen readers are unable to interpret ampersands correctly.

<div class="dos-and-donts">
  <div class="dos">
    <ul aria-label="Recommended practices">
      <li>Legal and logistics</li>
      <li>Documents and downloads</li>
    </ul>
  </div>
  <div class="donts">
    <ul aria-label="Practices to avoid">
      <li>Legal & logistics</li>
      <li>Documents & downloads</li>
    </ul>
  </div>
</div>

The common phrase "About & legal" always uses the ampersand. This is the only exception in our guidelines for ampersand use.

<div class="dos-and-donts">
  <div class="dos">
    <ul aria-label="Recommended practices">
      <li>About & legal</li>
    </ul>
  </div>
  <div class="donts">
    <ul aria-label="Practices to avoid">
      <li>About and legal</li>
    </ul>
  </div>
</div>

## Apostrophe `’`

Apostrophes look like a single quotation mark, show ownership and create contractions (I'm, you're, they're).

<div class="dos-and-donts">
  <div class="dos">
    <ul aria-label="Recommended practices">
      <li>customer's role (single customer)</li>
      <li>customers' roles (multiple customers)</li>
      <li>The folder’s contents are displayed in the dashboard.</li>
      <li>Today's date is displayed in the banner.</li>
    </ul>
  </div>
</div>

With our minimal punctuation approach, we limit apostrophes by using nouns as adjectives.

<div class="dos-and-donts">
  <div class="dos">
    <ul aria-label="Recommended practices">
      <li>Select file location.</li>
      <li>Edit user profile information.</li>
      <li>View employee details.</li>
      <li>Set time format.</li>
    </ul>
  </div>
  <div class="donts">
    <ul aria-label="Practices to avoid">
      <li>Select the file's location.</li>
      <li>Edit user's profile information.</li>
      <li>View employee's details.</li>
      <li>Set the time's format.</li>
    </ul>
  </div>
</div>

## Asterisk `*`

Use a single asterisk to indicate required fields. Place them immediately after the text without a space. A legend explaining what the asterisk means, typically at the top of forms, is no longer necessary as asterisks are widely understood to mean mandatory.

Note: Consider adding asterisks automatically via attributes within your component to remove the manual load and prevent duplication. See [Forms field (component)](../../../components/forms-field/guide.md).

<div class="dos-and-donts">
  <div class="dos">
    <ul aria-label="Recommended practices">
      <li>Device name*</li>
    </ul>
  </div>
  <div class="donts">
    <ul aria-label="Practices to avoid">
      <li>Device name *</li>
    </ul>
  </div>
</div>

## Bullet points `•`

Use bullet points to break down complex information into scannable, digestible chunks. They help users quickly identify key points and reduce cognitive load. Use consistent bullet styles within a single list or section.

For unordered lists, use round bullets (•). For ordered lists, use numbers followed by a period (1.). Maintain parallel structure; if one item is a complete sentence, make all items complete sentences.

Add one space after the bullet point or number before the text begins.

<div class="dos-and-donts">
  <div class="dos">
    <ul aria-label="Recommended practices">
      <li>Key features:<br/>&nbsp;&nbsp;&bull; Real-time monitoring<br/>&nbsp;&nbsp;&bull; Automated alerts<br/>&nbsp;&nbsp;&bull; Custom dashboards</li>
      <li>Setup steps:<br/>1 Connect device<br/>2. Configure settings<br/>3. Start monitoring</li>
      <li>Benefits include:<br/>&nbsp;&nbsp;&bull; Increased efficiency across all operations.<br/>&nbsp;&nbsp;&bull; Reduced downtime through predictive maintenance.<br/>&nbsp;&nbsp;&bull; Enhanced visibility into system performance.</li>
    </ul>
  </div>
</div>

## Colon `:`

Use to introduce lists, options, descriptions, settings and preferences to visually separate labels and input fields. Colons help to enhance readability when both the labels and input area are not visually distinguishable. When it's clear within the interface what needs to be completed, remove the colon.

<div class="dos-and-donts">
  <div class="dos">
    <ul aria-label="Recommended practices">
      <li>Username <span style={{color: 'yellow'}}>Felix</span> (color to distinguish fields)</li>
      <li>Username: Felix (colon to visually separate label and field)</li>
    </ul>
  </div>
</div>

## Comma `,`

Use commas to separate data in lists for clarity.

<div class="dos-and-donts">
  <div class="dos">
    <ul aria-label="Recommended practices">
      <li>Jane Roe, Admin, 3 plant zones</li>
    </ul>
  </div>
  <div class="donts">
    <ul aria-label="Practices to avoid">
      <li>Jane Roe Admin 3 plant zones</li>
    </ul>
  </div>
</div>

The Oxford comma is placed before the final "and" or "or" in a list of three or more items. It is acceptable to use and can help avoid ambiguity, but omit it when space is limited in the UI. Remove the Oxford comma especially if it causes text to wrap or overflow in constrained UI elements such as labels, tooltips or buttons.

<div class="dos-and-donts">
  <div class="dos">
    <ul aria-label="Recommended practices">
      <li>Save, print or share this document.</li>
      <li>Settings include notifications, privacy, and security.</li>
      <li>Status: Connected to WLAN, Bluetooth, and USB.</li>
      <li>Before proceeding, save your work, close all applications, and disconnect external devices.</li>
      <li>Mix components A and B, catalyst C, and hardener D in separate containers.</li>
    </ul>
  </div>
</div>

## Ellipsis `…`

Use ellipsis with transitional text to inform users that something is happening and ongoing. There are never spaces between the text and the ellipsis.

<div class="dos-and-donts">
  <div class="dos">
    <ul aria-label="Recommended practices">
      <li>Searching…</li>
      <li>Retrieving notifications…</li>
    </ul>
  </div>
  <div class="donts">
    <ul aria-label="Practices to avoid">
      <li>Searching . . .</li>
      <li>Retrieving notifications.</li>
    </ul>
  </div>
</div>

They are also sometimes used to show that a new dialog box will open within the UI, e.g. "Print…" or "Save as…", but as this comes with consistency challenges it is slowly being removed from UX writing guidelines.

<div class="dos-and-donts">
  <div class="dos">
    <ul aria-label="Recommended practices">
      <li>Save as</li>
    </ul>
  </div>
  <div class="donts">
    <ul aria-label="Practices to avoid">
      <li>Save as…</li>
    </ul>
  </div>
</div>

## Hyphen `‐`

Hyphens join words together (drop-down menu) and connect prefixes to words (non-technical). Use hyphens to avoid confusion and enhance readability. Never use spaces before or after the hyphen.

<div class="dos-and-donts">
  <div class="dos">
    <ul aria-label="Recommended practices">
      <li>read-only memory</li>
      <li>user-friendly</li>
      <li>pre-provisioned</li>
    </ul>
  </div>
  <div class="donts">
    <ul aria-label="Practices to avoid">
      <li>preprovisioned</li>
    </ul>
  </div>
</div>

Remove hyphens for widely understood terms that have evolved beyond needing them.

<div class="dos-and-donts">
  <div class="dos">
    <ul aria-label="Recommended practices">
      <li>email</li>
      <li>database</li>
      <li>ecommerce</li>
    </ul>
  </div>
  <div class="donts">
    <ul aria-label="Practices to avoid">
      <li>e-mail</li>
      <li>data-base</li>
      <li>e-commerce</li>
    </ul>
  </div>
</div>

## Minus sign `−`

Use the proper minus sign (−) rather than a hyphen (-) when expressing negative values or subtraction. In UI contexts such as labels, values or data displays, the minus sign should be used to ensure mathematical clarity. The minus sign should be placed directly before the number with no intervening space except for mathematical operations for readability. See [Formatting of Numbers and percentages](../formatting/numbers.mdx).

<div class="dos-and-donts">
  <div class="dos">
    <ul aria-label="Recommended practices">
      <li>The temperature dropped to −12°C</li>
      <li>Balance: −$50.00</li>
      <li>10 − 3 = 7</li>
    </ul>
  </div>
  <div class="donts">
    <ul aria-label="Practices to avoid">
      <li>The temperature dropped to -12°C (hyphen as minus sign)</li>
      <li>Balance: -$50.00 (hyphen as minus sign)</li>
      <li>10-3=7</li>
    </ul>
  </div>
</div>

## En and em dashes `– —`

They look similar, but there are two dashes and we use them differently from hyphens and the minus sign.

Use the smaller en dash to connect times, numbers and date ranges. Use the longer em dash to replace commas, brackets or colons.

Don't use spaces when using en dashes for number ranges. In all other cases, add spaces before and after en dashes and em dashes for digital readability.

Em dashes are often used in longer texts to make part of the text stand out, such as telling users about special or new application features. To avoid em dash overuse, we typically use commas instead within UI text to connect phrases.

<div class="dos-and-donts">
  <div class="dos">
    <ul aria-label="Recommended practices">
      <li>Maintenance planned Monday – Thursday (en dash)</li>
      <li>Threshold range: 15–20 (en dash)</li>
      <li>Our new obsolescence feature, available now, gives you more sustainability opportunities</li>
    </ul>
  </div>
  <div class="donts">
    <ul aria-label="Practices to avoid">
      <li>Maintenance planned Monday - Thursday (hyphen)</li>
      <li>Threshold range: 15-20 (hyphen)</li>
      <li>Our new obsolescence feature — available now — gives you more sustainability opportunities (em dashes)</li>
    </ul>
  </div>
</div>

## Exclamation mark `!`

Use only for high-level alarms. We don't use them for messages, notifications or for any other communication with our users. And, as the exclamation mark is often within warning icons, it doesn't need to be added to text to signify the strength of our messaging.

<div class="dos-and-donts">
  <div class="dos">
    <ul aria-label="Recommended practices">
      <li>Critical system error detected. Immediate attention required!</li>
    </ul>
  </div>
  <div class="donts">
    <ul aria-label="Practices to avoid">
      <li>Welcome to your dashboard!</li>
    </ul>
  </div>
</div>

## Forward slash `/`

Use forward slashes sparingly in UI text. They work well for established patterns and technical contexts, but can reduce clarity and accessibility. Forward slashes are appropriate for established UI patterns like on/off and country/region, mathematical fractions, file paths, and compact form labels where space is limited. Use lowercase in body text (on/off) and sentence case following standard capitalization rules (see Capitalization guide). Use lowercase after the slash unless it’s a proper noun.

Avoid spaces before or after the slash unless spaces enhance clarity in larger text blocks or when there is complex formatting where spaces can enhance readability.

<div class="dos-and-donts">
  <div class="dos">
    <ul aria-label="Recommended practices">
      <li>country/region</li>
      <li>3/4 cup</li>
      <li>Toggle on/off</li>
      <li>C:/Program Files/Industry</li>
      <li>Enable notifications and/or alerts</li>
    </ul>
  </div>
  <div class="donts">
    <ul aria-label="Practices to avoid">
      <li>country / region</li>
      <li>3 / 4 cup</li>
      <li>Click Save/Export</li>
      <li>C: / Program Files / Industry</li>
      <li>Enable notifications and / or alerts</li>
    </ul>
  </div>
</div>

## Parentheses and brackets

There are several types of parentheses (also known as brackets). For all variations, there are no spaces between the parentheses and the text within them. However, there are spaces before and after all variations except when followed by another punctuation mark.

### Round `( )`

Use sparingly to give users additional information or clarify messaging. Consider alternative punctuation first, e.g. commas or dashes. Use when the information is supplementary but helpful.

<div class="dos-and-donts">
  <div class="dos">
    <ul aria-label="Recommended practices">
      <li>Available in multiple formats (PDF, DOCX, TXT)</li>
      <li>Review the settings (see Figure 1).</li>
    </ul>
  </div>
  <div class="donts">
    <ul aria-label="Practices to avoid">
      <li>Our new software version is here. Get ready for enhanced features, improved performance (and a seamless user experience).</li>
    </ul>
  </div>
</div>

### Curly `\{ \}`

Use for variables, placeholders and programming.

<div class="dos-and-donts">
  <div class="dos">
    <ul aria-label="Recommended practices">
      <li>Service alert: `{deviceId}` - `{errorCode}`</li>
      <li>Template: `{customerName}`</li>
    </ul>
  </div>
</div>

### Square `[ ]`

Rarely used within UI text. Sometimes used for units but more common within academic authoring, quotes and translations to indicate errors, omissions or text in other languages.

<div class="dos-and-donts">
  <div class="dos">
    <ul aria-label="Recommended practices">
      <li>Save assets, e.g. valves [Ventil] within your plant zones.</li>
      <li>"A real game-changer for the [food and beverage] industry."</li>
      <li>Room temperature [°C]</li>
    </ul>
  </div>
</div>

### Angular `< >`

Use to show file paths and navigation more clearly in applications. Add spaces before and after for enhanced readability except when followed by another punctuation mark.

<div class="dos-and-donts">
  <div class="dos">
    <ul aria-label="Recommended practices">
      <li>Open > Open file > Upload file > Save</li>
    </ul>
  </div>
  <div class="donts">
    <ul aria-label="Practices to avoid">
      <li>Open>Open file>Upload file>Save</li>
    </ul>
  </div>
</div>

## Periods / full stops `.`

Use consistently. We use full stops at the end of all full sentences and file extensions (.csv .txt .zip).

<div class="dos-and-donts">
  <div class="dos">
    <ul aria-label="Recommended practices">
      <li>Heading: No zones created</li>
      <li>Description: Create zones from your dashboard.</li>
    </ul>
  </div>
  <div class="donts">
    <ul aria-label="Practices to avoid">
      <li>Heading: No notifications.</li>
      <li>Description: We'll notify you when there are updates or activities related to your account.</li>
    </ul>
  </div>
</div>

When creating lists or using bullet points, use full stops for full sentences. If even one item in your list requires a full stop, add full stops to all items to keep punctuation consistent.

<div class="dos-and-donts">
  <div class="dos">
    <ul aria-label="Recommended practices">
      <li>List items:<br/>
      &nbsp;&nbsp;&bull; Quick setup<br/>
      &nbsp;&nbsp;&bull; Easy integration<br/>
      &nbsp;&nbsp;&bull; 24/7 support</li>
    </ul>
  </div>
</div>
<div class="dos-and-donts">
  <div class="dos">
    <ul aria-label="Recommended practices">
      <li>List items:<br/>
      &nbsp;&nbsp;&bull; Quick setup is available.<br/>
      &nbsp;&nbsp;&bull; Easy integration with existing systems.<br/>
      &nbsp;&nbsp;&bull; 24/7 support for all users.</li>
    </ul>
  </div>
</div>

We do not use full stops for toast messages (brief pop-ups), headings, titles or icon/button text labels. No space before a full stop. Only one space after a full stop between sentences.

<div class="dos-and-donts">
  <div class="dos">
    <ul aria-label="Recommended practices">
      <li>Assets deleted (toast message)</li>
      <li>Home (icon label)</li>
    </ul>
  </div>
  <div class="donts">
    <ul aria-label="Practices to avoid">
      <li>Assets deleted. (toast message)</li>
      <li>Home. (icon label).</li>
    </ul>
  </div>
</div>

## Question mark `?`

Question marks are appropriate for genuine informational questions, in help text and search prompts. However, avoid them in headings, even when phrased as questions, to maintain a confident and declarative tone.

<div class="dos-and-donts">
  <div class="dos">
    <ul aria-label="Recommended practices">
      <li>Need help? Contact support.</li>
      <li>What are you looking for?</li>
      <li>What's new with Version 3.4?</li>
    </ul>
  </div>
  <div class="donts">
    <ul aria-label="Practices to avoid">
      <li>What's new with Version 3.4?</li>
    </ul>
  </div>
</div>

State consequences clearly and use direct language that empowers users rather than questioning their choices. Avoid "Are you sure...?" phrasing specifically, as this can seem patronizing and undermines user confidence.

<div class="dos-and-donts">
  <div class="dos">
    <ul aria-label="Recommended practices">
      <li>Deleted users lose their access immediately.</li>
    </ul>
  </div>
  <div class="donts">
    <ul aria-label="Practices to avoid">
      <li>Are you sure you want to delete users?</li>
    </ul>
  </div>
</div>

Never use multiple question marks for emphasis. Use one space after a question mark when it appears mid-sentence, and no space before.

<div class="dos-and-donts">
  <div class="donts">
    <ul aria-label="Practices to avoid">
      <li>Really???</li>
      <li>Need help ?</li>
    </ul>
  </div>
</div>

## Quotation marks `" "`

Use consistent quotation marks throughout the UI. We typically use straight double quotation marks, not single or curly, for direct quotes and to highlight UI text when it improves readability. Use quotation marks to differentiate UI elements only when the same word appears multiple times in close proximity or when clarity requires it. Avoid overusing quotation marks around UI elements as most of the time, the context is clear without them.


<div class="dos-and-donts">
  <div class="dos">
    <ul aria-label="Recommended practices">
      <li>Select Save to apply a time zone</li>
    </ul>
  </div>
  <div class="donts">
    <ul aria-label="Practices to avoid">
      <li>Select "Save" to apply a time zone.</li>
    </ul>
  </div>
</div>

Never use quotation marks for emphasis or to add informal tone. No space between quotation marks and the enclosed text. One space after the closing quotation mark when mid-sentence.

<div class="dos-and-donts">
  <div class="dos">
    <ul aria-label="Recommended practices">
      <li>Customers said, and I quote, it was "a real gamechanger for the industry."</li>
    </ul>
  </div>
  <div class="donts">
    <ul aria-label="Practices to avoid">
      <li>This feature is "amazing" for productivity.</li>
    </ul>
  </div>
</div>

## Semi-colon `;`

Use semi-colons to separate key application features to enhance and contrast them, and to present steps or sequential information. We prefer using commas or short sentences instead as semi-colons are easily misused and misunderstood. No space before a semicolon. One space after a semicolon when mid-sentence.

<div class="dos-and-donts">
  <div class="dos">
    <ul aria-label="Recommended practices">
      <li>The system is offline; check your connection.</li>
      <li>Our app offers real-time plant updates; personalized dashboards; and interactive maps.</li>
      <li>Our app offers real-time plant updates, personalized dashboards and interactive maps.</li>
      <li>1. Calibrate sensors;<br/>2. Set operating parameters;<br/>3. Start the process.</li>
    </ul>
  </div>
  <div class="donts">
    <ul aria-label="Practices to avoid">
      <li>The system is offline ;check your connection.</li>
      <li>The system is offline;check your connection.</li>
    </ul>
  </div>
</div>

## Tilde `~`

Use the tilde primarily in technical contexts to indicate approximation and home directories in file paths. In UI text, we prefer "approximately" or "about" for better clarity and accessibility when there is space within the UI. Add spaces before and after the tilde when using it to mean "approximately" in text. Remove spaces when used in file paths or technical notation.

<div class="dos-and-donts">
  <div class="dos">
    <ul aria-label="Recommended practices">
      <li>File path: ~/Documents/Projects</li>
      <li>Processing time: ~ 5 minutes</li>
      <li>Processing time: about 5 minutes</li>
      <li>Temperature range: approximately 20–25°C</li>
    </ul>
  </div>
  <div class="donts">
    <ul aria-label="Practices to avoid">
      <li>File path: ~ / Documents / Projects</li>
      <li>Processing time: ~5minutes</li>
    </ul>
  </div>
</div>

## Trademark symbols `™` `®`

Use the correct symbol for the correct context. ™ is used for unregistered trademarks, ® is used for registered trademarks. Always follow Siemens brand guidelines when applying trademark symbols to product and service names.

Only use the trademark symbol on the first mention of the name on a page or screen. Don't repeat it every time the name appears.

Never place a space between the name and the symbol. Don't alter the size or position of the symbol, it should always appear as a superscript.

<div class="dos-and-donts">
  <div class="dos">
    <ul aria-label="Recommended practices">
      <li>BrandName™</li>
      <li>BrandName®</li>
    </ul>
  </div>
  <div class="donts">
    <ul aria-label="Practices to avoid">
      <li>BrandName ™</li>
      <li>BrandName ™®</li>
    </ul>
  </div>
</div>

Note: If you are unsure whether a product name is a registered or unregistered trademark, check with your legal or brand team before publishing. Using the wrong symbol can have legal implications.

## Punctuation and spacing

**Spaces before punctuation:** As a general rule, there are no spaces between text and its following punctuation.

<div class="dos-and-donts">
  <div class="dos">
    <ul aria-label="Recommended practices">
      <li>The system, now fully updated, is ready to use.</li>
    </ul>
  </div>
  <div class="donts">
    <ul aria-label="Practices to avoid">
      <li>The system , now fully updated , is ready to use.</li>
    </ul>
  </div>
</div>

Spaces after punctuation: Use only one space after periods (full stops), commas, semicolons, colons, exclamation marks, question marks and quotation marks.

<div class="dos-and-donts">
  <div class="dos">
    <ul aria-label="Recommended practices">
      <li>Welcome to your new app experience. Log in to see more.</li>
    </ul>
  </div>
  <div class="donts">
    <ul aria-label="Practices to avoid">
      <li>Welcome to your new app experience. &nbsp;&nbsp;&nbsp;Log in to see more.</li>
    </ul>
  </div>
</div>

Spaces before and after punctuation: No spaces inside parentheses or quotation marks.

<div class="dos-and-donts">
  <div class="dos">
    <ul aria-label="Recommended practices">
      <li>Our new software version is here. Get ready for enhanced features (and a seamless user experience).</li>
    </ul>
  </div>
  <div class="donts">
    <ul aria-label="Practices to avoid">
      <li>Our new software version is here. Get ready for enhanced features (  and a seamless user experience  ).</li>
    </ul>
  </div>
</div>

## Related

- [Messages overview](../messaging/messages-overview.md)
- [Progress updates](../messaging/progress-updates.mdx)
