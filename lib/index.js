
"use strict";

var _interopRequireDefault = require("@babel/runtime-corejs2/helpers/interopRequireDefault");

var _Object$defineProperty = require("@babel/runtime-corejs2/core-js/object/define-property");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports.default = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime-corejs2/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime-corejs2/helpers/createClass"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime-corejs2/helpers/possibleConstructorReturn"));

var _getPrototypeOf3 = _interopRequireDefault(require("@babel/runtime-corejs2/helpers/getPrototypeOf"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime-corejs2/helpers/assertThisInitialized"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime-corejs2/helpers/inherits"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime-corejs2/helpers/defineProperty"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _reactDom = require("react-dom");

var _resizeObserverPolyfill = _interopRequireDefault(require("resize-observer-polyfill"));

var ReactResizeObserver =
/*#__PURE__*/
function (_React$Component) {
  (0, _inherits2.default)(ReactResizeObserver, _React$Component);

  function ReactResizeObserver() {
    var _getPrototypeOf2;

    var _this;

    (0, _classCallCheck2.default)(this, ReactResizeObserver);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = (0, _possibleConstructorReturn2.default)(this, (_getPrototypeOf2 = (0, _getPrototypeOf3.default)(ReactResizeObserver)).call.apply(_getPrototypeOf2, [this].concat(args)));
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "resizeObserver", null);
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "onResize", function () {
      var onResize = _this.props.onResize;

      if (onResize) {
        onResize();
      }
    });
    return _this;
  }

  (0, _createClass2.default)(ReactResizeObserver, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.onComponentUpdated();
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      this.onComponentUpdated();
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.destroyObserver();
    }
  }, {
    key: "onComponentUpdated",
    value: function onComponentUpdated() {
      var disabled = this.props.disabled;
      var element = (0, _reactDom.findDOMNode)(this);

      if (!this.resizeObserver && !disabled && element) {
        // Add resize observer
        this.resizeObserver = new _resizeObserverPolyfill.default(this.onResize);
        this.resizeObserver.observe(element);
      } else if (disabled) {
        // Remove resize observer
        this.destroyObserver();
      }
    }
  }, {
    key: "destroyObserver",
    value: function destroyObserver() {
      if (this.resizeObserver) {
        this.resizeObserver.disconnect();
        this.resizeObserver = null;
      }
    }
  }, {
    key: "render",
    value: function render() {
      var children = this.props.children;
      return children;
    }
  }]);
  return ReactResizeObserver;
}(_react.default.Component);

(0, _defineProperty2.default)(ReactResizeObserver, "propTypes", {
  children: _propTypes.default.element,
  disabled: _propTypes.default.bool,
  onResize: _propTypes.default.func
});
var _default = ReactResizeObserver;
exports.default = _default;