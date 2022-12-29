
// 네비
{
    const $nav= $('#wrap > header > .nav-contain');
    const $gnb= $('#wrap > header > .nav-contain > nav > ul');
    const $lnbs= $('#wrap > header > .lnb-contain > .lnb-list > ol > li');
    const $bg_lnb= $('#wrap > header > .lnb-contain');
    const $button= $('header>.h-contain>.menu>p>a');

    const navFadeIn = function(){
        $bg_lnb.stop().slideDown(10);
        $lnbs.stop().slideDown(10);
    };

    const navFadeOut = function(){
        $lnbs.stop().slideUp(10);
        $bg_lnb.stop().slideUp(10);
    };


    $gnb.on('mouseenter', function(){
        navFadeIn();
    });

    $gnb.on('mouseleave', function(){
        navFadeOut();
    });


    $bg_lnb.on('mouseenter', function(){
        navFadeIn();
    });

    $bg_lnb.on('mouseleave', function(){
        navFadeOut();
    });


    // 스크롤시 네브가 탑0에 붙는 이벤트
    $(window).on('scroll', function(){
        
        $nav.css({
           marginTop: -65
        });

        const scrollTop = Math.ceil($(this).scrollTop());

        console.log(`cse= ${scrollTop}`);

        if(scrollTop>1){
            $nav.css({marginTop:-65});
            $bg_lnb.css({marginTop:-70});
        }else{

            $nav.css({marginTop:0});
            $bg_lnb.css({marginTop:0});
        }
    });

    
    // 햄버거 메뉴 클릭 이벤트 (열고 닫기)
    $button.on('click',function(evt){

        evt.preventDefault();
        
        if  ($bg_lnb.css('display') == 'none') { 
            
            navFadeIn();
            
            }else{ 
            
             navFadeOut();
            }
    });

    // 네브 클릭 이벤트 (열고 닫기)
    $nav.on('click',function(evt){

        evt.preventDefault();
        
        if  ($bg_lnb.css('display') == 'none') { 
            
            navFadeIn();
            
            }else{ 
            
             navFadeOut();
            }
    });




}

// 메인 슬라이드
{
    const $indicators = $('.pagination>p>a');
    const $slides=$('.visual>.slides>ul'); 
    const $slPrev= $('#wrap .visual > .slides > .sl.prev');
    const $slNext= $('#wrap .visual > .slides > .sl.next');
    const $auto=$('.play');

 
    let nowIdx = 1;

    $indicators.on('load', function(evt){
        evt.preventDefault();

        nowIdx = $indicators.index(this)+1;


        //on 활성화
        $indicators.eq(nowIdx-1).parent().addClass('on').siblings().removeClass('on');

        //컨테이너 이동
        $slides.stop().animate({
         left: -1920 * nowIdx
      });
    });


    //이전버튼
    $slPrev.on('click', function(evt){
        evt.preventDefault();

        nowIdx--;

        console.log(`nowIdx = ${nowIdx}`);

        //컨테이너 이동
        $slides.stop().animate({
         left: -1920 * nowIdx
      },function(){
            if(nowIdx===0){
                //오른쪽 끝에 있는 슬라이드가 보이도록 이동
                $slides.css({
                    left : -1920*6
                });
    
                nowIdx = 6;
            }//end of if
       
            //활성표시
            $indicators.eq(nowIdx-1).parent().addClass('on').siblings().removeClass('on');
        });


    });

    //다음버튼
    $slNext.on('click', function(evt){
        evt.preventDefault();

        nowIdx++;

        //컨테이너 이동
        $slides.stop().animate({
         left: -1920 * nowIdx
      },function(){
            if(nowIdx===7){
                //오른쪽 끝에 있는 슬라이드가 보이도록 이동
                $slides.css({
                    left : -1920
                });
    
                nowIdx = 0;

            }//end of if

            //활성표시
            $indicators.eq(nowIdx-1).parent().addClass('on').siblings().removeClass('on');
            
        });
        
    });


    //자동재생
    $auto.on('click', function(){
        if($(this).hasClass('play')){

            $(this).removeClass('play');
            clearInterval(intervalKey);

        }else{
            $(this).addClass('play');
            
            intervalKey = setInterval(function(){
                $slNext.trigger('click');
            },2000);            
        }
    });



    $(window).on('load', function(){
        intervalKey = setInterval(function(){
        $slNext.trigger('click');
        },2000);
    });
}


// 사이퍼즈 매거진 슬라이드
{
    const $mgList= $('.main > article > .update > .up-m-pagenation > ul >li > a');
    const $magaZine= $('.main > article > .update > .up-magazine');

    $mgList.on('click',function(evt){
     evt.preventDefault();


    const nowIdx = $mgList.index(this);

    //컨테이너 이동
    $magaZine.animate({left:-520*nowIdx},400);

    //활성화 표시
    $mgList.eq(nowIdx).parent().addClass('on').siblings().removeClass('on');
        
    });
}

// 푸터 이전의 캐릭터 소개 슬라이드 
{
    const $caricter= $('.caricter > .contain > ul');
    const $thumbs= $('.caricter > .thumbs > ul > li > a');
    const $sideBanrs= $('.caricter > .contain > ul > li > .skill');
    const $thumName= $('.caricter > .thumbs > ol > li > a');

    

    $thumbs.on('click', function(evt){
        evt.preventDefault();

        nowIdx = $thumbs.index(this);

        $(this).parent().addClass('on').siblings().removeClass('on');

        $caricter.animate({
            left:-1920*nowIdx
            
        },100);


    //사이드배너 원위치
    $sideBanrs.stop().animate({
        left : -500 + 1920*nowIdx
    },0);

    // 사이드배너 이동
    $sideBanrs.eq(nowIdx).stop().animate({
        left : 350 + 1920*nowIdx
    },0);
});

    // 캐릭터 이름 눌렀을때의 앵커 기능 차단
    $thumName.on('click',function(evt){
        evt.preventDefault();
    })

}
