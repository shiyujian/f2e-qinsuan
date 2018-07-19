webpackJsonp([1],[
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.resizeCallback = exports.formatDate = exports.getRouteString = exports.formItemLayout = exports.jrTip = exports.jrFetchPost = exports.jrFetchGet = undefined;

var _notification = __webpack_require__(68);

var _notification2 = _interopRequireDefault(_notification);

var _message = __webpack_require__(67);

var _message2 = _interopRequireDefault(_message);

var _jrbasic = __webpack_require__(44);

var _frFetch = __webpack_require__(140);

var _consts = __webpack_require__(3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var jrFetchGet = exports.jrFetchGet = function jrFetchGet(jrApi, fetchPrm) {

    var initPrm = {};

    for (var item in fetchPrm) {
        if (typeof fetchPrm[item] === 'undefined') {
            fetchPrm[item] = '';
        }
    }

    Object.assign(initPrm, fetchPrm);

    return new Promise(function (resolve, reject) {
        (0, _frFetch.fetchGet)(jrApi, initPrm, function (ret) {
            switch (ret.code) {
                case _consts.CODE_SUCCESS:
                    resolve(ret);
                    break;
                default:
                    _message2.default.info(ret.message);

            }
        }, function (res) {

            _message2.default.info(res);
        });
    });
};

var jrFetchPost = exports.jrFetchPost = function jrFetchPost(jrApi, fetchPrm) {
    var initPrm = {};

    for (var item in fetchPrm) {
        if (typeof fetchPrm[item] === 'undefined') {
            fetchPrm[item] = '';
        }
    }

    Object.assign(initPrm, fetchPrm);

    return new Promise(function (resolve, reject) {
        (0, _frFetch.fetchPost)(jrApi, initPrm, function (ret) {
            switch (ret.code) {
                case _consts.CODE_SUCCESS:
                    resolve(ret);
                    break;

                default:
                    _message2.default.info(ret.message);

            }
        }, function (res) {
            _message2.default.info(res);
        });
    });
};

var jrTip = exports.jrTip = function jrTip(type, msg, des) {
    /*success info warning error*/
    _notification2.default[type]({
        message: msg,
        description: des
    });
};

var formItemLayout = exports.formItemLayout = {
    labelCol: {
        xs: { span: 24 },
        sm: { span: 6 }
    },
    wrapperCol: {
        xs: { span: 24 },
        sm: { span: 14 }
    }
};

var getRouteString = exports.getRouteString = function getRouteString(routeArray, index) {
    var rs = '';
    for (var i = 0; i < index; i++) {
        rs = rs + routeArray[i]['path'] + '/';
    }
    return rs;
};

var formatDate = exports.formatDate = function formatDate(now) {
    var year = now.getFullYear();
    var month = now.getMonth() + 1;
    var date = now.getDate();
    var hour = now.getHours();
    var minute = now.getMinutes();
    var second = now.getSeconds();
    return year + "-" + month + "-" + date + "   " + hour + ":" + minute + ":" + second;
};

var resizeCallback = exports.resizeCallback = {

    callbackArr: [],

    initOnresize: function initOnresize() {
        var _this = this;

        var timeOutResize = void 0;

        window.onresize = function () {
            window.clearTimeout(timeOutResize);
            timeOutResize = window.setTimeout(function () {
                var _iteratorNormalCompletion = true;
                var _didIteratorError = false;
                var _iteratorError = undefined;

                try {
                    for (var _iterator = _this.callbackArr[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                        var item = _step.value;

                        item();
                    }
                } catch (err) {
                    _didIteratorError = true;
                    _iteratorError = err;
                } finally {
                    try {
                        if (!_iteratorNormalCompletion && _iterator.return) {
                            _iterator.return();
                        }
                    } finally {
                        if (_didIteratorError) {
                            throw _iteratorError;
                        }
                    }
                }
            }, 200);
        };
    }
};

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var apiLogin = exports.apiLogin = '/api/login';
var apiLogout = exports.apiLogout = '/api/logout';
var apiUserinfo = exports.apiUserinfo = '/api/userinfo';
var apiUsermenu = exports.apiUsermenu = '/api/usermenu';

var apiGraplist = exports.apiGraplist = '/api/graplist';
var apiOrderecord = exports.apiOrderecord = '/api/orderecord';
var apiUserdetectioninfo = exports.apiUserdetectioninfo = '/api/userdetectioninfo';

var apiGetdetails = exports.apiGetdetails = '/api/getdetails';
var apiTaobaoindex = exports.apiTaobaoindex = '/api/taobaoindex';

var apiTelcosdata = exports.apiTelcosdata = '/api/telcosdata';
var apiSpecialtel = exports.apiSpecialtel = '/api/specialtel';

/*
*  ## 接口地址

 ~~~
 │─登录接口 post http://demo.xinshen.mifengkong.cn:81/api/login?name=bojinchushen&password=123456

 ├─退出接口 http://demo.xinshen.mifengkong.cn:81/api/logout

 ├─获取登录用户信息接口 http://demo.xinshen.mifengkong.cn:81/api/auditorinfo

 ├─审核订单详情页面接口
 │  ├─基本信息tab接口 http://demo.xinshen.mifengkong.cn:81/api/userinfo?user_id=1150&order_id=1177066
 │  ├─菜单tab接口 http://demo.xinshen.mifengkong.cn:81/api/usermenu?product_id=65&order_id=1177066
 │  ├─总览tab接口
 │  │  ├─	触碰灰名单 http://demo.xinshen.mifengkong.cn:81/api/graplist?user_id=1150
 │  │  ├─	历史申请订单 http://demo.xinshen.mifengkong.cn:81/api/orderecord?user_id=1150
 │  │  ├─	其他用户信息 http://demo.xinshen.mifengkong.cn:81/api/userdetectioninfo?user_id=1150

 │  ├─账单tab接口
 │  │  ├─	账单总览 http://demo.xinshen.mifengkong.cn:81/api/bankbills?user_id=1150
 │  │  ├─	账单交易明细 http://demo.xinshen.mifengkong.cn:81/api/billstrades?user_id=1150
 │  │  ├─	账单敏感词 http://demo.xinshen.mifengkong.cn:81/api/sensitivewordsinfo?user_id=1150
 │  │  ├─	导出账单交易明细 http://demo.xinshen.mifengkong.cn:81/api/exportbillstrades?user_id=1150
 │  │  ├─	账单交叉情况
 │  ├─淘宝接口
 │  │  ├─	淘宝基本信息,淘宝收货地址,淘宝消费统计,分类/关键字/出现次数/总金额 http://demo.xinshen.mifengkong.cn:81/api/taobaoindex?user_id=1150
 │  │  ├─ 淘宝交易列表 http://demo.xinshen.mifengkong.cn:81/api/getdetails?user_id=1150
 │  │  ├─
 │  ├─个人征信接口
 │  │  ├─ 征信基本信息 http://demo.xinshen.mifengkong.cn:81/api/creditbasic?user_id=33442
 │  │  ├─ 信贷记录 http://demo.xinshen.mifengkong.cn:81/api/creditrecord?user_id=1150
 │  │  ├─ 信贷卡，购房贷款等账户明细 http://demo.xinshen.mifengkong.cn:81/api/creditrecord?user_id=1150
 │  │  ├─ 公共记录 http://demo.xinshen.mifengkong.cn:81/api/publicinfodetails?user_id=1150
 │  │  ├─ 查询记录 http://demo.xinshen.mifengkong.cn:81/api/querydetails?user_id=1150

 │  ├─网查接口
 │  │  ├─ 芝麻分详情 http://demo.xinshen.mifengkong.cn:81/api/getUserZhimaInfo?user_id=1150
 │  │  ├─ 获取用户至诚阿福所有数据 http://demo.xinshen.mifengkong.cn:81/api/getUserZhichengInfo?user_id=1150

 │  ├─运营商通讯录接口
 │  │  ├─ 运营商,通讯录,通话记录明细 http://demo.xinshen.mifengkong.cn:81/api/telcosdata?user_id=75974
 │  │  ├─ 特殊号码明细 http://demo.xinshen.mifengkong.cn:81/api/specialtel?user_id=1150
 │  │  ├─ 通话记录明细搜索

 │  ├─信审结果接口
 │  │  ├─ 审核结果 http://demo.xinshen.mifengkong.cn:81/api/orderauditresult?task_id=1




 ├─审核订单列表页面接口
 │  ├─  取件 http://demo.xinshen.mifengkong.cn:81/api/orderpick
 │  ├─ 订单列表 http://demo.xinshen.mifengkong.cn:81/api/ordertriallists
 ~~~

 * */

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = React;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var STATE_EDIT = exports.STATE_EDIT = 0;
var STATE_ADD = exports.STATE_ADD = 1;

var ADD = exports.ADD = '1';
var EDIt = exports.EDIt = '0';

var Tip_SUCCESS = exports.Tip_SUCCESS = 'success';
var Tip_INFO = exports.Tip_INFO = 'info';
var Tip_WARNING = exports.Tip_WARNING = 'warning';
var Tip_ERROR = exports.Tip_ERROR = 'error';

var MSG_GETED = exports.MSG_GETED = '获取数据成功';
var MSG_GETING = exports.MSG_GETING = '正在获取数据';
var MSG_DELED = exports.MSG_DELED = '删除成功';
var MSG_SUCCESS = exports.MSG_SUCCESS = 'OK';

var DATA_INNIT = exports.DATA_INNIT = 'DATA_INNIT';

var COMMON_HOLDER = exports.COMMON_HOLDER = '';

var LOADING = exports.LOADING = 'loading';

var CODE_SUCCESS = exports.CODE_SUCCESS = 0;
var STATUS_SUCCESS = exports.STATUS_SUCCESS = 1;
var CODE_UNLOGIN = exports.CODE_UNLOGIN = 90004;

var TYPE_A = exports.TYPE_A = 1; /*内部页面 外部页面*/
var TYPE_B = exports.TYPE_B = 2;

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

__webpack_require__(132);

var BtnsToolBar = function BtnsToolBar(that) {
    return React.createElement(
        "div",
        { className: "btns-tool-bar" },
        that.children
    );
};
exports.default = BtnsToolBar;

/***/ }),
/* 5 */
/***/ (function(module, exports) {

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global = module.exports = typeof window != 'undefined' && window.Math == Math
  ? window : typeof self != 'undefined' && self.Math == Math ? self
  // eslint-disable-next-line no-new-func
  : Function('return this')();
if (typeof __g == 'number') __g = global; // eslint-disable-line no-undef


/***/ }),
/* 6 */
/***/ (function(module, exports) {

var core = module.exports = { version: '2.5.1' };
if (typeof __e == 'number') __e = core; // eslint-disable-line no-undef


/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

// Thank's IE8 for his funny defineProperty
module.exports = !__webpack_require__(16)(function () {
  return Object.defineProperty({}, 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),
/* 8 */
/***/ (function(module, exports) {

var hasOwnProperty = {}.hasOwnProperty;
module.exports = function (it, key) {
  return hasOwnProperty.call(it, key);
};


/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(15);
var IE8_DOM_DEFINE = __webpack_require__(52);
var toPrimitive = __webpack_require__(41);
var dP = Object.defineProperty;

exports.f = __webpack_require__(7) ? Object.defineProperty : function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPrimitive(P, true);
  anObject(Attributes);
  if (IE8_DOM_DEFINE) try {
    return dP(O, P, Attributes);
  } catch (e) { /* empty */ }
  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported!');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};


/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(5);
var core = __webpack_require__(6);
var ctx = __webpack_require__(50);
var hide = __webpack_require__(11);
var PROTOTYPE = 'prototype';

var $export = function (type, name, source) {
  var IS_FORCED = type & $export.F;
  var IS_GLOBAL = type & $export.G;
  var IS_STATIC = type & $export.S;
  var IS_PROTO = type & $export.P;
  var IS_BIND = type & $export.B;
  var IS_WRAP = type & $export.W;
  var exports = IS_GLOBAL ? core : core[name] || (core[name] = {});
  var expProto = exports[PROTOTYPE];
  var target = IS_GLOBAL ? global : IS_STATIC ? global[name] : (global[name] || {})[PROTOTYPE];
  var key, own, out;
  if (IS_GLOBAL) source = name;
  for (key in source) {
    // contains in native
    own = !IS_FORCED && target && target[key] !== undefined;
    if (own && key in exports) continue;
    // export native or passed
    out = own ? target[key] : source[key];
    // prevent global pollution for namespaces
    exports[key] = IS_GLOBAL && typeof target[key] != 'function' ? source[key]
    // bind timers to global for call from export context
    : IS_BIND && own ? ctx(out, global)
    // wrap global constructors for prevent change them in library
    : IS_WRAP && target[key] == out ? (function (C) {
      var F = function (a, b, c) {
        if (this instanceof C) {
          switch (arguments.length) {
            case 0: return new C();
            case 1: return new C(a);
            case 2: return new C(a, b);
          } return new C(a, b, c);
        } return C.apply(this, arguments);
      };
      F[PROTOTYPE] = C[PROTOTYPE];
      return F;
    // make static versions for prototype methods
    })(out) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
    // export proto methods to core.%CONSTRUCTOR%.methods.%NAME%
    if (IS_PROTO) {
      (exports.virtual || (exports.virtual = {}))[key] = out;
      // export proto methods to core.%CONSTRUCTOR%.prototype.%NAME%
      if (type & $export.R && expProto && !expProto[key]) hide(expProto, key, out);
    }
  }
};
// type bitmap
$export.F = 1;   // forced
$export.G = 2;   // global
$export.S = 4;   // static
$export.P = 8;   // proto
$export.B = 16;  // bind
$export.W = 32;  // wrap
$export.U = 64;  // safe
$export.R = 128; // real proto method for `library`
module.exports = $export;


/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__(9);
var createDesc = __webpack_require__(26);
module.exports = __webpack_require__(7) ? function (object, key, value) {
  return dP.f(object, key, createDesc(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};


/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

// to indexed object, toObject with fallback for non-array-like ES3 strings
var IObject = __webpack_require__(53);
var defined = __webpack_require__(31);
module.exports = function (it) {
  return IObject(defined(it));
};


/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

var store = __webpack_require__(39)('wks');
var uid = __webpack_require__(27);
var Symbol = __webpack_require__(5).Symbol;
var USE_SYMBOL = typeof Symbol == 'function';

var $exports = module.exports = function (name) {
  return store[name] || (store[name] =
    USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)('Symbol.' + name));
};

$exports.store = store;


/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _assign = __webpack_require__(88);

var _assign2 = _interopRequireDefault(_assign);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _assign2.default || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];

    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
};

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(17);
module.exports = function (it) {
  if (!isObject(it)) throw TypeError(it + ' is not an object!');
  return it;
};


/***/ }),
/* 16 */
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return !!exec();
  } catch (e) {
    return true;
  }
};


/***/ }),
/* 17 */
/***/ (function(module, exports) {

module.exports = function (it) {
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};


/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

exports.default = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _defineProperty = __webpack_require__(47);

var _defineProperty2 = _interopRequireDefault(_defineProperty);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      (0, _defineProperty2.default)(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _defineProperty = __webpack_require__(47);

var _defineProperty2 = _interopRequireDefault(_defineProperty);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (obj, key, value) {
  if (key in obj) {
    (0, _defineProperty2.default)(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
};

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _setPrototypeOf = __webpack_require__(90);

var _setPrototypeOf2 = _interopRequireDefault(_setPrototypeOf);

var _create = __webpack_require__(89);

var _create2 = _interopRequireDefault(_create);

var _typeof2 = __webpack_require__(23);

var _typeof3 = _interopRequireDefault(_typeof2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === "undefined" ? "undefined" : (0, _typeof3.default)(superClass)));
  }

  subClass.prototype = (0, _create2.default)(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (superClass) _setPrototypeOf2.default ? (0, _setPrototypeOf2.default)(subClass, superClass) : subClass.__proto__ = superClass;
};

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _typeof2 = __webpack_require__(23);

var _typeof3 = _interopRequireDefault(_typeof2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return call && ((typeof call === "undefined" ? "undefined" : (0, _typeof3.default)(call)) === "object" || typeof call === "function") ? call : self;
};

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _iterator = __webpack_require__(92);

var _iterator2 = _interopRequireDefault(_iterator);

var _symbol = __webpack_require__(91);

var _symbol2 = _interopRequireDefault(_symbol);

var _typeof = typeof _symbol2.default === "function" && typeof _iterator2.default === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof _symbol2.default === "function" && obj.constructor === _symbol2.default && obj !== _symbol2.default.prototype ? "symbol" : typeof obj; };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = typeof _symbol2.default === "function" && _typeof(_iterator2.default) === "symbol" ? function (obj) {
  return typeof obj === "undefined" ? "undefined" : _typeof(obj);
} : function (obj) {
  return obj && typeof _symbol2.default === "function" && obj.constructor === _symbol2.default && obj !== _symbol2.default.prototype ? "symbol" : typeof obj === "undefined" ? "undefined" : _typeof(obj);
};

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.14 / 15.2.3.14 Object.keys(O)
var $keys = __webpack_require__(57);
var enumBugKeys = __webpack_require__(32);

module.exports = Object.keys || function keys(O) {
  return $keys(O, enumBugKeys);
};


/***/ }),
/* 25 */
/***/ (function(module, exports) {

exports.f = {}.propertyIsEnumerable;


/***/ }),
/* 26 */
/***/ (function(module, exports) {

module.exports = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};


/***/ }),
/* 27 */
/***/ (function(module, exports) {

var id = 0;
var px = Math.random();
module.exports = function (key) {
  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
};


/***/ }),
/* 28 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 */

if (false) {
  var REACT_ELEMENT_TYPE = (typeof Symbol === 'function' &&
    Symbol.for &&
    Symbol.for('react.element')) ||
    0xeac7;

  var isValidElement = function(object) {
    return typeof object === 'object' &&
      object !== null &&
      object.$$typeof === REACT_ELEMENT_TYPE;
  };

  // By explicitly using `prop-types` you are opting into new development behavior.
  // http://fb.me/prop-types-in-prod
  var throwOnDirectAccess = true;
  module.exports = require('./factoryWithTypeCheckers')(isValidElement, throwOnDirectAccess);
} else {
  // By explicitly using `prop-types` you are opting into new production behavior.
  // http://fb.me/prop-types-in-prod
  module.exports = __webpack_require__(142)();
}


/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
  Copyright (c) 2016 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/
/* global define */

(function () {
	'use strict';

	var hasOwn = {}.hasOwnProperty;

	function classNames () {
		var classes = [];

		for (var i = 0; i < arguments.length; i++) {
			var arg = arguments[i];
			if (!arg) continue;

			var argType = typeof arg;

			if (argType === 'string' || argType === 'number') {
				classes.push(arg);
			} else if (Array.isArray(arg)) {
				classes.push(classNames.apply(null, arg));
			} else if (argType === 'object') {
				for (var key in arg) {
					if (hasOwn.call(arg, key) && arg[key]) {
						classes.push(key);
					}
				}
			}
		}

		return classes.join(' ');
	}

	if (typeof module !== 'undefined' && module.exports) {
		module.exports = classNames;
	} else if (true) {
		// register as 'classnames', consistent with npm package name
		!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = function () {
			return classNames;
		}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	} else {
		window.classNames = classNames;
	}
}());


