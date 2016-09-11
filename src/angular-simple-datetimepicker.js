/**
 * [jQuery-stickit]{@link https://github.com/emn178/angular-simple-datetimepicker}
 *
 * @version 0.1.1
 * @author Chen, Yi-Cyuan [emn178@gmail.com]
 * @copyright Chen, Yi-Cyuan 2015-2016
 * @license MIT
 */
(function (angular) {
  angular.module('ngDatetimePicker', [])
  .directive('ngDatetimePicker', ['$parse', function ($parse) {
    return {
      restrict: "A",
      scope: {
        ngModel: '=',
        options: '=ngDatetimePicker'
      },
      link: function (scope, element) {
        scope.options.current = scope.ngModel;
        element.appendDtpicker(scope.options);
      }
    };
  }]);
})(angular);
