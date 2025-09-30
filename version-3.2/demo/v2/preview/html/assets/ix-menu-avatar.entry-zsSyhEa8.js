import { r as registerInstance, c as createEvent, h, H as Host, g as getElement } from "./global-DaepF4XF.js";
import { g as getSlottedElements } from "./shadow-dom-i60z1FJC-Cx4XiL3F.js";
import { z as iconLogOut } from "./index-CB6MK0tq-MglExpDl.js";
const menuAvatarCss = ":host{display:block;position:relative;margin-bottom:0.5rem;margin-right:0.75rem}:host *,:host *::after,:host *::before{box-sizing:border-box}:host ::-webkit-scrollbar-button{display:none}@-moz-document url-prefix(){:host *{scrollbar-color:var(--theme-scrollbar-thumb--background) var(--theme-scrollbar-track--background);scrollbar-width:thin}}:host ::-webkit-scrollbar{width:0.5rem;height:0.5rem}:host ::-webkit-scrollbar-track{border-radius:5px;background:var(--theme-scrollbar-track--background)}:host ::-webkit-scrollbar-track:hover{background:var(--theme-scrollbar-track--background--hover)}:host ::-webkit-scrollbar-thumb{border-radius:5px;background:var(--theme-scrollbar-thumb--background)}:host ::-webkit-scrollbar-thumb:hover{background:var(--theme-scrollbar-thumb--background--hover)}:host ::-webkit-scrollbar-corner{display:none}:host .avatar{all:unset;box-sizing:border-box;display:flex;align-items:center;height:2.5rem;width:100%;max-height:2.5rem;padding-left:0.25rem;margin-left:0.41rem;margin-right:0.35rem;transition:var(--theme-default-time);border-radius:1.25rem}:host .avatar .avatar-name{display:flex;flex-direction:column;overflow:hidden;white-space:nowrap;margin-left:1rem;line-height:1.14}:host .avatar .avatar-name .text-default-single{color:var(--theme-nav-item-primary--color);overflow:hidden;text-overflow:ellipsis;white-space:nowrap}:host .avatar:not(.disabled):not(:disabled){cursor:pointer}:host .avatar:not(.disabled):not(:disabled):hover,:host .avatar:not(.disabled):not(:disabled).hover{background-color:var(--theme-avatar-btn--background--hover);color:var(--theme-avatar-btn--color--hover)}:host .avatar:not(.disabled):not(:disabled){cursor:pointer}:host .avatar:not(.disabled):not(:disabled):active,:host .avatar:not(.disabled):not(:disabled).active{background-color:var(--theme-avatar-btn--background--active);color:var(--theme-avatar-btn--color--active)}:host .avatar:focus-visible{outline:1px solid var(--theme-color-focus-bdr)}";
const MenuAvatar = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.logoutClick = createEvent(this, "logoutClick", 7);
    this.i18nLogout = "Logout";
    this.showLogoutButton = true;
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
    return h(Host, { key: "d39f2185d9c75395af0b72507439a8e28a20fdc7", slot: "ix-menu-avatar" }, h("button", { key: "f171e34fa3361cbeb55d4730de3536918cfccb31", class: "nav-item top-item avatar no-hover", title: this.top, id: this.avatarElementId, tabIndex: 0 }, h("ix-avatar", { key: "6c9496150170f3474bf4dd545c834ecd3dd4e215", image: this.image, initials: this.initials }), h("div", { key: "6493bd94c069d676f41984274dec57b876117ae5", class: "avatar-name" }, h("span", { key: "f72261b4c8a7752fbbe93df416b0b2f8c314c61b", class: "text-default-single", title: this.top }, this.top), h("span", { key: "909f8c9579d97d92f9be2b86e336f5ed8a2b3c78", class: "text-default-single", title: this.bottom }, this.bottom))), h("ix-dropdown", { key: "c1a91f5f2703d85fb0fefef0ef97b17112113b55", trigger: this.hostElement, placement: "right-start", hidden: !this.showContextMenu && !this.showLogoutButton, offset: {
      mainAxis: 16
    } }, h("slot", { key: "284a7ea7a3431c1b2b83fc6dd13cbb51d517a45a", onSlotchange: () => this.onSlotChange() }), this.showLogoutButton ? h("ix-menu-avatar-item", { label: this.i18nLogout, icon: iconLogOut, onClick: (e) => {
      this.logoutClick.emit(e);
    } }) : null));
  }
  get hostElement() {
    return getElement(this);
  }
};
MenuAvatar.style = menuAvatarCss;
export {
  MenuAvatar as ix_menu_avatar
};
