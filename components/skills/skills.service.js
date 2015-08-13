(function(){
	'use strict';

	var temp = {
		"skills":[
			{"Id":"1", "Name":"MVC", "Description":"Model View Controller"},
			{"Id":"2", "Name":"C#", "Description":"Programming language"}
		]
	};

	angular.module('skillsService', [])
		.service('SkillsService', dataservice);


	function dataservice($http, $q){
		var service = {
        	getSkills: getSkills,
        	getSkill: getSkill
    	};

    	return service;

   		function getSkills(){
   				return $http.get("http://localhost:9993/api/skills").then(function(response) {
    					//console.log(data);
          				return{
            				getAllSkills : true,
   							skillsList : response.data,
            			}
  					}, function(data) {
    					return $q.reject('Oh no!');
  				});		
		}

		function getSkill(id){
			return{
        		getAllSkills : false,
            	skill : temp.skills[parseInt(id) - 1],
         	};
		}
	};
	
})();