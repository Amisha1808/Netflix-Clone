(window.webpackJsonpnetflix = window.webpackJsonpnetflix || []).push([[5], {
    111: function (e, t, n) {
        "use strict";
        var i = n(27)
            , a = n(0)
            , c = n.n(a)
            , o = n(48);
        t.a = function (e) {
            return function (t) {
                var n = t.isMovieGridLoading
                    , a = t.isMovieOverviewLoading
                    , l = Object(i.a)(t, ["isMovieGridLoading", "isMovieOverviewLoading"]);
                return n ? c.a.createElement(o.a, null) : a ? null : c.a.createElement(e, l)
            }
        }
    },
    114: function (e, t, n) { },
    115: function (e, t, n) { },
    116: function (e, t, n) { },
    118: function (e, t, n) {
        "use strict";
        var i = n(0)
            , a = n.n(i)
            , c = (n(114),
                n(10))
            , o = n(11)
            , l = n(14)
            , r = n(12)
            , s = n(13)
            , m = n(30)
            , u = n.n(m)
            , v = (n(115),
                n(1))
            , d = (n(116),
                function (e, t, n) {
                    return null == t && (t = 150),
                        null == n && (n = "..."),
                        e.length > t ? e.substring(0, t - n.length) + n : e
                }
            )
            , f = n(8)
            , w = n(25)
            , h = n(49)
            , p = Object(f.g)(function (e) {
                var t = e.item
                    , n = e.movies
                    , i = e.tvshow
                    , c = e.history
                    , o = (e.addItem,
                        e.listItems,
                        t.title)
                    , l = t.overview
                    , r = t.backdrop_path
                    , s = t.name
                    , m = d(l, 155, " ..read more")
                    , u = n ? Object(w.a)(o) : null
                    , f = i ? Object(w.a)(s) : null;
                return a.a.createElement("div", {
                    className: "collection-item"
                }, a.a.createElement("div", {
                    onClick: function () {
                        return n ? c.push("/movies/".concat(u)) : c.push("/tvshows/".concat(f))
                    }
                }, a.a.createElement("img", {
                    src: "".concat(v.e).concat(v.d).concat(r),
                    alt: "movie",
                    className: "collection-item__movie-image"
                }), a.a.createElement("div", {
                    className: "collection-item__text"
                }, a.a.createElement("h1", {
                    className: "collection-item__title"
                }, o), a.a.createElement("h1", {
                    className: "collection-item__title"
                }, s), a.a.createElement("span", {
                    className: "collection-item__overview"
                }, m))), a.a.createElement("div", {
                    className: "collection-item__addtolist"
                }, a.a.createElement(h.a, {
                    item: t
                })))
            })
            , b = n(4)
            , _ = n(16)
            , E = n(24)
            , g = n(19)
            , O = n(17)
            , j = n(110)
            , N = n.n(j)
            , k = function (e) {
                var t = e.current
                    , n = parseInt(N()(t).css("margin-left"));
                console.log(n),
                    window.matchMedia("(min-width: 768px)").matches && n < 0 && N()(t).animate({
                        marginLeft: "+=330px"
                    }, "slow"),
                    window.matchMedia("(max-width: 768px)").matches && n < 0 && N()(t).animate({
                        marginLeft: "+=275px"
                    }, "slow")
            }
            , x = function (e) {
                var t = e.current
                    , n = parseInt(N()(t).css("margin-left"));
                console.log(n),
                    window.matchMedia("(min-width: 768px)").matches && n > -1650 && N()(t).animate({
                        marginLeft: "-=330px"
                    }, "slow"),
                    window.matchMedia("(max-width: 768px)").matches && n > -1800 && N()(t).animate({
                        marginLeft: "-=275px"
                    }, "slow")
            }
            , L = n(50)
            , y = n.n(L)
            , M = function (e) {
                function t() {
                    var e;
                    return Object(c.a)(this, t),
                        (e = Object(l.a)(this, Object(r.a)(t).call(this))).onLeftClick = function () {
                            k(e.divRef)
                        }
                        ,
                        e.onRightClick = function () {
                            x(e.divRef)
                        }
                        ,
                        e.divRef = a.a.createRef(),
                        e
                }
                return Object(s.a)(t, e),
                    Object(o.a)(t, [{
                        key: "componentDidMount",
                        value: function () {
                            !function (e) {
                                var t = e.querySelector("h1")
                                    , n = e.querySelector(".collection-item");
                                n && n.addEventListener("mouseover", function () {
                                    setTimeout(function () {
                                        t.setAttribute("style", "opacity:0; ")
                                    }, 250)
                                }),
                                    n && n.addEventListener("mouseleave", function () {
                                        setTimeout(function () {
                                            t.setAttribute("style", "opacity:1; ")
                                        }, 250)
                                    })
                            }(u.a.findDOMNode(this))
                        }
                    }, {
                        key: "render",
                        value: function () {
                            var e = this.props
                                , t = e.title
                                , n = e.movieItems
                                , i = e.tvItems
                                , c = e.start
                                , o = e.end
                                , l = e.movies
                                , r = e.tvshow
                                , s = n.slice(c, o)
                                , m = i.slice(c, o);
                            return a.a.createElement(y.a, null, a.a.createElement("div", {
                                className: "collection-preview"
                            }, a.a.createElement("h1", {
                                className: "collection-preview__title"
                            }, t.toUpperCase()), a.a.createElement("div", {
                                className: "collection-preview__box"
                            }, a.a.createElement("span", {
                                className: "collection-preview__left-arrow"
                            }, a.a.createElement(O.a, {
                                icon: g.c,
                                className: "collection-preview__left-arrow-icon",
                                onClick: this.onLeftClick
                            })), a.a.createElement("span", {
                                className: "collection-preview__right-arrow"
                            }, a.a.createElement(O.a, {
                                icon: g.d,
                                className: "collection-preview__right-arrow-icon",
                                onClick: this.onRightClick
                            })), a.a.createElement("div", {
                                className: "collection-preview__inner",
                                ref: this.divRef
                            }, l ? s.map(function (e) {
                                return a.a.createElement(p, {
                                    key: e.id,
                                    item: e,
                                    movies: l,
                                    tvshow: r
                                })
                            }) : null, r ? m.map(function (e) {
                                return a.a.createElement(p, {
                                    key: e.id,
                                    item: e,
                                    movies: l,
                                    tvshow: r
                                })
                            }) : null))))
                        }
                    }]),
                    t
            }(a.a.Component)
            , C = Object(b.b)(function (e) {
                return {
                    movieItems: Object(_.e)(e),
                    tvItems: Object(E.e)(e)
                }
            })(M)
            , I = n(5)
            , R = Object(I.a)([function (e) {
                return e.collection
            }
            ], function (e) {
                return e.collection
            });
        t.a = Object(b.b)(function (e) {
            return {
                collection: R(e)
            }
        })(function (e) {
            var t = e.movies
                , n = e.tvshow
                , i = e.collection;
            return a.a.createElement("div", {
                className: "collection-overview"
            }, i.map(function (e) {
                return a.a.createElement(C, {
                    key: e.id,
                    title: e.title,
                    start: e.start,
                    end: e.end,
                    movies: t,
                    tvshow: n
                })
            }))
        })
    },
    129: function (e, t, n) {
        "use strict";
        n.r(t);
        var i = n(4)
            , a = n(5)
            , c = n(7)
            , o = n(16)
            , l = n(111)
            , r = n(118)
            , s = Object(a.b)({
                isMovieOverviewLoading: o.a
            })
            , m = Object(c.d)(Object(i.b)(s), l.a)(r.a);
        t.default = m
    }
}]);
//# sourceMappingURL=5.23d1f948.chunk.js.map
