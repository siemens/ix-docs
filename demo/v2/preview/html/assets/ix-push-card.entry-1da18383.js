import { r as registerInstance, h, H as Host } from "./global-bbf431ac.js";
const pushCardCss = ":host{display:block;position:relative}:host ix-card{cursor:default}:host ix-card-accordion{cursor:pointer}:host .icon{height:2.5rem;width:2.5rem}:host .notification{font-size:40px}:host ix-card-content{height:11rem}";
const PushCard = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.variant = "outline";
    this.collapse = true;
  }
  render() {
    var _a;
    return h(Host, { key: "ae135e597ea17fdc03188dd47758d4ab520189d8" }, h("ix-card", { key: "1d8467f365f3f59ef4e0afda67178ecb1ccc6bbb", variant: this.variant }, h("ix-card-content", { key: "f6e5ac10d3b7eed460c2e33a2d440f44a1856896" }, h("ix-card-title", { key: "bbe991372307bfeeca3c0756729b1d39d0ffd89f" }, this.icon ? h("ix-icon", { class: "icon", name: this.icon, size: "32" }) : null, h("span", { key: "913516a64649627fc9d6b530453751bdf11d2952", class: "notification" }, (_a = this.notification) !== null && _a !== void 0 ? _a : 0), h("slot", { key: "0f9c2a9f885983e2c59ef5df03e3f0f530cee32c", name: "title-action" })), h("ix-typography", { key: "93df0ea57ae372a18e0ff541cc8da1250d0bd1f0", format: "h4" }, this.heading), h("ix-typography", { key: "4eee48138728a8f682a8fe16f88a40aa89f703fa" }, this.subheading)), h("ix-card-accordion", { key: "71fe6e1238cf2d895d08dbc2d72e0964c368c1f2", collapse: this.collapse }, h("slot", { key: "75fae3b7a5836ddcf08e99d57ff3f734ed3e4c94" }))));
  }
};
PushCard.style = pushCardCss;
export {
  PushCard as ix_push_card
};
