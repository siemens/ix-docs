import { r as registerInstance, c as createEvent, h, H as Host } from "./global-7dbfff85.js";
import { s as iconChevronRight } from "./index-DLTnniMb-a143a692.js";
const treeItemCss = ":host{display:flex;align-items:center;height:32px;width:100%;cursor:pointer}:host *,:host *::after,:host *::before{box-sizing:border-box}:host ::-webkit-scrollbar-button{display:none}@-moz-document url-prefix(){:host *{scrollbar-color:var(--theme-scrollbar-thumb--background) var(--theme-scrollbar-track--background);scrollbar-width:thin}}:host ::-webkit-scrollbar{width:0.5rem;height:0.5rem}:host ::-webkit-scrollbar-track{border-radius:5px;background:var(--theme-scrollbar-track--background)}:host ::-webkit-scrollbar-track:hover{background:var(--theme-scrollbar-track--background--hover)}:host ::-webkit-scrollbar-thumb{border-radius:5px;background:var(--theme-scrollbar-thumb--background)}:host ::-webkit-scrollbar-thumb:hover{background:var(--theme-scrollbar-thumb--background--hover)}:host ::-webkit-scrollbar-corner{display:none}:host .tree-node-container{overflow:hidden;text-overflow:ellipsis;white-space:nowrap;display:flex;align-items:center;height:2rem;flex-grow:1;align-items:center}:host .tree-node-container .tree-node-text{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}:host .icon-toggle-container{display:flex;align-items:center;justify-content:center;width:2rem;height:2rem;min-width:2rem}:host .icon-toggle-container ix-icon{transition:transform var(--theme-default-time) ease-in-out}:host .icon-toggle-container ix-icon.icon-toggle-down{transform:rotate(90deg)}:host(:not(.disabled):not(:disabled):not(.selected).hover),:host(:not(.disabled):not(:disabled):not(.selected):hover){background-color:var(--theme-tree-item--background--hover)}:host(:not(.disabled):not(:disabled):not(.selected).active),:host(:not(.disabled):not(:disabled):not(.selected):active){background-color:var(--theme-tree-item--background--active)}:host(.selected){background-color:var(--theme-tree-item--background--selected)}:host(.selected.hover),:host(.selected:hover){background-color:var(--theme-tree-item--background--selected-hover)}:host(.selected.active),:host(.selected:active){background-color:var(--theme-tree-item--background--selected-active)}";
const TreeItem = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.toggle = createEvent(this, "toggle", 7);
    this.itemClick = createEvent(this, "itemClick", 7);
    this.hasChildren = false;
  }
  render() {
    var _a, _b, _c;
    return h(Host, { key: "3fe4e99945d9fbe6e15d877c1bd4f49e6fdb3b5b", class: {
      selected: !!((_a = this.context) === null || _a === void 0 ? void 0 : _a.isSelected)
    } }, h("div", { key: "ab596a52f690c8f8db0ce98f7017c7e54fa25b0b", class: "icon-toggle-container" }, this.hasChildren ? h("ix-icon", { name: iconChevronRight, size: "16", class: {
      ["icon-toggle-down"]: !!((_b = this.context) === null || _b === void 0 ? void 0 : _b.isExpanded)
    }, color: `color-${((_c = this.context) === null || _c === void 0 ? void 0 : _c.isExpanded) ? "primary" : "std-text"}`, onClick: (e) => {
      e.preventDefault();
      e.stopPropagation();
      this.toggle.emit();
    } }) : null), h("div", { key: "2b171b5b35e4ac52bd491722c24839a8abc7937f", class: "tree-node-container", onClick: () => {
      this.itemClick.emit();
    } }, h("div", { key: "48497301ae880eb22f4fe47541b7391ef1ec0f67", class: "tree-node-text" }, this.text), h("slot", { key: "647fab3ad5e48a43fd0d597df6baa0fe6f36f3ef" })));
  }
};
TreeItem.style = treeItemCss;
export {
  TreeItem as ix_tree_item
};
