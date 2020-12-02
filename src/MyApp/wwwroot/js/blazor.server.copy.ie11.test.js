function _wrapRegExp(re, groups) { _wrapRegExp = function _wrapRegExp(re, groups) { return new BabelRegExp(re, undefined, groups); }; var _RegExp = _wrapNativeSuper(RegExp); var _super = RegExp.prototype; var _groups = new WeakMap(); function BabelRegExp(re, flags, groups) { var _this = _RegExp.call(this, re, flags); _groups.set(_this, groups || _groups.get(re)); return _this; } _inherits(BabelRegExp, _RegExp); BabelRegExp.prototype.exec = function (str) { var result = _super.exec.call(this, str); if (result) result.groups = buildGroups(result, this); return result; }; BabelRegExp.prototype[Symbol.replace] = function (str, substitution) { if (typeof substitution === "string") { var groups = _groups.get(this); return _super[Symbol.replace].call(this, str, substitution.replace(/\$<([^>]+)>/g, function (_, name) { return "$" + groups[name]; })); } else if (typeof substitution === "function") { var _this = this; return _super[Symbol.replace].call(this, str, function () { var args = []; args.push.apply(args, arguments); if (_typeof(args[args.length - 1]) !== "object") { args.push(buildGroups(args, _this)); } return substitution.apply(this, args); }); } else { return _super[Symbol.replace].call(this, str, substitution); } }; function buildGroups(result, re) { var g = _groups.get(re); return Object.keys(g).reduce(function (groups, name) { groups[name] = result[g[name]]; return groups; }, Object.create(null)); } return _wrapRegExp.apply(this, arguments); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _wrapNativeSuper(Class) { var _cache = typeof Map === "function" ? new Map() : undefined; _wrapNativeSuper = function _wrapNativeSuper(Class) { if (Class === null || !_isNativeFunction(Class)) return Class; if (typeof Class !== "function") { throw new TypeError("Super expression must either be null or a function"); } if (typeof _cache !== "undefined") { if (_cache.has(Class)) return _cache.get(Class); _cache.set(Class, Wrapper); } function Wrapper() { return _construct(Class, arguments, _getPrototypeOf(this).constructor); } Wrapper.prototype = Object.create(Class.prototype, { constructor: { value: Wrapper, enumerable: false, writable: true, configurable: true } }); return _setPrototypeOf(Wrapper, Class); }; return _wrapNativeSuper(Class); }

function _construct(Parent, args, Class) { if (_isNativeReflectConstruct()) { _construct = Reflect.construct; } else { _construct = function _construct(Parent, args, Class) { var a = [null]; a.push.apply(a, args); var Constructor = Function.bind.apply(Parent, a); var instance = new Constructor(); if (Class) _setPrototypeOf(instance, Class.prototype); return instance; }; } return _construct.apply(null, arguments); }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _isNativeFunction(fn) { return Function.toString.call(fn).indexOf("[native code]") !== -1; }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

!function (e) {
  var t = {};

  function n(r) {
    if (t[r]) return t[r].exports;
    var o = t[r] = {
      i: r,
      l: !1,
      exports: {}
    };
    return e[r].call(o.exports, o, o.exports, n), o.l = !0, o.exports;
  }

  n.m = e, n.c = t, n.d = function (e, t, r) {
    n.o(e, t) || Object.defineProperty(e, t, {
      enumerable: !0,
      get: r
    });
  }, n.r = function (e) {
    "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
      value: "Module"
    }), Object.defineProperty(e, "__esModule", {
      value: !0
    });
  }, n.t = function (e, t) {
    if (1 & t && (e = n(e)), 8 & t) return e;
    if (4 & t && "object" == _typeof(e) && e && e.__esModule) return e;
    var r = Object.create(null);
    if (n.r(r), Object.defineProperty(r, "default", {
      enumerable: !0,
      value: e
    }), 2 & t && "string" != typeof e) for (var o in e) {
      n.d(r, o, function (t) {
        return e[t];
      }.bind(null, o));
    }
    return r;
  }, n.n = function (e) {
    var t = e && e.__esModule ? function () {
      return e.default;
    } : function () {
      return e;
    };
    return n.d(t, "a", t), t;
  }, n.o = function (e, t) {
    return Object.prototype.hasOwnProperty.call(e, t);
  }, n.p = "", n(n.s = 53);
}([function (e, t, n) {
  "use strict";

  var r;
  n.d(t, "a", function () {
    return r;
  }), function (e) {
    e[e.Trace = 0] = "Trace", e[e.Debug = 1] = "Debug", e[e.Information = 2] = "Information", e[e.Warning = 3] = "Warning", e[e.Error = 4] = "Error", e[e.Critical = 5] = "Critical", e[e.None = 6] = "None";
  }(r || (r = {}));
}, function (e, t, n) {
  "use strict";

  (function (e) {
    n.d(t, "e", function () {
      return c;
    }), n.d(t, "a", function () {
      return u;
    }), n.d(t, "c", function () {
      return l;
    }), n.d(t, "g", function () {
      return f;
    }), n.d(t, "i", function () {
      return h;
    }), n.d(t, "j", function () {
      return p;
    }), n.d(t, "f", function () {
      return d;
    }), n.d(t, "d", function () {
      return g;
    }), n.d(t, "b", function () {
      return y;
    }), n.d(t, "h", function () {
      return v;
    });

    var r = n(0),
        o = n(4),
        i = Object.assign || function (e) {
      for (var t, n = 1, r = arguments.length; n < r; n++) {
        for (var o in t = arguments[n]) {
          Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
        }
      }

      return e;
    },
        a = function a(e, t, n, r) {
      return new (n || (n = Promise))(function (o, i) {
        function a(e) {
          try {
            c(r.next(e));
          } catch (e) {
            i(e);
          }
        }

        function s(e) {
          try {
            c(r.throw(e));
          } catch (e) {
            i(e);
          }
        }

        function c(e) {
          e.done ? o(e.value) : new n(function (t) {
            t(e.value);
          }).then(a, s);
        }

        c((r = r.apply(e, t || [])).next());
      });
    },
        s = function s(e, t) {
      var n,
          r,
          o,
          i,
          a = {
        label: 0,
        sent: function sent() {
          if (1 & o[0]) throw o[1];
          return o[1];
        },
        trys: [],
        ops: []
      };
      return i = {
        next: s(0),
        throw: s(1),
        return: s(2)
      }, "function" == typeof Symbol && (i[Symbol.iterator] = function () {
        return this;
      }), i;

      function s(i) {
        return function (s) {
          return function (i) {
            if (n) throw new TypeError("Generator is already executing.");

            for (; a;) {
              try {
                if (n = 1, r && (o = 2 & i[0] ? r.return : i[0] ? r.throw || ((o = r.return) && o.call(r), 0) : r.next) && !(o = o.call(r, i[1])).done) return o;

                switch (r = 0, o && (i = [2 & i[0], o.value]), i[0]) {
                  case 0:
                  case 1:
                    o = i;
                    break;

                  case 4:
                    return a.label++, {
                      value: i[1],
                      done: !1
                    };

                  case 5:
                    a.label++, r = i[1], i = [0];
                    continue;

                  case 7:
                    i = a.ops.pop(), a.trys.pop();
                    continue;

                  default:
                    if (!(o = a.trys, (o = o.length > 0 && o[o.length - 1]) || 6 !== i[0] && 2 !== i[0])) {
                      a = 0;
                      continue;
                    }

                    if (3 === i[0] && (!o || i[1] > o[0] && i[1] < o[3])) {
                      a.label = i[1];
                      break;
                    }

                    if (6 === i[0] && a.label < o[1]) {
                      a.label = o[1], o = i;
                      break;
                    }

                    if (o && a.label < o[2]) {
                      a.label = o[2], a.ops.push(i);
                      break;
                    }

                    o[2] && a.ops.pop(), a.trys.pop();
                    continue;
                }

                i = t.call(e, a);
              } catch (e) {
                i = [6, e], r = 0;
              } finally {
                n = o = 0;
              }
            }

            if (5 & i[0]) throw i[1];
            return {
              value: i[0] ? i[1] : void 0,
              done: !0
            };
          }([i, s]);
        };
      }
    },
        c = "5.0.0",
        u = function () {
      function e() {}

      return e.isRequired = function (e, t) {
        if (null == e) throw new Error("The '" + t + "' argument is required.");
      }, e.isNotEmpty = function (e, t) {
        if (!e || e.match(/^\s*$/)) throw new Error("The '" + t + "' argument should not be empty.");
      }, e.isIn = function (e, t, n) {
        if (!(e in t)) throw new Error("Unknown " + n + " value: " + e + ".");
      }, e;
    }(),
        l = function () {
      function e() {}

      return Object.defineProperty(e, "isBrowser", {
        get: function get() {
          return "object" == (typeof window === "undefined" ? "undefined" : _typeof(window));
        },
        enumerable: !0,
        configurable: !0
      }), Object.defineProperty(e, "isWebWorker", {
        get: function get() {
          return "object" == (typeof self === "undefined" ? "undefined" : _typeof(self)) && "importScripts" in self;
        },
        enumerable: !0,
        configurable: !0
      }), Object.defineProperty(e, "isNode", {
        get: function get() {
          return !this.isBrowser && !this.isWebWorker;
        },
        enumerable: !0,
        configurable: !0
      }), e;
    }();

    function f(e, t) {
      var n = "";
      return h(e) ? (n = "Binary data of length " + e.byteLength, t && (n += ". Content: '" + function (e) {
        var t = new Uint8Array(e),
            n = "";
        return t.forEach(function (e) {
          n += "0x" + (e < 16 ? "0" : "") + e.toString(16) + " ";
        }), n.substr(0, n.length - 1);
      }(e) + "'")) : "string" == typeof e && (n = "String data of length " + e.length, t && (n += ". Content: '" + e + "'")), n;
    }

    function h(e) {
      return e && "undefined" != typeof ArrayBuffer && (e instanceof ArrayBuffer || e.constructor && "ArrayBuffer" === e.constructor.name);
    }

    function p(e, t, n, o, c, u, l, p, d) {
      return a(this, void 0, void 0, function () {
        var a, g, y, b, m, w, E, S;
        return s(this, function (s) {
          switch (s.label) {
            case 0:
              return g = {}, c ? [4, c()] : [3, 2];

            case 1:
              (y = s.sent()) && ((a = {}).Authorization = "Bearer " + y, g = a), s.label = 2;

            case 2:
              return b = v(), m = b[0], w = b[1], g[m] = w, e.log(r.a.Trace, "(" + t + " transport) sending data. " + f(u, l) + "."), E = h(u) ? "arraybuffer" : "text", [4, n.post(o, {
                content: u,
                headers: i({}, g, d),
                responseType: E,
                withCredentials: p
              })];

            case 3:
              return S = s.sent(), e.log(r.a.Trace, "(" + t + " transport) request complete. Response status: " + S.statusCode + "."), [2];
          }
        });
      });
    }

    function d(e) {
      return void 0 === e ? new y(r.a.Information) : null === e ? o.a.instance : e.log ? e : new y(e);
    }

    var g = function () {
      function e(e, t) {
        this.subject = e, this.observer = t;
      }

      return e.prototype.dispose = function () {
        var e = this.subject.observers.indexOf(this.observer);
        e > -1 && this.subject.observers.splice(e, 1), 0 === this.subject.observers.length && this.subject.cancelCallback && this.subject.cancelCallback().catch(function (e) {});
      }, e;
    }(),
        y = function () {
      function e(e) {
        this.minimumLogLevel = e, this.outputConsole = console;
      }

      return e.prototype.log = function (e, t) {
        if (e >= this.minimumLogLevel) switch (e) {
          case r.a.Critical:
          case r.a.Error:
            this.outputConsole.error("[" + new Date().toISOString() + "] " + r.a[e] + ": " + t);
            break;

          case r.a.Warning:
            this.outputConsole.warn("[" + new Date().toISOString() + "] " + r.a[e] + ": " + t);
            break;

          case r.a.Information:
            this.outputConsole.info("[" + new Date().toISOString() + "] " + r.a[e] + ": " + t);
            break;

          default:
            this.outputConsole.log("[" + new Date().toISOString() + "] " + r.a[e] + ": " + t);
        }
      }, e;
    }();

    function v() {
      var e = "X-SignalR-User-Agent";
      return l.isNode && (e = "User-Agent"), [e, b(c, m(), E(), w())];
    }

    function b(e, t, n, r) {
      var o = "Microsoft SignalR/",
          i = e.split(".");
      return o += i[0] + "." + i[1], o += " (" + e + "; ", o += t && "" !== t ? t + "; " : "Unknown OS; ", o += "" + n, o += r ? "; " + r : "; Unknown Runtime Version", o += ")";
    }

    function m() {
      if (!l.isNode) return "";

      switch (e.platform) {
        case "win32":
          return "Windows NT";

        case "darwin":
          return "macOS";

        case "linux":
          return "Linux";

        default:
          return e.platform;
      }
    }

    function w() {
      if (l.isNode) return e.versions.node;
    }

    function E() {
      return l.isNode ? "NodeJS" : "Browser";
    }
  }).call(this, n(13));
}, function (e, t, n) {
  "use strict";

  n.r(t), n.d(t, "AbortError", function () {
    return s;
  }), n.d(t, "HttpError", function () {
    return i;
  }), n.d(t, "TimeoutError", function () {
    return a;
  }), n.d(t, "HttpClient", function () {
    return l;
  }), n.d(t, "HttpResponse", function () {
    return u;
  }), n.d(t, "DefaultHttpClient", function () {
    return S;
  }), n.d(t, "HubConnection", function () {
    return R;
  }), n.d(t, "HubConnectionState", function () {
    return I;
  }), n.d(t, "HubConnectionBuilder", function () {
    return re;
  }), n.d(t, "MessageType", function () {
    return b;
  }), n.d(t, "LogLevel", function () {
    return f.a;
  }), n.d(t, "HttpTransportType", function () {
    return O;
  }), n.d(t, "TransferFormat", function () {
    return P;
  }), n.d(t, "NullLogger", function () {
    return Z.a;
  }), n.d(t, "JsonHubProtocol", function () {
    return ee;
  }), n.d(t, "Subject", function () {
    return C;
  }), n.d(t, "VERSION", function () {
    return h.e;
  });

  var r,
      o = (r = Object.setPrototypeOf || {
    __proto__: []
  } instanceof Array && function (e, t) {
    e.__proto__ = t;
  } || function (e, t) {
    for (var n in t) {
      t.hasOwnProperty(n) && (e[n] = t[n]);
    }
  }, function (e, t) {
    function n() {
      this.constructor = e;
    }

    r(e, t), e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n());
  }),
      i = function (e) {
    function t(t, n) {
      var r = this,
          o = this.constructor.prototype;
      return (r = e.call(this, t) || this).statusCode = n, r.__proto__ = o, r;
    }

    return o(t, e), t;
  }(Error),
      a = function (e) {
    function t(t) {
      void 0 === t && (t = "A timeout occurred.");
      var n = this,
          r = this.constructor.prototype;
      return (n = e.call(this, t) || this).__proto__ = r, n;
    }

    return o(t, e), t;
  }(Error),
      s = function (e) {
    function t(t) {
      void 0 === t && (t = "An abort occurred.");
      var n = this,
          r = this.constructor.prototype;
      return (n = e.call(this, t) || this).__proto__ = r, n;
    }

    return o(t, e), t;
  }(Error),
      c = Object.assign || function (e) {
    for (var t, n = 1, r = arguments.length; n < r; n++) {
      for (var o in t = arguments[n]) {
        Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
      }
    }

    return e;
  },
      u = function u(e, t, n) {
    this.statusCode = e, this.statusText = t, this.content = n;
  },
      l = function () {
    function e() {}

    return e.prototype.get = function (e, t) {
      return this.send(c({}, t, {
        method: "GET",
        url: e
      }));
    }, e.prototype.post = function (e, t) {
      return this.send(c({}, t, {
        method: "POST",
        url: e
      }));
    }, e.prototype.delete = function (e, t) {
      return this.send(c({}, t, {
        method: "DELETE",
        url: e
      }));
    }, e.prototype.getCookieString = function (e) {
      return "";
    }, e;
  }(),
      f = n(0),
      h = n(1),
      p = function () {
    var e = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (e, t) {
      e.__proto__ = t;
    } || function (e, t) {
      for (var n in t) {
        t.hasOwnProperty(n) && (e[n] = t[n]);
      }
    };

    return function (t, n) {
      function r() {
        this.constructor = t;
      }

      e(t, n), t.prototype = null === n ? Object.create(n) : (r.prototype = n.prototype, new r());
    };
  }(),
      d = Object.assign || function (e) {
    for (var t, n = 1, r = arguments.length; n < r; n++) {
      for (var o in t = arguments[n]) {
        Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
      }
    }

    return e;
  },
      g = function g(e, t, n, r) {
    return new (n || (n = Promise))(function (o, i) {
      function a(e) {
        try {
          c(r.next(e));
        } catch (e) {
          i(e);
        }
      }

      function s(e) {
        try {
          c(r.throw(e));
        } catch (e) {
          i(e);
        }
      }

      function c(e) {
        e.done ? o(e.value) : new n(function (t) {
          t(e.value);
        }).then(a, s);
      }

      c((r = r.apply(e, t || [])).next());
    });
  },
      y = function y(e, t) {
    var n,
        r,
        o,
        i,
        a = {
      label: 0,
      sent: function sent() {
        if (1 & o[0]) throw o[1];
        return o[1];
      },
      trys: [],
      ops: []
    };
    return i = {
      next: s(0),
      throw: s(1),
      return: s(2)
    }, "function" == typeof Symbol && (i[Symbol.iterator] = function () {
      return this;
    }), i;

    function s(i) {
      return function (s) {
        return function (i) {
          if (n) throw new TypeError("Generator is already executing.");

          for (; a;) {
            try {
              if (n = 1, r && (o = 2 & i[0] ? r.return : i[0] ? r.throw || ((o = r.return) && o.call(r), 0) : r.next) && !(o = o.call(r, i[1])).done) return o;

              switch (r = 0, o && (i = [2 & i[0], o.value]), i[0]) {
                case 0:
                case 1:
                  o = i;
                  break;

                case 4:
                  return a.label++, {
                    value: i[1],
                    done: !1
                  };

                case 5:
                  a.label++, r = i[1], i = [0];
                  continue;

                case 7:
                  i = a.ops.pop(), a.trys.pop();
                  continue;

                default:
                  if (!(o = a.trys, (o = o.length > 0 && o[o.length - 1]) || 6 !== i[0] && 2 !== i[0])) {
                    a = 0;
                    continue;
                  }

                  if (3 === i[0] && (!o || i[1] > o[0] && i[1] < o[3])) {
                    a.label = i[1];
                    break;
                  }

                  if (6 === i[0] && a.label < o[1]) {
                    a.label = o[1], o = i;
                    break;
                  }

                  if (o && a.label < o[2]) {
                    a.label = o[2], a.ops.push(i);
                    break;
                  }

                  o[2] && a.ops.pop(), a.trys.pop();
                  continue;
              }

              i = t.call(e, a);
            } catch (e) {
              i = [6, e], r = 0;
            } finally {
              n = o = 0;
            }
          }

          if (5 & i[0]) throw i[1];
          return {
            value: i[0] ? i[1] : void 0,
            done: !0
          };
        }([i, s]);
      };
    }
  },
      v = function (e) {
    function t(t) {
      var n = e.call(this) || this;

      if (n.logger = t, "undefined" == typeof fetch) {
        var r = require;
        n.jar = new (r("tough-cookie").CookieJar)(), n.fetchType = r("node-fetch"), n.fetchType = r("fetch-cookie")(n.fetchType, n.jar), n.abortControllerType = r("abort-controller");
      } else n.fetchType = fetch.bind(self), n.abortControllerType = AbortController;

      return n;
    }

    return p(t, e), t.prototype.send = function (e) {
      return g(this, void 0, void 0, function () {
        var t,
            n,
            r,
            o,
            c,
            l,
            h,
            p = this;
        return y(this, function (g) {
          switch (g.label) {
            case 0:
              if (e.abortSignal && e.abortSignal.aborted) throw new s();
              if (!e.method) throw new Error("No method defined.");
              if (!e.url) throw new Error("No url defined.");
              t = new this.abortControllerType(), e.abortSignal && (e.abortSignal.onabort = function () {
                t.abort(), n = new s();
              }), r = null, e.timeout && (o = e.timeout, r = setTimeout(function () {
                t.abort(), p.logger.log(f.a.Warning, "Timeout from HTTP request."), n = new a();
              }, o)), g.label = 1;

            case 1:
              return g.trys.push([1, 3, 4, 5]), [4, this.fetchType(e.url, {
                body: e.content,
                cache: "no-cache",
                credentials: !0 === e.withCredentials ? "include" : "same-origin",
                headers: d({
                  "Content-Type": "text/plain;charset=UTF-8",
                  "X-Requested-With": "XMLHttpRequest"
                }, e.headers),
                method: e.method,
                mode: "cors",
                redirect: "manual",
                signal: t.signal
              })];

            case 2:
              return c = g.sent(), [3, 5];

            case 3:
              if (l = g.sent(), n) throw n;
              throw this.logger.log(f.a.Warning, "Error from HTTP request. " + l + "."), l;

            case 4:
              return r && clearTimeout(r), e.abortSignal && (e.abortSignal.onabort = null), [7];

            case 5:
              if (!c.ok) throw new i(c.statusText, c.status);
              return [4, function (e, t) {
                var n;

                switch (t) {
                  case "arraybuffer":
                    n = e.arrayBuffer();
                    break;

                  case "text":
                    n = e.text();
                    break;

                  case "blob":
                  case "document":
                  case "json":
                    throw new Error(t + " is not supported.");

                  default:
                    n = e.text();
                }

                return n;
              }(c, e.responseType)];

            case 6:
              return h = g.sent(), [2, new u(c.status, c.statusText, h)];
          }
        });
      });
    }, t.prototype.getCookieString = function (e) {
      var t = "";
      return h.c.isNode && this.jar && this.jar.getCookies(e, function (e, n) {
        return t = n.join("; ");
      }), t;
    }, t;
  }(l);

  var b,
      m = function () {
    var e = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (e, t) {
      e.__proto__ = t;
    } || function (e, t) {
      for (var n in t) {
        t.hasOwnProperty(n) && (e[n] = t[n]);
      }
    };

    return function (t, n) {
      function r() {
        this.constructor = t;
      }

      e(t, n), t.prototype = null === n ? Object.create(n) : (r.prototype = n.prototype, new r());
    };
  }(),
      w = function (e) {
    function t(t) {
      var n = e.call(this) || this;
      return n.logger = t, n;
    }

    return m(t, e), t.prototype.send = function (e) {
      var t = this;
      return e.abortSignal && e.abortSignal.aborted ? Promise.reject(new s()) : e.method ? e.url ? new Promise(function (n, r) {
        var o = new XMLHttpRequest();
        o.open(e.method, e.url, !0), o.withCredentials = void 0 === e.withCredentials || e.withCredentials, o.setRequestHeader("X-Requested-With", "XMLHttpRequest"), o.setRequestHeader("Content-Type", "text/plain;charset=UTF-8");
        var c = e.headers;
        c && Object.keys(c).forEach(function (e) {
          o.setRequestHeader(e, c[e]);
        }), e.responseType && (o.responseType = e.responseType), e.abortSignal && (e.abortSignal.onabort = function () {
          o.abort(), r(new s());
        }), e.timeout && (o.timeout = e.timeout), o.onload = function () {
          e.abortSignal && (e.abortSignal.onabort = null), o.status >= 200 && o.status < 300 ? n(new u(o.status, o.statusText, o.response || o.responseText)) : r(new i(o.statusText, o.status));
        }, o.onerror = function () {
          t.logger.log(f.a.Warning, "Error from HTTP request. " + o.status + ": " + o.statusText + "."), r(new i(o.statusText, o.status));
        }, o.ontimeout = function () {
          t.logger.log(f.a.Warning, "Timeout from HTTP request."), r(new a());
        }, o.send(e.content || "");
      }) : Promise.reject(new Error("No url defined.")) : Promise.reject(new Error("No method defined."));
    }, t;
  }(l),
      E = function () {
    var e = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (e, t) {
      e.__proto__ = t;
    } || function (e, t) {
      for (var n in t) {
        t.hasOwnProperty(n) && (e[n] = t[n]);
      }
    };

    return function (t, n) {
      function r() {
        this.constructor = t;
      }

      e(t, n), t.prototype = null === n ? Object.create(n) : (r.prototype = n.prototype, new r());
    };
  }(),
      S = function (e) {
    function t(t) {
      var n = e.call(this) || this;
      if ("undefined" != typeof fetch || h.c.isNode) n.httpClient = new v(t);else {
        if ("undefined" == typeof XMLHttpRequest) throw new Error("No usable HttpClient found.");
        n.httpClient = new w(t);
      }
      return n;
    }

    return E(t, e), t.prototype.send = function (e) {
      return e.abortSignal && e.abortSignal.aborted ? Promise.reject(new s()) : e.method ? e.url ? this.httpClient.send(e) : Promise.reject(new Error("No url defined.")) : Promise.reject(new Error("No method defined."));
    }, t.prototype.getCookieString = function (e) {
      return this.httpClient.getCookieString(e);
    }, t;
  }(l),
      _ = n(47);

  !function (e) {
    e[e.Invocation = 1] = "Invocation", e[e.StreamItem = 2] = "StreamItem", e[e.Completion = 3] = "Completion", e[e.StreamInvocation = 4] = "StreamInvocation", e[e.CancelInvocation = 5] = "CancelInvocation", e[e.Ping = 6] = "Ping", e[e.Close = 7] = "Close";
  }(b || (b = {}));

  var I,
      C = function () {
    function e() {
      this.observers = [];
    }

    return e.prototype.next = function (e) {
      for (var t = 0, n = this.observers; t < n.length; t++) {
        n[t].next(e);
      }
    }, e.prototype.error = function (e) {
      for (var t = 0, n = this.observers; t < n.length; t++) {
        var r = n[t];
        r.error && r.error(e);
      }
    }, e.prototype.complete = function () {
      for (var e = 0, t = this.observers; e < t.length; e++) {
        var n = t[e];
        n.complete && n.complete();
      }
    }, e.prototype.subscribe = function (e) {
      return this.observers.push(e), new h.d(this, e);
    }, e;
  }(),
      k = function k(e, t, n, r) {
    return new (n || (n = Promise))(function (o, i) {
      function a(e) {
        try {
          c(r.next(e));
        } catch (e) {
          i(e);
        }
      }

      function s(e) {
        try {
          c(r.throw(e));
        } catch (e) {
          i(e);
        }
      }

      function c(e) {
        e.done ? o(e.value) : new n(function (t) {
          t(e.value);
        }).then(a, s);
      }

      c((r = r.apply(e, t || [])).next());
    });
  },
      T = function T(e, t) {
    var n,
        r,
        o,
        i,
        a = {
      label: 0,
      sent: function sent() {
        if (1 & o[0]) throw o[1];
        return o[1];
      },
      trys: [],
      ops: []
    };
    return i = {
      next: s(0),
      throw: s(1),
      return: s(2)
    }, "function" == typeof Symbol && (i[Symbol.iterator] = function () {
      return this;
    }), i;

    function s(i) {
      return function (s) {
        return function (i) {
          if (n) throw new TypeError("Generator is already executing.");

          for (; a;) {
            try {
              if (n = 1, r && (o = 2 & i[0] ? r.return : i[0] ? r.throw || ((o = r.return) && o.call(r), 0) : r.next) && !(o = o.call(r, i[1])).done) return o;

              switch (r = 0, o && (i = [2 & i[0], o.value]), i[0]) {
                case 0:
                case 1:
                  o = i;
                  break;

                case 4:
                  return a.label++, {
                    value: i[1],
                    done: !1
                  };

                case 5:
                  a.label++, r = i[1], i = [0];
                  continue;

                case 7:
                  i = a.ops.pop(), a.trys.pop();
                  continue;

                default:
                  if (!(o = a.trys, (o = o.length > 0 && o[o.length - 1]) || 6 !== i[0] && 2 !== i[0])) {
                    a = 0;
                    continue;
                  }

                  if (3 === i[0] && (!o || i[1] > o[0] && i[1] < o[3])) {
                    a.label = i[1];
                    break;
                  }

                  if (6 === i[0] && a.label < o[1]) {
                    a.label = o[1], o = i;
                    break;
                  }

                  if (o && a.label < o[2]) {
                    a.label = o[2], a.ops.push(i);
                    break;
                  }

                  o[2] && a.ops.pop(), a.trys.pop();
                  continue;
              }

              i = t.call(e, a);
            } catch (e) {
              i = [6, e], r = 0;
            } finally {
              n = o = 0;
            }
          }

          if (5 & i[0]) throw i[1];
          return {
            value: i[0] ? i[1] : void 0,
            done: !0
          };
        }([i, s]);
      };
    }
  };

  !function (e) {
    e.Disconnected = "Disconnected", e.Connecting = "Connecting", e.Connected = "Connected", e.Disconnecting = "Disconnecting", e.Reconnecting = "Reconnecting";
  }(I || (I = {}));

  var O,
      P,
      R = function () {
    function e(e, t, n, r) {
      var o = this;
      h.a.isRequired(e, "connection"), h.a.isRequired(t, "logger"), h.a.isRequired(n, "protocol"), this.serverTimeoutInMilliseconds = 3e4, this.keepAliveIntervalInMilliseconds = 15e3, this.logger = t, this.protocol = n, this.connection = e, this.reconnectPolicy = r, this.handshakeProtocol = new _.a(), this.connection.onreceive = function (e) {
        return o.processIncomingData(e);
      }, this.connection.onclose = function (e) {
        return o.connectionClosed(e);
      }, this.callbacks = {}, this.methods = {}, this.closedCallbacks = [], this.reconnectingCallbacks = [], this.reconnectedCallbacks = [], this.invocationId = 0, this.receivedHandshakeResponse = !1, this.connectionState = I.Disconnected, this.connectionStarted = !1, this.cachedPingMessage = this.protocol.writeMessage({
        type: b.Ping
      });
    }

    return e.create = function (t, n, r, o) {
      return new e(t, n, r, o);
    }, Object.defineProperty(e.prototype, "state", {
      get: function get() {
        return this.connectionState;
      },
      enumerable: !0,
      configurable: !0
    }), Object.defineProperty(e.prototype, "connectionId", {
      get: function get() {
        return this.connection && this.connection.connectionId || null;
      },
      enumerable: !0,
      configurable: !0
    }), Object.defineProperty(e.prototype, "baseUrl", {
      get: function get() {
        return this.connection.baseUrl || "";
      },
      set: function set(e) {
        if (this.connectionState !== I.Disconnected && this.connectionState !== I.Reconnecting) throw new Error("The HubConnection must be in the Disconnected or Reconnecting state to change the url.");
        if (!e) throw new Error("The HubConnection url must be a valid url.");
        this.connection.baseUrl = e;
      },
      enumerable: !0,
      configurable: !0
    }), e.prototype.start = function () {
      return this.startPromise = this.startWithStateTransitions(), this.startPromise;
    }, e.prototype.startWithStateTransitions = function () {
      return k(this, void 0, void 0, function () {
        var e;
        return T(this, function (t) {
          switch (t.label) {
            case 0:
              if (this.connectionState !== I.Disconnected) return [2, Promise.reject(new Error("Cannot start a HubConnection that is not in the 'Disconnected' state."))];
              this.connectionState = I.Connecting, this.logger.log(f.a.Debug, "Starting HubConnection."), t.label = 1;

            case 1:
              return t.trys.push([1, 3,, 4]), [4, this.startInternal()];

            case 2:
              return t.sent(), this.connectionState = I.Connected, this.connectionStarted = !0, this.logger.log(f.a.Debug, "HubConnection connected successfully."), [3, 4];

            case 3:
              return e = t.sent(), this.connectionState = I.Disconnected, this.logger.log(f.a.Debug, "HubConnection failed to start successfully because of error '" + e + "'."), [2, Promise.reject(e)];

            case 4:
              return [2];
          }
        });
      });
    }, e.prototype.startInternal = function () {
      return k(this, void 0, void 0, function () {
        var e,
            t,
            n,
            r = this;
        return T(this, function (o) {
          switch (o.label) {
            case 0:
              return this.stopDuringStartError = void 0, this.receivedHandshakeResponse = !1, e = new Promise(function (e, t) {
                r.handshakeResolver = e, r.handshakeRejecter = t;
              }), [4, this.connection.start(this.protocol.transferFormat)];

            case 1:
              o.sent(), o.label = 2;

            case 2:
              return o.trys.push([2, 5,, 7]), t = {
                protocol: this.protocol.name,
                version: this.protocol.version
              }, this.logger.log(f.a.Debug, "Sending handshake request."), [4, this.sendMessage(this.handshakeProtocol.writeHandshakeRequest(t))];

            case 3:
              return o.sent(), this.logger.log(f.a.Information, "Using HubProtocol '" + this.protocol.name + "'."), this.cleanupTimeout(), this.resetTimeoutPeriod(), this.resetKeepAliveInterval(), [4, e];

            case 4:
              if (o.sent(), this.stopDuringStartError) throw this.stopDuringStartError;
              return [3, 7];

            case 5:
              return n = o.sent(), this.logger.log(f.a.Debug, "Hub handshake failed with error '" + n + "' during start(). Stopping HubConnection."), this.cleanupTimeout(), this.cleanupPingTimer(), [4, this.connection.stop(n)];

            case 6:
              throw o.sent(), n;

            case 7:
              return [2];
          }
        });
      });
    }, e.prototype.stop = function () {
      return k(this, void 0, void 0, function () {
        var e;
        return T(this, function (t) {
          switch (t.label) {
            case 0:
              return e = this.startPromise, this.stopPromise = this.stopInternal(), [4, this.stopPromise];

            case 1:
              t.sent(), t.label = 2;

            case 2:
              return t.trys.push([2, 4,, 5]), [4, e];

            case 3:
              return t.sent(), [3, 5];

            case 4:
              return t.sent(), [3, 5];

            case 5:
              return [2];
          }
        });
      });
    }, e.prototype.stopInternal = function (e) {
      return this.connectionState === I.Disconnected ? (this.logger.log(f.a.Debug, "Call to HubConnection.stop(" + e + ") ignored because it is already in the disconnected state."), Promise.resolve()) : this.connectionState === I.Disconnecting ? (this.logger.log(f.a.Debug, "Call to HttpConnection.stop(" + e + ") ignored because the connection is already in the disconnecting state."), this.stopPromise) : (this.connectionState = I.Disconnecting, this.logger.log(f.a.Debug, "Stopping HubConnection."), this.reconnectDelayHandle ? (this.logger.log(f.a.Debug, "Connection stopped during reconnect delay. Done reconnecting."), clearTimeout(this.reconnectDelayHandle), this.reconnectDelayHandle = void 0, this.completeClose(), Promise.resolve()) : (this.cleanupTimeout(), this.cleanupPingTimer(), this.stopDuringStartError = e || new Error("The connection was stopped before the hub handshake could complete."), this.connection.stop(e)));
    }, e.prototype.stream = function (e) {
      for (var t = this, n = [], r = 1; r < arguments.length; r++) {
        n[r - 1] = arguments[r];
      }

      var o,
          i = this.replaceStreamingParams(n),
          a = i[0],
          s = i[1],
          c = this.createStreamInvocation(e, n, s),
          u = new C();
      return u.cancelCallback = function () {
        var e = t.createCancelInvocation(c.invocationId);
        return delete t.callbacks[c.invocationId], o.then(function () {
          return t.sendWithProtocol(e);
        });
      }, this.callbacks[c.invocationId] = function (e, t) {
        t ? u.error(t) : e && (e.type === b.Completion ? e.error ? u.error(new Error(e.error)) : u.complete() : u.next(e.item));
      }, o = this.sendWithProtocol(c).catch(function (e) {
        u.error(e), delete t.callbacks[c.invocationId];
      }), this.launchStreams(a, o), u;
    }, e.prototype.sendMessage = function (e) {
      return this.resetKeepAliveInterval(), this.connection.send(e);
    }, e.prototype.sendWithProtocol = function (e) {
      return this.sendMessage(this.protocol.writeMessage(e));
    }, e.prototype.send = function (e) {
      for (var t = [], n = 1; n < arguments.length; n++) {
        t[n - 1] = arguments[n];
      }

      var r = this.replaceStreamingParams(t),
          o = r[0],
          i = r[1],
          a = this.sendWithProtocol(this.createInvocation(e, t, !0, i));
      return this.launchStreams(o, a), a;
    }, e.prototype.invoke = function (e) {
      for (var t = this, n = [], r = 1; r < arguments.length; r++) {
        n[r - 1] = arguments[r];
      }

      var o = this.replaceStreamingParams(n),
          i = o[0],
          a = o[1],
          s = this.createInvocation(e, n, !1, a),
          c = new Promise(function (e, n) {
        t.callbacks[s.invocationId] = function (t, r) {
          r ? n(r) : t && (t.type === b.Completion ? t.error ? n(new Error(t.error)) : e(t.result) : n(new Error("Unexpected message type: " + t.type)));
        };

        var r = t.sendWithProtocol(s).catch(function (e) {
          n(e), delete t.callbacks[s.invocationId];
        });
        t.launchStreams(i, r);
      });
      return c;
    }, e.prototype.on = function (e, t) {
      e && t && (e = e.toLowerCase(), this.methods[e] || (this.methods[e] = []), -1 === this.methods[e].indexOf(t) && this.methods[e].push(t));
    }, e.prototype.off = function (e, t) {
      if (e) {
        e = e.toLowerCase();
        var n = this.methods[e];
        if (n) if (t) {
          var r = n.indexOf(t);
          -1 !== r && (n.splice(r, 1), 0 === n.length && delete this.methods[e]);
        } else delete this.methods[e];
      }
    }, e.prototype.onclose = function (e) {
      e && this.closedCallbacks.push(e);
    }, e.prototype.onreconnecting = function (e) {
      e && this.reconnectingCallbacks.push(e);
    }, e.prototype.onreconnected = function (e) {
      e && this.reconnectedCallbacks.push(e);
    }, e.prototype.processIncomingData = function (e) {
      if (this.cleanupTimeout(), this.receivedHandshakeResponse || (e = this.processHandshakeResponse(e), this.receivedHandshakeResponse = !0), e) for (var t = 0, n = this.protocol.parseMessages(e, this.logger); t < n.length; t++) {
        var r = n[t];

        switch (r.type) {
          case b.Invocation:
            this.invokeClientMethod(r);
            break;

          case b.StreamItem:
          case b.Completion:
            var o = this.callbacks[r.invocationId];
            o && (r.type === b.Completion && delete this.callbacks[r.invocationId], o(r));
            break;

          case b.Ping:
            break;

          case b.Close:
            this.logger.log(f.a.Information, "Close message received from server.");
            var i = r.error ? new Error("Server returned an error on close: " + r.error) : void 0;
            !0 === r.allowReconnect ? this.connection.stop(i) : this.stopPromise = this.stopInternal(i);
            break;

          default:
            this.logger.log(f.a.Warning, "Invalid message type: " + r.type + ".");
        }
      }
      this.resetTimeoutPeriod();
    }, e.prototype.processHandshakeResponse = function (e) {
      var t, n, r;

      try {
        r = (t = this.handshakeProtocol.parseHandshakeResponse(e))[0], n = t[1];
      } catch (e) {
        var o = "Error parsing handshake response: " + e;
        this.logger.log(f.a.Error, o);
        var i = new Error(o);
        throw this.handshakeRejecter(i), i;
      }

      if (n.error) {
        o = "Server returned handshake error: " + n.error;
        this.logger.log(f.a.Error, o);
        i = new Error(o);
        throw this.handshakeRejecter(i), i;
      }

      return this.logger.log(f.a.Debug, "Server handshake complete."), this.handshakeResolver(), r;
    }, e.prototype.resetKeepAliveInterval = function () {
      var e = this;
      this.connection.features.inherentKeepAlive || (this.cleanupPingTimer(), this.pingServerHandle = setTimeout(function () {
        return k(e, void 0, void 0, function () {
          return T(this, function (e) {
            switch (e.label) {
              case 0:
                if (this.connectionState !== I.Connected) return [3, 4];
                e.label = 1;

              case 1:
                return e.trys.push([1, 3,, 4]), [4, this.sendMessage(this.cachedPingMessage)];

              case 2:
                return e.sent(), [3, 4];

              case 3:
                return e.sent(), this.cleanupPingTimer(), [3, 4];

              case 4:
                return [2];
            }
          });
        });
      }, this.keepAliveIntervalInMilliseconds));
    }, e.prototype.resetTimeoutPeriod = function () {
      var e = this;
      this.connection.features && this.connection.features.inherentKeepAlive || (this.timeoutHandle = setTimeout(function () {
        return e.serverTimeout();
      }, this.serverTimeoutInMilliseconds));
    }, e.prototype.serverTimeout = function () {
      this.connection.stop(new Error("Server timeout elapsed without receiving a message from the server."));
    }, e.prototype.invokeClientMethod = function (e) {
      var t = this,
          n = this.methods[e.target.toLowerCase()];

      if (n) {
        try {
          n.forEach(function (n) {
            return n.apply(t, e.arguments);
          });
        } catch (t) {
          this.logger.log(f.a.Error, "A callback for the method " + e.target.toLowerCase() + " threw error '" + t + "'.");
        }

        if (e.invocationId) {
          var r = "Server requested a response, which is not supported in this version of the client.";
          this.logger.log(f.a.Error, r), this.stopPromise = this.stopInternal(new Error(r));
        }
      } else this.logger.log(f.a.Warning, "No client method with the name '" + e.target + "' found.");
    }, e.prototype.connectionClosed = function (e) {
      this.logger.log(f.a.Debug, "HubConnection.connectionClosed(" + e + ") called while in state " + this.connectionState + "."), this.stopDuringStartError = this.stopDuringStartError || e || new Error("The underlying connection was closed before the hub handshake could complete."), this.handshakeResolver && this.handshakeResolver(), this.cancelCallbacksWithError(e || new Error("Invocation canceled due to the underlying connection being closed.")), this.cleanupTimeout(), this.cleanupPingTimer(), this.connectionState === I.Disconnecting ? this.completeClose(e) : this.connectionState === I.Connected && this.reconnectPolicy ? this.reconnect(e) : this.connectionState === I.Connected && this.completeClose(e);
    }, e.prototype.completeClose = function (e) {
      var t = this;

      if (this.connectionStarted) {
        this.connectionState = I.Disconnected, this.connectionStarted = !1;

        try {
          this.closedCallbacks.forEach(function (n) {
            return n.apply(t, [e]);
          });
        } catch (t) {
          this.logger.log(f.a.Error, "An onclose callback called with error '" + e + "' threw error '" + t + "'.");
        }
      }
    }, e.prototype.reconnect = function (e) {
      return k(this, void 0, void 0, function () {
        var t,
            n,
            r,
            o,
            i,
            a = this;
        return T(this, function (s) {
          switch (s.label) {
            case 0:
              if (t = Date.now(), n = 0, r = void 0 !== e ? e : new Error("Attempting to reconnect due to a unknown error."), null === (o = this.getNextRetryDelay(n++, 0, r))) return this.logger.log(f.a.Debug, "Connection not reconnecting because the IRetryPolicy returned null on the first reconnect attempt."), this.completeClose(e), [2];

              if (this.connectionState = I.Reconnecting, e ? this.logger.log(f.a.Information, "Connection reconnecting because of error '" + e + "'.") : this.logger.log(f.a.Information, "Connection reconnecting."), this.onreconnecting) {
                try {
                  this.reconnectingCallbacks.forEach(function (t) {
                    return t.apply(a, [e]);
                  });
                } catch (t) {
                  this.logger.log(f.a.Error, "An onreconnecting callback called with error '" + e + "' threw error '" + t + "'.");
                }

                if (this.connectionState !== I.Reconnecting) return this.logger.log(f.a.Debug, "Connection left the reconnecting state in onreconnecting callback. Done reconnecting."), [2];
              }

              s.label = 1;

            case 1:
              return null === o ? [3, 7] : (this.logger.log(f.a.Information, "Reconnect attempt number " + n + " will start in " + o + " ms."), [4, new Promise(function (e) {
                a.reconnectDelayHandle = setTimeout(e, o);
              })]);

            case 2:
              if (s.sent(), this.reconnectDelayHandle = void 0, this.connectionState !== I.Reconnecting) return this.logger.log(f.a.Debug, "Connection left the reconnecting state during reconnect delay. Done reconnecting."), [2];
              s.label = 3;

            case 3:
              return s.trys.push([3, 5,, 6]), [4, this.startInternal()];

            case 4:
              if (s.sent(), this.connectionState = I.Connected, this.logger.log(f.a.Information, "HubConnection reconnected successfully."), this.onreconnected) try {
                this.reconnectedCallbacks.forEach(function (e) {
                  return e.apply(a, [a.connection.connectionId]);
                });
              } catch (e) {
                this.logger.log(f.a.Error, "An onreconnected callback called with connectionId '" + this.connection.connectionId + "; threw error '" + e + "'.");
              }
              return [2];

            case 5:
              return i = s.sent(), this.logger.log(f.a.Information, "Reconnect attempt failed because of error '" + i + "'."), this.connectionState !== I.Reconnecting ? (this.logger.log(f.a.Debug, "Connection left the reconnecting state during reconnect attempt. Done reconnecting."), [2]) : (r = i instanceof Error ? i : new Error(i.toString()), o = this.getNextRetryDelay(n++, Date.now() - t, r), [3, 6]);

            case 6:
              return [3, 1];

            case 7:
              return this.logger.log(f.a.Information, "Reconnect retries have been exhausted after " + (Date.now() - t) + " ms and " + n + " failed attempts. Connection disconnecting."), this.completeClose(), [2];
          }
        });
      });
    }, e.prototype.getNextRetryDelay = function (e, t, n) {
      try {
        return this.reconnectPolicy.nextRetryDelayInMilliseconds({
          elapsedMilliseconds: t,
          previousRetryCount: e,
          retryReason: n
        });
      } catch (n) {
        return this.logger.log(f.a.Error, "IRetryPolicy.nextRetryDelayInMilliseconds(" + e + ", " + t + ") threw error '" + n + "'."), null;
      }
    }, e.prototype.cancelCallbacksWithError = function (e) {
      var t = this.callbacks;
      this.callbacks = {}, Object.keys(t).forEach(function (n) {
        (0, t[n])(null, e);
      });
    }, e.prototype.cleanupPingTimer = function () {
      this.pingServerHandle && clearTimeout(this.pingServerHandle);
    }, e.prototype.cleanupTimeout = function () {
      this.timeoutHandle && clearTimeout(this.timeoutHandle);
    }, e.prototype.createInvocation = function (e, t, n, r) {
      if (n) return 0 !== r.length ? {
        arguments: t,
        streamIds: r,
        target: e,
        type: b.Invocation
      } : {
        arguments: t,
        target: e,
        type: b.Invocation
      };
      var o = this.invocationId;
      return this.invocationId++, 0 !== r.length ? {
        arguments: t,
        invocationId: o.toString(),
        streamIds: r,
        target: e,
        type: b.Invocation
      } : {
        arguments: t,
        invocationId: o.toString(),
        target: e,
        type: b.Invocation
      };
    }, e.prototype.launchStreams = function (e, t) {
      var n = this;

      if (0 !== e.length) {
        t || (t = Promise.resolve());

        var r = function r(_r) {
          e[_r].subscribe({
            complete: function complete() {
              t = t.then(function () {
                return n.sendWithProtocol(n.createCompletionMessage(_r));
              });
            },
            error: function error(e) {
              var o;
              o = e instanceof Error ? e.message : e && e.toString ? e.toString() : "Unknown error", t = t.then(function () {
                return n.sendWithProtocol(n.createCompletionMessage(_r, o));
              });
            },
            next: function next(e) {
              t = t.then(function () {
                return n.sendWithProtocol(n.createStreamItemMessage(_r, e));
              });
            }
          });
        };

        for (var o in e) {
          r(o);
        }
      }
    }, e.prototype.replaceStreamingParams = function (e) {
      for (var t = [], n = [], r = 0; r < e.length; r++) {
        var o = e[r];

        if (this.isObservable(o)) {
          var i = this.invocationId;
          this.invocationId++, t[i] = o, n.push(i.toString()), e.splice(r, 1);
        }
      }

      return [t, n];
    }, e.prototype.isObservable = function (e) {
      return e && e.subscribe && "function" == typeof e.subscribe;
    }, e.prototype.createStreamInvocation = function (e, t, n) {
      var r = this.invocationId;
      return this.invocationId++, 0 !== n.length ? {
        arguments: t,
        invocationId: r.toString(),
        streamIds: n,
        target: e,
        type: b.StreamInvocation
      } : {
        arguments: t,
        invocationId: r.toString(),
        target: e,
        type: b.StreamInvocation
      };
    }, e.prototype.createCancelInvocation = function (e) {
      return {
        invocationId: e,
        type: b.CancelInvocation
      };
    }, e.prototype.createStreamItemMessage = function (e, t) {
      return {
        invocationId: e,
        item: t,
        type: b.StreamItem
      };
    }, e.prototype.createCompletionMessage = function (e, t, n) {
      return t ? {
        error: t,
        invocationId: e,
        type: b.Completion
      } : {
        invocationId: e,
        result: n,
        type: b.Completion
      };
    }, e;
  }(),
      x = [0, 2e3, 1e4, 3e4, null],
      D = function () {
    function e(e) {
      this.retryDelays = void 0 !== e ? e.concat([null]) : x;
    }

    return e.prototype.nextRetryDelayInMilliseconds = function (e) {
      return this.retryDelays[e.previousRetryCount];
    }, e;
  }();

  !function (e) {
    e[e.None = 0] = "None", e[e.WebSockets = 1] = "WebSockets", e[e.ServerSentEvents = 2] = "ServerSentEvents", e[e.LongPolling = 4] = "LongPolling";
  }(O || (O = {})), function (e) {
    e[e.Text = 1] = "Text", e[e.Binary = 2] = "Binary";
  }(P || (P = {}));

  var A = function () {
    function e() {
      this.isAborted = !1, this.onabort = null;
    }

    return e.prototype.abort = function () {
      this.isAborted || (this.isAborted = !0, this.onabort && this.onabort());
    }, Object.defineProperty(e.prototype, "signal", {
      get: function get() {
        return this;
      },
      enumerable: !0,
      configurable: !0
    }), Object.defineProperty(e.prototype, "aborted", {
      get: function get() {
        return this.isAborted;
      },
      enumerable: !0,
      configurable: !0
    }), e;
  }(),
      M = Object.assign || function (e) {
    for (var t, n = 1, r = arguments.length; n < r; n++) {
      for (var o in t = arguments[n]) {
        Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
      }
    }

    return e;
  },
      L = function L(e, t, n, r) {
    return new (n || (n = Promise))(function (o, i) {
      function a(e) {
        try {
          c(r.next(e));
        } catch (e) {
          i(e);
        }
      }

      function s(e) {
        try {
          c(r.throw(e));
        } catch (e) {
          i(e);
        }
      }

      function c(e) {
        e.done ? o(e.value) : new n(function (t) {
          t(e.value);
        }).then(a, s);
      }

      c((r = r.apply(e, t || [])).next());
    });
  },
      j = function j(e, t) {
    var n,
        r,
        o,
        i,
        a = {
      label: 0,
      sent: function sent() {
        if (1 & o[0]) throw o[1];
        return o[1];
      },
      trys: [],
      ops: []
    };
    return i = {
      next: s(0),
      throw: s(1),
      return: s(2)
    }, "function" == typeof Symbol && (i[Symbol.iterator] = function () {
      return this;
    }), i;

    function s(i) {
      return function (s) {
        return function (i) {
          if (n) throw new TypeError("Generator is already executing.");

          for (; a;) {
            try {
              if (n = 1, r && (o = 2 & i[0] ? r.return : i[0] ? r.throw || ((o = r.return) && o.call(r), 0) : r.next) && !(o = o.call(r, i[1])).done) return o;

              switch (r = 0, o && (i = [2 & i[0], o.value]), i[0]) {
                case 0:
                case 1:
                  o = i;
                  break;

                case 4:
                  return a.label++, {
                    value: i[1],
                    done: !1
                  };

                case 5:
                  a.label++, r = i[1], i = [0];
                  continue;

                case 7:
                  i = a.ops.pop(), a.trys.pop();
                  continue;

                default:
                  if (!(o = a.trys, (o = o.length > 0 && o[o.length - 1]) || 6 !== i[0] && 2 !== i[0])) {
                    a = 0;
                    continue;
                  }

                  if (3 === i[0] && (!o || i[1] > o[0] && i[1] < o[3])) {
                    a.label = i[1];
                    break;
                  }

                  if (6 === i[0] && a.label < o[1]) {
                    a.label = o[1], o = i;
                    break;
                  }

                  if (o && a.label < o[2]) {
                    a.label = o[2], a.ops.push(i);
                    break;
                  }

                  o[2] && a.ops.pop(), a.trys.pop();
                  continue;
              }

              i = t.call(e, a);
            } catch (e) {
              i = [6, e], r = 0;
            } finally {
              n = o = 0;
            }
          }

          if (5 & i[0]) throw i[1];
          return {
            value: i[0] ? i[1] : void 0,
            done: !0
          };
        }([i, s]);
      };
    }
  },
      B = function () {
    function e(e, t, n, r, o, i) {
      this.httpClient = e, this.accessTokenFactory = t, this.logger = n, this.pollAbort = new A(), this.logMessageContent = r, this.withCredentials = o, this.headers = i, this.running = !1, this.onreceive = null, this.onclose = null;
    }

    return Object.defineProperty(e.prototype, "pollAborted", {
      get: function get() {
        return this.pollAbort.aborted;
      },
      enumerable: !0,
      configurable: !0
    }), e.prototype.connect = function (e, t) {
      return L(this, void 0, void 0, function () {
        var n, r, o, a, s, c, u, l, p;
        return j(this, function (d) {
          switch (d.label) {
            case 0:
              if (h.a.isRequired(e, "url"), h.a.isRequired(t, "transferFormat"), h.a.isIn(t, P, "transferFormat"), this.url = e, this.logger.log(f.a.Trace, "(LongPolling transport) Connecting."), t === P.Binary && "undefined" != typeof XMLHttpRequest && "string" != typeof new XMLHttpRequest().responseType) throw new Error("Binary protocols over XmlHttpRequest not implementing advanced features are not supported.");
              return r = Object(h.h)(), o = r[0], a = r[1], s = M(((n = {})[o] = a, n), this.headers), c = {
                abortSignal: this.pollAbort.signal,
                headers: s,
                timeout: 1e5,
                withCredentials: this.withCredentials
              }, t === P.Binary && (c.responseType = "arraybuffer"), [4, this.getAccessToken()];

            case 1:
              return u = d.sent(), this.updateHeaderToken(c, u), l = e + "&_=" + Date.now(), this.logger.log(f.a.Trace, "(LongPolling transport) polling: " + l + "."), [4, this.httpClient.get(l, c)];

            case 2:
              return 200 !== (p = d.sent()).statusCode ? (this.logger.log(f.a.Error, "(LongPolling transport) Unexpected response code: " + p.statusCode + "."), this.closeError = new i(p.statusText || "", p.statusCode), this.running = !1) : this.running = !0, this.receiving = this.poll(this.url, c), [2];
          }
        });
      });
    }, e.prototype.getAccessToken = function () {
      return L(this, void 0, void 0, function () {
        return j(this, function (e) {
          switch (e.label) {
            case 0:
              return this.accessTokenFactory ? [4, this.accessTokenFactory()] : [3, 2];

            case 1:
              return [2, e.sent()];

            case 2:
              return [2, null];
          }
        });
      });
    }, e.prototype.updateHeaderToken = function (e, t) {
      e.headers || (e.headers = {}), t ? e.headers.Authorization = "Bearer " + t : e.headers.Authorization && delete e.headers.Authorization;
    }, e.prototype.poll = function (e, t) {
      return L(this, void 0, void 0, function () {
        var n, r, o, s;
        return j(this, function (c) {
          switch (c.label) {
            case 0:
              c.trys.push([0,, 8, 9]), c.label = 1;

            case 1:
              return this.running ? [4, this.getAccessToken()] : [3, 7];

            case 2:
              n = c.sent(), this.updateHeaderToken(t, n), c.label = 3;

            case 3:
              return c.trys.push([3, 5,, 6]), r = e + "&_=" + Date.now(), this.logger.log(f.a.Trace, "(LongPolling transport) polling: " + r + "."), [4, this.httpClient.get(r, t)];

            case 4:
              return 204 === (o = c.sent()).statusCode ? (this.logger.log(f.a.Information, "(LongPolling transport) Poll terminated by server."), this.running = !1) : 200 !== o.statusCode ? (this.logger.log(f.a.Error, "(LongPolling transport) Unexpected response code: " + o.statusCode + "."), this.closeError = new i(o.statusText || "", o.statusCode), this.running = !1) : o.content ? (this.logger.log(f.a.Trace, "(LongPolling transport) data received. " + Object(h.g)(o.content, this.logMessageContent) + "."), this.onreceive && this.onreceive(o.content)) : this.logger.log(f.a.Trace, "(LongPolling transport) Poll timed out, reissuing."), [3, 6];

            case 5:
              return s = c.sent(), this.running ? s instanceof a ? this.logger.log(f.a.Trace, "(LongPolling transport) Poll timed out, reissuing.") : (this.closeError = s, this.running = !1) : this.logger.log(f.a.Trace, "(LongPolling transport) Poll errored after shutdown: " + s.message), [3, 6];

            case 6:
              return [3, 1];

            case 7:
              return [3, 9];

            case 8:
              return this.logger.log(f.a.Trace, "(LongPolling transport) Polling complete."), this.pollAborted || this.raiseOnClose(), [7];

            case 9:
              return [2];
          }
        });
      });
    }, e.prototype.send = function (e) {
      return L(this, void 0, void 0, function () {
        return j(this, function (t) {
          return this.running ? [2, Object(h.j)(this.logger, "LongPolling", this.httpClient, this.url, this.accessTokenFactory, e, this.logMessageContent, this.withCredentials, this.headers)] : [2, Promise.reject(new Error("Cannot send until the transport is connected"))];
        });
      });
    }, e.prototype.stop = function () {
      return L(this, void 0, void 0, function () {
        var e, t, n, r, o, i;
        return j(this, function (a) {
          switch (a.label) {
            case 0:
              this.logger.log(f.a.Trace, "(LongPolling transport) Stopping polling."), this.running = !1, this.pollAbort.abort(), a.label = 1;

            case 1:
              return a.trys.push([1,, 5, 6]), [4, this.receiving];

            case 2:
              return a.sent(), this.logger.log(f.a.Trace, "(LongPolling transport) sending DELETE request to " + this.url + "."), e = {}, t = Object(h.h)(), n = t[0], r = t[1], e[n] = r, o = {
                headers: M({}, e, this.headers),
                withCredentials: this.withCredentials
              }, [4, this.getAccessToken()];

            case 3:
              return i = a.sent(), this.updateHeaderToken(o, i), [4, this.httpClient.delete(this.url, o)];

            case 4:
              return a.sent(), this.logger.log(f.a.Trace, "(LongPolling transport) DELETE request sent."), [3, 6];

            case 5:
              return this.logger.log(f.a.Trace, "(LongPolling transport) Stop finished."), this.raiseOnClose(), [7];

            case 6:
              return [2];
          }
        });
      });
    }, e.prototype.raiseOnClose = function () {
      if (this.onclose) {
        var e = "(LongPolling transport) Firing onclose event.";
        this.closeError && (e += " Error: " + this.closeError), this.logger.log(f.a.Trace, e), this.onclose(this.closeError);
      }
    }, e;
  }(),
      N = Object.assign || function (e) {
    for (var t, n = 1, r = arguments.length; n < r; n++) {
      for (var o in t = arguments[n]) {
        Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
      }
    }

    return e;
  },
      U = function U(e, t, n, r) {
    return new (n || (n = Promise))(function (o, i) {
      function a(e) {
        try {
          c(r.next(e));
        } catch (e) {
          i(e);
        }
      }

      function s(e) {
        try {
          c(r.throw(e));
        } catch (e) {
          i(e);
        }
      }

      function c(e) {
        e.done ? o(e.value) : new n(function (t) {
          t(e.value);
        }).then(a, s);
      }

      c((r = r.apply(e, t || [])).next());
    });
  },
      F = function F(e, t) {
    var n,
        r,
        o,
        i,
        a = {
      label: 0,
      sent: function sent() {
        if (1 & o[0]) throw o[1];
        return o[1];
      },
      trys: [],
      ops: []
    };
    return i = {
      next: s(0),
      throw: s(1),
      return: s(2)
    }, "function" == typeof Symbol && (i[Symbol.iterator] = function () {
      return this;
    }), i;

    function s(i) {
      return function (s) {
        return function (i) {
          if (n) throw new TypeError("Generator is already executing.");

          for (; a;) {
            try {
              if (n = 1, r && (o = 2 & i[0] ? r.return : i[0] ? r.throw || ((o = r.return) && o.call(r), 0) : r.next) && !(o = o.call(r, i[1])).done) return o;

              switch (r = 0, o && (i = [2 & i[0], o.value]), i[0]) {
                case 0:
                case 1:
                  o = i;
                  break;

                case 4:
                  return a.label++, {
                    value: i[1],
                    done: !1
                  };

                case 5:
                  a.label++, r = i[1], i = [0];
                  continue;

                case 7:
                  i = a.ops.pop(), a.trys.pop();
                  continue;

                default:
                  if (!(o = a.trys, (o = o.length > 0 && o[o.length - 1]) || 6 !== i[0] && 2 !== i[0])) {
                    a = 0;
                    continue;
                  }

                  if (3 === i[0] && (!o || i[1] > o[0] && i[1] < o[3])) {
                    a.label = i[1];
                    break;
                  }

                  if (6 === i[0] && a.label < o[1]) {
                    a.label = o[1], o = i;
                    break;
                  }

                  if (o && a.label < o[2]) {
                    a.label = o[2], a.ops.push(i);
                    break;
                  }

                  o[2] && a.ops.pop(), a.trys.pop();
                  continue;
              }

              i = t.call(e, a);
            } catch (e) {
              i = [6, e], r = 0;
            } finally {
              n = o = 0;
            }
          }

          if (5 & i[0]) throw i[1];
          return {
            value: i[0] ? i[1] : void 0,
            done: !0
          };
        }([i, s]);
      };
    }
  },
      H = function () {
    function e(e, t, n, r, o, i, a) {
      this.httpClient = e, this.accessTokenFactory = t, this.logger = n, this.logMessageContent = r, this.withCredentials = i, this.eventSourceConstructor = o, this.headers = a, this.onreceive = null, this.onclose = null;
    }

    return e.prototype.connect = function (e, t) {
      return U(this, void 0, void 0, function () {
        var n,
            r = this;
        return F(this, function (o) {
          switch (o.label) {
            case 0:
              return h.a.isRequired(e, "url"), h.a.isRequired(t, "transferFormat"), h.a.isIn(t, P, "transferFormat"), this.logger.log(f.a.Trace, "(SSE transport) Connecting."), this.url = e, this.accessTokenFactory ? [4, this.accessTokenFactory()] : [3, 2];

            case 1:
              (n = o.sent()) && (e += (e.indexOf("?") < 0 ? "?" : "&") + "access_token=" + encodeURIComponent(n)), o.label = 2;

            case 2:
              return [2, new Promise(function (n, o) {
                var i = !1;

                if (t === P.Text) {
                  var a;
                  if (h.c.isBrowser || h.c.isWebWorker) a = new r.eventSourceConstructor(e, {
                    withCredentials: r.withCredentials
                  });else {
                    var s = r.httpClient.getCookieString(e),
                        c = {};
                    c.Cookie = s;
                    var u = Object(h.h)(),
                        l = u[0],
                        p = u[1];
                    c[l] = p, a = new r.eventSourceConstructor(e, {
                      withCredentials: r.withCredentials,
                      headers: N({}, c, r.headers)
                    });
                  }

                  try {
                    a.onmessage = function (e) {
                      if (r.onreceive) try {
                        r.logger.log(f.a.Trace, "(SSE transport) data received. " + Object(h.g)(e.data, r.logMessageContent) + "."), r.onreceive(e.data);
                      } catch (e) {
                        return void r.close(e);
                      }
                    }, a.onerror = function (e) {
                      var t = new Error(e.data || "Error occurred");
                      i ? r.close(t) : o(t);
                    }, a.onopen = function () {
                      r.logger.log(f.a.Information, "SSE connected to " + r.url), r.eventSource = a, i = !0, n();
                    };
                  } catch (e) {
                    return void o(e);
                  }
                } else o(new Error("The Server-Sent Events transport only supports the 'Text' transfer format"));
              })];
          }
        });
      });
    }, e.prototype.send = function (e) {
      return U(this, void 0, void 0, function () {
        return F(this, function (t) {
          return this.eventSource ? [2, Object(h.j)(this.logger, "SSE", this.httpClient, this.url, this.accessTokenFactory, e, this.logMessageContent, this.withCredentials, this.headers)] : [2, Promise.reject(new Error("Cannot send until the transport is connected"))];
        });
      });
    }, e.prototype.stop = function () {
      return this.close(), Promise.resolve();
    }, e.prototype.close = function (e) {
      this.eventSource && (this.eventSource.close(), this.eventSource = void 0, this.onclose && this.onclose(e));
    }, e;
  }(),
      W = Object.assign || function (e) {
    for (var t, n = 1, r = arguments.length; n < r; n++) {
      for (var o in t = arguments[n]) {
        Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
      }
    }

    return e;
  },
      q = function q(e, t, n, r) {
    return new (n || (n = Promise))(function (o, i) {
      function a(e) {
        try {
          c(r.next(e));
        } catch (e) {
          i(e);
        }
      }

      function s(e) {
        try {
          c(r.throw(e));
        } catch (e) {
          i(e);
        }
      }

      function c(e) {
        e.done ? o(e.value) : new n(function (t) {
          t(e.value);
        }).then(a, s);
      }

      c((r = r.apply(e, t || [])).next());
    });
  },
      z = function z(e, t) {
    var n,
        r,
        o,
        i,
        a = {
      label: 0,
      sent: function sent() {
        if (1 & o[0]) throw o[1];
        return o[1];
      },
      trys: [],
      ops: []
    };
    return i = {
      next: s(0),
      throw: s(1),
      return: s(2)
    }, "function" == typeof Symbol && (i[Symbol.iterator] = function () {
      return this;
    }), i;

    function s(i) {
      return function (s) {
        return function (i) {
          if (n) throw new TypeError("Generator is already executing.");

          for (; a;) {
            try {
              if (n = 1, r && (o = 2 & i[0] ? r.return : i[0] ? r.throw || ((o = r.return) && o.call(r), 0) : r.next) && !(o = o.call(r, i[1])).done) return o;

              switch (r = 0, o && (i = [2 & i[0], o.value]), i[0]) {
                case 0:
                case 1:
                  o = i;
                  break;

                case 4:
                  return a.label++, {
                    value: i[1],
                    done: !1
                  };

                case 5:
                  a.label++, r = i[1], i = [0];
                  continue;

                case 7:
                  i = a.ops.pop(), a.trys.pop();
                  continue;

                default:
                  if (!(o = a.trys, (o = o.length > 0 && o[o.length - 1]) || 6 !== i[0] && 2 !== i[0])) {
                    a = 0;
                    continue;
                  }

                  if (3 === i[0] && (!o || i[1] > o[0] && i[1] < o[3])) {
                    a.label = i[1];
                    break;
                  }

                  if (6 === i[0] && a.label < o[1]) {
                    a.label = o[1], o = i;
                    break;
                  }

                  if (o && a.label < o[2]) {
                    a.label = o[2], a.ops.push(i);
                    break;
                  }

                  o[2] && a.ops.pop(), a.trys.pop();
                  continue;
              }

              i = t.call(e, a);
            } catch (e) {
              i = [6, e], r = 0;
            } finally {
              n = o = 0;
            }
          }

          if (5 & i[0]) throw i[1];
          return {
            value: i[0] ? i[1] : void 0,
            done: !0
          };
        }([i, s]);
      };
    }
  },
      J = function () {
    function e(e, t, n, r, o, i) {
      this.logger = n, this.accessTokenFactory = t, this.logMessageContent = r, this.webSocketConstructor = o, this.httpClient = e, this.onreceive = null, this.onclose = null, this.headers = i;
    }

    return e.prototype.connect = function (e, t) {
      return q(this, void 0, void 0, function () {
        var n,
            r = this;
        return z(this, function (o) {
          switch (o.label) {
            case 0:
              return h.a.isRequired(e, "url"), h.a.isRequired(t, "transferFormat"), h.a.isIn(t, P, "transferFormat"), this.logger.log(f.a.Trace, "(WebSockets transport) Connecting."), this.accessTokenFactory ? [4, this.accessTokenFactory()] : [3, 2];

            case 1:
              (n = o.sent()) && (e += (e.indexOf("?") < 0 ? "?" : "&") + "access_token=" + encodeURIComponent(n)), o.label = 2;

            case 2:
              return [2, new Promise(function (n, o) {
                var i;
                e = e.replace(/^http/, "ws");
                var a = r.httpClient.getCookieString(e),
                    s = !1;

                if (h.c.isNode) {
                  var c = {},
                      u = Object(h.h)(),
                      l = u[0],
                      p = u[1];
                  c[l] = p, a && (c.Cookie = "" + a), i = new r.webSocketConstructor(e, void 0, {
                    headers: W({}, c, r.headers)
                  });
                }

                i || (i = new r.webSocketConstructor(e)), t === P.Binary && (i.binaryType = "arraybuffer"), i.onopen = function (t) {
                  r.logger.log(f.a.Information, "WebSocket connected to " + e + "."), r.webSocket = i, s = !0, n();
                }, i.onerror = function (e) {
                  var t = null;
                  t = "undefined" != typeof ErrorEvent && e instanceof ErrorEvent ? e.error : new Error("There was an error with the transport."), o(t);
                }, i.onmessage = function (e) {
                  if (r.logger.log(f.a.Trace, "(WebSockets transport) data received. " + Object(h.g)(e.data, r.logMessageContent) + "."), r.onreceive) try {
                    r.onreceive(e.data);
                  } catch (e) {
                    return void r.close(e);
                  }
                }, i.onclose = function (e) {
                  if (s) r.close(e);else {
                    var t = null;
                    t = "undefined" != typeof ErrorEvent && e instanceof ErrorEvent ? e.error : new Error("There was an error with the transport."), o(t);
                  }
                };
              })];
          }
        });
      });
    }, e.prototype.send = function (e) {
      return this.webSocket && this.webSocket.readyState === this.webSocketConstructor.OPEN ? (this.logger.log(f.a.Trace, "(WebSockets transport) sending data. " + Object(h.g)(e, this.logMessageContent) + "."), this.webSocket.send(e), Promise.resolve()) : Promise.reject("WebSocket is not in the OPEN state");
    }, e.prototype.stop = function () {
      return this.webSocket && this.close(void 0), Promise.resolve();
    }, e.prototype.close = function (e) {
      this.webSocket && (this.webSocket.onclose = function () {}, this.webSocket.onmessage = function () {}, this.webSocket.onerror = function () {}, this.webSocket.close(), this.webSocket = void 0), this.logger.log(f.a.Trace, "(WebSockets transport) socket closed."), this.onclose && (!this.isCloseEvent(e) || !1 !== e.wasClean && 1e3 === e.code ? e instanceof Error ? this.onclose(e) : this.onclose() : this.onclose(new Error("WebSocket closed with status code: " + e.code + " (" + e.reason + ").")));
    }, e.prototype.isCloseEvent = function (e) {
      return e && "boolean" == typeof e.wasClean && "number" == typeof e.code;
    }, e;
  }(),
      Y = Object.assign || function (e) {
    for (var t, n = 1, r = arguments.length; n < r; n++) {
      for (var o in t = arguments[n]) {
        Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
      }
    }

    return e;
  },
      G = function G(e, t, n, r) {
    return new (n || (n = Promise))(function (o, i) {
      function a(e) {
        try {
          c(r.next(e));
        } catch (e) {
          i(e);
        }
      }

      function s(e) {
        try {
          c(r.throw(e));
        } catch (e) {
          i(e);
        }
      }

      function c(e) {
        e.done ? o(e.value) : new n(function (t) {
          t(e.value);
        }).then(a, s);
      }

      c((r = r.apply(e, t || [])).next());
    });
  },
      V = function V(e, t) {
    var n,
        r,
        o,
        i,
        a = {
      label: 0,
      sent: function sent() {
        if (1 & o[0]) throw o[1];
        return o[1];
      },
      trys: [],
      ops: []
    };
    return i = {
      next: s(0),
      throw: s(1),
      return: s(2)
    }, "function" == typeof Symbol && (i[Symbol.iterator] = function () {
      return this;
    }), i;

    function s(i) {
      return function (s) {
        return function (i) {
          if (n) throw new TypeError("Generator is already executing.");

          for (; a;) {
            try {
              if (n = 1, r && (o = 2 & i[0] ? r.return : i[0] ? r.throw || ((o = r.return) && o.call(r), 0) : r.next) && !(o = o.call(r, i[1])).done) return o;

              switch (r = 0, o && (i = [2 & i[0], o.value]), i[0]) {
                case 0:
                case 1:
                  o = i;
                  break;

                case 4:
                  return a.label++, {
                    value: i[1],
                    done: !1
                  };

                case 5:
                  a.label++, r = i[1], i = [0];
                  continue;

                case 7:
                  i = a.ops.pop(), a.trys.pop();
                  continue;

                default:
                  if (!(o = a.trys, (o = o.length > 0 && o[o.length - 1]) || 6 !== i[0] && 2 !== i[0])) {
                    a = 0;
                    continue;
                  }

                  if (3 === i[0] && (!o || i[1] > o[0] && i[1] < o[3])) {
                    a.label = i[1];
                    break;
                  }

                  if (6 === i[0] && a.label < o[1]) {
                    a.label = o[1], o = i;
                    break;
                  }

                  if (o && a.label < o[2]) {
                    a.label = o[2], a.ops.push(i);
                    break;
                  }

                  o[2] && a.ops.pop(), a.trys.pop();
                  continue;
              }

              i = t.call(e, a);
            } catch (e) {
              i = [6, e], r = 0;
            } finally {
              n = o = 0;
            }
          }

          if (5 & i[0]) throw i[1];
          return {
            value: i[0] ? i[1] : void 0,
            done: !0
          };
        }([i, s]);
      };
    }
  },
      K = function () {
    function e(e, t) {
      if (void 0 === t && (t = {}), this.features = {}, this.negotiateVersion = 1, h.a.isRequired(e, "url"), this.logger = Object(h.f)(t.logger), this.baseUrl = this.resolveUrl(e), (t = t || {}).logMessageContent = void 0 !== t.logMessageContent && t.logMessageContent, "boolean" != typeof t.withCredentials && void 0 !== t.withCredentials) throw new Error("withCredentials option was not a 'boolean' or 'undefined' value");
      t.withCredentials = void 0 === t.withCredentials || t.withCredentials;
      var n = null,
          r = null;

      if (h.c.isNode) {
        var o = require;
        n = o("ws"), r = o("eventsource");
      }

      h.c.isNode || "undefined" == typeof WebSocket || t.WebSocket ? h.c.isNode && !t.WebSocket && n && (t.WebSocket = n) : t.WebSocket = WebSocket, h.c.isNode || "undefined" == typeof EventSource || t.EventSource ? h.c.isNode && !t.EventSource && void 0 !== r && (t.EventSource = r) : t.EventSource = EventSource, this.httpClient = t.httpClient || new S(this.logger), this.connectionState = "Disconnected", this.connectionStarted = !1, this.options = t, this.onreceive = null, this.onclose = null;
    }

    return e.prototype.start = function (e) {
      return G(this, void 0, void 0, function () {
        var t;
        return V(this, function (n) {
          switch (n.label) {
            case 0:
              return e = e || P.Binary, h.a.isIn(e, P, "transferFormat"), this.logger.log(f.a.Debug, "Starting connection with transfer format '" + P[e] + "'."), "Disconnected" !== this.connectionState ? [2, Promise.reject(new Error("Cannot start an HttpConnection that is not in the 'Disconnected' state."))] : (this.connectionState = "Connecting", this.startInternalPromise = this.startInternal(e), [4, this.startInternalPromise]);

            case 1:
              return n.sent(), "Disconnecting" !== this.connectionState ? [3, 3] : (t = "Failed to start the HttpConnection before stop() was called.", this.logger.log(f.a.Error, t), [4, this.stopPromise]);

            case 2:
              return n.sent(), [2, Promise.reject(new Error(t))];

            case 3:
              if ("Connected" !== this.connectionState) return t = "HttpConnection.startInternal completed gracefully but didn't enter the connection into the connected state!", this.logger.log(f.a.Error, t), [2, Promise.reject(new Error(t))];
              n.label = 4;

            case 4:
              return this.connectionStarted = !0, [2];
          }
        });
      });
    }, e.prototype.send = function (e) {
      return "Connected" !== this.connectionState ? Promise.reject(new Error("Cannot send data if the connection is not in the 'Connected' State.")) : (this.sendQueue || (this.sendQueue = new X(this.transport)), this.sendQueue.send(e));
    }, e.prototype.stop = function (e) {
      return G(this, void 0, void 0, function () {
        var t = this;
        return V(this, function (n) {
          switch (n.label) {
            case 0:
              return "Disconnected" === this.connectionState ? (this.logger.log(f.a.Debug, "Call to HttpConnection.stop(" + e + ") ignored because the connection is already in the disconnected state."), [2, Promise.resolve()]) : "Disconnecting" === this.connectionState ? (this.logger.log(f.a.Debug, "Call to HttpConnection.stop(" + e + ") ignored because the connection is already in the disconnecting state."), [2, this.stopPromise]) : (this.connectionState = "Disconnecting", this.stopPromise = new Promise(function (e) {
                t.stopPromiseResolver = e;
              }), [4, this.stopInternal(e)]);

            case 1:
              return n.sent(), [4, this.stopPromise];

            case 2:
              return n.sent(), [2];
          }
        });
      });
    }, e.prototype.stopInternal = function (e) {
      return G(this, void 0, void 0, function () {
        var t;
        return V(this, function (n) {
          switch (n.label) {
            case 0:
              this.stopError = e, n.label = 1;

            case 1:
              return n.trys.push([1, 3,, 4]), [4, this.startInternalPromise];

            case 2:
              return n.sent(), [3, 4];

            case 3:
              return n.sent(), [3, 4];

            case 4:
              if (!this.transport) return [3, 9];
              n.label = 5;

            case 5:
              return n.trys.push([5, 7,, 8]), [4, this.transport.stop()];

            case 6:
              return n.sent(), [3, 8];

            case 7:
              return t = n.sent(), this.logger.log(f.a.Error, "HttpConnection.transport.stop() threw error '" + t + "'."), this.stopConnection(), [3, 8];

            case 8:
              return this.transport = void 0, [3, 10];

            case 9:
              this.logger.log(f.a.Debug, "HttpConnection.transport is undefined in HttpConnection.stop() because start() failed."), this.stopConnection(), n.label = 10;

            case 10:
              return [2];
          }
        });
      });
    }, e.prototype.startInternal = function (e) {
      return G(this, void 0, void 0, function () {
        var t, n, r, o, i, a;
        return V(this, function (s) {
          switch (s.label) {
            case 0:
              t = this.baseUrl, this.accessTokenFactory = this.options.accessTokenFactory, s.label = 1;

            case 1:
              return s.trys.push([1, 12,, 13]), this.options.skipNegotiation ? this.options.transport !== O.WebSockets ? [3, 3] : (this.transport = this.constructTransport(O.WebSockets), [4, this.startTransport(t, e)]) : [3, 5];

            case 2:
              return s.sent(), [3, 4];

            case 3:
              throw new Error("Negotiation can only be skipped when using the WebSocket transport directly.");

            case 4:
              return [3, 11];

            case 5:
              n = null, r = 0, o = function o() {
                var e;
                return V(this, function (o) {
                  switch (o.label) {
                    case 0:
                      return [4, i.getNegotiationResponse(t)];

                    case 1:
                      if (n = o.sent(), "Disconnecting" === i.connectionState || "Disconnected" === i.connectionState) throw new Error("The connection was stopped during negotiation.");
                      if (n.error) throw new Error(n.error);
                      if (n.ProtocolVersion) throw new Error("Detected a connection attempt to an ASP.NET SignalR Server. This client only supports connecting to an ASP.NET Core SignalR Server. See https://aka.ms/signalr-core-differences for details.");
                      return n.url && (t = n.url), n.accessToken && (e = n.accessToken, i.accessTokenFactory = function () {
                        return e;
                      }), r++, [2];
                  }
                });
              }, i = this, s.label = 6;

            case 6:
              return [5, o()];

            case 7:
              s.sent(), s.label = 8;

            case 8:
              if (n.url && r < 100) return [3, 6];
              s.label = 9;

            case 9:
              if (100 === r && n.url) throw new Error("Negotiate redirection limit exceeded.");
              return [4, this.createTransport(t, this.options.transport, n, e)];

            case 10:
              s.sent(), s.label = 11;

            case 11:
              return this.transport instanceof B && (this.features.inherentKeepAlive = !0), "Connecting" === this.connectionState && (this.logger.log(f.a.Debug, "The HttpConnection connected successfully."), this.connectionState = "Connected"), [3, 13];

            case 12:
              return a = s.sent(), this.logger.log(f.a.Error, "Failed to start the connection: " + a), this.connectionState = "Disconnected", this.transport = void 0, [2, Promise.reject(a)];

            case 13:
              return [2];
          }
        });
      });
    }, e.prototype.getNegotiationResponse = function (e) {
      return G(this, void 0, void 0, function () {
        var t, n, r, o, i, a, s, c, u;
        return V(this, function (l) {
          switch (l.label) {
            case 0:
              return t = {}, this.accessTokenFactory ? [4, this.accessTokenFactory()] : [3, 2];

            case 1:
              (n = l.sent()) && (t.Authorization = "Bearer " + n), l.label = 2;

            case 2:
              r = Object(h.h)(), o = r[0], i = r[1], t[o] = i, a = this.resolveNegotiateUrl(e), this.logger.log(f.a.Debug, "Sending negotiation request: " + a + "."), l.label = 3;

            case 3:
              return l.trys.push([3, 5,, 6]), [4, this.httpClient.post(a, {
                content: "",
                headers: Y({}, t, this.options.headers),
                withCredentials: this.options.withCredentials
              })];

            case 4:
              return 200 !== (s = l.sent()).statusCode ? [2, Promise.reject(new Error("Unexpected status code returned from negotiate '" + s.statusCode + "'"))] : ((!(c = JSON.parse(s.content)).negotiateVersion || c.negotiateVersion < 1) && (c.connectionToken = c.connectionId), [2, c]);

            case 5:
              return u = l.sent(), this.logger.log(f.a.Error, "Failed to complete negotiation with the server: " + u), [2, Promise.reject(u)];

            case 6:
              return [2];
          }
        });
      });
    }, e.prototype.createConnectUrl = function (e, t) {
      return t ? e + (-1 === e.indexOf("?") ? "?" : "&") + "id=" + t : e;
    }, e.prototype.createTransport = function (e, t, n, r) {
      return G(this, void 0, void 0, function () {
        var o, i, a, s, c, u, l, h, p, d, g;
        return V(this, function (y) {
          switch (y.label) {
            case 0:
              return o = this.createConnectUrl(e, n.connectionToken), this.isITransport(t) ? (this.logger.log(f.a.Debug, "Connection was provided an instance of ITransport, using that directly."), this.transport = t, [4, this.startTransport(o, r)]) : [3, 2];

            case 1:
              return y.sent(), this.connectionId = n.connectionId, [2];

            case 2:
              i = [], a = n.availableTransports || [], s = n, c = 0, u = a, y.label = 3;

            case 3:
              return c < u.length ? (l = u[c], (h = this.resolveTransportOrError(l, t, r)) instanceof Error ? (i.push(l.transport + " failed: " + h), [3, 12]) : [3, 4]) : [3, 13];

            case 4:
              if (!this.isITransport(h)) return [3, 12];
              if (this.transport = h, s) return [3, 9];
              y.label = 5;

            case 5:
              return y.trys.push([5, 7,, 8]), [4, this.getNegotiationResponse(e)];

            case 6:
              return s = y.sent(), [3, 8];

            case 7:
              return p = y.sent(), [2, Promise.reject(p)];

            case 8:
              o = this.createConnectUrl(e, s.connectionToken), y.label = 9;

            case 9:
              return y.trys.push([9, 11,, 12]), [4, this.startTransport(o, r)];

            case 10:
              return y.sent(), this.connectionId = s.connectionId, [2];

            case 11:
              return d = y.sent(), this.logger.log(f.a.Error, "Failed to start the transport '" + l.transport + "': " + d), s = void 0, i.push(l.transport + " failed: " + d), "Connecting" !== this.connectionState ? (g = "Failed to select transport before stop() was called.", this.logger.log(f.a.Debug, g), [2, Promise.reject(new Error(g))]) : [3, 12];

            case 12:
              return c++, [3, 3];

            case 13:
              return i.length > 0 ? [2, Promise.reject(new Error("Unable to connect to the server with any of the available transports. " + i.join(" ")))] : [2, Promise.reject(new Error("None of the transports supported by the client are supported by the server."))];
          }
        });
      });
    }, e.prototype.constructTransport = function (e) {
      switch (e) {
        case O.WebSockets:
          if (!this.options.WebSocket) throw new Error("'WebSocket' is not supported in your environment.");
          return new J(this.httpClient, this.accessTokenFactory, this.logger, this.options.logMessageContent || !1, this.options.WebSocket, this.options.headers || {});

        case O.ServerSentEvents:
          if (!this.options.EventSource) throw new Error("'EventSource' is not supported in your environment.");
          return new H(this.httpClient, this.accessTokenFactory, this.logger, this.options.logMessageContent || !1, this.options.EventSource, this.options.withCredentials, this.options.headers || {});

        case O.LongPolling:
          return new B(this.httpClient, this.accessTokenFactory, this.logger, this.options.logMessageContent || !1, this.options.withCredentials, this.options.headers || {});

        default:
          throw new Error("Unknown transport: " + e + ".");
      }
    }, e.prototype.startTransport = function (e, t) {
      var n = this;
      return this.transport.onreceive = this.onreceive, this.transport.onclose = function (e) {
        return n.stopConnection(e);
      }, this.transport.connect(e, t);
    }, e.prototype.resolveTransportOrError = function (e, t, n) {
      var r = O[e.transport];
      if (null == r) return this.logger.log(f.a.Debug, "Skipping transport '" + e.transport + "' because it is not supported by this client."), new Error("Skipping transport '" + e.transport + "' because it is not supported by this client.");
      if (!function (e, t) {
        return !e || 0 != (t & e);
      }(t, r)) return this.logger.log(f.a.Debug, "Skipping transport '" + O[r] + "' because it was disabled by the client."), new Error("'" + O[r] + "' is disabled by the client.");
      if (!(e.transferFormats.map(function (e) {
        return P[e];
      }).indexOf(n) >= 0)) return this.logger.log(f.a.Debug, "Skipping transport '" + O[r] + "' because it does not support the requested transfer format '" + P[n] + "'."), new Error("'" + O[r] + "' does not support " + P[n] + ".");
      if (r === O.WebSockets && !this.options.WebSocket || r === O.ServerSentEvents && !this.options.EventSource) return this.logger.log(f.a.Debug, "Skipping transport '" + O[r] + "' because it is not supported in your environment.'"), new Error("'" + O[r] + "' is not supported in your environment.");
      this.logger.log(f.a.Debug, "Selecting transport '" + O[r] + "'.");

      try {
        return this.constructTransport(r);
      } catch (e) {
        return e;
      }
    }, e.prototype.isITransport = function (e) {
      return e && "object" == _typeof(e) && "connect" in e;
    }, e.prototype.stopConnection = function (e) {
      var t = this;

      if (this.logger.log(f.a.Debug, "HttpConnection.stopConnection(" + e + ") called while in state " + this.connectionState + "."), this.transport = void 0, e = this.stopError || e, this.stopError = void 0, "Disconnected" !== this.connectionState) {
        if ("Connecting" === this.connectionState) throw this.logger.log(f.a.Warning, "Call to HttpConnection.stopConnection(" + e + ") was ignored because the connection is still in the connecting state."), new Error("HttpConnection.stopConnection(" + e + ") was called while the connection is still in the connecting state.");

        if ("Disconnecting" === this.connectionState && this.stopPromiseResolver(), e ? this.logger.log(f.a.Error, "Connection disconnected with error '" + e + "'.") : this.logger.log(f.a.Information, "Connection disconnected."), this.sendQueue && (this.sendQueue.stop().catch(function (e) {
          t.logger.log(f.a.Error, "TransportSendQueue.stop() threw error '" + e + "'.");
        }), this.sendQueue = void 0), this.connectionId = void 0, this.connectionState = "Disconnected", this.connectionStarted) {
          this.connectionStarted = !1;

          try {
            this.onclose && this.onclose(e);
          } catch (t) {
            this.logger.log(f.a.Error, "HttpConnection.onclose(" + e + ") threw error '" + t + "'.");
          }
        }
      } else this.logger.log(f.a.Debug, "Call to HttpConnection.stopConnection(" + e + ") was ignored because the connection is already in the disconnected state.");
    }, e.prototype.resolveUrl = function (e) {
      if (0 === e.lastIndexOf("https://", 0) || 0 === e.lastIndexOf("http://", 0)) return e;
      if (!h.c.isBrowser || !window.document) throw new Error("Cannot resolve '" + e + "'.");
      var t = window.document.createElement("a");
      return t.href = e, this.logger.log(f.a.Information, "Normalizing '" + e + "' to '" + t.href + "'."), t.href;
    }, e.prototype.resolveNegotiateUrl = function (e) {
      var t = e.indexOf("?"),
          n = e.substring(0, -1 === t ? e.length : t);
      return "/" !== n[n.length - 1] && (n += "/"), n += "negotiate", -1 === (n += -1 === t ? "" : e.substring(t)).indexOf("negotiateVersion") && (n += -1 === t ? "?" : "&", n += "negotiateVersion=" + this.negotiateVersion), n;
    }, e;
  }();

  var X = function () {
    function e(e) {
      this.transport = e, this.buffer = [], this.executing = !0, this.sendBufferedData = new Q(), this.transportResult = new Q(), this.sendLoopPromise = this.sendLoop();
    }

    return e.prototype.send = function (e) {
      return this.bufferData(e), this.transportResult || (this.transportResult = new Q()), this.transportResult.promise;
    }, e.prototype.stop = function () {
      return this.executing = !1, this.sendBufferedData.resolve(), this.sendLoopPromise;
    }, e.prototype.bufferData = function (e) {
      if (this.buffer.length && _typeof(this.buffer[0]) != _typeof(e)) throw new Error("Expected data to be of type " + _typeof(this.buffer) + " but was of type " + _typeof(e));
      this.buffer.push(e), this.sendBufferedData.resolve();
    }, e.prototype.sendLoop = function () {
      return G(this, void 0, void 0, function () {
        var t, n, r;
        return V(this, function (o) {
          switch (o.label) {
            case 0:
              return [4, this.sendBufferedData.promise];

            case 1:
              if (o.sent(), !this.executing) return this.transportResult && this.transportResult.reject("Connection stopped."), [3, 6];
              this.sendBufferedData = new Q(), t = this.transportResult, this.transportResult = void 0, n = "string" == typeof this.buffer[0] ? this.buffer.join("") : e.concatBuffers(this.buffer), this.buffer.length = 0, o.label = 2;

            case 2:
              return o.trys.push([2, 4,, 5]), [4, this.transport.send(n)];

            case 3:
              return o.sent(), t.resolve(), [3, 5];

            case 4:
              return r = o.sent(), t.reject(r), [3, 5];

            case 5:
              return [3, 0];

            case 6:
              return [2];
          }
        });
      });
    }, e.concatBuffers = function (e) {
      for (var t = e.map(function (e) {
        return e.byteLength;
      }).reduce(function (e, t) {
        return e + t;
      }), n = new Uint8Array(t), r = 0, o = 0, i = e; o < i.length; o++) {
        var a = i[o];
        n.set(new Uint8Array(a), r), r += a.byteLength;
      }

      return n.buffer;
    }, e;
  }(),
      Q = function () {
    function e() {
      var e = this;
      this.promise = new Promise(function (t, n) {
        var r;
        return r = [t, n], e.resolver = r[0], e.rejecter = r[1], r;
      });
    }

    return e.prototype.resolve = function () {
      this.resolver();
    }, e.prototype.reject = function (e) {
      this.rejecter(e);
    }, e;
  }(),
      Z = n(4),
      $ = n(5),
      ee = function () {
    function e() {
      this.name = "json", this.version = 1, this.transferFormat = P.Text;
    }

    return e.prototype.parseMessages = function (e, t) {
      if ("string" != typeof e) throw new Error("Invalid input for JSON hub protocol. Expected a string.");
      if (!e) return [];
      null === t && (t = Z.a.instance);

      for (var n = [], r = 0, o = $.a.parse(e); r < o.length; r++) {
        var i = o[r],
            a = JSON.parse(i);
        if ("number" != typeof a.type) throw new Error("Invalid payload.");

        switch (a.type) {
          case b.Invocation:
            this.isInvocationMessage(a);
            break;

          case b.StreamItem:
            this.isStreamItemMessage(a);
            break;

          case b.Completion:
            this.isCompletionMessage(a);
            break;

          case b.Ping:
          case b.Close:
            break;

          default:
            t.log(f.a.Information, "Unknown message type '" + a.type + "' ignored.");
            continue;
        }

        n.push(a);
      }

      return n;
    }, e.prototype.writeMessage = function (e) {
      return $.a.write(JSON.stringify(e));
    }, e.prototype.isInvocationMessage = function (e) {
      this.assertNotEmptyString(e.target, "Invalid payload for Invocation message."), void 0 !== e.invocationId && this.assertNotEmptyString(e.invocationId, "Invalid payload for Invocation message.");
    }, e.prototype.isStreamItemMessage = function (e) {
      if (this.assertNotEmptyString(e.invocationId, "Invalid payload for StreamItem message."), void 0 === e.item) throw new Error("Invalid payload for StreamItem message.");
    }, e.prototype.isCompletionMessage = function (e) {
      if (e.result && e.error) throw new Error("Invalid payload for Completion message.");
      !e.result && e.error && this.assertNotEmptyString(e.error, "Invalid payload for Completion message."), this.assertNotEmptyString(e.invocationId, "Invalid payload for Completion message.");
    }, e.prototype.assertNotEmptyString = function (e, t) {
      if ("string" != typeof e || "" === e) throw new Error(t);
    }, e;
  }(),
      te = Object.assign || function (e) {
    for (var t, n = 1, r = arguments.length; n < r; n++) {
      for (var o in t = arguments[n]) {
        Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
      }
    }

    return e;
  },
      ne = {
    trace: f.a.Trace,
    debug: f.a.Debug,
    info: f.a.Information,
    information: f.a.Information,
    warn: f.a.Warning,
    warning: f.a.Warning,
    error: f.a.Error,
    critical: f.a.Critical,
    none: f.a.None
  };

  var re = function () {
    function e() {}

    return e.prototype.configureLogging = function (e) {
      if (h.a.isRequired(e, "logging"), void 0 !== e.log) this.logger = e;else if ("string" == typeof e) {
        var t = function (e) {
          var t = ne[e.toLowerCase()];
          if (void 0 !== t) return t;
          throw new Error("Unknown log level: " + e);
        }(e);

        this.logger = new h.b(t);
      } else this.logger = new h.b(e);
      return this;
    }, e.prototype.withUrl = function (e, t) {
      return h.a.isRequired(e, "url"), h.a.isNotEmpty(e, "url"), this.url = e, this.httpConnectionOptions = te({}, this.httpConnectionOptions, "object" == _typeof(t) ? t : {
        transport: t
      }), this;
    }, e.prototype.withHubProtocol = function (e) {
      return h.a.isRequired(e, "protocol"), this.protocol = e, this;
    }, e.prototype.withAutomaticReconnect = function (e) {
      if (this.reconnectPolicy) throw new Error("A reconnectPolicy has already been set.");
      return e ? Array.isArray(e) ? this.reconnectPolicy = new D(e) : this.reconnectPolicy = e : this.reconnectPolicy = new D(), this;
    }, e.prototype.build = function () {
      var e = this.httpConnectionOptions || {};
      if (void 0 === e.logger && (e.logger = this.logger), !this.url) throw new Error("The 'HubConnectionBuilder.withUrl' method must be called before building the connection.");
      var t = new K(this.url, e);
      return R.create(t, this.logger || Z.a.instance, this.protocol || new ee(), this.reconnectPolicy);
    }, e;
  }();
}, function (e, t, n) {
  "use strict";

  var r;
  n.r(t), n.d(t, "DotNet", function () {
    return r;
  }), function (e) {
    var t;
    window.DotNet = e;

    var n = [],
        r = function () {
      function e(e) {
        this._jsObject = e, this._cachedFunctions = new Map();
      }

      return e.prototype.findFunction = function (e) {
        var t = this._cachedFunctions.get(e);

        if (t) return t;
        var n,
            r = this._jsObject;
        if (e.split(".").forEach(function (t) {
          if (!(t in r)) throw new Error("Could not find '" + e + "' ('" + t + "' was undefined).");
          n = r, r = r[t];
        }), r instanceof Function) return r = r.bind(n), this._cachedFunctions.set(e, r), r;
        throw new Error("The value '" + e + "' is not a function.");
      }, e.prototype.getWrappedObject = function () {
        return this._jsObject;
      }, e;
    }(),
        o = {},
        i = ((t = {})[0] = new r(window), t);

    i[0]._cachedFunctions.set("import", function (e) {
      return "string" == typeof e && e.startsWith("./") && (e = document.baseURI + e.substr(2)), Promise.resolve("".concat(e)).then(function (s) {
        return _interopRequireWildcard(require(s));
      });
    });

    var a,
        s = 1,
        c = 1,
        u = null;

    function l(e) {
      n.push(e);
    }

    function f(e) {
      var t;

      if (e && "object" == _typeof(e)) {
        i[c] = new r(e);
        var n = ((t = {}).__jsObjectId = c, t);
        return c++, n;
      }

      throw new Error("Cannot create a JSObjectReference from the value '" + e + "'.");
    }

    function h(e) {
      return e ? JSON.parse(e, function (e, t) {
        return n.reduce(function (t, n) {
          return n(e, t);
        }, t);
      }) : null;
    }

    function p(e, t, n, r) {
      var o = g();

      if (o.invokeDotNetFromJS) {
        var i = JSON.stringify(r, S),
            a = o.invokeDotNetFromJS(e, t, n, i);
        return a ? h(a) : null;
      }

      throw new Error("The current dispatcher does not support synchronous calls from JS to .NET. Use invokeMethodAsync instead.");
    }

    function d(e, t, n, r) {
      if (e && n) throw new Error("For instance method calls, assemblyName should be null. Received '" + e + "'.");
      var i = s++,
          a = new Promise(function (e, t) {
        o[i] = {
          resolve: e,
          reject: t
        };
      });

      try {
        var c = JSON.stringify(r, S);
        g().beginInvokeDotNetFromJS(i, e, t, n, c);
      } catch (e) {
        y(i, !1, e);
      }

      return a;
    }

    function g() {
      if (null !== u) return u;
      throw new Error("No .NET call dispatcher has been set.");
    }

    function y(e, t, n) {
      if (!o.hasOwnProperty(e)) throw new Error("There is no pending async call with ID " + e + ".");
      var r = o[e];
      delete o[e], t ? r.resolve(n) : r.reject(n);
    }

    function v(e) {
      return e instanceof Error ? e.message + "\n" + e.stack : e ? e.toString() : "null";
    }

    function b(e, t) {
      var n = i[t];
      if (n) return n.findFunction(e);
      throw new Error("JS object instance with ID " + t + " does not exist (has it been disposed?).");
    }

    function m(e) {
      delete i[e];
    }

    e.attachDispatcher = function (e) {
      u = e;
    }, e.attachReviver = l, e.invokeMethod = function (e, t) {
      for (var n = [], r = 2; r < arguments.length; r++) {
        n[r - 2] = arguments[r];
      }

      return p(e, t, null, n);
    }, e.invokeMethodAsync = function (e, t) {
      for (var n = [], r = 2; r < arguments.length; r++) {
        n[r - 2] = arguments[r];
      }

      return d(e, t, null, n);
    }, e.createJSObjectReference = f, e.disposeJSObjectReference = function (e) {
      var t = e && e.__jsObjectId;
      "number" == typeof t && m(t);
    }, e.parseJsonWithRevivers = h, function (e) {
      e[e.Default = 0] = "Default", e[e.JSObjectReference = 1] = "JSObjectReference";
    }(a = e.JSCallResultType || (e.JSCallResultType = {})), e.jsCallDispatcher = {
      findJSFunction: b,
      disposeJSObjectReferenceById: m,
      invokeJSFromDotNet: function invokeJSFromDotNet(e, t, n, r) {
        var o = E(b(e, r).apply(null, h(t)), n);
        return null == o ? null : JSON.stringify(o, S);
      },
      beginInvokeJSFromDotNet: function beginInvokeJSFromDotNet(e, t, n, r, o) {
        var i = new Promise(function (e) {
          e(b(t, o).apply(null, h(n)));
        });
        e && i.then(function (t) {
          return g().endInvokeJSFromDotNet(e, !0, JSON.stringify([e, !0, E(t, r)], S));
        }, function (t) {
          return g().endInvokeJSFromDotNet(e, !1, JSON.stringify([e, !1, v(t)]));
        });
      },
      endInvokeDotNetFromJS: function endInvokeDotNetFromJS(e, t, n) {
        var r = t ? n : new Error(n);
        y(parseInt(e), t, r);
      }
    };

    var w = function () {
      function e(e) {
        this._id = e;
      }

      return e.prototype.invokeMethod = function (e) {
        for (var t = [], n = 1; n < arguments.length; n++) {
          t[n - 1] = arguments[n];
        }

        return p(null, e, this._id, t);
      }, e.prototype.invokeMethodAsync = function (e) {
        for (var t = [], n = 1; n < arguments.length; n++) {
          t[n - 1] = arguments[n];
        }

        return d(null, e, this._id, t);
      }, e.prototype.dispose = function () {
        d(null, "__Dispose", this._id, null).catch(function (e) {
          return console.error(e);
        });
      }, e.prototype.serializeAsArg = function () {
        return {
          __dotNetObject: this._id
        };
      }, e;
    }();

    function E(e, t) {
      switch (t) {
        case a.Default:
          return e;

        case a.JSObjectReference:
          return f(e);

        default:
          throw new Error("Invalid JS call result type '" + t + "'.");
      }
    }

    function S(e, t) {
      return t instanceof w ? t.serializeAsArg() : t;
    }

    l(function (e, t) {
      return t && "object" == _typeof(t) && t.hasOwnProperty("__dotNetObject") ? new w(t.__dotNetObject) : t;
    }), l(function (e, t) {
      if (t && "object" == _typeof(t) && t.hasOwnProperty("__jsObjectId")) {
        var n = t.__jsObjectId,
            r = i[n];
        if (r) return r.getWrappedObject();
        throw new Error("JS object instance with ID " + n + " does not exist (has it been disposed?).");
      }

      return t;
    });
  }(r || (r = {}));
}, function (e, t, n) {
  "use strict";

  n.d(t, "a", function () {
    return r;
  });

  var r = function () {
    function e() {}

    return e.prototype.log = function (e, t) {}, e.instance = new e(), e;
  }();
}, function (e, t, n) {
  "use strict";

  n.d(t, "a", function () {
    return r;
  });

  var r = function () {
    function e() {}

    return e.write = function (t) {
      return "" + t + e.RecordSeparator;
    }, e.parse = function (t) {
      if (t[t.length - 1] !== e.RecordSeparator) throw new Error("Message is incomplete.");
      var n = t.split(e.RecordSeparator);
      return n.pop(), n;
    }, e.RecordSeparatorCode = 30, e.RecordSeparator = String.fromCharCode(e.RecordSeparatorCode), e;
  }();
}, function (e, t, n) {
  "use strict";

  var r = this && this.__awaiter || function (e, t, n, r) {
    return new (n || (n = Promise))(function (o, i) {
      function a(e) {
        try {
          c(r.next(e));
        } catch (e) {
          i(e);
        }
      }

      function s(e) {
        try {
          c(r.throw(e));
        } catch (e) {
          i(e);
        }
      }

      function c(e) {
        var t;
        e.done ? o(e.value) : (t = e.value, t instanceof n ? t : new n(function (e) {
          e(t);
        })).then(a, s);
      }

      c((r = r.apply(e, t || [])).next());
    });
  },
      o = this && this.__generator || function (e, t) {
    var n,
        r,
        o,
        i,
        a = {
      label: 0,
      sent: function sent() {
        if (1 & o[0]) throw o[1];
        return o[1];
      },
      trys: [],
      ops: []
    };
    return i = {
      next: s(0),
      throw: s(1),
      return: s(2)
    }, "function" == typeof Symbol && (i[Symbol.iterator] = function () {
      return this;
    }), i;

    function s(i) {
      return function (s) {
        return function (i) {
          if (n) throw new TypeError("Generator is already executing.");

          for (; a;) {
            try {
              if (n = 1, r && (o = 2 & i[0] ? r.return : i[0] ? r.throw || ((o = r.return) && o.call(r), 0) : r.next) && !(o = o.call(r, i[1])).done) return o;

              switch (r = 0, o && (i = [2 & i[0], o.value]), i[0]) {
                case 0:
                case 1:
                  o = i;
                  break;

                case 4:
                  return a.label++, {
                    value: i[1],
                    done: !1
                  };

                case 5:
                  a.label++, r = i[1], i = [0];
                  continue;

                case 7:
                  i = a.ops.pop(), a.trys.pop();
                  continue;

                default:
                  if (!(o = a.trys, (o = o.length > 0 && o[o.length - 1]) || 6 !== i[0] && 2 !== i[0])) {
                    a = 0;
                    continue;
                  }

                  if (3 === i[0] && (!o || i[1] > o[0] && i[1] < o[3])) {
                    a.label = i[1];
                    break;
                  }

                  if (6 === i[0] && a.label < o[1]) {
                    a.label = o[1], o = i;
                    break;
                  }

                  if (o && a.label < o[2]) {
                    a.label = o[2], a.ops.push(i);
                    break;
                  }

                  o[2] && a.ops.pop(), a.trys.pop();
                  continue;
              }

              i = t.call(e, a);
            } catch (e) {
              i = [6, e], r = 0;
            } finally {
              n = o = 0;
            }
          }

          if (5 & i[0]) throw i[1];
          return {
            value: i[0] ? i[1] : void 0,
            done: !0
          };
        }([i, s]);
      };
    }
  };

  Object.defineProperty(t, "__esModule", {
    value: !0
  }), n(3);
  var i,
      a = n(12),
      s = !1,
      c = !1,
      u = null;

  function l(e, t, n) {
    void 0 === n && (n = !1);
    var r = p(e);
    if (!t && d(r)) f(r, !1, n);else if (t && location.href === e) {
      var o = e + "?";
      history.replaceState(null, "", o), location.replace(e);
    } else n ? history.replaceState(null, "", r) : location.href = e;
  }

  function f(e, t, n) {
    void 0 === n && (n = !1), a.resetScrollAfterNextBatch(), n ? history.replaceState(null, "", e) : history.pushState(null, "", e), h(t);
  }

  function h(e) {
    return r(this, void 0, void 0, function () {
      return o(this, function (t) {
        switch (t.label) {
          case 0:
            return u ? [4, u(location.href, e)] : [3, 2];

          case 1:
            t.sent(), t.label = 2;

          case 2:
            return [2];
        }
      });
    });
  }

  function p(e) {
    return (i = i || document.createElement("a")).href = e, i.href;
  }

  function d(e) {
    var t,
        n = (t = document.baseURI).substr(0, t.lastIndexOf("/") + 1);
    return e.startsWith(n);
  }

  t.internalFunctions = {
    listenForNavigationEvents: function listenForNavigationEvents(e) {
      if (u = e, c) return;
      c = !0, window.addEventListener("popstate", function () {
        return h(!1);
      });
    },
    enableNavigationInterception: function enableNavigationInterception() {
      s = !0;
    },
    navigateTo: l,
    getBaseURI: function getBaseURI() {
      return document.baseURI;
    },
    getLocationHref: function getLocationHref() {
      return location.href;
    }
  }, t.attachToEventDelegator = function (e) {
    e.notifyAfterClick(function (e) {
      if (s && 0 === e.button && !function (e) {
        return e.ctrlKey || e.shiftKey || e.altKey || e.metaKey;
      }(e) && !e.defaultPrevented) {
        var t = function e(t, n) {
          return t ? t.tagName === n ? t : e(t.parentElement, n) : null;
        }(e.target, "A");

        if (t && t.hasAttribute("href")) {
          var n = t.getAttribute("target");
          if (!(!n || "_self" === n)) return;
          var r = p(t.getAttribute("href"));
          d(r) && (e.preventDefault(), f(r, !0));
        }
      }
    });
  }, t.navigateTo = l, t.toAbsoluteUri = p;
}, function (e, t, n) {
  "use strict";

  Object.defineProperty(t, "__esModule", {
    value: !0
  });
  var r = p("_blazorLogicalChildren"),
      o = p("_blazorLogicalParent"),
      i = p("_blazorLogicalEnd");

  function a(e, t) {
    if (e.childNodes.length > 0 && !t) throw new Error("New logical elements must start empty, or allowExistingContents must be true");
    return r in e || (e[r] = []), e;
  }

  function s(e, t, n) {
    var i = e;
    if (e instanceof Comment && u(i) && u(i).length > 0) throw new Error("Not implemented: inserting non-empty logical container");
    if (c(i)) throw new Error("Not implemented: moving existing logical children");
    var a = u(t);

    if (n < a.length) {
      var s = a[n];
      s.parentNode.insertBefore(e, s), a.splice(n, 0, i);
    } else h(e, t), a.push(i);

    i[o] = t, r in i || (i[r] = []);
  }

  function c(e) {
    return e[o] || null;
  }

  function u(e) {
    return e[r];
  }

  function l(e) {
    if (e instanceof Element) return e;
    if (e instanceof Comment) return e.parentNode;
    throw new Error("Not a valid logical element");
  }

  function f(e) {
    var t = u(c(e));
    return t[Array.prototype.indexOf.call(t, e) + 1] || null;
  }

  function h(e, t) {
    if (t instanceof Element) t.appendChild(e);else {
      if (!(t instanceof Comment)) throw new Error("Cannot append node because the parent is not a valid logical element. Parent: " + t);
      var n = f(t);
      n ? n.parentNode.insertBefore(e, n) : h(e, c(t));
    }
  }

  function p(e) {
    return "function" == typeof Symbol ? Symbol() : e;
  }

  t.toLogicalRootCommentElement = function (e, t) {
    if (!e.parentNode) throw new Error("Comment not connected to the DOM " + e.textContent);
    var n = e.parentNode,
        r = a(n, !0),
        s = u(r);
    return Array.from(n.childNodes).forEach(function (e) {
      return s.push(e);
    }), e[o] = r, t && (e[i] = t, a(t)), a(e);
  }, t.toLogicalElement = a, t.createAndInsertLogicalContainer = function (e, t) {
    var n = document.createComment("!");
    return s(n, e, t), n;
  }, t.insertLogicalChild = s, t.removeLogicalChild = function e(t, n) {
    var r = u(t).splice(n, 1)[0];

    if (r instanceof Comment) {
      var o = u(r);
      if (o) for (; o.length > 0;) {
        e(r, 0);
      }
    }

    var i = r;
    i.parentNode.removeChild(i);
  }, t.getLogicalParent = c, t.getLogicalSiblingEnd = function (e) {
    return e[i] || null;
  }, t.getLogicalChild = function (e, t) {
    return u(e)[t];
  }, t.isSvgElement = function (e) {
    return "http://www.w3.org/2000/svg" === l(e).namespaceURI;
  }, t.getLogicalChildrenArray = u, t.permuteLogicalChildren = function (e, t) {
    var n = u(e);
    t.forEach(function (e) {
      e.moveRangeStart = n[e.fromSiblingIndex], e.moveRangeEnd = function e(t) {
        if (t instanceof Element) return t;
        var n = f(t);
        if (n) return n.previousSibling;
        var r = c(t);
        return r instanceof Element ? r.lastChild : e(r);
      }(e.moveRangeStart);
    }), t.forEach(function (t) {
      var r = t.moveToBeforeMarker = document.createComment("marker"),
          o = n[t.toSiblingIndex + 1];
      o ? o.parentNode.insertBefore(r, o) : h(r, e);
    }), t.forEach(function (e) {
      for (var t = e.moveToBeforeMarker, n = t.parentNode, r = e.moveRangeStart, o = e.moveRangeEnd, i = r; i;) {
        var a = i.nextSibling;
        if (n.insertBefore(i, t), i === o) break;
        i = a;
      }

      n.removeChild(t);
    }), t.forEach(function (e) {
      n[e.toSiblingIndex] = e.moveRangeStart;
    });
  }, t.getClosestDomElement = l;
}, function (e, t) {
  var n;

  n = function () {
    return this;
  }();

  try {
    n = n || new Function("return this")();
  } catch (e) {
    "object" == (typeof window === "undefined" ? "undefined" : _typeof(window)) && (n = window);
  }

  e.exports = n;
}, function (e, t, n) {
  "use strict";

  var r = n(24),
      o = Object.keys || function (e) {
    var t = [];

    for (var n in e) {
      t.push(n);
    }

    return t;
  };

  e.exports = f;
  var i = n(19);
  i.inherits = n(15);
  var a = n(40),
      s = n(45);
  i.inherits(f, a);

  for (var c = o(s.prototype), u = 0; u < c.length; u++) {
    var l = c[u];
    f.prototype[l] || (f.prototype[l] = s.prototype[l]);
  }

  function f(e) {
    if (!(this instanceof f)) return new f(e);
    a.call(this, e), s.call(this, e), e && !1 === e.readable && (this.readable = !1), e && !1 === e.writable && (this.writable = !1), this.allowHalfOpen = !0, e && !1 === e.allowHalfOpen && (this.allowHalfOpen = !1), this.once("end", h);
  }

  function h() {
    this.allowHalfOpen || this._writableState.ended || r.nextTick(p, this);
  }

  function p(e) {
    e.end();
  }

  Object.defineProperty(f.prototype, "writableHighWaterMark", {
    enumerable: !1,
    get: function get() {
      return this._writableState.highWaterMark;
    }
  }), Object.defineProperty(f.prototype, "destroyed", {
    get: function get() {
      return void 0 !== this._readableState && void 0 !== this._writableState && this._readableState.destroyed && this._writableState.destroyed;
    },
    set: function set(e) {
      void 0 !== this._readableState && void 0 !== this._writableState && (this._readableState.destroyed = e, this._writableState.destroyed = e);
    }
  }), f.prototype._destroy = function (e, t) {
    this.push(null), this.end(), r.nextTick(t, e);
  };
}, function (e, t, n) {
  "use strict";

  (function (e) {
    /*!
     * The buffer module from node.js, for the browser.
     *
     * @author   Feross Aboukhadijeh <http://feross.org>
     * @license  MIT
     */
    var r = n(54),
        o = n(55),
        i = n(56);

    function a() {
      return c.TYPED_ARRAY_SUPPORT ? 2147483647 : 1073741823;
    }

    function s(e, t) {
      if (a() < t) throw new RangeError("Invalid typed array length");
      return c.TYPED_ARRAY_SUPPORT ? (e = new Uint8Array(t)).__proto__ = c.prototype : (null === e && (e = new c(t)), e.length = t), e;
    }

    function c(e, t, n) {
      if (!(c.TYPED_ARRAY_SUPPORT || this instanceof c)) return new c(e, t, n);

      if ("number" == typeof e) {
        if ("string" == typeof t) throw new Error("If encoding is specified then the first argument must be a string");
        return f(this, e);
      }

      return u(this, e, t, n);
    }

    function u(e, t, n, r) {
      if ("number" == typeof t) throw new TypeError('"value" argument must not be a number');
      return "undefined" != typeof ArrayBuffer && t instanceof ArrayBuffer ? function (e, t, n, r) {
        if (t.byteLength, n < 0 || t.byteLength < n) throw new RangeError("'offset' is out of bounds");
        if (t.byteLength < n + (r || 0)) throw new RangeError("'length' is out of bounds");
        t = void 0 === n && void 0 === r ? new Uint8Array(t) : void 0 === r ? new Uint8Array(t, n) : new Uint8Array(t, n, r);
        c.TYPED_ARRAY_SUPPORT ? (e = t).__proto__ = c.prototype : e = h(e, t);
        return e;
      }(e, t, n, r) : "string" == typeof t ? function (e, t, n) {
        "string" == typeof n && "" !== n || (n = "utf8");
        if (!c.isEncoding(n)) throw new TypeError('"encoding" must be a valid string encoding');
        var r = 0 | d(t, n),
            o = (e = s(e, r)).write(t, n);
        o !== r && (e = e.slice(0, o));
        return e;
      }(e, t, n) : function (e, t) {
        if (c.isBuffer(t)) {
          var n = 0 | p(t.length);
          return 0 === (e = s(e, n)).length || t.copy(e, 0, 0, n), e;
        }

        if (t) {
          if ("undefined" != typeof ArrayBuffer && t.buffer instanceof ArrayBuffer || "length" in t) return "number" != typeof t.length || (r = t.length) != r ? s(e, 0) : h(e, t);
          if ("Buffer" === t.type && i(t.data)) return h(e, t.data);
        }

        var r;
        throw new TypeError("First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.");
      }(e, t);
    }

    function l(e) {
      if ("number" != typeof e) throw new TypeError('"size" argument must be a number');
      if (e < 0) throw new RangeError('"size" argument must not be negative');
    }

    function f(e, t) {
      if (l(t), e = s(e, t < 0 ? 0 : 0 | p(t)), !c.TYPED_ARRAY_SUPPORT) for (var n = 0; n < t; ++n) {
        e[n] = 0;
      }
      return e;
    }

    function h(e, t) {
      var n = t.length < 0 ? 0 : 0 | p(t.length);
      e = s(e, n);

      for (var r = 0; r < n; r += 1) {
        e[r] = 255 & t[r];
      }

      return e;
    }

    function p(e) {
      if (e >= a()) throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x" + a().toString(16) + " bytes");
      return 0 | e;
    }

    function d(e, t) {
      if (c.isBuffer(e)) return e.length;
      if ("undefined" != typeof ArrayBuffer && "function" == typeof ArrayBuffer.isView && (ArrayBuffer.isView(e) || e instanceof ArrayBuffer)) return e.byteLength;
      "string" != typeof e && (e = "" + e);
      var n = e.length;
      if (0 === n) return 0;

      for (var r = !1;;) {
        switch (t) {
          case "ascii":
          case "latin1":
          case "binary":
            return n;

          case "utf8":
          case "utf-8":
          case void 0:
            return F(e).length;

          case "ucs2":
          case "ucs-2":
          case "utf16le":
          case "utf-16le":
            return 2 * n;

          case "hex":
            return n >>> 1;

          case "base64":
            return H(e).length;

          default:
            if (r) return F(e).length;
            t = ("" + t).toLowerCase(), r = !0;
        }
      }
    }

    function g(e, t, n) {
      var r = !1;
      if ((void 0 === t || t < 0) && (t = 0), t > this.length) return "";
      if ((void 0 === n || n > this.length) && (n = this.length), n <= 0) return "";
      if ((n >>>= 0) <= (t >>>= 0)) return "";

      for (e || (e = "utf8");;) {
        switch (e) {
          case "hex":
            return P(this, t, n);

          case "utf8":
          case "utf-8":
            return k(this, t, n);

          case "ascii":
            return T(this, t, n);

          case "latin1":
          case "binary":
            return O(this, t, n);

          case "base64":
            return C(this, t, n);

          case "ucs2":
          case "ucs-2":
          case "utf16le":
          case "utf-16le":
            return R(this, t, n);

          default:
            if (r) throw new TypeError("Unknown encoding: " + e);
            e = (e + "").toLowerCase(), r = !0;
        }
      }
    }

    function y(e, t, n) {
      var r = e[t];
      e[t] = e[n], e[n] = r;
    }

    function v(e, t, n, r, o) {
      if (0 === e.length) return -1;

      if ("string" == typeof n ? (r = n, n = 0) : n > 2147483647 ? n = 2147483647 : n < -2147483648 && (n = -2147483648), n = +n, isNaN(n) && (n = o ? 0 : e.length - 1), n < 0 && (n = e.length + n), n >= e.length) {
        if (o) return -1;
        n = e.length - 1;
      } else if (n < 0) {
        if (!o) return -1;
        n = 0;
      }

      if ("string" == typeof t && (t = c.from(t, r)), c.isBuffer(t)) return 0 === t.length ? -1 : b(e, t, n, r, o);
      if ("number" == typeof t) return t &= 255, c.TYPED_ARRAY_SUPPORT && "function" == typeof Uint8Array.prototype.indexOf ? o ? Uint8Array.prototype.indexOf.call(e, t, n) : Uint8Array.prototype.lastIndexOf.call(e, t, n) : b(e, [t], n, r, o);
      throw new TypeError("val must be string, number or Buffer");
    }

    function b(e, t, n, r, o) {
      var i,
          a = 1,
          s = e.length,
          c = t.length;

      if (void 0 !== r && ("ucs2" === (r = String(r).toLowerCase()) || "ucs-2" === r || "utf16le" === r || "utf-16le" === r)) {
        if (e.length < 2 || t.length < 2) return -1;
        a = 2, s /= 2, c /= 2, n /= 2;
      }

      function u(e, t) {
        return 1 === a ? e[t] : e.readUInt16BE(t * a);
      }

      if (o) {
        var l = -1;

        for (i = n; i < s; i++) {
          if (u(e, i) === u(t, -1 === l ? 0 : i - l)) {
            if (-1 === l && (l = i), i - l + 1 === c) return l * a;
          } else -1 !== l && (i -= i - l), l = -1;
        }
      } else for (n + c > s && (n = s - c), i = n; i >= 0; i--) {
        for (var f = !0, h = 0; h < c; h++) {
          if (u(e, i + h) !== u(t, h)) {
            f = !1;
            break;
          }
        }

        if (f) return i;
      }

      return -1;
    }

    function m(e, t, n, r) {
      n = Number(n) || 0;
      var o = e.length - n;
      r ? (r = Number(r)) > o && (r = o) : r = o;
      var i = t.length;
      if (i % 2 != 0) throw new TypeError("Invalid hex string");
      r > i / 2 && (r = i / 2);

      for (var a = 0; a < r; ++a) {
        var s = parseInt(t.substr(2 * a, 2), 16);
        if (isNaN(s)) return a;
        e[n + a] = s;
      }

      return a;
    }

    function w(e, t, n, r) {
      return W(F(t, e.length - n), e, n, r);
    }

    function E(e, t, n, r) {
      return W(function (e) {
        for (var t = [], n = 0; n < e.length; ++n) {
          t.push(255 & e.charCodeAt(n));
        }

        return t;
      }(t), e, n, r);
    }

    function S(e, t, n, r) {
      return E(e, t, n, r);
    }

    function _(e, t, n, r) {
      return W(H(t), e, n, r);
    }

    function I(e, t, n, r) {
      return W(function (e, t) {
        for (var n, r, o, i = [], a = 0; a < e.length && !((t -= 2) < 0); ++a) {
          n = e.charCodeAt(a), r = n >> 8, o = n % 256, i.push(o), i.push(r);
        }

        return i;
      }(t, e.length - n), e, n, r);
    }

    function C(e, t, n) {
      return 0 === t && n === e.length ? r.fromByteArray(e) : r.fromByteArray(e.slice(t, n));
    }

    function k(e, t, n) {
      n = Math.min(e.length, n);

      for (var r = [], o = t; o < n;) {
        var i,
            a,
            s,
            c,
            u = e[o],
            l = null,
            f = u > 239 ? 4 : u > 223 ? 3 : u > 191 ? 2 : 1;
        if (o + f <= n) switch (f) {
          case 1:
            u < 128 && (l = u);
            break;

          case 2:
            128 == (192 & (i = e[o + 1])) && (c = (31 & u) << 6 | 63 & i) > 127 && (l = c);
            break;

          case 3:
            i = e[o + 1], a = e[o + 2], 128 == (192 & i) && 128 == (192 & a) && (c = (15 & u) << 12 | (63 & i) << 6 | 63 & a) > 2047 && (c < 55296 || c > 57343) && (l = c);
            break;

          case 4:
            i = e[o + 1], a = e[o + 2], s = e[o + 3], 128 == (192 & i) && 128 == (192 & a) && 128 == (192 & s) && (c = (15 & u) << 18 | (63 & i) << 12 | (63 & a) << 6 | 63 & s) > 65535 && c < 1114112 && (l = c);
        }
        null === l ? (l = 65533, f = 1) : l > 65535 && (l -= 65536, r.push(l >>> 10 & 1023 | 55296), l = 56320 | 1023 & l), r.push(l), o += f;
      }

      return function (e) {
        var t = e.length;
        if (t <= 4096) return String.fromCharCode.apply(String, e);
        var n = "",
            r = 0;

        for (; r < t;) {
          n += String.fromCharCode.apply(String, e.slice(r, r += 4096));
        }

        return n;
      }(r);
    }

    t.Buffer = c, t.SlowBuffer = function (e) {
      +e != e && (e = 0);
      return c.alloc(+e);
    }, t.INSPECT_MAX_BYTES = 50, c.TYPED_ARRAY_SUPPORT = void 0 !== e.TYPED_ARRAY_SUPPORT ? e.TYPED_ARRAY_SUPPORT : function () {
      try {
        var e = new Uint8Array(1);
        return e.__proto__ = {
          __proto__: Uint8Array.prototype,
          foo: function foo() {
            return 42;
          }
        }, 42 === e.foo() && "function" == typeof e.subarray && 0 === e.subarray(1, 1).byteLength;
      } catch (e) {
        return !1;
      }
    }(), t.kMaxLength = a(), c.poolSize = 8192, c._augment = function (e) {
      return e.__proto__ = c.prototype, e;
    }, c.from = function (e, t, n) {
      return u(null, e, t, n);
    }, c.TYPED_ARRAY_SUPPORT && (c.prototype.__proto__ = Uint8Array.prototype, c.__proto__ = Uint8Array, "undefined" != typeof Symbol && Symbol.species && c[Symbol.species] === c && Object.defineProperty(c, Symbol.species, {
      value: null,
      configurable: !0
    })), c.alloc = function (e, t, n) {
      return function (e, t, n, r) {
        return l(t), t <= 0 ? s(e, t) : void 0 !== n ? "string" == typeof r ? s(e, t).fill(n, r) : s(e, t).fill(n) : s(e, t);
      }(null, e, t, n);
    }, c.allocUnsafe = function (e) {
      return f(null, e);
    }, c.allocUnsafeSlow = function (e) {
      return f(null, e);
    }, c.isBuffer = function (e) {
      return !(null == e || !e._isBuffer);
    }, c.compare = function (e, t) {
      if (!c.isBuffer(e) || !c.isBuffer(t)) throw new TypeError("Arguments must be Buffers");
      if (e === t) return 0;

      for (var n = e.length, r = t.length, o = 0, i = Math.min(n, r); o < i; ++o) {
        if (e[o] !== t[o]) {
          n = e[o], r = t[o];
          break;
        }
      }

      return n < r ? -1 : r < n ? 1 : 0;
    }, c.isEncoding = function (e) {
      switch (String(e).toLowerCase()) {
        case "hex":
        case "utf8":
        case "utf-8":
        case "ascii":
        case "latin1":
        case "binary":
        case "base64":
        case "ucs2":
        case "ucs-2":
        case "utf16le":
        case "utf-16le":
          return !0;

        default:
          return !1;
      }
    }, c.concat = function (e, t) {
      if (!i(e)) throw new TypeError('"list" argument must be an Array of Buffers');
      if (0 === e.length) return c.alloc(0);
      var n;
      if (void 0 === t) for (t = 0, n = 0; n < e.length; ++n) {
        t += e[n].length;
      }
      var r = c.allocUnsafe(t),
          o = 0;

      for (n = 0; n < e.length; ++n) {
        var a = e[n];
        if (!c.isBuffer(a)) throw new TypeError('"list" argument must be an Array of Buffers');
        a.copy(r, o), o += a.length;
      }

      return r;
    }, c.byteLength = d, c.prototype._isBuffer = !0, c.prototype.swap16 = function () {
      var e = this.length;
      if (e % 2 != 0) throw new RangeError("Buffer size must be a multiple of 16-bits");

      for (var t = 0; t < e; t += 2) {
        y(this, t, t + 1);
      }

      return this;
    }, c.prototype.swap32 = function () {
      var e = this.length;
      if (e % 4 != 0) throw new RangeError("Buffer size must be a multiple of 32-bits");

      for (var t = 0; t < e; t += 4) {
        y(this, t, t + 3), y(this, t + 1, t + 2);
      }

      return this;
    }, c.prototype.swap64 = function () {
      var e = this.length;
      if (e % 8 != 0) throw new RangeError("Buffer size must be a multiple of 64-bits");

      for (var t = 0; t < e; t += 8) {
        y(this, t, t + 7), y(this, t + 1, t + 6), y(this, t + 2, t + 5), y(this, t + 3, t + 4);
      }

      return this;
    }, c.prototype.toString = function () {
      var e = 0 | this.length;
      return 0 === e ? "" : 0 === arguments.length ? k(this, 0, e) : g.apply(this, arguments);
    }, c.prototype.equals = function (e) {
      if (!c.isBuffer(e)) throw new TypeError("Argument must be a Buffer");
      return this === e || 0 === c.compare(this, e);
    }, c.prototype.inspect = function () {
      var e = "",
          n = t.INSPECT_MAX_BYTES;
      return this.length > 0 && (e = this.toString("hex", 0, n).match(/.{2}/g).join(" "), this.length > n && (e += " ... ")), "<Buffer " + e + ">";
    }, c.prototype.compare = function (e, t, n, r, o) {
      if (!c.isBuffer(e)) throw new TypeError("Argument must be a Buffer");
      if (void 0 === t && (t = 0), void 0 === n && (n = e ? e.length : 0), void 0 === r && (r = 0), void 0 === o && (o = this.length), t < 0 || n > e.length || r < 0 || o > this.length) throw new RangeError("out of range index");
      if (r >= o && t >= n) return 0;
      if (r >= o) return -1;
      if (t >= n) return 1;
      if (this === e) return 0;

      for (var i = (o >>>= 0) - (r >>>= 0), a = (n >>>= 0) - (t >>>= 0), s = Math.min(i, a), u = this.slice(r, o), l = e.slice(t, n), f = 0; f < s; ++f) {
        if (u[f] !== l[f]) {
          i = u[f], a = l[f];
          break;
        }
      }

      return i < a ? -1 : a < i ? 1 : 0;
    }, c.prototype.includes = function (e, t, n) {
      return -1 !== this.indexOf(e, t, n);
    }, c.prototype.indexOf = function (e, t, n) {
      return v(this, e, t, n, !0);
    }, c.prototype.lastIndexOf = function (e, t, n) {
      return v(this, e, t, n, !1);
    }, c.prototype.write = function (e, t, n, r) {
      if (void 0 === t) r = "utf8", n = this.length, t = 0;else if (void 0 === n && "string" == typeof t) r = t, n = this.length, t = 0;else {
        if (!isFinite(t)) throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");
        t |= 0, isFinite(n) ? (n |= 0, void 0 === r && (r = "utf8")) : (r = n, n = void 0);
      }
      var o = this.length - t;
      if ((void 0 === n || n > o) && (n = o), e.length > 0 && (n < 0 || t < 0) || t > this.length) throw new RangeError("Attempt to write outside buffer bounds");
      r || (r = "utf8");

      for (var i = !1;;) {
        switch (r) {
          case "hex":
            return m(this, e, t, n);

          case "utf8":
          case "utf-8":
            return w(this, e, t, n);

          case "ascii":
            return E(this, e, t, n);

          case "latin1":
          case "binary":
            return S(this, e, t, n);

          case "base64":
            return _(this, e, t, n);

          case "ucs2":
          case "ucs-2":
          case "utf16le":
          case "utf-16le":
            return I(this, e, t, n);

          default:
            if (i) throw new TypeError("Unknown encoding: " + r);
            r = ("" + r).toLowerCase(), i = !0;
        }
      }
    }, c.prototype.toJSON = function () {
      return {
        type: "Buffer",
        data: Array.prototype.slice.call(this._arr || this, 0)
      };
    };

    function T(e, t, n) {
      var r = "";
      n = Math.min(e.length, n);

      for (var o = t; o < n; ++o) {
        r += String.fromCharCode(127 & e[o]);
      }

      return r;
    }

    function O(e, t, n) {
      var r = "";
      n = Math.min(e.length, n);

      for (var o = t; o < n; ++o) {
        r += String.fromCharCode(e[o]);
      }

      return r;
    }

    function P(e, t, n) {
      var r = e.length;
      (!t || t < 0) && (t = 0), (!n || n < 0 || n > r) && (n = r);

      for (var o = "", i = t; i < n; ++i) {
        o += U(e[i]);
      }

      return o;
    }

    function R(e, t, n) {
      for (var r = e.slice(t, n), o = "", i = 0; i < r.length; i += 2) {
        o += String.fromCharCode(r[i] + 256 * r[i + 1]);
      }

      return o;
    }

    function x(e, t, n) {
      if (e % 1 != 0 || e < 0) throw new RangeError("offset is not uint");
      if (e + t > n) throw new RangeError("Trying to access beyond buffer length");
    }

    function D(e, t, n, r, o, i) {
      if (!c.isBuffer(e)) throw new TypeError('"buffer" argument must be a Buffer instance');
      if (t > o || t < i) throw new RangeError('"value" argument is out of bounds');
      if (n + r > e.length) throw new RangeError("Index out of range");
    }

    function A(e, t, n, r) {
      t < 0 && (t = 65535 + t + 1);

      for (var o = 0, i = Math.min(e.length - n, 2); o < i; ++o) {
        e[n + o] = (t & 255 << 8 * (r ? o : 1 - o)) >>> 8 * (r ? o : 1 - o);
      }
    }

    function M(e, t, n, r) {
      t < 0 && (t = 4294967295 + t + 1);

      for (var o = 0, i = Math.min(e.length - n, 4); o < i; ++o) {
        e[n + o] = t >>> 8 * (r ? o : 3 - o) & 255;
      }
    }

    function L(e, t, n, r, o, i) {
      if (n + r > e.length) throw new RangeError("Index out of range");
      if (n < 0) throw new RangeError("Index out of range");
    }

    function j(e, t, n, r, i) {
      return i || L(e, 0, n, 4), o.write(e, t, n, r, 23, 4), n + 4;
    }

    function B(e, t, n, r, i) {
      return i || L(e, 0, n, 8), o.write(e, t, n, r, 52, 8), n + 8;
    }

    c.prototype.slice = function (e, t) {
      var n,
          r = this.length;
      if ((e = ~~e) < 0 ? (e += r) < 0 && (e = 0) : e > r && (e = r), (t = void 0 === t ? r : ~~t) < 0 ? (t += r) < 0 && (t = 0) : t > r && (t = r), t < e && (t = e), c.TYPED_ARRAY_SUPPORT) (n = this.subarray(e, t)).__proto__ = c.prototype;else {
        var o = t - e;
        n = new c(o, void 0);

        for (var i = 0; i < o; ++i) {
          n[i] = this[i + e];
        }
      }
      return n;
    }, c.prototype.readUIntLE = function (e, t, n) {
      e |= 0, t |= 0, n || x(e, t, this.length);

      for (var r = this[e], o = 1, i = 0; ++i < t && (o *= 256);) {
        r += this[e + i] * o;
      }

      return r;
    }, c.prototype.readUIntBE = function (e, t, n) {
      e |= 0, t |= 0, n || x(e, t, this.length);

      for (var r = this[e + --t], o = 1; t > 0 && (o *= 256);) {
        r += this[e + --t] * o;
      }

      return r;
    }, c.prototype.readUInt8 = function (e, t) {
      return t || x(e, 1, this.length), this[e];
    }, c.prototype.readUInt16LE = function (e, t) {
      return t || x(e, 2, this.length), this[e] | this[e + 1] << 8;
    }, c.prototype.readUInt16BE = function (e, t) {
      return t || x(e, 2, this.length), this[e] << 8 | this[e + 1];
    }, c.prototype.readUInt32LE = function (e, t) {
      return t || x(e, 4, this.length), (this[e] | this[e + 1] << 8 | this[e + 2] << 16) + 16777216 * this[e + 3];
    }, c.prototype.readUInt32BE = function (e, t) {
      return t || x(e, 4, this.length), 16777216 * this[e] + (this[e + 1] << 16 | this[e + 2] << 8 | this[e + 3]);
    }, c.prototype.readIntLE = function (e, t, n) {
      e |= 0, t |= 0, n || x(e, t, this.length);

      for (var r = this[e], o = 1, i = 0; ++i < t && (o *= 256);) {
        r += this[e + i] * o;
      }

      return r >= (o *= 128) && (r -= Math.pow(2, 8 * t)), r;
    }, c.prototype.readIntBE = function (e, t, n) {
      e |= 0, t |= 0, n || x(e, t, this.length);

      for (var r = t, o = 1, i = this[e + --r]; r > 0 && (o *= 256);) {
        i += this[e + --r] * o;
      }

      return i >= (o *= 128) && (i -= Math.pow(2, 8 * t)), i;
    }, c.prototype.readInt8 = function (e, t) {
      return t || x(e, 1, this.length), 128 & this[e] ? -1 * (255 - this[e] + 1) : this[e];
    }, c.prototype.readInt16LE = function (e, t) {
      t || x(e, 2, this.length);
      var n = this[e] | this[e + 1] << 8;
      return 32768 & n ? 4294901760 | n : n;
    }, c.prototype.readInt16BE = function (e, t) {
      t || x(e, 2, this.length);
      var n = this[e + 1] | this[e] << 8;
      return 32768 & n ? 4294901760 | n : n;
    }, c.prototype.readInt32LE = function (e, t) {
      return t || x(e, 4, this.length), this[e] | this[e + 1] << 8 | this[e + 2] << 16 | this[e + 3] << 24;
    }, c.prototype.readInt32BE = function (e, t) {
      return t || x(e, 4, this.length), this[e] << 24 | this[e + 1] << 16 | this[e + 2] << 8 | this[e + 3];
    }, c.prototype.readFloatLE = function (e, t) {
      return t || x(e, 4, this.length), o.read(this, e, !0, 23, 4);
    }, c.prototype.readFloatBE = function (e, t) {
      return t || x(e, 4, this.length), o.read(this, e, !1, 23, 4);
    }, c.prototype.readDoubleLE = function (e, t) {
      return t || x(e, 8, this.length), o.read(this, e, !0, 52, 8);
    }, c.prototype.readDoubleBE = function (e, t) {
      return t || x(e, 8, this.length), o.read(this, e, !1, 52, 8);
    }, c.prototype.writeUIntLE = function (e, t, n, r) {
      (e = +e, t |= 0, n |= 0, r) || D(this, e, t, n, Math.pow(2, 8 * n) - 1, 0);
      var o = 1,
          i = 0;

      for (this[t] = 255 & e; ++i < n && (o *= 256);) {
        this[t + i] = e / o & 255;
      }

      return t + n;
    }, c.prototype.writeUIntBE = function (e, t, n, r) {
      (e = +e, t |= 0, n |= 0, r) || D(this, e, t, n, Math.pow(2, 8 * n) - 1, 0);
      var o = n - 1,
          i = 1;

      for (this[t + o] = 255 & e; --o >= 0 && (i *= 256);) {
        this[t + o] = e / i & 255;
      }

      return t + n;
    }, c.prototype.writeUInt8 = function (e, t, n) {
      return e = +e, t |= 0, n || D(this, e, t, 1, 255, 0), c.TYPED_ARRAY_SUPPORT || (e = Math.floor(e)), this[t] = 255 & e, t + 1;
    }, c.prototype.writeUInt16LE = function (e, t, n) {
      return e = +e, t |= 0, n || D(this, e, t, 2, 65535, 0), c.TYPED_ARRAY_SUPPORT ? (this[t] = 255 & e, this[t + 1] = e >>> 8) : A(this, e, t, !0), t + 2;
    }, c.prototype.writeUInt16BE = function (e, t, n) {
      return e = +e, t |= 0, n || D(this, e, t, 2, 65535, 0), c.TYPED_ARRAY_SUPPORT ? (this[t] = e >>> 8, this[t + 1] = 255 & e) : A(this, e, t, !1), t + 2;
    }, c.prototype.writeUInt32LE = function (e, t, n) {
      return e = +e, t |= 0, n || D(this, e, t, 4, 4294967295, 0), c.TYPED_ARRAY_SUPPORT ? (this[t + 3] = e >>> 24, this[t + 2] = e >>> 16, this[t + 1] = e >>> 8, this[t] = 255 & e) : M(this, e, t, !0), t + 4;
    }, c.prototype.writeUInt32BE = function (e, t, n) {
      return e = +e, t |= 0, n || D(this, e, t, 4, 4294967295, 0), c.TYPED_ARRAY_SUPPORT ? (this[t] = e >>> 24, this[t + 1] = e >>> 16, this[t + 2] = e >>> 8, this[t + 3] = 255 & e) : M(this, e, t, !1), t + 4;
    }, c.prototype.writeIntLE = function (e, t, n, r) {
      if (e = +e, t |= 0, !r) {
        var o = Math.pow(2, 8 * n - 1);
        D(this, e, t, n, o - 1, -o);
      }

      var i = 0,
          a = 1,
          s = 0;

      for (this[t] = 255 & e; ++i < n && (a *= 256);) {
        e < 0 && 0 === s && 0 !== this[t + i - 1] && (s = 1), this[t + i] = (e / a >> 0) - s & 255;
      }

      return t + n;
    }, c.prototype.writeIntBE = function (e, t, n, r) {
      if (e = +e, t |= 0, !r) {
        var o = Math.pow(2, 8 * n - 1);
        D(this, e, t, n, o - 1, -o);
      }

      var i = n - 1,
          a = 1,
          s = 0;

      for (this[t + i] = 255 & e; --i >= 0 && (a *= 256);) {
        e < 0 && 0 === s && 0 !== this[t + i + 1] && (s = 1), this[t + i] = (e / a >> 0) - s & 255;
      }

      return t + n;
    }, c.prototype.writeInt8 = function (e, t, n) {
      return e = +e, t |= 0, n || D(this, e, t, 1, 127, -128), c.TYPED_ARRAY_SUPPORT || (e = Math.floor(e)), e < 0 && (e = 255 + e + 1), this[t] = 255 & e, t + 1;
    }, c.prototype.writeInt16LE = function (e, t, n) {
      return e = +e, t |= 0, n || D(this, e, t, 2, 32767, -32768), c.TYPED_ARRAY_SUPPORT ? (this[t] = 255 & e, this[t + 1] = e >>> 8) : A(this, e, t, !0), t + 2;
    }, c.prototype.writeInt16BE = function (e, t, n) {
      return e = +e, t |= 0, n || D(this, e, t, 2, 32767, -32768), c.TYPED_ARRAY_SUPPORT ? (this[t] = e >>> 8, this[t + 1] = 255 & e) : A(this, e, t, !1), t + 2;
    }, c.prototype.writeInt32LE = function (e, t, n) {
      return e = +e, t |= 0, n || D(this, e, t, 4, 2147483647, -2147483648), c.TYPED_ARRAY_SUPPORT ? (this[t] = 255 & e, this[t + 1] = e >>> 8, this[t + 2] = e >>> 16, this[t + 3] = e >>> 24) : M(this, e, t, !0), t + 4;
    }, c.prototype.writeInt32BE = function (e, t, n) {
      return e = +e, t |= 0, n || D(this, e, t, 4, 2147483647, -2147483648), e < 0 && (e = 4294967295 + e + 1), c.TYPED_ARRAY_SUPPORT ? (this[t] = e >>> 24, this[t + 1] = e >>> 16, this[t + 2] = e >>> 8, this[t + 3] = 255 & e) : M(this, e, t, !1), t + 4;
    }, c.prototype.writeFloatLE = function (e, t, n) {
      return j(this, e, t, !0, n);
    }, c.prototype.writeFloatBE = function (e, t, n) {
      return j(this, e, t, !1, n);
    }, c.prototype.writeDoubleLE = function (e, t, n) {
      return B(this, e, t, !0, n);
    }, c.prototype.writeDoubleBE = function (e, t, n) {
      return B(this, e, t, !1, n);
    }, c.prototype.copy = function (e, t, n, r) {
      if (n || (n = 0), r || 0 === r || (r = this.length), t >= e.length && (t = e.length), t || (t = 0), r > 0 && r < n && (r = n), r === n) return 0;
      if (0 === e.length || 0 === this.length) return 0;
      if (t < 0) throw new RangeError("targetStart out of bounds");
      if (n < 0 || n >= this.length) throw new RangeError("sourceStart out of bounds");
      if (r < 0) throw new RangeError("sourceEnd out of bounds");
      r > this.length && (r = this.length), e.length - t < r - n && (r = e.length - t + n);
      var o,
          i = r - n;
      if (this === e && n < t && t < r) for (o = i - 1; o >= 0; --o) {
        e[o + t] = this[o + n];
      } else if (i < 1e3 || !c.TYPED_ARRAY_SUPPORT) for (o = 0; o < i; ++o) {
        e[o + t] = this[o + n];
      } else Uint8Array.prototype.set.call(e, this.subarray(n, n + i), t);
      return i;
    }, c.prototype.fill = function (e, t, n, r) {
      if ("string" == typeof e) {
        if ("string" == typeof t ? (r = t, t = 0, n = this.length) : "string" == typeof n && (r = n, n = this.length), 1 === e.length) {
          var o = e.charCodeAt(0);
          o < 256 && (e = o);
        }

        if (void 0 !== r && "string" != typeof r) throw new TypeError("encoding must be a string");
        if ("string" == typeof r && !c.isEncoding(r)) throw new TypeError("Unknown encoding: " + r);
      } else "number" == typeof e && (e &= 255);

      if (t < 0 || this.length < t || this.length < n) throw new RangeError("Out of range index");
      if (n <= t) return this;
      var i;
      if (t >>>= 0, n = void 0 === n ? this.length : n >>> 0, e || (e = 0), "number" == typeof e) for (i = t; i < n; ++i) {
        this[i] = e;
      } else {
        var a = c.isBuffer(e) ? e : F(new c(e, r).toString()),
            s = a.length;

        for (i = 0; i < n - t; ++i) {
          this[i + t] = a[i % s];
        }
      }
      return this;
    };
    var N = /[^+\/0-9A-Za-z-_]/g;

    function U(e) {
      return e < 16 ? "0" + e.toString(16) : e.toString(16);
    }

    function F(e, t) {
      var n;
      t = t || 1 / 0;

      for (var r = e.length, o = null, i = [], a = 0; a < r; ++a) {
        if ((n = e.charCodeAt(a)) > 55295 && n < 57344) {
          if (!o) {
            if (n > 56319) {
              (t -= 3) > -1 && i.push(239, 191, 189);
              continue;
            }

            if (a + 1 === r) {
              (t -= 3) > -1 && i.push(239, 191, 189);
              continue;
            }

            o = n;
            continue;
          }

          if (n < 56320) {
            (t -= 3) > -1 && i.push(239, 191, 189), o = n;
            continue;
          }

          n = 65536 + (o - 55296 << 10 | n - 56320);
        } else o && (t -= 3) > -1 && i.push(239, 191, 189);

        if (o = null, n < 128) {
          if ((t -= 1) < 0) break;
          i.push(n);
        } else if (n < 2048) {
          if ((t -= 2) < 0) break;
          i.push(n >> 6 | 192, 63 & n | 128);
        } else if (n < 65536) {
          if ((t -= 3) < 0) break;
          i.push(n >> 12 | 224, n >> 6 & 63 | 128, 63 & n | 128);
        } else {
          if (!(n < 1114112)) throw new Error("Invalid code point");
          if ((t -= 4) < 0) break;
          i.push(n >> 18 | 240, n >> 12 & 63 | 128, n >> 6 & 63 | 128, 63 & n | 128);
        }
      }

      return i;
    }

    function H(e) {
      return r.toByteArray(function (e) {
        if ((e = function (e) {
          return e.trim ? e.trim() : e.replace(/^\s+|\s+$/g, "");
        }(e).replace(N, "")).length < 2) return "";

        for (; e.length % 4 != 0;) {
          e += "=";
        }

        return e;
      }(e));
    }

    function W(e, t, n, r) {
      for (var o = 0; o < r && !(o + n >= t.length || o >= e.length); ++o) {
        t[o + n] = e[o];
      }

      return o;
    }
  }).call(this, n(8));
}, function (e, t, n) {
  "use strict";

  var r = n(14).Buffer,
      o = n(57),
      i = n(23),
      a = n(70),
      s = n(73),
      c = n(74);

  e.exports = function (e) {
    var t = [],
        n = [];
    return {
      encode: c(t, (e = e || {
        forceFloat64: !1,
        compatibilityMode: !1,
        disableTimestampEncoding: !1
      }).forceFloat64, e.compatibilityMode, e.disableTimestampEncoding),
      decode: s(n),
      register: function register(e, t, n, a) {
        return o(t, "must have a constructor"), o(n, "must have an encode function"), o(e >= 0, "must have a non-negative type"), o(a, "must have a decode function"), this.registerEncoder(function (e) {
          return e instanceof t;
        }, function (t) {
          var o = i(),
              a = r.allocUnsafe(1);
          return a.writeInt8(e, 0), o.append(a), o.append(n(t)), o;
        }), this.registerDecoder(e, a), this;
      },
      registerEncoder: function registerEncoder(e, n) {
        return o(e, "must have an encode function"), o(n, "must have an encode function"), t.push({
          check: e,
          encode: n
        }), this;
      },
      registerDecoder: function registerDecoder(e, t) {
        return o(e >= 0, "must have a non-negative type"), o(t, "must have a decode function"), n.push({
          type: e,
          decode: t
        }), this;
      },
      encoder: a.encoder,
      decoder: a.decoder,
      buffer: !0,
      type: "msgpack5",
      IncompleteBufferError: s.IncompleteBufferError
    };
  };
}, function (e, t, n) {
  "use strict";

  Object.defineProperty(t, "__esModule", {
    value: !0
  }), n(26), n(17);
  var r = n(27),
      o = n(7),
      i = {},
      a = !1;

  function s(e, t, n) {
    var o = i[e];
    o || (o = i[e] = new r.BrowserRenderer(e)), o.attachRootComponentToLogicalElement(n, t);
  }

  t.attachRootComponentToLogicalElement = s, t.attachRootComponentToElement = function (e, t, n) {
    var r = document.querySelector(e);
    if (!r) throw new Error("Could not find any element matching selector '" + e + "'.");
    s(n || 0, o.toLogicalElement(r, !0), t);
  }, t.getRendererer = function (e) {
    return i[e];
  }, t.renderBatch = function (e, t) {
    var n = i[e];
    if (!n) throw new Error("There is no browser renderer with ID " + e + ".");

    for (var r = t.arrayRangeReader, o = t.updatedComponents(), s = r.values(o), c = r.count(o), u = t.referenceFrames(), l = r.values(u), f = t.diffReader, h = 0; h < c; h++) {
      var p = t.updatedComponentsEntry(s, h),
          d = f.componentId(p),
          g = f.edits(p);
      n.updateComponent(t, d, g, l);
    }

    var y = t.disposedComponentIds(),
        v = r.values(y),
        b = r.count(y);

    for (h = 0; h < b; h++) {
      d = t.disposedComponentIdsEntry(v, h);
      n.disposeComponent(d);
    }

    var m = t.disposedEventHandlerIds(),
        w = r.values(m),
        E = r.count(m);

    for (h = 0; h < E; h++) {
      var S = t.disposedEventHandlerIdsEntry(w, h);
      n.disposeEventHandler(S);
    }

    a && (a = !1, window.scrollTo && window.scrollTo(0, 0));
  }, t.resetScrollAfterNextBatch = function () {
    a = !0;
  };
}, function (e, t) {
  var n,
      r,
      o = e.exports = {};

  function i() {
    throw new Error("setTimeout has not been defined");
  }

  function a() {
    throw new Error("clearTimeout has not been defined");
  }

  function s(e) {
    if (n === setTimeout) return setTimeout(e, 0);
    if ((n === i || !n) && setTimeout) return n = setTimeout, setTimeout(e, 0);

    try {
      return n(e, 0);
    } catch (t) {
      try {
        return n.call(null, e, 0);
      } catch (t) {
        return n.call(this, e, 0);
      }
    }
  }

  !function () {
    try {
      n = "function" == typeof setTimeout ? setTimeout : i;
    } catch (e) {
      n = i;
    }

    try {
      r = "function" == typeof clearTimeout ? clearTimeout : a;
    } catch (e) {
      r = a;
    }
  }();
  var c,
      u = [],
      l = !1,
      f = -1;

  function h() {
    l && c && (l = !1, c.length ? u = c.concat(u) : f = -1, u.length && p());
  }

  function p() {
    if (!l) {
      var e = s(h);
      l = !0;

      for (var t = u.length; t;) {
        for (c = u, u = []; ++f < t;) {
          c && c[f].run();
        }

        f = -1, t = u.length;
      }

      c = null, l = !1, function (e) {
        if (r === clearTimeout) return clearTimeout(e);
        if ((r === a || !r) && clearTimeout) return r = clearTimeout, clearTimeout(e);

        try {
          r(e);
        } catch (t) {
          try {
            return r.call(null, e);
          } catch (t) {
            return r.call(this, e);
          }
        }
      }(e);
    }
  }

  function d(e, t) {
    this.fun = e, this.array = t;
  }

  function g() {}

  o.nextTick = function (e) {
    var t = new Array(arguments.length - 1);
    if (arguments.length > 1) for (var n = 1; n < arguments.length; n++) {
      t[n - 1] = arguments[n];
    }
    u.push(new d(e, t)), 1 !== u.length || l || s(p);
  }, d.prototype.run = function () {
    this.fun.apply(null, this.array);
  }, o.title = "browser", o.browser = !0, o.env = {}, o.argv = [], o.version = "", o.versions = {}, o.on = g, o.addListener = g, o.once = g, o.off = g, o.removeListener = g, o.removeAllListeners = g, o.emit = g, o.prependListener = g, o.prependOnceListener = g, o.listeners = function (e) {
    return [];
  }, o.binding = function (e) {
    throw new Error("process.binding is not supported");
  }, o.cwd = function () {
    return "/";
  }, o.chdir = function (e) {
    throw new Error("process.chdir is not supported");
  }, o.umask = function () {
    return 0;
  };
}, function (e, t, n) {
  var r = n(10),
      o = r.Buffer;

  function i(e, t) {
    for (var n in e) {
      t[n] = e[n];
    }
  }

  function a(e, t, n) {
    return o(e, t, n);
  }

  o.from && o.alloc && o.allocUnsafe && o.allocUnsafeSlow ? e.exports = r : (i(r, t), t.Buffer = a), i(o, a), a.from = function (e, t, n) {
    if ("number" == typeof e) throw new TypeError("Argument must not be a number");
    return o(e, t, n);
  }, a.alloc = function (e, t, n) {
    if ("number" != typeof e) throw new TypeError("Argument must be a number");
    var r = o(e);
    return void 0 !== t ? "string" == typeof n ? r.fill(t, n) : r.fill(t) : r.fill(0), r;
  }, a.allocUnsafe = function (e) {
    if ("number" != typeof e) throw new TypeError("Argument must be a number");
    return o(e);
  }, a.allocUnsafeSlow = function (e) {
    if ("number" != typeof e) throw new TypeError("Argument must be a number");
    return r.SlowBuffer(e);
  };
}, function (e, t) {
  "function" == typeof Object.create ? e.exports = function (e, t) {
    e.super_ = t, e.prototype = Object.create(t.prototype, {
      constructor: {
        value: e,
        enumerable: !1,
        writable: !0,
        configurable: !0
      }
    });
  } : e.exports = function (e, t) {
    e.super_ = t;

    var n = function n() {};

    n.prototype = t.prototype, e.prototype = new n(), e.prototype.constructor = e;
  };
}, function (e, t, n) {
  "use strict";

  Object.defineProperty(t, "__esModule", {
    value: !0
  }), function (e) {
    e[e.Trace = 0] = "Trace", e[e.Debug = 1] = "Debug", e[e.Information = 2] = "Information", e[e.Warning = 3] = "Warning", e[e.Error = 4] = "Error", e[e.Critical = 5] = "Critical", e[e.None = 6] = "None";
  }(t.LogLevel || (t.LogLevel = {}));
}, function (e, t, n) {
  "use strict";

  Object.defineProperty(t, "__esModule", {
    value: !0
  }), t.setPlatform = function (e) {
    return t.platform = e, t.platform;
  };
}, function (e, t, n) {
  "use strict";

  var r;
  Object.defineProperty(t, "__esModule", {
    value: !0
  }), t.dispatchEvent = function (e, t) {
    if (!r) throw new Error("eventDispatcher not initialized. Call 'setEventDispatcher' to configure it.");
    r(e, t);
  }, t.setEventDispatcher = function (e) {
    r = e;
  };
}, function (e, t, n) {
  (function (e) {
    function n(e) {
      return Object.prototype.toString.call(e);
    }

    t.isArray = function (e) {
      return Array.isArray ? Array.isArray(e) : "[object Array]" === n(e);
    }, t.isBoolean = function (e) {
      return "boolean" == typeof e;
    }, t.isNull = function (e) {
      return null === e;
    }, t.isNullOrUndefined = function (e) {
      return null == e;
    }, t.isNumber = function (e) {
      return "number" == typeof e;
    }, t.isString = function (e) {
      return "string" == typeof e;
    }, t.isSymbol = function (e) {
      return "symbol" == _typeof(e);
    }, t.isUndefined = function (e) {
      return void 0 === e;
    }, t.isRegExp = function (e) {
      return "[object RegExp]" === n(e);
    }, t.isObject = function (e) {
      return "object" == _typeof(e) && null !== e;
    }, t.isDate = function (e) {
      return "[object Date]" === n(e);
    }, t.isError = function (e) {
      return "[object Error]" === n(e) || e instanceof Error;
    }, t.isFunction = function (e) {
      return "function" == typeof e;
    }, t.isPrimitive = function (e) {
      return null === e || "boolean" == typeof e || "number" == typeof e || "string" == typeof e || "symbol" == _typeof(e) || void 0 === e;
    }, t.isBuffer = e.isBuffer;
  }).call(this, n(10).Buffer);
}, function (e, t, n) {
  "use strict";

  var r = this && this.__awaiter || function (e, t, n, r) {
    return new (n || (n = Promise))(function (o, i) {
      function a(e) {
        try {
          c(r.next(e));
        } catch (e) {
          i(e);
        }
      }

      function s(e) {
        try {
          c(r.throw(e));
        } catch (e) {
          i(e);
        }
      }

      function c(e) {
        var t;
        e.done ? o(e.value) : (t = e.value, t instanceof n ? t : new n(function (e) {
          e(t);
        })).then(a, s);
      }

      c((r = r.apply(e, t || [])).next());
    });
  },
      o = this && this.__generator || function (e, t) {
    var n,
        r,
        o,
        i,
        a = {
      label: 0,
      sent: function sent() {
        if (1 & o[0]) throw o[1];
        return o[1];
      },
      trys: [],
      ops: []
    };
    return i = {
      next: s(0),
      throw: s(1),
      return: s(2)
    }, "function" == typeof Symbol && (i[Symbol.iterator] = function () {
      return this;
    }), i;

    function s(i) {
      return function (s) {
        return function (i) {
          if (n) throw new TypeError("Generator is already executing.");

          for (; a;) {
            try {
              if (n = 1, r && (o = 2 & i[0] ? r.return : i[0] ? r.throw || ((o = r.return) && o.call(r), 0) : r.next) && !(o = o.call(r, i[1])).done) return o;

              switch (r = 0, o && (i = [2 & i[0], o.value]), i[0]) {
                case 0:
                case 1:
                  o = i;
                  break;

                case 4:
                  return a.label++, {
                    value: i[1],
                    done: !1
                  };

                case 5:
                  a.label++, r = i[1], i = [0];
                  continue;

                case 7:
                  i = a.ops.pop(), a.trys.pop();
                  continue;

                default:
                  if (!(o = a.trys, (o = o.length > 0 && o[o.length - 1]) || 6 !== i[0] && 2 !== i[0])) {
                    a = 0;
                    continue;
                  }

                  if (3 === i[0] && (!o || i[1] > o[0] && i[1] < o[3])) {
                    a.label = i[1];
                    break;
                  }

                  if (6 === i[0] && a.label < o[1]) {
                    a.label = o[1], o = i;
                    break;
                  }

                  if (o && a.label < o[2]) {
                    a.label = o[2], a.ops.push(i);
                    break;
                  }

                  o[2] && a.ops.pop(), a.trys.pop();
                  continue;
              }

              i = t.call(e, a);
            } catch (e) {
              i = [6, e], r = 0;
            } finally {
              n = o = 0;
            }
          }

          if (5 & i[0]) throw i[1];
          return {
            value: i[0] ? i[1] : void 0,
            done: !0
          };
        }([i, s]);
      };
    }
  };

  Object.defineProperty(t, "__esModule", {
    value: !0
  });
  var i,
      a = n(3),
      s = n(36),
      c = n(21),
      u = n(22),
      l = Math.pow(2, 32),
      f = Math.pow(2, 21) - 1,
      h = null;

  function p(e) {
    return Module.HEAP32[e >> 2];
  }

  t.monoPlatform = {
    start: function start(e) {
      return new Promise(function (t, n) {
        var l, f;
        s.attachDebuggerHotkey(e), window.Browser = {
          init: function init() {}
        }, l = function l() {
          window.Module = function (e, t, n) {
            var l = this,
                f = e.bootConfig.resources,
                h = window.Module || {},
                p = ["DEBUGGING ENABLED"];
            h.print = function (e) {
              return p.indexOf(e) < 0 && console.log(e);
            }, h.printErr = function (e) {
              console.error(e), c.showErrorNotification();
            }, h.preRun = h.preRun || [], h.postRun = h.postRun || [], h.preloadPlugins = [];

            var g,
                w,
                E = e.loadResources(f.assembly, function (e) {
              return "_framework/" + e;
            }, "assembly"),
                S = e.loadResources(f.pdb || {}, function (e) {
              return "_framework/" + e;
            }, "pdb"),
                _ = e.loadResource("dotnet.wasm", "_framework/dotnet.wasm", e.bootConfig.resources.runtime["dotnet.wasm"], "dotnetwasm");

            if (e.bootConfig.resources.runtime.hasOwnProperty("dotnet.timezones.blat") && (g = e.loadResource("dotnet.timezones.blat", "_framework/dotnet.timezones.blat", e.bootConfig.resources.runtime["dotnet.timezones.blat"], "globalization")), e.bootConfig.icuDataMode != u.ICUDataMode.Invariant) {
              var I = e.startOptions.applicationCulture || navigator.languages && navigator.languages[0],
                  C = function (e, t) {
                if (!t || e.icuDataMode === u.ICUDataMode.All) return "icudt.dat";
                var n = t.split("-")[0];
                return ["en", "fr", "it", "de", "es"].includes(n) ? "icudt_EFIGS.dat" : ["zh", "ko", "ja"].includes(n) ? "icudt_CJK.dat" : "icudt_no_CJK.dat";
              }(e.bootConfig, I);

              w = e.loadResource(C, "_framework/" + C, e.bootConfig.resources.runtime[C], "globalization");
            }

            return h.instantiateWasm = function (e, t) {
              return r(l, void 0, void 0, function () {
                var n, r;
                return o(this, function (o) {
                  switch (o.label) {
                    case 0:
                      return o.trys.push([0, 3,, 4]), [4, _];

                    case 1:
                      return [4, v(o.sent(), e)];

                    case 2:
                      return n = o.sent(), [3, 4];

                    case 3:
                      throw r = o.sent(), h.printErr(r), r;

                    case 4:
                      return t(n), [2];
                  }
                });
              }), [];
            }, h.preRun.push(function () {
              i = cwrap("mono_wasm_add_assembly", null, ["string", "number", "number"]), MONO.loaded_files = [], g && function (e) {
                r(this, void 0, void 0, function () {
                  var t, n;
                  return o(this, function (r) {
                    switch (r.label) {
                      case 0:
                        return t = "blazor:timezonedata", addRunDependency(t), [4, e.response];

                      case 1:
                        return [4, r.sent().arrayBuffer()];

                      case 2:
                        return n = r.sent(), Module.FS_createPath("/", "usr", !0, !0), Module.FS_createPath("/usr/", "share", !0, !0), Module.FS_createPath("/usr/share/", "zoneinfo", !0, !0), MONO.mono_wasm_load_data_archive(new Uint8Array(n), "/usr/share/zoneinfo/"), removeRunDependency(t), [2];
                    }
                  });
                });
              }(g), w ? function (e) {
                r(this, void 0, void 0, function () {
                  var t, n, r, i, a;
                  return o(this, function (o) {
                    switch (o.label) {
                      case 0:
                        return t = "blazor:icudata", addRunDependency(t), [4, e.response];

                      case 1:
                        return n = o.sent(), i = Uint8Array.bind, [4, n.arrayBuffer()];

                      case 2:
                        if (r = new (i.apply(Uint8Array, [void 0, o.sent()]))(), a = MONO.mono_wasm_load_bytes_into_heap(r), !MONO.mono_wasm_load_icu_data(a)) throw new Error("Error loading ICU asset.");
                        return removeRunDependency(t), [2];
                    }
                  });
                });
              }(w) : MONO.mono_wasm_setenv("DOTNET_SYSTEM_GLOBALIZATION_INVARIANT", "1"), E.forEach(function (e) {
                return k(e, b(e.name, ".dll"));
              }), S.forEach(function (e) {
                return k(e, e.name);
              }), window.Blazor._internal.dotNetCriticalError = function (e) {
                h.printErr(BINDING.conv_string(e) || "(null)");
              }, window.Blazor._internal.getSatelliteAssemblies = function (t) {
                var n = BINDING.mono_array_to_js_array(t),
                    i = e.bootConfig.resources.satelliteResources;

                if (e.startOptions.applicationCulture || navigator.languages && navigator.languages[0], i) {
                  var a = Promise.all(n.filter(function (e) {
                    return i.hasOwnProperty(e);
                  }).map(function (t) {
                    return e.loadResources(i[t], function (e) {
                      return "_framework/" + e;
                    }, "assembly");
                  }).reduce(function (e, t) {
                    return e.concat(t);
                  }, new Array()).map(function (e) {
                    return r(l, void 0, void 0, function () {
                      return o(this, function (t) {
                        switch (t.label) {
                          case 0:
                            return [4, e.response];

                          case 1:
                            return [2, t.sent().arrayBuffer()];
                        }
                      });
                    });
                  }));
                  return BINDING.js_to_mono_obj(a.then(function (e) {
                    return e.length && (window.Blazor._internal.readSatelliteAssemblies = function () {
                      for (var t = BINDING.mono_obj_array_new(e.length), n = 0; n < e.length; n++) {
                        BINDING.mono_obj_array_set(t, n, BINDING.js_typed_array_to_array(new Uint8Array(e[n])));
                      }

                      return t;
                    }), e.length;
                  }));
                }

                return BINDING.js_to_mono_obj(Promise.resolve(0));
              };
              var t = {};

              window.Blazor._internal.getLazyAssemblies = function (n) {
                var i = BINDING.mono_array_to_js_array(n),
                    a = e.bootConfig.resources.lazyAssembly;
                if (!a) throw new Error("No assemblies have been marked as lazy-loadable. Use the 'BlazorWebAssemblyLazyLoad' item group in your project file to enable lazy loading an assembly.");
                var c,
                    u = i.filter(function (e) {
                  return a.hasOwnProperty(e);
                });

                if (u.length != i.length) {
                  var f = i.filter(function (e) {
                    return !u.includes(e);
                  });
                  throw new Error(f.join() + " must be marked with 'BlazorWebAssemblyLazyLoad' item group in your project file to allow lazy-loading.");
                }

                if (s.hasDebuggingEnabled()) {
                  var h = e.bootConfig.resources.pdb,
                      p = u.map(function (e) {
                    return b(e, ".pdb");
                  });
                  h && (c = Promise.all(p.map(function (t) {
                    return a.hasOwnProperty(t) ? e.loadResource(t, "_framework/" + t, a[t], "pdb") : null;
                  }).map(function (e) {
                    return r(l, void 0, void 0, function () {
                      var t;
                      return o(this, function (n) {
                        switch (n.label) {
                          case 0:
                            return e ? [4, e.response] : [3, 2];

                          case 1:
                            return t = n.sent().arrayBuffer(), [3, 3];

                          case 2:
                            t = null, n.label = 3;

                          case 3:
                            return [2, t];
                        }
                      });
                    });
                  })));
                }

                var d = Promise.all(u.map(function (t) {
                  return e.loadResource(t, "_framework/" + t, a[t], "assembly");
                }).map(function (e) {
                  return r(l, void 0, void 0, function () {
                    return o(this, function (t) {
                      switch (t.label) {
                        case 0:
                          return [4, e.response];

                        case 1:
                          return [2, t.sent().arrayBuffer()];
                      }
                    });
                  });
                }));
                return BINDING.js_to_mono_obj(Promise.all([d, c]).then(function (e) {
                  return t.assemblies = e[0], t.pdbs = e[1], t.assemblies.length && (window.Blazor._internal.readLazyAssemblies = function () {
                    var e = t.assemblies;
                    if (!e) return BINDING.mono_obj_array_new(0);

                    for (var n = BINDING.mono_obj_array_new(e.length), r = 0; r < e.length; r++) {
                      var o = e[r];
                      BINDING.mono_obj_array_set(n, r, BINDING.js_typed_array_to_array(new Uint8Array(o)));
                    }

                    return n;
                  }, window.Blazor._internal.readLazyPdbs = function () {
                    var e = t.assemblies,
                        n = t.pdbs;
                    if (!e) return BINDING.mono_obj_array_new(0);

                    for (var r = BINDING.mono_obj_array_new(e.length), o = 0; o < e.length; o++) {
                      var i = n && n[o] ? new Uint8Array(n[o]) : new Uint8Array();
                      BINDING.mono_obj_array_set(r, o, BINDING.js_typed_array_to_array(i));
                    }

                    return r;
                  }), t.assemblies.length;
                }));
              };
            }), h.postRun.push(function () {
              e.bootConfig.debugBuild && e.bootConfig.cacheBootResources && e.logToConsole(), e.purgeUnusedCacheEntriesAsync(), e.bootConfig.icuDataMode === u.ICUDataMode.Sharded && (MONO.mono_wasm_setenv("__BLAZOR_SHARDED_ICU", "1"), e.startOptions.applicationCulture && MONO.mono_wasm_setenv("LANG", e.startOptions.applicationCulture + ".UTF-8")), MONO.mono_wasm_setenv("MONO_URI_DOTNETRELATIVEORABSOLUTE", "true");
              var n,
                  r,
                  o,
                  i = "UTC";

              try {
                i = Intl.DateTimeFormat().resolvedOptions().timeZone;
              } catch (e) {}

              MONO.mono_wasm_setenv("TZ", i), cwrap("mono_wasm_enable_on_demand_gc", null, ["number"])(0), cwrap("mono_wasm_load_runtime", null, ["string", "number"])("appBinDir", s.hasDebuggingEnabled() ? -1 : 0), MONO.mono_wasm_runtime_ready(), n = y("Microsoft.AspNetCore.Components.WebAssembly", "Microsoft.AspNetCore.Components.WebAssembly.Services.DefaultWebAssemblyJSRuntime", "InvokeDotNet"), r = y("Microsoft.AspNetCore.Components.WebAssembly", "Microsoft.AspNetCore.Components.WebAssembly.Services.DefaultWebAssemblyJSRuntime", "BeginInvokeDotNet"), o = y("Microsoft.AspNetCore.Components.WebAssembly", "Microsoft.AspNetCore.Components.WebAssembly.Services.DefaultWebAssemblyJSRuntime", "EndInvokeJS"), a.DotNet.attachDispatcher({
                beginInvokeDotNetFromJS: function beginInvokeDotNetFromJS(e, t, n, o, i) {
                  if (m(), !o && !t) throw new Error("Either assemblyName or dotNetObjectId must have a non null value.");
                  var a = o ? o.toString() : t;
                  r(e ? e.toString() : null, a, n, i);
                },
                endInvokeJSFromDotNet: function endInvokeJSFromDotNet(e, t, n) {
                  o(n);
                },
                invokeDotNetFromJS: function invokeDotNetFromJS(e, t, r, o) {
                  return m(), n(e || null, t, r ? r.toString() : null, o);
                }
              }), t();
            }), h;

            function k(e, t) {
              return r(this, void 0, void 0, function () {
                var r, a, s, c, u;
                return o(this, function (o) {
                  switch (o.label) {
                    case 0:
                      r = "blazor:" + e.name, addRunDependency(r), o.label = 1;

                    case 1:
                      return o.trys.push([1, 3,, 4]), [4, e.response.then(function (e) {
                        return e.arrayBuffer();
                      })];

                    case 2:
                      return a = o.sent(), s = new Uint8Array(a), c = Module._malloc(s.length), new Uint8Array(Module.HEAPU8.buffer, c, s.length).set(s), i(t, c, s.length), MONO.loaded_files.push((l = e.url, d.href = l, d.href)), [3, 4];

                    case 3:
                      return u = o.sent(), n(u), [2];

                    case 4:
                      return removeRunDependency(r), [2];
                  }

                  var l;
                });
              });
            }
          }(e, t, n), function (e) {
            if ("undefined" == typeof WebAssembly || !WebAssembly.validate) throw new Error("This browser does not support WebAssembly.");
            var t = Object.keys(e.bootConfig.resources.runtime).filter(function (e) {
              return e.startsWith("dotnet.") && e.endsWith(".js");
            })[0],
                n = e.bootConfig.resources.runtime[t],
                r = document.createElement("script");

            if (r.src = "_framework/" + t, r.defer = !0, e.bootConfig.cacheBootResources && (r.integrity = n, r.crossOrigin = "anonymous"), e.startOptions.loadBootResource) {
              var o = e.startOptions.loadBootResource("dotnetjs", t, r.src, n);
              if ("string" == typeof o) r.src = o;else if (o) throw new Error("For a dotnetjs resource, custom loaders must supply a URI string.");
            }

            document.body.appendChild(r);
          }(e);
        }, f = document.createElement("script"), window.__wasmmodulecallback__ = l, f.type = "text/javascript", f.text = "var Module; window.__wasmmodulecallback__(); delete window.__wasmmodulecallback__;", document.body.appendChild(f);
      });
    },
    callEntryPoint: function callEntryPoint(e) {
      y("Microsoft.AspNetCore.Components.WebAssembly", "Microsoft.AspNetCore.Components.WebAssembly.Hosting.EntrypointInvoker", "InvokeEntrypoint")(e, null);
    },
    toUint8Array: function toUint8Array(e) {
      var t = g(e),
          n = p(t);
      return new Uint8Array(Module.HEAPU8.buffer, t + 4, n);
    },
    getArrayLength: function getArrayLength(e) {
      return p(g(e));
    },
    getArrayEntryPtr: function getArrayEntryPtr(e, t, n) {
      return g(e) + 4 + t * n;
    },
    getObjectFieldsBaseAddress: function getObjectFieldsBaseAddress(e) {
      return e + 8;
    },
    readInt16Field: function readInt16Field(e, t) {
      return n = e + (t || 0), Module.HEAP16[n >> 1];
      var n;
    },
    readInt32Field: function readInt32Field(e, t) {
      return p(e + (t || 0));
    },
    readUint64Field: function readUint64Field(e, t) {
      return function (e) {
        var t = e >> 2,
            n = Module.HEAPU32[t + 1];
        if (n > f) throw new Error("Cannot read uint64 with high order part " + n + ", because the result would exceed Number.MAX_SAFE_INTEGER.");
        return n * l + Module.HEAPU32[t];
      }(e + (t || 0));
    },
    readFloatField: function readFloatField(e, t) {
      return n = e + (t || 0), Module.HEAPF32[n >> 2];
      var n;
    },
    readObjectField: function readObjectField(e, t) {
      return p(e + (t || 0));
    },
    readStringField: function readStringField(e, t, n) {
      var r,
          o = p(e + (t || 0));
      if (0 === o) return null;

      if (n) {
        var i = BINDING.unbox_mono_obj(o);
        return "boolean" == typeof i ? i ? "" : null : i;
      }

      return h ? void 0 === (r = h.stringCache.get(o)) && (r = BINDING.conv_string(o), h.stringCache.set(o, r)) : r = BINDING.conv_string(o), r;
    },
    readStructField: function readStructField(e, t) {
      return e + (t || 0);
    },
    beginHeapLock: function beginHeapLock() {
      return m(), h = new w();
    },
    invokeWhenHeapUnlocked: function invokeWhenHeapUnlocked(e) {
      h ? h.enqueuePostReleaseAction(e) : e();
    }
  };
  var d = document.createElement("a");

  function g(e) {
    return e + 12;
  }

  function y(e, t, n) {
    var r = "[" + e + "] " + t + ":" + n;
    return BINDING.bind_static_method(r);
  }

  function v(e, t) {
    return r(this, void 0, void 0, function () {
      var n, r;
      return o(this, function (o) {
        switch (o.label) {
          case 0:
            if ("function" != typeof WebAssembly.instantiateStreaming) return [3, 4];
            o.label = 1;

          case 1:
            return o.trys.push([1, 3,, 4]), [4, WebAssembly.instantiateStreaming(e.response, t)];

          case 2:
            return [2, o.sent().instance];

          case 3:
            return n = o.sent(), console.info("Streaming compilation failed. Falling back to ArrayBuffer instantiation. ", n), [3, 4];

          case 4:
            return [4, e.response.then(function (e) {
              return e.arrayBuffer();
            })];

          case 5:
            return r = o.sent(), [4, WebAssembly.instantiate(r, t)];

          case 6:
            return [2, o.sent().instance];
        }
      });
    });
  }

  function b(e, t) {
    var n = e.lastIndexOf(".");
    if (n < 0) throw new Error("No extension to replace in '" + e + "'");
    return e.substr(0, n) + t;
  }

  function m() {
    if (h) throw new Error("Assertion failed - heap is currently locked");
  }

  var w = function () {
    function e() {
      this.stringCache = new Map();
    }

    return e.prototype.enqueuePostReleaseAction = function (e) {
      this.postReleaseActions || (this.postReleaseActions = []), this.postReleaseActions.push(e);
    }, e.prototype.release = function () {
      var e;
      if (h !== this) throw new Error("Trying to release a lock which isn't current");

      for (h = null; null === (e = this.postReleaseActions) || void 0 === e ? void 0 : e.length;) {
        this.postReleaseActions.shift()(), m();
      }
    }, e;
  }();
}, function (e, t, n) {
  "use strict";

  var r = this && this.__awaiter || function (e, t, n, r) {
    return new (n || (n = Promise))(function (o, i) {
      function a(e) {
        try {
          c(r.next(e));
        } catch (e) {
          i(e);
        }
      }

      function s(e) {
        try {
          c(r.throw(e));
        } catch (e) {
          i(e);
        }
      }

      function c(e) {
        var t;
        e.done ? o(e.value) : (t = e.value, t instanceof n ? t : new n(function (e) {
          e(t);
        })).then(a, s);
      }

      c((r = r.apply(e, t || [])).next());
    });
  },
      o = this && this.__generator || function (e, t) {
    var n,
        r,
        o,
        i,
        a = {
      label: 0,
      sent: function sent() {
        if (1 & o[0]) throw o[1];
        return o[1];
      },
      trys: [],
      ops: []
    };
    return i = {
      next: s(0),
      throw: s(1),
      return: s(2)
    }, "function" == typeof Symbol && (i[Symbol.iterator] = function () {
      return this;
    }), i;

    function s(i) {
      return function (s) {
        return function (i) {
          if (n) throw new TypeError("Generator is already executing.");

          for (; a;) {
            try {
              if (n = 1, r && (o = 2 & i[0] ? r.return : i[0] ? r.throw || ((o = r.return) && o.call(r), 0) : r.next) && !(o = o.call(r, i[1])).done) return o;

              switch (r = 0, o && (i = [2 & i[0], o.value]), i[0]) {
                case 0:
                case 1:
                  o = i;
                  break;

                case 4:
                  return a.label++, {
                    value: i[1],
                    done: !1
                  };

                case 5:
                  a.label++, r = i[1], i = [0];
                  continue;

                case 7:
                  i = a.ops.pop(), a.trys.pop();
                  continue;

                default:
                  if (!(o = a.trys, (o = o.length > 0 && o[o.length - 1]) || 6 !== i[0] && 2 !== i[0])) {
                    a = 0;
                    continue;
                  }

                  if (3 === i[0] && (!o || i[1] > o[0] && i[1] < o[3])) {
                    a.label = i[1];
                    break;
                  }

                  if (6 === i[0] && a.label < o[1]) {
                    a.label = o[1], o = i;
                    break;
                  }

                  if (o && a.label < o[2]) {
                    a.label = o[2], a.ops.push(i);
                    break;
                  }

                  o[2] && a.ops.pop(), a.trys.pop();
                  continue;
              }

              i = t.call(e, a);
            } catch (e) {
              i = [6, e], r = 0;
            } finally {
              n = o = 0;
            }
          }

          if (5 & i[0]) throw i[1];
          return {
            value: i[0] ? i[1] : void 0,
            done: !0
          };
        }([i, s]);
      };
    }
  };

  Object.defineProperty(t, "__esModule", {
    value: !0
  });
  var i = !1;

  t.showErrorNotification = function () {
    return r(this, void 0, void 0, function () {
      var e;
      return o(this, function (t) {
        return (e = document.querySelector("#blazor-error-ui")) && (e.style.display = "block"), i || (i = !0, document.querySelectorAll("#blazor-error-ui .reload").forEach(function (e) {
          e.onclick = function (e) {
            location.reload(), e.preventDefault();
          };
        }), document.querySelectorAll("#blazor-error-ui .dismiss").forEach(function (e) {
          e.onclick = function (e) {
            var t = document.querySelector("#blazor-error-ui");
            t && (t.style.display = "none"), e.preventDefault();
          };
        })), [2];
      });
    });
  };
}, function (e, t, n) {
  "use strict";

  var r = this && this.__awaiter || function (e, t, n, r) {
    return new (n || (n = Promise))(function (o, i) {
      function a(e) {
        try {
          c(r.next(e));
        } catch (e) {
          i(e);
        }
      }

      function s(e) {
        try {
          c(r.throw(e));
        } catch (e) {
          i(e);
        }
      }

      function c(e) {
        var t;
        e.done ? o(e.value) : (t = e.value, t instanceof n ? t : new n(function (e) {
          e(t);
        })).then(a, s);
      }

      c((r = r.apply(e, t || [])).next());
    });
  },
      o = this && this.__generator || function (e, t) {
    var n,
        r,
        o,
        i,
        a = {
      label: 0,
      sent: function sent() {
        if (1 & o[0]) throw o[1];
        return o[1];
      },
      trys: [],
      ops: []
    };
    return i = {
      next: s(0),
      throw: s(1),
      return: s(2)
    }, "function" == typeof Symbol && (i[Symbol.iterator] = function () {
      return this;
    }), i;

    function s(i) {
      return function (s) {
        return function (i) {
          if (n) throw new TypeError("Generator is already executing.");

          for (; a;) {
            try {
              if (n = 1, r && (o = 2 & i[0] ? r.return : i[0] ? r.throw || ((o = r.return) && o.call(r), 0) : r.next) && !(o = o.call(r, i[1])).done) return o;

              switch (r = 0, o && (i = [2 & i[0], o.value]), i[0]) {
                case 0:
                case 1:
                  o = i;
                  break;

                case 4:
                  return a.label++, {
                    value: i[1],
                    done: !1
                  };

                case 5:
                  a.label++, r = i[1], i = [0];
                  continue;

                case 7:
                  i = a.ops.pop(), a.trys.pop();
                  continue;

                default:
                  if (!(o = a.trys, (o = o.length > 0 && o[o.length - 1]) || 6 !== i[0] && 2 !== i[0])) {
                    a = 0;
                    continue;
                  }

                  if (3 === i[0] && (!o || i[1] > o[0] && i[1] < o[3])) {
                    a.label = i[1];
                    break;
                  }

                  if (6 === i[0] && a.label < o[1]) {
                    a.label = o[1], o = i;
                    break;
                  }

                  if (o && a.label < o[2]) {
                    a.label = o[2], a.ops.push(i);
                    break;
                  }

                  o[2] && a.ops.pop(), a.trys.pop();
                  continue;
              }

              i = t.call(e, a);
            } catch (e) {
              i = [6, e], r = 0;
            } finally {
              n = o = 0;
            }
          }

          if (5 & i[0]) throw i[1];
          return {
            value: i[0] ? i[1] : void 0,
            done: !0
          };
        }([i, s]);
      };
    }
  };

  Object.defineProperty(t, "__esModule", {
    value: !0
  });

  var i = function () {
    function e(e, t) {
      this.bootConfig = e, this.applicationEnvironment = t;
    }

    return e.initAsync = function (t) {
      return r(this, void 0, void 0, function () {
        var n, r;
        return o(this, function (o) {
          switch (o.label) {
            case 0:
              return [4, fetch("_framework/blazor.boot.json", {
                method: "GET",
                credentials: "include",
                cache: "no-cache"
              })];

            case 1:
              return n = o.sent(), r = t || n.headers.get("Blazor-Environment") || "Production", [4, n.json()];

            case 2:
              return [2, new e(o.sent(), r)];
          }
        });
      });
    }, e;
  }();

  t.BootConfigResult = i, function (e) {
    e[e.Sharded = 0] = "Sharded", e[e.All = 1] = "All", e[e.Invariant = 2] = "Invariant";
  }(t.ICUDataMode || (t.ICUDataMode = {}));
}, function (e, t, n) {
  var r = n(61),
      o = n(39),
      i = n(14).Buffer;

  function a(e) {
    if (!(this instanceof a)) return new a(e);

    if (this._bufs = [], this.length = 0, "function" == typeof e) {
      this._callback = e;

      var t = function (e) {
        this._callback && (this._callback(e), this._callback = null);
      }.bind(this);

      this.on("pipe", function (e) {
        e.on("error", t);
      }), this.on("unpipe", function (e) {
        e.removeListener("error", t);
      });
    } else this.append(e);

    r.call(this);
  }

  o.inherits(a, r), a.prototype._offset = function (e) {
    var t,
        n = 0,
        r = 0;
    if (0 === e) return [0, 0];

    for (; r < this._bufs.length; r++) {
      if (e < (t = n + this._bufs[r].length) || r == this._bufs.length - 1) return [r, e - n];
      n = t;
    }
  }, a.prototype.append = function (e) {
    var t = 0;
    if (i.isBuffer(e)) this._appendBuffer(e);else if (Array.isArray(e)) for (; t < e.length; t++) {
      this.append(e[t]);
    } else if (e instanceof a) for (; t < e._bufs.length; t++) {
      this.append(e._bufs[t]);
    } else null != e && ("number" == typeof e && (e = e.toString()), this._appendBuffer(i.from(e)));
    return this;
  }, a.prototype._appendBuffer = function (e) {
    this._bufs.push(e), this.length += e.length;
  }, a.prototype._write = function (e, t, n) {
    this._appendBuffer(e), "function" == typeof n && n();
  }, a.prototype._read = function (e) {
    if (!this.length) return this.push(null);
    e = Math.min(e, this.length), this.push(this.slice(0, e)), this.consume(e);
  }, a.prototype.end = function (e) {
    r.prototype.end.call(this, e), this._callback && (this._callback(null, this.slice()), this._callback = null);
  }, a.prototype.get = function (e) {
    return this.slice(e, e + 1)[0];
  }, a.prototype.slice = function (e, t) {
    return "number" == typeof e && e < 0 && (e += this.length), "number" == typeof t && t < 0 && (t += this.length), this.copy(null, 0, e, t);
  }, a.prototype.copy = function (e, t, n, r) {
    if (("number" != typeof n || n < 0) && (n = 0), ("number" != typeof r || r > this.length) && (r = this.length), n >= this.length) return e || i.alloc(0);
    if (r <= 0) return e || i.alloc(0);

    var o,
        a,
        s = !!e,
        c = this._offset(n),
        u = r - n,
        l = u,
        f = s && t || 0,
        h = c[1];

    if (0 === n && r == this.length) {
      if (!s) return 1 === this._bufs.length ? this._bufs[0] : i.concat(this._bufs, this.length);

      for (a = 0; a < this._bufs.length; a++) {
        this._bufs[a].copy(e, f), f += this._bufs[a].length;
      }

      return e;
    }

    if (l <= this._bufs[c[0]].length - h) return s ? this._bufs[c[0]].copy(e, t, h, h + l) : this._bufs[c[0]].slice(h, h + l);

    for (s || (e = i.allocUnsafe(u)), a = c[0]; a < this._bufs.length; a++) {
      if (!(l > (o = this._bufs[a].length - h))) {
        this._bufs[a].copy(e, f, h, h + l);

        break;
      }

      this._bufs[a].copy(e, f, h), f += o, l -= o, h && (h = 0);
    }

    return e;
  }, a.prototype.shallowSlice = function (e, t) {
    e = e || 0, t = t || this.length, e < 0 && (e += this.length), t < 0 && (t += this.length);

    var n = this._offset(e),
        r = this._offset(t),
        o = this._bufs.slice(n[0], r[0] + 1);

    return 0 == r[1] ? o.pop() : o[o.length - 1] = o[o.length - 1].slice(0, r[1]), 0 != n[1] && (o[0] = o[0].slice(n[1])), new a(o);
  }, a.prototype.toString = function (e, t, n) {
    return this.slice(t, n).toString(e);
  }, a.prototype.consume = function (e) {
    for (; this._bufs.length;) {
      if (!(e >= this._bufs[0].length)) {
        this._bufs[0] = this._bufs[0].slice(e), this.length -= e;
        break;
      }

      e -= this._bufs[0].length, this.length -= this._bufs[0].length, this._bufs.shift();
    }

    return this;
  }, a.prototype.duplicate = function () {
    for (var e = 0, t = new a(); e < this._bufs.length; e++) {
      t.append(this._bufs[e]);
    }

    return t;
  }, a.prototype.destroy = function () {
    this._bufs.length = 0, this.length = 0, this.push(null);
  }, function () {
    var e = {
      readDoubleBE: 8,
      readDoubleLE: 8,
      readFloatBE: 4,
      readFloatLE: 4,
      readInt32BE: 4,
      readInt32LE: 4,
      readUInt32BE: 4,
      readUInt32LE: 4,
      readInt16BE: 2,
      readInt16LE: 2,
      readUInt16BE: 2,
      readUInt16LE: 2,
      readInt8: 1,
      readUInt8: 1
    };

    for (var t in e) {
      !function (t) {
        a.prototype[t] = function (n) {
          return this.slice(n, n + e[t])[t](0);
        };
      }(t);
    }
  }(), e.exports = a;
}, function (e, t, n) {
  "use strict";

  (function (t) {
    !t.version || 0 === t.version.indexOf("v0.") || 0 === t.version.indexOf("v1.") && 0 !== t.version.indexOf("v1.8.") ? e.exports = {
      nextTick: function nextTick(e, n, r, o) {
        if ("function" != typeof e) throw new TypeError('"callback" argument must be a function');
        var i,
            a,
            s = arguments.length;

        switch (s) {
          case 0:
          case 1:
            return t.nextTick(e);

          case 2:
            return t.nextTick(function () {
              e.call(null, n);
            });

          case 3:
            return t.nextTick(function () {
              e.call(null, n, r);
            });

          case 4:
            return t.nextTick(function () {
              e.call(null, n, r, o);
            });

          default:
            for (i = new Array(s - 1), a = 0; a < i.length;) {
              i[a++] = arguments[a];
            }

            return t.nextTick(function () {
              e.apply(null, i);
            });
        }
      }
    } : e.exports = t;
  }).call(this, n(13));
}, function (e, t, n) {
  "use strict";

  Object.defineProperty(t, "__esModule", {
    value: !0
  });
  var r = n(6),
      o = n(33),
      i = n(34),
      a = n(35);
  window.Blazor = {
    navigateTo: r.navigateTo,
    _internal: {
      navigationManager: r.internalFunctions,
      domWrapper: o.domFunctions,
      Virtualize: i.Virtualize,
      InputFile: a.InputFile
    }
  };
}, function (e, t, n) {
  "use strict";

  Object.defineProperty(t, "__esModule", {
    value: !0
  });
}, function (e, t, n) {
  "use strict";

  Object.defineProperty(t, "__esModule", {
    value: !0
  });

  var r = n(28),
      o = n(29),
      i = n(7),
      a = n(32),
      s = n(18),
      c = n(6),
      u = document.createElement("template"),
      l = document.createElementNS("http://www.w3.org/2000/svg", "g"),
      f = {
    submit: !0
  },
      h = {},
      p = function () {
    function e(e) {
      var t = this;
      this.childComponentLocations = {}, this.browserRendererId = e, this.eventDelegator = new o.EventDelegator(function (e, n, r, o) {
        !function (e, t, n, r, o) {
          f[e.type] && e.preventDefault();
          var i = {
            browserRendererId: t,
            eventHandlerId: n,
            eventArgsType: r.type,
            eventFieldInfo: o
          };
          s.dispatchEvent(i, r.data);
        }(e, t.browserRendererId, n, r, o);
      }), c.attachToEventDelegator(this.eventDelegator);
    }

    return e.prototype.attachRootComponentToLogicalElement = function (e, t) {
      this.attachComponentToElement(e, t), h[e] = t;
    }, e.prototype.updateComponent = function (e, t, n, r) {
      var o,
          a = this.childComponentLocations[t];
      if (!a) throw new Error("No element is currently associated with component " + t);
      var s = h[t];

      if (s) {
        var c = i.getLogicalSiblingEnd(s);
        delete h[t], c ? function (e, t) {
          var n = i.getLogicalParent(e);
          if (!n) throw new Error("Can't clear between nodes. The start node does not have a logical parent.");

          for (var r = i.getLogicalChildrenArray(n), o = r.indexOf(e) + 1, a = r.indexOf(t), s = o; s <= a; s++) {
            i.removeLogicalChild(n, o);
          }

          e.textContent = "!";
        }(s, c) : function (e) {
          var t;

          for (; t = e.firstChild;) {
            e.removeChild(t);
          }
        }(s);
      }

      var u = null === (o = i.getClosestDomElement(a)) || void 0 === o ? void 0 : o.ownerDocument,
          l = u && u.activeElement;
      this.applyEdits(e, t, a, 0, n, r), l instanceof HTMLElement && u && u.activeElement !== l && l.focus();
    }, e.prototype.disposeComponent = function (e) {
      delete this.childComponentLocations[e];
    }, e.prototype.disposeEventHandler = function (e) {
      this.eventDelegator.removeListener(e);
    }, e.prototype.attachComponentToElement = function (e, t) {
      this.childComponentLocations[e] = t;
    }, e.prototype.applyEdits = function (e, t, n, o, a, s) {
      for (var c, u = 0, l = o, f = e.arrayBuilderSegmentReader, h = e.editReader, p = e.frameReader, d = f.values(a), g = f.offset(a), y = g + f.count(a), v = g; v < y; v++) {
        var b = e.diffReader.editsEntry(d, v),
            m = h.editType(b);

        switch (m) {
          case r.EditType.prependFrame:
            var w = h.newTreeIndex(b),
                E = e.referenceFramesEntry(s, w),
                S = h.siblingIndex(b);
            this.insertFrame(e, t, n, l + S, s, E, w);
            break;

          case r.EditType.removeFrame:
            S = h.siblingIndex(b);
            i.removeLogicalChild(n, l + S);
            break;

          case r.EditType.setAttribute:
            w = h.newTreeIndex(b), E = e.referenceFramesEntry(s, w), S = h.siblingIndex(b);
            if (!((_ = i.getLogicalChild(n, l + S)) instanceof Element)) throw new Error("Cannot set attribute on non-element child");
            this.applyAttribute(e, t, _, E);
            break;

          case r.EditType.removeAttribute:
            var _;

            S = h.siblingIndex(b);
            if (!((_ = i.getLogicalChild(n, l + S)) instanceof HTMLElement)) throw new Error("Cannot remove attribute from non-element child");
            var I = h.removedAttributeName(b);
            this.tryApplySpecialProperty(e, _, I, null) || _.removeAttribute(I);
            break;

          case r.EditType.updateText:
            w = h.newTreeIndex(b), E = e.referenceFramesEntry(s, w), S = h.siblingIndex(b);
            var C = i.getLogicalChild(n, l + S);
            if (!(C instanceof Text)) throw new Error("Cannot set text content on non-text child");
            C.textContent = p.textContent(E);
            break;

          case r.EditType.updateMarkup:
            w = h.newTreeIndex(b), E = e.referenceFramesEntry(s, w), S = h.siblingIndex(b);
            i.removeLogicalChild(n, l + S), this.insertMarkup(e, n, l + S, E);
            break;

          case r.EditType.stepIn:
            S = h.siblingIndex(b);
            n = i.getLogicalChild(n, l + S), u++, l = 0;
            break;

          case r.EditType.stepOut:
            n = i.getLogicalParent(n), l = 0 === --u ? o : 0;
            break;

          case r.EditType.permutationListEntry:
            (c = c || []).push({
              fromSiblingIndex: l + h.siblingIndex(b),
              toSiblingIndex: l + h.moveToSiblingIndex(b)
            });
            break;

          case r.EditType.permutationListEnd:
            i.permuteLogicalChildren(n, c), c = void 0;
            break;

          default:
            throw new Error("Unknown edit type: " + m);
        }
      }
    }, e.prototype.insertFrame = function (e, t, n, o, i, s, c) {
      var u = e.frameReader,
          l = u.frameType(s);

      switch (l) {
        case r.FrameType.element:
          return this.insertElement(e, t, n, o, i, s, c), 1;

        case r.FrameType.text:
          return this.insertText(e, n, o, s), 1;

        case r.FrameType.attribute:
          throw new Error("Attribute frames should only be present as leading children of element frames.");

        case r.FrameType.component:
          return this.insertComponent(e, n, o, s), 1;

        case r.FrameType.region:
          return this.insertFrameRange(e, t, n, o, i, c + 1, c + u.subtreeLength(s));

        case r.FrameType.elementReferenceCapture:
          if (n instanceof Element) return a.applyCaptureIdToElement(n, u.elementReferenceCaptureId(s)), 0;
          throw new Error("Reference capture frames can only be children of element frames.");

        case r.FrameType.markup:
          return this.insertMarkup(e, n, o, s), 1;

        default:
          throw new Error("Unknown frame type: " + l);
      }
    }, e.prototype.insertElement = function (e, t, n, o, a, s, c) {
      for (var u = e.frameReader, l = u.elementName(s), f = "svg" === l || i.isSvgElement(n) ? document.createElementNS("http://www.w3.org/2000/svg", l) : document.createElement(l), h = i.toLogicalElement(f), p = !1, d = c + u.subtreeLength(s), g = c + 1; g < d; g++) {
        var v = e.referenceFramesEntry(a, g);

        if (u.frameType(v) !== r.FrameType.attribute) {
          i.insertLogicalChild(f, n, o), p = !0, this.insertFrameRange(e, t, h, 0, a, g, d);
          break;
        }

        this.applyAttribute(e, t, f, v);
      }

      if (p || i.insertLogicalChild(f, n, o), f instanceof HTMLOptionElement) this.trySetSelectValueFromOptionElement(f);else if (f instanceof HTMLSelectElement && "_blazorSelectValue" in f) {
        y(f, f._blazorSelectValue);
      }
    }, e.prototype.trySetSelectValueFromOptionElement = function (e) {
      var t = this.findClosestAncestorSelectElement(e);
      return !(!t || !("_blazorSelectValue" in t) || t._blazorSelectValue !== e.value) && (y(t, e.value), delete t._blazorSelectValue, !0);
    }, e.prototype.insertComponent = function (e, t, n, r) {
      var o = i.createAndInsertLogicalContainer(t, n),
          a = e.frameReader.componentId(r);
      this.attachComponentToElement(a, o);
    }, e.prototype.insertText = function (e, t, n, r) {
      var o = e.frameReader.textContent(r),
          a = document.createTextNode(o);
      i.insertLogicalChild(a, t, n);
    }, e.prototype.insertMarkup = function (e, t, n, r) {
      for (var o, a = i.createAndInsertLogicalContainer(t, n), s = e.frameReader.markupContent(r), c = (o = s, i.isSvgElement(t) ? (l.innerHTML = o || " ", l) : (u.innerHTML = o || " ", u.content)), f = 0; c.firstChild;) {
        i.insertLogicalChild(c.firstChild, a, f++);
      }
    }, e.prototype.applyAttribute = function (e, t, n, r) {
      var o = e.frameReader,
          i = o.attributeName(r),
          a = o.attributeEventHandlerId(r);

      if (a) {
        var s = g(i);
        this.eventDelegator.setListener(n, s, a, t);
      } else this.tryApplySpecialProperty(e, n, i, r) || n.setAttribute(i, o.attributeValue(r));
    }, e.prototype.tryApplySpecialProperty = function (e, t, n, r) {
      switch (n) {
        case "value":
          return this.tryApplyValueProperty(e, t, r);

        case "checked":
          return this.tryApplyCheckedProperty(e, t, r);

        default:
          return !!n.startsWith("__internal_") && (this.applyInternalAttribute(e, t, n.substring("__internal_".length), r), !0);
      }
    }, e.prototype.applyInternalAttribute = function (e, t, n, r) {
      var o = r ? e.frameReader.attributeValue(r) : null;

      if (n.startsWith("stopPropagation_")) {
        var i = g(n.substring("stopPropagation_".length));
        this.eventDelegator.setStopPropagation(t, i, null !== o);
      } else {
        if (!n.startsWith("preventDefault_")) throw new Error("Unsupported internal attribute '" + n + "'");
        i = g(n.substring("preventDefault_".length));
        this.eventDelegator.setPreventDefault(t, i, null !== o);
      }
    }, e.prototype.tryApplyValueProperty = function (e, t, n) {
      var r = e.frameReader;

      if ("INPUT" === t.tagName && "time" === t.getAttribute("type") && !t.getAttribute("step")) {
        var o = n ? r.attributeValue(n) : null;
        if (o) return t.value = o.substring(0, 5), !0;
      }

      switch (t.tagName) {
        case "INPUT":
        case "SELECT":
        case "TEXTAREA":
          var i = n ? r.attributeValue(n) : null;
          return t instanceof HTMLSelectElement ? (y(t, i), t._blazorSelectValue = i) : t.value = i, !0;

        case "OPTION":
          return (i = n ? r.attributeValue(n) : null) || "" === i ? t.setAttribute("value", i) : t.removeAttribute("value"), this.trySetSelectValueFromOptionElement(t), !0;

        default:
          return !1;
      }
    }, e.prototype.tryApplyCheckedProperty = function (e, t, n) {
      if ("INPUT" === t.tagName) {
        var r = n ? e.frameReader.attributeValue(n) : null;
        return t.checked = null !== r, !0;
      }

      return !1;
    }, e.prototype.findClosestAncestorSelectElement = function (e) {
      for (; e;) {
        if (e instanceof HTMLSelectElement) return e;
        e = e.parentElement;
      }

      return null;
    }, e.prototype.insertFrameRange = function (e, t, n, r, o, i, a) {
      for (var s = r, c = i; c < a; c++) {
        var u = e.referenceFramesEntry(o, c);
        r += this.insertFrame(e, t, n, r, o, u, c), c += d(e, u);
      }

      return r - s;
    }, e;
  }();

  function d(e, t) {
    var n = e.frameReader;

    switch (n.frameType(t)) {
      case r.FrameType.component:
      case r.FrameType.element:
      case r.FrameType.region:
        return n.subtreeLength(t) - 1;

      default:
        return 0;
    }
  }

  function g(e) {
    if (e.startsWith("on")) return e.substring(2);
    throw new Error("Attribute should be an event name, but doesn't start with 'on'. Value: '" + e + "'");
  }

  function y(e, t) {
    e.value = t || "";
  }

  t.BrowserRenderer = p;
}, function (e, t, n) {
  "use strict";

  Object.defineProperty(t, "__esModule", {
    value: !0
  }), function (e) {
    e[e.prependFrame = 1] = "prependFrame", e[e.removeFrame = 2] = "removeFrame", e[e.setAttribute = 3] = "setAttribute", e[e.removeAttribute = 4] = "removeAttribute", e[e.updateText = 5] = "updateText", e[e.stepIn = 6] = "stepIn", e[e.stepOut = 7] = "stepOut", e[e.updateMarkup = 8] = "updateMarkup", e[e.permutationListEntry = 9] = "permutationListEntry", e[e.permutationListEnd = 10] = "permutationListEnd";
  }(t.EditType || (t.EditType = {})), function (e) {
    e[e.element = 1] = "element", e[e.text = 2] = "text", e[e.attribute = 3] = "attribute", e[e.component = 4] = "component", e[e.region = 5] = "region", e[e.elementReferenceCapture = 6] = "elementReferenceCapture", e[e.markup = 8] = "markup";
  }(t.FrameType || (t.FrameType = {}));
}, function (e, t, n) {
  "use strict";

  Object.defineProperty(t, "__esModule", {
    value: !0
  });

  var r = n(30),
      o = n(31),
      i = l(["abort", "blur", "change", "error", "focus", "load", "loadend", "loadstart", "mouseenter", "mouseleave", "progress", "reset", "scroll", "submit", "unload", "toggle", "DOMNodeInsertedIntoDocument", "DOMNodeRemovedFromDocument"]),
      a = l(["click", "dblclick", "mousedown", "mousemove", "mouseup"]),
      s = function () {
    function e(t) {
      this.onEvent = t, this.afterClickCallbacks = [];
      var n = ++e.nextEventDelegatorId;
      this.eventsCollectionKey = "_blazorEvents_" + n, this.eventInfoStore = new c(this.onGlobalEvent.bind(this));
    }

    return e.prototype.setListener = function (e, t, n, r) {
      var o = this.getEventHandlerInfosForElement(e, !0),
          i = o.getHandler(t);
      if (i) this.eventInfoStore.update(i.eventHandlerId, n);else {
        var a = {
          element: e,
          eventName: t,
          eventHandlerId: n,
          renderingComponentId: r
        };
        this.eventInfoStore.add(a), o.setHandler(t, a);
      }
    }, e.prototype.getHandler = function (e) {
      return this.eventInfoStore.get(e);
    }, e.prototype.removeListener = function (e) {
      var t = this.eventInfoStore.remove(e);

      if (t) {
        var n = t.element,
            r = this.getEventHandlerInfosForElement(n, !1);
        r && r.removeHandler(t.eventName);
      }
    }, e.prototype.notifyAfterClick = function (e) {
      this.afterClickCallbacks.push(e), this.eventInfoStore.addGlobalListener("click");
    }, e.prototype.setStopPropagation = function (e, t, n) {
      this.getEventHandlerInfosForElement(e, !0).stopPropagation(t, n);
    }, e.prototype.setPreventDefault = function (e, t, n) {
      this.getEventHandlerInfosForElement(e, !0).preventDefault(t, n);
    }, e.prototype.onGlobalEvent = function (e) {
      if (e.target instanceof Element) {
        for (var t, n, s = e.target, c = null, u = i.hasOwnProperty(e.type), l = !1; s;) {
          var f = this.getEventHandlerInfosForElement(s, !1);

          if (f) {
            var h = f.getHandler(e.type);

            if (h && (t = s, n = e.type, !((t instanceof HTMLButtonElement || t instanceof HTMLInputElement || t instanceof HTMLTextAreaElement || t instanceof HTMLSelectElement) && a.hasOwnProperty(n) && t.disabled))) {
              c || (c = r.EventForDotNet.fromDOMEvent(e));
              var p = o.EventFieldInfo.fromEvent(h.renderingComponentId, e);
              this.onEvent(e, h.eventHandlerId, c, p);
            }

            f.stopPropagation(e.type) && (l = !0), f.preventDefault(e.type) && e.preventDefault();
          }

          s = u || l ? null : s.parentElement;
        }

        "click" === e.type && this.afterClickCallbacks.forEach(function (t) {
          return t(e);
        });
      }
    }, e.prototype.getEventHandlerInfosForElement = function (e, t) {
      return e.hasOwnProperty(this.eventsCollectionKey) ? e[this.eventsCollectionKey] : t ? e[this.eventsCollectionKey] = new u() : null;
    }, e.nextEventDelegatorId = 0, e;
  }();

  t.EventDelegator = s;

  var c = function () {
    function e(e) {
      this.globalListener = e, this.infosByEventHandlerId = {}, this.countByEventName = {};
    }

    return e.prototype.add = function (e) {
      if (this.infosByEventHandlerId[e.eventHandlerId]) throw new Error("Event " + e.eventHandlerId + " is already tracked");
      this.infosByEventHandlerId[e.eventHandlerId] = e, this.addGlobalListener(e.eventName);
    }, e.prototype.get = function (e) {
      return this.infosByEventHandlerId[e];
    }, e.prototype.addGlobalListener = function (e) {
      if (this.countByEventName.hasOwnProperty(e)) this.countByEventName[e]++;else {
        this.countByEventName[e] = 1;
        var t = i.hasOwnProperty(e);
        document.addEventListener(e, this.globalListener, t);
      }
    }, e.prototype.update = function (e, t) {
      if (this.infosByEventHandlerId.hasOwnProperty(t)) throw new Error("Event " + t + " is already tracked");
      var n = this.infosByEventHandlerId[e];
      delete this.infosByEventHandlerId[e], n.eventHandlerId = t, this.infosByEventHandlerId[t] = n;
    }, e.prototype.remove = function (e) {
      var t = this.infosByEventHandlerId[e];

      if (t) {
        delete this.infosByEventHandlerId[e];
        var n = t.eventName;
        0 == --this.countByEventName[n] && (delete this.countByEventName[n], document.removeEventListener(n, this.globalListener));
      }

      return t;
    }, e;
  }(),
      u = function () {
    function e() {
      this.handlers = {}, this.preventDefaultFlags = null, this.stopPropagationFlags = null;
    }

    return e.prototype.getHandler = function (e) {
      return this.handlers.hasOwnProperty(e) ? this.handlers[e] : null;
    }, e.prototype.setHandler = function (e, t) {
      this.handlers[e] = t;
    }, e.prototype.removeHandler = function (e) {
      delete this.handlers[e];
    }, e.prototype.preventDefault = function (e, t) {
      return void 0 !== t && (this.preventDefaultFlags = this.preventDefaultFlags || {}, this.preventDefaultFlags[e] = t), !!this.preventDefaultFlags && this.preventDefaultFlags[e];
    }, e.prototype.stopPropagation = function (e, t) {
      return void 0 !== t && (this.stopPropagationFlags = this.stopPropagationFlags || {}, this.stopPropagationFlags[e] = t), !!this.stopPropagationFlags && this.stopPropagationFlags[e];
    }, e;
  }();

  function l(e) {
    var t = {};
    return e.forEach(function (e) {
      t[e] = !0;
    }), t;
  }
}, function (e, t, n) {
  "use strict";

  var r = this && this.__assign || function () {
    return (r = Object.assign || function (e) {
      for (var t, n = 1, r = arguments.length; n < r; n++) {
        for (var o in t = arguments[n]) {
          Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
        }
      }

      return e;
    }).apply(this, arguments);
  };

  Object.defineProperty(t, "__esModule", {
    value: !0
  });

  var o = function () {
    function e(e, t) {
      this.type = e, this.data = t;
    }

    return e.fromDOMEvent = function (t) {
      var n = t.target;

      switch (t.type) {
        case "input":
        case "change":
          if (function (e) {
            return -1 !== a.indexOf(e.getAttribute("type"));
          }(n)) {
            var o = function (e) {
              var t = e.value,
                  n = e.type;

              switch (n) {
                case "date":
                case "datetime-local":
                case "month":
                  return t;

                case "time":
                  return 5 === t.length ? t + ":00" : t;

                case "week":
                  return t;
              }

              throw new Error("Invalid element type '" + n + "'.");
            }(n);

            return new e("change", {
              type: t.type,
              value: o
            });
          }

          var s = function (e) {
            return !!e && "INPUT" === e.tagName && "checkbox" === e.getAttribute("type");
          }(n) ? !!n.checked : n.value;
          return new e("change", {
            type: t.type,
            value: s
          });

        case "copy":
        case "cut":
        case "paste":
          return new e("clipboard", {
            type: t.type
          });

        case "drag":
        case "dragend":
        case "dragenter":
        case "dragleave":
        case "dragover":
        case "dragstart":
        case "drop":
          return new e("drag", function (e) {
            return r(r({}, i(e)), {
              dataTransfer: e.dataTransfer
            });
          }(t));

        case "focus":
        case "blur":
        case "focusin":
        case "focusout":
          return new e("focus", {
            type: t.type
          });

        case "keydown":
        case "keyup":
        case "keypress":
          return new e("keyboard", function (e) {
            return {
              type: e.type,
              key: e.key,
              code: e.code,
              location: e.location,
              repeat: e.repeat,
              ctrlKey: e.ctrlKey,
              shiftKey: e.shiftKey,
              altKey: e.altKey,
              metaKey: e.metaKey
            };
          }(t));

        case "contextmenu":
        case "click":
        case "mouseover":
        case "mouseout":
        case "mousemove":
        case "mousedown":
        case "mouseup":
        case "dblclick":
          return new e("mouse", i(t));

        case "error":
          return new e("error", function (e) {
            return {
              type: e.type,
              message: e.message,
              filename: e.filename,
              lineno: e.lineno,
              colno: e.colno
            };
          }(t));

        case "loadstart":
        case "timeout":
        case "abort":
        case "load":
        case "loadend":
        case "progress":
          return new e("progress", function (e) {
            return {
              type: e.type,
              lengthComputable: e.lengthComputable,
              loaded: e.loaded,
              total: e.total
            };
          }(t));

        case "touchcancel":
        case "touchend":
        case "touchmove":
        case "touchenter":
        case "touchleave":
        case "touchstart":
          return new e("touch", function (e) {
            function t(e) {
              for (var t = [], n = 0; n < e.length; n++) {
                var r = e[n];
                t.push({
                  identifier: r.identifier,
                  clientX: r.clientX,
                  clientY: r.clientY,
                  screenX: r.screenX,
                  screenY: r.screenY,
                  pageX: r.pageX,
                  pageY: r.pageY
                });
              }

              return t;
            }

            return {
              type: e.type,
              detail: e.detail,
              touches: t(e.touches),
              targetTouches: t(e.targetTouches),
              changedTouches: t(e.changedTouches),
              ctrlKey: e.ctrlKey,
              shiftKey: e.shiftKey,
              altKey: e.altKey,
              metaKey: e.metaKey
            };
          }(t));

        case "gotpointercapture":
        case "lostpointercapture":
        case "pointercancel":
        case "pointerdown":
        case "pointerenter":
        case "pointerleave":
        case "pointermove":
        case "pointerout":
        case "pointerover":
        case "pointerup":
          return new e("pointer", function (e) {
            return r(r({}, i(e)), {
              pointerId: e.pointerId,
              width: e.width,
              height: e.height,
              pressure: e.pressure,
              tiltX: e.tiltX,
              tiltY: e.tiltY,
              pointerType: e.pointerType,
              isPrimary: e.isPrimary
            });
          }(t));

        case "wheel":
        case "mousewheel":
          return new e("wheel", function (e) {
            return r(r({}, i(e)), {
              deltaX: e.deltaX,
              deltaY: e.deltaY,
              deltaZ: e.deltaZ,
              deltaMode: e.deltaMode
            });
          }(t));

        case "toggle":
          return new e("toggle", {
            type: t.type
          });

        default:
          return new e("unknown", {
            type: t.type
          });
      }
    }, e;
  }();

  function i(e) {
    return {
      type: e.type,
      detail: e.detail,
      screenX: e.screenX,
      screenY: e.screenY,
      clientX: e.clientX,
      clientY: e.clientY,
      offsetX: e.offsetX,
      offsetY: e.offsetY,
      button: e.button,
      buttons: e.buttons,
      ctrlKey: e.ctrlKey,
      shiftKey: e.shiftKey,
      altKey: e.altKey,
      metaKey: e.metaKey
    };
  }

  t.EventForDotNet = o;
  var a = ["date", "datetime-local", "month", "time", "week"];
}, function (e, t, n) {
  "use strict";

  Object.defineProperty(t, "__esModule", {
    value: !0
  });

  var r = function () {
    function e(e, t) {
      this.componentId = e, this.fieldValue = t;
    }

    return e.fromEvent = function (t, n) {
      var r = n.target;

      if (r instanceof Element) {
        var o = function (e) {
          if (e instanceof HTMLInputElement) return e.type && "checkbox" === e.type.toLowerCase() ? {
            value: e.checked
          } : {
            value: e.value
          };
          if (e instanceof HTMLSelectElement || e instanceof HTMLTextAreaElement) return {
            value: e.value
          };
          return null;
        }(r);

        if (o) return new e(t, o.value);
      }

      return null;
    }, e;
  }();

  t.EventFieldInfo = r;
}, function (e, t, n) {
  "use strict";

  Object.defineProperty(t, "__esModule", {
    value: !0
  });
  var r = n(3);

  function o(e) {
    return "_bl_" + e;
  }

  t.applyCaptureIdToElement = function (e, t) {
    e.setAttribute(o(t), "");
  };

  r.DotNet.attachReviver(function (e, t) {
    return t && "object" == _typeof(t) && t.hasOwnProperty("__internalId") && "string" == typeof t.__internalId ? (n = t.__internalId, r = "[" + o(n) + "]", document.querySelector(r)) : t;
    var n, r;
  });
}, function (e, t, n) {
  "use strict";

  Object.defineProperty(t, "__esModule", {
    value: !0
  }), n(3), t.domFunctions = {
    focus: function focus(e) {
      if (!(e instanceof HTMLElement)) throw new Error("Unable to focus an invalid element.");
      e.focus();
    }
  };
}, function (e, t, n) {
  "use strict";

  Object.defineProperty(t, "__esModule", {
    value: !0
  }), t.Virtualize = {
    init: function init(e, t, n, o) {
      void 0 === o && (o = 50);

      var i = function e(t) {
        if (!t) return null;
        if ("visible" !== getComputedStyle(t).overflowY) return t;
        return e(t.parentElement);
      }(t);

      (i || document.documentElement).style.overflowAnchor = "none";
      var a = new IntersectionObserver(function (r) {
        r.forEach(function (r) {
          var o;

          if (r.isIntersecting) {
            var i = t.getBoundingClientRect(),
                a = n.getBoundingClientRect().top - i.bottom,
                s = null === (o = r.rootBounds) || void 0 === o ? void 0 : o.height;
            r.target === t ? e.invokeMethodAsync("OnSpacerBeforeVisible", r.intersectionRect.top - r.boundingClientRect.top, a, s) : r.target === n && n.offsetHeight > 0 && e.invokeMethodAsync("OnSpacerAfterVisible", r.boundingClientRect.bottom - r.intersectionRect.bottom, a, s);
          }
        });
      }, {
        root: i,
        rootMargin: o + "px"
      });
      a.observe(t), a.observe(n);
      var s = u(t),
          c = u(n);

      function u(e) {
        var t = new MutationObserver(function () {
          a.unobserve(e), a.observe(e);
        });
        return t.observe(e, {
          attributes: !0
        }), t;
      }

      r[e._id] = {
        intersectionObserver: a,
        mutationObserverBefore: s,
        mutationObserverAfter: c
      };
    },
    dispose: function dispose(e) {
      var t = r[e._id];
      t && (t.intersectionObserver.disconnect(), t.mutationObserverBefore.disconnect(), t.mutationObserverAfter.disconnect(), e.dispose(), delete r[e._id]);
    }
  };
  var r = {};
}, function (e, t, n) {
  "use strict";

  var r = this && this.__awaiter || function (e, t, n, r) {
    return new (n || (n = Promise))(function (o, i) {
      function a(e) {
        try {
          c(r.next(e));
        } catch (e) {
          i(e);
        }
      }

      function s(e) {
        try {
          c(r.throw(e));
        } catch (e) {
          i(e);
        }
      }

      function c(e) {
        var t;
        e.done ? o(e.value) : (t = e.value, t instanceof n ? t : new n(function (e) {
          e(t);
        })).then(a, s);
      }

      c((r = r.apply(e, t || [])).next());
    });
  },
      o = this && this.__generator || function (e, t) {
    var n,
        r,
        o,
        i,
        a = {
      label: 0,
      sent: function sent() {
        if (1 & o[0]) throw o[1];
        return o[1];
      },
      trys: [],
      ops: []
    };
    return i = {
      next: s(0),
      throw: s(1),
      return: s(2)
    }, "function" == typeof Symbol && (i[Symbol.iterator] = function () {
      return this;
    }), i;

    function s(i) {
      return function (s) {
        return function (i) {
          if (n) throw new TypeError("Generator is already executing.");

          for (; a;) {
            try {
              if (n = 1, r && (o = 2 & i[0] ? r.return : i[0] ? r.throw || ((o = r.return) && o.call(r), 0) : r.next) && !(o = o.call(r, i[1])).done) return o;

              switch (r = 0, o && (i = [2 & i[0], o.value]), i[0]) {
                case 0:
                case 1:
                  o = i;
                  break;

                case 4:
                  return a.label++, {
                    value: i[1],
                    done: !1
                  };

                case 5:
                  a.label++, r = i[1], i = [0];
                  continue;

                case 7:
                  i = a.ops.pop(), a.trys.pop();
                  continue;

                default:
                  if (!(o = a.trys, (o = o.length > 0 && o[o.length - 1]) || 6 !== i[0] && 2 !== i[0])) {
                    a = 0;
                    continue;
                  }

                  if (3 === i[0] && (!o || i[1] > o[0] && i[1] < o[3])) {
                    a.label = i[1];
                    break;
                  }

                  if (6 === i[0] && a.label < o[1]) {
                    a.label = o[1], o = i;
                    break;
                  }

                  if (o && a.label < o[2]) {
                    a.label = o[2], a.ops.push(i);
                    break;
                  }

                  o[2] && a.ops.pop(), a.trys.pop();
                  continue;
              }

              i = t.call(e, a);
            } catch (e) {
              i = [6, e], r = 0;
            } finally {
              n = o = 0;
            }
          }

          if (5 & i[0]) throw i[1];
          return {
            value: i[0] ? i[1] : void 0,
            done: !0
          };
        }([i, s]);
      };
    }
  };

  Object.defineProperty(t, "__esModule", {
    value: !0
  });
  var i = n(20);

  function a(e, t) {
    var n = e._blazorFilesById[t];
    if (!n) throw new Error("There is no file with ID " + t + ". The file list may have changed.");
    return n;
  }

  function s(e, t) {
    var n = a(e, t);
    return n.readPromise || (n.readPromise = new Promise(function (e, t) {
      var r = new FileReader();
      r.onload = function () {
        e(r.result);
      }, r.onerror = function (e) {
        t(e);
      }, r.readAsArrayBuffer(n.blob);
    })), n.readPromise;
  }

  t.InputFile = {
    init: function init(e, t) {
      t._blazorInputFileNextFileId = 0, t.addEventListener("click", function () {
        t.value = "";
      }), t.addEventListener("change", function () {
        t._blazorFilesById = {};
        var n = Array.prototype.map.call(t.files, function (e) {
          var n = {
            id: ++t._blazorInputFileNextFileId,
            lastModified: new Date(e.lastModified).toISOString(),
            name: e.name,
            size: e.size,
            contentType: e.type,
            readPromise: void 0,
            arrayBuffer: void 0
          };
          return t._blazorFilesById[n.id] = n, Object.defineProperty(n, "blob", {
            value: e
          }), n;
        });
        e.invokeMethodAsync("NotifyChange", n);
      });
    },
    toImageFile: function toImageFile(e, t, n, i, s) {
      return r(this, void 0, void 0, function () {
        var r, c, u, l;
        return o(this, function (o) {
          switch (o.label) {
            case 0:
              return r = a(e, t), [4, new Promise(function (e) {
                var t = new Image();
                t.onload = function () {
                  e(t);
                }, t.src = URL.createObjectURL(r.blob);
              })];

            case 1:
              return c = o.sent(), [4, new Promise(function (e) {
                var t,
                    r = Math.min(1, i / c.width),
                    o = Math.min(1, s / c.height),
                    a = Math.min(r, o),
                    u = document.createElement("canvas");
                u.width = Math.round(c.width * a), u.height = Math.round(c.height * a), null === (t = u.getContext("2d")) || void 0 === t || t.drawImage(c, 0, 0, u.width, u.height), u.toBlob(e, n);
              })];

            case 2:
              return u = o.sent(), l = {
                id: ++e._blazorInputFileNextFileId,
                lastModified: r.lastModified,
                name: r.name,
                size: (null == u ? void 0 : u.size) || 0,
                contentType: n,
                readPromise: void 0,
                arrayBuffer: void 0
              }, e._blazorFilesById[l.id] = l, Object.defineProperty(l, "blob", {
                value: u
              }), [2, l];
          }
        });
      });
    },
    ensureArrayBufferReadyForSharedMemoryInterop: function ensureArrayBufferReadyForSharedMemoryInterop(e, t) {
      return r(this, void 0, void 0, function () {
        var n;
        return o(this, function (r) {
          switch (r.label) {
            case 0:
              return [4, s(e, t)];

            case 1:
              return n = r.sent(), a(e, t).arrayBuffer = n, [2];
          }
        });
      });
    },
    readFileData: function readFileData(e, t, n, i) {
      return r(this, void 0, void 0, function () {
        var r;
        return o(this, function (o) {
          switch (o.label) {
            case 0:
              return [4, s(e, t)];

            case 1:
              return r = o.sent(), [2, btoa(String.fromCharCode.apply(null, new Uint8Array(r, n, i)))];
          }
        });
      });
    },
    readFileDataSharedMemory: function readFileDataSharedMemory(e) {
      var t = i.monoPlatform.readStringField(e, 0),
          n = document.querySelector("[_bl_" + t + "]"),
          r = i.monoPlatform.readInt32Field(e, 8),
          o = i.monoPlatform.readUint64Field(e, 12),
          s = i.monoPlatform.readInt32Field(e, 24),
          c = i.monoPlatform.readInt32Field(e, 32),
          u = i.monoPlatform.readInt32Field(e, 36),
          l = a(n, r).arrayBuffer,
          f = Math.min(u, l.byteLength - o),
          h = new Uint8Array(l, o, f);
      return i.monoPlatform.toUint8Array(s).set(h, c), f;
    }
  };
}, function (e, t, n) {
  "use strict";

  Object.defineProperty(t, "__esModule", {
    value: !0
  });
  var r = window.chrome && navigator.userAgent.indexOf("Edge") < 0,
      o = !1;

  function i() {
    return o && r;
  }

  t.hasDebuggingEnabled = i, t.attachDebuggerHotkey = function (e) {
    o = !!e.bootConfig.resources.pdb;
    var t = navigator.platform.match(/^Mac/i) ? "Cmd" : "Alt";
    i() && console.info("Debugging hotkey: Shift+" + t + "+D (when application has focus)"), document.addEventListener("keydown", function (e) {
      var t;
      e.shiftKey && (e.metaKey || e.altKey) && "KeyD" === e.code && (o ? r ? ((t = document.createElement("a")).href = "_framework/debug?url=" + encodeURIComponent(location.href), t.target = "_blank", t.rel = "noopener noreferrer", t.click()) : console.error("Currently, only Microsoft Edge (80+), or Google Chrome, are supported for debugging.") : console.error("Cannot start debugging, because the application was not compiled with debugging enabled."));
    });
  };
}, function (e, t, n) {
  "use strict";

  Object.defineProperty(t, "__esModule", {
    value: !0
  }), t.shouldAutoStart = function () {
    return !(!document || !document.currentScript || "false" === document.currentScript.getAttribute("autostart"));
  };
}, function (e, t, n) {
  "use strict";

  function r(e, t) {
    if (!e.hasChildNodes()) return [];

    for (var n = [], o = new c(e.childNodes); o.next() && o.currentElement;) {
      var a = i(o, t);
      if (a) n.push(a);else for (var s = r(o.currentElement, t), u = 0; u < s.length; u++) {
        var l = s[u];
        n.push(l);
      }
    }

    return n;
  }

  Object.defineProperty(t, "__esModule", {
    value: !0
  }), t.discoverComponents = function (e, t) {
    switch (t) {
      case "webassembly":
        return function (e) {
          for (var t = r(e, "webassembly"), n = [], o = 0; o < t.length; o++) {
            var i = t[o],
                a = new l(i.type, i.start, i.end, i.assembly, i.typeName, i.parameterDefinitions, i.parameterValues);
            n.push(a);
          }

          return n.sort(function (e, t) {
            return e.id - t.id;
          });
        }(e);

      case "server":
        return function (e) {
          for (var t = r(e, "server"), n = [], o = 0; o < t.length; o++) {
            var i = t[o],
                a = new u(i.type, i.start, i.end, i.sequence, i.descriptor);
            n.push(a);
          }

          return n.sort(function (e, t) {
            return e.sequence - t.sequence;
          });
        }(e);
    }
  };

  var o = /*#__PURE__*/_wrapRegExp(/[\0-\/:-@\[-\^`\{-\uFFFF]*Blazor:(?:(?!\{)[\s\S])*(.*)$/, {
    descriptor: 1
  });

  function i(e, t) {
    var n = e.currentElement;

    if (n && n.nodeType === Node.COMMENT_NODE && n.textContent) {
      var r = new RegExp(o).exec(n.textContent),
          i = r && r[1];
      if (!i) return;

      try {
        var s = function (e) {
          var t = JSON.parse(e),
              n = t.type;
          if ("server" !== n && "webassembly" !== n) throw new Error("Invalid component type '" + n + "'.");
          return t;
        }(i);

        switch (t) {
          case "webassembly":
            return function (e, t, n) {
              var r = e.type,
                  o = e.assembly,
                  i = e.typeName,
                  s = e.parameterDefinitions,
                  c = e.parameterValues,
                  u = e.prerenderId;
              if ("webassembly" !== r) return;
              if (!o) throw new Error("assembly must be defined when using a descriptor.");
              if (!i) throw new Error("typeName must be defined when using a descriptor.");

              if (u) {
                var l = a(u, n);
                if (!l) throw new Error("Could not find an end component comment for '" + t + "'");
                return {
                  type: r,
                  assembly: o,
                  typeName: i,
                  parameterDefinitions: s && atob(s),
                  parameterValues: c && atob(c),
                  start: t,
                  prerenderId: u,
                  end: l
                };
              }

              return {
                type: r,
                assembly: o,
                typeName: i,
                parameterDefinitions: s && atob(s),
                parameterValues: c && atob(c),
                start: t
              };
            }(s, n, e);

          case "server":
            return function (e, t, n) {
              var r = e.type,
                  o = e.descriptor,
                  i = e.sequence,
                  s = e.prerenderId;
              if ("server" !== r) return;
              if (!o) throw new Error("descriptor must be defined when using a descriptor.");
              if (void 0 === i) throw new Error("sequence must be defined when using a descriptor.");
              if (!Number.isInteger(i)) throw new Error("Error parsing the sequence '" + i + "' for component '" + JSON.stringify(e) + "'");

              if (s) {
                var c = a(s, n);
                if (!c) throw new Error("Could not find an end component comment for '" + t + "'");
                return {
                  type: r,
                  sequence: i,
                  descriptor: o,
                  start: t,
                  prerenderId: s,
                  end: c
                };
              }

              return {
                type: r,
                sequence: i,
                descriptor: o,
                start: t
              };
            }(s, n, e);
        }
      } catch (e) {
        throw new Error("Found malformed component comment at " + n.textContent);
      }
    }
  }

  function a(e, t) {
    for (; t.next() && t.currentElement;) {
      var n = t.currentElement;

      if (n.nodeType === Node.COMMENT_NODE && n.textContent) {
        var r = new RegExp(o).exec(n.textContent),
            i = r && r[1];
        if (i) return s(i, e), n;
      }
    }
  }

  function s(e, t) {
    var n = JSON.parse(e);
    if (1 !== Object.keys(n).length) throw new Error("Invalid end of component comment: '" + e + "'");
    var r = n.prerenderId;
    if (!r) throw new Error("End of component comment must have a value for the prerendered property: '" + e + "'");
    if (r !== t) throw new Error("End of component comment prerendered property must match the start comment prerender id: '" + t + "', '" + r + "'");
  }

  var c = function () {
    function e(e) {
      this.childNodes = e, this.currentIndex = -1, this.length = e.length;
    }

    return e.prototype.next = function () {
      return this.currentIndex++, this.currentIndex < this.length ? (this.currentElement = this.childNodes[this.currentIndex], !0) : (this.currentElement = void 0, !1);
    }, e;
  }(),
      u = function () {
    function e(e, t, n, r, o) {
      this.type = e, this.start = t, this.end = n, this.sequence = r, this.descriptor = o;
    }

    return e.prototype.toRecord = function () {
      return {
        type: this.type,
        sequence: this.sequence,
        descriptor: this.descriptor
      };
    }, e;
  }();

  t.ServerComponentDescriptor = u;

  var l = function () {
    function e(t, n, r, o, i, a, s) {
      this.id = e.globalId++, this.type = t, this.assembly = o, this.typeName = i, this.parameterDefinitions = a, this.parameterValues = s, this.start = n, this.end = r;
    }

    return e.globalId = 1, e;
  }();

  t.WebAssemblyComponentDescriptor = l;
}, function (e, t, n) {
  (function (e) {
    var r = Object.getOwnPropertyDescriptors || function (e) {
      for (var t = Object.keys(e), n = {}, r = 0; r < t.length; r++) {
        n[t[r]] = Object.getOwnPropertyDescriptor(e, t[r]);
      }

      return n;
    },
        o = /%[sdj%]/g;

    t.format = function (e) {
      if (!v(e)) {
        for (var t = [], n = 0; n < arguments.length; n++) {
          t.push(s(arguments[n]));
        }

        return t.join(" ");
      }

      n = 1;

      for (var r = arguments, i = r.length, a = String(e).replace(o, function (e) {
        if ("%%" === e) return "%";
        if (n >= i) return e;

        switch (e) {
          case "%s":
            return String(r[n++]);

          case "%d":
            return Number(r[n++]);

          case "%j":
            try {
              return JSON.stringify(r[n++]);
            } catch (e) {
              return "[Circular]";
            }

          default:
            return e;
        }
      }), c = r[n]; n < i; c = r[++n]) {
        g(c) || !w(c) ? a += " " + c : a += " " + s(c);
      }

      return a;
    }, t.deprecate = function (n, r) {
      if (void 0 !== e && !0 === e.noDeprecation) return n;
      if (void 0 === e) return function () {
        return t.deprecate(n, r).apply(this, arguments);
      };
      var o = !1;
      return function () {
        if (!o) {
          if (e.throwDeprecation) throw new Error(r);
          e.traceDeprecation ? console.trace(r) : console.error(r), o = !0;
        }

        return n.apply(this, arguments);
      };
    };
    var i,
        a = {};

    function s(e, n) {
      var r = {
        seen: [],
        stylize: u
      };
      return arguments.length >= 3 && (r.depth = arguments[2]), arguments.length >= 4 && (r.colors = arguments[3]), d(n) ? r.showHidden = n : n && t._extend(r, n), b(r.showHidden) && (r.showHidden = !1), b(r.depth) && (r.depth = 2), b(r.colors) && (r.colors = !1), b(r.customInspect) && (r.customInspect = !0), r.colors && (r.stylize = c), l(r, e, r.depth);
    }

    function c(e, t) {
      var n = s.styles[t];
      return n ? "[" + s.colors[n][0] + "m" + e + "[" + s.colors[n][1] + "m" : e;
    }

    function u(e, t) {
      return e;
    }

    function l(e, n, r) {
      if (e.customInspect && n && _(n.inspect) && n.inspect !== t.inspect && (!n.constructor || n.constructor.prototype !== n)) {
        var o = n.inspect(r, e);
        return v(o) || (o = l(e, o, r)), o;
      }

      var i = function (e, t) {
        if (b(t)) return e.stylize("undefined", "undefined");

        if (v(t)) {
          var n = "'" + JSON.stringify(t).replace(/^"|"$/g, "").replace(/'/g, "\\'").replace(/\\"/g, '"') + "'";
          return e.stylize(n, "string");
        }

        if (y(t)) return e.stylize("" + t, "number");
        if (d(t)) return e.stylize("" + t, "boolean");
        if (g(t)) return e.stylize("null", "null");
      }(e, n);

      if (i) return i;

      var a = Object.keys(n),
          s = function (e) {
        var t = {};
        return e.forEach(function (e, n) {
          t[e] = !0;
        }), t;
      }(a);

      if (e.showHidden && (a = Object.getOwnPropertyNames(n)), S(n) && (a.indexOf("message") >= 0 || a.indexOf("description") >= 0)) return f(n);

      if (0 === a.length) {
        if (_(n)) {
          var c = n.name ? ": " + n.name : "";
          return e.stylize("[Function" + c + "]", "special");
        }

        if (m(n)) return e.stylize(RegExp.prototype.toString.call(n), "regexp");
        if (E(n)) return e.stylize(Date.prototype.toString.call(n), "date");
        if (S(n)) return f(n);
      }

      var u,
          w = "",
          I = !1,
          C = ["{", "}"];
      (p(n) && (I = !0, C = ["[", "]"]), _(n)) && (w = " [Function" + (n.name ? ": " + n.name : "") + "]");
      return m(n) && (w = " " + RegExp.prototype.toString.call(n)), E(n) && (w = " " + Date.prototype.toUTCString.call(n)), S(n) && (w = " " + f(n)), 0 !== a.length || I && 0 != n.length ? r < 0 ? m(n) ? e.stylize(RegExp.prototype.toString.call(n), "regexp") : e.stylize("[Object]", "special") : (e.seen.push(n), u = I ? function (e, t, n, r, o) {
        for (var i = [], a = 0, s = t.length; a < s; ++a) {
          O(t, String(a)) ? i.push(h(e, t, n, r, String(a), !0)) : i.push("");
        }

        return o.forEach(function (o) {
          o.match(/^\d+$/) || i.push(h(e, t, n, r, o, !0));
        }), i;
      }(e, n, r, s, a) : a.map(function (t) {
        return h(e, n, r, s, t, I);
      }), e.seen.pop(), function (e, t, n) {
        if (e.reduce(function (e, t) {
          return t.indexOf("\n") >= 0 && 0, e + t.replace(/\u001b\[\d\d?m/g, "").length + 1;
        }, 0) > 60) return n[0] + ("" === t ? "" : t + "\n ") + " " + e.join(",\n  ") + " " + n[1];
        return n[0] + t + " " + e.join(", ") + " " + n[1];
      }(u, w, C)) : C[0] + w + C[1];
    }

    function f(e) {
      return "[" + Error.prototype.toString.call(e) + "]";
    }

    function h(e, t, n, r, o, i) {
      var a, s, c;

      if ((c = Object.getOwnPropertyDescriptor(t, o) || {
        value: t[o]
      }).get ? s = c.set ? e.stylize("[Getter/Setter]", "special") : e.stylize("[Getter]", "special") : c.set && (s = e.stylize("[Setter]", "special")), O(r, o) || (a = "[" + o + "]"), s || (e.seen.indexOf(c.value) < 0 ? (s = g(n) ? l(e, c.value, null) : l(e, c.value, n - 1)).indexOf("\n") > -1 && (s = i ? s.split("\n").map(function (e) {
        return "  " + e;
      }).join("\n").substr(2) : "\n" + s.split("\n").map(function (e) {
        return "   " + e;
      }).join("\n")) : s = e.stylize("[Circular]", "special")), b(a)) {
        if (i && o.match(/^\d+$/)) return s;
        (a = JSON.stringify("" + o)).match(/^"([a-zA-Z_][a-zA-Z_0-9]*)"$/) ? (a = a.substr(1, a.length - 2), a = e.stylize(a, "name")) : (a = a.replace(/'/g, "\\'").replace(/\\"/g, '"').replace(/(^"|"$)/g, "'"), a = e.stylize(a, "string"));
      }

      return a + ": " + s;
    }

    function p(e) {
      return Array.isArray(e);
    }

    function d(e) {
      return "boolean" == typeof e;
    }

    function g(e) {
      return null === e;
    }

    function y(e) {
      return "number" == typeof e;
    }

    function v(e) {
      return "string" == typeof e;
    }

    function b(e) {
      return void 0 === e;
    }

    function m(e) {
      return w(e) && "[object RegExp]" === I(e);
    }

    function w(e) {
      return "object" == _typeof(e) && null !== e;
    }

    function E(e) {
      return w(e) && "[object Date]" === I(e);
    }

    function S(e) {
      return w(e) && ("[object Error]" === I(e) || e instanceof Error);
    }

    function _(e) {
      return "function" == typeof e;
    }

    function I(e) {
      return Object.prototype.toString.call(e);
    }

    function C(e) {
      return e < 10 ? "0" + e.toString(10) : e.toString(10);
    }

    t.debuglog = function (n) {
      if (b(i) && (i = e.env.NODE_DEBUG || ""), n = n.toUpperCase(), !a[n]) if (new RegExp("\\b" + n + "\\b", "i").test(i)) {
        var r = e.pid;

        a[n] = function () {
          var e = t.format.apply(t, arguments);
          console.error("%s %d: %s", n, r, e);
        };
      } else a[n] = function () {};
      return a[n];
    }, t.inspect = s, s.colors = {
      bold: [1, 22],
      italic: [3, 23],
      underline: [4, 24],
      inverse: [7, 27],
      white: [37, 39],
      grey: [90, 39],
      black: [30, 39],
      blue: [34, 39],
      cyan: [36, 39],
      green: [32, 39],
      magenta: [35, 39],
      red: [31, 39],
      yellow: [33, 39]
    }, s.styles = {
      special: "cyan",
      number: "yellow",
      boolean: "yellow",
      undefined: "grey",
      null: "bold",
      string: "green",
      date: "magenta",
      regexp: "red"
    }, t.isArray = p, t.isBoolean = d, t.isNull = g, t.isNullOrUndefined = function (e) {
      return null == e;
    }, t.isNumber = y, t.isString = v, t.isSymbol = function (e) {
      return "symbol" == _typeof(e);
    }, t.isUndefined = b, t.isRegExp = m, t.isObject = w, t.isDate = E, t.isError = S, t.isFunction = _, t.isPrimitive = function (e) {
      return null === e || "boolean" == typeof e || "number" == typeof e || "string" == typeof e || "symbol" == _typeof(e) || void 0 === e;
    }, t.isBuffer = n(59);
    var k = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

    function T() {
      var e = new Date(),
          t = [C(e.getHours()), C(e.getMinutes()), C(e.getSeconds())].join(":");
      return [e.getDate(), k[e.getMonth()], t].join(" ");
    }

    function O(e, t) {
      return Object.prototype.hasOwnProperty.call(e, t);
    }

    t.log = function () {
      console.log("%s - %s", T(), t.format.apply(t, arguments));
    }, t.inherits = n(60), t._extend = function (e, t) {
      if (!t || !w(t)) return e;

      for (var n = Object.keys(t), r = n.length; r--;) {
        e[n[r]] = t[n[r]];
      }

      return e;
    };
    var P = "undefined" != typeof Symbol ? Symbol("util.promisify.custom") : void 0;

    function R(e, t) {
      if (!e) {
        var n = new Error("Promise was rejected with a falsy value");
        n.reason = e, e = n;
      }

      return t(e);
    }

    t.promisify = function (e) {
      if ("function" != typeof e) throw new TypeError('The "original" argument must be of type Function');

      if (P && e[P]) {
        var t;
        if ("function" != typeof (t = e[P])) throw new TypeError('The "util.promisify.custom" argument must be of type Function');
        return Object.defineProperty(t, P, {
          value: t,
          enumerable: !1,
          writable: !1,
          configurable: !0
        }), t;
      }

      function t() {
        for (var t, n, r = new Promise(function (e, r) {
          t = e, n = r;
        }), o = [], i = 0; i < arguments.length; i++) {
          o.push(arguments[i]);
        }

        o.push(function (e, r) {
          e ? n(e) : t(r);
        });

        try {
          e.apply(this, o);
        } catch (e) {
          n(e);
        }

        return r;
      }

      return Object.setPrototypeOf(t, Object.getPrototypeOf(e)), P && Object.defineProperty(t, P, {
        value: t,
        enumerable: !1,
        writable: !1,
        configurable: !0
      }), Object.defineProperties(t, r(e));
    }, t.promisify.custom = P, t.callbackify = function (t) {
      if ("function" != typeof t) throw new TypeError('The "original" argument must be of type Function');

      function n() {
        for (var n = [], r = 0; r < arguments.length; r++) {
          n.push(arguments[r]);
        }

        var o = n.pop();
        if ("function" != typeof o) throw new TypeError("The last argument must be of type Function");

        var i = this,
            a = function a() {
          return o.apply(i, arguments);
        };

        t.apply(this, n).then(function (t) {
          e.nextTick(a, null, t);
        }, function (t) {
          e.nextTick(R, t, a);
        });
      }

      return Object.setPrototypeOf(n, Object.getPrototypeOf(t)), Object.defineProperties(n, r(t)), n;
    };
  }).call(this, n(13));
}, function (e, t, n) {
  "use strict";

  (function (t, r) {
    var o = n(24);
    e.exports = m;
    var i,
        a = n(62);
    m.ReadableState = b;
    n(41).EventEmitter;

    var s = function s(e, t) {
      return e.listeners(t).length;
    },
        c = n(42),
        u = n(14).Buffer,
        l = t.Uint8Array || function () {};

    var f = n(19);
    f.inherits = n(15);
    var h = n(63),
        p = void 0;
    p = h && h.debuglog ? h.debuglog("stream") : function () {};
    var d,
        g = n(64),
        y = n(43);
    f.inherits(m, c);
    var v = ["error", "close", "destroy", "pause", "resume"];

    function b(e, t) {
      e = e || {};
      var r = t instanceof (i = i || n(9));
      this.objectMode = !!e.objectMode, r && (this.objectMode = this.objectMode || !!e.readableObjectMode);
      var o = e.highWaterMark,
          a = e.readableHighWaterMark,
          s = this.objectMode ? 16 : 16384;
      this.highWaterMark = o || 0 === o ? o : r && (a || 0 === a) ? a : s, this.highWaterMark = Math.floor(this.highWaterMark), this.buffer = new g(), this.length = 0, this.pipes = null, this.pipesCount = 0, this.flowing = null, this.ended = !1, this.endEmitted = !1, this.reading = !1, this.sync = !0, this.needReadable = !1, this.emittedReadable = !1, this.readableListening = !1, this.resumeScheduled = !1, this.destroyed = !1, this.defaultEncoding = e.defaultEncoding || "utf8", this.awaitDrain = 0, this.readingMore = !1, this.decoder = null, this.encoding = null, e.encoding && (d || (d = n(44).StringDecoder), this.decoder = new d(e.encoding), this.encoding = e.encoding);
    }

    function m(e) {
      if (i = i || n(9), !(this instanceof m)) return new m(e);
      this._readableState = new b(e, this), this.readable = !0, e && ("function" == typeof e.read && (this._read = e.read), "function" == typeof e.destroy && (this._destroy = e.destroy)), c.call(this);
    }

    function w(e, t, n, r, o) {
      var i,
          a = e._readableState;
      null === t ? (a.reading = !1, function (e, t) {
        if (t.ended) return;

        if (t.decoder) {
          var n = t.decoder.end();
          n && n.length && (t.buffer.push(n), t.length += t.objectMode ? 1 : n.length);
        }

        t.ended = !0, _(e);
      }(e, a)) : (o || (i = function (e, t) {
        var n;
        r = t, u.isBuffer(r) || r instanceof l || "string" == typeof t || void 0 === t || e.objectMode || (n = new TypeError("Invalid non-string/buffer chunk"));
        var r;
        return n;
      }(a, t)), i ? e.emit("error", i) : a.objectMode || t && t.length > 0 ? ("string" == typeof t || a.objectMode || Object.getPrototypeOf(t) === u.prototype || (t = function (e) {
        return u.from(e);
      }(t)), r ? a.endEmitted ? e.emit("error", new Error("stream.unshift() after end event")) : E(e, a, t, !0) : a.ended ? e.emit("error", new Error("stream.push() after EOF")) : (a.reading = !1, a.decoder && !n ? (t = a.decoder.write(t), a.objectMode || 0 !== t.length ? E(e, a, t, !1) : C(e, a)) : E(e, a, t, !1))) : r || (a.reading = !1));
      return function (e) {
        return !e.ended && (e.needReadable || e.length < e.highWaterMark || 0 === e.length);
      }(a);
    }

    function E(e, t, n, r) {
      t.flowing && 0 === t.length && !t.sync ? (e.emit("data", n), e.read(0)) : (t.length += t.objectMode ? 1 : n.length, r ? t.buffer.unshift(n) : t.buffer.push(n), t.needReadable && _(e)), C(e, t);
    }

    Object.defineProperty(m.prototype, "destroyed", {
      get: function get() {
        return void 0 !== this._readableState && this._readableState.destroyed;
      },
      set: function set(e) {
        this._readableState && (this._readableState.destroyed = e);
      }
    }), m.prototype.destroy = y.destroy, m.prototype._undestroy = y.undestroy, m.prototype._destroy = function (e, t) {
      this.push(null), t(e);
    }, m.prototype.push = function (e, t) {
      var n,
          r = this._readableState;
      return r.objectMode ? n = !0 : "string" == typeof e && ((t = t || r.defaultEncoding) !== r.encoding && (e = u.from(e, t), t = ""), n = !0), w(this, e, t, !1, n);
    }, m.prototype.unshift = function (e) {
      return w(this, e, null, !0, !1);
    }, m.prototype.isPaused = function () {
      return !1 === this._readableState.flowing;
    }, m.prototype.setEncoding = function (e) {
      return d || (d = n(44).StringDecoder), this._readableState.decoder = new d(e), this._readableState.encoding = e, this;
    };

    function S(e, t) {
      return e <= 0 || 0 === t.length && t.ended ? 0 : t.objectMode ? 1 : e != e ? t.flowing && t.length ? t.buffer.head.data.length : t.length : (e > t.highWaterMark && (t.highWaterMark = function (e) {
        return e >= 8388608 ? e = 8388608 : (e--, e |= e >>> 1, e |= e >>> 2, e |= e >>> 4, e |= e >>> 8, e |= e >>> 16, e++), e;
      }(e)), e <= t.length ? e : t.ended ? t.length : (t.needReadable = !0, 0));
    }

    function _(e) {
      var t = e._readableState;
      t.needReadable = !1, t.emittedReadable || (p("emitReadable", t.flowing), t.emittedReadable = !0, t.sync ? o.nextTick(I, e) : I(e));
    }

    function I(e) {
      p("emit readable"), e.emit("readable"), P(e);
    }

    function C(e, t) {
      t.readingMore || (t.readingMore = !0, o.nextTick(k, e, t));
    }

    function k(e, t) {
      for (var n = t.length; !t.reading && !t.flowing && !t.ended && t.length < t.highWaterMark && (p("maybeReadMore read 0"), e.read(0), n !== t.length);) {
        n = t.length;
      }

      t.readingMore = !1;
    }

    function T(e) {
      p("readable nexttick read 0"), e.read(0);
    }

    function O(e, t) {
      t.reading || (p("resume read 0"), e.read(0)), t.resumeScheduled = !1, t.awaitDrain = 0, e.emit("resume"), P(e), t.flowing && !t.reading && e.read(0);
    }

    function P(e) {
      var t = e._readableState;

      for (p("flow", t.flowing); t.flowing && null !== e.read();) {
        ;
      }
    }

    function R(e, t) {
      return 0 === t.length ? null : (t.objectMode ? n = t.buffer.shift() : !e || e >= t.length ? (n = t.decoder ? t.buffer.join("") : 1 === t.buffer.length ? t.buffer.head.data : t.buffer.concat(t.length), t.buffer.clear()) : n = function (e, t, n) {
        var r;
        e < t.head.data.length ? (r = t.head.data.slice(0, e), t.head.data = t.head.data.slice(e)) : r = e === t.head.data.length ? t.shift() : n ? function (e, t) {
          var n = t.head,
              r = 1,
              o = n.data;
          e -= o.length;

          for (; n = n.next;) {
            var i = n.data,
                a = e > i.length ? i.length : e;

            if (a === i.length ? o += i : o += i.slice(0, e), 0 === (e -= a)) {
              a === i.length ? (++r, n.next ? t.head = n.next : t.head = t.tail = null) : (t.head = n, n.data = i.slice(a));
              break;
            }

            ++r;
          }

          return t.length -= r, o;
        }(e, t) : function (e, t) {
          var n = u.allocUnsafe(e),
              r = t.head,
              o = 1;
          r.data.copy(n), e -= r.data.length;

          for (; r = r.next;) {
            var i = r.data,
                a = e > i.length ? i.length : e;

            if (i.copy(n, n.length - e, 0, a), 0 === (e -= a)) {
              a === i.length ? (++o, r.next ? t.head = r.next : t.head = t.tail = null) : (t.head = r, r.data = i.slice(a));
              break;
            }

            ++o;
          }

          return t.length -= o, n;
        }(e, t);
        return r;
      }(e, t.buffer, t.decoder), n);
      var n;
    }

    function x(e) {
      var t = e._readableState;
      if (t.length > 0) throw new Error('"endReadable()" called on non-empty stream');
      t.endEmitted || (t.ended = !0, o.nextTick(D, t, e));
    }

    function D(e, t) {
      e.endEmitted || 0 !== e.length || (e.endEmitted = !0, t.readable = !1, t.emit("end"));
    }

    function A(e, t) {
      for (var n = 0, r = e.length; n < r; n++) {
        if (e[n] === t) return n;
      }

      return -1;
    }

    m.prototype.read = function (e) {
      p("read", e), e = parseInt(e, 10);
      var t = this._readableState,
          n = e;
      if (0 !== e && (t.emittedReadable = !1), 0 === e && t.needReadable && (t.length >= t.highWaterMark || t.ended)) return p("read: emitReadable", t.length, t.ended), 0 === t.length && t.ended ? x(this) : _(this), null;
      if (0 === (e = S(e, t)) && t.ended) return 0 === t.length && x(this), null;
      var r,
          o = t.needReadable;
      return p("need readable", o), (0 === t.length || t.length - e < t.highWaterMark) && p("length less than watermark", o = !0), t.ended || t.reading ? p("reading or ended", o = !1) : o && (p("do read"), t.reading = !0, t.sync = !0, 0 === t.length && (t.needReadable = !0), this._read(t.highWaterMark), t.sync = !1, t.reading || (e = S(n, t))), null === (r = e > 0 ? R(e, t) : null) ? (t.needReadable = !0, e = 0) : t.length -= e, 0 === t.length && (t.ended || (t.needReadable = !0), n !== e && t.ended && x(this)), null !== r && this.emit("data", r), r;
    }, m.prototype._read = function (e) {
      this.emit("error", new Error("_read() is not implemented"));
    }, m.prototype.pipe = function (e, t) {
      var n = this,
          i = this._readableState;

      switch (i.pipesCount) {
        case 0:
          i.pipes = e;
          break;

        case 1:
          i.pipes = [i.pipes, e];
          break;

        default:
          i.pipes.push(e);
      }

      i.pipesCount += 1, p("pipe count=%d opts=%j", i.pipesCount, t);
      var c = (!t || !1 !== t.end) && e !== r.stdout && e !== r.stderr ? l : m;

      function u(t, r) {
        p("onunpipe"), t === n && r && !1 === r.hasUnpiped && (r.hasUnpiped = !0, p("cleanup"), e.removeListener("close", v), e.removeListener("finish", b), e.removeListener("drain", f), e.removeListener("error", y), e.removeListener("unpipe", u), n.removeListener("end", l), n.removeListener("end", m), n.removeListener("data", g), h = !0, !i.awaitDrain || e._writableState && !e._writableState.needDrain || f());
      }

      function l() {
        p("onend"), e.end();
      }

      i.endEmitted ? o.nextTick(c) : n.once("end", c), e.on("unpipe", u);

      var f = function (e) {
        return function () {
          var t = e._readableState;
          p("pipeOnDrain", t.awaitDrain), t.awaitDrain && t.awaitDrain--, 0 === t.awaitDrain && s(e, "data") && (t.flowing = !0, P(e));
        };
      }(n);

      e.on("drain", f);
      var h = !1;
      var d = !1;

      function g(t) {
        p("ondata"), d = !1, !1 !== e.write(t) || d || ((1 === i.pipesCount && i.pipes === e || i.pipesCount > 1 && -1 !== A(i.pipes, e)) && !h && (p("false write response, pause", n._readableState.awaitDrain), n._readableState.awaitDrain++, d = !0), n.pause());
      }

      function y(t) {
        p("onerror", t), m(), e.removeListener("error", y), 0 === s(e, "error") && e.emit("error", t);
      }

      function v() {
        e.removeListener("finish", b), m();
      }

      function b() {
        p("onfinish"), e.removeListener("close", v), m();
      }

      function m() {
        p("unpipe"), n.unpipe(e);
      }

      return n.on("data", g), function (e, t, n) {
        if ("function" == typeof e.prependListener) return e.prependListener(t, n);
        e._events && e._events[t] ? a(e._events[t]) ? e._events[t].unshift(n) : e._events[t] = [n, e._events[t]] : e.on(t, n);
      }(e, "error", y), e.once("close", v), e.once("finish", b), e.emit("pipe", n), i.flowing || (p("pipe resume"), n.resume()), e;
    }, m.prototype.unpipe = function (e) {
      var t = this._readableState,
          n = {
        hasUnpiped: !1
      };
      if (0 === t.pipesCount) return this;
      if (1 === t.pipesCount) return e && e !== t.pipes || (e || (e = t.pipes), t.pipes = null, t.pipesCount = 0, t.flowing = !1, e && e.emit("unpipe", this, n)), this;

      if (!e) {
        var r = t.pipes,
            o = t.pipesCount;
        t.pipes = null, t.pipesCount = 0, t.flowing = !1;

        for (var i = 0; i < o; i++) {
          r[i].emit("unpipe", this, n);
        }

        return this;
      }

      var a = A(t.pipes, e);
      return -1 === a || (t.pipes.splice(a, 1), t.pipesCount -= 1, 1 === t.pipesCount && (t.pipes = t.pipes[0]), e.emit("unpipe", this, n)), this;
    }, m.prototype.on = function (e, t) {
      var n = c.prototype.on.call(this, e, t);
      if ("data" === e) !1 !== this._readableState.flowing && this.resume();else if ("readable" === e) {
        var r = this._readableState;
        r.endEmitted || r.readableListening || (r.readableListening = r.needReadable = !0, r.emittedReadable = !1, r.reading ? r.length && _(this) : o.nextTick(T, this));
      }
      return n;
    }, m.prototype.addListener = m.prototype.on, m.prototype.resume = function () {
      var e = this._readableState;
      return e.flowing || (p("resume"), e.flowing = !0, function (e, t) {
        t.resumeScheduled || (t.resumeScheduled = !0, o.nextTick(O, e, t));
      }(this, e)), this;
    }, m.prototype.pause = function () {
      return p("call pause flowing=%j", this._readableState.flowing), !1 !== this._readableState.flowing && (p("pause"), this._readableState.flowing = !1, this.emit("pause")), this;
    }, m.prototype.wrap = function (e) {
      var t = this,
          n = this._readableState,
          r = !1;

      for (var o in e.on("end", function () {
        if (p("wrapped end"), n.decoder && !n.ended) {
          var e = n.decoder.end();
          e && e.length && t.push(e);
        }

        t.push(null);
      }), e.on("data", function (o) {
        (p("wrapped data"), n.decoder && (o = n.decoder.write(o)), n.objectMode && null == o) || (n.objectMode || o && o.length) && (t.push(o) || (r = !0, e.pause()));
      }), e) {
        void 0 === this[o] && "function" == typeof e[o] && (this[o] = function (t) {
          return function () {
            return e[t].apply(e, arguments);
          };
        }(o));
      }

      for (var i = 0; i < v.length; i++) {
        e.on(v[i], this.emit.bind(this, v[i]));
      }

      return this._read = function (t) {
        p("wrapped _read", t), r && (r = !1, e.resume());
      }, this;
    }, Object.defineProperty(m.prototype, "readableHighWaterMark", {
      enumerable: !1,
      get: function get() {
        return this._readableState.highWaterMark;
      }
    }), m._fromList = R;
  }).call(this, n(8), n(13));
}, function (e, t, n) {
  "use strict";

  var r,
      o = "object" == (typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) ? Reflect : null,
      i = o && "function" == typeof o.apply ? o.apply : function (e, t, n) {
    return Function.prototype.apply.call(e, t, n);
  };
  r = o && "function" == typeof o.ownKeys ? o.ownKeys : Object.getOwnPropertySymbols ? function (e) {
    return Object.getOwnPropertyNames(e).concat(Object.getOwnPropertySymbols(e));
  } : function (e) {
    return Object.getOwnPropertyNames(e);
  };

  var a = Number.isNaN || function (e) {
    return e != e;
  };

  function s() {
    s.init.call(this);
  }

  e.exports = s, s.EventEmitter = s, s.prototype._events = void 0, s.prototype._eventsCount = 0, s.prototype._maxListeners = void 0;
  var c = 10;

  function u(e) {
    if ("function" != typeof e) throw new TypeError('The "listener" argument must be of type Function. Received type ' + _typeof(e));
  }

  function l(e) {
    return void 0 === e._maxListeners ? s.defaultMaxListeners : e._maxListeners;
  }

  function f(e, t, n, r) {
    var o, i, a, s;
    if (u(n), void 0 === (i = e._events) ? (i = e._events = Object.create(null), e._eventsCount = 0) : (void 0 !== i.newListener && (e.emit("newListener", t, n.listener ? n.listener : n), i = e._events), a = i[t]), void 0 === a) a = i[t] = n, ++e._eventsCount;else if ("function" == typeof a ? a = i[t] = r ? [n, a] : [a, n] : r ? a.unshift(n) : a.push(n), (o = l(e)) > 0 && a.length > o && !a.warned) {
      a.warned = !0;
      var c = new Error("Possible EventEmitter memory leak detected. " + a.length + " " + String(t) + " listeners added. Use emitter.setMaxListeners() to increase limit");
      c.name = "MaxListenersExceededWarning", c.emitter = e, c.type = t, c.count = a.length, s = c, console && console.warn && console.warn(s);
    }
    return e;
  }

  function h() {
    if (!this.fired) return this.target.removeListener(this.type, this.wrapFn), this.fired = !0, 0 === arguments.length ? this.listener.call(this.target) : this.listener.apply(this.target, arguments);
  }

  function p(e, t, n) {
    var r = {
      fired: !1,
      wrapFn: void 0,
      target: e,
      type: t,
      listener: n
    },
        o = h.bind(r);
    return o.listener = n, r.wrapFn = o, o;
  }

  function d(e, t, n) {
    var r = e._events;
    if (void 0 === r) return [];
    var o = r[t];
    return void 0 === o ? [] : "function" == typeof o ? n ? [o.listener || o] : [o] : n ? function (e) {
      for (var t = new Array(e.length), n = 0; n < t.length; ++n) {
        t[n] = e[n].listener || e[n];
      }

      return t;
    }(o) : y(o, o.length);
  }

  function g(e) {
    var t = this._events;

    if (void 0 !== t) {
      var n = t[e];
      if ("function" == typeof n) return 1;
      if (void 0 !== n) return n.length;
    }

    return 0;
  }

  function y(e, t) {
    for (var n = new Array(t), r = 0; r < t; ++r) {
      n[r] = e[r];
    }

    return n;
  }

  Object.defineProperty(s, "defaultMaxListeners", {
    enumerable: !0,
    get: function get() {
      return c;
    },
    set: function set(e) {
      if ("number" != typeof e || e < 0 || a(e)) throw new RangeError('The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received ' + e + ".");
      c = e;
    }
  }), s.init = function () {
    void 0 !== this._events && this._events !== Object.getPrototypeOf(this)._events || (this._events = Object.create(null), this._eventsCount = 0), this._maxListeners = this._maxListeners || void 0;
  }, s.prototype.setMaxListeners = function (e) {
    if ("number" != typeof e || e < 0 || a(e)) throw new RangeError('The value of "n" is out of range. It must be a non-negative number. Received ' + e + ".");
    return this._maxListeners = e, this;
  }, s.prototype.getMaxListeners = function () {
    return l(this);
  }, s.prototype.emit = function (e) {
    for (var t = [], n = 1; n < arguments.length; n++) {
      t.push(arguments[n]);
    }

    var r = "error" === e,
        o = this._events;
    if (void 0 !== o) r = r && void 0 === o.error;else if (!r) return !1;

    if (r) {
      var a;
      if (t.length > 0 && (a = t[0]), a instanceof Error) throw a;
      var s = new Error("Unhandled error." + (a ? " (" + a.message + ")" : ""));
      throw s.context = a, s;
    }

    var c = o[e];
    if (void 0 === c) return !1;
    if ("function" == typeof c) i(c, this, t);else {
      var u = c.length,
          l = y(c, u);

      for (n = 0; n < u; ++n) {
        i(l[n], this, t);
      }
    }
    return !0;
  }, s.prototype.addListener = function (e, t) {
    return f(this, e, t, !1);
  }, s.prototype.on = s.prototype.addListener, s.prototype.prependListener = function (e, t) {
    return f(this, e, t, !0);
  }, s.prototype.once = function (e, t) {
    return u(t), this.on(e, p(this, e, t)), this;
  }, s.prototype.prependOnceListener = function (e, t) {
    return u(t), this.prependListener(e, p(this, e, t)), this;
  }, s.prototype.removeListener = function (e, t) {
    var n, r, o, i, a;
    if (u(t), void 0 === (r = this._events)) return this;
    if (void 0 === (n = r[e])) return this;
    if (n === t || n.listener === t) 0 == --this._eventsCount ? this._events = Object.create(null) : (delete r[e], r.removeListener && this.emit("removeListener", e, n.listener || t));else if ("function" != typeof n) {
      for (o = -1, i = n.length - 1; i >= 0; i--) {
        if (n[i] === t || n[i].listener === t) {
          a = n[i].listener, o = i;
          break;
        }
      }

      if (o < 0) return this;
      0 === o ? n.shift() : function (e, t) {
        for (; t + 1 < e.length; t++) {
          e[t] = e[t + 1];
        }

        e.pop();
      }(n, o), 1 === n.length && (r[e] = n[0]), void 0 !== r.removeListener && this.emit("removeListener", e, a || t);
    }
    return this;
  }, s.prototype.off = s.prototype.removeListener, s.prototype.removeAllListeners = function (e) {
    var t, n, r;
    if (void 0 === (n = this._events)) return this;
    if (void 0 === n.removeListener) return 0 === arguments.length ? (this._events = Object.create(null), this._eventsCount = 0) : void 0 !== n[e] && (0 == --this._eventsCount ? this._events = Object.create(null) : delete n[e]), this;

    if (0 === arguments.length) {
      var o,
          i = Object.keys(n);

      for (r = 0; r < i.length; ++r) {
        "removeListener" !== (o = i[r]) && this.removeAllListeners(o);
      }

      return this.removeAllListeners("removeListener"), this._events = Object.create(null), this._eventsCount = 0, this;
    }

    if ("function" == typeof (t = n[e])) this.removeListener(e, t);else if (void 0 !== t) for (r = t.length - 1; r >= 0; r--) {
      this.removeListener(e, t[r]);
    }
    return this;
  }, s.prototype.listeners = function (e) {
    return d(this, e, !0);
  }, s.prototype.rawListeners = function (e) {
    return d(this, e, !1);
  }, s.listenerCount = function (e, t) {
    return "function" == typeof e.listenerCount ? e.listenerCount(t) : g.call(e, t);
  }, s.prototype.listenerCount = g, s.prototype.eventNames = function () {
    return this._eventsCount > 0 ? r(this._events) : [];
  };
}, function (e, t, n) {
  e.exports = n(41).EventEmitter;
}, function (e, t, n) {
  "use strict";

  var r = n(24);

  function o(e, t) {
    e.emit("error", t);
  }

  e.exports = {
    destroy: function destroy(e, t) {
      var n = this,
          i = this._readableState && this._readableState.destroyed,
          a = this._writableState && this._writableState.destroyed;
      return i || a ? (t ? t(e) : !e || this._writableState && this._writableState.errorEmitted || r.nextTick(o, this, e), this) : (this._readableState && (this._readableState.destroyed = !0), this._writableState && (this._writableState.destroyed = !0), this._destroy(e || null, function (e) {
        !t && e ? (r.nextTick(o, n, e), n._writableState && (n._writableState.errorEmitted = !0)) : t && t(e);
      }), this);
    },
    undestroy: function undestroy() {
      this._readableState && (this._readableState.destroyed = !1, this._readableState.reading = !1, this._readableState.ended = !1, this._readableState.endEmitted = !1), this._writableState && (this._writableState.destroyed = !1, this._writableState.ended = !1, this._writableState.ending = !1, this._writableState.finished = !1, this._writableState.errorEmitted = !1);
    }
  };
}, function (e, t, n) {
  "use strict";

  var r = n(66).Buffer,
      o = r.isEncoding || function (e) {
    switch ((e = "" + e) && e.toLowerCase()) {
      case "hex":
      case "utf8":
      case "utf-8":
      case "ascii":
      case "binary":
      case "base64":
      case "ucs2":
      case "ucs-2":
      case "utf16le":
      case "utf-16le":
      case "raw":
        return !0;

      default:
        return !1;
    }
  };

  function i(e) {
    var t;

    switch (this.encoding = function (e) {
      var t = function (e) {
        if (!e) return "utf8";

        for (var t;;) {
          switch (e) {
            case "utf8":
            case "utf-8":
              return "utf8";

            case "ucs2":
            case "ucs-2":
            case "utf16le":
            case "utf-16le":
              return "utf16le";

            case "latin1":
            case "binary":
              return "latin1";

            case "base64":
            case "ascii":
            case "hex":
              return e;

            default:
              if (t) return;
              e = ("" + e).toLowerCase(), t = !0;
          }
        }
      }(e);

      if ("string" != typeof t && (r.isEncoding === o || !o(e))) throw new Error("Unknown encoding: " + e);
      return t || e;
    }(e), this.encoding) {
      case "utf16le":
        this.text = c, this.end = u, t = 4;
        break;

      case "utf8":
        this.fillLast = s, t = 4;
        break;

      case "base64":
        this.text = l, this.end = f, t = 3;
        break;

      default:
        return this.write = h, void (this.end = p);
    }

    this.lastNeed = 0, this.lastTotal = 0, this.lastChar = r.allocUnsafe(t);
  }

  function a(e) {
    return e <= 127 ? 0 : e >> 5 == 6 ? 2 : e >> 4 == 14 ? 3 : e >> 3 == 30 ? 4 : e >> 6 == 2 ? -1 : -2;
  }

  function s(e) {
    var t = this.lastTotal - this.lastNeed,
        n = function (e, t, n) {
      if (128 != (192 & t[0])) return e.lastNeed = 0, "�";

      if (e.lastNeed > 1 && t.length > 1) {
        if (128 != (192 & t[1])) return e.lastNeed = 1, "�";
        if (e.lastNeed > 2 && t.length > 2 && 128 != (192 & t[2])) return e.lastNeed = 2, "�";
      }
    }(this, e);

    return void 0 !== n ? n : this.lastNeed <= e.length ? (e.copy(this.lastChar, t, 0, this.lastNeed), this.lastChar.toString(this.encoding, 0, this.lastTotal)) : (e.copy(this.lastChar, t, 0, e.length), void (this.lastNeed -= e.length));
  }

  function c(e, t) {
    if ((e.length - t) % 2 == 0) {
      var n = e.toString("utf16le", t);

      if (n) {
        var r = n.charCodeAt(n.length - 1);
        if (r >= 55296 && r <= 56319) return this.lastNeed = 2, this.lastTotal = 4, this.lastChar[0] = e[e.length - 2], this.lastChar[1] = e[e.length - 1], n.slice(0, -1);
      }

      return n;
    }

    return this.lastNeed = 1, this.lastTotal = 2, this.lastChar[0] = e[e.length - 1], e.toString("utf16le", t, e.length - 1);
  }

  function u(e) {
    var t = e && e.length ? this.write(e) : "";

    if (this.lastNeed) {
      var n = this.lastTotal - this.lastNeed;
      return t + this.lastChar.toString("utf16le", 0, n);
    }

    return t;
  }

  function l(e, t) {
    var n = (e.length - t) % 3;
    return 0 === n ? e.toString("base64", t) : (this.lastNeed = 3 - n, this.lastTotal = 3, 1 === n ? this.lastChar[0] = e[e.length - 1] : (this.lastChar[0] = e[e.length - 2], this.lastChar[1] = e[e.length - 1]), e.toString("base64", t, e.length - n));
  }

  function f(e) {
    var t = e && e.length ? this.write(e) : "";
    return this.lastNeed ? t + this.lastChar.toString("base64", 0, 3 - this.lastNeed) : t;
  }

  function h(e) {
    return e.toString(this.encoding);
  }

  function p(e) {
    return e && e.length ? this.write(e) : "";
  }

  t.StringDecoder = i, i.prototype.write = function (e) {
    if (0 === e.length) return "";
    var t, n;

    if (this.lastNeed) {
      if (void 0 === (t = this.fillLast(e))) return "";
      n = this.lastNeed, this.lastNeed = 0;
    } else n = 0;

    return n < e.length ? t ? t + this.text(e, n) : this.text(e, n) : t || "";
  }, i.prototype.end = function (e) {
    var t = e && e.length ? this.write(e) : "";
    return this.lastNeed ? t + "�" : t;
  }, i.prototype.text = function (e, t) {
    var n = function (e, t, n) {
      var r = t.length - 1;
      if (r < n) return 0;
      var o = a(t[r]);
      if (o >= 0) return o > 0 && (e.lastNeed = o - 1), o;
      if (--r < n || -2 === o) return 0;
      if ((o = a(t[r])) >= 0) return o > 0 && (e.lastNeed = o - 2), o;
      if (--r < n || -2 === o) return 0;
      if ((o = a(t[r])) >= 0) return o > 0 && (2 === o ? o = 0 : e.lastNeed = o - 3), o;
      return 0;
    }(this, e, t);

    if (!this.lastNeed) return e.toString("utf8", t);
    this.lastTotal = n;
    var r = e.length - (n - this.lastNeed);
    return e.copy(this.lastChar, 0, r), e.toString("utf8", t, r);
  }, i.prototype.fillLast = function (e) {
    if (this.lastNeed <= e.length) return e.copy(this.lastChar, this.lastTotal - this.lastNeed, 0, this.lastNeed), this.lastChar.toString(this.encoding, 0, this.lastTotal);
    e.copy(this.lastChar, this.lastTotal - this.lastNeed, 0, e.length), this.lastNeed -= e.length;
  };
}, function (e, t, n) {
  "use strict";

  (function (t, r, o) {
    var i = n(24);

    function a(e) {
      var t = this;
      this.next = null, this.entry = null, this.finish = function () {
        !function (e, t, n) {
          var r = e.entry;
          e.entry = null;

          for (; r;) {
            var o = r.callback;
            t.pendingcb--, o(n), r = r.next;
          }

          t.corkedRequestsFree ? t.corkedRequestsFree.next = e : t.corkedRequestsFree = e;
        }(t, e);
      };
    }

    e.exports = b;
    var s,
        c = !t.browser && ["v0.10", "v0.9."].indexOf(t.version.slice(0, 5)) > -1 ? r : i.nextTick;
    b.WritableState = v;
    var u = n(19);
    u.inherits = n(15);

    var l = {
      deprecate: n(69)
    },
        f = n(42),
        h = n(14).Buffer,
        p = o.Uint8Array || function () {};

    var d,
        g = n(43);

    function y() {}

    function v(e, t) {
      s = s || n(9), e = e || {};
      var r = t instanceof s;
      this.objectMode = !!e.objectMode, r && (this.objectMode = this.objectMode || !!e.writableObjectMode);
      var o = e.highWaterMark,
          u = e.writableHighWaterMark,
          l = this.objectMode ? 16 : 16384;
      this.highWaterMark = o || 0 === o ? o : r && (u || 0 === u) ? u : l, this.highWaterMark = Math.floor(this.highWaterMark), this.finalCalled = !1, this.needDrain = !1, this.ending = !1, this.ended = !1, this.finished = !1, this.destroyed = !1;
      var f = !1 === e.decodeStrings;
      this.decodeStrings = !f, this.defaultEncoding = e.defaultEncoding || "utf8", this.length = 0, this.writing = !1, this.corked = 0, this.sync = !0, this.bufferProcessing = !1, this.onwrite = function (e) {
        !function (e, t) {
          var n = e._writableState,
              r = n.sync,
              o = n.writecb;
          if (function (e) {
            e.writing = !1, e.writecb = null, e.length -= e.writelen, e.writelen = 0;
          }(n), t) !function (e, t, n, r, o) {
            --t.pendingcb, n ? (i.nextTick(o, r), i.nextTick(I, e, t), e._writableState.errorEmitted = !0, e.emit("error", r)) : (o(r), e._writableState.errorEmitted = !0, e.emit("error", r), I(e, t));
          }(e, n, r, t, o);else {
            var a = S(n);
            a || n.corked || n.bufferProcessing || !n.bufferedRequest || E(e, n), r ? c(w, e, n, a, o) : w(e, n, a, o);
          }
        }(t, e);
      }, this.writecb = null, this.writelen = 0, this.bufferedRequest = null, this.lastBufferedRequest = null, this.pendingcb = 0, this.prefinished = !1, this.errorEmitted = !1, this.bufferedRequestCount = 0, this.corkedRequestsFree = new a(this);
    }

    function b(e) {
      if (s = s || n(9), !(d.call(b, this) || this instanceof s)) return new b(e);
      this._writableState = new v(e, this), this.writable = !0, e && ("function" == typeof e.write && (this._write = e.write), "function" == typeof e.writev && (this._writev = e.writev), "function" == typeof e.destroy && (this._destroy = e.destroy), "function" == typeof e.final && (this._final = e.final)), f.call(this);
    }

    function m(e, t, n, r, o, i, a) {
      t.writelen = r, t.writecb = a, t.writing = !0, t.sync = !0, n ? e._writev(o, t.onwrite) : e._write(o, i, t.onwrite), t.sync = !1;
    }

    function w(e, t, n, r) {
      n || function (e, t) {
        0 === t.length && t.needDrain && (t.needDrain = !1, e.emit("drain"));
      }(e, t), t.pendingcb--, r(), I(e, t);
    }

    function E(e, t) {
      t.bufferProcessing = !0;
      var n = t.bufferedRequest;

      if (e._writev && n && n.next) {
        var r = t.bufferedRequestCount,
            o = new Array(r),
            i = t.corkedRequestsFree;
        i.entry = n;

        for (var s = 0, c = !0; n;) {
          o[s] = n, n.isBuf || (c = !1), n = n.next, s += 1;
        }

        o.allBuffers = c, m(e, t, !0, t.length, o, "", i.finish), t.pendingcb++, t.lastBufferedRequest = null, i.next ? (t.corkedRequestsFree = i.next, i.next = null) : t.corkedRequestsFree = new a(t), t.bufferedRequestCount = 0;
      } else {
        for (; n;) {
          var u = n.chunk,
              l = n.encoding,
              f = n.callback;
          if (m(e, t, !1, t.objectMode ? 1 : u.length, u, l, f), n = n.next, t.bufferedRequestCount--, t.writing) break;
        }

        null === n && (t.lastBufferedRequest = null);
      }

      t.bufferedRequest = n, t.bufferProcessing = !1;
    }

    function S(e) {
      return e.ending && 0 === e.length && null === e.bufferedRequest && !e.finished && !e.writing;
    }

    function _(e, t) {
      e._final(function (n) {
        t.pendingcb--, n && e.emit("error", n), t.prefinished = !0, e.emit("prefinish"), I(e, t);
      });
    }

    function I(e, t) {
      var n = S(t);
      return n && (!function (e, t) {
        t.prefinished || t.finalCalled || ("function" == typeof e._final ? (t.pendingcb++, t.finalCalled = !0, i.nextTick(_, e, t)) : (t.prefinished = !0, e.emit("prefinish")));
      }(e, t), 0 === t.pendingcb && (t.finished = !0, e.emit("finish"))), n;
    }

    u.inherits(b, f), v.prototype.getBuffer = function () {
      for (var e = this.bufferedRequest, t = []; e;) {
        t.push(e), e = e.next;
      }

      return t;
    }, function () {
      try {
        Object.defineProperty(v.prototype, "buffer", {
          get: l.deprecate(function () {
            return this.getBuffer();
          }, "_writableState.buffer is deprecated. Use _writableState.getBuffer instead.", "DEP0003")
        });
      } catch (e) {}
    }(), "function" == typeof Symbol && Symbol.hasInstance && "function" == typeof Function.prototype[Symbol.hasInstance] ? (d = Function.prototype[Symbol.hasInstance], Object.defineProperty(b, Symbol.hasInstance, {
      value: function value(e) {
        return !!d.call(this, e) || this === b && e && e._writableState instanceof v;
      }
    })) : d = function d(e) {
      return e instanceof this;
    }, b.prototype.pipe = function () {
      this.emit("error", new Error("Cannot pipe, not readable"));
    }, b.prototype.write = function (e, t, n) {
      var r,
          o = this._writableState,
          a = !1,
          s = !o.objectMode && (r = e, h.isBuffer(r) || r instanceof p);
      return s && !h.isBuffer(e) && (e = function (e) {
        return h.from(e);
      }(e)), "function" == typeof t && (n = t, t = null), s ? t = "buffer" : t || (t = o.defaultEncoding), "function" != typeof n && (n = y), o.ended ? function (e, t) {
        var n = new Error("write after end");
        e.emit("error", n), i.nextTick(t, n);
      }(this, n) : (s || function (e, t, n, r) {
        var o = !0,
            a = !1;
        return null === n ? a = new TypeError("May not write null values to stream") : "string" == typeof n || void 0 === n || t.objectMode || (a = new TypeError("Invalid non-string/buffer chunk")), a && (e.emit("error", a), i.nextTick(r, a), o = !1), o;
      }(this, o, e, n)) && (o.pendingcb++, a = function (e, t, n, r, o, i) {
        if (!n) {
          var a = function (e, t, n) {
            e.objectMode || !1 === e.decodeStrings || "string" != typeof t || (t = h.from(t, n));
            return t;
          }(t, r, o);

          r !== a && (n = !0, o = "buffer", r = a);
        }

        var s = t.objectMode ? 1 : r.length;
        t.length += s;
        var c = t.length < t.highWaterMark;
        c || (t.needDrain = !0);

        if (t.writing || t.corked) {
          var u = t.lastBufferedRequest;
          t.lastBufferedRequest = {
            chunk: r,
            encoding: o,
            isBuf: n,
            callback: i,
            next: null
          }, u ? u.next = t.lastBufferedRequest : t.bufferedRequest = t.lastBufferedRequest, t.bufferedRequestCount += 1;
        } else m(e, t, !1, s, r, o, i);

        return c;
      }(this, o, s, e, t, n)), a;
    }, b.prototype.cork = function () {
      this._writableState.corked++;
    }, b.prototype.uncork = function () {
      var e = this._writableState;
      e.corked && (e.corked--, e.writing || e.corked || e.finished || e.bufferProcessing || !e.bufferedRequest || E(this, e));
    }, b.prototype.setDefaultEncoding = function (e) {
      if ("string" == typeof e && (e = e.toLowerCase()), !(["hex", "utf8", "utf-8", "ascii", "binary", "base64", "ucs2", "ucs-2", "utf16le", "utf-16le", "raw"].indexOf((e + "").toLowerCase()) > -1)) throw new TypeError("Unknown encoding: " + e);
      return this._writableState.defaultEncoding = e, this;
    }, Object.defineProperty(b.prototype, "writableHighWaterMark", {
      enumerable: !1,
      get: function get() {
        return this._writableState.highWaterMark;
      }
    }), b.prototype._write = function (e, t, n) {
      n(new Error("_write() is not implemented"));
    }, b.prototype._writev = null, b.prototype.end = function (e, t, n) {
      var r = this._writableState;
      "function" == typeof e ? (n = e, e = null, t = null) : "function" == typeof t && (n = t, t = null), null != e && this.write(e, t), r.corked && (r.corked = 1, this.uncork()), r.ending || r.finished || function (e, t, n) {
        t.ending = !0, I(e, t), n && (t.finished ? i.nextTick(n) : e.once("finish", n));
        t.ended = !0, e.writable = !1;
      }(this, r, n);
    }, Object.defineProperty(b.prototype, "destroyed", {
      get: function get() {
        return void 0 !== this._writableState && this._writableState.destroyed;
      },
      set: function set(e) {
        this._writableState && (this._writableState.destroyed = e);
      }
    }), b.prototype.destroy = g.destroy, b.prototype._undestroy = g.undestroy, b.prototype._destroy = function (e, t) {
      this.end(), t(e);
    };
  }).call(this, n(13), n(67).setImmediate, n(8));
}, function (e, t, n) {
  "use strict";

  e.exports = a;
  var r = n(9),
      o = n(19);

  function i(e, t) {
    var n = this._transformState;
    n.transforming = !1;
    var r = n.writecb;
    if (!r) return this.emit("error", new Error("write callback called multiple times"));
    n.writechunk = null, n.writecb = null, null != t && this.push(t), r(e);
    var o = this._readableState;
    o.reading = !1, (o.needReadable || o.length < o.highWaterMark) && this._read(o.highWaterMark);
  }

  function a(e) {
    if (!(this instanceof a)) return new a(e);
    r.call(this, e), this._transformState = {
      afterTransform: i.bind(this),
      needTransform: !1,
      transforming: !1,
      writecb: null,
      writechunk: null,
      writeencoding: null
    }, this._readableState.needReadable = !0, this._readableState.sync = !1, e && ("function" == typeof e.transform && (this._transform = e.transform), "function" == typeof e.flush && (this._flush = e.flush)), this.on("prefinish", s);
  }

  function s() {
    var e = this;
    "function" == typeof this._flush ? this._flush(function (t, n) {
      c(e, t, n);
    }) : c(this, null, null);
  }

  function c(e, t, n) {
    if (t) return e.emit("error", t);
    if (null != n && e.push(n), e._writableState.length) throw new Error("Calling transform done when ws.length != 0");
    if (e._transformState.transforming) throw new Error("Calling transform done when still transforming");
    return e.push(null);
  }

  o.inherits = n(15), o.inherits(a, r), a.prototype.push = function (e, t) {
    return this._transformState.needTransform = !1, r.prototype.push.call(this, e, t);
  }, a.prototype._transform = function (e, t, n) {
    throw new Error("_transform() is not implemented");
  }, a.prototype._write = function (e, t, n) {
    var r = this._transformState;

    if (r.writecb = n, r.writechunk = e, r.writeencoding = t, !r.transforming) {
      var o = this._readableState;
      (r.needTransform || o.needReadable || o.length < o.highWaterMark) && this._read(o.highWaterMark);
    }
  }, a.prototype._read = function (e) {
    var t = this._transformState;
    null !== t.writechunk && t.writecb && !t.transforming ? (t.transforming = !0, this._transform(t.writechunk, t.writeencoding, t.afterTransform)) : t.needTransform = !0;
  }, a.prototype._destroy = function (e, t) {
    var n = this;

    r.prototype._destroy.call(this, e, function (e) {
      t(e), n.emit("close");
    });
  };
}, function (e, t, n) {
  "use strict";

  (function (e) {
    n.d(t, "a", function () {
      return i;
    });

    var r = n(5),
        o = n(1),
        i = function () {
      function t() {}

      return t.prototype.writeHandshakeRequest = function (e) {
        return r.a.write(JSON.stringify(e));
      }, t.prototype.parseHandshakeResponse = function (t) {
        var n, i;

        if (Object(o.i)(t) || void 0 !== e && t instanceof e) {
          var a = new Uint8Array(t);
          if (-1 === (c = a.indexOf(r.a.RecordSeparatorCode))) throw new Error("Message is incomplete.");
          var s = c + 1;
          n = String.fromCharCode.apply(null, a.slice(0, s)), i = a.byteLength > s ? a.slice(s).buffer : null;
        } else {
          var c,
              u = t;
          if (-1 === (c = u.indexOf(r.a.RecordSeparator))) throw new Error("Message is incomplete.");
          s = c + 1;
          n = u.substring(0, s), i = u.length > s ? u.substring(s) : null;
        }

        var l = r.a.parse(n),
            f = JSON.parse(l[0]);
        if (f.type) throw new Error("Expected a handshake response from the server.");
        return [i, f];
      }, t;
    }();
  }).call(this, n(10).Buffer);
},,,,,, function (e, t, n) {
  "use strict";

  var r = this && this.__awaiter || function (e, t, n, r) {
    return new (n || (n = Promise))(function (o, i) {
      function a(e) {
        try {
          c(r.next(e));
        } catch (e) {
          i(e);
        }
      }

      function s(e) {
        try {
          c(r.throw(e));
        } catch (e) {
          i(e);
        }
      }

      function c(e) {
        var t;
        e.done ? o(e.value) : (t = e.value, t instanceof n ? t : new n(function (e) {
          e(t);
        })).then(a, s);
      }

      c((r = r.apply(e, t || [])).next());
    });
  },
      o = this && this.__generator || function (e, t) {
    var n,
        r,
        o,
        i,
        a = {
      label: 0,
      sent: function sent() {
        if (1 & o[0]) throw o[1];
        return o[1];
      },
      trys: [],
      ops: []
    };
    return i = {
      next: s(0),
      throw: s(1),
      return: s(2)
    }, "function" == typeof Symbol && (i[Symbol.iterator] = function () {
      return this;
    }), i;

    function s(i) {
      return function (s) {
        return function (i) {
          if (n) throw new TypeError("Generator is already executing.");

          for (; a;) {
            try {
              if (n = 1, r && (o = 2 & i[0] ? r.return : i[0] ? r.throw || ((o = r.return) && o.call(r), 0) : r.next) && !(o = o.call(r, i[1])).done) return o;

              switch (r = 0, o && (i = [2 & i[0], o.value]), i[0]) {
                case 0:
                case 1:
                  o = i;
                  break;

                case 4:
                  return a.label++, {
                    value: i[1],
                    done: !1
                  };

                case 5:
                  a.label++, r = i[1], i = [0];
                  continue;

                case 7:
                  i = a.ops.pop(), a.trys.pop();
                  continue;

                default:
                  if (!(o = a.trys, (o = o.length > 0 && o[o.length - 1]) || 6 !== i[0] && 2 !== i[0])) {
                    a = 0;
                    continue;
                  }

                  if (3 === i[0] && (!o || i[1] > o[0] && i[1] < o[3])) {
                    a.label = i[1];
                    break;
                  }

                  if (6 === i[0] && a.label < o[1]) {
                    a.label = o[1], o = i;
                    break;
                  }

                  if (o && a.label < o[2]) {
                    a.label = o[2], a.ops.push(i);
                    break;
                  }

                  o[2] && a.ops.pop(), a.trys.pop();
                  continue;
              }

              i = t.call(e, a);
            } catch (e) {
              i = [6, e], r = 0;
            } finally {
              n = o = 0;
            }
          }

          if (5 & i[0]) throw i[1];
          return {
            value: i[0] ? i[1] : void 0,
            done: !0
          };
        }([i, s]);
      };
    }
  },
      i = this && this.__read || function (e, t) {
    var n = "function" == typeof Symbol && e[Symbol.iterator];
    if (!n) return e;
    var r,
        o,
        i = n.call(e),
        a = [];

    try {
      for (; (void 0 === t || t-- > 0) && !(r = i.next()).done;) {
        a.push(r.value);
      }
    } catch (e) {
      o = {
        error: e
      };
    } finally {
      try {
        r && !r.done && (n = i.return) && n.call(i);
      } finally {
        if (o) throw o.error;
      }
    }

    return a;
  },
      a = this && this.__spread || function () {
    for (var e = [], t = 0; t < arguments.length; t++) {
      e = e.concat(i(arguments[t]));
    }

    return e;
  };

  Object.defineProperty(t, "__esModule", {
    value: !0
  });
  var s = n(3);
  n(25);
  var c = n(2),
      u = n(85),
      l = n(21),
      f = n(37),
      h = n(75),
      p = n(79),
      d = n(16),
      g = n(80),
      y = n(18),
      v = n(81),
      b = n(82),
      m = n(12),
      w = n(38),
      E = !1,
      S = !1;

  function _(e) {
    return r(this, void 0, void 0, function () {
      var t,
          n,
          i,
          a,
          s,
          c,
          u,
          l,
          f = this;
      return o(this, function (h) {
        switch (h.label) {
          case 0:
            if (S) throw new Error("Blazor has already started.");
            return S = !0, t = v.resolveOptions(e), n = new p.ConsoleLogger(t.logLevel), window.Blazor.defaultReconnectionHandler = new b.DefaultReconnectionHandler(n), t.reconnectionHandler = t.reconnectionHandler || window.Blazor.defaultReconnectionHandler, n.log(d.LogLevel.Information, "Starting up blazor server-side application."), i = w.discoverComponents(document, "server"), a = new g.CircuitDescriptor(i), [4, I(t, n, a)];

          case 1:
            return s = h.sent(), [4, a.startCircuit(s)];

          case 2:
            return h.sent() ? (c = function c(e) {
              return r(f, void 0, void 0, function () {
                var r, i;
                return o(this, function (o) {
                  switch (o.label) {
                    case 0:
                      return E ? [2, !1] : (i = e) ? [3, 2] : [4, I(t, n, a)];

                    case 1:
                      i = o.sent(), o.label = 2;

                    case 2:
                      return r = i, [4, a.reconnect(r)];

                    case 3:
                      return o.sent() ? (t.reconnectionHandler.onConnectionUp(), [2, !0]) : (n.log(d.LogLevel.Information, "Reconnection attempt to the circuit was rejected by the server. This may indicate that the associated state is no longer available on the server."), [2, !1]);
                  }
                });
              });
            }, u = !1, l = function l() {
              if (!u) {
                var e = new FormData(),
                    t = a.circuitId;
                e.append("circuitId", t), u = navigator.sendBeacon("_blazor/disconnect", e);
              }
            }, window.Blazor.disconnect = l, window.addEventListener("unload", l, {
              capture: !1,
              once: !0
            }), window.Blazor.reconnect = c, n.log(d.LogLevel.Information, "Blazor server-side application started."), [2]) : (n.log(d.LogLevel.Error, "Failed to start the circuit."), [2]);
        }
      });
    });
  }

  function I(e, t, n) {
    return r(this, void 0, void 0, function () {
      var r, i, f, p, g;
      return o(this, function (o) {
        switch (o.label) {
          case 0:
            (r = new u.MessagePackHubProtocol()).name = "blazorpack", i = new c.HubConnectionBuilder().withUrl("_blazor").withHubProtocol(r), e.configureSignalR(i), f = i.build(), y.setEventDispatcher(function (e, t) {
              f.send("DispatchBrowserEvent", JSON.stringify(e), JSON.stringify(t));
            }), window.Blazor._internal.navigationManager.listenForNavigationEvents(function (e, t) {
              return f.send("OnLocationChanged", e, t);
            }), f.on("JS.AttachComponent", function (e, t) {
              return m.attachRootComponentToLogicalElement(0, n.resolveElement(t), e);
            }), f.on("JS.BeginInvokeJS", s.DotNet.jsCallDispatcher.beginInvokeJSFromDotNet), f.on("JS.EndInvokeDotNet", function (e) {
              var t;
              return (t = s.DotNet.jsCallDispatcher).endInvokeDotNetFromJS.apply(t, a(s.DotNet.parseJsonWithRevivers(e)));
            }), p = h.RenderQueue.getOrCreate(t), f.on("JS.RenderBatch", function (e, n) {
              t.log(d.LogLevel.Debug, "Received render batch with id " + e + " and " + n.byteLength + " bytes."), p.processBatch(e, n, f);
            }), f.onclose(function (t) {
              return !E && e.reconnectionHandler.onConnectionDown(e.reconnectionOptions, t);
            }), f.on("JS.Error", function (e) {
              E = !0, C(f, e, t), l.showErrorNotification();
            }), window.Blazor._internal.forceCloseConnection = function () {
              return f.stop();
            }, o.label = 1;

          case 1:
            return o.trys.push([1, 3,, 4]), [4, f.start()];

          case 2:
            return o.sent(), [3, 4];

          case 3:
            return g = o.sent(), C(f, g, t), [3, 4];

          case 4:
            return s.DotNet.attachDispatcher({
              beginInvokeDotNetFromJS: function beginInvokeDotNetFromJS(e, t, n, r, o) {
                f.send("BeginInvokeDotNetFromJS", e ? e.toString() : null, t, n, r || 0, o);
              },
              endInvokeJSFromDotNet: function endInvokeJSFromDotNet(e, t, n) {
                f.send("EndInvokeJSFromDotNet", e, t, n);
              }
            }), [2, f];
        }
      });
    });
  }

  function C(e, t, n) {
    n.log(d.LogLevel.Error, t), e && e.stop();
  }

  window.Blazor.start = _, f.shouldAutoStart() && _();
}, function (e, t, n) {
  "use strict";

  t.byteLength = function (e) {
    var t = u(e),
        n = t[0],
        r = t[1];
    return 3 * (n + r) / 4 - r;
  }, t.toByteArray = function (e) {
    var t,
        n,
        r = u(e),
        a = r[0],
        s = r[1],
        c = new i(function (e, t, n) {
      return 3 * (t + n) / 4 - n;
    }(0, a, s)),
        l = 0,
        f = s > 0 ? a - 4 : a;

    for (n = 0; n < f; n += 4) {
      t = o[e.charCodeAt(n)] << 18 | o[e.charCodeAt(n + 1)] << 12 | o[e.charCodeAt(n + 2)] << 6 | o[e.charCodeAt(n + 3)], c[l++] = t >> 16 & 255, c[l++] = t >> 8 & 255, c[l++] = 255 & t;
    }

    2 === s && (t = o[e.charCodeAt(n)] << 2 | o[e.charCodeAt(n + 1)] >> 4, c[l++] = 255 & t);
    1 === s && (t = o[e.charCodeAt(n)] << 10 | o[e.charCodeAt(n + 1)] << 4 | o[e.charCodeAt(n + 2)] >> 2, c[l++] = t >> 8 & 255, c[l++] = 255 & t);
    return c;
  }, t.fromByteArray = function (e) {
    for (var t, n = e.length, o = n % 3, i = [], a = 0, s = n - o; a < s; a += 16383) {
      i.push(l(e, a, a + 16383 > s ? s : a + 16383));
    }

    1 === o ? (t = e[n - 1], i.push(r[t >> 2] + r[t << 4 & 63] + "==")) : 2 === o && (t = (e[n - 2] << 8) + e[n - 1], i.push(r[t >> 10] + r[t >> 4 & 63] + r[t << 2 & 63] + "="));
    return i.join("");
  };

  for (var r = [], o = [], i = "undefined" != typeof Uint8Array ? Uint8Array : Array, a = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", s = 0, c = a.length; s < c; ++s) {
    r[s] = a[s], o[a.charCodeAt(s)] = s;
  }

  function u(e) {
    var t = e.length;
    if (t % 4 > 0) throw new Error("Invalid string. Length must be a multiple of 4");
    var n = e.indexOf("=");
    return -1 === n && (n = t), [n, n === t ? 0 : 4 - n % 4];
  }

  function l(e, t, n) {
    for (var o, i, a = [], s = t; s < n; s += 3) {
      o = (e[s] << 16 & 16711680) + (e[s + 1] << 8 & 65280) + (255 & e[s + 2]), a.push(r[(i = o) >> 18 & 63] + r[i >> 12 & 63] + r[i >> 6 & 63] + r[63 & i]);
    }

    return a.join("");
  }

  o["-".charCodeAt(0)] = 62, o["_".charCodeAt(0)] = 63;
}, function (e, t) {
  t.read = function (e, t, n, r, o) {
    var i,
        a,
        s = 8 * o - r - 1,
        c = (1 << s) - 1,
        u = c >> 1,
        l = -7,
        f = n ? o - 1 : 0,
        h = n ? -1 : 1,
        p = e[t + f];

    for (f += h, i = p & (1 << -l) - 1, p >>= -l, l += s; l > 0; i = 256 * i + e[t + f], f += h, l -= 8) {
      ;
    }

    for (a = i & (1 << -l) - 1, i >>= -l, l += r; l > 0; a = 256 * a + e[t + f], f += h, l -= 8) {
      ;
    }

    if (0 === i) i = 1 - u;else {
      if (i === c) return a ? NaN : 1 / 0 * (p ? -1 : 1);
      a += Math.pow(2, r), i -= u;
    }
    return (p ? -1 : 1) * a * Math.pow(2, i - r);
  }, t.write = function (e, t, n, r, o, i) {
    var a,
        s,
        c,
        u = 8 * i - o - 1,
        l = (1 << u) - 1,
        f = l >> 1,
        h = 23 === o ? Math.pow(2, -24) - Math.pow(2, -77) : 0,
        p = r ? 0 : i - 1,
        d = r ? 1 : -1,
        g = t < 0 || 0 === t && 1 / t < 0 ? 1 : 0;

    for (t = Math.abs(t), isNaN(t) || t === 1 / 0 ? (s = isNaN(t) ? 1 : 0, a = l) : (a = Math.floor(Math.log(t) / Math.LN2), t * (c = Math.pow(2, -a)) < 1 && (a--, c *= 2), (t += a + f >= 1 ? h / c : h * Math.pow(2, 1 - f)) * c >= 2 && (a++, c /= 2), a + f >= l ? (s = 0, a = l) : a + f >= 1 ? (s = (t * c - 1) * Math.pow(2, o), a += f) : (s = t * Math.pow(2, f - 1) * Math.pow(2, o), a = 0)); o >= 8; e[n + p] = 255 & s, p += d, s /= 256, o -= 8) {
      ;
    }

    for (a = a << o | s, u += o; u > 0; e[n + p] = 255 & a, p += d, a /= 256, u -= 8) {
      ;
    }

    e[n + p - d] |= 128 * g;
  };
}, function (e, t) {
  var n = {}.toString;

  e.exports = Array.isArray || function (e) {
    return "[object Array]" == n.call(e);
  };
}, function (e, t, n) {
  "use strict";

  (function (t) {
    var r = n(58);
    /*!
     * The buffer module from node.js, for the browser.
     *
     * @author   Feross Aboukhadijeh <feross@feross.org> <http://feross.org>
     * @license  MIT
     */

    function o(e, t) {
      if (e === t) return 0;

      for (var n = e.length, r = t.length, o = 0, i = Math.min(n, r); o < i; ++o) {
        if (e[o] !== t[o]) {
          n = e[o], r = t[o];
          break;
        }
      }

      return n < r ? -1 : r < n ? 1 : 0;
    }

    function i(e) {
      return t.Buffer && "function" == typeof t.Buffer.isBuffer ? t.Buffer.isBuffer(e) : !(null == e || !e._isBuffer);
    }

    var a = n(39),
        s = Object.prototype.hasOwnProperty,
        c = Array.prototype.slice,
        u = "foo" === function () {}.name;

    function l(e) {
      return Object.prototype.toString.call(e);
    }

    function f(e) {
      return !i(e) && "function" == typeof t.ArrayBuffer && ("function" == typeof ArrayBuffer.isView ? ArrayBuffer.isView(e) : !!e && (e instanceof DataView || !!(e.buffer && e.buffer instanceof ArrayBuffer)));
    }

    var h = e.exports = b,
        p = /\s*function\s+([^\(\s]*)\s*/;

    function d(e) {
      if (a.isFunction(e)) {
        if (u) return e.name;
        var t = e.toString().match(p);
        return t && t[1];
      }
    }

    function g(e, t) {
      return "string" == typeof e ? e.length < t ? e : e.slice(0, t) : e;
    }

    function y(e) {
      if (u || !a.isFunction(e)) return a.inspect(e);
      var t = d(e);
      return "[Function" + (t ? ": " + t : "") + "]";
    }

    function v(e, t, n, r, o) {
      throw new h.AssertionError({
        message: n,
        actual: e,
        expected: t,
        operator: r,
        stackStartFunction: o
      });
    }

    function b(e, t) {
      e || v(e, !0, t, "==", h.ok);
    }

    function m(e, t, n, r) {
      if (e === t) return !0;
      if (i(e) && i(t)) return 0 === o(e, t);
      if (a.isDate(e) && a.isDate(t)) return e.getTime() === t.getTime();
      if (a.isRegExp(e) && a.isRegExp(t)) return e.source === t.source && e.global === t.global && e.multiline === t.multiline && e.lastIndex === t.lastIndex && e.ignoreCase === t.ignoreCase;

      if (null !== e && "object" == _typeof(e) || null !== t && "object" == _typeof(t)) {
        if (f(e) && f(t) && l(e) === l(t) && !(e instanceof Float32Array || e instanceof Float64Array)) return 0 === o(new Uint8Array(e.buffer), new Uint8Array(t.buffer));
        if (i(e) !== i(t)) return !1;
        var s = (r = r || {
          actual: [],
          expected: []
        }).actual.indexOf(e);
        return -1 !== s && s === r.expected.indexOf(t) || (r.actual.push(e), r.expected.push(t), function (e, t, n, r) {
          if (null == e || null == t) return !1;
          if (a.isPrimitive(e) || a.isPrimitive(t)) return e === t;
          if (n && Object.getPrototypeOf(e) !== Object.getPrototypeOf(t)) return !1;
          var o = w(e),
              i = w(t);
          if (o && !i || !o && i) return !1;
          if (o) return e = c.call(e), t = c.call(t), m(e, t, n);

          var s,
              u,
              l = _(e),
              f = _(t);

          if (l.length !== f.length) return !1;

          for (l.sort(), f.sort(), u = l.length - 1; u >= 0; u--) {
            if (l[u] !== f[u]) return !1;
          }

          for (u = l.length - 1; u >= 0; u--) {
            if (s = l[u], !m(e[s], t[s], n, r)) return !1;
          }

          return !0;
        }(e, t, n, r));
      }

      return n ? e === t : e == t;
    }

    function w(e) {
      return "[object Arguments]" == Object.prototype.toString.call(e);
    }

    function E(e, t) {
      if (!e || !t) return !1;
      if ("[object RegExp]" == Object.prototype.toString.call(t)) return t.test(e);

      try {
        if (e instanceof t) return !0;
      } catch (e) {}

      return !Error.isPrototypeOf(t) && !0 === t.call({}, e);
    }

    function S(e, t, n, r) {
      var o;
      if ("function" != typeof t) throw new TypeError('"block" argument must be a function');
      "string" == typeof n && (r = n, n = null), o = function (e) {
        var t;

        try {
          e();
        } catch (e) {
          t = e;
        }

        return t;
      }(t), r = (n && n.name ? " (" + n.name + ")." : ".") + (r ? " " + r : "."), e && !o && v(o, n, "Missing expected exception" + r);
      var i = "string" == typeof r,
          s = !e && o && !n;
      if ((!e && a.isError(o) && i && E(o, n) || s) && v(o, n, "Got unwanted exception" + r), e && o && n && !E(o, n) || !e && o) throw o;
    }

    h.AssertionError = function (e) {
      this.name = "AssertionError", this.actual = e.actual, this.expected = e.expected, this.operator = e.operator, e.message ? (this.message = e.message, this.generatedMessage = !1) : (this.message = function (e) {
        return g(y(e.actual), 128) + " " + e.operator + " " + g(y(e.expected), 128);
      }(this), this.generatedMessage = !0);
      var t = e.stackStartFunction || v;
      if (Error.captureStackTrace) Error.captureStackTrace(this, t);else {
        var n = new Error();

        if (n.stack) {
          var r = n.stack,
              o = d(t),
              i = r.indexOf("\n" + o);

          if (i >= 0) {
            var a = r.indexOf("\n", i + 1);
            r = r.substring(a + 1);
          }

          this.stack = r;
        }
      }
    }, a.inherits(h.AssertionError, Error), h.fail = v, h.ok = b, h.equal = function (e, t, n) {
      e != t && v(e, t, n, "==", h.equal);
    }, h.notEqual = function (e, t, n) {
      e == t && v(e, t, n, "!=", h.notEqual);
    }, h.deepEqual = function (e, t, n) {
      m(e, t, !1) || v(e, t, n, "deepEqual", h.deepEqual);
    }, h.deepStrictEqual = function (e, t, n) {
      m(e, t, !0) || v(e, t, n, "deepStrictEqual", h.deepStrictEqual);
    }, h.notDeepEqual = function (e, t, n) {
      m(e, t, !1) && v(e, t, n, "notDeepEqual", h.notDeepEqual);
    }, h.notDeepStrictEqual = function e(t, n, r) {
      m(t, n, !0) && v(t, n, r, "notDeepStrictEqual", e);
    }, h.strictEqual = function (e, t, n) {
      e !== t && v(e, t, n, "===", h.strictEqual);
    }, h.notStrictEqual = function (e, t, n) {
      e === t && v(e, t, n, "!==", h.notStrictEqual);
    }, h.throws = function (e, t, n) {
      S(!0, e, t, n);
    }, h.doesNotThrow = function (e, t, n) {
      S(!1, e, t, n);
    }, h.ifError = function (e) {
      if (e) throw e;
    }, h.strict = r(function e(t, n) {
      t || v(t, !0, n, "==", e);
    }, h, {
      equal: h.strictEqual,
      deepEqual: h.deepStrictEqual,
      notEqual: h.notStrictEqual,
      notDeepEqual: h.notDeepStrictEqual
    }), h.strict.strict = h.strict;

    var _ = Object.keys || function (e) {
      var t = [];

      for (var n in e) {
        s.call(e, n) && t.push(n);
      }

      return t;
    };
  }).call(this, n(8));
}, function (e, t, n) {
  "use strict";
  /*
  object-assign
  (c) Sindre Sorhus
  @license MIT
   */

  var r = Object.getOwnPropertySymbols,
      o = Object.prototype.hasOwnProperty,
      i = Object.prototype.propertyIsEnumerable;

  function a(e) {
    if (null == e) throw new TypeError("Object.assign cannot be called with null or undefined");
    return Object(e);
  }

  e.exports = function () {
    try {
      if (!Object.assign) return !1;
      var e = new String("abc");
      if (e[5] = "de", "5" === Object.getOwnPropertyNames(e)[0]) return !1;

      for (var t = {}, n = 0; n < 10; n++) {
        t["_" + String.fromCharCode(n)] = n;
      }

      if ("0123456789" !== Object.getOwnPropertyNames(t).map(function (e) {
        return t[e];
      }).join("")) return !1;
      var r = {};
      return "abcdefghijklmnopqrst".split("").forEach(function (e) {
        r[e] = e;
      }), "abcdefghijklmnopqrst" === Object.keys(Object.assign({}, r)).join("");
    } catch (e) {
      return !1;
    }
  }() ? Object.assign : function (e, t) {
    for (var n, s, c = a(e), u = 1; u < arguments.length; u++) {
      for (var l in n = Object(arguments[u])) {
        o.call(n, l) && (c[l] = n[l]);
      }

      if (r) {
        s = r(n);

        for (var f = 0; f < s.length; f++) {
          i.call(n, s[f]) && (c[s[f]] = n[s[f]]);
        }
      }
    }

    return c;
  };
}, function (e, t) {
  e.exports = function (e) {
    return e && "object" == _typeof(e) && "function" == typeof e.copy && "function" == typeof e.fill && "function" == typeof e.readUInt8;
  };
}, function (e, t) {
  "function" == typeof Object.create ? e.exports = function (e, t) {
    e.super_ = t, e.prototype = Object.create(t.prototype, {
      constructor: {
        value: e,
        enumerable: !1,
        writable: !0,
        configurable: !0
      }
    });
  } : e.exports = function (e, t) {
    e.super_ = t;

    var n = function n() {};

    n.prototype = t.prototype, e.prototype = new n(), e.prototype.constructor = e;
  };
}, function (e, t, n) {
  e.exports = n(9);
}, function (e, t) {
  var n = {}.toString;

  e.exports = Array.isArray || function (e) {
    return "[object Array]" == n.call(e);
  };
}, function (e, t) {}, function (e, t, n) {
  "use strict";

  var r = n(14).Buffer,
      o = n(65);
  e.exports = function () {
    function e() {
      !function (e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
      }(this, e), this.head = null, this.tail = null, this.length = 0;
    }

    return e.prototype.push = function (e) {
      var t = {
        data: e,
        next: null
      };
      this.length > 0 ? this.tail.next = t : this.head = t, this.tail = t, ++this.length;
    }, e.prototype.unshift = function (e) {
      var t = {
        data: e,
        next: this.head
      };
      0 === this.length && (this.tail = t), this.head = t, ++this.length;
    }, e.prototype.shift = function () {
      if (0 !== this.length) {
        var e = this.head.data;
        return 1 === this.length ? this.head = this.tail = null : this.head = this.head.next, --this.length, e;
      }
    }, e.prototype.clear = function () {
      this.head = this.tail = null, this.length = 0;
    }, e.prototype.join = function (e) {
      if (0 === this.length) return "";

      for (var t = this.head, n = "" + t.data; t = t.next;) {
        n += e + t.data;
      }

      return n;
    }, e.prototype.concat = function (e) {
      if (0 === this.length) return r.alloc(0);
      if (1 === this.length) return this.head.data;

      for (var t, n, o, i = r.allocUnsafe(e >>> 0), a = this.head, s = 0; a;) {
        t = a.data, n = i, o = s, t.copy(n, o), s += a.data.length, a = a.next;
      }

      return i;
    }, e;
  }(), o && o.inspect && o.inspect.custom && (e.exports.prototype[o.inspect.custom] = function () {
    var e = o.inspect({
      length: this.length
    });
    return this.constructor.name + " " + e;
  });
}, function (e, t) {}, function (e, t, n) {
  var r = n(10),
      o = r.Buffer;

  function i(e, t) {
    for (var n in e) {
      t[n] = e[n];
    }
  }

  function a(e, t, n) {
    return o(e, t, n);
  }

  o.from && o.alloc && o.allocUnsafe && o.allocUnsafeSlow ? e.exports = r : (i(r, t), t.Buffer = a), a.prototype = Object.create(o.prototype), i(o, a), a.from = function (e, t, n) {
    if ("number" == typeof e) throw new TypeError("Argument must not be a number");
    return o(e, t, n);
  }, a.alloc = function (e, t, n) {
    if ("number" != typeof e) throw new TypeError("Argument must be a number");
    var r = o(e);
    return void 0 !== t ? "string" == typeof n ? r.fill(t, n) : r.fill(t) : r.fill(0), r;
  }, a.allocUnsafe = function (e) {
    if ("number" != typeof e) throw new TypeError("Argument must be a number");
    return o(e);
  }, a.allocUnsafeSlow = function (e) {
    if ("number" != typeof e) throw new TypeError("Argument must be a number");
    return r.SlowBuffer(e);
  };
}, function (e, t, n) {
  (function (e) {
    var r = void 0 !== e && e || "undefined" != typeof self && self || window,
        o = Function.prototype.apply;

    function i(e, t) {
      this._id = e, this._clearFn = t;
    }

    t.setTimeout = function () {
      return new i(o.call(setTimeout, r, arguments), clearTimeout);
    }, t.setInterval = function () {
      return new i(o.call(setInterval, r, arguments), clearInterval);
    }, t.clearTimeout = t.clearInterval = function (e) {
      e && e.close();
    }, i.prototype.unref = i.prototype.ref = function () {}, i.prototype.close = function () {
      this._clearFn.call(r, this._id);
    }, t.enroll = function (e, t) {
      clearTimeout(e._idleTimeoutId), e._idleTimeout = t;
    }, t.unenroll = function (e) {
      clearTimeout(e._idleTimeoutId), e._idleTimeout = -1;
    }, t._unrefActive = t.active = function (e) {
      clearTimeout(e._idleTimeoutId);
      var t = e._idleTimeout;
      t >= 0 && (e._idleTimeoutId = setTimeout(function () {
        e._onTimeout && e._onTimeout();
      }, t));
    }, n(68), t.setImmediate = "undefined" != typeof self && self.setImmediate || void 0 !== e && e.setImmediate || this && this.setImmediate, t.clearImmediate = "undefined" != typeof self && self.clearImmediate || void 0 !== e && e.clearImmediate || this && this.clearImmediate;
  }).call(this, n(8));
}, function (e, t, n) {
  (function (e, t) {
    !function (e, n) {
      "use strict";

      if (!e.setImmediate) {
        var r,
            o,
            i,
            a,
            s,
            c = 1,
            u = {},
            l = !1,
            f = e.document,
            h = Object.getPrototypeOf && Object.getPrototypeOf(e);
        h = h && h.setTimeout ? h : e, "[object process]" === {}.toString.call(e.process) ? r = function r(e) {
          t.nextTick(function () {
            d(e);
          });
        } : !function () {
          if (e.postMessage && !e.importScripts) {
            var t = !0,
                n = e.onmessage;
            return e.onmessage = function () {
              t = !1;
            }, e.postMessage("", "*"), e.onmessage = n, t;
          }
        }() ? e.MessageChannel ? ((i = new MessageChannel()).port1.onmessage = function (e) {
          d(e.data);
        }, r = function r(e) {
          i.port2.postMessage(e);
        }) : f && "onreadystatechange" in f.createElement("script") ? (o = f.documentElement, r = function r(e) {
          var t = f.createElement("script");
          t.onreadystatechange = function () {
            d(e), t.onreadystatechange = null, o.removeChild(t), t = null;
          }, o.appendChild(t);
        }) : r = function r(e) {
          setTimeout(d, 0, e);
        } : (a = "setImmediate$" + Math.random() + "$", s = function s(t) {
          t.source === e && "string" == typeof t.data && 0 === t.data.indexOf(a) && d(+t.data.slice(a.length));
        }, e.addEventListener ? e.addEventListener("message", s, !1) : e.attachEvent("onmessage", s), r = function r(t) {
          e.postMessage(a + t, "*");
        }), h.setImmediate = function (e) {
          "function" != typeof e && (e = new Function("" + e));

          for (var t = new Array(arguments.length - 1), n = 0; n < t.length; n++) {
            t[n] = arguments[n + 1];
          }

          var o = {
            callback: e,
            args: t
          };
          return u[c] = o, r(c), c++;
        }, h.clearImmediate = p;
      }

      function p(e) {
        delete u[e];
      }

      function d(e) {
        if (l) setTimeout(d, 0, e);else {
          var t = u[e];

          if (t) {
            l = !0;

            try {
              !function (e) {
                var t = e.callback,
                    n = e.args;

                switch (n.length) {
                  case 0:
                    t();
                    break;

                  case 1:
                    t(n[0]);
                    break;

                  case 2:
                    t(n[0], n[1]);
                    break;

                  case 3:
                    t(n[0], n[1], n[2]);
                    break;

                  default:
                    t.apply(void 0, n);
                }
              }(t);
            } finally {
              p(e), l = !1;
            }
          }
        }
      }
    }("undefined" == typeof self ? void 0 === e ? this : e : self);
  }).call(this, n(8), n(13));
}, function (e, t, n) {
  (function (t) {
    function n(e) {
      try {
        if (!t.localStorage) return !1;
      } catch (e) {
        return !1;
      }

      var n = t.localStorage[e];
      return null != n && "true" === String(n).toLowerCase();
    }

    e.exports = function (e, t) {
      if (n("noDeprecation")) return e;
      var r = !1;
      return function () {
        if (!r) {
          if (n("throwDeprecation")) throw new Error(t);
          n("traceDeprecation") ? console.trace(t) : console.warn(t), r = !0;
        }

        return e.apply(this, arguments);
      };
    };
  }).call(this, n(8));
}, function (e, t, n) {
  "use strict";

  var r = n(71).Transform,
      o = n(15),
      i = n(23);

  function a(e) {
    (e = e || {}).objectMode = !0, e.highWaterMark = 16, r.call(this, e), this._msgpack = e.msgpack;
  }

  function s(e) {
    if (!(this instanceof s)) return (e = e || {}).msgpack = this, new s(e);
    a.call(this, e);
  }

  function c(e) {
    if (!(this instanceof c)) return (e = e || {}).msgpack = this, new c(e);
    a.call(this, e), this._chunks = i();
  }

  o(a, r), o(s, a), s.prototype._transform = function (e, t, n) {
    var r = null;

    try {
      r = this._msgpack.encode(e).slice(0);
    } catch (e) {
      return this.emit("error", e), n();
    }

    this.push(r), n();
  }, o(c, a), c.prototype._transform = function (e, t, n) {
    e && this._chunks.append(e);

    try {
      var r = this._msgpack.decode(this._chunks);

      this.push(r);
    } catch (e) {
      return void (e instanceof this._msgpack.IncompleteBufferError ? n() : this.emit("error", e));
    }

    this._chunks.length > 0 ? this._transform(null, t, n) : n();
  }, e.exports.decoder = c, e.exports.encoder = s;
}, function (e, t, n) {
  (t = e.exports = n(40)).Stream = t, t.Readable = t, t.Writable = n(45), t.Duplex = n(9), t.Transform = n(46), t.PassThrough = n(72);
}, function (e, t, n) {
  "use strict";

  e.exports = i;
  var r = n(46),
      o = n(19);

  function i(e) {
    if (!(this instanceof i)) return new i(e);
    r.call(this, e);
  }

  o.inherits = n(15), o.inherits(i, r), i.prototype._transform = function (e, t, n) {
    n(null, e);
  };
}, function (e, t, n) {
  var r = n(23);

  function o(e) {
    Error.call(this), Error.captureStackTrace && Error.captureStackTrace(this, this.constructor), this.name = this.constructor.name, this.message = e || "unable to decode";
  }

  n(39).inherits(o, Error), e.exports = function (e) {
    return function (e) {
      e instanceof r || (e = r().append(e));
      var t = i(e);
      if (t) return e.consume(t.bytesConsumed), t.value;
      throw new o();
    };

    function t(e, t, n) {
      return t >= n + e;
    }

    function n(e, t) {
      return {
        value: e,
        bytesConsumed: t
      };
    }

    function i(e, r) {
      r = void 0 === r ? 0 : r;
      var o = e.length - r;
      if (o <= 0) return null;
      var i,
          l,
          f,
          h = e.readUInt8(r),
          p = 0;
      if (!function (e, t) {
        var n = function (e) {
          switch (e) {
            case 196:
              return 2;

            case 197:
              return 3;

            case 198:
              return 5;

            case 199:
              return 3;

            case 200:
              return 4;

            case 201:
              return 6;

            case 202:
              return 5;

            case 203:
              return 9;

            case 204:
              return 2;

            case 205:
              return 3;

            case 206:
              return 5;

            case 207:
              return 9;

            case 208:
              return 2;

            case 209:
              return 3;

            case 210:
              return 5;

            case 211:
              return 9;

            case 212:
              return 3;

            case 213:
              return 4;

            case 214:
              return 6;

            case 215:
              return 10;

            case 216:
              return 18;

            case 217:
              return 2;

            case 218:
              return 3;

            case 219:
              return 5;

            case 222:
              return 3;

            default:
              return -1;
          }
        }(e);

        return !(-1 !== n && t < n);
      }(h, o)) return null;

      switch (h) {
        case 192:
          return n(null, 1);

        case 194:
          return n(!1, 1);

        case 195:
          return n(!0, 1);

        case 204:
          return n(p = e.readUInt8(r + 1), 2);

        case 205:
          return n(p = e.readUInt16BE(r + 1), 3);

        case 206:
          return n(p = e.readUInt32BE(r + 1), 5);

        case 207:
          for (f = 7; f >= 0; f--) {
            p += e.readUInt8(r + f + 1) * Math.pow(2, 8 * (7 - f));
          }

          return n(p, 9);

        case 208:
          return n(p = e.readInt8(r + 1), 2);

        case 209:
          return n(p = e.readInt16BE(r + 1), 3);

        case 210:
          return n(p = e.readInt32BE(r + 1), 5);

        case 211:
          return n(p = function (e, t) {
            var n = 128 == (128 & e[t]);
            if (n) for (var r = 1, o = t + 7; o >= t; o--) {
              var i = (255 ^ e[o]) + r;
              e[o] = 255 & i, r = i >> 8;
            }
            var a = e.readUInt32BE(t + 0),
                s = e.readUInt32BE(t + 4);
            return (4294967296 * a + s) * (n ? -1 : 1);
          }(e.slice(r + 1, r + 9), 0), 9);

        case 202:
          return n(p = e.readFloatBE(r + 1), 5);

        case 203:
          return n(p = e.readDoubleBE(r + 1), 9);

        case 217:
          return t(i = e.readUInt8(r + 1), o, 2) ? n(p = e.toString("utf8", r + 2, r + 2 + i), 2 + i) : null;

        case 218:
          return t(i = e.readUInt16BE(r + 1), o, 3) ? n(p = e.toString("utf8", r + 3, r + 3 + i), 3 + i) : null;

        case 219:
          return t(i = e.readUInt32BE(r + 1), o, 5) ? n(p = e.toString("utf8", r + 5, r + 5 + i), 5 + i) : null;

        case 196:
          return t(i = e.readUInt8(r + 1), o, 2) ? n(p = e.slice(r + 2, r + 2 + i), 2 + i) : null;

        case 197:
          return t(i = e.readUInt16BE(r + 1), o, 3) ? n(p = e.slice(r + 3, r + 3 + i), 3 + i) : null;

        case 198:
          return t(i = e.readUInt32BE(r + 1), o, 5) ? n(p = e.slice(r + 5, r + 5 + i), 5 + i) : null;

        case 220:
          return o < 3 ? null : (i = e.readUInt16BE(r + 1), a(e, r, i, 3));

        case 221:
          return o < 5 ? null : (i = e.readUInt32BE(r + 1), a(e, r, i, 5));

        case 222:
          return i = e.readUInt16BE(r + 1), s(e, r, i, 3);

        case 223:
          throw new Error("map too big to decode in JS");

        case 212:
          return c(e, r, 1);

        case 213:
          return c(e, r, 2);

        case 214:
          return c(e, r, 4);

        case 215:
          return c(e, r, 8);

        case 216:
          return c(e, r, 16);

        case 199:
          return i = e.readUInt8(r + 1), l = e.readUInt8(r + 2), t(i, o, 3) ? u(e, r, l, i, 3) : null;

        case 200:
          return i = e.readUInt16BE(r + 1), l = e.readUInt8(r + 3), t(i, o, 4) ? u(e, r, l, i, 4) : null;

        case 201:
          return i = e.readUInt32BE(r + 1), l = e.readUInt8(r + 5), t(i, o, 6) ? u(e, r, l, i, 6) : null;
      }

      if (144 == (240 & h)) return a(e, r, i = 15 & h, 1);
      if (128 == (240 & h)) return s(e, r, i = 15 & h, 1);
      if (160 == (224 & h)) return t(i = 31 & h, o, 1) ? n(p = e.toString("utf8", r + 1, r + i + 1), i + 1) : null;
      if (h >= 224) return n(p = h - 256, 1);
      if (h < 128) return n(h, 1);
      throw new Error("not implemented yet");
    }

    function a(e, t, r, o) {
      var a,
          s = [],
          c = 0;

      for (t += o, a = 0; a < r; a++) {
        var u = i(e, t);
        if (!u) return null;
        s.push(u.value), t += u.bytesConsumed, c += u.bytesConsumed;
      }

      return n(s, o + c);
    }

    function s(e, t, r, o) {
      var a,
          s = {},
          c = 0;

      for (t += o, a = 0; a < r; a++) {
        var u = i(e, t);
        if (!u) return null;
        var l = i(e, t += u.bytesConsumed);
        if (!l) return null;
        s[u.value] = l.value, t += l.bytesConsumed, c += u.bytesConsumed + l.bytesConsumed;
      }

      return n(s, o + c);
    }

    function c(e, t, n) {
      var r = e.readInt8(t + 1);
      return u(e, t, r, n, 2);
    }

    function u(t, r, o, i, a) {
      var s, c;
      if (r += a, o < 0) switch (o) {
        case -1:
          return function (e, t, r) {
            var o, i;

            switch (i = 0, t) {
              case 4:
                o = e.readUInt32BE(0);
                break;

              case 8:
                var a = e.readUInt32BE(0),
                    s = e.readUInt32BE(4);
                i = a / 4, o = (3 & a) * Math.pow(2, 32) + s;
                break;

              case 12:
                throw new Error("timestamp 96 is not yet implemented");
            }

            var c = 1e3 * o + Math.round(i / 1e6);
            return n(new Date(c), t + r);
          }(c = t.slice(r, r + i), i, a);
      }

      for (s = 0; s < e.length; s++) {
        if (o === e[s].type) return c = t.slice(r, r + i), n(e[s].decode(c), a + i);
      }

      throw new Error("unable to find ext type " + o);
    }
  }, e.exports.IncompleteBufferError = o;
}, function (e, t, n) {
  "use strict";

  var r = n(14).Buffer,
      o = n(23);

  function i(e, t) {
    var n;
    return (n = r.allocUnsafe(5))[0] = 202, n.writeFloatBE(e, 1), (t || Math.abs(e - n.readFloatBE(1)) > .1) && ((n = r.allocUnsafe(9))[0] = 203, n.writeDoubleBE(e, 1)), n;
  }

  e.exports = function (e, t, n, a) {
    function s(c, u) {
      var l, f, h;
      if (void 0 === c) throw new Error("undefined is not encodable in msgpack!");
      if (null === c) (l = r.allocUnsafe(1))[0] = 192;else if (!0 === c) (l = r.allocUnsafe(1))[0] = 195;else if (!1 === c) (l = r.allocUnsafe(1))[0] = 194;else if ("string" == typeof c) (f = r.byteLength(c)) < 32 ? ((l = r.allocUnsafe(1 + f))[0] = 160 | f, f > 0 && l.write(c, 1)) : f <= 255 && !n ? ((l = r.allocUnsafe(2 + f))[0] = 217, l[1] = f, l.write(c, 2)) : f <= 65535 ? ((l = r.allocUnsafe(3 + f))[0] = 218, l.writeUInt16BE(f, 1), l.write(c, 3)) : ((l = r.allocUnsafe(5 + f))[0] = 219, l.writeUInt32BE(f, 1), l.write(c, 5));else if (c && (c.readUInt32LE || c instanceof Uint8Array)) c instanceof Uint8Array && (c = r.from(c)), c.length <= 255 ? ((l = r.allocUnsafe(2))[0] = 196, l[1] = c.length) : c.length <= 65535 ? ((l = r.allocUnsafe(3))[0] = 197, l.writeUInt16BE(c.length, 1)) : ((l = r.allocUnsafe(5))[0] = 198, l.writeUInt32BE(c.length, 1)), l = o([l, c]);else if (Array.isArray(c)) c.length < 16 ? (l = r.allocUnsafe(1))[0] = 144 | c.length : c.length < 65536 ? ((l = r.allocUnsafe(3))[0] = 220, l.writeUInt16BE(c.length, 1)) : ((l = r.allocUnsafe(5))[0] = 221, l.writeUInt32BE(c.length, 1)), l = c.reduce(function (e, t) {
        return e.append(s(t, !0)), e;
      }, o().append(l));else {
        if (!a && "function" == typeof c.getDate) return function (e) {
          var t,
              n = 1 * e,
              i = Math.floor(n / 1e3),
              a = 1e6 * (n - 1e3 * i);

          if (a || i > 4294967295) {
            (t = new r(10))[0] = 215, t[1] = -1;
            var s = 4 * a,
                c = i / Math.pow(2, 32),
                u = s + c & 4294967295,
                l = 4294967295 & i;
            t.writeInt32BE(u, 2), t.writeInt32BE(l, 6);
          } else (t = new r(6))[0] = 214, t[1] = -1, t.writeUInt32BE(Math.floor(n / 1e3), 2);

          return o().append(t);
        }(c);
        if ("object" == _typeof(c)) l = function (t) {
          var n,
              i,
              a,
              s = [];

          for (n = 0; n < e.length; n++) {
            if (e[n].check(t)) {
              i = e[n].encode(t);
              break;
            }
          }

          if (!i) return null;
          1 === (a = i.length - 1) ? s.push(212) : 2 === a ? s.push(213) : 4 === a ? s.push(214) : 8 === a ? s.push(215) : 16 === a ? s.push(216) : a < 256 ? (s.push(199), s.push(a)) : a < 65536 ? (s.push(200), s.push(a >> 8), s.push(255 & a)) : (s.push(201), s.push(a >> 24), s.push(a >> 16 & 255), s.push(a >> 8 & 255), s.push(255 & a));
          return o().append(r.from(s)).append(i);
        }(c) || function (e) {
          var t,
              n,
              i = [],
              a = 0;

          for (t in e) {
            e.hasOwnProperty(t) && void 0 !== e[t] && "function" != typeof e[t] && (++a, i.push(s(t, !0)), i.push(s(e[t], !0)));
          }

          a < 16 ? (n = r.allocUnsafe(1))[0] = 128 | a : ((n = r.allocUnsafe(3))[0] = 222, n.writeUInt16BE(a, 1));
          return i.unshift(n), i.reduce(function (e, t) {
            return e.append(t);
          }, o());
        }(c);else if ("number" == typeof c) {
          if ((h = c) !== Math.floor(h)) return i(c, t);
          if (c >= 0) {
            if (c < 128) (l = r.allocUnsafe(1))[0] = c;else if (c < 256) (l = r.allocUnsafe(2))[0] = 204, l[1] = c;else if (c < 65536) (l = r.allocUnsafe(3))[0] = 205, l.writeUInt16BE(c, 1);else if (c <= 4294967295) (l = r.allocUnsafe(5))[0] = 206, l.writeUInt32BE(c, 1);else {
              if (!(c <= 9007199254740991)) return i(c, !0);
              (l = r.allocUnsafe(9))[0] = 207, function (e, t) {
                for (var n = 7; n >= 0; n--) {
                  e[n + 1] = 255 & t, t /= 256;
                }
              }(l, c);
            }
          } else if (c >= -32) (l = r.allocUnsafe(1))[0] = 256 + c;else if (c >= -128) (l = r.allocUnsafe(2))[0] = 208, l.writeInt8(c, 1);else if (c >= -32768) (l = r.allocUnsafe(3))[0] = 209, l.writeInt16BE(c, 1);else if (c > -214748365) (l = r.allocUnsafe(5))[0] = 210, l.writeInt32BE(c, 1);else {
            if (!(c >= -9007199254740991)) return i(c, !0);
            (l = r.allocUnsafe(9))[0] = 211, function (e, t, n) {
              var r = n < 0;
              r && (n = Math.abs(n));
              var o = n % 4294967296,
                  i = n / 4294967296;
              if (e.writeUInt32BE(Math.floor(i), t + 0), e.writeUInt32BE(o, t + 4), r) for (var a = 1, s = t + 7; s >= t; s--) {
                var c = (255 ^ e[s]) + a;
                e[s] = 255 & c, a = c >> 8;
              }
            }(l, 1, c);
          }
        }
      }
      if (!l) throw new Error("not implemented yet");
      return u ? l : l.slice();
    }

    return s;
  };
}, function (e, t, n) {
  "use strict";

  var r = this && this.__awaiter || function (e, t, n, r) {
    return new (n || (n = Promise))(function (o, i) {
      function a(e) {
        try {
          c(r.next(e));
        } catch (e) {
          i(e);
        }
      }

      function s(e) {
        try {
          c(r.throw(e));
        } catch (e) {
          i(e);
        }
      }

      function c(e) {
        var t;
        e.done ? o(e.value) : (t = e.value, t instanceof n ? t : new n(function (e) {
          e(t);
        })).then(a, s);
      }

      c((r = r.apply(e, t || [])).next());
    });
  },
      o = this && this.__generator || function (e, t) {
    var n,
        r,
        o,
        i,
        a = {
      label: 0,
      sent: function sent() {
        if (1 & o[0]) throw o[1];
        return o[1];
      },
      trys: [],
      ops: []
    };
    return i = {
      next: s(0),
      throw: s(1),
      return: s(2)
    }, "function" == typeof Symbol && (i[Symbol.iterator] = function () {
      return this;
    }), i;

    function s(i) {
      return function (s) {
        return function (i) {
          if (n) throw new TypeError("Generator is already executing.");

          for (; a;) {
            try {
              if (n = 1, r && (o = 2 & i[0] ? r.return : i[0] ? r.throw || ((o = r.return) && o.call(r), 0) : r.next) && !(o = o.call(r, i[1])).done) return o;

              switch (r = 0, o && (i = [2 & i[0], o.value]), i[0]) {
                case 0:
                case 1:
                  o = i;
                  break;

                case 4:
                  return a.label++, {
                    value: i[1],
                    done: !1
                  };

                case 5:
                  a.label++, r = i[1], i = [0];
                  continue;

                case 7:
                  i = a.ops.pop(), a.trys.pop();
                  continue;

                default:
                  if (!(o = a.trys, (o = o.length > 0 && o[o.length - 1]) || 6 !== i[0] && 2 !== i[0])) {
                    a = 0;
                    continue;
                  }

                  if (3 === i[0] && (!o || i[1] > o[0] && i[1] < o[3])) {
                    a.label = i[1];
                    break;
                  }

                  if (6 === i[0] && a.label < o[1]) {
                    a.label = o[1], o = i;
                    break;
                  }

                  if (o && a.label < o[2]) {
                    a.label = o[2], a.ops.push(i);
                    break;
                  }

                  o[2] && a.ops.pop(), a.trys.pop();
                  continue;
              }

              i = t.call(e, a);
            } catch (e) {
              i = [6, e], r = 0;
            } finally {
              n = o = 0;
            }
          }

          if (5 & i[0]) throw i[1];
          return {
            value: i[0] ? i[1] : void 0,
            done: !0
          };
        }([i, s]);
      };
    }
  };

  Object.defineProperty(t, "__esModule", {
    value: !0
  });

  var i = n(12),
      a = n(76),
      s = n(16),
      c = function () {
    function e(e, t) {
      this.nextBatchId = 2, this.browserRendererId = e, this.logger = t;
    }

    return e.getOrCreate = function (t) {
      return e.instance || (e.instance = new e(0, t)), this.instance;
    }, e.prototype.processBatch = function (e, t, n) {
      return r(this, void 0, void 0, function () {
        var r;
        return o(this, function (o) {
          switch (o.label) {
            case 0:
              return e < this.nextBatchId ? [4, this.completeBatch(n, e)] : [3, 2];

            case 1:
              return o.sent(), this.logger.log(s.LogLevel.Debug, "Batch " + e + " already processed. Waiting for batch " + this.nextBatchId + "."), [2];

            case 2:
              return e > this.nextBatchId ? this.fatalError ? (this.logger.log(s.LogLevel.Debug, "Received a new batch " + e + " but errored out on a previous batch " + (this.nextBatchId - 1)), [4, n.send("OnRenderCompleted", this.nextBatchId - 1, this.fatalError.toString())]) : [3, 4] : [3, 5];

            case 3:
              return o.sent(), [2];

            case 4:
              return this.logger.log(s.LogLevel.Debug, "Waiting for batch " + this.nextBatchId + ". Batch " + e + " not processed."), [2];

            case 5:
              return o.trys.push([5, 7,, 8]), this.nextBatchId++, this.logger.log(s.LogLevel.Debug, "Applying batch " + e + "."), i.renderBatch(this.browserRendererId, new a.OutOfProcessRenderBatch(t)), [4, this.completeBatch(n, e)];

            case 6:
              return o.sent(), [3, 8];

            case 7:
              throw r = o.sent(), this.fatalError = r.toString(), this.logger.log(s.LogLevel.Error, "There was an error applying batch " + e + "."), n.send("OnRenderCompleted", e, r.toString()), r;

            case 8:
              return [2];
          }
        });
      });
    }, e.prototype.getLastBatchid = function () {
      return this.nextBatchId - 1;
    }, e.prototype.completeBatch = function (e, t) {
      return r(this, void 0, void 0, function () {
        return o(this, function (n) {
          switch (n.label) {
            case 0:
              return n.trys.push([0, 2,, 3]), [4, e.send("OnRenderCompleted", t, null)];

            case 1:
              return n.sent(), [3, 3];

            case 2:
              return n.sent(), this.logger.log(s.LogLevel.Warning, "Failed to deliver completion notification for render '" + t + "'."), [3, 3];

            case 3:
              return [2];
          }
        });
      });
    }, e;
  }();

  t.RenderQueue = c;
}, function (e, t, n) {
  "use strict";

  Object.defineProperty(t, "__esModule", {
    value: !0
  });

  var r = n(77),
      o = n(78),
      i = function () {
    function e(e) {
      this.batchData = e;
      var t = new u(e);
      this.arrayRangeReader = new l(e), this.arrayBuilderSegmentReader = new f(e), this.diffReader = new a(e), this.editReader = new s(e, t), this.frameReader = new c(e, t);
    }

    return e.prototype.updatedComponents = function () {
      return o.readInt32LE(this.batchData, this.batchData.length - 20);
    }, e.prototype.referenceFrames = function () {
      return o.readInt32LE(this.batchData, this.batchData.length - 16);
    }, e.prototype.disposedComponentIds = function () {
      return o.readInt32LE(this.batchData, this.batchData.length - 12);
    }, e.prototype.disposedEventHandlerIds = function () {
      return o.readInt32LE(this.batchData, this.batchData.length - 8);
    }, e.prototype.updatedComponentsEntry = function (e, t) {
      var n = e + 4 * t;
      return o.readInt32LE(this.batchData, n);
    }, e.prototype.referenceFramesEntry = function (e, t) {
      return e + 20 * t;
    }, e.prototype.disposedComponentIdsEntry = function (e, t) {
      var n = e + 4 * t;
      return o.readInt32LE(this.batchData, n);
    }, e.prototype.disposedEventHandlerIdsEntry = function (e, t) {
      var n = e + 8 * t;
      return o.readUint64LE(this.batchData, n);
    }, e;
  }();

  t.OutOfProcessRenderBatch = i;

  var a = function () {
    function e(e) {
      this.batchDataUint8 = e;
    }

    return e.prototype.componentId = function (e) {
      return o.readInt32LE(this.batchDataUint8, e);
    }, e.prototype.edits = function (e) {
      return e + 4;
    }, e.prototype.editsEntry = function (e, t) {
      return e + 16 * t;
    }, e;
  }(),
      s = function () {
    function e(e, t) {
      this.batchDataUint8 = e, this.stringReader = t;
    }

    return e.prototype.editType = function (e) {
      return o.readInt32LE(this.batchDataUint8, e);
    }, e.prototype.siblingIndex = function (e) {
      return o.readInt32LE(this.batchDataUint8, e + 4);
    }, e.prototype.newTreeIndex = function (e) {
      return o.readInt32LE(this.batchDataUint8, e + 8);
    }, e.prototype.moveToSiblingIndex = function (e) {
      return o.readInt32LE(this.batchDataUint8, e + 8);
    }, e.prototype.removedAttributeName = function (e) {
      var t = o.readInt32LE(this.batchDataUint8, e + 12);
      return this.stringReader.readString(t);
    }, e;
  }(),
      c = function () {
    function e(e, t) {
      this.batchDataUint8 = e, this.stringReader = t;
    }

    return e.prototype.frameType = function (e) {
      return o.readInt32LE(this.batchDataUint8, e);
    }, e.prototype.subtreeLength = function (e) {
      return o.readInt32LE(this.batchDataUint8, e + 4);
    }, e.prototype.elementReferenceCaptureId = function (e) {
      var t = o.readInt32LE(this.batchDataUint8, e + 4);
      return this.stringReader.readString(t);
    }, e.prototype.componentId = function (e) {
      return o.readInt32LE(this.batchDataUint8, e + 8);
    }, e.prototype.elementName = function (e) {
      var t = o.readInt32LE(this.batchDataUint8, e + 8);
      return this.stringReader.readString(t);
    }, e.prototype.textContent = function (e) {
      var t = o.readInt32LE(this.batchDataUint8, e + 4);
      return this.stringReader.readString(t);
    }, e.prototype.markupContent = function (e) {
      var t = o.readInt32LE(this.batchDataUint8, e + 4);
      return this.stringReader.readString(t);
    }, e.prototype.attributeName = function (e) {
      var t = o.readInt32LE(this.batchDataUint8, e + 4);
      return this.stringReader.readString(t);
    }, e.prototype.attributeValue = function (e) {
      var t = o.readInt32LE(this.batchDataUint8, e + 8);
      return this.stringReader.readString(t);
    }, e.prototype.attributeEventHandlerId = function (e) {
      return o.readUint64LE(this.batchDataUint8, e + 12);
    }, e;
  }(),
      u = function () {
    function e(e) {
      this.batchDataUint8 = e, this.stringTableStartIndex = o.readInt32LE(e, e.length - 4);
    }

    return e.prototype.readString = function (e) {
      if (-1 === e) return null;
      var t = o.readInt32LE(this.batchDataUint8, this.stringTableStartIndex + 4 * e),
          n = o.readLEB128(this.batchDataUint8, t),
          i = t + o.numLEB128Bytes(n),
          a = new Uint8Array(this.batchDataUint8.buffer, this.batchDataUint8.byteOffset + i, n);
      return r.decodeUtf8(a);
    }, e;
  }(),
      l = function () {
    function e(e) {
      this.batchDataUint8 = e;
    }

    return e.prototype.count = function (e) {
      return o.readInt32LE(this.batchDataUint8, e);
    }, e.prototype.values = function (e) {
      return e + 4;
    }, e;
  }(),
      f = function () {
    function e(e) {
      this.batchDataUint8 = e;
    }

    return e.prototype.offset = function (e) {
      return 0;
    }, e.prototype.count = function (e) {
      return o.readInt32LE(this.batchDataUint8, e);
    }, e.prototype.values = function (e) {
      return e + 4;
    }, e;
  }();
}, function (e, t, n) {
  "use strict";

  Object.defineProperty(t, "__esModule", {
    value: !0
  });
  var r = "function" == typeof TextDecoder ? new TextDecoder("utf-8") : null;
  t.decodeUtf8 = r ? r.decode.bind(r) : function (e) {
    var t = 0,
        n = e.length,
        r = [],
        o = [];

    for (; t < n;) {
      var i = e[t++];
      if (0 === i) break;
      if (0 == (128 & i)) r.push(i);else if (192 == (224 & i)) {
        var a = 63 & e[t++];
        r.push((31 & i) << 6 | a);
      } else if (224 == (240 & i)) {
        a = 63 & e[t++];
        var s = 63 & e[t++];
        r.push((31 & i) << 12 | a << 6 | s);
      } else if (240 == (248 & i)) {
        a = 63 & e[t++], s = 63 & e[t++];
        var c = 63 & e[t++],
            u = (7 & i) << 18 | a << 12 | s << 6 | c;
        u > 65535 && (u -= 65536, r.push(u >>> 10 & 1023 | 55296), u = 56320 | 1023 & u), r.push(u);
      }
      r.length > 1024 && (o.push(String.fromCharCode.apply(null, r)), r.length = 0);
    }

    return o.push(String.fromCharCode.apply(null, r)), o.join("");
  };
}, function (e, t, n) {
  "use strict";

  Object.defineProperty(t, "__esModule", {
    value: !0
  });
  var r = Math.pow(2, 32),
      o = Math.pow(2, 21) - 1;

  function i(e, t) {
    return e[t] + (e[t + 1] << 8) + (e[t + 2] << 16) + (e[t + 3] << 24 >>> 0);
  }

  t.readInt32LE = function (e, t) {
    return e[t] | e[t + 1] << 8 | e[t + 2] << 16 | e[t + 3] << 24;
  }, t.readUint32LE = i, t.readUint64LE = function (e, t) {
    var n = i(e, t + 4);
    if (n > o) throw new Error("Cannot read uint64 with high order part " + n + ", because the result would exceed Number.MAX_SAFE_INTEGER.");
    return n * r + i(e, t);
  }, t.readLEB128 = function (e, t) {
    for (var n = 0, r = 0, o = 0; o < 4; o++) {
      var i = e[t + o];
      if (n |= (127 & i) << r, i < 128) break;
      r += 7;
    }

    return n;
  }, t.numLEB128Bytes = function (e) {
    return e < 128 ? 1 : e < 16384 ? 2 : e < 2097152 ? 3 : 4;
  };
}, function (e, t, n) {
  "use strict";

  Object.defineProperty(t, "__esModule", {
    value: !0
  });

  var r = n(16),
      o = function () {
    function e() {}

    return e.prototype.log = function (e, t) {}, e.instance = new e(), e;
  }();

  t.NullLogger = o;

  var i = function () {
    function e(e) {
      this.minimumLogLevel = e;
    }

    return e.prototype.log = function (e, t) {
      if (e >= this.minimumLogLevel) switch (e) {
        case r.LogLevel.Critical:
        case r.LogLevel.Error:
          console.error("[" + new Date().toISOString() + "] " + r.LogLevel[e] + ": " + t);
          break;

        case r.LogLevel.Warning:
          console.warn("[" + new Date().toISOString() + "] " + r.LogLevel[e] + ": " + t);
          break;

        case r.LogLevel.Information:
          console.info("[" + new Date().toISOString() + "] " + r.LogLevel[e] + ": " + t);
          break;

        default:
          console.log("[" + new Date().toISOString() + "] " + r.LogLevel[e] + ": " + t);
      }
    }, e;
  }();

  t.ConsoleLogger = i;
}, function (e, t, n) {
  "use strict";

  var r = this && this.__awaiter || function (e, t, n, r) {
    return new (n || (n = Promise))(function (o, i) {
      function a(e) {
        try {
          c(r.next(e));
        } catch (e) {
          i(e);
        }
      }

      function s(e) {
        try {
          c(r.throw(e));
        } catch (e) {
          i(e);
        }
      }

      function c(e) {
        var t;
        e.done ? o(e.value) : (t = e.value, t instanceof n ? t : new n(function (e) {
          e(t);
        })).then(a, s);
      }

      c((r = r.apply(e, t || [])).next());
    });
  },
      o = this && this.__generator || function (e, t) {
    var n,
        r,
        o,
        i,
        a = {
      label: 0,
      sent: function sent() {
        if (1 & o[0]) throw o[1];
        return o[1];
      },
      trys: [],
      ops: []
    };
    return i = {
      next: s(0),
      throw: s(1),
      return: s(2)
    }, "function" == typeof Symbol && (i[Symbol.iterator] = function () {
      return this;
    }), i;

    function s(i) {
      return function (s) {
        return function (i) {
          if (n) throw new TypeError("Generator is already executing.");

          for (; a;) {
            try {
              if (n = 1, r && (o = 2 & i[0] ? r.return : i[0] ? r.throw || ((o = r.return) && o.call(r), 0) : r.next) && !(o = o.call(r, i[1])).done) return o;

              switch (r = 0, o && (i = [2 & i[0], o.value]), i[0]) {
                case 0:
                case 1:
                  o = i;
                  break;

                case 4:
                  return a.label++, {
                    value: i[1],
                    done: !1
                  };

                case 5:
                  a.label++, r = i[1], i = [0];
                  continue;

                case 7:
                  i = a.ops.pop(), a.trys.pop();
                  continue;

                default:
                  if (!(o = a.trys, (o = o.length > 0 && o[o.length - 1]) || 6 !== i[0] && 2 !== i[0])) {
                    a = 0;
                    continue;
                  }

                  if (3 === i[0] && (!o || i[1] > o[0] && i[1] < o[3])) {
                    a.label = i[1];
                    break;
                  }

                  if (6 === i[0] && a.label < o[1]) {
                    a.label = o[1], o = i;
                    break;
                  }

                  if (o && a.label < o[2]) {
                    a.label = o[2], a.ops.push(i);
                    break;
                  }

                  o[2] && a.ops.pop(), a.trys.pop();
                  continue;
              }

              i = t.call(e, a);
            } catch (e) {
              i = [6, e], r = 0;
            } finally {
              n = o = 0;
            }
          }

          if (5 & i[0]) throw i[1];
          return {
            value: i[0] ? i[1] : void 0,
            done: !0
          };
        }([i, s]);
      };
    }
  };

  Object.defineProperty(t, "__esModule", {
    value: !0
  });

  var i = n(6),
      a = n(7),
      s = function () {
    function e(e) {
      this.circuitId = void 0, this.components = e;
    }

    return e.prototype.reconnect = function (e) {
      if (!this.circuitId) throw new Error("Circuit host not initialized.");
      return e.invoke("ConnectCircuit", this.circuitId);
    }, e.prototype.initialize = function (e) {
      if (this.circuitId) throw new Error("Circuit host '" + this.circuitId + "' already initialized.");
      this.circuitId = e;
    }, e.prototype.startCircuit = function (e) {
      return r(this, void 0, void 0, function () {
        var t;
        return o(this, function (n) {
          switch (n.label) {
            case 0:
              return [4, e.invoke("StartCircuit", i.internalFunctions.getBaseURI(), i.internalFunctions.getLocationHref(), JSON.stringify(this.components.map(function (e) {
                return e.toRecord();
              })))];

            case 1:
              return (t = n.sent()) ? (this.initialize(t), [2, !0]) : [2, !1];
          }
        });
      });
    }, e.prototype.resolveElement = function (e) {
      var t = Number.parseInt(e);
      if (Number.isNaN(t)) throw new Error("Invalid sequence number '" + e + "'.");
      return a.toLogicalRootCommentElement(this.components[t].start, this.components[t].end);
    }, e;
  }();

  t.CircuitDescriptor = s;
}, function (e, t, n) {
  "use strict";

  var r = this && this.__assign || function () {
    return (r = Object.assign || function (e) {
      for (var t, n = 1, r = arguments.length; n < r; n++) {
        for (var o in t = arguments[n]) {
          Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
        }
      }

      return e;
    }).apply(this, arguments);
  };

  Object.defineProperty(t, "__esModule", {
    value: !0
  });
  var o = n(16);

  t.resolveOptions = function (e) {
    var t = r(r({}, i), e);
    return e && e.reconnectionOptions && (t.reconnectionOptions = r(r({}, i.reconnectionOptions), e.reconnectionOptions)), t;
  };

  var i = {
    configureSignalR: function configureSignalR(e) {},
    logLevel: o.LogLevel.Warning,
    reconnectionOptions: {
      maxRetries: 8,
      retryIntervalMilliseconds: 2e4,
      dialogId: "components-reconnect-modal"
    }
  };
}, function (e, t, n) {
  "use strict";

  var r = this && this.__awaiter || function (e, t, n, r) {
    return new (n || (n = Promise))(function (o, i) {
      function a(e) {
        try {
          c(r.next(e));
        } catch (e) {
          i(e);
        }
      }

      function s(e) {
        try {
          c(r.throw(e));
        } catch (e) {
          i(e);
        }
      }

      function c(e) {
        var t;
        e.done ? o(e.value) : (t = e.value, t instanceof n ? t : new n(function (e) {
          e(t);
        })).then(a, s);
      }

      c((r = r.apply(e, t || [])).next());
    });
  },
      o = this && this.__generator || function (e, t) {
    var n,
        r,
        o,
        i,
        a = {
      label: 0,
      sent: function sent() {
        if (1 & o[0]) throw o[1];
        return o[1];
      },
      trys: [],
      ops: []
    };
    return i = {
      next: s(0),
      throw: s(1),
      return: s(2)
    }, "function" == typeof Symbol && (i[Symbol.iterator] = function () {
      return this;
    }), i;

    function s(i) {
      return function (s) {
        return function (i) {
          if (n) throw new TypeError("Generator is already executing.");

          for (; a;) {
            try {
              if (n = 1, r && (o = 2 & i[0] ? r.return : i[0] ? r.throw || ((o = r.return) && o.call(r), 0) : r.next) && !(o = o.call(r, i[1])).done) return o;

              switch (r = 0, o && (i = [2 & i[0], o.value]), i[0]) {
                case 0:
                case 1:
                  o = i;
                  break;

                case 4:
                  return a.label++, {
                    value: i[1],
                    done: !1
                  };

                case 5:
                  a.label++, r = i[1], i = [0];
                  continue;

                case 7:
                  i = a.ops.pop(), a.trys.pop();
                  continue;

                default:
                  if (!(o = a.trys, (o = o.length > 0 && o[o.length - 1]) || 6 !== i[0] && 2 !== i[0])) {
                    a = 0;
                    continue;
                  }

                  if (3 === i[0] && (!o || i[1] > o[0] && i[1] < o[3])) {
                    a.label = i[1];
                    break;
                  }

                  if (6 === i[0] && a.label < o[1]) {
                    a.label = o[1], o = i;
                    break;
                  }

                  if (o && a.label < o[2]) {
                    a.label = o[2], a.ops.push(i);
                    break;
                  }

                  o[2] && a.ops.pop(), a.trys.pop();
                  continue;
              }

              i = t.call(e, a);
            } catch (e) {
              i = [6, e], r = 0;
            } finally {
              n = o = 0;
            }
          }

          if (5 & i[0]) throw i[1];
          return {
            value: i[0] ? i[1] : void 0,
            done: !0
          };
        }([i, s]);
      };
    }
  };

  Object.defineProperty(t, "__esModule", {
    value: !0
  });

  var i = n(83),
      a = n(84),
      s = n(16),
      c = function () {
    function e(e, t, n) {
      this._currentReconnectionProcess = null, this._logger = e, this._reconnectionDisplay = t, this._reconnectCallback = n || function () {
        return window.Blazor.reconnect();
      };
    }

    return e.prototype.onConnectionDown = function (e, t) {
      if (!this._reconnectionDisplay) {
        var n = document.getElementById(e.dialogId);
        this._reconnectionDisplay = n ? new a.UserSpecifiedDisplay(n, e.maxRetries, document) : new i.DefaultReconnectDisplay(e.dialogId, e.maxRetries, document, this._logger);
      }

      this._currentReconnectionProcess || (this._currentReconnectionProcess = new u(e, this._logger, this._reconnectCallback, this._reconnectionDisplay));
    }, e.prototype.onConnectionUp = function () {
      this._currentReconnectionProcess && (this._currentReconnectionProcess.dispose(), this._currentReconnectionProcess = null);
    }, e;
  }();

  t.DefaultReconnectionHandler = c;

  var u = function () {
    function e(e, t, n, r) {
      this.logger = t, this.reconnectCallback = n, this.isDisposed = !1, this.reconnectDisplay = r, this.reconnectDisplay.show(), this.attemptPeriodicReconnection(e);
    }

    return e.prototype.dispose = function () {
      this.isDisposed = !0, this.reconnectDisplay.hide();
    }, e.prototype.attemptPeriodicReconnection = function (t) {
      return r(this, void 0, void 0, function () {
        var n, r, i;
        return o(this, function (o) {
          switch (o.label) {
            case 0:
              n = 0, o.label = 1;

            case 1:
              return n < t.maxRetries ? (this.reconnectDisplay.update(n + 1), r = 0 == n && t.retryIntervalMilliseconds > e.MaximumFirstRetryInterval ? e.MaximumFirstRetryInterval : t.retryIntervalMilliseconds, [4, this.delay(r)]) : [3, 7];

            case 2:
              if (o.sent(), this.isDisposed) return [3, 7];
              o.label = 3;

            case 3:
              return o.trys.push([3, 5,, 6]), [4, this.reconnectCallback()];

            case 4:
              return o.sent() || this.reconnectDisplay.rejected(), [2];

            case 5:
              return i = o.sent(), this.logger.log(s.LogLevel.Error, i), [3, 6];

            case 6:
              return n++, [3, 1];

            case 7:
              return this.reconnectDisplay.failed(), [2];
          }
        });
      });
    }, e.prototype.delay = function (e) {
      return new Promise(function (t) {
        return setTimeout(t, e);
      });
    }, e.MaximumFirstRetryInterval = 3e3, e;
  }();
}, function (e, t, n) {
  "use strict";

  var r = this && this.__awaiter || function (e, t, n, r) {
    return new (n || (n = Promise))(function (o, i) {
      function a(e) {
        try {
          c(r.next(e));
        } catch (e) {
          i(e);
        }
      }

      function s(e) {
        try {
          c(r.throw(e));
        } catch (e) {
          i(e);
        }
      }

      function c(e) {
        var t;
        e.done ? o(e.value) : (t = e.value, t instanceof n ? t : new n(function (e) {
          e(t);
        })).then(a, s);
      }

      c((r = r.apply(e, t || [])).next());
    });
  },
      o = this && this.__generator || function (e, t) {
    var n,
        r,
        o,
        i,
        a = {
      label: 0,
      sent: function sent() {
        if (1 & o[0]) throw o[1];
        return o[1];
      },
      trys: [],
      ops: []
    };
    return i = {
      next: s(0),
      throw: s(1),
      return: s(2)
    }, "function" == typeof Symbol && (i[Symbol.iterator] = function () {
      return this;
    }), i;

    function s(i) {
      return function (s) {
        return function (i) {
          if (n) throw new TypeError("Generator is already executing.");

          for (; a;) {
            try {
              if (n = 1, r && (o = 2 & i[0] ? r.return : i[0] ? r.throw || ((o = r.return) && o.call(r), 0) : r.next) && !(o = o.call(r, i[1])).done) return o;

              switch (r = 0, o && (i = [2 & i[0], o.value]), i[0]) {
                case 0:
                case 1:
                  o = i;
                  break;

                case 4:
                  return a.label++, {
                    value: i[1],
                    done: !1
                  };

                case 5:
                  a.label++, r = i[1], i = [0];
                  continue;

                case 7:
                  i = a.ops.pop(), a.trys.pop();
                  continue;

                default:
                  if (!(o = a.trys, (o = o.length > 0 && o[o.length - 1]) || 6 !== i[0] && 2 !== i[0])) {
                    a = 0;
                    continue;
                  }

                  if (3 === i[0] && (!o || i[1] > o[0] && i[1] < o[3])) {
                    a.label = i[1];
                    break;
                  }

                  if (6 === i[0] && a.label < o[1]) {
                    a.label = o[1], o = i;
                    break;
                  }

                  if (o && a.label < o[2]) {
                    a.label = o[2], a.ops.push(i);
                    break;
                  }

                  o[2] && a.ops.pop(), a.trys.pop();
                  continue;
              }

              i = t.call(e, a);
            } catch (e) {
              i = [6, e], r = 0;
            } finally {
              n = o = 0;
            }
          }

          if (5 & i[0]) throw i[1];
          return {
            value: i[0] ? i[1] : void 0,
            done: !0
          };
        }([i, s]);
      };
    }
  };

  Object.defineProperty(t, "__esModule", {
    value: !0
  });

  var i = n(16),
      a = function () {
    function e(e, t, n, a) {
      var s = this;
      this.maxRetries = t, this.document = n, this.logger = a, this.addedToDom = !1, this.modal = this.document.createElement("div"), this.modal.id = e, this.maxRetries = t;
      this.modal.style.cssText = ["position: fixed", "top: 0", "right: 0", "bottom: 0", "left: 0", "z-index: 1050", "display: none", "overflow: hidden", "background-color: #fff", "opacity: 0.8", "text-align: center", "font-weight: bold", "transition: visibility 0s linear 500ms"].join(";"), this.modal.innerHTML = '<h5 style="margin-top: 20px"></h5><button style="margin:5px auto 5px">Retry</button><p>Alternatively, <a href>reload</a></p>', this.message = this.modal.querySelector("h5"), this.button = this.modal.querySelector("button"), this.reloadParagraph = this.modal.querySelector("p"), this.loader = this.getLoader(), this.message.after(this.loader), this.button.addEventListener("click", function () {
        return r(s, void 0, void 0, function () {
          var e;
          return o(this, function (t) {
            switch (t.label) {
              case 0:
                this.show(), t.label = 1;

              case 1:
                return t.trys.push([1, 3,, 4]), [4, window.Blazor.reconnect()];

              case 2:
                return t.sent() || this.rejected(), [3, 4];

              case 3:
                return e = t.sent(), this.logger.log(i.LogLevel.Error, e), this.failed(), [3, 4];

              case 4:
                return [2];
            }
          });
        });
      }), this.reloadParagraph.querySelector("a").addEventListener("click", function () {
        return location.reload();
      });
    }

    return e.prototype.show = function () {
      var e = this;
      this.addedToDom || (this.addedToDom = !0, this.document.body.appendChild(this.modal)), this.modal.style.display = "block", this.loader.style.display = "inline-block", this.button.style.display = "none", this.reloadParagraph.style.display = "none", this.message.textContent = "Attempting to reconnect to the server...", this.modal.style.visibility = "hidden", setTimeout(function () {
        e.modal.style.visibility = "visible";
      }, 0);
    }, e.prototype.update = function (e) {
      this.message.textContent = "Attempting to reconnect to the server: " + e + " of " + this.maxRetries;
    }, e.prototype.hide = function () {
      this.modal.style.display = "none";
    }, e.prototype.failed = function () {
      this.button.style.display = "block", this.reloadParagraph.style.display = "none", this.loader.style.display = "none", this.message.innerHTML = "Reconnection failed. Try <a href>reloading</a> the page if you're unable to reconnect.", this.message.querySelector("a").addEventListener("click", function () {
        return location.reload();
      });
    }, e.prototype.rejected = function () {
      this.button.style.display = "none", this.reloadParagraph.style.display = "none", this.loader.style.display = "none", this.message.innerHTML = "Could not reconnect to the server. <a href>Reload</a> the page to restore functionality.", this.message.querySelector("a").addEventListener("click", function () {
        return location.reload();
      });
    }, e.prototype.getLoader = function () {
      var e = this.document.createElement("div");
      return e.style.cssText = ["border: 0.3em solid #f3f3f3", "border-top: 0.3em solid #3498db", "border-radius: 50%", "width: 2em", "height: 2em", "display: inline-block"].join(";"), e.animate([{
        transform: "rotate(0deg)"
      }, {
        transform: "rotate(360deg)"
      }], {
        duration: 2e3,
        iterations: 1 / 0
      }), e;
    }, e;
  }();

  t.DefaultReconnectDisplay = a;
}, function (e, t, n) {
  "use strict";

  Object.defineProperty(t, "__esModule", {
    value: !0
  });

  var r = function () {
    function e(t, n, r) {
      this.dialog = t, this.maxRetries = n, this.document = r, this.document = r;
      var o = this.document.getElementById(e.MaxRetriesId);
      o && (o.innerText = this.maxRetries.toString());
    }

    return e.prototype.show = function () {
      this.removeClasses(), this.dialog.classList.add(e.ShowClassName);
    }, e.prototype.update = function (t) {
      var n = this.document.getElementById(e.CurrentAttemptId);
      n && (n.innerText = t.toString());
    }, e.prototype.hide = function () {
      this.removeClasses(), this.dialog.classList.add(e.HideClassName);
    }, e.prototype.failed = function () {
      this.removeClasses(), this.dialog.classList.add(e.FailedClassName);
    }, e.prototype.rejected = function () {
      this.removeClasses(), this.dialog.classList.add(e.RejectedClassName);
    }, e.prototype.removeClasses = function () {
      this.dialog.classList.remove(e.ShowClassName, e.HideClassName, e.FailedClassName, e.RejectedClassName);
    }, e.ShowClassName = "components-reconnect-show", e.HideClassName = "components-reconnect-hide", e.FailedClassName = "components-reconnect-failed", e.RejectedClassName = "components-reconnect-rejected", e.MaxRetriesId = "components-reconnect-max-retries", e.CurrentAttemptId = "components-reconnect-current-attempt", e;
  }();

  t.UserSpecifiedDisplay = r;
}, function (e, t, n) {
  "use strict";

  n.r(t), n.d(t, "VERSION", function () {
    return l;
  }), n.d(t, "MessagePackHubProtocol", function () {
    return u;
  });

  var r = n(10),
      o = n(11),
      i = n(2),
      a = function () {
    function e() {}

    return e.write = function (e) {
      var t = e.byteLength || e.length,
          n = [];

      do {
        var r = 127 & t;
        (t >>= 7) > 0 && (r |= 128), n.push(r);
      } while (t > 0);

      t = e.byteLength || e.length;
      var o = new Uint8Array(n.length + t);
      return o.set(n, 0), o.set(e, n.length), o.buffer;
    }, e.parse = function (e) {
      for (var t = [], n = new Uint8Array(e), r = [0, 7, 14, 21, 28], o = 0; o < e.byteLength;) {
        var i = 0,
            a = 0,
            s = void 0;

        do {
          a |= (127 & (s = n[o + i])) << r[i], i++;
        } while (i < Math.min(5, e.byteLength - o) && 0 != (128 & s));

        if (0 != (128 & s) && i < 5) throw new Error("Cannot read message size.");
        if (5 === i && s > 7) throw new Error("Messages bigger than 2GB are not supported.");
        if (!(n.byteLength >= o + i + a)) throw new Error("Incomplete message.");
        t.push(n.slice ? n.slice(o + i, o + i + a) : n.subarray(o + i, o + i + a)), o = o + i + a;
      }

      return t;
    }, e;
  }();

  var s = Object.assign || function (e) {
    for (var t, n = 1, r = arguments.length; n < r; n++) {
      for (var o in t = arguments[n]) {
        Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
      }
    }

    return e;
  },
      c = new Uint8Array([145, i.MessageType.Ping]),
      u = function () {
    function e(e) {
      this.name = "messagepack", this.version = 1, this.transferFormat = i.TransferFormat.Binary, this.errorResult = 1, this.voidResult = 2, this.nonVoidResult = 3, e && (this.messagePackOptions = s({}, e, {
        compatibilityMode: !1
      }));
    }

    return e.prototype.parseMessages = function (e, t) {
      if (!(e instanceof r.Buffer || (n = e, n && "undefined" != typeof ArrayBuffer && (n instanceof ArrayBuffer || n.constructor && "ArrayBuffer" === n.constructor.name)))) throw new Error("Invalid input for MessagePack hub protocol. Expected an ArrayBuffer or Buffer.");
      var n;
      null === t && (t = i.NullLogger.instance);

      for (var o = [], s = 0, c = a.parse(e); s < c.length; s++) {
        var u = c[s],
            l = this.parseMessage(u, t);
        l && o.push(l);
      }

      return o;
    }, e.prototype.writeMessage = function (e) {
      switch (e.type) {
        case i.MessageType.Invocation:
          return this.writeInvocation(e);

        case i.MessageType.StreamInvocation:
          return this.writeStreamInvocation(e);

        case i.MessageType.StreamItem:
          return this.writeStreamItem(e);

        case i.MessageType.Completion:
          return this.writeCompletion(e);

        case i.MessageType.Ping:
          return a.write(c);

        case i.MessageType.CancelInvocation:
          return this.writeCancelInvocation(e);

        default:
          throw new Error("Invalid message type.");
      }
    }, e.prototype.parseMessage = function (e, t) {
      if (0 === e.length) throw new Error("Invalid payload.");
      var n = o(this.messagePackOptions).decode(r.Buffer.from(e));
      if (0 === n.length || !(n instanceof Array)) throw new Error("Invalid payload.");
      var a = n[0];

      switch (a) {
        case i.MessageType.Invocation:
          return this.createInvocationMessage(this.readHeaders(n), n);

        case i.MessageType.StreamItem:
          return this.createStreamItemMessage(this.readHeaders(n), n);

        case i.MessageType.Completion:
          return this.createCompletionMessage(this.readHeaders(n), n);

        case i.MessageType.Ping:
          return this.createPingMessage(n);

        case i.MessageType.Close:
          return this.createCloseMessage(n);

        default:
          return t.log(i.LogLevel.Information, "Unknown message type '" + a + "' ignored."), null;
      }
    }, e.prototype.createCloseMessage = function (e) {
      if (e.length < 2) throw new Error("Invalid payload for Close message.");
      return {
        allowReconnect: e.length >= 3 ? e[2] : void 0,
        error: e[1],
        type: i.MessageType.Close
      };
    }, e.prototype.createPingMessage = function (e) {
      if (e.length < 1) throw new Error("Invalid payload for Ping message.");
      return {
        type: i.MessageType.Ping
      };
    }, e.prototype.createInvocationMessage = function (e, t) {
      if (t.length < 5) throw new Error("Invalid payload for Invocation message.");
      var n = t[2];
      return n ? {
        arguments: t[4],
        headers: e,
        invocationId: n,
        streamIds: [],
        target: t[3],
        type: i.MessageType.Invocation
      } : {
        arguments: t[4],
        headers: e,
        streamIds: [],
        target: t[3],
        type: i.MessageType.Invocation
      };
    }, e.prototype.createStreamItemMessage = function (e, t) {
      if (t.length < 4) throw new Error("Invalid payload for StreamItem message.");
      return {
        headers: e,
        invocationId: t[2],
        item: t[3],
        type: i.MessageType.StreamItem
      };
    }, e.prototype.createCompletionMessage = function (e, t) {
      if (t.length < 4) throw new Error("Invalid payload for Completion message.");
      var n,
          r,
          o = t[3];
      if (o !== this.voidResult && t.length < 5) throw new Error("Invalid payload for Completion message.");

      switch (o) {
        case this.errorResult:
          n = t[4];
          break;

        case this.nonVoidResult:
          r = t[4];
      }

      return {
        error: n,
        headers: e,
        invocationId: t[2],
        result: r,
        type: i.MessageType.Completion
      };
    }, e.prototype.writeInvocation = function (e) {
      var t,
          n = o(this.messagePackOptions);
      return t = e.streamIds ? n.encode([i.MessageType.Invocation, e.headers || {}, e.invocationId || null, e.target, e.arguments, e.streamIds]) : n.encode([i.MessageType.Invocation, e.headers || {}, e.invocationId || null, e.target, e.arguments]), a.write(t.slice());
    }, e.prototype.writeStreamInvocation = function (e) {
      var t,
          n = o(this.messagePackOptions);
      return t = e.streamIds ? n.encode([i.MessageType.StreamInvocation, e.headers || {}, e.invocationId, e.target, e.arguments, e.streamIds]) : n.encode([i.MessageType.StreamInvocation, e.headers || {}, e.invocationId, e.target, e.arguments]), a.write(t.slice());
    }, e.prototype.writeStreamItem = function (e) {
      var t = o(this.messagePackOptions).encode([i.MessageType.StreamItem, e.headers || {}, e.invocationId, e.item]);
      return a.write(t.slice());
    }, e.prototype.writeCompletion = function (e) {
      var t,
          n = o(this.messagePackOptions),
          r = e.error ? this.errorResult : e.result ? this.nonVoidResult : this.voidResult;

      switch (r) {
        case this.errorResult:
          t = n.encode([i.MessageType.Completion, e.headers || {}, e.invocationId, r, e.error]);
          break;

        case this.voidResult:
          t = n.encode([i.MessageType.Completion, e.headers || {}, e.invocationId, r]);
          break;

        case this.nonVoidResult:
          t = n.encode([i.MessageType.Completion, e.headers || {}, e.invocationId, r, e.result]);
      }

      return a.write(t.slice());
    }, e.prototype.writeCancelInvocation = function (e) {
      var t = o(this.messagePackOptions).encode([i.MessageType.CancelInvocation, e.headers || {}, e.invocationId]);
      return a.write(t.slice());
    }, e.prototype.readHeaders = function (e) {
      var t = e[1];
      if ("object" != _typeof(t)) throw new Error("Invalid headers.");
      return t;
    }, e;
  }(),
      l = "5.0.0";
}]);