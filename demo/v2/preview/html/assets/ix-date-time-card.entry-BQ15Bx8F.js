import { r as registerInstance, h, H as Host } from "./global-DsITLPyL.js";
const dateTimeCardCss = () => `:host *,:host *::after,:host *::before{box-sizing:border-box}:host *::-webkit-scrollbar-button{display:none}@-moz-document url-prefix(){:host *{scrollbar-color:var(--theme-scrollbar-thumb--background) var(--theme-scrollbar-track--background);scrollbar-width:thin}}:host *{}:host *::-webkit-scrollbar{width:0.5rem;height:0.5rem}:host *{}:host *::-webkit-scrollbar-track{border-radius:5px;background:var(--theme-scrollbar-track--background)}:host *::-webkit-scrollbar-track:hover{background:var(--theme-scrollbar-track--background--hover)}:host *{}:host *::-webkit-scrollbar-thumb{border-radius:5px;background:var(--theme-scrollbar-thumb--background)}:host *{}:host *::-webkit-scrollbar-thumb:hover{background:var(--theme-scrollbar-thumb--background--hover)}:host *::-webkit-scrollbar-corner{display:none}:host .card{background-color:var(--theme-menu--background);width:100%;box-shadow:none;border:none;border-radius:unset;display:flex;flex-direction:column}:host .card.standaloneAppearance{box-shadow:var(--theme-shadow-4);border-radius:0.25rem}:host .card.rounded{border-radius:4px}:host .card.left{border-radius:4px 0 0 4px;height:100%}:host .card.right{border-radius:0 4px 4px 0;height:100%}:host .card.straight{border-radius:0}:host .card .header-container{width:100%}:host .card .header-container .header{padding:0.75rem 1rem;flex:0 1 auto}:host .card .separator{height:1px;background-color:var(--theme-datepicker-separator--background);width:100%;flex:0 1 auto}:host .card .content{padding:0 1rem 1rem 1rem;flex:1 1 auto;display:flex;flex-direction:column;justify-content:center}:host .card .content--time-picker{padding:0 1rem}:host .card .content--no-padding{padding:0}:host .card .footer-container{width:100%}:host .card .footer-container .footer{padding:1rem}`;
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
    return h(Host, { key: "289080b5249c75edc736046a5ad221d48026e5d0" }, h("div", { key: "1ed983539d3bcc523b1ed09a257576b4039df91c", class: this.cardClasses() }, !this.hideHeader && h("div", { key: "6e3e65760b7a86d80010ae2527c1d8d894dc71a4", class: "header-container" }, h("div", { key: "da2e1eade722ad8cec33483ddd9d2e671a77a955", class: "header" }, h("slot", { key: "6827d46897a68e0ca11b1e2ea3b3d80fd5f55b71", name: "header" })), h("div", { key: "1c5da53871038ecd0181290ac8a8252e96b47cc0", class: "separator" })), h("div", { key: "a848fbd6e1ca7f8093f988d5f4dd45672d27e9f2", class: {
      content: true,
      "content--time-picker": this.timePickerAppearance,
      "content--no-padding": this.noPadding
    } }, h("slot", { key: "45bc8172ac6ebee53ff34078f1d93fb10aaabab1" })), this.hasFooter && h("div", { key: "ddee781fb1860b60d7acf73548b8e952106740b8", class: "footer-container" }, h("div", { key: "356280fe315163d4a86bc6798b7917ccb75101b7", class: "separator" }), h("div", { key: "81a8be6aaa1ade1a686ae43aacc9b4c5990f05b5", class: "footer" }, h("slot", { key: "d197efc24f44d7a4c6759cd19877287fb4997391", name: "footer" })))));
  }
};
DateTimeCard.style = dateTimeCardCss();
export {
  DateTimeCard as ix_date_time_card
};
