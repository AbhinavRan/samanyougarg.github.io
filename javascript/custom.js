! function(e) {
    "use strict";
    jQuery(document).on("ready", function() {
        function a() {
            e("div.toggle-normal").on("click", function() {
                e("i.top-bar").toggleClass("top-transform"), e("i.middle-bar").toggleClass("middle-transform"), e("i.bottom-bar").toggleClass("bottom-transform")
            }), e(".section,div#menu-options a").on("click", function() {
                e("nav#theMenu").removeClass("menu-open"), e("i.top-bar").removeClass("top-transform"), e("i.middle-bar").removeClass("middle-transform"), e("i.bottom-bar").removeClass("bottom-transform")
            }), e("div#menuToggle").on("click", function() {
                e("div#menuToggle").toggleClass("active"), e("body").toggleClass("body-push-toright"), e("nav#theMenu").toggleClass("menu-open")
            })
        }

        function t() {
            e("div#menu-options,div#about-btn").find("a[href*=#]:not([href=#])").on("click", function() {
                if (location.pathname.replace(/^\//, "") == this.pathname.replace(/^\//, "") && location.hostname == this.hostname) {
                    var a = e(this.hash);
                    if (a = a.length ? a : e("[name=" + this.hash.slice(1) + "]"), a.length) return e("html,body").animate({
                        scrollTop: a.offset().top
                    }, 900, "swing"), !1
                }
            })
        }

        function o() {
            e(window).on("scroll", function() {
                e(this).scrollTop() >= 50 ? e("div#scrollup").addClass("animated flipInY").fadeIn(200) : e("div#scrollup").fadeOut(200)
            }), e("div#scrollup").on("click", function() {
                return e("html,body").animate({
                    scrollTop: 0
                }, 600), !1
            })
        }

        function i() {
            var a = "#a,#b,#c,#d",
                t = "#b,#c,#d",
                o = "#add-more",
                i = "#port-add-icon",
                n = "a.cate",
                s = "a#all-sample";
            e(t).addClass("hide"), e(o).addClass("x"), e(s).on("click", function() {
                e(o).removeClass("hide").addClass("x"), e(a).removeClass("tab-pane"), e(t).addClass("hide"), e(i).addClass("fa-plus").removeClass("fa-arrow-up")
            }), e(n).on("click", function() {
                e(o).addClass("hide x"), e(t).removeClass("hide"), e(a).addClass("tab-pane"), e(i).addClass("fa-plus").removeClass("fa-arrow-up")
            }), e(o).on("click", function() {
                e(o).hasClass("x") ? (e(a).removeClass("tab-pane hide"), e(o).removeClass("x"), e(i).removeClass("fa-plus").addClass("fa-arrow-up")) : (e(t).addClass("hide"), e(o).addClass("x"), e(i).addClass("fa-plus").removeClass("fa-arrow-up"))
            }), e("li.list-shuffle,#add-more").on("click", function() {
                e("div.inLeft").removeClass("InLeft").hide().addClass("InLeft").show(), e("div.inRight").removeClass("InRight").hide().addClass("InRight").show()
            }), e(".popup-image").magnificPopup({
                type: "image",
                removalDelay: 160,
                callbacks: {
                    beforeOpen: function() {
                        this.st.image.markup = this.st.image.markup.replace("mfp-figure", "mfp-figure mfp-with-anim"), this.st.mainClass = this.st.el.attr("data-effect")
                    }
                },
                closeOnContentClick: !0,
                midClick: !0
            }), e(".popup-youtube, .popup-vimeo, .popup-gmaps").magnificPopup({
                disableOn: 700,
                type: "iframe",
                mainClass: "mfp-fade",
                removalDelay: 160,
                preloader: !1,
                fixedContentPos: !1
            })
        }

        function s() {
            function a() {
                if (n !== !1) {
                    var a = e("ul#clients-list").find("li:first");
                    a.animate({
                        "margin-left": "-140px"
                    }, 2e3, function() {
                        a.remove().css({
                            "margin-left": "0px"
                        }), e("ul#clients-list").find("li:last").after(a)
                    })
                }
            }
            var t = e("ul#clients-list"),
                o = t.children().length,
                i = 140 * o;
            t.css("width", i);
            var n = !0,
                s = 1800;
            setInterval(a, s), e(document).on({
                mouseenter: function() {
                    n = !1
                },
                mouseleave: function() {
                    n = !0
                }
            }, "#clients");
            new Swiper(".swiper-container-clients", {
                pagination: ".swiper-pagination-clients",
                a11y: !0,
                keyboardControl: !0,
                autoHeight: !0,
                speed: 800,
                paginationClickable: !0
            })
        }

        function l() {
            e("#html-video").addClass("hidden"), e("#play-btn").on("click", function() {
                var a = "#html-video",
                    t = "#v-card",
                    o = "#button-holder",
                    i = "#icon-play";
                e(o).addClass("middle"), setTimeout(function() {
                    e(t).addClass("hide-overflow"), e("body").addClass("scale-effect"), e(t).addClass("height-change")
                }, 600), setTimeout(function() {
                    e(i).hide(), e(a).removeClass("hidden"), e(a)[0].play(), e("#play-btn").addClass("black")
                }, 1e3)
            }), e("#close-btn").on("click", function() {
                var a = "#html-video",
                    t = "#v-card",
                    o = "#button-holder",
                    i = "#icon-play";
                e("body").removeClass("scale-effect"), setTimeout(function() {
                    e(i).show(), e(o).removeClass("middle"), e(t).removeClass("hide-overflow")
                }, 1e3), e(t).removeClass("height-change"), e(a).addClass("hidden"), e(a)[0].pause(), e("#play-btn").removeClass("black")
            })
        }

        a(), t(), o(), i(), s(), l()
    }), jQuery(window).on("load", function() {
        e("div#loading").fadeOut(500), window.sr = ScrollReveal({
            reset: !1
        });
        var a = "#port-add-icon,#map-card,.interest-icon-even,.interest-icon,.timeline-dot,.timeline-content,#add-more,#skills-card,#testimonials-card,#portfolios-card,#interest-card,#p-one,#p-two,#p-three,#blog-card,#contact-card,#clients,.section-title img";
        sr.reveal(a, {
            duration: 1100
        }), sr.reveal("#about-card,.map-label", {
            duration: 1400,
            delay: 500
        }), sr.reveal("#v-card-holder", {
            duration: 1400,
            distance: "150px"
        }), sr.reveal(".skillbar-bar", {
            duration: 1800,
            delay: 300,
            distance: "0"
        })
    })
}(jQuery);
