(function(){
	'use strict';

	angular.module('directivesModule', ['competencyKeyService'])
		.controller('CompetencyKeyController', CompetencyKeyController);

  		CompetencyKeyController.$inject = ['CompetencyKeyService'];

  		function CompetencyKeyController(CompetencyKeyService){
    		var vmCompetencyKey = this;

    		vmCompetencyKey.competencyKeys = CompetencyKeyService.getCompetencyKeys().competencyKeys;
  		};
})();