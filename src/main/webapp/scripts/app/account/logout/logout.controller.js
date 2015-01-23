'use strict';

angular.module('rjugjhipster2App')
    .controller('LogoutController', function (Auth) {
        Auth.logout();
    });
