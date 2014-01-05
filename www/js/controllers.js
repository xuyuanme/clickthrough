'use strict';

/* Controllers */

angular.module('myApp.controllers', [])
    .controller('MyCtrl', ['$scope', '$location', function ($scope, $location) {
        $scope.definedWidth = 320;
        $scope.definedHeight = 568;
        $scope.screenWidth = (window.innerWidth > 0) ? window.innerWidth : screen.width;
        $scope.screenHeight = (window.innerHeight > 0) ? window.innerHeight : screen.height;
        $scope.actualWidth = $scope.screenHeight / $scope.screenWidth < $scope.definedHeight / $scope.definedWidth ? $scope.screenHeight * $scope.definedWidth / $scope.definedHeight : $scope.screenWidth;
        $scope.actualHeight = $scope.screenHeight / $scope.screenWidth <= $scope.definedHeight / $scope.definedWidth ? $scope.screenHeight : $scope.screenWidth * $scope.definedHeight / $scope.definedWidth;
        $scope.goto = function (value) {
            $location.path(value);
//            window.alert($scope.actualWidth + ',' + $scope.actualHeight + ',' + $scope.screenWidth + ',' + $scope.screenHeight);
        }
    }])
    .controller('MyCtrl1', [function () {

    }]);