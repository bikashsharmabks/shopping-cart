(function() {
    'use strict';


    /**
     * @ngdoc overview
     * @name shoppingCartApp
     * @description
     * # shoppingCartApp
     *
     * Main module of the application.
     */

    angular
        .module('shoppingCartApp', ['ngRoute','ngAnimate'])
        .config(config);

    config.$inject = ['$routeProvider'];

    function config($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'views/checkout.html',
                controller: 'CheckoutController',
                controllerAs: 'vm'
            })
            .otherwise({
                redirectTo: '/'
            });
    }
})();
