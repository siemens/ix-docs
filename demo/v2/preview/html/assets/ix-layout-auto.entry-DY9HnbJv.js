import { r as registerInstance, h, H as Host, g as getElement } from "./global-CJeEgyUn.js";
const layoutAutoCss = ":host{display:block;position:relative;margin:0 0.75rem;--ix-layout-grid-gap:1.5rem}:host .container{display:flex;align-items:stretch;flex-wrap:wrap;gap:var(--ix-layout-grid-gap)}:host ::slotted(*){flex-grow:0;flex-shrink:0}";
const LayoutForm = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.layout = [
      { minWidth: "0", columns: 1 },
      { minWidth: "48em", columns: 2 }
    ];
    this.mediaQueryList = [];
    this.observer = new MutationObserver(() => this.calculateGridTemplateColumns());
    this.resizeObserver = new ResizeObserver(() => {
      this.calculateGridTemplateColumns();
    });
  }
  connectedCallback() {
    this.observer.observe(this.hostElement, {
      childList: true,
      subtree: true,
      attributes: true,
      attributeFilter: ["data-colspan"]
    });
    this.resizeObserver.observe(this.hostElement);
    this.calculateGridTemplateColumns();
  }
  componentWillLoad() {
    this.calculateGridTemplateColumns();
  }
  disconnectedCallback() {
    if (this.observer) {
      this.observer.disconnect();
    }
    if (this.resizeObserver) {
      this.resizeObserver.disconnect();
    }
  }
  updateMediaQueryList() {
    this.mediaQueryList = [];
    this.layout.forEach((layout) => {
      const mediaQuery = window.matchMedia(`(min-width: ${layout.minWidth})`);
      this.mediaQueryList.push({
        mediaQuery,
        layout
      });
    });
  }
  parseNumber(number) {
    if (!number) {
      return 1;
    }
    const result = parseInt(number);
    if (isNaN(result)) {
      return 1;
    }
    return result;
  }
  calculateGridTemplateColumns() {
    this.updateMediaQueryList();
    let layoutColumns = 1;
    let columnSpacing = "var(--ix-layout-grid-gap)";
    this.mediaQueryList.forEach((mediaQuery) => {
      if (mediaQuery.mediaQuery.matches) {
        layoutColumns = mediaQuery.layout.columns;
      }
    });
    Array.from(this.hostElement.children).forEach((child) => {
      let colspan = this.parseNumber(child.getAttribute("data-colspan"));
      colspan = Math.min(colspan, layoutColumns);
      const childRatio = colspan / layoutColumns;
      child.style.width = `calc(${childRatio * 99.9}% - ${1 - childRatio} * ${columnSpacing})`;
    });
  }
  render() {
    return h(Host, { key: "48511195af19191b832713a828ac0945b06a4898" }, h("div", { key: "4a51469ffe227db5c361734fc3122a98f7e0fbcc", class: "container" }, h("slot", { key: "6ab367e83612df056e40392bced22c5f80457486" })));
  }
  get hostElement() {
    return getElement(this);
  }
  static get watchers() {
    return {
      "layout": ["updateMediaQueryList"]
    };
  }
};
LayoutForm.style = layoutAutoCss;
export {
  LayoutForm as ix_layout_auto
};
