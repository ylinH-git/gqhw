window.onload = () => {
    // 实现一：利用只显示一张图片实现轮播
    var imgDom = document.getElementsByClassName('img1');
    var liDom = document.getElementsByClassName('li1');
    var index = 0;
    setInterval(() => {
        for (var i = 0; i < imgDom.length; i++) {
            imgDom[i].style.display = "none";
            liDom[i].className = "li1";
        }
        if (index > imgDom.length - 1) {
            index = 0
        };
        imgDom[index].style.display = "block";
        liDom[index].className += " active";
        index++;
    }, 1000);

    // 实现二：利用位移实现轮播
    var page = -1;
    var stop = false;
    var slideBox = document.querySelector('.slide');
    var slidepages = document.querySelectorAll('.slide-page>li');
    var slideImg=document.querySelector('.slide img');

    function slide() {
        if (!stop) {
            page++;
            if (slideBox.style.left ==slideImg.width-slideBox.offsetWidth+'px') {
                slideBox.style.left = 0;
                page = 1;
            }
            slideAnimation(-page * 500);

            for (var i = 0; i < slidepages.length; i++) {
                slidepages[i].className = '';
            }
            if (page<slidepages.length) {
                slidepages[page].className = 'on';
            }else{
                slidepages[0].className = 'on';
            }
            if (page > 2) {
                page = -1;
            }
            
            
        }
        setTimeout(slide, 2000)
    }
    slide();

    function slideAnimation(left, timer) {
        var slideleft = slideBox.offsetLeft;
        left -= slideleft;
        var aniStop = 0;
        if (!timer) {
            timer = 100;
        }
        var runId = setInterval(function () {
            slideleft += left / timer;
            slideBox.style.left = slideleft + 'px';
            aniStop++;
            if (aniStop >= timer) {
                clearInterval(runId);
            }
        }, 1)
    }

// 实现三：利用jquery实现位移轮播
    console.log($)
    var page2 = -1;
    var stop2 = false;
    function slide2() {
		if (!stop2) {
            page2++;
            if($('.slide2').position().left==$('.slide2 img').width()-$('.slide2').width()){
               console.log(1)
                $('.slide2').css('left',0);
                page2 = 1;
            }
			$('.slide2').animate({
				left: -page2* 500
            });
            if(page2<=2){
                $('.slide-page2>li').removeClass('on').eq(page2).addClass('on');
            }else{
                $('.slide-page2>li').removeClass('on').eq(0).addClass('on');
            }
			if (page2 > 2) {
                page2 = -1;
            }
            
		
		}
		setTimeout(slide2, 2000)
    }
    slide2();
    $('.slide-page2>li').hover(function () {
		stop2 = true;
		page2 = $(this).index();
		$('.slide2').animate({
			left: -page2 * 500
		});
		$('.slide-page2>li').removeClass('on').eq(page2).addClass('on');
	}, function () {
		stop2 = false;
	})
}

$(function(){
   

})