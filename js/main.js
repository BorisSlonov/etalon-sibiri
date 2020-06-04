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
const timeout = 800;
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
        }
        else {
            jQuery('.header').addClass('bgc-fff-no');
        }
    });


    //скрываем/показываем хедер при скролле
    var header = $('.header'),
        scrollPrev = 0;

    $(window).scroll(function () {
        var scrolled = $(window).scrollTop();

        if (scrolled > 520 && scrolled > scrollPrev) {
            header.addClass('out');
        } else {
            header.removeClass('out');
        }
        scrollPrev = scrolled;
    });



    // slider


    $(window).on('load resize', function () {
        if ($(window).width() < 1023) {
            $('.water:not(.slick-initialized)').slick({
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: true,
                arrows: true
            });
        } else {
            $(".water.slick-initialized").slick("unslick");
        }
    });







    //calc
    jQuery('#fader').change(function () {
        var units = jQuery('#volume').val();
        var cost = 250;
        if (units >= 2) {
            var cost = 175;
        }
        if (units >= 4) {
            var cost = 165;
        }
        if (units >= 8) {
            var cost = 160;
        }
        if (units >= 16) {
            var cost = 155;
        }
        if (units >= 32) {
            var cost = 150;
        }

        var score = parseFloat(cost * units);
        score = units + " " + "шт" + " " + score + " " + "₽";
        jQuery('.output-container__output label').text(score);
        jQuery('.output-container__output').show();
    });





    //калькулятор для мобильных

    $(function () {

        (function quantityProducts() {
            var $quantityArrowMinus = $(".quantity-arrow-minus");
            var $quantityArrowPlus = $(".quantity-arrow-plus");
            var $quantityNum = $(".quantity-num");

            $quantityArrowMinus.click(quantityMinus);
            $quantityArrowPlus.click(quantityPlus);

            function quantityMinus() {
                if ($quantityNum.val() > 1) {
                    $quantityNum.val(+$quantityNum.val() - 1);
                }
                $quantityNum.change();
            }

            function quantityPlus() {
                $quantityNum.val(+$quantityNum.val() + 1);
                $quantityNum.change();
            }
        })();

    });


    $(document).on('change blur click focus input', '.quantity-num', function mobileCalc() {
        //кол-во
        var units = $(this).val();
        //цена
        var cost = 250;
        if (units >= 2) {
            var cost = 175;
        }
        if (units >= 4) {
            var cost = 165;
        }
        if (units >= 8) {
            var cost = 160;
        }
        if (units >= 16) {
            var cost = 155;
        }
        if (units >= 32) {
            var cost = 150;
        }

        var score = parseFloat(cost * units);
        score =  score + " " + "₽";
        jQuery('.output-container1023__output label').text(score);
        jQuery('.output-container1023__output').show();
    });







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
    $('#water-green').click(function () {
        //открываем нужный лейбл
        jQuery('.output-name-special').addClass('dib');
        jQuery('.output-name-special').removeClass('dn');
        //закрываем остальные
        jQuery('.output-name-eco').addClass('dn');
        jQuery('.output-name-ag').addClass('dn');

    });

    $('#water-red').click(function () {
        //открываем нужный лейбл
        jQuery('.output-name-eco').addClass('dib');
        jQuery('.output-name-eco').removeClass('dn');
        //закрываем остальные
        jQuery('.output-name-special').addClass('dn');
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


});




//меняем цвет фона в зависимости от :checked
function ChangeColor(color) {
    var clrDiv = document.getElementsByClassName("output-container")[0];
    clrDiv.style.backgroundColor = color;
}
document.getElementById("water-red").onclick = function () { ChangeColor("#e20c0e"); }
document.getElementById("water-green").onclick = function () { ChangeColor("#47bd4d"); }
document.getElementById("water-yellow").onclick = function () { ChangeColor("#f0b30d"); }