/***/ }),
/* 31 */
/***/ (function(module, exports) {

// 7.2.1 RequireObjectCoercible(argument)
module.exports = function (it) {
  if (it == undefined) throw TypeError("Can't call method on  " + it);
  return it;
};


/***/ }),
/* 32 */
/***/ (function(module, exports) {

// IE 8- don't enum bug keys
module.exports = (
  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
).split(',');


/***/ }),
/* 33 */
/***/ (function(module, exports) {

module.exports = {};


/***/ }),
/* 34 */
/***/ (function(module, exports) {

module.exports = true;


/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
var anObject = __webpack_require__(15);
var dPs = __webpack_require__(111);
var enumBugKeys = __webpack_require__(32);
var IE_PROTO = __webpack_require__(38)('IE_PROTO');
var Empty = function () { /* empty */ };
var PROTOTYPE = 'prototype';

// Create object with fake `null` prototype: use iframe Object with cleared prototype
var createDict = function () {
  // Thrash, waste and sodomy: IE GC bug
  var iframe = __webpack_require__(51)('iframe');
  var i = enumBugKeys.length;
  var lt = '<';
  var gt = '>';
  var iframeDocument;
  iframe.style.display = 'none';
  __webpack_require__(105).appendChild(iframe);
  iframe.src = 'javascript:'; // eslint-disable-line no-script-url
  // createDict = iframe.contentWindow.Object;
  // html.removeChild(iframe);
  iframeDocument = iframe.contentWindow.document;
  iframeDocument.open();
  iframeDocument.write(lt + 'script' + gt + 'document.F=Object' + lt + '/script' + gt);
  iframeDocument.close();
  createDict = iframeDocument.F;
  while (i--) delete createDict[PROTOTYPE][enumBugKeys[i]];
  return createDict();
};

module.exports = Object.create || function create(O, Properties) {
  var result;
  if (O !== null) {
    Empty[PROTOTYPE] = anObject(O);
    result = new Empty();
    Empty[PROTOTYPE] = null;
    // add "__proto__" for Object.getPrototypeOf polyfill
    result[IE_PROTO] = O;
  } else result = createDict();
  return Properties === undefined ? result : dPs(result, Properties);
};


/***/ }),
/* 36 */
/***/ (function(module, exports) {

exports.f = Object.getOwnPropertySymbols;


/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

var def = __webpack_require__(9).f;
var has = __webpack_require__(8);
var TAG = __webpack_require__(13)('toStringTag');

module.exports = function (it, tag, stat) {
  if (it && !has(it = stat ? it : it.prototype, TAG)) def(it, TAG, { configurable: true, value: tag });
};


/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

var shared = __webpack_require__(39)('keys');
var uid = __webpack_require__(27);
module.exports = function (key) {
  return shared[key] || (shared[key] = uid(key));
};


/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(5);
var SHARED = '__core-js_shared__';
var store = global[SHARED] || (global[SHARED] = {});
module.exports = function (key) {
  return store[key] || (store[key] = {});
};


/***/ }),
/* 40 */
/***/ (function(module, exports) {

// 7.1.4 ToInteger
var ceil = Math.ceil;
var floor = Math.floor;
module.exports = function (it) {
  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
};


/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.1 ToPrimitive(input [, PreferredType])
var isObject = __webpack_require__(17);
// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
module.exports = function (it, S) {
  if (!isObject(it)) return it;
  var fn, val;
  if (S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  if (typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it))) return val;
  if (!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  throw TypeError("Can't convert object to primitive value");
};


/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(5);
var core = __webpack_require__(6);
var LIBRARY = __webpack_require__(34);
var wksExt = __webpack_require__(43);
var defineProperty = __webpack_require__(9).f;
module.exports = function (name) {
  var $Symbol = core.Symbol || (core.Symbol = LIBRARY ? {} : global.Symbol || {});
  if (name.charAt(0) != '_' && !(name in $Symbol)) defineProperty($Symbol, name, { value: wksExt.f(name) });
};


/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

exports.f = __webpack_require__(13);


/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

(function webpackUniversalModuleDefinition(root, factory) {
	if(true)
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["jrbasic"] = factory();
	else
		root["jrbasic"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
/*js cookie操作*/

var _setCookie = exports._setCookie = function _setCookie(c_name, value, expiredays) {
    var exdate = new Date();
    exdate.setDate(exdate.getDate() + expiredays);
    document.cookie = c_name + "=" + escape(value) + (!expiredays ? "" : ";expires=" + exdate.toGMTString());
};

var _getCookie = exports._getCookie = function _getCookie(c_name) {
    if (document.cookie.length > 0) {
        var c_start = document.cookie.indexOf(c_name + "=");
        if (c_start !== -1) {
            c_start = c_start + c_name.length + 1;
            var c_end = document.cookie.indexOf(";", c_start);
            if (c_end === -1) c_end = document.cookie.length;
            return unescape(document.cookie.substring(c_start, c_end));
        }
    }
    return "";
};

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
__webpack_require__(10);
__webpack_require__(6);
__webpack_require__(7);
__webpack_require__(5).polyfill();

var _jrRequest = exports._jrRequest = function _jrRequest(requestObj) {
    /*
     * jrRequest 是一个和redux结合的请求方式requestingAction， successAction， errorAction分别代表请求不同阶段所要做的action
     * requestType 包括POST 和GET两种方式
     * */
    var dispatch = requestObj.dispatch,
        jrApi = requestObj.jrApi,
        fetchPrm = requestObj.fetchPrm,
        requestType = requestObj.requestType,
        requestingAction = requestObj.requestingAction,
        successAction = requestObj.successAction,
        errorAction = requestObj.errorAction,
        extra = requestObj.extra;

    requestingAction && dispatch(requestingAction());
    return _getFetchPromise(jrApi, requestType, fetchPrm).then(function (ret) {
        return dispatch(successAction(ret, extra));
    }).catch(function (error) {
        if (errorAction) {
            return dispatch(errorAction(error));
        } else {
            console.error(error);
        }
    });
};

var _getFetchPromise = exports._getFetchPromise = function _getFetchPromise(jrApi, requestType, fetchPrm) {
    if (requestType === 'POST') {
        return new Promise(function (resolve, reject) {
            var prmdata = '';
            for (var item in fetchPrm) {
                prmdata = prmdata + item + '=' + encodeURIComponent(fetchPrm[item]) + '&';
            }
            fetch(jrApi, {
                credentials: 'include',
                method: 'POST',
                headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
                body: prmdata
            }).then(function (response) {
                response.json().then(function (val) {
                    resolve(val);
                });
            }).catch(function (err) {
                reject(err);
            });
        });
    } else {
        return new Promise(function (resolve, reject) {
            var thisUrl = jrApi + '?';
            for (var item in fetchPrm) {
                thisUrl = thisUrl + item + '=' + encodeURIComponent(fetchPrm[item]) + '&';
            }
            fetch(thisUrl, { credentials: 'include' }).then(function (response) {
                response.json().then(function (val) {
                    resolve(val);
                });
            }).catch(function (err) {
                reject(err);
            });
        });
    }
};

var _fetchGet = exports._fetchGet = function _fetchGet(jrApi, fetchPrm) {
    return new Promise(function (resolve, reject) {
        var thisUrl = jrApi;
        if (fetchPrm) {
            thisUrl = thisUrl + '?';
        }
        for (var item in fetchPrm) {
            thisUrl = thisUrl + item + '=' + encodeURIComponent(fetchPrm[item]) + '&';
        }
        fetch(thisUrl, { credentials: 'include' }).then(function (response) {
            response.json().then(function (val) {
                resolve(val);
            });
        }).catch(function (err) {
            reject(err);
        });
    });
};

var _fetchPost = exports._fetchPost = function _fetchPost(jrApi, fetchPrm) {
    return new Promise(function (resolve, reject) {
        var prmdata = '';
        for (var item in fetchPrm) {
            prmdata = prmdata + item + '=' + encodeURIComponent(fetchPrm[item]) + '&';
        }
        fetch(jrApi, {
            credentials: 'include',
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            body: prmdata
        }).then(function (response) {
            response.json().then(function (val) {
                resolve(val);
            });
        }).catch(function (err) {
            reject(err);
        });
    });
};
var _AjaxGet = exports._AjaxGet = function _AjaxGet(jrApi, fetchPrm, fun, errorFun) {

    var thisUrl = jrApi + '?';
    for (var item in fetchPrm) {
        thisUrl = thisUrl + item + '=' + encodeURIComponent(fetchPrm[item]) + '&';
    }
    fetch(thisUrl, { credentials: 'include' }).then(function (response) {
        response.json().then(function (val) {
            fun(val);
        });
    }).catch(function (err) {
        errorFun && errorFun(err);
    });
};

var _AjaxPost = exports._AjaxPost = function _AjaxPost(jrApi, fetchPrm, fun, errorFun) {
    var prmdata = '';
    for (var item in fetchPrm) {
        prmdata = prmdata + item + '=' + encodeURIComponent(fetchPrm[item]) + '&';
    }
    fetch(jrApi, {
        credentials: 'include',
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: prmdata
    }).then(function (response) {
        response.json().then(function (val) {
            fun(val);
        });
    }).catch(function (err) {
        errorFun && errorFun(err);
    });
};

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
var _addJrLog = exports._addJrLog = function _addJrLog(prms) {

    var howLog = {
        gifUrl: 'http://frio.mifengkong.cn/1.gif',
        prm: {},
        event_key: ''
    };
    Object.assign(howLog, prms);

    var gifUrl = howLog.gifUrl,
        prm = howLog.prm,
        event_key = howLog.event_key;


    var logGif = document.createElement('img');

    gifUrl = gifUrl + '?event_key=' + event_key;

    for (var item in prm) {
        gifUrl = gifUrl + ('&' + item + '=' + encodeURIComponent(prm[item]));
    }
    logGif.src = gifUrl;
    logGif.style.display = 'none';
    document.getElementById('root').appendChild(logGif);
};

var _addGrowingLog = exports._addGrowingLog = function _addGrowingLog(prms) {

    var howLog = {
        prm: {},
        event_name: ''
    };

    Object.assign(howLog, prms);

    var prm = howLog.prm,
        event_name = howLog.event_name;


    try {
        window._vds.track(event_name, prm);
    } catch (e) {
        console.log(e);
    }
};

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
var _remSet = exports._remSet = function _remSet(doc, win) {
    var docEl = doc.documentElement,
        resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize';
    var recalc = function recalc() {
        var clientWidth = docEl.clientWidth;
        if (!clientWidth) return;
        docEl.style.fontSize = 20 * (clientWidth / 375) + 'px'; /*计算出来的结果表示 1rem等于20px*/
    };
    if (!doc.addEventListener) return;
    win.addEventListener(resizeEvt, recalc, false);
    doc.addEventListener('DOMContentLoaded', recalc, false);
};

var _searchToObj = exports._searchToObj = function _searchToObj(url) {
    /*这个方法将"?letter=2&opp=23"这种string转换为JS对象形式，方便获取URL的参数*/
    var theRequest = {};
    if (url.indexOf("?") !== -1) {
        var str = url.substr(1);
        var strs = str.split("&");
        for (var i = 0; i < strs.length; i++) {
            theRequest[strs[i].split("=")[0]] = unescape(strs[i].split("=")[1]);
        }
    }
    return theRequest;
};

var _checkTel = exports._checkTel = function _checkTel(tel) {
    var mobile = /^1[3|5|4|6|8|7|]\d{9}$/,
        phone = /^0\d{2,3}-?\d{7,8}$/;
    return mobile.test(tel) || phone.test(tel);
};

var _isIosAndroid = exports._isIosAndroid = function _isIosAndroid() {
    //判断终端类型
    var u = navigator.userAgent;
    var isAndroid = u.indexOf('Android') > -1 || u.indexOf('Adr') > -1; //android终端
    var isiOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); //ios终端
    return {
        isAndroid: isAndroid,
        isiOS: isiOS
    };
};

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getCookie = exports.setCookie = exports.addGrowingLog = exports.addJrLog = exports.isIosAndroid = exports.checkTel = exports.searchToObj = exports.remSet = exports.AjaxPost = exports.AjaxGet = exports.fetchPost = exports.fetchGet = exports.getFetchPromise = exports.jrRequest = undefined;

var _jrFetch = __webpack_require__(1);

var _jrCookie = __webpack_require__(0);

var _others = __webpack_require__(3);

var _jrLog = __webpack_require__(2);

/*fetch请求*/
var jrRequest = exports.jrRequest = _jrFetch._jrRequest;
var getFetchPromise = exports.getFetchPromise = _jrFetch._getFetchPromise;
var fetchGet = exports.fetchGet = _jrFetch._fetchGet;
var fetchPost = exports.fetchPost = _jrFetch._fetchPost;
var AjaxGet = exports.AjaxGet = _jrFetch._AjaxGet;
var AjaxPost = exports.AjaxPost = _jrFetch._AjaxPost;
/*others其他*/
var remSet = exports.remSet = _others._remSet;
var searchToObj = exports.searchToObj = _others._searchToObj;
var checkTel = exports.checkTel = _others._checkTel;
var isIosAndroid = exports.isIosAndroid = _others._isIosAndroid;
/*log埋点*/
var addJrLog = exports.addJrLog = _jrLog._addJrLog;
var addGrowingLog = exports.addGrowingLog = _jrLog._addGrowingLog;
/*cookie操作*/
var setCookie = exports.setCookie = _jrCookie._setCookie;
var getCookie = exports.getCookie = _jrCookie._getCookie;

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(process, global) {var require;/*!
 * @overview es6-promise - a tiny implementation of Promises/A+.
 * @copyright Copyright (c) 2014 Yehuda Katz, Tom Dale, Stefan Penner and contributors (Conversion to ES6 API by Jake Archibald)
 * @license   Licensed under MIT license
 *            See https://raw.githubusercontent.com/stefanpenner/es6-promise/master/LICENSE
 * @version   4.1.1
 */

(function (global, factory) {
	 true ? module.exports = factory() :
	typeof define === 'function' && define.amd ? define(factory) :
	(global.ES6Promise = factory());
}(this, (function () { 'use strict';

function objectOrFunction(x) {
  var type = typeof x;
  return x !== null && (type === 'object' || type === 'function');
}

function isFunction(x) {
  return typeof x === 'function';
}

var _isArray = undefined;
if (Array.isArray) {
  _isArray = Array.isArray;
} else {
  _isArray = function (x) {
    return Object.prototype.toString.call(x) === '[object Array]';
  };
}

var isArray = _isArray;

var len = 0;
var vertxNext = undefined;
var customSchedulerFn = undefined;

var asap = function asap(callback, arg) {
  queue[len] = callback;
  queue[len + 1] = arg;
  len += 2;
  if (len === 2) {
    // If len is 2, that means that we need to schedule an async flush.
    // If additional callbacks are queued before the queue is flushed, they
    // will be processed by this flush that we are scheduling.
    if (customSchedulerFn) {
      customSchedulerFn(flush);
    } else {
      scheduleFlush();
    }
  }
};

function setScheduler(scheduleFn) {
  customSchedulerFn = scheduleFn;
}

function setAsap(asapFn) {
  asap = asapFn;
}

var browserWindow = typeof window !== 'undefined' ? window : undefined;
var browserGlobal = browserWindow || {};
var BrowserMutationObserver = browserGlobal.MutationObserver || browserGlobal.WebKitMutationObserver;
var isNode = typeof self === 'undefined' && typeof process !== 'undefined' && ({}).toString.call(process) === '[object process]';

// test for web worker but not in IE10
var isWorker = typeof Uint8ClampedArray !== 'undefined' && typeof importScripts !== 'undefined' && typeof MessageChannel !== 'undefined';

// node
function useNextTick() {
  // node version 0.10.x displays a deprecation warning when nextTick is used recursively
  // see https://github.com/cujojs/when/issues/410 for details
  return function () {
    return process.nextTick(flush);
  };
}

// vertx
function useVertxTimer() {
  if (typeof vertxNext !== 'undefined') {
    return function () {
      vertxNext(flush);
    };
  }

  return useSetTimeout();
}

function useMutationObserver() {
  var iterations = 0;
  var observer = new BrowserMutationObserver(flush);
  var node = document.createTextNode('');
  observer.observe(node, { characterData: true });

  return function () {
    node.data = iterations = ++iterations % 2;
  };
}

// web worker
function useMessageChannel() {
  var channel = new MessageChannel();
  channel.port1.onmessage = flush;
  return function () {
    return channel.port2.postMessage(0);
  };
}

function useSetTimeout() {
  // Store setTimeout reference so es6-promise will be unaffected by
  // other code modifying setTimeout (like sinon.useFakeTimers())
  var globalSetTimeout = setTimeout;
  return function () {
    return globalSetTimeout(flush, 1);
  };
}

var queue = new Array(1000);
function flush() {
  for (var i = 0; i < len; i += 2) {
    var callback = queue[i];
    var arg = queue[i + 1];

    callback(arg);

    queue[i] = undefined;
    queue[i + 1] = undefined;
  }

  len = 0;
}

function attemptVertx() {
  try {
    var r = require;
    var vertx = __webpack_require__(11);
    vertxNext = vertx.runOnLoop || vertx.runOnContext;
    return useVertxTimer();
  } catch (e) {
    return useSetTimeout();
  }
}

var scheduleFlush = undefined;
// Decide what async method to use to triggering processing of queued callbacks:
if (isNode) {
  scheduleFlush = useNextTick();
} else if (BrowserMutationObserver) {
  scheduleFlush = useMutationObserver();
} else if (isWorker) {
  scheduleFlush = useMessageChannel();
} else if (browserWindow === undefined && "function" === 'function') {
  scheduleFlush = attemptVertx();
} else {
  scheduleFlush = useSetTimeout();
}

function then(onFulfillment, onRejection) {
  var _arguments = arguments;

  var parent = this;

  var child = new this.constructor(noop);

  if (child[PROMISE_ID] === undefined) {
    makePromise(child);
  }

  var _state = parent._state;

  if (_state) {
    (function () {
      var callback = _arguments[_state - 1];
      asap(function () {
        return invokeCallback(_state, child, callback, parent._result);
      });
    })();
  } else {
    subscribe(parent, child, onFulfillment, onRejection);
  }

  return child;
}

/**
  `Promise.resolve` returns a promise that will become resolved with the
  passed `value`. It is shorthand for the following:

  ```javascript
  let promise = new Promise(function(resolve, reject){
    resolve(1);
  });

  promise.then(function(value){
    // value === 1
  });
  ```

  Instead of writing the above, your code now simply becomes the following:

  ```javascript
  let promise = Promise.resolve(1);

  promise.then(function(value){
    // value === 1
  });
  ```

  @method resolve
  @static
  @param {Any} value value that the returned promise will be resolved with
  Useful for tooling.
  @return {Promise} a promise that will become fulfilled with the given
  `value`
*/
function resolve$1(object) {
  /*jshint validthis:true */
  var Constructor = this;

  if (object && typeof object === 'object' && object.constructor === Constructor) {
    return object;
  }

  var promise = new Constructor(noop);
  resolve(promise, object);
  return promise;
}

var PROMISE_ID = Math.random().toString(36).substring(16);

function noop() {}

var PENDING = void 0;
var FULFILLED = 1;
var REJECTED = 2;

var GET_THEN_ERROR = new ErrorObject();

function selfFulfillment() {
  return new TypeError("You cannot resolve a promise with itself");
}

function cannotReturnOwn() {
  return new TypeError('A promises callback cannot return that same promise.');
}

function getThen(promise) {
  try {
    return promise.then;
  } catch (error) {
    GET_THEN_ERROR.error = error;
    return GET_THEN_ERROR;
  }
}

function tryThen(then$$1, value, fulfillmentHandler, rejectionHandler) {
  try {
    then$$1.call(value, fulfillmentHandler, rejectionHandler);
  } catch (e) {
    return e;
  }
}

function handleForeignThenable(promise, thenable, then$$1) {
  asap(function (promise) {
    var sealed = false;
    var error = tryThen(then$$1, thenable, function (value) {
      if (sealed) {
        return;
      }
      sealed = true;
      if (thenable !== value) {
        resolve(promise, value);
      } else {
        fulfill(promise, value);
      }
    }, function (reason) {
      if (sealed) {
        return;
      }
      sealed = true;

      reject(promise, reason);
    }, 'Settle: ' + (promise._label || ' unknown promise'));

    if (!sealed && error) {
      sealed = true;
      reject(promise, error);
    }
  }, promise);
}

function handleOwnThenable(promise, thenable) {
  if (thenable._state === FULFILLED) {
    fulfill(promise, thenable._result);
  } else if (thenable._state === REJECTED) {
    reject(promise, thenable._result);
  } else {
    subscribe(thenable, undefined, function (value) {
      return resolve(promise, value);
    }, function (reason) {
      return reject(promise, reason);
    });
  }
}

function handleMaybeThenable(promise, maybeThenable, then$$1) {
  if (maybeThenable.constructor === promise.constructor && then$$1 === then && maybeThenable.constructor.resolve === resolve$1) {
    handleOwnThenable(promise, maybeThenable);
  } else {
    if (then$$1 === GET_THEN_ERROR) {
      reject(promise, GET_THEN_ERROR.error);
      GET_THEN_ERROR.error = null;
    } else if (then$$1 === undefined) {
      fulfill(promise, maybeThenable);
    } else if (isFunction(then$$1)) {
      handleForeignThenable(promise, maybeThenable, then$$1);
    } else {
      fulfill(promise, maybeThenable);
    }
  }
}

function resolve(promise, value) {
  if (promise === value) {
    reject(promise, selfFulfillment());
  } else if (objectOrFunction(value)) {
    handleMaybeThenable(promise, value, getThen(value));
  } else {
    fulfill(promise, value);
  }
}

function publishRejection(promise) {
  if (promise._onerror) {
    promise._onerror(promise._result);
  }

  publish(promise);
}

function fulfill(promise, value) {
  if (promise._state !== PENDING) {
    return;
  }

  promise._result = value;
  promise._state = FULFILLED;

  if (promise._subscribers.length !== 0) {
    asap(publish, promise);
  }
}

function reject(promise, reason) {
  if (promise._state !== PENDING) {
    return;
  }
  promise._state = REJECTED;
  promise._result = reason;

  asap(publishRejection, promise);
}

function subscribe(parent, child, onFulfillment, onRejection) {
  var _subscribers = parent._subscribers;
  var length = _subscribers.length;

  parent._onerror = null;

  _subscribers[length] = child;
  _subscribers[length + FULFILLED] = onFulfillment;
  _subscribers[length + REJECTED] = onRejection;

  if (length === 0 && parent._state) {
    asap(publish, parent);
  }
}

function publish(promise) {
  var subscribers = promise._subscribers;
  var settled = promise._state;

  if (subscribers.length === 0) {
    return;
  }

  var child = undefined,
      callback = undefined,
      detail = promise._result;

  for (var i = 0; i < subscribers.length; i += 3) {
    child = subscribers[i];
    callback = subscribers[i + settled];

    if (child) {
      invokeCallback(settled, child, callback, detail);
    } else {
      callback(detail);
    }
  }

  promise._subscribers.length = 0;
}

function ErrorObject() {
  this.error = null;
}

var TRY_CATCH_ERROR = new ErrorObject();

function tryCatch(callback, detail) {
  try {
    return callback(detail);
  } catch (e) {
    TRY_CATCH_ERROR.error = e;
    return TRY_CATCH_ERROR;
  }
}

function invokeCallback(settled, promise, callback, detail) {
  var hasCallback = isFunction(callback),
      value = undefined,
      error = undefined,
      succeeded = undefined,
      failed = undefined;

  if (hasCallback) {
    value = tryCatch(callback, detail);

    if (value === TRY_CATCH_ERROR) {
      failed = true;
      error = value.error;
      value.error = null;
    } else {
      succeeded = true;
    }

    if (promise === value) {
      reject(promise, cannotReturnOwn());
      return;
    }
  } else {
    value = detail;
    succeeded = true;
  }

  if (promise._state !== PENDING) {
    // noop
  } else if (hasCallback && succeeded) {
      resolve(promise, value);
    } else if (failed) {
      reject(promise, error);
    } else if (settled === FULFILLED) {
      fulfill(promise, value);
    } else if (settled === REJECTED) {
      reject(promise, value);
    }
}

function initializePromise(promise, resolver) {
  try {
    resolver(function resolvePromise(value) {
      resolve(promise, value);
    }, function rejectPromise(reason) {
      reject(promise, reason);
    });
  } catch (e) {
    reject(promise, e);
  }
}

var id = 0;
function nextId() {
  return id++;
}

function makePromise(promise) {
  promise[PROMISE_ID] = id++;
  promise._state = undefined;
  promise._result = undefined;
  promise._subscribers = [];
}

function Enumerator$1(Constructor, input) {
  this._instanceConstructor = Constructor;
  this.promise = new Constructor(noop);

  if (!this.promise[PROMISE_ID]) {
    makePromise(this.promise);
  }

  if (isArray(input)) {
    this.length = input.length;
    this._remaining = input.length;

    this._result = new Array(this.length);

    if (this.length === 0) {
      fulfill(this.promise, this._result);
    } else {
      this.length = this.length || 0;
      this._enumerate(input);
      if (this._remaining === 0) {
        fulfill(this.promise, this._result);
      }
    }
  } else {
    reject(this.promise, validationError());
  }
}

function validationError() {
  return new Error('Array Methods must be provided an Array');
}

Enumerator$1.prototype._enumerate = function (input) {
  for (var i = 0; this._state === PENDING && i < input.length; i++) {
    this._eachEntry(input[i], i);
  }
};

Enumerator$1.prototype._eachEntry = function (entry, i) {
  var c = this._instanceConstructor;
  var resolve$$1 = c.resolve;

  if (resolve$$1 === resolve$1) {
    var _then = getThen(entry);

    if (_then === then && entry._state !== PENDING) {
      this._settledAt(entry._state, i, entry._result);
    } else if (typeof _then !== 'function') {
      this._remaining--;
      this._result[i] = entry;
    } else if (c === Promise$2) {
      var promise = new c(noop);
      handleMaybeThenable(promise, entry, _then);
      this._willSettleAt(promise, i);
    } else {
      this._willSettleAt(new c(function (resolve$$1) {
        return resolve$$1(entry);
      }), i);
    }
  } else {
    this._willSettleAt(resolve$$1(entry), i);
  }
};

Enumerator$1.prototype._settledAt = function (state, i, value) {
  var promise = this.promise;

  if (promise._state === PENDING) {
    this._remaining--;

    if (state === REJECTED) {
      reject(promise, value);
    } else {
      this._result[i] = value;
    }
  }

  if (this._remaining === 0) {
    fulfill(promise, this._result);
  }
};

Enumerator$1.prototype._willSettleAt = function (promise, i) {
  var enumerator = this;

  subscribe(promise, undefined, function (value) {
    return enumerator._settledAt(FULFILLED, i, value);
  }, function (reason) {
    return enumerator._settledAt(REJECTED, i, reason);
  });
};

/**
  `Promise.all` accepts an array of promises, and returns a new promise which
  is fulfilled with an array of fulfillment values for the passed promises, or
  rejected with the reason of the first passed promise to be rejected. It casts all
  elements of the passed iterable to promises as it runs this algorithm.

  Example:

  ```javascript
  let promise1 = resolve(1);
  let promise2 = resolve(2);
  let promise3 = resolve(3);
  let promises = [ promise1, promise2, promise3 ];

  Promise.all(promises).then(function(array){
    // The array here would be [ 1, 2, 3 ];
  });
  ```

  If any of the `promises` given to `all` are rejected, the first promise
  that is rejected will be given as an argument to the returned promises's
  rejection handler. For example:

  Example:

  ```javascript
  let promise1 = resolve(1);
  let promise2 = reject(new Error("2"));
  let promise3 = reject(new Error("3"));
  let promises = [ promise1, promise2, promise3 ];

  Promise.all(promises).then(function(array){
    // Code here never runs because there are rejected promises!
  }, function(error) {
    // error.message === "2"
  });
  ```

  @method all
  @static
  @param {Array} entries array of promises
  @param {String} label optional string for labeling the promise.
  Useful for tooling.
  @return {Promise} promise that is fulfilled when all `promises` have been
  fulfilled, or rejected if any of them become rejected.
  @static
*/
function all$1(entries) {
  return new Enumerator$1(this, entries).promise;
}

/**
  `Promise.race` returns a new promise which is settled in the same way as the
  first passed promise to settle.

  Example:

  ```javascript
  let promise1 = new Promise(function(resolve, reject){
    setTimeout(function(){
      resolve('promise 1');
    }, 200);
  });

  let promise2 = new Promise(function(resolve, reject){
    setTimeout(function(){
      resolve('promise 2');
    }, 100);
  });

  Promise.race([promise1, promise2]).then(function(result){
    // result === 'promise 2' because it was resolved before promise1
    // was resolved.
  });
  ```

  `Promise.race` is deterministic in that only the state of the first
  settled promise matters. For example, even if other promises given to the
  `promises` array argument are resolved, but the first settled promise has
  become rejected before the other promises became fulfilled, the returned
  promise will become rejected:

  ```javascript
  let promise1 = new Promise(function(resolve, reject){
    setTimeout(function(){
      resolve('promise 1');
    }, 200);
  });

  let promise2 = new Promise(function(resolve, reject){
    setTimeout(function(){
      reject(new Error('promise 2'));
    }, 100);
  });

  Promise.race([promise1, promise2]).then(function(result){
    // Code here never runs
  }, function(reason){
    // reason.message === 'promise 2' because promise 2 became rejected before
    // promise 1 became fulfilled
  });
  ```

  An example real-world use case is implementing timeouts:

  ```javascript
  Promise.race([ajax('foo.json'), timeout(5000)])
  ```

  @method race
  @static
  @param {Array} promises array of promises to observe
  Useful for tooling.
  @return {Promise} a promise which settles in the same way as the first passed
  promise to settle.
*/
function race$1(entries) {
  /*jshint validthis:true */
  var Constructor = this;

  if (!isArray(entries)) {
    return new Constructor(function (_, reject) {
      return reject(new TypeError('You must pass an array to race.'));
    });
  } else {
    return new Constructor(function (resolve, reject) {
      var length = entries.length;
      for (var i = 0; i < length; i++) {
        Constructor.resolve(entries[i]).then(resolve, reject);
      }
    });
  }
}

/**
  `Promise.reject` returns a promise rejected with the passed `reason`.
  It is shorthand for the following:

  ```javascript
  let promise = new Promise(function(resolve, reject){
    reject(new Error('WHOOPS'));
  });

  promise.then(function(value){
    // Code here doesn't run because the promise is rejected!
  }, function(reason){
    // reason.message === 'WHOOPS'
  });
  ```

  Instead of writing the above, your code now simply becomes the following:

  ```javascript
  let promise = Promise.reject(new Error('WHOOPS'));

  promise.then(function(value){
    // Code here doesn't run because the promise is rejected!
  }, function(reason){
    // reason.message === 'WHOOPS'
  });
  ```

  @method reject
  @static
  @param {Any} reason value that the returned promise will be rejected with.
  Useful for tooling.
  @return {Promise} a promise rejected with the given `reason`.
*/
function reject$1(reason) {
  /*jshint validthis:true */
  var Constructor = this;
  var promise = new Constructor(noop);
  reject(promise, reason);
  return promise;
}

function needsResolver() {
  throw new TypeError('You must pass a resolver function as the first argument to the promise constructor');
}

function needsNew() {
  throw new TypeError("Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function.");
}

/**
  Promise objects represent the eventual result of an asynchronous operation. The
  primary way of interacting with a promise is through its `then` method, which
  registers callbacks to receive either a promise's eventual value or the reason
  why the promise cannot be fulfilled.

  Terminology
  -----------

  - `promise` is an object or function with a `then` method whose behavior conforms to this specification.
  - `thenable` is an object or function that defines a `then` method.
  - `value` is any legal JavaScript value (including undefined, a thenable, or a promise).
  - `exception` is a value that is thrown using the throw statement.
  - `reason` is a value that indicates why a promise was rejected.
  - `settled` the final resting state of a promise, fulfilled or rejected.

  A promise can be in one of three states: pending, fulfilled, or rejected.

  Promises that are fulfilled have a fulfillment value and are in the fulfilled
  state.  Promises that are rejected have a rejection reason and are in the
  rejected state.  A fulfillment value is never a thenable.

  Promises can also be said to *resolve* a value.  If this value is also a
  promise, then the original promise's settled state will match the value's
  settled state.  So a promise that *resolves* a promise that rejects will
  itself reject, and a promise that *resolves* a promise that fulfills will
  itself fulfill.


  Basic Usage:
  ------------

  ```js
  let promise = new Promise(function(resolve, reject) {
    // on success
    resolve(value);

    // on failure
    reject(reason);
  });

  promise.then(function(value) {
    // on fulfillment
  }, function(reason) {
    // on rejection
  });
  ```

  Advanced Usage:
  ---------------

  Promises shine when abstracting away asynchronous interactions such as
  `XMLHttpRequest`s.

  ```js
  function getJSON(url) {
    return new Promise(function(resolve, reject){
      let xhr = new XMLHttpRequest();

      xhr.open('GET', url);
      xhr.onreadystatechange = handler;
      xhr.responseType = 'json';
      xhr.setRequestHeader('Accept', 'application/json');
      xhr.send();

      function handler() {
        if (this.readyState === this.DONE) {
          if (this.status === 200) {
            resolve(this.response);
          } else {
            reject(new Error('getJSON: `' + url + '` failed with status: [' + this.status + ']'));
          }
        }
      };
    });
  }

  getJSON('/posts.json').then(function(json) {
    // on fulfillment
  }, function(reason) {
    // on rejection
  });
  ```

  Unlike callbacks, promises are great composable primitives.

  ```js
  Promise.all([
    getJSON('/posts'),
    getJSON('/comments')
  ]).then(function(values){
    values[0] // => postsJSON
    values[1] // => commentsJSON

    return values;
  });
  ```

  @class Promise
  @param {function} resolver
  Useful for tooling.
  @constructor
*/
function Promise$2(resolver) {
  this[PROMISE_ID] = nextId();
  this._result = this._state = undefined;
  this._subscribers = [];

  if (noop !== resolver) {
    typeof resolver !== 'function' && needsResolver();
    this instanceof Promise$2 ? initializePromise(this, resolver) : needsNew();
  }
}

Promise$2.all = all$1;
Promise$2.race = race$1;
Promise$2.resolve = resolve$1;
Promise$2.reject = reject$1;
Promise$2._setScheduler = setScheduler;
Promise$2._setAsap = setAsap;
Promise$2._asap = asap;

Promise$2.prototype = {
  constructor: Promise$2,

  /**
    The primary way of interacting with a promise is through its `then` method,
    which registers callbacks to receive either a promise's eventual value or the
    reason why the promise cannot be fulfilled.
  
    ```js
    findUser().then(function(user){
      // user is available
    }, function(reason){
      // user is unavailable, and you are given the reason why
    });
    ```
  
    Chaining
    --------
  
    The return value of `then` is itself a promise.  This second, 'downstream'
    promise is resolved with the return value of the first promise's fulfillment
    or rejection handler, or rejected if the handler throws an exception.
  
    ```js
    findUser().then(function (user) {
      return user.name;
    }, function (reason) {
      return 'default name';
    }).then(function (userName) {
      // If `findUser` fulfilled, `userName` will be the user's name, otherwise it
      // will be `'default name'`
    });
  
    findUser().then(function (user) {
      throw new Error('Found user, but still unhappy');
    }, function (reason) {
      throw new Error('`findUser` rejected and we're unhappy');
    }).then(function (value) {
      // never reached
    }, function (reason) {
      // if `findUser` fulfilled, `reason` will be 'Found user, but still unhappy'.
      // If `findUser` rejected, `reason` will be '`findUser` rejected and we're unhappy'.
    });
    ```
    If the downstream promise does not specify a rejection handler, rejection reasons will be propagated further downstream.
  
    ```js
    findUser().then(function (user) {
      throw new PedagogicalException('Upstream error');
    }).then(function (value) {
      // never reached
    }).then(function (value) {
      // never reached
    }, function (reason) {
      // The `PedgagocialException` is propagated all the way down to here
    });
    ```
  
    Assimilation
    ------------
  
    Sometimes the value you want to propagate to a downstream promise can only be
    retrieved asynchronously. This can be achieved by returning a promise in the
    fulfillment or rejection handler. The downstream promise will then be pending
    until the returned promise is settled. This is called *assimilation*.
  
    ```js
    findUser().then(function (user) {
      return findCommentsByAuthor(user);
    }).then(function (comments) {
      // The user's comments are now available
    });
    ```
  
    If the assimliated promise rejects, then the downstream promise will also reject.
  
    ```js
    findUser().then(function (user) {
      return findCommentsByAuthor(user);
    }).then(function (comments) {
      // If `findCommentsByAuthor` fulfills, we'll have the value here
    }, function (reason) {
      // If `findCommentsByAuthor` rejects, we'll have the reason here
    });
    ```
  
    Simple Example
    --------------
  
    Synchronous Example
  
    ```javascript
    let result;
  
    try {
      result = findResult();
      // success
    } catch(reason) {
      // failure
    }
    ```
  
    Errback Example
  
    ```js
    findResult(function(result, err){
      if (err) {
        // failure
      } else {
        // success
      }
    });
    ```
  
    Promise Example;
  
    ```javascript
    findResult().then(function(result){
      // success
    }, function(reason){
      // failure
    });
    ```
  
    Advanced Example
    --------------
  
    Synchronous Example
  
    ```javascript
    let author, books;
  
    try {
      author = findAuthor();
      books  = findBooksByAuthor(author);
      // success
    } catch(reason) {
      // failure
    }
    ```
  
    Errback Example
  
    ```js
  
    function foundBooks(books) {
  
    }
  
    function failure(reason) {
  
    }
  
    findAuthor(function(author, err){
      if (err) {
        failure(err);
        // failure
      } else {
        try {
          findBoooksByAuthor(author, function(books, err) {
            if (err) {
              failure(err);
            } else {
              try {
                foundBooks(books);
              } catch(reason) {
                failure(reason);
              }
            }
          });
        } catch(error) {
          failure(err);
        }
        // success
      }
    });
    ```
  
    Promise Example;
  
    ```javascript
    findAuthor().
      then(findBooksByAuthor).
      then(function(books){
        // found books
    }).catch(function(reason){
      // something went wrong
    });
    ```
  
    @method then
    @param {Function} onFulfilled
    @param {Function} onRejected
    Useful for tooling.
    @return {Promise}
  */
  then: then,

  /**
    `catch` is simply sugar for `then(undefined, onRejection)` which makes it the same
    as the catch block of a try/catch statement.
  
    ```js
    function findAuthor(){
      throw new Error('couldn't find that author');
    }
  
    // synchronous
    try {
      findAuthor();
    } catch(reason) {
      // something went wrong
    }
  
    // async with promises
    findAuthor().catch(function(reason){
      // something went wrong
    });
    ```
  
    @method catch
    @param {Function} onRejection
    Useful for tooling.
    @return {Promise}
  */
  'catch': function _catch(onRejection) {
    return this.then(null, onRejection);
  }
};

/*global self*/
function polyfill$1() {
    var local = undefined;

    if (typeof global !== 'undefined') {
        local = global;
    } else if (typeof self !== 'undefined') {
        local = self;
    } else {
        try {
            local = Function('return this')();
        } catch (e) {
            throw new Error('polyfill failed because global object is unavailable in this environment');
        }
    }

    var P = local.Promise;

    if (P) {
        var promiseToString = null;
        try {
            promiseToString = Object.prototype.toString.call(P.resolve());
        } catch (e) {
            // silently ignored
        }

        if (promiseToString === '[object Promise]' && !P.cast) {
            return;
        }
    }

    local.Promise = Promise$2;
}

// Strange compat..
Promise$2.polyfill = polyfill$1;
Promise$2.Promise = Promise$2;

return Promise$2;

})));

//# sourceMappingURL=es6-promise.map

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(8), __webpack_require__(9)))

/***/ }),
/* 6 */
/***/ (function(module, exports) {

if (navigator && navigator.userAgent) {
  // 检测浏览器版本，并设置 window.__disableNativeFetch 来决定是否开启 fetch
  var userAgent = navigator.userAgent || "";
  var appVersion = navigator.appVersion || "";
  var vendor = navigator.vendor || "";

  var ua = (userAgent + ' ' + appVersion + ' ' + vendor).toLowerCase();

  var match = /(chrome)[ \/]([\w.]+)/.exec(ua)
        || /(webkit)[ \/]([\w.]+)/.exec(ua)
        || /(opera)(?:.*version|)[ \/]([\w.]+)/.exec(ua)
        || /(msie) ([\w.]+)/.exec(ua)
        || /(trident)(?:.*? rv:([\w.]+)|)/.exec(ua)
        || ua.indexOf("compatible") < 0
        && /(mozilla)(?:.*? rv:([\w.]+)|)/.exec(ua) || [];

  var engine = match[0];
  var mainVersion = match[2].split('.')[0];

  // chrome 内核版本大于 46， firefox 版本大于39 才开启 fetch
  if (engine.indexOf('chrome') === 0 && mainVersion >= 46) {
    window.__disableNativeFetch = false;
  } else if (engine.indexOf('mozilla') === 0 && mainVersion >= 39) {
    window.__disableNativeFetch = false;
  } else {
    window.__disableNativeFetch = true;
  }
}


/***/ }),
/* 7 */
/***/ (function(module, exports) {

(function(self) {
  'use strict';

  // if __disableNativeFetch is set to true, the it will always polyfill fetch
  // with Ajax.
  if (!self.__disableNativeFetch && self.fetch) {
    return
  }

  function normalizeName(name) {
    if (typeof name !== 'string') {
      name = String(name)
    }
    if (/[^a-z0-9\-#$%&'*+.\^_`|~]/i.test(name)) {
      throw new TypeError('Invalid character in header field name')
    }
    return name.toLowerCase()
  }

  function normalizeValue(value) {
    if (typeof value !== 'string') {
      value = String(value)
    }
    return value
  }

  function Headers(headers) {
    this.map = {}

    if (headers instanceof Headers) {
      headers.forEach(function(value, name) {
        this.append(name, value)
      }, this)

    } else if (headers) {
      Object.getOwnPropertyNames(headers).forEach(function(name) {
        this.append(name, headers[name])
      }, this)
    }
  }

  Headers.prototype.append = function(name, value) {
    name = normalizeName(name)
    value = normalizeValue(value)
    var list = this.map[name]
    if (!list) {
      list = []
      this.map[name] = list
    }
    list.push(value)
  }

  Headers.prototype['delete'] = function(name) {
    delete this.map[normalizeName(name)]
  }

  Headers.prototype.get = function(name) {
    var values = this.map[normalizeName(name)]
    return values ? values[0] : null
  }

  Headers.prototype.getAll = function(name) {
    return this.map[normalizeName(name)] || []
  }

  Headers.prototype.has = function(name) {
    return this.map.hasOwnProperty(normalizeName(name))
  }

  Headers.prototype.set = function(name, value) {
    this.map[normalizeName(name)] = [normalizeValue(value)]
  }

  Headers.prototype.forEach = function(callback, thisArg) {
    Object.getOwnPropertyNames(this.map).forEach(function(name) {
      this.map[name].forEach(function(value) {
        callback.call(thisArg, value, name, this)
      }, this)
    }, this)
  }

  function consumed(body) {
    if (body.bodyUsed) {
      return Promise.reject(new TypeError('Already read'))
    }
    body.bodyUsed = true
  }

  function fileReaderReady(reader) {
    return new Promise(function(resolve, reject) {
      reader.onload = function() {
        resolve(reader.result)
      }
      reader.onerror = function() {
        reject(reader.error)
      }
    })
  }

  function readBlobAsArrayBuffer(blob) {
    var reader = new FileReader()
    reader.readAsArrayBuffer(blob)
    return fileReaderReady(reader)
  }

  function readBlobAsText(blob, options) {
    var reader = new FileReader()
    var contentType = options.headers.map['content-type'] ? options.headers.map['content-type'].toString() : ''
    var regex = /charset\=[0-9a-zA-Z\-\_]*;?/
    var _charset = blob.type.match(regex) || contentType.match(regex)
    var args = [blob]

    if(_charset) {
      args.push(_charset[0].replace(/^charset\=/, '').replace(/;$/, ''))
    }

    reader.readAsText.apply(reader, args)
    return fileReaderReady(reader)
  }

  var support = {
    blob: 'FileReader' in self && 'Blob' in self && (function() {
      try {
        new Blob();
        return true
      } catch(e) {
        return false
      }
    })(),
    formData: 'FormData' in self,
    arrayBuffer: 'ArrayBuffer' in self
  }

  function Body() {
    this.bodyUsed = false


    this._initBody = function(body, options) {
      this._bodyInit = body
      if (typeof body === 'string') {
        this._bodyText = body
      } else if (support.blob && Blob.prototype.isPrototypeOf(body)) {
        this._bodyBlob = body
        this._options = options
      } else if (support.formData && FormData.prototype.isPrototypeOf(body)) {
        this._bodyFormData = body
      } else if (!body) {
        this._bodyText = ''
      } else if (support.arrayBuffer && ArrayBuffer.prototype.isPrototypeOf(body)) {
        // Only support ArrayBuffers for POST method.
        // Receiving ArrayBuffers happens via Blobs, instead.
      } else {
        throw new Error('unsupported BodyInit type')
      }
    }

    if (support.blob) {
      this.blob = function() {
        var rejected = consumed(this)
        if (rejected) {
          return rejected
        }

        if (this._bodyBlob) {
          return Promise.resolve(this._bodyBlob)
        } else if (this._bodyFormData) {
          throw new Error('could not read FormData body as blob')
        } else {
          return Promise.resolve(new Blob([this._bodyText]))
        }
      }

      this.arrayBuffer = function() {
        return this.blob().then(readBlobAsArrayBuffer)
      }

      this.text = function() {
        var rejected = consumed(this)
        if (rejected) {
          return rejected
        }

        if (this._bodyBlob) {
          return readBlobAsText(this._bodyBlob, this._options)
        } else if (this._bodyFormData) {
          throw new Error('could not read FormData body as text')
        } else {
          return Promise.resolve(this._bodyText)
        }
      }
    } else {
      this.text = function() {
        var rejected = consumed(this)
        return rejected ? rejected : Promise.resolve(this._bodyText)
      }
    }

    if (support.formData) {
      this.formData = function() {
        return this.text().then(decode)
      }
    }

    this.json = function() {
      return this.text().then(JSON.parse)
    }

    return this
  }

  // HTTP methods whose capitalization should be normalized
  var methods = ['DELETE', 'GET', 'HEAD', 'OPTIONS', 'POST', 'PUT']

  function normalizeMethod(method) {
    var upcased = method.toUpperCase()
    return (methods.indexOf(upcased) > -1) ? upcased : method
  }

  function Request(input, options) {
    options = options || {}
    var body = options.body
    if (Request.prototype.isPrototypeOf(input)) {
      if (input.bodyUsed) {
        throw new TypeError('Already read')
      }
      this.url = input.url
      this.credentials = input.credentials
      if (!options.headers) {
        this.headers = new Headers(input.headers)
      }
      this.method = input.method
      this.mode = input.mode
      if (!body) {
        body = input._bodyInit
        input.bodyUsed = true
      }
    } else {
      this.url = input
    }

    this.credentials = options.credentials || this.credentials || 'omit'
    if (options.headers || !this.headers) {
      this.headers = new Headers(options.headers)
    }
    this.method = normalizeMethod(options.method || this.method || 'GET')
    this.mode = options.mode || this.mode || null
    this.referrer = null

    if ((this.method === 'GET' || this.method === 'HEAD') && body) {
      throw new TypeError('Body not allowed for GET or HEAD requests')
    }
    this._initBody(body, options)
  }

  Request.prototype.clone = function() {
    return new Request(this)
  }

  function decode(body) {
    var form = new FormData()
    body.trim().split('&').forEach(function(bytes) {
      if (bytes) {
        var split = bytes.split('=')
        var name = split.shift().replace(/\+/g, ' ')
        var value = split.join('=').replace(/\+/g, ' ')
        form.append(decodeURIComponent(name), decodeURIComponent(value))
      }
    })
    return form
  }

  function headers(xhr) {
    var head = new Headers()
    var pairs = xhr.getAllResponseHeaders().trim().split('\n')
    pairs.forEach(function(header) {
      var split = header.trim().split(':')
      var key = split.shift().trim()
      var value = split.join(':').trim()
      head.append(key, value)
    })
    return head
  }

  Body.call(Request.prototype)

  function Response(bodyInit, options) {
    if (!options) {
      options = {}
    }

    this._initBody(bodyInit, options)
    this.type = 'default'
    this.status = options.status
    this.ok = this.status >= 200 && this.status < 300
    this.statusText = options.statusText
    this.headers = options.headers instanceof Headers ? options.headers : new Headers(options.headers)
    this.url = options.url || ''
  }

  Body.call(Response.prototype)

  Response.prototype.clone = function() {
    return new Response(this._bodyInit, {
      status: this.status,
      statusText: this.statusText,
      headers: new Headers(this.headers),
      url: this.url
    })
  }

  Response.error = function() {
    var response = new Response(null, {status: 0, statusText: ''})
    response.type = 'error'
    return response
  }

  var redirectStatuses = [301, 302, 303, 307, 308]

  Response.redirect = function(url, status) {
    if (redirectStatuses.indexOf(status) === -1) {
      throw new RangeError('Invalid status code')
    }

    return new Response(null, {status: status, headers: {location: url}})
  }

  self.Headers = Headers;
  self.Request = Request;
  self.Response = Response;

  self.fetch = function(input, init) {
    return new Promise(function(resolve, reject) {
      var request
      if (Request.prototype.isPrototypeOf(input) && !init) {
        request = input
      } else {
        request = new Request(input, init)
      }

      var xhr = new XMLHttpRequest()

      function responseURL() {
        if ('responseURL' in xhr) {
          return xhr.responseURL
        }

        // Avoid security warnings on getResponseHeader when not allowed by CORS
        if (/^X-Request-URL:/m.test(xhr.getAllResponseHeaders())) {
          return xhr.getResponseHeader('X-Request-URL')
        }

        return;
      }

      var __onLoadHandled = false;

      function onload() {
        if (xhr.readyState !== 4) {
          return
        }
        var status = (xhr.status === 1223) ? 204 : xhr.status
        if (status < 100 || status > 599) {
          if (__onLoadHandled) { return; } else { __onLoadHandled = true; }
          reject(new TypeError('Network request failed'))
          return
        }
        var options = {
          status: status,
          statusText: xhr.statusText,
          headers: headers(xhr),
          url: responseURL()
        }
        var body = 'response' in xhr ? xhr.response : xhr.responseText;

        if (__onLoadHandled) { return; } else { __onLoadHandled = true; }
        resolve(new Response(body, options))
      }
      xhr.onreadystatechange = onload;
      xhr.onload = onload;
      xhr.onerror = function() {
        if (__onLoadHandled) { return; } else { __onLoadHandled = true; }
        reject(new TypeError('Network request failed'))
      }

      xhr.open(request.method, request.url, true)

      // `withCredentials` should be setted after calling `.open` in IE10
      // http://stackoverflow.com/a/19667959/1219343
      try {
        if (request.credentials === 'include') {
          if ('withCredentials' in xhr) {
            xhr.withCredentials = true;
          } else {
            console && console.warn && console.warn('withCredentials is not supported, you can ignore this warning');
          }
        }
      } catch (e) {
        console && console.warn && console.warn('set withCredentials error:' + e);
      }

      if ('responseType' in xhr && support.blob) {
        xhr.responseType = 'blob'
      }

      request.headers.forEach(function(value, name) {
        xhr.setRequestHeader(name, value)
      })

      xhr.send(typeof request._bodyInit === 'undefined' ? null : request._bodyInit)
    })
  }
  self.fetch.polyfill = true

  // Support CommonJS
  if (typeof module !== 'undefined' && module.exports) {
    module.exports = self.fetch;
  }
})(typeof self !== 'undefined' ? self : this);


/***/ }),
/* 8 */
/***/ (function(module, exports) {

// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };


/***/ }),
/* 9 */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || Function("return this")() || (1,eval)("this");
} catch(e) {
	// This works if the window reference is available
	if(typeof window === "object")
		g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),
/* 10 */
/***/ (function(module, exports) {

(function(self) {
  'use strict';

  if (self.fetch) {
    return
  }

  var support = {
    searchParams: 'URLSearchParams' in self,
    iterable: 'Symbol' in self && 'iterator' in Symbol,
    blob: 'FileReader' in self && 'Blob' in self && (function() {
      try {
        new Blob()
        return true
      } catch(e) {
        return false
      }
    })(),
    formData: 'FormData' in self,
    arrayBuffer: 'ArrayBuffer' in self
  }

  if (support.arrayBuffer) {
    var viewClasses = [
      '[object Int8Array]',
      '[object Uint8Array]',
      '[object Uint8ClampedArray]',
      '[object Int16Array]',
      '[object Uint16Array]',
      '[object Int32Array]',
      '[object Uint32Array]',
      '[object Float32Array]',
      '[object Float64Array]'
    ]

    var isDataView = function(obj) {
      return obj && DataView.prototype.isPrototypeOf(obj)
    }

    var isArrayBufferView = ArrayBuffer.isView || function(obj) {
      return obj && viewClasses.indexOf(Object.prototype.toString.call(obj)) > -1
    }
  }

  function normalizeName(name) {
    if (typeof name !== 'string') {
      name = String(name)
    }
    if (/[^a-z0-9\-#$%&'*+.\^_`|~]/i.test(name)) {
      throw new TypeError('Invalid character in header field name')
    }
    return name.toLowerCase()
  }

  function normalizeValue(value) {
    if (typeof value !== 'string') {
      value = String(value)
    }
    return value
  }

  // Build a destructive iterator for the value list
  function iteratorFor(items) {
    var iterator = {
      next: function() {
        var value = items.shift()
        return {done: value === undefined, value: value}
      }
    }

    if (support.iterable) {
      iterator[Symbol.iterator] = function() {
        return iterator
      }
    }

    return iterator
  }

  function Headers(headers) {
    this.map = {}

    if (headers instanceof Headers) {
      headers.forEach(function(value, name) {
        this.append(name, value)
      }, this)

    } else if (headers) {
      Object.getOwnPropertyNames(headers).forEach(function(name) {
        this.append(name, headers[name])
      }, this)
    }
  }

  Headers.prototype.append = function(name, value) {
    name = normalizeName(name)
    value = normalizeValue(value)
    var list = this.map[name]
    if (!list) {
      list = []
      this.map[name] = list
    }
    list.push(value)
  }

  Headers.prototype['delete'] = function(name) {
    delete this.map[normalizeName(name)]
  }

  Headers.prototype.get = function(name) {
    var values = this.map[normalizeName(name)]
    return values ? values[0] : null
  }

  Headers.prototype.getAll = function(name) {
    return this.map[normalizeName(name)] || []
  }

  Headers.prototype.has = function(name) {
    return this.map.hasOwnProperty(normalizeName(name))
  }

  Headers.prototype.set = function(name, value) {
    this.map[normalizeName(name)] = [normalizeValue(value)]
  }

  Headers.prototype.forEach = function(callback, thisArg) {
    Object.getOwnPropertyNames(this.map).forEach(function(name) {
      this.map[name].forEach(function(value) {
        callback.call(thisArg, value, name, this)
      }, this)
    }, this)
  }

  Headers.prototype.keys = function() {
    var items = []
    this.forEach(function(value, name) { items.push(name) })
    return iteratorFor(items)
  }

  Headers.prototype.values = function() {
    var items = []
    this.forEach(function(value) { items.push(value) })
    return iteratorFor(items)
  }

  Headers.prototype.entries = function() {
    var items = []
    this.forEach(function(value, name) { items.push([name, value]) })
    return iteratorFor(items)
  }

  if (support.iterable) {
    Headers.prototype[Symbol.iterator] = Headers.prototype.entries
  }

  function consumed(body) {
    if (body.bodyUsed) {
      return Promise.reject(new TypeError('Already read'))
    }
    body.bodyUsed = true
  }

  function fileReaderReady(reader) {
    return new Promise(function(resolve, reject) {
      reader.onload = function() {
        resolve(reader.result)
      }
      reader.onerror = function() {
        reject(reader.error)
      }
    })
  }

  function readBlobAsArrayBuffer(blob) {
    var reader = new FileReader()
    var promise = fileReaderReady(reader)
    reader.readAsArrayBuffer(blob)
    return promise
  }

  function readBlobAsText(blob) {
    var reader = new FileReader()
    var promise = fileReaderReady(reader)
    reader.readAsText(blob)
    return promise
  }

  function readArrayBufferAsText(buf) {
    var view = new Uint8Array(buf)
    var chars = new Array(view.length)

    for (var i = 0; i < view.length; i++) {
      chars[i] = String.fromCharCode(view[i])
    }
    return chars.join('')
  }

  function bufferClone(buf) {
    if (buf.slice) {
      return buf.slice(0)
    } else {
      var view = new Uint8Array(buf.byteLength)
      view.set(new Uint8Array(buf))
      return view.buffer
    }
  }

  function Body() {
    this.bodyUsed = false

    this._initBody = function(body) {
      this._bodyInit = body
      if (!body) {
        this._bodyText = ''
      } else if (typeof body === 'string') {
        this._bodyText = body
      } else if (support.blob && Blob.prototype.isPrototypeOf(body)) {
        this._bodyBlob = body
      } else if (support.formData && FormData.prototype.isPrototypeOf(body)) {
        this._bodyFormData = body
      } else if (support.searchParams && URLSearchParams.prototype.isPrototypeOf(body)) {
        this._bodyText = body.toString()
      } else if (support.arrayBuffer && support.blob && isDataView(body)) {
        this._bodyArrayBuffer = bufferClone(body.buffer)
        // IE 10-11 can't handle a DataView body.
        this._bodyInit = new Blob([this._bodyArrayBuffer])
      } else if (support.arrayBuffer && (ArrayBuffer.prototype.isPrototypeOf(body) || isArrayBufferView(body))) {
        this._bodyArrayBuffer = bufferClone(body)
      } else {
        throw new Error('unsupported BodyInit type')
      }

      if (!this.headers.get('content-type')) {
        if (typeof body === 'string') {
          this.headers.set('content-type', 'text/plain;charset=UTF-8')
        } else if (this._bodyBlob && this._bodyBlob.type) {
          this.headers.set('content-type', this._bodyBlob.type)
        } else if (support.searchParams && URLSearchParams.prototype.isPrototypeOf(body)) {
          this.headers.set('content-type', 'application/x-www-form-urlencoded;charset=UTF-8')
        }
      }
    }

    if (support.blob) {
      this.blob = function() {
        var rejected = consumed(this)
        if (rejected) {
          return rejected
        }

        if (this._bodyBlob) {
          return Promise.resolve(this._bodyBlob)
        } else if (this._bodyArrayBuffer) {
          return Promise.resolve(new Blob([this._bodyArrayBuffer]))
        } else if (this._bodyFormData) {
          throw new Error('could not read FormData body as blob')
        } else {
          return Promise.resolve(new Blob([this._bodyText]))
        }
      }

      this.arrayBuffer = function() {
        if (this._bodyArrayBuffer) {
          return consumed(this) || Promise.resolve(this._bodyArrayBuffer)
        } else {
          return this.blob().then(readBlobAsArrayBuffer)
        }
      }
    }

    this.text = function() {
      var rejected = consumed(this)
      if (rejected) {
        return rejected
      }

      if (this._bodyBlob) {
        return readBlobAsText(this._bodyBlob)
      } else if (this._bodyArrayBuffer) {
        return Promise.resolve(readArrayBufferAsText(this._bodyArrayBuffer))
      } else if (this._bodyFormData) {
        throw new Error('could not read FormData body as text')
      } else {
        return Promise.resolve(this._bodyText)
      }
    }

    if (support.formData) {
      this.formData = function() {
        return this.text().then(decode)
      }
    }

    this.json = function() {
      return this.text().then(JSON.parse)
    }

    return this
  }

  // HTTP methods whose capitalization should be normalized
  var methods = ['DELETE', 'GET', 'HEAD', 'OPTIONS', 'POST', 'PUT']

  function normalizeMethod(method) {
    var upcased = method.toUpperCase()
    return (methods.indexOf(upcased) > -1) ? upcased : method
  }

  function Request(input, options) {
    options = options || {}
    var body = options.body

    if (typeof input === 'string') {
      this.url = input
    } else {
      if (input.bodyUsed) {
        throw new TypeError('Already read')
      }
      this.url = input.url
      this.credentials = input.credentials
      if (!options.headers) {
        this.headers = new Headers(input.headers)
      }
      this.method = input.method
      this.mode = input.mode
      if (!body && input._bodyInit != null) {
        body = input._bodyInit
        input.bodyUsed = true
      }
    }

    this.credentials = options.credentials || this.credentials || 'omit'
    if (options.headers || !this.headers) {
      this.headers = new Headers(options.headers)
    }
    this.method = normalizeMethod(options.method || this.method || 'GET')
    this.mode = options.mode || this.mode || null
    this.referrer = null

    if ((this.method === 'GET' || this.method === 'HEAD') && body) {
      throw new TypeError('Body not allowed for GET or HEAD requests')
    }
    this._initBody(body)
  }

  Request.prototype.clone = function() {
    return new Request(this, { body: this._bodyInit })
  }

  function decode(body) {
    var form = new FormData()
    body.trim().split('&').forEach(function(bytes) {
      if (bytes) {
        var split = bytes.split('=')
        var name = split.shift().replace(/\+/g, ' ')
        var value = split.join('=').replace(/\+/g, ' ')
        form.append(decodeURIComponent(name), decodeURIComponent(value))
      }
    })
    return form
  }

  function parseHeaders(rawHeaders) {
    var headers = new Headers()
    rawHeaders.split('\r\n').forEach(function(line) {
      var parts = line.split(':')
      var key = parts.shift().trim()
      if (key) {
        var value = parts.join(':').trim()
        headers.append(key, value)
      }
    })
    return headers
  }

  Body.call(Request.prototype)

  function Response(bodyInit, options) {
    if (!options) {
      options = {}
    }

    this.type = 'default'
    this.status = 'status' in options ? options.status : 200
    this.ok = this.status >= 200 && this.status < 300
    this.statusText = 'statusText' in options ? options.statusText : 'OK'
    this.headers = new Headers(options.headers)
    this.url = options.url || ''
    this._initBody(bodyInit)
  }

  Body.call(Response.prototype)

  Response.prototype.clone = function() {
    return new Response(this._bodyInit, {
      status: this.status,
      statusText: this.statusText,
      headers: new Headers(this.headers),
      url: this.url
    })
  }

  Response.error = function() {
    var response = new Response(null, {status: 0, statusText: ''})
    response.type = 'error'
    return response
  }

  var redirectStatuses = [301, 302, 303, 307, 308]

  Response.redirect = function(url, status) {
    if (redirectStatuses.indexOf(status) === -1) {
      throw new RangeError('Invalid status code')
    }

    return new Response(null, {status: status, headers: {location: url}})
  }

  self.Headers = Headers
  self.Request = Request
  self.Response = Response

  self.fetch = function(input, init) {
    return new Promise(function(resolve, reject) {
      var request = new Request(input, init)
      var xhr = new XMLHttpRequest()

      xhr.onload = function() {
        var options = {
          status: xhr.status,
          statusText: xhr.statusText,
          headers: parseHeaders(xhr.getAllResponseHeaders() || '')
        }
        options.url = 'responseURL' in xhr ? xhr.responseURL : options.headers.get('X-Request-URL')
        var body = 'response' in xhr ? xhr.response : xhr.responseText
        resolve(new Response(body, options))
      }

      xhr.onerror = function() {
        reject(new TypeError('Network request failed'))
      }

      xhr.ontimeout = function() {
        reject(new TypeError('Network request failed'))
      }

      xhr.open(request.method, request.url, true)

      if (request.credentials === 'include') {
        xhr.withCredentials = true
      }

      if ('responseType' in xhr && support.blob) {
        xhr.responseType = 'blob'
      }

      request.headers.forEach(function(value, name) {
        xhr.setRequestHeader(name, value)
      })

      xhr.send(typeof request._bodyInit === 'undefined' ? null : request._bodyInit)
    })
  }
  self.fetch.polyfill = true
})(typeof self !== 'undefined' ? self : this);


/***/ }),
/* 11 */
/***/ (function(module, exports) {

/* (ignored) */

/***/ })
/******/ ]);
});

