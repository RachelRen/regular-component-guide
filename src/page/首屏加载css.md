# 首屏无阻碍加载css

如果把css文件加在`head`标签中，这样的css是会阻碍渲染的。这个时候当html页面被加载到网络上，时，他是从上到下被逐行解析的，当浏览器解析到`link`标签时，它将立即开始下载css样式表，在完成之前不会渲染页面。
如果css文件过大，那么用户必须等待css完全下载完才能看到页面。但是如果直接把css文件的`link`放到`body`中，虽然能防止阻塞渲染，但是页面会渲染出没有加载任何css的“丑页面”。

## 解决的方案
内嵌关键css样式
预加载非关键css

```
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width,initial-scale=1">
  <title>Bootstrap Critical</title>
  <style type="text/css">
    /* 关键CSS通过内部样式表方式引入 */
    body {
      font-family: Helvetica Neue,Helvetica,Arial,sans-serif;
      font-size: 14px;
      line-height: 1.42857;
      color: #333;
      background-color: #fff;
    }
    ...
  </style>
  <link href="/style.96106fab.css" rel="preload" as="style" onload="this.rel='stylesheet'">
  <noscript>
      <link href="/style.96106fab.css" rel="stylesheet">
  </noscript>
  <script>
    /*用来加载非关键CSS的脚本*/
  </script>
</head>
<body>
  <!-- 这里是App的内容 -->
  <script type="text/javascript" src="/build_main.js"></script>
</body>
</html>
```
使用[critical](https://github.com/addyosmani/critical)

参考文件 [关键CSS和Webpack: 减少阻塞渲染的CSS的自动化解决方案](https://segmentfault.com/a/1190000011503284?utm_source=weekly&utm_medium=email&utm_campaign=email_weekly)
