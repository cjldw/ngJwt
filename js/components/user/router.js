(function(){
    "use strict";
    define(["./appUser"], function(appUser){
        appUser.config(function($stateProvider){
            $stateProvider.state("user", {
                url: "/user",
                templateUrl: "js/components/user/views/user.html",
            });

        });
    });
})();
