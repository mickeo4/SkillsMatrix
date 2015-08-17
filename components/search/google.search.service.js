(function(){
	'use strict';

	angular.module('googleSearchService', [])
		.service('GoogleSearchService', dataservice);


	function dataservice($http, $q){
		var service = {
        	search: search
    	};

    	return service;

   		function search(searchTerm){

        return $http.get("https://www.googleapis.com/customsearch/v1?key=AIzaSyA919thR2bC4CH3CguvpwY8tQopp4Nrgmo&cx=014156987123121887167:zacxf2yzab0&q=" + encodeURIComponent(searchTerm)).then(function(response) {
                  return{
                    searchResults : response.data,
                  }
            }, function(data) {
              return $q.reject('Oh no!');
          }); 
		  }
	};
	
})();