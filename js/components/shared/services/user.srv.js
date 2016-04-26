(function(){
    "use strict";
    define(["../appShared", "_constants"], function(appShared, GlobalConfig){
        return appShared.factory("userSrv", ["$http", "$log", function($http, $log){
            var userSrv = {};
            var apiUrl = GlobalConfig.apiConfig.host + "/" + GlobalConfig.apiConfig.endpoint;

            /* fetch users data from server */
            userSrv.getUsers = function(){
                var url = apiUrl + '/user';
                return $http.get(url);
            }

            return userSrv;
        }]);
    });
})();
