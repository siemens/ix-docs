import { r as registerInstance, h, H as Host } from "./global-DaepF4XF.js";
const pushCardCss = ":host{display:block;position:relative}:host ix-card{cursor:default}:host ix-card-accordion{cursor:pointer}:host .icon{height:2.5rem;width:2.5rem}:host ix-card-title{height:2.5rem}:host ix-card-content{height:11rem}";
const PushCard = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.variant = "outline";
    this.collapse = true;
  }
  render() {
    var _a;
    return h(Host, { key: "f2d1ca79f8946c269f528a6df538bdd2089852ae" }, h("ix-card", { key: "948a89a3b8993f5cc3459484dd09149f00177569", variant: this.variant }, h("ix-card-content", { key: "6ba8dd62239edfcc8d14deefc720b01f679d6239" }, h("ix-card-title", { key: "b99cbf3b32b1dce863ebc0ecfd1ab8b606814693" }, this.icon ? h("ix-icon", { class: "icon", name: this.icon, size: "32", "aria-label": this.ariaLabelIcon }) : null, h("ix-typography", { key: "e6569279c292d54b2779cbd38d7d3c570c050675", format: "display-xxl" }, (_a = this.notification) !== null && _a !== void 0 ? _a : 0), h("slot", { key: "6b627b287778dc3f3f785dc7f4fde15015e5ce54", name: "title-action" })), h("ix-typography", { key: "772674d2b221065be8cb7e53d0b678fb8efb62fc", format: "h4" }, this.heading), h("ix-typography", { key: "ceb1cef8a2781a09e66776b5d56eda7cdba3c578" }, this.subheading)), h("ix-card-accordion", { key: "a800fcc07cd05624a067ef9c877757a3489bb622", collapse: this.collapse }, h("slot", { key: "910e8bacadd6f43353770eb44443d8debb36202c" }))));
  }
};
PushCard.style = pushCardCss;
export {
  PushCard as ix_push_card
};
