import { r as registerInstance, c as createEvent, h, H as Host, g as getElement } from "./global-7dbfff85.js";
import { g as getSlottedElements } from "./shadow-dom-i60z1FJC-4795bd60.js";
import { y as iconLogOut } from "./index-DLTnniMb-a143a692.js";
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
    return h(Host, { key: "1ef1b14509910ea6cae53e908cdd01a31ae1e137", slot: "ix-menu-avatar" }, h("button", { key: "4332fde7abf016c2a32be541d1dc5c5d9164822d", class: "nav-item top-item avatar no-hover", title: this.top, id: this.avatarElementId, tabIndex: 0 }, h("ix-avatar", { key: "9402f5651086c89e4da364857faecbc590a24614", image: this.image, initials: this.initials }), h("div", { key: "153dfe067f5dc36a754c2f3659efc63fc8f5d7e5", class: "avatar-name" }, h("span", { key: "abbb516251602a868dfb82b5d34d675917a92a9c", class: "text-default-single", title: this.top }, this.top), h("span", { key: "7eae2eca1a0c7f61f6d61d642256193d9ee85d10", class: "text-default-single", title: this.bottom }, this.bottom))), h("ix-dropdown", { key: "30c91a116ce19536a74ce2209238632c5f499a02", trigger: this.hostElement, placement: "right-start", hidden: !this.showContextMenu && !this.showLogoutButton, offset: {
      mainAxis: 16
    } }, h("slot", { key: "dd5450f6fbb334fcfebf278b291b0d63042065d8", onSlotchange: () => this.onSlotChange() }), this.showLogoutButton ? h("ix-menu-avatar-item", { label: this.i18nLogout, icon: iconLogOut, onClick: (e) => {
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
