import { r as registerInstance, h, H as Host } from "./global-CJeEgyUn.js";
const pushCardCss = ":host{display:block;position:relative}:host ix-card{cursor:default}:host ix-card-accordion{cursor:pointer}:host .icon{height:2.5rem;width:2.5rem}:host ix-card-title{height:2.5rem}:host ix-card-content{height:11rem}:host(.card-outline) ix-card-content{border-bottom:var(--theme-push-card--border-width) solid var(--theme-push-card-outline-accordion--border-color)}:host(.card-filled) ix-card-content{border-bottom:var(--theme-push-card--border-width) solid var(--theme-push-card-filled-accordion--border-color)}:host(.card-alarm) ix-card-content{border-bottom:var(--theme-push-card--border-width) solid var(--theme-push-card-alarm-accordion--border-color)}:host(.card-critical) ix-card-content{border-bottom:var(--theme-push-card--border-width) solid var(--theme-push-card-critical-accordion--border-color)}:host(.card-warning) ix-card-content{border-bottom:var(--theme-push-card--border-width) solid var(--theme-push-card-warning-accordion--border-color)}:host(.card-success) ix-card-content{border-bottom:var(--theme-push-card--border-width) solid var(--theme-push-card-success-accordion--border-color)}:host(.card-info) ix-card-content{border-bottom:var(--theme-push-card--border-width) solid var(--theme-push-card-info-accordion--border-color)}:host(.card-neutral) ix-card-content{border-bottom:var(--theme-push-card--border-width) solid var(--theme-push-card-neutral-accordion--border-color)}:host(.card-primary) ix-card-content{border-bottom:var(--theme-push-card--border-width) solid var(--theme-push-card-primary-accordion--border-color)}";
const PushCard = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.variant = "outline";
    this.expanded = false;
  }
  render() {
    var _a;
    return h(Host, { key: "ce5e4eb49ffe548ae912dfb9df2ff02e570aef15", class: `card-${this.variant}` }, h("ix-card", { key: "09ee07b5244171d3cd2a2eaf99180a71364326e6", variant: this.variant }, h("ix-card-content", { key: "4ca37f7946dfaf600c21fa516a6a79c95c3369f3" }, h("ix-card-title", { key: "14508386f9ad32b641b7404b8d1845f8f215a12f" }, this.icon ? h("ix-icon", { class: "icon", name: this.icon, size: "32", "aria-label": this.ariaLabelIcon }) : null, h("ix-typography", { key: "004e0f78e304e16b085cba401d4fe6067c579819", format: "display-xxl" }, (_a = this.notification) !== null && _a !== void 0 ? _a : 0), h("slot", { key: "b5207aabd014e0e180eb1248795bccc23c09b850", name: "title-action" })), h("ix-typography", { key: "e39c0d3762869afd918cf9f8bb75bcbad35798d2", format: "h4" }, this.heading), h("ix-typography", { key: "52c82e776f50a1e848cb163cf974402fc58a5011" }, this.subheading)), h("ix-card-accordion", { key: "28ba4043b6494617eb0a4ea03eca56c198e10766", collapse: !this.expanded, variant: this.variant }, h("slot", { key: "f2be8b7cd43af05c3af1be4a5642871e3413d6f8" }))));
  }
};
PushCard.style = pushCardCss;
export {
  PushCard as ix_push_card
};
