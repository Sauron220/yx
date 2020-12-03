(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["yx"] = factory();
	else
		root["yx"] = factory();
})((typeof self !== 'undefined' ? self : this), function() {
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
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "fb15");
/******/ })
/************************************************************************/
/******/ ({

/***/ "8875":
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;// addapted from the document.currentScript polyfill by Adam Miller
// MIT license
// source: https://github.com/amiller-gh/currentScript-polyfill

// added support for Firefox https://bugzilla.mozilla.org/show_bug.cgi?id=1620505

(function (root, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else {}
}(typeof self !== 'undefined' ? self : this, function () {
  function getCurrentScript () {
    var descriptor = Object.getOwnPropertyDescriptor(document, 'currentScript')
    // for chrome
    if (!descriptor && 'currentScript' in document && document.currentScript) {
      return document.currentScript
    }

    // for other browsers with native support for currentScript
    if (descriptor && descriptor.get !== getCurrentScript && document.currentScript) {
      return document.currentScript
    }
  
    // IE 8-10 support script readyState
    // IE 11+ & Firefox support stack trace
    try {
      throw new Error();
    }
    catch (err) {
      // Find the second match for the "at" string to get file src url from stack.
      var ieStackRegExp = /.*at [^(]*\((.*):(.+):(.+)\)$/ig,
        ffStackRegExp = /@([^@]*):(\d+):(\d+)\s*$/ig,
        stackDetails = ieStackRegExp.exec(err.stack) || ffStackRegExp.exec(err.stack),
        scriptLocation = (stackDetails && stackDetails[1]) || false,
        line = (stackDetails && stackDetails[2]) || false,
        currentLocation = document.location.href.replace(document.location.hash, ''),
        pageSource,
        inlineScriptSourceRegExp,
        inlineScriptSource,
        scripts = document.getElementsByTagName('script'); // Live NodeList collection
  
      if (scriptLocation === currentLocation) {
        pageSource = document.documentElement.outerHTML;
        inlineScriptSourceRegExp = new RegExp('(?:[^\\n]+?\\n){0,' + (line - 2) + '}[^<]*<script>([\\d\\D]*?)<\\/script>[\\d\\D]*', 'i');
        inlineScriptSource = pageSource.replace(inlineScriptSourceRegExp, '$1').trim();
      }
  
      for (var i = 0; i < scripts.length; i++) {
        // If ready state is interactive, return the script tag
        if (scripts[i].readyState === 'interactive') {
          return scripts[i];
        }
  
        // If src matches, return the script tag
        if (scripts[i].src === scriptLocation) {
          return scripts[i];
        }
  
        // If inline source matches, return the script tag
        if (
          scriptLocation === currentLocation &&
          scripts[i].innerHTML &&
          scripts[i].innerHTML.trim() === inlineScriptSource
        ) {
          return scripts[i];
        }
      }
  
      // If no match, return null
      return null;
    }
  };

  return getCurrentScript
}));


/***/ }),

/***/ "fb15":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/setPublicPath.js
// This file is imported into lib/wc client bundles.

if (typeof window !== 'undefined') {
  var currentScript = window.document.currentScript
  if (true) {
    var getCurrentScript = __webpack_require__("8875")
    currentScript = getCurrentScript()

    // for backward compatibility, because previously we directly included the polyfill
    if (!('currentScript' in document)) {
      Object.defineProperty(document, 'currentScript', { get: getCurrentScript })
    }
  }

  var src = currentScript && currentScript.src.match(/(.+\/)[^/]+\.js(\?.*)?$/)
  if (src) {
    __webpack_require__.p = src[1] // eslint-disable-line
  }
}

// Indicate to webpack that this file can be concatenated
/* harmony default export */ var setPublicPath = (null);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"4b7b07b5-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./packages/block/src/main.vue?vue&type=template&id=5f346892&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"yx-block"},[(!_vm.sourceData)?_c('div',[(_vm.ableClick)?_c('h3',{staticClass:"yx-block__cursor yx-text__link",on:{"click":_vm.modal}},[_vm._v(" "+_vm._s(_vm.title)+" ")]):_c('h3',[_vm._v(_vm._s(_vm.title))]),_vm._t("default")],2):_c('el-collapse',{attrs:{"value":_vm.open}},[_c('el-collapse-item',{attrs:{"name":"1"}},[_c('template',{slot:"title"},[(_vm.ableClick)?_c('h3',{staticClass:"yx-block__cursor yx-text__link",on:{"click":_vm.modal}},[_vm._v(" "+_vm._s(_vm.title)+" ")]):_c('h3',[_vm._v(_vm._s(_vm.title))])]),_vm._t("default")],2)],1)],1)}
var staticRenderFns = []


// CONCATENATED MODULE: ./packages/block/src/main.vue?vue&type=template&id=5f346892&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./packages/block/src/main.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var mainvue_type_script_lang_js_ = ({
  name: 'YxBlock',
  props: {
    title: {
      type: String,
      default: ''
    },
    ableClick: {
      type: Boolean,
      default: false
    },
    sourceData: {
      type: [Object, Array],
      default: () => {}
    }
  },
  computed: {
    open () {
      if (!this.sourceData && this.sourceData.length <= 0) {
        return ''
      } else {
        const arr = Object.values(this.sourceData)
        const newArr = arr.filter(item => item) // 去掉空值
        if (newArr.length > 0) {
          const fora1 = newArr.reduce((pre, cur) => {
            const curArr = cur instanceof Object ? Object.values(cur) : cur
            return pre.concat(curArr)
          }, []).filter(item => item)

          return fora1.length > 0 ? '1' : ''
        } else {
          return ''
        }
      }
    }
  },
  methods: {
    modal () {
      this.$emit('show')
    },
    formatterVal (arr) {
      arr.foreach(item => {})
      return arr.map(item => {
        if (item && item instanceof Object) {
          return Object.values(item)
        } else if (item) {
          return item
        } else {
          return ''
        }
      })
    }
  }
});