/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends2 = __webpack_require__(14);

var _extends3 = _interopRequireDefault(_extends2);

var _defineProperty2 = __webpack_require__(20);

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _react = __webpack_require__(2);

var _react2 = _interopRequireDefault(_react);

var _classnames = __webpack_require__(30);

var _classnames2 = _interopRequireDefault(_classnames);

var _omit = __webpack_require__(141);

var _omit2 = _interopRequireDefault(_omit);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var Icon = function Icon(props) {
    var type = props.type,
        _props$className = props.className,
        className = _props$className === undefined ? '' : _props$className,
        spin = props.spin;

    var classString = (0, _classnames2['default'])((0, _defineProperty3['default'])({
        anticon: true,
        'anticon-spin': !!spin || type === 'loading'
    }, 'anticon-' + type, true), className);
    return _react2['default'].createElement('i', (0, _extends3['default'])({}, (0, _omit2['default'])(props, ['type', 'spin']), { className: classString }));
};
exports['default'] = Icon;
module.exports = exports['default'];

/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(2);

var _react2 = _interopRequireDefault(_react);

var _jrbasic = __webpack_require__(44);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _Antd = Antd,
    Icon = _Antd.Icon,
    message = _Antd.message;

__webpack_require__(133);

var UploadImg = function (_Component) {
    _inherits(UploadImg, _Component);

    function UploadImg(props) {
        _classCallCheck(this, UploadImg);

        var _this = _possibleConstructorReturn(this, (UploadImg.__proto__ || Object.getPrototypeOf(UploadImg)).call(this, props));

        _this.state = {
            stateText: '',
            fileName: ''
        };
        return _this;
    }

    _createClass(UploadImg, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            document.title = '上传图片';
        }
    }, {
        key: 'readFile',
        value: function readFile(obj) {
            var that = this;
            var file = obj.target['files'][0];
            if (!/image\/\w+/.test(file.type)) {
                alert("请确保文件为图像类型");
                return false;
            }

            var isLt2k = file.size / 1024 / 1024 < 0.15;
            if (!isLt2k) {
                message.error('图片大小必须小于150kb!');
                return false;
            }

            var typeString = file.type;

            var reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = function (e) {
                var logo_url = this.result;
                var resultbk = logo_url.replace('data:image/png;base64,', '');
                resultbk = resultbk.replace('data:image/jpeg;base64,', '');
                resultbk = resultbk.replace('data:image/jpg;base64,', '');
                resultbk = resultbk.replace('data:image/png;base64,', '');

                var icon_suffix = typeString.replace('image/', '.');

                (0, _jrbasic.fetchPost)('/image/uploadImage', {
                    base64_string: resultbk,
                    image_suffix: icon_suffix,
                    user_id: 10,
                    folder: 'fr_public_6666'
                }).then(function (ret) {

                    that.props.imgUploaded('http://mifengkongdemo.oss-cn-shenzhen.aliyuncs.com/' + ret.data.filename);
                });
            };
        }
    }, {
        key: 'render',
        value: function render() {
            var _state = this.state,
                stateText = _state.stateText,
                fileName = _state.fileName;


            return _react2.default.createElement(
                'div',
                null,
                _react2.default.createElement(
                    'a',
                    { className: 'file' },
                    '\u9009\u62E9\u6587\u4EF6\xA0',
                    _react2.default.createElement(Icon, { type: 'upload' }),
                    _react2.default.createElement('input', { type: 'file', accept: 'image/gif/png', onChange: this.readFile.bind(this) })
                )
            );
        }
    }]);

    return UploadImg;
}(_react.Component);

exports.default = UploadImg;

/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(97), __esModule: true };

/***/ }),
/* 48 */
/***/ (function(module, exports) {

module.exports = function(arr, obj){
  if (arr.indexOf) return arr.indexOf(obj);
  for (var i = 0; i < arr.length; ++i) {
    if (arr[i] === obj) return i;
  }
  return -1;
};

/***/ }),
/* 49 */
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = function (it) {
  return toString.call(it).slice(8, -1);
};


/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

// optional / simple context binding
var aFunction = __webpack_require__(101);
module.exports = function (fn, that, length) {
  aFunction(fn);
  if (that === undefined) return fn;
  switch (length) {
    case 1: return function (a) {
      return fn.call(that, a);
    };
    case 2: return function (a, b) {
      return fn.call(that, a, b);
    };
    case 3: return function (a, b, c) {
      return fn.call(that, a, b, c);
    };
  }
  return function (/* ...args */) {
    return fn.apply(that, arguments);
  };
};


/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(17);
var document = __webpack_require__(5).document;
// typeof document.createElement is 'object' in old IE
var is = isObject(document) && isObject(document.createElement);
module.exports = function (it) {
  return is ? document.createElement(it) : {};
};


/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = !__webpack_require__(7) && !__webpack_require__(16)(function () {
  return Object.defineProperty(__webpack_require__(51)('div'), 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

// fallback for non-array-like ES3 and non-enumerable old V8 strings
var cof = __webpack_require__(49);
// eslint-disable-next-line no-prototype-builtins
module.exports = Object('z').propertyIsEnumerable(0) ? Object : function (it) {
  return cof(it) == 'String' ? it.split('') : Object(it);
};


/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var LIBRARY = __webpack_require__(34);
var $export = __webpack_require__(10);
var redefine = __webpack_require__(58);
var hide = __webpack_require__(11);
var has = __webpack_require__(8);
var Iterators = __webpack_require__(33);
var $iterCreate = __webpack_require__(107);
var setToStringTag = __webpack_require__(37);
var getPrototypeOf = __webpack_require__(113);
var ITERATOR = __webpack_require__(13)('iterator');
var BUGGY = !([].keys && 'next' in [].keys()); // Safari has buggy iterators w/o `next`
var FF_ITERATOR = '@@iterator';
var KEYS = 'keys';
var VALUES = 'values';

var returnThis = function () { return this; };

module.exports = function (Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED) {
  $iterCreate(Constructor, NAME, next);
  var getMethod = function (kind) {
    if (!BUGGY && kind in proto) return proto[kind];
    switch (kind) {
      case KEYS: return function keys() { return new Constructor(this, kind); };
      case VALUES: return function values() { return new Constructor(this, kind); };
    } return function entries() { return new Constructor(this, kind); };
  };
  var TAG = NAME + ' Iterator';
  var DEF_VALUES = DEFAULT == VALUES;
  var VALUES_BUG = false;
  var proto = Base.prototype;
  var $native = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT];
  var $default = $native || getMethod(DEFAULT);
  var $entries = DEFAULT ? !DEF_VALUES ? $default : getMethod('entries') : undefined;
  var $anyNative = NAME == 'Array' ? proto.entries || $native : $native;
  var methods, key, IteratorPrototype;
  // Fix native
  if ($anyNative) {
    IteratorPrototype = getPrototypeOf($anyNative.call(new Base()));
    if (IteratorPrototype !== Object.prototype && IteratorPrototype.next) {
      // Set @@toStringTag to native iterators
      setToStringTag(IteratorPrototype, TAG, true);
      // fix for some old engines
      if (!LIBRARY && !has(IteratorPrototype, ITERATOR)) hide(IteratorPrototype, ITERATOR, returnThis);
    }
  }
  // fix Array#{values, @@iterator}.name in V8 / FF
  if (DEF_VALUES && $native && $native.name !== VALUES) {
    VALUES_BUG = true;
    $default = function values() { return $native.call(this); };
  }
  // Define iterator
  if ((!LIBRARY || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])) {
    hide(proto, ITERATOR, $default);
  }
  // Plug for library
  Iterators[NAME] = $default;
  Iterators[TAG] = returnThis;
  if (DEFAULT) {
    methods = {
      values: DEF_VALUES ? $default : getMethod(VALUES),
      keys: IS_SET ? $default : getMethod(KEYS),
      entries: $entries
    };
    if (FORCED) for (key in methods) {
      if (!(key in proto)) redefine(proto, key, methods[key]);
    } else $export($export.P + $export.F * (BUGGY || VALUES_BUG), NAME, methods);
  }
  return methods;
};


/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

var pIE = __webpack_require__(25);
var createDesc = __webpack_require__(26);
var toIObject = __webpack_require__(12);
var toPrimitive = __webpack_require__(41);
var has = __webpack_require__(8);
var IE8_DOM_DEFINE = __webpack_require__(52);
var gOPD = Object.getOwnPropertyDescriptor;

exports.f = __webpack_require__(7) ? gOPD : function getOwnPropertyDescriptor(O, P) {
  O = toIObject(O);
  P = toPrimitive(P, true);
  if (IE8_DOM_DEFINE) try {
    return gOPD(O, P);
  } catch (e) { /* empty */ }
  if (has(O, P)) return createDesc(!pIE.f.call(O, P), O[P]);
};


/***/ }),
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.7 / 15.2.3.4 Object.getOwnPropertyNames(O)
var $keys = __webpack_require__(57);
var hiddenKeys = __webpack_require__(32).concat('length', 'prototype');

exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
  return $keys(O, hiddenKeys);
};


/***/ }),
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

var has = __webpack_require__(8);
var toIObject = __webpack_require__(12);
var arrayIndexOf = __webpack_require__(103)(false);
var IE_PROTO = __webpack_require__(38)('IE_PROTO');

module.exports = function (object, names) {
  var O = toIObject(object);
  var i = 0;
  var result = [];
  var key;
  for (key in O) if (key != IE_PROTO) has(O, key) && result.push(key);
  // Don't enum bug & hidden keys
  while (names.length > i) if (has(O, key = names[i++])) {
    ~arrayIndexOf(result, key) || result.push(key);
  }
  return result;
};


/***/ }),
/* 58 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(11);


/***/ }),
/* 59 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.13 ToObject(argument)
var defined = __webpack_require__(31);
module.exports = function (it) {
  return Object(defined(it));
};


/***/ }),
/* 60 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var util = {
  isAppearSupported: function isAppearSupported(props) {
    return props.transitionName && props.transitionAppear || props.animation.appear;
  },
  isEnterSupported: function isEnterSupported(props) {
    return props.transitionName && props.transitionEnter || props.animation.enter;
  },
  isLeaveSupported: function isLeaveSupported(props) {
    return props.transitionName && props.transitionLeave || props.animation.leave;
  },
  allowAppearCallback: function allowAppearCallback(props) {
    return props.transitionAppear || props.animation.appear;
  },
  allowEnterCallback: function allowEnterCallback(props) {
    return props.transitionEnter || props.animation.enter;
  },
  allowLeaveCallback: function allowLeaveCallback(props) {
    return props.transitionLeave || props.animation.leave;
  }
};
/* harmony default export */ __webpack_exports__["a"] = (util);

/***/ }),
/* 61 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Notification__ = __webpack_require__(148);

/* harmony default export */ __webpack_exports__["default"] = (__WEBPACK_IMPORTED_MODULE_0__Notification__["a" /* default */]);

