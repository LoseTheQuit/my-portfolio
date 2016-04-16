'use strict';

console.log("this is the shellController");

angular.module("shell")

.controller('shellController', function ($scope, dataService) {

    console.info("this is another alert once again FINALLY GOT IT WORKING!!!")

    $scope.helloConsole = dataService.helloConsole;

    dataService.getTodos(function (response) {

        console.info(response.data);
        $scope.todos = response.data;

    });

    $scope.helloWorld = function () {
        // console.log('hello there! this is the hello world contr oller');
    };


    $scope.addTodo = function () {

        var todo = {
            name: "edit this task"
        }

        $scope.todos.unshift(todo);
    };

    $scope.saveTodos = function () {

        var filteredTodos = $scope.todos.filter(function (todo) {


            if (todo.edited) {
                console.info('todo.edited found');
                return todo;
            };

        });


        dataService.saveTodos(filteredTodos);

    };

    $scope.deleteTodo = function (todo, $index) {

        $scope.todos.splice($index, 1)
        dataService.deleteTodo(todo);

    };
});