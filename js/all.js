const $isMobile = $(window).width();
const $Slide = $('#Slide');
const $SlideLs = $('#SlideLs');
const $NavItem = $('.nav-item > a');
const counts = {
    name1: "訊息傳送",
    data1: "10629",
    name2: "加入好友",
    data2: "610",
    name3: "活躍聊天室",
    data3: "958",
    name4: "接收的訊息",
    data4: "8341",
    name5: "傳送的訊息",
    data5: "4566",
};

Object.keys(counts).forEach(function(key){
    $(`[data-set=${key}]`).text(counts[key])
});

$NavItem.parent().eq(0).addClass('js-nav-btn');

$NavItem.click(function () {
    $(this).parent().addClass('js-nav-btn').siblings().removeClass('js-nav-btn');
    $SlideLs.css({
        top: - $(this).parent().index() * 100 + '%',
    })
});


$('#Next').click(function () {
    $SlideLs.css({
        top: '-100%'
    });
    $NavItem.parent().eq(1).addClass('js-nav-btn')
        .siblings().removeClass('js-nav-btn');
});

$Slide.scroll(function () {
    console.log($(this).scrollTop());
});