/***/ }),
/* 62 */
/***/ (function(module, exports) {

module.exports = ReactDOM;

/***/ }),
/* 63 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _count = __webpack_require__(87);

var _count2 = _interopRequireDefault(_count);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// reducers/index.js
var _Redux = Redux,
    combineReducers = _Redux.combineReducers; // 利用combineReducers 合并reducers

var _ReactRouterRedux = ReactRouterRedux,
    routerReducer = _ReactRouterRedux.routerReducer; // 将routerReducer一起合并管理

// 引入update这个reducer

exports.default = combineReducers({
    update: _count2.default,
    routing: routerReducer
});

/***/ }),
/* 64 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _MainView = __webpack_require__(75);

var _MainView2 = _interopRequireDefault(_MainView);

var _JiebaOne = __webpack_require__(74);

var _JiebaOne2 = _interopRequireDefault(_JiebaOne);

var _AccountManage = __webpack_require__(82);

var _AccountManage2 = _interopRequireDefault(_AccountManage);

var _GroupManage = __webpack_require__(83);

var _GroupManage2 = _interopRequireDefault(_GroupManage);

var _MenuManage = __webpack_require__(84);

var _MenuManage2 = _interopRequireDefault(_MenuManage);

var _PageConfig = __webpack_require__(85);

var _PageConfig2 = _interopRequireDefault(_PageConfig);

var _CidSet = __webpack_require__(76);

var _CidSet2 = _interopRequireDefault(_CidSet);

var _AddChannel = __webpack_require__(78);

var _AddChannel2 = _interopRequireDefault(_AddChannel);

var _ChannelManage = __webpack_require__(80);

var _ChannelManage2 = _interopRequireDefault(_ChannelManage);

var _MarketStatistics = __webpack_require__(81);

var _MarketStatistics2 = _interopRequireDefault(_MarketStatistics);

var _ChanStatistics = __webpack_require__(79);

var _ChanStatistics2 = _interopRequireDefault(_ChanStatistics);

var _ActiveStatistics = __webpack_require__(77);

var _ActiveStatistics2 = _interopRequireDefault(_ActiveStatistics);

var _UploadImg = __webpack_require__(46);

var _UploadImg2 = _interopRequireDefault(_UploadImg);

var _Verify = __webpack_require__(73);

var _Verify2 = _interopRequireDefault(_Verify);

var _ItemOverview = __webpack_require__(70);

var _ItemOverview2 = _interopRequireDefault(_ItemOverview);

var _ItemTaobao = __webpack_require__(71);

var _ItemTaobao2 = _interopRequireDefault(_ItemTaobao);

var _ItemTelcos = __webpack_require__(72);

var _ItemTelcos2 = _interopRequireDefault(_ItemTelcos);

var _ItemCredit = __webpack_require__(69);

var _ItemCredit2 = _interopRequireDefault(_ItemCredit);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var PropTypes = React.PropTypes;
var _ReactRouter = ReactRouter,
    Router = _ReactRouter.Router,
    Route = _ReactRouter.Route,
    IndexRoute = _ReactRouter.IndexRoute;


var Manage = function Manage(that) {
    return React.createElement(
        'div',
        { className: 'pro-manage g-content' },
        that.children
    );
};

var Statistic = function Statistic(that) {
    return React.createElement(
        'div',
        { className: 'jianrong' },
        that.children
    );
};

var Order = function Order(that) {
    return React.createElement(
        'div',
        { className: 'jianrong' },
        that.children
    );
};

var Demo = function Demo(that) {
    return React.createElement(
        'div',
        { className: 'jianrong' },
        'ddd'
    );
};

var ItemBill = function ItemBill(that) {
    return React.createElement(
        'div',
        { className: 'jianrong' },
        'ddd'
    );
};

var allRoute = [React.createElement(Route, { path: 'Account', component: Demo }), React.createElement(Route, { path: 'ItemTaobao', component: _ItemTaobao2.default }), React.createElement(Route, { path: 'ItemBill', component: ItemBill }), React.createElement(Route, { path: 'ItemOverview', component: _ItemOverview2.default }), React.createElement(Route, { path: 'ItemTelcos', component: _ItemTelcos2.default }), React.createElement(Route, { path: 'ItemCredit', component: _ItemCredit2.default }), React.createElement(Route, { path: 'Account', component: Demo })];

var Routes = function Routes(_ref) {
    var history = _ref.history;

    return React.createElement(
        Router,
        { history: history },
        React.createElement(Route, { path: 'login', component: __webpack_require__(150) }),
        React.createElement(
            Route,
            { path: 'MainView', component: _MainView2.default },
            React.createElement(
                Route,
                { path: 'Manage', component: Manage },
                allRoute
            ),
            React.createElement(
                Route,
                { path: 'Statistic', component: Statistic },
                allRoute
            ),
            React.createElement(
                Route,
                { path: 'Order', component: Order },
                allRoute
            ),
            React.createElement(
                Route,
                { path: 'Verify', component: _Verify2.default },
                allRoute
            )
        )
    );
};

Routes.propTypes = {
    history: PropTypes.any
};
exports.default = Routes;

/***/ }),
/* 65 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 66 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 67 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(2);

var _react2 = _interopRequireDefault(_react);

var _rcNotification = __webpack_require__(61);

var _rcNotification2 = _interopRequireDefault(_rcNotification);

var _icon = __webpack_require__(45);

var _icon2 = _interopRequireDefault(_icon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var defaultDuration = 3;
var defaultTop = void 0;
var messageInstance = void 0;
var key = 1;
var prefixCls = 'ant-message';
var getContainer = void 0;
function getMessageInstance() {
    messageInstance = messageInstance || _rcNotification2['default'].newInstance({
        prefixCls: prefixCls,
        transitionName: 'move-up',
        style: { top: defaultTop },
        getContainer: getContainer
    });
    return messageInstance;
}
function notice(content) {
    var duration = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultDuration;
    var type = arguments[2];
    var onClose = arguments[3];

    var iconType = {
        info: 'info-circle',
        success: 'check-circle',
        error: 'cross-circle',
        warning: 'exclamation-circle',
        loading: 'loading'
    }[type];
    var instance = getMessageInstance();
    instance.notice({
        key: key,
        duration: duration,
        style: {},
        content: _react2['default'].createElement(
            'div',
            { className: prefixCls + '-custom-content ' + prefixCls + '-' + type },
            _react2['default'].createElement(_icon2['default'], { type: iconType }),
            _react2['default'].createElement(
                'span',
                null,
                content
            )
        ),
        onClose: onClose
    });
    return function () {
        var target = key++;
        return function () {
            instance.removeNotice(target);
        };
    }();
}
exports['default'] = {
    info: function info(content, duration, onClose) {
        return notice(content, duration, 'info', onClose);
    },
    success: function success(content, duration, onClose) {
        return notice(content, duration, 'success', onClose);
    },
    error: function error(content, duration, onClose) {
        return notice(content, duration, 'error', onClose);
    },

    // Departed usage, please use warning()
    warn: function warn(content, duration, onClose) {
        return notice(content, duration, 'warning', onClose);
    },
    warning: function warning(content, duration, onClose) {
        return notice(content, duration, 'warning', onClose);
    },
    loading: function loading(content, duration, onClose) {
        return notice(content, duration, 'loading', onClose);
    },
    config: function config(options) {
        if (options.top !== undefined) {
            defaultTop = options.top;
            messageInstance = null; // delete messageInstance for new defaultTop
        }
        if (options.duration !== undefined) {
            defaultDuration = options.duration;
        }
        if (options.prefixCls !== undefined) {
            prefixCls = options.prefixCls;
        }
        if (options.getContainer !== undefined) {
            getContainer = options.getContainer;
        }
    },
    destroy: function destroy() {
        if (messageInstance) {
            messageInstance.destroy();
            messageInstance = null;
        }
    }
};
module.exports = exports['default'];

/***/ }),
/* 68 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends2 = __webpack_require__(14);

var _extends3 = _interopRequireDefault(_extends2);

var _react = __webpack_require__(2);

var _react2 = _interopRequireDefault(_react);

var _rcNotification = __webpack_require__(61);

var _rcNotification2 = _interopRequireDefault(_rcNotification);

var _icon = __webpack_require__(45);

var _icon2 = _interopRequireDefault(_icon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var notificationInstance = {};
var defaultDuration = 4.5;
var defaultTop = 24;
var defaultBottom = 24;
var defaultPlacement = 'topRight';
var defaultGetContainer = void 0;
function setNotificationConfig(options) {
    var duration = options.duration,
        placement = options.placement,
        bottom = options.bottom,
        top = options.top,
        getContainer = options.getContainer;

    if (duration !== undefined) {
        defaultDuration = duration;
    }
    if (placement !== undefined) {
        defaultPlacement = placement;
    }
    if (bottom !== undefined) {
        defaultBottom = bottom;
    }
    if (top !== undefined) {
        defaultTop = top;
    }
    if (getContainer !== undefined) {
        defaultGetContainer = getContainer;
    }
}
function getPlacementStyle(placement) {
    var style = void 0;
    switch (placement) {
        case 'topLeft':
            style = {
                left: 0,
                top: defaultTop,
                bottom: 'auto'
            };
            break;
        case 'topRight':
            style = {
                right: 0,
                top: defaultTop,
                bottom: 'auto'
            };
            break;
        case 'bottomLeft':
            style = {
                left: 0,
                top: 'auto',
                bottom: defaultBottom
            };
            break;
        default:
            style = {
                right: 0,
                top: 'auto',
                bottom: defaultBottom
            };
            break;
    }
    return style;
}
function getNotificationInstance(prefixCls, placement) {
    var cacheKey = prefixCls + '-' + placement;
    if (!notificationInstance[cacheKey]) {
        notificationInstance[cacheKey] = _rcNotification2['default'].newInstance({
            prefixCls: prefixCls,
            className: prefixCls + '-' + placement,
            style: getPlacementStyle(placement),
            getContainer: defaultGetContainer
        });
    }
    return notificationInstance[cacheKey];
}
var typeToIcon = {
    success: 'check-circle-o',
    info: 'info-circle-o',
    error: 'cross-circle-o',
    warning: 'exclamation-circle-o'
};
function notice(args) {
    var outerPrefixCls = args.prefixCls || 'ant-notification';
    var prefixCls = outerPrefixCls + '-notice';
    var duration = args.duration === undefined ? defaultDuration : args.duration;
    var iconNode = null;
    if (args.icon) {
        iconNode = _react2['default'].createElement(
            'span',
            { className: prefixCls + '-icon' },
            args.icon
        );
    } else if (args.type) {
        var iconType = typeToIcon[args.type];
        iconNode = _react2['default'].createElement(_icon2['default'], { className: prefixCls + '-icon ' + prefixCls + '-icon-' + args.type, type: iconType });
    }
    var autoMarginTag = !args.description && iconNode ? _react2['default'].createElement('span', { className: prefixCls + '-message-single-line-auto-margin' }) : null;
    getNotificationInstance(outerPrefixCls, args.placement || defaultPlacement).notice({
        content: _react2['default'].createElement(
            'div',
            { className: iconNode ? prefixCls + '-with-icon' : '' },
            iconNode,
            _react2['default'].createElement(
                'div',
                { className: prefixCls + '-message' },
                autoMarginTag,
                args.message
            ),
            _react2['default'].createElement(
                'div',
                { className: prefixCls + '-description' },
                args.description
            ),
            args.btn ? _react2['default'].createElement(
                'span',
                { className: prefixCls + '-btn' },
                args.btn
            ) : null
        ),
        duration: duration,
        closable: true,
        onClose: args.onClose,
        key: args.key,
        style: args.style || {},
        className: args.className
    });
}
var api = {
    open: notice,
    close: function close(key) {
        Object.keys(notificationInstance).forEach(function (cacheKey) {
            return notificationInstance[cacheKey].removeNotice(key);
        });
    },

    config: setNotificationConfig,
    destroy: function destroy() {
        Object.keys(notificationInstance).forEach(function (cacheKey) {
            notificationInstance[cacheKey].destroy();
            delete notificationInstance[cacheKey];
        });
    }
};
['success', 'info', 'warning', 'error'].forEach(function (type) {
    api[type] = function (args) {
        return api.open((0, _extends3['default'])({}, args, { type: type }));
    };
});
api.warn = api.warning;
exports['default'] = api;
module.exports = exports['default'];

/***/ }),
/* 69 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _apis = __webpack_require__(1);

var _common = __webpack_require__(0);

__webpack_require__(28);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _Antd = Antd,
    Layout = _Antd.Layout,
    Dropdown = _Antd.Dropdown,
    Menu = _Antd.Menu,
    Table = _Antd.Table,
    Icon = _Antd.Icon,
    Tooltip = _Antd.Tooltip,
    Button = _Antd.Button,
    Spin = _Antd.Spin,
    Popconfirm = _Antd.Popconfirm,
    Tabs = _Antd.Tabs,
    Card = _Antd.Card,
    Col = _Antd.Col,
    Row = _Antd.Row;
var Header = Layout.Header,
    Footer = Layout.Footer,
    Sider = Layout.Sider,
    Content = Layout.Content;
var _ReactRedux = ReactRedux,
    connect = _ReactRedux.connect;

var cardStyle = {
    width: '240px',
    display: 'inline-block'
};

var ItemCredit = function (_React$Component) {
    _inherits(ItemCredit, _React$Component);

    function ItemCredit() {
        _classCallCheck(this, ItemCredit);

        return _possibleConstructorReturn(this, (ItemCredit.__proto__ || Object.getPrototypeOf(ItemCredit)).apply(this, arguments));
    }

    _createClass(ItemCredit, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                'div',
                null,
                '1223'
            );
        }
    }]);

    return ItemCredit;
}(React.Component);

var mapStateToProps = function mapStateToProps(state) {
    return {
        tableSize: state.update.tableSize
    };
};

exports.default = connect(mapStateToProps)(ItemCredit);

/***/ }),
/* 70 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _apis = __webpack_require__(1);

var _common = __webpack_require__(0);

__webpack_require__(28);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _Antd = Antd,
    Layout = _Antd.Layout,
    Dropdown = _Antd.Dropdown,
    Menu = _Antd.Menu,
    Table = _Antd.Table,
    Icon = _Antd.Icon,
    Tooltip = _Antd.Tooltip,
    Button = _Antd.Button,
    Spin = _Antd.Spin,
    Popconfirm = _Antd.Popconfirm,
    Tabs = _Antd.Tabs,
    Card = _Antd.Card,
    Col = _Antd.Col,
    Row = _Antd.Row;
var Header = Layout.Header,
    Footer = Layout.Footer,
    Sider = Layout.Sider,
    Content = Layout.Content;
var _ReactRedux = ReactRedux,
    connect = _ReactRedux.connect;

var cardStyle = {
    width: '240px',
    display: 'inline-block'
};

var columnsGraplist = [{
    title: '创建时间',
    dataIndex: 'create_time',
    key: 'create_time'
}, {
    title: '名称',
    dataIndex: 'name',
    key: 'name'
}, {
    title: '订单id',
    dataIndex: 'order_id',
    key: 'order_id'
}, {
    title: '规则id',
    dataIndex: 'rule_id',
    key: 'rule_id'
}];
var columnsOrderecord = [{
    title: '订单号',
    dataIndex: 'order_id',
    key: 'order_id'
}, {
    title: '产品类型',
    dataIndex: 'product',
    key: 'product'
}, {
    title: '日期',
    dataIndex: 'create_time',
    key: 'create_time'
}, {
    title: '金额',
    dataIndex: 'amount',
    key: 'amount'
}, {
    title: '期限',
    dataIndex: 'apply_stages',
    key: 'apply_stages'
}, {
    title: '状态',
    dataIndex: 'status',
    key: 'status'
}];

var ItemOverview = function (_React$Component) {
    _inherits(ItemOverview, _React$Component);

    function ItemOverview() {
        _classCallCheck(this, ItemOverview);

        var _this = _possibleConstructorReturn(this, (ItemOverview.__proto__ || Object.getPrototypeOf(ItemOverview)).call(this));

        _this.state = {
            dataGraplist: [],
            dataOrderecord: [],
            dataUserdetectioninfo: {}
        };
        return _this;
    }

    _createClass(ItemOverview, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            var _this2 = this;

            (0, _common.jrFetchGet)(_apis.apiGraplist, {
                user_id: 1150
            }).then(function (ret) {
                _this2.setState({
                    dataGraplist: ret.data
                });
            });
            (0, _common.jrFetchGet)(_apis.apiOrderecord, {
                user_id: 1150
            }).then(function (ret) {
                _this2.setState({
                    dataOrderecord: ret.data
                });
            });
            (0, _common.jrFetchGet)(_apis.apiUserdetectioninfo, {
                user_id: 1150
            }).then(function (ret) {
                _this2.setState({
                    dataUserdetectioninfo: ret.data
                });
            });
        }
    }, {
        key: 'getDetectionDom',
        value: function getDetectionDom() {
            var detection = this.state.dataUserdetectioninfo.detection;

            var domArr = [];
            for (var item in detection) {
                domArr.push(React.createElement(
                    Col,
                    { span: '8' },
                    React.createElement(
                        Card,
                        { title: item },
                        ' ',
                        React.createElement('img', { style: { width: '100%' }, src: detection[item] })
                    )
                ));
            }
            return domArr;
        }
    }, {
        key: 'render',
        value: function render() {
            var _state = this.state,
                dataGraplist = _state.dataGraplist,
                dataOrderecord = _state.dataOrderecord,
                dataUserdetectioninfo = _state.dataUserdetectioninfo;


            return React.createElement(
                'div',
                { className: 'item-overview' },
                React.createElement(
                    'h2',
                    null,
                    '\u89E6\u78B0\u7070\u540D\u5355'
                ),
                React.createElement(Table, { columns: columnsGraplist, dataSource: dataGraplist, size: this.props.tableSize }),
                React.createElement(
                    'h2',
                    null,
                    '\u5386\u53F2\u7533\u8BF7\u8BA2\u5355'
                ),
                React.createElement(Table, { columns: columnsOrderecord, dataSource: dataOrderecord, size: this.props.tableSize }),
                React.createElement(
                    'h2',
                    null,
                    '\u8EAB\u4EFD\u8BC1\u7167\u7247\u4FE1\u606F'
                ),
                dataUserdetectioninfo.certification ? React.createElement(
                    'div',
                    { className: 'certification-content' },
                    React.createElement(
                        Row,
                        null,
                        React.createElement(
                            Col,
                            { span: '8' },
                            React.createElement(
                                Card,
                                { title: '\u8EAB\u4EFD\u8BC1\u6B63\u9762\u7167\u7247' },
                                ' ',
                                React.createElement('img', { style: { width: '100%' }, src: dataUserdetectioninfo.certification.human_pic })
                            )
                        ),
                        React.createElement(
                            Col,
                            { span: '8' },
                            React.createElement(
                                Card,
                                { title: '\u8EAB\u4EFD\u8BC1\u53CD\u9762\u7167\u7247' },
                                React.createElement('img', { style: { width: '100%' }, src: dataUserdetectioninfo.certification.obverse_pic })
                            )
                        ),
                        React.createElement(
                            Col,
                            { span: '8' },
                            React.createElement(
                                Card,
                                { title: '\u624B\u6301\u8EAB\u4EFD\u8BC1\u7167' },
                                React.createElement('img', { style: { width: '100%' }, src: dataUserdetectioninfo.certification.reverse_pic })
                            )
                        )
                    )
                ) : [],
                React.createElement(
                    'h2',
                    null,
                    '\u6D3B\u4F53\u68C0\u6D4B\u622A\u56FE'
                ),
                dataUserdetectioninfo.detection ? React.createElement(
                    'div',
                    { className: 'certification-content' },
                    React.createElement(
                        Row,
                        null,
                        this.getDetectionDom()
                    )
                ) : [],
                React.createElement(
                    'h2',
                    null,
                    '\u8D44\u4EA7\u8BC1\u660E'
                ),
                dataUserdetectioninfo.prove ? React.createElement(
                    'div',
                    { className: 'certification-content' },
                    React.createElement(
                        Row,
                        null,
                        dataUserdetectioninfo.prove.map(function (item) {
                            return React.createElement(
                                Col,
                                { span: '8' },
                                React.createElement(
                                    Card,
                                    { title: item.name },
                                    React.createElement('img', { style: { width: '100%' }, src: item.profile_pic })
                                )
                            );
                        })
                    )
                ) : []
            );
        }
    }]);

    return ItemOverview;
}(React.Component);

var mapStateToProps = function mapStateToProps(state) {
    return {
        tableSize: state.update.tableSize
    };
};

exports.default = connect(mapStateToProps)(ItemOverview);

/***/ }),
/* 71 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _apis = __webpack_require__(1);

var _common = __webpack_require__(0);

__webpack_require__(28);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _Antd = Antd,
    Layout = _Antd.Layout,
    Dropdown = _Antd.Dropdown,
    Menu = _Antd.Menu,
    Table = _Antd.Table,
    Icon = _Antd.Icon,
    Tooltip = _Antd.Tooltip,
    Button = _Antd.Button,
    Spin = _Antd.Spin,
    Popconfirm = _Antd.Popconfirm,
    Tabs = _Antd.Tabs,
    Card = _Antd.Card,
    Col = _Antd.Col,
    Row = _Antd.Row;
var Header = Layout.Header,
    Footer = Layout.Footer,
    Sider = Layout.Sider,
    Content = Layout.Content;
var _ReactRedux = ReactRedux,
    connect = _ReactRedux.connect;

var cardStyle = {
    width: '240px',
    display: 'inline-block'
};

var columnsDataTaobaoindexBasic = [{
    title: '淘宝用户名',
    dataIndex: 'name',
    key: 'name'
}, {
    title: '实名认证姓名',
    dataIndex: 'nice',
    key: 'nice'
}, {
    title: '淘宝绑定手机号',
    dataIndex: 'phone',
    key: 'phone'
}, {
    title: '淘宝买家等级',
    dataIndex: 'level',
    key: 'level'
}];

var columnsDataTaobaoindexAddress = [{
    title: '序号',
    dataIndex: 'id',
    key: 'id'
}, {
    title: '地址',
    dataIndex: 'address',
    key: 'address'
}, {
    title: '收货人',
    dataIndex: 'name',
    key: 'name'
}, {
    title: '手机号',
    dataIndex: 'phone',
    key: 'phone'
}];
var columnsDataDetails = [{
    title: '序号',
    dataIndex: 'id',
    key: 'id'
}, {
    title: '交易时间',
    dataIndex: 'traded_at',
    key: 'traded_at'
}, {
    title: '交易详情',
    dataIndex: 'trade_details',
    key: 'trade_details',
    render: function render(item) {
        return React.createElement(
            'p',
            { title: item },
            item.slice(0, 20)
        );
    }
}, {
    title: '交易对手	',
    dataIndex: 'seller_shopname',
    key: 'seller_shopname'
}, {
    title: '收货人号码',
    dataIndex: 'phone',
    key: 'phone'
}, {
    title: '交易金额',
    dataIndex: 'amount',
    key: 'amount'
}];

var ItemTaobao = function (_React$Component) {
    _inherits(ItemTaobao, _React$Component);

    function ItemTaobao() {
        _classCallCheck(this, ItemTaobao);

        var _this = _possibleConstructorReturn(this, (ItemTaobao.__proto__ || Object.getPrototypeOf(ItemTaobao)).call(this));

        _this.state = {
            dataTaobaoindex: {
                user_basic: [],
                user_address: []
            },
            dataGetdetails: [],
            paginationDetail: {
                current: 1
            }
        };
        return _this;
    }

    _createClass(ItemTaobao, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            this.getDetails();
            this.getIndex();
        }
    }, {
        key: 'getDetails',
        value: function getDetails() {
            var _this2 = this;

            (0, _common.jrFetchGet)(_apis.apiGetdetails, {
                user_id: 1150,
                page: this.state.paginationDetail.current
            }).then(function (ret) {
                var _ret$data = ret.data,
                    info = _ret$data.info,
                    page = _ret$data.page;

                _this2.setState({
                    dataGetdetails: info,
                    countPage: page.count_page
                });
                if (!Boolean(_this2.state.paginationDetail['total'])) {
                    _this2.setState({
                        paginationDetail: {
                            current: 1,
                            pageSize: info.length,
                            total: info.length * page.count_page
                        }
                    });
                }
            });
        }
    }, {
        key: 'getIndex',
        value: function getIndex() {
            var _this3 = this;

            (0, _common.jrFetchGet)(_apis.apiTaobaoindex, {
                user_id: 1150
            }).then(function (ret) {
                _this3.setState({
                    dataTaobaoindex: ret.data
                });
            });
        }
    }, {
        key: 'changePagination',
        value: function changePagination(pagination, filters, sorter) {
            var _this4 = this;

            this.setState({
                paginationDetail: pagination
            }, function () {
                _this4.getDetails();
            });
        }
    }, {
        key: 'render',
        value: function render() {
            var _state = this.state,
                dataTaobaoindex = _state.dataTaobaoindex,
                dataGetdetails = _state.dataGetdetails,
                paginationDetail = _state.paginationDetail;
            var user_basic = dataTaobaoindex.user_basic,
                user_address = dataTaobaoindex.user_address;


            return React.createElement(
                'div',
                { className: 'item-taobao' },
                React.createElement(
                    'h2',
                    null,
                    '\u6DD8\u5B9D\u57FA\u672C\u4FE1\u606F'
                ),
                React.createElement(Table, { columns: columnsDataTaobaoindexBasic, dataSource: [user_basic], size: this.props.tableSize }),
                React.createElement(
                    'h2',
                    null,
                    '\u6DD8\u5B9D\u6536\u8D27\u5730\u5740'
                ),
                React.createElement(Table, { columns: columnsDataTaobaoindexAddress, dataSource: user_address, size: this.props.tableSize }),
                React.createElement(
                    'h2',
                    null,
                    '\u6DD8\u5B9D\u4EA4\u6613\u660E\u7EC6'
                ),
                React.createElement(Table, { onChange: this.changePagination.bind(this), pagination: paginationDetail,
                    columns: columnsDataDetails, dataSource: dataGetdetails, size: this.props.tableSize })
            );
        }
    }]);

    return ItemTaobao;
}(React.Component);

var mapStateToProps = function mapStateToProps(state) {
    return {
        tableSize: state.update.tableSize
    };
};

exports.default = connect(mapStateToProps)(ItemTaobao);

/***/ }),
/* 72 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _apis = __webpack_require__(1);

var _common = __webpack_require__(0);

__webpack_require__(28);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _Antd = Antd,
    Layout = _Antd.Layout,
    Dropdown = _Antd.Dropdown,
    Menu = _Antd.Menu,
    Table = _Antd.Table,
    Icon = _Antd.Icon,
    Tooltip = _Antd.Tooltip,
    Button = _Antd.Button,
    Spin = _Antd.Spin,
    Popconfirm = _Antd.Popconfirm,
    Tabs = _Antd.Tabs,
    Card = _Antd.Card,
    Col = _Antd.Col,
    Row = _Antd.Row,
    Alert = _Antd.Alert;
var Header = Layout.Header,
    Footer = Layout.Footer,
    Sider = Layout.Sider,
    Content = Layout.Content;
var _ReactRedux = ReactRedux,
    connect = _ReactRedux.connect;

var cardStyle = {
    width: '240px',
    display: 'inline-block'
};

var columnsTelcos = [{
    title: '月份',
    dataIndex: 'm',
    key: 'm'
}, {
    title: '短信数',
    dataIndex: 'SMSES',
    key: 'SMSES'
}, {
    title: '拨打',
    dataIndex: 'DIAL',
    key: 'DIAL'
}, {
    title: '接听',
    dataIndex: 'DIALED',
    key: 'DIALED'
}];
var columnsAddressList = [{
    title: '运营商号码总数',
    dataIndex: 'telco_count',
    key: 'telco_count'
}, {
    title: '淘宝收货号码总数',
    dataIndex: 'taobao_count',
    key: 'taobao_count'
}, {
    title: '通讯录号码总数',
    dataIndex: 'DIAL',
    key: 'DIAL'
}, {
    title: '通讯录中包含运营商号码的总数',
    dataIndex: 'address_list_and_telco',
    key: 'address_list_and_telco'
}, {
    title: '运营商号码在通讯录中占比',
    dataIndex: 'proportion',
    key: 'proportion'
}];

var columnsTelcoCall = [{
    title: '电话号码',
    dataIndex: 'peer_num',
    key: 'peer_num'
}, {
    title: '通讯录名称',
    dataIndex: 'contact_name',
    key: 'contact_name'
}, {
    title: '来源',
    dataIndex: 'source',
    key: 'source'
}, {
    title: '通话频次总和',
    dataIndex: 'count_all',
    key: 'count_all'
}, {
    title: '接听/拨打/短信',
    dataIndex: 'count',
    key: 'count'
}, {
    title: '最后拨出时间',
    dataIndex: 'proportion',
    key: 'proportion'
}, {
    title: '最后接听时间',
    dataIndex: 'proportion2',
    key: 'proportion2'
}, {
    title: '号码类型',
    dataIndex: 'proportion3',
    key: 'proportion3'
}, {
    title: '号码标识',
    dataIndex: 'proportion4',
    key: 'proportion4'
}, {
    title: '机构名称',
    dataIndex: 'proportion5',
    key: 'proportion5'
}];

var ItemTelcos = function (_React$Component) {
    _inherits(ItemTelcos, _React$Component);

    function ItemTelcos() {
        _classCallCheck(this, ItemTelcos);

        var _this = _possibleConstructorReturn(this, (ItemTelcos.__proto__ || Object.getPrototypeOf(ItemTelcos)).call(this));

        _this.state = {
            dataTelcos: {
                basic: {},
                telcos: [],
                address_list: {},
                telcoCall: []
            }
        };
        return _this;
    }

    _createClass(ItemTelcos, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            this.getDataTelcos();
            this.getSpecialtel();
        }
    }, {
        key: 'getDataTelcos',
        value: function getDataTelcos() {
            var _this2 = this;

            (0, _common.jrFetchGet)(_apis.apiTelcosdata, {
                user_id: 2607536
            }).then(function (ret) {
                _this2.setState({
                    dataTelcos: ret.data
                });
            });
        }
    }, {
        key: 'getSpecialtel',
        value: function getSpecialtel() {
            var _this3 = this;

            (0, _common.jrFetchGet)(_apis.apiSpecialtel, {
                user_id: 1150
            }).then(function (ret) {
                _this3.setState({
                    dataSpecialtel: ret.data
                });
            });
        }
    }, {
        key: 'render',
        value: function render() {
            var dataTelcos = this.state.dataTelcos;
            var _dataTelcos$basic = dataTelcos.basic,
                phone = _dataTelcos$basic.phone,
                source = _dataTelcos$basic.source,
                attribution = _dataTelcos$basic.attribution,
                create_time = _dataTelcos$basic.create_time,
                name = _dataTelcos$basic.name;


            return React.createElement(
                'div',
                { className: 'item-telcos' },
                React.createElement(Alert, { message: '\u8FD0\u8425\u5546\uFF08\u53F7\u7801 ' + phone + ' \u8FD0\u8425\u5546 ' + source + ' \u5165\u7F51 ' + create_time + ' \u5F52\u5C5E\u5730 ' + attribution + '\uFF09 \u59D3\u540D ' + name, banner: true, showIcon: false }),
                React.createElement(
                    'h2',
                    null,
                    '\u8FD1\u516D\u4E2A\u6708\u901A\u8BDD\u6570\u636E'
                ),
                React.createElement(Table, { pagination: false, columns: columnsTelcos, dataSource: dataTelcos.telcos, size: this.props.tableSize }),
                React.createElement(
                    'h2',
                    null,
                    '\u901A\u8BAF\u5F55'
                ),
                React.createElement(Table, { pagination: false, columns: columnsAddressList, dataSource: [dataTelcos.address_list], size: this.props.tableSize }),
                React.createElement(
                    'h2',
                    null,
                    '\u901A\u8BDD\u8BB0\u5F55\u660E\u7EC6'
                ),
                React.createElement(Table, { columns: columnsTelcoCall, dataSource: dataTelcos.telcoCall, size: this.props.tableSize })
            );
        }
    }]);

    return ItemTelcos;
}(React.Component);

var mapStateToProps = function mapStateToProps(state) {
    return {
        tableSize: state.update.tableSize
    };
};

exports.default = connect(mapStateToProps)(ItemTelcos);

/***/ }),
/* 73 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

__webpack_require__(131);

var _apis = __webpack_require__(1);

var _common = __webpack_require__(0);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _Antd = Antd,
    Layout = _Antd.Layout,
    Dropdown = _Antd.Dropdown,
    Menu = _Antd.Menu,
    Icon = _Antd.Icon,
    Tooltip = _Antd.Tooltip,
    Button = _Antd.Button,
    Spin = _Antd.Spin,
    Popconfirm = _Antd.Popconfirm,
    Tabs = _Antd.Tabs;
var Header = Layout.Header,
    Footer = Layout.Footer,
    Sider = Layout.Sider,
    Content = Layout.Content;
var _ReactRedux = ReactRedux,
    connect = _ReactRedux.connect;

var TabPane = Tabs.TabPane;

var Verify = function (_React$Component) {
    _inherits(Verify, _React$Component);

    function Verify() {
        _classCallCheck(this, Verify);

        var _this = _possibleConstructorReturn(this, (Verify.__proto__ || Object.getPrototypeOf(Verify)).call(this));

        _this.state = {
            userInfo: [],
            userMenu: [],
            siderCollapse: false
        };

        return _this;
    }

    _createClass(Verify, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            var _this2 = this;

            this.getUserinfo();

            _common.resizeCallback.callbackArr.push(function () {
                if (document.body.clientWidth < 900) {
                    console.log('折叠2');
                    _this2.setState({
                        siderCollapse: true
                    });
                } else {
                    console.log('展开2');
                    _this2.setState({
                        siderCollapse: false
                    });
                }
            });

            /*      let timeOutResize;
                  window.onresize = () => {
                      window.clearTimeout(timeOutResize);
                      timeOutResize = window.setTimeout(() => {
                            console.log('折叠')
                          if( document.body.clientWidth < 900) {
                              this.setState({
                                  siderCollapse: true
                              })
                          }else {
                              console.log('展开')
                              this.setState({
                                  siderCollapse: false
                              })
                          }
                      }, 200)
                  }*/
        }
    }, {
        key: 'componentWillUnmount',
        value: function componentWillUnmount() {
            console.log('去除');
            _common.resizeCallback.callbackArr.pop();
            console.log(_common.resizeCallback.callbackArr);
        }
    }, {
        key: 'getUserinfo',
        value: function getUserinfo() {
            var _this3 = this;

            (0, _common.jrFetchGet)(_apis.apiUserinfo, {
                user_id: 1150,
                order_id: 1177066
            }).then(function (ret) {
                _this3.setState({
                    userInfo: ret.data
                });
            });

            (0, _common.jrFetchGet)(_apis.apiUsermenu, {
                product_id: 65,
                order_id: 1177066
            }).then(function (ret) {
                _this3.setState({
                    userMenu: ret.data
                });
            });
        }
    }, {
        key: 'collapse',
        value: function collapse() {
            this.setState({
                siderCollapse: !this.state.siderCollapse
            });
        }
    }, {
        key: 'changeTab',
        value: function changeTab(key) {
            window.location.href = '#/MainView/Verify/' + key;
        }
    }, {
        key: 'render',
        value: function render() {
            var _props$children$type = this.props.children.type,
                WrappedComponent = _props$children$type.WrappedComponent,
                name = _props$children$type.name;


            var pageName = WrappedComponent ? WrappedComponent.displayName : name;

            console.log(2);
            var _state = this.state,
                userInfo = _state.userInfo,
                siderCollapse = _state.siderCollapse,
                userMenu = _state.userMenu;


            return React.createElement(
                'div',
                { className: 'verify' },
                React.createElement(
                    'div',
                    { style: siderCollapse ? {
                            width: '0px'
                        } : {}, className: 'v-basic-info' },
                    siderCollapse ? React.createElement(
                        'p',
                        { className: 'btn-collapse hover-click', onClick: this.collapse.bind(this) },
                        React.createElement(
                            'i',
                            { className: 'iconfont' },
                            '\uE602'
                        )
                    ) : React.createElement(
                        'span',
                        { className: 'btn-collapse hover-click', onClick: this.collapse.bind(this) },
                        React.createElement(
                            'i',
                            { className: 'iconfont' },
                            '\uE62B'
                        )
                    ),
                    React.createElement(
                        'p',
                        { className: 'info-title' },
                        '\u57FA\u672C\u4FE1\u606F'
                    ),
                    userInfo.map(function (item) {
                        return React.createElement(
                            'p',
                            { className: 'info-item' },
                            React.createElement(
                                'span',
                                { className: 'key' },
                                item.name
                            ),
                            React.createElement(
                                'span',
                                { className: 'value' },
                                item.value
                            )
                        );
                    })
                ),
                React.createElement(
                    'div',
                    { style: siderCollapse ? {
                            width: '100%'
                        } : {}, className: 'verify-content' },
                    React.createElement(
                        Tabs,
                        { onChange: this.changeTab, defaultActiveKey: pageName },
                        userMenu.map(function (item) {
                            return React.createElement(TabPane, { tab: item.name, key: item.id });
                        })
                    ),
                    React.createElement(
                        'div',
                        { className: 'tab-content' },
                        this.props.children
                    )
                )
            );
        }
    }]);

    return Verify;
}(React.Component);

var mapStateToProps = function mapStateToProps(state) {
    return {
        tableSize: state.update.tableSize
    };
};

exports.default = connect(mapStateToProps)(Verify);

/***/ }),
/* 74 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var JiebaOne = function (_React$Component) {
    _inherits(JiebaOne, _React$Component);

    function JiebaOne() {
        _classCallCheck(this, JiebaOne);

        return _possibleConstructorReturn(this, (JiebaOne.__proto__ || Object.getPrototypeOf(JiebaOne)).apply(this, arguments));
    }

    _createClass(JiebaOne, [{
        key: "render",
        value: function render() {
            return React.createElement(
                "div",
                null,
                "123"
            );
        }
    }]);

    return JiebaOne;
}(React.Component);

exports.default = JiebaOne;

/***/ }),
/* 75 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

__webpack_require__(134);

var _consts = __webpack_require__(3);

var _common = __webpack_require__(0);

var _apis = __webpack_require__(1);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _Antd = Antd,
    Layout = _Antd.Layout,
    Dropdown = _Antd.Dropdown,
    Menu = _Antd.Menu,
    Icon = _Antd.Icon,
    Tooltip = _Antd.Tooltip,
    Button = _Antd.Button,
    Spin = _Antd.Spin,
    Popconfirm = _Antd.Popconfirm;
var Header = Layout.Header,
    Footer = Layout.Footer,
    Sider = Layout.Sider,
    Content = Layout.Content;
var Item = Menu.Item,
    SubMenu = Menu.SubMenu;

var DEFAULT_HEADBK = 0.1;
var DEFALUT_TITLEA = '简融管理平台';
var DEFALUT_TITLEB = 'F2E-MANAGE';
var _ReactRouter = ReactRouter,
    Link = _ReactRouter.Link;

var MenuItemGroup = Menu.ItemGroup;
var _ReactRedux = ReactRedux,
    connect = _ReactRedux.connect;


var setTableSize = function setTableSize(val) {
    return {
        type: 'setTableSize',
        val: val
    };
};

var MainView = function (_React$Component) {
    _inherits(MainView, _React$Component);

    function MainView() {
        _classCallCheck(this, MainView);

        var _this = _possibleConstructorReturn(this, (MainView.__proto__ || Object.getPrototypeOf(MainView)).call(this));

        _this.state = {
            current: 'mail',
            title: DEFALUT_TITLEA,
            userInfo: false,
            loading: false,
            menuCollapse: false
        };
        return _this;
    }

    _createClass(MainView, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            var _this2 = this;

            _common.resizeCallback.callbackArr.push(function () {
                if (document.body.clientWidth < 730) {
                    console.log('折叠3');
                    _this2.setState({
                        menuCollapse: true
                    });
                } else {
                    console.log('展开3');
                    _this2.setState({
                        menuCollapse: false
                    });
                }
            });
        }
    }, {
        key: 'componentWillUnmount',
        value: function componentWillUnmount() {
            console.log('去除MainView');
            _common.resizeCallback.callbackArr.pop();
            console.log(_common.resizeCallback.callbackArr);
        }
    }, {
        key: 'toExit',
        value: function toExit() {
            (0, _common.jrFetchGet)(_apis.apiLogout).then(function (ret) {
                window.location.href = '#/login';
            });
        }
    }, {
        key: 'handleClick',
        value: function handleClick(e) {
            this.setState({
                current: e.key
            });
        }
    }, {
        key: 'changeStyle',
        value: function changeStyle() {
            var tableSizeArr = ['small', 'middle', 'default'];

            switch (this.props.tableSize) {
                case 'small':
                    this.props.setTableSize('middle');
                    break;
                case 'middle':
                    this.props.setTableSize('default');
                    break;
                case 'default':
                    this.props.setTableSize('small');
                    break;

            }
        }
    }, {
        key: 'render',
        value: function render() {
            var _state = this.state,
                loading = _state.loading,
                menuCollapse = _state.menuCollapse;


            var topMenu = React.createElement(
                'div',
                { className: 'menu' },
                React.createElement(
                    Menu,
                    { theme: 'dark', onClick: this.handleClick, selectedKeys: [this.state.current], mode: 'horizontal' },
                    React.createElement(
                        SubMenu,
                        { title: React.createElement(
                                'span',
                                null,
                                React.createElement(Icon, { type: 'setting' }),
                                '\u7CFB\u7EDF\u7BA1\u7406'
                            ) },
                        React.createElement(
                            Menu.Item,
                            { key: '1' },
                            '\u8D26\u53F7\u7BA1\u7406'
                        )
                    ),
                    React.createElement(
                        SubMenu,
                        { title: React.createElement(
                                'span',
                                null,
                                React.createElement(Icon, { type: 'pie-chart' }),
                                '\u6570\u636E\u7EDF\u8BA1'
                            ) },
                        React.createElement(
                            Menu.Item,
                            { key: '1' },
                            '\u5DE5\u4F5C\u7EDF\u8BA1'
                        )
                    ),
                    React.createElement(
                        SubMenu,
                        { title: React.createElement(
                                'span',
                                null,
                                React.createElement(Icon, { type: 'bars' }),
                                '\u8BA2\u5355\u7BA1\u7406'
                            ) },
                        React.createElement(
                            Menu.Item,
                            { key: '1' },
                            React.createElement(Icon, { type: 'code-o' }),
                            '\u8BA2\u5355\u67E5\u8BE2'
                        ),
                        React.createElement(
                            Menu.Item,
                            { key: '2' },
                            React.createElement(Icon, { type: 'bars' }),
                            '\u8BA2\u5355\u5BA1\u6838'
                        )
                    )
                )
            );

            return React.createElement(
                Layout,
                { className: 'main-view' },
                React.createElement(
                    Header,
                    { className: 'header-bar' },
                    React.createElement('p', { className: 'header-title' }),
                    React.createElement(
                        'p',
                        { className: 'user-info' },
                        '\xA0\xA0\xA0\u8D75\u6708\u5357 \xA0\xA0\xA0',
                        React.createElement(
                            Popconfirm,
                            { title: 'Are you sure \uFF1F', onConfirm: this.toExit, okText: 'Yes', cancelText: 'No' },
                            React.createElement(
                                Button,
                                { size: 'small' },
                                '\u9000\u51FA'
                            )
                        ),
                        '\xA0\xA0\xA0\xA0',
                        React.createElement(
                            'span',
                            { className: 'hover-click', onClick: this.changeStyle.bind(this) },
                            React.createElement(
                                'i',
                                { className: 'iconfont' },
                                '\uE65E'
                            )
                        )
                    ),
                    menuCollapse ? [] : topMenu
                ),
                React.createElement(
                    Layout,
                    { className: 'main-box' },
                    React.createElement(
                        Content,
                        { className: 'content', style: { minHeight: window.screen.availHeight - 200 + 'px' } },
                        loading ? React.createElement(Spin, null) : this.props.children
                    )
                ),
                React.createElement(Footer, null)
            );
        }
    }]);

    return MainView;
}(React.Component);

var mapStateToProps = function mapStateToProps(state) {
    return {
        tableSize: state.update.tableSize
    };
};

exports.default = connect(mapStateToProps, { setTableSize: setTableSize })(MainView);

/***/ }),
/* 76 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.CODE_SUCCESS = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

__webpack_require__(135);

var _jrbasic = __webpack_require__(44);

var _common = __webpack_require__(0);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _Antd = Antd,
    Select = _Antd.Select,
    Table = _Antd.Table,
    message = _Antd.message;

var cidArr = ['3', '8', '10'];
var Option = Select.Option;

var apiGetallcidinfo = '/api/getallcidinfo'; /*获取所有cid*/
var apiGetrepushdata = '/api/getrepushdata'; /*获取机构订单列表*/
var apiUpdateflag = '/api/updateflag'; /*重推*/
var CODE_SUCCESS = exports.CODE_SUCCESS = 0;

var CidSet = function (_React$Component) {
    _inherits(CidSet, _React$Component);

    function CidSet() {
        _classCallCheck(this, CidSet);

        var _this = _possibleConstructorReturn(this, (CidSet.__proto__ || Object.getPrototypeOf(CidSet)).call(this));

        _this.state = {
            cidArr: [],
            activeCid: '',
            dataSource: []
        };
        return _this;
    }

    _createClass(CidSet, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            this.getCidList();
        }
    }, {
        key: 'handleChange',
        value: function handleChange(val) {
            this.setState({
                activeCid: val
            });
            this.updateTable(val);
        }
    }, {
        key: 'getCidList',
        value: function getCidList() {
            var _this2 = this;

            (0, _jrbasic.fetchGet)(apiGetallcidinfo).then(function (ret) {
                if (ret.code === CODE_SUCCESS) {
                    var midArr = [];
                    for (var item in ret.data) {
                        midArr.push({
                            id: item,
                            name: ret.data[item]
                        });
                    }
                    _this2.setState({
                        cidArr: midArr,
                        activeCid: midArr[1]['id']
                    });

                    _this2.updateTable(midArr[1]['id']);
                } else {
                    message.info(ret.message);
                }
            });
        }
    }, {
        key: 'updateTable',
        value: function updateTable(cid) {
            var _this3 = this;

            (0, _jrbasic.fetchGet)(apiGetrepushdata, {
                cid: cid
            }).then(function (ret) {
                if (ret.code === CODE_SUCCESS) {
                    _this3.setState({
                        dataSource: ret.data.list
                    });
                } else {
                    message.info(ret.message);
                }
            });
        }
    }, {
        key: 'reUse',
        value: function reUse(orderId) {
            var _this4 = this;

            (0, _jrbasic.fetchGet)(apiUpdateflag, {
                order_id: orderId
            }).then(function (ret) {
                if (ret.code === CODE_SUCCESS) {
                    message.success('重推成功');
                    _this4.updateTable(_this4.state.activeCid);
                } else {
                    message.info(ret.message);
                }
            });
        }
    }, {
        key: 'render',
        value: function render() {
            var _this5 = this;

            var columns = [{
                title: 'ID',
                dataIndex: 'id',
                key: 'id'
            }, {
                title: '机构ID',
                dataIndex: 'cid',
                key: 'cid'
            }, {
                title: '订单状态',
                dataIndex: 'status',
                key: 'status'
            }, {
                title: '创建时间',
                dataIndex: 'create_time',
                key: 'create_time',
                render: function render(record) {
                    var mid = new Date(record * 1000);
                    return (0, _common.formatDate)(mid);
                }
            }, {
                title: 'completed_at',
                dataIndex: 'completed_at',
                key: 'completed_at',
                render: function render(record) {
                    var mid = new Date(record * 1000);
                    return (0, _common.formatDate)(mid);
                }
            }, {
                title: 'flag',
                dataIndex: 'flag',
                key: 'flag'
            }, {
                title: '操作',
                dataIndex: 'id',
                key: 'x',
                render: function render(text) {

                    return React.createElement(
                        'p',
                        { onClick: _this5.reUse.bind(_this5, text) },
                        '\u91CD\u63A8'
                    );
                }
            }];

            var _state = this.state,
                activeCid = _state.activeCid,
                dataSource = _state.dataSource,
                cidArr = _state.cidArr;


            return React.createElement(
                'div',
                { className: 'cid-set' },
                'CID: \xA0\xA0\xA0\xA0',
                React.createElement(
                    Select,
                    { defaultValue: activeCid, style: { width: 120 }, onChange: this.handleChange.bind(this) },
                    cidArr.map(function (item) {
                        return React.createElement(
                            Option,
                            { value: item.id },
                            item.name
                        );
                    })
                ),
                React.createElement('br', null),
                React.createElement('br', null),
                React.createElement(Table, { dataSource: dataSource, columns: columns })
            );
        }
    }]);

    return CidSet;
}(React.Component);

exports.default = CidSet;

