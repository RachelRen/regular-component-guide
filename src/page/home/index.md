# regular-component

这是一个基于`Regularjs`的组件库，现在主要用在DAHR系统中。


## 特性

- 根据antd的风格，符合大部分的视觉风格
- 支持ES2015

## 安装

### 使用`npm`安装

```
npm install regular-component
```

### 浏览器引入

使用`script`和`link`将相应的`js`和`css`引用进来。

在`regular-component`提供的包中，体统了`components.min.js`和`index.css`。可以直接引入使用。


## 示例

```
import {Calendar} from 'regular-component';

const calendar = new Calendar();
calendar.$inject(el);


```

## github地址

[regular-component](https://github.com/RachelRen/regular-component)
