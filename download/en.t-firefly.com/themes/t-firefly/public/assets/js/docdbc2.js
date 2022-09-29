$('[id^=product-].panel-collapse').on('show.bs.collapse', function(e) {
    var $this = $(this); // 内容ul
    var $parent = $this.parent();
    var we = e || window.event;
  
    var $a = $parent
      .first('.panel-heading')
      .find('a')
      .attr('data-href');
    if ($a) {
      openapp_doc($a);
    }
    we.stopPropagation();
  });
  
  $content = $('#doc-right-main');
  var appiframe_tpl =
    '<iframe style="width:100%;height: 100%;" frameborder="0" class="appiframe" scrolling="no"  ></iframe>';
  
  function openapp_doc(url, flag) {
    var appId = parseInt(url.split('/').pop());
    //地址栏的更换不刷新
    if (!flag) {
      if (url.indexOf('product_iframe') != -1) {
        var curUrl = url.replace('product_iframe/id/', 'index/id/');
        var address = (location.href.split('/doc/')[1] = curUrl);
        history.pushState({ id: appId, url: url, address: address }, '', address);
      }
    }
    //请求数据
    $appiframe = $(appiframe_tpl)
      .attr('src', url)
      .attr('id', 'appiframe-' + appId);
    $.ajax({
      url: url,
      cache: false,
      success: function(html) {
        // console.log(html);
        $content.html(html);
      }
    });
  
    //瀑布流高度
    $('iframe').load(url, function() {
      var mainheight = $('iframe')
        .contents()
        .find('.box-right')
        .height();
      $content.height(mainheight);
    });
  
    return false;
  }
  
  if (history.pushState) {
    window.addEventListener('popstate', function() {
      var state = event.state;
      openapp_doc(state.url, true);
    });
  }
  