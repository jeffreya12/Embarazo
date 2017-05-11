angular.module('app.controllers', [])
  
.controller('inicioCtrl', ['$scope', '$stateParams', 'service', '$ionicPopup', '$ionicLoading', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams, service, $ionicPopup, $ionicLoading) {

	$ionicLoading.show();
	service.get('recomendacion/', {}, $scope )
	.then(function(data){
		$scope.recomendaciones = data.data;
		$ionicLoading.hide();
				
		if ($scope.recomendaciones.length == 0){
			$scope.nodata = true;
			//console.log($scope.recomendaciones.length);
		} else{
			$scope.nodata = false;
		}
	});
	
	$scope.verRecomendacion = function(titulo, contenido) {        
		var alertPopup = $ionicPopup.alert({
			title: titulo,
			template: contenido
		});
    }

}])
   
.controller('miPerfilCtrl', ['$scope', '$stateParams', 'service', '$window', '$ionicLoading', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams, service, $window, $ionicLoading) {
	
	$ionicLoading.show();
	service.get('usuario/' + $window.localStorage.getItem('user_id'), {}, $scope )
	.then(function(data){
		$scope.usuarios = data.data;
		$ionicLoading.hide();
	});

}])
   
.controller('calendarioCtrl', ['$scope', '$stateParams', 'service', '$window', '$ionicLoading', '$ionicPopup', '$cordovaCalendar', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams, service, $window, $ionicLoading, $ionicPopup, $cordovaCalendar) {
	
	var startDate = new Date();
	startDate.setHours(0,0,0,0);
	
	var endDate = startDate;
	endDate.setDate(endDate.getDate() + 1);
	
	console.log("FECHA DE INICIO " + startDate);
	console.log("FECHA FINAL " + endDate);
    
	$ionicLoading.show();
	service.get('cita/' + $window.localStorage.getItem('user_id'), {}, $scope )
	.then(function(data){
		$scope.citas = data.data;
		$ionicLoading.hide();
		
		if ($scope.citas.length == 0){
			$scope.nodata = true;
			//console.log($scope.citas.length);
		} else{
			$scope.nodata = false;
		}
		
	});
	
	$scope.verCita = function(motivo, notasImportantes) {        
		var alertPopup = $ionicPopup.alert({
			title: motivo,
			template: notasImportantes
		});
    }

}])
      
.controller('menuCtrl', ['$scope', '$stateParams', '$window', '$state', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams, $window, $state) {

	$scope.logout = function() {
		$window.localStorage.setItem('user_id', '');
		//console.log($window.localStorage.getItem('user_id'));
		$state.go('iniciarSesiN');
    }

}])
   
.controller('bebCtrl', ['$scope', '$stateParams', 'service', '$window', '$ionicLoading', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams, service, $window, $ionicLoading) {
	$ionicLoading.show();
	service.get('bebe/' + $window.localStorage.getItem('user_id'), {}, $scope )
	.then(function(data){
		$scope.bebes = data.data
		$ionicLoading.hide();
	});

}])
   
