requirejs.config({
    baseUrl: '../javascripts',
    paths: {
        'jquery': 'libs/jquery.min',
        'list': 'src/list'
    },
    shim: {
        'list': {
            deps: ['jquery'],
            exports: 'list'
        }
    }
});

require(['src/list'], function(list) {
    list.list();
});
