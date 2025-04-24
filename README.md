# Richardson Astro Starter Kit

```sh
npm i
npm run dev
```

## 🚀 Project Structure

Inside of your Astro project, you'll see the following folders and files:

```text
/
├── public/
│   └── favicon.svg
├── src/
│   ├── components/
│   │   └── TodoApp.tsx
│   │   └── Welcome.astro
│   ├── layouts/
│   │   └── Layout.astro
│   └── pages/
│       └── index.astro
└── package.json
```

To learn more about the folder structure of an Astro project, refer to [our guide on project structure](https://docs.astro.build/en/basics/project-structure/).

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |

## Resources

### Fonts

All fonts are installed via NPM from Fontsource. https://fontsource.org/

1. Import fonts at the top of your Astro Layout file eg: `src/layouts/Layout.astro`
2. Add CSS classes to your Astro global css file eg: `src/styles/global.css`

### Components

This project intentionally is setup to use ARIA-tested components as a base from https://ariakit.org/

Secondarily, components from DaisyUI https://daisyui.com/ should be used where pure-tailwind components are sufficient. DaisyUI also allows a mechanism for themeability that we use to create custom themes for our clients and users.

In the case other components are needed, feel free to use Radix and ShadCn components, ensuring that your implementation of them fits with the accessibility standards of the project, and the general look-and-feel and themeable nature that DaisyUI allows.


