import { r as registerInstance, h, H as Host } from "./global-nUAVWB12.js";
import { b as TRAP_FOCUS_INCLUDE_ATTRIBUTE } from "./focus-trap-IK9ialav-CffRa992.js";
import "./make-ref-Djkc69iv-BpP6uHEs.js";
import "./focus-utilities-6ZxKp7Jn-D8qr1Jms.js";
const popoverFooterCss = () => `:host{display:flex;padding:0.75rem;justify-content:space-between;align-items:center;gap:0.5rem}:host *,:host *::after,:host *::before{box-sizing:border-box}:host *::-webkit-scrollbar-button{display:none}@-moz-document url-prefix(){:host *{scrollbar-color:var(--theme-scrollbar-thumb--background) var(--theme-scrollbar-track--background);scrollbar-width:thin}}:host *{}:host *::-webkit-scrollbar{width:0.5rem;height:0.5rem}:host *{}:host *::-webkit-scrollbar-track{border-radius:5px;background:var(--theme-scrollbar-track--background)}:host *::-webkit-scrollbar-track:hover{background:var(--theme-scrollbar-track--background--hover)}:host *{}:host *::-webkit-scrollbar-thumb{border-radius:5px;background:var(--theme-scrollbar-thumb--background)}:host *{}:host *::-webkit-scrollbar-thumb:hover{background:var(--theme-scrollbar-thumb--background--hover)}:host *::-webkit-scrollbar-corner{display:none}:host .footer-start,:host .footer-end{display:flex;gap:0.5rem}:host(.alignment-vertical) .footer-end{flex-direction:column;width:100%}:host(.alignment-vertical) .footer-end ::slotted(*){width:100%}`;
const PopoverFooter = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  /**
   * Button layout direction
   *
   * @since 5.1.0
   */
  alignment = "horizontal";
  render() {
    return h(Host, { key: "e9bbb00e9d48ab89b930d5924da6995974ac2867", class: { [`alignment-${this.alignment}`]: true }, [TRAP_FOCUS_INCLUDE_ATTRIBUTE]: true }, h("div", { key: "4691948c17e662b473fd4ec05e3c8424b1dfe0f5", class: "footer-start" }, h("slot", { key: "db7836e324ccaa285943c395d85375e8135f45c6", name: "start" })), h("div", { key: "f85cdae3980071d1ea3ad3ad512a7ded796359f0", class: "footer-end" }, h("slot", { key: "ba2d44a07cf99033e6757b2d24dad784934c8644" })));
  }
};
PopoverFooter.style = popoverFooterCss();
export {
  PopoverFooter as ix_popover_footer
};
