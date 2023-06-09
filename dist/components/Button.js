"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const Button = props => {
  return /*#__PURE__*/_react.default.createElement("button", {
    className: "".concat(props.styling),
    "data-id": props.id,
    type: props.type,
    name: props.name,
    value: props.value,
    disabled: props.disabled,
    onClick: props.handleClick,
    style: {
      backgroundColor: "".concat(props.styling)
    }
  }, /*#__PURE__*/_react.default.createElement("h4", null, props.label));
};
var _default = Button;
exports.default = _default;