import { r as registerInstance, h, H as Host, g as getElement } from "./global-DaepF4XF.js";
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
    return h(Host, { key: "e47b51c31c41e8c1170c3d3e83300185da2e57f3" }, h("div", { key: "33ef95cae638b9646013a9fe18186567335bcbe3", class: "container" }, h("slot", { key: "26ca2296fc76045f3a0bda81683a4e64c2dc02dd" })));
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
