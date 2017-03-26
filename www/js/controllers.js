/// <reference path="plugins/cordova-plugin-mfp-push/typings/mfppush.d.ts"/>
angular.module('starter.controllers', [])
  .controller('IOTCtrl', function($scope) {

    $scope.temperatura = 0;
    $scope.humedad = 0;
    $scope.presion = 0;

    $scope.$on('$ionicView.enter', function() {
      MFPInit.then(function() {
        WL.Analytics.log({
          AppView: 'Status'
        }, "visit status view");
        console.log("status view enter")
      });
    });






  })
  .controller('MfpCtrl', function($scope, MFPInit, AdapterService) {

    //Función de inicialización del SDK de IBM Mobile
    MFPInit.then(function() {




      //Obtiene la URL del servidor de IBM Mobile
      WL.App.getServerUrl(function(url) {
        $scope.serverurl = url;
      });

      $scope.greetAdapter = function() {



      }

    });

    $scope.registerDevice = function() {


    }

  })
