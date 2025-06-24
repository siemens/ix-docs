import { r as registerInstance, h, H as Host } from "./global-7dbfff85.js";
const pushCardCss = ":host{display:block;position:relative}:host ix-card{cursor:default}:host ix-card-accordion{cursor:pointer}:host .icon{height:2.5rem;width:2.5rem}:host .notification{font-size:40px}:host ix-card-content{height:11rem}";
const PushCard = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.variant = "outline";
    this.collapse = true;
  }
  render() {
    var _a;
    return h(Host, { key: "551eaf59756a26404f08550ffd581c1d2a5ec6cb" }, h("ix-card", { key: "234c25fbff11612a41cf7195375388a1e04dd2cf", variant: this.variant }, h("ix-card-content", { key: "b71305f3dc0309a7861c14a4315f65eebe1ffb2c" }, h("ix-card-title", { key: "e0eaa51dc09a29d8b58a08f5cc49c7b8fb5f423b" }, this.icon ? h("ix-icon", { class: "icon", name: this.icon, size: "32" }) : null, h("span", { key: "2004b4d4678c4ee82446c0a0e2aa53e4f49d4b99", class: "notification" }, (_a = this.notification) !== null && _a !== void 0 ? _a : 0), h("slot", { key: "6e3e664070520558f015007d68ea0bb6e229fcde", name: "title-action" })), h("ix-typography", { key: "2955264ba26f4794d5d917127d5f9394ab2242e6", format: "h4" }, this.heading), h("ix-typography", { key: "0b4ce54a5dce834ffeb5fe8b5a369a1839e2f300" }, this.subheading)), h("ix-card-accordion", { key: "9061ab3e0ead9f5d6c272b718c81ad7efdd1d18d", collapse: this.collapse }, h("slot", { key: "2117cbc308f825d5b45e1ecaf7fd83f4b0e9e798" }))));
  }
};
PushCard.style = pushCardCss;
export {
  PushCard as ix_push_card
};
