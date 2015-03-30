define(['jquery'], function($) {
    var list = function () {
        $.ajax({
            url: '/docs',
            method: 'get',
            success: function(data) {
                if (data.ret_code !== 0) {
                    alert("获取失败");
                } else {
                    var docs = data.data;
                    for (var i in docs) {
                        var docName = docs[i].split(".");
                        $('#doc-table').append('<tr><td><a target="_blank" href="/doc?doc_name=' + docName[0] + '">' + docName[0] + '</a></td></tr>');
                    }
                }
            }
        });
    }

    return {list: list};
});
