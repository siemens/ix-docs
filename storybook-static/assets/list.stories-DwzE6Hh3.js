import{m as g,g as b}from"./generic-render-D6eVCH02.js";import"./sample-QwvD4foy.js";const t=(n,a={})=>{const e=document.createElement("ix-list-item");return e.label=n,Object.assign(e,a),e.addEventListener("selectedChange",r=>{e.selected=r.detail}),e},o=(n,a=[t("Factory overview",{description:"Updated 5 minutes ago",icon:"project"}),t("Production line 1",{description:"Running normally",icon:"project"}),t("Archived project",{disabled:!0})])=>{const e=b("ix-list",n),r=e.querySelector("ix-list");return r.setAttribute("aria-label","Projects"),r.append(...a),e},x={title:"Example/List",tags:[],render:n=>o(n),argTypes:g("ix-list",{}),parameters:{a11y:{test:"error"}}},c={args:{divider:!0,itemGap:"none",variant:"ghost"}},s={render:n=>o(n,[t("Ghost item",{variant:"ghost"}),t("Outline item",{variant:"outline"}),t("Filled item",{variant:"filled"})]),args:{itemGap:"md"}},d={render:n=>o(n,[t("Factory overview",{checkbox:!0,selected:!0}),t("Production line 1",{checkbox:!0}),t("Production line 2",{checkbox:!0})]),args:{itemGap:"sm"}},m={render:n=>{const a=()=>{const e=document.createElement("div");e.slot="action";const r=document.createElement("ix-icon-button");r.icon="edit-document",r.variant="subtle-tertiary",r.setAttribute("aria-label","Edit item");const i=document.createElement("ix-icon-button");return i.icon="trashcan",i.variant="subtle-tertiary",i.setAttribute("aria-label","Delete item"),e.append(r,i),e};return o(n,[Object.assign(t("test",{icon:"info",checkbox:!0}),{variant:"filled"}),Object.assign(t("test 2",{icon:"info",checkbox:!0}),{variant:"filled"}),Object.assign(t("test 3",{icon:"info",checkbox:!0}),{variant:"filled"}),Object.assign(t("test 4",{icon:"info",checkbox:!0}),{variant:"filled"})].map(e=>(e.append(a()),e)))},args:{checkbox:!0,draggable:!0,itemGap:"md",variant:"filled"}},l={args:{dragBehavior:"dynamic",draggable:!0,itemGap:"sm"}},u={render:n=>{const a=document.createElement("ix-list-item-separator");return o(n,[t("Factory overview",{description:"Updated 5 minutes ago",icon:"project"}),t("Production line 1",{description:"Running normally",icon:"project"}),a,t("Archived project",{disabled:!0})])},args:{itemGap:"md"}},p={render:n=>{const a=e=>{const r=t(e,{description:"Updated 5 minutes ago",icon:"project",actionOnHover:!0}),i=document.createElement("ix-icon-button");return i.slot="action",i.variant="subtle-tertiary",i.textContent="Open",i.icon="edit",r.append(i),r};return o(n,[a("Factory overview"),a("Production line 1")])},args:{itemGap:"sm"}},f=["Default","Variants","Selection","Actions","Draggable","Separator","ActionOnHover"];c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    divider: true,
    itemGap: 'none',
    variant: 'ghost'
  }
}`,...c.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: args => renderList(args, [createItem('Ghost item', {
    variant: 'ghost'
  }), createItem('Outline item', {
    variant: 'outline'
  }), createItem('Filled item', {
    variant: 'filled'
  })]),
  args: {
    itemGap: 'md'
  }
}`,...s.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: args => renderList(args, [createItem('Factory overview', {
    checkbox: true,
    selected: true
  }), createItem('Production line 1', {
    checkbox: true
  }), createItem('Production line 2', {
    checkbox: true
  })]),
  args: {
    itemGap: 'sm'
  }
}`,...d.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: args => {
    const createActionSlot = () => {
      const actionSlot = document.createElement('div');
      actionSlot.slot = 'action';
      const editButton = document.createElement('ix-icon-button');
      editButton.icon = 'edit-document';
      editButton.variant = 'subtle-tertiary';
      editButton.setAttribute('aria-label', 'Edit item');
      const deleteButton = document.createElement('ix-icon-button');
      deleteButton.icon = 'trashcan';
      deleteButton.variant = 'subtle-tertiary';
      deleteButton.setAttribute('aria-label', 'Delete item');
      actionSlot.append(editButton, deleteButton);
      return actionSlot;
    };
    return renderList(args, [Object.assign(createItem('test', {
      icon: 'info',
      checkbox: true
    }), {
      variant: 'filled'
    }), Object.assign(createItem('test 2', {
      icon: 'info',
      checkbox: true
    }), {
      variant: 'filled'
    }), Object.assign(createItem('test 3', {
      icon: 'info',
      checkbox: true
    }), {
      variant: 'filled'
    }), Object.assign(createItem('test 4', {
      icon: 'info',
      checkbox: true
    }), {
      variant: 'filled'
    })].map(item => {
      item.append(createActionSlot());
      return item;
    }));
  },
  args: {
    checkbox: true,
    draggable: true,
    itemGap: 'md',
    variant: 'filled'
  }
}`,...m.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    dragBehavior: 'dynamic',
    draggable: true,
    itemGap: 'sm'
  }
}`,...l.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: args => {
    const separator = document.createElement('ix-list-item-separator');
    return renderList(args, [createItem('Factory overview', {
      description: 'Updated 5 minutes ago',
      icon: 'project'
    }), createItem('Production line 1', {
      description: 'Running normally',
      icon: 'project'
    }), separator, createItem('Archived project', {
      disabled: true
    })]);
  },
  args: {
    itemGap: 'md'
  }
}`,...u.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: args => {
    const createItemWithAction = (label: string) => {
      const item = createItem(label, {
        description: 'Updated 5 minutes ago',
        icon: 'project',
        actionOnHover: true
      });
      const action = document.createElement('ix-icon-button');
      action.slot = 'action';
      action.variant = 'subtle-tertiary';
      action.textContent = 'Open';
      action.icon = 'edit';
      item.append(action);
      return item;
    };
    return renderList(args, [createItemWithAction('Factory overview'), createItemWithAction('Production line 1')]);
  },
  args: {
    itemGap: 'sm'
  }
}`,...p.parameters?.docs?.source}}};export{p as ActionOnHover,m as Actions,c as Default,l as Draggable,d as Selection,u as Separator,s as Variants,f as __namedExportsOrder,x as default};
