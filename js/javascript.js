$(function(){
    
    //추천검색어
    const $input = $('.search>form>fieldset>input');
    const $auto_complete = $('.auto_complete');
    const $btn_cls = $('.auto_cls')
    $input.on('click',function(e){
        $auto_complete.fadeIn(300)
        e.stopPropagation();
        $input.value(" ")
    });
    $btn_cls.on('click',function(evt){
        evt.preventDefault();
        $auto_complete.hide();
    });
    //영역외 클릭시 팝업닫기
    $("body").on('click',function(){
        //검색어 팝업닫기
        $auto_complete.hide();
        //로그인 팝업닫기
        $loginPop.hide();
        $joinbtn.removeClass('on');
    });
    
    
    //메인메뉴
    const $nav = $("header>nav");
    const $gnb = $("header>nav>.gnb>li");
    const $sub = $gnb.find(".sub");
    let nowIdx = 0;
    $gnb.on({
        "mouseenter":function(){
            nowIdx = $gnb.index(this);
            $sub.hide().eq(nowIdx).show().parent().addClass('show').siblings().removeClass("show");
        }         
    });
    $nav.on('mouseleave',function(){
        $sub.hide();
    });



    //로그인 팝업
    const $login = $('.join_box');
    const $loginPop = $('.join_box>.popup_join');
    const $loginCls = $('.join_sns>.join_cls');
    const $joinbtn = $('.join_box>button');
    $login.on('click',function(e){
        $loginPop.toggle().parent().find('button').toggleClass('on');
        e.stopPropagation();
    });
    $loginCls.on('click',function(){
        $loginPop.hide();
        $joinbtn.removeClass('on');
    });

    //신규앨범
    const $new_album_prev = $('.new_music_nav>li>.prev');
    const $new_album_next = $('.new_music_nav>li>.next');
    const $albumslides = $('.new_music_prame>.new_music_album');
    let albumIdx = 0;
    //new_music_nav prev에 대한 클릭이벤트
    $new_album_next.on('click',function(evt){
        evt.preventDefault();
        albumIdx = $('.new_music_nav>li').index(this)
        $albumslides.stop().animate({
            left : 960*albumIdx
        },250);
        $('.new_music_page>li>span').text('2')
        $(this).parent().addClass('on').siblings().removeClass('on')
    });
    //new_music_nav next에 대한 클릭이벤트
    $new_album_prev.on('click',function(evt){
        evt.preventDefault();
        albumIdx = $('.new_music_nav>li').index(this)
        $albumslides.stop().animate({
            left : 0*albumIdx
        },250);
        $('.new_music_page>li>span').text('1')
        $(this).parent().addClass('on').siblings().removeClass('on')
    });
    

    //배너
    const $bnr = $('section>.main_bnr>.main>.bnr>.slides-bnr>li');
    const $bnr_ict = $('section>.main_bnr>.main>.bnr>.slides-bnr-indicator>li>a');
    const $bnr_toggle = $('section>.main_bnr>.main>.bnr>.bnr_toggle');
    let bnrIdx = 0;
    let bnroldIdx = null;
    let intervalkey = null;

    const $bnrAuto = function(){
        intervalkey = setInterval(function(){
            bnroldIdx = bnrIdx;
            if(bnrIdx<5){
                bnrIdx++;
            }else if(bnrIdx=5){
                bnrIdx=0;
            }
            
            $bnr.eq(bnroldIdx).stop().fadeOut(300);
            $bnr.eq(bnrIdx).stop().fadeIn(300);
            $bnr_ict.eq(bnrIdx).parent().addClass('on').siblings().removeClass('on')
        },2000);
    };
    //함축예정
    
    $bnr_ict.on('click',function(evt){
        evt.preventDefault();
        clearInterval(intervalkey);
        bnrIdx = $bnr_ict.index(this);
        $bnr_toggle.addClass('pause');
        $bnr.eq(bnrIdx).stop().fadeIn(300);
        $bnr_ict.eq(bnrIdx).parent().addClass('on').siblings().removeClass('on')
    });
    $bnr_toggle.on('click',function(){
        $(this).toggleClass('pause');

        if($(this).hasClass('pause')){
            //재생중 상태
            clearInterval(intervalkey);
            //재생을 멈추는 코드
        }else{
            //멈춰진 상태
            $bnrAuto();
            //자동재생 하는 코드
            // $(this).toggleClass('pause');
        }

    });
    

    //차트
    const $chart_list = $('.chart>.chart_list>li')
    $chart_list.on('mouseover',function(){
        $(this).addClass('on').siblings().removeClass('on')
    });

    //포커스이벤트
    const $focus = $('section>.middle>.focus>.focus_slides>.focus_slides_img>li');
    const $focusind = $('.focus_slides>.focus_slides_indicator>li>a');
    const $focus_toggle = $('.focus>.focus_slides>.focus_slides_toggle');
    const $focus_prev = $('.focus_slides>.btn>.focus_slides_prev')
    const $focus_next = $('.focus_slides>.btn>.focus_slides_next')
    let focusIdx = 0;
    let focusoldIdx = null;
    let intervalkey1 = null;
    //수정예정
    $focus_prev.on('click',function(evt){
        evt.preventDefault();
        if(focusIdx<=6){
            focusIdx--;
        }else if(focusIdx=-1){
            focusIdx=6
        }
        clearInterval(intervalkey1);
        $focus_toggle.addClass('pause')
        $focus.eq(focusIdx).stop().fadeIn(300).siblings().fadeOut(300);
        $focusind.eq(focusIdx).parent().addClass('on').siblings().removeClass('on')
    });
    //수정
    $focus_next.on('click',function(evt){
        evt.preventDefault();
        if(focusIdx<=5){
            focusIdx++;
        }else if(focusIdx=6){
            focusIdx=0;
        }
        clearInterval(intervalkey1);
        $focus_toggle.addClass('pause')
        $focus.eq(focusIdx).stop().fadeIn(300).siblings().fadeOut(300);
        $focusind.eq(focusIdx).parent().addClass('on').siblings().removeClass('on')
    });
    const $focusAuto = function(){
        intervalkey1 = setInterval(function(){
            focusoldIdx = focusIdx;
            if(focusIdx<6){
                focusIdx++;
            }else if(focusIdx=6){
                focusIdx=0
            }
            $focus.eq(focusoldIdx).stop().fadeOut(300);
            $focus.eq(focusIdx).stop().fadeIn(300);
            $focusind.eq(focusIdx).parent().addClass('on').siblings().removeClass('on')
        },2000);
    }
    $focusind.on('click',function(evt){
        evt.preventDefault();
        focusIdx = $focusind.index(this);
        clearInterval(intervalkey1);
        $focus_toggle.addClass('pause');
        $focus.eq(focusoldIdx).stop().fadeOut(300);
        $focus.eq(focusIdx).stop().fadeIn(300);
        $focusind.eq(focusIdx).parent().addClass('on').siblings().removeClass('on')
    });
    $focus_toggle.on('click',function(evt){
        evt.preventDefault();
        $(this).toggleClass('pause');

        if($(this).hasClass('pause')){
            //재생중 상태
            clearInterval(intervalkey1);
            //재생을 멈추는 코드
        }else{
            //멈춰진 상태
            $focusAuto();
            //자동재생 하는 코드
            // $(this).toggleClass('pause');
        }
    });

    //공지사항
    const $noticeCon = $('footer>.footer_top>.notice>.container>.notice_slides>li');
    const $noticeprev = $('.footer_top>.notice>.btn>.prev');
    const $noticenext = $('.footer_top>.notice>.btn>.next');
    let noticeIdx = 0;
    $noticenext.on('click',function(evt){
        evt.preventDefault();
        if(noticeIdx<2){
            noticeIdx++;
        }else if(noticeIdx=2){
            noticeIdx=0;
        }
        $noticeCon.hide().eq(noticeIdx).fadeIn(300);
    });
    $noticeprev.on('click',function(evt){
        evt.preventDefault();
        if(noticeIdx>0){
            noticeIdx--;
        }else if(noticeIdx=-1){
            noticeIdx=2;
        }
        $noticeCon.hide().eq(noticeIdx).fadeIn(300);
    });
    console.log(noticeIdx);
    //윈도우 시작시 자동실행
    $(window).on('load',function(){
        $bnrAuto();
        $focusAuto();
    });
});