(function(){
	'use strict';

	angular.module('directivesModule')
	.directive('numbersAndScoresOnly', ['CompetencyKeyService', function(CompetencyKeyService){

		return {
			require: 'ngModel',
      link: function(scope, element, attrs, modelCtrl) {
        modelCtrl.$parsers.push(function (inputValue) {
           // this next if is necessary for when using ng-required on your input. 
           // In such cases, when a letter is typed first, this parser will be called
           // again, and the 2nd time, the value will be undefined
           if (inputValue == undefined) return '' 
            var transformedInput = inputValue.replace(/[^0-9]/g, ''); 
           
           // Check if we have anything outside of 0-9
           if (transformedInput!=inputValue) {
            modelCtrl.$setViewValue(transformedInput);
            modelCtrl.$render();
            return transformedInput;   
           }

           // Next bit checks if any of the values are outside our defined scoring definition
           var keys = CompetencyKeyService.getCompetencyKeys().competencyKeys;

            var i;
            var matched;
            for (i = 0; i < keys.length; ++i) {
                if(keys[i].value == transformedInput){
                    modelCtrl.$setViewValue(transformedInput);
                    modelCtrl.$render();
                    return transformedInput;
                }
            }   

            modelCtrl.$setViewValue('');
            modelCtrl.$render();
            return '';
       });
			}
		};
	}]);
})(); 