//burger
window.addEventListener('DOMContentLoaded', () => {
    const menu = document.querySelector('.header__list'),
        menuItem = document.querySelectorAll('.header__link'),
        hamburger = document.querySelector('.header__burger');

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('burger_active');
        menu.classList.toggle('menu_active');
    });

    menuItem.forEach(item => {
        item.addEventListener('click', () => {
            hamburger.classList.toggle('burger_active');
            menu.classList.toggle('menu_active');
        })
    })
});

/*

Ссылкам которые открывают попап - .popup-link

Ел-там клик по которым закрывает попап - .popup-close

Ел-там с position: fixed; - .lock-padding


*/

//popups
const popupLinks = document.querySelectorAll('.popup-link');
const body = document.querySelector('body');
const lockPadding = document.querySelectorAll('.lock-padding');
const timeout = 500;
let unlock = true;

// Удаление хеша из popupName
if (popupLinks.length > 0) {
    for (let index = 0; index < popupLinks.length; index++) {
        const popupLink = popupLinks[index];
        popupLink.addEventListener("click", function (e) {
            const popupName = popupLink.getAttribute('href').replace('#', '');
            const currentPopup = document.getElementById(popupName);
            popupOpen(currentPopup);
            e.preventDefault();
        });
    }
}


//закрытие по клику на эл-ты с классом .popup__close
const popupCloseIcon = document.querySelectorAll('.popup-close');

if (popupCloseIcon.length > 0) {
    for (let index = 0; index < popupCloseIcon.length; index++) {
        const el = popupCloseIcon[index];
        el.addEventListener('click', function (e) {
            popupClose(el.closest('.popup'));
            e.preventDefault();
        });
    }
}

//открытие попапа
function popupOpen(currentPopup) {
    if (currentPopup && unlock) {
        const popupActive = document.querySelector('.popup.open');
        if (popupActive) {
            popupCloseIcon(popupActive, false);
        } else {
            bodyLock();
        }
        currentPopup.classList.add('open');
        currentPopup.addEventListener('click', function (e) {
            if (!e.target.closest('.popup__content')) {
                popupClose(e.target.closest('.popup'));
            }
        });
    }
}

//закрытие попапа
function popupClose(popupActive, doUnlock = true) {
    if (unlock) {
        popupActive.classList.remove('open');
        if (doUnlock) {
            bodyUnlock();
        }
    }
}



//убираем сдвиг контента из-за появления/скрытия скроллбара
function bodyLock() {

    const lockPaddingValue = window.innerWidth - document.querySelector('.wrapper').offsetWidth + 'px';

    if (lockPadding.length > 0) {
        for (let index = 0; index < lockPadding.length; index++) {
            const el = lockPadding[index];
            el.style.paddingRight = lockPaddingValue;
        }
    }
    body.style.paddingRight = lockPaddingValue;
    body.classList.add('lock');

    unlock = false;
    setTimeout(function () {
        unlock = true;
    }, timeout);
}

//убираем сдвиг поппапа из-за появления скроллбара
function bodyUnlock() {

    const lockPaddingValue = window.innerWidth - document.querySelector('.wrapper').offsetWidth + 'px';

    setTimeout(function () {
        if (lockPadding.length > 0) {
            for (let index = 0; index < lockPadding.length; index++) {
                const el = lockPadding[index];
                el.style.paddingRight = '0px';
            }
        }
        body.style.paddingRight = '0px';
        body.classList.remove('lock');
    }, timeout);

    unlock = false;
    setTimeout(function () {
        unlock = true;
    }, timeout);
}

// закрытие по клику на esc
document.addEventListener('keydown', function (e) {
    if (e.which === 27) {
        const popupActive = document.querySelector('.popup.open');
        popupClose(popupActive);
    }
});


//полифилы IE11
(function () {
    if (!Element.prototype.closest) {
        Element.prototype.closest = function (css) {
            var node = this;
            while (node) {
                if (node.matches(css)) return node;
                else node = node.parentElement;
            }
            return null;
        };
    }
})();
(function () {
    if (!Element.prototype.mathes) {
        Element.prototype.mathes = Element.prototype.matchesSelector ||
            Element.prototype.webkitMatchesSelector ||
            Element.prototype.mozMatchesSelector ||
            Element.msMathesSelector;
    }
})();





//OTHER SCRIPTS OTHER SCRIPTS OTHER SCRIPTS OTHER SCRIPTS OTHER SCRIPTS





function outputUpdate(vol) {
    var output = document.querySelector('#volume');
    output.value = vol;

}

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
        if ($(window).width() < 1023) {
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
                $('.output-container').css({'background-color' : '#ccc'});
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


});




//меняем цвет фона в зависимости от :checked
function ChangeColor(color) {
    var clrDiv = document.getElementsByClassName("output-container")[0];
    clrDiv.style.backgroundColor = color;
}
document.getElementById("water-red").onclick = function () { ChangeColor("#e20c0e"); }
document.getElementById("water-green").onclick = function () { ChangeColor("#47bd4d"); }
document.getElementById("water-yellow").onclick = function () { ChangeColor("#f0b30d"); }


