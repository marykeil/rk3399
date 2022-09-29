//单出窗口函数
var mode = 0;
var type = 'ifarme';
function toShow(goto,imgpath,mode,type){
	$(function(){
		if($("#addbox").length==0){
			$("body").append("<div id='addbox'></div>");
			$("body #addbox").append("<div id='topshow'></div>");
			$("body #addbox").append("<div id='close'><img src='"+imgpath+"/close.png' /></div>");
			
			var st = $(window).scrollTop();
			var sl = $(window).scrollLeft();
			
			$("#addbox").css({
				"width":"100%",
				"height":"100%",
				"position":"fixed",
				"top":0,
				"left":sl,
				"z-index":"9999"
			});
			
			$("#addbox #topshow").css({
				"width":"100%",
				"height":"100%",
				"background-color":"#333",
				"position":"absolute",
				"top":"0px",
				"left":"0px",
				"z-index":"9999",
				"FILTER":"alpha(opacity=88)",
				"ZOOM":"1",
				"-moz-opacity":"0.88",
				"opacity":"0.88"
			});
			$("#addbox #close").css({
				"position":"absolute",
				"top":"43px",
				"right":"58px",
				"z-index":"10010",
				"cursor":"pointer"
			});
			if(type=='ajax'){
				$("body #addbox").append("<div id='frm'></div>");
				$("body #addbox #frm").load(goto);	
			}else{
				$("body #addbox").append("<iframe src='"+goto+"' name='frm' frameborder='0' id='frm' width='90%' height='90%'></iframe>");
			}
			$("#addbox #frm").css({
				"position":"absolute",
				"left":"50%",
				"top":"50%",
				"width":"861px",
				"height":"487px",
				"margin-left":"-430px",
				"margin-top":"-244px",
				"z-index":"10000",
				"background-color":"#F9F9F9"
			});
			
			$("body #addbox").append("<div id='loading'><img src='"+imgpath+"/05.gif' /></div>");
			$("#addbox #loading").css({
				"position":"absolute",
				"left":"50%",
				"top":"50%",
				"width":"60px",
				"height":"60px",
				"margin-top":"-30px",
				"margin-left":"-30px",
				"z-index":"1000"
			});
		}
		setTimeout(function(){
			$("#addbox #loading").hide();
		},200);
		$("#addbox #close img").hover(function(){
			$(this).attr("src",""+imgpath+"/close-ho.png");
		},function(){
			$(this).attr("src",""+imgpath+"/close.png");
		});
		$("#addbox #close img").click(function(){
			$("#addbox").remove();
			
			if(mode==1){
				location.reload();
			}
			$("#addbox").empty();
		});
	});
}