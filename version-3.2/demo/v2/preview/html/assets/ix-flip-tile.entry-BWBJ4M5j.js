import { r as registerInstance, c as createEvent, h, H as Host, g as getElement } from "./global-DaepF4XF.js";
import { c as createMutationObserver } from "./mutation-observer-CX81WQtk-DFcmhOTk.js";
import { F as FlipTileState } from "./flip-tile-state-BQ6999e5-4Q8a8MuB.js";
import { t as iconEye } from "./index-CB6MK0tq-MglExpDl.js";
const flipTileCss = ".text-xs{-webkit-font-smoothing:antialiased;-moz-osx-font-smooting:grayscale;font-family:Siemens Sans, sans-serif;font-size:0.625rem;font-weight:400;line-height:1.4em;color:var(--theme-color-std-text)}.text-s{-webkit-font-smoothing:antialiased;-moz-osx-font-smooting:grayscale;font-family:Siemens Sans, sans-serif;font-size:0.75rem;font-weight:400;line-height:1.5em;color:var(--theme-color-std-text)}.text-caption{-webkit-font-smoothing:antialiased;-moz-osx-font-smooting:grayscale;font-family:Siemens Sans, sans-serif;font-size:0.75rem;font-weight:700;line-height:1.5em;color:var(--theme-color-std-text)}.text-caption-single{-webkit-font-smoothing:antialiased;-moz-osx-font-smooting:grayscale;font-family:Siemens Sans, sans-serif;font-size:0.75rem;font-weight:700;line-height:1em;color:var(--theme-color-std-text)}.text-default{-webkit-font-smoothing:antialiased;-moz-osx-font-smooting:grayscale;font-family:Siemens Sans, sans-serif;font-size:0.875rem;font-weight:400;line-height:1.429em;color:var(--theme-color-std-text)}.text-default-single{-webkit-font-smoothing:antialiased;-moz-osx-font-smooting:grayscale;font-family:Siemens Sans, sans-serif;font-size:0.875rem;font-weight:400;line-height:1.143em;color:var(--theme-color-std-text)}.text-default-title{-webkit-font-smoothing:antialiased;-moz-osx-font-smooting:grayscale;font-family:Siemens Sans, sans-serif;font-size:0.875rem;font-weight:700;line-height:1.429em;color:var(--theme-color-std-text)}.text-default-title-single{-webkit-font-smoothing:antialiased;-moz-osx-font-smooting:grayscale;font-family:Siemens Sans, sans-serif;font-size:0.875rem;font-weight:700;line-height:1.143em;color:var(--theme-color-std-text)}.text-l{-webkit-font-smoothing:antialiased;-moz-osx-font-smooting:grayscale;font-family:Siemens Sans, sans-serif;font-size:1rem;font-weight:400;line-height:1.5em;color:var(--theme-color-std-text)}.text-l-single{-webkit-font-smoothing:antialiased;-moz-osx-font-smooting:grayscale;font-family:Siemens Sans, sans-serif;font-size:1rem;font-weight:400;line-height:1.25em;color:var(--theme-color-std-text)}.text-l-title{-webkit-font-smoothing:antialiased;-moz-osx-font-smooting:grayscale;font-family:Siemens Sans, sans-serif;font-size:1rem;font-weight:700;line-height:1.5em;color:var(--theme-color-std-text)}.text-l-title-single{-webkit-font-smoothing:antialiased;-moz-osx-font-smooting:grayscale;font-family:Siemens Sans, sans-serif;font-size:1rem;font-weight:700;line-height:1.25em;color:var(--theme-color-std-text)}.text-h2{-webkit-font-smoothing:antialiased;-moz-osx-font-smooting:grayscale;font-family:Siemens Sans, sans-serif;font-size:1.375rem;font-weight:700;line-height:1.455em;color:var(--theme-color-std-text)}.text-xl{-webkit-font-smoothing:antialiased;-moz-osx-font-smooting:grayscale;font-family:Siemens Sans, sans-serif;font-size:1.375rem;font-weight:400;line-height:1.091em;color:var(--theme-color-std-text)}a{color:var(--theme-color-primary)}@keyframes flip-animation{0%{transform:rotateY(0)}50%{transform:rotateY(90deg)}51%{transform:rotateY(270deg)}100%{transform:rotateY(360deg)}}:host{display:flex;flex-direction:column;perspective:1000px}:host *,:host *::after,:host *::before{box-sizing:border-box}:host ::-webkit-scrollbar-button{display:none}@-moz-document url-prefix(){:host *{scrollbar-color:var(--theme-scrollbar-thumb--background) var(--theme-scrollbar-track--background);scrollbar-width:thin}}:host ::-webkit-scrollbar{width:0.5rem;height:0.5rem}:host ::-webkit-scrollbar-track{border-radius:5px;background:var(--theme-scrollbar-track--background)}:host ::-webkit-scrollbar-track:hover{background:var(--theme-scrollbar-track--background--hover)}:host ::-webkit-scrollbar-thumb{border-radius:5px;background:var(--theme-scrollbar-thumb--background)}:host ::-webkit-scrollbar-thumb:hover{background:var(--theme-scrollbar-thumb--background--hover)}:host ::-webkit-scrollbar-corner{display:none}:host .flip-tile-header{display:flex;align-items:center;height:2.5rem;padding:0 0.5rem 0 1rem}:host .flip-tile-header .header-slot-container{overflow:hidden;text-overflow:ellipsis;white-space:nowrap;flex-grow:1;min-width:0}:host .content-container{flex-grow:1;margin:1rem}:host .flip-tile-container{display:flex;flex-direction:column;height:100%;background-color:var(--theme-blind-base--background);border:solid 1px var(--theme-blind-base--border-color);border-radius:var(--theme-flip-tile--border-radius) var(--theme-flip-tile--border-radius) 0 0;transform-style:preserve-3d}:host .flip-tile-container.flip-animation-active{animation:flip-animation 300ms, ease-in-out}:host .flip-tile-container .footer{display:flex;height:3rem;align-items:center;justify-content:center;padding:0 0.5rem;color:var(--theme-flip-footer--color);background-color:var(--theme-blind-base--background)}:host .flip-tile-container .footer :first-child{overflow:hidden;text-overflow:ellipsis;white-space:nowrap;height:100%}:host .flip-tile-container ::slotted(*){overflow:hidden;text-overflow:ellipsis;white-space:nowrap;display:flex;flex-direction:column;align-items:center;min-width:0}:host .flip-tile-container.primary{border-color:var(--theme-color-primary)}:host .flip-tile-container.primary .footer{background-color:var(--theme-color-primary);color:var(--theme-color-primary--contrast)}:host .flip-tile-container.info{border-color:var(--theme-color-info)}:host .flip-tile-container.info .footer{background-color:var(--theme-color-info);color:var(--theme-color-info--contrast)}:host .flip-tile-container.warning{border-color:var(--theme-color-warning)}:host .flip-tile-container.warning .footer{background-color:var(--theme-color-warning);color:var(--theme-color-warning--contrast)}:host .flip-tile-container.alarm{border-color:var(--theme-color-alarm)}:host .flip-tile-container.alarm .footer{background-color:var(--theme-color-alarm);color:var(--theme-color-alarm--contrast)}:host:hover .flip-tile-container .footer ix-icon{color:var(--theme-color-std-text)}";
const FlipTile = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.toggle = createEvent(this, "toggle", 7);
    this.height = 15.125;
    this.width = 16;
    this.index = 0;
    this.isFlipAnimationActive = false;
    this.ANIMATION_DURATION = 150;
    this.contentItems = [];
  }
  watchIndex(newIndex, oldIndex) {
    if (newIndex === oldIndex) {
      return;
    }
    this.doFlipAnimation(newIndex);
  }
  componentDidLoad() {
    this.observer = createMutationObserver(() => this.updateContentItems());
    this.observer.observe(this.hostElement, {
      childList: true
    });
  }
  componentWillLoad() {
    this.updateContentItems();
    this.updateContentVisibility(this.index);
  }
  disconnectedCallback() {
    if (this.observer) {
      this.observer.disconnect();
    }
  }
  updateContentItems() {
    this.contentItems = Array.from(this.hostElement.querySelectorAll("ix-flip-tile-content"));
  }
  updateContentVisibility(indexVisible) {
    this.contentItems.forEach((content, index) => content.contentVisible = index === indexVisible);
  }
  toggleIndex() {
    let newIndex;
    if (this.index >= this.contentItems.length - 1) {
      newIndex = 0;
    } else {
      newIndex = this.index + 1;
    }
    const { defaultPrevented } = this.toggle.emit(newIndex);
    if (defaultPrevented) {
      return;
    }
    this.doFlipAnimation(newIndex);
  }
  doFlipAnimation(index) {
    if (this.isFlipAnimationActive) {
      return;
    }
    this.isFlipAnimationActive = true;
    setTimeout(() => {
      this.index = index;
      this.updateContentVisibility(this.index);
    }, this.ANIMATION_DURATION);
    setTimeout(() => {
      this.isFlipAnimationActive = false;
    }, 2 * this.ANIMATION_DURATION);
  }
  render() {
    return h(Host, { key: "3c8b5e82f8e30eae687231e2b80d6a131a228b58", style: {
      height: `${this.height}${this.height === "auto" ? "" : "rem"}`,
      "min-height": `${this.height}${this.height === "auto" ? "" : "rem"}`,
      "max-height": `${this.height}${this.height === "auto" ? "" : "rem"}`,
      width: `${this.width}${this.width === "auto" ? "" : "rem"}`,
      "min-width": `${this.width}${this.width === "auto" ? "" : "rem"}`,
      "max-width": `${this.width}${this.width === "auto" ? "" : "rem"}`
    } }, h("div", { key: "4b97ab5909a500ae8039ddff0914f314bb8e43be", class: {
      "flip-tile-container": true,
      info: this.state === FlipTileState.Info,
      warning: this.state === FlipTileState.Warning,
      alarm: this.state === FlipTileState.Alarm,
      primary: this.state === FlipTileState.Primary,
      "flip-animation-active": this.isFlipAnimationActive
    } }, h("div", { key: "62ac29d41376912e5a30c52630b0fe1c9768db61", class: "flip-tile-header" }, h("div", { key: "f4e9084fc61330e0136066ab4e8d049c4527d466", class: "header-slot-container text-l-title" }, h("slot", { key: "4cf95940d03a442beeeadaba3a9f0f4d4add1a37", name: "header" })), h("ix-icon-button", { key: "6a25c28261c8c7c697d039ecfdcf8f7ef377218f", icon: iconEye, variant: "primary", ghost: true, onClick: () => this.toggleIndex(), "aria-label": this.ariaLabelEyeIconButton })), h("div", { key: "66766d47e601db2da83460d57ac1838042860ff7", class: "content-container" }, h("slot", { key: "a0572cacbe7b18bca7847b13689d5c8ebd8fd74a" })), h("div", { key: "b9956308ab59d8562b0cb12fb3b5c29ffccafa59", class: {
      footer: true,
      "contrast-light": this.state === FlipTileState.Warning,
      "contrast-dark": this.state === FlipTileState.Info || this.state === FlipTileState.Alarm
    } }, h("slot", { key: "a58015e58bb5d33cefdd0bea4042ff94359fcc81", name: "footer" }))));
  }
  get hostElement() {
    return getElement(this);
  }
  static get watchers() {
    return {
      "index": ["watchIndex"]
    };
  }
};
FlipTile.style = flipTileCss;
export {
  FlipTile as ix_flip_tile
};
