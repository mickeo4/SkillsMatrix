(function(){

  'use strict';

  angular.module('matrixdetail', ['ngRoute', 'matrixRoutes', 'chart.js'])

  .controller('MatrixDetailController', MatrixDetailController);

  function MatrixDetailController(ngTableParams, $sce){
    var vm = this;

    var employee = {id: 1, name: "Mike", targetskillset:
                      {
                        id:1, 
                        name:"Team Lead",
                        skills:[
                            {id:1, name:"C#"}, 
                            {id:2, name:"Design Patterns"}, 
                            {id:3, name:"Javascript"},
                            {id:4, name:"TypeScript"},
                            {id:5, name:"PowerShell"},
                            {id:6, name:"AngularJS"},
                            {id:7, name:"Backbone"}
                        ]
                      },
                      competencies:[{id:1, score:3, skillsetid:1, skillid:1}, 
                                    {id:2, score:2, skillsetid:1, skillid:2}, 
                                    {id:3, score:3, skillsetid:1, skillid:3},
                                    {id:4, score:2, skillsetid:1, skillid:4},
                                    {id:5, score:4, skillsetid:1, skillid:5},
                                    {id:6, score:1, skillsetid:1, skillid:6},
                                    {id:7, score:4, skillsetid:1, skillid:7}
                                  ]
                    };


    vm.employee = employee;

    vm.labels = [];
    vm.data = [[]];
    for(var index = 0; index < vm.employee.targetskillset.skills.length; index++)
    {
       vm.labels.push(vm.employee.targetskillset.skills[index].name);
       vm.data[0][index]= employee.competencies[index].score;
    }

    vm.tableParams = new ngTableParams({
        page: 1,            // show first page
        count: 10           // count per page
    }, {
        total: 1, // length of data
        getData: function($defer, params) {
            $defer.resolve(vm.employee);
        }
    });

    vm.resetEdit = function (employee) {
          for (var j = 0, len = employee.competencies.length; j < len; j++){
              employee.competencies[j].$editing = false;
          }
    };

    // TODO: call competency service to load competency key data and cache data for future loads.  This code
    // is duplicated in the matrix controller.   Need to stop DRY
    vm.calculateCompetency = function(score){
        var competencyKeys = [{id:1, value:0, title:"Stage 0", keyStyle:"white", skillsetid:1},
                              {id:2, value:1, title:"Stage 1", keyStyle:"red", skillsetid:1},
                              {id:3, value:2, title:"Stage 2", keyStyle:"orange", skillsetid:1},
                              {id:4, value:3, title:"Stage 3", keyStyle:"lightgreen", skillsetid:1},
                              {id:5, value:4, title:"Stage 4", keyStyle:"green", skillsetid:1}];

        var i;
        for (i = 0; i < competencyKeys.length; ++i) {
            if(competencyKeys[i].value == score){
              return competencyKeys[i].keyStyle;
            }
        }
    };
  };
})();