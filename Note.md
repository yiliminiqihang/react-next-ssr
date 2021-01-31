
typescript @types/react
### 包工具：
- typescript
- react @types/react react-dom
- @types/node
- next
- axios
- @zeit/next-css
- antd 
- babel-plugin-import
- koa 
- koa-router 
- redux 
- react-redux
- express
- body-parser
- cors
- express-session
- connect-mongo
- mongoose

为了支持css,需要add@zeit/next-css antd babel-plugin-import
## Next.js
- pages是路由根目录
- 约定式路由；
- next.js会将pages下的js文件根据其路径名和文件名自动生成对应的路由
- pages组件代码自动分割(可以build打包看看，shared by all共享得一些文件资源)
- next.js项目运行后会自动生成.next文件
- public静态文件服务映射 （http://localhost:3000/images/logo.jpg）

## 启动

- dev环境启动
```js
    npm run client
```