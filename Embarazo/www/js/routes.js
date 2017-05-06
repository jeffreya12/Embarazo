angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    
  

      .state('tabsController.inicio', {
    url: '/page2',
    views: {
      'tab1': {
        templateUrl: 'templates/inicio.html',
        controller: 'inicioCtrl'
      }
    }
  })

  .state('tabsController.miPerfil', {
    url: '/page3',
    views: {
      'tab3': {
        templateUrl: 'templates/miPerfil.html',
        controller: 'miPerfilCtrl'
      }
    }
  })

  .state('tabsController.calendario', {
    url: '/page4',
    views: {
      'tab2': {
        templateUrl: 'templates/calendario.html',
        controller: 'calendarioCtrl'
      }
    }
  })

  .state('tabsController', {
    url: '/page1',
    templateUrl: 'templates/tabsController.html',
    abstract:true
  })

  .state('beb', {
    url: '/page5',
    templateUrl: 'templates/beb.html',
    controller: 'bebCtrl'
  })

  .state('notificaciones', {
    url: '/page6',
    templateUrl: 'templates/notificaciones.html',
    controller: 'notificacionesCtrl'
  })

  .state('restablecerLaContraseA', {
    url: '/page7',
    templateUrl: 'templates/restablecerLaContraseA.html',
    controller: 'restablecerLaContraseACtrl'
  })

  .state('iniciarSesiN', {
    url: '/page8',
    templateUrl: 'templates/iniciarSesiN.html',
    controller: 'iniciarSesiNCtrl'
  })

  .state('registrarse', {
    url: '/page9',
    templateUrl: 'templates/registrarse.html',
    controller: 'registrarseCtrl'
  })

  .state('consultasMDicas', {
    url: '/page10',
    templateUrl: 'templates/consultasMDicas.html',
    controller: 'consultasMDicasCtrl'
  })

  .state('consejos', {
    url: '/page11',
    templateUrl: 'templates/consejos.html',
    controller: 'consejosCtrl'
  })

  .state('fotografAs', {
    url: '/page12',
    templateUrl: 'templates/fotografAs.html',
    controller: 'fotografAsCtrl'
  })

  .state('nuevoConsejo', {
    url: '/page13',
    templateUrl: 'templates/nuevoConsejo.html',
    controller: 'nuevoConsejoCtrl'
  })
  
  .state('editarPerfilDelBeb', {
    url: '/page30',
    templateUrl: 'templates/editarPerfilDelBeb.html',
    controller: 'editarPerfilDelBebCtrl'
  })
  
  .state('agregarCita', {
    url: '/page31',
    templateUrl: 'templates/agregarCita.html',
    controller: 'agregarCitaCtrl'
  })
  
  .state('editarInformaciNDelDoctor', {
    url: '/page32',
    templateUrl: 'templates/editarInformaciNDelDoctor.html',
    controller: 'editarInformaciNDelDoctorCtrl'
  })
  
  .state('acercaDeLaAplicacion', {
    url: '/page33',
    templateUrl: 'templates/acercaDeLaAplicacion.html',
    controller: 'acercaDeLaAplicacionCtrl'
  })
  
  .state('editarPerfil', {
    url: '/page34',
    templateUrl: 'templates/editarPerfil.html',
    controller: 'editarPerfilCtrl'
  })

$urlRouterProvider.otherwise('/page8')

  

});
