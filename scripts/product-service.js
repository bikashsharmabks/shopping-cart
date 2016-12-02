'use strict';

/**
 * @ngdoc function
 * @name product.service:ProductService
 * @description
 * # ProductService
 * Controller of the shoppingCartApp
 */
angular.module('shoppingCartApp')
    .service('ProductService', ProductService);

ProductService.$inject = ['$http'];

function ProductService($http) {

	this.getCart = function() {
		return $http.get('/mock-items.json');
	}

	this.getProducts = function() {
		return $http.get('/mock-items.json');
	}

}