/***/ }),
/* 77 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _BtnsToolBar = __webpack_require__(4);

var _BtnsToolBar2 = _interopRequireDefault(_BtnsToolBar);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _Antd = Antd,
    Table = _Antd.Table,
    Popconfirm = _Antd.Popconfirm,
    Button = _Antd.Button,
    Modal = _Antd.Modal,
    Form = _Antd.Form,
    Input = _Antd.Input,
    Select = _Antd.Select,
    message = _Antd.message,
    Menu = _Antd.Menu,
    Switch = _Antd.Switch,
    Popover = _Antd.Popover,
    Icon = _Antd.Icon,
    Pagination = _Antd.Pagination,
    DatePicker = _Antd.DatePicker;
var RangePicker = DatePicker.RangePicker;

var Option = Select.Option;

var ActiveStatistics = function (_React$Component) {
    _inherits(ActiveStatistics, _React$Component);

    function ActiveStatistics(props) {
        _classCallCheck(this, ActiveStatistics);

        var _this = _possibleConstructorReturn(this, (ActiveStatistics.__proto__ || Object.getPrototypeOf(ActiveStatistics)).call(this, props));

        _this.state = {
            dataSource: []
        };
        return _this;
    }

    _createClass(ActiveStatistics, [{
        key: "getItem",
        value: function getItem() {
            return React.createElement(
                _BtnsToolBar2.default,
                null,
                React.createElement(
                    Button,
                    null,
                    "\u5BFC\u51FA",
                    React.createElement(Icon, { type: "export" })
                ),
                React.createElement(
                    Select,
                    { style: { width: 100 }, placeholder: "\u4E3B\u6E20\u9053\u540D\u79F0" },
                    React.createElement(
                        Option,
                        { key: "1", value: "1" },
                        "\u4ECA\u65E5\u5934\u6761"
                    ),
                    React.createElement(
                        Option,
                        { key: "2", value: "2" },
                        "\u6253\u4E2A\u501F\u6761"
                    )
                ),
                "\xA0\xA0",
                React.createElement(
                    Select,
                    { style: { width: 100 }, placeholder: "\u5B50\u6E20\u9053\u540D\u79F0" },
                    React.createElement(
                        Option,
                        { key: "1", value: "1" },
                        "001"
                    ),
                    React.createElement(
                        Option,
                        { key: "2", value: "2" },
                        "002"
                    )
                ),
                "\xA0\xA0",
                React.createElement(
                    Select,
                    { style: { width: 100 }, placeholder: "\u64CD\u4F5C\u7CFB\u7EDF" },
                    React.createElement(
                        Option,
                        { key: "1", value: "1" },
                        "IOS"
                    ),
                    React.createElement(
                        Option,
                        { key: "2", value: "2" },
                        "Andriod"
                    )
                ),
                "\xA0\xA0",
                React.createElement(RangePicker, null),
                "\xA0\xA0\xA0",
                React.createElement(
                    Button,
                    { type: "primary" },
                    "\u641C\u7D22",
                    React.createElement(Icon, { type: "search" })
                )
            );
        }
    }, {
        key: "render",
        value: function render() {
            var dataSource = this.state.dataSource;


            var columns = [{ title: '渠道名称', dataIndex: 'name', key: 'name' }, { title: '渠道号', dataIndex: 'name', key: 'name' }, { title: '应用名称', dataIndex: 'name', key: 'name' }, { title: '落地页注册', dataIndex: 'name', key: 'name' }, { title: '落地页有效注册', dataIndex: 'name', key: 'name' }, { title: 'APP全新注册', dataIndex: 'name', key: 'name' }, { title: '成单', dataIndex: 'name', key: 'name' }, { title: '放款人数', dataIndex: 'name', key: 'name' }, { title: '放款金额', dataIndex: 'name', key: 'name' }, { title: '复贷率', dataIndex: 'name', key: 'name' }, { title: '取现', dataIndex: 'name', key: 'name' }, { title: '取现金额', dataIndex: 'name', key: 'name' }];

            return React.createElement(
                "div",
                null,
                React.createElement(
                    "h2",
                    null,
                    "\u6570\u636E\u7EDF\u8BA1"
                ),
                React.createElement(
                    Menu,
                    { selectedKeys: ['1'],
                        mode: "horizontal",
                        defaultSelectedKeys: "1"
                    },
                    React.createElement(
                        Menu.Item,
                        { key: "1" },
                        "app\u6570\u636E"
                    ),
                    React.createElement(
                        Menu.Item,
                        { key: "2" },
                        "\u501F\u5427h5\u6570\u636E"
                    ),
                    React.createElement(
                        Menu.Item,
                        { key: "3" },
                        "\u7B80\u878Dh5\u6570\u636E"
                    ),
                    React.createElement(
                        Menu.Item,
                        { key: "4" },
                        "\u5361\u732Bh5\u6570\u636E"
                    )
                ),
                React.createElement("br", null),
                this.getItem(),
                React.createElement(Table, { columns: columns }),
                React.createElement("br", null),
                React.createElement(Pagination, { defaultCurrent: 1, defaultPageSize: 10, total: 100, style: { float: 'right' } }),
                React.createElement("br", null)
            );
        }
    }]);

    return ActiveStatistics;
}(React.Component);

exports.default = ActiveStatistics;

/***/ }),
/* 78 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(2);

var _react2 = _interopRequireDefault(_react);

var _common = __webpack_require__(0);

var _apis = __webpack_require__(1);

var _consts = __webpack_require__(3);

var _UploadImg = __webpack_require__(46);

var _UploadImg2 = _interopRequireDefault(_UploadImg);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _Antd = Antd,
    Button = _Antd.Button,
    Modal = _Antd.Modal,
    Form = _Antd.Form,
    Input = _Antd.Input,
    Select = _Antd.Select,
    Upload = _Antd.Upload,
    Icon = _Antd.Icon,
    Collapse = _Antd.Collapse,
    message = _Antd.message,
    Popconfirm = _Antd.Popconfirm,
    Progress = _Antd.Progress;

var Panel = Collapse.Panel;


var FormItem = Form.Item;
var Option = Select.Option;

var typeMarket = '1',
    typeChannel = '2',
    typeActive = '3';

var apiSubPromotionList = void 0,
    apiSkinList = void 0,
    apiDeleteSkin = void 0,
    apiCreateSkin = void 0,
    apiAddSub = void 0,
    apiEditSub = void 0,
    apiGetSubInfo = void 0;

var AddChannel = function (_Component) {
    _inherits(AddChannel, _Component);

    function AddChannel(props) {
        _classCallCheck(this, AddChannel);

        var _this = _possibleConstructorReturn(this, (AddChannel.__proto__ || Object.getPrototypeOf(AddChannel)).call(this, props));

        _this.state = {
            initData: [],
            picDate: [],
            previewVisible: false,
            CurrentPic: '',
            skinId: ''
            // percent: 0,
        };
        return _this;
    }

    _createClass(AddChannel, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            var _this2 = this;

            var _props$location$query = this.props.location['query'],
                product_id = _props$location$query.product_id,
                parentId = _props$location$query.parentId;
            var type_id = this.props.location['query'].type_id;

            switch (type_id) {
                case typeMarket:
                    apiSubPromotionList = _apis.M_getSubPromotionList;
                    apiGetSubInfo = _apis.M_getSubChannelInfo;
                    break;
                case typeChannel:
                    apiSubPromotionList = _apis.C_getSubPromotionList;
                    apiGetSubInfo = _apis.C_getSubChannelInfo;
                    break;
                case typeActive:
                    apiSubPromotionList = _apis.A_getSubPromotionList;
                    apiGetSubInfo = _apis.A_getSubChannelInfo;
                    break;
            }

            (0, _common.jrFetchGet)(apiSubPromotionList, {
                product_id: product_id
            }).then(function (ret) {
                _this2.setState({ initData: ret.data });
            });

            this.getSkinList(product_id);

            //-------编辑的时候获取子渠道信息-------
            (0, _common.jrFetchGet)(apiGetSubInfo, {
                channel_id: parentId
            }).then(function (ret) {
                _this2.setState({ skinId: ret.data && ret.data.skin_id });
                /*编辑的时候设置数据*/
                setTimeout(function () {
                    _this2.props.form.setFieldsValue(ret.data === null ? [] : ret.data);
                }, 200);
            });
        }
    }, {
        key: 'getSkinList',
        value: function getSkinList(product_id) {
            var _this3 = this;

            var type_id = this.props.location['query'].type_id;

            switch (type_id) {
                case typeMarket:
                    apiSkinList = _apis.M_promotionSkinList;
                    break;
                case typeChannel:
                    apiSkinList = _apis.C_promotionSkinList;
                    break;
                case typeActive:
                    apiSkinList = _apis.A_promotionSkinList;
                    break;
            }

            (0, _common.jrFetchGet)(apiSkinList, {
                product_id: product_id
            }).then(function (ret) {
                _this3.setState({ picDate: ret.data });
            });
        }
    }, {
        key: 'handleSubmit',
        value: function handleSubmit() {
            var _props$location$query2 = this.props.location['query'],
                type = _props$location$query2.type,
                product_id = _props$location$query2.product_id,
                parentId = _props$location$query2.parentId,
                type_id = _props$location$query2.type_id;

            var formVal = this.props.form.getFieldsValue();
            var postData = {
                product_id: product_id,
                channel_id: parentId,
                name: formVal.channel_name,
                land_type: formVal.land_type,
                ios_url: formVal.ios_url,
                android_url: formVal.android_url,
                package: formVal.package,
                source: formVal.source,
                skin_id: this.state.skinId
            };

            switch (type_id) {
                case typeMarket:
                    apiAddSub = _apis.M_addSubPromotion;
                    apiEditSub = _apis.M_editSubPromotion;
                    break;
                case typeChannel:
                    apiAddSub = _apis.C_addSubPromotion;
                    apiEditSub = _apis.C_editSubPromotion;
                    break;
                case typeActive:
                    apiAddSub = _apis.A_addSubPromotion;
                    apiEditSub = _apis.A_editSubPromotion;
                    break;
            }

            switch (type) {
                case _consts.ADD:
                    (0, _common.jrFetchGet)(apiAddSub, postData).then(function (ret) {
                        message.info(ret.message);window.history.go(-1);
                    });
                    break;
                case _consts.EDIt:
                    (0, _common.jrFetchGet)(apiEditSub, postData).then(function (ret) {
                        message.info(ret.message);window.history.go(-1);
                    });
                    break;
            }
        }
    }, {
        key: 'preViewPic',
        value: function preViewPic(val) {

            this.setState({ previewVisible: true, CurrentPic: val.url });
        }
    }, {
        key: 'choosePic',
        value: function choosePic(id) {

            this.setState({ skinId: id });
        }
    }, {
        key: 'getForm',
        value: function getForm() {
            var _this4 = this;

            var getFieldDecorator = this.props.form.getFieldDecorator;
            var _state = this.state,
                initData = _state.initData,
                picDate = _state.picDate,
                skinId = _state.skinId,
                percent = _state.percent;


            return [_react2.default.createElement(
                FormItem,
                _extends({}, _common.formItemLayout, { label: '\u5B50\u6E20\u9053\u540D\u79F0\uFF1A' }),
                getFieldDecorator('channel_name', {
                    rules: [{ required: true }]
                })(_react2.default.createElement(Input, { placeholder: '\u5982\uFF1A\u4ECA\u65E5\u5934\u6761\u5B50\u6E20\u90531\u53F7' }))
            ), _react2.default.createElement(
                FormItem,
                _extends({}, _common.formItemLayout, { label: '\u843D\u5730\u9875\u8DF3\u8F6C\u65B9\u5F0F\uFF1A' }),
                getFieldDecorator('land_type', {
                    rules: [{ required: true }]
                })(_react2.default.createElement(
                    Select,
                    { style: { width: 200 }, placeholder: '\u8BF7\u9009\u62E9' },
                    initData.land_type && initData.land_type.map(function (val, key) {
                        return _react2.default.createElement(
                            Option,
                            { value: val.value, key: key },
                            val.option
                        );
                    })
                ))
            ), _react2.default.createElement(
                FormItem,
                _extends({}, _common.formItemLayout, { label: 'iOS\u4E0B\u8F7D\u94FE\u63A5\uFF1A' }),
                getFieldDecorator('ios_url', {
                    rules: [{ required: true }]
                })(_react2.default.createElement(Input, { placeholder: 'itunes\u4E2D\u7684\u4E0B\u8F7D\u94FE\u63A5' }))
            ), _react2.default.createElement(
                FormItem,
                _extends({}, _common.formItemLayout, { label: '\u5B89\u5353\u4E0B\u8F7D\u94FE\u63A5\uFF1A' }),
                getFieldDecorator('android_url', {
                    rules: [{ required: true }]
                })(_react2.default.createElement(Input, { placeholder: '\u4E0D\u8981\u586B\u5E94\u7528\u5B9D\u4E4B\u7C7B\u7684\u4E0B\u8F7D\u94FE\u63A5' }))
            ), _react2.default.createElement(
                FormItem,
                _extends({}, _common.formItemLayout, { label: '\u5305\u540D\uFF1A' }),
                getFieldDecorator('package', {
                    rules: [{ required: true }]
                })(_react2.default.createElement(
                    Select,
                    { style: { width: 200 }, placeholder: '\u8BF7\u9009\u62E9' },
                    initData.package && initData.package.map(function (val, key) {
                        return _react2.default.createElement(
                            Option,
                            { value: val.value, key: key },
                            val.option
                        );
                    })
                ))
            ), _react2.default.createElement(
                FormItem,
                _extends({}, _common.formItemLayout, { label: '\u6765\u6E90\u540D\uFF1A' }),
                getFieldDecorator('source', {
                    rules: [{ required: true }]
                })(_react2.default.createElement(
                    Select,
                    { style: { width: 200 }, placeholder: '\u8BF7\u9009\u62E9' },
                    initData.source && initData.source.map(function (val, key) {
                        return _react2.default.createElement(
                            Option,
                            { value: val.value, key: key },
                            val.option
                        );
                    })
                ))
            ), _react2.default.createElement(
                FormItem,
                _extends({}, _common.formItemLayout, { label: '\u9009\u62E9\u76AE\u80A4\uFF1A' }),
                getFieldDecorator('skin_id', {
                    rules: [{ required: true }]
                })(_react2.default.createElement(
                    Collapse,
                    { defaultActiveKey: ['1'] },
                    _react2.default.createElement(
                        Panel,
                        { header: '\u76AE\u80A4\u5217\u8868', key: '1' },
                        picDate && picDate.map(function (val, key) {
                            return _react2.default.createElement(
                                'div',
                                { className: 'pro_con', key: key },
                                _react2.default.createElement('img', { onDoubleClick: _this4.preViewPic.bind(_this4, val), onClick: _this4.choosePic.bind(_this4, val.id), className: skinId == val.id ? 'promotedPic' : 'promotePic', src: val.url }),
                                _react2.default.createElement(
                                    'div',
                                    { className: 'context_con' },
                                    _react2.default.createElement(
                                        'p',
                                        null,
                                        val.id
                                    ),
                                    _react2.default.createElement(
                                        Popconfirm,
                                        { title: '\u786E\u5B9A\u8981\u5220\u9664\u8BE5\u76AE\u80A4\uFF1F', onConfirm: _this4.delPic.bind(_this4, val.id), okText: 'Yes', cancelText: 'No' },
                                        _react2.default.createElement(Icon, { type: 'delete' })
                                    )
                                )
                            );
                        })
                    )
                ))
            ), _react2.default.createElement(
                FormItem,
                _extends({}, _common.formItemLayout, { label: '\u4E0A\u4F20\u65B0\u76AE\u80A4\uFF1A' }),
                _react2.default.createElement(_UploadImg2.default, { imgUploaded: this.imgUploaded.bind(this) })
            ), _react2.default.createElement(
                FormItem,
                { style: { textAlign: 'center' } },
                _react2.default.createElement(
                    Button,
                    { type: 'primary', onClick: this.handleSubmit.bind(this) },
                    '\u786E\u8BA4\u63D0\u4EA4'
                )
            )];
        }
    }, {
        key: 'imgUploaded',
        value: function imgUploaded(url) {
            var _this5 = this;

            var _props$location$query3 = this.props.location['query'],
                product_id = _props$location$query3.product_id,
                type_id = _props$location$query3.type_id;

            var name = url.replace('http://mifengkongdemo.oss-cn-shenzhen.aliyuncs.com/fr_public_666610/', '');
            switch (type_id) {
                case typeMarket:
                    apiCreateSkin = _apis.M_createSkin;
                    break;
                case typeChannel:
                    apiCreateSkin = _apis.C_createSkin;
                    break;
                case typeActive:
                    apiCreateSkin = _apis.A_createSkin;
                    break;
            }

            (0, _common.jrFetchGet)(apiCreateSkin, {
                product_id: product_id,
                skin_file: url,
                name: name
            }).then(function () {
                _this5.getSkinList(product_id);
                // this.setState({percent: 100});
            });
        }
    }, {
        key: 'delPic',
        value: function delPic(skinId) {
            var _this6 = this;

            var _props$location$query4 = this.props.location['query'],
                product_id = _props$location$query4.product_id,
                type_id = _props$location$query4.type_id;

            switch (type_id) {
                case typeMarket:
                    apiDeleteSkin = _apis.M_deleteSkin;
                    break;
                case typeChannel:
                    apiDeleteSkin = _apis.C_deleteSkin;
                    break;
                case typeActive:
                    apiDeleteSkin = _apis.A_deleteSkin;
                    break;
            }
            (0, _common.jrFetchGet)(apiDeleteSkin, {
                skin_id: skinId
            }).then(function (ret) {
                _this6.getSkinList(product_id);
            });
        }
    }, {
        key: 'handleCancel',
        value: function handleCancel() {
            this.setState({ previewVisible: false });
        }
    }, {
        key: 'render',
        value: function render() {
            var _props$location$query5 = this.props.location['query'],
                channelName = _props$location$query5.channelName,
                type = _props$location$query5.type;
            var _state2 = this.state,
                previewVisible = _state2.previewVisible,
                CurrentPic = _state2.CurrentPic;


            return _react2.default.createElement(
                'div',
                null,
                _react2.default.createElement(
                    'h2',
                    null,
                    type == _consts.STATE_ADD ? '新增' : '编辑',
                    '\u5B50\u6E20\u9053'
                ),
                _react2.default.createElement('br', null),
                type == _consts.STATE_ADD ? _react2.default.createElement(
                    'p',
                    { style: { color: '#FF6699' } },
                    '\u6B63\u5728\u4E3A\u6E20\u9053"',
                    channelName,
                    '"\u65B0\u589E\u5B50\u6E20\u9053:'
                ) : _react2.default.createElement(
                    'p',
                    { style: { color: '#FF6699' } },
                    '\u6B63\u5728\u5BF9\u5B50\u6E20\u9053"',
                    channelName,
                    '"\u8FDB\u884C\u7F16\u8F91:'
                ),
                _react2.default.createElement('br', null),
                this.getForm(),
                _react2.default.createElement(
                    Modal,
                    { visible: previewVisible, footer: null, onCancel: this.handleCancel.bind(this) },
                    _react2.default.createElement('img', { alt: 'example', style: { width: '100%' }, src: CurrentPic })
                )
            );
        }
    }]);

    return AddChannel;
}(_react.Component);

AddChannel = Form.create({})(AddChannel);

exports.default = AddChannel;

/***/ }),
/* 79 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _BtnsToolBar = __webpack_require__(4);

var _BtnsToolBar2 = _interopRequireDefault(_BtnsToolBar);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _Antd = Antd,
    Table = _Antd.Table,
    Popconfirm = _Antd.Popconfirm,
    Button = _Antd.Button,
    Modal = _Antd.Modal,
    Form = _Antd.Form,
    Input = _Antd.Input,
    Select = _Antd.Select,
    message = _Antd.message,
    Menu = _Antd.Menu,
    Switch = _Antd.Switch,
    Popover = _Antd.Popover,
    Icon = _Antd.Icon,
    Pagination = _Antd.Pagination,
    DatePicker = _Antd.DatePicker;
var RangePicker = DatePicker.RangePicker;

var Option = Select.Option;

var ChanStatistics = function (_React$Component) {
    _inherits(ChanStatistics, _React$Component);

    function ChanStatistics(props) {
        _classCallCheck(this, ChanStatistics);

        var _this = _possibleConstructorReturn(this, (ChanStatistics.__proto__ || Object.getPrototypeOf(ChanStatistics)).call(this, props));

        _this.state = {
            dataSource: []
        };
        return _this;
    }

    _createClass(ChanStatistics, [{
        key: "getItem",
        value: function getItem() {
            return React.createElement(
                _BtnsToolBar2.default,
                null,
                React.createElement(
                    Button,
                    null,
                    "\u5BFC\u51FA",
                    React.createElement(Icon, { type: "export" })
                ),
                React.createElement(
                    Select,
                    { style: { width: 100 }, placeholder: "\u4E3B\u6E20\u9053\u540D\u79F0" },
                    React.createElement(
                        Option,
                        { key: "1", value: "1" },
                        "\u4ECA\u65E5\u5934\u6761"
                    ),
                    React.createElement(
                        Option,
                        { key: "2", value: "2" },
                        "\u6253\u4E2A\u501F\u6761"
                    )
                ),
                "\xA0\xA0",
                React.createElement(
                    Select,
                    { style: { width: 100 }, placeholder: "\u5B50\u6E20\u9053\u540D\u79F0" },
                    React.createElement(
                        Option,
                        { key: "1", value: "1" },
                        "001"
                    ),
                    React.createElement(
                        Option,
                        { key: "2", value: "2" },
                        "002"
                    )
                ),
                "\xA0\xA0",
                React.createElement(
                    Select,
                    { style: { width: 100 }, placeholder: "\u64CD\u4F5C\u7CFB\u7EDF" },
                    React.createElement(
                        Option,
                        { key: "1", value: "1" },
                        "IOS"
                    ),
                    React.createElement(
                        Option,
                        { key: "2", value: "2" },
                        "Andriod"
                    )
                ),
                "\xA0\xA0",
                React.createElement(RangePicker, null),
                "\xA0\xA0\xA0",
                React.createElement(
                    Button,
                    { type: "primary" },
                    "\u641C\u7D22",
                    React.createElement(Icon, { type: "search" })
                )
            );
        }
    }, {
        key: "render",
        value: function render() {
            var dataSource = this.state.dataSource;


            var columns = [{ title: '渠道名称', dataIndex: 'name', key: 'name' }, { title: '渠道号', dataIndex: 'name', key: 'name' }, { title: '应用名称', dataIndex: 'name', key: 'name' }, { title: '落地页注册', dataIndex: 'name', key: 'name' }, { title: '落地页有效注册', dataIndex: 'name', key: 'name' }, { title: 'APP全新注册', dataIndex: 'name', key: 'name' }, { title: '成单', dataIndex: 'name', key: 'name' }, { title: '放款人数', dataIndex: 'name', key: 'name' }, { title: '放款金额', dataIndex: 'name', key: 'name' }, { title: '复贷率', dataIndex: 'name', key: 'name' }, { title: '取现', dataIndex: 'name', key: 'name' }, { title: '取现金额', dataIndex: 'name', key: 'name' }];

            return React.createElement(
                "div",
                null,
                React.createElement(
                    "h2",
                    null,
                    "\u6570\u636E\u7EDF\u8BA1"
                ),
                React.createElement(
                    Menu,
                    { selectedKeys: ['1'],
                        mode: "horizontal",
                        defaultSelectedKeys: "1"
                    },
                    React.createElement(
                        Menu.Item,
                        { key: "1" },
                        "app\u6570\u636E"
                    ),
                    React.createElement(
                        Menu.Item,
                        { key: "2" },
                        "\u501F\u5427h5\u6570\u636E"
                    ),
                    React.createElement(
                        Menu.Item,
                        { key: "3" },
                        "\u7B80\u878Dh5\u6570\u636E"
                    ),
                    React.createElement(
                        Menu.Item,
                        { key: "4" },
                        "\u5361\u732Bh5\u6570\u636E"
                    )
                ),
                React.createElement("br", null),
                this.getItem(),
                React.createElement(Table, { columns: columns }),
                React.createElement("br", null),
                React.createElement(Pagination, { defaultCurrent: 1, defaultPageSize: 10, total: 100, style: { float: 'right' } }),
                React.createElement("br", null)
            );
        }
    }]);

    return ChanStatistics;
}(React.Component);

exports.default = ChanStatistics;

/***/ }),
/* 80 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _BtnsToolBar = __webpack_require__(4);

var _BtnsToolBar2 = _interopRequireDefault(_BtnsToolBar);

var _apis = __webpack_require__(1);

var _common = __webpack_require__(0);

var _consts = __webpack_require__(3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

__webpack_require__(136);

var _Antd = Antd,
    Table = _Antd.Table,
    Button = _Antd.Button,
    Modal = _Antd.Modal,
    Form = _Antd.Form,
    Input = _Antd.Input,
    message = _Antd.message,
    Menu = _Antd.Menu,
    Switch = _Antd.Switch,
    Popover = _Antd.Popover,
    Icon = _Antd.Icon,
    Pagination = _Antd.Pagination;

var FormItem = Form.Item;

var switchStatus = 1;
var PAGESIZE = 10,
    DEFAULTPAGE = 1;
var subPageurl = '#/MainView/PopularizeManage/MarketPopularize/AddChannel';
var typeMarket = '1',
    typeChannel = '2',
    typeActive = '3';

var LASTEDPAGE = 1;
var apiList = void 0,
    apiSearchList = void 0,
    apiEnable = void 0,
    apiDisable = void 0,
    apiAddMain = void 0;

var ChannelManage = function (_React$Component) {
    _inherits(ChannelManage, _React$Component);

    function ChannelManage(props) {
        _classCallCheck(this, ChannelManage);

        var _this = _possibleConstructorReturn(this, (ChannelManage.__proto__ || Object.getPrototypeOf(ChannelManage)).call(this, props));

        _this.state = {
            current: '',
            showModel: false,
            showLink: false,
            modelType: [],
            dataSource: [],
            aeModalVisible: false,
            currentPage: LASTEDPAGE,
            total: '',
            JB: '',
            JR: '',
            KM: '',
            productId: ''
        };
        return _this;
    }

    _createClass(ChannelManage, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            var _this2 = this;

            var type_id = this.props.location['query'].type_id;

            switch (type_id) {
                case typeMarket:
                    apiList = _apis.M_promotionList;
                    break;
                case typeChannel:
                    apiList = _apis.C_promotionList;
                    break;
                case typeActive:
                    apiList = _apis.A_promotionList;
                    break;
            }
            (0, _common.jrFetchGet)(apiList, {
                type_id: type_id
            }).then(function (ret) {
                _this2.setState({
                    modelType: ret.data,
                    current: ret.data[0].id + '',
                    JR: ret.data[0].id,
                    JB: ret.data[1].id,
                    KM: ret.data[2].id,
                    productId: ret.data[0].id
                });

                _this2.getPromotionList(ret.data[0].id, LASTEDPAGE, '');
            });
        }
    }, {
        key: 'getPromotionList',
        value: function getPromotionList(product_id, page, search) {
            var _this3 = this;

            var type_id = this.props.location['query'].type_id;

            switch (type_id) {
                case typeMarket:
                    apiSearchList = _apis.M_getProSearchList;
                    break;
                case typeChannel:
                    apiSearchList = _apis.C_getProSearchList;
                    break;
                case typeActive:
                    apiSearchList = _apis.A_getProSearchList;
                    break;
            }

            (0, _common.jrFetchGet)(apiSearchList, {
                product_id: product_id,
                page: page,
                page_row: PAGESIZE,
                search: search
            }).then(function (ret) {
                _this3.setState({
                    dataSource: ret.data.list,
                    total: ret.data.total_count
                });
            });
        }
    }, {
        key: 'handleClick',
        value: function handleClick(e) {
            this.setState({ current: e.key });
            var product_id = void 0;
            switch (parseInt(e.key)) {
                case this.state.JR:
                    product_id = this.state.JR;
                    break;
                case this.state.JB:
                    product_id = this.state.JB;
                    break;
                case this.state.KM:
                    product_id = this.state.KM;
                    break;
            }

            this.setState({ currentPage: DEFAULTPAGE, productId: product_id });
            this.getPromotionList(product_id, DEFAULTPAGE, '');
        }
    }, {
        key: 'searchPage',
        value: function searchPage() {

            this.setState({ currentPage: DEFAULTPAGE });

            var searchVal = document.getElementById('searchVal').value;

            this.getPromotionList(this.state.productId, DEFAULTPAGE, searchVal);
        }
    }, {
        key: 'changeIt',
        value: function changeIt(val, checked) {
            var type_id = this.props.location['query'].type_id;

            switch (type_id) {
                case typeMarket:
                    apiEnable = _apis.M_enablePromotion;
                    apiDisable = _apis.M_disablePromotion;
                    break;
                case typeChannel:
                    apiEnable = _apis.C_enablePromotion;
                    apiDisable = _apis.C_disablePromotion;
                    break;
                case typeActive:
                    apiEnable = _apis.A_enablePromotion;
                    apiDisable = _apis.A_disablePromotion;
                    break;
            }

            switch (checked) {
                case true:
                    (0, _common.jrFetchGet)(apiEnable, {
                        channel_id: val.id,
                        parent_id: val.parent_id
                    }).then(function (ret) {
                        message.info(ret.message);
                    });
                    break;
                case false:
                    (0, _common.jrFetchGet)(apiDisable, {
                        channel_id: val.id,
                        parent_id: val.parent_id
                    }).then(function (ret) {
                        message.info(ret.message);
                    });
                    break;
            }
        }
    }, {
        key: 'getFormContent',
        value: function getFormContent() {
            var getFieldDecorator = this.props.form.getFieldDecorator;

            return [React.createElement(
                FormItem,
                _extends({}, _common.formItemLayout, { label: '\u4E3B\u6E20\u9053\u540D\u79F0' }),
                getFieldDecorator('name', {
                    rules: [{ required: true }]
                })(React.createElement(Input, { placeholder: '\u65B0\u5EFA\u6E20\u9053\u540D\u79F0' }))
            )];
        }
    }, {
        key: 'resetForm',
        value: function resetForm() {
            var _this4 = this;

            setTimeout(function () {
                _this4.props.form.resetFields();
            }, 200);
        }
    }, {
        key: 'handleOk',
        value: function handleOk() {
            var _this5 = this;

            var type_id = this.props.location['query'].type_id;
            var _state = this.state,
                productId = _state.productId,
                currentPage = _state.currentPage;

            switch (type_id) {
                case typeMarket:
                    apiAddMain = _apis.M_addMainPromotion;
                    break;
                case typeChannel:
                    apiAddMain = _apis.C_addMainPromotion;
                    break;
                case typeActive:
                    apiAddMain = _apis.A_addMainPromotion;
                    break;
            }

            var formVal = this.props.form.getFieldsValue();
            (0, _common.jrFetchGet)(apiAddMain, {
                name: formVal.name,
                product_id: productId
            }).then(function (ret) {
                _this5.getPromotionList(productId, currentPage, '');
                _this5.setState({ aeModalVisible: false });
            });
        }
    }, {
        key: 'addPomotion',
        value: function addPomotion() {
            this.setState({ aeModalVisible: true });
        }
    }, {
        key: 'jumpUrl',
        value: function jumpUrl(text) {
            var type_id = this.props.location['query'].type_id;

            window.location.href = subPageurl + '?channelName=' + text.name + '&type=' + _consts.STATE_ADD + '&product_id=' + this.state.productId + '&parentId=' + text.id + '&type_id=' + type_id;
        }
    }, {
        key: 'toEdit',
        value: function toEdit(text) {
            var type_id = this.props.location['query'].type_id;

            window.location.href = subPageurl + '?channelName=' + text.name + '&type=' + _consts.STATE_EDIT + '&product_id=' + this.state.productId + '&parentId=' + text.id + '&type_id=' + type_id;
        }
    }, {
        key: 'changePage',
        value: function changePage(page) {

            LASTEDPAGE = page;

            var searchVal = document.getElementById('searchVal').value;

            this.setState({ currentPage: page });

            this.getPromotionList(this.state.productId, page, searchVal);
        }
    }, {
        key: 'render',
        value: function render() {
            var _this6 = this;

            var columns = [{ title: '渠道名称', dataIndex: 'name', key: 'name' }, {
                title: '子渠道', key: 'sub_channel',
                render: function render(text, record) {
                    return React.createElement(
                        'span',
                        null,
                        React.createElement(
                            'a',
                            { onClick: _this6.jumpUrl.bind(_this6, text), className: 'addSubChannel' },
                            '\u65B0\u589E\u5B50\u6E20\u9053'
                        ),
                        text.data && text.data.map(function (val, key) {
                            return React.createElement(
                                'div',
                                { className: 'tableStyle' },
                                React.createElement(
                                    'span',
                                    { key: key },
                                    val.name
                                )
                            );
                        })
                    );
                }
            }, {
                title: '操作', key: 'action',
                render: function render(text, record) {
                    return React.createElement(
                        'span',
                        null,
                        React.createElement(
                            'p',
                            { style: { color: 'transparent' } },
                            '.'
                        ),
                        text.data && text.data.map(function (val) {
                            return React.createElement(
                                'div',
                                { className: 'tableStyle' },
                                React.createElement(
                                    Popover,
                                    { title: '\u94FE\u63A5\u8BE6\u60C5', content: val.promotion_url, trigger: 'click' },
                                    React.createElement(
                                        Button,
                                        { size: 'small', type: 'dashed' },
                                        '\u67E5\u770B\u94FE\u63A5'
                                    ),
                                    '\xA0\xA0\xA0'
                                ),
                                React.createElement(Switch, { checkedChildren: '\u5F00', unCheckedChildren: '\u5173', defaultChecked: val.status == switchStatus ? true : false, onChange: _this6.changeIt.bind(_this6, val) }),
                                '\xA0\xA0\xA0',
                                React.createElement(
                                    'a',
                                    { style: { color: '#108EE9' }, onClick: _this6.toEdit.bind(_this6, val) },
                                    '\u7F16\u8F91',
                                    React.createElement(Icon, { type: 'edit' })
                                )
                            );
                        })
                    );
                }

            }];

            var _state2 = this.state,
                modelType = _state2.modelType,
                dataSource = _state2.dataSource,
                aeModalVisible = _state2.aeModalVisible,
                total = _state2.total,
                currentPage = _state2.currentPage,
                current = _state2.current;

            return React.createElement(
                'div',
                null,
                React.createElement(
                    'h2',
                    null,
                    '\u6E20\u9053\u7BA1\u7406'
                ),
                React.createElement('br', null),
                React.createElement(
                    Menu,
                    { onClick: this.handleClick.bind(this),
                        selectedKeys: [current],
                        mode: 'horizontal',
                        defaultSelectedKeys: current
                    },
                    modelType.map(function (key) {
                        return React.createElement(
                            Menu.Item,
                            { key: key.id },
                            key.product_name
                        );
                    })
                ),
                React.createElement('br', null),
                React.createElement(
                    _BtnsToolBar2.default,
                    null,
                    React.createElement(
                        Button,
                        { onClick: this.addPomotion.bind(this) },
                        '\u65B0\u589E\u4E3B\u6E20\u9053'
                    ),
                    React.createElement(Input, { placeholder: '\u6309\u6E20\u9053\u540D\u79F0/\u6309\u5B50\u6E20\u9053', style: { width: 200 }, id: 'searchVal' }),
                    '\xA0',
                    React.createElement(
                        Button,
                        { type: 'primary', onClick: this.searchPage.bind(this) },
                        '\u641C\u7D22',
                        React.createElement(Icon, { type: 'search' })
                    )
                ),
                React.createElement(Table, { columns: columns, dataSource: dataSource, className: 'promoTable', pagination: false }),
                React.createElement('br', null),
                React.createElement(Pagination, { defaultCurrent: DEFAULTPAGE, current: currentPage, defaultPageSize: PAGESIZE, total: total, className: 'pagestyle', onChange: this.changePage.bind(this) }),
                React.createElement(
                    Modal,
                    { title: '\u65B0\u589E', visible: aeModalVisible,
                        onOk: this.handleOk.bind(this),

                        onCancel: function onCancel() {
                            _this6.resetForm();
                            _this6.setState({ aeModalVisible: false });
                        } },
                    aeModalVisible ? this.getFormContent() : []
                )
            );
        }
    }]);

    return ChannelManage;
}(React.Component);

ChannelManage = Form.create({})(ChannelManage);

exports.default = ChannelManage;

/***/ }),
/* 81 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _BtnsToolBar = __webpack_require__(4);

var _BtnsToolBar2 = _interopRequireDefault(_BtnsToolBar);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _Antd = Antd,
    Table = _Antd.Table,
    Popconfirm = _Antd.Popconfirm,
    Button = _Antd.Button,
    Modal = _Antd.Modal,
    Form = _Antd.Form,
    Input = _Antd.Input,
    Select = _Antd.Select,
    message = _Antd.message,
    Menu = _Antd.Menu,
    Switch = _Antd.Switch,
    Popover = _Antd.Popover,
    Icon = _Antd.Icon,
    Pagination = _Antd.Pagination,
    DatePicker = _Antd.DatePicker;
var RangePicker = DatePicker.RangePicker;

var Option = Select.Option;

var MarketStatistics = function (_React$Component) {
    _inherits(MarketStatistics, _React$Component);

    function MarketStatistics(props) {
        _classCallCheck(this, MarketStatistics);

        var _this = _possibleConstructorReturn(this, (MarketStatistics.__proto__ || Object.getPrototypeOf(MarketStatistics)).call(this, props));

        _this.state = {
            dataSource: []
        };
        return _this;
    }

    _createClass(MarketStatistics, [{
        key: "getItem",
        value: function getItem() {
            return React.createElement(
                _BtnsToolBar2.default,
                null,
                React.createElement(
                    Button,
                    null,
                    "\u5BFC\u51FA",
                    React.createElement(Icon, { type: "export" })
                ),
                React.createElement(
                    Select,
                    { style: { width: 100 }, placeholder: "\u4E3B\u6E20\u9053\u540D\u79F0" },
                    React.createElement(
                        Option,
                        { key: "1", value: "1" },
                        "\u4ECA\u65E5\u5934\u6761"
                    ),
                    React.createElement(
                        Option,
                        { key: "2", value: "2" },
                        "\u6253\u4E2A\u501F\u6761"
                    )
                ),
                "\xA0\xA0",
                React.createElement(
                    Select,
                    { style: { width: 100 }, placeholder: "\u5B50\u6E20\u9053\u540D\u79F0" },
                    React.createElement(
                        Option,
                        { key: "1", value: "1" },
                        "001"
                    ),
                    React.createElement(
                        Option,
                        { key: "2", value: "2" },
                        "002"
                    )
                ),
                "\xA0\xA0",
                React.createElement(
                    Select,
                    { style: { width: 100 }, placeholder: "\u64CD\u4F5C\u7CFB\u7EDF" },
                    React.createElement(
                        Option,
                        { key: "1", value: "1" },
                        "IOS"
                    ),
                    React.createElement(
                        Option,
                        { key: "2", value: "2" },
                        "Andriod"
                    )
                ),
                "\xA0\xA0",
                React.createElement(RangePicker, null),
                "\xA0\xA0\xA0",
                React.createElement(
                    Button,
                    { type: "primary" },
                    "\u641C\u7D22",
                    React.createElement(Icon, { type: "search" })
                )
            );
        }
    }, {
        key: "render",
        value: function render() {
            var dataSource = this.state.dataSource;


            var columns = [{ title: '渠道名称', dataIndex: 'name', key: 'name' }, { title: '渠道号', dataIndex: 'name', key: 'name' }, { title: '应用名称', dataIndex: 'name', key: 'name' }, { title: '落地页注册', dataIndex: 'name', key: 'name' }, { title: '落地页有效注册', dataIndex: 'name', key: 'name' }, { title: 'APP全新注册', dataIndex: 'name', key: 'name' }, { title: '成单', dataIndex: 'name', key: 'name' }, { title: '放款人数', dataIndex: 'name', key: 'name' }, { title: '放款金额', dataIndex: 'name', key: 'name' }, { title: '复贷率', dataIndex: 'name', key: 'name' }, { title: '取现', dataIndex: 'name', key: 'name' }, { title: '取现金额', dataIndex: 'name', key: 'name' }];

            return React.createElement(
                "div",
                null,
                React.createElement(
                    "h2",
                    null,
                    "\u6570\u636E\u7EDF\u8BA1"
                ),
                React.createElement(
                    Menu,
                    { selectedKeys: ['1'],
                        mode: "horizontal",
                        defaultSelectedKeys: "1"
                    },
                    React.createElement(
                        Menu.Item,
                        { key: "1" },
                        "app\u6570\u636E"
                    ),
                    React.createElement(
                        Menu.Item,
                        { key: "2" },
                        "\u501F\u5427h5\u6570\u636E"
                    ),
                    React.createElement(
                        Menu.Item,
                        { key: "3" },
                        "\u7B80\u878Dh5\u6570\u636E"
                    ),
                    React.createElement(
                        Menu.Item,
                        { key: "4" },
                        "\u5361\u732Bh5\u6570\u636E"
                    )
                ),
                React.createElement("br", null),
                this.getItem(),
                React.createElement(Table, { columns: columns }),
                React.createElement("br", null),
                React.createElement(Pagination, { defaultCurrent: 1, defaultPageSize: 10, total: 100, style: { float: 'right' } }),
                React.createElement("br", null)
            );
        }
    }]);

    return MarketStatistics;
}(React.Component);

exports.default = MarketStatistics;

/***/ }),
/* 82 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _common = __webpack_require__(0);

var _apis = __webpack_require__(1);

var _consts = __webpack_require__(3);

var _BtnsToolBar = __webpack_require__(4);

var _BtnsToolBar2 = _interopRequireDefault(_BtnsToolBar);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _Antd = Antd,
    Table = _Antd.Table,
    Popconfirm = _Antd.Popconfirm,
    Button = _Antd.Button,
    Modal = _Antd.Modal,
    Form = _Antd.Form,
    Input = _Antd.Input,
    Select = _Antd.Select,
    message = _Antd.message;


var FormItem = Form.Item;
var Option = Select.Option;

var AccountManage = function (_React$Component) {
    _inherits(AccountManage, _React$Component);

    function AccountManage(props) {
        _classCallCheck(this, AccountManage);

        var _this = _possibleConstructorReturn(this, (AccountManage.__proto__ || Object.getPrototypeOf(AccountManage)).call(this, props));

        _this.state = {
            tableData: false,
            aeModalVisible: false,
            gList: [],
            aeState: _consts.STATE_ADD,
            confirmLoading: false
        };
        return _this;
    }

    _createClass(AccountManage, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            this.updateSource();
            this.getGroupList();
        }
    }, {
        key: 'getGroupList',
        value: function getGroupList() {
            var _this2 = this;

            (0, _common.jrFetchGet)(_apis.groupList, {}).then(function (ret) {
                _this2.setState({
                    gList: ret.data
                });
            });
        }
    }, {
        key: 'updateSource',
        value: function updateSource() {
            var _this3 = this;

            (0, _common.jrFetchGet)(_apis.userList, {}).then(function (ret) {
                _this3.setState({
                    tableData: ret.data
                });
            });
        }
    }, {
        key: 'toDel',
        value: function toDel(record) {
            var _this4 = this;

            (0, _common.jrFetchPost)(_apis.deleteUser, {
                user_id: record.id
            }).then(function (ret) {
                _this4.updateSource();
                message.info(_consts.MSG_DELED);
            });
        }
    }, {
        key: 'handleOk',
        value: function handleOk() {
            var _this5 = this;

            this.setState({
                confirmLoading: true
            });
            var formVal = this.props.form.getFieldsValue();

            switch (this.state.aeState) {
                case _consts.STATE_ADD:
                    (0, _common.jrFetchPost)(_apis.addUser, {
                        user_name: formVal.user_name,
                        password: formVal.password,
                        group_id: formVal.group_id
                    }).then(function (ret) {
                        _this5.postSuccess();
                    }).catch(function () {
                        _this5.postFalse();
                    });
                    break;
                case _consts.STATE_EDIT:
                    (0, _common.jrFetchPost)(_apis.editUser, {
                        user_id: formVal.id,
                        old_password: formVal.old_password,
                        new_password: formVal.new_password,
                        group_id: formVal.group_id
                    }).then(function (ret) {
                        _this5.postSuccess();
                    }).catch(function () {
                        _this5.postFalse();
                    });
            }
        }
    }, {
        key: 'postSuccess',
        value: function postSuccess() {
            message.info(_consts.MSG_SUCCESS);
            this.updateSource();
            this.resetForm();
            this.setState({
                confirmLoading: false,
                aeModalVisible: false
            });
        }
    }, {
        key: 'postFalse',
        value: function postFalse() {
            this.setState({
                confirmLoading: false
            });
        }
    }, {
        key: 'resetForm',
        value: function resetForm() {
            var _this6 = this;

            setTimeout(function () {
                _this6.props.form.resetFields();
            }, 200);
        }
    }, {
        key: 'toEdit',
        value: function toEdit(record) {
            var _this7 = this;

            this.setState({ aeModalVisible: true, aeState: _consts.STATE_EDIT });
            /*设置数据*/
            setTimeout(function () {
                _this7.props.form.setFieldsValue(record);
            }, 200);
        }
    }, {
        key: 'getFormContent',
        value: function getFormContent() {
            var _state = this.state,
                tableData = _state.tableData,
                aeModalVisible = _state.aeModalVisible,
                aeState = _state.aeState,
                gList = _state.gList;
            var getFieldDecorator = this.props.form.getFieldDecorator;


            switch (aeState) {
                case _consts.STATE_EDIT:
                    return [React.createElement(
                        FormItem,
                        _extends({}, _common.formItemLayout, { label: '\u7528\u6237ID' }),
                        getFieldDecorator('id')(React.createElement(Input, { disabled: true }))
                    ), React.createElement(
                        FormItem,
                        _extends({}, _common.formItemLayout, { label: '\u7528\u6237\u540D' }),
                        getFieldDecorator('user_name', {
                            rules: [{ required: true }]
                        })(React.createElement(Input, { placeholder: '\u8BF7\u8F93\u5165\u7528\u6237\u540D' }))
                    ), React.createElement(
                        FormItem,
                        _extends({}, _common.formItemLayout, { label: '\u65E7\u5BC6\u7801' }),
                        getFieldDecorator('old_password', {
                            rules: [{ required: true }]
                        })(React.createElement(Input, { type: 'password', placeholder: '\u8BF7\u8F93\u5165\u5BC6\u7801' }))
                    ), React.createElement(
                        FormItem,
                        _extends({}, _common.formItemLayout, { label: '\u65B0\u5BC6\u7801' }),
                        getFieldDecorator('new_password', {
                            rules: [{ required: true }]
                        })(React.createElement(Input, { type: 'password', placeholder: '\u8BF7\u8F93\u5165\u65B0\u5BC6\u7801' }))
                    ), React.createElement(
                        FormItem,
                        _extends({}, _common.formItemLayout, { label: '\u65B0\u5BC6\u7801\u786E\u8BA4' }),
                        getFieldDecorator('new_password2', {
                            rules: [{ required: true }]
                        })(React.createElement(Input, { type: 'password', placeholder: '\u8BF7\u786E\u8BA4\u65B0\u5BC6\u7801' }))
                    ), React.createElement(
                        FormItem,
                        _extends({}, _common.formItemLayout, { label: '\u5DE5\u4F5C\u7EC4' }),
                        getFieldDecorator('group_id', {
                            rules: [{ required: true }]
                        })(React.createElement(
                            Select,
                            { style: { width: 120 }, placeholder: '\u8BF7\u9009\u62E9' },
                            gList.map(function (item) {
                                return React.createElement(
                                    Option,
                                    { value: item.id, key: item.id },
                                    item.group_name
                                );
                            })
                        ))
                    )];
                case _consts.STATE_ADD:
                    return [React.createElement(
                        FormItem,
                        _extends({}, _common.formItemLayout, { label: '\u7528\u6237\u540D' }),
                        getFieldDecorator('user_name', {
                            rules: [{ required: true }]
                        })(React.createElement(Input, { placeholder: '\u8BF7\u8F93\u5165\u7528\u6237\u540D' }))
                    ), React.createElement(
                        FormItem,
                        _extends({}, _common.formItemLayout, { label: '\u5BC6\u7801' }),
                        getFieldDecorator('password', {
                            rules: [{ required: true }]
                        })(React.createElement(Input, { type: 'password', placeholder: '\u8BF7\u8F93\u5165\u5BC6\u7801' }))
                    ), React.createElement(
                        FormItem,
                        _extends({}, _common.formItemLayout, { label: '\u786E\u8BA4\u5BC6\u7801' }),
                        getFieldDecorator('password2', {
                            rules: [{ required: true }]
                        })(React.createElement(Input, { type: 'password', placeholder: '\u8BF7\u786E\u8BA4\u5BC6\u7801' }))
                    ), React.createElement(
                        FormItem,
                        _extends({}, _common.formItemLayout, { label: '\u5DE5\u4F5C\u7EC4' }),
                        getFieldDecorator('group_id', {
                            rules: [{ required: true }]
                        })(React.createElement(
                            Select,
                            { style: { width: 120 }, placeholder: '\u8BF7\u9009\u62E9' },
                            gList.map(function (item) {
                                return React.createElement(
                                    Option,
                                    { value: item.id, key: item.id },
                                    item.group_name
                                );
                            })
                        ))
                    )];
            }
        }
    }, {
        key: 'render',
        value: function render() {
            var _this8 = this;

            var columns = [{ title: '用户名', dataIndex: 'user_name', key: 'user_name' }, { title: '用户组', dataIndex: 'group_name', key: 'group_id' }, {
                title: '操作', dataIndex: '', key: 'x', render: function render(item, record) {
                    return React.createElement(
                        'div',
                        null,
                        React.createElement(
                            'a',
                            { onClick: _this8.toEdit.bind(_this8, record) },
                            '\u7F16\u8F91'
                        ),
                        React.createElement(
                            Popconfirm,
                            { title: '\u786E\u5B9A\u8981\u5220\u9664\uFF1F', onConfirm: _this8.toDel.bind(_this8, record), okText: 'Yes', cancelText: 'No' },
                            React.createElement(
                                'a',
                                null,
                                ' \u5220\u9664 '
                            )
                        )
                    );
                }
            }];

            var _state2 = this.state,
                tableData = _state2.tableData,
                aeModalVisible = _state2.aeModalVisible,
                aeState = _state2.aeState,
                gList = _state2.gList,
                confirmLoading = _state2.confirmLoading;


            return React.createElement(
                'div',
                { className: 'account-manage' },
                React.createElement(
                    'h2',
                    null,
                    '\u8D26\u53F7\u7BA1\u7406'
                ),
                React.createElement(
                    _BtnsToolBar2.default,
                    null,
                    React.createElement(
                        Button,
                        { style: { marginRight: '20px' }, onClick: function onClick() {
                                _this8.setState({ aeModalVisible: true, aeState: _consts.STATE_ADD });
                            } },
                        '\u65B0\u589E'
                    )
                ),
                React.createElement(Table, { columns: columns, dataSource: tableData }),
                React.createElement(
                    Modal,
                    { confirmLoading: confirmLoading, title: aeState === _consts.STATE_ADD ? '新增' : '编辑', visible: aeModalVisible,
                        onOk: this.handleOk.bind(this),

                        onCancel: function onCancel() {
                            _this8.resetForm();
                            _this8.setState({ aeModalVisible: false,
                                confirmLoading: false
                            });
                        } },
                    aeModalVisible ? this.getFormContent() : []
                )
            );
        }
    }]);

    return AccountManage;
}(React.Component);

