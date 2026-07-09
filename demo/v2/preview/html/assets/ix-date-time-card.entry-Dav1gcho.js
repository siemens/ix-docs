import { r as registerInstance, h, H as Host } from "./global-C4tOo1JZ.js";
const dateTimeCardCss = () => `:host *,:host *::after,:host *::before{box-sizing:border-box}:host ::-webkit-scrollbar-button{display:none}@-moz-document url-prefix(){:host *{scrollbar-color:var(--theme-scrollbar-thumb--background) var(--theme-scrollbar-track--background);scrollbar-width:thin}}:host{}:host ::-webkit-scrollbar{width:0.5rem;height:0.5rem}:host{}:host ::-webkit-scrollbar-track{border-radius:5px;background:var(--theme-scrollbar-track--background)}:host ::-webkit-scrollbar-track:hover{background:var(--theme-scrollbar-track--background--hover)}:host{}:host ::-webkit-scrollbar-thumb{border-radius:5px;background:var(--theme-scrollbar-thumb--background)}:host{}:host ::-webkit-scrollbar-thumb:hover{background:var(--theme-scrollbar-thumb--background--hover)}:host ::-webkit-scrollbar-corner{display:none}:host .card{background-color:var(--theme-menu--background);width:100%;box-shadow:none;border:none;border-radius:unset;display:flex;flex-direction:column}:host .card.standaloneAppearance{box-shadow:var(--theme-shadow-4);border-radius:0.25rem}:host .card.rounded{border-radius:4px}:host .card.left{border-radius:4px 0 0 4px;height:100%}:host .card.right{border-radius:0 4px 4px 0;height:100%}:host .card.straight{border-radius:0}:host .card .header-container{width:100%}:host .card .header-container .header{padding:0.75rem 1rem;flex:0 1 auto}:host .card .separator{height:1px;background-color:var(--theme-datepicker-separator--background);width:100%;flex:0 1 auto}:host .card .content{padding:0 1rem 1rem 1rem;flex:1 1 auto;display:flex;flex-direction:column;justify-content:center}:host .card .content--time-picker{padding:0 1rem}:host .card .content--no-padding{padding:0}:host .card .footer-container{width:100%}:host .card .footer-container .footer{padding:1rem}`;
const DateTimeCard = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  /** @internal */
  embedded;
  /** Timepicker specific styling */
  timePickerAppearance = false;
  /**
   * Hide header
   */
  hideHeader = false;
  /**
   * Display footer
   */
  hasFooter = false;
  /**
   * Set corners style
   */
  corners = "rounded";
  /**
   * Remove content padding
   */
  noPadding = false;
  cardClasses() {
    return {
      card: true,
      standaloneAppearance: this.embedded === false,
      rounded: this.corners === "rounded",
      left: this.corners === "left",
      right: this.corners === "right",
      straight: this.corners === "straight"
    };
  }
  render() {
    return h(Host, { key: "2c99b24d79ebec2d725f97129fe3f342c522d079" }, h("div", { key: "5e2a5de64db6ef617518205fceb9bfa8d589aa23", class: this.cardClasses() }, !this.hideHeader && h("div", { key: "03a4337b9d32f39e6269139f4daa7abc0be03782", class: "header-container" }, h("div", { key: "6ece0fe49bd23f36cef66adca6ebcff1889f7337", class: "header" }, h("slot", { key: "9119418fcc90d838f5cb91e424fb19c30b53fe55", name: "header" })), h("div", { key: "5ac0ad42605f8f4ca4352494f55e663e001e3188", class: "separator" })), h("div", { key: "a9d30cbca8fff9cb3821c7643054654e855750cb", class: {
      content: true,
      "content--time-picker": this.timePickerAppearance,
      "content--no-padding": this.noPadding
    } }, h("slot", { key: "6054b36f5cd386adde31aa4d7faa1fb63848a146" })), this.hasFooter && h("div", { key: "60e9f4ec42a71ce72e32ad698acf0bcee6913b46", class: "footer-container" }, h("div", { key: "9c9b0a086adee3d0c0224e45f9c1ef0d37c3f9ba", class: "separator" }), h("div", { key: "59d1fac830d3632d3da09dd0c8183a83a619c9c3", class: "footer" }, h("slot", { key: "73a026a1015c6b900cea1dc0423cc616b7a3cd17", name: "footer" })))));
  }
};
DateTimeCard.style = dateTimeCardCss();
export {
  DateTimeCard as ix_date_time_card
};
