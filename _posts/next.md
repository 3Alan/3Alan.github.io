---
title: 'Next.js学习笔记'
excerpt: '这段时间工作要求将之前的vue的H5活动页面转移到Next.js下面，经过一段时间的研究，总结出了下面的内容。'
coverImage: '/assets/blog/preview/cover.jpg'
date: '2020-03-16T05:35:07.322Z'
ogImage:
  url: '/assets/blog/preview/cover.jpg'
layout: 'cover'
---

这段时间工作要求将之前的vue的H5活动页面转移到Next.js下面，经过一段时间的研究，总结出了下面的内容。

<!-- more -->

## 什么是Next.js

基于`React`的SSR（服务端渲染框架）



## SSR & CSR

> 参考链接：https://medium.com/walmartglobaltech/the-benefits-of-server-side-rendering-over-client-side-rendering-5d07ff2cefe8

<img src="https://i2.wp.com/blog.logrocket.com/wp-content/uploads/2019/06/ssr-explanation.png?w=800&ssl=1"  />

> The main difference is that for SSR your server’s response to the browser is the HTML of your page that is ready to be rendered, while for CSR the browser gets a pretty empty document with links to your javascript. That means your browser will start rendering the HTML from your server without having to wait for all the JavaScript to be downloaded and executed. In both cases, React will need to be downloaded and go through the same process of building a virtual dom and attaching events to make the page interactive — but for SSR, the user can start viewing the page while all of that is happening. For the CSR world, you need to wait for all of the above to happen and then have the virtual dom moved to the browser dom for the page to be viewable.

<img src="https://i2.wp.com/blog.logrocket.com/wp-content/uploads/2019/06/csr-explanation.png?w=800&ssl=1"  />

## Next.js的优点

- 更好的SEO
- 更快的首屏渲染速度



## Next.js 基础(与Rect开发的不同之处)

> https://www.nextjs.cn/learn/basics/create-nextjs-app?utm_source=next-site&utm_medium=nav-cta&utm_campaign=next-website



### 路由映射

> 在 Next.js 中，一个 **page（页面）** 就是一个从 `.js`、`jsx`、`.ts` 或 `.tsx` 文件导出（export）的 [React 组件](https://reactjs.org/docs/components-and-props.html) ，这些文件存放在 `pages` 目录下。每个 page（页面）都使用其文件名作为路由（route）。

```js
pages/about.js/jsx/ts/tsx → /about

pages/dashboard/settings/username.js → /dashboard/settings/username
```

### 自带路由：`next/router` `next/link`

使用与`react-router`类似，包括编程式跳转`router.push`以及组件式跳转`<Link href="/about"><a>click me</a></Link>`

```js
import { useRouter } from 'next/router';

const router = useRouter();
router.push({
  pathname: '/activities/experience-lesson/course-info',
  query: { ...queryData, isFree: 0 }
});
router.push('/about')
```

### 渲染方式

#### 预渲染

- **静态生成（Static Generation）**（HTML重用、build生成）
- **服务器端渲染（Server-side Rendering）**（每次请求生成的HTML不同、用户请求时生成）



#### 相关API

- 静态生成
  - `getStaticProps(context)`
  - `getStaticPaths(context)`

- 服务器渲染
  - `getServerSideProps(context)`
- 客户端获取数据
  - SWR（官方推荐）

**注意：**在开发环境中`getStaticProps`和`getStaticPaths`每次请求都会被调用

使用，在**页面**文件中导出

```js
function Page({ data }) {
  // Render data...
}

// This gets called on every request
export async function getServerSideProps() {
  // Fetch data from external API
  const res = await fetch(`https://.../data`)
  const data = await res.json()

  // Pass data to the page via props
  return { props: { data } }
}

export default Page
```



## 项目结构

### 配置Eslint+Prettier

> https://github.com/paulolramos/eslint-prettier-airbnb-react
>
> https://dev.to/karlhadwen/setup-eslint-prettier-airbnb-style-guide-in-under-2-minutes-a27
>
> https://dev.to/bybruno/configuring-absolute-paths-in-react-for-web-without-ejecting-en-us-52h6



解决`eslint`无法识别动态引入语法`import()`:

[相关issue](https://github.com/eslint/eslint/issues/11486)

```js
// eslint 配置
parserOptions: {
  ecmaVersion: 2020, // Use the latest ecmascript standard
  sourceType: 'module', // Allows using import/export statements
  ecmaFeatures: {
  jsx: true // Enable JSX since we're using React
  }
},
```



### 配置alias

`next.config.js`配置

```js
/* eslint-disable no-param-reassign */
const path = require('path');

