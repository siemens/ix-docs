import { r as registerInstance, h, H as Host } from "./global-7ZbTfMw3.js";
const pushCardCss = () => `:host{display:block;position:relative}:host ix-card{cursor:default}:host ix-card-accordion{cursor:pointer}:host .icon{height:2.5rem;width:2.5rem}:host ix-card-title{height:2.5rem}:host ix-card-content{height:11rem}:host(.card-outline) ix-card-content{border-bottom:var(--theme-push-card--border-width) solid var(--theme-push-card-outline-accordion--border-color)}:host(.card-filled) ix-card-content{border-bottom:var(--theme-push-card--border-width) solid var(--theme-push-card-filled-accordion--border-color)}:host(.card-alarm) ix-card-content{border-bottom:var(--theme-push-card--border-width) solid var(--theme-push-card-alarm-accordion--border-color)}:host(.card-critical) ix-card-content{border-bottom:var(--theme-push-card--border-width) solid var(--theme-push-card-critical-accordion--border-color)}:host(.card-warning) ix-card-content{border-bottom:var(--theme-push-card--border-width) solid var(--theme-push-card-warning-accordion--border-color)}:host(.card-success) ix-card-content{border-bottom:var(--theme-push-card--border-width) solid var(--theme-push-card-success-accordion--border-color)}:host(.card-info) ix-card-content{border-bottom:var(--theme-push-card--border-width) solid var(--theme-push-card-info-accordion--border-color)}:host(.card-neutral) ix-card-content{border-bottom:var(--theme-push-card--border-width) solid var(--theme-push-card-neutral-accordion--border-color)}:host(.card-primary) ix-card-content{border-bottom:var(--theme-push-card--border-width) solid var(--theme-push-card-primary-accordion--border-color)}`;
const PushCard = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.variant = "outline";
    this.expanded = false;
    this.passive = false;
  }
  render() {
    var _a;
    return h(Host, { key: "2a1cc8d87975020ae8134425478559124f6ca8e0", class: `card-${this.variant}` }, h("ix-card", { key: "c7d5f8a0ad09b7590edbcf473dd5858777a91830", variant: this.variant, passive: this.passive }, h("ix-card-content", { key: "cc6c2df4fc1728b2e9ba00e74977e118f9116b10" }, h("ix-card-title", { key: "4b09d4f4acbcae0a2e00f3e132b725d1c67b3ea1" }, this.icon ? h("ix-icon", { class: "icon", name: this.icon, size: "32", "aria-label": this.ariaLabelIcon }) : null, h("ix-typography", { key: "08509711a95110e269fb3e50e0c61c509c78d834", format: "display-xxl" }, (_a = this.notification) !== null && _a !== void 0 ? _a : 0), h("slot", { key: "c7949108ec0b103c49b60e82f6a4d5a29abe58f1", name: "title-action" })), h("ix-typography", { key: "de6d7d778dcc917ca6bcaca6a6cd0a8445a520f2", format: "h4" }, this.heading), h("ix-typography", { key: "c1d1c13ac5a98d55083020f3e03c1d6f242d74ef" }, this.subheading)), h("ix-card-accordion", { key: "a7b9721fa42edd694fc94d1b3486b43a953fe676", collapse: !this.expanded, variant: this.variant }, h("slot", { key: "7c161db024903e9ca7c996ee02b09a9cedca108b" }))));
  }
};
PushCard.style = pushCardCss();
export {
  PushCard as ix_push_card
};
