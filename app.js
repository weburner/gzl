// Initialize Swiper
$(document).ready(function () {


    var isOK = false;
    var preload;
    var swiper_cover;
    var swiper_main;
    var swiper_vertical;
    var swiper_vertical_b;
    var currentIndex = 0;
    var currentIndex_swiper_vertical = 0;
    var currentIndex_swiper_vertical_b = 0;
    var page_02 = [];
    var page_04 = [];
    var playing;

    var cover_imgs = [
        {src:"imgs/01-01-icon.svg", type:createjs.AbstractLoader.IMAGE},
        {src:"imgs/01-02-btn.svg", type:createjs.AbstractLoader.IMAGE},
        {src:"imgs/01-02-icon.svg", type:createjs.AbstractLoader.IMAGE},
        {src:"imgs/01-02-logo-gzl.svg", type:createjs.AbstractLoader.IMAGE},
        {src:"imgs/01-02-logo-royal.svg", type:createjs.AbstractLoader.IMAGE},
        {src:"imgs/01-02-slogan.svg", type:createjs.AbstractLoader.IMAGE},
        {src:"imgs/01-07-button1.svg", type:createjs.AbstractLoader.IMAGE},
        {src:"imgs/01-07-button2.svg", type:createjs.AbstractLoader.IMAGE},
        {src:"imgs/01-07-button3.svg", type:createjs.AbstractLoader.IMAGE},
        {src:"imgs/01-07-button4.svg", type:createjs.AbstractLoader.IMAGE},
        {src:"imgs/01-07-click.svg", type:createjs.AbstractLoader.IMAGE},
        {src:"imgs/01-07-text.svg", type:createjs.AbstractLoader.IMAGE},
        "imgs/01-02-bg.jpg",
        "imgs/01-03-bg.jpg",
        "imgs/01-04-bg.jpg",
        "imgs/01-06-bg.jpg",
        "imgs/01-07-bg.jpg"
    ];
    var cover_menu_imgs = [
        {src:"imgs/01-07-button1.svg", type:createjs.AbstractLoader.IMAGE},
        {src:"imgs/01-07-button2.svg", type:createjs.AbstractLoader.IMAGE},
        {src:"imgs/01-07-button3.svg", type:createjs.AbstractLoader.IMAGE},
        {src:"imgs/01-07-button4.svg", type:createjs.AbstractLoader.IMAGE},
        {src:"imgs/01-07-click.svg", type:createjs.AbstractLoader.IMAGE},
        {src:"imgs/01-07-text.svg", type:createjs.AbstractLoader.IMAGE},

        "imgs/01-04-bg.jpg",
        "imgs/01-06-bg.jpg",
        "imgs/01-07-bg.jpg"
    ];
    var page_02_imgs = [
        "imgs/02-01-bg.jpg",
        {src:"imgs/02-01-head.svg", type:createjs.AbstractLoader.IMAGE},
        {src:"imgs/02-01-text.svg", type:createjs.AbstractLoader.IMAGE},
        {src:"imgs/back-to-top.svg", type:createjs.AbstractLoader.IMAGE},
        "imgs/02-02-bg.jpg",
        {src:"imgs/02-02-head.svg", type:createjs.AbstractLoader.IMAGE},
        {src:"imgs/02-02-text.svg", type:createjs.AbstractLoader.IMAGE},
        "imgs/02-03-bg.jpg",
        {src:"imgs/02-03-head.svg", type:createjs.AbstractLoader.IMAGE},
        {src:"imgs/02-03-text.svg", type:createjs.AbstractLoader.IMAGE},
        "imgs/02-04-bg.jpg",
        {src:"imgs/02-04-head.svg", type:createjs.AbstractLoader.IMAGE},
        {src:"imgs/02-04-text.svg", type:createjs.AbstractLoader.IMAGE},
        "imgs/02-05-bg.jpg",
        {src:"imgs/02-05-head.svg", type:createjs.AbstractLoader.IMAGE},
        {src:"imgs/02-05-text.svg", type:createjs.AbstractLoader.IMAGE},
        "imgs/02-06-bg.jpg",
        {src:"imgs/02-06-head.svg", type:createjs.AbstractLoader.IMAGE},
        {src:"imgs/02-06-text.svg", type:createjs.AbstractLoader.IMAGE},
        "imgs/02-07-bg.jpg",
        {src:"imgs/02-07-head.svg", type:createjs.AbstractLoader.IMAGE},
        {src:"imgs/02-07-text.svg", type:createjs.AbstractLoader.IMAGE},
        "imgs/02-08-bg.jpg",
        {src:"imgs/02-08-head.svg", type:createjs.AbstractLoader.IMAGE},
        {src:"imgs/02-08-text.svg", type:createjs.AbstractLoader.IMAGE},
        "imgs/02-09-bg.jpg",
        {src:"imgs/02-09-head.svg", type:createjs.AbstractLoader.IMAGE},
        {src:"imgs/02-09-text.svg", type:createjs.AbstractLoader.IMAGE},
        "imgs/02-10-bg.jpg",
        {src:"imgs/02-10-head.svg", type:createjs.AbstractLoader.IMAGE},
        {src:"imgs/02-10-text.svg", type:createjs.AbstractLoader.IMAGE},
        "imgs/02-11-bg.jpg",
        {src:"imgs/02-11-button.svg", type:createjs.AbstractLoader.IMAGE},
        {src:"imgs/02-11-logo.svg", type:createjs.AbstractLoader.IMAGE},
        {src:"imgs/02-11-text1.svg", type:createjs.AbstractLoader.IMAGE},
        {src:"imgs/02-11-text2.svg", type:createjs.AbstractLoader.IMAGE}
    ];
    var page_03_imgs = [
        "imgs/03-01-bg.jpg",
        {src:"imgs/03-01-boat.svg", type:createjs.AbstractLoader.IMAGE},
        {src:"imgs/03-01-head.svg", type:createjs.AbstractLoader.IMAGE},
        {src:"imgs/03-01-line1.svg", type:createjs.AbstractLoader.IMAGE},
        {src:"imgs/03-01-line2.svg", type:createjs.AbstractLoader.IMAGE},
        {src:"imgs/03-01-line3.svg", type:createjs.AbstractLoader.IMAGE},
        {src:"imgs/03-01-link1.svg", type:createjs.AbstractLoader.IMAGE},
        {src:"imgs/03-01-link2.svg", type:createjs.AbstractLoader.IMAGE},
        {src:"imgs/03-01-link3.svg", type:createjs.AbstractLoader.IMAGE},
        {src:"imgs/03-01-text.svg", type:createjs.AbstractLoader.IMAGE}
    ];
    var page_04_imgs = [
        {src:"imgs/back-to-top.svg", type:createjs.AbstractLoader.IMAGE},
        "imgs/04-01-bg.jpg",
        {src:"imgs/04-01-head.svg", type:createjs.AbstractLoader.IMAGE},
        {src:"imgs/04-01-play.svg", type:createjs.AbstractLoader.IMAGE},
        {src:"imgs/04-01-text.svg", type:createjs.AbstractLoader.IMAGE},
        {src:"imgs/04-01-video.svg", type:createjs.AbstractLoader.IMAGE},
        "imgs/04-03-bg.jpg",
        {src:"imgs/04-03-click.svg", type:createjs.AbstractLoader.IMAGE},
        {src:"imgs/04-03-head.svg", type:createjs.AbstractLoader.IMAGE},
        "imgs/04-03-icon1.png",
        "imgs/04-03-icon2.png",
        "imgs/04-03-icon3.png",
        "imgs/04-03-icon4.png",
        "imgs/04-03-icon5.png",
        {src:"imgs/04-03-text.svg", type:createjs.AbstractLoader.IMAGE},
        {src:"imgs/04-03-title.svg", type:createjs.AbstractLoader.IMAGE},
        "imgs/04-04-bg.jpg",
        "imgs/04-04-text-bg.png",
        {src:"imgs/04-04-text.svg", type:createjs.AbstractLoader.IMAGE},
        "imgs/04-05-bg.jpg",
        "imgs/04-05-text-bg.png",
        {src:"imgs/04-05-text.svg", type:createjs.AbstractLoader.IMAGE},
        "imgs/04-06-bg.jpg",
        "imgs/04-06-text-bg.png",
        {src:"imgs/04-06-text.svg", type:createjs.AbstractLoader.IMAGE},
        "imgs/04-07-bg.jpg",
        "imgs/04-07-text-bg.png",
        {src:"imgs/04-07-text.svg", type:createjs.AbstractLoader.IMAGE},
        "imgs/04-08-bg.jpg",
        "imgs/04-08-text-bg.png",
        {src:"imgs/04-08-text.svg", type:createjs.AbstractLoader.IMAGE},
        "imgs/04-09-bg.jpg",
        "imgs/04-09-text-bg.png",
        {src:"imgs/04-09-text.svg", type:createjs.AbstractLoader.IMAGE},
        "imgs/04-10-bg.jpg",
        "imgs/04-10-text-bg.png",
        {src:"imgs/04-10-text.svg", type:createjs.AbstractLoader.IMAGE},
        "imgs/04-11-bg.jpg",
        "imgs/04-11-text-bg.png",
        {src:"imgs/04-11-text.svg", type:createjs.AbstractLoader.IMAGE},
        "imgs/04-12-bg.jpg",
        "imgs/04-12-text-bg.png",
        {src:"imgs/04-12-text.svg", type:createjs.AbstractLoader.IMAGE},
        "imgs/04-13-bg.jpg",
        "imgs/04-13-text-bg.png",
        {src:"imgs/04-13-text.svg", type:createjs.AbstractLoader.IMAGE},
        "imgs/04-14-bg.jpg",
        "imgs/04-14-text-bg.png",
        {src:"imgs/04-14-text.svg", type:createjs.AbstractLoader.IMAGE},
        "imgs/02-11-bg.jpg",
        {src:"imgs/02-11-button.svg", type:createjs.AbstractLoader.IMAGE},
        {src:"imgs/02-11-logo.svg", type:createjs.AbstractLoader.IMAGE},
        {src:"imgs/02-11-text1.svg", type:createjs.AbstractLoader.IMAGE},
        {src:"imgs/02-11-text2.svg", type:createjs.AbstractLoader.IMAGE}
    ];
    var page_05_imgs = [
        "imgs/05-01-bg.jpg",
        {src:"imgs/05-01-booking.svg", type:createjs.AbstractLoader.IMAGE},
        {src:"imgs/05-01-head.svg", type:createjs.AbstractLoader.IMAGE},
        {src:"imgs/05-01-icon.svg", type:createjs.AbstractLoader.IMAGE},
        {src:"imgs/05-01-text.svg", type:createjs.AbstractLoader.IMAGE},
        {src:"imgs/logos.svg", type:createjs.AbstractLoader.IMAGE}
    ];
    var page_06_imgs = [
        "imgs/03-02-1-pic.png",
        {src:"imgs/03-02-1-text.svg", type:createjs.AbstractLoader.IMAGE},
        "imgs/03-02-2-pic.png",
        {src:"imgs/03-02-2-text.svg", type:createjs.AbstractLoader.IMAGE},
        "imgs/03-02-bg.jpg",
        {src:"imgs/03-02-head.svg", type:createjs.AbstractLoader.IMAGE},
        "imgs/03-03-3-pic.png",
        {src:"imgs/03-03-3-text.svg", type:createjs.AbstractLoader.IMAGE},
        "imgs/03-03-4-pic.png",
        {src:"imgs/03-03-4-text.svg", type:createjs.AbstractLoader.IMAGE},
        {src:"imgs/03-04-button.svg", type:createjs.AbstractLoader.IMAGE},
        {src:"imgs/logos.svg", type:createjs.AbstractLoader.IMAGE}
    ];
    var page_07_imgs = [
        "imgs/03-05-1-pic.png",
        {src:"imgs/03-05-1-text.svg", type:createjs.AbstractLoader.IMAGE},
        "imgs/03-05-2-pic.png",
        {src:"imgs/03-05-2-text.svg", type:createjs.AbstractLoader.IMAGE},
        "imgs/03-05-bg.jpg",
        {src:"imgs/03-05-head.svg", type:createjs.AbstractLoader.IMAGE},
        "imgs/03-06-3-pic.png",
        {src:"imgs/03-06-3-text.svg", type:createjs.AbstractLoader.IMAGE},
        "imgs/03-06-4-pic.png",
        {src:"imgs/03-06-4-text.svg", type:createjs.AbstractLoader.IMAGE},
        "imgs/03-07-5-pic.png",
        {src:"imgs/03-07-5-text.svg", type:createjs.AbstractLoader.IMAGE},
        {src:"imgs/03-04-button.svg", type:createjs.AbstractLoader.IMAGE},
        {src:"imgs/logos.svg", type:createjs.AbstractLoader.IMAGE}
    ];
    var page_08_imgs = [
        "imgs/03-08-1-pic.png",
        {src:"imgs/03-08-1-text.svg", type:createjs.AbstractLoader.IMAGE},
        "imgs/03-08-2-pic.png",
        {src:"imgs/03-08-2-text.svg", type:createjs.AbstractLoader.IMAGE},
        "imgs/03-08-bg.jpg",
        {src:"imgs/03-08-head.svg", type:createjs.AbstractLoader.IMAGE},
        "imgs/03-09-3-pic.png",
        {src:"imgs/03-09-3-text.svg", type:createjs.AbstractLoader.IMAGE},
        "imgs/03-09-4-pic.png",
        {src:"imgs/03-09-4-text.svg", type:createjs.AbstractLoader.IMAGE},
        "imgs/03-10-5-pic.png",
        {src:"imgs/03-10-5-text.svg", type:createjs.AbstractLoader.IMAGE},
        "imgs/03-10-6-pic.png",
        {src:"imgs/03-10-6-text.svg", type:createjs.AbstractLoader.IMAGE},
        "imgs/03-11-7-pic.png",
        {src:"imgs/03-11-7-text.svg", type:createjs.AbstractLoader.IMAGE},
        "imgs/03-11-8-pic.png",
        {src:"imgs/03-11-8-text.svg", type:createjs.AbstractLoader.IMAGE},
        {src:"imgs/03-04-button.svg", type:createjs.AbstractLoader.IMAGE},
        {src:"imgs/logos.svg", type:createjs.AbstractLoader.IMAGE}
    ];

    initAudio();
    loadAndShow("cover.html", initCover, cover_imgs);

    function loadAndShow(url, callback, imgs){
        $('#loading').css('opacity', '1');
        $(".outside-content").css('opacity', '0');
        $('#main-content').css('opacity', '0');
        $.get(url, function(response){
            $('#main-content').html(response);
            if(callback){
                callback();
            }
            if(imgs){
                preloadImgs(imgs);
            }
            else{
                hideLoaderShowContent();
            }
        });
    }

    function preloadImgs(imgs){

        preload = new createjs.LoadQueue(true);
        var plugin = {
            getPreloadHandlers: function () {
                return {
                    extensions: ["svg","mp3","png","jpg"],
                    callback: function (item) {
                        var src = item.src;
                        $('[preload-img="'+src +'"]').attr("src", src);
                        $('[preload-bg="'+src +'"]').attr("style", "background-image: url(" + src + ")");
                    }
                };
            }
        };
        preload.installPlugin(plugin);
        preload.loadManifest(imgs);
        preload.on("complete", preloadComplete);
        preload.on("progress", preloadOverallProgress);
    }

    function preloadComplete(e){
        hideLoaderShowContent();
    }

    function preloadOverallProgress(){

        $('#loading-percent').html(Math.round(preload.progress * 100));
    }

    function hideLoaderShowContent(){
        $('#loading').addClass("animated bounceOut").one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
            $("#loading").removeClass("animated bounceOut");
            $("#loading").css('opacity', '0');
            $(".outside-content").css('opacity', '1');
            $("#main-content").css('opacity', '1');
            showOnebyOne("swiper-slide-active");
        });
    }



    function initAudio(){
        $('#music-button').bind('click', function(){

            if (playing == false) {
                $(this).removeClass("down");
                document.getElementById('bg-audio').play();
                playing = true;
            } else {
                $(this).addClass("down");
                document.getElementById('bg-audio').pause();
                playing = false;
            }
        });
    }

    function initCoverMenu(){
        $('#link_button_1').on('click', function(e){
            $('#back_button').show();
            loadAndShow("page-02.html", initPageTwo, page_02_imgs);

        });
        $('#link_button_2').on('click', function(e){
            $('#back_button').show();
            loadAndShow("page-03.html", initPageThree, page_03_imgs);

        });
        $('#link_button_3').on('click', function(e){
            $('#back_button').show();
            loadAndShow("page-04.html", initPageFour, page_04_imgs);

        });
        $('#link_button_4').on('click', function(e){
            $('#back_button').show();
            loadAndShow("page-05.html", initPageFive, page_05_imgs);

        });
    }

    function initCover(){
        var swiper = new Swiper ('#main-content', {
            // Optional parameters
            direction: 'vertical',
            effect:'fade',
            noSwiping:true,
            noSwipingClass:"swiper-no-swiping",
            fade: {
                crossFade: false
            },
            autoplay:1500,
            onInit: function(swiper){
                swiper.stopAutoplay();

                $('.play_button').on('click', function(e){
                    swiper.slideNext(true, 1000);
                    swiper.startAutoplay();

                    document.getElementById('bg-audio').play();
                    playing = true;
                    $('#music-button').removeClass('down');
                });

                initCoverMenu();

            },
            onTransitionEnd: function(swiper){
                if(currentIndex != swiper.activeIndex){
                    showOnebyOne("swiper-slide-active");
                }
                currentIndex = swiper.activeIndex;

                if(swiper.activeIndex == 3){
                    swiper.stopAutoplay();
                    swiper.removeSlide([0,1,2]);
                }
            },
            onTransitionStart: function(swiper){

                if(currentIndex != swiper.activeIndex){
                    hideSlide("swiper-container", "swiper-slide-prev");
                    hideSlide("swiper-container", "swiper-slide-next");
                }

            }
        });

        var swiper_slide = new Swiper ('.swiper_slide', {
            effect:'fade',
            autoplay:2000
        });

    }

    $('#back_button').on('click', function(e){
        $('#back_button').hide();
        loadAndShow("cover-menu.html", initCover, cover_menu_imgs);
    });


    function initPageTwo(){
        swiper_vertical = new Swiper ('#main-content', {
            noSwipingClass:"swiper-vertical-no-swiping",
            // Optional parameters
            direction: 'vertical',
            onInit: function(swiper){

                $('.back_to_top_button').on('click', function(e){
                    swiper.slideTo(0);
                });
            },
            onTransitionEnd: function(swiper){

                if(currentIndex_swiper_vertical != swiper.activeIndex){
                    showOnebyOne("swiper-slide-active");
                }
                currentIndex_swiper_vertical = swiper.activeIndex;
            },
            onTransitionStart: function(swiper){
                if(currentIndex_swiper_vertical != swiper.activeIndex){
                    hideSlide("swiper_vertical", "swiper-slide-prev");
                    hideSlide("swiper_vertical", "swiper-slide-next");
                }
            }
        });
    }

    function initPageFive(){
        $('.swiper-one-page').addClass('swiper-slide-active');

    }

    function initPageThree(){
        $('.swiper-one-page').addClass('swiper-slide-active');
        $('#link_button_5').on('click', function(e){
            $('#back_button').show();
            loadAndShow("page-06.html", initPageSix, page_06_imgs);

        });
        $('#link_button_6').on('click', function(e){
            $('#back_button').show();
            loadAndShow("page-07.html", initPageSix, page_07_imgs);

        });
        $('#link_button_7').on('click', function(e){
            $('#back_button').show();
            loadAndShow("page-08.html", initPageSix, page_08_imgs);

        });
    }
    function initPageFour(){
        swiper_vertical_b = new Swiper ('#main-content', {
            noSwipingClass:"swiper-vertical-b-no-swiping",
            // Optional parameters
            direction: 'vertical',
            onInit: function(swiper){
                $('#link_button_8').on('click', function(e){
                    $('#back_button').show();
                    swiper.slideTo(2);
                });
                $('#link_button_9').on('click', function(e){
                    $('#back_button').show();
                    swiper.slideTo(4);
                });
                $('#link_button_10').on('click', function(e){
                    $('#back_button').show();
                    swiper.slideTo(8);
                });
                $('#link_button_11').on('click', function(e){
                    $('#back_button').show();
                    swiper.slideTo(10);
                });
                $('#link_button_12').on('click', function(e){
                    $('#back_button').show();
                    swiper.slideTo(11);
                });
                $('.back_to_top_button').on('click', function(e){
                    swiper.slideTo(0);
                });
                $('#video_play_button').on('click', function(e){
                    var myVideo = document.getElementById("video");

                    if (myVideo.paused){
                        myVideo.play();

                        $(this).removeClass("down");
                        document.getElementById('bg-audio').pause();
                        playing = false;
                    }
                    else{
                        myVideo.pause();
                    }

                });
            },
            onTransitionEnd: function(swiper){

                if(currentIndex_swiper_vertical_b != swiper.activeIndex){
                    showOnebyOne("swiper-slide-active");
                }
                currentIndex_swiper_vertical_b = swiper.activeIndex;
            },
            onTransitionStart: function(swiper){
                if(currentIndex_swiper_vertical_b != swiper.activeIndex){
                    hideSlide("swiper_vertical_b", "swiper-slide");
                }
            }
        });
    }
    function initPageSix(){
        var swiper_scroll = new Swiper ('#main-content', {
            // Optional parameters
            scrollbar: '.swiper-scrollbar',
            slideClass: 'swiper-scroll-slide',
            direction: 'vertical',
            slidesPerView: 'auto',
            mousewheelControl: true,
            freeMode: true,
            onInit: function(swiper){
                $('.scroll_top').on('click', function(e){
                    swiper.setWrapperTranslate(0);

                });
            }
        });
    }


    function initLink(){
        $('#video_play_button').on('click', function(e){
            var myVideo = document.getElementById("video");

            if (myVideo.paused){
                myVideo.play();

                $(this).removeClass("down");
                document.getElementById('bg-audio').pause();
                playing = false;
            }
            else{
                myVideo.pause();
            }

        });
        $('.play_button').on('click', function(e){
            swiper_cover.slideNext(true, 1000);
            swiper_cover.startAutoplay();

            $(this).addClass("down");
            document.getElementById('bg-audio').play();
            playing = true;

        });


        $('#link_button_5').on('click', function(e){
            $('#back_button').show();
            swiper_main.slideTo(5);

        });
        $('#link_button_6').on('click', function(e){
            $('#back_button').show();
            swiper_main.slideTo(6);

        });
        $('#link_button_7').on('click', function(e){
            $('#back_button').show();
            swiper_main.slideTo(7);

        });
        $('#link_button_8').on('click', function(e){
            $('#back_button').show();
            swiper_vertical_b.slideTo(2);

        });
        $('#back_button').on('click', function(e){
            if(swiper_main.activeIndex == 5 || swiper_main.activeIndex == 6 || swiper_main.activeIndex == 7){
                swiper_main.slideTo(2);
            }
            else if(swiper_main.activeIndex == 1){
                swiper_main.slideTo(0);
                $('#back_button').hide();
                swiper_vertical.removeSlide([1,2,3,4,5,6,7,8,9,10]);
                currentIndex_swiper_vertical = 0;
            }
            else if(swiper_main.activeIndex == 3){
                swiper_main.slideTo(0);
                $('#back_button').hide();
                swiper_vertical_b.removeSlide([1,2,3,4,5,6,7,8,9,10,11,12,13]);
                currentIndex_swiper_vertical_b = 0;
            }
            else{
                swiper_main.slideTo(0);
                $('#back_button').hide();
            }
        });
    }


    function hideOpacity(obj){
        obj.css('opacity', '0');
    }
    function showOpacity(obj){
        obj.css('opacity', '1');
    }


    function hideSlide(parrentClassString, classString){

        $('.' + parrentClassString + ' .' + classString).children().each(function(element){
            if($(this).attr('animated-css')){
                hideOpacity($(this));
                $('.' + classString).css('z-index', '0');
                $(this).removeClass('animated ' + $(this).attr('animated-css'));
            }
        });

        $('.' + parrentClassString + ' .' + classString + ' .animated-box').children().each(function(element){
            if($(this).attr('animated-css')){
                hideOpacity($(this));
                $(this).removeClass('animated ' + $(this).attr('animated-css'));
            }
        });
    }

    function showOnebyOne(classString){
        $('.' + classString).children().each(function(element){
            if($(this).attr('animated-css')){
                showOpacity($(this));
                $('.' + classString).css('z-index', '10');
                $(this).addClass('animated ' + $(this).attr('animated-css')).one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
                    $(this).removeClass('animated ' + $(this).attr('animated-css'));
                });
            }
        });

        $('.' + classString + ' .animated-box').children().each(function(element){

            if($(this).attr('animated-css')){

                showOpacity($(this));
                $(this).addClass('animated ' + $(this).attr('animated-css')).one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
                    $(this).removeClass('animated ' + $(this).attr('animated-css'));
                });
            }
        });
    }
});