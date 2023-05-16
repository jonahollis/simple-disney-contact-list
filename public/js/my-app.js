const app = angular.module("myApp", ["ngRoute"])

app.config([
    '$routeProvider',
    function config($routeProviders) {
        $routeProviders
            .when('/page1', {
                template: '<span>{{message}}</span>',
                controller: 'indexCtrl',
            })
            .when('/page2', {
                templateUrl: 'views/main.html',
                controller: 'indexCtrl2',
            })
            .otherwise({
                template: '<span>This is Otherwise!</span>',
            });
    }
])

app.controller("indexCtrl", function($scope){
    $scope.message = 'indexCtrl Message!';
})

app.controller("indexCtrl2", function($scope){
    $scope.message = 'indexCtrl2 Message!';
})

app.controller("contactsCtrl", function($scope){
    $scope.contacts = ["Mickey Mouse", "Pluto", "Ariel"];

    $scope.contactObjs = [
        { 
            name: "Simba",
            movie: "The Lion King",
            movieYear: "1994",
            imageUrl: "https://resizing.flixster.com/-9O860xiuHUyNtotR_JtUrGqU3I=/ems.cHJkLWVtcy1hc3NldHMvbW92aWVzL2FiZWI5MTcwLWE0ZTctNGQyNy05NWJlLTM3MzMxMTliZDlhNS53ZWJw",
        }, 
        { 
            name: "Moana",
            movie: "Moana",
            movieYear: "2016",
            imageUrl: "",
        }, 
        { 
            name: "Ariel",
            movie: "The Little Mermaid",
            movieYear: "1989",
            imageUrl: "",
        },
    ];

    $scope.name = "";


    $scope.addContact = function () {
        $scope.contacts.push($scope.name)
    };

    $scope.deleteContact = function (index) {
        $scope.contacts.splice(index, 1)
    };

    // $scope.editContact = function (index) {
    //     $scope.contacts.forEach(function (index) {
    //         if(index) {
    //             $scope.contacts
    //         }
    //     })
    // }
})


