# openHub

This template should help get you started developing with Vue 3 in Vite.

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur) + [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin).

## Customize configuration

See [Vite Configuration Reference](https://vitejs.dev/config/).

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Compile and Minify for Production

```sh
npm run build
```

# Steps to deploy code to github pages
1. merged code to main branch
1. open VS code from main branch
1. create a production build called 'dist'
   ```sh
   npm run build
   ```
1. push the 'dist' to new or existing gh-pages branch
   ```sh
   git subtree push --prefix dist origin gh-pages
   ```
1. (If have, can skipped to next step) included gh-pages in devDependencies in package.json
   ```sh
   npm install gh-pages --save-dev
   ```
1. deploy app to gh-pages
   ```sh
   npm run deploy
   ```

   RSC: https://mkay11.medium.com/how-to-deploy-your-vite-vue-3-application-in-github-pages-2023-2b842f50576a
