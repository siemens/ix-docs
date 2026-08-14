import { r as registerInstance, g as getElement, h, H as Host } from "./global-BTgWS9s6.js";
const layoutAutoCss = () => `:host{display:block;position:relative;margin:0 0.75rem;--ix-layout-grid-gap:1.5rem}:host .container{display:flex;align-items:stretch;flex-wrap:wrap;gap:var(--ix-layout-grid-gap)}:host ::slotted(*){flex-grow:0;flex-shrink:0}`;
const LayoutForm = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  get hostElement() {
    return getElement(this);
  }
  /**
   * Defines the layout of the form.
   */
  layout = [
    { minWidth: "0", columns: 1 },
    { minWidth: "48em", columns: 2 }
  ];
  mediaQueryList = [];
  observer = new MutationObserver(() => this.calculateGridTemplateColumns());
  resizeObserver = new ResizeObserver(() => {
    this.calculateGridTemplateColumns();
  });
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
    return h(Host, { key: "94b563d58576e5dee2891096349fff91de442bd0" }, h("div", { key: "567c89a3633e2566d069f73fb1332a1a40c0cf01", class: "container" }, h("slot", { key: "052862cfc5b47fc070e2354ac490bcb3f6cca4dd" })));
  }
  static get watchers() {
    return {
      "layout": [{
        "updateMediaQueryList": 0
      }]
    };
  }
};
LayoutForm.style = layoutAutoCss();
export {
  LayoutForm as ix_layout_auto
};
