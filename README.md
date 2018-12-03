# lg-vue-ui

> A Component Library for LiuGang Steel Vue.js Program

## Build Setup

``` bash
# install dependencies
npm run bootstrap

# build new component
npm run build:new componentName

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# run unit tests
npm run unit

# run all tests
npm run test
```

## 安装

- yarn

```bash
yarn add lg-vue-ui
```

- npm 

```bash
npm install lg-vue-ui --save
```

## 使用

```js
import Lgui from 'lg-vue-ui' // 引入组件库
import 'lg-vue-ui/lib/theme/index.css' // 引入样式库

Vue.use(Lgui)
```

## 按需引入，需要先安装插件

- yarn

```bash
yarn add babel-plugin-import --dev
```

- npm 

```bash
npm install babel-plugin-import --save-dev
```

```js
import {ButtonDemo} from 'lg-vue-ui';
import 'lg-vue-ui/lib/theme/button-demo.css';

Vue.use(ButtonDemo);
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
