# react hooks + typescript frame

此框架基于：  
https://zhuanlan.zhihu.com/p/59023070  
https://zhuanlan.zhihu.com/p/59067365

---

## 配置 alias

在正常的 webpack 配置基础上还要在 tsconfig.json 里面配置 baseUrl 和 paths

---

# package.json 里面部分插件说明

mini-css-extract-plugin：将把我们编译的所有 SCSS 编译成 CSS 并将它们放在一个新文件中，而不是内联它们。需要区别 extract-text-webpack-plugin  
css-loader：将通过解析我们拥有的任何导入和 URL 来加载我们的 CSS  
sass-loader：加载我们的 sass 或 SCSS  
node-sass：将我们的 SCSS 编译为 CSS  
html-webpack-plugin：创建 html 文件  
mini-css-extract-plugin：把 css 提取为单独的文件  
source-map-loader：格式化 devtool 里面的代码， 使其可读

## postcss 插件

autoprefixer：根据当前不同浏览器支持的特性来为你添加前缀（使用最新的版本有个 bug， 目前采用降级的方法：https://github.com/parcel-bundler/parcel/issues/5160）
