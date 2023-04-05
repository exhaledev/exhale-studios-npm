"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
require("core-js/modules/es.array.includes.js");
require("core-js/modules/es.string.includes.js");
require("core-js/modules/es.regexp.to-string.js");
var _react = _interopRequireDefault(require("react"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const Div = props => {
  let custom = {
    margin: '40px',
    color: 'red',
    width: '400px',
    height: '400px',
    backgroundColor: 'yellow'
  };
  if (props.chosenStyle.toString().includes('one')) {
    custom = {
      margin: '40px',
      color: 'red',
      width: '400px',
      height: '400px',
      backgroundColor: 'brown'
    };
  } else if (props.chosenStyle.toString().includes('two')) {
    custom = {
      margin: '40px',
      color: 'red',
      width: '400px',
      height: '400px',
      backgroundColor: 'purple'
    };
  } else {}
  return /*#__PURE__*/_react.default.createElement("div", {
    style: custom
  }, /*#__PURE__*/_react.default.createElement("h4", null, props.label));
};
var _default = Div;
exports.default = _default;