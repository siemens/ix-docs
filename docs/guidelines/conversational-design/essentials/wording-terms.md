---
sidebar_position: 2
sidebar_label: Wording and terms
title: Wording and terms
hide_table_of_contents: false
doc-type: banner
component-tabs: ['']
no_single_tab: true
description: Although AI chatbots are continuously evolving, many common words within the UI remain the same and have become the norm for agents and chatbots.
---

import DoAndDont from '@site/src/components/DoAndDont';

#

Use this comprehensive list of common words and phrases typically seen in industrial chatbot interfaces to ensure your chatbot UI is consistent, clear and aligns with our ONE Design Language approach. The words and phrases below attempt to find a balance between representing our voice (open, engaging and authentic) while also not humanizing the bot. This means that the bot responds as a competent expert or colleague without responding as a human with real emotions.  

Note: Some elements offer more than one option for you to select depending on your use case.  

## Welcome message 

Use any of the five messages depending on your product and use case. 

**Generic welcome:** Hello, how can I help you today? 
**With chatbot name:** Hello, I'm [Copilot name]. How can I help you today?  
**With product name:** Hello, I'm your [product name] Copilot. How can I help you today?  
**With username:** Hello Felix, how can I help you today? 
**With product and username:** Hello Sara, I'm  [Copilot name]. How can I help you today?   

<DoAndDont>
   <DoAndDont.Dont>
    <DoAndDont.Item>Well, hello! I’m your friendly chatbot.</DoAndDont.Item>
    <DoAndDont.Item>Welcome to chatbot. State your issue now.</DoAndDont.Item>
	<DoAndDont.Item>What do you want?</DoAndDont.Item>
 </DoAndDont.Dont>
 </DoAndDont>

## Placeholder text for chat window 

Use these universal, non-specific options to encourage solution and technology-focused input. Avoid generic, open placeholders that encourage off-topic queries. 

<doAndDont>
	 <doAndDont.Do>
		<doAndDont.Item>Enter your query here…</doAndDont.Item>
		<doAndDont.Item>Enter a command, question or topic…</doAndDont.Item>
		<doAndDont.Item>Enter a command, question or topic to begin…</doAndDont.Item>
	 </doAndDont.Do>
	 <doAndDont.Dont>
		<doAndDont.Item>Ask me anything…</doAndDont.Item>
		<doAndDont.Item>Start typing…</doAndDont.Item>
		<doAndDont.Item>What’s on your mind?</doAndDont.Item>
	 </doAndDont.Dont>
</doAndDont>

Use alternative placeholder text when your chatbot has a single use case.  

<DoAndDont>
<DoAndDont.Do>
    <DoAndDont.Item>Search technical documentation…</DoAndDont.Item>
    <DoAndDont.Item>Enter error code…</DoAndDont.Item>
    <DoAndDont.Item>Search parts catalog…</DoAndDont.Item>
  </DoAndDont.Do>
 </DoAndDont>

## Response progress indicator 

Always use “generate” as the main progress indicator verb with ellipses (...).  

<doAndDont>
	 <doAndDont.Do>
		<doAndDont.Item>Generating…</doAndDont.Item>
	 </doAndDont.Do>
	 <doAndDont.Dont>
		<doAndDont.Item>Generating response</doAndDont.Item>
		<doAndDont.Item>Creating response…</doAndDont.Item>
	 </doAndDont.Dont>
</doAndDont>

Use “generate” to match the action verb to stop the chatbot responding or ask the chatbot to continue responding without ellipses. 

<doAndDont>
	 <doAndDont.Do>
		<doAndDont.Item>Stop generating</doAndDont.Item>
		<doAndDont.Item>Continue generating</doAndDont.Item>
	 </doAndDont.Do>
	 <doAndDont.Dont>
		<doAndDont.Item>Stop generating…</doAndDont.Item>
		<doAndDont.Item>Continue generating…</doAndDont.Item>
	 </doAndDont.Dont>
