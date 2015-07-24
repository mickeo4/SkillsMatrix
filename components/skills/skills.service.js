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


	function dataservice(){

		var service = {
        	getSkills: getSkills,
        	getSkill: getSkill
    	};

    	return service;

   		function getSkills(){
			return{
        		getAllSkills : true,
            	skillsList : angular.fromJson(temp.skills),
         	};
		}

		function getSkill(id){
			return{
        		getAllSkills : false,
            	skill : temp.skills[parseInt(id) - 1],
         	};
		}
	};
	
})();