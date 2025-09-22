import daisyui from 'daisyui'
import themeObject from 'daisyui/theme/object.js'

export const daisyuiThemes = Object.keys(themeObject)

const contentGlobs = [
  './src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx}',
  './public/**/*.html'
]

export default {
  content: contentGlobs,
  plugins: [daisyui],
  daisyui: {
    themes: daisyuiThemes
  }
}
