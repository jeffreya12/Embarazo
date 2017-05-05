angular.module('app.controllers', [])
  
.controller('inicioCtrl', ['$scope', '$stateParams', 'service', '$ionicPopup', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams, service, $ionicPopup) {

	service.get('recomendacion/', {}, $scope )
	.then(function(data){
		$scope.recomendaciones = data.data;
	});
	
	$scope.verRecomendacion = function(titulo, contenido) {        
		var alertPopup = $ionicPopup.alert({
			title: titulo,
			template: contenido
		});
    }

}])
   
.controller('miPerfilCtrl', ['$scope', '$stateParams', 'service', '$window', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams, service, $window) {
	
	service.get('usuario/' + $window.localStorage.getItem('user_id'), {}, $scope )
	.then(function(data){
		$scope.usuarios = data.data;
	});

}])
   
.controller('calendarioCtrl', ['$scope', '$stateParams', 'service', '$window', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams, service, $window) {

	service.get('cita/' + $window.localStorage.getItem('user_id'), {}, $scope )
	.then(function(data){
		$scope.citas = data.data;
		console.log(Date());
	});

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
	
	if ($window.localStorage.getItem('user_id') != '' && $window.localStorage.getItem('user_id') != null){
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
   
.controller('registrarseCtrl', ['$scope', '$stateParams', 'service', '$state', '$window', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams, service, $state, $window) {

	$scope.register = function(registro){
		console.log(registro);
		service.post('usuario/', registro, $scope )
		.then(function(data){
			$scope.users = data.data;
			$window.localStorage.setItem('user_id', $scope.users._id)
			
			service.post('doctor/', {
									'nombre' : '',
									'centro_medico' : '',
									'correo' : '',
									'telefonoCelular' : '',
									'telefonoOficina' : '',
									'user_id' : $scope.users._id 
									}, $scope )
			
			service.post('bebe/', {
									'genero' : '',
									'peso' : '',
									'tamano' : '',
									'user_id' : $scope.users._id 
									}, $scope )
			
			console.log($window.localStorage.getItem('user_id'));
			$state.go('tabsController.inicio');
		});
	}

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
   
.controller('consejosCtrl', ['$scope', '$stateParams', 'service', '$window', '$ionicPopup', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams, service, $window, $ionicPopup) {
	
	service.get('consejo/' + $window.localStorage.getItem('user_id'), {}, $scope )
	.then(function(data){
		$scope.consejos = data.data;
	});
	
	$scope.verEntrada = function(fecha, entrada) {        
		var alertPopup = $ionicPopup.alert({
			title: fecha,
			template: entrada
		});
    }

}])
   
.controller('fotografAsCtrl', ['$scope', '$stateParams', '$cordovaCamera', '$cordovaFile', 'FileService', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams, $cordovaCamera, $cordovaFile, FileService) {
 
	$scope.images = FileService.images();
	
 
	$scope.addImage = function() {
		// 2
		var options = {
			destinationType : Camera.DestinationType.FILE_URI,
			sourceType : Camera.PictureSourceType.CAMERA, // Camera.PictureSourceType.PHOTOLIBRARY
			allowEdit : false,
			encodingType: Camera.EncodingType.JPEG,
			popoverOptions: CameraPopoverOptions,
		};
		
		// 3
		$cordovaCamera.getPicture(options).then(function(imageData) {
	 
			// 4
			onImageSuccess(imageData);
	 
			function onImageSuccess(fileURI) {
				createFileEntry(fileURI);
			}
	 
			function createFileEntry(fileURI) {
				window.resolveLocalFileSystemURL(fileURI, copyFile, fail);
			}
	 
			// 5
			function copyFile(fileEntry) {
				var name = fileEntry.fullPath.substr(fileEntry.fullPath.lastIndexOf('/') + 1);
				var newName = makeid() + name;
	 
				window.resolveLocalFileSystemURL(cordova.file.dataDirectory, function(fileSystem2) {
					fileEntry.copyTo(
						fileSystem2,
						newName,
						onCopySuccess,
						fail
					);
				},
				fail);
			}
			
			// 6
			function onCopySuccess(entry) {
				$scope.$apply(function () {
					FileService.storeImage(entry.nativeURL);
				});
			}
	 
			function fail(error) {
				console.log("fail: " + error.code);
			}
	 
			function makeid() {
				var text = "";
				var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
	 
				for (var i=0; i < 5; i++) {
					text += possible.charAt(Math.floor(Math.random() * possible.length));
				}
				return text;
			}
	 
		}, function(err) {
			console.log(err);
		});
	}

	$scope.urlForImage = function(imageName) {
	  var name = imageName.substr(imageName.lastIndexOf('/') + 1);
	  var trueOrigin = cordova.file.dataDirectory + name;
	  return trueOrigin;
	}

}])
   
.controller('nuevoConsejoCtrl', ['$scope', '$stateParams', '$window', 'service', '$state', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams, $window, service, $state) {

	$scope.newEntry = function(entrada) {
		console.log(entrada);
		service.post('consejo/', {
									'fecha' : new Date(),
									'entrada' : entrada,
									'user_id' : $window.localStorage.getItem('user_id')
								}, $scope )
		.then(function(data){
			$state.go('consejos', {}, {reload: true});
		});
	}

}])
 
.controller('editarPerfilDelBebCtrl', ['$scope', '$stateParams', '$state', '$window', 'service', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams, $state, $window, service) {

	$scope.updateBebe = function(bebe) {
		console.log(bebe);
		service.put('bebe/' + $window.localStorage.getItem('user_id'), bebe, $scope )
		.then(function(data){
			$state.go('beb', {}, {reload: true});
		});
	}

}])

.controller('agregarCitaCtrl', ['$scope', '$stateParams', '$state', '$window', 'service', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams, $state, $window, service) {

	$scope.newAppointment = function(cita) {
		console.log(cita);
		service.post('cita/', {
									'motivo' : cita.motivo,
									'fecha' : cita.fecha,
									'notasImportantes' : cita.notasImportantes,
									'user_id' : $window.localStorage.getItem('user_id')
								}, $scope )
		.then(function(data){
			$state.go('consultasMDicas', {}, {reload: true});
		});
	}

}])

.controller('editarInformaciNDelDoctorCtrl', ['$scope', '$stateParams', '$state', '$window', 'service', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams, $state, $window, service) {

	$scope.updateDoctor = function(doctor) {
		console.log(doctor);
		service.put('doctor/' + $window.localStorage.getItem('user_id'), doctor, $scope )
		.then(function(data){
			$state.go('consultasMDicas', {}, {reload: true});
		});
	}

}])
