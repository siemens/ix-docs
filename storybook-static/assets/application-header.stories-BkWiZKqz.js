import{x as b}from"./iframe-D1EC8WSq.js";import{m as C,g as i}from"./generic-render-Ck1ibjH2.js";import"./preload-helper-PPVm8Dsz.js";import"./sample-CrjnuCO3.js";function x(){return{control:{type:"select"},options:["","/images/example-app-icon.svg","/images/example-app-icon-2-3.svg","/images/example-app-icon-3-2.svg","/images/example-company.svg"]}}const E={title:"Example/ApplicationHeader",tags:[],render:n=>i("ix-application-header",n,["showAppSwitch"]),argTypes:C("ix-application-header",{appIcon:x(),companyLogo:x(),showAppSwitch:{control:"boolean"}}),args:{name:"Application Header"},parameters:{layout:"fullscreen",design:{type:"figma"}}},p={args:{name:"Application Header"}},s={args:{appIcon:"/images/example-app-icon.svg",appIconAlt:"Example App Icon",companyLogo:"/images/example-company.svg",companyLogoAlt:"Example Company Logo"}},v=n=>{const t=document.createElement("ix-application"),r=i("ix-application-header",n,["defaultContent","secondaryContent","overflowContent","showAppSwitch"],(e,f)=>(f.showAppSwitch&&(t.appSwitchConfig={apps:[{description:"test",iconSrc:"",id:"1",name:"Test App",target:"_blank",url:"https://example.com"}],currentAppId:"1"}),e)).querySelector("ix-application-header");y("Item",n.defaultContent,!0).forEach(e=>{r.appendChild(e)}),y("Slot item",n.secondaryContent).forEach(e=>{e.slot="secondary",r.appendChild(e)}),y("Overflow item",n.overflowContent).forEach(e=>{e.slot="overflow",r.appendChild(e)});const o=document.createElement("ix-avatar");return o.initials="JD",r.appendChild(o),t.appendChild(r),t},c={args:{appIcon:"/images/example-app-icon.svg",appIconAlt:"Example App Icon",companyLogo:"/images/example-company.svg",companyLogoAlt:"Example Company Logo",nameSuffix:"Powered by XZY",defaultContent:3,secondaryContent:3,overflowContent:2},argTypes:{defaultContent:{control:{type:"number"}},secondaryContent:{control:{type:"number"}},overflowContent:{control:{type:"number"}}},render:n=>v(n)},l={render:n=>b`<ix-application-header
      name="${n.name}"
      ?show-menu="${n.showMenu}"
    >
      <ix-avatar name="John Doe" aria-label="user-avatar">
        <ix-dropdown-item>Profile</ix-dropdown-item>
        <ix-dropdown-item>Settings</ix-dropdown-item>
        <ix-dropdown-item>Logout</ix-dropdown-item>
      </ix-avatar>
    </ix-application-header>`,args:{name:"Application Header"}},d={args:{name:"Application Header",hideBottomBorder:!0},render:n=>{const t=i("ix-application-header",n),a=document.createElement("div");return Object.assign(a.style,{display:"flex",position:"relative",justifyContent:"center",alignItems:"center",backgroundColor:"var(--theme-app-header--background)",height:"5rem",width:"100%"}),a.innerText="Simple div with same background as header",t.appendChild(a),t}},m={render:n=>{const t=i("ix-application-header",n,["hideSlottedLogo"]);if(!n.hideSlottedLogo){const a=document.createElement("img");a.src="/images/example-company.svg",a.slot="logo",t.querySelector("ix-application-header")?.appendChild(a)}return t},args:{hideSlottedLogo:!1},argTypes:{hideSlottedLogo:{control:"boolean"}}},g={args:{companyLogo:"/images/example-company.svg"}};function y(n,t,a=!1){return Array.from({length:t},(r,o)=>{const e=document.createElement("ix-icon-button");return e.icon="star",e.innerText=`${n} Button ${o+1}`,o!==t-1&&(e.style.marginRight="0.5rem"),a&&e.setAttribute("outline","true"),e})}const u={args:{name:"Application Header"},render:n=>{const t=v(n);return t.style.setProperty("--ix-safe-area-inset-top","5rem"),t}},h={args:{name:"Application Header"},render:n=>{const t=i("ix-application-header",n),a=t.querySelector("ix-application-header");a.style.width="100%";const r=document.createElement("ix-avatar");r.initials="JD",a.appendChild(r);const o=document.createElement("div");o.style.backgroundColor="var(--theme-app-header--background)",o.style.minHeight="3rem",o.style.width="auto",o.style.borderBottom="var(--theme-app-header--border-width) solid var(--theme-app-header--border-color)",o.style.display="flex",o.style.flexDirection="row",o.style.justifyContent="flex-end",o.style.alignItems="center",o.style.paddingRight="1rem",o.style.gap="0.5rem";let e=document.createElement("ix-icon-button");return e.variant="subtle-tertiary",e.icon="minus",o.appendChild(e),e=document.createElement("ix-icon-button"),e.variant="subtle-tertiary",e.icon="editor-grid-none",o.appendChild(e),e=document.createElement("ix-icon-button"),e.variant="subtle-tertiary",e.icon="close",o.appendChild(e),t.appendChild(o),t.style.display="flex",t.style.height="3rem",t}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    name: 'Application Header'
  }
}`,...p.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    appIcon: '/images/example-app-icon.svg',
    appIconAlt: 'Example App Icon',
    companyLogo: '/images/example-company.svg',
    companyLogoAlt: 'Example Company Logo'
  }
}`,...s.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
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
      backgroundColor: 'var(--theme-app-header--background)',
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
}`,...u.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
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
    other.style.backgroundColor = 'var(--theme-app-header--background)';
    other.style.minHeight = '3rem';
    other.style.width = 'auto';
    other.style.borderBottom = 'var(--theme-app-header--border-width) solid var(--theme-app-header--border-color)';
    other.style.display = 'flex';
    other.style.flexDirection = 'row';
    other.style.justifyContent = 'flex-end';
    other.style.alignItems = 'center';
    other.style.paddingRight = '1rem';
    other.style.gap = '0.5rem';
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
}`,...h.parameters?.docs?.source}}};const I=["Default","AppIcon","Overflow","withAvatar","NoBorderBottom","CompanyLogoAsSlot","CompanyLogoAsProperty","SafeArea","WindowControls"];export{s as AppIcon,g as CompanyLogoAsProperty,m as CompanyLogoAsSlot,p as Default,d as NoBorderBottom,c as Overflow,u as SafeArea,h as WindowControls,I as __namedExportsOrder,E as default,l as withAvatar};