// CONCATENATED MODULE: ./packages/block/src/main.vue?vue&type=script&lang=js&
 /* harmony default export */ var src_mainvue_type_script_lang_js_ = (mainvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode /* vue-cli only */
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () {
        injectStyles.call(
          this,
          (options.functional ? this.parent : this).$root.$options.shadowRoot
        )
      }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functional component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}

// CONCATENATED MODULE: ./packages/block/src/main.vue





/* normalize component */

var component = normalizeComponent(
  src_mainvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var main = (component.exports);
// CONCATENATED MODULE: ./packages/block/index.js
// 导入组件


// 为组件提供 install 安装方法，供按需引入
main.install = function (Vue) {
  Vue.component(main.name, main)
}

// 默认导出组件
/* harmony default export */ var block = (main);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"4b7b07b5-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./packages/page-form/src/main.vue?vue&type=template&id=4882fad8&
var mainvue_type_template_id_4882fad8_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"yx-page-form"},[_c('el-form',{ref:"form",attrs:{"model":_vm.data,"rules":_vm.rules,"label-width":_vm.labelWidth,"label-position":_vm.labelPosition}},[_c('el-row',{attrs:{"type":"flex","align":"bottom","gutter":_vm.rowGutter}},[_vm._l((_vm.getConfigList()),function(item,index){return _c('el-col',{key:index,attrs:{"xs":item.colXs ? item.colXs : _vm.colXs,"sm":item.colSm ? item.colSm : _vm.colSm,"md":item.colMd ? item.colMd : _vm.colMd,"lg":item.colLg ? item.colLg : _vm.colLg}},[(item.type === 'slot' && item.noForm)?[_vm._t('form-' + item.prop)]:_c('el-form-item',{key:((item.label) + "-" + (item.noValid)),attrs:{"prop":item.disabled || item.noValid ? '' : item.prop,"label":item.label}},[(item.type === 'slot' && !item.noForm)?[_vm._t('form-' + item.prop)]:_vm._e(),(['input', 'password'].includes(item.type))?_c('el-input',{key:item.prop,attrs:{"type":item.type,"disabled":item.disabled,"placeholder":item.placeholder ? item.placeholder : _vm.getPlaceholder(item)},on:{"focus":function($event){return _vm.handleEvent(item.event)},"change":function($event){return _vm.handleEvent(item.event, _vm.data[item.prop])}},model:{value:(_vm.data[item.prop]),callback:function ($$v) {_vm.$set(_vm.data, item.prop, $$v)},expression:"data[item.prop]"}}):(['number'].includes(item.type))?_c('el-input',{key:item.prop,attrs:{"type":item.type,"disabled":item.disabled,"placeholder":_vm.getPlaceholder(item)},on:{"focus":function($event){return _vm.handleEvent(item.event)},"change":function($event){return _vm.handleEvent(item.event, _vm.data[item.prop])}},model:{value:(_vm.data[item.prop]),callback:function ($$v) {_vm.$set(_vm.data, item.prop, _vm._n($$v))},expression:"data[item.prop]"}}):_vm._e(),(item.type === 'inputNumber')?_c('el-input-number',{staticStyle:{"width":"100%"},attrs:{"min":item.min,"max":item.max,"controls":item.controls},on:{"change":function($event){return _vm.handleEvent(item.event)}},model:{value:(_vm.data[item.prop]),callback:function ($$v) {_vm.$set(_vm.data, item.prop, $$v)},expression:"data[item.prop]"}}):(item.type === 'textarea')?_c('el-input',{key:item.prop,attrs:{"type":item.type,"disabled":item.disabled,"placeholder":_vm.getPlaceholder(item),"autosize":item.autosize || { minRows: 2, maxRows: 10 }},on:{"focus":function($event){return _vm.handleEvent(item.event)}},model:{value:(_vm.data[item.prop]),callback:function ($$v) {_vm.$set(_vm.data, item.prop, (typeof $$v === 'string'? $$v.trim(): $$v))},expression:"data[item.prop]"}}):(item.type === 'select')?_c('el-select',{key:item.prop,attrs:{"default-first-option":"","disabled":item.disabled,"clearable":item.clearable ? item.clearable : true,"filterable":item.filterable,"placeholder":_vm.getPlaceholder(item)},on:{"change":function($event){return _vm.handleEvent(item.event, _vm.data[item.prop], item)}},model:{value:(_vm.data[item.prop]),callback:function ($$v) {_vm.$set(_vm.data, item.prop, $$v)},expression:"data[item.prop]"}},_vm._l((_vm.selectListOption(
                _vm.listTypeInfo[item.list]
              )),function(childItem,childIndex){return _c('el-option',{key:childIndex,attrs:{"label":childItem.label || childItem[item.optLabel],"value":childItem.value || childItem[item.optVal]}})}),1):(item.type === 'multselect')?_c('el-select',{key:item.prop,attrs:{"disabled":item.disabled,"multiple":"","clearable":item.clearable ? item.clearable : true,"filterable":item.filterable,"placeholder":_vm.getPlaceholder(item)},on:{"change":function($event){return _vm.handleEvent(item.event, _vm.data[item.prop], item)}},model:{value:(_vm.data[item.prop]),callback:function ($$v) {_vm.$set(_vm.data, item.prop, $$v)},expression:"data[item.prop]"}},_vm._l((_vm.listTypeInfo[item.list]),function(childItem,childIndex){return _c('el-option',{key:childIndex,attrs:{"label":childItem.label || childItem[item.optLabel],"value":childItem.value || childItem[item.optVal]}})}),1):(item.type === 'date')?_c('el-date-picker',{key:item.prop,attrs:{"type":item.dateType,"picker-options":item.TimePickerOptions,"clearable":item.clearable,"disabled":item.disabled,"value-format":item.valueFormat || 'yyyy-MM-dd',"format":item.format,"start-placeholder":"开始日期","end-placeholder":"结束日期","placeholder":_vm.getPlaceholder(item)},on:{"focus":function($event){return _vm.handleEvent(item.event)}},model:{value:(_vm.data[item.prop]),callback:function ($$v) {_vm.$set(_vm.data, item.prop, $$v)},expression:"data[item.prop]"}}):(item.type === 'time')?_c('el-time-select',{key:item.prop,attrs:{"placeholder":_vm.getPlaceholder(item),"picker-options":item.TimePickerOptions},on:{"focus":function($event){return _vm.handleEvent(item.event)}},model:{value:(_vm.data[item.prop]),callback:function ($$v) {_vm.$set(_vm.data, item.prop, $$v)},expression:"data[item.prop]"}}):(item.type === 'atime')?_c('el-time-picker',{key:item.prop,attrs:{"is-range":item.isRange,"placeholder":_vm.getPlaceholder(item),"value-format":item.valueFormat,"picker-options":item.TimePickerOptions},on:{"focus":function($event){return _vm.handleEvent(item.event)}},model:{value:(_vm.data[item.prop]),callback:function ($$v) {_vm.$set(_vm.data, item.prop, $$v)},expression:"data[item.prop]"}}):_vm._e(),(item.type === 'text')?_c('span',[_vm._v(_vm._s(_vm.data[item.prop]))]):_vm._e()],2)],2)}),(_vm.operate.length !== 0)?_c('el-col',{class:{ 'yx-col-auto': _vm.isAuto },attrs:{"span":24}},[_c('div',{staticClass:"yx-search-btn"},[_vm._l((_vm.operate),function(item){return [(item.permission)?_c('el-button',{directives:[{name:"hasPermi",rawName:"v-hasPermi",value:([item.permission]),expression:"[item.permission]"}],key:item.name,attrs:{"type":item.type,"icon":item.icon,"loading":item.loading,"disabled":item.disabled},on:{"click":item.handleClick}},[_vm._v(_vm._s(item.name))]):_vm._e(),(!item.permission)?_c('el-button',{key:item.name,attrs:{"type":item.type,"icon":item.icon,"loading":item.loading,"disabled":item.disabled},on:{"click":item.handleClick}},[_vm._v(_vm._s(item.name))]):_vm._e()]})],2)]):_vm._e(),(_vm.operateClass)?_c('el-col',{class:_vm.operateClass},[_c('el-form-item',[_vm._t("operate")],2)],1):_vm._e()],2)],1)],1)}
