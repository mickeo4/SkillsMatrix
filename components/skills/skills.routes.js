(function(){
	'use strict';

	angular.module('skillsRoutes', ['ngRoute', 'skillsService'])
		.config(['$routeProvider', function($routeProvider, SkillsService){
			//alert(skillsService);
			$routeProvider
            	// route for the skills list page
            	.when('/skills', {
                	templateUrl : 'components/skills/skillsList.html',
                	controller  : 'SkillsController',
               		controllerAs: 'vm',
                	resolve: {
            			skillsData : function(SkillsService){
            				return SkillsService.getSkills();
            			}
        			}
            	})
            	// route for the viewSkill page
            	.when('/skills/view/:id', {
               		templateUrl : 'components/skills/viewSkill.html',
                	controller  : 'SkillsController',
                	controllerAs: 'vm',
                	resolve: {
            			skillsData : function(SkillsService){
            				return SkillsService.getSkill();
            			}
        			}
            	})
            	// route for the viewSkill page
            	.when('/skills/edit/:id', {
               		templateUrl : 'components/skills/editSkill.html',
                	controller  : 'SkillsController',
                	controllerAs: 'vm',
                	resolve: {
            			skillsData : function(SkillsService){
            				return SkillsService.getSkill();
            			}
        			}
            	})
            	.otherwise({
        			redirectTo: '/'
      			});
		}]);

})();