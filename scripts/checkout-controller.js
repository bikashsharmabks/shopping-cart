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
    
    vm.billing = {
    	'promotion_code': 'AJF10',
    	'sub_total': 78,
    	'promotion_total': 25,
    	'shipping': 'Free',
    	'total': 53
    };

    ProductService.getProducts().then(function(res) {

    	vm.products = res.data;	
  
    }).catch(function(err) {
    	console.log(err);
    });


    $scope.edit = function(product) {
    	alert(product.p_name)
    }


    $scope.remove = function(product) {
    	alert(product.p_name)
    }
    

}