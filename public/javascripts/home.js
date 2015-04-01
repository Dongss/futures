requirejs.config({
    baseUrl: '../javascripts',
    paths: {
        'jquery': 'libs/jquery.min',
        'bootstrap': 'libs/bootstrap.min'
    },
    shim: {
        "bootstrap": {
            deps: ['jquery'],
            exports: 'bootstrap'
        }
    }
});

require(['jquery', 'bootstrap'], function($) {
    $('#logout').click(function() {
        window.location.href = "http://localhost:3000";
    });

    $('#login').click(function() {

    })
});