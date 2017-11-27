!function (o, e) {
  "object" == typeof exports && "object" == typeof module ? module.exports = e() : "function" == typeof define && define.amd ? define("good", [], e) : "object" == typeof exports ? exports.good = e() : o.good = e()
}(this, function () {
  return function (o) {
    function e(l) {
      if (n[l]) return n[l].exports;
      var t = n[l] = {
        i: l,
        l: !1,
        exports: {}
      };
      return o[l].call(t.exports, t, t.exports, e), t.l = !0, t.exports
    }

    var n = {};
    return e.m = o, e.c = n, e.d = function (o, n, l) {
      e.o(o, n) || Object.defineProperty(o, n, {
        configurable: !1,
        enumerable: !0,
        get: l
      })
    }, e.n = function (o) {
      var n = o && o.__esModule ? function () {
        return o.default
      } : function () {
        return o
      };
      return e.d(n, "a", n), n
    }, e.o = function (o, e) {
      return Object.prototype.hasOwnProperty.call(o, e)
    }, e.p = "", e(e.s = 0)
  }([/*!******************!*\
  !*** ./index.js ***!
  \******************/
    /*! dynamic exports provided */
    /*! all exports used */
    function (o, e) {
      console.log("thisIsAAnonymousFunction");
      const n = {
        id: 10,
        name: "msl",
        age: 20,
        height: 168,
        good_moadf: 20,
        "good-moadf2": 20,
        good: 30,
        "good Mono": 50
      };
      console.log("thisIsATrailingCommasObject", n.name);
      window.windowVariable = 30, globalVariable = 30;
      for (a === g ? console.log("if") : a === (() => {
        document.getElementsByName("div").getAttribute("good")
      }) ? console.log("else if") : console.log("else"); a;) console.log("10");
      console.log("10");
      console.log("134234"), console.log("thisIsALetLargeVariable", 20), a || c, console.log("thisIsALetLargeVariable", 20), a = !1, console.log("ISOK", ISOK), console.log("name", name);
      var l = {
        p: 1,
        q: 2
      };
      f(l.p, l.q);
      !function (o, e) {
        console.log(arguments.length)
      }(!0, 10, 34444, 1324234), console.log(n.id), console.log(n["good Mono"]), console.log(n.name), console.log("Infinity", 1 / 0);
      const t = {
        id: 10,
        name: 20,
        prop: {
          width: 10,
          height: 20
        }
      };
      console.log("goodX", t.id), console.log("goodX", t.name), console.log("goodX", t.age), console.log("goodX", t.prop.height), console.log("goodX", t.prop.width), console.log("goodX", t.prop.fll)
    }])
});