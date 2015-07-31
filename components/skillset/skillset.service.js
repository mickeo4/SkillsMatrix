(function(){
	'use strict';

	var skillset = {id:1, 
                    Name:"Team Lead", 
                    skills:[{id:1, name:"C#"}, 
                            {id:2, name:"Design Patterns"}, 
                            {id:3, name:"Javascript"},
                            {id:4, name:"TypeScript"},
                            {id:5, name:"PowerShell"},
                            {id:6, name:"AngularJS"},
                            {id:7, name:"Backbone"}],
                   };

	angular.module('skillsetService', [])
		.service('SkillsetService', dataservice);


	function dataservice(){

		var service = {
        	getSkillset: getSkillset
    	};

    	return service;

   		function getSkillset(){
			return{
            	skillset : angular.fromJson(skillset),
         	};
		}
	};
	
})();