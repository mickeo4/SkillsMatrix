    // create the module and name it scotchApp
    angular.module('app', [
        'ngRoute',
        'ngMessages',
        'ui.bootstrap',
        'ngAnimate',
        'ngTable',
        'skills',
        'matrix',
        'matrixdetail',
        'competency'])

    // configure our routes
    .config(function($routeProvider, $locationProvider) {
        $routeProvider

            // route for the home page
            .when('/', {
                templateUrl : 'components/home/home.html',
                controller  : 'mainController'
            })

            //check browser support
        if(window.history && window.history.pushState){
            //$locationProvider.html5Mode(true); will cause an error $location in HTML5 mode requires a  tag to be present! Unless you set baseUrl tag after head tag like so: <head> <base href="/">

         // to know more about setting base URL visit: https://docs.angularjs.org/error/$location/nobase

         // if you don't wish to set base URL then use this
         $locationProvider.html5Mode({
                 enabled: true,
                 requireBase: true
          });
        }
    })

    // create the controller and inject Angular's $scope
    .controller('mainController', function($scope) {
        // create a message to display in our view
        $scope.message = 'Home of the Skills Matrix';
    });