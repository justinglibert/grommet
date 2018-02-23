'use strict';

exports.__esModule = true;
exports.StyledDigitalNext = exports.StyledDigitalPrevious = exports.StyledDigitalDigit = exports.StyledAnalog = exports.StyledSecond = exports.StyledMinute = exports.StyledHour = undefined;

var _templateObject = _taggedTemplateLiteralLoose(['\n  ', '\n'], ['\n  ', '\n']);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteralLoose(strings, raw) { strings.raw = raw; return strings; }

var StyledHour = /*#__PURE__*/exports.StyledHour = _styledComponents2.default.line.withConfig({
  displayName: 'StyledClock__StyledHour'
})(['stroke-width:', ';stroke:', ';transition:stroke 1s ease-out;'], function (props) {
  return props.theme.clock.analog.hour.width;
}, function (props) {
  return props.theme.clock.analog.hour.color[props.grommet.dark ? 'dark' : 'light'];
});

var StyledMinute = /*#__PURE__*/exports.StyledMinute = _styledComponents2.default.line.withConfig({
  displayName: 'StyledClock__StyledMinute'
})(['stroke-width:', ';stroke:', ';transition:stroke 1s ease-out;'], function (props) {
  return props.theme.clock.analog.minute.width;
}, function (props) {
  return props.theme.clock.analog.minute.color[props.grommet.dark ? 'dark' : 'light'];
});

var StyledSecond = /*#__PURE__*/exports.StyledSecond = _styledComponents2.default.line.withConfig({
  displayName: 'StyledClock__StyledSecond'
})(['stroke-width:', ';stroke:', ';transition:stroke 1s ease-out;'], function (props) {
  return props.theme.clock.analog.second.width;
}, function (props) {
  return props.theme.clock.analog.second.color[props.grommet.dark ? 'dark' : 'light'];
});

var StyledAnalog = exports.StyledAnalog = _styledComponents2.default.svg.withConfig({
  displayName: 'StyledClock__StyledAnalog'
})(['width:', ';height:', ';'], function (props) {
  return props.theme.clock.analog.size[props.size];
}, function (props) {
  return props.theme.clock.analog.size[props.size];
}).extend(_templateObject, function (props) {
  return props.theme.clock.analog && props.theme.clock.analog.extend;
});

var sizeStyle = function sizeStyle(props) {
  // size is a combination of the level and size properties
  var size = props.size || 'medium';
  var data = props.theme.clock.digital.text[size];
  return (0, _styledComponents.css)(['font-size:', ';line-height:', ';'], data.size, data.height);
};

var StyledDigitalDigit = /*#__PURE__*/exports.StyledDigitalDigit = _styledComponents2.default.div.withConfig({
  displayName: 'StyledClock__StyledDigitalDigit'
})(['position:relative;width:0.8em;text-align:center;overflow:hidden;', ''], function (props) {
  return sizeStyle(props);
});

var previousUp = /*#__PURE__*/(0, _styledComponents.keyframes)(['0%{transform:translateY(0);}100%{transform:translateY(-100%);}']);

var previousDown = /*#__PURE__*/(0, _styledComponents.keyframes)(['0%{transform:translateY(0);}100%{transform:translateY(100%);}']);

var StyledDigitalPrevious = /*#__PURE__*/exports.StyledDigitalPrevious = _styledComponents2.default.div.withConfig({
  displayName: 'StyledClock__StyledDigitalPrevious'
})(['position:absolute;top:0;left:0;width:0.8em;text-align:center;animation:', ' 0.5s forwards;'], function (props) {
  return props.direction === 'down' ? previousDown : previousUp;
});

var nextUp = /*#__PURE__*/(0, _styledComponents.keyframes)(['0%{transform:translateY(100%);}100%{transform:translateY(0);}']);

var nextDown = /*#__PURE__*/(0, _styledComponents.keyframes)(['0%{transform:translateY(-100%);}100%{transform:translateY(0);}']);

var StyledDigitalNext = /*#__PURE__*/exports.StyledDigitalNext = _styledComponents2.default.div.withConfig({
  displayName: 'StyledClock__StyledDigitalNext'
})(['position:absolute;top:0;left:0;width:0.8em;text-align:center;animation:', ' 0.5s forwards;'], function (props) {
  return props.direction === 'down' ? nextDown : nextUp;
});