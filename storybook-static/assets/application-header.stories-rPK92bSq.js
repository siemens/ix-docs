import{x as b}from"./iframe-CLegjRT6.js";import{g as i,m as C}from"./generic-render-D6eVCH02.js";import"./preload-helper-PPVm8Dsz.js";import"./sample-QwvD4foy.js";function x(){return{control:{type:"select"},options:["","/images/example-app-icon.svg","/images/example-app-icon-2-3.svg","/images/example-app-icon-3-2.svg","/images/example-company.svg"]}}const E={title:"Example/ApplicationHeader",tags:[],render:n=>i("ix-application-header",n,["showAppSwitch"]),argTypes:C("ix-application-header",{appIcon:x(),companyLogo:x(),showAppSwitch:{control:"boolean"}}),args:{name:"Application Header"},parameters:{layout:"fullscreen",design:{type:"figma"}}},s={args:{name:"Application Header"}},p={args:{appIcon:"/images/example-app-icon.svg",appIconAlt:"Example App Icon",companyLogo:"/images/example-company.svg",companyLogoAlt:"Example Company Logo"}},v=n=>{const o=document.createElement("ix-application"),r=i("ix-application-header",n,["defaultContent","secondaryContent","overflowContent","showAppSwitch"],(e,f)=>(f.showAppSwitch&&(o.appSwitchConfig={apps:[{description:"test",iconSrc:"",id:"1",name:"Test App",target:"_blank",url:"https://example.com"}],currentAppId:"1"}),e)).querySelector("ix-application-header");h("Item",n.defaultContent,!0).forEach(e=>{r.appendChild(e)}),h("Slot item",n.secondaryContent).forEach(e=>{e.slot="secondary",r.appendChild(e)}),h("Overflow item",n.overflowContent).forEach(e=>{e.slot="overflow",r.appendChild(e)});const t=document.createElement("ix-avatar");return t.initials="JD",r.appendChild(t),o.appendChild(r),o},c={args:{appIcon:"/images/example-app-icon.svg",appIconAlt:"Example App Icon",companyLogo:"/images/example-company.svg",companyLogoAlt:"Example Company Logo",nameSuffix:"Powered by XZY",defaultContent:3,secondaryContent:3,overflowContent:2},argTypes:{defaultContent:{control:{type:"number"}},secondaryContent:{control:{type:"number"}},overflowContent:{control:{type:"number"}}},render:n=>v(n)},l={render:n=>b`<ix-application-header
      name="${n.name}"
      ?show-menu="${n.showMenu}"
    >
      <ix-avatar name="John Doe" aria-label="user-avatar">
        <ix-dropdown-item>Profile</ix-dropdown-item>
        <ix-dropdown-item>Settings</ix-dropdown-item>
        <ix-dropdown-item>Logout</ix-dropdown-item>
      </ix-avatar>
    </ix-application-header>`,args:{name:"Application Header"}},d={args:{name:"Application Header",hideBottomBorder:!0},render:n=>{const o=i("ix-application-header",n),a=document.createElement("div");return Object.assign(a.style,{display:"flex",position:"relative",justifyContent:"center",alignItems:"center",backgroundColor:"var(--si-sys-color-background-1)",height:"5rem",width:"100%"}),a.innerText="Simple div with same background as header",o.appendChild(a),o}},m={render:n=>{const o=i("ix-application-header",n,["hideSlottedLogo"]);if(!n.hideSlottedLogo){const a=document.createElement("img");a.src="/images/example-company.svg",a.slot="logo",o.querySelector("ix-application-header")?.appendChild(a)}return o},args:{hideSlottedLogo:!1},argTypes:{hideSlottedLogo:{control:"boolean"}}},g={args:{companyLogo:"/images/example-company.svg"}};function h(n,o,a=!1){return Array.from({length:o},(r,t)=>{const e=document.createElement("ix-icon-button");return e.icon="star",e.innerText=`${n} Button ${t+1}`,t!==o-1&&(e.style.marginRight="var(--si-sys-sizing-spacing-x-40)"),a&&e.setAttribute("outline","true"),e})}const u={args:{name:"Application Header"},render:n=>{const o=v(n);return o.style.setProperty("--ix-safe-area-inset-top","5rem"),o}},y={args:{name:"Application Header"},render:n=>{const o=i("ix-application-header",n),a=o.querySelector("ix-application-header");a.style.width="100%";const r=document.createElement("ix-avatar");r.initials="JD",a.appendChild(r);const t=document.createElement("div");t.style.backgroundColor="var(--si-sys-color-background-1)",t.style.minHeight="3rem",t.style.width="auto",t.style.borderBottom="var(--si-sys-sizing-border-width-default) solid var(--si-sys-color-border-4)",t.style.display="flex",t.style.flexDirection="row",t.style.justifyContent="flex-end",t.style.alignItems="center",t.style.paddingRight="var(--si-sys-sizing-spacing-x-60)",t.style.gap="var(--si-sys-sizing-spacing-x-40)";let e=document.createElement("ix-icon-button");return e.variant="subtle-tertiary",e.icon="minus",t.appendChild(e),e=document.createElement("ix-icon-button"),e.variant="subtle-tertiary",e.icon="editor-grid-none",t.appendChild(e),e=document.createElement("ix-icon-button"),e.variant="subtle-tertiary",e.icon="close",t.appendChild(e),o.appendChild(t),o.style.display="flex",o.style.height="3rem",o}},I=["Default","AppIcon","Overflow","withAvatar","NoBorderBottom","CompanyLogoAsSlot","CompanyLogoAsProperty","SafeArea","WindowControls"];s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    name: 'Application Header'
  }
}`,...s.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    appIcon: '/images/example-app-icon.svg',
    appIconAlt: 'Example App Icon',
    companyLogo: '/images/example-company.svg',
    companyLogoAlt: 'Example Company Logo'
  }
}`,...p.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    appIcon: '/images/example-app-icon.svg',
    appIconAlt: 'Example App Icon',
    companyLogo: '/images/example-company.svg',
    companyLogoAlt: 'Example Company Logo',
    nameSuffix: 'Powered by XZY',
    defaultContent: 3,
    secondaryContent: 3,
    overflowContent: 2
  },
  argTypes: {
    defaultContent: {
      control: {
        type: 'number'
      }
    },
    secondaryContent: {
      control: {
        type: 'number'
      }
    },
    overflowContent: {
      control: {
        type: 'number'
      }
    }
  },
  render: args => overflowRender(args)
}`,...c.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: args => {
    return html\`<ix-application-header
      name="\${args.name}"
      ?show-menu="\${args.showMenu}"
    >
      <ix-avatar name="John Doe" aria-label="user-avatar">
        <ix-dropdown-item>Profile</ix-dropdown-item>
        <ix-dropdown-item>Settings</ix-dropdown-item>
        <ix-dropdown-item>Logout</ix-dropdown-item>
      </ix-avatar>
    </ix-application-header>\`;
  },
  args: {
    name: 'Application Header'
  }
}`,...l.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    name: 'Application Header',
    hideBottomBorder: true
  },
  render: args => {
    const container = genericRender('ix-application-header', args);
    const bottomContent = document.createElement('div');
    Object.assign(bottomContent.style, {
      display: 'flex',
      position: 'relative',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'var(--si-sys-color-background-1)',
      height: '5rem',
      width: '100%'
    });
    bottomContent.innerText = 'Simple div with same background as header';
    container.appendChild(bottomContent);
    return container;
  }
}`,...d.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: args => {
    const container = genericRender('ix-application-header', args, ['hideSlottedLogo']);
    if (!args.hideSlottedLogo) {
      const companyLogo = document.createElement('img');
      companyLogo.src = '/images/example-company.svg';
      companyLogo.slot = 'logo';
      container.querySelector('ix-application-header')?.appendChild(companyLogo);
    }
    return container;
  },
  args: {
    hideSlottedLogo: false
  },
  argTypes: {
    hideSlottedLogo: {
      control: 'boolean'
    }
  }
}`,...m.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    companyLogo: '/images/example-company.svg'
  }
}`,...g.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    name: 'Application Header'
  },
  render: args => {
    const container = overflowRender(args);
    container.style.setProperty('--ix-safe-area-inset-top', '5rem');
    return container;
  }
}`,...u.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    name: 'Application Header'
  },
  render: args => {
    const container = genericRender('ix-application-header', args);
    const applicationHeader = container.querySelector('ix-application-header') as HTMLIxApplicationHeaderElement;
    applicationHeader.style.width = '100%';
    const avatar = document.createElement('ix-avatar');
    avatar.initials = 'JD';
    applicationHeader.appendChild(avatar);
    const other = document.createElement('div');
    other.style.backgroundColor = 'var(--si-sys-color-background-1)';
    other.style.minHeight = '3rem';
    other.style.width = 'auto';
    other.style.borderBottom = 'var(--si-sys-sizing-border-width-default) solid var(--si-sys-color-border-4)';
    other.style.display = 'flex';
    other.style.flexDirection = 'row';
    other.style.justifyContent = 'flex-end';
    other.style.alignItems = 'center';
    other.style.paddingRight = 'var(--si-sys-sizing-spacing-x-60)';
    other.style.gap = 'var(--si-sys-sizing-spacing-x-40)';
    let button = document.createElement('ix-icon-button');
    button.variant = 'subtle-tertiary';
    button.icon = 'minus';
    other.appendChild(button);
    button = document.createElement('ix-icon-button');
    button.variant = 'subtle-tertiary';
    button.icon = 'editor-grid-none';
    other.appendChild(button);
    button = document.createElement('ix-icon-button');
    button.variant = 'subtle-tertiary';
    button.icon = 'close';
    other.appendChild(button);
    container.appendChild(other);
    container.style.display = 'flex';
    container.style.height = '3rem';
    return container;
  }
}`,...y.parameters?.docs?.source}}};export{p as AppIcon,g as CompanyLogoAsProperty,m as CompanyLogoAsSlot,s as Default,d as NoBorderBottom,c as Overflow,u as SafeArea,y as WindowControls,I as __namedExportsOrder,E as default,l as withAvatar};