AccountManage = Form.create({})(AccountManage);

exports.default = AccountManage;

/***/ }),
/* 83 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _common = __webpack_require__(0);

var _apis = __webpack_require__(1);

var _consts = __webpack_require__(3);

var _BtnsToolBar = __webpack_require__(4);

var _BtnsToolBar2 = _interopRequireDefault(_BtnsToolBar);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _Antd = Antd,
    Table = _Antd.Table,
    Popconfirm = _Antd.Popconfirm,
    Button = _Antd.Button,
    Modal = _Antd.Modal,
    Form = _Antd.Form,
    Input = _Antd.Input,
    Select = _Antd.Select,
    message = _Antd.message;
var _ReactRouter = ReactRouter,
    Link = _ReactRouter.Link;


var FormItem = Form.Item;

var GroupManage = function (_React$Component) {
    _inherits(GroupManage, _React$Component);

    function GroupManage(props) {
        _classCallCheck(this, GroupManage);

        var _this = _possibleConstructorReturn(this, (GroupManage.__proto__ || Object.getPrototypeOf(GroupManage)).call(this, props));

        _this.state = {
            tableData: false,
            aeModalVisible: false,
            aeState: _consts.STATE_ADD,
            confirmLoading: false
        };
        return _this;
    }

    _createClass(GroupManage, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            this.updateSource();
        }
    }, {
        key: 'updateSource',
        value: function updateSource() {
            var _this2 = this;

            (0, _common.jrFetchGet)(_apis.groupList, {}).then(function (ret) {
                _this2.setState({
                    tableData: ret.data
                });
            });
        }
    }, {
        key: 'toDel',
        value: function toDel(record) {
            var _this3 = this;

            (0, _common.jrFetchPost)(_apis.deleteGroup, {
                group_id: record.id
            }).then(function (ret) {
                _this3.updateSource();
                message.info(_consts.MSG_DELED);
            });
        }
    }, {
        key: 'handleOk',
        value: function handleOk() {
            var _this4 = this;

            this.setState({
                confirmLoading: true
            });

            var formVal = this.props.form.getFieldsValue();

            switch (this.state.aeState) {
                case _consts.STATE_ADD:
                    (0, _common.jrFetchPost)(_apis.addGroup, {
                        group_name: formVal.group_name
                    }).then(function (ret) {
                        _this4.postSuccess();
                    }).catch(this.postFalse);

                    break;
                case _consts.STATE_EDIT:
                    (0, _common.jrFetchPost)(_apis.editGroup, {
                        group_id: formVal.group_id,
                        group_name: formVal.group_name
                    }).then(function (ret) {
                        _this4.postSuccess();
                    }).catch(this.postFalse);
            }
        }
    }, {
        key: 'postSuccess',
        value: function postSuccess() {
            message.info(_consts.MSG_SUCCESS);
            this.updateSource();
            this.resetForm();
            this.setState({
                confirmLoading: false,
                aeModalVisible: false
            });
        }
    }, {
        key: 'postFalse',
        value: function postFalse() {
            this.setState({
                confirmLoading: false
            });
        }
    }, {
        key: 'resetForm',
        value: function resetForm() {
            var _this5 = this;

            setTimeout(function () {
                _this5.props.form.resetFields();
            }, 200);
        }
    }, {
        key: 'toEdit',
        value: function toEdit(record) {
            var _this6 = this;

            this.setState({ aeModalVisible: true, aeState: _consts.STATE_EDIT });
            /*设置数据*/
            setTimeout(function () {
                _this6.props.form.setFieldsValue(record);
            }, 200);
        }
    }, {
        key: 'getFormContent',
        value: function getFormContent() {
            var _state = this.state,
                tableData = _state.tableData,
                aeModalVisible = _state.aeModalVisible,
                aeState = _state.aeState,
                gList = _state.gList;
            var getFieldDecorator = this.props.form.getFieldDecorator;


            switch (aeState) {
                case _consts.STATE_EDIT:
                    return [React.createElement(
                        FormItem,
                        _extends({}, _common.formItemLayout, { label: '\u5DE5\u4F5C\u7EC4id' }),
                        getFieldDecorator('id')(React.createElement(Input, { disabled: true }))
                    ), React.createElement(
                        FormItem,
                        _extends({}, _common.formItemLayout, { label: '\u5DE5\u4F5C\u7EC4\u540D' }),
                        getFieldDecorator('group_name', {
                            rules: [{ required: true }]
                        })(React.createElement(Input, { placeholder: '\u8BF7\u8F93\u5165\u5DE5\u4F5C\u7EC4\u540D' }))
                    )];
                case _consts.STATE_ADD:
                    return [React.createElement(
                        FormItem,
                        _extends({}, _common.formItemLayout, { label: '\u5DE5\u4F5C\u7EC4\u540D' }),
                        getFieldDecorator('group_name', {
                            rules: [{ required: true }]
                        })(React.createElement(Input, { placeholder: '\u8BF7\u8F93\u5165\u5DE5\u4F5C\u7EC4\u540D' }))
                    )];
            }
        }
    }, {
        key: 'render',
        value: function render() {
            var _this7 = this;

            var columns = [{ title: '工作组名', dataIndex: 'group_name', key: 'group_name' }, {
                title: '操作', dataIndex: '', key: 'x', render: function render(text, record) {
                    return React.createElement(
                        'div',
                        null,
                        React.createElement(
                            'a',
                            null,
                            React.createElement(
                                Link,
                                { to: (0, _common.getRouteString)(_this7.props.routes, 3) + 'MenuManage/' + record['id'] },
                                '\u6743\u9650\u7F16\u8F91'
                            )
                        ),
                        '\xA0\xA0',
                        React.createElement(
                            'a',
                            { onClick: _this7.toEdit.bind(_this7, record) },
                            '\u7F16\u8F91'
                        ),
                        '\xA0\xA0',
                        React.createElement(
                            Popconfirm,
                            { title: '\u786E\u5B9A\u8981\u5220\u9664\uFF1F', onConfirm: _this7.toDel.bind(_this7, record), okText: 'Yes', cancelText: 'No' },
                            React.createElement(
                                'a',
                                null,
                                ' \u5220\u9664 '
                            )
                        )
                    );
                }
            }];

            var _state2 = this.state,
                tableData = _state2.tableData,
                aeModalVisible = _state2.aeModalVisible,
                aeState = _state2.aeState,
                gList = _state2.gList,
                confirmLoading = _state2.confirmLoading;


            return React.createElement(
                'div',
                { className: 'account-manage' },
                React.createElement(
                    'h2',
                    null,
                    '\u5DE5\u4F5C\u7EC4\u7BA1\u7406'
                ),
                React.createElement(
                    _BtnsToolBar2.default,
                    null,
                    React.createElement(
                        Button,
                        { style: { marginRight: '20px' }, onClick: function onClick() {
                                _this7.setState({ aeModalVisible: true, aeState: _consts.STATE_ADD });
                            } },
                        '\u65B0\u589E\u5DE5\u4F5C\u7EC4'
                    )
                ),
                React.createElement(Table, { columns: columns, dataSource: tableData }),
                React.createElement(
                    Modal,
                    { confirmLoading: confirmLoading, title: aeState === _consts.STATE_ADD ? '新增' : '编辑', visible: aeModalVisible,
                        onOk: this.handleOk.bind(this),
                        onCancel: function onCancel() {
                            _this7.resetForm();
                            _this7.setState({ aeModalVisible: false,
                                confirmLoading: false
                            });
                        } },
                    this.getFormContent()
                )
            );
        }
    }]);

    return GroupManage;
}(React.Component);

GroupManage = Form.create({})(GroupManage);

exports.default = GroupManage;

/***/ }),
/* 84 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _common = __webpack_require__(0);

var _apis = __webpack_require__(1);

var _consts = __webpack_require__(3);

var _BtnsToolBar = __webpack_require__(4);

var _BtnsToolBar2 = _interopRequireDefault(_BtnsToolBar);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _Antd = Antd,
    Table = _Antd.Table,
    Popconfirm = _Antd.Popconfirm,
    Button = _Antd.Button,
    Modal = _Antd.Modal,
    Form = _Antd.Form,
    Input = _Antd.Input,
    Select = _Antd.Select,
    message = _Antd.message,
    Tree = _Antd.Tree;


var TreeNode = Tree.TreeNode;
var STATE_CHECKED = 1;
var checkedData = _consts.DATA_INNIT;

var MenuManage = function (_React$Component) {
    _inherits(MenuManage, _React$Component);

    function MenuManage(props) {
        _classCallCheck(this, MenuManage);

        var _this = _possibleConstructorReturn(this, (MenuManage.__proto__ || Object.getPrototypeOf(MenuManage)).call(this, props));

        _this.state = {
            pMenuList: [],
            saving: false
        };
        return _this;
    }

    _createClass(MenuManage, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            this.getList();
        }
    }, {
        key: 'onCheck',
        value: function onCheck(checkedKeys, info) {
            checkedData = info.checkedNodes;
        }
    }, {
        key: 'allChildrenChecked',
        value: function allChildrenChecked(children) {
            /*判断是否子节点全部为选中状态*/
            if (!children) {
                return true;
            }
            var stChildren = JSON.stringify(children);
            return stChildren.indexOf(',"state":0,') < 0;
        }
    }, {
        key: 'loopSeleKeys',
        value: function loopSeleKeys() {
            var _this2 = this;

            var arr = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
            var keys = arguments[1];

            /*获取初始化 选择的key*/
            arr.forEach(function (item) {
                if (item.state === STATE_CHECKED && _this2.allChildrenChecked(item.children)) {
                    keys.push(item['id'] + '');
                }
                item.children && (keys = _this2.loopSeleKeys(item.children, keys));
            });
            return keys;
        }
    }, {
        key: 'getList',
        value: function getList() {
            var _this3 = this;

            (0, _common.jrFetchGet)(_apis.pageMenuList, {
                group_id: this.props.params['group_id']
            }).then(function (ret) {
                _this3.setState({
                    pMenuList: ret.data
                });
            });
        }
    }, {
        key: 'toSave',
        value: function toSave() {
            var _this4 = this;

            if (checkedData === _consts.DATA_INNIT) {
                message.info('没有做任何操作');
                return false;
            }
            this.setState({
                saving: true
            });

            var checkedArr = [];
            checkedData.forEach(function (item) {
                checkedArr.push(item.key);
            });
            (0, _common.jrFetchPost)(_apis.savePageMenuList, {
                group_id: this.props.params['group_id'],
                privilege: JSON.stringify(checkedArr)
            }).then(function (ret) {
                message.success(_consts.MSG_SUCCESS);
                _this4.setState({
                    saving: false
                });
            }).catch(function (ret) {
                _this4.setState({
                    saving: false
                });
            });
        }
    }, {
        key: 'createTree',
        value: function createTree(dataList) {
            var _this5 = this;

            return dataList.map(function (item) {
                return React.createElement(
                    TreeNode,
                    { title: item.menu_name, key: item.id },
                    item.children && _this5.createTree(item.children)
                );
            });
        }
    }, {
        key: 'render',
        value: function render() {
            var _state = this.state,
                pMenuList = _state.pMenuList,
                saving = _state.saving;

            var keys = this.loopSeleKeys(pMenuList, []);
            return React.createElement(
                'div',
                null,
                React.createElement(
                    'h2',
                    null,
                    '\u83DC\u5355\u7BA1\u7406'
                ),
                React.createElement(
                    _BtnsToolBar2.default,
                    null,
                    React.createElement(
                        Button,
                        { style: { marginRight: '20px' }, loading: saving, onClick: this.toSave.bind(this) },
                        '\u4FDD\u5B58'
                    )
                ),
                pMenuList.length > 0 && React.createElement(
                    Tree,
                    { defaultCheckedKeys: keys, defaultExpandedKeys: keys, checkable: true, onCheck: this.onCheck },
                    this.createTree(this.state.pMenuList)
                )
            );
        }
    }]);

    return MenuManage;
}(React.Component);

exports.default = MenuManage;

/***/ }),
/* 85 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _common = __webpack_require__(0);

var _apis = __webpack_require__(1);

var _consts = __webpack_require__(3);

var _BtnsToolBar = __webpack_require__(4);

var _BtnsToolBar2 = _interopRequireDefault(_BtnsToolBar);

__webpack_require__(137);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _Antd = Antd,
    Table = _Antd.Table,
    Popconfirm = _Antd.Popconfirm,
    Button = _Antd.Button,
    Modal = _Antd.Modal,
    Form = _Antd.Form,
    Input = _Antd.Input,
    Select = _Antd.Select,
    message = _Antd.message,
    Tree = _Antd.Tree,
    Icon = _Antd.Icon,
    Popover = _Antd.Popover;


var Option = Select.Option;

var level_three = 3;
var McType1 = 0,
    McType2 = 1;

var TreeNode = Tree.TreeNode;
var STATE_CHECKED = 1;
var ROOT = '0';

var checkedData = _consts.DATA_INNIT;
var FormItem = Form.Item;

var PageConfig = function (_React$Component) {
    _inherits(PageConfig, _React$Component);

    function PageConfig(props) {
        _classCallCheck(this, PageConfig);

        var _this = _possibleConstructorReturn(this, (PageConfig.__proto__ || Object.getPrototypeOf(PageConfig)).call(this, props));

        _this.state = {
            menuList: [],
            aeState: _consts.STATE_ADD,
            aeModalVisible: false,
            content: [],
            saving: false
        };
        return _this;
    }

    _createClass(PageConfig, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            this.getList();
        }
    }, {
        key: 'onCheck',
        value: function onCheck(checkedKeys, info) {
            checkedData = info.checkedNodes;
        }
    }, {
        key: 'loopSeleKeys',
        value: function loopSeleKeys() {
            var _this2 = this;

            var arr = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
            var keys = arguments[1];

            /*获取初始化 选择的key*/
            arr.forEach(function (item) {
                if (item.state === STATE_CHECKED) {
                    keys.push(item['id']);
                    item.children && (keys = _this2.loopSeleKeys(item.children, keys));
                }
            });
            return keys;
        }
    }, {
        key: 'getList',
        value: function getList() {
            var _this3 = this;

            (0, _common.jrFetchGet)(_apis.allMenus).then(function (ret) {
                _this3.setState({
                    menuList: ret.data
                });
            });
        }
    }, {
        key: 'resetForm',
        value: function resetForm() {
            var _this4 = this;

            setTimeout(function () {
                _this4.props.form.resetFields();
            }, 200);
        }
    }, {
        key: 'addNode',
        value: function addNode(val) {
            var _this5 = this;

            var mc = void 0;
            val.level === level_three ? mc = McType2 : mc = McType1;
            (0, _common.jrFetchGet)(_apis.getModule, { mc: mc }).then(function (ret) {
                _this5.setState({
                    content: ret.data
                });
            });

            this.setState({
                aeModalVisible: true,
                aeState: val.aeState
            });

            var menuData = val.menuData;

            var midVal = {
                parent_id: val.parentId,
                level: val.level
            };

            Object.assign(midVal, menuData);

            setTimeout(function () {
                _this5.props.form.setFieldsValue(midVal);
            }, 200);
        }
    }, {
        key: 'delNode',
        value: function delNode(menuId) {
            var _this6 = this;

            (0, _common.jrFetchGet)(_apis.delMenu, {
                menu_id: menuId
            }).then(function (ret) {
                _this6.getList();
            });
        }
    }, {
        key: 'createTree',
        value: function createTree(dataList, parentId, level) {
            var _this7 = this;

            var mid = dataList ? dataList.map(function (item) {
                if (item.menu_name) {
                    return React.createElement(
                        TreeNode,
                        { title: React.createElement(
                                'p',
                                { className: 'op' },
                                item.menu_name,
                                '\xA0\xA0',
                                React.createElement(
                                    Popconfirm,
                                    { title: '\u786E\u5B9A\u8981\u5220\u9664\uFF1F', onConfirm: _this7.delNode.bind(_this7, item.id), okText: 'Yes', cancelText: 'No' },
                                    React.createElement(Icon, { type: 'delete' })
                                ),
                                '\xA0\xA0',
                                React.createElement(
                                    'span',
                                    { onClick: _this7.addNode.bind(_this7, {
                                            parentId: parentId,
                                            menuData: item,
                                            level: level,
                                            aeState: _consts.STATE_EDIT
                                        }) },
                                    React.createElement(Icon, { type: 'edit' }),
                                    ' \u7F16\u8F91'
                                )
                            ), key: item.id },
                        _this7.createTree(item.children, item.id, level + 1)
                    );
                }
            }) : [];

            level < 4 && mid.push(React.createElement(TreeNode, { title: React.createElement(
                    'p',
                    { onClick: this.addNode.bind(this, {
                            parentId: parentId,
                            level: level,
                            aeState: _consts.STATE_ADD
                        }) },
                    React.createElement(Icon, { type: 'plus' })
                ) }));

            return mid;
        }
    }, {
        key: 'getFormContent',
        value: function getFormContent() {
            var getFieldDecorator = this.props.form.getFieldDecorator;

            return [React.createElement(
                FormItem,
                _extends({}, _common.formItemLayout, { label: '\u9875\u9762\u540D\u79F0' }),
                getFieldDecorator('menu_name', {
                    rules: [{ required: true }]
                })(React.createElement(Input, { placeholder: '\u8BF7\u8F93\u5165\u9875\u9762\u540D\u79F0' }))
            ), React.createElement(
                FormItem,
                _extends({}, _common.formItemLayout, { label: '\u9875\u9762\u7C7B\u578B' }),
                getFieldDecorator('type')(React.createElement(
                    Select,
                    { defaultValue: _consts.TYPE_A, style: { width: 120 } },
                    React.createElement(
                        Option,
                        { value: _consts.TYPE_A },
                        '\u5185\u90E8\u524D\u7AEF\u9875\u9762'
                    ),
                    React.createElement(
                        Option,
                        { value: _consts.TYPE_B },
                        '\u5916\u90E8\uD83D\uDD17\u9875\u9762'
                    )
                ))
            ), React.createElement(
                FormItem,
                _extends({}, _common.formItemLayout, { label: '\u6743\u9650\u63A7\u5236/\u5916\u90E8\u94FE\u63A5' }),
                getFieldDecorator('menu_link')(React.createElement(Input, { placeholder: '\u8BF7\u8F93\u5165\u9875\u9762\u63A7\u5236\u94FE\u63A5' }))
            ), React.createElement(
                FormItem,
                _extends({}, _common.formItemLayout, { label: '\u53EF\u9009\u7684\u6743\u9650\u63A7\u5236\u94FE\u63A5' }),
                React.createElement(
                    Popover,
                    { content: React.createElement(
                            'div',
                            null,
                            this.state.content.map(function (val) {
                                return React.createElement(
                                    'p',
                                    null,
                                    val
                                );
                            })
                        ), title: '\u6743\u9650\u63A7\u5236\u94FE\u63A5', placement: 'bottomLeft' },
                    React.createElement(
                        Button,
                        { type: 'dashed' },
                        'Hover me'
                    )
                )
            ), React.createElement(
                FormItem,
                _extends({}, _common.formItemLayout, { label: '\u524D\u7AEF\u7EC4\u4EF6ID' }),
                getFieldDecorator('page_id')(React.createElement(Input, { placeholder: '\u5185\u90E8\u9875\u9762\u5FC5\u586B' }))
            ), React.createElement(
                FormItem,
                _extends({}, _common.formItemLayout, { label: '\u9875\u9762\u7B49\u7EA7' }),
                getFieldDecorator('level', {
                    rules: [{ required: true }]
                })(React.createElement(Input, { disabled: true, placeholder: '\u8BF7\u8F93\u5165\u9875\u9762\u7B49\u7EA7' }))
            ), React.createElement(
                FormItem,
                _extends({}, _common.formItemLayout, { label: '\u7236\u7EA7\u83DC\u5355id' }),
                getFieldDecorator('parent_id')(React.createElement(Input, { disabled: true }))
            ), React.createElement(
                FormItem,
                _extends({}, _common.formItemLayout, { label: '\u83DC\u5355id' }),
                getFieldDecorator('id')(React.createElement(Input, { disabled: true, placeholder: '\u65E0\u9700\u586B\u5199' }))
            )];
        }
    }, {
        key: 'handleOk',
        value: function handleOk() {
            var _this8 = this;

            this.setState({
                confirmLoading: true
            });
            var formVal = this.props.form.getFieldsValue();

            !formVal.page_id && (formVal.page_id = 'Default');
            formVal.menu_id = formVal.id;
            switch (this.state.aeState) {
                case _consts.STATE_ADD:
                    (0, _common.jrFetchPost)(_apis.addMenu, formVal).then(function (ret) {
                        _this8.postSuccess();
                    }).catch(function () {
                        _this8.setState({
                            confirmLoading: false
                        });
                    });
                    break;
                case _consts.STATE_EDIT:
                    (0, _common.jrFetchPost)(_apis.editMenu, formVal).then(function (ret) {
                        _this8.postSuccess();
                    }).catch(function () {
                        _this8.setState({
                            confirmLoading: false
                        });
                    });

            }
        }
    }, {
        key: 'postSuccess',
        value: function postSuccess() {
            this.setState({
                confirmLoading: false,
                aeModalVisible: false
            });
            this.getList();
        }
    }, {
        key: 'render',
        value: function render() {
            var _this9 = this;

            var _state = this.state,
                menuList = _state.menuList,
                saving = _state.saving,
                confirmLoading = _state.confirmLoading,
                aeState = _state.aeState,
                aeModalVisible = _state.aeModalVisible;

            var keys = this.loopSeleKeys(menuList, []);
            return React.createElement(
                'div',
                { className: 'page-config' },
                React.createElement(
                    'h2',
                    null,
                    '\u9875\u9762\u914D\u7F6E'
                ),
                React.createElement(_BtnsToolBar2.default, null),

                /* menuList.length > 0 && */React.createElement(
                    Tree,
                    { defaultExpandedKeys: keys, defaultExpandAll: true, onCheck: this.onCheck },
                    this.createTree(this.state.menuList, ROOT, 1)
                ),
                React.createElement(
                    Modal,
                    { confirmLoading: confirmLoading, title: aeState === _consts.STATE_ADD ? '新增' : '编辑', visible: aeModalVisible,
                        onOk: this.handleOk.bind(this),

                        onCancel: function onCancel() {
                            _this9.resetForm();
                            _this9.setState({ aeModalVisible: false,
                                confirmLoading: false
                            });
                        } },
                    this.getFormContent()
                )
            );
        }
    }]);

    return PageConfig;
}(React.Component);

PageConfig = Form.create({})(PageConfig);

exports.default = PageConfig;

/***/ }),
/* 86 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _index = __webpack_require__(64);

var _index2 = _interopRequireDefault(_index);

__webpack_require__(65);

var _reducers = __webpack_require__(63);

var _reducers2 = _interopRequireDefault(_reducers);

var _common = __webpack_require__(0);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

__webpack_require__(66);
var _ReactRouter = ReactRouter,
    hashHistory = _ReactRouter.hashHistory,
    browserHistory = _ReactRouter.browserHistory;
var _ReactRouterRedux = ReactRouterRedux,
    syncHistoryWithStore = _ReactRouterRedux.syncHistoryWithStore;
var _ReactRedux = ReactRedux,
    Provider = _ReactRedux.Provider;
var _Redux = Redux,
    createStore = _Redux.createStore,
    applyMiddleware = _Redux.applyMiddleware;


var store = createStore(_reducers2.default, applyMiddleware(Thunk));
var history = syncHistoryWithStore(hashHistory, store);

_common.resizeCallback.initOnresize();

ReactDOM.render(React.createElement(
    Provider,
    { store: store },
    React.createElement(
        'div',
        { className: 'data-reactroot' },
        React.createElement(_index2.default, { history: history })
    )
), document.getElementById('root'));

/***/ }),
/* 87 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = update;


var initialState = {
    tableSize: 'small'

};

function update() {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
    var action = arguments[1];

    switch (action.type) {
        case 'setTableSize':
            return Object.assign({}, state, {
                tableSize: action.val
            });
        default:
            return state;
    }
}

/***/ }),
/* 88 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(95), __esModule: true };

/***/ }),
/* 89 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(96), __esModule: true };

/***/ }),
/* 90 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(98), __esModule: true };

/***/ }),
/* 91 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(99), __esModule: true };

/***/ }),
/* 92 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(100), __esModule: true };

/***/ }),
/* 93 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

exports.default = function (obj, keys) {
  var target = {};

  for (var i in obj) {
    if (keys.indexOf(i) >= 0) continue;
    if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;
    target[i] = obj[i];
  }

  return target;
};

/***/ }),
/* 94 */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Module dependencies.
 */

try {
  var index = __webpack_require__(48);
} catch (err) {
  var index = __webpack_require__(48);
}

