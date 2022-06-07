const $isMobile = $(window).width();
const $Slide = $('#Slide');
const $SlideLs = $('#SlideLs');
const $Nav = $('#Nav');
const $NavItem = $('.nav-item > a');
const $SlideItem = $('.slide-item');
const $prevArrow = $('#prevArrow');
const $homeArrow = $('#homeArrow');
const $nextArrow = $('#nextArrow');
let pageNum = 1;
// Module
const $slideDown = $('.slide-down .container');
const $floatbtn = $('.float-btn');
const $shadow = $('.shadow');
const $linebotItem = $('#linebotItem');
let num = -2;
// 
const counts = {
    name1: "訊息傳送",
    data1: "11022",
    name2: "加入好友",
    data2: "621",
    name3: "活躍聊天室",
    data3: "985",
    name4: "接收的訊息",
    data4: "8173",
    name5: "傳送的訊息",
    data5: "4708",
};

// setting 
$shadow.css({
    'left': $isMobile / 2 - 16,
});


Object.keys(counts).forEach(function (key) {
    $(`[data-set=${key}]`).text(counts[key])
});

$NavItem.parent().eq(0).addClass('js-nav-btn');

$NavItem.click(function () {
    $(this).parent().addClass('js-nav-btn').siblings().removeClass('js-nav-btn');
    $SlideLs.css({
        left: - $(this).parent().index() * 100 + '%',
        top: 0,
    })
    $SlideItem.css({
        top: 0,
    })
    num = $(this).parent().index() +1;
    // console.log(num)
});


// $('#Next').click(function () {
//     $SlideLs.css({
//         left: '-100%'
//     });
//     $NavItem.parent().eq(1).addClass('js-nav-btn')
//         .siblings().removeClass('js-nav-btn');
// });

$SlideItem.scroll(function () {
    $(this).scrollTop() > 100 ? $Nav.addClass('js-nav') : $Nav.removeClass('js-nav')
    
    console.log($(this).scrollTop());
});

setInterval(function () {
    num < -2 ? num++ : num = -3
    $floatbtn.css({
        'margin-top': num + '%',
    })
}, 800);

$linebotItem.scroll(function () {
    $(this).scrollTop() > 200 ? $slideDown.css({
        'opacity': '0',
    }) :
        $slideDown.css({
            'opacity': '1',
        })
        $Nav.addClass()
});


// arrow
$nextArrow.click(function () {
    pageNum < 4 ? pageNum++ : pageNum = 4;
    $NavItem.eq(pageNum - 1).parent().addClass('js-nav-btn').siblings().removeClass('js-nav-btn');
    $SlideLs.css({
        left: - (pageNum - 1) * 100 + '%',
    })

});
$prevArrow.click(function () {
    pageNum > 1 ? pageNum-- : pageNum = 1;
    $NavItem.eq(pageNum - 1).parent().addClass('js-nav-btn').siblings().removeClass('js-nav-btn');
    $SlideLs.css({
        left: - (pageNum - 1) * 100 + '%',
    })

});
$homeArrow.click(function () {
    pageNum = 1;
    $NavItem.eq(pageNum - 1).parent().addClass('js-nav-btn').siblings().removeClass('js-nav-btn');
    $SlideLs.css({
        left: - (pageNum - 1) * 100 + '%',
    })
});

