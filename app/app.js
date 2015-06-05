/*global angular */


require(__uri("./services/todoStorage.js"));
require(__uri("./directives/todoEscape.js"));
require(__uri("./directives/todoFocus.js"));
require(__uri("./controllers/todoCtrl.js"));


/**
 * The main TodoMVC app module
 *
 * @type {angular.Module}
 */
angular.module('todomvc', ['ngRoute'])
    .config(function ($routeProvider) {
        'use strict';

        $routeProvider.when('/', {
            controller: 'TodoCtrl',
            templateUrl: 'todomvc-index.html'
        }).when('/:status', {
            controller: 'TodoCtrl',
            templateUrl: 'todomvc-index.html'
        }).otherwise({
            redirectTo: '/'
        });
    });
