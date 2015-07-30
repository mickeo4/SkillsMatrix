(function(){

  'use strict';

  angular.module('matrix', ['ngRoute', 'matrixRoutes', 'chart.js'])

  .controller('MatrixController', MatrixController);

  function MatrixController(ngTableParams, $sce){
    var vm = this;

    var skillset = {id:1, 
                    Name:"Team Lead", 
                    skills:[{id:1, name:"C#"}, 
                            {id:2, name:"Design Patterns"}, 
                            {id:3, name:"Javascript"},
                            {id:4, name:"TypeScript"},
                            {id:5, name:"PowerShell"},
                            {id:6, name:"AngularJS"},
                            {id:7, name:"Backbone"}],
                    employees:[{id: 1, name: "Mike", competencies:[{id:1, score:3, skillsetid:1, skillid:1}, 
                                                                 {id:2, score:2, skillsetid:1, skillid:2}, 
                                                                 {id:3, score:3, skillsetid:1, skillid:3},
                                                                 {id:4, score:2, skillsetid:1, skillid:4},
                                                                 {id:5, score:4, skillsetid:1, skillid:5},
                                                                 {id:6, score:1, skillsetid:1, skillid:6},
                                                                 {id:7, score:4, skillsetid:1, skillid:7}]}, 
                               {id: 2, name: "John", competencies:[{id:1, score:3, skillsetid:1, skillid:1}, 
                                                                 {id:2, score:2, skillsetid:1, skillid:2}, 
                                                                 {id:3, score:3, skillsetid:1, skillid:3},
                                                                 {id:4, score:2, skillsetid:1, skillid:4},
                                                                 {id:5, score:4, skillsetid:1, skillid:5},
                                                                 {id:6, score:1, skillsetid:1, skillid:6},
                                                                 {id:7, score:4, skillsetid:1, skillid:7}]}, 
                               {id: 1, name: "Chris", competencies:[{id:1, score:3, skillsetid:1, skillid:1}, 
                                                                 {id:2, score:2, skillsetid:1, skillid:2}, 
                                                                 {id:3, score:3, skillsetid:1, skillid:3},
                                                                 {id:4, score:2, skillsetid:1, skillid:4},
                                                                 {id:5, score:4, skillsetid:1, skillid:5},
                                                                 {id:6, score:1, skillsetid:1, skillid:6},
                                                                 {id:7, score:4, skillsetid:1, skillid:7}]}
                              ]
                   };

    vm.skillset = skillset;

    vm.tableParams = new ngTableParams({
        page: 1,            // show first page
        count: 10           // count per page
    }, {
        total: vm.skillset.employees.length, // length of data
        getData: function($defer, params) {
            $defer.resolve(vm.skillset.employees.slice((params.page() - 1) * params.count(), params.page() * params.count()));
        }
    });

    vm.resetEdit = function (employees) {
        var i;
        var j;
        for (i = 0; i < employees.length; i++) {
          var employee = employees[i];
          employee.$editing = false;

          for (j = 0; j < employee.competencies.length; j++){
              employee.competencies[j].$editing = false;
          }
        }
    };

// var i;
//         for (i = 0; i < competencyKeys.length; ++i) {
//             if(competencyKeys[i].value == score){
//               return competencyKeys[i].keyStyle;
//             }
//         }

    // TODO: Inject competency service to load competency key data and cache data for future loads
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

// (function(){

// 	'use strict';

// 	angular.module('matrix', ['ngRoute', 'matrixRoutes', 'ui.bootstrap.accordion'])

// 	.controller('MatrixController', MatrixController);

// 	function MatrixController(){
// 		var vm = this;

// 		vm.oneAtATime = true;

//     	vm.groups = [
//       	{
//         	title: 'Dynamic Group Header - 1',
//         	content: 'Dynamic Group Body - 1'
//       	},
//       	{
//         	title: 'Dynamic Group Header - 2',
//         	content: 'Dynamic Group Body - 2'
//       	}];

//     	vm.items = ['Item 1', 'Item 2', 'Item 3'];

//     	vm.addItem = function() {
//       		var newItemNo = vm.items.length + 1;
//       		vm.items.push('Item ' + newItemNo);
//     	};

//     	vm.status = {
//       		isFirstOpen: true,
//       		isFirstDisabled: false
//     	};
// 	};
// })();