'use strict';

angular.module('rjugjhipster2App')
    .factory('Register', function ($resource) {
        return $resource('api/register', {}, {
        });
    });


