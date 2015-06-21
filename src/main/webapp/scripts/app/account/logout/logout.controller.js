'use strict';

angular.module('springangularwayApp')
    .controller('LogoutController', function (Auth) {
        Auth.logout();
    });
