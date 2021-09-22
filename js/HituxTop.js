document.writeln("<div id=\"HituxBackTop_item\">");
document.writeln("        <a id=\"HituxBackTop\" onclick=\"return false;\" title=\"Top\"></a>");
document.writeln("        <a class=\"qr\"></a>");
document.writeln("  	<div class=\"qr-popup\">");
document.writeln("    	<a class=\"code-link\"><img class=\"code\" src=\"/images/QRCode.png\" width=\'150\' height=\'150\' alt=\'QRCode\'/></a>");
document.writeln("        <span>WeChat Scan</span>");
document.writeln("    <div class=\"arr\"></div>");
document.writeln("  </div>");
document.writeln("  ");
document.writeln("</div>");
document.writeln("");
$(function() {
	$(window).scroll(function(){
		var scrolltop=$(this).scrollTop();		
		if(scrolltop>=200){		
			$("#HituxBackTop_item").show();
		}else{
			$("#HituxBackTop_item").hide();
		}
	});		
	$("#HituxBackTop").click(function(){
		$("html,body").animate({scrollTop: 0}, 500);	
	});		
	$(".qr").hover(function(){
		$(".qr-popup").show();
	},function(){
		$(".qr-popup").hide();
	});	
});












