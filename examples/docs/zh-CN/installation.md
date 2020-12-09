## 安装

### npm 安装

推荐使用 npm 的方式安装，它能更好地和 [webpack](https://webpack.js.org/) 打包工具配合使用。

```shell
npm i yx-plus -S 
or
yarn add yx-plus
```

### CDN

目前可以通过 [unpkg.com/yx-plus](https://unpkg.com/yx-plus/) 获取到最新版本的资源，在页面上引入 js 和 css 文件即可开始使用。

```html
<!-- 引入样式 -->
<link rel="stylesheet" href="https://unpkg.com/yx-plus/lib/theme-chalk/index.css">
<!-- 引入组件库 -->
<script src="https://unpkg.com/yx-plus/lib/yx.umd.min.js"></script>
```

:::tip
我们建议使用 CDN 引入 yx-plus 的用户在链接地址上锁定版本，以免将来 yx-plus 升级时受到非兼容性更新的影响。锁定版本的方法请查看 [unpkg.com](https://unpkg.com)。
:::

### Hello world

通过 CDN 的方式我们可以很容易地使用 yx-plus 写出一个 Hello world 页面。[在线演示](https://codepen.io/sauron220/pen/bGwwELJ)

<iframe height="265" style="width: 100%;" scrolling="no" title="YX-PLUS demo" src="https://codepen.io/sauron220/embed/bGwwELJ?height=265&theme-id=light&default-tab=html,result" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href='https://codepen.io/sauron220/pen/bGwwELJ'>YX-PLUS demo</a> by Sauron220
  (<a href='https://codepen.io/sauron220'>@sauron220</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

如果是通过 npm 安装，并希望配合 webpack 使用，请阅读下一节：[快速上手](/#/zh-CN/component/quickstart)。
