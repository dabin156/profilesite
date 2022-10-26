
// 바닐라
if(true){

    const $container=document.querySelector('.slides-container');
    const $indicators= document.querySelectorAll('.slides-pagination a');
    const $btnPrev= document.querySelector('.prev');
    const $btnNext= document.querySelector('.next');
    const $btnAuto= document.querySelector('.btn_auto');

    let intervalKey= null;

    let nowIdx= 1; //맨 처음에 보이는게 1임. 맨 뒤에꺼 앞으로 복사한게 0 
    let oldIdx= nowIdx;

    $indicators.forEach(function($indicator, idx){
        $indicator.addEventListener('click',function(evt){
            evt.preventDefault();

            oldIdx= nowIdx-1; // 처음의 nowIdx가 1로 설정 되어 있어서 첫번째 인디케이터를 누르면 0이어야 하는데 1로 떠서 -1을 붙여준것.
            nowIdx= idx+1; // 맨 뒤에껄 앞에 복사한 슬라이드 때문에 인디케이터랑 동일하게 0부터 시작하는게 아닌 1부터 시작하니까 숫자들이 인디보다1 높은 상황이라 +1붙여준것.

            console.log(`oldidx=${oldIdx}`);
            console.log(`nowidx=${nowIdx}`);

            // 활성화표시 - on추가
            $indicators[idx].parentElement.classList.add('on');

            // 활성화표시 - on제거
            $indicators[oldIdx].parentElement.classList.remove('on');

            // 컨테이너 이동
            $container.style.left= -1120*nowIdx + 'px';
        });
    });

    // 이전버튼
    $btnPrev.addEventListener('click',function(evt){
        evt.preventDefault();

        oldIdx= nowIdx;
        nowIdx--;

        $container.style.left= -1120*nowIdx + 'px';

        if(nowIdx===0){ //맨 처음 페이지에서 이전 눌렀을때를 설정 하는거니까 idx를 0 과 같으면으로 설정. 이전다음은 인디케이터처럼 idx의 + - 요소 생각하며 정하지 않아도 됨
            setTimeout(function(){

                $container.style.transition= 'none'; //논처리 안하면 순식간에 이동 시키는게 티가 나서 처리.
                $container.style.left= -1120*5 + 'px';
                // 오른쪽 끝에 있는 슬라이드가 보이도록 순식간에 5페이지 만큼 이동 시킨것.
                
                setTimeout(function(){
                    $container.style.transition= 'all 0.4s ease-in-out'; //첫 페이지에서 이전 버튼 누르고나면, 그 다음껏들은 트렌지션 CSS준게 안돼서 트렌지션 될 수 있도록 추가한것. 
                },100);
            },400);
            
            nowIdx= 5;  //첫 페이지에서 이전 버튼 눌렀을때 5번 인덱스가 오니까 nowIdx를 5로 설정
        }

        // 인디케이터 활성화 표시
        $indicators[nowIdx-1].parentElement.classList.add('on');
        $indicators[oldIdx-1].parentElement.classList.remove('on');
    });



    // 다음버튼
    $btnNext.addEventListener('click',function(evt){
        evt.preventDefault();

        oldIdx= nowIdx;
        nowIdx++;

        $container.style.left= -1120*nowIdx + 'px';

        if(nowIdx===6){ //맨 끝에서의 다음 버튼 누를때 효과니까 인덱스 6.
            setTimeout(function(){

                $container.style.transition= 'none'; 
                $container.style.left= -1120*1 + 'px'; //이전 버튼은 맨 끝으로 이동하는 거라서 *5였는데 얘는 끝에서 하나만 이동하면 되니까 *1.  그냥 -1120으로 둬도 됨.
                
                
                setTimeout(function(){
                    $container.style.transition= 'all 0.4s ease-in-out';
                },100);
            },400);
            
            nowIdx= 1; //끝에서 한개 이동해서 처음껄로 돌아왔으니까 1
        }

        // 인디케이터 활성화 표시
        $indicators[nowIdx-1].parentElement.classList.add('on');
        $indicators[oldIdx-1].parentElement.classList.remove('on');
    });

    // 재생 버튼 클릭 이벤트
    $btnAuto.addEventListener('click',function(){

        //클래스 리스트중에 확인 하는거니까 이런건 . 없이 클래스명만 써도 됨. 그리구 앞에 클래스 라는 단어들이 있으면 클래스명 쓸때 점 안찍어도 됨.
        if(this.classList.contains('pause')){ //pause가 있다는건 play중이라는 뜻. 즉, 플레이 중이면... 

            // 클릭하면 포즈를 없애고 btn에 스타일 했던 재생표시로 바뀌면서 슬라이드 재생 멈춤.
            this.classList.remove('pause'); 
            clearInterval(intervalKey);

        }else{
            
            // 멈춘 상태에서 버튼을 다시 누르면 없앴던 포즈가 재생성 되면서 멈췄던 슬라이스 재생.
              this.classList.add('pause');

                intervalKey= setInterval(function(){
                 $btnNext.click();
              },2000);
        }
    });



    // 페이지에 이미지와 글이 나타났을때의 이벤트. > 페이지 들어가면 슬라이드가 바로 자동재생 되게 하는것. 

    const wd= function(){
        window.addEventListener('load', function(){
            intervalKey= setInterval(function(){
    
            $btnNext.click(); //클릭 이벤트를 강제로 발생 시켜서 안눌러도 재생 되는것.
    
            },2000); //2초마다 슬라이드가 자동으로 넥스트 쪽으로 움직이는것.
        });
    };

    wd();



}






 //제이쿼리
