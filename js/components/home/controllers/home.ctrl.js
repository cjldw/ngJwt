(function(){
    "use strict";
    define(["../appHome"], function(appHome){
        appHome.controller("homeCtrl", ["$scope", function($scope){

            $scope.title = "Home Module";
        }]);

        return appHome;
    });
})();
