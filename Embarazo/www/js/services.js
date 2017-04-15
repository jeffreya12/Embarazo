angular.module('app.services', [])

.factory('BlankFactory', [function(){

}])

.service('BlankService', [function(){

}])

.factory('service', ['$http',
function ($http)  {
  function $HTTPCALL(rute, method, params, $scope) {
        $scope.showSuccessMessage = false;
        $scope.showWarningMessage = false;
        $scope.warningMessage = "Error no especificado, intente de nuevo";
        $scope.successMessage = "Estado no especificado";
        console.log(rute + " params:");
        console.log(params);

        return $http({
            url: 'http://agile-sands-10296.herokuapp.com/' + rute,
            method: method,
            headers: { 'Content-Type': 'application/json' },
            data: JSON.stringify(params)
        })
        .error(function (data, status, headers, config) {
            console.log(rute + " error:");
            console.log(data);
            try{
                var data = jQuery.parseJSON(data);
                $scope.warningMessage = "Rute: " + rute + " Status: " + status;
                $scope.showWarningMessage = true;
            }
            catch(e) {
                $scope.warningMessage = "Rute: " + rute + " Status: " + status;
                $scope.showWarningMessage = true;
            }
        })
        .then(function (data) { //wrap it inside another promise using then
            console.log(rute + " then:");
            console.log(data);

            return data;
        })
    }
  
  return{
      post: function(rute, params, $scope){
        return $HTTPCALL(rute, "POST", params, $scope);
      },
      get: function(rute, params, $scope){
        return $HTTPCALL(rute, "GET", params, $scope);
      },
      delete: function(rute, params, $scope){
        return $HTTPCALL(rute, "DELETE", params, $scope);
      },
      put: function(rute, params, $scope){
        return $HTTPCALL(rute, "PUT", params, $scope);
      },
  }
}])
