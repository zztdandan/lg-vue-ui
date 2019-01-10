# lg-vue-ui

>柳州钢铁集团公司所用，基于element.ui封装的控件库，控件的api说明可以使用
```
npm run dev
```
运行的测试页面查看。该测试页面是各控件的文档。


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

## 在项目中使用

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
