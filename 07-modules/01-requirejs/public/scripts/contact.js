define(["lodash", "jquery"], function (_lodash, _jquery) {
  "use strict";

  var _lodash2 = _interopRequireDefault(_lodash);

  var _jquery2 = _interopRequireDefault(_jquery);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  var array = [1, 2, 3, 4];
  _lodash2.default.each(array, function (i) {
    return (0, _jquery2.default)("<span>" + i + "</span>").appendTo("body");
  });
});