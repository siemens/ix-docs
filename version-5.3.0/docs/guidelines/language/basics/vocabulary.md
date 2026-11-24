# Vocabulary

> Explore common vocabulary themes and challenges in UX writing. This section guides you on using the correct and most effective words to create easily understandable content.

## Word length

Use short words instead of long words (8 letters or more) when possible.

	
		Start pump
		Set flow rate
	

	
		Initialize hydraulic mechanism
		Configure movement parameters
	

Keep sentences under 25 words (the average is 15 words) and break up longer sentences.

	
		Pressure exceeds safe limits. Reduce flow rate immediately.
	

	
		The pressure monitoring system has detected levels that are significantly above the established safety thresholds and requires immediate corrective action.
	

Keep headings, sub-headings, and email subjects under 65 characters (including spaces).

	
		Motor overheating alert
		Pump maintenance required
		Production line status
	

	
		Critical system malfunction detected - immediate maintenance required for production line
	

## Modal verbs

Modal verbs are helping words such as "can", "must" or "will". They are placed before other verbs to show possibility, permission, obligation or ability. We use some modal verbs in UI text when talking about what users can and cannot do in products.

Use "can" and "cannot" to talk about permissions and capabilities instead of "could" that indicates uncertainty.

	
		You can export the data as CSV.
		Failed to export. The system cannot export the data as CSV.
	

	
		You could export the data as CSV.
	

Use "will" to talk about definite future actions and consequences instead of "would" that indicates hesitation and doubt.

	
		The system will send a confirmation email once updated.
	

	
		The system would send a confirmation email once updated.
	

Do not use "should" when giving instructions as it indicates a recommendation, not a concrete action.

	
		Log in
	

	
		You should log in
	

Specifically avoid using the modal verbs "may" or "might" as they are unclear. Instead, state consequences clearly.

	
		Removing this device influences any asset dependencies.
	

	
		Removing this device may influence asset dependencies.
	

Avoid using "must" as this can seem aggressive and forceful. Only use it for emergencies.

	
		Enter your password.
		All software must be updated by April 23, 2027, to avoid losing data.
	

	
		You must enter your password.
	

Avoid "shall" as it sounds overly formal and legal, and readers often confuse it with "will" or "should".

	
		The system will delete these temporary files after 30 days.
	

	
		The system shall delete these temporary files after 30 days.
	

## Idioms, buzzwords and jargon

Avoid idiomatic expressions because their meaning cannot be understood literally from the words themselves, especially by non-native speakers.

	
		Resolve the issue by checking device connectivity.
	

	
		Nip this issue in the bud by checking device connectivity.
	

Avoid buzzwords as they sound corporate rather than clear.

	
		Use this feature to personalize your notifications.
	

	
		Leverage this capability to personalize your notifications.
	

Avoid jargon unless your specific audience understands the technical term better than a plain alternative.

	
		Save your changes automatically.
		PLC configuration
		Motor speed
	

	
		Enable auto-persistence of data.
		Programmable logic controller setup
		Angular velocity coefficient
	

Avoid cultural references or brand names unless functionally necessary.

	
		Mobile device
		Search online
		WLAN
	

	
		iPhone
		Google
		WiFi
	

## Phrasal verbs (multi-word verbs)

Avoid multi-word phrasal verbs when one word works.

	
		Calculate
		Continue
		Delete
		Review alarm history
	

	
		Add up
		Carry on
		Get rid of
		Look over alarm history
	

Use common industrial-application phrasal verbs when they are more familiar than one-word alternatives.

	
		Log out
		Shut down
		Start up
	

	
		Terminate
		Deactivate
		Initiate
	

## Abbreviations and acronyms

Use abbreviations and acronyms carefully. They can improve clarity for domain users, but can confuse general users. Never invent your own acronyms. Use established terminology only. See [Capitalization and proper nouns](./capitalization-and-proper-nouns) for guidance.

	
		Acknowledge
	

	
		Ack
		Akdg
	

Avoid Latin abbreviations when there is space in the UI for plain English alternatives. Although e.g. and i.e. seem to be universally understood, many non-native English speakers cannot distinguish between them.

	
		For example
		For instance
		That is
		Specifically
		And so on
	

	
		e.g.
		i.e.
		etc.
	

Use established industry-standard acronyms when your user expects them. Spell out new or less familiar acronyms on first use, then use the acronym consistently afterward.

	
		PLC configuration
		USB connection
		Access the Supervisory Control and Data Acquisition (SCADA) dashboard to view production metrics. Update SCADA alarm thresholds as needed.
	

	
		Programmable Logic Controller (PLC) configuration
		Universal Serial Bus connection
		Access the SCADA dashboard to view production metrics. Update SCADA alarm thresholds as needed.
	

Abbreviations are acceptable in buttons, labels and tables when space is limited and only when they are familiar to users. Clarify abbreviations in a visible part of the UI with legends, glossaries or infotips.

	
		Max
		Min
		Temp
		Info
	

