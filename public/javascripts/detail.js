requirejs.config({
    baseUrl: '../javascripts',
    paths: {
        'jquery': 'libs/jquery.min',
        'detail': 'src/detail',
        'highlight': 'libs/highlight.min'
    },
    shim: {
        'detail': {
            deps: ['jquery', 'highlight'],
            exports: 'detail'
        }
    }
});

require(['src/detail'], function(detail) {
    var docName = location.href.split('=');
    detail.detail(docName[1]);
});
