/*
 * angular-simple-datetimepicker v0.1.0
 * https://github.com/emn178/angular-simple-datetimepicker
 *
 * Copyright 2014, emn178@gmail.com
 *
 * Licensed under the MIT license:
 * http://www.opensource.org/licenses/MIT
 */
;(function(angular) {
  angular.module('ngDatetimePicker', [])
  .directive('ngDatetimePicker', ['$parse', function($parse) {
    return {
      restrict: "A",
      scope: {
        ngModel: '=',
        options: '=ngDatetimePicker'
      },
      link: function (scope, element) {
        element.appendDtpicker(scope.options);
      }
    };
  }]);
})(angular);
