jQuery(document).ready(function () {

    //меняем цвет плашке
    jQuery(window).scroll(function () {
        if (jQuery(window).scrollTop() > 50) {
            jQuery('.header').addClass('bgc-fff');
            jQuery('.header').removeClass('bgc-fff-no');
            jQuery('.header__burger').removeClass('burger_active');
            jQuery('.header__list').removeClass('menu_active');
        }
        else {
            jQuery('.header').addClass('bgc-fff-no');
        }
    });




    //range-slider
    var $element = $('input[type="range"]');

    $element
        .rangeslider({
            polyfill: false,
            onInit: function () {
                var $handle = $('.rangeslider__handle', this.$range);
                updateHandle($handle[0], this.value);
            }
        })
        .on('input', function (e) {
            var $handle = $('.rangeslider__handle', e.target.nextSibling);
            updateHandle($handle[0], this.value);
        });

    function updateHandle(el, val) {
        el.textContent = val;
    }


    // slider

    $(window).on('load resize', function () {
        if ($(window).width() < 1130) {
            $('.water:not(.slick-initialized)').slick({
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: true,
                arrows: true,
                fade: true,
            });
        } else {
            $(".water.slick-initialized").slick("unslick");
        }
    });


    $('.stocks').slick({
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: true,
        arrows: true,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            }
        ]
    });



    //tabs
    (function ($) {
        $(function () {
            $("ul.tabs__caption").on("click", "li:not(.active)", function () {
                $(this)
                    .addClass("active")
                    .siblings()
                    .removeClass("active")
                    .closest("div.tabs")
                    .find("div.tabs__content")
                    .removeClass("active")
                    .eq($(this).index())
                    .addClass("active");
            });
        });
    })(jQuery);



    //сброс чекбоксов 
    $('.water').eq(0).on("change", function (e) {
        $('input[name^=water-]').each(function () {
            if (e.target != this)
                this.checked = false;
        });
    })

    $('.water').eq(0).on('submit', function () {
        return $('input[name^=field]:checked:enabled').length == 1;
    });



    //меняем текст в зависимости от :checked

    $('#water-red').click(function () {
        //открываем нужный лейбл
        jQuery('.output-name-eco').addClass('dib');
        jQuery('.output-name-eco').removeClass('dn');
        //закрываем остальные
        jQuery('.output-name-special').addClass('dn');
        jQuery('.output-name-ag').addClass('dn');

    });

    $('#water-green').click(function () {
        //открываем нужный лейбл
        jQuery('.output-name-special').addClass('dib');
        jQuery('.output-name-special').removeClass('dn');
        //закрываем остальные
        jQuery('.output-name-eco').addClass('dn');
        jQuery('.output-name-ag').addClass('dn');

    });

    $('#water-yellow').click(function () {
        //открываем нужный лейбл
        jQuery('.output-name-ag').addClass('dib');
        jQuery('.output-name-ag').removeClass('dn');
        //закрываем остальные
        jQuery('.output-name-special').addClass('dn');
        jQuery('.output-name-eco').addClass('dn');

    });

    //сброс цвета !:checked


    $(function () {
        $('.water-checkbox').on('change checked', function () {
            if ($('.water-checkbox').is(':checked')) {

            } else {
                $('.output-container').css({ 'background-color': '#ccc' });
                jQuery('.output-name-eco').addClass('dn');
                jQuery('.output-name-special').addClass('dn');
                jQuery('.output-name-ag').addClass('dn');
            }
        });
    });



    //CUSTOM SELECT 

    $('select').each(function () {
        var $this = $(this), numberOfOptions = $(this).children('option').length;

        $this.addClass('select-hidden');
        $this.wrap('<div class="select"></div>');
        $this.after('<div class="select-styled"></div>');

        var $styledSelect = $this.next('div.select-styled');
        $styledSelect.text($this.children('option').eq(0).text());

        var $list = $('<ul />', {
            'class': 'select-options'
        }).insertAfter($styledSelect);

        for (var i = 0; i < numberOfOptions; i++) {
            $('<li />', {
                text: $this.children('option').eq(i).text(),
                rel: $this.children('option').eq(i).val()
            }).appendTo($list);
        }

        var $listItems = $list.children('li');

        $styledSelect.click(function (e) {
            e.stopPropagation();
            $('div.select-styled.active').not(this).each(function () {
                $(this).removeClass('active').next('ul.select-options').hide();
            });
            $(this).toggleClass('active').next('ul.select-options').toggle();
        });

        $listItems.click(function (e) {
            e.stopPropagation();
            $styledSelect.text($(this).text()).removeClass('active');
            $this.val($(this).attr('rel'));
            $list.hide();
            //console.log($this.val());
        });

        $(document).click(function () {
            $styledSelect.removeClass('active');
            $list.hide();
        });

    });

    // acccarrdion
    //arrow


    // acccarrdion




    $('.sales__link').click(function () {
        if ($(this).next().is(":visible")) {

            $(this).next().slideUp(400);

        }
        else {
            $('.sales__descr:visible').slideUp(400);
            $(this).next().slideDown(400);
            // $('.sales__descr:visible > sales__arrow').css({'transform' : 'rotate(90deg)'});
        }
    });



});
//jQuery