# Localization - Writing

> Writing guidance for localization.

# Localization - Writing

UX writers are the text experts in the product development team and therefore should understand localization. This page gives recommendations on how UX writers can support localization teams and translators to minimize internationalization challenges.

## Consider translation

Create translation-friendly texts while thinking like a translator and asking the question: “Is the text understandable without the visual context?”.
In the example below, UX writers should ask themselves whether a tool instance is being deleted or whether something is being named.
It is also unclear whether “complete” is an adjective or a verb.

	
		"Delete template for tool instance IDs"
	

	
		"Delete complete tool instance ID naming"
	

For translators, user interface texts are stand-alone, short, and to the point. And they often get little to no context. Thus, translators and AI can only produce a reliable translation if the terms are:

- Predominant
- Precise
- Unambiguous

## Use domain terminology

Use terms from standardization bodies (e.g. [ISO](https://iso.org), [EN](https://cen.eu), [UL](https://ul.com), [IEC](https://iec.ch)) or experts from universities and global specialized companies, but avoid terms from quasi-industrial standards.

	
		"Economy"
	

	
		"Standby"
	

Note: The [Commission Regulation (EU) 2023/826](https://eur-lex.europa.eu/eli/reg/2023/826/oj?uri=CELEX:32023R0826) specifies the maximum power consumed by a device (e.g., 0.5 W) in order to use the term “standby".

Common language serves multiple purposes:

- Clarity of communication, common understanding between people and companies
- Applicability across multiple systems, tools, hardware, etc.
- Openness to third parties, breaking up of silos
- Foundation for artificial intelligence

## Consider that terms are used in different ways

Many terms have various meanings related to a specific context or domain.
Use the terminology domain database to maintain a common language.
UX writers should request terms from the terminology maintainers of the domain if the term is not yet defined (via terminology databases if available).
Then UX writers should review the UI texts together with domain experts, and ensure that translations are done by translators with domain knowledge.

### Example: The term "title" and its meanings

- Predominant meaning: An appellation of dignity, honor, distinction, or preeminence attached to a person or family by virtue of rank, office, precedent, privilege, attainment or lands
- Descriptive name: [Appellation](https://www.merriam-webster.com/dictionary/appellation)
- A person holding a title especially of nobility
- A similar distinguishing name of a musical composition or a work of art
- All the elements constituting legal ownership
- A descriptive or general heading (as of a chapter in a book)

One meaning always dominates regardless of context. That is the meaning that can be used without creating confusion. However, if this dominant meaning does not fit the context, an alternative term (unambiguous synonym) must be used to eliminate misunderstandings.

	
		Academic title
		Heading
		Name
		Ownership
	

	
		Title (professor, doctor xyz)
		Title of a book (War and peace)
		Title of an object (Intelligent Valve)
		Title to an asset (Owned by Mr./Ms. xyz)
	

In addition, the alternative term substantially increases the probability of correct interpretation by artificial intelligence (as part of translation, machine learning, or any other use).

## Avoid misunderstandings

Avoid possible causes of misunderstandings by:

- Grouping the texts by use cases.
- Only using the predominant meaning of the term.
- Annotating texts with a description (if supported by translation framework and file format).

## Avoid directional terms on UI

Directional terms might be incorrect if the user interface is mirrored for [RTL languages](./overview.md#ltr-rtl).
Use direction agnostic texts instead.

	
		Site pane
		Vertical navigation
	

	
		Right pane
		Left navigation
	

## Manage space for translations

Follow these steps to ensure that translations have enough space in the user interface:

1. Design UI by prioritizing flexible layouts, identify areas with limited text space, and always allocate more space than you think you'll need.
1. Write English texts, keeping conciseness in mind from the start.
1. Determine reasonable limits and provide it to the translation management.
1. Request translations.
1. Test every screen with translated texts in languages known for their long translations (German, Finnish, Greek and some Slavic languages).
1. Revisit the UI design or the original texts if a translator cannot convey the meaning within the limit.

Fixing UI issues caused by long translations late in the development cycle is expensive and time-consuming.

## Be aware of length increase

Always design with translation in mind, assuming text will grow:

1. **Layout breakage:** Fixed-width elements may not accommodate longer text, which can result in overflows, line breaks in awkward places, or text disappearing completely.
2. **Truncation:** If text is truncated, important instructions or information may be invisible, which can lead to frustration and misuse.
3. **UI inconsistency:** Different languages require different amounts of space, which makes it difficult to maintain a consistent look and feel.

Keeping these differences in length for translations in mind supports the whole design team to create localization-friendly designs.

Although the exact length of a translation cannot be predicted, there are some generally accepted rules of thumb:

- Short texts (1-10 characters) typically increase by 200-300% (e.g. EN: "On" → DE: "Eingeschaltet").
- Medium texts (11-20 characters) typically increase by 100-200% (e.g. EN: "Withdraw request" → DE: "Anfrage zurückziehen").
- Longer texts (21-50 characters) typically increase by 50-100%.
 Very long texts (50+ characters) typically increase by 30-50% but are sometimes shorter than the original.

## Limit space if required

Identify UI elements which truly offer limited space, even if a flexible design is the preferred choice.
The following UI elements may require text length restrictions, measured in either character count or pixel width:

- Buttons
- Tab labels
- Navigation menu items
- Table headers
- Input field labels

## Consider pluralization rules

Each language has its own grammatical rules that specify how texts containing numbers must be presented.
It is important to consider these different rules early in the UX writing and implementation process to ensure that the product can be localized correctly.

### Pluralization examples

Pluralization of the English term "apple":
- 0: I own no apple.
- 1: I own one apple.
- n: I own four apples.

Pluralization of the Polish term "Plik"  (English:file):
- 1 plik
- 2, 3, 4 pliki
- 5-21 plików
- 22-24 pliki
- 25-31 plików

## Use localization to handle pluralization

Pluralization cannot be handled by product code or writing style. Use localization (e.g. ICU or framework plural rules) instead.

	
		"Delete &#123;count&#125; rows?"
		"Delete &#123;rowName&#125;?"
	

	
		"Delete &#123;count&#125; row(s)?"
		`if (count == 1) { "1 row" } else { "{count} rows" }`
	

## Consider different linguistic rules

Depending on the language there might be up to 6 forms. The following language specific variability exists:

| Forms | Grammatical rules                                                                                                   | Languages      |
| :---: | ------------------------------------------------------------------------------------------------------------------- | -------------- |
|   1   | No distinction between the singular and plural form                                                                 | e.g. Japanese  |
|   2   | Singular used for one only                                                                                          | e.g. English   |
|   2   | Singular used for zero and one                                                                                      | e.g. French    |
|   3   | Special case for zero                                                                                               | Latvian        |
|   3   | Special cases for one and two                                                                                       | Gaelic (Irish) |
|   3   | Special case for numbers ending in `00` or `[2-9][0-9]`                                                             | Romanian       |
|   3   | Special case for numbers ending in `1[2-9]`                                                                         | Lithuanian     |
|   3   | Special cases for numbers ending in `1` and `2`, `3`, `4`, except those ending in `1[1-4]`                          | e.g. Russian   |
|   3   | Special cases for `1` and `2`, `3`, `4`                                                                             | e.g. Czech     |
|   3   | Special case for one and some numbers ending in `2`, `3`, or `4`                                                    | Polish         |
|   4   | Special case for one and all numbers ending in `02`, `03`, or `04`                                                  | Slovenian      |
|   6   | Special cases for one, two, all numbers ending in `02`, `03`, … `10`, all numbers ending in `11` … `99`, and others | Arabic         |

The [plural rules specification](https://cldr.unicode.org/index/cldr-spec/plural-rules) from the Unicode Common Locale Data Repository (CLDR) contains a detailed linguistic analysis.

## Provide user-friendly language selection

Provide each language name in the target language for the language switcher.

	
		English
		Deutsch
		Français
		Italiano
		Ελληνικά
		中文
	

	
		英语
		德语
		法语
		意大利语
		希腊
		中文
	

## Avoid text concatenations

Building sentences from fragments prevents correct grammar in many languages.
Keep sentences as one unit with placeholders.

	
		EN: "Select site &#123;site&#125; of &#123;company&#125;?"
		DE: "Standort &#123;site&#125; von &#123;company&#125; auswählen?"
	

	
		EN: "Select site " `+` `&#123;site&#125;` `+` " of " `+` `&#123;company&#125;` `+` "?"
		DE: "Standort auswählen " `+` `&#123;site&#125;` `+` " von " `+` `&#123;company&#125;` `+` "?"
	

Note: The verb (EN:"select" / DE:"auswählen") is at the beginning of the sentence in English but at the end in German.

## Define named placeholders

Keep sentences understandable even with placeholders.

	
		"Reactivating site &#123;name&#125; within activation period: &#123;startDate&#125; – &#123;endDate&#125;"
	

	
		"Reactivating site &#123;1&#125; within activation period: &#123;2&#125; – &#123;3&#125;"
	

## Avoid hard-coding formats

Use locale-aware formatting, and avoid creating UI text that depends on one single format. This helps users to understand times, values, etc. and strengthens their confidence in using the system.

	
		Use the localization framework
		Use placeholders in text: "Saved on &#123;date&#125;"
	

	
		"02/03/2026" (ambiguous)
		"1,234" in all languages (ambiguous, less or greater than 2?)
	

## Provide UX writing specifications

Providing project-specific UX writing specifications helps developers group texts by use cases and determine when a text can be reused or whether a specific context needs to be taken into account.
Non-concatenated texts with readable placeholder names, combined with translation libraries, enable efficient, high-quality localization.

## Group texts

Translators translate texts individually.
In order to understand the context and maintain consistency, it is necessary to have related texts close together.
Related texts can be brought together by grouping texts based on use cases (e.g. My account → Theme selection) along with meaningful (key) names.

	
		`ACCOUNT.LOGOUT.CANCEL:` Cancel
		`ACCOUNT.LOGOUT.HEADING:` Log out
		`ACCOUNT.LOGOUT.LOG_OUT_NOW:` Log out now?
		`ACCOUNT.LOGOUT.LOGGING_OUT:` Logging out…
		`ACCOUNT.SETTINGS.HEADING:` Settings
		`ACCOUNT.SETTINGS.THEME:` Theme
		`ACCOUNT.SETTINGS.THEME_OPTIONS.AUTO:` Auto
		`ACCOUNT.SETTINGS.THEME_OPTIONS.DARK:` Dark
		`ACCOUNT.SETTINGS.THEME_OPTIONS.LIGHT:` Light
		`LEGAL.ABOUT:` About
		`LEGAL.IMPRINT:` Corporate Information
		`LEGAL.PRIVACY_POLICY:` Privacy Notice
		`LEGAL.VERSION:` Version &#123;&#123;version&#125;&#125;
	

	
		`ABOUT:` About
		`AUTO:` Auto
		`CANCEL:` Cancel
		`DARK:` Dark
		`IMPRINT:` Corporate Information
		`LIGHT:` Light
		`LOG_OUT_NOW:` Log out now?
		`LOGGING_OUT:` Logging out…
		`LOGOUT:` Log out
		`PRIVACY_POLICY:` Privacy Notice
		`SETTINGS:` Settings
		`THEME:` Theme
		`VERSION:` Version &#123;&#123;version&#125;&#125;
	

## Reuse texts

Before writing a new text, check whether one with the exact same meaning already exists.

	
		`COMMON.SAVE:` Save
	

	
		`USERS.EDIT_USER.SAVE:` Save
		`DEVICES.EDIT_DEVICE.SAVE:` Save
	

Reusing the same instance of text has the following advantages:

- Reduces the volume sent to translators and lowers cost.
- Increases the efficiency of product development and maintenance.
- Keeps translation unique in every supported language.
- Helps identify duplicated functionality.

However, be careful when changing approved, reused texts to ensure that their meaning is preserved.

## Consider different contexts

An English text may require different translations in different contexts.
In such cases, a separate text must be created.
If in doubt, create a separate text for each use, even if the English text appears to be identical.

	
		`COMMON.CANCEL:` "Cancel" for processes only
		Translation to German: "Abbrechen"
		Add `CONTRACT.CANCEL:` "Cancel" for contracts
		Translation to German: "Stornieren"
	

	
		`CANCEL:` "Cancel" in context of process and contract
		Translation to German: "Abbrechen" or "Stornieren"?
	

## Use translation libraries

Packages based on the [Unicode CLDR](https://cldr.unicode.org/) like `@angular/common` and built-in runtime objects like `Intl` provide complete and high quality translations for:

- Language and script names
- Countries
- Regions
- Currencies
- Months and days
- Time zones

:::info
For Siemens employees and partners, the Element design system provides pretranslated texts for components and can be accessed [here](https://simpl.code.siemens.io/simpl/development/language-packs).
:::
