webpackJsonp([1], {
    0: function (t, e) {},
    1: function (t, e) {},
    "1uuo": function (t, e) {},
    DHTK: function (t, e) {},
    FDkO: function (t, e) {},
    G1q7: function (t, e) {},
    NHnr: function (t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var s = n("7+uW");
        document.addEventListener("DOMContentLoaded", function () {
            var t = document.querySelector("html"),
                e = window.innerWidth / 10;
            e > 50 && (e = 50), t.style.fontSize = e + "px"
        });
        var i = {
            render: function () {
                var t = this.$createElement,
                    e = this._self._c || t;
                return e("div", {
                    attrs: {
                        id: "app"
                    }
                }, [e("router-view")], 1)
            },
            staticRenderFns: []
        };
        var o = n("VU/8")({
                name: "App"
            }, i, !1, function (t) {
                n("Zesp")
            }, null, null).exports,
            a = n("/ocq"),
            r = {
                render: function () {
                    var t = this,
                        e = t.$createElement,
                        n = t._self._c || e;
                    return n("div", {
                        staticClass: "hello"
                    }, [n("h1", [t._v(t._s(t.msg))]), t._v(" "), n("h2", [t._v("Essential Links")]), t._v(" "), t._m(0), t._v(" "), n("h2", [t._v("Ecosystem")]), t._v(" "), t._m(1)])
                },
                staticRenderFns: [function () {
                    var t = this,
                        e = t.$createElement,
                        n = t._self._c || e;
                    return n("ul", [n("li", [n("a", {
                        attrs: {
                            href: "https://vuejs.org",
                            target: "_blank"
                        }
                    }, [t._v("\n        Core Docs\n      ")])]), t._v(" "), n("li", [n("a", {
                        attrs: {
                            href: "https://forum.vuejs.org",
                            target: "_blank"
                        }
                    }, [t._v("\n        Forum\n      ")])]), t._v(" "), n("li", [n("a", {
                        attrs: {
                            href: "https://chat.vuejs.org",
                            target: "_blank"
                        }
                    }, [t._v("\n        Community Chat\n      ")])]), t._v(" "), n("li", [n("a", {
                        attrs: {
                            href: "https://twitter.com/vuejs",
                            target: "_blank"
                        }
                    }, [t._v("\n        Twitter\n      ")])]), t._v(" "), n("br"), t._v(" "), n("li", [n("a", {
                        attrs: {
                            href: "http://vuejs-templates.github.io/webpack/",
                            target: "_blank"
                        }
                    }, [t._v("\n        Docs for This Template\n      ")])])])
                }, function () {
                    var t = this.$createElement,
                        e = this._self._c || t;
                    return e("ul", [e("li", [e("a", {
                        attrs: {
                            href: "http://router.vuejs.org/",
                            target: "_blank"
                        }
                    }, [this._v("\n        vue-router\n      ")])]), this._v(" "), e("li", [e("a", {
                        attrs: {
                            href: "http://vuex.vuejs.org/",
                            target: "_blank"
                        }
                    }, [this._v("\n        vuex\n      ")])]), this._v(" "), e("li", [e("a", {
                        attrs: {
                            href: "http://vue-loader.vuejs.org/",
                            target: "_blank"
                        }
                    }, [this._v("\n        vue-loader\n      ")])]), this._v(" "), e("li", [e("a", {
                        attrs: {
                            href: "https://github.com/vuejs/awesome-vue",
                            target: "_blank"
                        }
                    }, [this._v("\n        awesome-vue\n      ")])])])
                }]
            };
        n("VU/8")({
            name: "HelloWorld",
            data: function () {
                return {
                    msg: "Welcome to Your Vue.js App"
                }
            }
        }, r, !1, function (t) {
            n("1uuo")
        }, "data-v-d8ec41bc", null).exports;
        var c = {
                props: {
                    navigation: Object,
                    bookAvailable: Boolean
                },
                methods: {
                    jumpTo: function (t) {
                        console.log(this.navigation), this.$emit("jumpTo", t)
                    }
                }
            },
            l = {
                render: function () {
                    var t = this,
                        e = t.$createElement,
                        n = t._self._c || e;
                    return n("transition", {
                        attrs: {
                            name: "slide-right"
                        }
                    }, [n("div", {
                        staticClass: "content"
                    }, [t.bookAvailable ? n("div", {
                        staticClass: "content-wrapper"
                    }, t._l(t.navigation.toc, function (e, s) {
                        return n("div", {
                            key: s,
                            staticClass: "content-item",
                            on: {
                                click: function (n) {
                                    return t.jumpTo(e.href)
                                }
                            }
                        }, [n("span", {
                            staticClass: "text"
                        }, [t._v(t._s(e.label))])])
                    }), 0) : n("div", {
                        staticClass: "empty"
                    }, [t._v("加载中...")])])])
                },
                staticRenderFns: []
            };
        var h = {
                components: {
                    ContentView: n("VU/8")(c, l, !1, function (t) {
                        n("wBBV")
                    }, "data-v-00acacd2", null).exports
                },
                props: {
                    menuShow: {
                        type: Boolean,
                        default: !1
                    },
                    fontSizeList: Array,
                    defaultFontSize: Number,
                    themesList: Array,
                    defaultTheme: Number,
                    bookAvailable: Boolean,
                    navigation: Object
                },
                data: function () {
                    return {
                        settingShow: !1,
                        contentShow: !1,
                        showTag: "",
                        progress: 0
                    }
                },
                methods: {
                    jumpTo: function (t) {
                        this.$emit("jumpTo", t)
                    },
                    onProgressChange: function (t) {
                        this.$emit("onProgressChange", t)
                    },
                    onProgressInput: function (t) {
                        this.progress = t, this.$refs.progress.style.backgroundSize = t + "% 100% "
                    },
                    setTheme: function (t) {
                        this.$emit("setTheme", t)
                    },
                    setFontSize: function (t) {
                        this.$emit("setFontSize", t)
                    },
                    showSetting: function (t) {
                        "menu" !== t ? (this.settingShow = !0, this.showTag = t) : (this.settingShow = !1, this.contentShow = !0)
                    },
                    hideSetting: function () {
                        this.settingShow = !1
                    },
                    hideContent: function () {
                        this.contentShow = !1
                    }
                }
            },
            u = {
                render: function () {
                    var t = this,
                        e = t.$createElement,
                        n = t._self._c || e;
                    return n("div", {
                        staticClass: "menu-bar"
                    }, [n("transition", {
                        attrs: {
                            name: "slide-up"
                        }
                    }, [n("div", {
                        directives: [{
                            name: "show",
                            rawName: "v-show",
                            value: t.menuShow,
                            expression: "menuShow"
                        }],
                        staticClass: "menu-wrapper",
                        class: {
                            "hide-box-shadow": t.settingShow || !t.menuShow
                        }
                    }, [n("div", {
                        staticClass: "icon-wrapper"
                    }, [n("span", {
                        staticClass: "icon-menu icon",
                        on: {
                            click: function (e) {
                                return t.showSetting("menu")
                            }
                        }
                    })]), t._v(" "), n("div", {
                        staticClass: "icon-wrapper"
                    }, [n("span", {
                        staticClass: "icon-progress icon",
                        on: {
                            click: function (e) {
                                return t.showSetting("progress")
                            }
                        }
                    })]), t._v(" "), n("div", {
                        staticClass: "icon-wrapper"
                    }, [n("span", {
                        staticClass: "icon-bright icon",
                        on: {
                            click: function (e) {
                                return t.showSetting("theme")
                            }
                        }
                    })]), t._v(" "), n("div", {
                        staticClass: "icon-wrapper"
                    }, [n("span", {
                        staticClass: "icon-a icon",
                        on: {
                            click: function (e) {
                                return t.showSetting("fontsize")
                            }
                        }
                    }, [t._v("A")])])])]), t._v(" "), n("transition", {
                        attrs: {
                            name: "slide-up"
                        }
                    }, [n("div", {
                        directives: [{
                            name: "show",
                            rawName: "v-show",
                            value: t.settingShow,
                            expression: "settingShow"
                        }],
                        staticClass: "setting-bar"
                    }, ["fontsize" === t.showTag ? n("div", {
                        staticClass: "setting-font-size"
                    }, [n("div", {
                        staticClass: "preview",
                        style: {
                            fontSize: t.fontSizeList[0].fontSize + "px"
                        }
                    }, [t._v("A")]), t._v(" "), n("div", {
                        staticClass: "select"
                    }, t._l(t.fontSizeList, function (e, s) {
                        return n("div", {
                            key: s,
                            staticClass: "select-wrapper",
                            on: {
                                click: function (n) {
                                    return t.setFontSize(e.fontSize)
                                }
                            }
                        }, [n("div", {
                            staticClass: "line"
                        }), t._v(" "), n("div", {
                            staticClass: "point-wrapper"
                        }, [n("div", {
                            directives: [{
                                name: "show",
                                rawName: "v-show",
                                value: t.defaultFontSize === e.fontSize,
                                expression: "defaultFontSize === item.fontSize"
                            }],
                            staticClass: "point"
                        }, [n("div", {
                            staticClass: "small-point"
                        })])]), t._v(" "), n("div", {
                            staticClass: "line"
                        })])
                    }), 0), t._v(" "), n("div", {
                        staticClass: "preview",
                        style: {
                            fontSize: t.fontSizeList[t.fontSizeList.length - 1].fontSize + "px"
                        }
                    }, [t._v("A")])]) : "theme" === t.showTag ? n("div", {
                        staticClass: "setting-theme"
                    }, t._l(t.themesList, function (e, s) {
                        return n("div", {
                            key: s,
                            staticClass: "setting-theme-item",
                            on: {
                                click: function (e) {
                                    return t.setTheme(s)
                                }
                            }
                        }, [n("div", {
                            staticClass: "preview",
                            style: {
                                background: e.style.body.background
                            }
                        }), t._v(" "), n("div", {
                            staticClass: "text",
                            class: {
                                selected: s === t.defaultTheme
                            }
                        }, [t._v(t._s(e.name))])])
                    }), 0) : "progress" === t.showTag ? n("div", {
                        staticClass: "setting-progress"
                    }, [n("div", {
                        staticClass: "progress-wrapper"
                    }, [n("input", {
                        ref: "progress",
                        staticClass: "progress",
                        attrs: {
                            type: "range",
                            max: "100",
                            min: "0",
                            step: "1",
                            disabled: !t.bookAvailable
                        },
                        domProps: {
                            value: t.progress
                        },
                        on: {
                            change: function (e) {
                                return t.onProgressChange(e.target.value)
                            },
                            input: function (e) {
                                return t.onProgressInput(e.target.value)
                            }
                        }
                    })]), t._v(" "), n("div", {
                        staticClass: "text-wrapper"
                    }, [n("span", [t._v(t._s(t.bookAvailable ? t.progress + "%" : "加载中..."))])])]) : t._e()])]), t._v(" "), n("content-view", {
                        directives: [{
                            name: "show",
                            rawName: "v-show",
                            value: t.contentShow,
                            expression: "contentShow"
                        }],
                        attrs: {
                            bookAvailable: t.bookAvailable,
                            navigation: t.navigation
                        },
                        on: {
                            jumpTo: t.jumpTo
                        }
                    }), t._v(" "), n("transition", {
                        attrs: {
                            name: "fade"
                        }
                    }, [n("div", {
                        directives: [{
                            name: "show",
                            rawName: "v-show",
                            value: t.contentShow,
                            expression: "contentShow"
                        }],
                        staticClass: "mask",
                        on: {
                            click: t.hideContent
                        }
                    })])], 1)
                },
                staticRenderFns: []
            };
        var v = n("VU/8")(h, u, !1, function (t) {
                n("sUuB")
            }, "data-v-0a7c29d0", null).exports,
            d = {
                props: {
                    menuShow: {
                        type: Boolean,
                        default: !1
                    }
                }
            },
            p = {
                render: function () {
                    var t = this.$createElement,
                        e = this._self._c || t;
                    return e("div", [e("transition", {
                        attrs: {
                            name: "slide-down"
                        }
                    }, [e("div", {
                        directives: [{
                            name: "show",
                            rawName: "v-show",
                            value: this.menuShow,
                            expression: "menuShow"
                        }],
                        staticClass: "title-wrapper"
                    }, [e("div", {
                        staticClass: "left"
                    }, [e("span", {
                        staticClass: "icon-back icon"
                    })]), this._v(" "), e("div", {
                        staticClass: "right"
                    }, [e("div", {
                        staticClass: "icon-wrapper"
                    }, [e("span", {
                        staticClass: "icon-cart icon"
                    })]), this._v(" "), e("div", {
                        staticClass: "icon-wrapper"
                    }, [e("span", {
                        staticClass: "icon-person icon"
                    })]), this._v(" "), e("div", {
                        staticClass: "icon-wrapper"
                    }, [e("span", {
                        staticClass: "icon-more icon"
                    })])])])])], 1)
                },
                staticRenderFns: []
            };
        var f = n("VU/8")(d, p, !1, function (t) {
                n("DHTK")
            }, "data-v-1bf636de", null).exports,
            m = n("VXRH"),
            g = {
                components: {
                    MenuBar: v,
                    TitleBar: f
                },
                data: function () {
                    return {
                        menuShow: !1,
                        fontSizeList: [{
                            fontSize: 12
                        }, {
                            fontSize: 14
                        }, {
                            fontSize: 16
                        }, {
                            fontSize: 18
                        }, {
                            fontSize: 20
                        }, {
                            fontSize: 22
                        }, {
                            fontSize: 24
                        }],
                        defaultFontSize: 14,
                        themesList: [{
                            name: "default",
                            style: {
                                body: {
                                    color: "#000",
                                    background: "#fff"
                                }
                            }
                        }, {
                            name: "eye",
                            style: {
                                body: {
                                    color: "#000",
                                    background: "#ceeaba"
                                }
                            }
                        }, {
                            name: "night",
                            style: {
                                body: {
                                    color: "#fff",
                                    background: "#000"
                                }
                            }
                        }],
                        defaultTheme: 0,
                        bookAvailable: !1,
                        navigation: []
                    }
                },
                methods: {
                    jumpTo: function (t) {
                        this.rendition.display(t), this.hideBar()
                    },
                    hideBar: function () {
                        this.menuShow = !1, this.$refs.menuBar.hideSetting(), this.$refs.menuBar.hideContent()
                    },
                    onProgressChange: function (t) {
                        var e = t / 100,
                            n = 0;
                        e > 0 && (n = this.locations.cfiFromPercentage(e)), this.rendition.display(n)
                    },
                    setTheme: function (t) {
                        this.themes.select(this.themesList[t].name), this.defaultTheme = t
                    },
                    registerThemes: function () {
                        var t = this;
                        this.themesList.forEach(function (e) {
                            t.themes.register(e.name, e.style)
                        })
                    },
                    setFontSize: function (t) {
                        this.defaultFontSize = t, this.themes && this.themes.fontSize(t + "px")
                    },
                    toggleMenu: function () {
                        this.menuShow = !this.menuShow, this.menuShow || this.$refs.menuBar.hideSetting()
                    },
                    showEpub: function () {
                        var t = this;
                        this.book = new m.a("./static/SASS用法指南.epub"), this.rendition = this.book.renderTo("read", {
                            width: window.innerWidth,
                            height: window.innerHeight
                        }), this.rendition.display(), this.themes = this.rendition.themes, this.setFontSize(this.defaultFontSize), this.registerThemes(), this.setTheme(this.defaultTheme), this.book.ready.then(function () {
                            return t.navigation = t.book.navigation, t.book.locations.generate()
                        }).then(function (e) {
                            t.locations = t.book.locations, t.bookAvailable = !0
                        })
                    },
                    prevPage: function () {
                        this.rendition && this.rendition.prev()
                    },
                    nextPage: function () {
                        this.rendition && this.rendition.next()
                    }
                },
                mounted: function () {
                    this.showEpub()
                }
            },
            w = {
                render: function () {
                    var t = this,
                        e = t.$createElement,
                        n = t._self._c || e;
                    return n("div", {
                        staticClass: "ebook"
                    }, [n("TitleBar", {
                        attrs: {
                            menuShow: t.menuShow
                        }
                    }), t._v(" "), n("div", {
                        staticClass: "read-wrapper"
                    }, [n("div", {
                        attrs: {
                            id: "read"
                        }
                    }), t._v(" "), n("div", {
                        staticClass: "mask"
                    }, [n("div", {
                        staticClass: "left",
                        on: {
                            click: t.prevPage
                        }
                    }), t._v(" "), n("div", {
                        staticClass: "center",
                        on: {
                            click: t.toggleMenu
                        }
                    }), t._v(" "), n("div", {
                        staticClass: "right",
                        on: {
                            click: t.nextPage
                        }
                    })])]), t._v(" "), n("MenuBar", {
                        ref: "menuBar",
                        attrs: {
                            menuShow: t.menuShow,
                            fontSizeList: t.fontSizeList,
                            defaultFontSize: t.defaultFontSize,
                            themesList: t.themesList,
                            defaultTheme: t.defaultTheme,
                            bookAvailable: t.bookAvailable,
                            navigation: t.navigation
                        },
                        on: {
                            setFontSize: t.setFontSize,
                            setTheme: t.setTheme,
                            onProgressChange: t.onProgressChange,
                            jumpTo: t.jumpTo
                        }
                    })], 1)
                },
                staticRenderFns: []
            };
        var _ = n("VU/8")(g, w, !1, function (t) {
            n("FDkO")
        }, "data-v-0c95633e", null).exports;
        s.a.use(a.a);
        var S = new a.a({
            routes: [{
                path: "/",
                redirect: "/ebook"
            }, {
                path: "/ebook",
                component: _
            }]
        });
        n("jYjM"), n("G1q7");
        s.a.config.productionTip = !1, new s.a({
            el: "#app",
            router: S,
            components: {
                App: o
            },
            template: "<App/>"
        })
    },
    Zesp: function (t, e) {},
    jYjM: function (t, e) {},
    sUuB: function (t, e) {},
    wBBV: function (t, e) {}
}, ["NHnr"]);
//# sourceMappingURL=app.40a749c19030fed6307e.js.map