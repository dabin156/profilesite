
// 슬라이드
{
const $indicators= document.querySelectorAll('section>article>figure>a>img');
const $eat= document.querySelectorAll('section>article>figure>a>.food');
const $festi= document.querySelectorAll('section>article>figure>a>.party');
const $shop= document.querySelectorAll('section>article>figure>a>.stor');



// 썸넬 셀렉팅
const $place= document.querySelector('section>.slides>.sl-container');
const $food= document.querySelector('section>.eat>.eat-container');
const $fsval= document.querySelector('section>.fsval>.fsval-container');
const $cash= document.querySelector('section>.store>.store-container');

let nowIdx= 0;

$indicators.forEach(function($indicators, idx){
    $indicators.addEventListener('click',function(evt){
        evt.preventDefault();

        nowIdx= idx;

        $place.style.left= -800*nowIdx + 'px';

    });

});


$eat.forEach(function($eat, idx){
    $eat.addEventListener('click',function(evt){
        evt.preventDefault();

        nowIdx= idx;

        $food.style.left= -800*nowIdx + 'px';

    });

});


$festi.forEach(function($festi, idx){
    $festi.addEventListener('click',function(evt){
        evt.preventDefault();

        nowIdx= idx;

        $fsval.style.left= -800*nowIdx + 'px';

    });

});



$shop.forEach(function($shop, idx){
    $shop.addEventListener('click',function(evt){
        evt.preventDefault();

        nowIdx= idx;

        $cash.style.left= -800*nowIdx + 'px';

    });

});
}

{

// 스크롤


//네비 셀렉팅
const $mnus=document.querySelectorAll('header>nav>.gnb>li>a');

const arrTopVal = [];

let nowIdx= 0;
let oldIdx= nowIdx;

document.querySelectorAll('article').forEach(function($article,idx){
    arrTopVal[idx]= $article.offsetTop;
});

console.log('arrTopVal =',arrTopVal);

$mnus.forEach(function($mnu, idx){
    $mnu.addEventListener('click',function(evt){
        evt.preventDefault();

    //   alert('dd');

    window.scrollTo({top:arrTopVal[idx]-700, behavior: 'smooth'});

    });
});

window.addEventListener('scroll',function(){
    const scrollTop= Math.ceil(window.scrollY);
    console.log(`scrollTop=${scrollTop}`);

    for(let i=0;i<$mnus.length;i++ ){
        if(scrollTop >= arrTopVal[i]-700){

            oldIdx=nowIdx;
            nowIdx=i;

            $mnus[oldIdx].parentElement.classList.remove('on');
            $mnus[nowIdx].parentElement.classList.add('on');

        }else if(scrollTop < arrTopVal[0]-700){
            $mnus[nowIdx].parentElement.classList.remove('on');
        }
    };
});


}