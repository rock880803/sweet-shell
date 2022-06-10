const $isMobile = $(window).width();
const $Slide = $('#Slide');
const $SlideLs = $('#SlideLs');
const $Nav = $('#Nav');
const $NavItem = $('.nav-hover > a');
const $SlideItem = $('.slide-item');
const $gallery = $('[data-fancybox="gallery"]');
const $img = $('img');
let pageNum = 1;


// language
const $cn = $('.cn');
const $en = $('.en');
const $langText = $('#langText');
$en.addClass('js-lang-btn')

const $langBtn = {
    cn: $('#cnBtn'),
    en: $('#enBtn'),
}
$langBtn.cn.click(function () {
    $en.addClass('js-lang-btn')
    $cn.removeClass('js-lang-btn')
    console.log('lang: chinese');
})
$langBtn.en.click(function () {
    $cn.addClass('js-lang-btn')
    $en.removeClass('js-lang-btn')
    console.log('lang: english');
})

// Module
const $slideDown = $('.slide-down .container');
const $floatbtn = $('.float-btn');
const $shadow = $('.shadow');
let num = -2;
// 
const counts = {
    data1: "11022",
    data2: "621",
    data3: "985",
    data4: "8173",
    data5: "4708",
};

Object.keys(counts).forEach(function (key) {
    $(`[data-set=${key}]`).text(counts[key])
});

// Page

const $instructionBtn = $('#instructionBtn');

$instructionBtn.click(function () {
    pageNum = 3;
    pageSet()
    $SlideItem.scrollTop(1000);

    // $SlideItem.animate({
    //     scrollTop: jQuery("#serviceItem").offset().top(100)
    // }, 1000);
});

// jQuery('html, body').animate({
//     scrollTop: jQuery("#serviceItem").offset().top
// }, 1000);

$NavItem.parent().eq(0).addClass('js-nav-btn');

$NavItem.click(function () {
    pageNum = $(this).parent().index();
    pageSet()

});

setInterval(function () {
    num < -2 ? num++ : num = -3
    $floatbtn.css({ 'margin-top': num + '%', })
}, 800);

$SlideItem.scroll(function () {
    $(this).scrollTop() > 100 ? $Nav.addClass('js-nav') : $Nav.removeClass('js-nav')
    $(this).scrollTop() > 100 ? $langText.addClass('js-lang-btn') : $langText.removeClass('js-lang-btn')
    $(this).scrollTop() > 200 ? $slideDown.parent().css({ 'opacity': '0', }) : $slideDown.parent().css({ 'opacity': '1', })
});
//  instruction num
const $instructionStep = $('.instruction-item h2');
const $instructionLs = $('#instructionLs')
const $insPrevArrow = $('#insPrevArrow');
const $insNextArrow = $('#insNextArrow');



let insNum = 1;
$insNextArrow.click(function () {
    insNum < 12 ? insNum++ : insNum = 12;
    $instructionStep.text('step'+ insNum);
    insPageSet()
});
$insPrevArrow.click(function () {
    insNum > 1 ? insNum-- : insNum = 1;
    $instructionStep.text('step'+ insNum);
    insPageSet()
});


function insPageSet() {
    $instructionLs.css({
        top: - (insNum - 1) * 30 + 'vw',
    })
}
function pageSet() {
    $NavItem.eq(pageNum - 1).parent().addClass('js-nav-btn').siblings().removeClass('js-nav-btn');
    $NavItem.eq(pageNum - 1).find('span.icon').html('<i class="fa-solid fa-hands-holding-circle fa-bounce">')
    $NavItem.eq(pageNum - 1).parent().siblings().find('span.icon').html('')
    $SlideLs.css({
        left: - (pageNum - 1) * 100 + '%',
    })
}

$gallery.fancybox({
    loop: true,
    protect: true,
    keyboard: true,
    animationDuration: 500,
    transitionDuration: 800,
    buttons: [
        'zoom',
        'slideShow',
        'close',
    ],
});

