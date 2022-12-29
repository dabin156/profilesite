
// gnb 마우스엔터시 lnb 노출 이벤트
{
const $gnb1= $('header > div.h-container > nav > .gnb > li > .nav1');
const $gnb2= $('header > div.h-container > nav > .gnb > li > .nav2');
const $gnb3= $('header > div.h-container > nav > .gnb > li > .nav3');
const $gnb4= $('header > div.h-container > nav > .gnb > li > .nav4');
const $gnb5= $('header > div.h-container > nav > .gnb > li > .nav5');



const $bg_lnb1= $('header > div.h-container > nav > .gnb > li > div.lnb-container.lnb1');
const $bg_lnb2= $('header > div.h-container > nav > .gnb > li > div.lnb-container.lnb2');
const $bg_lnb3= $('header > div.h-container > nav > .gnb > li > div.lnb-container.lnb3');
const $bg_lnb4= $('header > div.h-container > nav > .gnb > li > div.lnb-container.lnb4');
const $bg_lnb5= $('header > div.h-container > nav > .gnb > li > div.lnb-container.lnb5');



const $lnbs=$('header > div.h-container > nav > .gnb > li > div.lnb-container > ol > li');

const navFadeIn= function(){
    $bg_lnb1.stop().slideDown(0);
    $lnbs.stop().slideDown(0);

};

const navFadeOut= function(){
    $bg_lnb1.stop().slideUp(70);
    $lnbs.stop().slideUp(70);
};

$gnb1.on('mouseenter', function(){
    navFadeIn();
});

$gnb1.on('mouseleave', function(){
    navFadeOut();
});


$bg_lnb1.on('mouseenter', function(){
    navFadeIn();
});

$bg_lnb1.on('mouseleave', function(){
    navFadeOut();
});

// --------------------------------------

$gnb2.on('mouseenter', function(){
    $bg_lnb2.stop().slideDown(0);
    $lnbs.stop().slideDown(0);
});

$gnb2.on('mouseleave', function(){
    $bg_lnb2.stop().slideUp(300);
    $lnbs.stop().slideUp(300);
});


$bg_lnb2.on('mouseenter', function(){
    $bg_lnb2.stop().slideDown(0);
    $lnbs.stop().slideDown(0);
});

$bg_lnb2.on('mouseleave', function(){
    $bg_lnb2.stop().slideUp(300);
    $lnbs.stop().slideUp(300);
});


// --------------------------------------

$gnb3.on('mouseenter', function(){
    $bg_lnb3.stop().slideDown(0);
    $lnbs.stop().slideDown(0);
});

$gnb3.on('mouseleave', function(){
    $bg_lnb3.stop().slideUp(70);
    $lnbs.stop().slideUp(70);
});


$bg_lnb3.on('mouseenter', function(){
    $bg_lnb3.stop().slideDown(0);
    $lnbs.stop().slideDown(0);
});

$bg_lnb3.on('mouseleave', function(){
    $bg_lnb3.stop().slideUp(70);
    $lnbs.stop().slideUp(70);
});


// --------------------------------------

$gnb4.on('mouseenter', function(){
    $bg_lnb4.stop().slideDown(0);
    $lnbs.stop().slideDown(0);
});

$gnb4.on('mouseleave', function(){
    $bg_lnb4.stop().slideUp(70);
    $lnbs.stop().slideUp(70);
});


$bg_lnb4.on('mouseenter', function(){
    $bg_lnb4.stop().slideDown(0);
    $lnbs.stop().slideDown(0);
});

$bg_lnb4.on('mouseleave', function(){
    $bg_lnb4.stop().slideUp(70);
    $lnbs.stop().slideUp(70);
});

// --------------------------------------


$gnb5.on('mouseenter', function(){
    $bg_lnb5.stop().slideDown(0);
    $lnbs.stop().slideDown(0);
});

$gnb5.on('mouseleave', function(){
    $bg_lnb5.stop().slideUp(70);
    $lnbs.stop().slideUp(70);
});


$bg_lnb5.on('mouseenter', function(){
    $bg_lnb5.stop().slideDown(0);
    $lnbs.stop().slideDown(0);
});

$bg_lnb5.on('mouseleave', function(){
    $bg_lnb5.stop().slideUp(70);
    $lnbs.stop().slideUp(70);
});

}

