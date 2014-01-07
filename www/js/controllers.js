'use strict';

/* Controllers */

angular.module('myApp.controllers', [])
    .controller('MyCtrl', ['$scope', '$location', function ($scope, $location) {
        $scope.goto = function (value) {
            $location.path(value);
//            window.alert($scope.actualWidth + ',' + $scope.actualHeight + ',' + $scope.screenWidth + ',' + $scope.screenHeight);
        }
    }])
    .controller('MyCtrl1', [function () {

    }]);