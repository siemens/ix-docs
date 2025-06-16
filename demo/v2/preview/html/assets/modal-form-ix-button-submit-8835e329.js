var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => {
  __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
  return value;
};
import "./global-9b2308da.js";
import "./index-a0b46983.js";
import { s as showModal, d as dismissModal, c as closeModal } from "./modal-hSHQdjTH-a56a8fa0.js";
import "./init-394db2f8.js";
import "./logical-filter-operator-BH3f5fa3-cf778d91.js";
import "./flip-tile-state-BQ6999e5-360bf4fb.js";
import "./upload-file-state-BGzrnl_l-efe6c7ce.js";
import "./animation-Dp15M30K-84b87f65.js";
import "./theme-switcher-CA3k28fo-1ea0d744.js";
import "./typed-event-BdCnOrqW-8705fd69.js";
import "./index-v48bcPT9-71a9ba2b.js";
function createFormModal() {
  const name = "modal-form-example";
  window.customElements.define(
    name,
    class extends HTMLElement {
      constructor() {
        super(...arguments);
        __publicField(this, "isInitalRender", false);
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
          "modal-form-template"
        );
        const template = modalTemplate.content.cloneNode(true);
        const cancelButton = template.querySelector("[data-cancel]");
        const form = template.querySelector("#create-resource-form");
        cancelButton.addEventListener("click", () => {
          dismissModal(this);
        });
        form.addEventListener("submit", (event) => {
          event.preventDefault();
          closeModal(this);
        });
        this.append(template);
      }
    }
  );
  return name;
}
(async function() {
  const formModalName = createFormModal();
  await window.customElements.whenDefined("ix-button");
  const button = document.querySelector("ix-button");
  button.addEventListener("click", async () => {
    const customModal = document.createElement(formModalName);
    await showModal({
      content: customModal
    });
  });
})();
