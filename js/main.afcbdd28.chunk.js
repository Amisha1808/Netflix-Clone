(window.webpackJsonpnetflix = window.webpackJsonpnetflix || []).push([[2], [, function (e, t, n) {
    "use strict";
    n.d(t, "b", function () {
        return a
    }),
        n.d(t, "a", function () {
            return r
        }),
        n.d(t, "e", function () {
            return c
        }),
        n.d(t, "c", function () {
            return i
        }),
        n.d(t, "d", function () {
            return o
        }),
        n.d(t, "f", function () {
            return s
        }),
        n.d(t, "g", function () {
            return l
        }),
        n.d(t, "h", function () {
            return u
        });
    var a = "https://api.themoviedb.org/3/"
        , r = "9f1ffd64abd4bde18614fd9087d87d71"
        , c = "http://image.tmdb.org/t/p/"
        , i = "w1280"
        , o = "w500"
        , s = "w500"
        , l = "w92"
        , u = "https://www.youtube.com/watch?v="
}
    , , , , , , , , , , , , , , , function (e, t, n) {
        "use strict";
        n.d(t, "e", function () {
            return i
        }),
            n.d(t, "d", function () {
                return o
            }),
            n.d(t, "c", function () {
                return s
            }),
            n.d(t, "f", function () {
                return l
            }),
            n.d(t, "a", function () {
                return u
            }),
            n.d(t, "b", function () {
                return m
            });
        var a = n(5)
            , r = n(25)
            , c = function (e) {
                return e.movie
            }
            , i = Object(a.a)([c], function (e) {
                return e.movieItems
            })
            , o = Object(a.a)([c], function (e) {
                return e.movieGridItems
            })
            , s = Object(a.a)([c], function (e) {
                return e.movieCast
            })
            , l = Object(a.a)([c], function (e) {
                return e.movieVideos
            })
            , u = Object(a.a)([c], function (e) {
                return e.isFetching
            })
            , m = (Object(a.a)([c], function (e) {
                return e.isAdditionalFetching
            }),
                function (e) {
                    return Object(a.a)([i], function (t) {
                        return t.filter(function (t) {
                            return Object(r.a)(t.title) === e
                        })
                    })
                }
            )
    }
    , , , , , , , , function (e, t, n) {
        "use strict";
        n.d(t, "e", function () {
            return i
        }),
            n.d(t, "d", function () {
                return o
            }),
            n.d(t, "c", function () {
                return s
            }),
            n.d(t, "f", function () {
                return l
            }),
            n.d(t, "a", function () {
                return u
            }),
            n.d(t, "b", function () {
                return m
            });
        var a = n(5)
            , r = n(25)
            , c = function (e) {
                return e.tv
            }
            , i = Object(a.a)([c], function (e) {
                return e.tvItems
            })
            , o = Object(a.a)([c], function (e) {
                return e.tvGridItems
            })
            , s = Object(a.a)([c], function (e) {
                return e.tvCast
            })
            , l = Object(a.a)([c], function (e) {
                return e.tvVideos
            })
            , u = Object(a.a)([c], function (e) {
                return e.isFetching
            })
            , m = function (e) {
                return Object(a.a)([i], function (t) {
                    return t.filter(function (t) {
                        return Object(r.a)(t.name) === e
                    })
                })
            }
    }
    , function (e, t, n) {
        "use strict";
        n.d(t, "a", function () {
            return a
        });
        var a = function (e) {
            return e.split(" ").join("").toLowerCase().replace(/[^a-z0-9]/g, "")
        }
    }
    , , , function (e, t, n) {
        "use strict";
        n.d(t, "a", function () {
            return r
        }),
            n.d(t, "b", function () {
                return c
            }),
            n.d(t, "c", function () {
                return i
            });
        var a = n(5)
            , r = Object(a.a)([function (e) {
                return e.list
            }
            ], function (e) {
                return e.listItems
            })
            , c = function (e) {
                return Object(a.a)([r], function (t) {
                    return t.filter(function (t) {
                        return t.title ? t.id === e : null
                    })
                })
            }
            , i = function (e) {
                return Object(a.a)([r], function (t) {
                    return t.filter(function (t) {
                        return t.name ? t.id === e : null
                    })
                })
            }
    }
    , , , , function (e, t, n) {
        "use strict";
        n.d(t, "a", function () {
            return r
        }),
            n.d(t, "b", function () {
                return c
            });
        var a = n(35)
            , r = function (e) {
                return {
                    type: a.a.ADD_ITEM,
                    payload: e
                }
            }
            , c = function (e) {
                return {
                    type: a.a.REMOVE_ITEM,
                    payload: e
                }
            }
    }
    , function (e, t, n) {
        e.exports = n.p + "static/media/imdb.f7f2904f.png"
    }
    , function (e, t, n) {
        e.exports = n.p + "static/media/star.9179862c.png"
    }
    , function (e, t, n) {
        "use strict";
        t.a = {
            ADD_ITEM: "ADD_ITEM",
            REMOVE_ITEM: "REMOVE_ITEM"
        }
    }
    , , , , , function (e, t, n) {
        e.exports = n.p + "static/media/Background.d2edb29f.jpg"
    }
    , , , , , , , , function (e, t, n) {
        "use strict";
        var a = n(0)
            , r = n.n(a);
        n(91);
        t.a = function () {
            return r.a.createElement("div", {
                className: "spinner-overlay"
            }, r.a.createElement("div", {
                className: "spinner-container"
            }))
        }
    }
    , function (e, t, n) {
        "use strict";
        var a = n(0)
            , r = n.n(a)
            , c = (n(104),
                n(19))
            , i = n(17)
            , o = n(4)
            , s = n(32)
            , l = n(28);
        t.a = Object(o.b)(function (e) {
            return {
                listItems: Object(l.a)(e)
            }
        }, function (e) {
            return {
                addItem: function (t) {
                    return e(Object(s.a)(t))
                },
                removeItem: function (t) {
                    return e(Object(s.b)(t))
                }
            }
        })(function (e) {
            var t = e.addItem
                , n = e.removeItem
                , a = e.item
                , o = e.listItems.filter(function (e) {
                    return e.id === a.id
                });
            return r.a.createElement("div", {
                className: "addtolist"
            }, o.length ? r.a.createElement("div", {
                className: "addtolist__container",
                onClick: function () {
                    return n(a)
                }
            }, r.a.createElement(i.a, {
                icon: c.b,
                className: "addtolist--icon"
            }), r.a.createElement("span", null, "Added to list")) : r.a.createElement("div", {
                className: "addtolist__container",
                onClick: function () {
                    return t(a)
                }
            }, r.a.createElement(i.a, {
                icon: c.g,
                className: "addtolist--icon"
            }), r.a.createElement("span", null, "Add to list")))
        })
    }
    , , , , , , function (e, t, n) {
        e.exports = n.p + "static/media/logo.a1f673e7.png"
    }
    , , , function (e, t, n) {
        e.exports = n.p + "static/media/netflix.d902c772.jpg"
    }
    , , , , , , function (e, t, n) {
        e.exports = n(109)
    }
    , , , , , function (e, t, n) { }
    , , function (e, t, n) { }
    , function (e, t, n) { }
    , function (e, t, n) { }
    , , , , , , , , , , , , , , function (e, t, n) { }
    , function (e, t, n) { }
    , function (e, t, n) { }
    , function (e, t, n) { }
    , function (e, t, n) { }
    , function (e, t, n) { }
    , function (e, t, n) { }
    , function (e, t, n) { }
    , , , function (e, t, n) { }
    , function (e, t, n) { }
    , function (e, t, n) { }
    , function (e, t, n) { }
    , function (e, t, n) { }
    , function (e, t, n) { }
    , function (e, t, n) { }
    , function (e, t, n) { }
    , function (e, t, n) { }
    , function (e, t, n) { }
    , , , function (e, t, n) {
        "use strict";
        n.r(t);
        var a = n(0)
            , r = n.n(a)
            , c = n(30)
            , i = n.n(c)
            , o = (n(69),
                n(22))
            , s = n.n(o)
            , l = n(15)
            , u = n(31)
            , m = n(10)
            , p = n(11)
            , d = n(14)
            , f = n(12)
            , h = n(13)
            , b = (n(71),
                n(9))
            , _ = n(55)
            , v = n.n(_)
            , E = (n(72),
                n(8))
            , g = (n(73),
                n(5))
            , O = Object(g.a)([function (e) {
                return e.search
            }
            ], function (e) {
                return e.searchItems
            })
            , y = function (e) {
                return Object(g.a)([O], function (t) {
                    return t.filter(function (t) {
                        return t.name ? t.id === e : null
                    })
                })
            }
            , j = {
                SET_SEARCH_DATA: "SET_SEARCH_DATA"
            }
            , N = n(1)
            , T = function (e) {
                e = e.split(" ").join("%20");
                var t = "".concat(N.b, "search/multi?api_key=").concat(N.a, "&language=en-US&query=").concat(e, "&page=1&include_adult=false");
                return fetch(t).then(function (e) {
                    return e.json()
                })
            };
        var S = n(4)
            , w = n(7)
            , A = function (e) {
                function t() {
                    var e;
                    return Object(m.a)(this, t),
                        (e = Object(d.a)(this, Object(f.a)(t).call(this))).handleChange = function (t) {
                            var n = t.target.value;
                            return 1 === Number(n.length) && "/searchresults" !== e.props.currentRoute ? e.setState({
                                currentPath: e.props.currentRoute
                            }, function () {
                                return e.props.history.push("/searchresults")
                            }) : 0 === Number(n.length) ? e.props.history.push("".concat(e.state.currentPath)) : Number(n.length) > 1 && e.props.history.push("/searchresults"),
                                n ? e.props.dispatch(function (e) {
                                    return function (t) {
                                        T(e).then(function (e) {
                                            t({
                                                type: j.SET_SEARCH_DATA,
                                                payload: e.results
                                            })
                                        })
                                    }
                                }(n)) : null
                        }
                        ,
                        e.state = {
                            currentPath: ""
                        },
                        e
                }
                return Object(h.a)(t, e),
                    Object(p.a)(t, [{
                        key: "render",
                        value: function () {
                            return r.a.createElement("div", {
                                className: "container-1"
                            }, r.a.createElement("div", {
                                className: "container-2"
                            }, r.a.createElement("span", {
                                className: "search-icon"
                            }, r.a.createElement("i", {
                                className: "fa fa-search"
                            })), r.a.createElement("input", {
                                onChange: this.handleChange,
                                type: "search",
                                id: "search",
                                placeholder: "Movies, TV Shows..."
                            })))
                        }
                    }]),
                    t
            }(r.a.Component)
            , I = Object(w.d)(E.g, Object(S.b)(function (e) {
                return {
                    searchItems: O(e)
                }
            }))(A)
            , D = n(36)
            , k = n.n(D);
        n(79),
            n(82);
        function C(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var a = Object.getOwnPropertySymbols(e);
                t && (a = a.filter(function (t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                })),
                    n.push.apply(n, a)
            }
            return n
        }
        function P(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {};
                t % 2 ? C(n, !0).forEach(function (t) {
                    Object(l.a)(e, t, n[t])
                }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : C(n).forEach(function (t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                })
            }
            return e
        }
        var M = function () {
            var e = Object(u.a)(s.a.mark(function e(t, n) {
                var a, r, c, i;
                return s.a.wrap(function (e) {
                    for (; ;)
                        switch (e.prev = e.next) {
                            case 0:
                                if (t) {
                                    e.next = 2;
                                    break
                                }
                                return e.abrupt("return");
                            case 2:
                                return a = V.doc("users/".concat(t.uid)),
                                    e.next = 5,
                                    a.get();
                            case 5:
                                if (e.sent.exists) {
                                    e.next = 17;
                                    break
                                }
                                return r = t.displayName,
                                    c = t.email,
                                    i = new Date,
                                    e.prev = 9,
                                    e.next = 12,
                                    a.set(P({
                                        displayName: r,
                                        email: c,
                                        createdAt: i
                                    }, n));
                            case 12:
                                e.next = 17;
                                break;
                            case 14:
                                e.prev = 14,
                                    e.t0 = e.catch(9),
                                    console.log("".concat(e.t0, " User Can't be registered"));
                            case 17:
                                return e.abrupt("return", a);
                            case 18:
                            case "end":
                                return e.stop()
                        }
                }, e, null, [[9, 14]])
            }));
            return function (t, n) {
                return e.apply(this, arguments)
            }
        }();
        k.a.initializeApp({
            apiKey: "AIzaSyA7Zk0d-jyuBGkinHOlBBm4mS4jAb0gjXQ",
            authDomain: "netflix-clone-by-shivam.firebaseapp.com",
            databaseURL: "https://netflix-clone-by-shivam.firebaseio.com",
            projectId: "netflix-clone-by-shivam",
            storageBucket: "",
            messagingSenderId: "889922598558",
            appId: "1:889922598558:web:7ca925df16da432c"
        });
        var U = k.a.auth()
            , V = k.a.firestore()
            , x = new k.a.auth.GoogleAuthProvider;
        x.setCustomParameters({
            prompt: "select_account"
        });
        var R = function () {
            return U.signInWithPopup(x)
        }
            , L = (k.a,
                function (e) {
                    return e.user
                }
            )
            , G = Object(g.a)([L], function (e) {
                return e.currentUser
            })
            , B = Object(g.a)([L], function (e) {
                return e.hidden
            })
            , H = {
                SET_CURRENT_USER: "SET_CURRENT_USER",
                TOGGLE_HIDDEN_MENU: "TOGGLE_HIDDEN_MENU"
            }
            , F = function () {
                return {
                    type: H.TOGGLE_HIDDEN_MENU
                }
            }
            , q = n(19)
            , z = n(17)
            , W = (n(87),
                n(58))
            , J = n.n(W)
            , K = Object(w.d)(E.g, Object(S.b)(function (e) {
                return {
                    currentUser: G(e)
                }
            }, function (e) {
                return {
                    ToggleMenuHidden: function () {
                        return e(F())
                    }
                }
            }))(function (e) {
                e.history;
                var t = e.currentUser
                    , n = e.ToggleMenuHidden;
                return r.a.createElement("div", {
                    className: "overlay"
                }, r.a.createElement("div", {
                    className: "overlay__exit",
                    onClick: n
                }, r.a.createElement(z.a, {
                    icon: q.h,
                    className: "overlay__exit-icon"
                })), r.a.createElement("div", {
                    className: "overlay__content",
                    onClick: n
                }, r.a.createElement("img", {
                    src: J.a,
                    alt: "netflix",
                    className: "overlay__netflix"
                }), t ? r.a.createElement(b.b, {
                    className: "overlay__username",
                    to: ""
                }, "Hi, ", t.displayName) : r.a.createElement(b.b, {
                    className: "overlay__username",
                    to: ""
                }, "Hi, Guest"), r.a.createElement(b.b, {
                    className: "overlay__option",
                    to: "/movies"
                }, "Movies"), r.a.createElement(b.b, {
                    className: "overlay__option",
                    to: "/tvshows"
                }, "TV Shows"), r.a.createElement(b.b, {
                    className: "overlay__option",
                    to: "/mylist"
                }, "My List"), t ? r.a.createElement("div", {
                    className: "overlay__option overlay__signout",
                    onClick: function () {
                        return U.signOut()
                    }
                }, "Sign Out") : r.a.createElement("div", null, r.a.createElement(b.b, {
                    className: "overlay__option",
                    to: "/signin"
                }, "Sign In"))))
            })
            , Q = Object(w.d)(E.g, Object(S.b)(function (e) {
                return {
                    currentUser: G(e),
                    hidden: B(e)
                }
            }, function (e) {
                return {
                    ToggleMenuHidden: function () {
                        return e(F())
                    }
                }
            }))(function (e) {
                var t = e.history
                    , n = e.currentUser
                    , a = e.currentRoute
                    , c = e.hidden
                    , i = e.ToggleMenuHidden;
                return r.a.createElement("div", {
                    className: "header"
                }, r.a.createElement("div", {
                    className: "header__logo-box",
                    onClick: function () {
                        return t.push("/movies")
                    }
                }, r.a.createElement("img", {
                    src: v.a,
                    alt: "logo",
                    className: "header__logo"
                })), r.a.createElement("div", {
                    className: "header__options"
                }, r.a.createElement("div", {
                    className: "header__options-primary"
                }, r.a.createElement(b.b, {
                    className: "header__option",
                    to: "/movies"
                }, "Movies"), r.a.createElement(b.b, {
                    className: "header__option",
                    to: "/tvshows"
                }, "TV Shows"), r.a.createElement(b.b, {
                    className: "header__option",
                    to: "/mylist"
                }, "My List")), r.a.createElement("div", {
                    className: "header__searchbar"
                }, r.a.createElement(I, {
                    currentRoute: a
                })), n ? r.a.createElement("div", {
                    className: "header__options-secondary"
                }, r.a.createElement(b.b, {
                    className: "header__option",
                    to: ""
                }, "Hi, ", n.displayName), r.a.createElement("div", {
                    className: "header__option header__option--signout",
                    onClick: function () {
                        return U.signOut()
                    }
                }, "Sign Out")) : r.a.createElement("div", {
                    className: "header__options-secondary"
                }, r.a.createElement(b.b, {
                    className: "header__option",
                    to: ""
                }, "Hi, Guest"), r.a.createElement(b.b, {
                    className: "header__option header__option--signin",
                    to: "/signin"
                }, "Sign In"))), r.a.createElement(z.a, {
                    icon: q.a,
                    className: "header__nav-menu-icon",
                    onClick: i
                }), c ? null : r.a.createElement(K, null))
            })
            , X = (n(88),
                n(16))
            , Z = {
                SET_MOVIE_DATA_START: "SET_MOVIE_DATA_START",
                SET_MOVIE_DATA: "SET_MOVIE_DATA",
                SET_MOVIE_GRID_DATA: "SET_MOVIE_GRID_DATA",
                SET_MOVIE_DATA_SUCCESS: "SET_MOVIE_DATA_SUCCESS",
                SET_MOVIE_ADDITIONAL_DATA_SUCCESS: "SET_MOVIE_ADDITIONAL_DATA_SUCCESS",
                SET_MOVIE_ADDITIONAL_DATA: "SET_MOVIE_ADDITIONAL_DATA"
            }
            , Y = ["".concat(N.b, "movie/popular?api_key=").concat(N.a, "&language=en-US&page=1"), "".concat(N.b, "movie/popular?api_key=").concat(N.a, "&language=en-US&page=2"), "".concat(N.b, "movie/popular?api_key=").concat(N.a, "&language=en-US&page=3")]
            , $ = function () {
                return Promise.all(Y.map(function (e) {
                    return fetch(e).then(function (e) {
                        return e.json()
                    })
                }))
            }
            , ee = function (e) {
                var t = "".concat(N.b, "movie/").concat(e, "?api_key=").concat(N.a, "&append_to_response=videos,credits&language=en-US");
                return fetch(t).then(function (e) {
                    return e.json()
                })
            }
            , te = ["".concat(N.b, "search/movie?api_key=").concat(N.a, "&language=en-US&query=infinity"), "".concat(N.b, "search/movie?api_key=").concat(N.a, "&language=en-US&query=The%20Lion%20King"), "".concat(N.b, "search/movie?api_key=").concat(N.a, "&language=en-US&query=how%20to%20train%20your%20dragon%20the")];
        var ne = function () {
            return {
                type: Z.SET_MOVIE_DATA_SUCCESS
            }
        };
        function ae() {
            return function (e) {
                $().then(function (t) {
                    var n = t.map(function (e) {
                        return e.results
                    })
                        , a = Array.prototype.concat.apply([], n);
                    console.log(t),
                        console.log(a),
                        e({
                            type: Z.SET_MOVIE_DATA,
                            payload: a
                        })
                }),
                    Promise.all(te.map(function (e) {
                        return fetch(e).then(function (e) {
                            return e.json()
                        })
                    })).then(function (t) {
                        var n = t.map(function (e) {
                            return e.results[0]
                        })
                            , a = Array.prototype.concat.apply([], n);
                        e({
                            type: Z.SET_MOVIE_GRID_DATA,
                            payload: a
                        }),
                            e(ne())
                    })
            }
        }
        var re = function () {
            return {
                type: Z.SET_MOVIE_ADDITIONAL_DATA_SUCCESS
            }
        };
        var ce = r.a.lazy(function () {
            return Promise.all([n.e(0), n.e(7)]).then(n.bind(null, 128))
        })
            , ie = r.a.lazy(function () {
                return Promise.all([n.e(0), n.e(5)]).then(n.bind(null, 129))
            })
            , oe = r.a.lazy(function () {
                return n.e(1).then(n.bind(null, 132))
            })
            , se = function (e) {
                function t() {
                    return Object(m.a)(this, t),
                        Object(d.a)(this, Object(f.a)(t).apply(this, arguments))
                }
                return Object(h.a)(t, e),
                    Object(p.a)(t, [{
                        key: "componentDidMount",
                        value: function () {
                            this.props.dispatch(ae())
                        }
                    }, {
                        key: "render",
                        value: function () {
                            return r.a.createElement("div", {
                                className: "movies"
                            }, r.a.createElement(a.Suspense, {
                                fallback: r.a.createElement("div", null)
                            }, r.a.createElement(ce, {
                                movies: !0
                            }), r.a.createElement(ie, {
                                movies: !0
                            }), r.a.createElement(oe, null)))
                        }
                    }]),
                    t
            }(r.a.Component)
            , le = Object(S.b)(function (e) {
                return {
                    movieItems: Object(X.e)(e),
                    isFetching: Object(X.a)(e)
                }
            })(se)
            , ue = (n(89),
                n(24))
            , me = {
                SET_TV_DATA: "SET_TV_DATA",
                SET_TV_GRID_DATA: "SET_TV_GRID_DATA",
                SET_TV_DATA_SUCCESS: "SET_TV_DATA_SUCCESS",
                SET_TV_ADDITIONAL_DATA: "SET_TV_ADDITIONAL_DATA"
            }
            , pe = ["".concat(N.b, "tv/top_rated?api_key=").concat(N.a, "&language=en-US&page=1"), "".concat(N.b, "tv/popular?api_key=").concat(N.a, "&language=en-US&page=4"), "".concat(N.b, "tv/top_rated?api_key=").concat(N.a, "&language=en-US&page=3")];
        var de = function (e) {
            var t = "".concat(N.b, "tv/").concat(e, "?api_key=").concat(N.a, "&append_to_response=videos,credits&language=en-US");
            return fetch(t).then(function (e) {
                return e.json()
            })
        }
            , fe = ["".concat(N.b, "search/tv?api_key=").concat(N.a, "&language=en-US&query=stranger"), "".concat(N.b, "search/tv?api_key=").concat(N.a, "&language=en-US&query=breaking"), "".concat(N.b, "search/tv?api_key=").concat(N.a, "&language=en-US&query=13")];
        var he = function () {
            return {
                type: me.SET_TV_DATA_SUCCESS
            }
        };
        function be() {
            return function (e) {
                Promise.all(pe.map(function (e) {
                    return fetch(e).then(function (e) {
                        return e.json()
                    })
                })).then(function (t) {
                    var n = t.map(function (e) {
                        return e.results
                    })
                        , a = Array.prototype.concat.apply([], n);
                    e({
                        type: me.SET_TV_DATA,
                        payload: a
                    })
                }),
                    Promise.all(fe.map(function (e) {
                        return fetch(e).then(function (e) {
                            return e.json()
                        })
                    })).then(function (t) {
                        var n = t.map(function (e) {
                            return e.results[0]
                        })
                            , a = Array.prototype.concat.apply([], n);
                        e({
                            type: me.SET_TV_GRID_DATA,
                            payload: a
                        }),
                            e(he())
                    })
            }
        }
        var _e = r.a.lazy(function () {
            return Promise.all([n.e(0), n.e(8)]).then(n.bind(null, 130))
        })
            , ve = r.a.lazy(function () {
                return Promise.all([n.e(0), n.e(6)]).then(n.bind(null, 131))
            })
            , Ee = r.a.lazy(function () {
                return n.e(1).then(n.bind(null, 132))
            })
            , ge = function (e) {
                function t() {
                    return Object(m.a)(this, t),
                        Object(d.a)(this, Object(f.a)(t).apply(this, arguments))
                }
                return Object(h.a)(t, e),
                    Object(p.a)(t, [{
                        key: "componentDidMount",
                        value: function () {
                            this.props.dispatch(be())
                        }
                    }, {
                        key: "render",
                        value: function () {
                            return r.a.createElement("div", {
                                className: "TV"
                            }, r.a.createElement(a.Suspense, {
                                fallback: r.a.createElement("div", null)
                            }, r.a.createElement(_e, {
                                tvshow: !0
                            }), r.a.createElement(ve, {
                                tvshow: !0
                            }), r.a.createElement(Ee, null)))
                        }
                    }]),
                    t
            }(r.a.Component)
            , Oe = Object(S.b)(function (e) {
                return {
                    tvItems: Object(ue.e)(e),
                    isFetching: Object(ue.a)(e)
                }
            })(ge)
            , ye = (n(90),
                n(27))
            , je = n(48)
            , Ne = function (e) {
                return function (t) {
                    var n = t.isLoading
                        , a = Object(ye.a)(t, ["isLoading"]);
                    return n ? r.a.createElement(je.a, null) : r.a.createElement(e, a)
                }
            }
            , Te = (n(92),
                n(33))
            , Se = n.n(Te)
            , we = n(34)
            , Ae = n.n(we)
            , Ie = (n(93),
                n(94),
                function (e) {
                    function t(e) {
                        var n;
                        return Object(m.a)(this, t),
                            (n = Object(d.a)(this, Object(f.a)(t).call(this, e))).onLoad = function () {
                                n.setState({
                                    didLoad: !0
                                })
                            }
                            ,
                            n.state = {
                                didLoad: !1
                            },
                            n
                    }
                    return Object(h.a)(t, e),
                        Object(p.a)(t, [{
                            key: "render",
                            value: function () {
                                var e = this.props
                                    , t = e.profile_path
                                    , n = e.name
                                    , a = "".concat(N.e).concat(N.g)
                                    , c = this.state.didLoad ? {} : {
                                        visibility: "hidden"
                                    };
                                return r.a.createElement("div", {
                                    className: "cast"
                                }, r.a.createElement("div", {
                                    className: "cast__img-box"
                                }, r.a.createElement("img", {
                                    src: "".concat(a, "/").concat(t),
                                    style: c,
                                    alt: "profile",
                                    className: "cast__img",
                                    onLoad: this.onLoad
                                })), r.a.createElement("span", {
                                    style: c,
                                    className: "cast__name"
                                }, "".concat(n)))
                            }
                        }]),
                        t
                }(r.a.Component))
            , De = n(32)
            , ke = n(28)
            , Ce = Object(S.b)(function (e) {
                return {
                    movieCast: Object(X.c)(e),
                    movieVideos: Object(X.f)(e),
                    tvCast: Object(ue.c)(e),
                    tvVideos: Object(ue.f)(e),
                    listItems: Object(ke.a)(e)
                }
            }, function (e) {
                return {
                    addItem: function (t) {
                        return e(Object(De.a)(t))
                    },
                    removeItem: function (t) {
                        return e(Object(De.b)(t))
                    }
                }
            })(function (e) {
                var t = e.item
                    , n = e.movieCast
                    , a = e.movieVideos
                    , c = e.addItem
                    , i = e.removeItem
                    , o = e.tvCast
                    , s = e.tvVideos
                    , l = e.movies
                    , u = e.tvshow
                    , m = e.listItems.filter(function (e) {
                        return e.id === t.id
                    });
                return r.a.createElement("div", {
                    className: "item-page-footer"
                }, r.a.createElement("div", {
                    className: "item-page-footer__container"
                }, l && n.length ? n.filter(function (e, t) {
                    return t < 4
                }).map(function (e) {
                    var t = e.id
                        , n = e.profile_path
                        , a = Object(ye.a)(e, ["id", "profile_path"]);
                    return n ? r.a.createElement(Ie, Object.assign({
                        key: t,
                        profile_path: n
                    }, a)) : null
                }) : null, u && o.length ? o.filter(function (e, t) {
                    return t < 4
                }).map(function (e) {
                    var t = e.id
                        , n = e.profile_path
                        , a = Object(ye.a)(e, ["id", "profile_path"]);
                    return n ? r.a.createElement(Ie, Object.assign({
                        key: t,
                        profile_path: n
                    }, a)) : null
                }) : null), r.a.createElement("div", {
                    className: "item-page-footer__btn-container"
                }, m.length ? r.a.createElement("button", {
                    className: "item-page-footer__btn",
                    onClick: function () {
                        return i(t)
                    }
                }, r.a.createElement(z.a, {
                    icon: q.b,
                    className: "item-page-footer__icon"
                }), "Added To List") : r.a.createElement("button", {
                    className: "item-page-footer__btn",
                    onClick: function () {
                        return c(t)
                    }
                }, r.a.createElement(z.a, {
                    icon: q.g,
                    className: "item-page-footer__icon"
                }), "My List"), r.a.createElement("button", {
                    onClick: function () {
                        return l ? window.open("".concat(N.h).concat(a), "_blank") : window.open("".concat(N.h).concat(s), "_blank")
                    },
                    className: "item-page-footer__btn"
                }, r.a.createElement(z.a, {
                    icon: q.f,
                    className: "item-page-footer__icon"
                }), "Watch Trailer")))
            })
            , Pe = n(50)
            , Me = n.n(Pe)
            , Ue = function (e) {
                function t() {
                    return Object(m.a)(this, t),
                        Object(d.a)(this, Object(f.a)(t).apply(this, arguments))
                }
                return Object(h.a)(t, e),
                    Object(p.a)(t, [{
                        key: "componentDidMount",
                        value: function () {
                            return this.props.movies ? this.props.dispatch((e = this.props.item.id,
                                function (t) {
                                    ee(e).then(function (e) {
                                        t({
                                            type: Z.SET_MOVIE_ADDITIONAL_DATA,
                                            payload: e
                                        }),
                                            t(re())
                                    })
                                }
                            )) : this.props.dispatch(function (e) {
                                return function (t) {
                                    de(e).then(function (e) {
                                        t({
                                            type: me.SET_TV_ADDITIONAL_DATA,
                                            payload: e
                                        })
                                    })
                                }
                            }(this.props.item.id));
                            var e
                        }
                    }, {
                        key: "render",
                        value: function () {
                            var e = this.props
                                , t = e.item
                                , n = e.movies
                                , a = e.tvshow
                                , c = t.title
                                , i = t.name
                                , o = t.overview
                                , s = t.backdrop_path
                                , l = t.poster_path
                                , u = t.vote_average
                                , m = "".concat(N.e).concat(N.c).concat(s)
                                , p = "".concat(N.e).concat(N.f).concat(l);
                            return r.a.createElement("div", {
                                className: "item-page"
                            }, r.a.createElement("img", {
                                src: "".concat(m),
                                alt: "background",
                                className: "item-page__bg"
                            }), r.a.createElement("div", {
                                className: "item"
                            }, r.a.createElement(Me.a, null, r.a.createElement("div", {
                                className: "item__outer"
                            }, r.a.createElement("div", {
                                className: "item__inner"
                            }, r.a.createElement("div", {
                                className: "item__img-box"
                            }, r.a.createElement("img", {
                                src: "".concat(p),
                                alt: "poster",
                                className: "item__poster-img"
                            })), r.a.createElement("div", {
                                className: "item__text-box"
                            }, r.a.createElement("h1", {
                                className: "item__title"
                            }, c), r.a.createElement("h1", {
                                className: "item__title"
                            }, i), r.a.createElement("span", {
                                className: "item__overview"
                            }, o), r.a.createElement("div", {
                                className: "item-rating"
                            }, r.a.createElement("img", {
                                src: Se.a,
                                alt: "imdb",
                                className: "item-rating__imdb"
                            }), r.a.createElement("span", {
                                className: "item-rating__rank"
                            }, u, "/"), r.a.createElement("span", {
                                className: "item-rating__ten"
                            }, "10"), r.a.createElement("img", {
                                src: Ae.a,
                                alt: "imdb",
                                className: "item-rating__star"
                            })), r.a.createElement("h1", {
                                className: "item__cast-title"
                            }, "Cast"), r.a.createElement(Ce, {
                                movies: n,
                                tvshow: a,
                                item: t
                            })))))))
                        }
                    }]),
                    t
            }(r.a.Component)
            , Ve = Object(S.b)(function (e) {
                return {
                    movieCast: Object(X.c)(e),
                    movieVideos: Object(X.f)(e)
                }
            })(Ue)
            , xe = Object(S.b)(function (e, t) {
                return {
                    movieItemByTitle: Object(X.b)(t.params.title)(e),
                    tvItemByTitle: Object(ue.b)(t.params.name)(e),
                    searchedMovieItemByTitle: (n = t.state ? t.state.id : null,
                        Object(g.a)([O], function (e) {
                            return e.filter(function (e) {
                                return e.title ? e.id === n : null
                            })
                        }))(e),
                    searchedTvItemByTitle: y(t.state ? t.state.id : null)(e),
                    listMovieItemByTitle: Object(ke.b)(t.state ? t.state.id : null)(e),
                    listTvItemByTitle: Object(ke.c)(t.state ? t.state.id : null)(e)
                };
                var n
            })(function (e) {
                var t = e.movieItemByTitle
                    , n = e.tvItemByTitle
                    , a = e.movies
                    , c = e.tvshow
                    , i = e.searchedMovieItemByTitle
                    , o = e.searchedTvItemByTitle
                    , s = e.listMovieItemByTitle
                    , l = e.listTvItemByTitle;
                return r.a.createElement("div", {
                    className: "item-page-overview"
                }, a ? t.map(function (e) {
                    return r.a.createElement(Ve, {
                        key: e.id,
                        item: e,
                        movies: a
                    })
                }) : null, c ? n.map(function (e) {
                    return r.a.createElement(Ve, {
                        key: e.id,
                        item: e,
                        tvshow: c
                    })
                }) : null, 0 === t.length && i ? i.map(function (e) {
                    return r.a.createElement(Ve, {
                        key: e.id,
                        item: e,
                        movies: a
                    })
                }) : null, 0 === n.length && o ? o.map(function (e) {
                    return r.a.createElement(Ve, {
                        key: e.id,
                        item: e,
                        tvshow: c
                    })
                }) : null, 0 === t.length && 0 === i.length && s ? s.map(function (e) {
                    return r.a.createElement(Ve, {
                        key: e.id,
                        item: e,
                        movies: a
                    })
                }) : null, 0 === n.length && 0 === o.length && l ? l.map(function (e) {
                    return r.a.createElement(Ve, {
                        key: e.id,
                        item: e,
                        tvshow: c
                    })
                }) : null)
            })
            , Re = Object(g.b)({
                isLoading: X.a
            })
            , Le = Object(w.d)(Object(S.b)(Re), Ne)(xe)
            , Ge = function (e) {
                function t() {
                    return Object(m.a)(this, t),
                        Object(d.a)(this, Object(f.a)(t).apply(this, arguments))
                }
                return Object(h.a)(t, e),
                    Object(p.a)(t, [{
                        key: "componentDidMount",
                        value: function () {
                            this.props.dispatch(ae()),
                                i.a.findDOMNode(this).scrollIntoView()
                        }
                    }, {
                        key: "render",
                        value: function () {
                            this.props.isFetching;
                            return console.log(this.props.isFetching),
                                r.a.createElement("div", {
                                    className: "movie-item-page"
                                }, r.a.createElement(Le, {
                                    params: this.props.match.params,
                                    state: this.props.location ? this.props.location.state : "",
                                    movies: !0
                                }))
                        }
                    }]),
                    t
            }(r.a.Component)
            , Be = Object(S.b)(function (e) {
                return {
                    movieData: Object(X.e)(e),
                    isFetching: Object(X.a)(e)
                }
            })(Ge)
            , He = (n(97),
                function (e) {
                    function t() {
                        return Object(m.a)(this, t),
                            Object(d.a)(this, Object(f.a)(t).apply(this, arguments))
                    }
                    return Object(h.a)(t, e),
                        Object(p.a)(t, [{
                            key: "componentDidMount",
                            value: function () {
                                this.props.dispatch(be()),
                                    i.a.findDOMNode(this).scrollIntoView()
                            }
                        }, {
                            key: "render",
                            value: function () {
                                return r.a.createElement("div", {
                                    className: "movie-item-page"
                                }, r.a.createElement(xe, {
                                    params: this.props.match.params,
                                    state: this.props.location ? this.props.location.state : "",
                                    tvshow: !0
                                }))
                            }
                        }]),
                        t
                }(r.a.Component))
            , Fe = Object(S.b)(function (e) {
                return {
                    tvItems: Object(ue.e)(e)
                }
            })(He)
            , qe = (n(98),
                n(40))
            , ze = n.n(qe)
            , We = (n(99),
                function (e) {
                    var t = e.handleChange
                        , n = e.label
                        , a = Object(ye.a)(e, ["handleChange", "label"]);
                    return r.a.createElement("div", {
                        className: "group"
                    }, r.a.createElement("input", Object.assign({
                        className: "form-input",
                        onChange: t
                    }, a)), n ? r.a.createElement("label", {
                        className: "".concat(a.value.length ? "shrink" : "", " form-input-label")
                    }, n) : null)
                }
            )
            , Je = (n(100),
                function (e) {
                    var t = e.children
                        , n = e.signin
                        , a = Object(ye.a)(e, ["children", "signin"]);
                    return r.a.createElement("button", Object.assign({
                        className: "".concat(n ? "signin" : null, " custom-button")
                    }, a), t)
                }
            )
            , Ke = n(59)
            , Qe = function (e) {
                function t() {
                    var e;
                    return Object(m.a)(this, t),
                        (e = Object(d.a)(this, Object(f.a)(t).call(this))).handleSubmit = function () {
                            var t = Object(u.a)(s.a.mark(function t(n) {
                                var a, r, c;
                                return s.a.wrap(function (t) {
                                    for (; ;)
                                        switch (t.prev = t.next) {
                                            case 0:
                                                return n.preventDefault(),
                                                    a = e.state,
                                                    r = a.email,
                                                    c = a.password,
                                                    t.prev = 2,
                                                    t.next = 5,
                                                    U.signInWithEmailAndPassword(r, c);
                                            case 5:
                                                e.setState({
                                                    email: "",
                                                    password: ""
                                                }),
                                                    t.next = 11;
                                                break;
                                            case 8:
                                                t.prev = 8,
                                                    t.t0 = t.catch(2),
                                                    console.error(t.t0);
                                            case 11:
                                            case "end":
                                                return t.stop()
                                        }
                                }, t, null, [[2, 8]])
                            }));
                            return function (e) {
                                return t.apply(this, arguments)
                            }
                        }(),
                        e.handleChange = function (t) {
                            var n = t.target
                                , a = n.value
                                , r = n.name;
                            e.setState(Object(l.a)({}, r, a))
                        }
                        ,
                        e.state = {
                            email: "",
                            password: ""
                        },
                        e
                }
                return Object(h.a)(t, e),
                    Object(p.a)(t, [{
                        key: "render",
                        value: function () {
                            return r.a.createElement("div", {
                                className: "signin"
                            }, r.a.createElement("div", {
                                className: "signin__bg",
                                style: {
                                    backgroundImage: "url(".concat(ze.a, ")")
                                }
                            }), r.a.createElement("div", {
                                className: "signin__container"
                            }, r.a.createElement("div", {
                                className: "signin__shadow"
                            }, r.a.createElement("h1", {
                                className: "signin__title"
                            }, "Sign In"), r.a.createElement("form", {
                                action: "POST",
                                autoComplete: "new-password",
                                onSubmit: this.handleSubmit
                            }, r.a.createElement(We, {
                                name: "email",
                                type: "email",
                                value: this.state.email,
                                handleChange: this.handleChange,
                                label: "Email",
                                required: !0
                            }), r.a.createElement(We, {
                                name: "password",
                                type: "password",
                                value: this.state.password,
                                handleChange: this.handleChange,
                                label: "Password",
                                required: !0
                            }), r.a.createElement("div", {
                                className: "signin__btn-container"
                            }, r.a.createElement("div", {
                                className: "signin__btn"
                            }, r.a.createElement(Je, {
                                type: "submit",
                                signin: !0
                            }, " ", "Sign In", " "), r.a.createElement(Je, {
                                onClick: R
                            }, r.a.createElement(z.a, {
                                icon: Ke.a,
                                className: "signin__google-icon"
                            }), "Sign In With Google")))), r.a.createElement("div", {
                                className: "signin__option"
                            }, r.a.createElement("span", {
                                className: "signin__option--newuser"
                            }, "New to Netflix?"), r.a.createElement(b.b, {
                                to: "/signup",
                                className: "signin__option--link"
                            }, "Sign up now.")))))
                        }
                    }]),
                    t
            }(r.a.Component)
            , Xe = (n(101),
                function (e) {
                    function t() {
                        var e;
                        return Object(m.a)(this, t),
                            (e = Object(d.a)(this, Object(f.a)(t).call(this))).handleSubmit = function () {
                                var t = Object(u.a)(s.a.mark(function t(n) {
                                    var a, r, c, i, o, l, u;
                                    return s.a.wrap(function (t) {
                                        for (; ;)
                                            switch (t.prev = t.next) {
                                                case 0:
                                                    if (n.preventDefault(),
                                                        a = e.state,
                                                        r = a.displayName,
                                                        c = a.email,
                                                        i = a.password,
                                                        o = a.confirmPassword,
                                                        i === o) {
                                                        t.next = 5;
                                                        break
                                                    }
                                                    return alert("Passwords dont match"),
                                                        t.abrupt("return");
                                                case 5:
                                                    return t.prev = 5,
                                                        t.next = 8,
                                                        U.createUserWithEmailAndPassword(c, i);
                                                case 8:
                                                    return l = t.sent,
                                                        u = l.user,
                                                        t.next = 12,
                                                        M(u, {
                                                            displayName: r
                                                        });
                                                case 12:
                                                    e.setState({
                                                        displayName: "",
                                                        email: "",
                                                        password: "",
                                                        confirmPassword: ""
                                                    }),
                                                        t.next = 18;
                                                    break;
                                                case 15:
                                                    t.prev = 15,
                                                        t.t0 = t.catch(5),
                                                        console.error(t.t0);
                                                case 18:
                                                case "end":
                                                    return t.stop()
                                            }
                                    }, t, null, [[5, 15]])
                                }));
                                return function (e) {
                                    return t.apply(this, arguments)
                                }
                            }(),
                            e.handleChange = function (t) {
                                var n = t.target
                                    , a = n.name
                                    , r = n.value;
                                e.setState(Object(l.a)({}, a, r))
                            }
                            ,
                            e.state = {
                                displayName: "",
                                email: "",
                                password: "",
                                confirmPassword: ""
                            },
                            e
                    }
                    return Object(h.a)(t, e),
                        Object(p.a)(t, [{
                            key: "render",
                            value: function () {
                                var e = this.state
                                    , t = e.displayName
                                    , n = e.email
                                    , a = e.password
                                    , c = e.confirmPassword;
                                return r.a.createElement("div", {
                                    className: "signup"
                                }, r.a.createElement("div", {
                                    className: "signup__bg",
                                    style: {
                                        backgroundImage: "url(".concat(ze.a, ")")
                                    }
                                }), r.a.createElement("div", {
                                    className: "signup__container"
                                }, r.a.createElement("div", {
                                    className: "signup__shadow"
                                }, r.a.createElement("h1", {
                                    className: "signup__title"
                                }, "Sign Up"), r.a.createElement("form", {
                                    action: "POST",
                                    onSubmit: this.handleSubmit
                                }, r.a.createElement(We, {
                                    name: "displayName",
                                    type: "name",
                                    value: t,
                                    handleChange: this.handleChange,
                                    label: "Name",
                                    required: !0
                                }), r.a.createElement(We, {
                                    name: "email",
                                    type: "email",
                                    value: n,
                                    handleChange: this.handleChange,
                                    label: "Email",
                                    required: !0
                                }), r.a.createElement(We, {
                                    name: "password",
                                    type: "password",
                                    value: a,
                                    handleChange: this.handleChange,
                                    label: "Password",
                                    required: !0
                                }), r.a.createElement(We, {
                                    name: "confirmPassword",
                                    type: "password",
                                    value: c,
                                    handleChange: this.handleChange,
                                    label: "Confirm Password",
                                    required: !0
                                }), r.a.createElement("div", {
                                    className: "signup__btn-container"
                                }, r.a.createElement("div", {
                                    className: "signup__btn"
                                }, r.a.createElement(Je, {
                                    type: "submit"
                                }, " Sign Up ")))), r.a.createElement("div", {
                                    className: "signup__option"
                                }, r.a.createElement("span", {
                                    className: "signup__option--newuser"
                                }, "Already signed up?"), r.a.createElement(b.b, {
                                    to: "/signin",
                                    className: "signup__option--link"
                                }, "Log in now.")))))
                            }
                        }]),
                        t
                }(r.a.Component))
            , Ze = (n(102),
                n(103),
                n(25))
            , Ye = n(49)
            , $e = Object(E.g)(function (e) {
                var t = e.item
                    , n = e.history
                    , a = (e.ListItems,
                        t.id)
                    , c = t.title
                    , i = t.poster_path
                    , o = t.vote_average
                    , s = t.name
                    , l = c ? Object(Ze.a)(c) : null
                    , u = s ? Object(Ze.a)(s) : null;
                return r.a.createElement("div", {
                    className: "search-item"
                }, r.a.createElement("div", {
                    className: "search-item__rating-container"
                }, r.a.createElement("span", {
                    className: "search-item__rating"
                }, r.a.createElement("img", {
                    src: Se.a,
                    alt: "imdb",
                    className: "search-item__imdb"
                }), r.a.createElement("span", {
                    className: "search-item__rank"
                }, o, "/"), r.a.createElement("span", {
                    className: "search-item__ten"
                }, "10"), r.a.createElement("img", {
                    src: Ae.a,
                    alt: "imdb",
                    className: "search-item__star"
                }))), r.a.createElement("div", {
                    className: "search-item__addtolist"
                }, r.a.createElement(Ye.a, {
                    item: t
                })), r.a.createElement("div", {
                    className: "search-item__img-box",
                    onClick: function () {
                        return c ? n.push({
                            pathname: "/movies/".concat(l),
                            state: {
                                id: a
                            }
                        }) : n.push({
                            pathname: "/tvshows/".concat(u),
                            state: {
                                id: a
                            }
                        })
                    }
                }, r.a.createElement("img", {
                    src: "".concat(N.e).concat(N.f).concat(i),
                    alt: "movie",
                    className: "search-item__img"
                })), r.a.createElement("div", {
                    className: "search-item__text"
                }, r.a.createElement("h1", {
                    className: "search-item__title"
                }, c), r.a.createElement("h1", {
                    className: "search-item__title"
                }, s)))
            })
            , et = Object(w.d)(E.g, Object(S.b)(function (e) {
                return {
                    searchItems: O(e)
                }
            }))(function (e) {
                var t = e.searchItems;
                return r.a.createElement("div", {
                    className: "search-page"
                }, r.a.createElement("h1", {
                    className: "search-page__title"
                }, "Search Results"), r.a.createElement("div", {
                    className: "search-page__outer"
                }, r.a.createElement("div", {
                    className: "search-page__inner"
                }, t.map(function (e) {
                    return e.poster_path ? r.a.createElement($e, {
                        key: e.id,
                        item: e
                    }) : null
                }))))
            })
            , tt = (n(105),
                n(106),
                Object(w.d)(E.g, Object(S.b)(null, function (e) {
                    return {
                        removeItem: function (t) {
                            return e(Object(De.b)(t))
                        }
                    }
                }))(function (e) {
                    var t = e.item
                        , n = e.history
                        , a = e.removeItem
                        , c = t.id
                        , i = t.title
                        , o = t.poster_path
                        , s = t.vote_average
                        , l = t.name
                        , u = i ? Object(Ze.a)(i) : null
                        , m = l ? Object(Ze.a)(l) : null;
                    return r.a.createElement("div", {
                        className: "list-item"
                    }, r.a.createElement("div", {
                        className: "list-item__rating-container"
                    }, r.a.createElement("span", {
                        className: "list-item__rating"
                    }, r.a.createElement("img", {
                        src: Se.a,
                        alt: "imdb",
                        className: "list-item__imdb"
                    }), r.a.createElement("span", {
                        className: "list-item__rank"
                    }, s, "/"), r.a.createElement("span", {
                        className: "list-item__ten"
                    }, "10"), r.a.createElement("img", {
                        src: Ae.a,
                        alt: "imdb",
                        className: "list-item__star"
                    }))), r.a.createElement("div", {
                        className: "list-item__addtolist",
                        onClick: function () {
                            return a(t)
                        }
                    }, r.a.createElement(z.a, {
                        icon: q.h,
                        className: "list-item__remove-icon"
                    })), r.a.createElement("div", {
                        className: "list-item__img-box",
                        onClick: function () {
                            return i ? n.push({
                                pathname: "/movies/".concat(u),
                                state: {
                                    id: c
                                }
                            }) : n.push({
                                pathname: "/tvshows/".concat(m),
                                state: {
                                    id: c
                                }
                            })
                        }
                    }, r.a.createElement("img", {
                        src: "".concat(N.e).concat(N.f).concat(o),
                        alt: "movie",
                        className: "list-item__img"
                    })), r.a.createElement("div", {
                        className: "list-item__text"
                    }, r.a.createElement("h1", {
                        className: "list-item__title"
                    }, i), r.a.createElement("h1", {
                        className: "list-item__title"
                    }, l)))
                }))
            , nt = Object(S.b)(function (e, t) {
                return {
                    listItems: Object(ke.a)(e),
                    currentUser: G(e)
                }
            })(function (e) {
                var t = e.listItems
                    , n = e.currentUser;
                return r.a.createElement("div", {
                    className: "list-overview"
                }, r.a.createElement("h1", {
                    className: "list-overview__title"
                }, n ? "".concat(n.displayName, "'s List (").concat(t.length, ")") : "Sign in to view your list"), r.a.createElement("div", {
                    className: "list-overview__outer"
                }, n ? r.a.createElement("div", {
                    className: "list-overview__inner"
                }, t.map(function (e) {
                    return r.a.createElement(tt, {
                        key: e.id,
                        item: e
                    })
                })) : null))
            });
        function at(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var a = Object.getOwnPropertySymbols(e);
                t && (a = a.filter(function (t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                })),
                    n.push.apply(n, a)
            }
            return n
        }
        function rt(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {};
                t % 2 ? at(n, !0).forEach(function (t) {
                    Object(l.a)(e, t, n[t])
                }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : at(n).forEach(function (t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                })
            }
            return e
        }
        var ct = function (e) {
            function t() {
                var e, n;
                Object(m.a)(this, t);
                for (var a = arguments.length, r = new Array(a), c = 0; c < a; c++)
                    r[c] = arguments[c];
                return (n = Object(d.a)(this, (e = Object(f.a)(t)).call.apply(e, [this].concat(r)))).unsubscribeFromAuth = null,
                    n
            }
            return Object(h.a)(t, e),
                Object(p.a)(t, [{
                    key: "componentDidMount",
                    value: function () {
                        var e = this;
                        this.unsubscribeFromAuth = U.onAuthStateChanged(function () {
                            var t = Object(u.a)(s.a.mark(function t(n) {
                                return s.a.wrap(function (t) {
                                    for (; ;)
                                        switch (t.prev = t.next) {
                                            case 0:
                                                if (!n) {
                                                    t.next = 7;
                                                    break
                                                }
                                                return t.next = 3,
                                                    M(n);
                                            case 3:
                                                t.sent.onSnapshot(function (t) {
                                                    e.props.setCurrentUser(rt({
                                                        id: t.id
                                                    }, t.data()))
                                                }),
                                                    t.next = 8;
                                                break;
                                            case 7:
                                                e.props.setCurrentUser(n);
                                            case 8:
                                            case "end":
                                                return t.stop()
                                        }
                                }, t)
                            }));
                            return function (e) {
                                return t.apply(this, arguments)
                            }
                        }())
                    }
                }, {
                    key: "componentWillUnmount",
                    value: function () {
                        this.unsubscribeFromAuth()
                    }
                }, {
                    key: "render",
                    value: function () {
                        var e = this;
                        return r.a.createElement("div", null, r.a.createElement(Q, {
                            currentRoute: this.props.location.pathname
                        }), r.a.createElement(E.d, null, r.a.createElement(E.b, {
                            exact: !0,
                            path: "/",
                            component: le
                        }), r.a.createElement(E.b, {
                            path: "/movies/:title",
                            component: Be
                        }), r.a.createElement(E.b, {
                            path: "/movies",
                            component: le
                        }), r.a.createElement(E.b, {
                            path: "/tvshows/:name",
                            component: Fe
                        }), r.a.createElement(E.b, {
                            path: "/tvshows",
                            component: Oe
                        }), r.a.createElement(E.b, {
                            exact: !0,
                            path: "/signin",
                            render: function () {
                                return e.props.currentUser ? r.a.createElement(E.a, {
                                    to: "/"
                                }) : r.a.createElement(Qe, null)
                            }
                        }), r.a.createElement(E.b, {
                            exact: !0,
                            path: "/signup",
                            render: function () {
                                return e.props.currentUser ? r.a.createElement(E.a, {
                                    to: "/"
                                }) : r.a.createElement(Xe, null)
                            }
                        }), r.a.createElement(E.b, {
                            exact: !0,
                            path: "/searchresults",
                            component: et
                        }), r.a.createElement(E.b, {
                            exact: !0,
                            path: "/mylist",
                            component: nt
                        })))
                    }
                }]),
                t
        }(r.a.Component)
            , it = Object(w.d)(E.g, Object(S.b)(function (e) {
                return {
                    currentUser: G(e)
                }
            }, function (e) {
                return {
                    setCurrentUser: function (t) {
                        return e(function (e) {
                            return {
                                type: H.SET_CURRENT_USER,
                                payload: e
                            }
                        }(t))
                    }
                }
            }))(ct);
        function ot(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var a = Object.getOwnPropertySymbols(e);
                t && (a = a.filter(function (t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                })),
                    n.push.apply(n, a)
            }
            return n
        }
        function st(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {};
                t % 2 ? ot(n, !0).forEach(function (t) {
                    Object(l.a)(e, t, n[t])
                }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : ot(n).forEach(function (t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                })
            }
            return e
        }
        var lt = {
            isFetching: !0,
            isAdditionalFetching: !0,
            movieItems: [],
            movieGridItems: [],
            movieCast: [],
            movieVideos: ""
        }
            , ut = function () {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : lt
                    , t = arguments.length > 1 ? arguments[1] : void 0
                    , n = t.type
                    , a = t.payload;
                switch (n) {
                    case Z.SET_MOVIE_DATA:
                        return st({}, e, {
                            movieItems: a
                        });
                    case Z.SET_MOVIE_GRID_DATA:
                        return st({}, e, {
                            movieGridItems: a
                        });
                    case Z.SET_MOVIE_DATA_SUCCESS:
                        return st({}, e, {
                            isFetching: !1
                        });
                    case Z.SET_MOVIE_ADDITIONAL_DATA_SUCCESS:
                        return st({}, e, {
                            isAdditionalFetching: !1
                        });
                    case Z.SET_MOVIE_ADDITIONAL_DATA:
                        return st({}, e, {
                            movieCast: a.credits.cast,
                            movieVideos: a.videos.results.length ? a.videos.results[0].key : "no_trailer_found"
                        });
                    default:
                        return e
                }
            };
        function mt(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var a = Object.getOwnPropertySymbols(e);
                t && (a = a.filter(function (t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                })),
                    n.push.apply(n, a)
            }
            return n
        }
        function pt(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {};
                t % 2 ? mt(n, !0).forEach(function (t) {
                    Object(l.a)(e, t, n[t])
                }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : mt(n).forEach(function (t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                })
            }
            return e
        }
        var dt = {
            isFetching: !0,
            tvItems: [],
            tvGridItems: [],
            tvCast: [],
            tvVideos: ""
        }
            , ft = function () {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : dt
                    , t = arguments.length > 1 ? arguments[1] : void 0
                    , n = t.type
                    , a = t.payload;
                switch (n) {
                    case me.SET_TV_DATA:
                        return pt({}, e, {
                            tvItems: a
                        });
                    case me.SET_TV_GRID_DATA:
                        return pt({}, e, {
                            tvGridItems: a
                        });
                    case me.SET_TV_DATA_SUCCESS:
                        return pt({}, e, {
                            isFetching: !1
                        });
                    case me.SET_TV_ADDITIONAL_DATA:
                        return pt({}, e, {
                            tvCast: a.credits.cast,
                            tvVideos: a.videos.results.length ? a.videos.results[0].key : "no_trailer_found"
                        });
                    default:
                        return e
                }
            };
        function ht(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var a = Object.getOwnPropertySymbols(e);
                t && (a = a.filter(function (t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                })),
                    n.push.apply(n, a)
            }
            return n
        }
        function bt(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {};
                t % 2 ? ht(n, !0).forEach(function (t) {
                    Object(l.a)(e, t, n[t])
                }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : ht(n).forEach(function (t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                })
            }
            return e
        }
        var _t = {
            currentUser: null,
            hidden: !0
        }
            , vt = function () {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : _t
                    , t = arguments.length > 1 ? arguments[1] : void 0;
                switch (t.type) {
                    case H.SET_CURRENT_USER:
                        return bt({}, e, {
                            currentUser: t.payload
                        });
                    case H.TOGGLE_HIDDEN_MENU:
                        return bt({}, e, {
                            hidden: !e.hidden
                        });
                    default:
                        return e
                }
            };
        function Et(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var a = Object.getOwnPropertySymbols(e);
                t && (a = a.filter(function (t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                })),
                    n.push.apply(n, a)
            }
            return n
        }
        function gt(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {};
                t % 2 ? Et(n, !0).forEach(function (t) {
                    Object(l.a)(e, t, n[t])
                }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Et(n).forEach(function (t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                })
            }
            return e
        }
        var Ot = {
            searchItems: []
        }
            , yt = function () {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Ot
                    , t = arguments.length > 1 ? arguments[1] : void 0
                    , n = t.type
                    , a = t.payload;
                switch (n) {
                    case j.SET_SEARCH_DATA:
                        return gt({}, e, {
                            searchItems: a
                        });
                    default:
                        return e
                }
            }
            , jt = {
                collection: [{
                    id: 1,
                    title: "Popular",
                    start: 0,
                    end: 10
                }, {
                    id: 2,
                    title: "Top Rated",
                    start: 10,
                    end: 20
                }, {
                    id: 3,
                    title: "Highest Grossing",
                    start: 20,
                    end: 30
                }, {
                    id: 4,
                    title: "New Releases",
                    start: 30,
                    end: 40
                }, {
                    id: 5,
                    title: "Most Liked",
                    start: 40,
                    end: 50
                }, {
                    id: 6,
                    title: "Trending Now",
                    start: 50,
                    end: 60
                }]
            }
            , Nt = function () {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : jt
                    , t = arguments.length > 1 ? arguments[1] : void 0;
                return t.type,
                    e
            }
            , Tt = n(35)
            , St = n(63);
        function wt(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var a = Object.getOwnPropertySymbols(e);
                t && (a = a.filter(function (t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                })),
                    n.push.apply(n, a)
            }
            return n
        }
        function At(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {};
                t % 2 ? wt(n, !0).forEach(function (t) {
                    Object(l.a)(e, t, n[t])
                }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : wt(n).forEach(function (t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                })
            }
            return e
        }
        var It = function (e, t) {
            return e.find(function (e) {
                return e.id === t.id
            }) ? e : [].concat(Object(St.a)(e), [At({}, t)])
        }
            , Dt = function (e, t) {
                return e.filter(function (e) {
                    return e.id !== t.id
                })
            };
        function kt(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var a = Object.getOwnPropertySymbols(e);
                t && (a = a.filter(function (t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                })),
                    n.push.apply(n, a)
            }
            return n
        }
        function Ct(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {};
                t % 2 ? kt(n, !0).forEach(function (t) {
                    Object(l.a)(e, t, n[t])
                }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : kt(n).forEach(function (t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                })
            }
            return e
        }
        var Pt = {
            listItems: []
        }
            , Mt = function () {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Pt
                    , t = arguments.length > 1 ? arguments[1] : void 0;
                switch (t.type) {
                    case Tt.a.ADD_ITEM:
                        return Ct({}, e, {
                            listItems: It(e.listItems, t.payload)
                        });
                    case Tt.a.REMOVE_ITEM:
                        return Ct({}, e, {
                            listItems: Dt(e.listItems, t.payload)
                        });
                    default:
                        return e
                }
            }
            , Ut = n(41)
            , Vt = n(60)
            , xt = {
                key: "root",
                storage: n.n(Vt).a,
                whitelist: ["list", "search"]
            }
            , Rt = Object(w.c)({
                movie: ut,
                tv: ft,
                user: vt,
                search: yt,
                list: Mt,
                collection: Nt
            })
            , Lt = Object(Ut.a)(xt, Rt)
            , Gt = [n(61).a]
            , Bt = Object(w.e)(Lt, w.a.apply(void 0, Gt))
            , Ht = Object(Ut.b)(Bt)
            , Ft = n(62);
        i.a.render(r.a.createElement(S.a, {
            store: Bt
        }, r.a.createElement(b.a, null, r.a.createElement(Ft.a, {
            persistor: Ht
        }, r.a.createElement(it, null)))), document.getElementById("root"))
    }
], [[64, 3, 4]]]);
//# sourceMappingURL=main.afcbdd28.chunk.js.map