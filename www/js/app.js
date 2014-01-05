'use strict';


// Declare app level module which depends on filters, and services
angular.module('myApp', [
        'ngRoute',
        'ngTouch',
        'myApp.filters',
        'myApp.services',
        'myApp.directives',
        'myApp.controllers'
    ]).
    config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/view1', {templateUrl: 'partials/partial1.html', controller: 'MyCtrl1'});
        $routeProvider.when('/view2', {templateUrl: 'partials/partial2.html', controller: 'MyCtrl1'});

        $routeProvider.when('/img/1.PNG', {templateUrl: 'partials/img1.html', controller: 'MyCtrl'});
        $routeProvider.when('/img/2.PNG', {templateUrl: 'partials/img2.html', controller: 'MyCtrl'});
        $routeProvider.when('/img/3.PNG', {templateUrl: 'partials/img3.html', controller: 'MyCtrl'});
        $routeProvider.when('/img/4.PNG', {templateUrl: 'partials/img4.html', controller: 'MyCtrl'});
        $routeProvider.when('/img/5.PNG', {templateUrl: 'partials/img5.html', controller: 'MyCtrl'});
        $routeProvider.when('/img/6.PNG', {templateUrl: 'partials/img6.html', controller: 'MyCtrl'});
        $routeProvider.when('/img/7.PNG', {templateUrl: 'partials/img7.html', controller: 'MyCtrl'});

        $routeProvider.otherwise({redirectTo: '/img/1.PNG'});
    }]);
