(function (t) {
    function e(e) {
        for (var a, i, o = e[0], c = e[1], u = e[2], d = 0, p = []; d < o.length; d++) (i = o[d]), Object.prototype.hasOwnProperty.call(n, i) && n[i] && p.push(n[i][0]), (n[i] = 0);
        for (a in c) Object.prototype.hasOwnProperty.call(c, a) && (t[a] = c[a]);
        l && l(e);
        while (p.length) p.shift()();
        return s.push.apply(s, u || []), r();
    }
    function r() {
        for (var t, e = 0; e < s.length; e++) {
            for (var r = s[e], a = !0, o = 1; o < r.length; o++) {
                var c = r[o];
                0 !== n[c] && (a = !1);
            }
            a && (s.splice(e--, 1), (t = i((i.s = r[0]))));
        }
        return t;
    }
    var a = {},
        n = { app: 0 },
        s = [];
    function i(e) {
        if (a[e]) return a[e].exports;
        var r = (a[e] = { i: e, l: !1, exports: {} });
        return t[e].call(r.exports, r, r.exports, i), (r.l = !0), r.exports;
    }
    (i.m = t),
        (i.c = a),
        (i.d = function (t, e, r) {
            i.o(t, e) || Object.defineProperty(t, e, { enumerable: !0, get: r });
        }),
        (i.r = function (t) {
            "undefined" !== typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(t, "__esModule", { value: !0 });
        }),
        (i.t = function (t, e) {
            if ((1 & e && (t = i(t)), 8 & e)) return t;
            if (4 & e && "object" === typeof t && t && t.__esModule) return t;
            var r = Object.create(null);
            if ((i.r(r), Object.defineProperty(r, "default", { enumerable: !0, value: t }), 2 & e && "string" != typeof t))
                for (var a in t)
                    i.d(
                        r,
                        a,
                        function (e) {
                            return t[e];
                        }.bind(null, a)
                    );
            return r;
        }),
        (i.n = function (t) {
            var e =
                t && t.__esModule
                    ? function () {
                          return t["default"];
                      }
                    : function () {
                          return t;
                      };
            return i.d(e, "a", e), e;
        }),
        (i.o = function (t, e) {
            return Object.prototype.hasOwnProperty.call(t, e);
        }),
        (i.p = "/twitch-spam-bot/");
    var o = (window["webpackJsonp"] = window["webpackJsonp"] || []),
        c = o.push.bind(o);
    (o.push = e), (o = o.slice());
    for (var u = 0; u < o.length; u++) e(o[u]);
    var l = c;
    s.push([0, "chunk-vendors"]), r();
})({
    0: function (t, e, r) {
        t.exports = r("56d7");
    },
    "56d7": function (t, e, r) {
        "use strict";
        r.r(e);
        r("e260"), r("e6cf"), r("cca6"), r("a79d");
        var a = r("2b0e"),
            n = function () {
                var t = this,
                    e = t.$createElement,
                    a = t._self._c || e;
                return a("div", { attrs: { id: "app" } }, [
                    t._m(0),
                    a("main", [
                        a("div", { staticClass: "wrapper inputs console" }, [
                            a("h2", [t._v("Console")]),
                            a("hr", { staticClass: "green" }),
                            a("div", { staticClass: "item" }, [
                                t._v(" Channel:"),
                                a("input", {
                                    directives: [{ name: "model", rawName: "v-model.lazy.trim", value: t.channel, expression: "channel", modifiers: { lazy: !0, trim: !0 } }],
                                    attrs: { disabled: t.isStarted, type: "text" },
                                    domProps: { value: t.channel },
                                    on: {
                                        change: function (e) {
                                            t.channel = e.target.value.trim();
                                        },
                                        blur: function (e) {
                                            return t.$forceUpdate();
                                        },
                                    },
                                }),
                            ]),
							a("div", { staticClass: "item" }, [
                                t._v(" Interval (1 | MS):"),
                                a("input", {
                                    directives: [{ name: "model", rawName: "v-model.lazy.trim", value: t.intervalone, expression: "intervalone", modifiers: { lazy: !0, trim: !0 } }],
                                    attrs: { disabled: t.isStarted, type: "text" },
                                    domProps: { value: t.intervalone },
                                    on: {
                                        change: function (e) {
                                            t.intervalone = e.target.value.trim();
                                        },
                                        blur: function (e) {
                                            return t.$forceUpdate();
                                        },
                                    },
                                }),
                            ]),
							a("div", { staticClass: "item" }, [
                                t._v(" Interval (2 | MS):"),
                                a("input", {
                                    directives: [{ name: "model", rawName: "v-model.lazy.trim", value: t.intervalall, expression: "intervalall", modifiers: { lazy: !0, trim: !0 } }],
                                    attrs: { disabled: t.isStarted, type: "text" },
                                    domProps: { value: t.intervalall },
                                    on: {
                                        change: function (e) {
                                            t.intervalall = e.target.value.trim();
                                        },
                                        blur: function (e) {
                                            return t.$forceUpdate();
                                        },
                                    },
                                }),
                            ]),
                            a("div", { staticClass: "start" }, [a("button", { on: { click: t.Start } }, [t._v(" " + t._s(t.isStarted ? "Stop" : "Start") + " ")])]),
							a("div", { staticClass: "start" }, [a("button", { on: { click: t.StartOnce } }, [t._v(" " + t._s(t.isStarted ? "Stop Once" : "Start Once") + " ")])]),
                        ]),
                        a(
                            "div",
                            { staticClass: "wrapper inputs" },
                            [
                                t._m(1),
                                a("hr", { staticClass: "red" }),
                                t._l(t.accounts, function (e, n) {
                                    return a("div", { key: n, staticClass: "item accounts" }, [
                                        a("input", {
                                            directives: [{ name: "model", rawName: "v-model.trim", value: e.name, expression: "item.name", modifiers: { trim: !0 } }],
                                            attrs: { disabled: t.isStarted, type: "text", placeholder: "Username" },
                                            domProps: { value: e.name },
                                            on: {
                                                input: function (r) {
                                                    r.target.composing || t.$set(e, "name", r.target.value.trim());
                                                },
                                                blur: function (e) {
                                                    return t.$forceUpdate();
                                                },
                                            },
                                        }),
                                        a("input", {
                                            directives: [{ name: "model", rawName: "v-model.trim", value: e.token, expression: "item.token", modifiers: { trim: !0 } }],
                                            attrs: { disabled: t.isStarted, type: "text", placeholder: "oauth:******************************" },
                                            domProps: { value: e.token },
                                            on: {
                                                input: function (r) {
                                                    r.target.composing || t.$set(e, "token", r.target.value.trim());
                                                },
                                                blur: function (e) {
                                                    return t.$forceUpdate();
                                                },
                                            },
                                        }),
                                        t.accounts.length - 1
                                            ? a(
                                                  "button",
                                                  {
                                                      attrs: { disabled: t.isStarted },
                                                      on: {
                                                          click: function (e) {
                                                              return t.accounts.splice(n, 1);
                                                          },
                                                      },
                                                  },
                                                  [a("img", { attrs: { src: r("c637") } })]
                                              )
                                            : t._e(),
                                    ]);
                                }),
                                a("div", { staticClass: "item" }, [
                                    a(
                                        "button",
                                        {
                                            attrs: { disabled: t.isStarted },
                                            on: {
                                                click: function (e) {
                                                    return t.accounts.push({ name: "", token: "" });
                                                },
                                            },
                                        },
                                        [a("img", { attrs: { src: r("8a37") } })]
                                    ),
                                ]),
                            ],
                            2
                        ),
                        a(
                            "div",
                            { staticClass: "wrapper inputs" },
                            [
                                a("h2", [t._v("Messages")]),
                                a("hr", { staticClass: "blue" }),
                                t._l(t.messages, function (e, n) {
                                    return a("div", { key: n, staticClass: "item messages" }, [
                                        a("input", {
                                            directives: [{ name: "model", rawName: "v-model.trim", value: e.message, expression: "item.message", modifiers: { trim: !0 } }],
                                            attrs: { disabled: t.isStarted, type: "text", placeholder: "Message" },
                                            domProps: { value: e.message },
                                            on: {
                                                input: function (r) {
                                                    r.target.composing || t.$set(e, "message", r.target.value.trim());
                                                },
                                                blur: function (e) {
                                                    return t.$forceUpdate();
                                                },
                                            },
                                        }),
                                        t.messages.length - 1
                                            ? a(
                                                  "button",
                                                  {
                                                      attrs: { disabled: t.isStarted },
                                                      on: {
                                                          click: function (e) {
                                                              return t.messages.splice(n, 1);
                                                          },
                                                      },
                                                  },
                                                  [a("img", { attrs: { src: r("c637"), width: "20" } })]
                                              )
                                            : t._e(),
                                    ]);
                                }),
                                a("div", { staticClass: "item" }, [
                                    a(
                                        "button",
                                        {
                                            attrs: { disabled: t.isStarted },
                                            on: {
                                                click: function (e) {
                                                    return t.messages.push({ message: "" });
                                                },
                                            },
                                        },
                                        [a("img", { attrs: { src: r("8a37") } })]
                                    ),
                                ]),
                            ],
                            2
                        ),
                        a("div", { staticClass: "wrapper stream" }, [
                            a("iframe", { attrs: { id: "stream", src: "https://player.twitch.tv/?muted=true&parent=" + t.iframeParent + "&channel=" + t.channel, width: "100%", frameborder: "0" } }),
                            a("iframe", { attrs: { id: "chat", src: "https://www.twitch.tv/embed/" + t.channel + "/chat?parent=" + t.iframeParent, width: "100%", frameborder: "0" } }),
                        ]),
                    ]),
                ]);
            },
            s = [
                function () {
                    var t = this,
                        e = t.$createElement,
                        r = t._self._c || e;
                    return r("header", [r("h1", [t._v("Twitch Spam Bot")])]);
                },
                function () {
                    var t = this,
                        e = t.$createElement,
                        r = t._self._c || e;
                    return r("h2", [t._v("Accounts "), r("a", { attrs: { target: "_blank", href: "http://twitchapps.com/tmi/" } }, [t._v("(Get Token)")])]);
                },
            ],
            i =
                (r("159b"),
                {
                    name: "App",
                    data: function () {
                        return { isStarted: !1, channel: "", intervalone: 2000, intervalall: 1000, accounts: [], messages: [], msgPerMin: 5, threads: 1, bots: [] };
                    },
                    computed: {
                        iframeParent: function () {
                            return window.location.hostname;
                        },
                    },
                    created: function () {
                        this.accounts.push({ name: "", token: "" }), this.messages.push({ message: "" });
                        var t = localStorage.getItem("data");
                        null !== t && Object.assign(this.$data, JSON.parse(t)), (this.isStarted = !1), (this.bots = []);
                    },
                    methods: {
                        Start: function () {
                            var t = this;
                            localStorage.setItem("data", JSON.stringify(this.$data)),
                                (this.isStarted = !this.isStarted),
                                this.isStarted
                                    ? this.accounts.forEach(function (e) {
                                          var r = new Worker("bot.js");
                                          r.postMessage({ account: e, messages: t.messages, channel: t.channel, intervalone: t.intervalone, }), t.bots.push(r);
                                      })
                                    : (this.bots.forEach(function (t) {
                                          return t.terminate();
                                      }),
                                      (this.bots = []));
                        },
						StartOnce: function () {
                            var t = this;
                            localStorage.setItem("data", JSON.stringify(this.$data)),
                                (this.isStarted = !this.isStarted),
                                this.isStarted
                                    ? this.accounts.forEach(function (e) {
                                          var r = new Worker("bot.js");
                                          r.postMessage({ account: e, messages: t.messages, channel: t.channel, intervalone: t.intervalone, }), t.bots.push(r);
                                      })
                                    : (this.bots.forEach(function (t) {
                                          return t.terminate();
                                      }),
                                      (this.bots = []));
                        },
                    },
                }),
            o = i,
            c = (r("5c0b"), r("2877")),
            u = Object(c["a"])(o, n, s, !1, null, null, null),
            l = u.exports;
        (a["a"].config.productionTip = !1),
            new a["a"]({
                render: function (t) {
                    return t(l);
                },
            }).$mount("#app");
    },
    "5c0b": function (t, e, r) {
        "use strict";
        r("9c0c");
    },
    "8a37": function (t, e, r) {
        t.exports = r.p + "img/plus.f95493ce.svg";
    },
    "9c0c": function (t, e, r) {},
    c637: function (t, e, r) {
        t.exports = r.p + "img/trash.5bce0668.svg";
    },
});
//# sourceMappingURL=app.3fd5f09a.js.map
