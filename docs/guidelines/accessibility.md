---
sidebar_position: 3
sidebar_label: Accessibility
title: Accessibility
doc-type: 'banner'
component-tabs: ['']
no_single_tab: true
description: 'Accessibility ensures that digital products are usable by everyone, including people with disabilities. It is crucial for creating inclusive solutions that meet diverse needs and comply with standards like WCAG, enhancing the overall user experience.'
---

# Accessibility

Accessibility is a very important topic in web and mobile applications. These guidelines should serve as a starting point
for anyone who wants to learn more about accessibility and describes best practices for HTML/JavaScript application development.
The guidelines were developed in collaboration with the Siemens Mobile and Web Platform [SiMPL](https://simpl.code.siemens.io/simpl/).

## Our commitment as a design system

- We are committed that our deliverables qualify for building solutions that are accessible for everyone.
- We strive to meet WCAG AA standards with providing perceivable, operable, and understandable components that follow our accessibility checklist.

## Ensuring accessibility in products

- While our components are designed to meet accessibility standards, it is essential to remember that the overall accessibility of your solutions depends on how these components are used.
- Simply incorporating our accessible components does not guarantee that the final product will be fully accessible.
- It is the responsibility of the developers and designers to ensure that their implementations adhere to accessibility best practices throughout the entire design and development process.
- A comprehensible quick reference on how to meet Web Content Accessibility Guidelines can be found here.

## Introduction

An aging society and a resulting prolonged work lifetime causes that more people with reduced abilities or disabilities
are employed. Consequently our software and services shall be usable and accessible for these user groups providing equal
access and equal opportunities by complying to accessibility standards and, in some countries, respective regulation.

The Siemens Inclusion Agreement from 2018 underlines the importance of accessible ICT:

_"Siemens is committed to ensuring equal opportunities for people with disabilities, their inclusion in society and in
the workplace, as well as their self-determined participation and respectful treatment_

_[...] It is generally agreed that hardware, software and IT media have to be accessible thus people with disabilities can
access and use them in the normal way, without difficulty, and generally without any external assistance[...]"_

Even more business relevant for Siemens is the offering of accessible ICT products and services to customers. Public
sector bodies are forced by regulation in Europe and north America to buy accessible solutions, where accessibility is a
procurement criterion.

## Norms and guidelines

Different norms and standards are available for different regions. This chapter summaries the relevant standards.

### WCAG 2.1

Web Content Accessibility Guidelines WCAG (see [https://www.w3.org/TR/WCAG21](https://www.w3.org/TR/WCAG21)) are the accessible guidelines of the [W3C](https://www.w3.org).

Abstract: _"Web Content Accessibility Guidelines (WCAG) 2.1 covers a wide range of recommendations for making web content more accessible.
Following these guidelines will make content more accessible to a wider range of people with disabilities, including accommodations for
blindness and low vision, deafness and hearing loss, limited movement, speech disabilities, photosensitivity, and combinations of
these, and some accommodation for learning disabilities and cognitive limitations; but will not address every user need for people with
these disabilities. These guidelines address accessibility of web content on desktops, laptops, tablets, and mobile devices. Following
these guidelines will also often make web content more usable to users in general."_

The following 4 principles are applicable to websites, web applications, mobile applications, software and electronic documents.

Anyone who wants to use the Web must have content that is:

- **Perceivable**: Information and user interface components must be presentable to users in ways they can perceive. This means
  that users must be able to perceive the information being presented (it can't be invisible to all of their senses)
- **Operable**: User interface components and navigation must be operable.
  This means that users must be able to operate the interface (the interface cannot require interaction that a user cannot perform)
- **Understandable**: Information and the operation of user interface must be understandable. This means that users must be able
  to understand the information as well as the operation of the user interface (the content or operation cannot be beyond their understanding)
- **Robust**: Content must be robust enough that it can be interpreted reliably by a wide variety of user agents, including assistive technologies.
  This means that users must be able to access the content as technologies advance (as technologies and user agents evolve, the content should remain accessible)

Each principle provides detailed guidelines and Success Criteria addressing the special needs of persons with disabilities.

#### Perceivable

Information and user interface components must be presentable to users in ways they can perceive.

- _Text Alternatives_: Provide text alternatives for any non-text content so that it can be changed into other forms people need, such as large print,
  braille, speech, symbols or simpler language
- _Time Based Media_: Provide alternatives for time-based media.
- _Adaptable_: Create content that can be presented in different ways (for example simpler layout) without losing information or structure.
- _Distinguishable_: Make it easier for users to see and hear content including separating foreground from background. This includes color, contrast
  and allowing to resize up to 200% without assistive technology.

#### Operable

User interface components and navigation must be operable.

- _Keyboard Accessible_: Make all functionality available from a keyboard.
- _Enough Time_: Provide users enough time to read and use content
- _Seizures and Physical Reactions_: Do not design content in a way that is known to cause seizures or physical reactions.
- _Navigable_: Provide ways to help users navigate, find content, and determine where they are.
- _Input Modalities_: Make it easier for users to operate functionality through various inputs beyond keyboard.

#### Understandable

Information and the operation of user interface must be understandable.

- _Readable_: Make text content readable and understandable.
- _Predictable_: Make web pages appear and operate in predictable ways.
- _Input Assistance_: Help users avoid and correct mistakes.

#### Robust

- _Compatible_: Maximize compatibility with current and future user agents, including assistive technologies.

### European Norm EN 301 549 V3.2.1 (2021-03)

EN 301 549 specifies the Accessibility requirements for ICT products and services (see [https://www.etsi.org/deliver/etsi_en/301500_301599/301549/03.02.01_60/en_301549v030201p.pdf](https://www.etsi.org/deliver/etsi_en/301500_301599/301549/03.02.01_60/en_301549v030201p.pdf)).
It adopts the content of the WCAG 2.1. The following describes the usage with limited abilities from Chapter 4.

- **Usage without vision**:
  Where ICT provides visual modes of operation, the ICT provides at least one mode of operation that does not require vision.
- **Usage with limited vision**:
  Where ICT provides visual modes of operation, the ICT provides features that enable users to make better use of their limited vision.
- **Usage without perception of colour**:
  Where ICT provides visual modes of operation, the ICT provides a visual mode of operation that does not require user perception of colour.
- **Usage without hearing**:
  Where ICT provides auditory modes of operation, the ICT provides at least one mode of operation that does not require hearing.
- **Usage with limited hearing**:
  Where ICT provides auditory modes of operation, the ICT provides enhanced audio features.
- **Usage with no or limited vocal capability**:
  Where ICT requires vocal input from users, the ICT provides at least one mode of operation that does not require them to generate vocal output.
- **Usage with limited manipulation or strength**:
  Where ICT requires manual actions, the ICT provides features that enable users to make use of the ICT through alternative actions not requiring manipulation, simultaneous action or hand strength.
- **Usage with limited reach**:
  Where ICT products are free-standing or installed, all the elements required for operation will need to be within reach of all users.
- **Minimize photosensitive seizure triggers**:
  Where ICT provides visual modes of operation, the ICT provides at least one mode of operation that minimizes the potential for triggering photosensitive seizures.
- **Usage with limited cognition, language or learning**:
  The ICT provides features and/or presentation that makes it simpler and easier to understand, operate and use. This is essential for
  users with limited cognition, language or learning, and benefits many more users in different situations.
- **Privacy**:
  Where ICT provides features for accessibility, the ICT maintains the privacy of users of these features at the same level as other users.

## Accessibility in HTML/JavaScript

This chapter describes best practices for designing HTML/JavaScript applications that work well for all users, including those who rely on assistive technologies.
We covered most common use cases in our components with built-in accessibility features.

For a detailed introduction into basic questions and general techniques for designing accessible applications, see the [accessibility](https://developer.mozilla.org/en-US/docs/Web/Accessibility) section of the [mdn web docs](https://developer.mozilla.org/en-US/).

### Accessibility attributes

Building accessible web experiences often involves setting [ARIA attributes](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA) to provide semantic meaning where it might otherwise be missing. Use JavaScript to dynamically control the values of accessibility-related attributes.

When you work with ARIA attributes in JavaScript, use the `setAttribute()` method or direct property assignment:

```javascript
// Use setAttribute for ARIA attributes
const button = document.querySelector('button');
button.setAttribute('aria-label', 'Save document');

// Or use direct property assignment
button.ariaLabel = 'Save document';
```

Static ARIA attributes can be set directly in HTML:

```html
<!-- Static ARIA attributes require no extra syntax -->
<button aria-label="Save document"><i class="icon element-save"></i></button>
```

Alternatively, use the `label` attribute that most iX components offer to set the aria attribute for the relevant HTML element.

**add iX example here**

### Keyboard only/No Keyboard trap

All functionality of the content is operable through a keyboard interface without requiring specific timings for individual keystrokes,
except where the underlying function requires input that depends on the path of the user's movement and not just the endpoints.

For components that use a simple, linear structure, stick to the default tab-based navigation. Make sure every clickable surface is both reachable and clickable by keyboard. You can also set the [tabindex](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Global_attributes/tabindex) attribute to manipulate the default tab-navigation.

For components that use a more complex, two-dimensional structure, consider implementing keyboard interaction using the arrow keys:

```javascript
// Arrow key navigation for complex components
function handleArrowNavigation(event, container) {
    const items = Array.from(container.querySelectorAll('[role="gridcell"], [role="option"]'));
    const currentIndex = items.indexOf(event.target);
    
    switch(event.key) {
        case 'ArrowRight':
            focusItem(items[currentIndex + 1] || items[0]);
            break;
        case 'ArrowLeft':
            focusItem(items[currentIndex - 1] || items[items.length - 1]);
            break;
        case 'ArrowDown':
            // Implement based on your layout
            break;
        case 'ArrowUp':
            // Implement based on your layout
            break;
    }
}

function focusItem(item) {
    if (item) {
        item.focus();
    }
}
```

Always attempt to keep the focus on changes to prevent the user from manually having to navigate back to the previous location.

#### Focus management

Implement focus trapping for modal dialogs and other overlay components:

```javascript
function trapFocus(container) {
    const focusableElements = container.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])');
    const firstFocusable = focusableElements[0];
    const lastFocusable = focusableElements[focusableElements.length - 1];

    container.addEventListener('keydown', function(event) {
        if (event.key === 'Tab') {
            if (event.shiftKey) {
                if (document.activeElement === firstFocusable) {
                    lastFocusable.focus();
                    event.preventDefault();
                }
            } else {
                if (document.activeElement === lastFocusable) {
                    firstFocusable.focus();
                    event.preventDefault();
                }
            }
        }
    });
}
```

Or just use the [modals](../components/modal/index.mdx) with built-in focus trapping:

**add example here**


#### How to test

Disconnect your mouse and try to operate your service using only the keyboard.

### Text Alternatives / Labels

Any non-text content (images, buttons, links, inputs) must be labelled to be WCAG 2.1 compliant. The general rule to follow is:

1. Use `aria-labelledby`
2. Otherwise use `aria-label`
3. Otherwise use `alt` attribute
4. Otherwise use `title` attribute
5. If none of the above yield a usable text string, there is no accessible name

When you are using iX components, the relevant attribute will be set when you set the component's labelling attribute.

**add example here**

#### Aria-labelledby

Use when there is already a text which describes the element. An example are forms where there is a field description followed by the input.

```html
<p id="input-name-label">This is the input label</p>
<input aria-labelledby="input-name-label" />
```

#### Aria-label

The `aria-label` describes elements that have no text, like images, buttons or links. The interaction result or impact
of clicking / activating a button or link shall be explained by the `aria-label`.

```html
<!-- Static ARIA attributes require no extra syntax -->
<button aria-label="Save document"><i class="icon element-save"></i></button>
```

You can also set these dynamically with JavaScript:

```javascript
const button = document.querySelector('#save-button');
button.setAttribute('aria-label', 'Save document');
```

#### Alt attribute

Use `alt` attributes some elements offer to add an additional description to an element. Depending on the screen reader it might not get picked up.

```html
<img src="chart.png" alt="Sales increased by 25% in Q3" />
```

#### Title attribute

Similar to the `alt` attribute, the `title` allows adding additional information about an element. Again, it might not be caught up by screen readers.

```html
<button title="Save document"><i class="icon element-save"></i></button>
```

#### Visually hidden text

When e.g. `aria-label` isn't allowed or doesn't make sense to use, use hidden text to make specific description text that is read by a screen reader but isn't visible in the UI.

```html
<i class="icon element-physical-input" aria-hidden="true"></i><span class="visually-hidden">physical input</span>
```

```css
.visually-hidden {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    white-space: nowrap;
    border: 0;
}
```

#### How to test

If you are using chrome dev tools you have some options that make your life easier here. You can either use the [audit](https://developer.chrome.com/docs/devtools/accessibility/reference#audits) functionality to generate a report or use the [accesibility tree](https://developer.chrome.com/blog/full-accessibility-tree).

Alternatively, you can use browser extensions or playwright in conjunction with [@axe-core/playwright](https://www.npmjs.com/package/@axe-core/playwright) within the CI/CD Pipeline. Additionally, using a screen reader to test it is beneficial.

### Navigation / Landmark

Navigation provides a mean for the user to get around on the website. Most of the HTML sectioning elements provide default ARIA landmarks.

The `aria-label` attribute enables the logical navigation definition and separation of elements, which have the same type.
For example, if multiple `<nav>` elements are present on a page, use the `aria-label` attribute.

```html
<nav aria-label="Main"></nav>
<nav aria-label="Secondary"></nav>
```

### Lists

Lists must be correctly structured to be recognized by screen readers. This means that parent (`<ul>` or `<ol>`) must be directly followed by `<li>` and no other content element is allowed to be in-between.

Correct:

```html
<ul>
  <li>
    <p>text</p>
  </li>
  <li></li>
</ul>
```

Incorrect:

```html
<ul>
  <div>This breaks the list structure</div>
  <li>List item</li>
</ul>
```

Or use one of the iX lists:

**add example here**

### Roles

Roles help identifying the purpose of an element on the website. Most of the native html elements already contain the role.
However, if there is a need for more complex structures, the roles must be set explicitly.

An example is a custom built menu. Setting the roles is important for the screen reader to distinguish the elements and announce them properly.

```html
<ul role="menu">
  <li role="presentation">Heading</li>
  <li role="separator">
    <div class="divider"></div>
  </li>
  <li></li>
  <li role="presentation">
    <a role="menuitem" href="#">Link</a>
  </li>
</ul>
```

You can also set roles dynamically with JavaScript:

```javascript
const menuItem = document.createElement('a');
menuItem.setAttribute('role', 'menuitem');
menuItem.href = '#';
menuItem.textContent = 'Menu Item';
```

See [WAI-ARIA Roles](https://www.w3.org/TR/wai-aria-1.1/#role_definitions) for more infos.

### Contrast (Minimum)

Visual presentation of text and images of text need to have a contrast ratio of at least `4.5:1`, except for the following:

- **Large Text:** Large-scale text and images of large-scale text have a contrast ratio of at least `3:1`.
- **Incidental:** Text or images of text that are part of an inactive user interface component, that are pure decoration,
  that are not visible to anyone, or that are part of a picture that contains significant other visual content, have no
  contrast requirement.
- **Logotypes:** Text that is part of a logo or brand name has no contrast requirement.

#### How to test

Use a color contrast analyzer or similar tool.

### Language of a Page / Parts

Set the language of the human readable text for a web page or each paragraph or phrase via the `lang` attribute:

```html
<html lang="en">
  <p>This is written in English</p>
  <p lang="de">Das ist in Deutsch geschrieben</p>
</html>
```

You can also set language dynamically with JavaScript:

```javascript
document.documentElement.lang = 'en';
// Or for specific elements
document.querySelector('#german-content').lang = 'de';
```

### Using Semantic HTML Elements

Native HTML elements capture several standard interaction patterns that are important to accessibility.
When building web applications, you should re-use these native elements directly when possible, rather
than re-implementing well-supported behaviors.

For example, instead of creating a custom element for a button, use the native `<button>` element:

```html
<!-- Good: Uses semantic button -->
<button onclick="saveDocument()">
  <i class="icon save"></i>
  Save
</button>

<!-- Avoid: Non-semantic div that requires extra ARIA -->
<div role="button" tabindex="0" onclick="saveDocument()" onkeydown="handleKeydown(event)">
  <i class="icon save"></i>
  Save
</div>
```

### Live Regions for Dynamic Content

Use ARIA live regions to announce dynamic content changes to screen readers:

```html
<div id="status" aria-live="polite" aria-atomic="true"></div>
```

```javascript
function announceStatus(message) {
    const statusDiv = document.getElementById('status');
    statusDiv.textContent = message;
}

// Usage
announceStatus('Document saved successfully');
```

For urgent announcements, use `aria-live="assertive"`:

```html
<div id="error-status" aria-live="assertive" aria-atomic="true"></div>
```

## Mobile Accessibility

Mobile accessibility is crucial as mobile devices are increasingly the primary way users access digital content. Modern mobile platforms like iOS and Android have built-in accessibility tools, making it essential to ensure your web applications work seamlessly with these technologies.

### Mobile-Specific Considerations

When developing accessible mobile applications, focus on these key areas:

#### Control Mechanisms

Ensure interface controls work across different interaction methods:

```javascript
// Support both touch and mouse events
function handleInteraction(element) {
    // Mouse events
    element.addEventListener('mousedown', startAction);
    element.addEventListener('mouseup', endAction);
    
    // Touch events for mobile
    element.addEventListener('touchstart', (e) => {
        // Prevent mouse events from firing
        e.preventDefault();
        startAction(e);
    });
    
    element.addEventListener('touchend', (e) => {
        e.preventDefault();
        endAction(e);
    });
    
    // Keyboard support
    element.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            startAction(e);
        }
    });
}
```

Avoid mouse-specific events that don't work on touch devices:

```javascript
// ❌ Avoid: Mouse-only events
div.onmousedown = startDrag;
document.onmouseup = stopDrag;

// ✅ Better: Multi-modal support
function addDragSupport(element) {
    // Mouse support
    element.addEventListener('mousedown', initiateDrag);
    
    // Touch support
    element.addEventListener('touchstart', initiateDrag);
    
    // Keyboard support
    element.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
            initiateDrag(e);
        }
    });
}
```

#### User Input Optimization

Minimize typing requirements on mobile devices:

```html
<!-- Use semantic input types for better mobile experience -->
<input type="tel" placeholder="Phone number" />
<input type="email" placeholder="Email address" />
<input type="number" placeholder="Age" />
<input type="date" placeholder="Birth date" />

<!-- Provide options instead of free text when possible -->
<select aria-label="Job title">
    <option>Software Engineer</option>
    <option>Product Manager</option>
    <option>Designer</option>
    <option value="other">Other</option>
</select>

<!-- Show additional field only when "Other" is selected -->
<input type="text" id="other-job" placeholder="Please specify" style="display: none;" />
```

```javascript
// Progressive enhancement for job selection
const jobSelect = document.querySelector('select[aria-label="Job title"]');
const otherInput = document.getElementById('other-job');

jobSelect.addEventListener('change', function() {
    if (this.value === 'other') {
        otherInput.style.display = 'block';
        otherInput.focus();
        otherInput.setAttribute('required', 'true');
    } else {
        otherInput.style.display = 'none';
        otherInput.removeAttribute('required');
    }
});
```

#### Responsive Design for Accessibility

Ensure your layouts work across different screen sizes and orientations:

```css
/* Ensure text remains readable when zoomed */
@media screen and (max-width: 768px) {
    body {
        font-size: 16px; /* Minimum readable size */
        line-height: 1.5;
    }
    
    /* Ensure touch targets are large enough */
    button, input, select, textarea {
        min-height: 44px;
        min-width: 44px;
    }
    
    /* Provide adequate spacing between interactive elements */
    .interactive-element {
        margin: 8px 0;
    }
}

/* Support high-resolution displays */
@media (-webkit-min-device-pixel-ratio: 2), (min-resolution: 192dpi) {
    .icon {
        /* Use SVG or high-resolution images */
        background-image: url('icon@2x.png');
        background-size: contain;
    }
}
```

#### Viewport Configuration

Always enable zooming for accessibility:

```html
<!-- ✅ Correct: Allow user scaling -->
<meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=yes" />

<!-- ❌ Never disable zoom -->
<meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=no" />
```

#### Mobile Navigation Patterns

Implement accessible hamburger menus and mobile navigation:

```html
<nav role="navigation" aria-label="Main navigation">
    <button 
        class="menu-toggle" 
        aria-controls="mobile-menu" 
        aria-expanded="false"
        aria-label="Toggle navigation menu">
        <span class="hamburger-line"></span>
        <span class="hamburger-line"></span>
        <span class="hamburger-line"></span>
    </button>
    
    <ul id="mobile-menu" class="mobile-menu" aria-hidden="true">
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#contact">Contact</a></li>
    </ul>
</nav>
```

```javascript
function initializeMobileMenu() {
    const menuToggle = document.querySelector('.menu-toggle');
    const mobileMenu = document.getElementById('mobile-menu');
    
    menuToggle.addEventListener('click', toggleMenu);
    menuToggle.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            toggleMenu();
        }
    });
    
    function toggleMenu() {
        const isExpanded = menuToggle.getAttribute('aria-expanded') === 'true';
        
        menuToggle.setAttribute('aria-expanded', !isExpanded);
        mobileMenu.setAttribute('aria-hidden', isExpanded);
        mobileMenu.classList.toggle('open');
        
        // Focus management
        if (!isExpanded) {
            // Focus first menu item when opening
            const firstMenuItem = mobileMenu.querySelector('a');
            if (firstMenuItem) {
                firstMenuItem.focus();
            }
        }
    }
    
    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
        if (!e.target.closest('nav')) {
            const isExpanded = menuToggle.getAttribute('aria-expanded') === 'true';
            if (isExpanded) {
                toggleMenu();
            }
        }
    });
    
    // Handle escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            const isExpanded = menuToggle.getAttribute('aria-expanded') === 'true';
            if (isExpanded) {
                toggleMenu();
                menuToggle.focus();
            }
        }
    });
}
```

```css
.menu-toggle {
    background: none;
    border: none;
    padding: 12px;
    cursor: pointer;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    width: 44px;
    height: 44px;
}

.hamburger-line {
    width: 20px;
    height: 2px;
    background-color: currentColor;
    transition: all 0.3s ease;
}

.mobile-menu {
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    background: white;
    border: 1px solid #ccc;
    transform: translateY(-100%);
    opacity: 0;
    visibility: hidden;
    transition: all 0.3s ease;
}

.mobile-menu.open {
    transform: translateY(0);
    opacity: 1;
    visibility: visible;
}

.mobile-menu a {
    display: block;
    padding: 16px;
    text-decoration: none;
    border-bottom: 1px solid #eee;
    min-height: 44px;
    display: flex;
    align-items: center;
}

.mobile-menu a:focus {
    outline: 2px solid #0066cc;
    outline-offset: -2px;
}
```

### Screen Reader Testing

#### Android TalkBack

To test with TalkBack:

1. Enable TalkBack in Settings > Accessibility
2. Use these gestures:
   - **Single tap**: Select and announce item
   - **Double tap**: Activate selected item
   - **Swipe left/right**: Navigate between items
   - **Two-finger swipe up**: Access global menu
   - **Swipe up then right**: Access local menu

#### iOS VoiceOver

To test with VoiceOver:

1. Enable in Settings > Accessibility > VoiceOver
2. Use these gestures:
   - **Single tap**: Select item
   - **Double tap**: Activate item
   - **Swipe left/right**: Navigate between items
   - **Three-finger swipe**: Scroll
   - **Rotor gesture**: Access navigation options

### Testing Guidelines

#### Manual Testing Checklist

- [ ] All interactive elements have minimum 44px touch targets
- [ ] Content is readable when zoomed to 200%
- [ ] Navigation works with touch, keyboard, and screen readers
- [ ] Form inputs use appropriate mobile keyboards
- [ ] No horizontal scrolling on mobile devices
- [ ] Focus indicators are visible and clear
- [ ] Screen reader announces all important content changes

#### Automated Testing

```javascript
// Example Playwright test with axe-core
import { test, expect } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';

test('mobile accessibility compliance', async ({ page }) => {
    await page.goto('/your-page');
    
    // Set mobile viewport
    await page.setViewportSize({ width: 375, height: 667 });
    
    const accessibilityScanResults = await new AxeBuilder({ page })
        .withTags(['wcag2a', 'wcag2aa', 'wcag21aa'])
        .analyze();
    
    expect(accessibilityScanResults.violations).toEqual([]);
});

test('touch target sizes', async ({ page }) => {
    await page.goto('/your-page');
    await page.setViewportSize({ width: 375, height: 667 });
    
    const interactiveElements = page.locator('button, a, input, select, textarea');
    const count = await interactiveElements.count();
    
    for (let i = 0; i < count; i++) {
        const element = interactiveElements.nth(i);
        const box = await element.boundingBox();
        
        expect(box.width).toBeGreaterThanOrEqual(44);
        expect(box.height).toBeGreaterThanOrEqual(44);
    }
});
```

### Mobile-Specific ARIA Considerations

When developing for mobile, pay special attention to:

```html
<!-- Announce loading states -->
<div aria-live="polite" aria-atomic="true" id="loading-status"></div>

<!-- Provide clear button labels -->
<button aria-label="Add item to shopping cart">
    <i class="icon-plus" aria-hidden="true"></i>
</button>

<!-- Group related form fields -->
<fieldset>
    <legend>Shipping Address</legend>
    <input type="text" aria-label="Street address" />
    <input type="text" aria-label="City" />
    <input type="text" aria-label="Postal code" />
</fieldset>
```

```javascript
// Announce dynamic content changes
function updateLoadingStatus(message) {
    const statusElement = document.getElementById('loading-status');
    statusElement.textContent = message;
}

// Usage
updateLoadingStatus('Loading search results...');
setTimeout(() => {
    updateLoadingStatus('Search completed. Found 25 results.');
}, 2000);
```

### Key Takeaways

1. **Test on actual devices** with screen readers enabled
2. **Ensure adequate touch target sizes** (minimum 44px)
3. **Support multiple input methods** (touch, keyboard, voice)
4. **Allow zoom and scaling** for users with visual impairments
5. **Optimize form inputs** for mobile keyboards
6. **Implement proper focus management** in mobile navigation
7. **Test with both portrait and landscape orientations**
8. **Provide clear feedback** for all user actions