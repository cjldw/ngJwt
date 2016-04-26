(function(){
    "use strict";
    define(["../appUser"], function(appUser){
        appUser.controller("userCtrl", ["$scope", "userSrv", function($scope, userSrv){
            var users = userSrv.getUsers();
            console.log('token authorization', users);
            $scope.userlist = [
                {name: "luowen", age: 23},
                {name: "SuperMan", age: 223},
                {name: "michealScofily", age: 203},
            ];

            $scope.clickMe = function(){
                alert("stupid man");
            }

        }]);
        return appUser;
    });
})();
