'use strict';

angular.module("shell")
    .controller('mainCtrl', function ($scope, dataService) {

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
                console.error('no filter found');

                if (todo.edited) {
                    console.error('no error found');
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