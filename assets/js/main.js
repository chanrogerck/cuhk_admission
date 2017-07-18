$("html").removeClass("no-js");

function a(c,d,e,f,g,h,i,j,k,l,o,m,n,o,p,q) {
    b = c.clone(),
    $searchBlk = f.clone(),
    $logo = g.clone(),
    $mobiLang = i.clone(),
    $mobiLangCont = $("<ul class='mobi-tool'></ul>"),
    $closeBtn = $("<button class='btn btn--close-mobi-menu icon-close js-close-mobi-menu' type='button'></button>"),
    $rightCont = $("<div class='rightCont'></div>"),
    $mobiSearchBlk = j.clone(),
    d.hover(function() {
        var a = $(this);
        a.addClass("is-active")
    }, function() {
        var a = $(this);
        a.removeClass("is-active")
    }),
    c.find("li a").on("focus", function() {
        var a = $(this);
        a.parents(c).find("li").removeClass("is-active"),
        a.parents("li").addClass("is-active")
    }).on("blur", function() {
        var a = $(this);
        a.parents("li").removeClass("is-active")
    }),
    e.touchMenuHover({
        childTag: "ul,div",
        forceiOS: !0
    }),
    f.on("click", function() {
        $(this).find(".search__box").focus()
    }),
    l.append($searchBlk, b, m),
    o.on("click", function(a) {
        a.preventDefault(),
        $("html").addClass("animating no-scroll"),
        o.addClass("is-open")
    }),
    $closeBtn.on("click", function(a) {
        a.preventDefault(),
        $("html").removeClass("animating no-scroll"),
        o.removeClass("is-open")
    }),
    l.find('[class*="menu__"]').each(function(a) {
        var b = $(this)
          , c = b.attr("class")
          , d = new RegExp("menu__","gi");
        b.attr("class", c.replace(d, "mobi-menu__"))
    }),
    q.append(k,l),
    $("body").append(q),
    $mobiLang.each(function(){$(this).appendTo($mobiLangCont);}),
    $rightCont.prepend($mobiLangCont, $closeBtn),
    $('.close-mobi-menu-container').prepend($logo,$rightCont),
    $(".mobi-panel li.has-sub > .mobi-menu__link").each(function(a) {
        var b = $(this)
          , c = b.parents("ul");
        c.length > 2 || b.find(".js-toggle-mobi-submenu").length || b.append('<span class="btn-toggle-mobi-submenu js-toggle-mobi-submenu icon-chevron-thin" />')
    }),
    $(document).on("click", ".js-toggle-mobi-submenu", function(a) {
        var b = $(this)
          , c = b.parent().next()
          , d = b.parent().parent();
        a.preventDefault(),
        a.stopPropagation(),
        d.hasClass("is-active") ? (d.removeClass("is-active"),
        c.slideUp({
            duration: p
        })) : (d.addClass("is-active"),
        c.slideDown({
            duration: p
        }))
    })
}

$(function () {
    //mobile menu
    var b, c = $(".menu__list--lv1"), d = $(".menu__item--lv1"), e = ($(".menu__link--lv1"),
    $(".menu__list--lv2"),
    $(".menu")), f = $(".search"), g = $(".page-logo"), h = $(".tools__item--lang"), i = $('<ul class="tools-mobi"></ul>'), j = $(".search-blk").clone(), k = $("<div class='js-menu-cover'></div>"), l = $('<nav class="visible-md-block visible-xs-block visible-sm-block mobi-panel__item"><div class="close-mobi-menu-container clearfix"></div></nav>'), m = "", n = l.find(".js-close-mobi-menu"),
    o = $(".js-open-mobi-menu"), p = 300, q = $("<div class='mobi-panel'></div>");
    a(c,d,e,f,g,i,h,j,k,l,o,m,n,o,p,q);

    //parallax
    if(!$(".mobile"))
        var s = skrollr.init();
});


$('nav .has-sub').on("mouseover focus", function(){
    $(this).addClass("is-active");
}).on("mouseleave blur", function(){
    $(this).removeClass("is-active");
});

$('.icon-search').on("click focus", function() {
    $(this).parent().find(".search__box").focus()
})

$(window).on('load resize', function() {
    var windowWidth = $(window).width();
    var headerHeight = $('header').outerHeight();
    $('.menu__list.menu__list--lv2').css({
        'width' : windowWidth
        //'top' : headerHeight
    });
});

$(window).on('scroll resize load', function() {
    //var distance = 350;
	var distancePercentage = 0.1
    if ($(window).scrollTop() > $(window).height() * 0.7 - 85) {
		//console.log("window scroll: " + $(window).height() * 0.5 + " :  YES");
      $('header').addClass('scrolled');
    }
    else {
      $('header').removeClass('scrolled');
    }
 });
