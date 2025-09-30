import { r as registerInstance, c as createEvent, h, H as Host, g as getElement } from "./global-DaepF4XF.js";
import { g as iconChevronDownSmall } from "./index-CB6MK0tq-MglExpDl.js";
const cardAccordionCss = ':host{display:flex;position:relative;flex-direction:column;width:100%;transition:var(--theme-default-time) ease-in-out}:host *,:host *::after,:host *::before{box-sizing:border-box}:host ::-webkit-scrollbar-button{display:none}@-moz-document url-prefix(){:host *{scrollbar-color:var(--theme-scrollbar-thumb--background) var(--theme-scrollbar-track--background);scrollbar-width:thin}}:host ::-webkit-scrollbar{width:0.5rem;height:0.5rem}:host ::-webkit-scrollbar-track{border-radius:5px;background:var(--theme-scrollbar-track--background)}:host ::-webkit-scrollbar-track:hover{background:var(--theme-scrollbar-track--background--hover)}:host ::-webkit-scrollbar-thumb{border-radius:5px;background:var(--theme-scrollbar-thumb--background)}:host ::-webkit-scrollbar-thumb:hover{background:var(--theme-scrollbar-thumb--background--hover)}:host ::-webkit-scrollbar-corner{display:none}:host .expand-action{all:unset;display:flex;position:relative;-webkit-appearance:button;-moz-appearance:button;appearance:button;height:2.5rem;width:100%;background-color:var(--theme-color-component-1);align-items:center;justify-content:flex-start}:host .expand-action:hover{background:var(--theme-color-component-1--hover)}:host .expand-action:active{background:var(--theme-color-component-1--active)}:host .expand-action:not(.disabled):not(:disabled):focus-visible{outline:1px solid var(--theme-color-focus-bdr);outline-offset:var(--theme-btn--focus--outline-offset)}:host .expand-action::before{content:"";position:absolute;width:100%;height:100%;background-color:var(--ix-card-background);z-index:-1}:host .expand-action:not(.show),:host .expand-action:not(.show)::before{border-bottom-left-radius:var(--theme-default-border-radius);border-bottom-right-radius:var(--theme-default-border-radius)}:host .expand-icon{margin-left:0.5rem;transition:var(--theme-default-time) transform ease-in-out}:host .expand-icon.show{transform:rotate(180deg)}:host .expand-content{display:grid;position:relative;grid-template-rows:0fr;transition:var(--theme-default-time) ease-in-out;width:100%;max-height:14.75rem;opacity:0;background-color:var(--theme-color-component-1)}:host .expand-content.show{grid-template-rows:14.75rem;opacity:1}:host .expand-content-inner{position:relative;height:100%;overflow:hidden}:host .expand-content.show .expand-content-body{display:none;overflow:hidden;color:var(--theme-color-std-text)}:host .expand-content.show .expand-content-body{display:block;overflow:auto;height:calc(100% - 1rem)}:host .expand-content-footer{display:block;position:relative;width:100%;height:1rem;margin-top:auto;margin-bottom:0px;background-color:var(--theme-color-component-1);border-bottom-left-radius:var(--theme-default-border-radius);border-bottom-right-radius:var(--theme-default-border-radius)}';
let accordionControlId = 0;
const getAriaControlsId = (prefix = "expand-content") => {
  return [prefix, accordionControlId++].join("-");
};
const CardAccordion = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.accordionExpand = createEvent(this, "accordionExpand", 7);
    this.collapse = false;
    this.expandContent = false;
  }
  onInitialExpandChange() {
    this.expandContent = !this.collapse;
  }
  get expandedContent() {
    return this.hostElement.shadowRoot.querySelector(".expand-content");
  }
  onExpandActionClick(event) {
    event.preventDefault();
    event.stopPropagation();
    this.expandContent = !this.expandContent;
    this.accordionExpand.emit({
      expand: this.expandContent,
      nativeEvent: event
    });
    if (this.expandContent) {
      this.scrollExpandedContentIntoView();
    }
  }
  scrollExpandedContentIntoView() {
    setTimeout(() => {
      const rect = this.expandedContent.getBoundingClientRect();
      if (rect.bottom > window.innerHeight) {
        this.hostElement.shadowRoot.querySelector(".expand-content").scrollIntoView(false);
      }
    }, 150);
  }
  componentWillLoad() {
    this.onInitialExpandChange();
  }
  render() {
    return h(Host, { key: "3e3960522e656a178f2c3e57778c999d9a04fba8", slot: "card-accordion" }, h("button", { key: "196ffc3726ea2e8237adfe0a57668aef9fbd3ba6", tabIndex: 0, class: { "expand-action": true, show: this.expandContent }, onClick: (event) => this.onExpandActionClick(event), role: "button", type: "button", "aria-expanded": this.expandContent, "aria-controls": getAriaControlsId(), "aria-label": this.ariaLabelExpandButton }, h("ix-icon", { key: "835870a8c75795ae8e207f07864057a54ef941fd", name: iconChevronDownSmall, class: {
      "expand-icon": true,
      show: this.expandContent
    } })), h("div", { key: "40ef757e2fa246475abf5f3a2bc37b10b8df7133", class: {
      "expand-content": true,
      show: this.expandContent
    } }, h("div", { key: "a29f57024b53e01772f1a8f5b6a598a7b47f55d9", class: "expand-content-inner" }, h("div", { key: "1a7c42d4e5e20a5b2df1d3df6e46b27618db0543", class: "expand-content-body" }, h("slot", { key: "5e28998343ca9cd27c092b4d411b5d370dc3014a" })), h("div", { key: "19c4ad7be6afe6b6961538b603311de49d91b01b", class: "expand-content-footer" }))));
  }
  get hostElement() {
    return getElement(this);
  }
  static get watchers() {
    return {
      "collapse": ["onInitialExpandChange"]
    };
  }
};
CardAccordion.style = cardAccordionCss;
const cardTitleCss = ":host{display:flex;position:relative;flex-direction:row;align-items:center;margin-top:0.25rem;margin-bottom:0.25rem;gap:1rem;width:100%}:host .title-actions{display:flex;position:relative;flex-direction:row;gap:0.25rem;margin-left:auto;margin-right:0}";
const CardHeader = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  render() {
    return h(Host, { key: "5148c01fc9fd7bae1a4d1ddf353b980498b081e1" }, h("slot", { key: "1f97ca5e0f2009f4435bbd46fe84196df762fbc7" }), h("div", { key: "9a5207f2155f9579ec60696d02203a8735cd09a3", class: "title-actions" }, h("slot", { key: "78e8f6986a6b91b91c19c6a8c34e5849917b4241", name: "title-actions" })));
  }
};
CardHeader.style = cardTitleCss;
export {
  CardAccordion as ix_card_accordion,
  CardHeader as ix_card_title
};
