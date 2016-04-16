'use strict';

console.log("this is the shellDirective");

angular.module("shell")
    .directive('shellTag', function () {
        alert("yes this directive is on")
        return {

            templateUrl: './templates/todos.html',
            controller: 'shellController',
            replace: false
        }


    })
    .directive('shellCon', function () {
        alert("yes this directive is on")
        return {

            templateUrl: 'templates/todos.html',
            controller: 'shellController',
            replace: true
        }


    });