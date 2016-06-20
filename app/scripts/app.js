'use strict';

/**
 * @ngdoc overview
 * @name bundesLigaApp
 * @description
 * # bundesLigaApp
 *
 * Main module of the application.
 */
angular
  .module('bundesLigaApp', [
    'ngAnimate',
    'ngAria',
    'ngMessages',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngMaterial',
    'ui.router',
    'chart.js'
  ])
  .config(function ($routeProvider, $resourceProvider, $stateProvider, $mdThemingProvider, $uiViewScrollProvider) {

    $resourceProvider.defaults.stripTrailingSlashes = false;

  /*
   *$mdThemingProvider.theme('blueTheme')
   *  .primaryPalette('gray', {
   *    'default': '400', // by default use shade 400 from the pink palette for primary intentions
   *    'hue-1': '100', // use shade 100 for the <code>md-hue-1</code> class
   *    'hue-2': '600', // use shade 600 for the <code>md-hue-2</code> class
   *    'hue-3': 'A100' // use shade A100 for the <code>md-hue-3</code> class
   *  })
   *  .accentPalette('green', {
   *    'default': '200' // use shade 200 for default, and keep all other shades the same
   *  });
   */

/*
 *   $mdThemingProvider.theme('default')
 *          .primaryPalette('blue')
 *          .accentPalette('indigo')
 *          .warnPalette('red')
 *          .backgroundPalette('grey');
 *
 *    $mdThemingProvider.theme('custom')
 *          .primaryPalette('grey')
 *          .accentPalette('deep-purple')
 *          .warnPalette('green')
 */

    //create yr own palette 
/*
 *    $mdThemingProvider.definePalette('amazingPaletteName', {
 *        '50': 'ffebee',
 *        '100': 'ffcdd2',
 *        '200': 'ef9a9a',
 *        '300': 'e57373',
 *        '400': 'ef5350',
 *        '500': 'f44336',
 *        '600': 'e53935',
 *        '700': 'd32f2f',
 *        '800': 'c62828',
 *        '900': 'b71c1c',
 *        'A100': 'ff8a80',
 *        'A200': 'ff5252',
 *        'A400': 'ff1744',
 *        'A700': 'd50000',
 *        'contrastDefaultColor': 'light',    // whether, by default, text         (contrast)
 *                                    // on this palette should be dark or light
 *        'contrastDarkColors': ['50', '100', //hues which contrast should be 'dark' by default
 *         '200', '300', '400', 'A100'],
 *        'contrastLightColors': undefined    // could also specify this if default was 'dark'
 *    });
 *
 *   $mdThemingProvider.theme('custom2')
 *        .primaryPalette('amazingPaletteName')
 */

    $uiViewScrollProvider.useAnchorScroll();


    $stateProvider
      .state('clubs', {
          url : '/clubs',
          templateUrl : 'views/team.html',
          controller :  'TeamCtrl'
      })
      .state('clubs.id',{
          url : '/:id',
          templateUrl : 'views/clubs/clubDetails.html',
          controller : 'teamDetailController'
      })
      .state('clubs.id.news', {
          url : '/news',
          templateUrl :  '/views/clubs/news.html',
          controller : 'teamDetailControllerNews'
      })
      .state('clubs.id.data', {

      })
      .state('clubs.id.players', {
          url : '/players',
          templateUrl :  '/views/clubs/players.html',
          controller : 'teamDetailControllerPlayers'
      })
      .state('clubs.id.players.player', {
        url : '/:player',
        templateUrl : '/views/player.html',
        controller : function( $state, $scope, $stateParams ){
            $scope.player = $scope.players[ $stateParams.player ];
        }

      })
      .state('clubs.id.statistics', {
          url : '/statistics',
          templateUrl :  '/views/clubs/statistics.html',
          controller :  'teamDetailControllerStats' 
      })

      .state('clubs.id.spiele', {
          url : '/spiele',
          templateUrl :  '/views/clubs/spiele.html',
          controller  : 'teamDetailControllerSpiele'
      });



      $stateProvider
        .state('liga', {
            url : '/liga',
            templateUrl : '/views/liga.html',
            controller : 'LigaController'
        })
        .state('liga.id', {
            url : '/:id',
            templateUrl : '/views/bundesliga.html',
            controller : 'LigaControllerDetail'
        })
        .state('liga.id.stats', {
            url : '/stats',
            templateUrl : '/views/liga/stats.html',
            controller :  'LigaControllerStats'
        })
        .state('liga.id.clubs', {
            url : '/clubs',
            controller :  'LigaControllerClubs'
        })
        .state('liga.id.spiele', {
            url : '/spiele',
            templateUrl : '/views/spielTage.html',
            controller :  'LigaControllerSpiele'
        })
        .state('liga.id.news', {
            url : '/news',
            controller : 'LigaControllerNews',
            templateUrl : '/views/news.html'
        });


    $stateProvider.state('main', { 
                url : '/', 
                views: {
                'clubs' : {
                    template : '<div ng-repeat="liga in ligas"> <md-button ng-click="clickHandlerToClubs( liga._id )"> {{ liga.name }} </md-button> </div>',
                    controller : 'MainControllerLiga',
                    persist : true
                },
                'liga':{
                    template : '<div ng-repeat="liga in ligas"> <md-button ng-click="clickHandler( liga._id)"> {{ liga.name }} </md-button> </div>',
                    controller : 'MainControllerLiga',
                    persist : true
                },
                'news':{
                    template : '<div ng-repeat="menu in menus"> <md-button> {{ menu }} </md-button> </div>',
                    controller : 'MainControllerNews',
                    persist : true
                }

                }
    });


      $routeProvider.otherwise({redirectTo: '/'});
  })
  .run(function( $state, $rootScope ){
      $rootScope.$on('$stateChangeStart', 
                    function(event, toState, toParams, fromState, fromParams){
                        $rootScope.$state = fromState;
                        $rootScope.$params = fromParams;
                    });



  });
