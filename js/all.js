const $isMobile = $(window).width();
const $Slide = $('#Slide');
const $SlideLs = $('#SlideLs');
const $Nav = $('#Nav');
const $NavItem = $('.nav-item > a');
const $SlideItem = $('.slide-item');
const $prevArrow = $('#prevArrow');
const $homeArrow = $('#homeArrow');
const $nextArrow = $('#nextArrow');
const $gallery = $('.member-item > a')
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

Object.keys(counts).forEach(function (key) {
    $(`[data-set=${key}]`).text(counts[key])
});

$NavItem.parent().eq(0).addClass('js-nav-btn');

$NavItem.click(function () {
    pageNum = $(this).parent().index() + 1;
    pageSet()

});


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
});


// arrow
$nextArrow.click(function () {
    pageNum < 5 ? pageNum++ : pageNum = 1;
    pageSet()
});
$prevArrow.click(function () {
    pageNum > 1 ? pageNum-- : pageNum = 5;
    pageSet()
});
$homeArrow.click(function () {
    pageNum = 1;
    pageSet()
});



function pageSet() {
    $NavItem.eq(pageNum - 1).parent().addClass('js-nav-btn').siblings().removeClass('js-nav-btn');
    $NavItem.eq(pageNum - 1).find('span').html('<i class="fa-solid fa-hands-holding-circle fa-bounce">')
    $NavItem.eq(pageNum - 1).parent().siblings().find('span').html('')
    $SlideLs.css({
        left: - (pageNum - 1) * 100 + '%',
    })
}




// $gallery.fancybox({
//     loop: true,
//     keyboard: true,
//     animationDuration: 500,
//     transitionDuration: 800,
//     buttons: [
//         'zoom',
//         'share',
//         'download',
//         'slideShow',
//         'thumbs',
//         'close',
//     ],
//     media: {
//         youtube: {
//             params: {
//                 autoplay: false,
//             }
//         }
//     }
// });

