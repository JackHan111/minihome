$(function(){
    const $contactbtn = $('#wrap>.container>.outline>header>.snb>#main>.select>.show');
    const $contact = $('#wrap>.container>.outline>header>.snb>#main>.select>ul');
    $contactbtn.on('click',function(evt){
        evt.preventDefault();
        evt.stopPropagation();
        $contact.show();
    });
    $('body').on('click',function(){
        $contact.hide();
        $choosemini.fadeOut(300);
    });

    const playaudio = $('#wrap>aside>.audio>.player>.btn>li>.play');
    const stopaudio = $('#wrap>aside>.audio>.player>.btn>li>.stop');
    const playnext = $('#wrap>aside>.audio>.player>.btn>li>.next');
    const $myAudio = document.getElementById("myAudio");
    const title = $('#wrap>aside>.audio>.player>.tit>span');
    const $progress = document.getElementsByTagName('progress');
    let nowplaying = 0;
    let musicStop = true;
    setInterval(function(){
        if(musicStop == false){
            $progress[0].value=nowplaying;
            nowplaying++;
            if(nowplaying>100){
                musicStop = true;
            }
        }
    },2580)
    //현재 재생중인 mp3 파일의 상태값을 출력
    playaudio.on('click',function(evt){
        evt.preventDefault();
        $myAudio.volume = 0.5;
        $myAudio.play();
        title.text('공원에서 - 유희열')
        musicStop = false;
        
    }); 
    stopaudio.on('click',function(evt){
        evt.preventDefault();
        $myAudio.pause();
        title.text('재생버튼을 눌러주세요')
        musicStop = true;
    });
    playnext.on('click',function(evt){
        evt.preventDefault();
        $myAudio.load();
        $myAudio.volume = 0.5;
        $myAudio.play();
        title.text('공원에서 - 유희열')
        musicStop= false;
        nowplaying = 0;
        
    })
    

    const bg_pink = $('#wrap>aside>.info>.bg_color>li:nth-child(2)>a');
    const bg_skyblue = $('#wrap>aside>.info>.bg_color>li:nth-child(3)>a');
    const bg_yellow = $('#wrap>aside>.info>.bg_color>li:nth-child(4)>a');
    const bg_yellowgreen = $('#wrap>aside>.info>.bg_color>li:nth-child(5)>a');

    bg_pink.on('click',function(evt){
        evt.preventDefault();
        $('#wrap').css({
            "background-color" : "#ffb7ce"
        })
    })
    bg_skyblue.on('click',function(evt){
        evt.preventDefault();
        $('#wrap').css({
            "background-color" : "#80c3f0"
        })
    })
    bg_yellow.on('click',function(evt){
        evt.preventDefault();
        $('#wrap').css({
            "background-color" : "#fcff00"
        })
    })
    bg_yellowgreen.on('click',function(evt){
        evt.preventDefault();
        $('#wrap').css({
            "background-color" : "#00ff1e"
        })
    })

    const $container = $('#main>.thumb>.container>.list')
    const prev = $('#main>.thumb>.container>.left')
    const next = $('#main>.thumb>.container>.right')

    prev.on('click',function(evt){
        evt.preventDefault();
        $container.stop().animate({
            left : 0
        },500)
        $(this).removeClass('on').siblings('a').addClass('on');
    })
    next.on('click',function(evt){
        evt.preventDefault();
        $container.stop().animate({
            left : -35
        },500)
        $(this).removeClass('on').siblings('a').addClass('on');
    })

    // 메뉴바
    const $gnb = $('#wrap>.container>.outline>nav>.gnb>li>a');
    const $main = $('#wrap>.container>.outline>header>.snb>div');
    const $section = $('#wrap>.container>.outline>#cont>section')
    let $gnbIdx = 0;

    $gnb.on('click',function(evt){
        evt.preventDefault();
        $gnbIdx = $gnb.index(this);
        $main.eq($gnbIdx).show().siblings().hide();
        $gnb.eq($gnbIdx).parent().addClass('on').siblings().removeClass('on')
        $section.eq($gnbIdx).show().siblings('section').hide();
        if($gnbIdx==4){
            $main.eq(0).show().siblings().hide();
        }
    });
    

    //프로필
    const $profileBtn = $('#wrap>.container>.outline>header>.snb>#profile>.category>.tab>li>a');
    const $profilePg =$('#wrap>.container>.outline>#cont>section#profile>div')
    let $profileIdx = 0;

    $profileBtn.on('click',function(evt){
        evt.preventDefault();
        $profileIdx=$profileBtn.index(this);
        $profilePg.eq($profileIdx).show().siblings().hide();
        $profileBtn.eq($profileIdx).parent().addClass('on').siblings().removeClass('on');
    });

    //게시판
    const $board_tit = $('#board>.on_board>.b_body>.post>.post_tit');
    const $board_page = $('#board>.on_board>.b_body>.post>.board_cont');
    const $board_snb = $('#wrap>.container>.outline>header>.snb>#board>.category>.tab>li>a')
    const $board = $('section#board>.on_board');
    let $boardSnbIdx = 0;
    let $boardIdx = 0;
    $board_snb.on('click',function(evt){
        evt.preventDefault();
        $boardSnbIdx=$board_snb.index(this);
        $board.eq($boardSnbIdx).show().siblings().hide();
    })
    $board_tit.on('click',function(evt){
        evt.preventDefault();
        $boardIdx = $board_tit.index(this);
        console.log($boardIdx);
        $board_page.eq($boardIdx).show().parent().siblings().children('.board_cont').hide();
    })


    // 방명록
    const $minimi = $('#visitor>.visitor_area>.visitor_input>form>fieldset>a');
    const $choosemini =$('#visitor>.visitor_area>.visitor_input>form>fieldset>p');
    $minimi.on('click',function(evt){
        evt.preventDefault();
        evt.stopPropagation();
        $choosemini.fadeIn(300);
    })
    

    //바로가기
    const $quickMnubtn = $('section#main>.main_top>.shot_cut>li>a');
    const $quickMove = $('section#main>.main_top>.news>li>a');
    const $quickview = $('section#main>.thumb>.container>.list>li>a')
    let $quickMnuIdx=0;
    let $quickMoveIdx=0;
    let $quickviewIdx=0;
    const $photoScroll = $('#wrap>.container>.outline>#cont>section#gallery>.photo_gallery');
    $photoScroll.on('scroll',function(){
        let scrollTop = $photoScroll.scrollTop();
        console.log(scrollTop);
    })
    $quickMnubtn.on('click',function(evt){
        evt.preventDefault();
        $quickMnuIdx = $quickMnubtn.index(this);
        $main.eq($quickMnuIdx+2).show().siblings().hide();
        $gnb.eq($quickMnuIdx+2).parent().addClass('on').siblings().removeClass('on');
        $section.eq($quickMnuIdx+2).show().siblings('section').hide();
        if($gnbIdx==4){
            $main.eq(0).show().siblings().hide();
        }
    })
    $quickMove.on('click',function(evt){
        evt.preventDefault()
        $quickMoveIdx=$quickMove.index(this);
        $('#wrap>.container>.outline>#cont>section#gallery').show().siblings('section').hide();
        $('#wrap>.container>.outline>header>.snb>div#gallery').show().siblings().hide();
        $photoScroll.stop().animate({
            scrollTop : 575*$quickMoveIdx
        },300)
        $gnb.eq(2).parent().addClass('on').siblings().removeClass('on')
    })
    
    $quickview.on('click',function(evt){
        evt.preventDefault();
        $quickviewIdx=$quickview.index(this);
        $('#wrap>.container>.outline>#cont>section#gallery').show().siblings('section').hide();
        $('#wrap>.container>.outline>header>.snb>div#gallery').show().siblings().hide();
        $photoScroll.stop().animate({
            scrollTop : 575*$quickviewIdx
        },300)
        $gnb.eq(2).parent().addClass('on').siblings().removeClass('on')
    })
    

});