var mainvue_type_template_id_4882fad8_staticRenderFns = []


// CONCATENATED MODULE: ./packages/page-form/src/main.vue?vue&type=template&id=4882fad8&

// CONCATENATED MODULE: ./src/utils/index.js
/**
 * 判断类型
 * @param {any} param
 * @return {string} eq. string, array
 * */
const type = (param) => {
  return Object.prototype.toString.call(param).match(/\[object (.*?)\]/)[1].toLowerCase()
}
/**
 * 时间格式化
 * @param {any} param
 * @return {string} eq. string, array
 * */
function parseTime (time, pattern) {
  if (arguments.length === 0) {
    return null
  }
  const format = pattern || '{y}-{m}-{d} {h}:{i}:{s}'
  let date
  if (typeof time === 'object') {
    date = time
  } else {
    if (typeof time === 'string' && /^[0-9]+$/.test(time)) {
      time = parseInt(time)
    }
    if (typeof time === 'number' && time.toString().length === 10) {
      time = time * 1000
    }
    date = new Date(time)
  }
  const formatObj = {
    y: date.getFullYear(),
    m: date.getMonth() + 1,
    d: date.getDate(),
    h: date.getHours(),
    i: date.getMinutes(),
    s: date.getSeconds(),
    a: date.getDay()
  }
  const timeStr = format.replace(/{(y|m|d|h|i|s|a)+}/g, (result, key) => {
    let value = formatObj[key]
    // Note: getDay() returns 0 on Sunday
    if (key === 'a') {
      return ['日', '一', '二', '三', '四', '五', '六'][value]
    }
    if (result.length > 0 && value < 10) {
      value = '0' + value
    }
    return value || 0
  })
  return timeStr
}

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./packages/page-form/src/main.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ var page_form_src_mainvue_type_script_lang_js_ = ({
  name: 'YxPageForm',
  props: {
    //  列间距
    rowGutter: {
      type: Number,
      default: 20
    },
    //
    colXs: {
      type: Number,
      default: 24
    },
    colSm: {
      type: Number,
      default: 12
    },
    colMd: {
      type: Number,
      default: 8
    },
    colLg: {
      type: Number,
      default: 4
    },
    // 表单数据
    data: {
      type: Object,
      default: () => ({})
    },
    // 相关字段
    fieldList: {
      type: Array,
      default: () => []
    },
    // 验证规则
    rules: {
      type: Object,
      default: () => ({})
    },
    // 相关的列表
    listTypeInfo: {
      type: Object,
      default: () => ({})
    },
    // label宽度
    labelWidth: {
      type: String,
      default: '120px'
    },
    // label位置
    labelPosition: {
      type: String,
      default: 'top'
    },
    refObj: {
      type: Object,
      default: () => ({})
    },
    operate: {
      type: Array,
      default: () => []
    },
    operateClass: {
      type: String,
      default: ''
    }
  },
  data () {
    return {}
  },
  computed: {
    isAuto () {
      return this.fieldList.length < 24 / this.colLg
    }
  },
  watch: {
    data: {
      handler: function (val) {
        // 将form实例返回到父级
        this.$emit('update:refObj', this.$refs.form)
      },
      deep: true // 深度监听
    }
  },
  mounted () {
    // 将form实例返回到父级
    this.$emit('update:refObj', this.$refs.form)
  },
  methods: {
    selectListOption (arr) {
      if (!arr) return
      const item = arr[0]
      if (type(item) === 'string') {
        return arr.map((val) => ({ label: val, value: val }))
      } else {
        return arr
      }
    },
    // 获取字段列表
    getConfigList () {
      return this.fieldList.filter(
        (item) =>
          !item.hasOwnProperty('show') ||
          (item.hasOwnProperty('show') && item.show)
      )
    },
    // 得到placeholder的显示
    getPlaceholder (row) {
      let placeholder
      if (row.type === 'input' || row.type === 'textarea') {
        placeholder = '请输入' + row.label
      } else if (
        row.type === 'select' ||
        row.type === 'time' ||
        row.type === 'date'
      ) {
        placeholder = '请选择' + row.label
      } else {
        placeholder = row.label
      }
      return placeholder
    },
    // 绑定的相关事件
    handleEvent (event, data, item) {
      this.$emit('handleEvent', event, data, item)
    },
    // 派发按钮点击事件
    handleClick (event, data) {
      this.$emit('handleClick', event, data)
    }
  }
});