/**
 * Whitespace regexp.
 */

var re = /\s+/;

/**
 * toString reference.
 */

var toString = Object.prototype.toString;

/**
 * Wrap `el` in a `ClassList`.
 *
 * @param {Element} el
 * @return {ClassList}
 * @api public
 */

module.exports = function(el){
  return new ClassList(el);
};

/**
 * Initialize a new ClassList for `el`.
 *
 * @param {Element} el
 * @api private
 */

function ClassList(el) {
  if (!el || !el.nodeType) {
    throw new Error('A DOM element reference is required');
  }
  this.el = el;
  this.list = el.classList;
}

/**
 * Add class `name` if not already present.
 *
 * @param {String} name
 * @return {ClassList}
 * @api public
 */

ClassList.prototype.add = function(name){
  // classList
  if (this.list) {
    this.list.add(name);
    return this;
  }

  // fallback
  var arr = this.array();
  var i = index(arr, name);
  if (!~i) arr.push(name);
  this.el.className = arr.join(' ');
  return this;
};

/**
 * Remove class `name` when present, or
 * pass a regular expression to remove
 * any which match.
 *
 * @param {String|RegExp} name
 * @return {ClassList}
 * @api public
 */

ClassList.prototype.remove = function(name){
  if ('[object RegExp]' == toString.call(name)) {
    return this.removeMatching(name);
  }

  // classList
  if (this.list) {
    this.list.remove(name);
    return this;
  }

  // fallback
  var arr = this.array();
  var i = index(arr, name);
  if (~i) arr.splice(i, 1);
  this.el.className = arr.join(' ');
  return this;
};

/**
 * Remove all classes matching `re`.
 *
 * @param {RegExp} re
 * @return {ClassList}
 * @api private
 */

ClassList.prototype.removeMatching = function(re){
  var arr = this.array();
  for (var i = 0; i < arr.length; i++) {
    if (re.test(arr[i])) {
      this.remove(arr[i]);
    }
  }
  return this;
};

/**
 * Toggle class `name`, can force state via `force`.
 *
 * For browsers that support classList, but do not support `force` yet,
 * the mistake will be detected and corrected.
 *
 * @param {String} name
 * @param {Boolean} force
 * @return {ClassList}
 * @api public
 */

ClassList.prototype.toggle = function(name, force){
  // classList
  if (this.list) {
    if ("undefined" !== typeof force) {
      if (force !== this.list.toggle(name, force)) {
        this.list.toggle(name); // toggle again to correct
      }
    } else {
      this.list.toggle(name);
    }
    return this;
  }

  // fallback
  if ("undefined" !== typeof force) {
    if (!force) {
      this.remove(name);
    } else {
      this.add(name);
    }
  } else {
    if (this.has(name)) {
      this.remove(name);
    } else {
      this.add(name);
    }
  }

  return this;
};

/**
 * Return an array of classes.
 *
 * @return {Array}
 * @api public
 */

ClassList.prototype.array = function(){
  var className = this.el.getAttribute('class') || '';
  var str = className.replace(/^\s+|\s+$/g, '');
  var arr = str.split(re);
  if ('' === arr[0]) arr.shift();
  return arr;
};

/**
 * Check if class `name` is present.
 *
 * @param {String} name
 * @return {ClassList}
 * @api public
 */

ClassList.prototype.has =
ClassList.prototype.contains = function(name){
  return this.list
    ? this.list.contains(name)
    : !! ~index(this.array(), name);
};


/***/ }),
/* 95 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(119);
module.exports = __webpack_require__(6).Object.assign;


/***/ }),
/* 96 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(120);
var $Object = __webpack_require__(6).Object;
module.exports = function create(P, D) {
  return $Object.create(P, D);
};


/***/ }),
/* 97 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(121);
var $Object = __webpack_require__(6).Object;
module.exports = function defineProperty(it, key, desc) {
  return $Object.defineProperty(it, key, desc);
};


/***/ }),
/* 98 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(122);
module.exports = __webpack_require__(6).Object.setPrototypeOf;


/***/ }),
/* 99 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(125);
__webpack_require__(123);
__webpack_require__(126);
__webpack_require__(127);
module.exports = __webpack_require__(6).Symbol;


/***/ }),
/* 100 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(124);
__webpack_require__(128);
module.exports = __webpack_require__(43).f('iterator');


/***/ }),
/* 101 */
/***/ (function(module, exports) {

module.exports = function (it) {
  if (typeof it != 'function') throw TypeError(it + ' is not a function!');
  return it;
};


/***/ }),
/* 102 */
/***/ (function(module, exports) {

module.exports = function () { /* empty */ };


/***/ }),
/* 103 */
/***/ (function(module, exports, __webpack_require__) {

// false -> Array#indexOf
// true  -> Array#includes
var toIObject = __webpack_require__(12);
var toLength = __webpack_require__(117);
var toAbsoluteIndex = __webpack_require__(116);
module.exports = function (IS_INCLUDES) {
  return function ($this, el, fromIndex) {
    var O = toIObject($this);
    var length = toLength(O.length);
    var index = toAbsoluteIndex(fromIndex, length);
    var value;
    // Array#includes uses SameValueZero equality algorithm
    // eslint-disable-next-line no-self-compare
    if (IS_INCLUDES && el != el) while (length > index) {
      value = O[index++];
      // eslint-disable-next-line no-self-compare
      if (value != value) return true;
    // Array#indexOf ignores holes, Array#includes - not
    } else for (;length > index; index++) if (IS_INCLUDES || index in O) {
      if (O[index] === el) return IS_INCLUDES || index || 0;
    } return !IS_INCLUDES && -1;
  };
};


/***/ }),
/* 104 */
/***/ (function(module, exports, __webpack_require__) {

// all enumerable object keys, includes symbols
var getKeys = __webpack_require__(24);
var gOPS = __webpack_require__(36);
var pIE = __webpack_require__(25);
module.exports = function (it) {
  var result = getKeys(it);
  var getSymbols = gOPS.f;
  if (getSymbols) {
    var symbols = getSymbols(it);
    var isEnum = pIE.f;
    var i = 0;
    var key;
    while (symbols.length > i) if (isEnum.call(it, key = symbols[i++])) result.push(key);
  } return result;
};


/***/ }),
/* 105 */
/***/ (function(module, exports, __webpack_require__) {

var document = __webpack_require__(5).document;
module.exports = document && document.documentElement;


/***/ }),
/* 106 */
/***/ (function(module, exports, __webpack_require__) {

// 7.2.2 IsArray(argument)
var cof = __webpack_require__(49);
module.exports = Array.isArray || function isArray(arg) {
  return cof(arg) == 'Array';
};


/***/ }),
/* 107 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var create = __webpack_require__(35);
var descriptor = __webpack_require__(26);
var setToStringTag = __webpack_require__(37);
var IteratorPrototype = {};

// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
__webpack_require__(11)(IteratorPrototype, __webpack_require__(13)('iterator'), function () { return this; });

module.exports = function (Constructor, NAME, next) {
  Constructor.prototype = create(IteratorPrototype, { next: descriptor(1, next) });
  setToStringTag(Constructor, NAME + ' Iterator');
};


/***/ }),
/* 108 */
/***/ (function(module, exports) {

module.exports = function (done, value) {
  return { value: value, done: !!done };
};


/***/ }),
/* 109 */
/***/ (function(module, exports, __webpack_require__) {

var META = __webpack_require__(27)('meta');
var isObject = __webpack_require__(17);
var has = __webpack_require__(8);
var setDesc = __webpack_require__(9).f;
var id = 0;
var isExtensible = Object.isExtensible || function () {
  return true;
};
var FREEZE = !__webpack_require__(16)(function () {
  return isExtensible(Object.preventExtensions({}));
});
var setMeta = function (it) {
  setDesc(it, META, { value: {
    i: 'O' + ++id, // object ID
    w: {}          // weak collections IDs
  } });
};
var fastKey = function (it, create) {
  // return primitive with prefix
  if (!isObject(it)) return typeof it == 'symbol' ? it : (typeof it == 'string' ? 'S' : 'P') + it;
  if (!has(it, META)) {
    // can't set metadata to uncaught frozen object
    if (!isExtensible(it)) return 'F';
    // not necessary to add metadata
    if (!create) return 'E';
    // add missing metadata
    setMeta(it);
  // return object ID
  } return it[META].i;
};
var getWeak = function (it, create) {
  if (!has(it, META)) {
    // can't set metadata to uncaught frozen object
    if (!isExtensible(it)) return true;
    // not necessary to add metadata
    if (!create) return false;
    // add missing metadata
    setMeta(it);
  // return hash weak collections IDs
  } return it[META].w;
};
// add metadata on freeze-family methods calling
var onFreeze = function (it) {
  if (FREEZE && meta.NEED && isExtensible(it) && !has(it, META)) setMeta(it);
  return it;
};
var meta = module.exports = {
  KEY: META,
  NEED: false,
  fastKey: fastKey,
  getWeak: getWeak,
  onFreeze: onFreeze
};


/***/ }),
/* 110 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 19.1.2.1 Object.assign(target, source, ...)
var getKeys = __webpack_require__(24);
var gOPS = __webpack_require__(36);
var pIE = __webpack_require__(25);
var toObject = __webpack_require__(59);
var IObject = __webpack_require__(53);
var $assign = Object.assign;

// should work with symbols and should have deterministic property order (V8 bug)
module.exports = !$assign || __webpack_require__(16)(function () {
  var A = {};
  var B = {};
  // eslint-disable-next-line no-undef
  var S = Symbol();
  var K = 'abcdefghijklmnopqrst';
  A[S] = 7;
  K.split('').forEach(function (k) { B[k] = k; });
  return $assign({}, A)[S] != 7 || Object.keys($assign({}, B)).join('') != K;
}) ? function assign(target, source) { // eslint-disable-line no-unused-vars
  var T = toObject(target);
  var aLen = arguments.length;
  var index = 1;
  var getSymbols = gOPS.f;
  var isEnum = pIE.f;
  while (aLen > index) {
    var S = IObject(arguments[index++]);
    var keys = getSymbols ? getKeys(S).concat(getSymbols(S)) : getKeys(S);
    var length = keys.length;
    var j = 0;
    var key;
    while (length > j) if (isEnum.call(S, key = keys[j++])) T[key] = S[key];
  } return T;
} : $assign;


/***/ }),
/* 111 */
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__(9);
var anObject = __webpack_require__(15);
var getKeys = __webpack_require__(24);

module.exports = __webpack_require__(7) ? Object.defineProperties : function defineProperties(O, Properties) {
  anObject(O);
  var keys = getKeys(Properties);
  var length = keys.length;
  var i = 0;
  var P;
  while (length > i) dP.f(O, P = keys[i++], Properties[P]);
  return O;
};


/***/ }),
/* 112 */
/***/ (function(module, exports, __webpack_require__) {

// fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window
var toIObject = __webpack_require__(12);
var gOPN = __webpack_require__(56).f;
var toString = {}.toString;

var windowNames = typeof window == 'object' && window && Object.getOwnPropertyNames
  ? Object.getOwnPropertyNames(window) : [];

var getWindowNames = function (it) {
  try {
    return gOPN(it);
  } catch (e) {
    return windowNames.slice();
  }
};

module.exports.f = function getOwnPropertyNames(it) {
  return windowNames && toString.call(it) == '[object Window]' ? getWindowNames(it) : gOPN(toIObject(it));
};


/***/ }),
/* 113 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
var has = __webpack_require__(8);
var toObject = __webpack_require__(59);
var IE_PROTO = __webpack_require__(38)('IE_PROTO');
var ObjectProto = Object.prototype;

module.exports = Object.getPrototypeOf || function (O) {
  O = toObject(O);
  if (has(O, IE_PROTO)) return O[IE_PROTO];
  if (typeof O.constructor == 'function' && O instanceof O.constructor) {
    return O.constructor.prototype;
  } return O instanceof Object ? ObjectProto : null;
};


/***/ }),
/* 114 */
/***/ (function(module, exports, __webpack_require__) {

// Works with __proto__ only. Old v8 can't work with null proto objects.
/* eslint-disable no-proto */
var isObject = __webpack_require__(17);
var anObject = __webpack_require__(15);
var check = function (O, proto) {
  anObject(O);
  if (!isObject(proto) && proto !== null) throw TypeError(proto + ": can't set as prototype!");
};
module.exports = {
  set: Object.setPrototypeOf || ('__proto__' in {} ? // eslint-disable-line
    function (test, buggy, set) {
      try {
        set = __webpack_require__(50)(Function.call, __webpack_require__(55).f(Object.prototype, '__proto__').set, 2);
        set(test, []);
        buggy = !(test instanceof Array);
      } catch (e) { buggy = true; }
      return function setPrototypeOf(O, proto) {
        check(O, proto);
        if (buggy) O.__proto__ = proto;
        else set(O, proto);
        return O;
      };
    }({}, false) : undefined),
  check: check
};


/***/ }),
/* 115 */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(40);
var defined = __webpack_require__(31);
// true  -> String#at
// false -> String#codePointAt
module.exports = function (TO_STRING) {
  return function (that, pos) {
    var s = String(defined(that));
    var i = toInteger(pos);
    var l = s.length;
    var a, b;
    if (i < 0 || i >= l) return TO_STRING ? '' : undefined;
    a = s.charCodeAt(i);
    return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff
      ? TO_STRING ? s.charAt(i) : a
      : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
  };
};


/***/ }),
/* 116 */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(40);
var max = Math.max;
var min = Math.min;
module.exports = function (index, length) {
  index = toInteger(index);
  return index < 0 ? max(index + length, 0) : min(index, length);
};


/***/ }),
/* 117 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.15 ToLength
var toInteger = __webpack_require__(40);
var min = Math.min;
module.exports = function (it) {
  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
};


/***/ }),
/* 118 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var addToUnscopables = __webpack_require__(102);
var step = __webpack_require__(108);
var Iterators = __webpack_require__(33);
var toIObject = __webpack_require__(12);

// 22.1.3.4 Array.prototype.entries()
// 22.1.3.13 Array.prototype.keys()
// 22.1.3.29 Array.prototype.values()
// 22.1.3.30 Array.prototype[@@iterator]()
module.exports = __webpack_require__(54)(Array, 'Array', function (iterated, kind) {
  this._t = toIObject(iterated); // target
  this._i = 0;                   // next index
  this._k = kind;                // kind
// 22.1.5.2.1 %ArrayIteratorPrototype%.next()
}, function () {
  var O = this._t;
  var kind = this._k;
  var index = this._i++;
  if (!O || index >= O.length) {
    this._t = undefined;
    return step(1);
  }
  if (kind == 'keys') return step(0, index);
  if (kind == 'values') return step(0, O[index]);
  return step(0, [index, O[index]]);
}, 'values');

// argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)
Iterators.Arguments = Iterators.Array;

addToUnscopables('keys');
addToUnscopables('values');
addToUnscopables('entries');


/***/ }),
/* 119 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.3.1 Object.assign(target, source)
var $export = __webpack_require__(10);

$export($export.S + $export.F, 'Object', { assign: __webpack_require__(110) });


/***/ }),
/* 120 */
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__(10);
// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
$export($export.S, 'Object', { create: __webpack_require__(35) });


/***/ }),
/* 121 */
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__(10);
// 19.1.2.4 / 15.2.3.6 Object.defineProperty(O, P, Attributes)
$export($export.S + $export.F * !__webpack_require__(7), 'Object', { defineProperty: __webpack_require__(9).f });


/***/ }),
/* 122 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.3.19 Object.setPrototypeOf(O, proto)
var $export = __webpack_require__(10);
$export($export.S, 'Object', { setPrototypeOf: __webpack_require__(114).set });


/***/ }),
/* 123 */
/***/ (function(module, exports) {



/***/ }),
/* 124 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $at = __webpack_require__(115)(true);

// 21.1.3.27 String.prototype[@@iterator]()
__webpack_require__(54)(String, 'String', function (iterated) {
  this._t = String(iterated); // target
  this._i = 0;                // next index
// 21.1.5.2.1 %StringIteratorPrototype%.next()
}, function () {
  var O = this._t;
  var index = this._i;
  var point;
  if (index >= O.length) return { value: undefined, done: true };
  point = $at(O, index);
  this._i += point.length;
  return { value: point, done: false };
});


/***/ }),
/* 125 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// ECMAScript 6 symbols shim
var global = __webpack_require__(5);
var has = __webpack_require__(8);
var DESCRIPTORS = __webpack_require__(7);
var $export = __webpack_require__(10);
var redefine = __webpack_require__(58);
var META = __webpack_require__(109).KEY;
var $fails = __webpack_require__(16);
var shared = __webpack_require__(39);
var setToStringTag = __webpack_require__(37);
var uid = __webpack_require__(27);
var wks = __webpack_require__(13);
var wksExt = __webpack_require__(43);
var wksDefine = __webpack_require__(42);
var enumKeys = __webpack_require__(104);
var isArray = __webpack_require__(106);
var anObject = __webpack_require__(15);
var toIObject = __webpack_require__(12);
var toPrimitive = __webpack_require__(41);
var createDesc = __webpack_require__(26);
var _create = __webpack_require__(35);
var gOPNExt = __webpack_require__(112);
var $GOPD = __webpack_require__(55);
var $DP = __webpack_require__(9);
var $keys = __webpack_require__(24);
var gOPD = $GOPD.f;
var dP = $DP.f;
var gOPN = gOPNExt.f;
var $Symbol = global.Symbol;
var $JSON = global.JSON;
var _stringify = $JSON && $JSON.stringify;
var PROTOTYPE = 'prototype';
var HIDDEN = wks('_hidden');
var TO_PRIMITIVE = wks('toPrimitive');
var isEnum = {}.propertyIsEnumerable;
var SymbolRegistry = shared('symbol-registry');
var AllSymbols = shared('symbols');
var OPSymbols = shared('op-symbols');
var ObjectProto = Object[PROTOTYPE];
var USE_NATIVE = typeof $Symbol == 'function';
var QObject = global.QObject;
// Don't use setters in Qt Script, https://github.com/zloirock/core-js/issues/173
var setter = !QObject || !QObject[PROTOTYPE] || !QObject[PROTOTYPE].findChild;

// fallback for old Android, https://code.google.com/p/v8/issues/detail?id=687
var setSymbolDesc = DESCRIPTORS && $fails(function () {
  return _create(dP({}, 'a', {
    get: function () { return dP(this, 'a', { value: 7 }).a; }
  })).a != 7;
}) ? function (it, key, D) {
  var protoDesc = gOPD(ObjectProto, key);
  if (protoDesc) delete ObjectProto[key];
  dP(it, key, D);
  if (protoDesc && it !== ObjectProto) dP(ObjectProto, key, protoDesc);
} : dP;

var wrap = function (tag) {
  var sym = AllSymbols[tag] = _create($Symbol[PROTOTYPE]);
  sym._k = tag;
  return sym;
};

var isSymbol = USE_NATIVE && typeof $Symbol.iterator == 'symbol' ? function (it) {
  return typeof it == 'symbol';
} : function (it) {
  return it instanceof $Symbol;
};

var $defineProperty = function defineProperty(it, key, D) {
  if (it === ObjectProto) $defineProperty(OPSymbols, key, D);
  anObject(it);
  key = toPrimitive(key, true);
  anObject(D);
  if (has(AllSymbols, key)) {
    if (!D.enumerable) {
      if (!has(it, HIDDEN)) dP(it, HIDDEN, createDesc(1, {}));
      it[HIDDEN][key] = true;
    } else {
      if (has(it, HIDDEN) && it[HIDDEN][key]) it[HIDDEN][key] = false;
      D = _create(D, { enumerable: createDesc(0, false) });
    } return setSymbolDesc(it, key, D);
  } return dP(it, key, D);
};
var $defineProperties = function defineProperties(it, P) {
  anObject(it);
  var keys = enumKeys(P = toIObject(P));
  var i = 0;
  var l = keys.length;
  var key;
  while (l > i) $defineProperty(it, key = keys[i++], P[key]);
  return it;
};
var $create = function create(it, P) {
  return P === undefined ? _create(it) : $defineProperties(_create(it), P);
};
var $propertyIsEnumerable = function propertyIsEnumerable(key) {
  var E = isEnum.call(this, key = toPrimitive(key, true));
  if (this === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key)) return false;
  return E || !has(this, key) || !has(AllSymbols, key) || has(this, HIDDEN) && this[HIDDEN][key] ? E : true;
};
var $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(it, key) {
  it = toIObject(it);
  key = toPrimitive(key, true);
  if (it === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key)) return;
  var D = gOPD(it, key);
  if (D && has(AllSymbols, key) && !(has(it, HIDDEN) && it[HIDDEN][key])) D.enumerable = true;
  return D;
};
var $getOwnPropertyNames = function getOwnPropertyNames(it) {
  var names = gOPN(toIObject(it));
  var result = [];
  var i = 0;
  var key;
  while (names.length > i) {
    if (!has(AllSymbols, key = names[i++]) && key != HIDDEN && key != META) result.push(key);
  } return result;
};
var $getOwnPropertySymbols = function getOwnPropertySymbols(it) {
  var IS_OP = it === ObjectProto;
  var names = gOPN(IS_OP ? OPSymbols : toIObject(it));
  var result = [];
  var i = 0;
  var key;
  while (names.length > i) {
    if (has(AllSymbols, key = names[i++]) && (IS_OP ? has(ObjectProto, key) : true)) result.push(AllSymbols[key]);
  } return result;
};

// 19.4.1.1 Symbol([description])
if (!USE_NATIVE) {
  $Symbol = function Symbol() {
    if (this instanceof $Symbol) throw TypeError('Symbol is not a constructor!');
    var tag = uid(arguments.length > 0 ? arguments[0] : undefined);
    var $set = function (value) {
      if (this === ObjectProto) $set.call(OPSymbols, value);
      if (has(this, HIDDEN) && has(this[HIDDEN], tag)) this[HIDDEN][tag] = false;
      setSymbolDesc(this, tag, createDesc(1, value));
    };
    if (DESCRIPTORS && setter) setSymbolDesc(ObjectProto, tag, { configurable: true, set: $set });
    return wrap(tag);
  };
  redefine($Symbol[PROTOTYPE], 'toString', function toString() {
    return this._k;
  });

  $GOPD.f = $getOwnPropertyDescriptor;
  $DP.f = $defineProperty;
  __webpack_require__(56).f = gOPNExt.f = $getOwnPropertyNames;
  __webpack_require__(25).f = $propertyIsEnumerable;
  __webpack_require__(36).f = $getOwnPropertySymbols;

  if (DESCRIPTORS && !__webpack_require__(34)) {
    redefine(ObjectProto, 'propertyIsEnumerable', $propertyIsEnumerable, true);
  }

  wksExt.f = function (name) {
    return wrap(wks(name));
  };
}

$export($export.G + $export.W + $export.F * !USE_NATIVE, { Symbol: $Symbol });

for (var es6Symbols = (
  // 19.4.2.2, 19.4.2.3, 19.4.2.4, 19.4.2.6, 19.4.2.8, 19.4.2.9, 19.4.2.10, 19.4.2.11, 19.4.2.12, 19.4.2.13, 19.4.2.14
  'hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables'
).split(','), j = 0; es6Symbols.length > j;)wks(es6Symbols[j++]);

for (var wellKnownSymbols = $keys(wks.store), k = 0; wellKnownSymbols.length > k;) wksDefine(wellKnownSymbols[k++]);

$export($export.S + $export.F * !USE_NATIVE, 'Symbol', {
  // 19.4.2.1 Symbol.for(key)
  'for': function (key) {
    return has(SymbolRegistry, key += '')
      ? SymbolRegistry[key]
      : SymbolRegistry[key] = $Symbol(key);
  },
  // 19.4.2.5 Symbol.keyFor(sym)
  keyFor: function keyFor(sym) {
    if (!isSymbol(sym)) throw TypeError(sym + ' is not a symbol!');
    for (var key in SymbolRegistry) if (SymbolRegistry[key] === sym) return key;
  },
  useSetter: function () { setter = true; },
  useSimple: function () { setter = false; }
});

$export($export.S + $export.F * !USE_NATIVE, 'Object', {
  // 19.1.2.2 Object.create(O [, Properties])
  create: $create,
  // 19.1.2.4 Object.defineProperty(O, P, Attributes)
  defineProperty: $defineProperty,
  // 19.1.2.3 Object.defineProperties(O, Properties)
  defineProperties: $defineProperties,
  // 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
  getOwnPropertyDescriptor: $getOwnPropertyDescriptor,
  // 19.1.2.7 Object.getOwnPropertyNames(O)
  getOwnPropertyNames: $getOwnPropertyNames,
  // 19.1.2.8 Object.getOwnPropertySymbols(O)
  getOwnPropertySymbols: $getOwnPropertySymbols
});

// 24.3.2 JSON.stringify(value [, replacer [, space]])
$JSON && $export($export.S + $export.F * (!USE_NATIVE || $fails(function () {
  var S = $Symbol();
  // MS Edge converts symbol values to JSON as {}
  // WebKit converts symbol values to JSON as null
  // V8 throws on boxed symbols
  return _stringify([S]) != '[null]' || _stringify({ a: S }) != '{}' || _stringify(Object(S)) != '{}';
})), 'JSON', {
  stringify: function stringify(it) {
    if (it === undefined || isSymbol(it)) return; // IE8 returns string on undefined
    var args = [it];
    var i = 1;
    var replacer, $replacer;
    while (arguments.length > i) args.push(arguments[i++]);
    replacer = args[1];
    if (typeof replacer == 'function') $replacer = replacer;
    if ($replacer || !isArray(replacer)) replacer = function (key, value) {
      if ($replacer) value = $replacer.call(this, key, value);
      if (!isSymbol(value)) return value;
    };
    args[1] = replacer;
    return _stringify.apply($JSON, args);
  }
});

// 19.4.3.4 Symbol.prototype[@@toPrimitive](hint)
$Symbol[PROTOTYPE][TO_PRIMITIVE] || __webpack_require__(11)($Symbol[PROTOTYPE], TO_PRIMITIVE, $Symbol[PROTOTYPE].valueOf);
// 19.4.3.5 Symbol.prototype[@@toStringTag]
setToStringTag($Symbol, 'Symbol');
// 20.2.1.9 Math[@@toStringTag]
setToStringTag(Math, 'Math', true);
// 24.3.3 JSON[@@toStringTag]
setToStringTag(global.JSON, 'JSON', true);


/***/ }),
/* 126 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(42)('asyncIterator');


/***/ }),
/* 127 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(42)('observable');


/***/ }),
/* 128 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(118);
var global = __webpack_require__(5);
var hide = __webpack_require__(11);
var Iterators = __webpack_require__(33);
var TO_STRING_TAG = __webpack_require__(13)('toStringTag');

var DOMIterables = ('CSSRuleList,CSSStyleDeclaration,CSSValueList,ClientRectList,DOMRectList,DOMStringList,' +
  'DOMTokenList,DataTransferItemList,FileList,HTMLAllCollection,HTMLCollection,HTMLFormElement,HTMLSelectElement,' +
  'MediaList,MimeTypeArray,NamedNodeMap,NodeList,PaintRequestList,Plugin,PluginArray,SVGLengthList,SVGNumberList,' +
  'SVGPathSegList,SVGPointList,SVGStringList,SVGTransformList,SourceBufferList,StyleSheetList,TextTrackCueList,' +
  'TextTrackList,TouchList').split(',');

for (var i = 0; i < DOMIterables.length; i++) {
  var NAME = DOMIterables[i];
  var Collection = global[NAME];
  var proto = Collection && Collection.prototype;
  if (proto && !proto[TO_STRING_TAG]) hide(proto, TO_STRING_TAG, NAME);
  Iterators[NAME] = Iterators.Array;
}


/***/ }),
/* 129 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var EVENT_NAME_MAP = {
  transitionend: {
    transition: 'transitionend',
    WebkitTransition: 'webkitTransitionEnd',
    MozTransition: 'mozTransitionEnd',
    OTransition: 'oTransitionEnd',
    msTransition: 'MSTransitionEnd'
  },

  animationend: {
    animation: 'animationend',
    WebkitAnimation: 'webkitAnimationEnd',
    MozAnimation: 'mozAnimationEnd',
    OAnimation: 'oAnimationEnd',
    msAnimation: 'MSAnimationEnd'
  }
};

var endEvents = [];

function detectEvents() {
  var testEl = document.createElement('div');
  var style = testEl.style;

  if (!('AnimationEvent' in window)) {
    delete EVENT_NAME_MAP.animationend.animation;
  }

  if (!('TransitionEvent' in window)) {
    delete EVENT_NAME_MAP.transitionend.transition;
  }

  for (var baseEventName in EVENT_NAME_MAP) {
    if (EVENT_NAME_MAP.hasOwnProperty(baseEventName)) {
      var baseEvents = EVENT_NAME_MAP[baseEventName];
      for (var styleName in baseEvents) {
        if (styleName in style) {
          endEvents.push(baseEvents[styleName]);
          break;
        }
      }
    }
  }
}

if (typeof window !== 'undefined' && typeof document !== 'undefined') {
  detectEvents();
}

function addEventListener(node, eventName, eventListener) {
  node.addEventListener(eventName, eventListener, false);
}

function removeEventListener(node, eventName, eventListener) {
  node.removeEventListener(eventName, eventListener, false);
}

var TransitionEvents = {
  addEndEventListener: function addEndEventListener(node, eventListener) {
    if (endEvents.length === 0) {
      window.setTimeout(eventListener, 0);
      return;
    }
    endEvents.forEach(function (endEvent) {
      addEventListener(node, endEvent, eventListener);
    });
  },


  endEvents: endEvents,

  removeEndEventListener: function removeEndEventListener(node, eventListener) {
    if (endEvents.length === 0) {
      return;
    }
    endEvents.forEach(function (endEvent) {
      removeEventListener(node, endEvent, eventListener);
    });
  }
};

/* harmony default export */ __webpack_exports__["a"] = (TransitionEvents);

/***/ }),
/* 130 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return isCssAnimationSupported; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_typeof__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_typeof___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_typeof__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Event__ = __webpack_require__(129);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_component_classes__ = __webpack_require__(94);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_component_classes___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_component_classes__);




var isCssAnimationSupported = __WEBPACK_IMPORTED_MODULE_1__Event__["a" /* default */].endEvents.length !== 0;
var capitalPrefixes = ['Webkit', 'Moz', 'O',
// ms is special .... !
'ms'];
var prefixes = ['-webkit-', '-moz-', '-o-', 'ms-', ''];

function getStyleProperty(node, name) {
  // old ff need null, https://developer.mozilla.org/en-US/docs/Web/API/Window/getComputedStyle
  var style = window.getComputedStyle(node, null);
  var ret = '';
  for (var i = 0; i < prefixes.length; i++) {
    ret = style.getPropertyValue(prefixes[i] + name);
    if (ret) {
      break;
    }
  }
  return ret;
}

function fixBrowserByTimeout(node) {
  if (isCssAnimationSupported) {
    var transitionDelay = parseFloat(getStyleProperty(node, 'transition-delay')) || 0;
    var transitionDuration = parseFloat(getStyleProperty(node, 'transition-duration')) || 0;
    var animationDelay = parseFloat(getStyleProperty(node, 'animation-delay')) || 0;
    var animationDuration = parseFloat(getStyleProperty(node, 'animation-duration')) || 0;
    var time = Math.max(transitionDuration + transitionDelay, animationDuration + animationDelay);
    // sometimes, browser bug
    node.rcEndAnimTimeout = setTimeout(function () {
      node.rcEndAnimTimeout = null;
      if (node.rcEndListener) {
        node.rcEndListener();
      }
    }, time * 1000 + 200);
  }
}

function clearBrowserBugTimeout(node) {
  if (node.rcEndAnimTimeout) {
    clearTimeout(node.rcEndAnimTimeout);
    node.rcEndAnimTimeout = null;
  }
}

var cssAnimation = function cssAnimation(node, transitionName, endCallback) {
  var nameIsObj = (typeof transitionName === 'undefined' ? 'undefined' : __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_typeof___default()(transitionName)) === 'object';
  var className = nameIsObj ? transitionName.name : transitionName;
  var activeClassName = nameIsObj ? transitionName.active : transitionName + '-active';
  var end = endCallback;
  var start = void 0;
  var active = void 0;
  var nodeClasses = __WEBPACK_IMPORTED_MODULE_2_component_classes___default()(node);

  if (endCallback && Object.prototype.toString.call(endCallback) === '[object Object]') {
    end = endCallback.end;
    start = endCallback.start;
    active = endCallback.active;
  }

  if (node.rcEndListener) {
    node.rcEndListener();
  }

  node.rcEndListener = function (e) {
    if (e && e.target !== node) {
      return;
    }

    if (node.rcAnimTimeout) {
      clearTimeout(node.rcAnimTimeout);
      node.rcAnimTimeout = null;
    }

    clearBrowserBugTimeout(node);

    nodeClasses.remove(className);
    nodeClasses.remove(activeClassName);

    __WEBPACK_IMPORTED_MODULE_1__Event__["a" /* default */].removeEndEventListener(node, node.rcEndListener);
    node.rcEndListener = null;

    // Usually this optional end is used for informing an owner of
    // a leave animation and telling it to remove the child.
    if (end) {
      end();
    }
  };

  __WEBPACK_IMPORTED_MODULE_1__Event__["a" /* default */].addEndEventListener(node, node.rcEndListener);

  if (start) {
    start();
  }
  nodeClasses.add(className);

  node.rcAnimTimeout = setTimeout(function () {
    node.rcAnimTimeout = null;
    nodeClasses.add(activeClassName);
    if (active) {
      setTimeout(active, 0);
    }
    fixBrowserByTimeout(node);
    // 30ms for firefox
  }, 30);

  return {
    stop: function stop() {
      if (node.rcEndListener) {
        node.rcEndListener();
      }
    }
  };
};

cssAnimation.style = function (node, style, callback) {
  if (node.rcEndListener) {
    node.rcEndListener();
  }

  node.rcEndListener = function (e) {
    if (e && e.target !== node) {
      return;
    }

    if (node.rcAnimTimeout) {
      clearTimeout(node.rcAnimTimeout);
      node.rcAnimTimeout = null;
    }

    clearBrowserBugTimeout(node);

    __WEBPACK_IMPORTED_MODULE_1__Event__["a" /* default */].removeEndEventListener(node, node.rcEndListener);
    node.rcEndListener = null;

    // Usually this optional callback is used for informing an owner of
    // a leave animation and telling it to remove the child.
    if (callback) {
      callback();
    }
  };

  __WEBPACK_IMPORTED_MODULE_1__Event__["a" /* default */].addEndEventListener(node, node.rcEndListener);

  node.rcAnimTimeout = setTimeout(function () {
    for (var s in style) {
      if (style.hasOwnProperty(s)) {
        node.style[s] = style[s];
      }
    }
    node.rcAnimTimeout = null;
    fixBrowserByTimeout(node);
  }, 0);
};

cssAnimation.setTransition = function (node, p, value) {
  var property = p;
  var v = value;
  if (value === undefined) {
    v = property;
    property = '';
  }
  property = property || '';
  capitalPrefixes.forEach(function (prefix) {
    node.style[prefix + 'Transition' + property] = v;
  });
};

cssAnimation.isCssAnimationSupported = isCssAnimationSupported;



/* harmony default export */ __webpack_exports__["b"] = (cssAnimation);

/***/ }),
/* 131 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 132 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 133 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 134 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 135 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 136 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 137 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 138 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Copyright (c) 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * 
 */

function makeEmptyFunction(arg) {
  return function () {
    return arg;
  };
}

/**
 * This function accepts and discards inputs; it has no side effects. This is
 * primarily useful idiomatically for overridable function endpoints which
 * always need to be callable, since JS lacks a null-call idiom ala Cocoa.
 */
var emptyFunction = function emptyFunction() {};

emptyFunction.thatReturns = makeEmptyFunction;
emptyFunction.thatReturnsFalse = makeEmptyFunction(false);
emptyFunction.thatReturnsTrue = makeEmptyFunction(true);
emptyFunction.thatReturnsNull = makeEmptyFunction(null);
emptyFunction.thatReturnsThis = function () {
  return this;
};
emptyFunction.thatReturnsArgument = function (arg) {
  return arg;
};

module.exports = emptyFunction;

/***/ }),
/* 139 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 */



/**
 * Use invariant() to assert state which your program assumes to be true.
 *
 * Provide sprintf-style format (only %s is supported) and arguments
 * to provide information about what broke and what you were
 * expecting.
 *
 * The invariant message will be stripped in production, but the invariant
 * will remain to ensure logic does not differ in production.
 */

var validateFormat = function validateFormat(format) {};

