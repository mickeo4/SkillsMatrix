(function(){

  'use strict';

  angular.module('competency', ['competencyKeyService'])

  .controller('CompetencyKeyController', CompetencyKeyController);

  CompetencyKeyController.$inject = ['CompetencyKeyService'];

  function CompetencyKeyController(CompetencyKeyService){
    var vmCompetencyKey = this;

    vmCompetencyKey.competencyKeys = CompetencyKeyService.getCompetencyKeys().competencyKeys;
  };
})();