</doAndDont>

## Speech to text (STT) / voice recording 

Use a tooltip on hover to clarify any recording limitations and tell users how to stop recording.  

<doAndDont>
	 <doAndDont.Do>
		<doAndDont.Item>Click to start and stop voice recording.</doAndDont.Item>
		<doAndDont.Item>Click to start and stop voice recording (max 2 minutes).</doAndDont.Item>
	 </doAndDont.Do>
</doAndDont>

Use “Recording…” as feedback to show the feature is working.  

<doAndDont>
	 <doAndDont.Do>
		<doAndDont.Item>Recording…</doAndDont.Item>
	 </doAndDont.Do>
	 <doAndDont.Do>
		<doAndDont.Item>I’m listening…</doAndDont.Item>
	 </doAndDont.Do>
</doAndDont>

## Asking for feedback  

Use thumbs up and down icons to request feedback.  

<doAndDont>
	 <doAndDont.Do>
		<doAndDont.Item>Thumbs up icon (<ix-icon name="thumb-up"></ix-icon>)</doAndDont.Item>
		<doAndDont.Item>Thumbs down icon (<ix-icon name="thumb-down"></ix-icon>)</doAndDont.Item>
	 </doAndDont.Do>
	 <doAndDont.Dont>
		<doAndDont.Item>Helpful</doAndDont.Item>
		<doAndDont.Item>Not helpful</doAndDont.Item>
	 </doAndDont.Dont>
</doAndDont>

## Time indicators for chat history  

Use “last” instead of “previous” and “prior” for time-related terminology in chat history.  
<doAndDont>
	 <doAndDont.Do>
		<doAndDont.Item>Today</doAndDont.Item>
		<doAndDont.Item>Yesterday</doAndDont.Item>
		<doAndDont.Item>Last 7 days</doAndDont.Item>
		<doAndDont.Item>Last 30 days</doAndDont.Item>
		<doAndDont.Item>Older</doAndDont.Item>
	 </doAndDont.Do>
	 <doAndDont.Dont>
		<doAndDont.Item>Previous 7 days </doAndDont.Item>
		<doAndDont.Item>Prior week</doAndDont.Item>
	 </doAndDont.Dont>
</doAndDont>

## Tooltip options for chat history (from simple to complex) 

1. Chat history stored for 30 days.  
2. Chat history stored for 30 days (learn more). 
3. Chat history stored for 30 days and then automatically deleted.  
4. Chat history stored securely for 30 days. Only you and authorized personnel have access.  
5. Chat history encrypted and stored for 30 days. Access is limited to you and authorized personnel. Data deleted automatically after this period.  

## Actions for buttons, icons and hover text 

Use the following action wording for consistency within all our chatbots.   

<DoAndDont>
<DoAndDont.Do>
    <DoAndDont.Item>New chat</DoAndDont.Item>
    <DoAndDont.Item>Send</DoAndDont.Item>
    <DoAndDont.Item>Generate new prompts</DoAndDont.Item>
	<DoAndDont.Item>Refresh prompts</DoAndDont.Item>
	<DoAndDont.Item>Show more prompts</DoAndDont.Item>
	<DoAndDont.Item>Attach files</DoAndDont.Item>
	<DoAndDont.Item>Upload files</DoAndDont.Item>
	<DoAndDont.Item>Share</DoAndDont.Item>
	<DoAndDont.Item>Copy</DoAndDont.Item>
	<DoAndDont.Item>Expand</DoAndDont.Item>
	<DoAndDont.Item>Collapse</DoAndDont.Item>
	<DoAndDont.Item>Maximize chat window</DoAndDont.Item>
	<DoAndDont.Item>Minimize chat window</DoAndDont.Item>
	<DoAndDont.Item>Close chat window</DoAndDont.Item>
  </DoAndDont.Do>
   <DoAndDont.Dont>
    <DoAndDont.Item>Clear chat</DoAndDont.Item>
    <DoAndDont.Item>Submit</DoAndDont.Item>
    <DoAndDont.Item>Give me another</DoAndDont.Item>
    <DoAndDont.Item>Show me others</DoAndDont.Item>
    <DoAndDont.Item>Import files</DoAndDont.Item>
 </DoAndDont.Dont>
 </DoAndDont>

