(function(){
    "use strict";
    define(["../appLogin"], function(appLogin){
        appLogin.controller('loginCtrl', [
            "$scope",
            "$http",
            "$localStorage",
            function($scope, $http, $localStorage){
                $scope.title = "login";
                $scope.getToken = function() {
                    $http.get('http://xds.local/v1/auth/token?email=xx@qq.com&password=111')
                    .then(function(response){
                        $localStorage.$default({
                            token: response.data.data.token
                        })
                    });
                };
        }]);

        return appLogin;
    });
})();
