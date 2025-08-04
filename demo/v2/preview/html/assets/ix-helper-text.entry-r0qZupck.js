import { r as registerInstance, h, H as Host, g as getElement } from "./global-DaepF4XF.js";
import { c as createClassMutationObserver, a as checkFieldClasses } from "./validation-C17ol6-l-BcEywiHU.js";
import { H as HelperText$1 } from "./helper-text-util-NeawqsVC-DFFGxzZq.js";
import "./index-CB6MK0tq-MglExpDl.js";
const helperTextCss = ":host{display:block}:host .bottom-text{display:flex;position:relative;align-items:flex-start;justify-content:flex-start;gap:0.25rem;margin-right:0.25rem}:host .text-icon{margin:0.125rem}:host .text-icon.invalid{color:var(--theme-helper-icon--color--invalid)}:host .text-icon.info{color:var(--theme-helper-icon--color--info)}:host .text-icon.warning{color:var(--theme-helper-icon--color--warning)}:host .text-icon.valid{color:var(--theme-helper-icon--color--valid)}";
const HelperText = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.validationResults = {
      isInfo: false,
      isInvalid: false,
      isValid: false,
      isWarning: false,
      isInvalidByRequired: false
    };
    this.observer = new MutationObserver(() => this.checkForRequired());
  }
  connectedCallback() {
    this.observer.observe(window.document, {
      childList: true,
      subtree: true
    });
  }
  disconnectedCallback() {
    if (this.observer) {
      this.observer.disconnect();
    }
  }
  componentWillRender() {
    this.checkForRequired();
  }
  async checkForRequired() {
    if (!this.htmlFor) {
      return;
    }
    const forElement = document.getElementById(this.htmlFor);
    if (!forElement) {
      return;
    }
    if (this.classObserver) {
      this.classObserver.destroy();
    }
    this.classObserver = createClassMutationObserver(forElement, () => {
      this.validationResults = checkFieldClasses(forElement);
    });
    this.validationResults = checkFieldClasses(forElement);
  }
  render() {
    return h(Host, { key: "5a8e47a72ee409b1edb57d76d7affa48f61cd760" }, h(HelperText$1, Object.assign({
      key: "9a446b15f14ec08b2cdf7c680a858acd136d874b",
      helperText: this.helperText,
      invalidText: this.invalidText,
      validText: this.validText,
      infoText: this.infoText,
      warningText: this.warningText
    }, this.validationResults)));
  }
  get hostElement() {
    return getElement(this);
  }
};
HelperText.style = helperTextCss;
export {
  HelperText as ix_helper_text
};
