import { r as registerInstance, c as createEvent, g as getElement, h, H as Host } from "./global-BTgWS9s6.js";
import { t as iconChevronDownSmall } from "./index-BeX6RWvV-CXzUIwMU.js";
const cardAccordionCss = () => `:host{display:flex;position:relative;flex-direction:column;width:100%;transition:var(--theme-default-time) ease-in-out;--ix-card-accordion-expanded-height:14.75rem}:host *,:host *::after,:host *::before{box-sizing:border-box}:host *::-webkit-scrollbar-button{display:none}@-moz-document url-prefix(){:host *{scrollbar-color:var(--theme-scrollbar-thumb--background) var(--theme-scrollbar-track--background);scrollbar-width:thin}}:host *{}:host *::-webkit-scrollbar{width:0.5rem;height:0.5rem}:host *{}:host *::-webkit-scrollbar-track{border-radius:5px;background:var(--theme-scrollbar-track--background)}:host *::-webkit-scrollbar-track:hover{background:var(--theme-scrollbar-track--background--hover)}:host *{}:host *::-webkit-scrollbar-thumb{border-radius:5px;background:var(--theme-scrollbar-thumb--background)}:host *{}:host *::-webkit-scrollbar-thumb:hover{background:var(--theme-scrollbar-thumb--background--hover)}:host *::-webkit-scrollbar-corner{display:none}:host .expand-action{all:unset;display:flex;position:relative;-webkit-appearance:button;-moz-appearance:button;appearance:button;height:2.5rem;width:100%;align-items:center;justify-content:flex-start}:host .expand-action:not(.disabled):not(:disabled):focus-visible{outline:1px solid var(--theme-color-focus-bdr);outline-offset:var(--theme-btn--focus--outline-offset)}:host .expand-action::before{content:"";position:absolute;width:100%;height:100%;background-color:var(--ix-card-background);z-index:-1}:host .expand-icon{margin-left:0.5rem;transition:var(--theme-default-time) transform ease-in-out}:host .expand-icon.show{transform:rotate(180deg)}:host .expand-content{display:block;position:relative;width:100%;height:0;overflow:hidden;transition:height var(--theme-default-time) ease-in-out}:host .expand-content::after{content:"";position:absolute;inset:0;pointer-events:none;border-radius:var(--ix-card-accordion-expand-content--border-radius, 0);border-top:none}:host .expand-content.show{height:var(--ix-card-accordion-expanded-height)}:host .expand-content-inner{position:relative;height:100%;overflow:hidden}:host .expand-content-body{opacity:0;transition:opacity var(--theme-default-time) ease-in-out}:host .expand-content.show .expand-content-body{display:block;overflow:auto;height:calc(var(--ix-card-accordion-expanded-height) - 1rem);color:var(--theme-color-std-text);opacity:1}:host .expand-content-footer{display:block;position:absolute;bottom:0;left:0;width:100%;height:1rem;background-color:var(--theme-color-component-1);border-bottom-left-radius:var(--theme-default-border-radius);border-bottom-right-radius:var(--theme-default-border-radius)}:host(.variant-outline) .expand-action{background-color:var(--theme-push-card-outline-accordion--background)}:host(.variant-outline) .expand-action:hover{background:var(--theme-push-card-outline-accordion--background--hover)}:host(.variant-outline) .expand-action:active{background:var(--theme-push-card-outline-accordion--background--active)}:host(.variant-outline) .expand-content{background-color:var(--theme-push-card-outline-accordion-frame--background)}:host(.variant-outline) .expand-content::after{border:var(--theme-push-card-outline-accordion-frame--border-width) solid transparent;border-color:var(--theme-push-card-outline-accordion-frame--border-color)}:host(.variant-outline) .expand-content.show .expand-content-body{color:var(--theme-color-std-text)}:host(.variant-outline) .expand-content-footer{background-color:var(--theme-push-card-outline-accordion-footer--background)}:host(.variant-filled) .expand-action{background-color:var(--theme-push-card-filled-accordion--background)}:host(.variant-filled) .expand-action:hover{background:var(--theme-push-card-filled-accordion--background--hover)}:host(.variant-filled) .expand-action:active{background:var(--theme-push-card-filled-accordion--background--active)}:host(.variant-filled) .expand-content{background-color:var(--theme-push-card-filled-accordion-frame--background)}:host(.variant-filled) .expand-content::after{border:var(--theme-push-card-filled-accordion-frame--border-width) solid transparent;border-color:var(--theme-push-card-filled-accordion-frame--border-color)}:host(.variant-filled) .expand-content.show .expand-content-body{color:var(--theme-color-std-text)}:host(.variant-filled) .expand-content-footer{background-color:var(--theme-push-card-filled-accordion-footer--background)}:host(.variant-alarm) .expand-action{background-color:var(--theme-push-card-alarm-accordion--background)}:host(.variant-alarm) .expand-action:hover{background:var(--theme-push-card-alarm-accordion--background--hover)}:host(.variant-alarm) .expand-action:active{background:var(--theme-push-card-alarm-accordion--background--active)}:host(.variant-alarm) .expand-content{background-color:var(--theme-push-card-alarm-accordion-frame--background)}:host(.variant-alarm) .expand-content::after{border:var(--theme-push-card-alarm-accordion-frame--border-width) solid transparent;border-color:var(--theme-push-card-alarm-accordion-frame--border-color)}:host(.variant-alarm) .expand-content.show .expand-content-body{color:var(--theme-color-std-text)}:host(.variant-alarm) .expand-content-footer{background-color:var(--theme-push-card-alarm-accordion-footer--background)}:host(.variant-critical) .expand-action{background-color:var(--theme-push-card-critical-accordion--background)}:host(.variant-critical) .expand-action:hover{background:var(--theme-push-card-critical-accordion--background--hover)}:host(.variant-critical) .expand-action:active{background:var(--theme-push-card-critical-accordion--background--active)}:host(.variant-critical) .expand-content{background-color:var(--theme-push-card-critical-accordion-frame--background)}:host(.variant-critical) .expand-content::after{border:var(--theme-push-card-critical-accordion-frame--border-width) solid transparent;border-color:var(--theme-push-card-critical-accordion-frame--border-color)}:host(.variant-critical) .expand-content.show .expand-content-body{color:var(--theme-color-std-text)}:host(.variant-critical) .expand-content-footer{background-color:var(--theme-push-card-critical-accordion-footer--background)}:host(.variant-warning) .expand-action{background-color:var(--theme-push-card-warning-accordion--background)}:host(.variant-warning) .expand-action:hover{background:var(--theme-push-card-warning-accordion--background--hover)}:host(.variant-warning) .expand-action:active{background:var(--theme-push-card-warning-accordion--background--active)}:host(.variant-warning) .expand-content{background-color:var(--theme-push-card-warning-accordion-frame--background)}:host(.variant-warning) .expand-content::after{border:var(--theme-push-card-warning-accordion-frame--border-width) solid transparent;border-color:var(--theme-push-card-warning-accordion-frame--border-color)}:host(.variant-warning) .expand-content.show .expand-content-body{color:var(--theme-color-std-text)}:host(.variant-warning) .expand-content-footer{background-color:var(--theme-push-card-warning-accordion-footer--background)}:host(.variant-success) .expand-action{background-color:var(--theme-push-card-success-accordion--background)}:host(.variant-success) .expand-action:hover{background:var(--theme-push-card-success-accordion--background--hover)}:host(.variant-success) .expand-action:active{background:var(--theme-push-card-success-accordion--background--active)}:host(.variant-success) .expand-content{background-color:var(--theme-push-card-success-accordion-frame--background)}:host(.variant-success) .expand-content::after{border:var(--theme-push-card-success-accordion-frame--border-width) solid transparent;border-color:var(--theme-push-card-success-accordion-frame--border-color)}:host(.variant-success) .expand-content.show .expand-content-body{color:var(--theme-color-std-text)}:host(.variant-success) .expand-content-footer{background-color:var(--theme-push-card-success-accordion-footer--background)}:host(.variant-info) .expand-action{background-color:var(--theme-push-card-info-accordion--background)}:host(.variant-info) .expand-action:hover{background:var(--theme-push-card-info-accordion--background--hover)}:host(.variant-info) .expand-action:active{background:var(--theme-push-card-info-accordion--background--active)}:host(.variant-info) .expand-content{background-color:var(--theme-push-card-info-accordion-frame--background)}:host(.variant-info) .expand-content::after{border:var(--theme-push-card-info-accordion-frame--border-width) solid transparent;border-color:var(--theme-push-card-info-accordion-frame--border-color)}:host(.variant-info) .expand-content.show .expand-content-body{color:var(--theme-color-std-text)}:host(.variant-info) .expand-content-footer{background-color:var(--theme-push-card-info-accordion-footer--background)}:host(.variant-neutral) .expand-action{background-color:var(--theme-push-card-neutral-accordion--background)}:host(.variant-neutral) .expand-action:hover{background:var(--theme-push-card-neutral-accordion--background--hover)}:host(.variant-neutral) .expand-action:active{background:var(--theme-push-card-neutral-accordion--background--active)}:host(.variant-neutral) .expand-content{background-color:var(--theme-push-card-neutral-accordion-frame--background)}:host(.variant-neutral) .expand-content::after{border:var(--theme-push-card-neutral-accordion-frame--border-width) solid transparent;border-color:var(--theme-push-card-neutral-accordion-frame--border-color)}:host(.variant-neutral) .expand-content.show .expand-content-body{color:var(--theme-color-std-text)}:host(.variant-neutral) .expand-content-footer{background-color:var(--theme-push-card-neutral-accordion-footer--background)}:host(.variant-primary) .expand-action{background-color:var(--theme-push-card-primary-accordion--background)}:host(.variant-primary) .expand-action:hover{background:var(--theme-push-card-primary-accordion--background--hover)}:host(.variant-primary) .expand-action:active{background:var(--theme-push-card-primary-accordion--background--active)}:host(.variant-primary) .expand-content{background-color:var(--theme-push-card-primary-accordion-frame--background)}:host(.variant-primary) .expand-content::after{border:var(--theme-push-card-primary-accordion-frame--border-width) solid transparent;border-color:var(--theme-push-card-primary-accordion-frame--border-color)}:host(.variant-primary) .expand-content.show .expand-content-body{color:var(--theme-color-std-text)}:host(.variant-primary) .expand-content-footer{background-color:var(--theme-push-card-primary-accordion-footer--background)}`;
let accordionControlId = 0;
const getAriaControlsId = (prefix = "expand-content") => {
  return [prefix, accordionControlId++].join("-");
};
const CardAccordion = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.accordionExpand = createEvent(this, "accordionExpand", 7);
  }
  /**
   * ARIA label for the card's expand button.
   * Will be set as aria-label on the nested HTML button element
   *
   * @since 3.2.0
   */
  ariaLabelExpandButton;
  /**
   * Collapse the card
   */
  collapse = false;
  /**
   * Show accordion with different color variants
   *
   * @since 4.0.0
   */
  variant = "outline";
  get hostElement() {
    return getElement(this);
  }
  /**
   * @internal
   */
  accordionExpand;
  expandContent = false;
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
    return h(Host, { key: "6361eab1c229a6678e6035e76e8865d9421d923f", slot: "card-accordion", class: {
      [`variant-${this.variant}`]: true
    } }, h("button", { key: "b143080712778b43494af1198e842b16cda59e89", tabIndex: 0, class: { "expand-action": true, show: this.expandContent }, onClick: (event) => this.onExpandActionClick(event), role: "button", type: "button", "aria-expanded": this.expandContent, "aria-controls": getAriaControlsId(), "aria-label": this.ariaLabelExpandButton }, h("ix-icon", { key: "8b2d846cc40a3c73f6a98d7a35038057dda89ba6", name: iconChevronDownSmall, class: {
      "expand-icon": true,
      show: this.expandContent
    } })), h("div", { key: "a7585909e6ce429ba8594e333e2798c72f59f27d", class: {
      "expand-content": true,
      show: this.expandContent
    } }, h("div", { key: "05e7b8a29ab1e24fe78e315b68511618fd5a05ac", class: "expand-content-inner" }, h("div", { key: "f9a706418df216d90cf804c5e010a051592b5a2e", class: "expand-content-body" }, h("slot", { key: "23bd688f38b3601b5ebd3e229e6dc432d6f132d8" })), h("div", { key: "f5a090a4d4df185bf75737584f7385d79808f1e0", class: "expand-content-footer" }))));
  }
  static get watchers() {
    return {
      "collapse": [{
        "onInitialExpandChange": 0
      }]
    };
  }
};
CardAccordion.style = cardAccordionCss();
const cardTitleCss = () => `:host{display:flex;position:relative;flex-direction:row;align-items:center;margin-top:0.25rem;margin-bottom:0.25rem;gap:1rem;width:100%}:host .title-actions{display:flex;position:relative;flex-direction:row;gap:0.25rem;margin-left:auto;margin-right:0}`;
const CardHeader = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  render() {
    return h(Host, { key: "9c9d2e38edbd21c21f2fbc3c451f0f73728463f5" }, h("slot", { key: "72878e063e7df669a90da5caeff705dd794080fc" }), h("div", { key: "ed8aa8ecef81523223b40c3497de63306df4a4a0", class: "title-actions" }, h("slot", { key: "3827e0881d1617636640a2953476fb2bfb13f881", name: "title-actions" })));
  }
};
CardHeader.style = cardTitleCss();
export {
  CardAccordion as ix_card_accordion,
  CardHeader as ix_card_title
};
