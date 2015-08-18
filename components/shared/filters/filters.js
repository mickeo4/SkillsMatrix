(function(){
	'use strict';

	angular.module('skillsMatrixFilters', [])
		.filter('unsafe', function($sce) { 
			return $sce.trustAsHtml; 
		});
})();