// 슬라이드 자동 및 클릭 이벤트
{
    const $slides=$('#wrap > section > article > div.slides > ul'); 
    const $btn_prev=$('section > article > div.slides > .btn_nav > a.prev');
    const $btn_next=$('section > article > div.slides > .btn_nav > a.next');
    const $indicators= $('section > article > div.slides > .btn_nav > .count');
    const $btn_play= $('section > article > div.slides > .btn_nav > a.auto');

    let nowIdx = 1;

    $indicators.on('load', function(evt){
        evt.preventDefault();

        nowIdx = $indicators.index(this)+1;

        $slides.stop().animate({
         left: -760 * nowIdx
      });
    });


    //이전버튼
    $btn_prev.on('click', function(evt){
        evt.preventDefault();

        nowIdx--;

        $indicators.text($slides.find('li').eq(nowIdx).attr("data-num"))

        console.log(`nowIdx = ${nowIdx}`);

        $slides.stop().animate({
         left: -760 * nowIdx
      },function(){
            if(nowIdx===0){

                $slides.css({
                    left : -760*6
                });
    
                nowIdx = 6;
            }

        });

    });

    //다음버튼
    $btn_next.on('click', function(evt){
        evt.preventDefault();

        nowIdx++;

        $indicators.text($slides.find('li').eq(nowIdx).attr("data-num"))

        $slides.stop().animate({
         left: -760 * nowIdx
      },function(){
            if(nowIdx===7){

                $slides.css({
                    left : -760
                });
    
                nowIdx = 0;                
            }
        });

 
    });

        //자동재생
        $btn_play.on('click', function(){
            if($(this).hasClass('pause')){
    
                $(this).removeClass('pause');
                clearInterval(intervalKey);
    
            }else{
                $(this).addClass('pause');
                
                intervalKey = setInterval(function(){
                    $btn_next.trigger('click');
                },3000);            
            }
        });

        $(window).on('load', function(){
            intervalKey = setInterval(function(){
            $btn_next.trigger('click');
            },3000);
        });


}

// 버튼 클릭시 d:n 처리한 컨테이너 노출
{
const $netButton1=$('footer > div.f-container > div.network > ul > li.net1');
const $netButton2=$('footer > div.f-container > div.network > ul > li.net2');
const $netButton3=$('footer > div.f-container > div.network > ul > li.net3');
const $liContain1=$('footer > div.f-container > div.network > ul > li > div.net-sub.sub1');
const $liContain2=$('footer > div.f-container > div.network > ul > li > div.net-sub.sub2');
const $liContain3=$('footer > div.f-container > div.network > ul > li > div.net-sub.sub3');

const $border1= $('footer > div.f-container > div.network > ul > li:nth-child(1)');
const $border2= $('footer > div.f-container > div.network > ul > li:nth-child(2)');
const $border3= $('footer > div.f-container > div.network > ul > li:nth-child(4)');

const $search= $('header > div.h-container > .search > li:nth-child(1)');
const $search_bg= $('header > div.h-container > .bigsech');


$search.on('click', function(){

    if  ($search_bg.css('display') == 'none') { 
            
        $search_bg.slideDown();
        
        }else{ 
        
            $search_bg.slideUp();

        }
});


$netButton1.on('click',function(evt){
    evt.preventDefault();

    if  ($liContain1.css('display') == 'none') { 
            
        $liContain1.slideDown();

        $border1.css({
            "border":"1px solid #222",
            "border-radius": "10px 0 0 10px",
            "box-sizing": "border-box"
        });
        
        }else{ 
        
            $liContain1.slideUp();

            $border1.css({
                "border":"#ccc",
                "border-radius": "10px 0 0 10px"
            });

        }
});

$netButton2.on('click',function(evt){
    evt.preventDefault();

    if  ($liContain2.css('display') == 'none') { 
            
        $liContain2.slideDown();
        
        $border2.css({
            "border":"1px solid #222",
            "box-sizing": "border-box"
        });
        
        }else{ 
        
            $liContain2.slideUp();

            $border2.css({
                "border":"#ccc"
            });
        }
});

$netButton3.on('click',function(evt){
    evt.preventDefault();

    if  ($liContain3.css('display') == 'none') { 
            
        $liContain3.slideDown();

        $border3.css({
            "border":"1px solid #222",
            "border-radius": "0px 10px 10px 0",
            "box-sizing": "border-box"
        })
        
        }else{ 
        
            $liContain3.slideUp();

            $border3.css({
                "border":"#ccc",
                "border-radius": "0px 10px 10px 0" 
            })
        }
});


}

// 슬라이드 all메뉴 클릭 이벤트
{
    const $menu = $('section > article > div.slides > .btn_menu');
    const $lightbox = $('#wrap > section > .shadow > .lightbox');
    const $shadow = $('#wrap > section > .shadow');

    $menu.on('click', function(evt){
        evt.preventDefault();

        const imgSrc = $(this).attr('href');
        const imgAlt = $(this).children('img').attr('alt');

        
        $lightbox.children('img').attr({
            src : imgSrc,
            alt : imgAlt
        });
        
        $shadow.show();

        $('button.clse').on('click', function(){
            $shadow.hide();
        });
    });

    $shadow.on('click', function(){
        $(this).hide();
    });

    $lightbox.on('click', function(evt){
        evt.stopPropagation();
    });

    $(document).on('keyup', function(evt){
        if(evt.which === 27){
            $shadow.hide();
        }
    });
}