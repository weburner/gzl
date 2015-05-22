// Initialize Swiper
$(document).ready(function () {


    var isOK = false;
    var preload;
    var swiper_cover;
    var swiper_main;
    var swiper_vertical;
    var swiper_vertical_b;

    function init() {
        // Create a new queue.
        preload = new createjs.LoadQueue(false, "imgs/");

        var plugin = {
            getPreloadHandlers: function () {
                return {
                    extensions: ["svg","mp3","png","jpg"],
                    callback: function (item) {
                        var id = item.src.toLowerCase().split("/").pop().split(".")[0];
                        $("#"+id).attr("src", item.src);
                    }
                };
            }
        };

        preload.installPlugin(plugin);
        preload.loadManifest([
            "01-02-bg.jpg",
            "01-03-bg.jpg",
            "01-04-bg.jpg",
            "01-06-bg.jpg",
            "01-07-bg.jpg",
            "02-01-bg.jpg"
        ]);
        preload.on("complete", handleComplete);
        preload.on("progress", handleOverallProgress);

    }

    function handleOverallProgress(event) {
//        console.log(preload.progress);
        $('#loading-percent').html(Math.round(preload.progress * 100));
    }

    function handleComplete(event) {
        overLoading();
    }

    $(".outside-content").css('opacity', '0');
    $('#main-content').css('opacity', '0');

    init();

    var playing;

    function initAudio(){
        playing = true;
        $('#music-button').bind('click', function(){

            if (playing == false) {
                $(this).addClass("down");
                document.getElementById('bg-audio').play();
                playing = true;
            } else {
                $(this).removeClass("down");
                document.getElementById('bg-audio').pause();
                playing = false;
            }
        });
    }

    function overLoading(){
        $('#loading').addClass("animated bounceOut").one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
            $("#loading").removeClass("animated bounceOut");
            hideOpacity($("#loading"));
            $(".outside-content").css('opacity', '1');
            $("#main-content").css('opacity', '1');
            initSwiper();
            initLink();
            initAudio();
        });
    }




    var currentIndex = 0;
    var currentIndex_swiper_vertical = 0;

    function initSwiper(){

        //initialize swiper when document ready
        swiper_cover = new Swiper ('.swiper-cover', {
            // Optional parameters
            direction: 'vertical',
            effect:'fade',
            noSwiping:true,
            noSwipingClass:"swiper-no-swiping",
            fade: {
                crossFade: false
            },
            slideActiveClass:"swiper-page-slide-active",
            autoplay:1500,
            onInit: function(swiper){
                showOnebyOne("swiper-page-slide-active");
                swiper.stopAutoplay();
            },
            onTransitionEnd: function(swiper){
                if(currentIndex != swiper.activeIndex){
                    showOnebyOne("swiper-page-slide-active");
                }
                currentIndex = swiper.activeIndex;

                if(swiper.activeIndex == 3){
                    swiper.stopAutoplay();
                }
            },
            onTransitionStart: function(swiper){

                if(currentIndex != swiper.activeIndex){
                    hideSlide("swiper-cover", "swiper-slide-prev");
                    hideSlide("swiper-cover", "swiper-slide-next");
                }

            }
        });

        swiper_main = new Swiper ('.swiper-main', {
            noSwipingClass:"swiper-main-no-swiping",
            // Optional parameters
            onInit: function(swiper){
                console.log(swiper);

            },
            onTransitionEnd: function(swiper){
                if(swiper.activeIndex == 1){
                    showOnebyOne("swiper-vertical-slide-active");
                }
                else if(swiper.activeIndex == 3){
                    showOnebyOne("swiper-vertical-b-slide-active");
                }
                else{
                    showOnebyOne("swiper-one-page");
                }


            },
            onTransitionStart: function(swiper){
                if(swiper.activeIndex == 1){
                    hideSlide("swiper_vertical", "swiper-slide-prev");
                    hideSlide("swiper_vertical", "swiper-vertical-slide-active");
                    hideSlide("swiper_vertical", "swiper-slide-next");
                }
                else if(swiper.activeIndex == 3){
                    hideSlide("swiper_vertical_b", "swiper-slide-prev");
                    hideSlide("swiper_vertical_b", "swiper-vertical-b-slide-active");
                    hideSlide("swiper_vertical_b", "swiper-slide-next");
                }
                else
                {
                    hideSlide("swiper-one-page-wapper", "swiper-one-page");
                }


            }
        });


        swiper_vertical = new Swiper ('.swiper_vertical', {
            noSwipingClass:"swiper-vertical-no-swiping",
            // Optional parameters
            direction: 'vertical',
            slideActiveClass:"swiper-vertical-slide-active",
            onInit: function(swiper){
                $('.back_to_top_button').on('click', function(e){
                    swiper.slideTo(0);

                });
            },
            onTransitionEnd: function(swiper){

                if(currentIndex_swiper_vertical != swiper.activeIndex){
                    showOnebyOne("swiper-vertical-slide-active");
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
        swiper_vertical_b = new Swiper ('.swiper_vertical_b', {
            noSwipingClass:"swiper-vertical-b-no-swiping",
            // Optional parameters
            direction: 'vertical',
            slideActiveClass:"swiper-vertical-b-slide-active",
            onInit: function(swiper){
                $('.back_to_top_button').on('click', function(e){
                    swiper.slideTo(0);

                });
            },
            onTransitionEnd: function(swiper){

                if(currentIndex_swiper_vertical != swiper.activeIndex){
                    showOnebyOne("swiper-vertical-b-slide-active");
                }
                currentIndex_swiper_vertical = swiper.activeIndex;
            },
            onTransitionStart: function(swiper){
                if(currentIndex_swiper_vertical != swiper.activeIndex){
                    hideSlide("swiper_vertical_b", "swiper-slide-prev");
                    hideSlide("swiper_vertical_b", "swiper-slide-next");
                }
            }
        });
        var swiper_scroll = new Swiper ('.swiper_scroll', {
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

        var swiper_slide = new Swiper ('.swiper_slide', {
            effect:'fade',
            autoplay:2000
        });

    }
    function initLink(){
        $('#video_play_button').on('click', function(e){
            var myVideo = document.getElementById("video");
            console.log("hihi");
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

        $('#link_button_1').on('click', function(e){
            $('#back_button').show();
            swiper_main.slideTo(1);

        });
        $('#link_button_2').on('click', function(e){
            $('#back_button').show();
            swiper_main.slideTo(2);

        });
        $('#link_button_3').on('click', function(e){
            $('#back_button').show();
            swiper_main.slideTo(3);

        });
        $('#link_button_4').on('click', function(e){
            $('#back_button').show();
            swiper_main.slideTo(4);

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
//                console.log($(this));
                showOpacity($(this));
                $(this).addClass('animated ' + $(this).attr('animated-css')).one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
                    $(this).removeClass('animated ' + $(this).attr('animated-css'));
                });
            }
        });
    }
});