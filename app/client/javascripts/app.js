var app = angular.module('App', ['ngMaterial', 'ui.router','angucomplete-alt']);

app.config(function($stateProvider, $urlRouterProvider, $locationProvider) {
  $urlRouterProvider.otherwise('/');
  // $locationProvider.html5Mode(true);
  
  $stateProvider
    .state('home', {
      url: '/',
      templateUrl: 'templates/home.html',
      controller: 'HomeCtrl'
    })
    .state('home.clients', {
      url: 'clients',
      templateUrl: 'templates/clients.html',
      controller: 'ClientsCtrl'
    })
    .state('home.clients.new', {
      url: '/new',
      templateUrl: 'templates/clientForm.html',
      controller: 'ClientCtrl'
    })
    .state('home.clients.client', {
      url: '/{idClient:int}',
      templateUrl: 'templates/client.html',
      controller: 'ClientCtrl'
    })
    .state('home.clients.client.edit', {
      url: '/edit',
      templateUrl: 'templates/clientForm.html',
      controller: 'ClientCtrl'
    })
    .state('home.clients.client.addressEdit', {
      url: '/address/{idAddress:int}',
      templateUrl: 'templates/addressForm.html',
      controller: 'AddressCtrl'
    })
    .state('home.clients.client.addressNew', {
      url: '/address/',
      templateUrl: 'templates/addressForm.html',
      controller: 'AddressCtrl'
    })
    .state('home.addresses', {
      url: 'addresses',
      templateUrl: 'templates/addresses.html',
      controller: 'AddressesCtrl'
    })
});