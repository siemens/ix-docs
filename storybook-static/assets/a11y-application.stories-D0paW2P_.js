import{s as o,h as e}from"./stencil-render-CqJWeRgr.js";import{m as l}from"./generic-render-D6eVCH02.js";import"./sample-QwvD4foy.js";function p(i={},c=!1){return e("ix-application",{...i},e("ix-application-header",{name:"Skip link accessibility"}),e("ix-menu",null,e("ix-menu-item",null,"Home")),e("h1",{id:"application-story-content",tabIndex:-1},"Application content"),e("p",null,"The skip links bypass repeated application-shell content."),c?e("button",{slot:"bottom"},"Application footer action"):null)}const m={title:"Example/Application/Accessibility",tags:[],render:o(i=>p(i)),argTypes:l("ix-application",{}),parameters:{a11y:{test:"error"}}},n={},r={render:o(i=>p(i,!0))},t={args:{skipLinkMainTarget:"application-story-content"}},a={render:o(()=>e("div",null,e("a",{href:"#application-story-content"},"Skip to application content"),p({disableSkipLinks:!0})))},s={args:{i18nSkipToMain:"Zum Hauptinhalt springen",i18nSkipToFooter:"Zur Fußzeile springen"},render:o(i=>p(i,!0))},g=["DefaultSkipLink","MainAndFooterSkipLinks","CustomSkipLinkTarget","DisabledSkipLinks","LocalizedSkipLinks"];n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:"{}",...n.parameters?.docs?.source},description:{story:"The default Main skip link targeting its internal main region.",...n.parameters?.docs?.description}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  render: stencil(args => renderApplication(args, true))
}`,...r.parameters?.docs?.source},description:{story:"Main and conditional Footer skip links.",...r.parameters?.docs?.description}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    skipLinkMainTarget: 'application-story-content'
  }
}`,...t.parameters?.docs?.source},description:{story:"Main skip link targeting a light-DOM descendant.",...t.parameters?.docs?.description}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  render: stencil(() => <div>
      <a href="#application-story-content">Skip to application content</a>
      {renderApplication({
      disableSkipLinks: true
    })}
    </div>)
}`,...a.parameters?.docs?.source},description:{story:`Without the built-in skip links. An equivalent bypass link is
provided outside the component.`,...a.parameters?.docs?.description}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    i18nSkipToMain: 'Zum Hauptinhalt springen',
    i18nSkipToFooter: 'Zur Fußzeile springen'
  },
  render: stencil(args => renderApplication(args, true))
}`,...s.parameters?.docs?.source},description:{story:"Localized Main and Footer skip-link text.",...s.parameters?.docs?.description}}};export{t as CustomSkipLinkTarget,n as DefaultSkipLink,a as DisabledSkipLinks,s as LocalizedSkipLinks,r as MainAndFooterSkipLinks,g as __namedExportsOrder,m as default};
