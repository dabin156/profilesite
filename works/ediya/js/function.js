// gnb
{
    const $header = document.querySelector('#wrap header');
    const $gnb= document.querySelector('#wrap header > .gnb-wrap > .gnb > ul');
    const $lnbs= document.querySelectorAll('#wrap> header > .gnb-wrap > .gnb > ul > li > .lnb');
    const $bg_lnb= document.querySelector('#wrap> header > .bg_lnb');

    // window.addEventListener('scroll', function(){
    //     const scrollTop = Math.ceil(window.scrollY);

    //     if(scrollTop>1){
    //         $header.style.marginTop = '60px';
    //     }else{
    //         $header.style.marginTop = 0;
    //     }
    // });

    const navFadeIn = function(){
        $bg_lnb.style.display = 'block';
        $lnbs.forEach(function($lnb){
            $lnb.style.display = 'block';
        });
    };

    const navFadeOut = function(){
        $bg_lnb.style.display = 'none';
        $lnbs.forEach(function($lnb){
            $lnb.style.display = 'none';
        });   
    };

    $gnb.addEventListener('mouseenter', function(){
        navFadeIn();
    });

    
    $gnb.addEventListener('mouseleave', function(){
        navFadeOut();      
    });

    $bg_lnb.addEventListener('mouseenter', function(){
        navFadeIn();
    });

    $bg_lnb.addEventListener('mouseleave', function(){
        navFadeOut();      
    });
}

// banner fixed-close
{   const $fixcontainer= document.querySelector('.banner-wrap > .banner-fixed');
    const $close= document.querySelector('.banner-wrap > .banner-fixed > ul > .banner-fixed_close > a ');

    $close.addEventListener('click',function(evt){
        evt.preventDefault();
        $fixcontainer.style.display= 'none';
        
    })
}

// banner slides
{
    const $btnPrev = document.querySelector('.banner-navigation.prev');
    const $btnNext = document.querySelector('.banner-navigation.next');    
    const $slides = document.querySelector('#wrap section > .banner-wrap > .banner > ul');
    const $indicators= document.querySelectorAll('.banner-wrap > .banner > .banner-pagination > ul > li > a');

    let nowIdx= 0;

    $indicators.forEach(function($indicator, idx){
        $indicator.addEventListener('click', function(evt){
            evt.preventDefault();
    
            nowIdx = idx;
            
            $slides.style.left = -1920*nowIdx + 'px';
    
            $indicators.forEach(function(anchor, actIdx){
                anchor.parentElement.classList.toggle('on',actIdx===nowIdx);
            });
        });
    });

    $slides.style.transition = 'all 0.4s ease-in-out';

        
    $btnPrev.addEventListener('click', function(evt){
        evt.preventDefault();
        
        if(nowIdx>0){
            nowIdx--;
        }else{
            nowIdx=3;
        }

        $slides.style.left = 1920 + 'px';
        
        setTimeout(function(){            
            $slides.style.transition = 'none';
            $slides.insertBefore($slides.lastElementChild, $slides.firstElementChild);  
            $slides.style.left = 0;      
            setTimeout(function(){
                $slides.style.transition = 'all 0.4s ease-in-out';    
            },100);
        },400)
        
        $indicators.forEach(function(anchor, actIdx){
            anchor.parentElement.classList.toggle('on',actIdx===nowIdx);
        });
    });
        
    $btnNext.addEventListener('click', function(evt){
        evt.preventDefault();

        if(nowIdx<3){
            nowIdx++;
        }else{
            nowIdx=0;
        }

        $slides.style.left = -1920 + 'px';
        
        setTimeout(function(){            
            $slides.style.transition = 'none';
            $slides.appendChild($slides.firstElementChild);
            $slides.style.left = 0;      
            setTimeout(function(){
                $slides.style.transition = 'all 0.4s ease-in-out';    
            },100);
        },400)
        
        $indicators.forEach(function(anchor, actIdx){
            anchor.parentElement.classList.toggle('on',actIdx===nowIdx);
        });
    });

    const wd= function(){
        window.addEventListener('load', function(){
            intervalKey= setInterval(function(){
    
            $btnNext.click();
    
            },5000);
        });
    };

    wd();
}
// beanist slides
{
    const $slides = document.querySelector('.beanist-wrap > .beanist-product_box');
    const $indicators= document.querySelectorAll('.beanist-wrap > .beanist-paginatioin > ul > li > a');

    let nowIdx= 0;


    $indicators.forEach(function($indicator, idx){
        $indicator.addEventListener('click', function(evt){
            evt.preventDefault();
    
            nowIdx = idx;
            
            $slides.style.left = -1168 * nowIdx + 'px';

            setTimeout(function(){            
                $slides.style.transition = 'none';
                $slides.appendChild($slides.firstElementChild);
                $slides.style.left = 0;      
                setTimeout(function(){
                    $slides.style.transition = 'all 0.4s ease-in-out';    
                },100);
            },300)
            
            $indicators.forEach(function(anchor, actIdx){
                anchor.parentElement.classList.toggle('on',actIdx===nowIdx);
            });

        });
    });

    
}

// footer info-wrap anchor breaker
{
    const $info = document.querySelector('#wrap footer > .info-wrap > .info-area > ul');

    $info.addEventListener('click',function(evt){
        evt.preventDefault();
    });
}

