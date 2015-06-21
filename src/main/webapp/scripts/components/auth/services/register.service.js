'use strict';

angular.module('springangularwayApp')
    .factory('Register', function ($resource) {
        return $resource('api/register', {}, {
        });
    });


