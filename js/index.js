'use strict';
console.log(Date.now());

(function (global) {


  new Clipboard('.btn');

  $(function () {
    $.get('json/index.json', function (index) {
      console.log(index.content)
      // $("#content").html(index.content);
    });
    $(".btn-copy-0").click(function() {
      gtag('event', 'copy-0', {
        event_category: 'zh',
        // event_label: 'jd',
        event_callback: createFunctionWithTimeout(function() {
          console.log('.btn')
        }, 1000)
      });
    });
    $(".btn-copy-1").click(function() {
      gtag('event', 'copy-1', {
        event_category: 'zh',
        // event_label: 'jqwel',
        event_callback: createFunctionWithTimeout(function() {
          console.log('.btn')
        }, 1000)
      });
    });
    $("#format").click(function () {
      var event_callback = function() {
        try {
          var jsonarea = $("#jsonarea");
          var t = jsonarea.val();
          var p = eval('(' + t + ')');
          var r = JSON.stringify(p, null, 2);
          jsonarea.val(r);
        } catch (err) {
          console.error(err);
        }
      };

      var jsonarea = $("#jsonarea");
      var t = jsonarea.val();
      gtag('event', 'format_0', {
        event_category: 'zh',
        // event_label: 'jqwel',
        event_callback: createFunctionWithTimeout(event_callback, 1000)
      });

      // setTimeout(() => {
      //   let temp = document.createElement("form");
      //   temp.action = 'https://www.google.com';
      //   temp.method = "get";
      //   temp.target = "_blank";
      //   temp.style.display = "none";
      //   document.body.appendChild(temp);
      //   temp.submit();
      // }, 500);
    });
  });
})(window);
