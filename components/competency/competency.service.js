(function(){
	'use strict';

	angular.module('competencyService', [])
		.service('CompetencyService', dataservice);


	function dataservice(){

		var service = {
        	calculateCompetency: calculateCompetency
    	};

    	return service;

   		function calculateCompetency(competencyKeys, score){

            var i;
            for (i = 0; i < competencyKeys.length; ++i) {
                if(competencyKeys[i].value == score){
                    return competencyKeys[i].keyStyle;
                }
            }
		}
	};
	
})();