## 框架说明 (2016-04-25)

### 添加模块

1. 在components目录下新建对应的模块, 可以复制user模块, 改掉对应的名称.
2. 在js/_appModules.js引入对应模块_references.js文件
3. 在js/_appInitial.js加载对应的模块


### shared模块说明

1. 次模块是一个共享模块, 放置了公共的service, filter, directives ..
2. 其他模块可以按需求加载次模块

### 模块说明 (js/componets/user)为例

1. 模块下router.js为该模块前端路由, 所有路由都配置在此文件中
2. appUser.js 声明模块名称


