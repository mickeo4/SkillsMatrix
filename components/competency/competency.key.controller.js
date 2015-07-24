(function(){

  'use strict';

  angular.module('competency', [])

  .controller('CompetencyKeyController', CompetencyKeyController);

  function CompetencyKeyController(){
    var vmCompetencyKey = this;

    var competencyKeys = [{id:1, value:"0", title:"Stage 0", keyStyle:"white"},
    {id:2, value:"1", title:"Stage 1", keyStyle:"red"},
    {id:3, value:"2", title:"Stage 2", keyStyle:"orange"},
    {id:4, value:"3", title:"Stage 3", keyStyle:"lightgreen"},
    {id:5, value:"4", title:"Stage 4", keyStyle:"green"}];

    // var skillset = {id:1, 
    //                 Name:"Team Lead", 
    //                 skills:[{id:1, name:"C#"}, 
    //                         {id:2, name:"Design Patterns"}, 
    //                         {id:3, name:"Javascript"}],
    //                 employees:[{id: 1, name: "Mike", competencies:[{id:1, score:1, skillsetid:1, skillid:1}, 
    //                                                              {id:2, score:5, skillsetid:1, skillid:2}, 
    //                                                              {id:3, score:5, skillsetid:1, skillid:3}]}, 
    //                            {id: 2, name: "John", competencies:[{id:1, score:2, skillsetid:1, skillid:1}, 
    //                                                              {id:2, score:4, skillsetid:1, skillid:2}, 
    //                                                              {id:3, score:2, skillsetid:1, skillid:3}]}, 
    //                            {id: 1, name: "Chris", competencies:[{id:1, score:1, skillsetid:1, skillid:1}, 
    //                                                              {id:2, score:3, skillsetid:1, skillid:2}, 
    //                                                              {id:3, score:2, skillsetid:1, skillid:3}]}
    //                           ]
    //                };

    vmCompetencyKey.competencyKeys = competencyKeys;

    // vm.resetEdit = function (employees) {
    //     for (var i = 0, len = employees.length; i < len; i++) {
    //       var employee = employees[i];
    //       employee.$editing = false;

    //       for (var j = 0, len = employee.competencies.length; j < len; j++){
    //           employee.competencies[j].$editing = false;
    //       }
    //     }
    // };
  };
})();