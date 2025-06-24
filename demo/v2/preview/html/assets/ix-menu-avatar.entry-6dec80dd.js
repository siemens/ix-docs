import { r as registerInstance, c as createEvent, h, H as Host, g as getElement } from "./global-bbf431ac.js";
import { g as getSlottedElements } from "./shadow-dom-i60z1FJC-4795bd60.js";
import { y as iconLogOut } from "./index-C0zeM1D4-b0cf2da8.js";
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
    return h(Host, { key: "1eeeb4cbc42ac445a5f8d28aad553756efc34c48", slot: "ix-menu-avatar" }, h("button", { key: "51c83100fa23c0fc12e001e84a99f779fb2cf80d", class: "nav-item top-item avatar no-hover", title: this.top, id: this.avatarElementId, tabIndex: 0 }, h("ix-avatar", { key: "91dc6fb916195c0c963881f8b0cf2d2572e0e5e9", image: this.image, initials: this.initials }), h("div", { key: "8f09314d3faf23bceead428d050446439effcb90", class: "avatar-name" }, h("span", { key: "f7ec6f4bc0f6c606b75e5d51960f9e54b7c8e66d", class: "text-default-single", title: this.top }, this.top), h("span", { key: "09d7062818997f676ada0ece98c42ee9c5db8679", class: "text-default-single", title: this.bottom }, this.bottom))), h("ix-dropdown", { key: "298f6748e3072b50f9fb77118af80b9562c1444e", trigger: this.hostElement, placement: "right-start", hidden: !this.showContextMenu && !this.showLogoutButton, offset: {
      mainAxis: 16
    } }, h("slot", { key: "421f831a3819461d4ea2200b54b79c9a5f27c651", onSlotchange: () => this.onSlotChange() }), this.showLogoutButton ? h("ix-menu-avatar-item", { label: this.i18nLogout, icon: iconLogOut, onClick: (e) => {
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