// CONCATENATED MODULE: ./packages/page-form/src/main.vue?vue&type=script&lang=js&
 /* harmony default export */ var packages_page_form_src_mainvue_type_script_lang_js_ = (page_form_src_mainvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./packages/page-form/src/main.vue





/* normalize component */

var main_component = normalizeComponent(
  packages_page_form_src_mainvue_type_script_lang_js_,
  mainvue_type_template_id_4882fad8_render,
  mainvue_type_template_id_4882fad8_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var src_main = (main_component.exports);
// CONCATENATED MODULE: ./packages/page-form/index.js


src_main.install = function (Vue) {
  Vue.component(src_main.name, src_main)
}

/* harmony default export */ var page_form = (src_main);

// CONCATENATED MODULE: ./src/index.js



// 存储组件列表
const components = [
  block,
  page_form
]

// 定义 install 方法，接收 Vue 作为参数。如果使用 use 注册插件，则所有的组件都将被注册
const install = function (Vue) {
  // 判断是否可以安装
  if (install.installed) return
  // 遍历注册全局组件
  components.map(component => Vue.component(component.name, component))
}

// 判断是否是直接引入文件
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

/* harmony default export */ var src_0 = ({
  version: '1.0.0-1',
  // 导出的对象必须具有 install，才能被 Vue.use() 方法安装
  install,
  // 以下是具体的组件列表
  Block: block,
  PageForm: page_form
});

// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/entry-lib.js


/* harmony default export */ var entry_lib = __webpack_exports__["default"] = (src_0);



/***/ })

/******/ })["default"];
});