# 使用说明

## 安装

1. `git clone`项目代码
2. 执行`pnpm install`
3. 等待依赖安装完成，执行`npm run dev`启动开发环境
4. 请访问 localhost:3000，而不是 localhost:8888
5. enjoy it

## 配置

- 端口

  - client 端默认 8888，配置文件为`scripts/start-dev.js`
  - server 端默认 3000，配置文件为`src/server/index.js`

- alias

  默认配置如下，配置文件为`config/webpack.base.config.js`

  ```javascript
   {
       "@server": resolve("../src/server"),
       "@client": resolve("../src/client"),
   }
  ```

- 路由

  默认配置如下，配置文件为`src/routes.js`

  ```javascript
  import loadable from "@loadable/component";

  const routes = [
    {
      path: "/",
      component: loadable(() => import("@client/pages/Home")),
      exact: true,
    },
    {
      path: "/user",
      component: loadable(() => import("@client/layouts/UserLayout")),
      routes: [
        {
          path: "/user",
          component: loadable(() => import("@client/pages/User/Index")),
          exact: true,
          asyncData: (store, params) => {
            store.dispatch.user.fetchUser();
          },
        },
        {
          path: "/user/data",
          component: loadable(() => import("@client/pages/User/Data")),
          exact: true,
        },
        {
          path: "/user/setting",
          component: loadable(() => import("@client/pages/User/Setting")),
          exact: true,
        },
      ],
    },
    {
      path: "/login",
      component: loadable(() => import("@client/pages/Login")),
      exact: true,
    },
  ];

  export default routes;
  ```

  **请注意！！！**

  **请注意！！！**

  **请注意！！！**

  与一般的路由配置有别，请注意一下一些注意点。

  1. 使用`@loadable/component`用于路由懒加载而不是`React.lazy`，请遵从`@loadable/component`写法
  2. 子路由不使用 children 关键词，而使用 routes 关键词，以便`react-router-config`可以正确分析路由结构
  3. 有 ssr 需求，且有异步请求的请配置`asyncData`

- store

各模块 store 位于`src/models`目录下，定义后请在`src/models/index.js`中引入。
