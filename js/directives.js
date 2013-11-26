'use strict';

/* Directives */


angular.module('myApp.directives', []).
  directive('appVersion', ['version', function(version) {
    return function(scope, elm, attrs) {
      elm.text(version);
    };
  }]).
  directive('markdown', function () {
    var converter = new Showdown.converter();
    return {
        restrict: 'C',
        link: function (scope, element, attrs) {
            var htmlText = converter.makeHtml(element.text());
            element.html(htmlText);
        }
    };

});