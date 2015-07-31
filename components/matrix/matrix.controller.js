(function(){

  'use strict';

  angular.module('matrix',
    ['ngRoute',
    'matrixRoutes',
    'skillsetService',
    'employeeService',
    'competencyKeyService',
    'competencyService'])

  .controller('MatrixController', MatrixController);

  MatrixController.$inject = ['ngTableParams', 
  'SkillsetService',
  'EmployeeService',
  'CompetencyKeyService',
  'CompetencyService'];

  function MatrixController(ngTableParams, SkillsetService, EmployeeService, CompetencyKeyService, CompetencyService){
    var vm = this;

    var skillset = SkillsetService.getSkillset().skillset;
    var employees = EmployeeService.getEmployees().employees;

    vm.skillset = skillset;
    vm.employees = employees;

    vm.tableParams = new ngTableParams({
        page: 1,            // show first page
        count: 10           // count per page
    }, {
        total: vm.employees.length, // length of data
        getData: function($defer, params) {
            $defer.resolve(vm.employees.slice((params.page() - 1) * params.count(), params.page() * params.count()));
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

    // TODO: Inject competency service to load competency key data and cache data for future loads
    vm.calculateCompetency = function(score){
        // Keys should be cached at some point, but this can be done at the service level when making api call
        var competencyKeys = CompetencyKeyService.getCompetencyKeys().competencyKeys;
        return CompetencyService.calculateCompetency(competencyKeys, score)
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