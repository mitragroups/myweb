(() => {
  var t = {
      349: (t) => {
        function s() {
          return (
            (s = Object.assign
              ? Object.assign.bind()
              : function (t) {
                  for (var s = 1; s < arguments.length; s++) {
                    var e = arguments[s];
                    for (var n in e)
                      Object.prototype.hasOwnProperty.call(e, n) &&
                        (t[n] = e[n]);
                  }
                  return t;
                }),
            s.apply(this, arguments)
          );
        }
        var e = {
            strings: [
              "These are the default values...",
              "You know what you should do?",
              "Use your own!",
              "Have a great day!",
            ],
            stringsElement: null,
            typeSpeed: 0,
            startDelay: 0,
            backSpeed: 0,
            smartBackspace: !0,
            shuffle: !1,
            backDelay: 700,
            fadeOut: !1,
            fadeOutClass: "typed-fade-out",
            fadeOutDelay: 500,
            loop: !1,
            loopCount: 1 / 0,
            showCursor: !0,
            cursorChar: "|",
            autoInsertCss: !0,
            attr: null,
            bindInputFocusEvents: !1,
            contentType: "html",
            onBegin: function (t) {},
            onComplete: function (t) {},
            preStringTyped: function (t, s) {},
            onStringTyped: function (t, s) {},
            onLastStringBackspaced: function (t) {},
            onTypingPaused: function (t, s) {},
            onTypingResumed: function (t, s) {},
            onReset: function (t) {},
            onStop: function (t, s) {},
            onStart: function (t, s) {},
            onDestroy: function (t) {},
          },
          n = new ((function () {
            function t() {}
            var n = t.prototype;
            return (
              (n.load = function (t, n, i) {
                if (
                  ((t.el =
                    "string" == typeof i ? document.querySelector(i) : i),
                  (t.options = s({}, e, n)),
                  (t.isInput = "input" === t.el.tagName.toLowerCase()),
                  (t.attr = t.options.attr),
                  (t.bindInputFocusEvents = t.options.bindInputFocusEvents),
                  (t.showCursor = !t.isInput && t.options.showCursor),
                  (t.cursorChar = t.options.cursorChar),
                  (t.cursorBlinking = !0),
                  (t.elContent = t.attr
                    ? t.el.getAttribute(t.attr)
                    : t.el.textContent),
                  (t.contentType = t.options.contentType),
                  (t.typeSpeed = t.options.typeSpeed),
                  (t.startDelay = t.options.startDelay),
                  (t.backSpeed = t.options.backSpeed),
                  (t.smartBackspace = t.options.smartBackspace),
                  (t.backDelay = t.options.backDelay),
                  (t.fadeOut = t.options.fadeOut),
                  (t.fadeOutClass = t.options.fadeOutClass),
                  (t.fadeOutDelay = t.options.fadeOutDelay),
                  (t.isPaused = !1),
                  (t.strings = t.options.strings.map(function (t) {
                    return t.trim();
                  })),
                  (t.stringsElement =
                    "string" == typeof t.options.stringsElement
                      ? document.querySelector(t.options.stringsElement)
                      : t.options.stringsElement),
                  t.stringsElement)
                ) {
                  (t.strings = []),
                    (t.stringsElement.style.cssText =
                      "clip: rect(0 0 0 0);clip-path:inset(50%);height:1px;overflow:hidden;position:absolute;white-space:nowrap;width:1px;");
                  var r = Array.prototype.slice.apply(
                      t.stringsElement.children
                    ),
                    o = r.length;
                  if (o)
                    for (var a = 0; a < o; a += 1)
                      t.strings.push(r[a].innerHTML.trim());
                }
                for (var u in ((t.strPos = 0),
                (t.currentElContent = this.getCurrentElContent(t)),
                t.currentElContent &&
                  t.currentElContent.length > 0 &&
                  ((t.strPos = t.currentElContent.length - 1),
                  t.strings.unshift(t.currentElContent)),
                (t.sequence = []),
                t.strings))
                  t.sequence[u] = u;
                (t.arrayPos = 0),
                  (t.stopNum = 0),
                  (t.loop = t.options.loop),
                  (t.loopCount = t.options.loopCount),
                  (t.curLoop = 0),
                  (t.shuffle = t.options.shuffle),
                  (t.pause = {
                    status: !1,
                    typewrite: !0,
                    curString: "",
                    curStrPos: 0,
                  }),
                  (t.typingComplete = !1),
                  (t.autoInsertCss = t.options.autoInsertCss),
                  t.autoInsertCss &&
                    (this.appendCursorAnimationCss(t),
                    this.appendFadeOutAnimationCss(t));
              }),
              (n.getCurrentElContent = function (t) {
                return t.attr
                  ? t.el.getAttribute(t.attr)
                  : t.isInput
                  ? t.el.value
                  : "html" === t.contentType
                  ? t.el.innerHTML
                  : t.el.textContent;
              }),
              (n.appendCursorAnimationCss = function (t) {
                var s = "data-typed-js-cursor-css";
                if (t.showCursor && !document.querySelector("[" + s + "]")) {
                  var e = document.createElement("style");
                  e.setAttribute(s, "true"),
                    (e.innerHTML =
                      "\n        .typed-cursor{\n          opacity: 1;\n        }\n        .typed-cursor.typed-cursor--blink{\n          animation: typedjsBlink 0.7s infinite;\n          -webkit-animation: typedjsBlink 0.7s infinite;\n                  animation: typedjsBlink 0.7s infinite;\n        }\n        @keyframes typedjsBlink{\n          50% { opacity: 0.0; }\n        }\n        @-webkit-keyframes typedjsBlink{\n          0% { opacity: 1; }\n          50% { opacity: 0.0; }\n          100% { opacity: 1; }\n        }\n      "),
                    document.body.appendChild(e);
                }
              }),
              (n.appendFadeOutAnimationCss = function (t) {
                var s = "data-typed-fadeout-js-css";
                if (t.fadeOut && !document.querySelector("[" + s + "]")) {
                  var e = document.createElement("style");
                  e.setAttribute(s, "true"),
                    (e.innerHTML =
                      "\n        .typed-fade-out{\n          opacity: 0;\n          transition: opacity .25s;\n        }\n        .typed-cursor.typed-cursor--blink.typed-fade-out{\n          -webkit-animation: 0;\n          animation: 0;\n        }\n      "),
                    document.body.appendChild(e);
                }
              }),
              t
            );
          })())(),
          i = new ((function () {
            function t() {}
            var s = t.prototype;
            return (
              (s.typeHtmlChars = function (t, s, e) {
                if ("html" !== e.contentType) return s;
                var n = t.substring(s).charAt(0);
                if ("<" === n || "&" === n) {
                  var i;
                  for (
                    i = "<" === n ? ">" : ";";
                    t.substring(s + 1).charAt(0) !== i && !(1 + ++s > t.length);

                  );
                  s++;
                }
                return s;
              }),
              (s.backSpaceHtmlChars = function (t, s, e) {
                if ("html" !== e.contentType) return s;
                var n = t.substring(s).charAt(0);
                if (">" === n || ";" === n) {
                  var i;
                  for (
                    i = ">" === n ? "<" : "&";
                    t.substring(s - 1).charAt(0) !== i && !(--s < 0);

                  );
                  s--;
                }
                return s;
              }),
              t
            );
          })())();
        t.exports = (function () {
          function t(t, s) {
            n.load(this, s, t), this.begin();
          }
          var s = t.prototype;
          return (
            (s.toggle = function () {
              this.pause.status ? this.start() : this.stop();
            }),
            (s.stop = function () {
              this.typingComplete ||
                this.pause.status ||
                (this.toggleBlinking(!0),
                (this.pause.status = !0),
                this.options.onStop(this.arrayPos, this));
            }),
            (s.start = function () {
              this.typingComplete ||
                (this.pause.status &&
                  ((this.pause.status = !1),
                  this.pause.typewrite
                    ? this.typewrite(this.pause.curString, this.pause.curStrPos)
                    : this.backspace(
                        this.pause.curString,
                        this.pause.curStrPos
                      ),
                  this.options.onStart(this.arrayPos, this)));
            }),
            (s.destroy = function () {
              this.reset(!1), this.options.onDestroy(this);
            }),
            (s.reset = function (t) {
              void 0 === t && (t = !0),
                clearInterval(this.timeout),
                this.replaceText(""),
                this.cursor &&
                  this.cursor.parentNode &&
                  (this.cursor.parentNode.removeChild(this.cursor),
                  (this.cursor = null)),
                (this.strPos = 0),
                (this.arrayPos = 0),
                (this.curLoop = 0),
                t &&
                  (this.insertCursor(),
                  this.options.onReset(this),
                  this.begin());
            }),
            (s.begin = function () {
              var t = this;
              this.options.onBegin(this),
                (this.typingComplete = !1),
                this.shuffleStringsIfNeeded(this),
                this.insertCursor(),
                this.bindInputFocusEvents && this.bindFocusEvents(),
                (this.timeout = setTimeout(function () {
                  0 === t.strPos
                    ? t.typewrite(t.strings[t.sequence[t.arrayPos]], t.strPos)
                    : t.backspace(t.strings[t.sequence[t.arrayPos]], t.strPos);
                }, this.startDelay));
            }),
            (s.typewrite = function (t, s) {
              var e = this;
              this.fadeOut &&
                this.el.classList.contains(this.fadeOutClass) &&
                (this.el.classList.remove(this.fadeOutClass),
                this.cursor && this.cursor.classList.remove(this.fadeOutClass));
              var n = this.humanizer(this.typeSpeed),
                r = 1;
              !0 !== this.pause.status
                ? (this.timeout = setTimeout(function () {
                    s = i.typeHtmlChars(t, s, e);
                    var n = 0,
                      o = t.substring(s);
                    if ("^" === o.charAt(0) && /^\^\d+/.test(o)) {
                      var a = 1;
                      (a += (o = /\d+/.exec(o)[0]).length),
                        (n = parseInt(o)),
                        (e.temporaryPause = !0),
                        e.options.onTypingPaused(e.arrayPos, e),
                        (t = t.substring(0, s) + t.substring(s + a)),
                        e.toggleBlinking(!0);
                    }
                    if ("`" === o.charAt(0)) {
                      for (
                        ;
                        "`" !== t.substring(s + r).charAt(0) &&
                        (r++, !(s + r > t.length));

                      );
                      var u = t.substring(0, s),
                        p = t.substring(u.length + 1, s + r),
                        c = t.substring(s + r + 1);
                      (t = u + p + c), r--;
                    }
                    e.timeout = setTimeout(function () {
                      e.toggleBlinking(!1),
                        s >= t.length
                          ? e.doneTyping(t, s)
                          : e.keepTyping(t, s, r),
                        e.temporaryPause &&
                          ((e.temporaryPause = !1),
                          e.options.onTypingResumed(e.arrayPos, e));
                    }, n);
                  }, n))
                : this.setPauseStatus(t, s, !0);
            }),
            (s.keepTyping = function (t, s, e) {
              0 === s &&
                (this.toggleBlinking(!1),
                this.options.preStringTyped(this.arrayPos, this));
              var n = t.substring(0, (s += e));
              this.replaceText(n), this.typewrite(t, s);
            }),
            (s.doneTyping = function (t, s) {
              var e = this;
              this.options.onStringTyped(this.arrayPos, this),
                this.toggleBlinking(!0),
                (this.arrayPos === this.strings.length - 1 &&
                  (this.complete(),
                  !1 === this.loop || this.curLoop === this.loopCount)) ||
                  (this.timeout = setTimeout(function () {
                    e.backspace(t, s);
                  }, this.backDelay));
            }),
            (s.backspace = function (t, s) {
              var e = this;
              if (!0 !== this.pause.status) {
                if (this.fadeOut) return this.initFadeOut();
                this.toggleBlinking(!1);
                var n = this.humanizer(this.backSpeed);
                this.timeout = setTimeout(function () {
                  s = i.backSpaceHtmlChars(t, s, e);
                  var n = t.substring(0, s);
                  if ((e.replaceText(n), e.smartBackspace)) {
                    var r = e.strings[e.arrayPos + 1];
                    e.stopNum = r && n === r.substring(0, s) ? s : 0;
                  }
                  s > e.stopNum
                    ? (s--, e.backspace(t, s))
                    : s <= e.stopNum &&
                      (e.arrayPos++,
                      e.arrayPos === e.strings.length
                        ? ((e.arrayPos = 0),
                          e.options.onLastStringBackspaced(),
                          e.shuffleStringsIfNeeded(),
                          e.begin())
                        : e.typewrite(e.strings[e.sequence[e.arrayPos]], s));
                }, n);
              } else this.setPauseStatus(t, s, !1);
            }),
            (s.complete = function () {
              this.options.onComplete(this),
                this.loop ? this.curLoop++ : (this.typingComplete = !0);
            }),
            (s.setPauseStatus = function (t, s, e) {
              (this.pause.typewrite = e),
                (this.pause.curString = t),
                (this.pause.curStrPos = s);
            }),
            (s.toggleBlinking = function (t) {
              this.cursor &&
                (this.pause.status ||
                  (this.cursorBlinking !== t &&
                    ((this.cursorBlinking = t),
                    t
                      ? this.cursor.classList.add("typed-cursor--blink")
                      : this.cursor.classList.remove("typed-cursor--blink"))));
            }),
            (s.humanizer = function (t) {
              return Math.round((Math.random() * t) / 2) + t;
            }),
            (s.shuffleStringsIfNeeded = function () {
              this.shuffle &&
                (this.sequence = this.sequence.sort(function () {
                  return Math.random() - 0.5;
                }));
            }),
            (s.initFadeOut = function () {
              var t = this;
              return (
                (this.el.className += " " + this.fadeOutClass),
                this.cursor &&
                  (this.cursor.className += " " + this.fadeOutClass),
                setTimeout(function () {
                  t.arrayPos++,
                    t.replaceText(""),
                    t.strings.length > t.arrayPos
                      ? t.typewrite(t.strings[t.sequence[t.arrayPos]], 0)
                      : (t.typewrite(t.strings[0], 0), (t.arrayPos = 0));
                }, this.fadeOutDelay)
              );
            }),
            (s.replaceText = function (t) {
              this.attr
                ? this.el.setAttribute(this.attr, t)
                : this.isInput
                ? (this.el.value = t)
                : "html" === this.contentType
                ? (this.el.innerHTML = t)
                : (this.el.textContent = t);
            }),
            (s.bindFocusEvents = function () {
              var t = this;
              this.isInput &&
                (this.el.addEventListener("focus", function (s) {
                  t.stop();
                }),
                this.el.addEventListener("blur", function (s) {
                  (t.el.value && 0 !== t.el.value.length) || t.start();
                }));
            }),
            (s.insertCursor = function () {
              this.showCursor &&
                (this.cursor ||
                  ((this.cursor = document.createElement("span")),
                  (this.cursor.className = "typed-cursor"),
                  this.cursor.setAttribute("aria-hidden", !0),
                  (this.cursor.innerHTML = this.cursorChar),
                  this.el.parentNode &&
                    this.el.parentNode.insertBefore(
                      this.cursor,
                      this.el.nextSibling
                    )));
            }),
            t
          );
        })();
      },
    },
    s = {};
  new ((function e(n) {
    var i = s[n];
    if (void 0 !== i) return i.exports;
    var r = (s[n] = { exports: {} });
    return t[n](r, r.exports, e), r.exports;
  })(349))("#heading", {
    strings: [
      "Hello, I'm Miftah MD",
      "I'm Business Analyst",
      "I'm Fullstack Developer",
    ],
    typeSpeed: 150,
    loop: !0,
  });
})();
