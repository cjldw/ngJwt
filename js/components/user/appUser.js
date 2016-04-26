/*
 * FileName: appUser.js
 * Description: User Module
 * Author: arvim.lo
 * Email: bigpao.luo@gmail.com
 * HomePage: 
 * Version: 0.0.1
 * LastChange: 2016-04-26 14:24:26
 * History:
 */
(function(){
    "use strict";
    /* app user module define */
    define([
       "angular",
       "../shared/_references"
    ], function(angular){
        return angular.module('app.user', ['app.shared']);
    });
})();
