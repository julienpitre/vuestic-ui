export const enum ThemeName {
  DEFAULT = 'DEFAULT',
  CORPORATE = 'CORPORATE',
}

export const ThemeNameIterator = [
  ThemeName.DEFAULT,
  ThemeName.CORPORATE,
]

export const COLOR_THEMES: Record<ThemeName, Record<string, string>> = {
  [ThemeName.DEFAULT]: {
    primary: '#2550C0',
    secondary: '#767C88',
    background: '#f4f8fa',
    success: '#40e583',
    info: '#2c82e0',
    danger: '#DE1041',
    warning: '#FFAC0A',
    gray: '#babfc2',
    dark: '#1B1A1F',
    white: '#ffffff',
  },
  [ThemeName.CORPORATE]: {
    primary: '#46DA8A',
    secondary: '#042F83',
    success: '#1FBDA1',
    info: '#71baff',
    danger: '#DE1041',
    warning: '#ffd652',
    gray: '#8396a5',
    dark: '#34495e',
  },
}
