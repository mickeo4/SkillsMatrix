(function(){
	'use strict';

	angular.module('matrixRoutes', ['ngRoute'])
		.config(['$routeProvider', function($routeProvider){
			//alert(skillsService);
			$routeProvider
            	// route for the skills list page
            	.when('/matrix', {
                	templateUrl : 'components/matrix/matrixDashboard.html'
            	})
            	.otherwise({
        			redirectTo: '/'
      			});
		}]);

})();