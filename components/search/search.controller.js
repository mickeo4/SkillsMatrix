(function(){

	'use strict';

	angular.module('search', ['googleSearchService', 'ngDialog', 'skillsMatrixFilters'])

	.controller('SearchController', SearchController);

	SearchController.$inject = ['GoogleSearchService', 'ngDialog'];

	function SearchController(GoogleSearchService, ngDialog){
		var vm = this;

		vm.search = function (searchTerm) {
    		GoogleSearchService.search(searchTerm).then(function(data){
    			vm.searchResults = data.searchResults;
    		});

    		ngDialog.open({ 
    			template: 'components/search/searchResults.html',
    			controller: 'SearchController',
    			data: vm
    		});
		};
	};
})();