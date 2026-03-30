import "./global-7ZbTfMw3.js";
import "./index-B_6Kcb-H.js";
import { s as showModal, d as dismissModal, c as closeModal } from "./modal-BJAcx3Qd-CMIZ8YSL.js";
import "./init-6zSVdjuR.js";
import "./logical-filter-operator-BH3f5fa3-983MLV_l.js";
import "./upload-file-state-BGzrnl_l-DLdhtkd7.js";
import "./animation-BLaucX4x-BWLd_Wig.js";
import "./theme-switcher-CpQ8JvHL-B4B-3Xrp.js";
import "./typed-event-BdCnOrqW-CWsLM0S_.js";
import "./index-BBzEV-f4-ChQfUIyc.js";
function createFormModal() {
  const name = "modal-form-example";
  window.customElements.define(
    name,
    class extends HTMLElement {
      isInitalRender = false;
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
