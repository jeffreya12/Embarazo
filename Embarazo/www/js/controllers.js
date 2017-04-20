angular.module('app.controllers', [])
  
.controller('inicioCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])
   
.controller('miPerfilCtrl', ['$scope', '$stateParams', 'service', '$window', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams, service, $window) {
	service.get('usuario/' + $window.localStorage.getItem('user_id'), {}, $scope )
	.then(function(data){
		$scope.usuarios = data.data
	});

}])
   
.controller('calendarioCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])
      
.controller('menuCtrl', ['$scope', '$stateParams', '$window', '$state', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams, $window, $state) {

	$scope.logout = function() {
		$window.localStorage.setItem('user_id', '');
		console.log($window.localStorage.getItem('user_id'));
		$state.go('iniciarSesiN');
    }

}])
   
.controller('bebCtrl', ['$scope', '$stateParams', 'service', '$window', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams, service, $window) {
	service.get('bebe/' + $window.localStorage.getItem('user_id'), {}, $scope )
	.then(function(data){
		$scope.bebes = data.data
	});

}])
   
.controller('notificacionesCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])
   
.controller('restablecerLaContraseACtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])
   
.controller('iniciarSesiNCtrl', ['$scope', '$stateParams', 'LoginService', '$ionicPopup', '$state', '$window', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams, LoginService, $ionicPopup, $state, $window) {
	
	if ($window.localStorage.getItem('user_id') != '' || $window.localStorage.getItem('user_id') != null){
		$state.go('tabsController.inicio');
		console.log($window.localStorage.getItem('user_id'));
	}
 
	$scope.data = {};
	
    $scope.login = function() {
        LoginService.loginUser($scope.data.user, $scope.data.pass).success(function(data) {
            $state.go('tabsController.inicio');
        }).error(function(data) {
            var alertPopup = $ionicPopup.alert({
                title: 'Login failed!',
                template: 'Please check your credentials!'
            });
        });
    }

}])
   
.controller('registrarseCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])
   
.controller('consultasMDicasCtrl', ['$scope', '$stateParams', 'service', '$window', '$ionicPopup', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams, service, $window, $ionicPopup) {

	service.get('doctor/' + $window.localStorage.getItem('user_id'), {}, $scope )
	.then(function(data){
		$scope.doctores = data.data;
	});
	
	service.get('cita/' + $window.localStorage.getItem('user_id'), {}, $scope )
	.then(function(data){
		$scope.citas = data.data;
	});
	
	$scope.verCita = function(motivo, notasImportantes) {        
		var alertPopup = $ionicPopup.alert({
			title: motivo,
			template: notasImportantes
		});
    }

}])
   
.controller('consejosCtrl', ['$scope', '$stateParams', 'service', '$window', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams, service, $window) {
	
	service.get('consejo/' + $window.localStorage.getItem('user_id'), {}, $scope )
	.then(function(data){
		$scope.consejos = data.data;
	});

}])
   
.controller('fotografAsCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])
   
.controller('nuevoConsejoCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])
 
