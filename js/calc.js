$(document).ready(function () {
    jQuery('#fader').change(function () {
        var units = jQuery('#volume').val();
        var cost = 250;
        var costChange = jQuery(".cost-change").text(`250 ₽`);
      

        if (units >= 2) {
            var cost = 175;
            costChange.text(`175 ₽`);
        }
        if (units >= 4) {
            var cost = 165;
            costChange.text(`165 ₽`);
        }
        if (units >= 8) {
            var cost = 160;
            costChange.text(`160 ₽`);
        }
        if (units >= 16) {
            var cost = 155;
            costChange.text(`155 ₽`);
        }
        if (units >= 32) {
            var cost = 150;
            costChange.text(`150 ₽`);
        }

        var score = parseFloat(cost * units);
        num = units + " " + "шт" + " ";
        finalCost = score + " " + " " + "₽";
        jQuery('.output-container__output #label-num').text(num);
        jQuery('.output-container__output #label-cost').text(finalCost);
        jQuery('.output-container__output').show();

    });







    //калькулятор для мобильных RED RED RED

    $(function () {

        (function quantityProducts() {
            var $quantityArrowMinus = $(".quantity-arrow-minus-red");
            var $quantityArrowPlus = $(".quantity-arrow-plus-red");
            var $quantityNum = $(".quantity-num-red");

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


    $(document).on('change blur click focus input', '.quantity-num-red', function mobileCalc() {
        //кол-во
        var units = $(this).val();
        //цена
        var cost = 250;
        $(".cost-change-red").text(`250 ₽`);

        if (units >= 2) {
            var cost = 175;
            $(".cost-change-red").text(`175 ₽`);
        }
        if (units >= 4) {
            var cost = 165;
            $(".cost-change-red").text(`165 ₽`);
        }
        if (units >= 8) {
            var cost = 160;
            $(".cost-change-red").text(`160 ₽`);
        }
        if (units >= 16) {
            var cost = 155;
            $(".cost-change-red").text(`155 ₽`);
        }
        if (units >= 32) {
            var cost = 150;
            $(".cost-change-red").text(`150 ₽`);
        }

        var score = parseFloat(cost * units);
        score = score + " " + "₽";
        jQuery('.label-red').text(score);
        jQuery('.output-container1023__output.red').show();
    });







    //калькулятор для мобильных GREEN GREEN GREEEN

    $(function () {

        (function quantityProducts() {
            var $quantityArrowMinus = $(".quantity-arrow-minus-green");
            var $quantityArrowPlus = $(".quantity-arrow-plus-green");
            var $quantityNum = $(".quantity-num-green");

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


    $(document).on('change blur click focus input', '.quantity-num-green', function mobileCalc() {
        //кол-во
        var units = $(this).val();
        //цена
        var cost = 250;
        $(".cost-change-green").text(`250 ₽`);

        if (units >= 2) {
            var cost = 175;
            $(".cost-change-green").text(`175 ₽`);
        }
        if (units >= 4) {
            var cost = 165;
            $(".cost-change-green").text(`165 ₽`);
        }
        if (units >= 8) {
            var cost = 160;
            $(".cost-change-green").text(`160 ₽`);
        }
        if (units >= 16) {
            var cost = 155;
            $(".cost-change-green").text(`155 ₽`);
        }
        if (units >= 32) {
            var cost = 150;
            $(".cost-change-green").text(`150 ₽`);
        }

        var score = parseFloat(cost * units);
        score = score + " " + "₽";
        jQuery('.output-container1023__output .label-green').text(score);
        jQuery('.output-container1023__output.label-green').show();
    });







    //калькулятор для мобильных YELLOW YELLOW YELLOW

    $(function () {

        (function quantityProducts() {
            var $quantityArrowMinus = $(".quantity-arrow-minus-yellow");
            var $quantityArrowPlus = $(".quantity-arrow-plus-yellow");
            var $quantityNum = $(".quantity-num-yellow");

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


    $(document).on('change blur click focus input', '.quantity-num-yellow', function mobileCalc() {
        //кол-во
        var units = $(this).val();
        //цена
        var cost = 250;
        $(".cost-change-yellow").text(`250 ₽`);

        if (units >= 2) {
            var cost = 175;
            $(".cost-change-yellow").text(`175 ₽`);
        }
        if (units >= 4) {
            var cost = 165;
            $(".cost-change-yellow").text(`165 ₽`);
        }
        if (units >= 8) {
            var cost = 160;
            $(".cost-change-yellow").text(`160 ₽`);
        }
        if (units >= 16) {
            var cost = 155;
            $(".cost-change-yellow").text(`155 ₽`);
        }
        if (units >= 32) {
            var cost = 150;
            $(".cost-change-yellow").text(`150 ₽`);
        }

        var score = parseFloat(cost * units);
        score = score + " " + "₽";
        jQuery('.output-container1023__output .label-yellow').text(score);
        jQuery('.output-container1023__output.label-yellow').show();
    });

});