if (false) {
  validateFormat = function validateFormat(format) {
    if (format === undefined) {
      throw new Error('invariant requires an error message argument');
    }
  };
}

function invariant(condition, format, a, b, c, d, e, f) {
  validateFormat(format);

  if (!condition) {
    var error;
    if (format === undefined) {
      error = new Error('Minified exception occurred; use the non-minified dev environment ' + 'for the full error message and additional helpful warnings.');
    } else {
      var args = [a, b, c, d, e, f];
      var argIndex = 0;
      error = new Error(format.replace(/%s/g, function () {
        return args[argIndex++];
      }));
      error.name = 'Invariant Violation';
    }

    error.framesToPop = 1; // we don't care about invariant's own frame
    throw error;
  }
}

module.exports = invariant;

/***/ }),
/* 140 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

/*fetchGet，fetchPost只包装了最基础的请求，特殊需求，直接使用fetch来编码
* 参考：https://developer.mozilla.org/zh-CN/docs/Web/API/Fetch_API/Using_Fetch
* */
const ERROR_MSG = '请求失败';
const fetchGet = (requestApi, fetchPrm, successFun, errorFun) => {
    let thisUrl = `${requestApi}?`;
    for (let item in fetchPrm) {
        thisUrl = thisUrl + `${item}=${encodeURIComponent(fetchPrm[item])}&`;
    }
    fetch(thisUrl, {credentials: 'include'})
        .then((response) => {
            const { status } = response;
            if (status >= 200 && status < 300 || status === 304) {
                response.json().then((val) => {
                    successFun(val);
                });
            } else {
                errorFun(`${ERROR_MSG}:${status}，GET:${thisUrl}`);
            }
        }).catch((err) => {
        errorFun(`${ERROR_MSG}:${err.message}，GET:${thisUrl}`);
    });
};
/* harmony export (immutable) */ __webpack_exports__["fetchGet"] = fetchGet;


const fetchPost = (requestApi, fetchPrm, successFun, errorFun) => {
    let prmdata = '';
    for (let item in fetchPrm) {
        prmdata = prmdata + `${item}=${encodeURIComponent(fetchPrm[item])}&`;
    }
    console.log(prmdata)
    fetch(requestApi, {
        credentials: 'include',
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: prmdata
    }).then((response) => {
        const { status } = response;
        if (status >= 200 && status < 300 || status === 304) {
            response.json().then((val) => {
                successFun(val);
            });
        } else {
            errorFun(`${ERROR_MSG}:${status}，POST:${requestApi},BODY:${prmdata}`);
        }
    }).catch((err) => {
        errorFun(`${ERROR_MSG}:${err.message},POST:${requestApi},BODY:${prmdata}`);
    })
};
/* harmony export (immutable) */ __webpack_exports__["fetchPost"] = fetchPost;



/***/ }),
/* 141 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__);

function omit(obj, fields) {
  var shallowCopy = __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default()({}, obj);
  for (var i = 0; i < fields.length; i++) {
    var key = fields[i];
    delete shallowCopy[key];
  }
  return shallowCopy;
}

/* harmony default export */ __webpack_exports__["default"] = (omit);

/***/ }),
/* 142 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 */



var emptyFunction = __webpack_require__(138);
var invariant = __webpack_require__(139);
var ReactPropTypesSecret = __webpack_require__(143);

module.exports = function() {
  function shim(props, propName, componentName, location, propFullName, secret) {
    if (secret === ReactPropTypesSecret) {
      // It is still safe when called from React.
      return;
    }
    invariant(
      false,
      'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
      'Use PropTypes.checkPropTypes() to call them. ' +
      'Read more at http://fb.me/use-check-prop-types'
    );
  };
  shim.isRequired = shim;
  function getShim() {
    return shim;
  };
  // Important!
  // Keep this list in sync with production version in `./factoryWithTypeCheckers.js`.
  var ReactPropTypes = {
    array: shim,
    bool: shim,
    func: shim,
    number: shim,
    object: shim,
    string: shim,
    symbol: shim,

    any: shim,
    arrayOf: getShim,
    element: shim,
    instanceOf: getShim,
    node: shim,
    objectOf: getShim,
    oneOf: getShim,
    oneOfType: getShim,
    shape: getShim
  };

  ReactPropTypes.checkPropTypes = emptyFunction;
  ReactPropTypes.PropTypes = ReactPropTypes;

  return ReactPropTypes;
};


/***/ }),
/* 143 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 */



var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';

module.exports = ReactPropTypesSecret;


/***/ }),
/* 144 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_defineProperty__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_defineProperty___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_defineProperty__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_classCallCheck__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_classCallCheck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_createClass__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_createClass___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_createClass__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_possibleConstructorReturn__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_possibleConstructorReturn___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_possibleConstructorReturn__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_inherits__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_inherits___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_inherits__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_react__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_prop_types__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ChildrenUtils__ = __webpack_require__(146);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__AnimateChild__ = __webpack_require__(145);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__util__ = __webpack_require__(60);










var defaultKey = 'rc_animate_' + Date.now();


function getChildrenFromProps(props) {
  var children = props.children;
  if (__WEBPACK_IMPORTED_MODULE_6_react___default.a.isValidElement(children)) {
    if (!children.key) {
      return __WEBPACK_IMPORTED_MODULE_6_react___default.a.cloneElement(children, {
        key: defaultKey
      });
    }
  }
  return children;
}

function noop() {}

var Animate = function (_React$Component) {
  __WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_inherits___default()(Animate, _React$Component);

  function Animate(props) {
    __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_classCallCheck___default()(this, Animate);

    var _this = __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_possibleConstructorReturn___default()(this, (Animate.__proto__ || Object.getPrototypeOf(Animate)).call(this, props));

    _initialiseProps.call(_this);

    _this.currentlyAnimatingKeys = {};
    _this.keysToEnter = [];
    _this.keysToLeave = [];

    _this.state = {
      children: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_8__ChildrenUtils__["a" /* toArrayChildren */])(getChildrenFromProps(_this.props))
    };

    _this.childrenRefs = {};
    return _this;
  }

  __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_createClass___default()(Animate, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _this2 = this;

      var showProp = this.props.showProp;
      var children = this.state.children;
      if (showProp) {
        children = children.filter(function (child) {
          return !!child.props[showProp];
        });
      }
      children.forEach(function (child) {
        if (child) {
          _this2.performAppear(child.key);
        }
      });
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      var _this3 = this;

      this.nextProps = nextProps;
      var nextChildren = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_8__ChildrenUtils__["a" /* toArrayChildren */])(getChildrenFromProps(nextProps));
      var props = this.props;
      // exclusive needs immediate response
      if (props.exclusive) {
        Object.keys(this.currentlyAnimatingKeys).forEach(function (key) {
          _this3.stop(key);
        });
      }
      var showProp = props.showProp;
      var currentlyAnimatingKeys = this.currentlyAnimatingKeys;
      // last props children if exclusive
      var currentChildren = props.exclusive ? __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_8__ChildrenUtils__["a" /* toArrayChildren */])(getChildrenFromProps(props)) : this.state.children;
      // in case destroy in showProp mode
      var newChildren = [];
      if (showProp) {
        currentChildren.forEach(function (currentChild) {
          var nextChild = currentChild && __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_8__ChildrenUtils__["b" /* findChildInChildrenByKey */])(nextChildren, currentChild.key);
          var newChild = void 0;
          if ((!nextChild || !nextChild.props[showProp]) && currentChild.props[showProp]) {
            newChild = __WEBPACK_IMPORTED_MODULE_6_react___default.a.cloneElement(nextChild || currentChild, __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_defineProperty___default()({}, showProp, true));
          } else {
            newChild = nextChild;
          }
          if (newChild) {
            newChildren.push(newChild);
          }
        });
        nextChildren.forEach(function (nextChild) {
          if (!nextChild || !__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_8__ChildrenUtils__["b" /* findChildInChildrenByKey */])(currentChildren, nextChild.key)) {
            newChildren.push(nextChild);
          }
        });
      } else {
        newChildren = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_8__ChildrenUtils__["c" /* mergeChildren */])(currentChildren, nextChildren);
      }

      // need render to avoid update
      this.setState({
        children: newChildren
      });

      nextChildren.forEach(function (child) {
        var key = child && child.key;
        if (child && currentlyAnimatingKeys[key]) {
          return;
        }
        var hasPrev = child && __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_8__ChildrenUtils__["b" /* findChildInChildrenByKey */])(currentChildren, key);
        if (showProp) {
          var showInNext = child.props[showProp];
          if (hasPrev) {
            var showInNow = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_8__ChildrenUtils__["d" /* findShownChildInChildrenByKey */])(currentChildren, key, showProp);
            if (!showInNow && showInNext) {
              _this3.keysToEnter.push(key);
            }
          } else if (showInNext) {
            _this3.keysToEnter.push(key);
          }
        } else if (!hasPrev) {
          _this3.keysToEnter.push(key);
        }
      });

      currentChildren.forEach(function (child) {
        var key = child && child.key;
        if (child && currentlyAnimatingKeys[key]) {
          return;
        }
        var hasNext = child && __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_8__ChildrenUtils__["b" /* findChildInChildrenByKey */])(nextChildren, key);
        if (showProp) {
          var showInNow = child.props[showProp];
          if (hasNext) {
            var showInNext = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_8__ChildrenUtils__["d" /* findShownChildInChildrenByKey */])(nextChildren, key, showProp);
            if (!showInNext && showInNow) {
              _this3.keysToLeave.push(key);
            }
          } else if (showInNow) {
            _this3.keysToLeave.push(key);
          }
        } else if (!hasNext) {
          _this3.keysToLeave.push(key);
        }
      });
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate() {
      var keysToEnter = this.keysToEnter;
      this.keysToEnter = [];
      keysToEnter.forEach(this.performEnter);
      var keysToLeave = this.keysToLeave;
      this.keysToLeave = [];
      keysToLeave.forEach(this.performLeave);
    }
  }, {
    key: 'isValidChildByKey',
    value: function isValidChildByKey(currentChildren, key) {
      var showProp = this.props.showProp;
      if (showProp) {
        return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_8__ChildrenUtils__["d" /* findShownChildInChildrenByKey */])(currentChildren, key, showProp);
      }
      return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_8__ChildrenUtils__["b" /* findChildInChildrenByKey */])(currentChildren, key);
    }
  }, {
    key: 'stop',
    value: function stop(key) {
      delete this.currentlyAnimatingKeys[key];
      var component = this.childrenRefs[key];
      if (component) {
        component.stop();
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _this4 = this;

      var props = this.props;
      this.nextProps = props;
      var stateChildren = this.state.children;
      var children = null;
      if (stateChildren) {
        children = stateChildren.map(function (child) {
          if (child === null || child === undefined) {
            return child;
          }
          if (!child.key) {
            throw new Error('must set key for <rc-animate> children');
          }
          return __WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_9__AnimateChild__["a" /* default */],
            {
              key: child.key,
              ref: function ref(node) {
                return _this4.childrenRefs[child.key] = node;
              },
              animation: props.animation,
              transitionName: props.transitionName,
              transitionEnter: props.transitionEnter,
              transitionAppear: props.transitionAppear,
              transitionLeave: props.transitionLeave
            },
            child
          );
        });
      }
      var Component = props.component;
      if (Component) {
        var passedProps = props;
        if (typeof Component === 'string') {
          passedProps = __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default()({
            className: props.className,
            style: props.style
          }, props.componentProps);
        }
        return __WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement(
          Component,
          passedProps,
          children
        );
      }
      return children[0] || null;
    }
  }]);

  return Animate;
}(__WEBPACK_IMPORTED_MODULE_6_react___default.a.Component);

Animate.propTypes = {
  component: __WEBPACK_IMPORTED_MODULE_7_prop_types___default.a.any,
  componentProps: __WEBPACK_IMPORTED_MODULE_7_prop_types___default.a.object,
  animation: __WEBPACK_IMPORTED_MODULE_7_prop_types___default.a.object,
  transitionName: __WEBPACK_IMPORTED_MODULE_7_prop_types___default.a.oneOfType([__WEBPACK_IMPORTED_MODULE_7_prop_types___default.a.string, __WEBPACK_IMPORTED_MODULE_7_prop_types___default.a.object]),
  transitionEnter: __WEBPACK_IMPORTED_MODULE_7_prop_types___default.a.bool,
  transitionAppear: __WEBPACK_IMPORTED_MODULE_7_prop_types___default.a.bool,
  exclusive: __WEBPACK_IMPORTED_MODULE_7_prop_types___default.a.bool,
  transitionLeave: __WEBPACK_IMPORTED_MODULE_7_prop_types___default.a.bool,
  onEnd: __WEBPACK_IMPORTED_MODULE_7_prop_types___default.a.func,
  onEnter: __WEBPACK_IMPORTED_MODULE_7_prop_types___default.a.func,
  onLeave: __WEBPACK_IMPORTED_MODULE_7_prop_types___default.a.func,
  onAppear: __WEBPACK_IMPORTED_MODULE_7_prop_types___default.a.func,
  showProp: __WEBPACK_IMPORTED_MODULE_7_prop_types___default.a.string
};
Animate.defaultProps = {
  animation: {},
  component: 'span',
  componentProps: {},
  transitionEnter: true,
  transitionLeave: true,
  transitionAppear: false,
  onEnd: noop,
  onEnter: noop,
  onLeave: noop,
  onAppear: noop
};

var _initialiseProps = function _initialiseProps() {
  var _this5 = this;

  this.performEnter = function (key) {
    // may already remove by exclusive
    if (_this5.childrenRefs[key]) {
      _this5.currentlyAnimatingKeys[key] = true;
      _this5.childrenRefs[key].componentWillEnter(_this5.handleDoneAdding.bind(_this5, key, 'enter'));
    }
  };

  this.performAppear = function (key) {
    if (_this5.childrenRefs[key]) {
      _this5.currentlyAnimatingKeys[key] = true;
      _this5.childrenRefs[key].componentWillAppear(_this5.handleDoneAdding.bind(_this5, key, 'appear'));
    }
  };

  this.handleDoneAdding = function (key, type) {
    var props = _this5.props;
    delete _this5.currentlyAnimatingKeys[key];
    // if update on exclusive mode, skip check
    if (props.exclusive && props !== _this5.nextProps) {
      return;
    }
    var currentChildren = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_8__ChildrenUtils__["a" /* toArrayChildren */])(getChildrenFromProps(props));
    if (!_this5.isValidChildByKey(currentChildren, key)) {
      // exclusive will not need this
      _this5.performLeave(key);
    } else {
      if (type === 'appear') {
        if (__WEBPACK_IMPORTED_MODULE_10__util__["a" /* default */].allowAppearCallback(props)) {
          props.onAppear(key);
          props.onEnd(key, true);
        }
      } else {
        if (__WEBPACK_IMPORTED_MODULE_10__util__["a" /* default */].allowEnterCallback(props)) {
          props.onEnter(key);
          props.onEnd(key, true);
        }
      }
    }
  };

  this.performLeave = function (key) {
    // may already remove by exclusive
    if (_this5.childrenRefs[key]) {
      _this5.currentlyAnimatingKeys[key] = true;
      _this5.childrenRefs[key].componentWillLeave(_this5.handleDoneLeaving.bind(_this5, key));
    }
  };

  this.handleDoneLeaving = function (key) {
    var props = _this5.props;
    delete _this5.currentlyAnimatingKeys[key];
    // if update on exclusive mode, skip check
    if (props.exclusive && props !== _this5.nextProps) {
      return;
    }
    var currentChildren = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_8__ChildrenUtils__["a" /* toArrayChildren */])(getChildrenFromProps(props));
    // in case state change is too fast
    if (_this5.isValidChildByKey(currentChildren, key)) {
      _this5.performEnter(key);
    } else {
      var end = function end() {
        if (__WEBPACK_IMPORTED_MODULE_10__util__["a" /* default */].allowLeaveCallback(props)) {
          props.onLeave(key);
          props.onEnd(key, false);
        }
      };
      if (!__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_8__ChildrenUtils__["e" /* isSameChildren */])(_this5.state.children, currentChildren, props.showProp)) {
        _this5.setState({
          children: currentChildren
        }, end);
      } else {
        end();
      }
    }
  };
};

/* harmony default export */ __webpack_exports__["a"] = (Animate);

/***/ }),
/* 145 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_typeof__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_typeof___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_typeof__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_react_dom__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_react_dom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_react_dom__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_prop_types__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_css_animation__ = __webpack_require__(130);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__util__ = __webpack_require__(60);











var transitionMap = {
  enter: 'transitionEnter',
  appear: 'transitionAppear',
  leave: 'transitionLeave'
};

var AnimateChild = function (_React$Component) {
  __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits___default()(AnimateChild, _React$Component);

  function AnimateChild() {
    __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck___default()(this, AnimateChild);

    return __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn___default()(this, (AnimateChild.__proto__ || Object.getPrototypeOf(AnimateChild)).apply(this, arguments));
  }

  __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass___default()(AnimateChild, [{
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      this.stop();
    }
  }, {
    key: 'componentWillEnter',
    value: function componentWillEnter(done) {
      if (__WEBPACK_IMPORTED_MODULE_9__util__["a" /* default */].isEnterSupported(this.props)) {
        this.transition('enter', done);
      } else {
        done();
      }
    }
  }, {
    key: 'componentWillAppear',
    value: function componentWillAppear(done) {
      if (__WEBPACK_IMPORTED_MODULE_9__util__["a" /* default */].isAppearSupported(this.props)) {
        this.transition('appear', done);
      } else {
        done();
      }
    }
  }, {
    key: 'componentWillLeave',
    value: function componentWillLeave(done) {
      if (__WEBPACK_IMPORTED_MODULE_9__util__["a" /* default */].isLeaveSupported(this.props)) {
        this.transition('leave', done);
      } else {
        // always sync, do not interupt with react component life cycle
        // update hidden -> animate hidden ->
        // didUpdate -> animate leave -> unmount (if animate is none)
        done();
      }
    }
  }, {
    key: 'transition',
    value: function transition(animationType, finishCallback) {
      var _this2 = this;

      var node = __WEBPACK_IMPORTED_MODULE_6_react_dom___default.a.findDOMNode(this);
      var props = this.props;
      var transitionName = props.transitionName;
      var nameIsObj = (typeof transitionName === 'undefined' ? 'undefined' : __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_typeof___default()(transitionName)) === 'object';
      this.stop();
      var end = function end() {
        _this2.stopper = null;
        finishCallback();
      };
      if ((__WEBPACK_IMPORTED_MODULE_8_css_animation__["a" /* isCssAnimationSupported */] || !props.animation[animationType]) && transitionName && props[transitionMap[animationType]]) {
        var name = nameIsObj ? transitionName[animationType] : transitionName + '-' + animationType;
        var activeName = name + '-active';
        if (nameIsObj && transitionName[animationType + 'Active']) {
          activeName = transitionName[animationType + 'Active'];
        }
        this.stopper = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_8_css_animation__["b" /* default */])(node, {
          name: name,
          active: activeName
        }, end);
      } else {
        this.stopper = props.animation[animationType](node, end);
      }
    }
  }, {
    key: 'stop',
    value: function stop() {
      var stopper = this.stopper;
      if (stopper) {
        this.stopper = null;
        stopper.stop();
      }
    }
  }, {
    key: 'render',
    value: function render() {
      return this.props.children;
    }
  }]);

  return AnimateChild;
}(__WEBPACK_IMPORTED_MODULE_5_react___default.a.Component);

AnimateChild.propTypes = {
  children: __WEBPACK_IMPORTED_MODULE_7_prop_types___default.a.any
};
/* harmony default export */ __webpack_exports__["a"] = (AnimateChild);

/***/ }),
/* 146 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = toArrayChildren;
/* harmony export (immutable) */ __webpack_exports__["b"] = findChildInChildrenByKey;
/* harmony export (immutable) */ __webpack_exports__["d"] = findShownChildInChildrenByKey;
/* unused harmony export findHiddenChildInChildrenByKey */
/* harmony export (immutable) */ __webpack_exports__["e"] = isSameChildren;
/* harmony export (immutable) */ __webpack_exports__["c"] = mergeChildren;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);


function toArrayChildren(children) {
  var ret = [];
  __WEBPACK_IMPORTED_MODULE_0_react___default.a.Children.forEach(children, function (child) {
    ret.push(child);
  });
  return ret;
}

function findChildInChildrenByKey(children, key) {
  var ret = null;
  if (children) {
    children.forEach(function (child) {
      if (ret) {
        return;
      }
      if (child && child.key === key) {
        ret = child;
      }
    });
  }
  return ret;
}

function findShownChildInChildrenByKey(children, key, showProp) {
  var ret = null;
  if (children) {
    children.forEach(function (child) {
      if (child && child.key === key && child.props[showProp]) {
        if (ret) {
          throw new Error('two child with same key for <rc-animate> children');
        }
        ret = child;
      }
    });
  }
  return ret;
}

function findHiddenChildInChildrenByKey(children, key, showProp) {
  var found = 0;
  if (children) {
    children.forEach(function (child) {
      if (found) {
        return;
      }
      found = child && child.key === key && !child.props[showProp];
    });
  }
  return found;
}

function isSameChildren(c1, c2, showProp) {
  var same = c1.length === c2.length;
  if (same) {
    c1.forEach(function (child, index) {
      var child2 = c2[index];
      if (child && child2) {
        if (child && !child2 || !child && child2) {
          same = false;
        } else if (child.key !== child2.key) {
          same = false;
        } else if (showProp && child.props[showProp] !== child2.props[showProp]) {
          same = false;
        }
      }
    });
  }
  return same;
}

function mergeChildren(prev, next) {
  var ret = [];

  // For each key of `next`, the list of keys to insert before that key in
  // the combined list
  var nextChildrenPending = {};
  var pendingChildren = [];
  prev.forEach(function (child) {
    if (child && findChildInChildrenByKey(next, child.key)) {
      if (pendingChildren.length) {
        nextChildrenPending[child.key] = pendingChildren;
        pendingChildren = [];
      }
    } else {
      pendingChildren.push(child);
    }
  });

  next.forEach(function (child) {
    if (child && nextChildrenPending.hasOwnProperty(child.key)) {
      ret = ret.concat(nextChildrenPending[child.key]);
    }
    ret.push(child);
  });

  ret = ret.concat(pendingChildren);

  return ret;
}

/***/ }),
/* 147 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_defineProperty__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_defineProperty___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_defineProperty__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_classnames__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_prop_types__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_prop_types__);









var Notice = function (_Component) {
  __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits___default()(Notice, _Component);

  function Notice() {
    var _ref;

    var _temp, _this, _ret;

    __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck___default()(this, Notice);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn___default()(this, (_ref = Notice.__proto__ || Object.getPrototypeOf(Notice)).call.apply(_ref, [this].concat(args))), _this), _this.clearCloseTimer = function () {
      if (_this.closeTimer) {
        clearTimeout(_this.closeTimer);
        _this.closeTimer = null;
      }
    }, _this.close = function () {
      _this.clearCloseTimer();
      _this.props.onClose();
    }, _temp), __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn___default()(_this, _ret);
  }

  __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass___default()(Notice, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _this2 = this;

      if (this.props.duration) {
        this.closeTimer = setTimeout(function () {
          _this2.close();
        }, this.props.duration * 1000);
      }
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      this.clearCloseTimer();
    }
  }, {
    key: 'render',
    value: function render() {
      var _className;

      var props = this.props;
      var componentClass = props.prefixCls + '-notice';
      var className = (_className = {}, __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_defineProperty___default()(_className, '' + componentClass, 1), __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_defineProperty___default()(_className, componentClass + '-closable', props.closable), __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_defineProperty___default()(_className, props.className, !!props.className), _className);
      return __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
        'div',
        { className: __WEBPACK_IMPORTED_MODULE_6_classnames___default()(className), style: props.style },
        __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
          'div',
          { className: componentClass + '-content' },
          props.children
        ),
        props.closable ? __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
          'a',
          { tabIndex: '0', onClick: this.close, className: componentClass + '-close' },
          __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement('span', { className: componentClass + '-close-x' })
        ) : null
      );
    }
  }]);

  return Notice;
}(__WEBPACK_IMPORTED_MODULE_5_react__["Component"]);

Notice.propTypes = {
  duration: __WEBPACK_IMPORTED_MODULE_7_prop_types___default.a.number,
  onClose: __WEBPACK_IMPORTED_MODULE_7_prop_types___default.a.func,
  children: __WEBPACK_IMPORTED_MODULE_7_prop_types___default.a.any
};
Notice.defaultProps = {
  onEnd: function onEnd() {},
  onClose: function onClose() {},

  duration: 1.5,
  style: {
    right: '50%'
  }
};
/* harmony default export */ __webpack_exports__["a"] = (Notice);

/***/ }),
/* 148 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_objectWithoutProperties__ = __webpack_require__(93);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_objectWithoutProperties___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_objectWithoutProperties__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_defineProperty__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_defineProperty___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_defineProperty__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_extends__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_extends___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_extends__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_classCallCheck__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_classCallCheck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_createClass__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_createClass___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_createClass__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_possibleConstructorReturn__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_possibleConstructorReturn___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_possibleConstructorReturn__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_babel_runtime_helpers_inherits__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_babel_runtime_helpers_inherits___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_babel_runtime_helpers_inherits__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_react__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_prop_types__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_react_dom__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_react_dom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_react_dom__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_rc_animate__ = __webpack_require__(144);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_rc_util_es_createChainedFunction__ = __webpack_require__(149);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_classnames__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__Notice__ = __webpack_require__(147);















var seed = 0;
var now = Date.now();

function getUuid() {
  return 'rcNotification_' + now + '_' + seed++;
}

var Notification = function (_Component) {
  __WEBPACK_IMPORTED_MODULE_6_babel_runtime_helpers_inherits___default()(Notification, _Component);

  function Notification() {
    var _ref;

    var _temp, _this, _ret;

    __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_classCallCheck___default()(this, Notification);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = __WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_possibleConstructorReturn___default()(this, (_ref = Notification.__proto__ || Object.getPrototypeOf(Notification)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      notices: []
    }, _this.add = function (notice) {
      var key = notice.key = notice.key || getUuid();
      _this.setState(function (previousState) {
        var notices = previousState.notices;
        if (!notices.filter(function (v) {
          return v.key === key;
        }).length) {
          return {
            notices: notices.concat(notice)
          };
        }
      });
    }, _this.remove = function (key) {
      _this.setState(function (previousState) {
        return {
          notices: previousState.notices.filter(function (notice) {
            return notice.key !== key;
          })
        };
      });
    }, _temp), __WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_possibleConstructorReturn___default()(_this, _ret);
  }

  __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_createClass___default()(Notification, [{
    key: 'getTransitionName',
    value: function getTransitionName() {
      var props = this.props;
      var transitionName = props.transitionName;
      if (!transitionName && props.animation) {
        transitionName = props.prefixCls + '-' + props.animation;
      }
      return transitionName;
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this,
          _className;

      var props = this.props;
      var noticeNodes = this.state.notices.map(function (notice) {
        var onClose = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_11_rc_util_es_createChainedFunction__["a" /* default */])(_this2.remove.bind(_this2, notice.key), notice.onClose);
        return __WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_13__Notice__["a" /* default */],
          __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_extends___default()({
            prefixCls: props.prefixCls
          }, notice, {
            onClose: onClose
          }),
          notice.content
        );
      });
      var className = (_className = {}, __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_defineProperty___default()(_className, props.prefixCls, 1), __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_defineProperty___default()(_className, props.className, !!props.className), _className);
      return __WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement(
        'div',
        { className: __WEBPACK_IMPORTED_MODULE_12_classnames___default()(className), style: props.style },
        __WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_10_rc_animate__["a" /* default */],
          { transitionName: this.getTransitionName() },
          noticeNodes
        )
      );
    }
  }]);

  return Notification;
}(__WEBPACK_IMPORTED_MODULE_7_react__["Component"]);

Notification.propTypes = {
  prefixCls: __WEBPACK_IMPORTED_MODULE_8_prop_types___default.a.string,
  transitionName: __WEBPACK_IMPORTED_MODULE_8_prop_types___default.a.string,
  animation: __WEBPACK_IMPORTED_MODULE_8_prop_types___default.a.oneOfType([__WEBPACK_IMPORTED_MODULE_8_prop_types___default.a.string, __WEBPACK_IMPORTED_MODULE_8_prop_types___default.a.object]),
  style: __WEBPACK_IMPORTED_MODULE_8_prop_types___default.a.object
};
Notification.defaultProps = {
  prefixCls: 'rc-notification',
  animation: 'fade',
  style: {
    top: 65,
    left: '50%'
  }
};


Notification.newInstance = function newNotificationInstance(properties) {
  var _ref2 = properties || {},
      getContainer = _ref2.getContainer,
      props = __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_objectWithoutProperties___default()(_ref2, ['getContainer']);

  var div = void 0;
  if (getContainer) {
    div = getContainer();
  } else {
    div = document.createElement('div');
    document.body.appendChild(div);
  }
  var notification = __WEBPACK_IMPORTED_MODULE_9_react_dom___default.a.render(__WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement(Notification, props), div);
  return {
    notice: function notice(noticeProps) {
      notification.add(noticeProps);
    },
    removeNotice: function removeNotice(key) {
      notification.remove(key);
    },

    component: notification,
    destroy: function destroy() {
      __WEBPACK_IMPORTED_MODULE_9_react_dom___default.a.unmountComponentAtNode(div);
      if (!getContainer) {
        document.body.removeChild(div);
      }
    }
  };
};

/* harmony default export */ __webpack_exports__["a"] = (Notification);

/***/ }),
/* 149 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = createChainedFunction;
/**
 * Safe chained function
 *
 * Will only create a new function if needed,
 * otherwise will pass back existing functions or null.
 *
 * @returns {function|null}
 */
function createChainedFunction() {
  var args = [].slice.call(arguments, 0);
  if (args.length === 1) {
    return args[0];
  }

  return function chainedFunction() {
    for (var i = 0; i < args.length; i++) {
      if (args[i] && args[i].apply) {
        args[i].apply(this, arguments);
      }
    }
  };
}

/***/ }),
/* 150 */
/***/ (function(module, exports, __webpack_require__) {

var React = __webpack_require__(2);
var component;
var desc = {
    loadComponent: function(callback) {
        if(!component) {
            __webpack_require__.e/* require.ensure */(0).then((function() {/* WEBPACK VAR INJECTION */(function(module) {
                var module = __webpack_require__(152);
                component = module.__esModule ? module.default : module;
                if(callback) callback(component);
            
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(155)(module)))}).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
        } else if(callback) callback(component);
        return component;
    }
};
var mixinReactProxy = __webpack_require__(151);
mixinReactProxy(React, desc);
module.exports = React.createClass(desc);
module.exports.Mixin = desc;

/***/ }),
/* 151 */
/***/ (function(module, exports) {

module.exports = function (React, desc) {
  desc.displayName = "ReactRouterProxy";
  desc.getInitialState = function () {
    return { component: this.loadComponent() };
  };
  desc.componentDidMount = function () {
    this.___isMounted = true;
    if (!this.state.component) {
      this.loadComponent(function (component) {
        if (this.___isMounted) {
          this.setState({ component: component });
        }
      }.bind(this));
    }
  };
  desc.componentWillUnmount = function () {
    this.___isMounted = false;
  };
  desc.render = function () {
    var Component = this.state.component;
    if (Component) {
      return React.createElement(Component, this.props, this.props.children);
    } else if (this.renderUnavailable) {
      return this.renderUnavailable();
    }
    return null;
  };
};


/***/ }),
/* 152 */,
/* 153 */
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function(useSourceMap) {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		return this.map(function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if(item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		}).join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};

function cssWithMappingToString(item, useSourceMap) {
	var content = item[1] || '';
	var cssMapping = item[3];
	if (!cssMapping) {
		return content;
	}

	if (useSourceMap && typeof btoa === 'function') {
		var sourceMapping = toComment(cssMapping);
		var sourceURLs = cssMapping.sources.map(function (source) {
			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */'
		});

		return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
	}

	return [content].join('\n');
}

// Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
	// eslint-disable-next-line no-undef
	var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
	var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

	return '/*# ' + data + ' */';
}


/***/ }),
/* 154 */
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
var stylesInDom = {},
	memoize = function(fn) {
		var memo;
		return function () {
			if (typeof memo === "undefined") memo = fn.apply(this, arguments);
			return memo;
		};
	},
	isOldIE = memoize(function() {
		return /msie [6-9]\b/.test(self.navigator.userAgent.toLowerCase());
	}),
	getHeadElement = memoize(function () {
		return document.head || document.getElementsByTagName("head")[0];
	}),
	singletonElement = null,
	singletonCounter = 0,
	styleElementsInsertedAtTop = [];

module.exports = function(list, options) {
	if(typeof DEBUG !== "undefined" && DEBUG) {
		if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};
	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (typeof options.singleton === "undefined") options.singleton = isOldIE();

	// By default, add <style> tags to the bottom of <head>.
	if (typeof options.insertAt === "undefined") options.insertAt = "bottom";

	var styles = listToStyles(list);
	addStylesToDom(styles, options);

	return function update(newList) {
		var mayRemove = [];
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			domStyle.refs--;
			mayRemove.push(domStyle);
		}
		if(newList) {
			var newStyles = listToStyles(newList);
			addStylesToDom(newStyles, options);
		}
		for(var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];
			if(domStyle.refs === 0) {
				for(var j = 0; j < domStyle.parts.length; j++)
					domStyle.parts[j]();
				delete stylesInDom[domStyle.id];
			}
		}
	};
}

function addStylesToDom(styles, options) {
	for(var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];
		if(domStyle) {
			domStyle.refs++;
			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}
			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];
			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}
			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles(list) {
	var styles = [];
	var newStyles = {};
	for(var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};
		if(!newStyles[id])
			styles.push(newStyles[id] = {id: id, parts: [part]});
		else
			newStyles[id].parts.push(part);
	}
	return styles;
}

function insertStyleElement(options, styleElement) {
	var head = getHeadElement();
	var lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];
	if (options.insertAt === "top") {
		if(!lastStyleElementInsertedAtTop) {
			head.insertBefore(styleElement, head.firstChild);
		} else if(lastStyleElementInsertedAtTop.nextSibling) {
			head.insertBefore(styleElement, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			head.appendChild(styleElement);
		}
		styleElementsInsertedAtTop.push(styleElement);
	} else if (options.insertAt === "bottom") {
		head.appendChild(styleElement);
	} else {
		throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
	}
}

function removeStyleElement(styleElement) {
	styleElement.parentNode.removeChild(styleElement);
	var idx = styleElementsInsertedAtTop.indexOf(styleElement);
	if(idx >= 0) {
		styleElementsInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement(options) {
	var styleElement = document.createElement("style");
	styleElement.type = "text/css";
	insertStyleElement(options, styleElement);
	return styleElement;
}

function createLinkElement(options) {
	var linkElement = document.createElement("link");
	linkElement.rel = "stylesheet";
	insertStyleElement(options, linkElement);
	return linkElement;
}

function addStyle(obj, options) {
	var styleElement, update, remove;

	if (options.singleton) {
		var styleIndex = singletonCounter++;
		styleElement = singletonElement || (singletonElement = createStyleElement(options));
		update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
		remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
	} else if(obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function") {
		styleElement = createLinkElement(options);
		update = updateLink.bind(null, styleElement);
		remove = function() {
			removeStyleElement(styleElement);
			if(styleElement.href)
				URL.revokeObjectURL(styleElement.href);
		};
	} else {
		styleElement = createStyleElement(options);
		update = applyToTag.bind(null, styleElement);
		remove = function() {
			removeStyleElement(styleElement);
		};
	}

	update(obj);

	return function updateStyle(newObj) {
		if(newObj) {
			if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
				return;
			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;
		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag(styleElement, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (styleElement.styleSheet) {
		styleElement.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = styleElement.childNodes;
		if (childNodes[index]) styleElement.removeChild(childNodes[index]);
		if (childNodes.length) {
			styleElement.insertBefore(cssNode, childNodes[index]);
		} else {
			styleElement.appendChild(cssNode);
		}
	}
}

function applyToTag(styleElement, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		styleElement.setAttribute("media", media)
	}

	if(styleElement.styleSheet) {
		styleElement.styleSheet.cssText = css;
	} else {
		while(styleElement.firstChild) {
			styleElement.removeChild(styleElement.firstChild);
		}
		styleElement.appendChild(document.createTextNode(css));
	}
}

function updateLink(linkElement, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	if(sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = linkElement.href;

	linkElement.href = URL.createObjectURL(blob);

	if(oldSrc)
		URL.revokeObjectURL(oldSrc);
}


/***/ })
],[86]);