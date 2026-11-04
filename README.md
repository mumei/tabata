# Vue 3 + TypeScript + Vite

## Development

Use Node.js 26.13.0 (see `.node-version`) and npm 11.20.0 or newer.
With Nodebrew, run `nodebrew use v26.13.0` before the commands below.
CI reads the same Node.js version file.

```sh
npm ci
npm run dev
```

Run `npm run check` for formatting, lint, type checking, and the production build.
Run `npm audit` to check the full dependency tree for known vulnerabilities.

`npm run build` uses `vite-ssg` to generate `dist/index.html` and `dist/404.html`
with their page content already in the HTML. The build also verifies that the
menu, prices, address, and opening hours are present without running JavaScript,
and that the 404 page has `noindex`. GitHub Pages serves these generated files.
Use `npm run preview` to check the generated pages locally; `npm run dev` keeps
Vite's usual development server and hot reloading.

TypeScript stays on the 6.x line because `vue-tsc` and `typescript-eslint`
still require the JavaScript compiler API that TypeScript 7 no longer includes.
Images use `vite-imagetools` to generate JPEG and WebP variants at build time.
The `minimatch` override supplies the security fixes not yet included in the
version ranges used by ESLint and typescript-eslint.

This template should help get you started developing with Vue 3 and TypeScript in Vite. The template uses Vue 3 `<script setup>` SFCs, check out the [script setup docs](https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup) to learn more.

## Recommended IDE Setup

- [VS Code](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur) + [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin).

## Type Support For `.vue` Imports in TS

TypeScript cannot handle type information for `.vue` imports by default, so we replace the `tsc` CLI with `vue-tsc` for type checking. In editors, we need [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin) to make the TypeScript language service aware of `.vue` types.

If the standalone TypeScript plugin doesn't feel fast enough to you, Volar has also implemented a [Take Over Mode](https://github.com/johnsoncodehk/volar/discussions/471#discussioncomment-1361669) that is more performant. You can enable it by the following steps:

1. Disable the built-in TypeScript Extension
   1. Run `Extensions: Show Built-in Extensions` from VSCode's command palette
   2. Find `TypeScript and JavaScript Language Features`, right click and select `Disable (Workspace)`
2. Reload the VSCode window by running `Developer: Reload Window` from the command palette.
