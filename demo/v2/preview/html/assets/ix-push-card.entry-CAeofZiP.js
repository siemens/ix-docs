import { r as registerInstance, h, H as Host } from "./global-CTsFSACc.js";
const pushCardCss = ":host{display:block;position:relative}:host ix-card{cursor:default}:host ix-card-accordion{cursor:pointer}:host .icon{height:2.5rem;width:2.5rem}:host ix-card-title{height:2.5rem}:host ix-card-content{height:11rem}:host(.card-outline) ix-card-content{border-bottom:var(--theme-push-card--border-width) solid var(--theme-push-card-outline-accordion--border-color)}:host(.card-filled) ix-card-content{border-bottom:var(--theme-push-card--border-width) solid var(--theme-push-card-filled-accordion--border-color)}:host(.card-alarm) ix-card-content{border-bottom:var(--theme-push-card--border-width) solid var(--theme-push-card-alarm-accordion--border-color)}:host(.card-critical) ix-card-content{border-bottom:var(--theme-push-card--border-width) solid var(--theme-push-card-critical-accordion--border-color)}:host(.card-warning) ix-card-content{border-bottom:var(--theme-push-card--border-width) solid var(--theme-push-card-warning-accordion--border-color)}:host(.card-success) ix-card-content{border-bottom:var(--theme-push-card--border-width) solid var(--theme-push-card-success-accordion--border-color)}:host(.card-info) ix-card-content{border-bottom:var(--theme-push-card--border-width) solid var(--theme-push-card-info-accordion--border-color)}:host(.card-neutral) ix-card-content{border-bottom:var(--theme-push-card--border-width) solid var(--theme-push-card-neutral-accordion--border-color)}:host(.card-primary) ix-card-content{border-bottom:var(--theme-push-card--border-width) solid var(--theme-push-card-primary-accordion--border-color)}";
const PushCard = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.variant = "outline";
    this.expanded = false;
  }
  render() {
    var _a;
    return h(Host, { key: "32d1c2383ba5f21901eacfd3048af7435100b2b7", class: `card-${this.variant}` }, h("ix-card", { key: "b1d03d963e570c329056cf3eb70c09ef6abc13a9", variant: this.variant }, h("ix-card-content", { key: "9c46d2744676c929137f8bd9dd9ac1058d6c6a53" }, h("ix-card-title", { key: "76c052d9be63151295802b58d42e269dc0149c68" }, this.icon ? h("ix-icon", { class: "icon", name: this.icon, size: "32", "aria-label": this.ariaLabelIcon }) : null, h("ix-typography", { key: "be3a399500fa1dc58c10c8d01eb1691fb662940f", format: "display-xxl" }, (_a = this.notification) !== null && _a !== void 0 ? _a : 0), h("slot", { key: "eadeb7a0b034113e2e0a5d8557a8bf9000027306", name: "title-action" })), h("ix-typography", { key: "93dd2faeba0563a3e7c195941dc1424975e032fb", format: "h4" }, this.heading), h("ix-typography", { key: "3279cd3e6b24c0029e8d83a66a5f3344eee496b4" }, this.subheading)), h("ix-card-accordion", { key: "c36c63dac6e2ccf61745143a0fa5bf82bebac085", collapse: !this.expanded, variant: this.variant }, h("slot", { key: "7567ec4ff104a9933a632004aea3b3e607660471" }))));
  }
};
PushCard.style = pushCardCss;
export {
  PushCard as ix_push_card
};
