'use strict';

/**
 * @ngdoc function
 * @name product-modal-directive:ProductModalDirective
 * @description
 * # ProductModalDirective
 * Directive of the shoppingCartApp
 */
angular.module('shoppingCartApp')
    .directive('productModal', ProductModalDirective);

ProductModalDirective.$inject = [];

function ProductModalDirective() {
	 return {
        templateUrl: 'views/product-modal.html',
        restrict: 'E',
        replace: true,
        scope: {
        	showModal: '=showModal',
        	product: '=product'
        },
        link: function(scope, element, attrs) { 

        	var elementId = (new Date()).getTime();
            angular.element(angular.element(element)[0]).attr("id", elementId);

            $(angular.element("#" + elementId)).on("hidden.bs.modal", function () {
				scope.showModal = false;
				scope.$apply();
			});

        	scope.$watch('showModal', function(value, oldval) {
                if (oldval != value) {
                    if (value === true) {
                        $(angular.element("#" + elementId)).modal('show');
                    } else {
                        $(angular.element("#" + elementId)).modal('hide');
                    }
                }
            });

            scope.onColorSelection = function(selectedColor) {
            	scope.product.p_selected_color = selectedColor;
            }

        }     
    }
}