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
    .directive('transparentButton', ['screenService', function (screenService) {
        return function (scope, element, attrs) {
            attrs.$observe('transparentButton', function (value) {
                element.css({
                    'border': 'none',
//                    'border-color': 'red',
//                    'border-style': 'solid',
                    'position': 'absolute',
                    'left': scope.$eval(value).left * screenService.actualScale + (screenService.screenWidth - screenService.actualWidth) / 2 + 'px',
                    'top': scope.$eval(value).top * screenService.actualScale + (screenService.screenHeight - screenService.actualHeight) / 2 + 'px',
                    'width': scope.$eval(value).width * screenService.actualScale + 'px',
                    'height': scope.$eval(value).height * screenService.actualScale + 'px'
                });
            });
        };
    }]);
