$('.logo img').hover(function(){
	$(this).css('transform','rotateY(360deg)');
},function(){
	$(this).css('transform','rotateY(0deg)')
})
$('.ltq-head li').hover(function(){
	$(this).children('ol').show()
},function(){
	$(this).children('ol').hide()
})
$('.list span,.brand li').click(function(){
	$(this).css('color','#e2e765').siblings().css('color','#333');
	var index=$(this).index();
	$('section>div').css('display','none');
	$('section>div').eq(index).css('display','block');
	$('.list span').eq(index).addClass('cute').siblings().removeClass()
})