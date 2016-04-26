/*
 * FileName: _appConfig.js
 * Description: default router, http interceptor, router listener settings for application;
 * Author: arvim.lo
 * Email: bigpao.luo@gmail.com
 * HomePage:
 * Version: 0.0.1
 * LastChange: 2016-04-26 09:34:38
 * History:
 */
(function(){
    "use strict";
    define(["./_appInitial", "./_constants"], function(app, GlobalConfig){

        /* application global constant variable */
        app.constant('GlobalConfig', GlobalConfig);

        /*
         * appHttpInterceptor
         * automatic add Authorization headers
         */
        app.factory("appHttpInterceptor", function($q, $localStorage, $location){
            var appHttpInterceptor = {
                request: function(config) {
                    if($localStorage.token) {
                        config.headers = {
                            Authorization: 'Bearer ' + $localStorage.token
                        }
                    }
                    return config;
                }
            };
            return appHttpInterceptor;
        });

        /* configure app runtime options */
        app.config(function($interpolateProvider, $urlRouterProvider, $stateProvider,
                            $localStorageProvider, $httpProvider, jwtInterceptorProvider, GlobalConfig){
            /*
             *
             */
            $localStorageProvider.setKeyPrefix('app_');
            /*
             * Inject appHttpInterceptor
             */
            $httpProvider.interceptors.push('appHttpInterceptor');

            /*
             * if use laravel template, please enabled below two line
             *
             * $interpolateProvider.startSymbol('{%');
             * $interpolateProvider.endSymbol('%}');
             */

            /*
             * application router configure
             */
            $urlRouterProvider.otherwise("/home");

            /*
             * Jwt Interceptor
             * when token expire then refresh automatic
             */
            jwtInterceptorProvider.tokenGetter = function(jwtHelper, $http) {
                var jwt = $localStorageProvider.get('token');
                if(jwt){
                    if(jwtHelper.isTokenExpired(jwt)){
                        var apiUrl = GlobalConfig.apiConfig.host + '/' + GlobalConfig.apiConfig.endpoint;
                        var refreshTokenUrl = apiUrl + '/auth/refresh';
                        return $http({
                            url : refreshTokenUrl,
                            skipAuthorization : true,
                            method: 'GET',
                            headers : { Authorization : 'Bearer '+ jwt},
                        }).then(function(response){
                            $localStorageProvider.set('token',response.data.token);
                            return response.data.token;
                        },function(response){
                            $localStorageProvider.set('token', '');
                        });
                    }else{
                        return jwt;
                    }
                }
            }

            /*
             * inject jwtInterceptor to httpProvider
             */
            $httpProvider.interceptors.push('jwtInterceptor');


        });

        /*
         * App Run Hook
         *
         * token invalid then redirect login router
         */
        app.run(function($rootScope, $location, $localStorage){
            $rootScope.$on("$stateChangeStart", function(evt){
                if(! $localStorage.token) {
                    $location.path("/login");
                }
            });
        });

        return app;
    });
})();
