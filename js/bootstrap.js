(function(){
    "use strict"

    /* configure requirejs options */
    var requireJsConfig = {
        baseUrl: "./js",
        urlArgs: "v="+(new Date).getTime(),
        paths: {
            "requireJsLib": "libs/requirejs/require",
            "jquery": "libs/jquery/dist/jquery",
            "sweetAlert": "libs/sweetalert/dist/sweetalert.min",
            "angular": "libs/angular/angular.min",
            "angularCookie": "libs/angular-cookies/angular-cookies.min",
            "angularUiRouter": "libs/angular-ui-router/release/angular-ui-router.min",
            "angularAnimate": "libs/angular-animate/angular-animate.min",
            "angularJwt": "libs/angular-jwt/dist/angular-jwt",
            "angularStorage": "libs/ngstorage/ngStorage"
        },

        shim: {
            "angular": {
                exports: "angular",
                deps: ["jquery"],
            },
            "angularUiRouter": {
                deps: ["angular", ]
            },
            "angularCookie": {
                deps: ["angular"]
            },
            "angularAnimate": {
                deps: ["angular"]
            },
            "angularJwt": {
                deps: ["angular"]
            }

        }
    }

    /* settings options  */
    requirejs.config(requireJsConfig);

    /* bootstrap application */
    require(["angular", "./appBootstrap"], function(angular){
        angular.element(document).ready(function(){
            angular.bootstrap(document, ["app"]);
        }); 
    });


})();
