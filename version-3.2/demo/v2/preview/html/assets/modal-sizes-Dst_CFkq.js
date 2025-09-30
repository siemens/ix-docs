var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => {
  __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
  return value;
};
import "./global-DaepF4XF.js";
import "./index-izCz6i3r.js";
import { s as showModal, d as dismissModal } from "./modal-DTeAn2rp-C0o4FQ8m.js";
import "./init-D14Q4inb.js";
import "./logical-filter-operator-BH3f5fa3-983MLV_l.js";
import "./flip-tile-state-BQ6999e5-4Q8a8MuB.js";
import "./upload-file-state-BGzrnl_l-DLdhtkd7.js";
import "./animation-Dp15M30K-JKj3Fz7Y.js";
import "./theme-switcher-BTKjoGYj-DH1_ZAJ5.js";
import "./typed-event-BdCnOrqW-CWsLM0S_.js";
import "./index-CB6MK0tq-MglExpDl.js";
const modalSizes = "";
function createExampleModal() {
  const name = "modal-example";
  window.customElements.define(
    name,
    class extends HTMLElement {
      constructor() {
        super();
        __publicField(this, "isInitalRender", false);
        this.size = "360";
      }
      connectedCallback() {
        if (this.isInitalRender) {
          return;
        }
        this.isInitalRender = true;
        this.firstRender();
      }
      firstRender() {
        const modalTemplate = document.getElementById(
          "modal-example-template"
        );
        const template = modalTemplate.content.cloneNode(true);
        const button = template.querySelector("ix-button");
        button.innerText = `Modal with size ${this.size}`;
        button.addEventListener("click", () => dismissModal(this));
        this.append(template);
      }
    }
  );
  return name;
}
(async function() {
  const exampleModalName = createExampleModal();
  await window.customElements.whenDefined("ix-button");
  const buttons = document.querySelectorAll("ix-button");
  buttons.forEach(
    (button) => button.addEventListener("click", async () => {
      const customModal = document.createElement(exampleModalName);
      customModal.size = button.getAttribute("data-modal-size");
      await showModal({
        content: customModal,
        size: customModal.size
      });
    })
  );
})();
