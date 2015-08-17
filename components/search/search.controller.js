(function(){

	'use strict';


	angular.module('search', ['googleSearchService'])

	.controller('SearchController', SearchController);

	SearchController.$inject = ['GoogleSearchService'];

	function SearchController(GoogleSearchService){
		var vm = this;

    	vm.search = function (searchTerm) {
    		GoogleSearchService.search(searchTerm).then(function(data){
    			vm.results = data;
    		});
    	};
	};
})();