if(false){
    const $container = $('.slides-container');
    const $indicator = $('.slides-pagination a');
    const $btnPrev = $('.prev');
    const $btnNext = $('.next');
    const $btnAuto = $('.btn_auto');

    let nowIdx = 1;

    $indicator.on('click', function(evt){
        evt.preventDefault();

        nowIdx = $indicator.index(this)+1;

        //활성표시 - on추가
        $indicator.eq(nowIdx-1).parent().addClass('on').siblings().removeClass('on');

        //컨테이너 이동
        $container.stop().animate({
         left: -1120 * nowIdx
      });
    });


    //이전버튼
    $btnPrev.on('click', function(evt){
        evt.preventDefault();

        nowIdx--;
        console.log(`nowIdx = ${nowIdx}`);

        //컨테이너 이동
        $container.stop().animate({
         left: -1120 * nowIdx
      },function(){
            if(nowIdx===0){
                //오른쪽 끝에 있는 슬라이드가 보이도록 이동
                $container.css({
                    left : -1120*5
                });
    
                nowIdx = 5;
            }//end of if
       
            //활성표시
            $indicator.eq(nowIdx-1).parent().addClass('on').siblings().removeClass('on');
        });


    });

    //다음버튼
    $btnNext.on('click', function(evt){
        evt.preventDefault();

        nowIdx++;
        console.log('nowIdx = ',nowIdx)

        //컨테이너 이동
        $container.stop().animate({
         left: -1120 * nowIdx
      },function(){
            if(nowIdx===6){
                //오른쪽 끝에 있는 슬라이드가 보이도록 이동
                $container.css({
                    left : -1120
                });
    
                nowIdx = 0;

            }//end of if

            //활성표시
            $indicator.eq(nowIdx-1).parent().addClass('on').siblings().removeClass('on');
            
        });
        
    });


    //자동재생
    $btnAuto.on('click', function(){
        if($(this).hasClass('pause')){//play 중이면....

            $(this).removeClass('pause');
            clearInterval(intervalKey);

        }else{
            $(this).addClass('pause');
            
            intervalKey = setInterval(function(){
                $btnNext.trigger('click');//이벤트강제발생
            },2000);            
        }
    });


    $(window).on('load', function(){
        intervalKey = setInterval(function(){
           //$btnNext.trigger('click');//이벤트강제발생
        },2000);
    });
}



