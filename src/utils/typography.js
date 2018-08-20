import Typography from 'typography'

const theme = {
  baseFontSize: '18px',
  baseLineHeight: 1.35,
  googleFonts: [
    {
      name: 'Roboto Slab',
      styles: ['400', '700'],
      subset: ['cyrillic'],
    },
    {
      name: 'Fira Sans Condensed',
      styles: ['400', '700'],
      subset: ['cyrillic'],
    },
  ],
  headerFontFamily: ['Roboto Slab', 'sans-serif'],
  bodyFontFamily: ['Fira Sans Condensed', 'serif'],
}

const typography = new Typography(theme)

// Hot reload typography in development.
if (process.env.NODE_ENV !== 'production') {
  typography.injectStyles()
}

export default typography
