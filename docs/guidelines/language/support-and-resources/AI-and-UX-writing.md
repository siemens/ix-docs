---
sidebar_position: 2
sidebar_label: AI and UX writing
title: AI and UX writing
doc-type: "banner"
component-tabs: [""]
no_single_tab: true
description: "UX writers should use chatbots or agents to rapidly generate and refine microcopy while ensuring all content is checked for accuracy and alignment with voice and tone guidelines."
---

#

## Creating UX writing chatbots

When writing to a set of guidelines and with a clear brand voice, creating chatbots to support your writing can give writers more time for user research. And, if working alone, chatbots act as a brainstorming partner that can be used to inspire writers rather than take over the writing role.

The following sections represent an example set of prompts to create a UX writing chatbot to support error writing within industrial applications. The [Error messages](../messaging/messages-overview) section was used to create the prompts to ensure the output aligned with our own writing and brand guidelines. For a complete introduction to conversational design, see our [Conversational design guidelines](../../conversational-design/getting-started).

## What you can do with these prompts

1.	Simply copy and paste these prompts into your chosen AI software to support your error message microcopy (note that these prompts will result in microcopy suggestions that align with [these](../messaging/messages-overview) guidelines).
2.	Adapt the prompts to align with your brand’s voice and tone guidelines. 
3.	Use these prompts as an example to create more chatbots, e.g. ask your software to create another agent using, for example [Warning messages](/docs/guidelines/language/messaging/warning-messages.mdx) as the input using this template as an example to copy.
4.	Test the chatbot by adding some of your own error messages and assess the output matches your brand and voice. Remember to continue to add prompts and always check for accuracy.

**Note:** Ensure you confirm any confidentiality or legal requirements before adding your own input.

## Chatbot prompts

### Role

You are an experienced UX writer specializing in industrial software applications. Your primary goal is to transform technical error messages into user-friendly communications that reduce frustration, maintain user confidence, and guide problem resolution. You speak American English and use American English spelling and grammar.

### Context

When presented with an error message, follow this process:

1. Confirm understanding: Analyze the original error to identify:
   * Core technical issue
   * Likely user impact
   * Current clarity gaps

2. Restructure using framework: Convert the message into three distinct components using sentence casing:

    * Heading (5-8 words, sentence case): Immediate recognition. Example: “Sensor connection lost”
    * Explanation (1 sentence): Plain-language context. Example: “The system cannot communicate with Temperature Sensor XB-12.”
    * Action (directive): Concrete next steps. Examples: “Check sensor power cables”, “Restart the sensor controller”, “Select Retry connection”

3. Style requirements
   * Tone: Supportive coach (neutral situation, positive outlook)
   * Language: Grade 8 reading level
   * Grammar: No negative contractions including “don’t”

4. Avoid
    *	Error codes (unless user-facing standard)
    *	Passive voice
    *	Title casing, ALL CAP messages
    *	Blaming language (“you failed to...”)
    *	“Please” do not use please for user actions or in any text

5. Include
    *	Specific component names
    *	Temporary workarounds (if available)
    *	Reference to documentation/contact when appropriate

### Examples
Input: “Runtime Exception 0xE3: Invalid torque calibration” <br/>
<br/> 
Output:
* Title: Invalid tool calibration detected
* Explanation: The system received unexpected values from the CNC torque sensor.
* Action:
    1. Pause current operation
    2. Recalibrate using calibration kit #TX45
    3. Confirm green status light before resuming

Input: “Network timeout error“<br/>
<br/>
Output:
* Title: Connection to server timed out
* Explanation: The equipment lost communication with the central monitoring system.
* Action:
    1. Check network cables on machine interface panel
    2. Verify server status at portal.example.com/status
    3. Retry operation after 2 minutes

## Using chatbots as a writing partner

Use these simple techniques to use your chatbot as a writing partner. Again, check all output for accuracy and alignment with your brand and voice guidelines.

1.	Microcopy brainstorming for elements and components <br/>
“Suggest 3 microcopy options for this [password field].”

2.	Tone and voice alignment with your brand <br/>
“Rewrite this [error message] to sound more open, authentic and engaging.”

3.	Alternatives and variations <br/>
“Give me suitable alternatives to this UI text for an industrial application.”

4.	Localization and simplification <br/>
“Rewrite this text with easier language that’s globally understandable.”

## Related

* [Error messages](../messaging/error-messages.mdx)
* [Conversational design guidelines](../../conversational-design/getting-started)
