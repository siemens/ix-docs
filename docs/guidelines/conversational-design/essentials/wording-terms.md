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

<doDont>
	 <doDont.Do>
		<doDont.Item>Enter your query here…</doDont.Item>
		<doDont.Item>Enter a command, question or topic…</doDont.Item>
		<doDont.Item>Enter a command, question or topic to begin…</doDont.Item>
	 </doDont.Do>
	 <doDont.Dont>
		<doDont.Item>Ask me anything…</doDont.Item>
		<doDont.Item>Start typing…</doDont.Item>
		<doDont.Item>What’s on your mind?</doDont.Item>
	 </doDont.Dont>
</doDont>

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

<doDont>
	 <doDont.Do>
		<doDont.Item>Generating…</doDont.Item>
	 </doDont.Do>
	 <doDont.Dont>
		<doDont.Item>Generating response</doDont.Item>
		<doDont.Item>Creating response…</doDont.Item>
	 </doDont.Dont>
</doDont>

Use “generate” to match the action verb to stop the chatbot responding or ask the chatbot to continue responding without ellipses. 

<doDont>
	 <doDont.Do>
		<doDont.Item>Stop generating</doDont.Item>
		<doDont.Item>Continue generating</doDont.Item>
	 </doDont.Do>
	 <doDont.Dont>
		<doDont.Item>Stop generating…</doDont.Item>
		<doDont.Item>Continue generating…</doDont.Item>
	 </doDont.Dont>
</doDont>

## Speech to text (STT) / voice recording 

Use a tooltip on hover to clarify any recording limitations and tell users how to stop recording.  

<doDont>
	 <doDont.Do>
		<doDont.Item>Click to start and stop voice recording.</doDont.Item>
		<doDont.Item>Click to start and stop voice recording (max 2 minutes).</doDont.Item>
	 </doDont.Do>
</doDont>

Use “Recording…” as feedback to show the feature is working.  

<doDont>
	 <doDont.Do>
		<doDont.Item>Recording…</doDont.Item>
	 </doDont.Do>
	 <doDont.Do>
		<doDont.Item>I’m listening…</doDont.Item>
	 </doDont.Do>
</doDont>

## Asking for feedback  

Use thumbs up and down icons to request feedback.  

<doDont>
	 <doDont.Do>
		<doDont.Item>Thumbs up icon (<ix-icon name="thumb-up"></ix-icon>)</doDont.Item>
		<doDont.Item>Thumbs down icon (<ix-icon name="thumb-down"></ix-icon>)</doDont.Item>
	 </doDont.Do>
	 <doDont.Dont>
		<doDont.Item>Helpful</doDont.Item>
		<doDont.Item>Not helpful</doDont.Item>
	 </doDont.Dont>
</doDont>

## Time indicators for chat history  

Use “last” instead of “previous” and “prior” for time-related terminology in chat history.  
<doDont>
	 <doDont.Do>
		<doDont.Item>Today</doDont.Item>
		<doDont.Item>Yesterday</doDont.Item>
		<doDont.Item>Last 7 days</doDont.Item>
		<doDont.Item>Last 30 days</doDont.Item>
		<doDont.Item>Older</doDont.Item>
	 </doDont.Do>
	 <doDont.Dont>
		<doDont.Item>Previous 7 days </doDont.Item>
		<doDont.Item>Prior week</doDont.Item>
	 </doDont.Dont>
</doDont>

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

<doDont>
	 <doDont.Do>
		<doDont.Item>Sources</doDont.Item>
	 </doDont.Do>
	 <doDont.Dont>
		<doDont.Item>Resources</doDont.Item>
		<doDont.Item>Sources and references</doDont.Item>
	 </doDont.Dont>
</doDont>

Avoid mixing terms (resources, sources) and instead label the source format, e.g. website, pdf, etc.   
## Chatbot with multiple agents  

Use clear wording to differentiate between multiple bots when displaying output.  

<doDont>
	 <doDont.Do>
		<doDont.Item>Responses generated by agent X</doDont.Item>
		<doDont.Item>Responses generated by: agent X (with agent selection dropdown)</doDont.Item>
	 </doDont.Do>
</doDont>

## Punctuation 

Avoid punctuation, such as exclamation marks for buttons, hover text, titles and tags.  

<doDont>
	 <doDont.Do>
		<doDont.Item>Show more</doDont.Item>
		<doDont.Item>Send</doDont.Item>
		<doDont.Item>Stop</doDont.Item>
	 </doDont.Do>
	 <doDont.Dont>
		<doDont.Item>Show more!</doDont.Item>
		<doDont.Item>Send?</doDont.Item>
	 </doDont.Dont>
</doDont>

Legal disclaimer for all Siemens chatbots 

## Problematic wording to avoid 

Most problematic wording involves the bot expressing itself as a human with human emotions carrying out human cognitive processing. Ensure your bot persona has been prompted to avoid human-like, emotional responses.  

Use “generating” not “thinking” as chatbots don’t perform cognitive processes.  

<doDont>
	 <doDont.Dont>
		<doDont.Item>Thinking…</doDont.Item>
		<doDont.Item>Thinking about the best response…</doDont.Item>
	 </doDont.Dont>
</doDont>

Avoid prompting emotional language like “I’m afraid…” in industrial chatbots.  

<doDont>
	 <doDont.Dont>
		<doDont.Item>I’m afraid that I can’t help you right now as I’m assessing the data.</doDont.Item>
		<doDont.Item>I understand what you mean.</doDont.Item>
	 </doDont.Dont>
</doDont>

Avoid technical, robotic phrases like “Please stand by…” as these are outdated, passive and unhelpful.  

<doDont>
	 <doDont.Dont>
		<doDont.Item>Please stand by while I process your request.</doDont.Item>
		<doDont.Item>Please wait while I prepare a response.</doDont.Item>
		<doDont.Item>Please be patient.</doDont.Item>
		<doDont.Item>Bear with me.</doDont.Item>
	 </doDont.Dont>
</doDont>

## Dos and Don’ts 

- Do use sentence casing to align with our UX writing guidelines 
- Do ensure the voice and tone aligns with your product and our iX conversational design principles 
- Don’t use synonyms to vary the UI wording, be consistent and use the same words repeatedly 
- Don’t use “Creating…” as the progress indicator as there is no creative process and is misleading