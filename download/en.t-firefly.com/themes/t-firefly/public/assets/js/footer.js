/**
 * Created by Administrator on 2017/7/13.
 */
/*高德地图的触发*/
function initMap() {
  //创建地图
  var map = new AMap.Map('map-box', {
    resizeEnable: true,
    zoom: 18,
    center: [113.399885, 22.512584]
  })
  //创建标记
  var marker = new AMap.Marker({
    position: [113.399885, 22.512584], //marker所在的位置
    map: map //创建时直接赋予map属性
  })
  //创建范围
  var circle = new AMap.Circle({
    center: [113.399885, 22.512584],
    radius: 50,
    fillOpacity: 0.2,
    strokeWeight: 1
  })
  circle.setMap(map)
  //点击事件
  marker.on('click', function(e) {
    infowindow.open(map, e.target.getPosition())
  })
  //添加信息插件
  AMap.plugin('AMap.AdvancedInfoWindow', function() {
    infowindow = new AMap.AdvancedInfoWindow({
      content:
        '<div class="info-title">天启中山办公地点</div><div class="info-content">' +
        '<img src="https://webapi.amap.com/images/amap.jpg">' +
        '广东省中山市东区中山四路57号宏宇大厦1座2102室<br/>办公电话：0760-89881218',
      offset: new AMap.Pixel(0, -30)
    })
    infowindow.open(map, [113.399885, 22.512584])
  })
}

function mapTrigger() {
  var map = document.getElementById('map-target')
  //console.log(map);
  map.addEventListener('click', function() {
    initMap()
  })
}

/*1.在每一次点击【立即咨询】按钮的时候 我都需要将里面的内容重置
* 2.给文本输入框进行事件的绑定 当获得焦点的时候当前书*/

/*咨询弹窗的触发*/
function advicetShow() {
  $('#advice-btn').click(function() {
    $('#adviceForm select,input,textarea')
      .val('')
      .removeAttr('checked')
      .removeAttr('selected')
    $('#adviceForm select')
      .find("option[value='请选择分类']")
      .attr('selected', true)
    //$("#adviceForm").find("select[value='请选择分类']").css("color",'#aaa');
  })
}
