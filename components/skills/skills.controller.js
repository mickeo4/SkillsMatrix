(function(){

	'use strict';


	angular.module('skills', ['ngRoute', 'skillsRoutes'])

	// .run(function ($rootScope, $location) {
	//     $rootScope.$on('$routeChangeStart', function (evt, next, current) {
	//         //alert('routeChangeStart');
	//         //alert('routeChangeStart current route: \n\n' + JSON.stringify(current.$$route, null, 4));
	//         //alert('routeChangeStart next route: \n\n' + JSON.stringify(next.$$route, null, 4));
	//     });
	//     $rootScope.$on('$routeChangeSuccess', function (evt, next, previous) {
	//         //alert('routeChangeSuccess');
	//         //alert('routeChangeSuccess previous route: \n\n' + JSON.stringify(previous.$$route, null, 4));
	//         //alert('routeChangeSuccess next route: \n\n' + JSON.stringify(next.$$route, null, 4));
	//     });
	//     $rootScope.$on('$routeChangeError', function (current, previous, rejection) {
	//         //alert('routeChangeError');
	//         //alert('routeChangeError current route: \n\n' + JSON.stringify(current.$$route, null, 4));
	//         //alert('routeChangeError previous route: \n\n' + JSON.stringify(previous.$$route, null, 4));
	//         //alert('routeChangeError rejection: \n\n' + JSON.stringify(rejection, null, 4));
	//     });
	// })

	.controller('SkillsController', SkillsController);

	SkillsController.$inject = ['$scope', '$location', 'skillsData'];

	function SkillsController($scope, $location, skillsData){
		var vm = this;

		if(skillsData.getAllSkills)
		{
			vm.skills = skillsData.skillsList
		}
		else
		{
			vm.skill = skillsData.skill
		}

		vm.viewSkill = function (id) {
    		$location.path('/skills/view/'+ id);
  		};

  		vm.editSkill = function (id) {
    		$location.path('/skills/edit/'+ id);
  		};
	};

})();