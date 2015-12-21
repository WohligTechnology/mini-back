var phonecatControllers = angular.module('phonecatControllers', ['templateservicemod', 'navigationservice']);

phonecatControllers.controller('HeaderController', function($scope, TemplateService, NavigationService, $timeout) {
  $scope.template = TemplateService;
});

phonecatControllers.controller('LoginController', function($scope, TemplateService, NavigationService, $timeout) {
  $scope.template = TemplateService.changecontent("login");
  $scope.menutitle = NavigationService.makeactive("Login");
  TemplateService.title = $scope.menutitle;
  $scope.navigation = NavigationService.getnav();
});

phonecatControllers.controller('HomeController', function($scope, TemplateService, NavigationService, $timeout) {
  $scope.template = TemplateService.changecontent("home");
  $scope.menutitle = NavigationService.makeactive("Home");
  TemplateService.title = $scope.menutitle;
  $scope.navigation = NavigationService.getnav();
});

phonecatControllers.controller('SideMenuController', function($scope, TemplateService, NavigationService, $timeout) {
  $scope.template = TemplateService;
});
