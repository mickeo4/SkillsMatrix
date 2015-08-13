(function(){
	'use strict';

	angular.module('skillsRoutes', ['ngRoute', 'skillsService'])
		.config(['$routeProvider', function($routeProvider, SkillsService, $routeParams){
			//alert(skillsService);
			$routeProvider
            	// route for the skills list page
            	.when('/skills', {
                	templateUrl : 'components/skills/skillsList.html',
                	controller  : 'SkillsController',
               		controllerAs: 'vm',
                	resolve: {
            			skillsData : function(SkillsService){
                            return SkillsService.getSkills().then(function(results) {
                                return results;
                                }, function(error) {
                                return $q.reject('Oh no!');
                            });
            			}
        			}
            	})
            	// route for the viewSkill page
            	.when('/skills/view/:id', {
               		templateUrl : 'components/skills/viewSkill.html',
                	controller  : 'SkillsController',
                	controllerAs: 'vm',
                	resolve: {
            			skillsData : function(SkillsService, $route){
            				return SkillsService.getSkill($route.current.params.id);
            			}
        			}
            	})
            	// route for the viewSkill page
            	.when('/skills/edit/:id', {
               		templateUrl : 'components/skills/editSkill.html',
                	controller  : 'SkillsController',
                	controllerAs: 'vm',
                	resolve: {
            			skillsData : function(SkillsService, $route){
            				return SkillsService.getSkill($route.current.params.id);
            			}
        			}
            	})
            	.otherwise({
        			redirectTo: '/'
      			});
		}]);

})();