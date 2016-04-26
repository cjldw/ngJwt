/**
 * FileName: appHome.js
 * Description: Home Module
 * Author: arvim.lo
 * Email: bigpao.luo@gmail.com
 * HomePage: 
 * Version: 0.0.1
 * LastChange: 2016-04-26 14:24:43
 * History:
 */
(function(){
    "use strict";
    define([
        "angular",
        "../shared/_references"
    ], function(angular){
        return angular.module('app.home', ['app.shared']);
    });
})();
