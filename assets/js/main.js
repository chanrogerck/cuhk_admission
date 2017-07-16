


$('nav .has-sub').on("mouseover focus", function(){
    $(this).addClass("is-active");
});

$('nav .has-sub').on("mouseleave blur", function(){
    $(this).removeClass("is-active");
});

$('.icon-search').on("click", function() {
    $(this).parent().find(".search__box").focus()
})

$(window).on('load resize', function() {
    var windowWidth = $(window).width();
    var headerHeight = $('header').outerHeight();
    $('.menu__list.menu__list--lv2').css({
        'width' : windowWidth
        //'top' : headerHeight
    })
});

/*function(a) {
    a.fn.touchMenuHover = function(b) {
        var c, d, e = a.extend({
            childTag: "ul",
            closeElement: "",
            forceiOS: !1,
            openClass: "tmh-open"
        }, b), f = a(this).find("a"), g = "3ds|android|bada|bb10|hpwos|iemobile|kindle fire|opera mini|opera mobi|opera tablet|rim|silk|wiiu", h = "html", i = navigator.msMaxTouchPoints > 0;
        return ("ul" !== e.childTag.toString().toLowerCase() || e.forceiOS) && (g += "|ipad|ipod|iphone"),
        c = new RegExp(g,"gi"),
        f.length > 0 && (c.test(navigator.userAgent) || i) && (f.each(function() {
            var b = a(this)
              , c = b.parent("li")
              , d = c.siblings().find("a");
            b.next(e.childTag).length > 0 && c.attr("aria-haspopup", !0),
            b.click(function(b) {
                var c = a(this);
                b.stopPropagation(),
                d.removeClass(e.openClass),
                !c.hasClass(e.openClass) && c.nextAll(e.childTag).length > 0 && (b.preventDefault(),
                c.addClass(e.openClass))
            })
        }),
        e.closeElement.length > 1 && (h += "," + e.closeElement),
        d = a(h),
        "ontouchstart"in window && d.css("cursor", "pointer"),
        d.click(function() {
            f.removeClass(e.openClass)
        })),
        this
    }
}(jQuery)

mainMenu = function() {
    function a() {
        b = c.clone(),
        $mobiQuickLinks = g.clone(),
        $mobiCuhkHome = h.clone(),
        $mobiLang = i.clone(),
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
        m.append($mobiQuickLinks, $mobiCuhkHome, $mobiLang, $mobiSearchBlk),
        l.append(b, m),
        $body.append(l),
        o.on("click", function(a) {
            a.preventDefault(),
            $html.addClass("animating no-scroll"),
            o.addClass("is-open")
        }),
        n.on("click", function(a) {
            a.preventDefault(),
            $html.removeClass("animating no-scroll"),
            o.removeClass("is-open")
        }),
        l.find('[class*="menu__"]').each(function(a) {
            var b = $(this)
              , c = b.attr("class")
              , d = new RegExp("menu__","gi");
            b.attr("class", c.replace(d, "mobi-menu__"))
        }),
        $(".mobi-panel li.has-sub > .mobi-menu__link").each(function(a) {
            var b = $(this)
              , c = b.parents("ul");
            c.length > 2 || b.find(".js-toggle-mobi-submenu").length || b.append('<span class="btn-toggle-mobi-submenu js-toggle-mobi-submenu" />')
        }),
        $(document).on("click", ".js-toggle-mobi-submenu", function(a) {
            var b = $(this)
              , c = b.parent().next()
              , d = b.parent().parent();
            a.preventDefault(),
            a.stopPropagation(),
            d.hasClass("is-active") ? (d.removeClass("is-active"),
            c.velocity("slideUp", {
                duration: p,
                easing: q
            })) : (d.addClass("is-active"),
            c.velocity("slideDown", {
                duration: p,
                easing: q
            }))
        })
    }
    var b, c = $(".menu__list--lv1"), d = $(".menu__item--lv1"), e = ($(".menu__link--lv1"),
    $(".menu__list--lv2"),
    $(".menu")), f = $(".search"), g = $(".quick-links").clone(), h = $(".hku-home").clone(), i = $(".lang").clone(), j = $(".search-blk").clone(), l = $('<nav class="mobi-panel visible-sm-block visible-xs-block"><div class="close-mobi-menu-container"><button class="btn btn--close-mobi-menu icon-font--cross js-close-mobi-menu" type="button">'+ "</button></div></nav>"), m = $('<ul class="tools tools--mobi"></ul>'), n = l.find(".js-close-mobi-menu"), o = $(".js-open-mobi-menu"), p = 300, q = "ease-out";
    return {
        init: a
    }
}()
mainMenu.init();*/
