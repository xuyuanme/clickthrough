'use strict';

/* Directives */


angular.module('myApp.directives', [])
    .directive('appVersion', ['version', function (version) {
        return function (scope, elm, attrs) {
            elm.text(version);
        };
    }])
//    .directive('mainBackground', function () {
//        return function (scope, element, attrs) {
//            scope.setBackground = function (value) {
//                element.css({
//                    'background-image': 'url(' + value + ')'
//                });
//            };
//        };
//    })
    .directive('transparentButton', function () {
        return function (scope, element, attrs) {
            attrs.$observe('transparentButton', function (value) {
                element.css({
                    'border': '0px',
                    'border-color': 'red',
                    'border-style': 'solid',
                    'position': 'absolute',
                    'left': scope.$eval(value).left * scope.actualWidth / scope.definedWidth + (scope.screenWidth - scope.actualWidth) / 2 + 'px',
                    'top': scope.$eval(value).top * scope.actualHeight / scope.definedHeight + (scope.screenHeight - scope.actualHeight) / 2 + 'px',
                    'width': scope.$eval(value).width * scope.actualWidth / scope.definedWidth + 'px',
                    'height': scope.$eval(value).height * scope.actualHeight / scope.definedHeight + 'px'
                });
            });
        };
    });
