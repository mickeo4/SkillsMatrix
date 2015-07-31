(function(){

  'use strict';

  angular.module('matrixdetail',
    ['ngRoute', 
    'matrixRoutes', 
    'employeeService', 
    'competencyKeyService', 
    'competencyService', 
    'chart.js'])

  .controller('MatrixDetailController', MatrixDetailController);

  MatrixDetailController.$inject = ['ngTableParams',
  'EmployeeService',
  'CompetencyKeyService',
  'CompetencyService'];

  function MatrixDetailController(ngTableParams, EmployeeService, CompetencyKeyService, CompetencyService){
    var vm = this;

    var employee = EmployeeService.getEmployee(1).employee;

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
        // Keys should be cached at some point, but this can be done at the service level when making api call
        var competencyKeys = CompetencyKeyService.getCompetencyKeys().competencyKeys;
        return CompetencyService.calculateCompetency(competencyKeys, score)
    };
  };
})();