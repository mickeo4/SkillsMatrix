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
                            {id:3, name:"Javascript"}],
                    employees:[{id: 1, name: "Mike", competencies:[{id:1, score:1, skillsetid:1, skillid:1}, 
                                                                 {id:2, score:5, skillsetid:1, skillid:2}, 
                                                                 {id:3, score:5, skillsetid:1, skillid:3}]}, 
                               {id: 2, name: "John", competencies:[{id:1, score:2, skillsetid:1, skillid:1}, 
                                                                 {id:2, score:4, skillsetid:1, skillid:2}, 
                                                                 {id:3, score:2, skillsetid:1, skillid:3}]}, 
                               {id: 1, name: "Chris", competencies:[{id:1, score:1, skillsetid:1, skillid:1}, 
                                                                 {id:2, score:3, skillsetid:1, skillid:2}, 
                                                                 {id:3, score:2, skillsetid:1, skillid:3}]}
                              ]
                   };

    vm.skillset = skillset;

    vm.labels =["C#", "Javascript", "Design Patterns", "CI", "Entity Framework", "Dependency Injection", "Angular JS", "Type Script", "Java"];

    vm.data = [
      [1, 3, 1, 4, 5, 5, 3, 1, 5]
    ];

   
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
        for (var i = 0, len = employees.length; i < len; i++) {
          var employee = employees[i];
          employee.$editing = false;

          for (var j = 0, len = employee.competencies.length; j < len; j++){
              employee.competencies[j].$editing = false;
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