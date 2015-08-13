(function(){
	'use strict';

	angular.module('directivesModule')
		.directive('customSearchBox', function(){
			return {
      			restrict: 'E',
      			replace: 'true',
      			template: '<div id="cse" style="width: 100%;"">Loading</div>'
  			};	
	});
})(); 