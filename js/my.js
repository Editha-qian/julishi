var timer;
var num=0;
$(function(){
	$(document).mousewheel(function(e,d){
		clearTimeout(timer);
		timer=setTimeout(function(){
			num=num-d;
			if(num<0){
				num=0;
			}
			if(num>5){
				num=5;
			}
			if(num==1){
				$('.row>div').removeClass('ltq-pic');
			}
			if(num==2){
				$('.middle-ex ul li').removeClass('ltq-right');
			}
			if(num==3){
				$('.details-right p').removeClass('ltq-top');
			}
			if(num!=1){
				$('.row>div').addClass('ltq-pic');
			}
			if(num!=2){
				$('.middle-ex ul li').addClass('ltq-right');
			}
			if(num!=3){
				$('.details-right p').addClass('ltq-top');
			}
			$('section').stop().animate({top:-num*100+'%'},300);		
			// $('.area li').children().addClass('current');
			// $('.area li').siblings().children().removeClass('current');
		},200)
	})
})

$('.logo img').hover(function(){
	$(this).css('transform','rotateY(360deg)');
},function(){
	$(this).css('transform','rotateY(0deg)')
})

$('.area li').click(function(){
	var index=$(this).index();
	// num=index;
	// 	if(num==1||num==3){
	// 		$('.row>div').removeClass('ltq-pic');
	// 		$('.middle-ex li').removeClass('ltq-right');
	// 	}else if(num!=1){
	// 		$('row>div').addClass('ltq-pic');
	// 	}
	$('section').animate({'top':-100*index+'%'});
	$(this).children().addClass('current');
	$(this).siblings().children().removeClass('current');
})
$('.area li').hover(function(){
	$(this).children('button').show()
},function(){
	$(this).children('button').hide()
})

$('.ltq-head li').hover(function(){
	var index = $(this).index()
	if(index==0||index>5){
		return;
	}
	$('.home').eq(0).removeClass('home2')
	console.log(index)
},function(){
	$('.home').eq(0).addClass('home2')
})
$('.ltq-head li').hover(function(){
	$(this).children('ol').show()
},function(){
	$(this).children('ol').hide()
})

