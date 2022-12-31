const $myvideo = document.getElementById('myvideo');

const $btnPlay= $('.play');
const $btnPause= $('.pause');
const $btnResume= $('.resume');

$btnPlay.on('click', function(){
    $myvideo.load(); //처음으로 다시 되돌아감. 즉 처음부터 시작.
    $myvideo.play(); //멈춘 지점에서 재생함.
});

$btnPause.on('click',function(){
    $myvideo.pause(); //일시정지
});

$btnResume.on('click',function(){
    $myvideo.play();
});


