!(function(e, t) {
    "object" == typeof exports && "object" == typeof module ?
        (module.exports = t()) :
        "function" == typeof define && define.amd ?
        define("sofa", [], t) :
        "object" == typeof exports ?
        (exports.sofa = t()) :
        (e.sofa = t());
})("undefined" != typeof self ? self : this, function() {
    return (function(e) {
        function t(r) {
            if (n[r]) return n[r].exports;
            var o = (n[r] = { i: r, l: !1, exports: {} });
            return e[r].call(o.exports, o, o.exports, t), (o.l = !0), o.exports;
        }
        var n = {};
        return (
            (t.m = e),
            (t.c = n),
            (t.d = function(e, n, r) {
                t.o(e, n) ||
                    Object.defineProperty(e, n, {
                        configurable: !1,
                        enumerable: !0,
                        get: r,
                    });
            }),
            (t.n = function(e) {
                var n =
                    e && e.__esModule ?

                    function() {
                        return e["default"];
                    } :
                    function() {
                        return e;
                    };
                return t.d(n, "a", n), n;
            }),
            (t.o = function(e, t) {
                return Object.prototype.hasOwnProperty.call(e, t);
            }),
            (t.p = ""),
            t((t.s = 47))
        );
    })([
        function(e, t, n) {
            "use strict";
            (t.__esModule = !0),
            (t["default"] = function(e, t) {
                if (!(e instanceof t))
                    throw new TypeError("Cannot call a class as a function");
            });
        },
        function(e, t) {
            var n = (e.exports =
                "undefined" != typeof window && window.Math == Math ?
                window :
                "undefined" != typeof self && self.Math == Math ?
                self :
                Function("return this")());
            "number" == typeof __g && (__g = n);
        },
        function(e, t) {
            var n = {}.hasOwnProperty;
            e.exports = function(e, t) {
                return n.call(e, t);
            };
        },
        function(e, t, n) {
            "use strict";

            function r(e) {
                for (
                    var t = arguments.length, n = Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++
                )
                    n[r - 1] = arguments[r];
                return (
                    n.length &&
                    (0, c.forEach)(n, function(t) {
                        for (var n in t)
                            Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                    }),
                    e
                );
            }

            function o() {
                var e =
                    arguments.length > 0 && arguments[0] !== undefined ?
                    arguments[0] :
                    [],
                    t = arguments[1];
                (0, c.forEach)(e, function(e) {
                    t[e] = l(t[e], t);
                });
            }

            function i() {
                return f || (f = document.documentElement || document.body), f;
            }

            function a(e, t) {
                try {
                    return e();
                } catch (n) {
                    return u["default"].set(t || {}, n);
                }
            }
            (t.__esModule = !0),
            (t.removeEventListener = t.addEventListener = t.bind = undefined),
            (t.objectAssign = r),
            (t.bindAll = o),
            (t.getDocumentElement = i),
            (t.runErrorSafe = a);
            var s = n(33),
                u = (function(e) {
                    return e && e.__esModule ? e : { default: e };
                })(s),
                c = n(10),
                l = (t.bind = (function() {
                    return Function.prototype.bind ?

                        function(e) {
                            for (
                                var t = arguments.length, n = Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++
                            )
                                n[r - 1] = arguments[r];
                            return e.bind.apply(e, n);
                        } :
                        function(e, t) {
                            for (
                                var n = arguments.length, r = Array(n > 2 ? n - 2 : 0), o = 2; o < n; o++
                            )
                                r[o - 2] = arguments[o];
                            var i = [].concat(r);
                            return function() {
                                for (
                                    var n = arguments.length, r = Array(n), o = 0; o < n; o++
                                )
                                    r[o] = arguments[o];
                                return e.apply(t, i.concat([].concat(r || [])));
                            };
                        };
                })()),
                f = null;
            (t.addEventListener = (function() {
                if (document.addEventListener) {
                    var e = !1;
                    try {
                        var t = Object.defineProperty({}, "passive", {
                            get: function() {
                                e = !0;
                            },
                        });
                        window.addEventListener("test", null, t);
                    } catch (n) {}
                    return function(t, n, o, i) {
                        var a = !1;
                        return (
                            e && i && (a = r({ capture: !1, passive: !1, once: !1 }, i)),
                            t.addEventListener(n, o, a)
                        );
                    };
                }
                return function(e, t, n) {
                    return e.attachEvent("on" + t, n);
                };
            })()),
            (t.removeEventListener = (function() {
                return document.removeEventListener ?

                    function(e, t, n) {
                        return e.removeEventListener(t, n, !1);
                    } :
                    function(e, t, n) {
                        return e.detachEvent("on" + t, n);
                    };
            })());
        },
        function(e, t, n) {
            var r = n(5),
                o = n(15);
            e.exports = n(7) ?

                function(e, t, n) {
                    return r.f(e, t, o(1, n));
                } :
                function(e, t, n) {
                    return (e[t] = n), e;
                };
        },
        function(e, t, n) {
            var r = n(12),
                o = n(38),
                i = n(22),
                a = Object.defineProperty;
            t.f = n(7) ?
                Object.defineProperty :
                function(e, t, n) {
                    if ((r(e), (t = i(t, !0)), r(n), o))
                        try {
                            return a(e, t, n);
                        } catch (s) {}
                    if ("get" in n || "set" in n)
                        throw TypeError("Accessors not supported!");
                    return "value" in n && (e[t] = n.value), e;
                };
        },
        function(e, t) {
            e.exports = function(e) {
                return "object" == typeof e ? null !== e : "function" == typeof e;
            };
        },
        function(e, t, n) {
            e.exports = !n(14)(function() {
                return (
                    7 !=
                    Object.defineProperty({}, "a", {
                        get: function() {
                            return 7;
                        },
                    }).a
                );
            });
        },
        function(e, t, n) {
            var r = n(56),
                o = n(20);
            e.exports = function(e) {
                return r(o(e));
            };
        },
        function(e, t, n) {
            var r = n(27)("wks"),
                o = n(16),
                i = n(1).Symbol,
                a = "function" == typeof i;
            (e.exports = function(e) {
                return r[e] || (r[e] = (a && i[e]) || (a ? i : o)("Symbol." + e));
            }).store = r;
        },
        function(e, t, n) {
            "use strict";

            function r(e) {
                for (
                    var t =
                        arguments.length > 1 && arguments[1] !== undefined ?
                        arguments[1] :
                        function() {},
                        n = 0,
                        r = e.length; n < r; n++
                )
                    t(e[n], n, e);
            }

            function o(e) {
                for (
                    var t =
                        arguments.length > 1 && arguments[1] !== undefined ?
                        arguments[1] :
                        function() {},
                        n = [],
                        r = 0,
                        o = e.length; r < o; r++
                )
                    n[r] = t(e[r], r, e);
                return n;
            }

            function i(e, t, n) {
                for (var r = -1, o = n || 0, i = e.length; o < i; o++)
                    if (e[o] === t) {
                        r = o;
                        break;
                    }
                return r;
            }
            (t.__esModule = !0), (t.forEach = r), (t.map = o), (t.indexOf = i);
        },
        function(e, t) {
            var n = (e.exports = { version: "2.5.5" });
            "number" == typeof __e && (__e = n);
        },
        function(e, t, n) {
            var r = n(6);
            e.exports = function(e) {
                if (!r(e)) throw TypeError(e + " is not an object!");
                return e;
            };
        },
        function(e, t, n) {
            var r = n(1),
                o = n(11),
                i = n(37),
                a = n(4),
                s = n(2),
                u = function(e, t, n) {
                    var c,
                        l,
                        f,
                        d = e & u.F,
                        h = e & u.G,
                        p = e & u.S,
                        g = e & u.P,
                        _ = e & u.B,
                        y = e & u.W,
                        m = h ? o : o[t] || (o[t] = {}),
                        v = m.prototype,
                        w = h ? r : p ? r[t] : (r[t] || {}).prototype;
                    h && (n = t);
                    for (c in n)
                        ((l = !d && w && w[c] !== undefined) && s(m, c)) ||
                        ((f = l ? w[c] : n[c]),
                            (m[c] =
                                h && "function" != typeof w[c] ?
                                n[c] :
                                _ && l ?
                                i(f, r) :
                                y && w[c] == f ?
                                (function(e) {
                                    var t = function(t, n, r) {
                                        if (this instanceof e) {
                                            switch (arguments.length) {
                                                case 0:
                                                    return new e();
                                                case 1:
                                                    return new e(t);
                                                case 2:
                                                    return new e(t, n);
                                            }
                                            return new e(t, n, r);
                                        }
                                        return e.apply(this, arguments);
                                    };
                                    return (t.prototype = e.prototype), t;
                                })(f) :
                                g && "function" == typeof f ?
                                i(Function.call, f) :
                                f),
                            g &&
                            (((m.virtual || (m.virtual = {}))[c] = f),
                                e & u.R && v && !v[c] && a(v, c, f)));
                };
            (u.F = 1),
            (u.G = 2),
            (u.S = 4),
            (u.P = 8),
            (u.B = 16),
            (u.W = 32),
            (u.U = 64),
            (u.R = 128),
            (e.exports = u);
        },
        function(e, t) {
            e.exports = function(e) {
                try {
                    return !!e();
                } catch (t) {
                    return !0;
                }
            };
        },
        function(e, t) {
            e.exports = function(e, t) {
                return {
                    enumerable: !(1 & e),
                    configurable: !(2 & e),
                    writable: !(4 & e),
                    value: t,
                };
            };
        },
        function(e, t) {
            var n = 0,
                r = Math.random();
            e.exports = function(e) {
                return "Symbol(".concat(
                    e === undefined ? "" : e,
                    ")_",
                    (++n + r).toString(36)
                );
            };
        },
        function(e, t, n) {
            "use strict";

            function r(e) {
                return window.JSON ?
                    window.JSON.stringify(e) :
                    "IE7 and older are not supported";
            }
            (t.__esModule = !0), (t.stringify = r);
        },
        function(e, t, n) {
            "use strict";

            function r(e) {
                return e && e.__esModule ? e : { default: e };
            }
            t.__esModule = !0;
            var o = n(49),
                i = r(o),
                a = n(67),
                s = r(a),
                u =
                "function" == typeof s["default"] && "symbol" == typeof i["default"] ?

                function(e) {
                    return typeof e;
                } :
                function(e) {
                    return e &&
                        "function" == typeof s["default"] &&
                        e.constructor === s["default"] &&
                        e !== s["default"].prototype ?
                        "symbol" :
                        typeof e;
                };
            t["default"] =
                "function" == typeof s["default"] && "symbol" === u(i["default"]) ?

                function(e) {
                    return void 0 === e ? "undefined" : u(e);
                } :
                function(e) {
                    return e &&
                        "function" == typeof s["default"] &&
                        e.constructor === s["default"] &&
                        e !== s["default"].prototype ?
                        "symbol" :
                        void 0 === e ?
                        "undefined" :
                        u(e);
                };
        },
        function(e, t) {
            var n = Math.ceil,
                r = Math.floor;
            e.exports = function(e) {
                return isNaN((e = +e)) ? 0 : (e > 0 ? r : n)(e);
            };
        },
        function(e, t) {
            e.exports = function(e) {
                if (e == undefined) throw TypeError("Can't call method on  " + e);
                return e;
            };
        },
        function(e, t) {
            e.exports = !0;
        },
        function(e, t, n) {
            var r = n(6);
            e.exports = function(e, t) {
                if (!r(e)) return e;
                var n, o;
                if (t && "function" == typeof(n = e.toString) && !r((o = n.call(e))))
                    return o;
                if ("function" == typeof(n = e.valueOf) && !r((o = n.call(e))))
                    return o;
                if (!t && "function" == typeof(n = e.toString) && !r((o = n.call(e))))
                    return o;
                throw TypeError("Can't convert object to primitive value");
            };
        },
        function(e, t) {
            e.exports = {};
        },
        function(e, t, n) {
            var r = n(12),
                o = n(55),
                i = n(28),
                a = n(26)("IE_PROTO"),
                s = function() {},
                u = function() {
                    var e,
                        t = n(39)("iframe"),
                        r = i.length;
                    for (
                        t.style.display = "none",
                        n(60).appendChild(t),
                        t.src = "javascript:",
                        e = t.contentWindow.document,
                        e.open(),
                        e.write("<script>document.F=Object</script>"),
                        e.close(),
                        u = e.F; r--;

                    )
                        delete u.prototype[i[r]];
                    return u();
                };
            e.exports =
                Object.create ||
                function(e, t) {
                    var n;
                    return (
                        null !== e ?
                        ((s.prototype = r(e)),
                            (n = new s()),
                            (s.prototype = null),
                            (n[a] = e)) :
                        (n = u()),
                        t === undefined ? n : o(n, t)
                    );
                };
        },
        function(e, t, n) {
            var r = n(41),
                o = n(28);
            e.exports =
                Object.keys ||
                function(e) {
                    return r(e, o);
                };
        },
        function(e, t, n) {
            var r = n(27)("keys"),
                o = n(16);
            e.exports = function(e) {
                return r[e] || (r[e] = o(e));
            };
        },
        function(e, t, n) {
            var r = n(1),
                o = r["__core-js_shared__"] || (r["__core-js_shared__"] = {});
            e.exports = function(e) {
                return o[e] || (o[e] = {});
            };
        },
        function(e, t) {
            e.exports =
                "constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(
                    ","
                );
        },
        function(e, t, n) {
            var r = n(5).f,
                o = n(2),
                i = n(9)("toStringTag");
            e.exports = function(e, t, n) {
                e &&
                    !o((e = n ? e : e.prototype), i) &&
                    r(e, i, { configurable: !0, value: t });
            };
        },
        function(e, t, n) {
            t.f = n(9);
        },
        function(e, t, n) {
            var r = n(1),
                o = n(11),
                i = n(21),
                a = n(30),
                s = n(5).f;
            e.exports = function(e) {
                var t = o.Symbol || (o.Symbol = i ? {} : r.Symbol || {});
                "_" == e.charAt(0) || e in t || s(t, e, { value: a.f(e) });
            };
        },
        function(e, t) {
            t.f = {}.propertyIsEnumerable;
        },
        function(e, t, n) {
            "use strict";

            function r(e) {
                return e && e.__esModule ? e : { default: e };
            }

            function o(e) {
                return e ? u["default"].compressToEncodedURIComponent(e) : "";
            }
            (t.__esModule = !0), (t.ERROR_PREFIX = undefined);
            var i = n(0),
                a = r(i),
                s = n(34),
                u = r(s),
                c = n(17),
                l = (function(e) {
                    if (e && e.__esModule) return e;
                    var t = {};
                    if (null != e)
                        for (var n in e)
                            Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
                    return (t["default"] = e), t;
                })(c),
                f = null,
                d = "WhatAreYouLookingFor|",
                h =
                ((t.ERROR_PREFIX = d),
                    (function() {
                        function e() {
                            (0, a["default"])(this, e);
                        }
                        return (
                            (e.set = function(t, n) {
                                if (f) return e;
                                var r = void 0,
                                    o = {};
                                "string" == typeof t
                                    ?
                                    (r = t) :
                                    ((r = t.location || ""), (o = t.properties || {}));
                                try {
                                    o = l.stringify(o || {});
                                } catch (i) {
                                    o = "";
                                }
                                return (f = { location: r, properties: o, err: n }), e;
                            }),
                            (e.get = function() {
                                var e = (f || { err: {} }).err,
                                    t = e.name,
                                    n = e.message,
                                    r = e.stack;
                                if (!f) return "";
                                var i = f,
                                    a = i.location,
                                    s = i.properties,
                                    u = navigator.userAgent,
                                    c = [
                                        "version:1.3.4",
                                        "location:" + a,
                                        "properties:" + s,
                                        "user-agent:" + u,
                                        "name:" + t,
                                        "message:" + n,
                                        "stack:" + r,
                                    ],
                                    l = c.join("|");
                                try {
                                    return d + o(l);
                                } catch (h) {
                                    return "" + d + l;
                                }
                            }),
                            e
                        );
                    })());
            t["default"] = h;
        },
        function(e, t, n) {
            var r,
                o = (function() {
                    function e(e, t) {
                        if (!o[e]) {
                            o[e] = {};
                            for (var n = 0; n < e.length; n++) o[e][e.charAt(n)] = n;
                        }
                        return o[e][t];
                    }
                    var t = String.fromCharCode,
                        n =
                        "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
                        r =
                        "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+-$",
                        o = {},
                        i = {
                            compressToBase64: function(e) {
                                if (null == e) return "";
                                var t = i._compress(e, 6, function(e) {
                                    return n.charAt(e);
                                });
                                switch (t.length % 4) {
                                    default:
                                        case 0:
                                        return t;
                                    case 1:
                                            return t + "===";
                                    case 2:
                                            return t + "==";
                                    case 3:
                                            return t + "=";
                                }
                            },
                            decompressFromBase64: function(t) {
                                return null == t ?
                                    "" :
                                    "" == t ?
                                    null :
                                    i._decompress(t.length, 32, function(r) {
                                        return e(n, t.charAt(r));
                                    });
                            },
                            compressToUTF16: function(e) {
                                return null == e ?
                                    "" :
                                    i._compress(e, 15, function(e) {
                                        return t(e + 32);
                                    }) + " ";
                            },
                            decompressFromUTF16: function(e) {
                                return null == e ?
                                    "" :
                                    "" == e ?
                                    null :
                                    i._decompress(e.length, 16384, function(t) {
                                        return e.charCodeAt(t) - 32;
                                    });
                            },
                            compressToUint8Array: function(e) {
                                for (
                                    var t = i.compress(e),
                                        n = new Uint8Array(2 * t.length),
                                        r = 0,
                                        o = t.length; r < o; r++
                                ) {
                                    var a = t.charCodeAt(r);
                                    (n[2 * r] = a >>> 8), (n[2 * r + 1] = a % 256);
                                }
                                return n;
                            },
                            decompressFromUint8Array: function(e) {
                                if (null === e || e === undefined) return i.decompress(e);
                                for (
                                    var n = new Array(e.length / 2), r = 0, o = n.length; r < o; r++
                                )
                                    n[r] = 256 * e[2 * r] + e[2 * r + 1];
                                var a = [];
                                return (
                                    n.forEach(function(e) {
                                        a.push(t(e));
                                    }),
                                    i.decompress(a.join(""))
                                );
                            },
                            compressToEncodedURIComponent: function(e) {
                                return null == e ?
                                    "" :
                                    i._compress(e, 6, function(e) {
                                        return r.charAt(e);
                                    });
                            },
                            decompressFromEncodedURIComponent: function(t) {
                                return null == t ?
                                    "" :
                                    "" == t ?
                                    null :
                                    ((t = t.replace(/ /g, "+")),
                                        i._decompress(t.length, 32, function(n) {
                                            return e(r, t.charAt(n));
                                        }));
                            },
                            compress: function(e) {
                                return i._compress(e, 16, function(e) {
                                    return t(e);
                                });
                            },
                            _compress: function(e, t, n) {
                                if (null == e) return "";
                                var r,
                                    o,
                                    i,
                                    a = {},
                                    s = {},
                                    u = "",
                                    c = "",
                                    l = "",
                                    f = 2,
                                    d = 3,
                                    h = 2,
                                    p = [],
                                    g = 0,
                                    _ = 0;
                                for (i = 0; i < e.length; i += 1)
                                    if (
                                        ((u = e.charAt(i)),
                                            Object.prototype.hasOwnProperty.call(a, u) ||
                                            ((a[u] = d++), (s[u] = !0)),
                                            (c = l + u),
                                            Object.prototype.hasOwnProperty.call(a, c))
                                    )
                                        l = c;
                                    else {
                                        if (Object.prototype.hasOwnProperty.call(s, l)) {
                                            if (l.charCodeAt(0) < 256) {
                                                for (r = 0; r < h; r++)
                                                    (g <<= 1),
                                                    _ == t - 1 ? ((_ = 0), p.push(n(g)), (g = 0)) : _++;
                                                for (o = l.charCodeAt(0), r = 0; r < 8; r++)
                                                    (g = (g << 1) | (1 & o)),
                                                    _ == t - 1 ? ((_ = 0), p.push(n(g)), (g = 0)) : _++,
                                                    (o >>= 1);
                                            } else {
                                                for (o = 1, r = 0; r < h; r++)
                                                    (g = (g << 1) | o),
                                                    _ == t - 1 ? ((_ = 0), p.push(n(g)), (g = 0)) : _++,
                                                    (o = 0);
                                                for (o = l.charCodeAt(0), r = 0; r < 16; r++)
                                                    (g = (g << 1) | (1 & o)),
                                                    _ == t - 1 ? ((_ = 0), p.push(n(g)), (g = 0)) : _++,
                                                    (o >>= 1);
                                            }
                                            f--, 0 == f && ((f = Math.pow(2, h)), h++), delete s[l];
                                        } else
                                            for (o = a[l], r = 0; r < h; r++)
                                                (g = (g << 1) | (1 & o)),
                                                _ == t - 1 ? ((_ = 0), p.push(n(g)), (g = 0)) : _++,
                                                (o >>= 1);
                                        f--,
                                        0 == f && ((f = Math.pow(2, h)), h++),
                                            (a[c] = d++),
                                            (l = String(u));
                                    }
                                if ("" !== l) {
                                    if (Object.prototype.hasOwnProperty.call(s, l)) {
                                        if (l.charCodeAt(0) < 256) {
                                            for (r = 0; r < h; r++)
                                                (g <<= 1),
                                                _ == t - 1 ? ((_ = 0), p.push(n(g)), (g = 0)) : _++;
                                            for (o = l.charCodeAt(0), r = 0; r < 8; r++)
                                                (g = (g << 1) | (1 & o)),
                                                _ == t - 1 ? ((_ = 0), p.push(n(g)), (g = 0)) : _++,
                                                (o >>= 1);
                                        } else {
                                            for (o = 1, r = 0; r < h; r++)
                                                (g = (g << 1) | o),
                                                _ == t - 1 ? ((_ = 0), p.push(n(g)), (g = 0)) : _++,
                                                (o = 0);
                                            for (o = l.charCodeAt(0), r = 0; r < 16; r++)
                                                (g = (g << 1) | (1 & o)),
                                                _ == t - 1 ? ((_ = 0), p.push(n(g)), (g = 0)) : _++,
                                                (o >>= 1);
                                        }
                                        f--, 0 == f && ((f = Math.pow(2, h)), h++), delete s[l];
                                    } else
                                        for (o = a[l], r = 0; r < h; r++)
                                            (g = (g << 1) | (1 & o)),
                                            _ == t - 1 ? ((_ = 0), p.push(n(g)), (g = 0)) : _++,
                                            (o >>= 1);
                                    f--, 0 == f && ((f = Math.pow(2, h)), h++);
                                }
                                for (o = 2, r = 0; r < h; r++)
                                    (g = (g << 1) | (1 & o)),
                                    _ == t - 1 ? ((_ = 0), p.push(n(g)), (g = 0)) : _++,
                                    (o >>= 1);
                                for (;;) {
                                    if (((g <<= 1), _ == t - 1)) {
                                        p.push(n(g));
                                        break;
                                    }
                                    _++;
                                }
                                return p.join("");
                            },
                            decompress: function(e) {
                                return null == e ?
                                    "" :
                                    "" == e ?
                                    null :
                                    i._decompress(e.length, 32768, function(t) {
                                        return e.charCodeAt(t);
                                    });
                            },
                            _decompress: function(e, n, r) {
                                var o,
                                    i,
                                    a,
                                    s,
                                    u,
                                    c,
                                    l,
                                    f = [],
                                    d = 4,
                                    h = 4,
                                    p = 3,
                                    g = "",
                                    _ = [],
                                    y = { val: r(0), position: n, index: 1 };
                                for (o = 0; o < 3; o += 1) f[o] = o;
                                for (a = 0, u = Math.pow(2, 2), c = 1; c != u;)
                                    (s = y.val & y.position),
                                    (y.position >>= 1),
                                    0 == y.position &&
                                    ((y.position = n), (y.val = r(y.index++))),
                                    (a |= (s > 0 ? 1 : 0) * c),
                                    (c <<= 1);
                                switch (a) {
                                    case 0:
                                        for (a = 0, u = Math.pow(2, 8), c = 1; c != u;)
                                            (s = y.val & y.position),
                                            (y.position >>= 1),
                                            0 == y.position &&
                                            ((y.position = n), (y.val = r(y.index++))),
                                            (a |= (s > 0 ? 1 : 0) * c),
                                            (c <<= 1);
                                        l = t(a);
                                        break;
                                    case 1:
                                        for (a = 0, u = Math.pow(2, 16), c = 1; c != u;)
                                            (s = y.val & y.position),
                                            (y.position >>= 1),
                                            0 == y.position &&
                                            ((y.position = n), (y.val = r(y.index++))),
                                            (a |= (s > 0 ? 1 : 0) * c),
                                            (c <<= 1);
                                        l = t(a);
                                        break;
                                    case 2:
                                        return "";
                                }
                                for (f[3] = l, i = l, _.push(l);;) {
                                    if (y.index > e) return "";
                                    for (a = 0, u = Math.pow(2, p), c = 1; c != u;)
                                        (s = y.val & y.position),
                                        (y.position >>= 1),
                                        0 == y.position &&
                                        ((y.position = n), (y.val = r(y.index++))),
                                        (a |= (s > 0 ? 1 : 0) * c),
                                        (c <<= 1);
                                    switch ((l = a)) {
                                        case 0:
                                            for (a = 0, u = Math.pow(2, 8), c = 1; c != u;)
                                                (s = y.val & y.position),
                                                (y.position >>= 1),
                                                0 == y.position &&
                                                ((y.position = n), (y.val = r(y.index++))),
                                                (a |= (s > 0 ? 1 : 0) * c),
                                                (c <<= 1);
                                            (f[h++] = t(a)), (l = h - 1), d--;
                                            break;
                                        case 1:
                                            for (a = 0, u = Math.pow(2, 16), c = 1; c != u;)
                                                (s = y.val & y.position),
                                                (y.position >>= 1),
                                                0 == y.position &&
                                                ((y.position = n), (y.val = r(y.index++))),
                                                (a |= (s > 0 ? 1 : 0) * c),
                                                (c <<= 1);
                                            (f[h++] = t(a)), (l = h - 1), d--;
                                            break;
                                        case 2:
                                            return _.join("");
                                    }
                                    if ((0 == d && ((d = Math.pow(2, p)), p++), f[l])) g = f[l];
                                    else {
                                        if (l !== h) return null;
                                        g = i + i.charAt(0);
                                    }
                                    _.push(g),
                                        (f[h++] = i + g.charAt(0)),
                                        d--,
                                        (i = g),
                                        0 == d && ((d = Math.pow(2, p)), p++);
                                }
                            },
                        };
                    return i;
                })();
            (r = function() {
                return o;
            }.call(t, n, t, e)) !== undefined && (e.exports = r);
        },
        function(e, t, n) {
            "use strict";

            function r(e) {
                var t = e.a,
                    n = e.b,
                    r = e.c;
                return 444 === t && 444 === n && 444 === r;
            }

            function o(e) {
                return isNaN(parseFloat(e)) ? 444 : parseFloat(e.toFixed(6));
            }

            function i(e) {
                return a[e] || e;
            }
            (t.__esModule = !0),
            (t.isWrong = r),
            (t.refine = o),
            (t.refineBfAttrName = i);
            var a = {
                user_agent: "a",
                language: "b",
                color_depth: "c",
                device_memory: "d",
                pixel_ratio: "e",
                hardware_concurrency: "f",
                resolution: "g",
                available_resolution: "h",
                timezone_offset: "i",
                session_storage: "j",
                local_storage: "k",
                indexed_db: "l",
                cpu_class: "m",
                navigator_platform: "n",
                do_not_track: "o",
                canvas: "p",
                webgl: "q",
                webgl_vendor: "r",
                adblock: "s",
                has_lied_languages: "t",
                has_lied_resolution: "u",
                has_lied_os: "v",
                has_lied_browser: "w",
                touch_support: "x",
                js_fonts: "y",
                open_database: "z",
                regular_plugins: "aa",
                add_behavior: "ab",
            };
        },
        function(e, t, n) {
            "use strict";
            var r = n(21),
                o = n(13),
                i = n(40),
                a = n(4),
                s = n(23),
                u = n(54),
                c = n(29),
                l = n(61),
                f = n(9)("iterator"),
                d = !([].keys && "next" in [].keys()),
                h = function() {
                    return this;
                };
            e.exports = function(e, t, n, p, g, _, y) {
                u(n, t, p);
                var m,
                    v,
                    w,
                    b = function(e) {
                        if (!d && e in E) return E[e];
                        switch (e) {
                            case "keys":
                            case "values":
                                return function() {
                                    return new n(this, e);
                                };
                        }
                        return function() {
                            return new n(this, e);
                        };
                    },
                    S = t + " Iterator",
                    T = "values" == g,
                    x = !1,
                    E = e.prototype,
                    M = E[f] || E["@@iterator"] || (g && E[g]),
                    A = M || b(g),
                    C = g ? (T ? b("entries") : A) : undefined,
                    P = "Array" == t ? E.entries || M : M;
                if (
                    (P &&
                        (w = l(P.call(new e()))) !== Object.prototype &&
                        w.next &&
                        (c(w, S, !0), r || "function" == typeof w[f] || a(w, f, h)),
                        T &&
                        M &&
                        "values" !== M.name &&
                        ((x = !0),
                            (A = function() {
                                return M.call(this);
                            })),
                        (r && !y) || (!d && !x && E[f]) || a(E, f, A),
                        (s[t] = A),
                        (s[S] = h),
                        g)
                )
                    if (
                        ((m = {
                                values: T ? A : b("values"),
                                keys: _ ? A : b("keys"),
                                entries: C,
                            }),
                            y)
                    )
                        for (v in m) v in E || i(E, v, m[v]);
                    else o(o.P + o.F * (d || x), t, m);
                return m;
            };
        },
        function(e, t, n) {
            var r = n(53);
            e.exports = function(e, t, n) {
                if ((r(e), t === undefined)) return e;
                switch (n) {
                    case 1:
                        return function(n) {
                            return e.call(t, n);
                        };
                    case 2:
                        return function(n, r) {
                            return e.call(t, n, r);
                        };
                    case 3:
                        return function(n, r, o) {
                            return e.call(t, n, r, o);
                        };
                }
                return function() {
                    return e.apply(t, arguments);
                };
            };
        },
        function(e, t, n) {
            e.exports = !n(7) &&
                !n(14)(function() {
                    return (
                        7 !=
                        Object.defineProperty(n(39)("div"), "a", {
                            get: function() {
                                return 7;
                            },
                        }).a
                    );
                });
        },
        function(e, t, n) {
            var r = n(6),
                o = n(1).document,
                i = r(o) && r(o.createElement);
            e.exports = function(e) {
                return i ? o.createElement(e) : {};
            };
        },
        function(e, t, n) {
            e.exports = n(4);
        },
        function(e, t, n) {
            var r = n(2),
                o = n(8),
                i = n(57)(!1),
                a = n(26)("IE_PROTO");
            e.exports = function(e, t) {
                var n,
                    s = o(e),
                    u = 0,
                    c = [];
                for (n in s) n != a && r(s, n) && c.push(n);
                for (; t.length > u;) r(s, (n = t[u++])) && (~i(c, n) || c.push(n));
                return c;
            };
        },
        function(e, t) {
            var n = {}.toString;
            e.exports = function(e) {
                return n.call(e).slice(8, -1);
            };
        },
        function(e, t) {
            t.f = Object.getOwnPropertySymbols;
        },
        function(e, t, n) {
            var r = n(41),
                o = n(28).concat("length", "prototype");
            t.f =
                Object.getOwnPropertyNames ||
                function(e) {
                    return r(e, o);
                };
        },
        function(e, t, n) {
            var r = n(32),
                o = n(15),
                i = n(8),
                a = n(22),
                s = n(2),
                u = n(38),
                c = Object.getOwnPropertyDescriptor;
            t.f = n(7) ?
                c :
                function(e, t) {
                    if (((e = i(e)), (t = a(t, !0)), u))
                        try {
                            return c(e, t);
                        } catch (n) {}
                    if (s(e, t)) return o(!r.f.call(e, t), e[t]);
                };
        },
        function(e, t) {
            var n = {
                utf8: {
                    stringToBytes: function(e) {
                        return n.bin.stringToBytes(unescape(encodeURIComponent(e)));
                    },
                    bytesToString: function(e) {
                        return decodeURIComponent(escape(n.bin.bytesToString(e)));
                    },
                },
                bin: {
                    stringToBytes: function(e) {
                        for (var t = [], n = 0; n < e.length; n++)
                            t.push(255 & e.charCodeAt(n));
                        return t;
                    },
                    bytesToString: function(e) {
                        for (var t = [], n = 0; n < e.length; n++)
                            t.push(String.fromCharCode(e[n]));
                        return t.join("");
                    },
                },
            };
            e.exports = n;
        },
        function(e, t, n) {
            e.exports = n(48);
        },
        function(e, t, n) {
            "use strict";

            function r(e) {
                return e && e.__esModule ? e : { default: e };
            }

            function o() {
                var e = window.sofa;
                return (
                    e && e.Koop === g && _ && (window.sofa = _),
                    e || { __esModule: !0, VERSION: y, Koop: g, noConflict: o }
                );
            }
            (t.__esModule = !0), (t.Koop = t.VERSION = undefined);
            var i = n(18),
                a = r(i),
                s = n(0),
                u = r(s);
            t.noConflict = o;
            var c = n(33),
                l = r(c),
                f = n(77),
                d = n(103),
                h = r(d),
                p = n(3),
                g = (function() {
                    function e() {
                        var t = this,
                            n =
                            arguments.length > 0 && arguments[0] !== undefined ?
                            arguments[0] :
                            {};
                        (0, u["default"])(this, e),
                        (0, p.runErrorSafe)(
                            function() {
                                (t._prop = {
                                    keyboard: n.keyboard || [],
                                    modeProperties: (0, p.objectAssign)({
                                            mode: 1,
                                            url: "",
                                            chunkSize: 1800,
                                            timeout: 1500,
                                            bfTimeout: 500,
                                        },
                                        n.modeProperties || {}
                                    ),
                                }),
                                (t._data = new f.CaptchaData(t._prop));
                            }, { location: "NCaptcha Constructor", properties: n }
                        );
                    }
                    return (
                        (e.prototype.f = function(e, t) {
                            var n = this._prop.modeProperties.mode,
                                r = this._defineDefaultOptions(n),
                                o = t;
                            return (
                                "function" == typeof e && (o = e),
                                "object" ===
                                (void 0 === e ? "undefined" : (0, a["default"])(e)) &&
                                (r = (0, p.objectAssign)(r, e)),
                                2 === n ?
                                this._handleMode2(r, o) :
                                4 === n ?
                                this._handleMode4(r, o) :
                                this._handleMode1(r)
                            );
                        }),
                        (e.prototype._defineDefaultOptions = function(e) {
                            return { compressMode: 1 === e || 4 === e ? "old" : "new" };
                        }),
                        (e.prototype._handleMode1 = function(e) {
                            var t = this;
                            return (0, p.runErrorSafe)(
                                function() {
                                    return l["default"].get() || t._data.get(e).body;
                                }, { location: "mode1 f", properties: this._prop }
                            );
                        }),
                        (e.prototype._handleMode2 = function(e, t) {
                            this._send("mode2 f", e, t);
                        }),
                        (e.prototype._handleMode4 = function(e, t) {
                            var n = this;
                            if (!this._data.getBFP())
                                return void this._afterBFPComplete(function() {
                                    n._handleMode4(e, t);
                                });
                            var r = (0, p.runErrorSafe)(
                                function() {
                                    return l["default"].get() || n._data.get(e).body;
                                }, { location: "mode4 f", properties: this._prop }
                            );
                            t(r || "mode4 f result is empty");
                        }),
                        (e.prototype._afterBFPComplete = function(e) {
                            var t = this._data,
                                n = function r() {
                                    t.off("bfpTimeout", r), t.off("bfpLoad", r), e();
                                };
                            t.on({ bfpTimeout: n, bfpLoad: n });
                        }),
                        (e.prototype._send = function(e, t, n) {
                            var r = this;
                            if (!this._data.getBFP())
                                return void this._afterBFPComplete(function() {
                                    r._send(e, t, n);
                                });
                            var o = (0, p.runErrorSafe)(
                                function() {
                                    var e = l["default"].get() || r._data.get(t);
                                    return (0, h["default"])(e, r._prop.modeProperties, n);
                                }, { location: e, properties: this._prop }
                            );
                            o && n(o);
                        }),
                        (e.prototype.addKeyboardWatch = function(e) {
                            var t = this;
                            (0, p.runErrorSafe)(
                                function() {
                                    return t._data.addKeyboardWatch(e);
                                }, { location: "add keyboard watch", properties: this._prop }
                            );
                        }),
                        (e.prototype.removeKeyboardWatch = function(e) {
                            var t = this;
                            (0, p.runErrorSafe)(
                                function() {
                                    return t._data.removeKeyboardWatch(e);
                                }, { location: "remove keyboard watch", properties: this._prop }
                            );
                        }),
                        e
                    );
                })(),
                _ = window.sofa,
                y = (t.VERSION = "1.3.4");
            t.Koop = g;
        },
        function(e, t, n) {
            e.exports = { default: n(50), __esModule: !0 };
        },
        function(e, t, n) {
            n(51), n(63), (e.exports = n(30).f("iterator"));
        },
        function(e, t, n) {
            "use strict";
            var r = n(52)(!0);
            n(36)(
                String,
                "String",
                function(e) {
                    (this._t = String(e)), (this._i = 0);
                },
                function() {
                    var e,
                        t = this._t,
                        n = this._i;
                    return n >= t.length ?
                        { value: undefined, done: !0 } :
                        ((e = r(t, n)), (this._i += e.length), { value: e, done: !1 });
                }
            );
        },
        function(e, t, n) {
            var r = n(19),
                o = n(20);
            e.exports = function(e) {
                return function(t, n) {
                    var i,
                        a,
                        s = String(o(t)),
                        u = r(n),
                        c = s.length;
                    return u < 0 || u >= c ?
                        e ?
                        "" :
                        undefined :
                        ((i = s.charCodeAt(u)),
                            i < 55296 ||
                            i > 56319 ||
                            u + 1 === c ||
                            (a = s.charCodeAt(u + 1)) < 56320 ||
                            a > 57343 ?
                            e ?
                            s.charAt(u) :
                            i :
                            e ?
                            s.slice(u, u + 2) :
                            a - 56320 + ((i - 55296) << 10) + 65536);
                };
            };
        },
        function(e, t) {
            e.exports = function(e) {
                if ("function" != typeof e) throw TypeError(e + " is not a function!");
                return e;
            };
        },
        function(e, t, n) {
            "use strict";
            var r = n(24),
                o = n(15),
                i = n(29),
                a = {};
            n(4)(a, n(9)("iterator"), function() {
                    return this;
                }),
                (e.exports = function(e, t, n) {
                    (e.prototype = r(a, { next: o(1, n) })), i(e, t + " Iterator");
                });
        },
        function(e, t, n) {
            var r = n(5),
                o = n(12),
                i = n(25);
            e.exports = n(7) ?
                Object.defineProperties :
                function(e, t) {
                    o(e);
                    for (var n, a = i(t), s = a.length, u = 0; s > u;)
                        r.f(e, (n = a[u++]), t[n]);
                    return e;
                };
        },
        function(e, t, n) {
            var r = n(42);
            e.exports = Object("z").propertyIsEnumerable(0) ?
                Object :
                function(e) {
                    return "String" == r(e) ? e.split("") : Object(e);
                };
        },
        function(e, t, n) {
            var r = n(8),
                o = n(58),
                i = n(59);
            e.exports = function(e) {
                return function(t, n, a) {
                    var s,
                        u = r(t),
                        c = o(u.length),
                        l = i(a, c);
                    if (e && n != n) {
                        for (; c > l;)
                            if ((s = u[l++]) != s) return !0;
                    } else
                        for (; c > l; l++)
                            if ((e || l in u) && u[l] === n) return e || l || 0;
                    return !e && -1;
                };
            };
        },
        function(e, t, n) {
            var r = n(19),
                o = Math.min;
            e.exports = function(e) {
                return e > 0 ? o(r(e), 9007199254740991) : 0;
            };
        },
        function(e, t, n) {
            var r = n(19),
                o = Math.max,
                i = Math.min;
            e.exports = function(e, t) {
                return (e = r(e)), e < 0 ? o(e + t, 0) : i(e, t);
            };
        },
        function(e, t, n) {
            var r = n(1).document;
            e.exports = r && r.documentElement;
        },
        function(e, t, n) {
            var r = n(2),
                o = n(62),
                i = n(26)("IE_PROTO"),
                a = Object.prototype;
            e.exports =
                Object.getPrototypeOf ||
                function(e) {
                    return (
                        (e = o(e)),
                        r(e, i) ?
                        e[i] :
                        "function" == typeof e.constructor && e instanceof e.constructor ?
                        e.constructor.prototype :
                        e instanceof Object ?
                        a :
                        null
                    );
                };
        },
        function(e, t, n) {
            var r = n(20);
            e.exports = function(e) {
                return Object(r(e));
            };
        },
        function(e, t, n) {
            n(64);
            for (
                var r = n(1),
                    o = n(4),
                    i = n(23),
                    a = n(9)("toStringTag"),
                    s =
                    "CSSRuleList,CSSStyleDeclaration,CSSValueList,ClientRectList,DOMRectList,DOMStringList,DOMTokenList,DataTransferItemList,FileList,HTMLAllCollection,HTMLCollection,HTMLFormElement,HTMLSelectElement,MediaList,MimeTypeArray,NamedNodeMap,NodeList,PaintRequestList,Plugin,PluginArray,SVGLengthList,SVGNumberList,SVGPathSegList,SVGPointList,SVGStringList,SVGTransformList,SourceBufferList,StyleSheetList,TextTrackCueList,TextTrackList,TouchList".split(
                        ","
                    ),
                    u = 0; u < s.length; u++
            ) {
                var c = s[u],
                    l = r[c],
                    f = l && l.prototype;
                f && !f[a] && o(f, a, c), (i[c] = i.Array);
            }
        },
        function(e, t, n) {
            "use strict";
            var r = n(65),
                o = n(66),
                i = n(23),
                a = n(8);
            (e.exports = n(36)(
                Array,
                "Array",
                function(e, t) {
                    (this._t = a(e)), (this._i = 0), (this._k = t);
                },
                function() {
                    var e = this._t,
                        t = this._k,
                        n = this._i++;
                    return !e || n >= e.length ?
                        ((this._t = undefined), o(1)) :
                        "keys" == t ?
                        o(0, n) :
                        "values" == t ?
                        o(0, e[n]) :
                        o(0, [n, e[n]]);
                },
                "values"
            )),
            (i.Arguments = i.Array),
            r("keys"),
                r("values"),
                r("entries");
        },
        function(e, t) {
            e.exports = function() {};
        },
        function(e, t) {
            e.exports = function(e, t) {
                return { value: t, done: !!e };
            };
        },
        function(e, t, n) {
            e.exports = { default: n(68), __esModule: !0 };
        },
        function(e, t, n) {
            n(69), n(74), n(75), n(76), (e.exports = n(11).Symbol);
        },
        function(e, t, n) {
            "use strict";
            var r = n(1),
                o = n(2),
                i = n(7),
                a = n(13),
                s = n(40),
                u = n(70).KEY,
                c = n(14),
                l = n(27),
                f = n(29),
                d = n(16),
                h = n(9),
                p = n(30),
                g = n(31),
                _ = n(71),
                y = n(72),
                m = n(12),
                v = n(6),
                w = n(8),
                b = n(22),
                S = n(15),
                T = n(24),
                x = n(73),
                E = n(45),
                M = n(5),
                A = n(25),
                C = E.f,
                P = M.f,
                O = x.f,
                L = r.Symbol,
                I = r.JSON,
                F = I && I.stringify,
                R = h("_hidden"),
                B = h("toPrimitive"),
                k = {}.propertyIsEnumerable,
                D = l("symbol-registry"),
                N = l("symbols"),
                H = l("op-symbols"),
                G = Object.prototype,
                K = "function" == typeof L,
                j = r.QObject,
                W = !j || !j.prototype || !j.prototype.findChild,
                U =
                i &&
                c(function() {
                    return (
                        7 !=
                        T(
                            P({}, "a", {
                                get: function() {
                                    return P(this, "a", { value: 7 }).a;
                                },
                            })
                        ).a
                    );
                }) ?

                function(e, t, n) {
                    var r = C(G, t);
                    r && delete G[t], P(e, t, n), r && e !== G && P(G, t, r);
                } :
                P,
                V = function(e) {
                    var t = (N[e] = T(L.prototype));
                    return (t._k = e), t;
                },
                X =
                K && "symbol" == typeof L.iterator ?

                function(e) {
                    return "symbol" == typeof e;
                } :
                function(e) {
                    return e instanceof L;
                },
                z = function(e, t, n) {
                    return (
                        e === G && z(H, t, n),
                        m(e),
                        (t = b(t, !0)),
                        m(n),
                        o(N, t) ?
                        (n.enumerable ?
                            (o(e, R) && e[R][t] && (e[R][t] = !1),
                                (n = T(n, { enumerable: S(0, !1) }))) :
                            (o(e, R) || P(e, R, S(1, {})), (e[R][t] = !0)),
                            U(e, t, n)) :
                        P(e, t, n)
                    );
                },
                Y = function(e, t) {
                    m(e);
                    for (var n, r = _((t = w(t))), o = 0, i = r.length; i > o;)
                        z(e, (n = r[o++]), t[n]);
                    return e;
                },
                J = function(e, t) {
                    return t === undefined ? T(e) : Y(T(e), t);
                },
                Z = function(e) {
                    var t = k.call(this, (e = b(e, !0)));
                    return (!(this === G && o(N, e) && !o(H, e)) &&
                        (!(t || !o(this, e) || !o(N, e) || (o(this, R) && this[R][e])) || t)
                    );
                },
                q = function(e, t) {
                    if (((e = w(e)), (t = b(t, !0)), e !== G || !o(N, t) || o(H, t))) {
                        var n = C(e, t);
                        return (!n || !o(N, t) || (o(e, R) && e[R][t]) || (n.enumerable = !0), n);
                    }
                },
                Q = function(e) {
                    for (var t, n = O(w(e)), r = [], i = 0; n.length > i;)
                        o(N, (t = n[i++])) || t == R || t == u || r.push(t);
                    return r;
                },
                $ = function(e) {
                    for (
                        var t, n = e === G, r = O(n ? H : w(e)), i = [], a = 0; r.length > a;

                    )
                        !o(N, (t = r[a++])) || (n && !o(G, t)) || i.push(N[t]);
                    return i;
                };
            K ||
                ((L = function() {
                        if (this instanceof L)
                            throw TypeError("Symbol is not a constructor!");
                        var e = d(arguments.length > 0 ? arguments[0] : undefined),
                            t = function(n) {
                                this === G && t.call(H, n),
                                    o(this, R) && o(this[R], e) && (this[R][e] = !1),
                                    U(this, e, S(1, n));
                            };
                        return i && W && U(G, e, { configurable: !0, set: t }), V(e);
                    }),
                    s(L.prototype, "toString", function() {
                        return this._k;
                    }),
                    (E.f = q),
                    (M.f = z),
                    (n(44).f = x.f = Q),
                    (n(32).f = Z),
                    (n(43).f = $),
                    i && !n(21) && s(G, "propertyIsEnumerable", Z, !0),
                    (p.f = function(e) {
                        return V(h(e));
                    })),
                a(a.G + a.W + a.F * !K, { Symbol: L });
            for (
                var ee =
                    "hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables".split(
                        ","
                    ),
                    te = 0; ee.length > te;

            )
                h(ee[te++]);
            for (var ne = A(h.store), re = 0; ne.length > re;) g(ne[re++]);
            a(a.S + a.F * !K, "Symbol", {
                    for: function(e) {
                        return o(D, (e += "")) ? D[e] : (D[e] = L(e));
                    },
                    keyFor: function(e) {
                        if (!X(e)) throw TypeError(e + " is not a symbol!");
                        for (var t in D)
                            if (D[t] === e) return t;
                    },
                    useSetter: function() {
                        W = !0;
                    },
                    useSimple: function() {
                        W = !1;
                    },
                }),
                a(a.S + a.F * !K, "Object", {
                    create: J,
                    defineProperty: z,
                    defineProperties: Y,
                    getOwnPropertyDescriptor: q,
                    getOwnPropertyNames: Q,
                    getOwnPropertySymbols: $,
                }),
                I &&
                a(
                    a.S +
                    a.F *
                    (!K ||
                        c(function() {
                            var e = L();
                            return (
                                "[null]" != F([e]) ||
                                "{}" != F({ a: e }) ||
                                "{}" != F(Object(e))
                            );
                        })),
                    "JSON", {
                        stringify: function(e) {
                            for (var t, n, r = [e], o = 1; arguments.length > o;)
                                r.push(arguments[o++]);
                            if (((n = t = r[1]), (v(t) || e !== undefined) && !X(e)))
                                return (
                                    y(t) ||
                                    (t = function(e, t) {
                                        if (
                                            ("function" == typeof n && (t = n.call(this, e, t)), !X(t))
                                        )
                                            return t;
                                    }),
                                    (r[1] = t),
                                    F.apply(I, r)
                                );
                        },
                    }
                ),
                L.prototype[B] || n(4)(L.prototype, B, L.prototype.valueOf),
                f(L, "Symbol"),
                f(Math, "Math", !0),
                f(r.JSON, "JSON", !0);
        },
        function(e, t, n) {
            var r = n(16)("meta"),
                o = n(6),
                i = n(2),
                a = n(5).f,
                s = 0,
                u =
                Object.isExtensible ||
                function() {
                    return !0;
                },
                c = !n(14)(function() {
                    return u(Object.preventExtensions({}));
                }),
                l = function(e) {
                    a(e, r, { value: { i: "O" + ++s, w: {} } });
                },
                f = function(e, t) {
                    if (!o(e))
                        return "symbol" == typeof e ?
                            e :
                            ("string" == typeof e ? "S" : "P") + e;
                    if (!i(e, r)) {
                        if (!u(e)) return "F";
                        if (!t) return "E";
                        l(e);
                    }
                    return e[r].i;
                },
                d = function(e, t) {
                    if (!i(e, r)) {
                        if (!u(e)) return !0;
                        if (!t) return !1;
                        l(e);
                    }
                    return e[r].w;
                },
                h = function(e) {
                    return c && p.NEED && u(e) && !i(e, r) && l(e), e;
                },
                p = (e.exports = {
                    KEY: r,
                    NEED: !1,
                    fastKey: f,
                    getWeak: d,
                    onFreeze: h,
                });
        },
        function(e, t, n) {
            var r = n(25),
                o = n(43),
                i = n(32);
            e.exports = function(e) {
                var t = r(e),
                    n = o.f;
                if (n)
                    for (var a, s = n(e), u = i.f, c = 0; s.length > c;)
                        u.call(e, (a = s[c++])) && t.push(a);
                return t;
            };
        },
        function(e, t, n) {
            var r = n(42);
            e.exports =
                Array.isArray ||
                function(e) {
                    return "Array" == r(e);
                };
        },
        function(e, t, n) {
            var r = n(8),
                o = n(44).f,
                i = {}.toString,
                a =
                "object" == typeof window && window && Object.getOwnPropertyNames ?
                Object.getOwnPropertyNames(window) :
                [],
                s = function(e) {
                    try {
                        return o(e);
                    } catch (t) {
                        return a.slice();
                    }
                };
            e.exports.f = function(e) {
                return a && "[object Window]" == i.call(e) ? s(e) : o(r(e));
            };
        },
        function(e, t) {},
        function(e, t, n) {
            n(31)("asyncIterator");
        },
        function(e, t, n) {
            n(31)("observable");
        },
        function(e, t, n) {
            "use strict";

            function r(e) {
                return e && e.__esModule ? e : { default: e };
            }
            (t.__esModule = !0), (t.CaptchaData = undefined);
            var o = n(0),
                i = r(o),
                a = n(78),
                s = r(a),
                u = n(79),
                c = r(u),
                l = n(87),
                f = r(l),
                d = n(91),
                h = r(d),
                p = n(94),
                g = r(p),
                _ = n(95),
                y = n(97),
                m = r(y),
                v = n(98),
                w = r(v),
                b = n(99),
                S = r(b),
                T = n(100),
                x = r(T),
                E = n(101),
                M = r(E),
                A = n(35),
                C = n(102),
                P = r(C),
                O = n(3),
                L = n(10),
                I = (function(e) {
                    if (e && e.__esModule) return e;
                    var t = {};
                    if (null != e)
                        for (var n in e)
                            Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
                    return (t["default"] = e), t;
                })(L);
            t.CaptchaData = (function(e) {
                function t(n) {
                    (0, i["default"])(this, t);
                    var r = (0, s["default"])(this, e.call(this));
                    return (
                        (r._prop = n),
                        (r._uuid = (0, f["default"])()),
                        (r._tseq = 0),
                        (r._keyboard = new w["default"](n.keyboard)),
                        (r._deviceOrientation = new S["default"]()),
                        (r._deviceMotion = new x["default"]()),
                        (r._mouse = new M["default"]()),
                        1 === r._prop.modeProperties.mode ?
                        (0, _.getBFP)(function(e, t, n) {
                            (r._fpHash = e),
                            (r._fpComponent = r._refineComponents(t)),
                            (r._fpDuration = n);
                        }) :
                        r._prepare(),
                        r
                    );
                }
                return (
                    (0, c["default"])(t, e),
                    (t.prototype.getBFP = function() {
                        return this._fpHash ?
                            {
                                hash: this._fpHash,
                                component: this._fpComponent,
                                duration: this._fpDuration,
                            } :
                            null;
                    }),
                    (t.prototype._prepare = function() {
                        var e = this;
                        "complete" === document.readyState ?
                            this._loadBFP() :
                            (0, O.addEventListener)(window, "load", function() {
                                e._loadBFP();
                            });
                    }),
                    (t.prototype._loadBFP = function() {
                        var e = this;
                        if (!this._loadTimer && !this._fpHash) {
                            var t = this._prop.modeProperties.bfTimeout || 500;
                            this._loadTimer = window.setTimeout(function() {
                                (0, O.runErrorSafe)(
                                    function() {
                                        (e._timeoutTimer = window.setTimeout(function() {
                                            e._fpHash || e.trigger("bfpTimeout");
                                        }, t)),
                                        (0, _.getBFP)(function(t, n, r) {
                                            (e._fpHash = t),
                                            (e._fpComponent = e._refineComponents(n)),
                                            (e._fpDuration = r),
                                            window.clearTimeout(e._timeoutTimer),
                                                delete e._timeoutTimer,
                                                delete e._loadTimer,
                                                e.trigger("bfpLoad");
                                        });
                                    }, { location: "Fingerprint2 Constructor", properties: e._prop }
                                );
                            }, 10);
                        }
                    }),
                    (t.prototype._getTransactionId = function() {
                        return this._uuid + "-" + this._tseq++;
                    }),
                    (t.prototype._refineComponents = function(e) {
                        var t = {};
                        return (
                            I.forEach(e, function(e) {
                                ("canvas" !== e.key && "webgl" !== e.key) ||
                                !e.value ||
                                    (e.value = (0, h["default"])(e.value)),
                                    (t[(0, A.refineBfAttrName)(e.key)] = e.value);
                            }),
                            t
                        );
                    }),
                    (t.prototype.get = function() {
                        var e =
                            arguments.length > 0 && arguments[0] !== undefined ?
                            arguments[0] :
                            {},
                            t = e.compressMode || "new",
                            n = this._getTransactionId(),
                            r = this._keyboard.get({ filter: e.keyboardLogs }),
                            o = {
                                a: n,
                                b: "1.3.4",
                                c: (0, m["default"])(),
                                d: r,
                                e: this._deviceOrientation.get(),
                                f: this._deviceMotion.get(),
                                g: this._mouse.get(),
                                j: this._fpDuration || _.NOT_YET,
                                h: this._fpHash || "",
                                i: this._fpComponent || [],
                            };
                        return { type: "c", uuid: n, body: (0, P["default"])(o, t) };
                    }),
                    (t.prototype.addKeyboardWatch = function(e) {
                        this._keyboard.addWatch(e);
                    }),
                    (t.prototype.removeKeyboardWatch = function(e) {
                        this._keyboard.removeWatch(e);
                    }),
                    t
                );
            })(g["default"]);
        },
        function(e, t, n) {
            "use strict";
            t.__esModule = !0;
            var r = n(18),
                o = (function(e) {
                    return e && e.__esModule ? e : { default: e };
                })(r);
            t["default"] = function(e, t) {
                if (!e)
                    throw new ReferenceError(
                        "this hasn't been initialised - super() hasn't been called"
                    );
                return !t ||
                    ("object" !== (void 0 === t ? "undefined" : (0, o["default"])(t)) &&
                        "function" != typeof t) ?
                    e :
                    t;
            };
        },
        function(e, t, n) {
            "use strict";

            function r(e) {
                return e && e.__esModule ? e : { default: e };
            }
            t.__esModule = !0;
            var o = n(80),
                i = r(o),
                a = n(84),
                s = r(a),
                u = n(18),
                c = r(u);
            t["default"] = function(e, t) {
                if ("function" != typeof t && null !== t)
                    throw new TypeError(
                        "Super expression must either be null or a function, not " +
                        (void 0 === t ? "undefined" : (0, c["default"])(t))
                    );
                (e.prototype = (0, s["default"])(t && t.prototype, {
                    constructor: {
                        value: e,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0,
                    },
                })),
                t && (i["default"] ? (0, i["default"])(e, t) : (e.__proto__ = t));
            };
        },
        function(e, t, n) {
            e.exports = { default: n(81), __esModule: !0 };
        },
        function(e, t, n) {
            n(82), (e.exports = n(11).Object.setPrototypeOf);
        },
        function(e, t, n) {
            var r = n(13);
            r(r.S, "Object", { setPrototypeOf: n(83).set });
        },
        function(e, t, n) {
            var r = n(6),
                o = n(12),
                i = function(e, t) {
                    if ((o(e), !r(t) && null !== t))
                        throw TypeError(t + ": can't set as prototype!");
                };
            e.exports = {
                set: Object.setPrototypeOf ||
                    ("__proto__" in {} ?
                        (function(e, t, r) {
                            try {
                                (r = n(37)(
                                    Function.call,
                                    n(45).f(Object.prototype, "__proto__").set,
                                    2
                                )),
                                r(e, []),
                                    (t = !(e instanceof Array));
                            } catch (o) {
                                t = !0;
                            }
                            return function(e, n) {
                                return i(e, n), t ? (e.__proto__ = n) : r(e, n), e;
                            };
                        })({}, !1) :
                        undefined),
                check: i,
            };
        },
        function(e, t, n) {
            e.exports = { default: n(85), __esModule: !0 };
        },
        function(e, t, n) {
            n(86);
            var r = n(11).Object;
            e.exports = function(e, t) {
                return r.create(e, t);
            };
        },
        function(e, t, n) {
            var r = n(13);
            r(r.S, "Object", { create: n(24) });
        },
        function(e, t, n) {
            function r(e, t, n) {
                var r = (t && n) || 0;
                "string" == typeof e &&
                    ((t = "binary" == e ? new Array(16) : null), (e = null)),
                    (e = e || {});
                var a = e.random || (e.rng || o)();
                if (((a[6] = (15 & a[6]) | 64), (a[8] = (63 & a[8]) | 128), t))
                    for (var s = 0; s < 16; ++s) t[r + s] = a[s];
                return t || i(a);
            }
            var o = n(88),
                i = n(90);
            e.exports = r;
        },
        function(e, t, n) {
            (function(t) {
                var n,
                    r = t.crypto || t.msCrypto;
                if (r && r.getRandomValues) {
                    var o = new Uint8Array(16);
                    n = function() {
                        return r.getRandomValues(o), o;
                    };
                }
                if (!n) {
                    var i = new Array(16);
                    n = function() {
                        for (var e, t = 0; t < 16; t++)
                            0 == (3 & t) && (e = 4294967296 * Math.random()),
                            (i[t] = (e >>> ((3 & t) << 3)) & 255);
                        return i;
                    };
                }
                e.exports = n;
            }.call(t, n(89)));
        },
        function(e, t) {
            var n;
            n = (function() {
                return this;
            })();
            try {
                n = n || Function("return this")() || (0, eval)("this");
            } catch (r) {
                "object" == typeof window && (n = window);
            }
            e.exports = n;
        },
        function(e, t) {
            function n(e, t) {
                var n = t || 0,
                    o = r;
                return (
                    o[e[n++]] +
                    o[e[n++]] +
                    o[e[n++]] +
                    o[e[n++]] +
                    "-" +
                    o[e[n++]] +
                    o[e[n++]] +
                    "-" +
                    o[e[n++]] +
                    o[e[n++]] +
                    "-" +
                    o[e[n++]] +
                    o[e[n++]] +
                    "-" +
                    o[e[n++]] +
                    o[e[n++]] +
                    o[e[n++]] +
                    o[e[n++]] +
                    o[e[n++]] +
                    o[e[n++]]
                );
            }
            for (var r = [], o = 0; o < 256; ++o)
                r[o] = (o + 256).toString(16).substr(1);
            e.exports = n;
        },
        function(e, t, n) {
            !(function() {
                var t = n(92),
                    r = n(46).utf8,
                    o = n(93),
                    i = n(46).bin,
                    a = function(e, n) {
                        e.constructor == String ?
                            (e =
                                n && "binary" === n.encoding ?
                                i.stringToBytes(e) :
                                r.stringToBytes(e)) :
                            o(e) ?
                            (e = Array.prototype.slice.call(e, 0)) :
                            Array.isArray(e) || (e = e.toString());
                        for (
                            var s = t.bytesToWords(e),
                                u = 8 * e.length,
                                c = 1732584193,
                                l = -271733879,
                                f = -1732584194,
                                d = 271733878,
                                h = 0; h < s.length; h++
                        )
                            s[h] =
                            (16711935 & ((s[h] << 8) | (s[h] >>> 24))) |
                            (4278255360 & ((s[h] << 24) | (s[h] >>> 8)));
                        (s[u >>> 5] |= 128 << u % 32),
                        (s[14 + (((u + 64) >>> 9) << 4)] = u);
                        for (
                            var p = a._ff, g = a._gg, _ = a._hh, y = a._ii, h = 0; h < s.length; h += 16
                        ) {
                            var m = c,
                                v = l,
                                w = f,
                                b = d;
                            (c = p(c, l, f, d, s[h + 0], 7, -680876936)),
                            (d = p(d, c, l, f, s[h + 1], 12, -389564586)),
                            (f = p(f, d, c, l, s[h + 2], 17, 606105819)),
                            (l = p(l, f, d, c, s[h + 3], 22, -1044525330)),
                            (c = p(c, l, f, d, s[h + 4], 7, -176418897)),
                            (d = p(d, c, l, f, s[h + 5], 12, 1200080426)),
                            (f = p(f, d, c, l, s[h + 6], 17, -1473231341)),
                            (l = p(l, f, d, c, s[h + 7], 22, -45705983)),
                            (c = p(c, l, f, d, s[h + 8], 7, 1770035416)),
                            (d = p(d, c, l, f, s[h + 9], 12, -1958414417)),
                            (f = p(f, d, c, l, s[h + 10], 17, -42063)),
                            (l = p(l, f, d, c, s[h + 11], 22, -1990404162)),
                            (c = p(c, l, f, d, s[h + 12], 7, 1804603682)),
                            (d = p(d, c, l, f, s[h + 13], 12, -40341101)),
                            (f = p(f, d, c, l, s[h + 14], 17, -1502002290)),
                            (l = p(l, f, d, c, s[h + 15], 22, 1236535329)),
                            (c = g(c, l, f, d, s[h + 1], 5, -165796510)),
                            (d = g(d, c, l, f, s[h + 6], 9, -1069501632)),
                            (f = g(f, d, c, l, s[h + 11], 14, 643717713)),
                            (l = g(l, f, d, c, s[h + 0], 20, -373897302)),
                            (c = g(c, l, f, d, s[h + 5], 5, -701558691)),
                            (d = g(d, c, l, f, s[h + 10], 9, 38016083)),
                            (f = g(f, d, c, l, s[h + 15], 14, -660478335)),
                            (l = g(l, f, d, c, s[h + 4], 20, -405537848)),
                            (c = g(c, l, f, d, s[h + 9], 5, 568446438)),
                            (d = g(d, c, l, f, s[h + 14], 9, -1019803690)),
                            (f = g(f, d, c, l, s[h + 3], 14, -187363961)),
                            (l = g(l, f, d, c, s[h + 8], 20, 1163531501)),
                            (c = g(c, l, f, d, s[h + 13], 5, -1444681467)),
                            (d = g(d, c, l, f, s[h + 2], 9, -51403784)),
                            (f = g(f, d, c, l, s[h + 7], 14, 1735328473)),
                            (l = g(l, f, d, c, s[h + 12], 20, -1926607734)),
                            (c = _(c, l, f, d, s[h + 5], 4, -378558)),
                            (d = _(d, c, l, f, s[h + 8], 11, -2022574463)),
                            (f = _(f, d, c, l, s[h + 11], 16, 1839030562)),
                            (l = _(l, f, d, c, s[h + 14], 23, -35309556)),
                            (c = _(c, l, f, d, s[h + 1], 4, -1530992060)),
                            (d = _(d, c, l, f, s[h + 4], 11, 1272893353)),
                            (f = _(f, d, c, l, s[h + 7], 16, -155497632)),
                            (l = _(l, f, d, c, s[h + 10], 23, -1094730640)),
                            (c = _(c, l, f, d, s[h + 13], 4, 681279174)),
                            (d = _(d, c, l, f, s[h + 0], 11, -358537222)),
                            (f = _(f, d, c, l, s[h + 3], 16, -722521979)),
                            (l = _(l, f, d, c, s[h + 6], 23, 76029189)),
                            (c = _(c, l, f, d, s[h + 9], 4, -640364487)),
                            (d = _(d, c, l, f, s[h + 12], 11, -421815835)),
                            (f = _(f, d, c, l, s[h + 15], 16, 530742520)),
                            (l = _(l, f, d, c, s[h + 2], 23, -995338651)),
                            (c = y(c, l, f, d, s[h + 0], 6, -198630844)),
                            (d = y(d, c, l, f, s[h + 7], 10, 1126891415)),
                            (f = y(f, d, c, l, s[h + 14], 15, -1416354905)),
                            (l = y(l, f, d, c, s[h + 5], 21, -57434055)),
                            (c = y(c, l, f, d, s[h + 12], 6, 1700485571)),
                            (d = y(d, c, l, f, s[h + 3], 10, -1894986606)),
                            (f = y(f, d, c, l, s[h + 10], 15, -1051523)),
                            (l = y(l, f, d, c, s[h + 1], 21, -2054922799)),
                            (c = y(c, l, f, d, s[h + 8], 6, 1873313359)),
                            (d = y(d, c, l, f, s[h + 15], 10, -30611744)),
                            (f = y(f, d, c, l, s[h + 6], 15, -1560198380)),
                            (l = y(l, f, d, c, s[h + 13], 21, 1309151649)),
                            (c = y(c, l, f, d, s[h + 4], 6, -145523070)),
                            (d = y(d, c, l, f, s[h + 11], 10, -1120210379)),
                            (f = y(f, d, c, l, s[h + 2], 15, 718787259)),
                            (l = y(l, f, d, c, s[h + 9], 21, -343485551)),
                            (c = (c + m) >>> 0),
                            (l = (l + v) >>> 0),
                            (f = (f + w) >>> 0),
                            (d = (d + b) >>> 0);
                        }
                        return t.endian([c, l, f, d]);
                    };
                (a._ff = function(e, t, n, r, o, i, a) {
                    var s = e + ((t & n) | (~t & r)) + (o >>> 0) + a;
                    return ((s << i) | (s >>> (32 - i))) + t;
                }),
                (a._gg = function(e, t, n, r, o, i, a) {
                    var s = e + ((t & r) | (n & ~r)) + (o >>> 0) + a;
                    return ((s << i) | (s >>> (32 - i))) + t;
                }),
                (a._hh = function(e, t, n, r, o, i, a) {
                    var s = e + (t ^ n ^ r) + (o >>> 0) + a;
                    return ((s << i) | (s >>> (32 - i))) + t;
                }),
                (a._ii = function(e, t, n, r, o, i, a) {
                    var s = e + (n ^ (t | ~r)) + (o >>> 0) + a;
                    return ((s << i) | (s >>> (32 - i))) + t;
                }),
                (a._blocksize = 16),
                (a._digestsize = 16),
                (e.exports = function(e, n) {
                    if (e === undefined || null === e)
                        throw new Error("Illegal argument " + e);
                    var r = t.wordsToBytes(a(e, n));
                    return n && n.asBytes ?
                        r :
                        n && n.asString ?
                        i.bytesToString(r) :
                        t.bytesToHex(r);
                });
            })();
        },
        function(e, t) {
            !(function() {
                var t =
                    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
                    n = {
                        rotl: function(e, t) {
                            return (e << t) | (e >>> (32 - t));
                        },
                        rotr: function(e, t) {
                            return (e << (32 - t)) | (e >>> t);
                        },
                        endian: function(e) {
                            if (e.constructor == Number)
                                return (16711935 & n.rotl(e, 8)) | (4278255360 & n.rotl(e, 24));
                            for (var t = 0; t < e.length; t++) e[t] = n.endian(e[t]);
                            return e;
                        },
                        randomBytes: function(e) {
                            for (var t = []; e > 0; e--)
                                t.push(Math.floor(256 * Math.random()));
                            return t;
                        },
                        bytesToWords: function(e) {
                            for (var t = [], n = 0, r = 0; n < e.length; n++, r += 8)
                                t[r >>> 5] |= e[n] << (24 - (r % 32));
                            return t;
                        },
                        wordsToBytes: function(e) {
                            for (var t = [], n = 0; n < 32 * e.length; n += 8)
                                t.push((e[n >>> 5] >>> (24 - (n % 32))) & 255);
                            return t;
                        },
                        bytesToHex: function(e) {
                            for (var t = [], n = 0; n < e.length; n++)
                                t.push((e[n] >>> 4).toString(16)),
                                t.push((15 & e[n]).toString(16));
                            return t.join("");
                        },
                        hexToBytes: function(e) {
                            for (var t = [], n = 0; n < e.length; n += 2)
                                t.push(parseInt(e.substr(n, 2), 16));
                            return t;
                        },
                        bytesToBase64: function(e) {
                            for (var n = [], r = 0; r < e.length; r += 3)
                                for (
                                    var o = (e[r] << 16) | (e[r + 1] << 8) | e[r + 2], i = 0; i < 4; i++
                                )
                                    8 * r + 6 * i <= 8 * e.length ?
                                    n.push(t.charAt((o >>> (6 * (3 - i))) & 63)) :
                                    n.push("=");
                            return n.join("");
                        },
                        base64ToBytes: function(e) {
                            e = e.replace(/[^A-Z0-9+\/]/gi, "");
                            for (var n = [], r = 0, o = 0; r < e.length; o = ++r % 4)
                                0 != o &&
                                n.push(
                                    ((t.indexOf(e.charAt(r - 1)) &
                                            (Math.pow(2, -2 * o + 8) - 1)) <<
                                        (2 * o)) |
                                    (t.indexOf(e.charAt(r)) >>> (6 - 2 * o))
                                );
                            return n;
                        },
                    };
                e.exports = n;
            })();
        },
        function(e, t) {
            function n(e) {
                return (!!e.constructor &&
                    "function" == typeof e.constructor.isBuffer &&
                    e.constructor.isBuffer(e)
                );
            }

            function r(e) {
                return (
                    "function" == typeof e.readFloatLE &&
                    "function" == typeof e.slice &&
                    n(e.slice(0, 0))
                );
            }
            /*!
             * Determine if an object is a Buffer
             *
             * @author   Feross Aboukhadijeh <https://feross.org>
             * @license  MIT
             */
            e.exports = function(e) {
                return null != e && (n(e) || r(e) || !!e._isBuffer);
            };
        },
        function(e, t, n) {
            /*!
             * Copyright (c) 2017 NAVER Corp.
             * @egjs/component project is licensed under the MIT license
             *
             * @egjs/component JavaScript library
             * http://naver.github.io/egjs/component
             *
             * @version 2.1.1
             */
            !(function(t, n) {
                e.exports = n();
            })(0, function() {
                return (function(e) {
                    function t(r) {
                        if (n[r]) return n[r].exports;
                        var o = (n[r] = { i: r, l: !1, exports: {} });
                        return e[r].call(o.exports, o, o.exports, t), (o.l = !0), o.exports;
                    }
                    var n = {};
                    return (
                        (t.m = e),
                        (t.c = n),
                        (t.d = function(e, n, r) {
                            t.o(e, n) ||
                                Object.defineProperty(e, n, {
                                    configurable: !1,
                                    enumerable: !0,
                                    get: r,
                                });
                        }),
                        (t.n = function(e) {
                            var n =
                                e && e.__esModule ?

                                function() {
                                    return e["default"];
                                } :
                                function() {
                                    return e;
                                };
                            return t.d(n, "a", n), n;
                        }),
                        (t.o = function(e, t) {
                            return Object.prototype.hasOwnProperty.call(e, t);
                        }),
                        (t.p = ""),
                        t((t.s = 2))
                    );
                })([
                    function(e, t, n) {
                        "use strict";

                        function r(e, t) {
                            if (!(e instanceof t))
                                throw new TypeError("Cannot call a class as a function");
                        }
                        t.__esModule = !0;
                        var o =
                            "function" == typeof Symbol &&
                            "symbol" == typeof Symbol.iterator ?

                            function(e) {
                                return typeof e;
                            } :
                            function(e) {
                                return e &&
                                    "function" == typeof Symbol &&
                                    e.constructor === Symbol &&
                                    e !== Symbol.prototype ?
                                    "symbol" :
                                    typeof e;
                            },
                            i = (function() {
                                function e() {
                                    r(this, e), (this._eventHandler = {}), (this.options = {});
                                }
                                return (
                                    (e.prototype.trigger = function(e) {
                                        var t =
                                            arguments.length > 1 && arguments[1] !== undefined ?
                                            arguments[1] :
                                            {},
                                            n = this._eventHandler[e] || [];
                                        if (!(n.length > 0)) return !0;
                                        (n = n.concat()), (t.eventType = e);
                                        var r = !1,
                                            o = [t],
                                            i = 0;
                                        (t.stop = function() {
                                            r = !0;
                                        }),
                                        (t.currentTarget = this);
                                        for (
                                            var a = arguments.length,
                                                s = Array(a > 2 ? a - 2 : 0),
                                                u = 2; u < a; u++
                                        )
                                            s[u - 2] = arguments[u];
                                        for (s.length >= 1 && (o = o.concat(s)), i = 0; n[i]; i++)
                                            n[i].apply(this, o);
                                        return !r;
                                    }),
                                    (e.prototype.once = function(e, t) {
                                        if (
                                            "object" === (void 0 === e ? "undefined" : o(e)) &&
                                            void 0 === t
                                        ) {
                                            var n = e,
                                                r = void 0;
                                            for (r in n) this.once(r, n[r]);
                                            return this;
                                        }
                                        if ("string" == typeof e && "function" == typeof t) {
                                            var i = this;
                                            this.on(e, function a() {
                                                for (
                                                    var n = arguments.length, r = Array(n), o = 0; o < n; o++
                                                )
                                                    r[o] = arguments[o];
                                                t.apply(i, r), i.off(e, a);
                                            });
                                        }
                                        return this;
                                    }),
                                    (e.prototype.hasOn = function(e) {
                                        return !!this._eventHandler[e];
                                    }),
                                    (e.prototype.on = function(e, t) {
                                        if (
                                            "object" === (void 0 === e ? "undefined" : o(e)) &&
                                            void 0 === t
                                        ) {
                                            var n = e,
                                                r = void 0;
                                            for (r in n) this.on(r, n[r]);
                                            return this;
                                        }
                                        if ("string" == typeof e && "function" == typeof t) {
                                            var i = this._eventHandler[e];
                                            void 0 === i &&
                                                ((this._eventHandler[e] = []),
                                                    (i = this._eventHandler[e])),
                                                i.push(t);
                                        }
                                        return this;
                                    }),
                                    (e.prototype.off = function(e, t) {
                                        if (void 0 === e) return (this._eventHandler = {}), this;
                                        if (void 0 === t) {
                                            if ("string" == typeof e)
                                                return (this._eventHandler[e] = undefined), this;
                                            var n = e,
                                                r = void 0;
                                            for (r in n) this.off(r, n[r]);
                                            return this;
                                        }
                                        var o = this._eventHandler[e];
                                        if (o) {
                                            var i = void 0,
                                                a = void 0;
                                            for (i = 0;
                                                (a = o[i]) !== undefined; i++)
                                                if (a === t) {
                                                    o = o.splice(i, 1);
                                                    break;
                                                }
                                        }
                                        return this;
                                    }),
                                    e
                                );
                            })();
                        (t["default"] = i), (e.exports = t["default"]);
                    }, ,
                    function(e, t, n) {
                        "use strict";
                        t.__esModule = !0;
                        var r = n(0),
                            o = (function(e) {
                                return e && e.__esModule ? e : { default: e };
                            })(r);
                        (o["default"].VERSION = "2.1.1"),
                        (t["default"] = o["default"]),
                        (e.exports = t["default"]);
                    },
                ]);
            });
        },
        function(e, t, n) {
            "use strict";

            function r() {
                var e =
                    arguments.length > 0 && arguments[0] !== undefined ?
                    arguments[0] :
                    function() {};
                if (s) return void u.push(e);
                var t = "v" + i["default"].VERSION,
                    n = f[t];
                n
                    ?
                    e(n.hash, n.components, n.duration) :
                    (c[t] || (c[t] = new Date().getTime()),
                        (s = !0),
                        d.get(function(n, r) {
                            var o = c[t] ? new Date().getTime() - c[t] : l;
                            (s = !1),
                            (f[t] = { hash: n, components: r, duration: o }),
                            e(n, r, o),
                                (0, a.forEach)(u, function(e) {
                                    return e(n, r, o);
                                }),
                                (u.length = 0),
                                (u = []);
                        }));
            }
            (t.__esModule = !0),
            (t.fingerprint2 = t.registry = t.NOT_YET = undefined),
            (t.getBFP = r);
            var o = n(96),
                i = (function(e) {
                    return e && e.__esModule ? e : { default: e };
                })(o),
                a = n(10);
            window.__sofabfp_registry || (window.__sofabfp_registry = {});
            var s = !1,
                u = [],
                c = [],
                l = -1,
                f = ((t.NOT_YET = -2), (t.registry = window.__sofabfp_registry)),
                d = (t.fingerprint2 = new i["default"]());
        },
        function(e, t) {
            !(function(t, n, r) {
                "use strict";
                "function" == typeof window.define && window.define.amd ?
                    window.define(r) :
                    void 0 !== e && e.exports ?
                    (e.exports = r()) :
                    n.exports ?
                    (n.exports = r()) :
                    (n.Fingerprint2 = r());
            })(0, this, function() {
                "use strict";
                var e = function(t) {
                    if (!(this instanceof e)) return new e(t);
                    var n = {
                        swfContainerId: "fingerprintjs2",
                        swfPath: "flash/compiled/FontList.swf",
                        detectScreenOrientation: !0,
                        sortPluginsFor: [/palemoon/i],
                        userDefinedFonts: [],
                    };
                    this.options = n;
                    for (var r in t || {}) this.options[r] = t[r];
                    (this.nativeForEach = Array.prototype.forEach),
                    (this.nativeMap = Array.prototype.map);
                };
                return (
                    (e.prototype = {
                        extend: function(e, t) {
                            if (null == e) return t;
                            for (var n in e) null != e[n] && t[n] !== e[n] && (t[n] = e[n]);
                            return t;
                        },
                        get: function(e) {
                            var t = this,
                                n = {
                                    data: [],
                                    addPreprocessedComponent: function(e) {
                                        var r = e.value;
                                        "function" == typeof t.options.preprocessor &&
                                            (r = t.options.preprocessor(e.key, r)),
                                            n.data.push({ key: e.key, value: r });
                                    },
                                };
                            (n = this.userAgentKey(n)),
                            (n = this.languageKey(n)),
                            (n = this.colorDepthKey(n)),
                            (n = this.deviceMemoryKey(n)),
                            (n = this.pixelRatioKey(n)),
                            (n = this.hardwareConcurrencyKey(n)),
                            (n = this.screenResolutionKey(n)),
                            (n = this.availableScreenResolutionKey(n)),
                            (n = this.timezoneOffsetKey(n)),
                            (n = this.sessionStorageKey(n)),
                            (n = this.localStorageKey(n)),
                            (n = this.indexedDbKey(n)),
                            (n = this.addBehaviorKey(n)),
                            (n = this.openDatabaseKey(n)),
                            (n = this.cpuClassKey(n)),
                            (n = this.platformKey(n)),
                            (n = this.doNotTrackKey(n)),
                            (n = this.pluginsKey(n)),
                            (n = this.canvasKey(n)),
                            (n = this.webglKey(n)),
                            (n = this.webglVendorAndRendererKey(n)),
                            (n = this.adBlockKey(n)),
                            (n = this.hasLiedLanguagesKey(n)),
                            (n = this.hasLiedResolutionKey(n)),
                            (n = this.hasLiedOsKey(n)),
                            (n = this.hasLiedBrowserKey(n)),
                            (n = this.touchSupportKey(n)),
                            (n = this.customEntropyFunction(n)),
                            this.fontsKey(n, function(n) {
                                var r = [];
                                t.each(n.data, function(e) {
                                    var t = e.value;
                                    t && "undefined" === t.join && (t = t.join(";")), r.push(t);
                                });
                                var o = t.x64hash128(r.join("~~~"), 31);
                                return e(o, n.data);
                            });
                        },
                        customEntropyFunction: function(e) {
                            return (
                                "function" == typeof this.options.customFunction &&
                                e.addPreprocessedComponent({
                                    key: "custom",
                                    value: this.options.customFunction(),
                                }),
                                e
                            );
                        },
                        userAgentKey: function(e) {
                            return (
                                this.options.excludeUserAgent ||
                                e.addPreprocessedComponent({
                                    key: "user_agent",
                                    value: this.getUserAgent(),
                                }),
                                e
                            );
                        },
                        getUserAgent: function() {
                            return navigator.userAgent;
                        },
                        languageKey: function(e) {
                            return (
                                this.options.excludeLanguage ||
                                e.addPreprocessedComponent({
                                    key: "language",
                                    value: navigator.language ||
                                        navigator.userLanguage ||
                                        navigator.browserLanguage ||
                                        navigator.systemLanguage ||
                                        "",
                                }),
                                e
                            );
                        },
                        colorDepthKey: function(e) {
                            return (
                                this.options.excludeColorDepth ||
                                e.addPreprocessedComponent({
                                    key: "color_depth",
                                    value: window.screen.colorDepth || -1,
                                }),
                                e
                            );
                        },
                        deviceMemoryKey: function(e) {
                            return (
                                this.options.excludeDeviceMemory ||
                                e.addPreprocessedComponent({
                                    key: "device_memory",
                                    value: this.getDeviceMemory(),
                                }),
                                e
                            );
                        },
                        getDeviceMemory: function() {
                            return navigator.deviceMemory || -1;
                        },
                        pixelRatioKey: function(e) {
                            return (
                                this.options.excludePixelRatio ||
                                e.addPreprocessedComponent({
                                    key: "pixel_ratio",
                                    value: this.getPixelRatio(),
                                }),
                                e
                            );
                        },
                        getPixelRatio: function() {
                            return window.devicePixelRatio || "";
                        },
                        screenResolutionKey: function(e) {
                            return this.options.excludeScreenResolution ?
                                e :
                                this.getScreenResolution(e);
                        },
                        getScreenResolution: function(e) {
                            var t;
                            return (
                                (t =
                                    this.options.detectScreenOrientation &&
                                    window.screen.height > window.screen.width ?
                                    [window.screen.height, window.screen.width] :
                                    [window.screen.width, window.screen.height]),
                                e.addPreprocessedComponent({ key: "resolution", value: t }),
                                e
                            );
                        },
                        availableScreenResolutionKey: function(e) {
                            return this.options.excludeAvailableScreenResolution ?
                                e :
                                this.getAvailableScreenResolution(e);
                        },
                        getAvailableScreenResolution: function(e) {
                            var t;
                            return (
                                window.screen.availWidth &&
                                window.screen.availHeight &&
                                (t = this.options.detectScreenOrientation ?
                                    window.screen.availHeight > window.screen.availWidth ?
                                    [window.screen.availHeight, window.screen.availWidth] :
                                    [window.screen.availWidth, window.screen.availHeight] :
                                    [window.screen.availHeight, window.screen.availWidth]),
                                void 0 !== t &&
                                e.addPreprocessedComponent({
                                    key: "available_resolution",
                                    value: t,
                                }),
                                e
                            );
                        },
                        timezoneOffsetKey: function(e) {
                            return (
                                this.options.excludeTimezoneOffset ||
                                e.addPreprocessedComponent({
                                    key: "timezone_offset",
                                    value: new Date().getTimezoneOffset(),
                                }),
                                e
                            );
                        },
                        sessionStorageKey: function(e) {
                            return (!this.options.excludeSessionStorage &&
                                this.hasSessionStorage() &&
                                e.addPreprocessedComponent({
                                    key: "session_storage",
                                    value: 1,
                                }),
                                e
                            );
                        },
                        localStorageKey: function(e) {
                            return (!this.options.excludeSessionStorage &&
                                this.hasLocalStorage() &&
                                e.addPreprocessedComponent({
                                    key: "local_storage",
                                    value: 1,
                                }),
                                e
                            );
                        },
                        indexedDbKey: function(e) {
                            return (!this.options.excludeIndexedDB &&
                                this.hasIndexedDB() &&
                                e.addPreprocessedComponent({ key: "indexed_db", value: 1 }),
                                e
                            );
                        },
                        addBehaviorKey: function(e) {
                            return (
                                document.body &&
                                !this.options.excludeAddBehavior &&
                                document.body.addBehavior &&
                                e.addPreprocessedComponent({ key: "add_behavior", value: 1 }),
                                e
                            );
                        },
                        openDatabaseKey: function(e) {
                            return (!this.options.excludeOpenDatabase &&
                                window.openDatabase &&
                                e.addPreprocessedComponent({
                                    key: "open_database",
                                    value: 1,
                                }),
                                e
                            );
                        },
                        cpuClassKey: function(e) {
                            return (
                                this.options.excludeCpuClass ||
                                e.addPreprocessedComponent({
                                    key: "cpu_class",
                                    value: this.getNavigatorCpuClass(),
                                }),
                                e
                            );
                        },
                        platformKey: function(e) {
                            return (
                                this.options.excludePlatform ||
                                e.addPreprocessedComponent({
                                    key: "navigator_platform",
                                    value: this.getNavigatorPlatform(),
                                }),
                                e
                            );
                        },
                        doNotTrackKey: function(e) {
                            return (
                                this.options.excludeDoNotTrack ||
                                e.addPreprocessedComponent({
                                    key: "do_not_track",
                                    value: this.getDoNotTrack(),
                                }),
                                e
                            );
                        },
                        canvasKey: function(e) {
                            return (!this.options.excludeCanvas &&
                                this.isCanvasSupported() &&
                                e.addPreprocessedComponent({
                                    key: "canvas",
                                    value: this.getCanvasFp(),
                                }),
                                e
                            );
                        },
                        webglKey: function(e) {
                            return (!this.options.excludeWebGL &&
                                this.isWebGlSupported() &&
                                e.addPreprocessedComponent({
                                    key: "webgl",
                                    value: this.getWebglFp(),
                                }),
                                e
                            );
                        },
                        webglVendorAndRendererKey: function(e) {
                            return (!this.options.excludeWebGLVendorAndRenderer &&
                                this.isWebGlSupported() &&
                                e.addPreprocessedComponent({
                                    key: "webgl_vendor",
                                    value: this.getWebglVendorAndRenderer(),
                                }),
                                e
                            );
                        },
                        adBlockKey: function(e) {
                            return (
                                this.options.excludeAdBlock ||
                                e.addPreprocessedComponent({
                                    key: "adblock",
                                    value: this.getAdBlock(),
                                }),
                                e
                            );
                        },
                        hasLiedLanguagesKey: function(e) {
                            return (
                                this.options.excludeHasLiedLanguages ||
                                e.addPreprocessedComponent({
                                    key: "has_lied_languages",
                                    value: this.getHasLiedLanguages(),
                                }),
                                e
                            );
                        },
                        hasLiedResolutionKey: function(e) {
                            return (
                                this.options.excludeHasLiedResolution ||
                                e.addPreprocessedComponent({
                                    key: "has_lied_resolution",
                                    value: this.getHasLiedResolution(),
                                }),
                                e
                            );
                        },
                        hasLiedOsKey: function(e) {
                            return (
                                this.options.excludeHasLiedOs ||
                                e.addPreprocessedComponent({
                                    key: "has_lied_os",
                                    value: this.getHasLiedOs(),
                                }),
                                e
                            );
                        },
                        hasLiedBrowserKey: function(e) {
                            return (
                                this.options.excludeHasLiedBrowser ||
                                e.addPreprocessedComponent({
                                    key: "has_lied_browser",
                                    value: this.getHasLiedBrowser(),
                                }),
                                e
                            );
                        },
                        fontsKey: function(e, t) {
                            return this.options.excludeJsFonts ?
                                this.flashFontsKey(e, t) :
                                this.jsFontsKey(e, t);
                        },
                        flashFontsKey: function(e, t) {
                            return this.options.excludeFlashFonts ?
                                t(e) :
                                this.hasSwfObjectLoaded() && this.hasMinFlashInstalled() ?
                                "undefined" == typeof this.options.swfPath ?
                                t(e) :
                                void this.loadSwfAndDetectFonts(function(n) {
                                    e.addPreprocessedComponent({
                                            key: "swf_fonts",
                                            value: n.join(";"),
                                        }),
                                        t(e);
                                }) :
                                t(e);
                        },
                        jsFontsKey: function(e, t) {
                            var n = this;
                            return setTimeout(function() {
                                var r = ["monospace", "sans-serif", "serif"],
                                    o = [
                                        "Andale Mono",
                                        "Arial",
                                        "Arial Black",
                                        "Arial Hebrew",
                                        "Arial MT",
                                        "Arial Narrow",
                                        "Arial Rounded MT Bold",
                                        "Arial Unicode MS",
                                        "Bitstream Vera Sans Mono",
                                        "Book Antiqua",
                                        "Bookman Old Style",
                                        "Calibri",
                                        "Cambria",
                                        "Cambria Math",
                                        "Century",
                                        "Century Gothic",
                                        "Century Schoolbook",
                                        "Comic Sans",
                                        "Comic Sans MS",
                                        "Consolas",
                                        "Courier",
                                        "Courier New",
                                        "Garamond",
                                        "Geneva",
                                        "Georgia",
                                        "Helvetica",
                                        "Helvetica Neue",
                                        "Impact",
                                        "Lucida Bright",
                                        "Lucida Calligraphy",
                                        "Lucida Console",
                                        "Lucida Fax",
                                        "LUCIDA GRANDE",
                                        "Lucida Handwriting",
                                        "Lucida Sans",
                                        "Lucida Sans Typewriter",
                                        "Lucida Sans Unicode",
                                        "Microsoft Sans Serif",
                                        "Monaco",
                                        "Monotype Corsiva",
                                        "MS Gothic",
                                        "MS Outlook",
                                        "MS PGothic",
                                        "MS Reference Sans Serif",
                                        "MS Sans Serif",
                                        "MS Serif",
                                        "MYRIAD",
                                        "MYRIAD PRO",
                                        "Palatino",
                                        "Palatino Linotype",
                                        "Segoe Print",
                                        "Segoe Script",
                                        "Segoe UI",
                                        "Segoe UI Light",
                                        "Segoe UI Semibold",
                                        "Segoe UI Symbol",
                                        "Tahoma",
                                        "Times",
                                        "Times New Roman",
                                        "Times New Roman PS",
                                        "Trebuchet MS",
                                        "Verdana",
                                        "Wingdings",
                                        "Wingdings 2",
                                        "Wingdings 3",
                                    ],
                                    i = [
                                        "Abadi MT Condensed Light",
                                        "Academy Engraved LET",
                                        "ADOBE CASLON PRO",
                                        "Adobe Garamond",
                                        "ADOBE GARAMOND PRO",
                                        "Agency FB",
                                        "Aharoni",
                                        "Albertus Extra Bold",
                                        "Albertus Medium",
                                        "Algerian",
                                        "Amazone BT",
                                        "American Typewriter",
                                        "American Typewriter Condensed",
                                        "AmerType Md BT",
                                        "Andalus",
                                        "Angsana New",
                                        "AngsanaUPC",
                                        "Antique Olive",
                                        "Aparajita",
                                        "Apple Chancery",
                                        "Apple Color Emoji",
                                        "Apple SD Gothic Neo",
                                        "Arabic Typesetting",
                                        "ARCHER",
                                        "ARNO PRO",
                                        "Arrus BT",
                                        "Aurora Cn BT",
                                        "AvantGarde Bk BT",
                                        "AvantGarde Md BT",
                                        "AVENIR",
                                        "Ayuthaya",
                                        "Bandy",
                                        "Bangla Sangam MN",
                                        "Bank Gothic",
                                        "BankGothic Md BT",
                                        "Baskerville",
                                        "Baskerville Old Face",
                                        "Batang",
                                        "BatangChe",
                                        "Bauer Bodoni",
                                        "Bauhaus 93",
                                        "Bazooka",
                                        "Bell MT",
                                        "Bembo",
                                        "Benguiat Bk BT",
                                        "Berlin Sans FB",
                                        "Berlin Sans FB Demi",
                                        "Bernard MT Condensed",
                                        "BernhardFashion BT",
                                        "BernhardMod BT",
                                        "Big Caslon",
                                        "BinnerD",
                                        "Blackadder ITC",
                                        "BlairMdITC TT",
                                        "Bodoni 72",
                                        "Bodoni 72 Oldstyle",
                                        "Bodoni 72 Smallcaps",
                                        "Bodoni MT",
                                        "Bodoni MT Black",
                                        "Bodoni MT Condensed",
                                        "Bodoni MT Poster Compressed",
                                        "Bookshelf Symbol 7",
                                        "Boulder",
                                        "Bradley Hand",
                                        "Bradley Hand ITC",
                                        "Bremen Bd BT",
                                        "Britannic Bold",
                                        "Broadway",
                                        "Browallia New",
                                        "BrowalliaUPC",
                                        "Brush Script MT",
                                        "Californian FB",
                                        "Calisto MT",
                                        "Calligrapher",
                                        "Candara",
                                        "CaslonOpnface BT",
                                        "Castellar",
                                        "Centaur",
                                        "Cezanne",
                                        "CG Omega",
                                        "CG Times",
                                        "Chalkboard",
                                        "Chalkboard SE",
                                        "Chalkduster",
                                        "Charlesworth",
                                        "Charter Bd BT",
                                        "Charter BT",
                                        "Chaucer",
                                        "ChelthmITC Bk BT",
                                        "Chiller",
                                        "Clarendon",
                                        "Clarendon Condensed",
                                        "CloisterBlack BT",
                                        "Cochin",
                                        "Colonna MT",
                                        "Constantia",
                                        "Cooper Black",
                                        "Copperplate",
                                        "Copperplate Gothic",
                                        "Copperplate Gothic Bold",
                                        "Copperplate Gothic Light",
                                        "CopperplGoth Bd BT",
                                        "Corbel",
                                        "Cordia New",
                                        "CordiaUPC",
                                        "Cornerstone",
                                        "Coronet",
                                        "Cuckoo",
                                        "Curlz MT",
                                        "DaunPenh",
                                        "Dauphin",
                                        "David",
                                        "DB LCD Temp",
                                        "DELICIOUS",
                                        "Denmark",
                                        "DFKai-SB",
                                        "Didot",
                                        "DilleniaUPC",
                                        "DIN",
                                        "DokChampa",
                                        "Dotum",
                                        "DotumChe",
                                        "Ebrima",
                                        "Edwardian Script ITC",
                                        "Elephant",
                                        "English 111 Vivace BT",
                                        "Engravers MT",
                                        "EngraversGothic BT",
                                        "Eras Bold ITC",
                                        "Eras Demi ITC",
                                        "Eras Light ITC",
                                        "Eras Medium ITC",
                                        "EucrosiaUPC",
                                        "Euphemia",
                                        "Euphemia UCAS",
                                        "EUROSTILE",
                                        "Exotc350 Bd BT",
                                        "FangSong",
                                        "Felix Titling",
                                        "Fixedsys",
                                        "FONTIN",
                                        "Footlight MT Light",
                                        "Forte",
                                        "FrankRuehl",
                                        "Fransiscan",
                                        "Freefrm721 Blk BT",
                                        "FreesiaUPC",
                                        "Freestyle Script",
                                        "French Script MT",
                                        "FrnkGothITC Bk BT",
                                        "Fruitger",
                                        "FRUTIGER",
                                        "Futura",
                                        "Futura Bk BT",
                                        "Futura Lt BT",
                                        "Futura Md BT",
                                        "Futura ZBlk BT",
                                        "FuturaBlack BT",
                                        "Gabriola",
                                        "Galliard BT",
                                        "Gautami",
                                        "Geeza Pro",
                                        "Geometr231 BT",
                                        "Geometr231 Hv BT",
                                        "Geometr231 Lt BT",
                                        "GeoSlab 703 Lt BT",
                                        "GeoSlab 703 XBd BT",
                                        "Gigi",
                                        "Gill Sans",
                                        "Gill Sans MT",
                                        "Gill Sans MT Condensed",
                                        "Gill Sans MT Ext Condensed Bold",
                                        "Gill Sans Ultra Bold",
                                        "Gill Sans Ultra Bold Condensed",
                                        "Gisha",
                                        "Gloucester MT Extra Condensed",
                                        "GOTHAM",
                                        "GOTHAM BOLD",
                                        "Goudy Old Style",
                                        "Goudy Stout",
                                        "GoudyHandtooled BT",
                                        "GoudyOLSt BT",
                                        "Gujarati Sangam MN",
                                        "Gulim",
                                        "GulimChe",
                                        "Gungsuh",
                                        "GungsuhChe",
                                        "Gurmukhi MN",
                                        "Haettenschweiler",
                                        "Harlow Solid Italic",
                                        "Harrington",
                                        "Heather",
                                        "Heiti SC",
                                        "Heiti TC",
                                        "HELV",
                                        "Herald",
                                        "High Tower Text",
                                        "Hiragino Kaku Gothic ProN",
                                        "Hiragino Mincho ProN",
                                        "Hoefler Text",
                                        "Humanst 521 Cn BT",
                                        "Humanst521 BT",
                                        "Humanst521 Lt BT",
                                        "Imprint MT Shadow",
                                        "Incised901 Bd BT",
                                        "Incised901 BT",
                                        "Incised901 Lt BT",
                                        "INCONSOLATA",
                                        "Informal Roman",
                                        "Informal011 BT",
                                        "INTERSTATE",
                                        "IrisUPC",
                                        "Iskoola Pota",
                                        "JasmineUPC",
                                        "Jazz LET",
                                        "Jenson",
                                        "Jester",
                                        "Jokerman",
                                        "Juice ITC",
                                        "Kabel Bk BT",
                                        "Kabel Ult BT",
                                        "Kailasa",
                                        "KaiTi",
                                        "Kalinga",
                                        "Kannada Sangam MN",
                                        "Kartika",
                                        "Kaufmann Bd BT",
                                        "Kaufmann BT",
                                        "Khmer UI",
                                        "KodchiangUPC",
                                        "Kokila",
                                        "Korinna BT",
                                        "Kristen ITC",
                                        "Krungthep",
                                        "Kunstler Script",
                                        "Lao UI",
                                        "Latha",
                                        "Leelawadee",
                                        "Letter Gothic",
                                        "Levenim MT",
                                        "LilyUPC",
                                        "Lithograph",
                                        "Lithograph Light",
                                        "Long Island",
                                        "Lydian BT",
                                        "Magneto",
                                        "Maiandra GD",
                                        "Malayalam Sangam MN",
                                        "Malgun Gothic",
                                        "Mangal",
                                        "Marigold",
                                        "Marion",
                                        "Marker Felt",
                                        "Market",
                                        "Marlett",
                                        "Matisse ITC",
                                        "Matura MT Script Capitals",
                                        "Meiryo",
                                        "Meiryo UI",
                                        "Microsoft Himalaya",
                                        "Microsoft JhengHei",
                                        "Microsoft New Tai Lue",
                                        "Microsoft PhagsPa",
                                        "Microsoft Tai Le",
                                        "Microsoft Uighur",
                                        "Microsoft YaHei",
                                        "Microsoft Yi Baiti",
                                        "MingLiU",
                                        "MingLiU_HKSCS",
                                        "MingLiU_HKSCS-ExtB",
                                        "MingLiU-ExtB",
                                        "Minion",
                                        "Minion Pro",
                                        "Miriam",
                                        "Miriam Fixed",
                                        "Mistral",
                                        "Modern",
                                        "Modern No. 20",
                                        "Mona Lisa Solid ITC TT",
                                        "Mongolian Baiti",
                                        "MONO",
                                        "MoolBoran",
                                        "Mrs Eaves",
                                        "MS LineDraw",
                                        "MS Mincho",
                                        "MS PMincho",
                                        "MS Reference Specialty",
                                        "MS UI Gothic",
                                        "MT Extra",
                                        "MUSEO",
                                        "MV Boli",
                                        "Nadeem",
                                        "Narkisim",
                                        "NEVIS",
                                        "News Gothic",
                                        "News GothicMT",
                                        "NewsGoth BT",
                                        "Niagara Engraved",
                                        "Niagara Solid",
                                        "Noteworthy",
                                        "NSimSun",
                                        "Nyala",
                                        "OCR A Extended",
                                        "Old Century",
                                        "Old English Text MT",
                                        "Onyx",
                                        "Onyx BT",
                                        "OPTIMA",
                                        "Oriya Sangam MN",
                                        "OSAKA",
                                        "OzHandicraft BT",
                                        "Palace Script MT",
                                        "Papyrus",
                                        "Parchment",
                                        "Party LET",
                                        "Pegasus",
                                        "Perpetua",
                                        "Perpetua Titling MT",
                                        "PetitaBold",
                                        "Pickwick",
                                        "Plantagenet Cherokee",
                                        "Playbill",
                                        "PMingLiU",
                                        "PMingLiU-ExtB",
                                        "Poor Richard",
                                        "Poster",
                                        "PosterBodoni BT",
                                        "PRINCETOWN LET",
                                        "Pristina",
                                        "PTBarnum BT",
                                        "Pythagoras",
                                        "Raavi",
                                        "Rage Italic",
                                        "Ravie",
                                        "Ribbon131 Bd BT",
                                        "Rockwell",
                                        "Rockwell Condensed",
                                        "Rockwell Extra Bold",
                                        "Rod",
                                        "Roman",
                                        "Sakkal Majalla",
                                        "Santa Fe LET",
                                        "Savoye LET",
                                        "Sceptre",
                                        "Script",
                                        "Script MT Bold",
                                        "SCRIPTINA",
                                        "Serifa",
                                        "Serifa BT",
                                        "Serifa Th BT",
                                        "ShelleyVolante BT",
                                        "Sherwood",
                                        "Shonar Bangla",
                                        "Showcard Gothic",
                                        "Shruti",
                                        "Signboard",
                                        "SILKSCREEN",
                                        "SimHei",
                                        "Simplified Arabic",
                                        "Simplified Arabic Fixed",
                                        "SimSun",
                                        "SimSun-ExtB",
                                        "Sinhala Sangam MN",
                                        "Sketch Rockwell",
                                        "Skia",
                                        "Small Fonts",
                                        "Snap ITC",
                                        "Snell Roundhand",
                                        "Socket",
                                        "Souvenir Lt BT",
                                        "Staccato222 BT",
                                        "Steamer",
                                        "Stencil",
                                        "Storybook",
                                        "Styllo",
                                        "Subway",
                                        "Swis721 BlkEx BT",
                                        "Swiss911 XCm BT",
                                        "Sylfaen",
                                        "Synchro LET",
                                        "System",
                                        "Tamil Sangam MN",
                                        "Technical",
                                        "Teletype",
                                        "Telugu Sangam MN",
                                        "Tempus Sans ITC",
                                        "Terminal",
                                        "Thonburi",
                                        "Traditional Arabic",
                                        "Trajan",
                                        "TRAJAN PRO",
                                        "Tristan",
                                        "Tubular",
                                        "Tunga",
                                        "Tw Cen MT",
                                        "Tw Cen MT Condensed",
                                        "Tw Cen MT Condensed Extra Bold",
                                        "TypoUpright BT",
                                        "Unicorn",
                                        "Univers",
                                        "Univers CE 55 Medium",
                                        "Univers Condensed",
                                        "Utsaah",
                                        "Vagabond",
                                        "Vani",
                                        "Vijaya",
                                        "Viner Hand ITC",
                                        "VisualUI",
                                        "Vivaldi",
                                        "Vladimir Script",
                                        "Vrinda",
                                        "Westminster",
                                        "WHITNEY",
                                        "Wide Latin",
                                        "ZapfEllipt BT",
                                        "ZapfHumnst BT",
                                        "ZapfHumnst Dm BT",
                                        "Zapfino",
                                        "Zurich BlkEx BT",
                                        "Zurich Ex BT",
                                        "ZWAdobeF",
                                    ];
                                n.options.extendedJsFonts && (o = o.concat(i)),
                                    (o = o.concat(n.options.userDefinedFonts));
                                var a = document.getElementsByTagName("body")[0],
                                    s = document.createElement("div"),
                                    u = document.createElement("div"),
                                    c = {},
                                    l = {},
                                    f = function() {
                                        var e = document.createElement("span");
                                        return (
                                            (e.style.position = "absolute"),
                                            (e.style.left = "-9999px"),
                                            (e.style.fontSize = "72px"),
                                            (e.style.lineHeight = "normal"),
                                            (e.innerHTML = "mmmmmmmmmmlli"),
                                            e
                                        );
                                    },
                                    d = function(e, t) {
                                        var n = f();
                                        return (n.style.fontFamily = "'" + e + "'," + t), n;
                                    },
                                    h = (function() {
                                        for (var e = [], t = 0, n = r.length; t < n; t++) {
                                            var o = f();
                                            (o.style.fontFamily = r[t]), s.appendChild(o), e.push(o);
                                        }
                                        return e;
                                    })();
                                a.appendChild(s);
                                for (var p = 0, g = r.length; p < g; p++)
                                    (c[r[p]] = h[p].offsetWidth), (l[r[p]] = h[p].offsetHeight);
                                var _ = (function() {
                                    for (var e = {}, t = 0, n = o.length; t < n; t++) {
                                        for (var i = [], a = 0, s = r.length; a < s; a++) {
                                            var c = d(o[t], r[a]);
                                            u.appendChild(c), i.push(c);
                                        }
                                        e[o[t]] = i;
                                    }
                                    return e;
                                })();
                                a.appendChild(u);
                                for (var y = [], m = 0, v = o.length; m < v; m++)
                                    (function(e) {
                                        for (var t = !1, n = 0; n < r.length; n++)
                                            if (
                                                (t =
                                                    e[n].offsetWidth !== c[r[n]] ||
                                                    e[n].offsetHeight !== l[r[n]])
                                            )
                                                return t;
                                        return t;
                                    })(_[o[m]]) && y.push(o[m]);
                                a.removeChild(u),
                                    a.removeChild(s),
                                    e.addPreprocessedComponent({ key: "js_fonts", value: y }),
                                    t(e);
                            }, 1);
                        },
                        pluginsKey: function(e) {
                            return (
                                this.options.excludePlugins ||
                                (this.isIE() ?
                                    this.options.excludeIEPlugins ||
                                    e.addPreprocessedComponent({
                                        key: "ie_plugins",
                                        value: this.getIEPlugins(),
                                    }) :
                                    e.addPreprocessedComponent({
                                        key: "regular_plugins",
                                        value: this.getRegularPlugins(),
                                    })),
                                e
                            );
                        },
                        getRegularPlugins: function() {
                            var e = [];
                            if (navigator.plugins)
                                for (var t = 0, n = navigator.plugins.length; t < n; t++)
                                    navigator.plugins[t] && e.push(navigator.plugins[t]);
                            return (
                                this.pluginsShouldBeSorted() &&
                                (e = e.sort(function(e, t) {
                                    return e.name > t.name ? 1 : e.name < t.name ? -1 : 0;
                                })),
                                this.map(
                                    e,
                                    function(e) {
                                        var t = this.map(e, function(e) {
                                            return [e.type, e.suffixes].join("~");
                                        }).join(",");
                                        return [e.name, e.description, t].join("::");
                                    },
                                    this
                                )
                            );
                        },
                        getIEPlugins: function() {
                            var e = [];
                            if (
                                (Object.getOwnPropertyDescriptor &&
                                    Object.getOwnPropertyDescriptor(window, "ActiveXObject")) ||
                                "ActiveXObject" in window
                            ) {
                                var t = [
                                    "AcroPDF.PDF",
                                    "Adodb.Stream",
                                    "AgControl.AgControl",
                                    "DevalVRXCtrl.DevalVRXCtrl.1",
                                    "MacromediaFlashPaper.MacromediaFlashPaper",
                                    "Msxml2.DOMDocument",
                                    "Msxml2.XMLHTTP",
                                    "PDF.PdfCtrl",
                                    "QuickTime.QuickTime",
                                    "QuickTimeCheckObject.QuickTimeCheck.1",
                                    "RealPlayer",
                                    "RealPlayer.RealPlayer(tm) ActiveX Control (32-bit)",
                                    "RealVideo.RealVideo(tm) ActiveX Control (32-bit)",
                                    "Scripting.Dictionary",
                                    "SWCtl.SWCtl",
                                    "Shell.UIHelper",
                                    "ShockwaveFlash.ShockwaveFlash",
                                    "Skype.Detection",
                                    "TDCCtl.TDCCtl",
                                    "WMPlayer.OCX",
                                    "rmocx.RealPlayer G2 Control",
                                    "rmocx.RealPlayer G2 Control.1",
                                ];
                                e = this.map(t, function(e) {
                                    try {
                                        return new window.ActiveXObject(e), e;
                                    } catch (t) {
                                        return null;
                                    }
                                });
                            }
                            return (
                                navigator.plugins && (e = e.concat(this.getRegularPlugins())), e
                            );
                        },
                        pluginsShouldBeSorted: function() {
                            for (
                                var e = !1, t = 0, n = this.options.sortPluginsFor.length; t < n; t++
                            ) {
                                var r = this.options.sortPluginsFor[t];
                                if (navigator.userAgent.match(r)) {
                                    e = !0;
                                    break;
                                }
                            }
                            return e;
                        },
                        touchSupportKey: function(e) {
                            return (
                                this.options.excludeTouchSupport ||
                                e.addPreprocessedComponent({
                                    key: "touch_support",
                                    value: this.getTouchSupport(),
                                }),
                                e
                            );
                        },
                        hardwareConcurrencyKey: function(e) {
                            return (
                                this.options.excludeHardwareConcurrency ||
                                e.addPreprocessedComponent({
                                    key: "hardware_concurrency",
                                    value: this.getHardwareConcurrency(),
                                }),
                                e
                            );
                        },
                        hasSessionStorage: function() {
                            try {
                                return !!window.sessionStorage;
                            } catch (e) {
                                return !0;
                            }
                        },
                        hasLocalStorage: function() {
                            try {
                                return !!window.localStorage;
                            } catch (e) {
                                return !0;
                            }
                        },
                        hasIndexedDB: function() {
                            try {
                                return !!window.indexedDB;
                            } catch (e) {
                                return !0;
                            }
                        },
                        getHardwareConcurrency: function() {
                            return navigator.hardwareConcurrency ?
                                navigator.hardwareConcurrency :
                                "unknown";
                        },
                        getNavigatorCpuClass: function() {
                            return navigator.cpuClass ? navigator.cpuClass : "unknown";
                        },
                        getNavigatorPlatform: function() {
                            return navigator.platform ? navigator.platform : "unknown";
                        },
                        getDoNotTrack: function() {
                            return navigator.doNotTrack ?
                                navigator.doNotTrack :
                                navigator.msDoNotTrack ?
                                navigator.msDoNotTrack :
                                window.doNotTrack ?
                                window.doNotTrack :
                                "unknown";
                        },
                        getTouchSupport: function() {
                            var e = 0,
                                t = !1;
                            "undefined" != typeof navigator.maxTouchPoints ?
                                (e = navigator.maxTouchPoints) :
                                "undefined" != typeof navigator.msMaxTouchPoints &&
                                (e = navigator.msMaxTouchPoints);
                            try {
                                document.createEvent("TouchEvent"), (t = !0);
                            } catch (n) {}
                            return [e, t, "ontouchstart" in window];
                        },
                        getCanvasFp: function() {
                            var e = [],
                                t = document.createElement("canvas");
                            (t.width = 2e3), (t.height = 200), (t.style.display = "inline");
                            var n = t.getContext("2d");
                            n.rect(0, 0, 10, 10), n.rect(2, 2, 6, 6);
                            try {
                                e.push(
                                    "canvas winding:" +
                                    (!1 === n.isPointInPath(5, 5, "evenodd") ? "yes" : "no")
                                );
                            } catch (r) {}
                            return (
                                (n.textBaseline = "alphabetic"),
                                (n.fillStyle = "#f60"),
                                n.fillRect(125, 1, 62, 20),
                                (n.fillStyle = "#069"),
                                this.options.dontUseFakeFontInCanvas ?
                                (n.font = "11pt Arial") :
                                (n.font = "11pt no-real-font-123"),
                                n.fillText("Cwm fjordbank glyphs vext quiz, �쁼", 2, 15),
                                (n.fillStyle = "rgba(102, 204, 0, 0.2)"),
                                (n.font = "18pt Arial"),
                                n.fillText("Cwm fjordbank glyphs vext quiz, �쁼", 4, 45),
                                (n.globalCompositeOperation = "multiply"),
                                (n.fillStyle = "rgb(255,0,255)"),
                                n.beginPath(),
                                n.arc(50, 50, 50, 0, 2 * Math.PI, !0),
                                n.closePath(),
                                n.fill(),
                                (n.fillStyle = "rgb(0,255,255)"),
                                n.beginPath(),
                                n.arc(100, 50, 50, 0, 2 * Math.PI, !0),
                                n.closePath(),
                                n.fill(),
                                (n.fillStyle = "rgb(255,255,0)"),
                                n.beginPath(),
                                n.arc(75, 100, 50, 0, 2 * Math.PI, !0),
                                n.closePath(),
                                n.fill(),
                                (n.fillStyle = "rgb(255,0,255)"),
                                n.arc(75, 75, 75, 0, 2 * Math.PI, !0),
                                n.arc(75, 75, 25, 0, 2 * Math.PI, !0),
                                n.fill("evenodd"),
                                t.toDataURL && e.push("canvas fp:" + t.toDataURL()),
                                e.join("~")
                            );
                        },
                        getWebglFp: function() {
                            var e,
                                t = function(t) {
                                    return (
                                        e.clearColor(0, 0, 0, 1),
                                        e.enable(e.DEPTH_TEST),
                                        e.depthFunc(e.LEQUAL),
                                        e.clear(e.COLOR_BUFFER_BIT | e.DEPTH_BUFFER_BIT),
                                        "[" + t[0] + ", " + t[1] + "]"
                                    );
                                };
                            if (!(e = this.getWebglCanvas())) return null;
                            var n = [];
                            try {
                                var r = e.createBuffer();
                            } catch (c) {
                                throw ((c.message += "|getWebglFp_2.1|"), c);
                            }
                            try {
                                e.bindBuffer(e.ARRAY_BUFFER, r);
                            } catch (c) {
                                throw ((c.message += "|getWebglFp_2.2|"), c);
                            }
                            try {
                                var o = new Float32Array([-0.2, -0.9, 0, 0.4, -0.26, 0, 0, 0.732134444, 0, ]);
                            } catch (c) {
                                throw ((c.message += "|getWebglFp_2.3|"), c);
                            }
                            try {
                                e.bufferData(e.ARRAY_BUFFER, o, e.STATIC_DRAW);
                            } catch (c) {
                                throw ((c.message += "|getWebglFp_2.4|"), c);
                            }
                            try {
                                r.itemSize = 3;
                            } catch (c) {
                                throw ((c.message += "|getWebglFp_2.5|"), c);
                            }
                            try {
                                r.numItems = 3;
                            } catch (c) {
                                throw ((c.message += "|getWebglFp_2.6|"), c);
                            }
                            try {
                                var i = e.createProgram();
                            } catch (c) {
                                throw ((c.message += "|getWebglFp_2.7|"), c);
                            }
                            try {
                                var a = e.createShader(e.VERTEX_SHADER);
                            } catch (c) {
                                throw ((c.message += "|getWebglFp_2.8|"), c);
                            }
                            try {
                                e.shaderSource(
                                    a,
                                    "attribute vec2 attrVertex;varying vec2 varyinTexCoordinate;uniform vec2 uniformOffset;void main(){varyinTexCoordinate=attrVertex+uniformOffset;gl_Position=vec4(attrVertex,0,1);}"
                                );
                            } catch (c) {
                                throw ((c.message += "|getWebglFp_2.9|"), c);
                            }
                            try {
                                e.compileShader(a);
                            } catch (c) {
                                throw ((c.message += "|getWebglFp_2.10|"), c);
                            }
                            try {
                                var s = e.createShader(e.FRAGMENT_SHADER);
                            } catch (c) {
                                throw ((c.message += "|getWebglFp_2.11|"), c);
                            }
                            try {
                                e.shaderSource(
                                    s,
                                    "precision mediump float;varying vec2 varyinTexCoordinate;void main() {gl_FragColor=vec4(varyinTexCoordinate,0,1);}"
                                );
                            } catch (c) {
                                throw ((c.message += "|getWebglFp_2.12|"), c);
                            }
                            try {
                                e.compileShader(s);
                            } catch (c) {
                                throw ((c.message += "|getWebglFp_2.13|"), c);
                            }
                            try {
                                e.attachShader(i, a);
                            } catch (c) {
                                throw ((c.message += "|getWebglFp_2.14|"), c);
                            }
                            try {
                                e.attachShader(i, s);
                            } catch (c) {
                                throw ((c.message += "|getWebglFp_2.15|"), c);
                            }
                            try {
                                e.linkProgram(i);
                            } catch (c) {
                                throw ((c.message += "|getWebglFp_2.16|"), c);
                            }
                            try {
                                e.useProgram(i);
                            } catch (c) {
                                throw ((c.message += "|getWebglFp_2.17|"), c);
                            }
                            try {
                                i.vertexPosAttrib = e.getAttribLocation(i, "attrVertex");
                            } catch (c) {
                                throw ((c.message += "|getWebglFp_2.18|"), c);
                            }
                            try {
                                i.offsetUniform = e.getUniformLocation(i, "uniformOffset");
                            } catch (c) {
                                throw ((c.message += "|getWebglFp_2.19|"), c);
                            }
                            try {
                                e.enableVertexAttribArray(i.vertexPosArray);
                            } catch (c) {
                                throw ((c.message += "|getWebglFp_2.20|"), c);
                            }
                            try {
                                e.vertexAttribPointer(
                                    i.vertexPosAttrib,
                                    r.itemSize,
                                    e.FLOAT, !1,
                                    0,
                                    0
                                );
                            } catch (c) {
                                throw ((c.message += "|getWebglFp_2.21|"), c);
                            }
                            try {
                                e.uniform2f(i.offsetUniform, 1, 1);
                            } catch (c) {
                                throw ((c.message += "|getWebglFp_2.22|"), c);
                            }
                            try {
                                e.drawArrays(e.TRIANGLE_STRIP, 0, r.numItems);
                            } catch (c) {
                                throw ((c.message += "|getWebglFp_2.23|"), c);
                            }
                            try {
                                e.canvas && e.canvas.toDataURL && n.push(e.canvas.toDataURL()),
                                    n.push(
                                        "extensions:" + (e.getSupportedExtensions() || []).join(";")
                                    ),
                                    n.push(
                                        "webgl aliased line width range:" +
                                        t(e.getParameter(e.ALIASED_LINE_WIDTH_RANGE))
                                    ),
                                    n.push(
                                        "webgl aliased point size range:" +
                                        t(e.getParameter(e.ALIASED_POINT_SIZE_RANGE))
                                    ),
                                    n.push("webgl alpha bits:" + e.getParameter(e.ALPHA_BITS)),
                                    n.push(
                                        "webgl antialiasing:" +
                                        (e.getContextAttributes().antialias ? "yes" : "no")
                                    ),
                                    n.push("webgl blue bits:" + e.getParameter(e.BLUE_BITS)),
                                    n.push("webgl depth bits:" + e.getParameter(e.DEPTH_BITS)),
                                    n.push("webgl green bits:" + e.getParameter(e.GREEN_BITS)),
                                    n.push(
                                        "webgl max anisotropy:" +
                                        (function(e) {
                                            var t =
                                                e.getExtension("EXT_texture_filter_anisotropic") ||
                                                e.getExtension(
                                                    "WEBKIT_EXT_texture_filter_anisotropic"
                                                ) ||
                                                e.getExtension("MOZ_EXT_texture_filter_anisotropic");
                                            if (t) {
                                                var n = e.getParameter(
                                                    t.MAX_TEXTURE_MAX_ANISOTROPY_EXT
                                                );
                                                return 0 === n && (n = 2), n;
                                            }
                                            return null;
                                        })(e)
                                    ),
                                    n.push(
                                        "webgl max combined texture image units:" +
                                        e.getParameter(e.MAX_COMBINED_TEXTURE_IMAGE_UNITS)
                                    ),
                                    n.push(
                                        "webgl max cube map texture size:" +
                                        e.getParameter(e.MAX_CUBE_MAP_TEXTURE_SIZE)
                                    ),
                                    n.push(
                                        "webgl max fragment uniform vectors:" +
                                        e.getParameter(e.MAX_FRAGMENT_UNIFORM_VECTORS)
                                    ),
                                    n.push(
                                        "webgl max render buffer size:" +
                                        e.getParameter(e.MAX_RENDERBUFFER_SIZE)
                                    ),
                                    n.push(
                                        "webgl max texture image units:" +
                                        e.getParameter(e.MAX_TEXTURE_IMAGE_UNITS)
                                    ),
                                    n.push(
                                        "webgl max texture size:" +
                                        e.getParameter(e.MAX_TEXTURE_SIZE)
                                    ),
                                    n.push(
                                        "webgl max varying vectors:" +
                                        e.getParameter(e.MAX_VARYING_VECTORS)
                                    ),
                                    n.push(
                                        "webgl max vertex attribs:" +
                                        e.getParameter(e.MAX_VERTEX_ATTRIBS)
                                    ),
                                    n.push(
                                        "webgl max vertex texture image units:" +
                                        e.getParameter(e.MAX_VERTEX_TEXTURE_IMAGE_UNITS)
                                    ),
                                    n.push(
                                        "webgl max vertex uniform vectors:" +
                                        e.getParameter(e.MAX_VERTEX_UNIFORM_VECTORS)
                                    ),
                                    n.push(
                                        "webgl max viewport dims:" +
                                        t(e.getParameter(e.MAX_VIEWPORT_DIMS))
                                    ),
                                    n.push("webgl red bits:" + e.getParameter(e.RED_BITS)),
                                    n.push("webgl renderer:" + e.getParameter(e.RENDERER)),
                                    n.push(
                                        "webgl shading language version:" +
                                        e.getParameter(e.SHADING_LANGUAGE_VERSION)
                                    ),
                                    n.push(
                                        "webgl stencil bits:" + e.getParameter(e.STENCIL_BITS)
                                    ),
                                    n.push("webgl vendor:" + e.getParameter(e.VENDOR)),
                                    n.push("webgl version:" + e.getParameter(e.VERSION));
                            } catch (c) {
                                throw ((c.message += "|getWebglFp_3|"), c);
                            }
                            try {
                                var u = e.getExtension("WEBGL_debug_renderer_info");
                                u &&
                                    (n.push(
                                            "webgl unmasked vendor:" +
                                            e.getParameter(u.UNMASKED_VENDOR_WEBGL)
                                        ),
                                        n.push(
                                            "webgl unmasked renderer:" +
                                            e.getParameter(u.UNMASKED_RENDERER_WEBGL)
                                        ));
                            } catch (l) {}
                            if (!e.getShaderPrecisionFormat) return n.join("~");
                            try {
                                n.push(
                                        "webgl vertex shader high float precision:" +
                                        e.getShaderPrecisionFormat(e.VERTEX_SHADER, e.HIGH_FLOAT)
                                        .precision
                                    ),
                                    n.push(
                                        "webgl vertex shader high float precision rangeMin:" +
                                        e.getShaderPrecisionFormat(e.VERTEX_SHADER, e.HIGH_FLOAT)
                                        .rangeMin
                                    ),
                                    n.push(
                                        "webgl vertex shader high float precision rangeMax:" +
                                        e.getShaderPrecisionFormat(e.VERTEX_SHADER, e.HIGH_FLOAT)
                                        .rangeMax
                                    ),
                                    n.push(
                                        "webgl vertex shader medium float precision:" +
                                        e.getShaderPrecisionFormat(
                                            e.VERTEX_SHADER,
                                            e.MEDIUM_FLOAT
                                        ).precision
                                    ),
                                    n.push(
                                        "webgl vertex shader medium float precision rangeMin:" +
                                        e.getShaderPrecisionFormat(
                                            e.VERTEX_SHADER,
                                            e.MEDIUM_FLOAT
                                        ).rangeMin
                                    ),
                                    n.push(
                                        "webgl vertex shader medium float precision rangeMax:" +
                                        e.getShaderPrecisionFormat(
                                            e.VERTEX_SHADER,
                                            e.MEDIUM_FLOAT
                                        ).rangeMax
                                    ),
                                    n.push(
                                        "webgl vertex shader low float precision:" +
                                        e.getShaderPrecisionFormat(e.VERTEX_SHADER, e.LOW_FLOAT)
                                        .precision
                                    ),
                                    n.push(
                                        "webgl vertex shader low float precision rangeMin:" +
                                        e.getShaderPrecisionFormat(e.VERTEX_SHADER, e.LOW_FLOAT)
                                        .rangeMin
                                    ),
                                    n.push(
                                        "webgl vertex shader low float precision rangeMax:" +
                                        e.getShaderPrecisionFormat(e.VERTEX_SHADER, e.LOW_FLOAT)
                                        .rangeMax
                                    ),
                                    n.push(
                                        "webgl fragment shader high float precision:" +
                                        e.getShaderPrecisionFormat(
                                            e.FRAGMENT_SHADER,
                                            e.HIGH_FLOAT
                                        ).precision
                                    ),
                                    n.push(
                                        "webgl fragment shader high float precision rangeMin:" +
                                        e.getShaderPrecisionFormat(
                                            e.FRAGMENT_SHADER,
                                            e.HIGH_FLOAT
                                        ).rangeMin
                                    ),
                                    n.push(
                                        "webgl fragment shader high float precision rangeMax:" +
                                        e.getShaderPrecisionFormat(
                                            e.FRAGMENT_SHADER,
                                            e.HIGH_FLOAT
                                        ).rangeMax
                                    ),
                                    n.push(
                                        "webgl fragment shader medium float precision:" +
                                        e.getShaderPrecisionFormat(
                                            e.FRAGMENT_SHADER,
                                            e.MEDIUM_FLOAT
                                        ).precision
                                    ),
                                    n.push(
                                        "webgl fragment shader medium float precision rangeMin:" +
                                        e.getShaderPrecisionFormat(
                                            e.FRAGMENT_SHADER,
                                            e.MEDIUM_FLOAT
                                        ).rangeMin
                                    ),
                                    n.push(
                                        "webgl fragment shader medium float precision rangeMax:" +
                                        e.getShaderPrecisionFormat(
                                            e.FRAGMENT_SHADER,
                                            e.MEDIUM_FLOAT
                                        ).rangeMax
                                    ),
                                    n.push(
                                        "webgl fragment shader low float precision:" +
                                        e.getShaderPrecisionFormat(e.FRAGMENT_SHADER, e.LOW_FLOAT)
                                        .precision
                                    ),
                                    n.push(
                                        "webgl fragment shader low float precision rangeMin:" +
                                        e.getShaderPrecisionFormat(e.FRAGMENT_SHADER, e.LOW_FLOAT)
                                        .rangeMin
                                    ),
                                    n.push(
                                        "webgl fragment shader low float precision rangeMax:" +
                                        e.getShaderPrecisionFormat(e.FRAGMENT_SHADER, e.LOW_FLOAT)
                                        .rangeMax
                                    ),
                                    n.push(
                                        "webgl vertex shader high int precision:" +
                                        e.getShaderPrecisionFormat(e.VERTEX_SHADER, e.HIGH_INT)
                                        .precision
                                    ),
                                    n.push(
                                        "webgl vertex shader high int precision rangeMin:" +
                                        e.getShaderPrecisionFormat(e.VERTEX_SHADER, e.HIGH_INT)
                                        .rangeMin
                                    ),
                                    n.push(
                                        "webgl vertex shader high int precision rangeMax:" +
                                        e.getShaderPrecisionFormat(e.VERTEX_SHADER, e.HIGH_INT)
                                        .rangeMax
                                    ),
                                    n.push(
                                        "webgl vertex shader medium int precision:" +
                                        e.getShaderPrecisionFormat(e.VERTEX_SHADER, e.MEDIUM_INT)
                                        .precision
                                    ),
                                    n.push(
                                        "webgl vertex shader medium int precision rangeMin:" +
                                        e.getShaderPrecisionFormat(e.VERTEX_SHADER, e.MEDIUM_INT)
                                        .rangeMin
                                    ),
                                    n.push(
                                        "webgl vertex shader medium int precision rangeMax:" +
                                        e.getShaderPrecisionFormat(e.VERTEX_SHADER, e.MEDIUM_INT)
                                        .rangeMax
                                    ),
                                    n.push(
                                        "webgl vertex shader low int precision:" +
                                        e.getShaderPrecisionFormat(e.VERTEX_SHADER, e.LOW_INT)
                                        .precision
                                    ),
                                    n.push(
                                        "webgl vertex shader low int precision rangeMin:" +
                                        e.getShaderPrecisionFormat(e.VERTEX_SHADER, e.LOW_INT)
                                        .rangeMin
                                    ),
                                    n.push(
                                        "webgl vertex shader low int precision rangeMax:" +
                                        e.getShaderPrecisionFormat(e.VERTEX_SHADER, e.LOW_INT)
                                        .rangeMax
                                    ),
                                    n.push(
                                        "webgl fragment shader high int precision:" +
                                        e.getShaderPrecisionFormat(e.FRAGMENT_SHADER, e.HIGH_INT)
                                        .precision
                                    ),
                                    n.push(
                                        "webgl fragment shader high int precision rangeMin:" +
                                        e.getShaderPrecisionFormat(e.FRAGMENT_SHADER, e.HIGH_INT)
                                        .rangeMin
                                    ),
                                    n.push(
                                        "webgl fragment shader high int precision rangeMax:" +
                                        e.getShaderPrecisionFormat(e.FRAGMENT_SHADER, e.HIGH_INT)
                                        .rangeMax
                                    ),
                                    n.push(
                                        "webgl fragment shader medium int precision:" +
                                        e.getShaderPrecisionFormat(
                                            e.FRAGMENT_SHADER,
                                            e.MEDIUM_INT
                                        ).precision
                                    ),
                                    n.push(
                                        "webgl fragment shader medium int precision rangeMin:" +
                                        e.getShaderPrecisionFormat(
                                            e.FRAGMENT_SHADER,
                                            e.MEDIUM_INT
                                        ).rangeMin
                                    ),
                                    n.push(
                                        "webgl fragment shader medium int precision rangeMax:" +
                                        e.getShaderPrecisionFormat(
                                            e.FRAGMENT_SHADER,
                                            e.MEDIUM_INT
                                        ).rangeMax
                                    ),
                                    n.push(
                                        "webgl fragment shader low int precision:" +
                                        e.getShaderPrecisionFormat(e.FRAGMENT_SHADER, e.LOW_INT)
                                        .precision
                                    ),
                                    n.push(
                                        "webgl fragment shader low int precision rangeMin:" +
                                        e.getShaderPrecisionFormat(e.FRAGMENT_SHADER, e.LOW_INT)
                                        .rangeMin
                                    ),
                                    n.push(
                                        "webgl fragment shader low int precision rangeMax:" +
                                        e.getShaderPrecisionFormat(e.FRAGMENT_SHADER, e.LOW_INT)
                                        .rangeMax
                                    );
                            } catch (c) {
                                throw ((c.message += "|getWebglFp_4|"), c);
                            }
                            return n.join("~");
                        },
                        getWebglVendorAndRenderer: function() {
                            try {
                                var e = this.getWebglCanvas(),
                                    t = e.getExtension("WEBGL_debug_renderer_info");
                                return (
                                    e.getParameter(t.UNMASKED_VENDOR_WEBGL) +
                                    "~" +
                                    e.getParameter(t.UNMASKED_RENDERER_WEBGL)
                                );
                            } catch (n) {
                                return "";
                            }
                        },
                        getAdBlock: function() {
                            var e = document.createElement("div");
                            (e.innerHTML = "&nbsp;"), (e.className = "adsbox");
                            var t = !1;
                            try {
                                document.body.appendChild(e),
                                    (t =
                                        0 ===
                                        document.getElementsByClassName("adsbox")[0].offsetHeight),
                                    document.body.removeChild(e);
                            } catch (n) {
                                t = !1;
                            }
                            return t;
                        },
                        getHasLiedLanguages: function() {
                            if ("undefined" != typeof navigator.languages)
                                try {
                                    if (
                                        navigator.languages[0].substr(0, 2) !==
                                        navigator.language.substr(0, 2)
                                    )
                                        return !0;
                                } catch (e) {
                                    return !0;
                                }
                            return !1;
                        },
                        getHasLiedResolution: function() {
                            return (
                                window.screen.width < window.screen.availWidth ||
                                window.screen.height < window.screen.availHeight
                            );
                        },
                        getHasLiedOs: function() {
                            var e,
                                t = navigator.userAgent.toLowerCase(),
                                n = navigator.oscpu,
                                r = navigator.platform.toLowerCase();
                            e =
                                t.indexOf("windows phone") >= 0 ?
                                "Windows Phone" :
                                t.indexOf("win") >= 0 ?
                                "Windows" :
                                t.indexOf("android") >= 0 ?
                                "Android" :
                                t.indexOf("linux") >= 0 ?
                                "Linux" :
                                t.indexOf("iphone") >= 0 || t.indexOf("ipad") >= 0 ?
                                "iOS" :
                                t.indexOf("mac") >= 0 ?
                                "Mac" :
                                "Other";
                            if (
                                ("ontouchstart" in window ||
                                    navigator.maxTouchPoints > 0 ||
                                    navigator.msMaxTouchPoints > 0) &&
                                "Windows Phone" !== e &&
                                "Android" !== e &&
                                "iOS" !== e &&
                                "Other" !== e
                            )
                                return !0;
                            if (void 0 !== n) {
                                if (
                                    ((n = n.toLowerCase()),
                                        n.indexOf("win") >= 0 &&
                                        "Windows" !== e &&
                                        "Windows Phone" !== e)
                                )
                                    return !0;
                                if (n.indexOf("linux") >= 0 && "Linux" !== e && "Android" !== e)
                                    return !0;
                                if (n.indexOf("mac") >= 0 && "Mac" !== e && "iOS" !== e)
                                    return !0;
                                if (
                                    (-1 === n.indexOf("win") &&
                                        -1 === n.indexOf("linux") &&
                                        -1 === n.indexOf("mac")) !=
                                    ("Other" === e)
                                )
                                    return !0;
                            }
                            return (
                                (r.indexOf("win") >= 0 &&
                                    "Windows" !== e &&
                                    "Windows Phone" !== e) ||
                                ((r.indexOf("linux") >= 0 ||
                                        r.indexOf("android") >= 0 ||
                                        r.indexOf("pike") >= 0) &&
                                    "Linux" !== e &&
                                    "Android" !== e) ||
                                ((r.indexOf("mac") >= 0 ||
                                        r.indexOf("ipad") >= 0 ||
                                        r.indexOf("ipod") >= 0 ||
                                        r.indexOf("iphone") >= 0) &&
                                    "Mac" !== e &&
                                    "iOS" !== e) ||
                                (-1 === r.indexOf("win") &&
                                    -1 === r.indexOf("linux") &&
                                    -1 === r.indexOf("mac")) !=
                                ("Other" === e) ||
                                ("undefined" == typeof navigator.plugins &&
                                    "Windows" !== e &&
                                    "Windows Phone" !== e)
                            );
                        },
                        getHasLiedBrowser: function() {
                            var e,
                                t = navigator.userAgent.toLowerCase(),
                                n = navigator.productSub;
                            if (
                                ("Chrome" ===
                                    (e =
                                        t.indexOf("firefox") >= 0 ?
                                        "Firefox" :
                                        t.indexOf("opera") >= 0 || t.indexOf("opr") >= 0 ?
                                        "Opera" :
                                        t.indexOf("chrome") >= 0 ?
                                        "Chrome" :
                                        t.indexOf("safari") >= 0 ?
                                        "Safari" :
                                        t.indexOf("trident") >= 0 ?
                                        "Internet Explorer" :
                                        "Other") ||
                                    "Safari" === e ||
                                    "Opera" === e) &&
                                "20030107" !== n
                            )
                                return !0;
                            var r = eval.toString().length;
                            if (
                                37 === r &&
                                "Safari" !== e &&
                                "Firefox" !== e &&
                                "Other" !== e
                            )
                                return !0;
                            if (39 === r && "Internet Explorer" !== e && "Other" !== e)
                                return !0;
                            if (33 === r && "Chrome" !== e && "Opera" !== e && "Other" !== e)
                                return !0;
                            var o;
                            try {
                                throw "a";
                            } catch (i) {
                                try {
                                    i.toSource(), (o = !0);
                                } catch (a) {
                                    o = !1;
                                }
                            }
                            return !(!o || "Firefox" === e || "Other" === e);
                        },
                        isCanvasSupported: function() {
                            var e = document.createElement("canvas");
                            return !(!e.getContext || !e.getContext("2d"));
                        },
                        isWebGlSupported: function() {
                            if (!this.isCanvasSupported()) return !1;
                            var e = this.getWebglCanvas();
                            return !!window.WebGLRenderingContext && !!e;
                        },
                        isIE: function() {
                            return (
                                "Microsoft Internet Explorer" === navigator.appName ||
                                !(
                                    "Netscape" !== navigator.appName ||
                                    !/Trident/.test(navigator.userAgent)
                                )
                            );
                        },
                        hasSwfObjectLoaded: function() {
                            return "undefined" != typeof window.swfobject;
                        },
                        hasMinFlashInstalled: function() {
                            return window.swfobject.hasFlashPlayerVersion("9.0.0");
                        },
                        addFlashDivNode: function() {
                            var e = document.createElement("div");
                            e.setAttribute("id", this.options.swfContainerId),
                                document.body.appendChild(e);
                        },
                        loadSwfAndDetectFonts: function(e) {
                            window.___fp_swf_loaded = function(t) {
                                e(t);
                            };
                            var t = this.options.swfContainerId;
                            this.addFlashDivNode();
                            var n = { onReady: "___fp_swf_loaded" },
                                r = { allowScriptAccess: "always", menu: "false" };
                            window.swfobject.embedSWF(
                                this.options.swfPath,
                                t,
                                "1",
                                "1",
                                "9.0.0", !1,
                                n,
                                r, {}
                            );
                        },
                        getWebglCanvas: function() {
                            try {
                                var e = document.createElement("canvas"),
                                    t = null;
                                try {
                                    t =
                                        e.getContext("webgl") || e.getContext("experimental-webgl");
                                } catch (n) {}
                                return t || (t = null), t;
                            } catch (r) {
                                throw ((r.message += "|getWebglCanvas|"), r);
                            }
                        },
                        each: function(e, t, n) {
                            if (null !== e)
                                if (this.nativeForEach && e.forEach === this.nativeForEach)
                                    e.forEach(t, n);
                                else if (e.length === +e.length) {
                                for (var r = 0, o = e.length; r < o; r++)
                                    if (t.call(n, e[r], r, e) === {}) return;
                            } else
                                for (var i in e)
                                    if (e.hasOwnProperty(i) && t.call(n, e[i], i, e) === {})
                                        return;
                        },
                        map: function(e, t, n) {
                            var r = [];
                            return null == e ?
                                r :
                                this.nativeMap && e.map === this.nativeMap ?
                                e.map(t, n) :
                                (this.each(e, function(e, o, i) {
                                        r[r.length] = t.call(n, e, o, i);
                                    }),
                                    r);
                        },
                        x64Add: function(e, t) {
                            (e = [e[0] >>> 16, 65535 & e[0], e[1] >>> 16, 65535 & e[1]]),
                            (t = [t[0] >>> 16, 65535 & t[0], t[1] >>> 16, 65535 & t[1]]);
                            var n = [0, 0, 0, 0];
                            return (
                                (n[3] += e[3] + t[3]),
                                (n[2] += n[3] >>> 16),
                                (n[3] &= 65535),
                                (n[2] += e[2] + t[2]),
                                (n[1] += n[2] >>> 16),
                                (n[2] &= 65535),
                                (n[1] += e[1] + t[1]),
                                (n[0] += n[1] >>> 16),
                                (n[1] &= 65535),
                                (n[0] += e[0] + t[0]),
                                (n[0] &= 65535), [(n[0] << 16) | n[1], (n[2] << 16) | n[3]]
                            );
                        },
                        x64Multiply: function(e, t) {
                            (e = [e[0] >>> 16, 65535 & e[0], e[1] >>> 16, 65535 & e[1]]),
                            (t = [t[0] >>> 16, 65535 & t[0], t[1] >>> 16, 65535 & t[1]]);
                            var n = [0, 0, 0, 0];
                            return (
                                (n[3] += e[3] * t[3]),
                                (n[2] += n[3] >>> 16),
                                (n[3] &= 65535),
                                (n[2] += e[2] * t[3]),
                                (n[1] += n[2] >>> 16),
                                (n[2] &= 65535),
                                (n[2] += e[3] * t[2]),
                                (n[1] += n[2] >>> 16),
                                (n[2] &= 65535),
                                (n[1] += e[1] * t[3]),
                                (n[0] += n[1] >>> 16),
                                (n[1] &= 65535),
                                (n[1] += e[2] * t[2]),
                                (n[0] += n[1] >>> 16),
                                (n[1] &= 65535),
                                (n[1] += e[3] * t[1]),
                                (n[0] += n[1] >>> 16),
                                (n[1] &= 65535),
                                (n[0] += e[0] * t[3] + e[1] * t[2] + e[2] * t[1] + e[3] * t[0]),
                                (n[0] &= 65535), [(n[0] << 16) | n[1], (n[2] << 16) | n[3]]
                            );
                        },
                        x64Rotl: function(e, t) {
                            return (
                                (t %= 64),
                                32 === t ?
                                [e[1], e[0]] :
                                t < 32 ?
                                [
                                    (e[0] << t) | (e[1] >>> (32 - t)),
                                    (e[1] << t) | (e[0] >>> (32 - t)),
                                ] :
                                ((t -= 32), [
                                    (e[1] << t) | (e[0] >>> (32 - t)),
                                    (e[0] << t) | (e[1] >>> (32 - t)),
                                ])
                            );
                        },
                        x64LeftShift: function(e, t) {
                            return (
                                (t %= 64),
                                0 === t ?
                                e :
                                t < 32 ?
                                [(e[0] << t) | (e[1] >>> (32 - t)), e[1] << t] :
                                [e[1] << (t - 32), 0]
                            );
                        },
                        x64Xor: function(e, t) {
                            return [e[0] ^ t[0], e[1] ^ t[1]];
                        },
                        x64Fmix: function(e) {
                            return (
                                (e = this.x64Xor(e, [0, e[0] >>> 1])),
                                (e = this.x64Multiply(e, [4283543511, 3981806797])),
                                (e = this.x64Xor(e, [0, e[0] >>> 1])),
                                (e = this.x64Multiply(e, [3301882366, 444984403])),
                                (e = this.x64Xor(e, [0, e[0] >>> 1]))
                            );
                        },
                        x64hash128: function(e, t) {
                            (e = e || ""), (t = t || 0);
                            for (
                                var n = e.length % 16,
                                    r = e.length - n,
                                    o = [0, t],
                                    i = [0, t],
                                    a = [0, 0],
                                    s = [0, 0],
                                    u = [2277735313, 289559509],
                                    c = [1291169091, 658871167],
                                    l = 0; l < r; l += 16
                            )
                                (a = [
                                    (255 & e.charCodeAt(l + 4)) |
                                    ((255 & e.charCodeAt(l + 5)) << 8) |
                                    ((255 & e.charCodeAt(l + 6)) << 16) |
                                    ((255 & e.charCodeAt(l + 7)) << 24),
                                    (255 & e.charCodeAt(l)) |
                                    ((255 & e.charCodeAt(l + 1)) << 8) |
                                    ((255 & e.charCodeAt(l + 2)) << 16) |
                                    ((255 & e.charCodeAt(l + 3)) << 24),
                                ]),
                                (s = [
                                    (255 & e.charCodeAt(l + 12)) |
                                    ((255 & e.charCodeAt(l + 13)) << 8) |
                                    ((255 & e.charCodeAt(l + 14)) << 16) |
                                    ((255 & e.charCodeAt(l + 15)) << 24),
                                    (255 & e.charCodeAt(l + 8)) |
                                    ((255 & e.charCodeAt(l + 9)) << 8) |
                                    ((255 & e.charCodeAt(l + 10)) << 16) |
                                    ((255 & e.charCodeAt(l + 11)) << 24),
                                ]),
                                (a = this.x64Multiply(a, u)),
                                (a = this.x64Rotl(a, 31)),
                                (a = this.x64Multiply(a, c)),
                                (o = this.x64Xor(o, a)),
                                (o = this.x64Rotl(o, 27)),
                                (o = this.x64Add(o, i)),
                                (o = this.x64Add(
                                    this.x64Multiply(o, [0, 5]), [0, 1390208809]
                                )),
                                (s = this.x64Multiply(s, c)),
                                (s = this.x64Rotl(s, 33)),
                                (s = this.x64Multiply(s, u)),
                                (i = this.x64Xor(i, s)),
                                (i = this.x64Rotl(i, 31)),
                                (i = this.x64Add(i, o)),
                                (i = this.x64Add(
                                    this.x64Multiply(i, [0, 5]), [0, 944331445]
                                ));
                            switch (((a = [0, 0]), (s = [0, 0]), n)) {
                                case 15:
                                    s = this.x64Xor(
                                        s,
                                        this.x64LeftShift([0, e.charCodeAt(l + 14)], 48)
                                    );
                                case 14:
                                    s = this.x64Xor(
                                        s,
                                        this.x64LeftShift([0, e.charCodeAt(l + 13)], 40)
                                    );
                                case 13:
                                    s = this.x64Xor(
                                        s,
                                        this.x64LeftShift([0, e.charCodeAt(l + 12)], 32)
                                    );
                                case 12:
                                    s = this.x64Xor(
                                        s,
                                        this.x64LeftShift([0, e.charCodeAt(l + 11)], 24)
                                    );
                                case 11:
                                    s = this.x64Xor(
                                        s,
                                        this.x64LeftShift([0, e.charCodeAt(l + 10)], 16)
                                    );
                                case 10:
                                    s = this.x64Xor(
                                        s,
                                        this.x64LeftShift([0, e.charCodeAt(l + 9)], 8)
                                    );
                                case 9:
                                    (s = this.x64Xor(s, [0, e.charCodeAt(l + 8)])),
                                    (s = this.x64Multiply(s, c)),
                                    (s = this.x64Rotl(s, 33)),
                                    (s = this.x64Multiply(s, u)),
                                    (i = this.x64Xor(i, s));
                                case 8:
                                    a = this.x64Xor(
                                        a,
                                        this.x64LeftShift([0, e.charCodeAt(l + 7)], 56)
                                    );
                                case 7:
                                    a = this.x64Xor(
                                        a,
                                        this.x64LeftShift([0, e.charCodeAt(l + 6)], 48)
                                    );
                                case 6:
                                    a = this.x64Xor(
                                        a,
                                        this.x64LeftShift([0, e.charCodeAt(l + 5)], 40)
                                    );
                                case 5:
                                    a = this.x64Xor(
                                        a,
                                        this.x64LeftShift([0, e.charCodeAt(l + 4)], 32)
                                    );
                                case 4:
                                    a = this.x64Xor(
                                        a,
                                        this.x64LeftShift([0, e.charCodeAt(l + 3)], 24)
                                    );
                                case 3:
                                    a = this.x64Xor(
                                        a,
                                        this.x64LeftShift([0, e.charCodeAt(l + 2)], 16)
                                    );
                                case 2:
                                    a = this.x64Xor(
                                        a,
                                        this.x64LeftShift([0, e.charCodeAt(l + 1)], 8)
                                    );
                                case 1:
                                    (a = this.x64Xor(a, [0, e.charCodeAt(l)])),
                                    (a = this.x64Multiply(a, u)),
                                    (a = this.x64Rotl(a, 31)),
                                    (a = this.x64Multiply(a, c)),
                                    (o = this.x64Xor(o, a));
                            }
                            return (
                                (o = this.x64Xor(o, [0, e.length])),
                                (i = this.x64Xor(i, [0, e.length])),
                                (o = this.x64Add(o, i)),
                                (i = this.x64Add(i, o)),
                                (o = this.x64Fmix(o)),
                                (i = this.x64Fmix(i)),
                                (o = this.x64Add(o, i)),
                                (i = this.x64Add(i, o)),
                                ("00000000" + (o[0] >>> 0).toString(16)).slice(-8) +
                                ("00000000" + (o[1] >>> 0).toString(16)).slice(-8) +
                                ("00000000" + (i[0] >>> 0).toString(16)).slice(-8) +
                                ("00000000" + (i[1] >>> 0).toString(16)).slice(-8)
                            );
                        },
                    }),
                    (e.VERSION = "1.5.1"),
                    e
                );
            });
        },
        function(e, t, n) {
            "use strict";

            function r() {
                return !!("ontouchstart" in window || navigator.maxTouchPoints);
            }
            (t.__esModule = !0), (t["default"] = r);
        },
        function(e, t, n) {
            "use strict";

            function r(e) {
                if (e && e.__esModule) return e;
                var t = {};
                if (null != e)
                    for (var n in e)
                        Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
                return (t["default"] = e), t;
            }
            t.__esModule = !0;
            var o = n(0),
                i = (function(e) {
                    return e && e.__esModule ? e : { default: e };
                })(o),
                a = n(3),
                s = r(a),
                u = n(10),
                c = r(u),
                l = ["37", "38", "39", "40"],
                f = new RegExp(/^[0-9]*$/),
                d = {
                    8: "BACKSPACE",
                    9: "TAB",
                    13: "ENTER",
                    16: "SHIFT",
                    17: "CTRL",
                    18: "ALT",
                    20: "CAPSLOCK",
                    32: "SPACE",
                    46: "DELETE",
                },
                h = { 0: "UN0", 229: "UN1" },
                p = (function() {
                    function e() {
                        var t =
                            arguments.length > 0 && arguments[0] !== undefined ?
                            arguments[0] :
                            [];
                        (0, i["default"])(this, e),
                        (this._inputFieldProps = {}),
                        (this._inputFieldLogsInfos = {});
                        for (var n = 0, r = t.length; n < r; n++) this.addWatch(t[n]);
                    }
                    return (
                        (e.prototype.addWatch = function(e) {
                            this._hasNecessaryProp(e) &&
                                ((this._inputFieldProps[e.id] = {
                                        element: document.getElementById(e.id),
                                    }),
                                    this._initInputFieldLogInfos(e),
                                    this._setInitialValue(e.id),
                                    this._attachKeyEventHandler(e.id),
                                    this._attachInputDetectHandler(e.id));
                        }),
                        (e.prototype.removeWatch = function(e) {
                            var t = this._getProp(e),
                                n = t.element;
                            s.removeEventListener(n, "keydown", t.onKeydown),
                                s.removeEventListener(n, "keyup", t.onKeyup),
                                t.onInputChange ?
                                s.removeEventListener(n, "input", t.onInputChange) :
                                "onInputChangeTimer" in t &&
                                clearInterval(t.onInputChangeTimer),
                                delete this._inputFieldProps[e],
                                delete this._inputFieldLogsInfos[e];
                        }),
                        (e.prototype.get = function() {
                            var e =
                                arguments.length > 0 && arguments[0] !== undefined ?
                                arguments[0] :
                                {},
                                t = [],
                                n = e.filter || [];
                            for (var r in this._inputFieldLogsInfos)
                                (0 === n.length || c.indexOf(n, r) > -1) &&
                                t.push({
                                    i: r,
                                    a: this._getKeyStrokeLogById(r),
                                    b: this._getInputIntervalLogById(r),
                                    c: this._getInitialValue(r),
                                    d: this._getCompleteValue(r),
                                    e: this._inputFieldLogsInfos[r].secureMode,
                                    f: this._inputFieldLogsInfos[r].hideValueMode,
                                });
                            return t;
                        }),
                        (e.prototype._getProp = function(e, t) {
                            var n = this._inputFieldProps[e];
                            return t ? n[t] : n;
                        }),
                        (e.prototype._hasNecessaryProp = function(e) {
                            return e.id;
                        }),
                        (e.prototype._getKeyStrokeLogById = function(e) {
                            var t = this._inputFieldLogsInfos[e],
                                n = this._getLogs(t.keyStrokeLogs, t.keyStrokeLogLength);
                            return c.map(n, function(e) {
                                return e.a + "," + e.b + "," + e.c + "," + e.d;
                            });
                        }),
                        (e.prototype._getInputIntervalLogById = function(e) {
                            var t = this._inputFieldLogsInfos[e],
                                n =
                                this._getLogs(
                                    t.inputIntervalLogs,
                                    t.inputIntervalLogLength
                                ) || [];
                            return {
                                a: c.map(n, function(e) {
                                    return e.a + "," + e.c;
                                }),
                                b: this._getLast(n, { d: 0 }).d,
                            };
                        }),
                        (e.prototype._getLast = function(e, t) {
                            return e && 0 !== e.length ? e[e.length - 1] || t : t;
                        }),
                        (e.prototype._getLogs = function() {
                            var e =
                                arguments.length > 0 && arguments[0] !== undefined ?
                                arguments[0] :
                                [],
                                t = arguments[1];
                            return e.length <= t ? e : e.slice(e.length - t, e.length);
                        }),
                        (e.prototype._attachKeyEventHandler = function(e) {
                            var t = this._getProp(e),
                                n = t.element,
                                r = s.bind(this._keydownEventHandler, this, n),
                                o = s.bind(this._keyupEventHandler, this, n);
                            (t.onKeydown = r),
                            (t.onKeyup = o),
                            s.addEventListener(n, "keydown", r),
                                s.addEventListener(n, "keyup", o);
                        }),
                        (e.prototype._attachInputDetectHandler = function(e) {
                            var t = this._getProp(e),
                                n = t.element,
                                r = s.bind(this._detectInputChange, this, n);
                            "oninput" in n
                                ?
                                ((t.onInputChange = r), s.addEventListener(n, "input", r)) :
                                (t.onInputChangeTimer = setInterval(r, 50));
                        }),
                        (e.prototype._setInitialValue = function(e) {
                            var t = this._getProp(e),
                                n = t.logInfos,
                                r = t.element;
                            n.secureMode ? (n.initialValue = "") : (n.initialValue = r.value);
                        }),
                        (e.prototype._getInitialValue = function(e) {
                            return this._inputFieldLogsInfos[e].initialValue;
                        }),
                        (e.prototype._getCompleteValue = function(e) {
                            var t = this._inputFieldProps[e];
                            return this._inputFieldLogsInfos[e].secureMode ?
                                "" :
                                t.element.value;
                        }),
                        (e.prototype._initInputFieldLogInfos = function(e) {
                            var t = {
                                lastEventTime: 0,
                                keyIndex: 0,
                                keyStrokeLogs: [],
                                downKeyMap: {},
                                lastInputTime: new Date().getTime(),
                                lastInputText: "",
                                inputIntervalLogs: [],
                                inputIntervalLogIdx: 0,
                                initialValue: 0,
                                completeValue: 0,
                                keyStrokeLogLength: e.keyStrokeLogLength || 65,
                                inputIntervalLogLength: e.inputIntervalLogLength || 30,
                                secureMode: e.secureMode || !1,
                                hideValueMode: e.hideValueMode || !1,
                            };
                            (this._inputFieldLogsInfos[e.id] = t),
                            (this._inputFieldProps[e.id].logInfos = t);
                        }),
                        (e.prototype._detectInputChange = function(e, t) {
                            var n = e.value,
                                r = new Date().getTime(),
                                o = this._inputFieldLogsInfos[e.id],
                                i = o.secureMode,
                                a = i || o.hideValueMode,
                                s = void 0,
                                u = void 0;
                            o.lastInputText !== n &&
                                ((s =
                                        0 === o.inputIntervalLogs.length ? 0 : r - o.lastInputTime),
                                    (u = {
                                        a: s,
                                        c: a ? "" : n,
                                        d: o.inputIntervalLogIdx++,
                                        e: i ? -1 : n.length,
                                    }),
                                    o.inputIntervalLogs.push(u),
                                    (o.lastInputTime = r),
                                    (o.lastInputText = n)),
                                0 === n.length && (o.inputIntervalLogs = []);
                        }),
                        (e.prototype._keydownEventHandler = function(t) {
                            var n =
                                arguments.length > 1 && arguments[1] !== undefined ?
                                arguments[1] :
                                window.event;
                            if (!this._isValidKeyUpOrDownEvent(n)) return !0;
                            var r = this._getKeyCode(n.keyCode),
                                o = this._inputFieldLogsInfos[t.id],
                                i = this._isIMEKeyCode(r),
                                a = new Date().getTime(),
                                s = 0,
                                u = null;
                            return (!!this._isArrowKey(r) ||
                                (!(!i && e._isAlreadyDown(o, r) && !e._isDeleteCharKey(r)) &&
                                    ((u = this._getKeyInfo(o, r)),
                                        0 !== o.keyStrokeLogs.length &&
                                        (s = Math.max(0, a - o.lastEventTime)),
                                        (o.lastEventTime = a),
                                        i || e._isAlreadyDown(o, r) || (o.downKeyMap[r] = u),
                                        o.keyStrokeLogs.push({
                                            a: s,
                                            b: "d",
                                            c: u,
                                            d: o.secureMode ? "" : "" + n.keyCode,
                                        }), !0))
                            );
                        }),
                        (e.prototype._keyupEventHandler = function(t) {
                            var n =
                                arguments.length > 1 && arguments[1] !== undefined ?
                                arguments[1] :
                                window.event;
                            if (!this._isValidKeyUpOrDownEvent(n)) return !0;
                            var r = this._getKeyCode(n.keyCode),
                                o = this._inputFieldLogsInfos[t.id],
                                i = this._isIMEKeyCode(r),
                                a = new Date().getTime(),
                                s = 0,
                                u = null;
                            return (!!this._isArrowKey(r) ||
                                (!(!i && !e._isAlreadyDown(o, r)) &&
                                    ((u = i ? h[r] : o.downKeyMap[r]),
                                        delete o.downKeyMap[r],
                                        (s = Math.max(0, a - o.lastEventTime)),
                                        o.keyStrokeLogs.push({
                                            a: s,
                                            b: "u",
                                            c: u,
                                            d: o.secureMode ? "" : "" + n.keyCode,
                                        }),
                                        (e._isEmptyLog(o.keyStrokeLogs) || 0 === t.value.length) &&
                                        (o.keyStrokeLogs = []), !0))
                            );
                        }),
                        (e.prototype._isValidKeyUpOrDownEvent = function(e) {
                            return e && e.keyCode && e.keyCode.toString;
                        }),
                        (e.prototype._getKeyCode = function(e) {
                            var t = e.toString();
                            return d[e] && (t = d[e]), t;
                        }),
                        (e.prototype._getKeyInfo = function(e, t) {
                            return this._isSpecialKey(t) ?
                                t :
                                h[t] ?
                                h[t] :
                                "i" + e.keyIndex++;
                        }),
                        (e._isAlreadyDown = function(e, t) {
                            return e.downKeyMap[t];
                        }),
                        (e.prototype._isIMEKeyCode = function(e) {
                            return !!h[e];
                        }),
                        (e._isDeleteCharKey = function(e) {
                            return "BACKSPACE" === e || "DELETE" === e;
                        }),
                        (e.prototype._isArrowKey = function(e) {
                            return !this._isSpecialKey(e) && -1 !== c.indexOf(l, e);
                        }),
                        (e.prototype._isSpecialKey = function(e) {
                            return !f.test(e);
                        }),
                        (e._isEmptyLog = function(e) {
                            return 0 === e.length;
                        }),
                        e
                    );
                })();
            t["default"] = p;
        },
        function(e, t, n) {
            "use strict";
            t.__esModule = !0;
            var r = n(0),
                o = (function(e) {
                    return e && e.__esModule ? e : { default: e };
                })(r),
                i = n(35),
                a = n(3),
                s = (function(e) {
                    if (e && e.__esModule) return e;
                    var t = {};
                    if (null != e)
                        for (var n in e)
                            Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
                    return (t["default"] = e), t;
                })(a),
                u = s.objectAssign,
                c = (function() {
                    function e() {
                        (0, o["default"])(this, e),
                        (this._isFirst = !0),
                        (this._firstOrientation = { a: 999, b: 999, c: 999 }),
                        (this._currentOrientation = u({}, this._firstOrientation)),
                        s.bindAll(["_onDeviceOrientation"], this),
                            window.DeviceOrientationEvent ?
                            s.addEventListener(
                                window,
                                "deviceorientation",
                                this._onDeviceOrientation
                            ) :
                            ((this._firstOrientation = { a: 777, b: 777, c: 777 }),
                                (this._currentOrientation = u({}, this._firstOrientation)));
                    }
                    return (
                        (e.prototype.getCurrentOrientation = function() {
                            return u({}, this._currentOrientation);
                        }),
                        (e.prototype.get = function() {
                            return {
                                a: u({}, this._firstOrientation),
                                b: this.getCurrentOrientation(),
                            };
                        }),
                        (e.prototype._onDeviceOrientation = function(e) {
                            var t = e.alpha,
                                n = e.beta,
                                r = e.gamma,
                                o = {
                                    a: (0, i.refine)(t),
                                    b: (0, i.refine)(n),
                                    c: (0, i.refine)(r),
                                };
                            this._isFirst &&
                                ((this._isFirst = !1), (this._firstOrientation = u({}, o))),
                                (this._currentOrientation = u({}, o)),
                                (0, i.isWrong)(this._currentOrientation) &&
                                s.removeEventListener(
                                    window,
                                    "deviceorientation",
                                    this._onDeviceOrientation
                                );
                        }),
                        e
                    );
                })();
            t["default"] = c;
        },
        function(e, t, n) {
            "use strict";
            t.__esModule = !0;
            var r = n(0),
                o = (function(e) {
                    return e && e.__esModule ? e : { default: e };
                })(r),
                i = n(35),
                a = n(3),
                s = (function(e) {
                    if (e && e.__esModule) return e;
                    var t = {};
                    if (null != e)
                        for (var n in e)
                            Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
                    return (t["default"] = e), t;
                })(a),
                u = s.objectAssign,
                c = (function() {
                    function e() {
                        (0, o["default"])(this, e),
                        (this._isFirst = !0),
                        (this._firstAcceleration = { a: 999, b: 999, c: 999 }),
                        (this._currentAcceleration = u({}, this._firstAcceleration)),
                        (this._firstAccelerationIncludingGravity = u({},
                            this._firstAcceleration
                        )),
                        (this._currentAccelerationIncludingGravity = u({},
                            this._firstAcceleration
                        )),
                        s.bindAll(["_onDeviceMotion"], this),
                            window.DeviceMotionEvent ?
                            s.addEventListener(
                                window,
                                "devicemotion",
                                this._onDeviceMotion
                            ) :
                            ((this._firstAcceleration = { a: 777, b: 777, c: 777 }),
                                (this._currentAcceleration = u({}, this._firstAcceleration)),
                                (this._firstAccelerationIncludingGravity = u({},
                                    this._firstAcceleration
                                )),
                                (this._currentAccelerationIncludingGravity = u({},
                                    this._firstAcceleration
                                )));
                    }
                    return (
                        (e.prototype.get = function() {
                            return {
                                a: {
                                    a: u({}, this._firstAcceleration),
                                    b: u({}, this._firstAccelerationIncludingGravity),
                                },
                                b: {
                                    a: u({}, this._currentAcceleration),
                                    b: u({}, this._currentAccelerationIncludingGravity),
                                },
                            };
                        }),
                        (e.prototype._onDeviceMotion = function(e) {
                            var t = e.acceleration;
                            t = t === undefined ? {} : t;
                            var n = t.x,
                                r = t.y,
                                o = t.z,
                                a = e.accelerationIncludingGravity;
                            a = a === undefined ? {} : a;
                            var c = a.x,
                                l = a.y,
                                f = a.z,
                                d = {
                                    a: (0, i.refine)(n),
                                    b: (0, i.refine)(r),
                                    c: (0, i.refine)(o),
                                },
                                h = {
                                    a: (0, i.refine)(c),
                                    b: (0, i.refine)(l),
                                    c: (0, i.refine)(f),
                                };
                            this._isFirst &&
                                ((this._isFirst = !1),
                                    (this._firstAcceleration = u({}, d)),
                                    (this._firstAccelerationIncludingGravity = u({}, h))),
                                (this._currentAcceleration = u({}, d)),
                                (this._currentAccelerationIncludingGravity = u({}, h)),
                                (0, i.isWrong)(this._currentAcceleration) &&
                                (0, i.isWrong)(this._currentAccelerationIncludingGravity) &&
                                s.removeEventListener(
                                    window,
                                    "devicemotion",
                                    this._onDeviceMotion
                                );
                        }),
                        e
                    );
                })();
            t["default"] = c;
        },
        function(e, t, n) {
            "use strict";

            function r(e) {
                if (e && e.__esModule) return e;
                var t = {};
                if (null != e)
                    for (var n in e)
                        Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
                return (t["default"] = e), t;
            }
            t.__esModule = !0;
            var o = n(0),
                i = (function(e) {
                    return e && e.__esModule ? e : { default: e };
                })(o),
                a = n(3),
                s = r(a),
                u = n(10),
                c = r(u),
                l = (function() {
                    function e() {
                        var t = this,
                            n =
                            arguments.length > 0 && arguments[0] !== undefined ?
                            arguments[0] :
                            {};
                        (0, i["default"])(this, e),
                        (this._count = 0),
                        (this._errCount = 0),
                        (this._mouse = []),
                        (this._temp = []),
                        (this._time = +new Date()),
                        (this._totalInterval = -1),
                        (this._pageX = 0),
                        (this._pageY = 0),
                        (this._lastAbX = 0),
                        (this._lastAbY = 0),
                        (this._logLength = n.logLength || 200),
                        (this._debounce = n.debounce || 0),
                        s.bindAll(["_flush"], this),
                            (this._wrappedOnMouseEvent = function(e) {
                                try {
                                    t._onMouseEvent(e);
                                } catch (n) {
                                    t._errCount++;
                                }
                            }),
                            c.forEach(["mousemove", "mousedown", "mouseup"], function(e) {
                                s.addEventListener(document, e, t._wrappedOnMouseEvent);
                            });
                    }
                    return (
                        (e.prototype.get = function() {
                            return {
                                a: c.map(this._mouse, function(e) {
                                    return e.b + "|" + e.c + "|" + e.d + "|" + e.e;
                                }),
                                b: (this._mouse.pop() || { a: 0 }).a,
                                c: this._lastAbX,
                                d: this._lastAbY,
                                e: this._totalInterval,
                                f: this._errCount,
                            };
                        }),
                        (e.prototype._flush = function() {
                            (this._mouse = this._mouse
                                .concat(this._temp)
                                .slice(-this._logLength)),
                            (this._temp.length = 0);
                        }),
                        (e.prototype._onMouseEvent = function(e) {
                            var t = e.clientX,
                                n = e.clientY,
                                r = e.type,
                                o = s.getDocumentElement(),
                                i = { mousemove: 0, mousedown: 1, mouseup: 2 }[r],
                                a = o.scrollLeft || 0,
                                u = o.scrolTop || 0,
                                c = +new Date(),
                                l = c - this._time,
                                f = t + a,
                                d = n + u,
                                h = this._refinePageDiff(f - this._pageX),
                                p = this._refinePageDiff(d - this._pageY),
                                g = { a: this._count, b: i, c: l, d: h, e: p };
                            this._count++,
                                (this._totalInterval += l),
                                (this._time = c),
                                (this._pageX = f),
                                (this._pageY = d),
                                (this._lastAbX = this._refinePageDiff(f)),
                                (this._lastAbY = this._refinePageDiff(d)),
                                this._temp.push(g),
                                this._debounce ?
                                (clearTimeout(this._timeoutRef),
                                    (this._timeoutRef = setTimeout(
                                        this._flush,
                                        this._debounce
                                    ))) :
                                (this._mouse.push(g),
                                    (this._mouse = this._mouse.slice(-this._logLength)));
                        }),
                        (e.prototype._refinePageDiff = function(e) {
                            if (isNaN(parseFloat(e))) return 0;
                            if (parseInt(e, 10) === parseFloat(e)) return e;
                            try {
                                return e.toFixed(3);
                            } catch (t) {
                                return e;
                            }
                        }),
                        e
                    );
                })();
            t["default"] = l;
        },
        function(e, t, n) {
            "use strict";

            function r(e, t) {
                var n = null,
                    r = null,
                    o = null;
                if (!e) return "";
                try {
                    o = s.stringify(e);
                } catch (a) {
                    return (
                        (a.uuid = e.a),
                        Error.set("Compress JSON Stringify nCaptcha", a).get()
                    );
                }
                try {
                    r = i["default"].compressToEncodedURIComponent(o);
                } catch (a) {
                    return (a.uuid = e.a), Error.set("Compress", a).get();
                }
                if ("old" !== t) return r;
                try {
                    n = s.stringify({ uuid: e.a, encData: r });
                } catch (a) {
                    return (
                        (a.uuid = e.a),
                        Error.set("Compress JSON Stringify encNCaptcha", a).get()
                    );
                }
                return n;
            }
            (t.__esModule = !0), (t["default"] = r);
            var o = n(34),
                i = (function(e) {
                    return e && e.__esModule ? e : { default: e };
                })(o),
                a = n(17),
                s = (function(e) {
                    if (e && e.__esModule) return e;
                    var t = {};
                    if (null != e)
                        for (var n in e)
                            Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
                    return (t["default"] = e), t;
                })(a);
        },
        function(e, t, n) {
            "use strict";

            function r(e) {
                if (e && e.__esModule) return e;
                var t = {};
                if (null != e)
                    for (var n in e)
                        Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
                return (t["default"] = e), t;
            }

            function o(e) {
                return e && e.__esModule ? e : { default: e };
            }

            function i(e, t) {
                return e.match(new RegExp(".{1," + t + "}", "g"));
            }

            function a() {
                ++b === w &&
                    ((E["s" + M] = S),
                        (E["u" + M] = x),
                        (E["t" + M] = T),
                        C && C(d["default"].compressToEncodedURIComponent(v.stringify(E))));
            }

            function s(e) {
                e.match(/fail\|/) ? ((E.s = e), S++) : e.match(/success/) || x++, a();
            }

            function u(e, t, n, r) {
                (b = 0),
                (S = 0),
                (T = 0),
                (x = 0),
                (M = e.type),
                (A = t.mode),
                (w = n.length),
                (C = r),
                (E = {
                    t: e.uuid,
                    s: "",
                    m: A,
                    sb: 0,
                    sc: 0,
                    ub: 0,
                    uc: 0,
                    tnb: "b" === M ? w : 0,
                    tnc: "c" === M ? w : 0,
                });
            }

            function c(e) {
                return (
                    ("string" == typeof e && 0 === e.indexOf(g.ERROR_PREFIX)) || !e.body
                );
            }

            function l(e, t, n) {
                if (c(e) && n) return void n(e);
                var r = t.url,
                    o = t.chunkSize,
                    l = t.timeout,
                    f = y.map(i(e.body, o), function(t, n, r) {
                        return (
                            e.uuid + "|" + e.type + "|" + (n + 1) + "|" + r.length + "|" + t
                        );
                    });
                u(e, t, f, n),
                    y.forEach(f, function(e) {
                        new p["default"]({
                                timeout: l,
                                ontimeout: function(e) {
                                    return ++T && a(e);
                                },
                                onerror: function(e) {
                                    return ++x && a(e);
                                },
                                onload: function(e) {
                                    return s(e);
                                },
                            })
                            .open("POST", r)
                            .setRequestHeader("Content-Type", "text/plain")
                            .send(e);
                    });
            }
            (t.__esModule = !0), (t["default"] = l);
            var f = n(34),
                d = o(f),
                h = n(104),
                p = o(h),
                g = n(33),
                _ = n(10),
                y = r(_),
                m = n(17),
                v = r(m),
                w = void 0,
                b = void 0,
                S = void 0,
                T = void 0,
                x = void 0,
                E = void 0,
                M = void 0,
                A = void 0,
                C = void 0;
        },
        function(e, t, n) {
            "use strict";

            function r(e) {
                return e && e.__esModule ? e : { default: e };
            }
            t.__esModule = !0;
            var o = n(0),
                i = r(o),
                a = n(105),
                s = r(a),
                u = n(106),
                c = n(17),
                l = (function(e) {
                    if (e && e.__esModule) return e;
                    var t = {};
                    if (null != e)
                        for (var n in e)
                            Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
                    return (t["default"] = e), t;
                })(c),
                f = (function() {
                    function e(t) {
                        (0, i["default"])(this, e),
                        (this._prop = t),
                        (this.jsonp = !0),
                        (this._itf = new s["default"]());
                    }
                    return (
                        (e.prototype.setRequestHeader = function(e, t) {
                            if (/Content-Type/i.test(e))
                                try {
                                    this._itf.contentType = t;
                                } catch (n) {}
                            return (
                                this._itf.setRequestHeader && this._itf.setRequestHeader(e, t),
                                this
                            );
                        }),
                        (e.prototype.open = function(e, t) {
                            var n = this,
                                r = this._itf,
                                o = this._prop,
                                i = o.timeout,
                                a = o.withCredentials;
                            try {
                                r.open(e, t, !0),
                                    (r.timeout = i),
                                    (r.withCredentials = a),
                                    (r.ontimeout = function(e) {
                                        return n._onTimeout(e);
                                    }),
                                    (r.onerror = function(e) {
                                        return n._onError(e);
                                    }),
                                    (r.onload = function(e) {
                                        return n._onLoad(n._itf);
                                    });
                            } catch (s) {
                                this._onError();
                            }
                            return this;
                        }),
                        (e.prototype.send = function(e) {
                            var t = this;
                            (0, u.isAndroidLT444)() &&
                            (this._timeoutref = setTimeout(function() {
                                return t._clearCallback();
                            }, this._itf.timeout));
                            try {
                                this._itf.send("a=" + e);
                            } catch (n) {}
                            return this;
                        }),
                        (e.prototype._clearCallback = function(e) {
                            return (
                                (e.onload = null),
                                (e.onerror = null),
                                (e.ontimeout = null),
                                clearTimeout(this._timeoutref),
                                this
                            );
                        }),
                        (e.prototype._onTimeout = function(e) {
                            this._clearCallback(this._itf)._prop.ontimeout();
                        }),
                        (e.prototype._onError = function(e) {
                            this._clearCallback(this._itf)._prop.onerror();
                        }),
                        (e.prototype._onLoad = function(e) {
                            var t = e.response,
                                n = e.responseText,
                                r = (e.status, t || n);
                            "string" != typeof r && (r = l.stringify(r)),
                                this._clearCallback(this._itf)._prop.onload(r);
                        }),
                        e
                    );
                })();
            t["default"] = f;
        },
        function(e, t, n) {
            "use strict";
            t.__esModule = !0;
            var r = n(0),
                o = (function(e) {
                    return e && e.__esModule ? e : { default: e };
                })(r),
                i = n(3),
                a = 0,
                s = (function() {
                    function e(t) {
                        (0, o["default"])(this, e),
                        (this._prop = (0, i.objectAssign)({
                                charset: "utf-8",
                                callbackname: "callback",
                                callback: null,
                                prefix: "_kjcb_",
                            },
                            t
                        )),
                        (this.id = a++);
                    }
                    return (
                        (e.prototype.open = function(e, t, n) {
                            var r = this,
                                o = document.createElement("script"),
                                i = document.getElementsByTagName("head")[0],
                                a = document.body,
                                s = "" + this._prop.prefix + this.id,
                                u = this;
                            if (!window[s]) {
                                (o.type = "text/javascript"), (o.charset = this._prop.charset);
                                try {
                                    (i || a).appendChild(o);
                                } catch (c) {}
                                (window[s] = function(e) {
                                    try {
                                        r.__onSuccess(e);
                                    } catch (c) {}
                                }),
                                (this.callbackString = s),
                                (this._url =
                                    t +
                                    (-1 === t.indexOf("?") ? "?" : "&") +
                                    this._prop.callbackname +
                                    "=" +
                                    s),
                                "onreadystatechange" in o
                                    ?
                                    (o.onreadystatechange = function() {
                                        "loaded" === o.readyState &&
                                            (window[s] ? u.__onError() : u._teardown(),
                                                (o.onreadystatechange = null));
                                    }) :
                                    ((o.onload = function() {
                                            (o.onload = null), (o.onerror = null);
                                        }),
                                        (o.onerror = function() {
                                            u.__onError(), (o.onload = null), (o.onerror = null);
                                        })),
                                    (this.sEl = o);
                            }
                        }),
                        (e.prototype.send = function(e) {
                            var t = this,
                                n = this._url;
                            e &&
                                ((0 !== e.indexOf("?") && 0 !== e.indexOf("&")) ||
                                    (e = e.substr(1)),
                                    (n += "&" + e)),
                                "timeout" in this &&
                                this.timeout > 0 &&
                                (this._timer = window.setTimeout(function() {
                                    t.__loading && t.__onTimeout();
                                }, this.timeout)),
                                (this.sEl.src = n),
                                (this.__loading = !0);
                        }),
                        (e.prototype._teardown = function() {
                            (this.__loading = !1), delete this.response;
                            var e = this.sEl,
                                t = this.callbackString;
                            window.setTimeout(function() {
                                try {
                                    e.parentNode.removeChild(e);
                                } catch (n) {}
                                window[t] = null;
                            }, 10);
                        }),
                        (e.prototype.__onSuccess = function(e) {
                            var t = this.sEl;
                            t.onreadystatechange && (t.onreadystatechange = null),
                                this.onload && ((this.response = e), this.onload()),
                                this._prop.callback && this._prop.callback(e),
                                this._teardown();
                        }),
                        (e.prototype.__onTimeout = function() {
                            this.ontimeout && this.ontimeout(), this._teardown();
                        }),
                        (e.prototype.__onError = function() {
                            this.onerror && this.onerror(),
                                this._prop.error && this._prop.error(),
                                this._teardown();
                        }),
                        e
                    );
                })();
            t["default"] = s;
        },
        function(e, t, n) {
            "use strict";

            function r(e) {
                return navigator.userAgent.match(e);
            }

            function o() {
                return !!r(/MSIE 8/i);
            }

            function i() {
                return !!r(/MSIE 9/i);
            }

            function a() {
                return o() || i();
            }

            function s() {
                var e = r(/Android ([\d|.]+)/);
                return e && e[1] < "4.4.4";
            }
            (t.__esModule = !0),
            (t.match = r),
            (t.isIE8 = o),
            (t.isIE9 = i),
            (t.isIE8or9 = a),
            (t.isAndroidLT444 = s);
        },
    ]);
});