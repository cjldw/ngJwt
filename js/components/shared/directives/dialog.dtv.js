(function(){
    "use strict";
    define(["../appShared", "sweetAlert"], function(appShared){
        appShared.directive("showDialog", function(){
            return {
                restrict: "A",
                link: function(scope, ele, attr){
                    ele.on("click", function(){
                        var dialogObj = JSON.parse(attr.dialog.replace(/'/g, '"'));
                        swal(
                            dialogObj.title,
                            dialogObj.content
                        );
                    });
                }
            }
        });
    })
})();