module.exports = {
  webpack: (config) => {
    // Note: we provide webpack above so you should not `require` it
    // Perform customizations to webpack config
    config.resolve.alias['@'] = path.resolve(__dirname, './src');
    // Important: return the modified config
    return config;
  }
};

```



eslint无法识别alias，需要在根目录下创建文件`jsconfig.json`并在`.eslintrc.js`	配置`settings`

```js
// .eslintrc.js
module.exports = {
  root: true, // Make sure eslint picks up the config at the root of the directory
  extends: ['airbnb', 'airbnb/hooks', 'plugin:prettier/recommended', 'prettier/react'],
  env: {
    browser: true,
    commonjs: true,
    es6: true,
    jest: true,
    node: true
  },
  globals: {
    wx: true
  },
  parserOptions: {
    ecmaVersion: 2020, // Use the latest ecmascript standard
    sourceType: 'module', // Allows using import/export statements
    ecmaFeatures: {
      jsx: true // Enable JSX since we're using React
    }
  },
  rules: {
    'react/react-in-jsx-scope': 0,
    'jsx-a11y/alt-text': 0, // img alt
    'react/prop-types': 0,
    'jsx-a11y/click-events-have-key-events': 0,
    'jsx-a11y/no-static-element-interactions': 0,
    'dot-notation': 0,
    'import/prefer-default-export': 0,
    'react/jsx-props-no-spreading': 0,
    'jsx-a11y/href-no-hash': ['off'],
    'react/no-array-index-key': 0,
    'no-console': 0,
    'no-alert': 0,
    'consistent-return': 0,
    // eslint-disable-next-line prettier/prettier
    eqeqeq: 1,
    'react/self-closing-comp': 0,
    'react-hooks/exhaustive-deps': 0,
    'react/no-danger': 0,
    'no-shadow': 0,
    'jsx-a11y/label-has-associated-control': 0,
    'react/jsx-filename-extension': ['warn', { extensions: ['.js', '.jsx'] }],
    'max-len': [
      'warn',
      {
        code: 120,
        tabWidth: 2,
        comments: 120,
        ignoreComments: false,
        ignoreTrailingComments: true,
        ignoreUrls: true,
        ignoreStrings: true,
        ignoreTemplateLiterals: true,
        ignoreRegExpLiterals: true
      }
    ]
  },
  settings: {
    'import/resolver': {
      alias: {
        map: [['@', './src']],
        extensions: ['.ts', '.js', '.jsx', '.json']
      }
    }
  }
};

```



```json
{
  "compilerOptions": {
    "baseUrl": "src",
    "paths": {
      "@/*": ["./*"]
    }
  },
  "exclude": ["node_modules", "**/node_modules/*"]
}
```





### 封装axios在每次请求时显示`spin`组件

这里要注意一点，由于服务端不存在`document`，所以要判断一下当前所处的环境再去执行操作。

```jsx
import axios from 'axios';
import ReactDOM from 'react-dom';
import Spin from '../components/Spin/Spin';

const Axios = axios.create({
  timeout: 20000
});

const csr = process.browser;

// 当前正在请求的数量
let requestCount = 0;

function showLoading() {
  if (requestCount === 0) {
    var dom = document.createElement('div');
    dom.setAttribute('id', 'loading');
    document.body.appendChild(dom);
    ReactDOM.render(<Spin />, dom);
  }
  requestCount++;
  console.log('showLoading', requestCount);
}

function hideLoading() {
  requestCount--;
  if (requestCount === 0) {
    document.body.removeChild(document.getElementById('loading'));
  }
  console.log('hideLoading', requestCount);
}

Axios.interceptors.request.use(
  (config) => {
    csr && showLoading();
    return config;
  },
  (err) => {
    csr && hideLoading();
    return Promise.reject(err);
  }
);

Axios.interceptors.response.use(
  (res) => {
    csr && hideLoading();
    return res;
  },
  (err) => {
    csr && hideLoading();
    return Promise.reject(err);
  }
);

export default Axios;

