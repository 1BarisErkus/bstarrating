"use strict";

function _typeof(o) {
  "@babel/helpers - typeof";
  return (
    (_typeof =
      "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
        ? function (o) {
            return typeof o;
          }
        : function (o) {
            return o &&
              "function" == typeof Symbol &&
              o.constructor === Symbol &&
              o !== Symbol.prototype
              ? "symbol"
              : typeof o;
          }),
    _typeof(o)
  );
}
Object.defineProperty(exports, "__esModule", {
  value: true,
});
exports["default"] = StarRating;
var _react = _interopRequireWildcard(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
function _interopRequireDefault(e) {
  return e && e.__esModule ? e : { default: e };
}
function _getRequireWildcardCache(e) {
  if ("function" != typeof WeakMap) return null;
  var r = new WeakMap(),
    t = new WeakMap();
  return (_getRequireWildcardCache = function _getRequireWildcardCache(e) {
    return e ? t : r;
  })(e);
}
function _interopRequireWildcard(e, r) {
  if (!r && e && e.__esModule) return e;
  if (null === e || ("object" != _typeof(e) && "function" != typeof e))
    return { default: e };
  var t = _getRequireWildcardCache(r);
  if (t && t.has(e)) return t.get(e);
  var n = { __proto__: null },
    a = Object.defineProperty && Object.getOwnPropertyDescriptor;
  for (var u in e)
    if ("default" !== u && {}.hasOwnProperty.call(e, u)) {
      var i = a ? Object.getOwnPropertyDescriptor(e, u) : null;
      i && (i.get || i.set) ? Object.defineProperty(n, u, i) : (n[u] = e[u]);
    }
  return (n["default"] = e), t && t.set(e, n), n;
}
function _slicedToArray(r, e) {
  return (
    _arrayWithHoles(r) ||
    _iterableToArrayLimit(r, e) ||
    _unsupportedIterableToArray(r, e) ||
    _nonIterableRest()
  );
}
function _nonIterableRest() {
  throw new TypeError(
    "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
  );
}
function _unsupportedIterableToArray(r, a) {
  if (r) {
    if ("string" == typeof r) return _arrayLikeToArray(r, a);
    var t = {}.toString.call(r).slice(8, -1);
    return (
      "Object" === t && r.constructor && (t = r.constructor.name),
      "Map" === t || "Set" === t
        ? Array.from(r)
        : "Arguments" === t ||
          /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)
        ? _arrayLikeToArray(r, a)
        : void 0
    );
  }
}
function _arrayLikeToArray(r, a) {
  (null == a || a > r.length) && (a = r.length);
  for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e];
  return n;
}
function _iterableToArrayLimit(r, l) {
  var t =
    null == r
      ? null
      : ("undefined" != typeof Symbol && r[Symbol.iterator]) || r["@@iterator"];
  if (null != t) {
    var e,
      n,
      i,
      u,
      a = [],
      f = !0,
      o = !1;
    try {
      if (((i = (t = t.call(r)).next), 0 === l)) {
        if (Object(t) !== t) return;
        f = !1;
      } else
        for (
          ;
          !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l);
          f = !0
        );
    } catch (r) {
      (o = !0), (n = r);
    } finally {
      try {
        if (!f && null != t["return"] && ((u = t["return"]()), Object(u) !== u))
          return;
      } finally {
        if (o) throw n;
      }
    }
    return a;
  }
}
function _arrayWithHoles(r) {
  if (Array.isArray(r)) return r;
}
var containerStyle = {
  display: "flex",
  alignItems: "center",
  gap: "16px",
};
var starContainerStyle = {
  display: "flex",
};
StarRating.propTypes = {
  maxRating: _propTypes["default"].number,
  defaultRating: _propTypes["default"].number,
  color: _propTypes["default"].string,
  size: _propTypes["default"].number,
  messages: _propTypes["default"].array,
  className: _propTypes["default"].string,
  onSetRating: _propTypes["default"].func,
};
function StarRating(_ref) {
  var _ref$maxRating = _ref.maxRating,
    maxRating = _ref$maxRating === void 0 ? 5 : _ref$maxRating,
    _ref$color = _ref.color,
    color = _ref$color === void 0 ? "#fcc419" : _ref$color,
    _ref$size = _ref.size,
    size = _ref$size === void 0 ? 48 : _ref$size,
    _ref$className = _ref.className,
    className = _ref$className === void 0 ? "" : _ref$className,
    _ref$messages = _ref.messages,
    messages = _ref$messages === void 0 ? [] : _ref$messages,
    _ref$defaultRating = _ref.defaultRating,
    defaultRating = _ref$defaultRating === void 0 ? 0 : _ref$defaultRating,
    onSetRating = _ref.onSetRating;
  var _useState = (0, _react.useState)(defaultRating),
    _useState2 = _slicedToArray(_useState, 2),
    rating = _useState2[0],
    setRating = _useState2[1];
  var _useState3 = (0, _react.useState)(0),
    _useState4 = _slicedToArray(_useState3, 2),
    tempRating = _useState4[0],
    setTempRating = _useState4[1];
  function handleRating(rating) {
    setRating(rating);
    onSetRating(rating);
  }
  var textStyle = {
    lineHeight: "1",
    margin: "0",
    color: color,
    fontSize: "".concat(size / 1.5, "px"),
  };
  return /*#__PURE__*/ _react["default"].createElement(
    "div",
    {
      style: containerStyle,
      className: className,
    },
    /*#__PURE__*/ _react["default"].createElement(
      "div",
      {
        style: starContainerStyle,
      },
      Array.from(
        {
          length: maxRating,
        },
        function (_, i) {
          return /*#__PURE__*/ _react["default"].createElement(Star, {
            key: i,
            full: tempRating ? tempRating >= i + 1 : rating >= i + 1,
            onRate: function onRate() {
              return handleRating(i + 1);
            },
            onHoverIn: function onHoverIn() {
              return setTempRating(i + 1);
            },
            onHoverOut: function onHoverOut() {
              return setTempRating(0);
            },
            color: color,
            size: size,
          });
        }
      )
    ),
    /*#__PURE__*/ _react["default"].createElement(
      "p",
      {
        style: textStyle,
      },
      messages.length === maxRating
        ? messages[tempRating ? tempRating - 1 : rating - 1]
        : tempRating || rating || ""
    )
  );
}
function Star(_ref2) {
  var full = _ref2.full,
    onRate = _ref2.onRate,
    onHoverIn = _ref2.onHoverIn,
    onHoverOut = _ref2.onHoverOut,
    color = _ref2.color,
    size = _ref2.size;
  var starStyle = {
    width: "".concat(size, "px"),
    height: "".concat(size, "px"),
    display: "block",
    cursor: "pointer",
  };
  return /*#__PURE__*/ _react["default"].createElement(
    "span",
    {
      role: "button",
      style: starStyle,
      onClick: onRate,
      onMouseEnter: onHoverIn,
      onMouseLeave: onHoverOut,
    },
    full
      ? /*#__PURE__*/ _react["default"].createElement(
          "svg",
          {
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 20 20",
            fill: color,
            stroke: color,
          },
          /*#__PURE__*/ _react["default"].createElement("path", {
            d: "M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z",
          })
        )
      : /*#__PURE__*/ _react["default"].createElement(
          "svg",
          {
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            viewBox: "0 0 24 24",
            stroke: color,
          },
          /*#__PURE__*/ _react["default"].createElement("path", {
            strokeLinecap: "round",
            strokeLinejoin: "round",
            strokeWidth: "{2}",
            d: "M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z",
          })
        )
  );
}
