import { a as registerInstance, h, H as Host } from "./global-DjWMysHf.js";
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
    return h(Host, { key: "5380f3adc73e74559c0fc996e7de3cdaf965650c", class: `card-${this.variant}` }, h("ix-card", { key: "9e0b3ee1196fce31e4e475c6e365de6e0bd68350", variant: this.variant, passive: this.passive }, h("ix-card-content", { key: "aa6998c8d7b9a7b2a2329e73ed53dcf736822e91" }, h("ix-card-title", { key: "9ad22d217648716115d3bbd1eb5c0dc38f7af26e" }, this.icon ? h("ix-icon", { class: "icon", name: this.icon, size: "32", "aria-label": this.ariaLabelIcon }) : null, h("ix-typography", { key: "1d11c4efa541af33c0db5b7f8ab6ead6160273e6", format: "display-xxl" }, this.notification ?? 0), h("slot", { key: "a96ae7771c8fcf54f17874f97b2fb01529dc7aa8", name: "title-action" })), h("ix-typography", { key: "842b4a4cd60f935a1cbb2fe4fc2ee661a56d0757", format: "h4" }, this.heading), h("ix-typography", { key: "a355342f44ca44a492e2756be614c7af340c508e" }, this.subheading)), h("ix-card-accordion", { key: "0e2fc1caa5c33899c31bfe8e0076834229385c3a", collapse: !this.expanded, variant: this.variant }, h("slot", { key: "f7f08c778f246a9226887ddbf7a55eb7f3119f5b" }))));
  }
};
PushCard.style = pushCardCss();
export {
  PushCard as ix_push_card
};
