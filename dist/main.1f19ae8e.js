// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"test.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _default = [{
  title: '前置问题',
  text: ['简单的做个自我介绍', '简单的介绍一下你的项目', '之前的工作主要做一些什么']
}, {
  title: 'HTML押题',
  random: 2,
  text: ['你是如何理解HTML语义化的？（举例）', 'meta viewport 是做什么的，怎么写？（举例）', '你用过哪些HTML5标签（举例）', 'H5是什么（概念）']
}, {
  title: 'CSS押题',
  random: 2,
  text: ['两种盒模型分别说一下。', '如何垂直居中？', 'flex 怎么用，常用属性有哪些？', 'BFC 是什么？', 'CSS 选择器优先级？', '如何清除浮动？']
}, {
  title: 'JS押题',
  random: 5,
  text: ['ES 6 语法知道哪些，分别怎么用？', 'Promise、Promise.all、Promise.race 分别怎么用？', '手写函数防抖和函数节流', '手写AJAX', '这段代码里的 this 是什么？', '闭包/立即执行函数是什么？', '什么是 JSONP，什么是 CORS，什么是跨域？', 'async/await 怎么用，如何捕获异常？', '如何实现深拷贝？', '如何用正则实现 trim()？', '不用 class 如何实现继承？用 class 又如何实现？', '如何实现数组去重？', '手写一个 Promise']
}, {
  title: 'Vue押题',
  random: 2,
  text: ['watch 和 computed 和 methods 区别是什么？', 'Vue 有哪些生命周期钩子函数？分别有什么用？', 'Vue 如何实现组件间通信？', 'Vue 数据响应式怎么做到的？（双向绑定的原理）', 'Vue.set 是做什么用的？', 'Vuex 的用法？', 'VueRouter 的用法？', '路由守卫是什么？']
}, {
  title: '开放性问题',
  random: 2,
  text: ['说说你对行业、技术发展趋势的看法。', '说说你在工作中遇到的最难的问题，以及你是如何解决该问题的。', '为什么从上一家公司离职？', '你最近是否参加了培训课程。', '你还有什么问题要问的吗。']
}];
exports.default = _default;
},{}],"main.js":[function(require,module,exports) {
"use strict";

var _test = _interopRequireDefault(require("./test.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

var reset = get_el('#resetContent');
var app = get_el('#app');
var pdf = get_el('#printPDF');
addChapter(_test.default); // 重置按钮

reset.onclick = function () {
  addChapter(_test.default);
};

pdf.onclick = function () {
  window.print();
}; // 根据数据随机显示内容


function addChapter(data) {
  var isData = [];

  if (type(data) === 'array' || type(data) === 'object') {
    isData = Array.from(data);
  } else {
    console.error('请传入一个「数组」或「伪数组」');
  } // let isData = []


  var numberIsQuestions = []; // isData.push(...data)

  var parent = '',
      template = '',
      ulContent = '',
      title = ''; // problemList：要展示的问题，getQuestionList：要展示的所有数据

  var problemList = [],
      getQuestionList = [];
  var ques = numberIsQuestions;
  isData.forEach(function (item, index) {
    // 清空之前的内容
    ulContent = '';
    title = item.title; //随机抽取指定数量的题目

    if (!!item.random) {
      var number = parseInt(item.random);
      problemList = randomArray(item.text, number).result;
      getQuestionList[index] = {
        title: title,
        text: _toConsumableArray(problemList)
      };
    } else {
      problemList = item.text;
      getQuestionList[index] = {
        title: title,
        text: _toConsumableArray(problemList)
      };
    }

    problemList.forEach(function (text) {
      ulContent += "<li>".concat(text, "</li>");
    }); // 将抽取后的题目和大标题放入模板中

    template = "\n        <section class=\"part\">\n            <h2>".concat(title, "</h2>\n            <ol>").concat(ulContent, "</ol>\n        </section>\n        "); // 将模板添加到一个div中

    parent += template;
  });
  app.innerHTML = parent;
  return getQuestionList; // 返回当前随机的后的问题
} // 获取元素


function get_el(element) {
  return document.querySelector(element);
} // 随机抽取题目


function randomArray(array, number) {
  var isArray = Array.from(array);
  var result = [];

  for (var i = 0; i < number; i++) {
    var single = Math.floor(Math.random() * isArray.length);
    result.push(isArray.splice(single, 1)[0]);
  }

  return {
    result: result,
    // 随机抽取后的数组
    after: isArray // 原数组的拷贝

  };
} // // 将字符串格式的HTML转换为DOM元素
// function changeLabel(element){
//     let div = document.createElement('div')
//     div.innerHTML = element
//     return div.firstElementChild
// }
// // 根据存储名称获取 localStorage 的值
// function getLocal(key){
//     return JSON.parse(localStorage.getItem(key))
// }
// // 设置/存储 localStorage 的值
// function setLocal(key, data){
//     localStorage.setItem(key, JSON.stringify(data))
// }
// 判断数据类型


function type(o) {
  var s = Object.prototype.toString.call(o);
  return s.match(/\[object (.*?)\]/)[1].toLowerCase();
}

;
},{"./test.js":"test.js"}],"C:/Users/18348/AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "14841" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["C:/Users/18348/AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/hmr-runtime.js","main.js"], null)
//# sourceMappingURL=/main.1f19ae8e.js.map