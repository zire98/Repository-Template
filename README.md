# Repository Template – Webpack + ESM
![License](https://img.shields.io/badge/license-ISC-blue.svg)
A modern **Webpack 5 template** with native **ES Modules (import/export)**, ready for development, production builds, and deployment to **GitHub Pages**.

---

## ✨ Features
- ⚡ Webpack 5 with **ESM (`import`/`export`)**
- 📦 Development & production configs (`webpack.dev.js`, `webpack.prod.js`)
- 🔥 Hot Module Replacement via `webpack-dev-server`
- 🧹 Auto-cleaned `dist/` folder with hashed bundle filenames
- 🎨 CSS support with `style-loader` + `css-loader`
- 🖼️ Asset modules for **images** and **fonts**
- 🌐 Easy deploy to **GitHub Pages** (`npm run deploy`)

---

## 📂 Project structure
```
├── src/
│ ├── assets/
│ │ ├── img/ # images
│ │ └── fonts/ # fonts
│ ├── index.html # HTML template
│ └── index.js # main JS entry
├── webpack.common.js
├── webpack.dev.js
├── webpack.prod.js
├── package.json
└── dist/ # generated build (ignored by git)
```

---

## 🚀 Getting Started

### 1. Clone this repo
```bash
git clone https://github.com/zire98/Repository-Template.git
cd Repository-Template
```
### 2. Install dependencies
```bash
npm install 
```
### 3. Run in development mode
```bash
npm run dev
```
### 4. Run for production
```bash
npm run build
```
### 5. Deploy to GitHub Pages
```bash
npm run deploy
```

---

## 🖼️ Importing assets

### Images
```js
import logoUrl from "./assets/img/logo.png";

const img = new Image();
img.src = logoUrl;
document.body.appendChild(img);
```
### Fonts
```css
@font-face {
  font-family: "MyFont";
  src: url("./assets/fonts/my-font.woff2") format("woff2");
}

body {
  font-family: "MyFont", sans-serif;
}
```

---

## 🛠️ Scripts

- `npm run dev` → Start dev server with HMR

- `npm run build` → Build production bundle

- `npm run deploy` → Build & deploy to GitHub Pages
