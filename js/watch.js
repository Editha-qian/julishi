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