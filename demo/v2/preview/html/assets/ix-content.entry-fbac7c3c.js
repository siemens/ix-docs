import { r as registerInstance, h, H as Host, g as getElement } from "./global-7dbfff85.js";
import { h as hasSlottedElements } from "./shadow-dom-i60z1FJC-4795bd60.js";
const contentCss = ":host{display:flex;flex-direction:column;position:relative;padding:1.5rem 2rem 0.25rem 2rem;width:100%;height:100%;overflow:hidden}:host *,:host *::after,:host *::before{box-sizing:border-box}:host ::-webkit-scrollbar-button{display:none}@-moz-document url-prefix(){:host *{scrollbar-color:var(--theme-scrollbar-thumb--background) var(--theme-scrollbar-track--background);scrollbar-width:thin}}:host ::-webkit-scrollbar{width:0.5rem;height:0.5rem}:host ::-webkit-scrollbar-track{border-radius:5px;background:var(--theme-scrollbar-track--background)}:host ::-webkit-scrollbar-track:hover{background:var(--theme-scrollbar-track--background--hover)}:host ::-webkit-scrollbar-thumb{border-radius:5px;background:var(--theme-scrollbar-thumb--background)}:host ::-webkit-scrollbar-thumb:hover{background:var(--theme-scrollbar-thumb--background--hover)}:host ::-webkit-scrollbar-corner{display:none}:host .content{flex-grow:1;overflow:auto;position:relative}:host .content-header.slotted{margin-bottom:1rem}";
const Content = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.isContentHeaderSlotted = false;
  }
  get contentHeaderSlot() {
    return this.hostElement.shadowRoot.querySelector(".content-header slot");
  }
  render() {
    return h(Host, { key: "b232033e844cce7b64e46fb947aaa82088e1a3b7" }, h("div", { key: "189fe885fb253cb87bc268d182dd46bc1523fb83", class: {
      "content-header": true,
      slotted: this.isContentHeaderSlotted
    } }, h("slot", { key: "0fe53f18f29eef2a950c6ad87d5860ed01445aa0", name: "header", onSlotchange: () => {
      this.isContentHeaderSlotted = hasSlottedElements(this.contentHeaderSlot);
    } })), h("div", { key: "a613f4f94a9402390740f36e78227b6550ef4f01", class: "content" }, h("slot", { key: "f1f60c196ea4700dede8af657eb771864fdff734" })));
  }
  get hostElement() {
    return getElement(this);
  }
};
Content.style = contentCss;
export {
  Content as ix_content
};
