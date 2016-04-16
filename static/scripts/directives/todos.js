'use strict';

angular.module("todoListApp")
    .directive('todos', function () {

        return {
            templateUrl: '/templates/todos.html',
            controller: 'custCtrl',
            replace: false
        }


    });