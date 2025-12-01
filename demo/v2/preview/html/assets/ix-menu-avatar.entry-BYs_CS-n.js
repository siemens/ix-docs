import { r as registerInstance, c as createEvent, h, H as Host, g as getElement } from "./global-BkHs9YbB.js";
import { g as getSlottedElements } from "./shadow-dom-i60z1FJC-Cx4XiL3F.js";
import { y as iconLogOut } from "./index-8HpPmDK_-DinFJk0z.js";
const menuAvatarCss = ":host{display:block;position:relative;margin-bottom:0.5rem;margin-right:0.75rem}:host *,:host *::after,:host *::before{box-sizing:border-box}:host ::-webkit-scrollbar-button{display:none}@-moz-document url-prefix(){:host *{scrollbar-color:var(--theme-scrollbar-thumb--background) var(--theme-scrollbar-track--background);scrollbar-width:thin}}:host{}:host ::-webkit-scrollbar{width:0.5rem;height:0.5rem}:host{}:host ::-webkit-scrollbar-track{border-radius:5px;background:var(--theme-scrollbar-track--background)}:host ::-webkit-scrollbar-track:hover{background:var(--theme-scrollbar-track--background--hover)}:host{}:host ::-webkit-scrollbar-thumb{border-radius:5px;background:var(--theme-scrollbar-thumb--background)}:host{}:host ::-webkit-scrollbar-thumb:hover{background:var(--theme-scrollbar-thumb--background--hover)}:host ::-webkit-scrollbar-corner{display:none}:host .avatar{all:unset;box-sizing:border-box;display:flex;align-items:center;height:2.5rem;width:100%;max-height:2.5rem;padding-left:0.25rem;margin-left:0.41rem;margin-right:0.35rem;transition:var(--theme-default-time)}:host .avatar .avatar-name{display:flex;flex-direction:column;overflow:hidden;white-space:nowrap;margin-left:1rem;line-height:1.14}:host .avatar .avatar-name .text-default-single{color:var(--theme-nav-item-primary--color);overflow:hidden;text-overflow:ellipsis;white-space:nowrap}:host .avatar{border-radius:1.25rem}:host .avatar:not(.disabled):not(:disabled){cursor:pointer}:host .avatar:not(.disabled):not(:disabled):hover,:host .avatar:not(.disabled):not(:disabled).hover{background-color:var(--theme-avatar-btn--background--hover);color:var(--theme-avatar-btn--color--hover)}:host .avatar:not(.disabled):not(:disabled){cursor:pointer}:host .avatar:not(.disabled):not(:disabled):active,:host .avatar:not(.disabled):not(:disabled).active{background-color:var(--theme-avatar-btn--background--active);color:var(--theme-avatar-btn--color--active)}:host .avatar:focus-visible{outline:1px solid var(--theme-color-focus-bdr)}";
const MenuAvatar = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.logoutClick = createEvent(this, "logoutClick", 7);
    this.i18nLogout = "Logout";
    this.hideLogoutButton = false;
    this.showContextMenu = false;
    this.avatarElementId = "ix-menu-avatar-id";
  }
  onSlotChange() {
    const slot = this.hostElement.shadowRoot.querySelector("slot");
    if (!slot) {
      return;
    }
    const elements = getSlottedElements(slot);
    this.showContextMenu = elements.length !== 0;
  }
  render() {
    return h(Host, { key: "6cff313b74cbbd668ed30dd7c04e060867ae0095", slot: "ix-menu-avatar" }, h("button", { key: "c387330d89a9d5740f0af21ec4e7d0f077510064", class: "nav-item top-item avatar no-hover", title: this.top, id: this.avatarElementId, tabIndex: 0 }, h("ix-avatar", { key: "82f6207b4005ad8a799d29ce52a629d805d60b36", image: this.image, initials: this.initials }), h("div", { key: "c1a6a4e03b3dda5b36a3caa6c7595a32407b9c19", class: "avatar-name" }, h("span", { key: "a8b413ee5ec9a9f60d26ce695df3d9359831867d", class: "text-default-single", title: this.top }, this.top), h("span", { key: "b333a5337d49199f9545eb30361fe5166d8a8725", class: "text-default-single", title: this.bottom }, this.bottom))), h("ix-dropdown", { key: "31b4149a67636711972e1f682da62a60f833e9f3", trigger: this.hostElement, placement: "right-start", hidden: !this.showContextMenu && this.hideLogoutButton, offset: {
      mainAxis: 16
    } }, h("slot", { key: "a17ca070258b8b892c647f4cc2429b21562072c1", onSlotchange: () => this.onSlotChange() }), !this.hideLogoutButton && h("ix-menu-avatar-item", { key: "cbc2544543237b2874744c0678838b701ec89d4a", label: this.i18nLogout, icon: iconLogOut, onClick: (e) => {
      this.logoutClick.emit(e);
    } })));
  }
  get hostElement() {
    return getElement(this);
  }
};
MenuAvatar.style = menuAvatarCss;
export {
  MenuAvatar as ix_menu_avatar
};
