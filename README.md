# emotion demo

官网： [https://emotion.sh/docs/css-prop#babel-preset](https://emotion.sh/docs/css-prop#babel-preset)

## 在 vite 中配置

1. 在 `tsconfig.json` 中添加 `jsx` 的模块解析器：

```json
  "jsxImportSource":"@emotion/react"
```

> 这样 ts 才不会报错。当然如果不用 ts 就不用配置这个了

2. 在 `vite.config.js` 中添加相关插件：

```js
plugins: [
    react({
      jsxImportSource: '@emotion/react',
      babel: {
        plugins: ['@emotion/babel-plugin'],
      },
    }),
  ],
```

> 其实就是做了 babel 的配置，本来是通过`.babelrc`来进行配置。react 插件将 babel 配置进行了封装。

## 基本使用

如上配置完成之后，就可以直接引入`@emotion/react`中的方法进行相关使用。

emotion 中最重要的一个使用方式，就是通过`css props`去使用。

`css props` 也分为两种使用风格：

1.` Object style`: 对象风格。这种使用方式就比较好理解，和我们平时使用 `react` 写 `style` 类似。 2. `String style`: 字符串风格。 这种方式需要引用`@emotion/react`中的`css`函数。

### Object style

```tsx
<button
  css={{
    fontSize: 22,
    color: '#f10215',
    border: '1px solid blue',
    marginBottom: 10,
    '&:hover': {
      color: 'purple',
    },
  }}
>
  Object style
</button>
```

这种方式比较简单粗暴

### String style

```tsx
import { css } from '@emotion/react';

const Button = ({ color = 'red' }) => {
  return (
    <>
      <div
        css={css`
          padding: 12px;
          width: 120px;
          background-color: hotpink;
          border-radius: 4px;
          &:hover {
            color: ${color};
          }
        `}
      >
        字符串类型的样式
      </div>
    </>
  );
};

export default Button;
```

这种字符串风格，就需要借助`css`函数来实现。

这里我们需要注意的是`css`函数返回的不是一个单纯的类名。而是一个经过处理的扁平化的样式结构，它可以作为一个变量与其他的字符串样式进行组合。

可以看下`css`的返回值：

```js
const style = css`
  padding: 12px;
  width: 120px;
  background-color: hotpink;
  border-radius: 4px;
  &:hover {
    color: ${color};
  }
`;
console.log(style);
```

** 返回值：**

```json
{
  "name": "fvbo6n-style",
  "styles": "padding:12px;width:120px;background-color:hotpink;border-radius:4px;&:hover{color:red;};label:style;",
  "map": "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9scWgvbHFoL3JlYWN0LWRlbW8tdml0ZS9zcmMvY29tcG9uZW50cy9idXR0b24vYnV0dG9uLnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFHbUIiLCJmaWxlIjoiL1VzZXJzL2xxaC9scWgvcmVhY3QtZGVtby12aXRlL3NyYy9jb21wb25lbnRzL2J1dHRvbi9idXR0b24udHN4Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3NzIH0gZnJvbSAnQGVtb3Rpb24vcmVhY3QnO1xuXG5jb25zdCBCdXR0b24gPSAoeyBjb2xvciA9ICdyZWQnIH0pID0+IHtcbiAgY29uc3Qgc3R5bGUgPSBjc3NgXG4gICAgcGFkZGluZzogMTJweDtcbiAgICB3aWR0aDogMTIwcHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogaG90cGluaztcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgJjpob3ZlciB7XG4gICAgICBjb2xvcjogJHtjb2xvcn07XG4gICAgfVxuICBgO1xuICBjb25zb2xlLmxvZyhzdHlsZSk7XG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxidXR0b25cbiAgICAgICAgY3NzPXt7XG4gICAgICAgICAgZm9udFNpemU6IDIyLFxuICAgICAgICAgIGNvbG9yOiAnI2YxMDIxNScsXG4gICAgICAgICAgYm9yZGVyOiAnMXB4IHNvbGlkIGJsdWUnLFxuICAgICAgICAgIG1hcmdpbkJvdHRvbTogMTAsXG4gICAgICAgICAgJyY6aG92ZXInOiB7XG4gICAgICAgICAgICBjb2xvcjogJ3B1cnBsZScsXG4gICAgICAgICAgfSxcbiAgICAgICAgfX1cbiAgICAgID5cbiAgICAgICAgT2JqZWN0IHN0eWxlXG4gICAgICA8L2J1dHRvbj5cbiAgICAgIDxkaXZcbiAgICAgICAgY3NzPXtjc3NgXG4gICAgICAgICAgcGFkZGluZzogMTJweDtcbiAgICAgICAgICB3aWR0aDogMTIwcHg7XG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogaG90cGluaztcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgICAgICAgJjpob3ZlciB7XG4gICAgICAgICAgICBjb2xvcjogJHtjb2xvcn07XG4gICAgICAgICAgfVxuICAgICAgICBgfVxuICAgICAgPlxuICAgICAgICDlrZfnrKbkuLLnsbvlnovnmoTmoLflvI9cbiAgICAgIDwvZGl2PlxuICAgIDwvPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgQnV0dG9uO1xuIl19 */"
}
```