```



### 自定义input hook

使用后可以免去给每个表单组件设置`onChange`

```jsx
import { useState } from 'react';

// 自定义input hook
// 参考资料：https://rangle.io/blog/simplifying-controlled-inputs-with-hooks/
export function useInput(initialValue) {
  const [value, setValue] = useState(initialValue);

  return {
    value,
    setValue,
    reset: () => setValue(''),
    bind: {
      value,
      onChange: (e) => {
        setValue(e.target.value);
      }
    }
  };
}

```

使用：

```jsx
// 没使用前
const [phone, setPhone] = useState('');

<input
  name="phone"
  type="number"
  placeholder="请输入您的手机号码(必填)"
  className={`${styles['cell-content']} ${styles['cell-content-right']}`}
  value={phone}
  onChange={() => setPhone(e.target.value)}
/>


// 使用后
const { value: phone, bind: bindPhone } = useInput('');

<input
  name="phone"
  type="number"
  placeholder="请输入您的手机号码(必填)"
  className={`${styles['cell-content']} ${styles['cell-content-right']}`}
  {...bindPhone}
/>
```



### 封装Dialog

```jsx
import { createPortal } from 'react-dom';
import styles from './Modal.module.css';

export default function Modal({ content, show, onOk }) {
  const modal = show && (
    <div className={styles['overlay']}>
      <div className={styles['modal']}>
        {/* 防止冒泡关闭窗口 */}
        <div className={styles['wrapper']} onClick={(e) => e.stopPropagation()}>
          <div className={styles['content']}>{content}</div>
          <div className={styles['readed_btn']} onClick={() => onOk()}>
            好 的
          </div>
        </div>
      </div>
    </div>
  );

  const ProtalContent = () => {
    // 用来处理服务端不存在document的问题
    try {
      // 将modal挂在到body上
      return document && createPortal(modal, document.body);
    } catch (error) {
      return null;
    }
  };

  // 动态引入组件
  // import dynamic from 'next/dynamic';
  // const Modal = dynamic(() => import('./components/Modal/Modal'), { ssr: false });

  return (
    <>
      <ProtalContent />
    </>
  );
}

```



###  移动端适配

使用插件`postcss-px-to-viewport`

在根目录下新建文件`postcss.config.js`

```js
module.exports = {
  plugins: {
    'postcss-px-to-viewport': {
      // 视窗的宽度，对应的是我们设计稿的宽度，我们公司用的是375
      viewportWidth: 375,
      // 视窗的高度，根据750设备的宽度来指定，一般指定1334，也可以不配置
      // viewportHeight: 1334,
      // 指定`px`转换为视窗单位值的小数位数
      unitPrecision: 3,
      // 指定需要转换成的视窗单位，建议使用vw
      viewportUnit: 'vw',
      // 指定不转换为视窗单位的类，可以自定义，可以无限添加,建议定义一至两个通用的类名
      selectorBlackList: ['.ignore'],
      // 小于或等于`1px`不转换为视窗单位，你也可以设置为你想要的值
      minPixelValue: 1,
      // 允许在媒体查询中转换`px`
      mediaQuery: false
      // exclude: undefined
    }
  }
};

```



### 使用Docker+coding实现自动化部署

#### dockerfile

```dockerfile
# node版本号
FROM node:12-alpine

# docker build时传进来的值 docker image build -t <name> --build-arg API_ENV=development .
ARG API_ENV

RUN echo ${API_ENV}

ENV NEXT_PUBLIC_API_ENV=${API_ENV}

# Create app directory
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

# Install app dependencies
COPY package*.json /usr/src/app/
RUN npm install

# Bundle app source
COPY . /usr/src/app

RUN npm run build
EXPOSE 3000

CMD [ "npm", "run", "start" ]
```

在coding上设置代码push触发规则，触发生成制品库。



### 使用redux

>https://github.com/vercel/next.js/tree/canary/examples/with-redux
>
>https://github.com/vercel/next.js/tree/canary/examples/with-redux-thunk

里面有使用到一个js新特性[Nullish coalescing operator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Nullish_coalescing_operator)



## Next.js 踩坑

### 环境变量配置

环境变量在客户端无法获取，背景：由于我在项目中需要根据环境变量来使用不同环境的API域名。

解决方案：官方提供了以`NEXT_PUBLIC_`开头的环境变量名，这样就可以在客户端和服务端都访问得到环境变量了。
