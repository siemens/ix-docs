import { r as registerInstance, c as createEvent, h, H as Host, g as getElement } from "./global-CTsFSACc.js";
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
    return h(Host, { key: "342ba4b67b3532da978048158cf9b9abfbc7e33d", slot: "ix-menu-avatar" }, h("button", { key: "68924d460574cde4c655a1f95e3c6ed5bc415c44", class: "nav-item top-item avatar no-hover", title: this.top, id: this.avatarElementId, tabIndex: 0 }, h("ix-avatar", { key: "2170181905320f58961a70ab8cb5b25d1c439393", image: this.image, initials: this.initials }), h("div", { key: "c9f0275dec453f57756d3faefe9988c71d3b54b6", class: "avatar-name" }, h("span", { key: "56536ddb8d6b591433ad6bd88d82691de91b81ad", class: "text-default-single", title: this.top }, this.top), h("span", { key: "a9b5bbed878e3a0282f770b97bb691f360035416", class: "text-default-single", title: this.bottom }, this.bottom))), h("ix-dropdown", { key: "9974a1b413104016d5366f72103f3712e93813a4", trigger: this.hostElement, placement: "right-start", hidden: !this.showContextMenu && this.hideLogoutButton, offset: {
      mainAxis: 16
    } }, h("slot", { key: "b642dd168efdf7f4659c3a0e5d032fccb93df9a5", onSlotchange: () => this.onSlotChange() }), !this.hideLogoutButton && h("ix-menu-avatar-item", { key: "4b7e853e0522208bebd10535885731af9dc4d3f6", label: this.i18nLogout, icon: iconLogOut, onClick: (e) => {
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