Add lower case "s" without an apostrophe for plural forms.

	
		PLCs
		APIs
	

	
		PLC's
		API's
	

## Nouns without plural form

English has many nouns that do not take a plural form (they do not use "s" for plurals). These are common errors in menus, labels and instructions within industrial UIs.

	
		Equipment
		Navigation
		Progress
		Data
		Software
		Feedback
		Information
		Additional feedback
		More information
	

	
		Equipments
		Navigations
		Progresses
		Datas
		Softwares
		Feedbacks
		Informations
	

Use the singular verb form for collective nouns. Organizations and groups are single entities.

	
		Siemens provides industrial automation solutions.
		The team is reviewing the configuration.
		The company has released a new update.
	

	
		Siemens provide industrial automation solutions.
		The team are reviewing the configuration.
		The company have released a new update.
	

## Time-based vocabulary

Choose time-related words carefully. They set user expectations about whether more updates, events or actions will occur.

### Last vs. latest vs. recent

Last implies nothing else will follow. It is final and no more are coming.

	
		Last update (final)
	

	
		Last update (ongoing)
	

Latest is the most recent and newest, which means there could be more to follow.

	
		Latest summary (more coming)
	

	
		Latest summary (final – no more coming)
	

Recent means it happened a short time ago. Similar to "latest" but highlights events closer to the present.

	
		Recent events (happened recently)
	

	
		Recent events (happened a long time ago)
	

### Pending vs. waiting vs. queued

Pending means waiting for an action or decision that needs someone else to act.

	
		Pending approval
	

Waiting means the system is paused until a condition is met. Avoid "awaiting" as this is too formal.

	
		Waiting for connection.
		Waiting for sensor response.
	

	
		Awaiting sensor response.
	

Queued means something is in a line and will be processed in order.

	
		Queued jobs
	

	
		Waiting jobs
	

## False friends

False friends are words that seem correct because they look similar to words in other languages, but they mean something different in English. Always check the English meaning and avoid word-for-word translations.

Here are common false friends in industrial UX writing.

| English word and meaning | Similar to other language | Meaning in other language | Typical error in UX writing | Correct translation |
| --- | --- | --- | --- | --- |
| actual (real) | German "aktuell" | current, present | "actual value" read as "current value" not "real value" | "tatsächlich" (actual)"aktuell" (current) |
| actualize (make real) | German "aktualisieren" | update, refresh | "actualize notifications" read as "update notifications" not "make notifications real" | "aktualisieren" (update)"verwirklichen" (actualize) |
| billion (10<sup>9</sup>) | German "Billion" | trillion (10<sup>12</sup>) | data values off by 1000x in reports | "Milliarde" (billion)"Billion" (trillion) |
| control (regulate) | Spanish "controlar" | to check, verify | "control system" might mean "check system" | "Gestionar/administrar un proceso" (control the process)"Panel de configuracion/supervision" (control panel) |
| date (day/time) | German "Datei" | computer file | "enter date" could mean "enter file" | "Datum" (date)"Datei" (file) |
| eventually (in time) | German "eventuell" | possibly, perhaps | "process eventually completes" is ambiguous | "schließlich" (eventually)"eventuell" (possibly) |
| exit (leave) | Spanish "exito" | success | "exit code" could mean "success code" | "salida" (exit)"éxito" (success) |
| fabric (textile) | French "fabrique" | factory, plant | "fabric configuration" suggests factory config | "tissu" (fabric)"fabrique" (factory) |
| fast (quick) | German "fast" | almost, nearly | "fast mode" means "almost mode" | "schnell" (fast)"fast" (almost) |
| large (big) | French "large" | wide | "large capacity" might mean "wide capacity" | "grand" (large)"large" (wide) |
| library (collection) | French "librairie" | bookstore | "code library" misunderstood | "bibliothèque" (library)"librairie" (bookstore) |
| realize (understand) | Spanish "realizar" | to carry out, perform | "realize changes" means "perform changes" | "darse cuenta" (realize)"realizar" (perform) |
| sensible (rational) | French "sensible" | sensitive | "sensible data" means sensitive, not reasonable | "raisonnable" (sensible)"sensible" (sensitive) |

## Common wording issues

The following words and pairs are often misused and misunderstood when writing text for industrial applications.

	
		Error state (fixed condition)
		Status: Running (ongoing process)
		In the future
		On Monday
		Time zone
		Log file (two words)
		Log in (as an action)
		Login (as a noun)
		34 million
	

	
		Error status
		State: Running
		In future
		On the Monday
		Timezone
		Logfile
		Login (as an action)
		Log in (as a noun)
		34 millions
	

## Related

- [UI terminology](../menu-functions-and-ui-labels/ui-terminology.md)
- [Grammar](./grammar.md)
