import { r as registerInstance, c as createEvent, h, H as Host } from "./global-BkHs9YbB.js";
import { q as iconClose, x as iconShout } from "./index-8HpPmDK_-DinFJk0z.js";
const menuAboutNewsCss = ":host{--margin:0.5rem;display:block;position:fixed;width:20rem;height:auto;background-color:var(--theme-color-2);border-radius:0.25rem;padding:1rem;left:3.4rem;z-index:10000;transition:left var(--theme-default-time);margin-inline-start:var(--margin) !important;box-shadow:var(--theme-box-shadow-level-4)}:host *,:host *::after,:host *::before{box-sizing:border-box}:host ::-webkit-scrollbar-button{display:none}@-moz-document url-prefix(){:host *{scrollbar-color:var(--theme-scrollbar-thumb--background) var(--theme-scrollbar-track--background);scrollbar-width:thin}}:host{}:host ::-webkit-scrollbar{width:0.5rem;height:0.5rem}:host{}:host ::-webkit-scrollbar-track{border-radius:5px;background:var(--theme-scrollbar-track--background)}:host ::-webkit-scrollbar-track:hover{background:var(--theme-scrollbar-track--background--hover)}:host{}:host ::-webkit-scrollbar-thumb{border-radius:5px;background:var(--theme-scrollbar-thumb--background)}:host{}:host ::-webkit-scrollbar-thumb:hover{background:var(--theme-scrollbar-thumb--background--hover)}:host ::-webkit-scrollbar-corner{display:none}:host .banner-container{position:absolute;top:0.0625rem;left:1rem}:host .banner-container svg{position:absolute;height:3.625rem;width:3rem}:host .banner-container svg polygon{fill:var(--theme-color-primary)}:host .banner-container ix-icon{margin:0.5rem;position:absolute;z-index:1}:host .cui-popover-news-header{margin-bottom:2.5rem;margin-inline-start:4rem;margin-block-start:-0.25rem}:host .popover-body{color:var(--theme-color-std-text)}:host .cui-popover-news-footer{display:flex;justify-content:flex-end;margin-top:1rem}:host ix-icon-button{top:0.5rem;right:0.5rem;position:absolute}:host #arrow{position:absolute;width:0.5rem;height:0.5rem;background-color:var(--theme-color-2);transform:translateX(calc(var(--margin) * -1 - 0.8rem)) rotateZ(45deg)}:host(.expanded){left:calc(3.4rem + 12.7rem)}:host(.show){display:none}@media only screen and (max-width: 48em){:host{display:flex;flex-direction:column;max-height:calc(100vh - 4.75rem);width:calc(100% - 2rem);max-width:30rem;transform:translateX(calc(1rem - 50%));left:calc(50% - 1rem) !important;bottom:1rem !important;margin-inline:0 !important;z-index:calc(var(--theme-z-index-sticky) - 1)}:host .slot-container{overflow-y:auto}:host #arrow{display:none}}";
const MenuAboutNews = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.showMore = createEvent(this, "showMore", 7);
    this.closePopover = createEvent(this, "closePopover", 7);
    this.show = false;
    this.i18nShowMore = "Show more";
    this.expanded = false;
  }
  render() {
    return h(Host, { key: "61a51cc04b238505c64285babebaaddf1201a9f7", class: {
      expanded: this.expanded,
      show: !this.show
    } }, h("div", { key: "c63c6cab269ef75f01d0396333c5c44ee271d354", class: "banner-container" }, h("ix-icon", { key: "2a3b5ced1c9f9fce0f742a34d9862e115807f6fb", color: "color-inv-contrast-text", name: iconShout, size: "32" }), h("svg", { key: "2433dd408f46a4d0f47e5cf075980b6a2ea2ece7", viewBox: "0 0 48 56", xmlns: "http://www.w3.org/2000/svg" }, h("polygon", { key: "386186a0847a504ca07052e1a49ee0c9f6314377", points: "0 0 48 0 48 56 24 48 0 56" }))), h("div", { key: "ec280ef23c279507e186fa0ba0743e64e49d38c8", class: "cui-popover-news-header" }, h("ix-typography", { key: "784c5718192c7641e43004439cedcdc0f6285380", format: "label", bold: true }, this.label)), h("ix-icon-button", { key: "0c5a987a93067b0641ad0d7cd99e747aaa884d40", size: "24", icon: iconClose, iconColor: "color-soft-text", variant: "tertiary", onClick: () => {
      this.show = false;
      this.closePopover.emit();
    } }), h("div", { key: "780df8bab613bad3b80a3528947fdc0bab41187c", class: "slot-container" }, h("slot", { key: "1992c8d99353665ee6b88b4d21c34869284029d6" })), this.aboutItemLabel ? h("div", { class: "cui-popover-news-footer" }, h("ix-button", { variant: "primary", onClick: (e) => {
      this.show = false;
      this.showMore.emit(e);
    } }, this.i18nShowMore)) : null, h("div", { key: "b877e4087ebe56fca5c82a7acada5ba7c7ef8abb", id: "arrow" }));
  }
};
MenuAboutNews.style = menuAboutNewsCss;
export {
  MenuAboutNews as ix_menu_about_news
};
