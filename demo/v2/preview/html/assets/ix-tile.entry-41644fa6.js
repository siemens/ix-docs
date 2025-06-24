import { r as registerInstance, h, H as Host, g as getElement } from "./global-7dbfff85.js";
const tileCss = ":host{min-width:11.937rem;max-width:11.937rem;width:11.937rem;display:flex;flex-direction:column;border:1px solid var(--theme-tile--border);border-radius:var(--theme-tile--border-radius);background-color:var(--theme-color-2);color:var(--theme-color-std-text);box-shadow:var(--theme-tile--box-shadow)}:host *,:host *::after,:host *::before{box-sizing:border-box}:host ::-webkit-scrollbar-button{display:none}@-moz-document url-prefix(){:host *{scrollbar-color:var(--theme-scrollbar-thumb--background) var(--theme-scrollbar-track--background);scrollbar-width:thin}}:host ::-webkit-scrollbar{width:0.5rem;height:0.5rem}:host ::-webkit-scrollbar-track{border-radius:5px;background:var(--theme-scrollbar-track--background)}:host ::-webkit-scrollbar-track:hover{background:var(--theme-scrollbar-track--background--hover)}:host ::-webkit-scrollbar-thumb{border-radius:5px;background:var(--theme-scrollbar-thumb--background)}:host ::-webkit-scrollbar-thumb:hover{background:var(--theme-scrollbar-thumb--background--hover)}:host ::-webkit-scrollbar-corner{display:none}:host .tile-header{display:flex;align-items:center;-webkit-font-smoothing:antialiased;-moz-osx-font-smooting:grayscale;font-family:Siemens Sans, sans-serif;font-size:1rem;font-weight:700;line-height:1.5em;color:var(--theme-color-std-text)}:host .tile-header,:host .tile-subheader,:host .tile-content,:host .tile-footer{padding:0 1rem}:host .tile-header,:host .tile-content{flex-grow:1}:host .tile-header.has-content{display:flex;height:2.5rem;max-height:2.5rem;padding-inline-end:0.5rem}:host .tile-subheader{color:var(--theme-btn-invisible-secondary--color);flex-grow:0}:host .tile-footer.has-content{border-block-start:1px solid var(--theme-color-1);height:2.5rem}:host(.tile-small){height:2.5rem;min-height:2.5rem;max-height:2.5rem}:host(.tile-medium){height:5rem;min-height:5rem;max-height:5rem}:host(.tile-big){height:10rem;min-height:10rem;max-height:10rem}:host(:active),:host(:focus-visible),:host(:visited){outline:none}";
const Tile = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.size = "medium";
    this.hasHeaderSlot = false;
    this.hasFooterSlot = false;
  }
  handleHeaderSlotChange() {
    this.hasHeaderSlot = !!this.hostElement.querySelector('[slot="header"]');
  }
  handleFooterSlotChange() {
    this.hasFooterSlot = !!this.hostElement.querySelector('[slot="footer"]');
  }
  render() {
    return h(Host, { key: "ac6af4a7981249a47593d83223f2891d0952c9e4", class: {
      "tile-small": this.size === "small",
      "tile-medium": this.size === "medium",
      "tile-big": this.size === "big"
    } }, h("div", { key: "60247fb1f9764e4f60540a0c1be813dda44ca981", class: {
      "tile-header": true,
      "has-content": this.hasHeaderSlot
    } }, h("slot", { key: "17e74545160e4ffffd4ff6832e8e9ed6bc9ec2c4", name: "header", onSlotchange: () => this.handleHeaderSlotChange() })), h("div", { key: "3090ec2e2676c2d3de779f38e57e730af603e4f5", class: "tile-subheader" }, h("slot", { key: "6f30a7ae3235b53e2f594429a8ac39e2b6655e9b", name: "subheader" })), h("div", { key: "f389af4f5ff32c4ccebbf77f5df7fc080c7fcd7b", class: "tile-content" }, h("slot", { key: "22139acfced5cd80b38cc32e04de239899247f31" })), h("div", { key: "92adbe15ce49fa74e17f9ca96e695a9bd9659b58", class: {
      "tile-footer": true,
      "has-content": this.hasFooterSlot
    } }, h("slot", { key: "c9d16cff0fa2aac4b28290ea4bb8eb11db34c3d1", name: "footer", onSlotchange: () => this.handleFooterSlotChange() })));
  }
  get hostElement() {
    return getElement(this);
  }
};
Tile.style = tileCss;
export {
  Tile as ix_tile
};
