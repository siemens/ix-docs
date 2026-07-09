import { r as registerInstance, h, H as Host } from "./global-C4tOo1JZ.js";
const pushCardCss = () => `:host{display:block;position:relative}:host ix-card{cursor:default}:host ix-card-accordion{cursor:pointer}:host .icon{height:2.5rem;width:2.5rem}:host ix-card-title{height:2.5rem}:host ix-card-content{height:11rem}:host(.card-outline) ix-card-content{border-bottom:var(--theme-push-card--border-width) solid var(--theme-push-card-outline-accordion--border-color)}:host(.card-filled) ix-card-content{border-bottom:var(--theme-push-card--border-width) solid var(--theme-push-card-filled-accordion--border-color)}:host(.card-alarm) ix-card-content{border-bottom:var(--theme-push-card--border-width) solid var(--theme-push-card-alarm-accordion--border-color)}:host(.card-critical) ix-card-content{border-bottom:var(--theme-push-card--border-width) solid var(--theme-push-card-critical-accordion--border-color)}:host(.card-warning) ix-card-content{border-bottom:var(--theme-push-card--border-width) solid var(--theme-push-card-warning-accordion--border-color)}:host(.card-success) ix-card-content{border-bottom:var(--theme-push-card--border-width) solid var(--theme-push-card-success-accordion--border-color)}:host(.card-info) ix-card-content{border-bottom:var(--theme-push-card--border-width) solid var(--theme-push-card-info-accordion--border-color)}:host(.card-neutral) ix-card-content{border-bottom:var(--theme-push-card--border-width) solid var(--theme-push-card-neutral-accordion--border-color)}:host(.card-primary) ix-card-content{border-bottom:var(--theme-push-card--border-width) solid var(--theme-push-card-primary-accordion--border-color)}`;
const PushCard = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  /**
   * Card icon
   */
  icon;
  /**
   * ARIA label for the icon
   *
   * @since 3.2.0
   */
  ariaLabelIcon;
  /**
   * Card KPI value
   */
  notification;
  /**
   * Card heading
   */
  heading;
  /**
   * Card subheading
   */
  subheading;
  /**
   * Card variant
   */
  variant = "outline";
  /**
   * Expand the card
   */
  expanded = false;
  /**
   * If true, disables hover and active styles and changes cursor to default
   */
  passive = false;
  render() {
    return h(Host, { key: "4f607dbe48bd80e6528f16d3dd70b1759e00f643", class: `card-${this.variant}` }, h("ix-card", { key: "4fafba1c8dbdd0b8503c14c53dc3c888567725c7", variant: this.variant, passive: this.passive }, h("ix-card-content", { key: "c7ac7e9ea9061af15c28ad79b3773ac4cd511a93" }, h("ix-card-title", { key: "4206e4413e42e914b11526b40e44cd5e5360d403" }, this.icon ? h("ix-icon", { class: "icon", name: this.icon, size: "32", "aria-label": this.ariaLabelIcon }) : null, h("ix-typography", { key: "91384db0e1c690aa9715bda38220127f545353b3", format: "display-xxl" }, this.notification ?? 0), h("slot", { key: "37cb75b3f6c2578cfa958982c20a5f0c9fa661dc", name: "title-action" })), h("ix-typography", { key: "349b36fe5eaa7faf0b8fa9da84b8b201fd1a173d", format: "h4" }, this.heading), h("ix-typography", { key: "edd40ab8765df06b960b8014e318f06cd8c0f56f" }, this.subheading)), h("ix-card-accordion", { key: "db0a3f66d0ea0fc8bed61b15651bea6381d812b1", collapse: !this.expanded, variant: this.variant }, h("slot", { key: "5095d6f7f3f9b23c17daccf9599ede0426db8b01" }))));
  }
};
PushCard.style = pushCardCss();
export {
  PushCard as ix_push_card
};
