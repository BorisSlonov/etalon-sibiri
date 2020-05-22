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
})

function outputUpdate(vol) {
    var output = document.querySelector('#volume');
    output.value = vol;

}



jQuery(document).ready(function () {

    $(window).scroll(function () {
        if ($(window).scrollTop() > 50) {
            $('.header').addClass('bgc-fff');
            $('.header').removeClass('bgc-fff-no');
        }
        else {
            $('.header').addClass('bgc-fff-no');
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
        jQuery('.output label').text(score);
        jQuery('.output').show();
    });



});


