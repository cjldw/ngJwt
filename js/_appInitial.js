(function(){
    "use strict";
    define(["angular", "_dependencies", "_appModules"], function(angular){
        var app = angular.module("app", [
            "ui.router",
            "ngCookies",
            "ngAnimate",
            "ngStorage",
            "angular-jwt",
            "app.home",
            "app.user",
            "app.login"
        ]);
        return app;
    });
})();
