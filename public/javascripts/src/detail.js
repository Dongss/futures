define(['jquery', 'highlight'], function($) {
    var detail = function (docName) {
        $.ajax({
            url: '/docs/detail?doc_name=' + docName,
            method: 'get',
            success: function(data) {
                if (data.ret_code !== 0) {
                    alert("获取失败");
                } else {
                    //var html = data.data.replace(/\n/g, '<br />');
                    var html = data.data;
                    $('#doc-name').append('<h1>' + decodeURI(docName) + '</h1>');
                    $('#detail').append(html);
                    $('table').addClass("table table-striped");

                    $(document).ready(function() {
                        $('pre code').each(function(i, block) {
                            hljs.highlightBlock(block);
                        }); 
                    });
                }
            }
        });
    }

    return {detail: detail};
});
