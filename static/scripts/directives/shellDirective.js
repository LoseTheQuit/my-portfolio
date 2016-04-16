'use strict';

angular.module("shell")
    .directive('todos', function () {

        return {
            templateUrl: '../templates/todos.html',
            controller: 'shellController',
            replace: false
        }


    });