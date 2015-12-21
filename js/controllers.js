var phonecatControllers = angular.module('phonecatControllers', ['templateservicemod', 'navigationservice']);

phonecatControllers.controller('login', ['$scope', 'TemplateService', 'NavigationService',
  function ($scope, TemplateService, NavigationService) {
        $scope.template = TemplateService;
        TemplateService.list = 3;
  }]);


phonecatControllers.controller('headerctrl', ['$scope', 'TemplateService',
 function ($scope, TemplateService) {
        $scope.template = TemplateService;
        $scope.loginpage = function () {
            location.href = '#/login.html';
        };
  }]);

phonecatControllers.controller('sidemenuCtrl',
    function ($scope, TemplateService, NavigationService) {
        $scope.template = TemplateService;
        $scope.navigation = NavigationService.getNav();

        $scope.changeMenuShow = function (menu) {
            menu.show = !menu.show;
        };

    });