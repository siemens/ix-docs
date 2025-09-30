import { r as registerInstance, c as createEvent, h, H as Host } from "./global-DaepF4XF.js";
import { w as iconChevronRightSmall } from "./index-CB6MK0tq-MglExpDl.js";
const treeItemCss = ":host{display:flex;align-items:center;height:32px;width:100%;cursor:pointer}:host *,:host *::after,:host *::before{box-sizing:border-box}:host ::-webkit-scrollbar-button{display:none}@-moz-document url-prefix(){:host *{scrollbar-color:var(--theme-scrollbar-thumb--background) var(--theme-scrollbar-track--background);scrollbar-width:thin}}:host ::-webkit-scrollbar{width:0.5rem;height:0.5rem}:host ::-webkit-scrollbar-track{border-radius:5px;background:var(--theme-scrollbar-track--background)}:host ::-webkit-scrollbar-track:hover{background:var(--theme-scrollbar-track--background--hover)}:host ::-webkit-scrollbar-thumb{border-radius:5px;background:var(--theme-scrollbar-thumb--background)}:host ::-webkit-scrollbar-thumb:hover{background:var(--theme-scrollbar-thumb--background--hover)}:host ::-webkit-scrollbar-corner{display:none}:host .tree-node-container{overflow:hidden;text-overflow:ellipsis;white-space:nowrap;display:flex;align-items:center;height:2rem;flex-grow:1;align-items:center}:host .tree-node-container .tree-node-text{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}:host .icon-toggle-container{display:flex;align-items:center;justify-content:center;width:2rem;height:2rem;min-width:2rem}:host .icon-toggle-container ix-icon{transition:transform var(--theme-default-time) ease-in-out}:host .icon-toggle-container ix-icon.icon-toggle-down{transform:rotate(90deg)}:host(:not(.disabled):not(:disabled):not(.selected).hover),:host(:not(.disabled):not(:disabled):not(.selected):hover){background-color:var(--theme-tree-item--background--hover)}:host(:not(.disabled):not(:disabled):not(.selected).active),:host(:not(.disabled):not(:disabled):not(.selected):active){background-color:var(--theme-tree-item--background--active)}:host(.selected){background-color:var(--theme-tree-item--background--selected)}:host(.selected.hover),:host(.selected:hover){background-color:var(--theme-tree-item--background--selected-hover)}:host(.selected.active),:host(.selected:active){background-color:var(--theme-tree-item--background--selected-active)}";
const TreeItem = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.toggle = createEvent(this, "toggle", 7);
    this.itemClick = createEvent(this, "itemClick", 7);
    this.hasChildren = false;
  }
  render() {
    var _a, _b;
    return h(Host, { key: "da96cf807a161f1c052c54088abd6d33dedb2e6e", class: {
      selected: !!((_a = this.context) === null || _a === void 0 ? void 0 : _a.isSelected)
    } }, h("div", { key: "2859b719297a89c092b977d4f35e51034cb48dfb", class: "icon-toggle-container" }, this.hasChildren ? h("ix-icon", { name: iconChevronRightSmall, size: "24", class: {
      ["icon-toggle-down"]: !!((_b = this.context) === null || _b === void 0 ? void 0 : _b.isExpanded)
    }, color: "color-std-text", onClick: (e) => {
      e.preventDefault();
      e.stopPropagation();
      this.toggle.emit();
    }, "aria-label": this.ariaLabelChevronIcon }) : null), h("div", { key: "0ba682812fec0226ddb3e11842fe4e039e16946f", class: "tree-node-container", onClick: () => {
      this.itemClick.emit();
    } }, h("div", { key: "1810765c042ca82c17065184cc4e41d6f1209dd1", class: "tree-node-text" }, this.text), h("slot", { key: "c302d605d35d8d71a3e81010e6d9cd00f0dac50d" })));
  }
};
TreeItem.style = treeItemCss;
export {
  TreeItem as ix_tree_item
};
