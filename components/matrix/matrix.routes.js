(function(){
	'use strict';

	angular.module('matrixRoutes', ['ngRoute'])
		.config(['$routeProvider', function($routeProvider){
			//alert(skillsService);
			$routeProvider
            	// route for the matrix list page
            	.when('/matrix', {
                	templateUrl : 'components/matrix/matrixList.html'
            	})
              // route for the matrix info page
              .when('/matrix/detail', {
                  templateUrl : 'components/matrix/matrixDetail.html'
              })
            	.otherwise({
        			redirectTo: '/'
      			});
		}]);

})();