
const $isMobile = $(window).width();
const $btn = $('.btn');
const $btn1 = $('#Btn1');
const $btn2 = $('#Btn2');
const $btn3 = $('#Btn3');
const $btn4 = $('#Btn4');
const $SlideLs = $('#SlideLs');
const $navItem = $('.nav-item > a');

$btn.click(function () {
    $(this).addClass('js-nav-btn')
    .parent().siblings().find('.btn').removeClass('js-nav-btn');
})


$btn1.click(function () {
    $SlideLs.css({
        top: 0
    });
    
});
$btn2.click(function () {
    $SlideLs.css({
        top: '-100%'
    })
});
$btn3.click(function () {
    $SlideLs.css({
        top: '-200%'
    })
});
$btn4.click(function () {
    $SlideLs.css({
        top: '-300%'
    })
});

