import { r as registerInstance, h, H as Host } from "./global-7dbfff85.js";
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
    return h(Host, { key: "d7cc4a3ae96e5ee4502fc757311fc7073e78c61a" }, h("div", { key: "5d06ee614a6518d47a1a9243883063306195912f", class: this.cardClasses() }, !this.hideHeader && h("div", { key: "07892beb965a08a08b745f2d308cf8e93aa731fd", class: "header-container" }, h("div", { key: "9a77e4d7e6a8f3d50c665e76808669fc88d5a7b8", class: "header" }, h("slot", { key: "cb1cd8527ddb6560e9deac76ea85ccbe8463f15c", name: "header" })), h("div", { key: "6b911dcc4fa18efde5747544f2239ec86119a39a", class: "separator" })), h("div", { key: "766ede607630b3d8df6634de6360d9d46508c3d2", class: {
      content: true,
      "content--time-picker": this.timePickerAppearance
    } }, h("slot", { key: "dd02448c469024a798a7277f28992588faa27d95" })), this.hasFooter && h("div", { key: "8f4dfeef86a755d345fc021b049a660691a25836", class: "footer-container" }, h("div", { key: "d35ad21f5d3d5d1628af76839445a1100e022ffc", class: "separator" }), h("div", { key: "bb0ffdc8d4ed91f1ef637a194bfbdaaf03b31142", class: "footer" }, h("slot", { key: "8f62ccd9a237345e67883866ad2e32e01e34232a", name: "footer" })))));
  }
};
DateTimeCard.style = dateTimeCardCss;
export {
  DateTimeCard as ix_date_time_card
};
