# Measurements and units

> In industrial settings, accurate measurements are vital for ensuring process efficiency, safety and product quality. These measurements range from basic dimensions, like length, width, and height, to complex parameters such as temperature, pressure, and flow rate. Proper unit writing is essential to help users interpret data correctly and make informed decisions.

## General rules

Use the same measurement format and style throughout your user interface and consider localization conflicts. Write out measurement abbreviations in full if there is any chance users will not understand.

- British Thermal Unit (BTU): 1
- Nautical Mile (nmi): 8

- BTU: 1
- nmi: 8

Avoid line breaks between the value and the unit by using a protected (non-breaking) space. Use the singular when talking about a specific number and in abbreviations. Use lower case as the default for most unit abbreviations.

- 200 kg
- 20 kg
- 4 in
- 200 g

- 200kg
- 20 kgs
- 4 in.
- 200 G

Use upper case for unit abbreviations named after people and lower case when the abbreviation is written out in full.

- 6 volts
- 6 V

- 6 Volts
- 6 v

| Person | Unit abbreviation |
| ------ | ----------------- |
| Newton | N                 |
| Pascal | Pa                |
| Watt   | W                 |
| Volta  | V                 |
| Joule  | J                 |
| Hertz  | Hz                |
| Ampere | A                 |

Use a slash to show how compound units are divided for clarity.

- km/h
- A/m

- km-h

## Exceptions

Use "L" (liter) instead of lower case "l" only if there is any doubt users will confuse it with "1".

- 2 L
- 11 L
- 2 l

- 11 l

Use upper case "B" to abbreviate byte and lower case "b" to abbreviate bit. Use M for mega, G for giga and T for tera to distinguish from m (milli), g (gram) and t (ton).

- 120 MB (megabytes)
- 120 Mb (megabits)
- 1 t
- 1 TB
- 1 THz

- 1 T

## Volume

Use superscript to indicate cubed measurements.

- m³
- cm³

- m3
- cm3

Use the plain text caret symbol (^) when superscript is not possible in your application.

- m^3

- m3

Use mcg to abbreviate microgram instead of the Greek letter mu (μ).

- 1000 mcg

- 1000 μg

## Temperature

Use a non-breaking space (Ctrl + Shift + Space) between the number and the degree symbol.

- 23 °C

- 23°C
- 23° C

Use the degree symbol (°) before the initial letter of the temperature scale without a space.

- 23 °C

- 23 C°

## Web

Use "px" in lower case to abbreviate pixels with a space for readability without periods after px, pt and dpi (dots per inch).

- 45 px
- 1280 x 780 px
- 4 pt

- 45PX
- 1280x780px
- 4pt.

## Related

- [Numbers and percentages](numbers.mdx)
- [Number input](../../../components/input-number/index.mdx)
- [KPI](../../../components/kpi/index.mdx)
- [Key value](../../../components/key-value/index.mdx)
- [AG Grid](../../../components/grid/index.mdx)
- [HTML Table](../../../components/html-grid/index.mdx)
- [Charts](../../../components/charts-overview/index.mdx)
