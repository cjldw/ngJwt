(function(){
    "use strict";
    define(["./appLogin"], function(appLogin){
        appLogin.config(function($stateProvider){
            $stateProvider.state("login", {
                url: "/login",
                templateUrl: "js/components/login/views/login.html"
            });
        });
    });
})();
