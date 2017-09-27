// 音乐 视频 电台鼠标点击事件
$(function(){
	$("#change li:first").addClass("botline"),
	$("#change li").click(function(){
		console.log(11);
		// $(this).css("borderBottom","0.04rem red solid");
		$(this).addClass("botline");
		$(this).siblings().removeClass("botline");
	});
});

// 倒计时
function show(){
	var EndTime= new Date("2017/10/01 00:00:00");
    var NowTime = new Date();
    var t = EndTime.getTime() - NowTime.getTime();
    var d=0;
    var h=0;
    var m=0;
    var s=0;
    if(t>=0){
      d=Math.floor(t/1000/60/60/24);
      h=Math.floor(t/1000/60/60%24);
      m=Math.floor(t/1000/60%60);
      s=Math.floor(t/1000%60);
    }
	document.getElementById("tim").innerHTML=d+"天"+h+"时"+m+"分"+s+"秒";
}

window.onload=function(){
	var swiper = new Swiper('.swiper-container', {
        pagination: '.swiper-pagination',
        paginationClickable: true,
        loop:true,
        autoplay:2000,
    });

	show();
	setInterval(show, 0);
};


//下拉列表选择
$(function(){
	$("#droptxt").click(function(){
		$("#dropul").css("display","block");
		$("#dropimg").css("transform","rotate(180deg)");
	});


	$("#dropul li").click(function(){
		var txt = this.innerHTML;
		$("#droptxt")[0].innerHTML = txt;
		if($("#droptxt")[0].innerHTML == txt){
			$("#dropul").css("display","none");
			$("#dropimg").css("transform","rotate(360deg)");
		}
	});
});

// 底部点击后颜色变化
$(function(){
	
	$(".foot-imgp").click(function(){
		$(this).children().css("color","white");
		$(this).siblings().children().css("color","gray");
	});
});

	












