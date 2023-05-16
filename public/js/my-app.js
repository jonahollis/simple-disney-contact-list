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
            .when('/list', {
                templateUrl: 'views/list.html',
                controller: 'listCtrl',
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

app.controller("listCtrl", function($scope, $http){
    $scope.message = 'listCtrl Message!';
    $scope.list = [];
    $scope.item = "";

    $http.get("api/list")
    .then(res => {
        console.log(res)
        $scope.list = res.data;
    })
    .catch (err => {
        console.log(err)
    })

    $scope.addItem = function () {
        console.log("Adding an item");
        $http({
            method: "POST",
            url: "/api/list/add",
            data: JSON.stringify( {item: $scope.item} ),
        })
        .then((res) => {
            $scope.list = res.data;
            $scope.item = "";
        })
        .catch((err) => {
            console.log("Error Occurred");
            console.log(err);
        })
    }

    $scope.deleteItem = function (index) {

        $scope.list.splice(index, 1)

        console.log("Deleting an item");
        $http({
            method: "POST",
            url: "/api/list/delete",
            data: JSON.stringify( {item: $scope.item} ),
        })
        .then((res) => {
            $scope.list = res.data;
            $scope.item = "";
        })
        .catch((err) => {
            console.log("Error Occurred");
            console.log(err);
        })
    }
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
            imageUrl: "https://m.media-amazon.com/images/I/A1JOaV3B6fL._AC_SY879_.jpg",
        }, 
        { 
            name: "Ariel",
            movie: "The Little Mermaid",
            movieYear: "1989",
            imageUrl: "https://m.media-amazon.com/images/I/71VV1OFO4JL._AC_SY879_.jpg",
        },
    ];

    $scope.name = "";


    $scope.addContact = function () {
        $scope.contacts.push($scope.name)

    };

    $scope.addContactObjs = function () {
        $scope.contactObjs.push($scope.name)
        
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
