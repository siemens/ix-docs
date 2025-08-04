import { r as registerInstance, h, H as Host } from "./global-DaepF4XF.js";
const dateTimeCardCss = ":host{}:host *,:host *::after,:host *::before{box-sizing:border-box}:host ::-webkit-scrollbar-button{display:none}@-moz-document url-prefix(){:host *{scrollbar-color:var(--theme-scrollbar-thumb--background) var(--theme-scrollbar-track--background);scrollbar-width:thin}}:host ::-webkit-scrollbar{width:0.5rem;height:0.5rem}:host ::-webkit-scrollbar-track{border-radius:5px;background:var(--theme-scrollbar-track--background)}:host ::-webkit-scrollbar-track:hover{background:var(--theme-scrollbar-track--background--hover)}:host ::-webkit-scrollbar-thumb{border-radius:5px;background:var(--theme-scrollbar-thumb--background)}:host ::-webkit-scrollbar-thumb:hover{background:var(--theme-scrollbar-thumb--background--hover)}:host ::-webkit-scrollbar-corner{display:none}:host .card{background-color:var(--theme-menu--background);width:100%;box-shadow:none;border:none;border-radius:unset;display:flex;flex-direction:column}:host .card.standaloneAppearance{box-shadow:var(--theme-shadow-4);border-radius:0.25rem}:host .card.rounded{border-radius:4px}:host .card.left{border-radius:4px 0 0 4px;height:100%}:host .card.right{border-radius:0 4px 4px 0;height:100%}:host .card.straight{border-radius:0}:host .card .header-container{width:100%}:host .card .header-container .header{padding:1rem;flex:0 1 auto}:host .card .separator{border:1px solid var(--theme-datepicker-separator--background);width:100%;flex:0 1 auto}:host .card .content{padding:0 1rem 1rem 1rem;flex:1 1 auto;display:flex;flex-direction:column;justify-content:center}:host .card .content--time-picker{padding:0 1rem}:host .card .footer-container{width:100%}:host .card .footer-container .footer{padding:1rem}";
const DateTimeCard = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.timePickerAppearance = false;
    this.hideHeader = false;
    this.hasFooter = false;
    this.individual = true;
    this.corners = "rounded";
  }
  cardClasses() {
    var _a;
    return {
      card: true,
      standaloneAppearance: (_a = this.standaloneAppearance) !== null && _a !== void 0 ? _a : this.individual,
      rounded: this.corners === "rounded",
      left: this.corners === "left",
      right: this.corners === "right",
      straight: this.corners === "straight"
    };
  }
  render() {
    return h(Host, { key: "31c1aa02530819d8bd9896ca625c3c8930ea8268" }, h("div", { key: "31432252f1ce901e76a92423719d24bc621e3e83", class: this.cardClasses() }, !this.hideHeader && h("div", { key: "dd4b7346375f87a43b2969dba7c5b4a9cc10f0ac", class: "header-container" }, h("div", { key: "8dc14769929ce6e0d2f2095ca4904ee8beb2018b", class: "header" }, h("slot", { key: "9f5357cb413d5ccf9f6a15ecb10040034ad5e1b0", name: "header" })), h("div", { key: "b7c55ccf1c1f655240d817ed838de53a67a8d4f0", class: "separator" })), h("div", { key: "6ddf415abf2a5174a796e3e9a15441aef0f9c14a", class: {
      content: true,
      "content--time-picker": this.timePickerAppearance
    } }, h("slot", { key: "953b62d7631d68c1061798d6259836110c368095" })), this.hasFooter && h("div", { key: "d39e55a300835320ef737cd28bce660a846500de", class: "footer-container" }, h("div", { key: "e44823acab4d5a87bcb77ab812e1a31ff6a2b2c7", class: "separator" }), h("div", { key: "e8118c065ed36b219e04a91ec2fe4455585ea2e0", class: "footer" }, h("slot", { key: "f49f852f5b7c6d5bc2052d37593a69e13f78ce0f", name: "footer" })))));
  }
};
DateTimeCard.style = dateTimeCardCss;
export {
  DateTimeCard as ix_date_time_card
};
