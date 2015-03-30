requirejs.config({
    baseUrl: '../javascripts',
    paths: {
        'jquery': 'libs/jquery.min',
        'bootstrap': 'libs/bootstrap.min'
    }
});

require(['jquery', 'bootstrap'], function(list) {
});