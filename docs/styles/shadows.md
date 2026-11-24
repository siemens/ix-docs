# Shadows

> Shadow tokens add depth and communicate the elevation of temporary and layered surfaces.

Apply a complete system shadow value with `box-shadow`:

```css
.some-example {
  box-shadow: var(--si-sys-color-effects-shadow-30);
}
```

Choose a shadow according to the surface hierarchy. Do not decompose or reconstruct the value: a token can contain multiple shadow layers whose colors adapt to the selected color scheme.

| Token | Description | CSS expression | Source token |
| --- | --- | --- | --- |
| `--si-sys-color-effects-shadow-10` | Subtle elevation. Minimal elevation for slightly raised surfaces. | `var(--si-sys-color-effects-shadow-10)` | `si.sys.color.effects.shadow.10` |
| `--si-sys-color-effects-shadow-20` | Raised surfaces. More noticeable elevation for raised surfaces. | `var(--si-sys-color-effects-shadow-20)` | `si.sys.color.effects.shadow.20` |
| `--si-sys-color-effects-shadow-30` | Floating surfaces such as menus, dropdowns, popovers, and toasts. Usually paired with background-3. | `var(--si-sys-color-effects-shadow-30)` | `si.sys.color.effects.shadow.30` |
| `--si-sys-color-effects-shadow-40` | Overlay surfaces. The highest elevation, typically used for surfaces displayed over a backdrop, such as modals, and for drag previews. | `var(--si-sys-color-effects-shadow-40)` | `si.sys.color.effects.shadow.40` |
