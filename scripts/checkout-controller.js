'use strict';

/**
 * @ngdoc function
 * @name checkout.controller:CheckoutController
 * @description
 * # CheckoutController
 * Controller of the shoppingCartApp
 */
angular.module('shoppingCartApp')
    .controller('CheckoutController', CheckoutController);

CheckoutController.$inject = ['$scope', '$rootScope', 'ProductService'];

function CheckoutController($scope, $rootScope, ProductService) {

    var vm = this;
    vm.products = [];

    ProductService.getProducts().then(function(res) {

    	vm.products = res.data;	
  
    }).catch(function(err) {
    	console.log(err);
    })
    

}