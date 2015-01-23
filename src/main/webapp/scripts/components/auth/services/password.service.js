'use strict';

angular.module('rjugjhipster2App')
    .factory('Password', function ($resource) {
        return $resource('api/account/change_password', {}, {
        });
    });
