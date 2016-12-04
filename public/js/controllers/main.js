angular.module('todoController', [])

	// inject the Todo service factory into our controller
	.controller('mainController', ['$scope','$http','Users', function($scope, $http, Users) {
		$scope.formData = {};
		$scope.loading = true;


		$scope.createUser = function() {
				
        Users.create($scope.form)
                    
					// if successful creation, call our get function to get all the new locations
					.success(function(data) {
						$scope.loading = false;
						$scope.formData = {}; // clear the form so our user is ready to enter another
						$scope.users = data; // assign our new list of locations
					});
			
		};

	}]);