/*顶部部分元素的显示与隐藏*/
$(window).scroll(function () {
    if($(window).scrollTop()>=300) {
    	$("#signinSignup").hide(400); /* 当滑动到不小于 200px 时，标语、登录、注册显示，导航隐藏 */
    	$("#slogan").css("left", "320px");
       	$("#nav").show(400);
       	$("#logo img").attr("src", "images/logo3.png");
    }else {
        $("#signinSignup").show(400); /* 当滑动到不小于 200px 时，标语、登录、注册隐藏，导航显示 */
		$("#slogan").css("left", "50%");       
       	$("#nav").hide(400);
       	$("#logo img").attr("src", "images/logo.png");
    }
});

/*微信的显示与隐藏*/
$("#weixinIcon").hover(function() {
	$("#weixinCode").toggle(400);
});

/*回到顶部*/
$("#toTop").click(function () { 
    $("html, body").animate({scrollTop: 0}, 100); /* 持续时间为 100ms */
    return false;
});

//回到上一步
$("#back").on("click", function(){
	window.history.go(-1);
});

//显示和关闭导航
$("#menu").on("click", function(e){
	$("#navList").slideToggle(400);
	$(document).on("click",function(){
		$("#navList").slideUp(400);
	});
	e.stopPropagation();
});
$("#navList").on("click",function(e){
	e.stopPropagation();
});

/*回到顶部*/
$(window).scroll(function () {
    if($(window).scrollTop()>=100) {
        $("#toTop").fadeIn(400); /* 当滑动到不小于 100px 时，回到顶部图标显示 */
    }else {
        $("#toTop").fadeOut(400); /* 当滑动到小于(页面被卷去的高度) 100px 时，回到顶部图标隐藏 */
    }
});
$("#toTop").click(function () { 
    $("html, body").animate({scrollTop: 0}, 100); /* 持续时间为 100ms */
    return false;
});

/*===设置文章格式===*/
	$(".details-article").css("fontSize", "14px");
	// 删除图片宽高属性
	$(".article img").removeAttr("width");
	$(".article img").removeAttr("height");
	// 设置图片样式
	$(".article img").css({
		display: "block",
		maxWidth: "100%",
		height: "auto",
		margin: "15px auto 0"
	});
	$(".article img + img").css("marginTop", "8px");
	// 设置段落样式
	$(".article > div, .article > p").css({
		fontSize: "14px",
		textIndent: "2.2em",
		letterSpacing: ".1em",
		lineHeight: 1.8,
		marginTop: "7px",
		textAlign: "justify",
		wordWrap: "breakWord"	
	});
	// 删除段落中多余的换行
	$(".article:has(br) br").remove();
	$(".article > div:has(br) br").remove();