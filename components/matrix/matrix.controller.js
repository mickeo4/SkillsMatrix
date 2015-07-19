(function(){

  'use strict';

  angular.module('matrix', ['ngRoute', 'matrixRoutes'])

  .controller('MatrixController', MatrixController);

  function MatrixController(ngTableParams, $sce){
    var vm = this;

    var data = [{name: "Moroni", age: 50},
            {name: "Tiancum", age: 43},
            {name: "Jacob", age: 27},
            {name: "Nephi", age: 29},
            {name: "Enos", age: 34},
            {name: "Tiancum", age: 43},
            {name: "Jacob", age: 27},
            {name: "Nephi", age: 29},
            {name: "Enos", age: 34},
            {name: "Tiancum", age: 43},
            {name: "Jacob", age: 27},
            {name: "Nephi", age: 29},
            {name: "Enos", age: 34},
            {name: "Tiancum", age: 43},
            {name: "Jacob", age: 27},
            {name: "Nephi", age: 29},
            {name: "Enos", age: 34}];

        vm.tableParams = new ngTableParams({
            page: 1,            // show first page
            count: 10           // count per page
        }, {
            total: data.length, // length of data
            getData: function($defer, params) {
                $defer.resolve(data.slice((params.page() - 1) * params.count(), params.page() * params.count()));
            }
        });
  };
})();

// (function(){

// 	'use strict';

// 	angular.module('matrix', ['ngRoute', 'matrixRoutes', 'ui.bootstrap.accordion'])

// 	.controller('MatrixController', MatrixController);

// 	function MatrixController(){
// 		var vm = this;

// 		vm.oneAtATime = true;

//     	vm.groups = [
//       	{
//         	title: 'Dynamic Group Header - 1',
//         	content: 'Dynamic Group Body - 1'
//       	},
//       	{
//         	title: 'Dynamic Group Header - 2',
//         	content: 'Dynamic Group Body - 2'
//       	}];

//     	vm.items = ['Item 1', 'Item 2', 'Item 3'];

//     	vm.addItem = function() {
//       		var newItemNo = vm.items.length + 1;
//       		vm.items.push('Item ' + newItemNo);
//     	};

//     	vm.status = {
//       		isFirstOpen: true,
//       		isFirstDisabled: false
//     	};
// 	};
// })();