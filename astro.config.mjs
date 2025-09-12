// @ts-check
import { defineConfig, envField } from 'astro/config'
import react from '@astrojs/react'
import vercel from '@astrojs/vercel'
import tailwindcss from '@tailwindcss/vite'

// https://astro.build/config
export default defineConfig({
  integrations: [react()],
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
