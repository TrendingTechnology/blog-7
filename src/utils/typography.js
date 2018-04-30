import Typography from 'typography'

const theme = {
  baseFontSize: '18px',
  baseLineHeight: 1.666,
  headerFontFamily: ['Roboto Slab', 'sans-serif'],
  bodyFontFamily: ['Fira Sans Condensed', 'serif'],
}

const typography = new Typography(theme)

// Hot reload typography in development.
if (process.env.NODE_ENV !== 'production') {
  typography.injectStyles()
}

export default typography
