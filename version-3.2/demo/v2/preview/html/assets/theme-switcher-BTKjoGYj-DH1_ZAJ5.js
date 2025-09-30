import { T as TypedEvent } from "./typed-event-BdCnOrqW-CWsLM0S_.js";
const dataIxTheme = "data-ix-theme";
const dataIxColorSchema = "data-ix-color-schema";
class ThemeSwitcher {
  get themeChanged() {
    return this._themeChanged;
  }
  get schemaChanged() {
    return this._schemaChanged;
  }
  hasVariantSuffix(className) {
    return className.endsWith(this.suffixDark) || className.endsWith(this.suffixLight);
  }
  isThemeClass(className) {
    return className.startsWith(this.prefixTheme) && this.hasVariantSuffix(className);
  }
  setTheme(themeName, systemAppearance = false, target = document.body) {
    if (this.isThemeClass(themeName)) {
      this.replaceBodyThemeClass(themeName);
    } else {
      target.setAttribute(dataIxTheme, themeName);
    }
    if (systemAppearance) {
      const currentSystemAppearance = getCurrentSystemAppearance();
      this.setVariant(currentSystemAppearance);
    }
  }
  replaceBodyThemeClass(themeName) {
    const oldThemes = [];
    Array.from(document.body.classList).filter((className) => className && this.isThemeClass(className)).forEach((className) => {
      oldThemes.push(className);
    });
    document.body.classList.remove(...oldThemes);
    document.body.classList.add(themeName);
  }
  toggleMode() {
    const elements = [document.body, document.documentElement];
    const elementWithSchema = elements.find((el) => this.getDataColorSchema(el));
    if (elementWithSchema) {
      const currentSchema = this.getDataColorSchema(elementWithSchema);
      elementWithSchema.setAttribute(dataIxColorSchema, currentSchema === "dark" ? "light" : "dark");
      return;
    }
    const oldThemes = [];
    Array.from(document.body.classList).filter((className) => className && this.isThemeClass(className)).forEach((className) => {
      oldThemes.push(className);
    });
    if (oldThemes.length === 0) {
      document.body.classList.add(this.getOppositeMode(this.defaultTheme));
      return;
    }
    oldThemes.forEach((themeName) => {
      document.body.classList.replace(themeName, this.getOppositeMode(themeName));
    });
  }
  getDataColorSchema(target) {
    return target.getAttribute(dataIxColorSchema);
  }
  getCurrentTheme() {
    var _a;
    return (_a = Array.from(document.body.classList).find((className) => this.isThemeClass(className))) !== null && _a !== void 0 ? _a : `theme-${document.body.getAttribute(dataIxTheme) || document.documentElement.getAttribute(dataIxTheme) || "classic"}-${document.body.getAttribute(dataIxColorSchema) || document.documentElement.getAttribute(dataIxColorSchema) || getCurrentSystemAppearance()}`;
  }
  setVariant(variant = getCurrentSystemAppearance(), target = document.body) {
    if (this.getDataColorSchema(target)) {
      target.setAttribute(dataIxColorSchema, variant);
      return;
    }
    const currentTheme = this.getCurrentTheme();
    document.body.classList.remove(currentTheme);
    if (currentTheme.endsWith(this.suffixDark)) {
      document.body.classList.add(currentTheme.replace(/-dark$/g, `-${variant}`));
    }
    if (currentTheme.endsWith(this.suffixLight)) {
      document.body.classList.add(currentTheme.replace(/-light$/g, `-${variant}`));
    }
    target.setAttribute(dataIxColorSchema, variant);
  }
  getOppositeMode(themeName) {
    if (themeName.endsWith(this.suffixDark)) {
      return themeName.replace(/-dark$/g, this.suffixLight);
    }
    if (themeName.endsWith(this.suffixLight)) {
      return themeName.replace(/-light$/g, this.suffixDark);
    }
    return "";
  }
  handleMutations(mutations) {
    return mutations.forEach((mutation) => {
      const { target } = mutation;
      target.classList.forEach((className) => {
        var _a;
        if (this.isThemeClass(className) && !((_a = mutation.oldValue) === null || _a === void 0 ? void 0 : _a.includes(className))) {
          this._themeChanged.emit(className);
        }
      });
    });
  }
  registerMutationObservers() {
    if (typeof window === "undefined") {
      return;
    }
    if (!("MutationObserver" in window)) {
      console.warn("ThemeSwitcher not supported by your browser. Missing MutationObserver API");
      return;
    }
    this.mutationObserver = new MutationObserver((mutations) => {
      this.handleMutations(mutations);
    });
    this.mutationObserver.observe(document.documentElement, {
      attributeFilter: ["class"],
      attributeOldValue: true
    });
    this.mutationObserverData = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        const { target } = mutation;
        const theme = target.attributes.getNamedItem(dataIxTheme);
        if ((theme === null || theme === void 0 ? void 0 : theme.value) && mutation.oldValue !== theme.value) {
          this._themeChanged.emit(theme.value);
        }
        const colorSchema = target.attributes.getNamedItem(dataIxColorSchema);
        if ((colorSchema === null || colorSchema === void 0 ? void 0 : colorSchema.value) && mutation.oldValue !== colorSchema.value) {
          this._schemaChanged.emit(colorSchema.value);
        }
      });
    });
    this.mutationObserverData.observe(document.documentElement, {
      attributes: true,
      attributeFilter: [dataIxTheme, dataIxColorSchema]
    });
  }
  constructor() {
    this.prefixTheme = "theme-";
    this.suffixLight = "-light";
    this.suffixDark = "-dark";
    this.defaultTheme = "theme-classic-dark";
    this._themeChanged = new TypedEvent();
    this._schemaChanged = new TypedEvent();
    this.registerMutationObservers();
  }
}
const getCurrentSystemAppearance = () => {
  const matchMedia = window.matchMedia("(prefers-color-scheme: dark)");
  if (matchMedia.matches) {
    return "dark";
  }
  return "light";
};
const themeSwitcher = new ThemeSwitcher();
export {
  themeSwitcher as t
};
