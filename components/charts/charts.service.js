(function(){
	'use strict';

	angular.module('chartsService', [])
		.service('ChartsService', dataservice);


	function dataservice(){

		var service = {
        	calculateRadarChart: calculateRadarChart
    	};

    	return service;

   		function calculateRadarChart(labels, data, viewModel){
            try { 
                if(!labels) throw "Labels cannot be null";
                if(!data) throw "Data cannot be null"
                if(labels.length != data.length) throw "Charts labels and data sets should be same length";
            }
            catch(err) {
                alert(err);
            }

            viewModel.labels = [];
            viewModel.data = [[]];

            for(var index = 0; index < labels.length; index++)
            {
                viewModel.labels.push(labels[index].name);
                viewModel.data[0][index]= data[index].score;
            }
      }
	};
})();