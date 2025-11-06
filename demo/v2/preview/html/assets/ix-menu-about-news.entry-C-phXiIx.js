import { r as registerInstance, c as createEvent, h, H as Host } from "./global-CTsFSACc.js";
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
    return h(Host, { key: "9e3e3bfabc3e51bdbee57c13ad492f3d3447fbfe", class: {
      expanded: this.expanded,
      show: !this.show
    } }, h("div", { key: "616682301e4308c9d3d53481a8fb7e266a9a4181", class: "banner-container" }, h("ix-icon", { key: "5b795a4034d29997b1c285c9659acd8e70d5528d", color: "color-inv-contrast-text", name: iconShout, size: "32" }), h("svg", { key: "f0c5c49e71a9aa3c91d792dc33909d9c8bbd1818", viewBox: "0 0 48 56", xmlns: "http://www.w3.org/2000/svg" }, h("polygon", { key: "e19557acebc98122003ceb160c3d07196dbdd8a8", points: "0 0 48 0 48 56 24 48 0 56" }))), h("div", { key: "75559e792e5610eefae0be4722a9cc6656c9e2d8", class: "cui-popover-news-header" }, h("ix-typography", { key: "2cf5eec66717e025a84d2e979297ad11ad5df324", format: "label", bold: true }, this.label)), h("ix-icon-button", { key: "f77cb50c4fb25171da08eeda5724557656e7d56c", size: "24", icon: iconClose, iconColor: "color-soft-text", variant: "tertiary", onClick: () => {
      this.show = false;
      this.closePopover.emit();
    } }), h("div", { key: "1298f46cb80728f5c2b55603ae6a912967e4590c", class: "slot-container" }, h("slot", { key: "fbe4e45ff94bd1f43864c2290e4b44f8ea3e8f72" })), this.aboutItemLabel ? h("div", { class: "cui-popover-news-footer" }, h("ix-button", { variant: "primary", onClick: (e) => {
      this.show = false;
      this.showMore.emit(e);
    } }, this.i18nShowMore)) : null, h("div", { key: "5259871afe0e537a1378f60f13c3884a08bc4daa", id: "arrow" }));
  }
};
MenuAboutNews.style = menuAboutNewsCss;
export {
  MenuAboutNews as ix_menu_about_news
};
