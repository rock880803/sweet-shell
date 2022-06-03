
const $isMobile = $(window).width();
const $btn = $('.btn');
const $Btn1 = $('#Btn1');
const $Btn2 = $('#Btn2');
const $Btn3 = $('#Btn3');
const $Btn4 = $('#Btn4');
const $SlideLs = $('#SlideLs');
const $navItem = $('.nav-item > a');
const $imgScroll = $('.linebot-body > .img-resp');

$btn.find('.btn-item').eq(0).addClass('js-nav-btn');

$('#Next').click(function(){
    $SlideLs.css({
        top: '-100%'
    });
    $btn.find('.btn-item').eq(1).addClass('js-nav-btn')
    .siblings().removeClass('js-nav-btn');
});


$Btn1.click(function () {
    $SlideLs.css({
        top: 0
    });
    $btn.find('.btn-item').eq(0).addClass('js-nav-btn')
    .siblings().removeClass('js-nav-btn');
    
});
$Btn2.click(function () {
    $SlideLs.css({
        top: '-100%'
    })
    $btn.find('.btn-item').eq(1).addClass('js-nav-btn')
    .siblings().removeClass('js-nav-btn');
});
$Btn3.click(function () {
    $SlideLs.css({
        top: '-200%'
    })
    $btn.find('.btn-item').eq(2).addClass('js-nav-btn')
    .siblings().removeClass('js-nav-btn');
});
$Btn4.click(function () {
    $SlideLs.css({
        top: '-300%'
    })
    $btn.find('.btn-item').eq(3).addClass('js-nav-btn')
    .siblings().removeClass('js-nav-btn');
});

$imgScroll.scrollTop()>=200 ? $imgScroll.addClass('js-img-scroll') : $imgScroll.removeClass('js-img-scroll')

