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

CheckoutController.$inject = ['$scope', '$rootScope', '$timeout', 'ProductService'];

function CheckoutController($scope, $rootScope, $timeout, ProductService) {

    var vm = this;
    vm.products = [];
    vm.showProductModal = false;
    vm.selectedProduct = {};
    vm.billing = {};

    ProductService.getChart().then(function(res) {
        vm.products = res.data;
        return ProductService.calculateBill(vm.products);
    }).then(function(billing) {
        vm.billing = billing;
    }).catch(function(err) {
        console.log(err);
    });

    $scope.edit = function(product) {
        vm.selectedProduct = product;
        vm.showProductModal = true;
    }

    $scope.onProductChanged = function(product) {
        // calculate bill in digest loop
        // this may not be required as this shall be replaced with rest api
        ProductService.calculateBill(vm.products).then(function(billing) {
            vm.billing = billing;
            $scope.$apply();
        }).catch(function(err) {
            console.log(err);
        });
    }

    $scope.remove = function(product) {
        var index = vm.products.indexOf(product);
        vm.products.splice(index, 1);

        // calculate bill in digest loop
        // this may not be required as this shall be replaced with rest api
        ProductService.calculateBill(vm.products).then(function(billing) {
            vm.billing = billing;
            $scope.$apply();
        }).catch(function(err) {
            console.log(err);
        });
    }
}