(window.webpackJsonpnetflix = window.webpackJsonpnetflix || []).push([[7], {
    111: function (e, t, i) {
        "use strict";
        var a = i(27)
            , n = i(0)
            , c = i.n(n)
            , r = i(48);
        t.a = function (e) {
            return function (t) {
                var i = t.isMovieGridLoading
                    , n = t.isMovieOverviewLoading
                    , o = Object(a.a)(t, ["isMovieGridLoading", "isMovieOverviewLoading"]);
                return i ? c.a.createElement(r.a, null) : n ? null : c.a.createElement(e, o)
            }
        }
    },
    112: function (e, t, i) { },
    113: function (e, t, i) { },
    119: function (e, t, i) {
        "use strict";
        var a = i(10)
            , n = i(11)
            , c = i(14)
            , r = i(12)
            , o = i(13)
            , l = i(0)
            , m = i.n(l)
            , s = (i(112),
                i(1))
            , d = (i(113),
                i(49))
            , u = function (e) {
                var t = e.item
                    , i = (e.listItems,
                        e.addItem,
                        t.title)
                    , a = t.overview
                    , n = t.backdrop_path
                    , c = t.poster_path
                    , r = t.name;
                return m.a.createElement("div", {
                    className: "grid-item"
                }, m.a.createElement("img", {
                    src: "".concat(s.e).concat(s.c).concat(n),
                    alt: "movie",
                    className: "grid-item__img"
                }), m.a.createElement("img", {
                    src: "".concat(s.e).concat(s.c).concat(c),
                    alt: "movie",
                    className: "grid-item__img grid-item__mobile-img"
                }), m.a.createElement("div", {
                    className: "".concat(i ? "grid-item__movie-text" : "grid-item__tv-text")
                }, m.a.createElement("h1", {
                    className: "grid-item__title"
                }, i), m.a.createElement("h1", {
                    className: "grid-item__title"
                }, r), m.a.createElement("span", {
                    className: "grid-item__overview"
                }, a), m.a.createElement(d.a, {
                    item: t
                })))
            }
            , v = i(4)
            , g = i(16)
            , f = i(24)
            , _ = i(19)
            , w = i(17)
            , b = i(110)
            , p = i.n(b)
            , E = function (e) {
                function t() {
                    var e;
                    return Object(a.a)(this, t),
                        (e = Object(c.a)(this, Object(r.a)(t).call(this))).gridRef = m.a.createRef(),
                        e
                }
                return Object(o.a)(t, e),
                    Object(n.a)(t, [{
                        key: "render",
                        value: function () {
                            var e = this
                                , t = this.props
                                , i = t.movieGridItems
                                , a = t.tvShowGridItems
                                , n = t.movies
                                , c = t.tvshow;
                            return m.a.createElement("div", {
                                className: "collection-grid"
                            }, m.a.createElement("span", {
                                className: "collection-grid__left-arrow"
                            }, m.a.createElement(w.a, {
                                icon: _.c,
                                className: "collection-grid__left-arrow--icon",
                                onClick: function () {
                                    return function (e) {
                                        var t = e.current
                                            , i = window.innerWidth + "px";
                                        console.log(i),
                                            p()(t).animate({
                                                scrollLeft: "-=" + i
                                            }, "slow")
                                    }(e.gridRef)
                                }
                            })), m.a.createElement("div", {
                                className: "collection-grid__outer",
                                ref: this.gridRef
                            }, m.a.createElement("div", {
                                className: "collection-grid__inner"
                            }, n ? i.map(function (e) {
                                return m.a.createElement(u, {
                                    key: e.id,
                                    item: e
                                })
                            }) : null, c ? a.map(function (e) {
                                return m.a.createElement(u, {
                                    key: e.id,
                                    item: e
                                })
                            }) : null), m.a.createElement("span", {
                                className: "collection-grid__right-arrow"
                            }, m.a.createElement(w.a, {
                                icon: _.d,
                                className: "collection-grid__right-arrow--icon",
                                onClick: function () {
                                    return function (e) {
                                        var t = e.current
                                            , i = window.innerWidth + "px";
                                        p()(t).animate({
                                            scrollLeft: "+=" + i
                                        }, "slow")
                                    }(e.gridRef)
                                }
                            }))))
                        }
                    }]),
                    t
            }(m.a.Component);
        t.a = Object(v.b)(function (e) {
            return {
                movieGridItems: Object(g.d)(e),
                tvShowGridItems: Object(f.d)(e)
            }
        })(E)
    },
    128: function (e, t, i) {
        "use strict";
        i.r(t);
        var a = i(4)
            , n = i(5)
            , c = i(7)
            , r = i(16)
            , o = i(111)
            , l = i(119)
            , m = Object(n.b)({
                isMovieGridLoading: r.a
            })
            , s = Object(c.d)(Object(a.b)(m), o.a)(l.a);
        t.default = s
    }
}]);
//# sourceMappingURL=7.36c7d9b2.chunk.js.map
