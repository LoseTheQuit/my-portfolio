'use strict';

angular.module("shell")
    .directive('todos', function () {

        return {
            templateUrl: '../templates/todos.html',
            controller: 'shellController',
            replace: false
        }


    })
    .directive('customctrl', function () {

        return {
            templateUrl: '../templates/custCtrl.html',
            controller: 'customController',
            replace: false
        }

    })
    .directive('portfolio', function () {

        return {
            templateUrl: '../views/portfolio.html',
            controller: 'portfolioController',
            replace: false
        }

    });