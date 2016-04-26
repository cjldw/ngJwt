(function(){
    "use strict";
    define(["./appHome"], function(appHome){
        appHome.config(function($stateProvider){
            $stateProvider.state("home", {
                url: "/home",
                templateUrl: "js/components/home/views/home.html"
            });
        });
    });
})();
