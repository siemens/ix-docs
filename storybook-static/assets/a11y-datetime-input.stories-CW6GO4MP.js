import{m as h,g as b}from"./generic-render-D6eVCH02.js";import{x}from"./iframe-CLegjRT6.js";import"./sample-QwvD4foy.js";import"./preload-helper-PPVm8Dsz.js";const{expect:l,waitFor:p}=__STORYBOOK_MODULE_TEST__,w={title:"Example/DateTimeInput/Accessibility",tags:[],render:c=>b("ix-datetime-input",c),argTypes:h("ix-datetime-input",{}),parameters:{design:{type:"figma",url:"https://www.figma.com/design/r2nqdNNXXZtPmWuVjIlM1Q/iX-Components---Brand-Dark?node-id=225-5535&m=dev"},a11y:{test:"error"}}},e={args:{label:"Date and time",value:"2026/02/08 00:00:00"}},t={args:{label:"Select date and time",value:"2026/02/08 12:30:00"}},a={args:{label:"Date and time",value:"2026/02/08 00:00:00",disabled:!0}},r={args:{label:"Date and time",value:"2026/02/08 00:00:00",readonly:!0}},i={args:{label:"Required field",value:"",required:!0}},n={args:{label:"Event date",value:"2026/02/08 00:00:00",helperText:"Select the date and time for the event"}},o={args:{label:"Date and time",value:"2026/06/15 10:00:00",minDate:"2026/01/01",maxDate:"2026/12/31"}},s={render:()=>x`<ix-datetime-input
      value="2026/02/08 00:00:00"
      label="Appointment"
      aria-label="Select appointment date and time"
    ></ix-datetime-input>`},d={args:{label:"Date and time",value:"2026/02/08 00:00:00",requireConfirmation:!0},parameters:{a11y:{context:{exclude:[{fromShadowDom:["ix-datetime-input","ix-icon-button"]}]}}},play:async({canvasElement:c})=>{await customElements.whenDefined("ix-datetime-input");const m=c.querySelector("ix-datetime-input");await p(()=>l(m).toHaveAttribute("hydrated")),m.shadowRoot.querySelector("ix-icon-button").click(),await p(()=>{const u=m.shadowRoot.querySelector("ix-datetime-picker");l(u?.shadowRoot?.querySelector('[data-testid="confirm"]')).toBeVisible()})}},v=["Default","WithLabel","DisabledState","ReadonlyState","RequiredState","WithHelperText","WithMinMaxDate","WithAriaLabel","RequireConfirmation"];e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Date and time',
    value: '2026/02/08 00:00:00'
  }
}`,...e.parameters?.docs?.source},description:{story:"Default datetime input with value",...e.parameters?.docs?.description}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Select date and time',
    value: '2026/02/08 12:30:00'
  }
}`,...t.parameters?.docs?.source},description:{story:"Datetime input with label",...t.parameters?.docs?.description}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Date and time',
    value: '2026/02/08 00:00:00',
    disabled: true
  }
}`,...a.parameters?.docs?.source},description:{story:"Disabled datetime input",...a.parameters?.docs?.description}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Date and time',
    value: '2026/02/08 00:00:00',
    readonly: true
  }
}`,...r.parameters?.docs?.source},description:{story:"Readonly datetime input",...r.parameters?.docs?.description}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Required field',
    value: '',
    required: true
  }
}`,...i.parameters?.docs?.source},description:{story:"Required datetime input",...i.parameters?.docs?.description}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Event date',
    value: '2026/02/08 00:00:00',
    helperText: 'Select the date and time for the event'
  }
}`,...n.parameters?.docs?.source},description:{story:"Datetime input with helper text",...n.parameters?.docs?.description}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Date and time',
    value: '2026/06/15 10:00:00',
    minDate: '2026/01/01',
    maxDate: '2026/12/31'
  }
}`,...o.parameters?.docs?.source},description:{story:"Datetime input with min/max date constraints",...o.parameters?.docs?.description}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: () => {
    return html\`<ix-datetime-input
      value="2026/02/08 00:00:00"
      label="Appointment"
      aria-label="Select appointment date and time"
    ></ix-datetime-input>\`;
  }
}`,...s.parameters?.docs?.source},description:{story:"Datetime input with aria-label",...s.parameters?.docs?.description}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Date and time',
    value: '2026/02/08 00:00:00',
    requireConfirmation: true
  },
  parameters: {
    a11y: {
      context: {
        // The open trigger fails aria-allowed-attr (aria-expanded on a
        // role-less host), which is unrelated to the footer under test.
        exclude: [{
          fromShadowDom: ['ix-datetime-input', 'ix-icon-button']
        }]
      }
    }
  },
  play: async ({
    canvasElement
  }) => {
    await customElements.whenDefined('ix-datetime-input');
    const datetimeInput = canvasElement.querySelector('ix-datetime-input')!;
    await waitFor(() => expect(datetimeInput).toHaveAttribute('hydrated'));
    datetimeInput.shadowRoot!.querySelector<HTMLElement>('ix-icon-button')!.click();
    await waitFor(() => {
      const datetimePicker = datetimeInput.shadowRoot!.querySelector('ix-datetime-picker');
      expect(datetimePicker?.shadowRoot?.querySelector('[data-testid="confirm"]')).toBeVisible();
    });
  }
}`,...d.parameters?.docs?.source},description:{story:`Datetime input that applies a selection only via the confirm button.
The picker is opened so the confirm/cancel footer is checked as well.`,...d.parameters?.docs?.description}}};export{e as Default,a as DisabledState,r as ReadonlyState,d as RequireConfirmation,i as RequiredState,s as WithAriaLabel,n as WithHelperText,t as WithLabel,o as WithMinMaxDate,v as __namedExportsOrder,w as default};
