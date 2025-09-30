import { r as registerInstance, h, H as Host, g as getElement } from "./global-DaepF4XF.js";
import { c as createMutationObserver } from "./mutation-observer-CX81WQtk-DFcmhOTk.js";
import { c as convertToRemString } from "./rwd.util-pXYAoEyc-B7dE3uhl.js";
import { a as anime } from "./anime.es-Ou74PMQs-BIGLVYOB.js";
const eventListCss = ":host{display:block;position:relative}:host *,:host *::after,:host *::before{box-sizing:border-box}:host ::-webkit-scrollbar-button{display:none}@-moz-document url-prefix(){:host *{scrollbar-color:var(--theme-scrollbar-thumb--background) var(--theme-scrollbar-track--background);scrollbar-width:thin}}:host ::-webkit-scrollbar{width:0.5rem;height:0.5rem}:host ::-webkit-scrollbar-track{border-radius:5px;background:var(--theme-scrollbar-track--background)}:host ::-webkit-scrollbar-track:hover{background:var(--theme-scrollbar-track--background--hover)}:host ::-webkit-scrollbar-thumb{border-radius:5px;background:var(--theme-scrollbar-thumb--background)}:host ::-webkit-scrollbar-thumb:hover{background:var(--theme-scrollbar-thumb--background--hover)}:host ::-webkit-scrollbar-corner{display:none}:host(.item-size-l){--event-list-item-height:6.5rem;--event-list-item-content-white-space:normal}:host(.compact){--event-list-item-border-radius:0;--event-list-item-margin-bottom:0}";
const EventList = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.mutationObserver = createMutationObserver(this.onMutation.bind(this));
    this.itemHeight = "S";
    this.compact = false;
    this.animated = true;
    this.chevron = false;
  }
  watchChevron(chevron) {
    this.handleChevron(chevron);
  }
  componentDidLoad() {
    if (this.animated) {
      this.triggerFadeIn();
    }
    if (!Number.isNaN(Number(this.itemHeight))) {
      const height = convertToRemString(this.itemHeight);
      this.hostElement.querySelectorAll("ix-event-list-item").forEach((item) => {
        this.setCustomHeight(item, height);
      });
    }
    this.handleChevron(this.chevron);
    this.mutationObserver.observe(this.hostElement, {
      childList: true,
      subtree: true
    });
  }
  onMutation(mutationRecords) {
    this.triggerFadeOut().then(() => {
      if (!Number.isNaN(Number(this.itemHeight))) {
        const height = convertToRemString(this.itemHeight);
        const eventListItems = this.findEventListItems(mutationRecords);
        eventListItems.forEach((item) => this.setCustomHeight(item, height));
      }
      this.handleChevron(this.chevron);
      this.triggerFadeIn();
    });
  }
  findEventListItems(mutationRecords) {
    const eventListItems = [];
    mutationRecords.forEach((mutation) => {
      if (mutation.type !== "childList") {
        return;
      }
      mutation.addedNodes.forEach((node) => {
        const element = node;
        if (element.tagName === "IX-EVENT-LIST-ITEM") {
          eventListItems.push(element);
        }
      });
    });
    return eventListItems;
  }
  setCustomHeight(item, height) {
    item.style.setProperty("--event-list-item-height", height);
  }
  triggerFadeOut() {
    return new Promise((resolve) => {
      if (!this.animated) {
        resolve();
      }
      const keyframes = [{ opacity: 1, easing: "easeInSine" }, { opacity: 0 }];
      const listElement = this.hostElement.shadowRoot.querySelector("ul");
      anime({
        targets: listElement,
        opacity: keyframes,
        duration: EventList.fadeOutDuration,
        complete: () => {
          resolve();
        }
      });
    });
  }
  triggerFadeIn() {
    if (!this.animated) {
      return;
    }
    const listItems = this.hostElement.querySelectorAll("ix-event-list-item");
    listItems.forEach((e, i) => {
      const delay = i * 80;
      const offset = delay / (delay + EventList.fadeInDuration);
      anime({
        targets: e,
        offset,
        duration: EventList.fadeInDuration + delay,
        opacity: [0, 1],
        easing: "easeInOutSine",
        delay,
        autoplay: true
      });
    });
  }
  handleChevron(chevron) {
    const listItems = this.hostElement.querySelectorAll("ix-event-list-item");
    listItems.forEach((e) => {
      if (chevron) {
        e.setAttribute("chevron", "true");
      } else if (chevron !== void 0) {
        e.removeAttribute("chevron");
      }
    });
  }
  render() {
    return h(Host, { key: "d65b84a521b9ee53cbd4f4fa353c4161257c175b", class: {
      "item-size-s": this.itemHeight === "S",
      "item-size-l": this.itemHeight === "L",
      compact: this.compact
    } }, h("div", { key: "53d66cb0234e75c3152c53a445e7fb61b5e39440", role: "list" }, h("slot", { key: "16ce6ba7fb44794b23a52d45818b5927c5475d15" })));
  }
  get hostElement() {
    return getElement(this);
  }
  static get watchers() {
    return {
      "chevron": ["watchChevron"]
    };
  }
};
EventList.fadeOutDuration = 50;
EventList.fadeInDuration = 150;
EventList.style = eventListCss;
export {
  EventList as ix_event_list
};
