'use strict';
console.log(Date.now());

(function (global) {

  new Clipboard('.btn');

  $(function () {
    $.get('json/index.json', function (index) {
      $("#content").html(index.content);
    });
    $("#format").click(function () {
      try {
        var jsonarea = $("#jsonarea");
        var t = jsonarea.val();
        var p = eval('(' + t + ')');
        var r = JSON.stringify(p, null, 2);
        jsonarea.val(r);
      } catch (err) {
        console.error(err);
      }
    });
  });
})(window);
