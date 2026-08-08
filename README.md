# Modular UI Platform
[![GitHub Clones](https://img.shields.io/badge/dynamic/json?color=success&label=Clone&query=count&url=https://gist.githubusercontent.com/eugenia-vitinschii/9637a0689d3945345cdf88d86640dae6/raw/clone.json&logo=github)](https://github.com/MShawon/github-clone-count-badge)

A full-stack starter template for developing a platform with a modular interface, built-in authentication, and custom UI-kit integration.

#### Tech Stack:
* **Frontend:** Vue 3 (Composition API), Vite, TypeScript, Pinia, Sass (Mixins/Variables), Zod, `modular-ui-kit`
* **Backend:** Node.js (ESM / NodeNext), Express 5, TypeScript, MongoDB (Mongoose), JWT Authentication, `tsx`

---
#### Install Dependencies
Run the following command in the root directory to automatically install all packages for the root, frontend, and backend:

```
npm install
```

#### Environment Variables (.env)
Create a .env file inside the /backend folder and specify the local server port:


```
PORT=5000
```

#### Run Development Servers
Launch both the frontend (Vite) and the backend (Express) simultaneously with a single command from the root:

```
npm run dev
```


#####  /backend create .env (example + read data base)
```
PORT=4000
SECRET=your_jwt_secret
MONGO_URI=mongodb+srv://tester:CH2vaGB6mgHoIRWx@knowledge-base.lakfycb.mongodb.net/modular-ui-platform?appName=knowledge-base
```

### modular-ui-kit-vue
⚠️ Upgrading to Version 2.0.0 (Breaking Changes)
If you are upgrading from v1.x and your components do not use the Base prefix (e.g., you were using BaseInput instead of MukInput), please follow these steps to perform a clean reinstallation and flush the package cache:

Uninstall the old version:

```
npm uninstall modular-ui-kit-vue
```

Clear the npm cache:

```
npm cache clean --force
```

Install the new version 2.0.0:

```
npm i modular-ui-kit-vue@2.0.0 --legacy-peer-deps
```