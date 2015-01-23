'use strict';

angular.module('rjugjhipster2App')
    .config(function ($stateProvider) {
        $stateProvider
            .state('chat', {
                parent: 'site',
                url: '/chat',
                data: {
                    roles: ['ROLE_USER']
                },
                views: {
                    'content@': {
                        templateUrl: 'scripts/app/chat/chat.html',
                        controller: 'ChatController'
                    }
                },
                resolve: {
                    translatePartialLoader: ['$translate', '$translatePartialLoader', function ($translate, $translatePartialLoader) {
                        $translatePartialLoader.addPart('chat');
                        return $translate.refresh();
                    }]
                }
            });
    });
