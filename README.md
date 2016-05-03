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

### 添加jwt过期自动更新token jwtInterceptor http拦截器
1. token expire then refresh automatic

            /*
             * Jwt Interceptor
             * when token expire then refresh automatic
             */
            jwtInterceptorProvider.tokenGetter = function(jwtHelper, $http) {
                var jwt = $localStorageProvider.get('token');
                if(jwt){
                    if(jwtHelper.isTokenExpired(jwt)){
                        console.log('token is expired', jwt);
                        var apiUrl = GlobalConfig.apiConfig.host + '/' + GlobalConfig.apiConfig.endpoint;
                        var refreshTokenUrl = apiUrl + '/auth/refresh';
                        return $http({
                            url : refreshTokenUrl,
                            skipAuthorization : true,
                            method: 'GET',
                            headers : { Authorization : 'Bearer '+ jwt},
                        }).then(function(response){
                            var newToken = response.data.data.token;
                            $localStorageProvider.set('token', newToken);
                            return newToken;
                        },function(response){
                            $localStorageProvider.set('token', '');
                        });
                    }else{
                        return jwt;
                    }
                }

            }



