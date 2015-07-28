(function(){

  'use strict';

  angular.module('competency', [])

  .controller('CompetencyKeyController', CompetencyKeyController);

  function CompetencyKeyController(){
    var vmCompetencyKey = this;

    var competencyKeys = [{id:1, value:"0", title:"Stage 0", keyStyle:"white", skillsetid:1},
    {id:2, value:1, title:"Stage 1", keyStyle:"red", skillsetid:1},
    {id:3, value:2, title:"Stage 2", keyStyle:"orange", skillsetid:1},
    {id:4, value:3, title:"Stage 3", keyStyle:"lightgreen", skillsetid:1},
    {id:5, value:4, title:"Stage 4", keyStyle:"green", skillsetid:1}];

    vmCompetencyKey.competencyKeys = competencyKeys;
  };
})();