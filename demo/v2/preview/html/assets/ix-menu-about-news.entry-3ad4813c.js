import { r as registerInstance, c as createEvent, h, H as Host } from "./global-bbf431ac.js";
import { q as iconClose, x as iconShout } from "./index-C0zeM1D4-b0cf2da8.js";
const menuAboutNewsCss = ":host{--margin:0.5rem;display:block;position:fixed;width:20rem;height:auto;background-color:var(--theme-color-2);border-radius:0.25rem;padding:1rem;left:3.4rem;z-index:10000;transition:left var(--theme-default-time);margin-inline-start:var(--margin) !important;box-shadow:var(--theme-box-shadow-level-4)}:host *,:host *::after,:host *::before{box-sizing:border-box}:host ::-webkit-scrollbar-button{display:none}@-moz-document url-prefix(){:host *{scrollbar-color:var(--theme-scrollbar-thumb--background) var(--theme-scrollbar-track--background);scrollbar-width:thin}}:host ::-webkit-scrollbar{width:0.5rem;height:0.5rem}:host ::-webkit-scrollbar-track{border-radius:5px;background:var(--theme-scrollbar-track--background)}:host ::-webkit-scrollbar-track:hover{background:var(--theme-scrollbar-track--background--hover)}:host ::-webkit-scrollbar-thumb{border-radius:5px;background:var(--theme-scrollbar-thumb--background)}:host ::-webkit-scrollbar-thumb:hover{background:var(--theme-scrollbar-thumb--background--hover)}:host ::-webkit-scrollbar-corner{display:none}:host .banner-container{position:absolute;top:0.0625rem;left:1rem}:host .banner-container svg{position:absolute;height:3.625rem;width:3rem}:host .banner-container svg polygon{fill:var(--theme-color-primary)}:host .banner-container ix-icon{margin:0.5rem;position:absolute;z-index:1}:host .cui-popover-news-header{margin-bottom:2.5rem;margin-inline-start:4rem;margin-block-start:-0.25rem}:host .popover-body{color:var(--theme-color-std-text)}:host .cui-popover-news-footer{display:flex;justify-content:flex-end;margin-top:1rem}:host ix-icon-button{top:0.5rem;right:0.5rem;position:absolute}:host #arrow{position:absolute;width:0.5rem;height:0.5rem;background-color:var(--theme-color-2);transform:translateX(calc(var(--margin) * -1 - 0.8rem)) rotateZ(45deg)}:host(.expanded){left:calc(3.4rem + 12.7rem)}:host(.show){display:none}@media only screen and (max-width: 48em){:host{display:flex;flex-direction:column;max-height:calc(100vh - 4.75rem);width:calc(100% - 2rem);max-width:30rem;transform:translateX(calc(1rem - 50%));left:calc(50% - 1rem) !important;bottom:1rem !important;margin-inline:0 !important;z-index:calc(var(--theme-z-index-sticky) - 1)}:host .slot-container{overflow-y:auto}:host #arrow{display:none}}";
const MenuAboutNews = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.showMore = createEvent(this, "showMore", 7);
    this.closePopover = createEvent(this, "closePopover", 7);
    this.show = false;
    this.i18nShowMore = "Show more";
    this.offsetBottom = 0;
    this.expanded = false;
  }
  render() {
    return h(Host, { key: "c1fda62c402595c5c9a4c55a44e3f9787e07679e", class: {
      expanded: this.expanded,
      show: !this.show
    } }, h("div", { key: "27632994fb36bcb7d0de4edb9468531f44a492e3", class: "banner-container" }, h("ix-icon", { key: "de235ea16a60e8a3aa6f406135d1f5da1c586e54", color: "color-inv-contrast-text", name: iconShout, size: "32" }), h("svg", { key: "6a5467d4f39785a83fce9b509bc926f6ad43e279", viewBox: "0 0 48 56", xmlns: "http://www.w3.org/2000/svg" }, h("polygon", { key: "387dfca5bf8d5b72d5a327f3e0a85c8d84d4df7f", points: "0 0 48 0 48 56 24 48 0 56" }))), h("div", { key: "51bacef9618ed548f6aec5c2d4fd032106244a39", class: "cui-popover-news-header" }, h("ix-typography", { key: "f6d564aa1193e47321ccb21e661fe13031decad2", format: "label", bold: true }, this.label)), h("ix-icon-button", { key: "cbd7b6d840c4de363611970d7270270b8a9c52da", size: "24", icon: iconClose, ghost: true, onClick: () => {
      this.show = false;
      this.closePopover.emit();
    } }), h("div", { key: "36b562a1dfdab077c7b6e48d56ebcee5a7b000b1", class: "slot-container" }, h("slot", { key: "c6de25b5a26a90e8227f8ec6bf50f931415a639d" })), this.aboutItemLabel ? h("div", { class: "cui-popover-news-footer" }, h("ix-button", { variant: "primary", onClick: (e) => {
      this.show = false;
      this.showMore.emit(e);
    } }, this.i18nShowMore)) : null, h("div", { key: "3f86e01d565b0e0628593b6df3add7a03ad6db3f", id: "arrow" }));
  }
};
MenuAboutNews.style = menuAboutNewsCss;
export {
  MenuAboutNews as ix_menu_about_news
};