.controller('notificacionesCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])

.controller('acercaDeLaAplicacionCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])
   
.controller('restablecerLaContraseACtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])
   
.controller('iniciarSesiNCtrl', ['$scope', '$stateParams', 'LoginService', '$ionicPopup', '$state', '$window', '$ionicLoading', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams, LoginService, $ionicPopup, $state, $window, $ionicLoading) {
	
	if ($window.localStorage.getItem('user_id') != '' && $window.localStorage.getItem('user_id') != null){
		$state.go('tabsController.inicio');
		//console.log($window.localStorage.getItem('user_id'));
	}
 
	$scope.data = {};
	
    $scope.login = function() {
		$ionicLoading.show();
        LoginService.loginUser($scope.data.user, $scope.data.pass).success(function(data) {
            $state.go('tabsController.inicio');
            $ionicLoading.hide();
        }).error(function(data) {
			$ionicLoading.hide();
            var alertPopup = $ionicPopup.alert({
                title: 'Falló el iniciar sesión',
                template: 'Por favor verificá los datos'
            });
        });
    }

}])
   
.controller('registrarseCtrl', ['$scope', '$stateParams', 'service', '$state', '$window', '$ionicLoading', '$ionicPopup',// The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams, service, $state, $window, $ionicLoading, $ionicPopup) {

	$scope.register = function(registro){
		$ionicLoading.show();
		//console.log(registro);
		if (registro.pass === registro.passConfirm){
			service.post('usuario/', registro, $scope )
			.then(function(data){
				$scope.users = data.data;
				$window.localStorage.setItem('user_id', $scope.users._id)
				
				service.post('doctor/', {
										'nombre' : 'Sin definir',
										'centroMedico' : 'Sin definir',
										'correo' : 'Sin definir',
										'telefonoCelular' : 'Sin definir',
										'telefonoOficina' : 'Sin definir',
										'user_id' : $scope.users._id 
										}, $scope )
				
				service.post('bebe/', {
										'genero' : 'Sin definir',
										'peso' : '0',
										'tamano' : '0',
										'user_id' : $scope.users._id 
										}, $scope )
				
				//console.log($window.localStorage.getItem('user_id'));
				$state.go('tabsController.inicio');
				$ionicLoading.hide();
			});
		}
		else {
			var alertPopup = $ionicPopup.alert({
                title: 'Las contraseñas no coinciden',
                template: 'Por favor verificá los datos'
            });
            $ionicLoading.hide();
		}
	}

}])
   
.controller('consultasMDicasCtrl', ['$scope', '$stateParams', 'service', '$window', '$ionicPopup', '$ionicLoading', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams, service, $window, $ionicPopup, $ionicLoading) {

	$ionicLoading.show();
	service.get('doctor/' + $window.localStorage.getItem('user_id'), {}, $scope )
	.then(function(data){
		$scope.doctores = data.data;
		$ionicLoading.hide();
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
   
.controller('consejosCtrl', ['$scope', '$stateParams', 'service', '$window', '$ionicPopup', '$ionicLoading', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams, service, $window, $ionicPopup, $ionicLoading) {
	
	$ionicLoading.show();
	service.get('consejo/' + $window.localStorage.getItem('user_id'), {}, $scope )
	.then(function(data){
		$scope.consejos = data.data;
		$ionicLoading.hide();
		
		if ($scope.consejos.length == 0){
			$scope.nodata = true;
			//console.log($scope.consejos.length);
		} else{
			$scope.nodata = false;
		}
		
	});
	
	$scope.verEntrada = function(fecha, entrada) {        
		var alertPopup = $ionicPopup.alert({
			title: fecha,
			template: entrada
		});
    }

}])
   
.controller('fotografAsCtrl', ['$scope', '$stateParams', '$cordovaCamera', '$cordovaFile', 'FileService', '$state', '$ionicLoading', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams, $cordovaCamera, $cordovaFile, FileService, $state, $ionicLoading) {
 
	$scope.images = FileService.images();
	
	if ($scope.images.length == 0){
		$scope.nodata = true;
		//console.log($scope.images.length);
	} else{
		$scope.nodata = false;
	}
 
	$scope.addImage = function() {
		
		$ionicLoading.show();
		
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
					$state.go($state.current, {}, {reload: true});
					$ionicLoading.hide();
				});
			}
	 
			function fail(error) {
				console.log("fail: " + error.code);
				$ionicLoading.hide();
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
   
.controller('nuevoConsejoCtrl', ['$scope', '$stateParams', '$window', 'service', '$state', '$ionicLoading', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams, $window, service, $state, $ionicLoading) {

	$scope.newEntry = function(entrada) {
		//console.log(entrada);
		$ionicLoading.show();
		service.post('consejo/', {
									'fecha' : new Date(),
									'entrada' : entrada,
									'user_id' : $window.localStorage.getItem('user_id')
								}, $scope )
		.then(function(data){
			$state.go('consejos', {}, {reload: true});
			$ionicLoading.hide();
		});
	}

}])
 
.controller('editarPerfilDelBebCtrl', ['$scope', '$stateParams', '$state', '$window', 'service', '$ionicLoading', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams, $state, $window, service, $ionicLoading) {

	$scope.updateBebe = function(bebe) {
		//console.log(bebe);
		$ionicLoading.show();
		service.put('bebe/' + $window.localStorage.getItem('user_id'), bebe, $scope )
		.then(function(data){
			$state.go('beb', {}, {reload: true});
			$ionicLoading.hide();
		});
	}

}])

.controller('agregarCitaCtrl', ['$scope', '$stateParams', '$state', '$window', 'service', '$ionicLoading', '$cordovaCalendar', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams, $state, $window, service, $ionicLoading, $cordovaCalendar) {
		
	$scope.newAppointment = function(cita) {
		//console.log(cita);
					
		var endDate = new Date(cita.fecha);
		endDate.setDate(endDate.getDate() + 1);
		
		var success = function(message) { console.log("Success: " + JSON.stringify(message)); };
		var error = function(message) { console.log("Error: " + message); };
		
		$ionicLoading.show();
		
		window.plugins.calendar.createEvent(cita.motivo, 'Consultorio Médico', cita.notasImportantes, cita.fecha, endDate, success, error);
		
		service.post('cita/', {
									'motivo' : cita.motivo,
									'fecha' : cita.fecha,
									'notasImportantes' : cita.notasImportantes,
									'user_id' : $window.localStorage.getItem('user_id')
								}, $scope )
		.then(function(data){
			$state.go('consultasMDicas', {}, {reload: true});
			$ionicLoading.hide();
		});
		
	}

}])

.controller('editarInformaciNDelDoctorCtrl', ['$scope', '$stateParams', '$state', '$window', 'service', '$ionicLoading', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams, $state, $window, service, $ionicLoading) {

	$scope.updateDoctor = function(doctor) {
		//console.log(doctor);
		$ionicLoading.show();
		service.put('doctor/' + $window.localStorage.getItem('user_id'), doctor, $scope )
		.then(function(data){
			$state.go('consultasMDicas', {}, {reload: true});
			$ionicLoading.hide();
		});
	}

}])

.controller('editarPerfilCtrl', ['$scope', '$stateParams', '$state', '$window', 'service', '$ionicLoading', '$ionicPopup', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams, $state, $window, service, $ionicLoading, $ionicPopup) {

	$scope.updateUsuario = function(usuario) {
		//console.log(doctor);
		$ionicLoading.show();
		if (usuario.pass === usuario.passConfirm){
			service.put('usuario/' + $window.localStorage.getItem('user_id'), usuario, $scope )
			.then(function(data){
				$state.go('tabsController.miPerfil', {}, {reload: true});
				$ionicLoading.hide();
			});
		}
		else{
			var alertPopup = $ionicPopup.alert({
                title: 'Las contraseñas no coinciden',
                template: 'Por favor verificá los datos'
            });
            $ionicLoading.hide();
		}
	}

}])
