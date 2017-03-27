// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
var temp = 0;
var pres = 0;
var hum = 0;

angular.module('starter', ['ionic', 'starter.controllers', 'starter.services'])

.run(function($ionicPlatform, MFPInit) {
  $ionicPlatform.ready(function() {

    /***** PUSH Initialization *********/





    /********** MQTT Initialization *******/


    





    MFPInit.then(function(){WL.Logger.ctx({pkg: 'io.ionic'}).debug('mfp and ionic are ready, safe to use WL.* APIs');});
  });
})

.config(function($stateProvider, $urlRouterProvider) {

  $stateProvider


    .state('tab', {
    url: '/tab',
    abstract: true,
    templateUrl: 'templates/tabs.html'
  })



  .state('tab.iot', {
    url: '/iot',
    views: {
      'tab-iot': {
        templateUrl: 'templates/tab-iot.html',
        controller: 'IOTCtrl'
      }
    }
  })


  .state('tab.mfp', {
    url: '/mfp',
    views: {
      'tab-mfp': {
        templateUrl: 'templates/tab-mfp.html',
        controller: 'MfpCtrl'
      }
    }
  });


  $urlRouterProvider.otherwise('/tab/mfp');

}).factory('MFPInit', function($q){
  /* Setup a Promise to allow code to run in other places anytime after MFP CLient SDK is ready
     Example: MFPClientPromise.then(function(){alert('mfp is ready, go ahead and use WL.* APIs')});
  */
  return window.MFPClientDefer.promise;
});

window.Messages = {
  // Add here your messages for the default language.
  // Generate a similar file with a language suffix containing the translated messages.
  // key1 : message1,
};

window.wlInitOptions = {
  // Options to initialize with the WL.Client object.
  // For initialization options please refer to IBM MobileFirst Platform Foundation Knowledge Center.
};

window.MFPClientDefer = angular.injector(['ng']).get('$q').defer();;
window.wlCommonInit = window.MFPClientDefer.resolve;
window.MFPClientDefer.promise.then(function wlCommonInit(){
  // Common initialization code goes here or use the angular service MFPClientPromise

  console.log('MobileFirst Client SDK Initilized');
  mfpMagicPreviewSetup();
 });



function mfpMagicPreviewSetup(){
  var platform;
  //nothing to see here :-), just some magic to make ionic work with mfp preview, similar to ionic serve --lab
  if(WL.StaticAppProps.ENVIRONMENT === 'preview'){
    //running mfp preview (MBS or browser)
    platform = WL.StaticAppProps.PREVIEW_ENVIRONMENT === 'android' ? 'android' : 'ios';
    if(location.href.indexOf('?ionicplatform='+platform) < 0){
      location.replace(location.pathname+'?ionicplatform='+platform);
    }
  }
}
