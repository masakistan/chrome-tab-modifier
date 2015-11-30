var app = angular.module('TabModifier', ['ngRoute', 'ngAnimate', 'ngMaterial']);

app.config(['$routeProvider', '$compileProvider', '$mdIconProvider', '$mdThemingProvider', function ($routeProvider, $compileProvider, $mdIconProvider, $mdThemingProvider) {

    // Allow "chrome-extension" protocol
    $compileProvider.aHrefSanitizationWhitelist(/^\s*(chrome-extension):/);

    // Load icons list by name
    $mdIconProvider
        .icon('options-vertical', '/icons/dots-vertical.svg')
        .icon('close', '/icons/close.svg')
        .icon('plus', '/icons/plus.svg')
        .icon('image', '/icons/image.svg')
        .icon('save', '/icons/content-save.svg')
        .icon('tab', '/icons/checkbox-multiple-marked-outline.svg')
        .icon('list', '/icons/format-list-bulleted.svg')
        .icon('tab', '/icons/tab.svg')
        .icon('list-plus', '/icons/playlist-plus.svg')
        .icon('clear', '/icons/eraser.svg')
        .icon('settings', '/icons/settings.svg')
        .icon('duplicate', '/icons/content-copy.svg')
        .icon('delete', '/icons/delete.svg')
        .icon('edit', '/icons/pencil.svg')
        .icon('google-chrome', '/icons/google-chrome.svg')
        .icon('github-circle', '/icons/github-circle.svg');

    // Configure default theme
    $mdThemingProvider
        .theme('default')
        .primaryPalette('teal', {
            'default': '700'
        })
        .accentPalette('blue', {
            'default': '700'
        })
        .warnPalette('red', {
            'default': '700'
        });

    var routes = {
        '/': {
            templateUrl: '/html/tab_rules.min.html?d=' + Date.now(),
            controller: 'TabRulesController'
        },
        '/settings': {
            templateUrl: '/html/settings.min.html?d=' + Date.now(),
            controller: 'SettingsController'
        }
    };

    for (var path in routes) {
        if (routes.hasOwnProperty(path)) {
            $routeProvider.when(path, routes[path]);
        }
    }

}]);

app.run(['$rootScope', '$location', function ($rootScope, $location) {
    $rootScope.location = $location;
}]);