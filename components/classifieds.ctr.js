(function() {

	"use strict";

	angular
		.module("ngClassifieds")
		.controller("classifiedsCtrl", function($scope) {

			$scope.classified = {
				title: "First Item",
				price: "$1,000,000",
				description: "Lorem ipsum dolor sit amet, sit id viderer tacimates mediocrem, ut molestie delicata quo. Ne qui tantas evertitur concludaturque, his rebum accusata et, viderer evertitur nam ei. Nam congue dicant at. Omnes expetenda referrentur duo ad, vim tritani eleifend an."
			}

		});

})();