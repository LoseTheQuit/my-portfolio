'use strict';

angular.module("todoListApp")

.controller('custCtrl', function ($scope) {

    $scope.customers = [

        {
            "city": "Houston",
            name: "Brian",
            station: "TBS"
            },
        {
            "city": "Atlanta",
            name: "Paul",
            station: "CNN"
            },
        {
            "city": "New York",
            name: "Carla",
            station: "ESPN"
            },
        {
            "city": "Chicago",
            name: "John",
            station: "Fox"
        }

        ];

    $scope.saySomethingElse = function () {

        //  console.log('The colors!!!');

    };



});