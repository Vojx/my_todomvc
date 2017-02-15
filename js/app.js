(function(angular) {
  'use strict';

  /**
   * 应用程序的主要的模块
   */
  var app = angular.module('app', ['app.controllers', 'app.services', 'ngRoute']);

  app.config(['$routeProvider', function($routeProvider) {
    $routeProvider
      .when('/:status?', {
        templateUrl: 'main_tmpl',
        controller: 'MainController'
      });
  }]);

})(angular);
