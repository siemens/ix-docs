import{m as x}from"./generic-render-Ck1ibjH2.js";import{x as e}from"./iframe-D1EC8WSq.js";import"./sample-CrjnuCO3.js";import"./preload-helper-PPVm8Dsz.js";const h={title:"Example/Menu/Accessibility",tags:[],render:c=>e`<ix-menu expand="${c.expand}">
      <ix-menu-item home icon="home" label="Home"></ix-menu-item>
      <ix-menu-item icon="globe" label="Item 1"></ix-menu-item>
      <ix-menu-category label="Top level Category" icon="rocket">
        <ix-menu-item icon="globe" label="Item 2"></ix-menu-item>
        <ix-menu-item icon="globe" label="Item 3"></ix-menu-item>
      </ix-menu-category>
      <ix-menu-about></ix-menu-about>
      <ix-menu-settings></ix-menu-settings>
    </ix-menu>`,argTypes:x("ix-menu",{}),parameters:{design:{type:"figma",url:"https://www.figma.com/design/r2nqdNNXXZtPmWuVjIlM1Q/iX-Components---Brand-Dark?node-id=4533-132499&m=dev"},a11y:{test:"error"}}},n={args:{expand:!0}},t={args:{expand:!1}},i={render:()=>e`<ix-menu expand="true">
      <ix-menu-item home icon="home" label="Home" active></ix-menu-item>
      <ix-menu-item icon="globe" label="Item 1"></ix-menu-item>
      <ix-menu-category label="Category" icon="rocket">
        <ix-menu-item icon="globe" label="Item 2"></ix-menu-item>
      </ix-menu-category>
    </ix-menu>`},m={render:()=>e`<ix-menu expand="true">
      <ix-menu-item home icon="home" label="Home"></ix-menu-item>
      <ix-menu-item icon="globe" label="Item 1" disabled></ix-menu-item>
      <ix-menu-category label="Category" icon="rocket">
        <ix-menu-item icon="globe" label="Item 2"></ix-menu-item>
      </ix-menu-category>
    </ix-menu>`,parameters:{a11y:{test:"error"}}},o={render:()=>e`<ix-menu expand="true">
      <ix-menu-item home icon="home" label="Home"></ix-menu-item>
      <ix-menu-item
        icon="globe"
        label="Item 1"
        notifications="5"
      ></ix-menu-item>
      <ix-menu-category label="Category" icon="rocket" notifications="3">
        <ix-menu-item icon="globe" label="Item 2"></ix-menu-item>
      </ix-menu-category>
    </ix-menu>`},r={render:()=>e`<ix-menu expand="true">
      <ix-menu-item home icon="home" label="Home"></ix-menu-item>
      <ix-menu-item
        icon="globe"
        label="External Link"
        href="https://ix.siemens.io"
        target="_blank"
      ></ix-menu-item>
    </ix-menu>`},a={render:()=>e`<ix-menu expand="true" enable-toggle-theme="true">
      <ix-menu-item home icon="home" label="Home"></ix-menu-item>
      <ix-menu-item icon="globe" label="Item 1"></ix-menu-item>
      <ix-menu-category label="Category" icon="rocket">
        <ix-menu-item icon="globe" label="Item 2"></ix-menu-item>
        <ix-menu-item icon="globe" label="Item 3"></ix-menu-item>
      </ix-menu-category>
      <ix-menu-item slot="bottom" icon="info" label="Info"></ix-menu-item>
      <ix-menu-about>
        <ix-menu-about-item label="About Item 1"></ix-menu-about-item>
      </ix-menu-about>
      <ix-menu-settings>
        <ix-menu-settings-item label="Settings Item 1"></ix-menu-settings-item>
      </ix-menu-settings>
    </ix-menu>`},u={render:()=>e`<ix-menu expand="true" pinned>
      <ix-menu-item home icon="home" label="Home"></ix-menu-item>
      <ix-menu-item icon="globe" label="Item 1"></ix-menu-item>
      <ix-menu-category label="Category" icon="rocket">
        <ix-menu-item icon="globe" label="Item 2"></ix-menu-item>
      </ix-menu-category>
    </ix-menu>`},l={render:()=>e`<ix-menu expand="true">
      <ix-menu-item
        home
        icon="home"
        label="Home"
        tooltip-text="Navigate to home page"
      ></ix-menu-item>
      <ix-menu-item
        icon="globe"
        label="Item 1"
        tooltip-text="Custom tooltip for Item 1"
      ></ix-menu-item>
      <ix-menu-category
        label="Category"
        icon="rocket"
        tooltip-text="Expand category"
      >
        <ix-menu-item icon="globe" label="Item 2"></ix-menu-item>
      </ix-menu-category>
    </ix-menu>`},s={render:()=>e`<ix-menu expand="true">
      <ix-menu-item home icon="home" label="Home"></ix-menu-item>
      <ix-menu-item icon="globe" label="Item 1"></ix-menu-item>
      <ix-menu-category label="Category" icon="rocket">
        <ix-menu-item icon="globe" label="Item 2"></ix-menu-item>
        <ix-menu-item icon="globe" label="Item 3" active></ix-menu-item>
      </ix-menu-category>
    </ix-menu>`};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    expand: true
  }
}`,...n.parameters?.docs?.source},description:{story:"Menu expanded state",...n.parameters?.docs?.description}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    expand: false
  }
}`,...t.parameters?.docs?.source},description:{story:"Menu collapsed state",...t.parameters?.docs?.description}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: () => {
    return html\`<ix-menu expand="true">
      <ix-menu-item home icon="home" label="Home" active></ix-menu-item>
      <ix-menu-item icon="globe" label="Item 1"></ix-menu-item>
      <ix-menu-category label="Category" icon="rocket">
        <ix-menu-item icon="globe" label="Item 2"></ix-menu-item>
      </ix-menu-category>
    </ix-menu>\`;
  }
}`,...i.parameters?.docs?.source},description:{story:"Menu with active item",...i.parameters?.docs?.description}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: () => {
    return html\`<ix-menu expand="true">
      <ix-menu-item home icon="home" label="Home"></ix-menu-item>
      <ix-menu-item icon="globe" label="Item 1" disabled></ix-menu-item>
      <ix-menu-category label="Category" icon="rocket">
        <ix-menu-item icon="globe" label="Item 2"></ix-menu-item>
      </ix-menu-category>
    </ix-menu>\`;
  },
  parameters: {
    a11y: {
      test: 'error'
    }
  }
}`,...m.parameters?.docs?.source},description:{story:`Menu with disabled item

Note: Disabled (inactive) UI components are exempt from color contrast
requirements per WCAG 2.1 SC 1.4.3
@see https://www.w3.org/WAI/WCAG21/Understanding/contrast-minimum.html`,...m.parameters?.docs?.description}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: () => {
    return html\`<ix-menu expand="true">
      <ix-menu-item home icon="home" label="Home"></ix-menu-item>
      <ix-menu-item
        icon="globe"
        label="Item 1"
        notifications="5"
      ></ix-menu-item>
      <ix-menu-category label="Category" icon="rocket" notifications="3">
        <ix-menu-item icon="globe" label="Item 2"></ix-menu-item>
      </ix-menu-category>
    </ix-menu>\`;
  }
}`,...o.parameters?.docs?.source},description:{story:"Menu with notifications",...o.parameters?.docs?.description}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  render: () => {
    return html\`<ix-menu expand="true">
      <ix-menu-item home icon="home" label="Home"></ix-menu-item>
      <ix-menu-item
        icon="globe"
        label="External Link"
        href="https://ix.siemens.io"
        target="_blank"
      ></ix-menu-item>
    </ix-menu>\`;
  }
}`,...r.parameters?.docs?.source},description:{story:"Menu item with link (anchor)",...r.parameters?.docs?.description}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  render: () => {
    return html\`<ix-menu expand="true" enable-toggle-theme="true">
      <ix-menu-item home icon="home" label="Home"></ix-menu-item>
      <ix-menu-item icon="globe" label="Item 1"></ix-menu-item>
      <ix-menu-category label="Category" icon="rocket">
        <ix-menu-item icon="globe" label="Item 2"></ix-menu-item>
        <ix-menu-item icon="globe" label="Item 3"></ix-menu-item>
      </ix-menu-category>
      <ix-menu-item slot="bottom" icon="info" label="Info"></ix-menu-item>
      <ix-menu-about>
        <ix-menu-about-item label="About Item 1"></ix-menu-about-item>
      </ix-menu-about>
      <ix-menu-settings>
        <ix-menu-settings-item label="Settings Item 1"></ix-menu-settings-item>
      </ix-menu-settings>
    </ix-menu>\`;
  }
}`,...a.parameters?.docs?.source},description:{story:`Full menu layout with all slots and features:
- home slot
- bottom slot
- settings tab
- about tab
- theme toggle`,...a.parameters?.docs?.description}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: () => {
    return html\`<ix-menu expand="true" pinned>
      <ix-menu-item home icon="home" label="Home"></ix-menu-item>
      <ix-menu-item icon="globe" label="Item 1"></ix-menu-item>
      <ix-menu-category label="Category" icon="rocket">
        <ix-menu-item icon="globe" label="Item 2"></ix-menu-item>
      </ix-menu-category>
    </ix-menu>\`;
  }
}`,...u.parameters?.docs?.source},description:{story:"Pinned menu (always visible, different interaction model)",...u.parameters?.docs?.description}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: () => {
    return html\`<ix-menu expand="true">
      <ix-menu-item
        home
        icon="home"
        label="Home"
        tooltip-text="Navigate to home page"
      ></ix-menu-item>
      <ix-menu-item
        icon="globe"
        label="Item 1"
        tooltip-text="Custom tooltip for Item 1"
      ></ix-menu-item>
      <ix-menu-category
        label="Category"
        icon="rocket"
        tooltip-text="Expand category"
      >
        <ix-menu-item icon="globe" label="Item 2"></ix-menu-item>
      </ix-menu-category>
    </ix-menu>\`;
  }
}`,...l.parameters?.docs?.source},description:{story:"Menu items with custom tooltip text",...l.parameters?.docs?.description}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: () => {
    return html\`<ix-menu expand="true">
      <ix-menu-item home icon="home" label="Home"></ix-menu-item>
      <ix-menu-item icon="globe" label="Item 1"></ix-menu-item>
      <ix-menu-category label="Category" icon="rocket">
        <ix-menu-item icon="globe" label="Item 2"></ix-menu-item>
        <ix-menu-item icon="globe" label="Item 3" active></ix-menu-item>
      </ix-menu-category>
    </ix-menu>\`;
  }
}`,...s.parameters?.docs?.source},description:{story:"Category with active nested item (tests auto-expansion behavior)",...s.parameters?.docs?.description}}};const y=["Expanded","Collapsed","WithActiveItem","WithDisabledItem","WithNotifications","WithLink","FullLayout","Pinned","WithCustomTooltip","WithActiveNestedItem"];export{t as Collapsed,n as Expanded,a as FullLayout,u as Pinned,i as WithActiveItem,s as WithActiveNestedItem,l as WithCustomTooltip,m as WithDisabledItem,r as WithLink,o as WithNotifications,y as __namedExportsOrder,h as default};
