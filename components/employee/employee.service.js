(function(){
	'use strict';

	var employees = [{id: 1, name: "Mike", competencies:[{id:1, score:3, skillsetid:1, skillid:1}, 
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
                              ];

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

	angular.module('employeeService', [])
		.service('EmployeeService', dataservice);


	function dataservice(){

		var service = {
        	getEmployees: getEmployees,
            getEmployee: getEmployee
    	};

    	return service;

   		function getEmployees(){
			return{
            	employees : angular.fromJson(employees),
         	};
		}

        function getEmployee(id){
            return{
                employee : angular.fromJson(employee),
            };
        }
	};
	
})();