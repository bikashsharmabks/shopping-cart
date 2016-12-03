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

	this.calculateBill = function(cart) {

		var sub_total = 0,
			items_count = 0,
			promotion_total = 0,
			percentage_discount = 0;

		cart.forEach(function(product) {
			items_count += product.p_quantity;
			sub_total += (product.p_quantity * product.p_price);
		});

		if (items_count === 3) {
			percentage_discount = 5;
		} else if (items_count > 3 && items_count < 6){
			percentage_discount = 10;
		} else if (items_count > 10){
			percentage_discount = 25;
		}

		promotion_total = sub_total * percentage_discount / 100;

		return Promise.resolve({
	    	'promotion_code': 'AJ' + percentage_discount,
	    	'sub_total': sub_total,
	    	'promotion_total': promotion_total,
	    	'shipping': 'Free',
	    	'total': sub_total - promotion_total
	    });
	}

	this.getChart = function() {
		return $http.get('/mock-items.json');
	}

}