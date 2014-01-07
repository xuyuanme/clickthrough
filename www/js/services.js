'use strict';

/* Services */


// Demonstrate how to register services
// In this case it is a simple value service.
angular.module('myApp.services', [])
    .value('version', '0.1')
    .factory('screenService', function () {
//        console.log('Init screen service...');
        var definedWidth = 320;
        var definedHeight = 568;
        var screenWidth = (window.innerWidth > 0) ? window.innerWidth : screen.width;
        var screenHeight = (window.innerHeight > 0) ? window.innerHeight : screen.height;

        function screenService() {
        };
        screenService.prototype = {
            screenWidth: screenWidth,
            screenHeight: screenHeight,
            actualWidth: screenHeight / screenWidth < definedHeight / definedWidth ? screenHeight * definedWidth / definedHeight : screenWidth,
            actualHeight: screenHeight / screenWidth <= definedHeight / definedWidth ? screenHeight : screenWidth * definedHeight / definedWidth,
            actualScale: (screenHeight / screenWidth <= definedHeight / definedWidth ? screenHeight : screenWidth * definedHeight / definedWidth) / definedHeight
        };
        return new screenService();
    });
