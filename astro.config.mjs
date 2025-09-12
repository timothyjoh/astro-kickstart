// @ts-check
import { defineConfig, envField } from 'astro/config'
import react from '@astrojs/react'
import mdx from '@astrojs/mdx'
import tailwindcss from '@tailwindcss/vite'
import vercel from '@astrojs/vercel'

// https://astro.build/config
export default defineConfig({
  integrations: [react(), mdx()],
  vite: {
    plugins: [tailwindcss()],
  },
  output: 'server',
  adapter: vercel(),
  env: {
    schema: {
      PUBLIC_INSTANTDB_APP_ID: envField.string({
        context: 'client',
        access: 'public',
      }),
    },
  },
})