## Example action buttons for industrial applications 

View documentation 
Download documentation 
Download manual 
Export data  
Open link 
Show image 
Play video 
Report issue 
Contact support  Add to calendar 
Book webinar 

## Citing sources 

Use “sources” as the text label to indicate where the generated information is from. 

<doAndDont>
	 <doAndDont.Do>
		<doAndDont.Item>Sources</doAndDont.Item>
	 </doAndDont.Do>
	 <doAndDont.Dont>
		<doAndDont.Item>Resources</doAndDont.Item>
		<doAndDont.Item>Sources and references</doAndDont.Item>
	 </doAndDont.Dont>
</doAndDont>

Avoid mixing terms (resources, sources) and instead label the source format, e.g. website, pdf, etc.   
## Chatbot with multiple agents  

Use clear wording to differentiate between multiple bots when displaying output.  

<doAndDont>
	 <doAndDont.Do>
		<doAndDont.Item>Responses generated by agent X</doAndDont.Item>
		<doAndDont.Item>Responses generated by: agent X (with agent selection dropdown)</doAndDont.Item>
	 </doAndDont.Do>
</doAndDont>

## Punctuation 

Avoid punctuation, such as exclamation marks for buttons, hover text, titles and tags.  

<doAndDont>
	 <doAndDont.Do>
		<doAndDont.Item>Show more</doAndDont.Item>
		<doAndDont.Item>Send</doAndDont.Item>
		<doAndDont.Item>Stop</doAndDont.Item>
	 </doAndDont.Do>
	 <doAndDont.Dont>
		<doAndDont.Item>Show more!</doAndDont.Item>
		<doAndDont.Item>Send?</doAndDont.Item>
	 </doAndDont.Dont>
</doAndDont>

## Problematic wording to avoid 

Most problematic wording involves the bot expressing itself as a human with human emotions carrying out human cognitive processing. Ensure your bot persona has been prompted to avoid human-like, emotional responses.  

Use “generating” not “thinking” as chatbots don’t perform cognitive processes.  

<doAndDont>
	 <doAndDont.Dont>
		<doAndDont.Item>Thinking…</doAndDont.Item>
		<doAndDont.Item>Thinking about the best response…</doAndDont.Item>
	 </doAndDont.Dont>
</doAndDont>

Avoid prompting emotional language like “I’m afraid…” in industrial chatbots.  

<doAndDont>
	 <doAndDont.Dont>
		<doAndDont.Item>I’m afraid that I can’t help you right now as I’m assessing the data.</doAndDont.Item>
		<doAndDont.Item>I understand what you mean.</doAndDont.Item>
	 </doAndDont.Dont>
</doAndDont>

Avoid technical, robotic phrases like “Please stand by…” as these are outdated, passive and unhelpful.  

<doAndDont>
	 <doAndDont.Dont>
		<doAndDont.Item>Please stand by while I process your request.</doAndDont.Item>
		<doAndDont.Item>Please wait while I prepare a response.</doAndDont.Item>
		<doAndDont.Item>Please be patient.</doAndDont.Item>
		<doAndDont.Item>Bear with me.</doAndDont.Item>
	 </doAndDont.Dont>
</doAndDont>

## Dos and Don’ts 

- Do use sentence casing to align with our UX writing guidelines 
- Do ensure the voice and tone aligns with your product and our iX conversational design principles 
- Don’t use synonyms to vary the UI wording, be consistent and use the same words repeatedly 
- Don’t use “Creating…” as the progress indicator as there is no creative process and is misleading