$(function(){

   $.fn.centerMe = function () {

       $(this).css({
           'position' : 'absolute',
           'left' : ($(window).width() - $(this).width()) / 2,
           'top':  ($(window).height() - $(this).height()) / 2
       });

   };
    $.fn.fullHeight = function () {
        $(this).height($(window).height());

    };

    $.fn.placeholderActiveInput = function () {
        $(this).focus(function () {
            $($(this).attr('data', $(this).attr('placeholder')));
            $(this).attr('placeholder', '');

        });
        $(this).blur(function () {
            $(this).attr('placeholder', $(this).attr('data'));
            if ($(this).val() === ''){
                $(this).removeClass('active-input');
            }else {
                $(this).addClass('active-input');

            }

        });

    };



    $.fn.scrolling = function (goUp) {
        $(this).scroll(function () {
            var scrollButton = $(goUp);
            if($(this).scrollTop() >= 500 ){
                scrollButton.show();
            }else {
                scrollButton.hide();
            }
            $(goUp).on('click', function () {
                $('html,body').stop().animate({
                    scrollTop: 0
                }, 500)
            });

        });


    };

    $.fn.switchTabs = function () {
        $(this).click(function () {
            $($(this).data('class')).show().siblings().hide();
        });

    };
    $.fn.slider = function () {
        var slider = $(this),
            children = slider.children('li'),
            lenght = children.length,
            i = 0,

            mySlider = function () {

                children.eq(i).fadeOut(100, function () {
                    i ++;
                    if (i === lenght){
                        i = 0;
                    }
                    children.eq(i).fadeIn();

                });



            };
        children.not(':first').hide();

        setInterval(mySlider, 5000);

        $('button').click(function () {
            mySlider();
        });

    };











   $('.centerDiv').centerMe();
   $('.header, img').fullHeight();
   $('#input').placeholderActiveInput();
   $(window).scrolling('#goUp');
   $('.buttons button').switchTabs()
    $('.slider').slider();


    
});