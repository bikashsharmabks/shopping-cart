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
            showModal: '=',
            selectedProduct: '=',
            onProductChanged: '&'
        },
        link: function(scope, element, attrs) {

            var elementId = (new Date()).getTime();
            angular.element(angular.element(element)[0]).attr("id", elementId);

            $(angular.element("#" + elementId)).on("hidden.bs.modal", function() {

                scope.showModal = false;
                scope.$apply();

            });

            scope.$watch('showModal', function(value, oldval) {
                if (oldval != value) {
                    if (value === true) {
                        $(angular.element("#" + elementId)).modal('show');

                        //make a copy of the selected product
                        //makes user to cancel operation
                        scope.product = angular.copy(scope.selectedProduct);

                    } else {
                        $(angular.element("#" + elementId)).modal('hide');
                    }
                }
            });

            scope.onColorSelection = function(selectedColor) {
                scope.product.p_selected_color = selectedColor;
            }

            scope.edit = function(product) {
                angular.copy(product, scope.selectedProduct);
                scope.onProductChanged({selectedProduct: product})
                scope.showModal = false;
            }
        }
    }
}