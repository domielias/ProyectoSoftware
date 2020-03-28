/******/ (function(modules) { // webpackBootstrap
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
/******/ 	__webpack_require__.p = "/packs/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./app/javascript/packs/jquery.overlayScrollbars.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./app/javascript/packs/jquery.overlayScrollbars.js":
/*!**********************************************************!*\
  !*** ./app/javascript/packs/jquery.overlayScrollbars.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
 * OverlayScrollbars
 * https://github.com/KingSora/OverlayScrollbars
 *
 * Version: 1.10.0
 *
 * Copyright KingSora | Rene Haas.
 * https://github.com/KingSora
 *
 * Released under the MIT license.
 * Date: 11.10.2019
 */
console.log("Se cargo");

(function (global, factory) {
  if (true) !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (framework) {
    return factory(global, global.document, undefined, framework);
  }).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));else {}
})(typeof window !== 'undefined' ? window : this, function (window, document, undefined, framework) {
  'use strict';

  var PLUGINNAME = 'OverlayScrollbars';
  var TYPES = {
    o: 'object',
    f: 'function',
    a: 'array',
    s: 'string',
    b: 'boolean',
    n: 'number',
    u: 'undefined',
    z: 'null' //d : 'date',
    //e : 'error',
    //r : 'regexp',
    //y : 'symbol'

  };
  var LEXICON = {
    c: 'class',
    s: 'style',
    i: 'id',
    l: 'length',
    p: 'prototype',
    oH: 'offsetHeight',
    cH: 'clientHeight',
    sH: 'scrollHeight',
    oW: 'offsetWidth',
    cW: 'clientWidth',
    sW: 'scrollWidth',
    hOP: 'hasOwnProperty',
    bCR: 'getBoundingClientRect'
  };

  var VENDORS = function () {
    //https://developer.mozilla.org/en-US/docs/Glossary/Vendor_Prefix
    var jsCache = {};
    var cssCache = {};
    var cssPrefixes = ['-webkit-', '-moz-', '-o-', '-ms-'];
    var jsPrefixes = ['WebKit', 'Moz', 'O', 'MS'];

    function firstLetterToUpper(str) {
      return str.charAt(0).toUpperCase() + str.slice(1);
    }

    return {
      _cssPrefixes: cssPrefixes,
      _jsPrefixes: jsPrefixes,
      _cssProperty: function _cssProperty(name) {
        var result = cssCache[name];
        if (cssCache[LEXICON.hOP](name)) return result;
        var uppercasedName = firstLetterToUpper(name);
        var elmStyle = document.createElement('div')[LEXICON.s];
        var resultPossibilities;
        var i = 0;
        var v;
        var currVendorWithoutDashes;

        for (; i < cssPrefixes.length; i++) {
          currVendorWithoutDashes = cssPrefixes[i].replace(/-/g, '');
          resultPossibilities = [name, //transition
          cssPrefixes[i] + name, //-webkit-transition
          currVendorWithoutDashes + uppercasedName, //webkitTransition
          firstLetterToUpper(currVendorWithoutDashes) + uppercasedName //WebkitTransition
          ];

          for (v = 0; v < resultPossibilities[LEXICON.l]; v++) {
            if (elmStyle[resultPossibilities[v]] !== undefined) {
              result = resultPossibilities[v];
              break;
            }
          }
        }

        cssCache[name] = result;
        return result;
      },
      _jsAPI: function _jsAPI(name, isInterface, fallback) {
        var i = 0;
        var result = jsCache[name];

        if (!jsCache[LEXICON.hOP](name)) {
          result = window[name];

          for (; i < jsPrefixes[LEXICON.l]; i++) {
            result = result || window[(isInterface ? jsPrefixes[i] : jsPrefixes[i].toLowerCase()) + firstLetterToUpper(name)];
          }

          jsCache[name] = result;
        }

        return result || fallback;
      }
    };
  }();

  var COMPATIBILITY = function () {
    function windowSize(x) {
      return x ? window.innerWidth || document.documentElement[LEXICON.cW] || document.body[LEXICON.cW] : window.innerHeight || document.documentElement[LEXICON.cH] || document.body[LEXICON.cH];
    }

    function bind(func, thisObj) {
      if (typeof func != TYPES.f) {
        throw "Can't bind function!"; // closest thing possible to the ECMAScript 5
        // internal IsCallable function
        //throw new TypeError('Function.prototype.bind - what is trying to be bound is not callable');
      }

      var proto = LEXICON.p;
      var aArgs = Array[proto].slice.call(arguments, 2);

      var fNOP = function fNOP() {};

      var fBound = function fBound() {
        return func.apply(this instanceof fNOP ? this : thisObj, aArgs.concat(Array[proto].slice.call(arguments)));
      };

      if (func[proto]) fNOP[proto] = func[proto]; // Function.prototype doesn't have a prototype property

      fBound[proto] = new fNOP();
      return fBound;
    }

    return {
      /**
       * Gets the current window width.
       * @returns {Number|number} The current window width in pixel.
       */
      wW: bind(windowSize, 0, true),

      /**
       * Gets the current window height.
       * @returns {Number|number} The current window height in pixel.
       */
      wH: bind(windowSize, 0),

      /**
       * Gets the MutationObserver Object or undefined if not supported.
       * @returns {MutationObserver|*|undefined} The MutationsObserver Object or undefined.
       */
      mO: bind(VENDORS._jsAPI, 0, 'MutationObserver', true),

      /**
       * Gets the ResizeObserver Object or undefined if not supported.
       * @returns {MutationObserver|*|undefined} The ResizeObserver Object or undefined.
       */
      rO: bind(VENDORS._jsAPI, 0, 'ResizeObserver', true),

      /**
       * Gets the RequestAnimationFrame method or it's corresponding polyfill.
       * @returns {*|Function} The RequestAnimationFrame method or it's corresponding polyfill.
       */
      rAF: bind(VENDORS._jsAPI, 0, 'requestAnimationFrame', false, function (func) {
        return window.setTimeout(func, 1000 / 60);
      }),

      /**
       * Gets the CancelAnimationFrame method or it's corresponding polyfill.
       * @returns {*|Function} The CancelAnimationFrame method or it's corresponding polyfill.
       */
      cAF: bind(VENDORS._jsAPI, 0, 'cancelAnimationFrame', false, function (id) {
        return window.clearTimeout(id);
      }),

      /**
       * Gets the current time.
       * @returns {number} The current time.
       */
      now: function now() {
        return Date.now && Date.now() || new Date().getTime();
      },

      /**
       * Stops the propagation of the given event.
       * @param event The event of which the propagation shall be stoped.
       */
      stpP: function stpP(event) {
        if (event.stopPropagation) event.stopPropagation();else event.cancelBubble = true;
      },

      /**
       * Prevents the default action of the given event.
       * @param event The event of which the default action shall be prevented.
       */
      prvD: function prvD(event) {
        if (event.preventDefault && event.cancelable) event.preventDefault();else event.returnValue = false;
      },

      /**
       * Gets the pageX and pageY values of the given mouse event.
       * @param event The mouse event of which the pageX and pageX shall be got.
       * @returns {{x: number, y: number}} x = pageX value, y = pageY value.
       */
      page: function page(event) {
        event = event.originalEvent || event;
        var strPage = 'page';
        var strClient = 'client';
        var strX = 'X';
        var strY = 'Y';
        var target = event.target || event.srcElement || document;
        var eventDoc = target.ownerDocument || document;
        var doc = eventDoc.documentElement;
        var body = eventDoc.body; //if touch event return return pageX/Y of it

        if (event.touches !== undefined) {
          var touch = event.touches[0];
          return {
            x: touch[strPage + strX],
            y: touch[strPage + strY]
          };
        } // Calculate pageX/Y if not native supported


        if (!event[strPage + strX] && event[strClient + strX] && event[strClient + strX] != null) {
          return {
            x: event[strClient + strX] + (doc && doc.scrollLeft || body && body.scrollLeft || 0) - (doc && doc.clientLeft || body && body.clientLeft || 0),
            y: event[strClient + strY] + (doc && doc.scrollTop || body && body.scrollTop || 0) - (doc && doc.clientTop || body && body.clientTop || 0)
          };
        }

        return {
          x: event[strPage + strX],
          y: event[strPage + strY]
        };
      },

      /**
       * Gets the clicked mouse button of the given mouse event.
       * @param event The mouse event of which the clicked button shal be got.
       * @returns {number} The number of the clicked mouse button. (0 : none | 1 : leftButton | 2 : middleButton | 3 : rightButton)
       */
      mBtn: function mBtn(event) {
        var button = event.button;
        if (!event.which && button !== undefined) return button & 1 ? 1 : button & 2 ? 3 : button & 4 ? 2 : 0;else return event.which;
      },

      /**
       * Checks whether a item is in the given array and returns its index.
       * @param item The item of which the position in the array shall be determined.
       * @param arr The array.
       * @returns {number} The zero based index of the item or -1 if the item isn't in the array.
       */
      inA: function inA(item, arr) {
        for (var i = 0; i < arr[LEXICON.l]; i++) {
          //Sometiems in IE a "SCRIPT70" Permission denied error occurs if HTML elements in a iFrame are compared
          try {
            if (arr[i] === item) return i;
          } catch (e) {}
        }

        return -1;
      },

      /**
       * Returns true if the given value is a array.
       * @param arr The potential array.
       * @returns {boolean} True if the given value is a array, false otherwise.
       */
      isA: function isA(arr) {
        var def = Array.isArray;
        return def ? def(arr) : this.type(arr) == TYPES.a;
      },

      /**
       * Determine the internal JavaScript [[Class]] of the given object.
       * @param obj The object of which the type shall be determined.
       * @returns {string} The type of the given object.
       */
      type: function type(obj) {
        if (obj === undefined) return obj + '';
        if (obj === null) return obj + '';
        return Object[LEXICON.p].toString.call(obj).replace(/^\[object (.+)\]$/, '$1').toLowerCase();
      },
      bind: bind
      /**
       * Gets the vendor-prefixed CSS property by the given name.
       * For example the given name is "transform" and you're using a old Firefox browser then the returned value would be "-moz-transform".
       * If the browser doesn't need a vendor-prefix, then the returned string is the given name.
       * If the browser doesn't support the given property name at all (not even with a vendor-prefix) the returned value is null.
       * @param propName The unprefixed CSS property name.
       * @returns {string|null} The vendor-prefixed CSS property or null if the browser doesn't support the given CSS property.
       cssProp: function(propName) {
          return VENDORS._cssProperty(propName);
      }
      */

    };
  }();

  var MATH = Math;
  var JQUERY = framework;
  var EASING = framework.easing;
  var FRAMEWORK = framework;

  var INSTANCES = function () {
    var _targets = [];
    var _instancePropertyString = '__overlayScrollbars__';
    /**
     * Register, unregister or get a certain (or all) instances.
     * Register: Pass the target and the instance.
     * Unregister: Pass the target and null.
     * Get Instance: Pass the target from which the instance shall be got.
     * Get Targets: Pass no arguments.
     * @param target The target to which the instance shall be registered / from which the instance shall be unregistered / the instance shall be got
     * @param instance The instance.
     * @returns {*|void} Returns the instance from the given target.
     */

    return function (target, instance) {
      var argLen = arguments[LEXICON.l];

      if (argLen < 1) {
        //return all targets
        return _targets;
      } else {
        if (instance) {
          //register instance
          target[_instancePropertyString] = instance;

          _targets.push(target);
        } else {
          var index = COMPATIBILITY.inA(target, _targets);

          if (index > -1) {
            if (argLen > 1) {
              //unregister instance
              delete target[_instancePropertyString];

              _targets.splice(index, 1);
            } else {
              //get instance from target
              return _targets[index][_instancePropertyString];
            }
          }
        }
      }
    };
  }();

  var PLUGIN = function () {
    var _plugin;

    var _pluginsGlobals;

    var _pluginsAutoUpdateLoop;

    var _pluginsExtensions = [];

    var _pluginsOptions = function () {
      var type = COMPATIBILITY.type;
      var possibleTemplateTypes = [TYPES.b, //boolean
      TYPES.n, //number
      TYPES.s, //string
      TYPES.a, //array
      TYPES.o, //object
      TYPES.f, //function
      TYPES.z //null
      ];
      var restrictedStringsSplit = ' ';
      var restrictedStringsPossibilitiesSplit = ':';
      var classNameAllowedValues = [TYPES.z, TYPES.s];
      var numberAllowedValues = TYPES.n;
      var booleanNullAllowedValues = [TYPES.z, TYPES.b];
      var booleanTrueTemplate = [true, TYPES.b];
      var booleanFalseTemplate = [false, TYPES.b];
      var callbackTemplate = [null, [TYPES.z, TYPES.f]];
      var inheritedAttrsTemplate = [['style', 'class'], [TYPES.s, TYPES.a, TYPES.z]];
      var resizeAllowedValues = 'n:none b:both h:horizontal v:vertical';
      var overflowBehaviorAllowedValues = 'v-h:visible-hidden v-s:visible-scroll s:scroll h:hidden';
      var scrollbarsVisibilityAllowedValues = 'v:visible h:hidden a:auto';
      var scrollbarsAutoHideAllowedValues = 'n:never s:scroll l:leave m:move';
      var optionsDefaultsAndTemplate = {
        className: ['os-theme-dark', classNameAllowedValues],
        //null || string
        resize: ['none', resizeAllowedValues],
        //none || both  || horizontal || vertical || n || b || h || v
        sizeAutoCapable: booleanTrueTemplate,
        //true || false
        clipAlways: booleanTrueTemplate,
        //true || false
        normalizeRTL: booleanTrueTemplate,
        //true || false
        paddingAbsolute: booleanFalseTemplate,
        //true || false
        autoUpdate: [null, booleanNullAllowedValues],
        //true || false || null
        autoUpdateInterval: [33, numberAllowedValues],
        //number
        nativeScrollbarsOverlaid: {
          showNativeScrollbars: booleanFalseTemplate,
          //true || false
          initialize: booleanTrueTemplate //true || false

        },
        overflowBehavior: {
          x: ['scroll', overflowBehaviorAllowedValues],
          //visible-hidden  || visible-scroll || hidden || scroll || v-h || v-s || h || s
          y: ['scroll', overflowBehaviorAllowedValues] //visible-hidden  || visible-scroll || hidden || scroll || v-h || v-s || h || s

        },
        scrollbars: {
          visibility: ['auto', scrollbarsVisibilityAllowedValues],
          //visible || hidden || auto || v || h || a
          autoHide: ['never', scrollbarsAutoHideAllowedValues],
          //never || scroll || leave || move || n || s || l || m
          autoHideDelay: [800, numberAllowedValues],
          //number
          dragScrolling: booleanTrueTemplate,
          //true || false
          clickScrolling: booleanFalseTemplate,
          //true || false
          touchSupport: booleanTrueTemplate,
          //true || false
          snapHandle: booleanFalseTemplate //true || false

        },
        textarea: {
          dynWidth: booleanFalseTemplate,
          //true || false
          dynHeight: booleanFalseTemplate,
          //true || false
          inheritedAttrs: inheritedAttrsTemplate //string || array || null

        },
        callbacks: {
          onInitialized: callbackTemplate,
          //null || function
          onInitializationWithdrawn: callbackTemplate,
          //null || function
          onDestroyed: callbackTemplate,
          //null || function
          onScrollStart: callbackTemplate,
          //null || function
          onScroll: callbackTemplate,
          //null || function
          onScrollStop: callbackTemplate,
          //null || function
          onOverflowChanged: callbackTemplate,
          //null || function
          onOverflowAmountChanged: callbackTemplate,
          //null || function
          onDirectionChanged: callbackTemplate,
          //null || function
          onContentSizeChanged: callbackTemplate,
          //null || function
          onHostSizeChanged: callbackTemplate,
          //null || function
          onUpdated: callbackTemplate //null || function

        }
      };

      var convert = function convert(template) {
        var recursive = function recursive(obj) {
          var key;
          var val;
          var valType;

          for (key in obj) {
            if (!obj[LEXICON.hOP](key)) continue;
            val = obj[key];
            valType = type(val);
            if (valType == TYPES.a) obj[key] = val[template ? 1 : 0];else if (valType == TYPES.o) obj[key] = recursive(val);
          }

          return obj;
        };

        return recursive(FRAMEWORK.extend(true, {}, optionsDefaultsAndTemplate));
      };

      return {
        _defaults: convert(),
        _template: convert(true),

        /**
         * Validates the passed object by the passed template.
         * @param obj The object which shall be validated.
         * @param template The template which defines the allowed values and types.
         * @param writeErrors True if errors shall be logged to the console.
         * @param diffObj If a object is passed then only valid differences to this object will be returned.
         * @returns {{}} A object which contains two objects called "default" and "prepared" which contains only the valid properties of the passed original object and discards not different values compared to the passed diffObj.
         */
        _validate: function _validate(obj, template, writeErrors, diffObj) {
          var validatedOptions = {};
          var validatedOptionsPrepared = {};
          var objectCopy = FRAMEWORK.extend(true, {}, obj);
          var inArray = FRAMEWORK.inArray;
          var isEmptyObj = FRAMEWORK.isEmptyObject;

          var checkObjectProps = function checkObjectProps(data, template, diffData, validatedOptions, validatedOptionsPrepared, prevPropName) {
            for (var prop in template) {
              if (template[LEXICON.hOP](prop) && data[LEXICON.hOP](prop)) {
                var isValid = false;
                var isDiff = false;
                var templateValue = template[prop];
                var templateValueType = type(templateValue);
                var templateIsComplex = templateValueType == TYPES.o;
                var templateTypes = type(templateValue) != TYPES.a ? [templateValue] : templateValue;
                var dataDiffValue = diffData[prop];
                var dataValue = data[prop];
                var dataValueType = type(dataValue);
                var propPrefix = prevPropName ? prevPropName + '.' : '';
                var error = "The option \"" + propPrefix + prop + "\" wasn't set, because";
                var errorPossibleTypes = [];
                var errorRestrictedStrings = [];
                var restrictedStringValuesSplit;
                var restrictedStringValuesPossibilitiesSplit;
                var isRestrictedValue;
                var mainPossibility;
                var currType;
                var i;
                var v;
                var j;
                dataDiffValue = dataDiffValue === undefined ? {} : dataDiffValue; //if the template has a object as value, it means that the options are complex (verschachtelt)

                if (templateIsComplex && dataValueType == TYPES.o) {
                  validatedOptions[prop] = {};
                  validatedOptionsPrepared[prop] = {};
                  checkObjectProps(dataValue, templateValue, dataDiffValue, validatedOptions[prop], validatedOptionsPrepared[prop], propPrefix + prop);
                  FRAMEWORK.each([data, validatedOptions, validatedOptionsPrepared], function (index, value) {
                    if (isEmptyObj(value[prop])) {
                      delete value[prop];
                    }
                  });
                } else if (!templateIsComplex) {
                  for (i = 0; i < templateTypes[LEXICON.l]; i++) {
                    currType = templateTypes[i];
                    templateValueType = type(currType); //if currtype is string and starts with restrictedStringPrefix and end with restrictedStringSuffix

                    isRestrictedValue = templateValueType == TYPES.s && inArray(currType, possibleTemplateTypes) === -1;

                    if (isRestrictedValue) {
                      errorPossibleTypes.push(TYPES.s); //split it into a array which contains all possible values for example: ["y:yes", "n:no", "m:maybe"]

                      restrictedStringValuesSplit = currType.split(restrictedStringsSplit);
                      errorRestrictedStrings = errorRestrictedStrings.concat(restrictedStringValuesSplit);

                      for (v = 0; v < restrictedStringValuesSplit[LEXICON.l]; v++) {
                        //split the possible values into their possibiliteis for example: ["y", "yes"] -> the first is always the mainPossibility
                        restrictedStringValuesPossibilitiesSplit = restrictedStringValuesSplit[v].split(restrictedStringsPossibilitiesSplit);
                        mainPossibility = restrictedStringValuesPossibilitiesSplit[0];

                        for (j = 0; j < restrictedStringValuesPossibilitiesSplit[LEXICON.l]; j++) {
                          //if any possibility matches with the dataValue, its valid
                          if (dataValue === restrictedStringValuesPossibilitiesSplit[j]) {
                            isValid = true;
                            break;
                          }
                        }

                        if (isValid) break;
                      }
                    } else {
                      errorPossibleTypes.push(currType);

                      if (dataValueType === currType) {
                        isValid = true;
                        break;
                      }
                    }
                  }

                  if (isValid) {
                    isDiff = dataValue !== dataDiffValue;
                    if (isDiff) validatedOptions[prop] = dataValue;
                    if (isRestrictedValue ? inArray(dataDiffValue, restrictedStringValuesPossibilitiesSplit) < 0 : isDiff) validatedOptionsPrepared[prop] = isRestrictedValue ? mainPossibility : dataValue;
                  } else if (writeErrors) {
                    console.warn(error + " it doesn't accept the type [ " + dataValueType.toUpperCase() + " ] with the value of \"" + dataValue + "\".\r\n" + "Accepted types are: [ " + errorPossibleTypes.join(', ').toUpperCase() + " ]." + (errorRestrictedStrings[length] > 0 ? "\r\nValid strings are: [ " + errorRestrictedStrings.join(', ').split(restrictedStringsPossibilitiesSplit).join(', ') + " ]." : ''));
                  }

                  delete data[prop];
                }
              }
            }
          };

          checkObjectProps(objectCopy, template, diffObj || {}, validatedOptions, validatedOptionsPrepared); //add values which aren't specified in the template to the finished validated object to prevent them from being discarded

          /*
          if(keepForeignProps) {
              FRAMEWORK.extend(true, validatedOptions, objectCopy);
              FRAMEWORK.extend(true, validatedOptionsPrepared, objectCopy);
          }
          */

          if (!isEmptyObj(objectCopy) && writeErrors) console.warn('The following options are discarded due to invalidity:\r\n' + window.JSON.stringify(objectCopy, null, 2));
          return {
            _default: validatedOptions,
            _prepared: validatedOptionsPrepared
          };
        }
      };
    }();
    /**
     * Initializes the object which contains global information about the plugin and each instance of it.
     */


    function initOverlayScrollbarsStatics() {
      if (!_pluginsGlobals) _pluginsGlobals = new OverlayScrollbarsGlobals(_pluginsOptions._defaults);
      if (!_pluginsAutoUpdateLoop) _pluginsAutoUpdateLoop = new OverlayScrollbarsAutoUpdateLoop(_pluginsGlobals);
    }
    /**
     * The global object for the OverlayScrollbars objects. It contains resources which every OverlayScrollbars object needs. This object is initialized only once: if the first OverlayScrollbars object gets initialized.
     * @param defaultOptions
     * @constructor
     */


    function OverlayScrollbarsGlobals(defaultOptions) {
      var _base = this;

      var strOverflow = 'overflow';
      var strHidden = 'hidden';
      var strScroll = 'scroll';
      var bodyElement = FRAMEWORK('body');
      var scrollbarDummyElement = FRAMEWORK('<div id="os-dummy-scrollbar-size"><div></div></div>');
      var scrollbarDummyElement0 = scrollbarDummyElement[0];
      var dummyContainerChild = FRAMEWORK(scrollbarDummyElement.children('div').eq(0));
      bodyElement.append(scrollbarDummyElement);
      scrollbarDummyElement.hide().show(); //fix IE8 bug (incorrect measuring)

      var nativeScrollbarSize = calcNativeScrollbarSize(scrollbarDummyElement0);
      var nativeScrollbarIsOverlaid = {
        x: nativeScrollbarSize.x === 0,
        y: nativeScrollbarSize.y === 0
      };

      var msie = function () {
        var ua = window.navigator.userAgent;
        var strIndexOf = 'indexOf';
        var strSubString = 'substring';
        var msie = ua[strIndexOf]('MSIE ');
        var trident = ua[strIndexOf]('Trident/');
        var edge = ua[strIndexOf]('Edge/');
        var rv = ua[strIndexOf]('rv:');
        var result;
        var parseIntFunc = parseInt; // IE 10 or older => return version number

        if (msie > 0) result = parseIntFunc(ua[strSubString](msie + 5, ua[strIndexOf]('.', msie)), 10); // IE 11 => return version number
        else if (trident > 0) result = parseIntFunc(ua[strSubString](rv + 3, ua[strIndexOf]('.', rv)), 10); // Edge (IE 12+) => return version number
          else if (edge > 0) result = parseIntFunc(ua[strSubString](edge + 5, ua[strIndexOf]('.', edge)), 10); // other browser

        return result;
      }();

      FRAMEWORK.extend(_base, {
        defaultOptions: defaultOptions,
        msie: msie,
        autoUpdateLoop: false,
        autoUpdateRecommended: !COMPATIBILITY.mO(),
        nativeScrollbarSize: nativeScrollbarSize,
        nativeScrollbarIsOverlaid: nativeScrollbarIsOverlaid,
        nativeScrollbarStyling: function () {
          var result = false;
          scrollbarDummyElement.addClass('os-viewport-native-scrollbars-invisible');

          try {
            result = scrollbarDummyElement.css('scrollbar-width') === 'none' && (msie > 9 || !msie) || window.getComputedStyle(scrollbarDummyElement0, '::-webkit-scrollbar').getPropertyValue('display') === 'none';
          } catch (ex) {} //fix opera bug: scrollbar styles will only appear if overflow value is scroll or auto during the activation of the style.
          //and set overflow to scroll
          //scrollbarDummyElement.css(strOverflow, strHidden).hide().css(strOverflow, strScroll).show();
          //return (scrollbarDummyElement0[LEXICON.oH] - scrollbarDummyElement0[LEXICON.cH]) === 0 && (scrollbarDummyElement0[LEXICON.oW] - scrollbarDummyElement0[LEXICON.cW]) === 0;


          return result;
        }(),
        overlayScrollbarDummySize: {
          x: 30,
          y: 30
        },
        cssCalc: function () {
          var dummyStyle = document.createElement('div')[LEXICON.s];
          var strCalc = 'calc';
          var i = -1;
          var prop;

          for (; i < VENDORS._cssPrefixes[LEXICON.l]; i++) {
            prop = i < 0 ? strCalc : VENDORS._cssPrefixes[i] + strCalc;
            dummyStyle.cssText = 'width:' + prop + '(1px);';
            if (dummyStyle[LEXICON.l]) return prop;
          }

          return null;
        }(),
        restrictedMeasuring: function () {
          //https://bugzilla.mozilla.org/show_bug.cgi?id=1439305
          scrollbarDummyElement.css(strOverflow, strHidden);
          var scrollSize = {
            w: scrollbarDummyElement0[LEXICON.sW],
            h: scrollbarDummyElement0[LEXICON.sH]
          };
          scrollbarDummyElement.css(strOverflow, 'visible');
          var scrollSize2 = {
            w: scrollbarDummyElement0[LEXICON.sW],
            h: scrollbarDummyElement0[LEXICON.sH]
          };
          return scrollSize.w - scrollSize2.w !== 0 || scrollSize.h - scrollSize2.h !== 0;
        }(),
        rtlScrollBehavior: function () {
          scrollbarDummyElement.css({
            'overflow-y': strHidden,
            'overflow-x': strScroll,
            'direction': 'rtl'
          }).scrollLeft(0);
          var dummyContainerOffset = scrollbarDummyElement.offset();
          var dummyContainerChildOffset = dummyContainerChild.offset();
          scrollbarDummyElement.scrollLeft(999);
          var dummyContainerScrollOffsetAfterScroll = dummyContainerChild.offset();
          return {
            //origin direction = determines if the zero scroll position is on the left or right side
            //'i' means 'invert' (i === true means that the axis must be inverted to be correct)
            //true = on the left side
            //false = on the right side
            i: dummyContainerOffset.left === dummyContainerChildOffset.left,
            //negative = determines if the maximum scroll is positive or negative
            //'n' means 'negate' (n === true means that the axis must be negated to be correct)
            //true = negative
            //false = positive
            n: dummyContainerChildOffset.left - dummyContainerScrollOffsetAfterScroll.left === 0
          };
        }(),
        supportTransform: VENDORS._cssProperty('transform') !== undefined,
        supportTransition: VENDORS._cssProperty('transition') !== undefined,
        supportPassiveEvents: function () {
          var supportsPassive = false;

          try {
            window.addEventListener('test', null, Object.defineProperty({}, 'passive', {
              get: function get() {
                supportsPassive = true;
              }
            }));
          } catch (e) {}

          return supportsPassive;
        }(),
        supportResizeObserver: !!COMPATIBILITY.rO(),
        supportMutationObserver: !!COMPATIBILITY.mO()
      });
      scrollbarDummyElement.removeAttr(LEXICON.s).remove(); //Catch zoom event:

      (function () {
        if (nativeScrollbarIsOverlaid.x && nativeScrollbarIsOverlaid.y) return;
        var abs = MATH.abs;
        var windowWidth = COMPATIBILITY.wW();
        var windowHeight = COMPATIBILITY.wH();
        var windowDpr = getWindowDPR();

        var onResize = function onResize() {
          if (INSTANCES().length > 0) {
            var newW = COMPATIBILITY.wW();
            var newH = COMPATIBILITY.wH();
            var deltaW = newW - windowWidth;
            var deltaH = newH - windowHeight;
            if (deltaW === 0 && deltaH === 0) return;
            var deltaWRatio = MATH.round(newW / (windowWidth / 100.0));
            var deltaHRatio = MATH.round(newH / (windowHeight / 100.0));
            var absDeltaW = abs(deltaW);
            var absDeltaH = abs(deltaH);
            var absDeltaWRatio = abs(deltaWRatio);
            var absDeltaHRatio = abs(deltaHRatio);
            var newDPR = getWindowDPR();
            var deltaIsBigger = absDeltaW > 2 && absDeltaH > 2;
            var difference = !differenceIsBiggerThanOne(absDeltaWRatio, absDeltaHRatio);
            var dprChanged = newDPR !== windowDpr && windowDpr > 0;
            var isZoom = deltaIsBigger && difference && dprChanged;
            var oldScrollbarSize = _base.nativeScrollbarSize;
            var newScrollbarSize;

            if (isZoom) {
              bodyElement.append(scrollbarDummyElement);
              newScrollbarSize = _base.nativeScrollbarSize = calcNativeScrollbarSize(scrollbarDummyElement[0]);
              scrollbarDummyElement.remove();

              if (oldScrollbarSize.x !== newScrollbarSize.x || oldScrollbarSize.y !== newScrollbarSize.y) {
                FRAMEWORK.each(INSTANCES(), function () {
                  if (INSTANCES(this)) INSTANCES(this).update('zoom');
                });
              }
            }

            windowWidth = newW;
            windowHeight = newH;
            windowDpr = newDPR;
          }
        };

        function differenceIsBiggerThanOne(valOne, valTwo) {
          var absValOne = abs(valOne);
          var absValTwo = abs(valTwo);
          return !(absValOne === absValTwo || absValOne + 1 === absValTwo || absValOne - 1 === absValTwo);
        }

        function getWindowDPR() {
          var dDPI = window.screen.deviceXDPI || 0;
          var sDPI = window.screen.logicalXDPI || 1;
          return window.devicePixelRatio || dDPI / sDPI;
        }

        FRAMEWORK(window).on('resize', onResize);
      })();

      function calcNativeScrollbarSize(measureElement) {
        return {
          x: measureElement[LEXICON.oH] - measureElement[LEXICON.cH],
          y: measureElement[LEXICON.oW] - measureElement[LEXICON.cW]
        };
      }
    }
    /**
     * The object which manages the auto update loop for all OverlayScrollbars objects. This object is initialized only once: if the first OverlayScrollbars object gets initialized.
     * @constructor
     */


    function OverlayScrollbarsAutoUpdateLoop(globals) {
      var _base = this;

      var _inArray = FRAMEWORK.inArray;
      var _getNow = COMPATIBILITY.now;
      var _strAutoUpdate = 'autoUpdate';

      var _strAutoUpdateInterval = _strAutoUpdate + 'Interval';

      var _strLength = LEXICON.l;
      var _loopingInstances = [];
      var _loopingInstancesIntervalCache = [];
      var _loopIsActive = false;
      var _loopIntervalDefault = 33;
      var _loopInterval = _loopIntervalDefault;

      var _loopTimeOld = _getNow();

      var _loopID;
      /**
       * The auto update loop which will run every 50 milliseconds or less if the update interval of a instance is lower than 50 milliseconds.
       */


      var loop = function loop() {
        if (_loopingInstances[_strLength] > 0 && _loopIsActive) {
          _loopID = COMPATIBILITY.rAF()(function () {
            loop();
          });

          var timeNew = _getNow();

          var timeDelta = timeNew - _loopTimeOld;
          var lowestInterval;
          var instance;
          var instanceOptions;
          var instanceAutoUpdateAllowed;
          var instanceAutoUpdateInterval;
          var now;

          if (timeDelta > _loopInterval) {
            _loopTimeOld = timeNew - timeDelta % _loopInterval;
            lowestInterval = _loopIntervalDefault;

            for (var i = 0; i < _loopingInstances[_strLength]; i++) {
              instance = _loopingInstances[i];

              if (instance !== undefined) {
                instanceOptions = instance.options();
                instanceAutoUpdateAllowed = instanceOptions[_strAutoUpdate];
                instanceAutoUpdateInterval = MATH.max(1, instanceOptions[_strAutoUpdateInterval]);
                now = _getNow();

                if ((instanceAutoUpdateAllowed === true || instanceAutoUpdateAllowed === null) && now - _loopingInstancesIntervalCache[i] > instanceAutoUpdateInterval) {
                  instance.update('auto');
                  _loopingInstancesIntervalCache[i] = new Date(now += instanceAutoUpdateInterval);
                }

                lowestInterval = MATH.max(1, MATH.min(lowestInterval, instanceAutoUpdateInterval));
              }
            }

            _loopInterval = lowestInterval;
          }
        } else {
          _loopInterval = _loopIntervalDefault;
        }
      };
      /**
       * Add OverlayScrollbars instance to the auto update loop. Only successful if the instance isn't already added.
       * @param instance The instance which shall be updated in a loop automatically.
       */


      _base.add = function (instance) {
        if (_inArray(instance, _loopingInstances) === -1) {
          _loopingInstances.push(instance);

          _loopingInstancesIntervalCache.push(_getNow());

          if (_loopingInstances[_strLength] > 0 && !_loopIsActive) {
            _loopIsActive = true;
            globals.autoUpdateLoop = _loopIsActive;
            loop();
          }
        }
      };
      /**
       * Remove OverlayScrollbars instance from the auto update loop. Only successful if the instance was added before.
       * @param instance The instance which shall be updated in a loop automatically.
       */


      _base.remove = function (instance) {
        var index = _inArray(instance, _loopingInstances);

        if (index > -1) {
          //remove from loopingInstances list
          _loopingInstancesIntervalCache.splice(index, 1);

          _loopingInstances.splice(index, 1); //correct update loop behavior


          if (_loopingInstances[_strLength] === 0 && _loopIsActive) {
            _loopIsActive = false;
            globals.autoUpdateLoop = _loopIsActive;

            if (_loopID !== undefined) {
              COMPATIBILITY.cAF()(_loopID);
              _loopID = -1;
            }
          }
        }
      };
    }
    /**
     * A object which manages the scrollbars visibility of the target element.
     * @param pluginTargetElement The element from which the scrollbars shall be hidden.
     * @param options The custom options.
     * @param extensions The custom extensions.
     * @param globals
     * @param autoUpdateLoop
     * @returns {*}
     * @constructor
     */


    function OverlayScrollbarsInstance(pluginTargetElement, options, extensions, globals, autoUpdateLoop) {
      //shortcuts
      var type = COMPATIBILITY.type;
      var inArray = FRAMEWORK.inArray;
      var each = FRAMEWORK.each; //make correct instanceof

      var _base = new _plugin();

      var _frameworkProto = FRAMEWORK[LEXICON.p]; //if passed element is no HTML element: skip and return

      if (!isHTMLElement(pluginTargetElement)) return; //if passed element is already initialized: set passed options if there are any and return its instance

      if (INSTANCES(pluginTargetElement)) {
        var inst = INSTANCES(pluginTargetElement);
        inst.options(options);
        return inst;
      } //globals:


      var _nativeScrollbarIsOverlaid;

      var _overlayScrollbarDummySize;

      var _rtlScrollBehavior;

      var _autoUpdateRecommended;

      var _msieVersion;

      var _nativeScrollbarStyling;

      var _cssCalc;

      var _nativeScrollbarSize;

      var _supportTransition;

      var _supportTransform;

      var _supportPassiveEvents;

      var _supportResizeObserver;

      var _supportMutationObserver;

      var _restrictedMeasuring; //general readonly:


      var _initialized;

      var _destroyed;

      var _isTextarea;

      var _isBody;

      var _documentMixed;

      var _domExists; //general:


      var _isBorderBox;

      var _sizeAutoObserverAdded;

      var _paddingX;

      var _paddingY;

      var _borderX;

      var _borderY;

      var _marginX;

      var _marginY;

      var _isRTL;

      var _sleeping;

      var _contentBorderSize = {};
      var _scrollHorizontalInfo = {};
      var _scrollVerticalInfo = {};
      var _viewportSize = {};
      var _nativeScrollbarMinSize = {}; //naming:

      var _strMinusHidden = '-hidden';
      var _strMarginMinus = 'margin-';
      var _strPaddingMinus = 'padding-';
      var _strBorderMinus = 'border-';
      var _strTop = 'top';
      var _strRight = 'right';
      var _strBottom = 'bottom';
      var _strLeft = 'left';
      var _strMinMinus = 'min-';
      var _strMaxMinus = 'max-';
      var _strWidth = 'width';
      var _strHeight = 'height';
      var _strFloat = 'float';
      var _strEmpty = '';
      var _strAuto = 'auto';
      var _strSync = 'sync';
      var _strScroll = 'scroll';
      var _strHundredPercent = '100%';
      var _strX = 'x';
      var _strY = 'y';
      var _strDot = '.';
      var _strSpace = ' ';
      var _strScrollbar = 'scrollbar';
      var _strMinusHorizontal = '-horizontal';
      var _strMinusVertical = '-vertical';

      var _strScrollLeft = _strScroll + 'Left';

      var _strScrollTop = _strScroll + 'Top';

      var _strMouseTouchDownEvent = 'mousedown touchstart';
      var _strMouseTouchUpEvent = 'mouseup touchend touchcancel';
      var _strMouseTouchMoveEvent = 'mousemove touchmove';
      var _strMouseTouchEnter = 'mouseenter';
      var _strMouseTouchLeave = 'mouseleave';
      var _strKeyDownEvent = 'keydown';
      var _strKeyUpEvent = 'keyup';
      var _strSelectStartEvent = 'selectstart';
      var _strTransitionEndEvent = 'transitionend webkitTransitionEnd oTransitionEnd';
      var _strResizeObserverProperty = '__overlayScrollbarsRO__'; //class names:

      var _cassNamesPrefix = 'os-';

      var _classNameHTMLElement = _cassNamesPrefix + 'html';

      var _classNameHostElement = _cassNamesPrefix + 'host';

      var _classNameHostTextareaElement = _classNameHostElement + '-textarea';

      var _classNameHostScrollbarHorizontalHidden = _classNameHostElement + '-' + _strScrollbar + _strMinusHorizontal + _strMinusHidden;

      var _classNameHostScrollbarVerticalHidden = _classNameHostElement + '-' + _strScrollbar + _strMinusVertical + _strMinusHidden;

      var _classNameHostTransition = _classNameHostElement + '-transition';

      var _classNameHostRTL = _classNameHostElement + '-rtl';

      var _classNameHostResizeDisabled = _classNameHostElement + '-resize-disabled';

      var _classNameHostScrolling = _classNameHostElement + '-scrolling';

      var _classNameHostOverflow = _classNameHostElement + '-overflow';

      var _classNameHostOverflowX = _classNameHostOverflow + '-x';

      var _classNameHostOverflowY = _classNameHostOverflow + '-y';

      var _classNameTextareaElement = _cassNamesPrefix + 'textarea';

      var _classNameTextareaCoverElement = _classNameTextareaElement + '-cover';

      var _classNamePaddingElement = _cassNamesPrefix + 'padding';

      var _classNameViewportElement = _cassNamesPrefix + 'viewport';

      var _classNameViewportNativeScrollbarsInvisible = _classNameViewportElement + '-native-scrollbars-invisible';

      var _classNameViewportNativeScrollbarsOverlaid = _classNameViewportElement + '-native-scrollbars-overlaid';

      var _classNameContentElement = _cassNamesPrefix + 'content';

      var _classNameContentArrangeElement = _cassNamesPrefix + 'content-arrange';

      var _classNameContentGlueElement = _cassNamesPrefix + 'content-glue';

      var _classNameSizeAutoObserverElement = _cassNamesPrefix + 'size-auto-observer';

      var _classNameResizeObserverElement = _cassNamesPrefix + 'resize-observer';

      var _classNameResizeObserverItemElement = _cassNamesPrefix + 'resize-observer-item';

      var _classNameResizeObserverItemFinalElement = _classNameResizeObserverItemElement + '-final';

      var _classNameTextInherit = _cassNamesPrefix + 'text-inherit';

      var _classNameScrollbar = _cassNamesPrefix + _strScrollbar;

      var _classNameScrollbarTrack = _classNameScrollbar + '-track';

      var _classNameScrollbarTrackOff = _classNameScrollbarTrack + '-off';

      var _classNameScrollbarHandle = _classNameScrollbar + '-handle';

      var _classNameScrollbarHandleOff = _classNameScrollbarHandle + '-off';

      var _classNameScrollbarUnusable = _classNameScrollbar + '-unusable';

      var _classNameScrollbarAutoHidden = _classNameScrollbar + '-' + _strAuto + _strMinusHidden;

      var _classNameScrollbarCorner = _classNameScrollbar + '-corner';

      var _classNameScrollbarCornerResize = _classNameScrollbarCorner + '-resize';

      var _classNameScrollbarCornerResizeB = _classNameScrollbarCornerResize + '-both';

      var _classNameScrollbarCornerResizeH = _classNameScrollbarCornerResize + _strMinusHorizontal;

      var _classNameScrollbarCornerResizeV = _classNameScrollbarCornerResize + _strMinusVertical;

      var _classNameScrollbarHorizontal = _classNameScrollbar + _strMinusHorizontal;

      var _classNameScrollbarVertical = _classNameScrollbar + _strMinusVertical;

      var _classNameDragging = _cassNamesPrefix + 'dragging';

      var _classNameThemeNone = _cassNamesPrefix + 'theme-none';

      var _classNamesDynamicDestroy = [_classNameViewportNativeScrollbarsInvisible, _classNameViewportNativeScrollbarsOverlaid, _classNameScrollbarTrackOff, _classNameScrollbarHandleOff, _classNameScrollbarUnusable, _classNameScrollbarAutoHidden, _classNameScrollbarCornerResize, _classNameScrollbarCornerResizeB, _classNameScrollbarCornerResizeH, _classNameScrollbarCornerResizeV, _classNameDragging].join(_strSpace); //callbacks:


      var _callbacksInitQeueue = []; //options:

      var _defaultOptions;

      var _currentOptions;

      var _currentPreparedOptions; //extensions:


      var _extensions = {};
      var _extensionsPrivateMethods = 'added removed on contract'; //update

      var _lastUpdateTime;

      var _swallowedUpdateHints = {};

      var _swallowedUpdateTimeout;

      var _swallowUpdateLag = 42;
      var _imgs = []; //DOM elements:

      var _windowElement;

      var _documentElement;

      var _htmlElement;

      var _bodyElement;

      var _targetElement; //the target element of this OverlayScrollbars object


      var _hostElement; //the host element of this OverlayScrollbars object -> may be the same as targetElement


      var _sizeAutoObserverElement; //observes size auto changes


      var _sizeObserverElement; //observes size and padding changes


      var _paddingElement; //manages the padding


      var _viewportElement; //is the viewport of our scrollbar model


      var _contentElement; //the element which holds the content


      var _contentArrangeElement; //is needed for correct sizing of the content element (only if native scrollbars are overlays)


      var _contentGlueElement; //has always the size of the content element


      var _textareaCoverElement; //only applied if target is a textarea element. Used for correct size calculation and for prevention of uncontrolled scrolling


      var _scrollbarCornerElement;

      var _scrollbarHorizontalElement;

      var _scrollbarHorizontalTrackElement;

      var _scrollbarHorizontalHandleElement;

      var _scrollbarVerticalElement;

      var _scrollbarVerticalTrackElement;

      var _scrollbarVerticalHandleElement;

      var _windowElementNative;

      var _documentElementNative;

      var _targetElementNative;

      var _hostElementNative;

      var _sizeAutoObserverElementNative;

      var _sizeObserverElementNative;

      var _paddingElementNative;

      var _viewportElementNative;

      var _contentElementNative; //Cache:


      var _hostSizeCache;

      var _contentScrollSizeCache;

      var _arrangeContentSizeCache;

      var _hasOverflowCache;

      var _hideOverflowCache;

      var _widthAutoCache;

      var _heightAutoCache;

      var _cssMaxValueCache;

      var _cssBoxSizingCache;

      var _cssPaddingCache;

      var _cssBorderCache;

      var _cssMarginCache;

      var _cssDirectionCache;

      var _cssDirectionDetectedCache;

      var _paddingAbsoluteCache;

      var _clipAlwaysCache;

      var _contentGlueSizeCache;

      var _overflowBehaviorCache;

      var _overflowAmountCache;

      var _ignoreOverlayScrollbarHidingCache;

      var _autoUpdateCache;

      var _sizeAutoCapableCache;

      var _contentElementScrollSizeChangeDetectedCache;

      var _hostElementSizeChangeDetectedCache;

      var _scrollbarsVisibilityCache;

      var _scrollbarsAutoHideCache;

      var _scrollbarsClickScrollingCache;

      var _scrollbarsDragScrollingCache;

      var _resizeCache;

      var _normalizeRTLCache;

      var _classNameCache;

      var _oldClassName;

      var _textareaAutoWrappingCache;

      var _textareaInfoCache;

      var _textareaSizeCache;

      var _textareaDynHeightCache;

      var _textareaDynWidthCache;

      var _bodyMinSizeCache;

      var _viewportScrollSizeCache;

      var _displayIsHiddenCache;

      var _updateAutoCache = {}; //MutationObserver:

      var _mutationObserverHost;

      var _mutationObserverContent;

      var _mutationObserverHostCallback;

      var _mutationObserverContentCallback;

      var _mutationObserversConnected;

      var _mutationObserverAttrsTextarea = ['wrap', 'cols', 'rows'];
      var _mutationObserverAttrsHost = [LEXICON.i, LEXICON.c, LEXICON.s, 'open']; //events:

      var _destroyEvents = []; //textarea:

      var _textareaHasFocus; //scrollbars:


      var _scrollbarsAutoHideTimeoutId;

      var _scrollbarsAutoHideMoveTimeoutId;

      var _scrollbarsAutoHideDelay;

      var _scrollbarsAutoHideNever;

      var _scrollbarsAutoHideScroll;

      var _scrollbarsAutoHideMove;

      var _scrollbarsAutoHideLeave;

      var _scrollbarsHandleHovered;

      var _scrollbarsHandlesDefineScrollPos; //resize


      var _resizeNone;

      var _resizeBoth;

      var _resizeHorizontal;

      var _resizeVertical; //==== Event Listener ====//

      /**
       * Adds or removes a event listener from the given element. 
       * @param element The element to which the event listener shall be applied or removed.
       * @param eventNames The name(s) of the events.
       * @param listener The method which shall be called.
       * @param remove True if the handler shall be removed, false or undefined if the handler shall be added.
       */


      function setupResponsiveEventListener(element, eventNames, listener, remove, passive) {
        var collected = type(eventNames) == TYPES.a && type(listener) == TYPES.a;
        var method = remove ? 'removeEventListener' : 'addEventListener';
        var onOff = remove ? 'off' : 'on';
        var events = collected ? false : eventNames.split(_strSpace);
        var i = 0;

        if (collected) {
          for (; i < eventNames[LEXICON.l]; i++) {
            setupResponsiveEventListener(element, eventNames[i], listener[i], remove);
          }
        } else {
          for (; i < events[LEXICON.l]; i++) {
            if (_supportPassiveEvents) element[0][method](events[i], listener, {
              passive: passive || false
            });else element[onOff](events[i], listener);
          }
        }
      }

      function addDestroyEventListener(element, eventNames, listener, passive) {
        setupResponsiveEventListener(element, eventNames, listener, false, passive);

        _destroyEvents.push(COMPATIBILITY.bind(setupResponsiveEventListener, 0, element, eventNames, listener, true, passive));
      } //==== Resize Observer ====//

      /**
       * Adds or removes a resize observer from the given element.
       * @param targetElement The element to which the resize observer shall be added or removed.
       * @param onElementResizedCallback The callback which is fired every time the resize observer registers a size change or false / undefined if the resizeObserver shall be removed.
       */


      function setupResizeObserver(targetElement, onElementResizedCallback) {
        if (targetElement) {
          var resizeObserver = COMPATIBILITY.rO();
          var strAnimationStartEvent = 'animationstart mozAnimationStart webkitAnimationStart MSAnimationStart';
          var strChildNodes = 'childNodes';
          var constScroll = 3333333;

          var callback = function callback() {
            targetElement[_strScrollTop](constScroll)[_strScrollLeft](_isRTL ? _rtlScrollBehavior.n ? -constScroll : _rtlScrollBehavior.i ? 0 : constScroll : constScroll);

            onElementResizedCallback();
          }; //add resize observer:


          if (onElementResizedCallback) {
            if (_supportResizeObserver) {
              var element = targetElement.append(generateDiv(_classNameResizeObserverElement + ' observed')).contents()[0];
              var observer = element[_strResizeObserverProperty] = new resizeObserver(callback);
              observer.observe(element);
            } else {
              if (_msieVersion > 9 || !_autoUpdateRecommended) {
                targetElement.prepend(generateDiv(_classNameResizeObserverElement, generateDiv({
                  c: _classNameResizeObserverItemElement,
                  dir: 'ltr'
                }, generateDiv(_classNameResizeObserverItemElement, generateDiv(_classNameResizeObserverItemFinalElement)) + generateDiv(_classNameResizeObserverItemElement, generateDiv({
                  c: _classNameResizeObserverItemFinalElement,
                  style: 'width: 200%; height: 200%'
                })))));
                var observerElement = targetElement[0][strChildNodes][0][strChildNodes][0];
                var shrinkElement = FRAMEWORK(observerElement[strChildNodes][1]);
                var expandElement = FRAMEWORK(observerElement[strChildNodes][0]);
                var expandElementChild = FRAMEWORK(expandElement[0][strChildNodes][0]);
                var widthCache = observerElement[LEXICON.oW];
                var heightCache = observerElement[LEXICON.oH];
                var isDirty;
                var rAFId;
                var currWidth;
                var currHeight;
                var factor = 2;
                var nativeScrollbarSize = globals.nativeScrollbarSize; //care don't make changes to this object!!!

                var reset = function reset() {
                  /*
                   var sizeResetWidth = observerElement[LEXICON.oW] + nativeScrollbarSize.x * factor + nativeScrollbarSize.y * factor + _overlayScrollbarDummySize.x + _overlayScrollbarDummySize.y;
                   var sizeResetHeight = observerElement[LEXICON.oH] + nativeScrollbarSize.x * factor + nativeScrollbarSize.y * factor + _overlayScrollbarDummySize.x + _overlayScrollbarDummySize.y;
                   var expandChildCSS = {};
                   expandChildCSS[_strWidth] = sizeResetWidth;
                   expandChildCSS[_strHeight] = sizeResetHeight;
                   expandElementChild.css(expandChildCSS);
                     expandElement[_strScrollLeft](sizeResetWidth)[_strScrollTop](sizeResetHeight);
                   shrinkElement[_strScrollLeft](sizeResetWidth)[_strScrollTop](sizeResetHeight);
                   */
                  expandElement[_strScrollLeft](constScroll)[_strScrollTop](constScroll);

                  shrinkElement[_strScrollLeft](constScroll)[_strScrollTop](constScroll);
                };

                var onResized = function onResized() {
                  rAFId = 0;
                  if (!isDirty) return;
                  widthCache = currWidth;
                  heightCache = currHeight;
                  callback();
                };

                var onScroll = function onScroll(event) {
                  currWidth = observerElement[LEXICON.oW];
                  currHeight = observerElement[LEXICON.oH];
                  isDirty = currWidth != widthCache || currHeight != heightCache;

                  if (event && isDirty && !rAFId) {
                    COMPATIBILITY.cAF()(rAFId);
                    rAFId = COMPATIBILITY.rAF()(onResized);
                  } else if (!event) onResized();

                  reset();

                  if (event) {
                    COMPATIBILITY.prvD(event);
                    COMPATIBILITY.stpP(event);
                  }

                  return false;
                };

                var expandChildCSS = {};
                var observerElementCSS = {};
                setTopRightBottomLeft(observerElementCSS, _strEmpty, [-((nativeScrollbarSize.y + 1) * factor), nativeScrollbarSize.x * -factor, nativeScrollbarSize.y * -factor, -((nativeScrollbarSize.x + 1) * factor)]);
                FRAMEWORK(observerElement).css(observerElementCSS);
                expandElement.on(_strScroll, onScroll);
                shrinkElement.on(_strScroll, onScroll);
                targetElement.on(strAnimationStartEvent, function () {
                  onScroll(false);
                }); //lets assume that the divs will never be that large and a constant value is enough

                expandChildCSS[_strWidth] = constScroll;
                expandChildCSS[_strHeight] = constScroll;
                expandElementChild.css(expandChildCSS);
                reset();
              } else {
                var attachEvent = _documentElementNative.attachEvent;
                var isIE = _msieVersion !== undefined;

                if (attachEvent) {
                  targetElement.prepend(generateDiv(_classNameResizeObserverElement));
                  findFirst(targetElement, _strDot + _classNameResizeObserverElement)[0].attachEvent('onresize', callback);
                } else {
                  var obj = _documentElementNative.createElement(TYPES.o);

                  obj.setAttribute('tabindex', '-1');
                  obj.setAttribute(LEXICON.c, _classNameResizeObserverElement);

                  obj.onload = function () {
                    var wnd = this.contentDocument.defaultView;
                    wnd.addEventListener('resize', callback);
                    wnd.document.documentElement.style.display = 'none';
                  };

                  obj.type = 'text/html';
                  if (isIE) targetElement.prepend(obj);
                  obj.data = 'about:blank';
                  if (!isIE) targetElement.prepend(obj);
                  targetElement.on(strAnimationStartEvent, callback);
                }
              }
            }

            if (targetElement[0] === _sizeObserverElementNative) {
              var directionChanged = function directionChanged() {
                var dir = _hostElement.css('direction');

                var css = {};
                var scrollLeftValue = 0;
                var result = false;

                if (dir !== _cssDirectionDetectedCache) {
                  if (dir === 'ltr') {
                    css[_strLeft] = 0;
                    css[_strRight] = _strAuto;
                    scrollLeftValue = constScroll;
                  } else {
                    css[_strLeft] = _strAuto;
                    css[_strRight] = 0;
                    scrollLeftValue = _rtlScrollBehavior.n ? -constScroll : _rtlScrollBehavior.i ? 0 : constScroll;
                  } //execution order is important for IE!!!


                  _sizeObserverElement.children().eq(0).css(css);

                  _sizeObserverElement[_strScrollLeft](scrollLeftValue)[_strScrollTop](constScroll);

                  _cssDirectionDetectedCache = dir;
                  result = true;
                }

                return result;
              };

              directionChanged();
              addDestroyEventListener(targetElement, _strScroll, function (event) {
                if (directionChanged()) update();
                COMPATIBILITY.prvD(event);
                COMPATIBILITY.stpP(event);
                return false;
              });
            }
          } //remove resize observer:
          else {
              if (_supportResizeObserver) {
                var element = targetElement.contents()[0];
                var resizeObserverObj = element[_strResizeObserverProperty];

                if (resizeObserverObj) {
                  resizeObserverObj.disconnect();
                  delete element[_strResizeObserverProperty];
                }
              } else {
                remove(targetElement.children(_strDot + _classNameResizeObserverElement).eq(0));
              }
            }
        }
      }
      /**
       * Freezes or unfreezes the given resize observer.
       * @param targetElement The element to which the target resize observer is applied.
       * @param freeze True if the resize observer shall be frozen, false otherwise.
       
      function freezeResizeObserver(targetElement, freeze) {
          if (targetElement !== undefined) {
              if(freeze) {
                  if (_supportResizeObserver) {
                      var element = targetElement.contents()[0];
                      element[_strResizeObserverProperty].unobserve(element);
                  }
                  else {
                      targetElement = targetElement.children(_strDot + _classNameResizeObserverElement).eq(0);
                      var w = targetElement.css(_strWidth);
                      var h = targetElement.css(_strHeight);
                      var css = {};
                      css[_strWidth] = w;
                      css[_strHeight] = h;
                      targetElement.css(css);
                  }
              }
              else {
                  if (_supportResizeObserver) {
                      var element = targetElement.contents()[0];
                      element[_strResizeObserverProperty].observe(element);
                  }
                  else {
                      var css = { };
                      css[_strHeight] = _strEmpty;
                      css[_strWidth] = _strEmpty;
                      targetElement.children(_strDot + _classNameResizeObserverElement).eq(0).css(css);
                  }
              }
          }
      }
      */
      //==== Mutation Observers ====//

      /**
       * Creates MutationObservers for the host and content Element if they are supported.
       */


      function createMutationObservers() {
        if (_supportMutationObserver) {
          var mutationObserverContentLag = 11;
          var mutationObserver = COMPATIBILITY.mO();
          var contentLastUpdate = COMPATIBILITY.now();
          var mutationTarget;
          var mutationAttrName;
          var contentTimeout;
          var now;
          var sizeAuto;
          var action;

          _mutationObserverHostCallback = function _mutationObserverHostCallback(mutations) {
            var doUpdate = false;
            var mutation;

            if (_initialized && !_sleeping) {
              each(mutations, function () {
                mutation = this;
                mutationTarget = mutation.target;
                mutationAttrName = mutation.attributeName;
                if (mutationAttrName === LEXICON.c) doUpdate = hostClassNamesChanged(mutation.oldValue, mutationTarget.className);else if (mutationAttrName === LEXICON.s) doUpdate = mutation.oldValue !== mutationTarget[LEXICON.s].cssText;else doUpdate = true;
                if (doUpdate) return false;
              });
              if (doUpdate) _base.update(_strAuto);
            }

            return doUpdate;
          };

          _mutationObserverContentCallback = function _mutationObserverContentCallback(mutations) {
            var doUpdate = false;
            var mutation;

            if (_initialized && !_sleeping) {
              each(mutations, function () {
                mutation = this;
                doUpdate = isUnknownMutation(mutation);
                return !doUpdate;
              });

              if (doUpdate) {
                now = COMPATIBILITY.now();
                sizeAuto = _heightAutoCache || _widthAutoCache;

                action = function action() {
                  if (!_destroyed) {
                    contentLastUpdate = now; //if cols, rows or wrap attr was changed

                    if (_isTextarea) textareaUpdate();
                    if (sizeAuto) update();else _base.update(_strAuto);
                  }
                };

                clearTimeout(contentTimeout);
                if (mutationObserverContentLag <= 0 || now - contentLastUpdate > mutationObserverContentLag || !sizeAuto) action();else contentTimeout = setTimeout(action, mutationObserverContentLag);
              }
            }

            return doUpdate;
          };

          _mutationObserverHost = new mutationObserver(_mutationObserverHostCallback);
          _mutationObserverContent = new mutationObserver(_mutationObserverContentCallback);
        }
      }
      /**
       * Connects the MutationObservers if they are supported.
       */


      function connectMutationObservers() {
        if (_supportMutationObserver && !_mutationObserversConnected) {
          _mutationObserverHost.observe(_hostElementNative, {
            attributes: true,
            attributeOldValue: true,
            attributeFilter: _mutationObserverAttrsHost
          });

          _mutationObserverContent.observe(_isTextarea ? _targetElementNative : _contentElementNative, {
            attributes: true,
            attributeOldValue: true,
            subtree: !_isTextarea,
            childList: !_isTextarea,
            characterData: !_isTextarea,
            attributeFilter: _isTextarea ? _mutationObserverAttrsTextarea : _mutationObserverAttrsHost
          });

          _mutationObserversConnected = true;
        }
      }
      /**
       * Disconnects the MutationObservers if they are supported.
       */


      function disconnectMutationObservers() {
        if (_supportMutationObserver && _mutationObserversConnected) {
          _mutationObserverHost.disconnect();

          _mutationObserverContent.disconnect();

          _mutationObserversConnected = false;
        }
      } //==== Events of elements ====//

      /**
       * This method gets called every time the host element gets resized. IMPORTANT: Padding changes are detected too!!
       * It refreshes the hostResizedEventArgs and the hostSizeResizeCache.
       * If there are any size changes, the update method gets called.
       */


      function hostOnResized() {
        if (!_sleeping) {
          var changed;
          var hostSize = {
            w: _sizeObserverElementNative[LEXICON.sW],
            h: _sizeObserverElementNative[LEXICON.sH]
          };
          changed = checkCache(hostSize, _hostElementSizeChangeDetectedCache);
          _hostElementSizeChangeDetectedCache = hostSize;
          if (changed) update({
            _hostSizeChanged: true
          });
        }
      }
      /**
       * The mouse enter event of the host element. This event is only needed for the autoHide feature.
       */


      function hostOnMouseEnter() {
        if (_scrollbarsAutoHideLeave) refreshScrollbarsAutoHide(true);
      }
      /**
       * The mouse leave event of the host element. This event is only needed for the autoHide feature.
       */


      function hostOnMouseLeave() {
        if (_scrollbarsAutoHideLeave && !_bodyElement.hasClass(_classNameDragging)) refreshScrollbarsAutoHide(false);
      }
      /**
       * The mouse move event of the host element. This event is only needed for the autoHide "move" feature.
       */


      function hostOnMouseMove() {
        if (_scrollbarsAutoHideMove) {
          refreshScrollbarsAutoHide(true);
          clearTimeout(_scrollbarsAutoHideMoveTimeoutId);
          _scrollbarsAutoHideMoveTimeoutId = setTimeout(function () {
            if (_scrollbarsAutoHideMove && !_destroyed) refreshScrollbarsAutoHide(false);
          }, 100);
        }
      }
      /**
       * Prevents text from deselection if attached to the document element on the mousedown event of a DOM element.
       * @param event The select start event.
       */


      function documentOnSelectStart(event) {
        COMPATIBILITY.prvD(event);
        return false;
      }
      /**
       * A callback which will be called after a img element has downloaded its src asynchronous.
       */


      function imgOnLoad() {
        update({
          _contentSizeChanged: true
        });
      }
      /**
      * Adds or removes mouse & touch events of the host element. (for handling auto-hiding of the scrollbars)
      * @param destroy Indicates whether the events shall be added or removed.
      */


      function setupHostMouseTouchEvents(destroy) {
        setupResponsiveEventListener(_hostElement, _strMouseTouchMoveEvent, hostOnMouseMove, _scrollbarsAutoHideMove ? destroy : true, true);
        setupResponsiveEventListener(_hostElement, [_strMouseTouchEnter, _strMouseTouchLeave], [hostOnMouseEnter, hostOnMouseLeave], _scrollbarsAutoHideMove ? true : destroy, true); //if the plugin is initialized and the mouse is over the host element, make the scrollbars visible

        if (!_initialized && !destroy) _hostElement.one('mouseover', hostOnMouseEnter);
      } //==== Update Detection ====//

      /**
       * Measures the min width and min height of the body element and refreshes the related cache.
       * @returns {boolean} True if the min width or min height has changed, false otherwise.
       */


      function bodyMinSizeChanged() {
        var bodyMinSize = {};

        if (_isBody && _contentArrangeElement) {
          bodyMinSize.w = parseToZeroOrNumber(_contentArrangeElement.css(_strMinMinus + _strWidth));
          bodyMinSize.h = parseToZeroOrNumber(_contentArrangeElement.css(_strMinMinus + _strHeight));
          bodyMinSize.c = checkCache(bodyMinSize, _bodyMinSizeCache);
          bodyMinSize.f = true; //flag for "measured at least once"
        }

        _bodyMinSizeCache = bodyMinSize;
        return !!bodyMinSize.c;
      }
      /**
       * Returns true if the class names really changed (new class without plugin host prefix)
       * @param oldCassNames The old ClassName string.
       * @param newClassNames The new ClassName string.
       * @returns {boolean} True if the class names has really changed, false otherwise.
       */


      function hostClassNamesChanged(oldCassNames, newClassNames) {
        var currClasses = newClassNames !== undefined && newClassNames !== null ? newClassNames.split(_strSpace) : _strEmpty;
        var oldClasses = oldCassNames !== undefined && oldCassNames !== null ? oldCassNames.split(_strSpace) : _strEmpty;
        if (currClasses === _strEmpty && oldClasses === _strEmpty) return false;
        var diff = getArrayDifferences(oldClasses, currClasses);
        var changed = false;
        var oldClassNames = _oldClassName !== undefined && _oldClassName !== null ? _oldClassName.split(_strSpace) : [_strEmpty];
        var currClassNames = _classNameCache !== undefined && _classNameCache !== null ? _classNameCache.split(_strSpace) : [_strEmpty]; //remove none theme from diff list to prevent update

        var idx = inArray(_classNameThemeNone, diff);
        var curr;
        var i;
        var v;
        var o;
        var c;
        if (idx > -1) diff.splice(idx, 1);

        for (i = 0; i < diff.length; i++) {
          curr = diff[i];

          if (curr.indexOf(_classNameHostElement) !== 0) {
            o = true;
            c = true;

            for (v = 0; v < oldClassNames.length; v++) {
              if (curr === oldClassNames[v]) {
                o = false;
                break;
              }
            }

            for (v = 0; v < currClassNames.length; v++) {
              if (curr === currClassNames[v]) {
                c = false;
                break;
              }
            }

            if (o && c) {
              changed = true;
              break;
            }
          }
        }

        return changed;
      }
      /**
       * Returns true if the given mutation is not from a from the plugin generated element. If the target element is a textarea the mutation is always unknown.
       * @param mutation The mutation which shall be checked.
       * @returns {boolean} True if the mutation is from a unknown element, false otherwise.
       */


      function isUnknownMutation(mutation) {
        var attributeName = mutation.attributeName;
        var mutationTarget = mutation.target;
        var mutationType = mutation.type;
        var strClosest = 'closest';
        if (mutationTarget === _contentElementNative) return attributeName === null;

        if (mutationType === 'attributes' && (attributeName === LEXICON.c || attributeName === LEXICON.s) && !_isTextarea) {
          //ignore className changes by the plugin
          if (attributeName === LEXICON.c && FRAMEWORK(mutationTarget).hasClass(_classNameHostElement)) return hostClassNamesChanged(mutation.oldValue, mutationTarget.getAttribute(LEXICON.c)); //only do it of browser support it natively

          if (typeof mutationTarget[strClosest] != TYPES.f) return true;
          if (mutationTarget[strClosest](_strDot + _classNameResizeObserverElement) !== null || mutationTarget[strClosest](_strDot + _classNameScrollbar) !== null || mutationTarget[strClosest](_strDot + _classNameScrollbarCorner) !== null) return false;
        }

        return true;
      }
      /**
       * Returns true if the content size was changed since the last time this method was called.
       * @returns {boolean} True if the content size was changed, false otherwise.
       */


      function updateAutoContentSizeChanged() {
        if (_sleeping) return false;
        var contentMeasureElement = getContentMeasureElement();
        var textareaValueLength = _isTextarea && _widthAutoCache && !_textareaAutoWrappingCache ? _targetElement.val().length : 0;
        var setCSS = !_mutationObserversConnected && _widthAutoCache && !_isTextarea;
        var viewportScrollSize = {};
        var css = {};

        var _float;

        var bodyMinSizeC;
        var changed;
        var viewportScrollSizeChanged;
        var contentElementScrollSize; //fix for https://bugzilla.mozilla.org/show_bug.cgi?id=1439305, it only works with "clipAlways : true"
        //it can work with "clipAlways : false" too, but I had to set the overflow of the viewportElement to hidden every time before measuring

        if (_restrictedMeasuring) {
          viewportScrollSize = {
            x: _viewportElementNative[LEXICON.sW],
            y: _viewportElementNative[LEXICON.sH]
          };
        }

        if (setCSS) {
          _float = _contentElement.css(_strFloat);
          css[_strFloat] = _isRTL ? _strRight : _strLeft;
          css[_strWidth] = _strAuto;

          _contentElement.css(css);
        }

        contentElementScrollSize = {
          w: contentMeasureElement[LEXICON.sW] + textareaValueLength,
          h: contentMeasureElement[LEXICON.sH] + textareaValueLength
        };

        if (setCSS) {
          css[_strFloat] = _float;
          css[_strWidth] = _strHundredPercent;

          _contentElement.css(css);
        }

        bodyMinSizeC = bodyMinSizeChanged();
        changed = checkCache(contentElementScrollSize, _contentElementScrollSizeChangeDetectedCache);
        viewportScrollSizeChanged = checkCache(viewportScrollSize, _viewportScrollSizeCache);
        _contentElementScrollSizeChangeDetectedCache = contentElementScrollSize;
        _viewportScrollSizeCache = viewportScrollSize;
        return changed || bodyMinSizeC || viewportScrollSizeChanged;
      }
      /**
       * Returns true when a attribute which the MutationObserver would observe has changed.  
       * @returns {boolean} True if one of the attributes which a MutationObserver would observe has changed, false or undefined otherwise.
       */


      function meaningfulAttrsChanged() {
        if (_sleeping || _mutationObserversConnected) return;
        var changed;
        var elem;
        var curr;
        var cache;
        var checks = [{
          _elem: _hostElement,
          _props: _mutationObserverAttrsHost.concat(':visible')
        }, {
          _elem: _isTextarea ? _targetElement : undefined,
          _props: _mutationObserverAttrsTextarea
        }];
        each(checks, function (index, check) {
          elem = check._elem;

          if (elem) {
            each(check._props, function (index, prop) {
              curr = prop.charAt(0) === ':' ? elem.is(prop) : elem.attr(prop);
              cache = _updateAutoCache[prop];
              changed = changed || checkCache(curr, cache);
              _updateAutoCache[prop] = curr;
            });
          }
        });
        return changed;
      }
      /**
       * Checks is a CSS Property of a child element is affecting the scroll size of the content.
       * @param propertyName The CSS property name.
       * @returns {boolean} True if the property is affecting the content scroll size, false otherwise.
       */


      function isSizeAffectingCSSProperty(propertyName) {
        if (!_initialized) return true;
        var flexGrow = 'flex-grow';
        var flexShrink = 'flex-shrink';
        var flexBasis = 'flex-basis';
        var affectingPropsX = [_strWidth, _strMinMinus + _strWidth, _strMaxMinus + _strWidth, _strMarginMinus + _strLeft, _strMarginMinus + _strRight, _strLeft, _strRight, 'font-weight', 'word-spacing', flexGrow, flexShrink, flexBasis];
        var affectingPropsXContentBox = [_strPaddingMinus + _strLeft, _strPaddingMinus + _strRight, _strBorderMinus + _strLeft + _strWidth, _strBorderMinus + _strRight + _strWidth];
        var affectingPropsY = [_strHeight, _strMinMinus + _strHeight, _strMaxMinus + _strHeight, _strMarginMinus + _strTop, _strMarginMinus + _strBottom, _strTop, _strBottom, 'line-height', flexGrow, flexShrink, flexBasis];
        var affectingPropsYContentBox = [_strPaddingMinus + _strTop, _strPaddingMinus + _strBottom, _strBorderMinus + _strTop + _strWidth, _strBorderMinus + _strBottom + _strWidth];
        var _strS = 's';
        var _strVS = 'v-s';
        var checkX = _overflowBehaviorCache.x === _strS || _overflowBehaviorCache.x === _strVS;
        var checkY = _overflowBehaviorCache.y === _strS || _overflowBehaviorCache.y === _strVS;
        var sizeIsAffected = false;

        var checkPropertyName = function checkPropertyName(arr, name) {
          for (var i = 0; i < arr[LEXICON.l]; i++) {
            if (arr[i] === name) return true;
          }

          return false;
        };

        if (checkY) {
          sizeIsAffected = checkPropertyName(affectingPropsY, propertyName);
          if (!sizeIsAffected && !_isBorderBox) sizeIsAffected = checkPropertyName(affectingPropsYContentBox, propertyName);
        }

        if (checkX && !sizeIsAffected) {
          sizeIsAffected = checkPropertyName(affectingPropsX, propertyName);
          if (!sizeIsAffected && !_isBorderBox) sizeIsAffected = checkPropertyName(affectingPropsXContentBox, propertyName);
        }

        return sizeIsAffected;
      } //==== Update ====//

      /**
       * Updates the variables and size of the textarea element, and manages the scroll on new line or new character.
       */


      function textareaUpdate() {
        if (!_sleeping) {
          var wrapAttrOff = !_textareaAutoWrappingCache;
          var minWidth = _viewportSize.w;
          var minHeight = _viewportSize.h;
          var css = {};
          var doMeasure = _widthAutoCache || wrapAttrOff;
          var origWidth;
          var width;
          var origHeight;
          var height; //reset min size

          css[_strMinMinus + _strWidth] = _strEmpty;
          css[_strMinMinus + _strHeight] = _strEmpty; //set width auto

          css[_strWidth] = _strAuto;

          _targetElement.css(css); //measure width


          origWidth = _targetElementNative[LEXICON.oW];
          width = doMeasure ? MATH.max(origWidth, _targetElementNative[LEXICON.sW] - 1) : 1;
          /*width += (_widthAutoCache ? _marginX + (!_isBorderBox ? wrapAttrOff ? 0 : _paddingX + _borderX : 0) : 0);*/
          //set measured width

          css[_strWidth] = _widthAutoCache ? _strAuto
          /*width*/
          : _strHundredPercent;
          css[_strMinMinus + _strWidth] = _strHundredPercent; //set height auto

          css[_strHeight] = _strAuto;

          _targetElement.css(css); //measure height


          origHeight = _targetElementNative[LEXICON.oH];
          height = MATH.max(origHeight, _targetElementNative[LEXICON.sH] - 1); //append correct size values

          css[_strWidth] = width;
          css[_strHeight] = height;

          _textareaCoverElement.css(css); //apply min width / min height to prevent textarea collapsing


          css[_strMinMinus + _strWidth] = minWidth
          /*+ (!_isBorderBox && _widthAutoCache ? _paddingX + _borderX : 0)*/
          ;
          css[_strMinMinus + _strHeight] = minHeight
          /*+ (!_isBorderBox && _heightAutoCache ? _paddingY + _borderY : 0)*/
          ;

          _targetElement.css(css);

          return {
            _originalWidth: origWidth,
            _originalHeight: origHeight,
            _dynamicWidth: width,
            _dynamicHeight: height
          };
        }
      }
      /**
       * Updates the plugin and DOM to the current options.
       * This method should only be called if a update is 100% required.
       * @param updateHints A objects which contains hints for this update:
       * {
       *   _hostSizeChanged : boolean,
       *   _contentSizeChanged : boolean,
       *   _force : boolean,                             == preventSwallowing
       *   _changedOptions : { },                        == preventSwallowing && preventSleep
      *  }
       */


      function update(updateHints) {
        clearTimeout(_swallowedUpdateTimeout);
        updateHints = updateHints || {};
        _swallowedUpdateHints._hostSizeChanged |= updateHints._hostSizeChanged;
        _swallowedUpdateHints._contentSizeChanged |= updateHints._contentSizeChanged;
        _swallowedUpdateHints._force |= updateHints._force;
        var now = COMPATIBILITY.now();
        var hostSizeChanged = !!_swallowedUpdateHints._hostSizeChanged;
        var contentSizeChanged = !!_swallowedUpdateHints._contentSizeChanged;
        var force = !!_swallowedUpdateHints._force;
        var changedOptions = updateHints._changedOptions;
        var swallow = _swallowUpdateLag > 0 && _initialized && !_destroyed && !force && !changedOptions && now - _lastUpdateTime < _swallowUpdateLag && !_heightAutoCache && !_widthAutoCache;
        var displayIsHidden;
        if (swallow) _swallowedUpdateTimeout = setTimeout(update, _swallowUpdateLag); //abort update due to:
        //destroyed
        //swallowing
        //sleeping
        //host is hidden or has false display

        if (_destroyed || swallow || _sleeping && !changedOptions || _initialized && !force && (displayIsHidden = _hostElement.is(':hidden')) || _hostElement.css('display') === 'inline') return;
        _lastUpdateTime = now;
        _swallowedUpdateHints = {}; //if scrollbar styling is possible and native scrollbars aren't overlaid the scrollbar styling will be applied which hides the native scrollbars completely.

        if (_nativeScrollbarStyling && !(_nativeScrollbarIsOverlaid.x && _nativeScrollbarIsOverlaid.y)) {
          //native scrollbars are hidden, so change the values to zero
          _nativeScrollbarSize.x = 0;
          _nativeScrollbarSize.y = 0;
        } else {
          //refresh native scrollbar size (in case of zoom)
          _nativeScrollbarSize = extendDeep({}, globals.nativeScrollbarSize);
        } // Scrollbar padding is needed for firefox, because firefox hides scrollbar automatically if the size of the div is too small.
        // The calculation: [scrollbar size +3 *3]
        // (+3 because of possible decoration e.g. borders, margins etc., but only if native scrollbar is NOT a overlaid scrollbar)
        // (*3 because (1)increase / (2)decrease -button and (3)resize handle)


        _nativeScrollbarMinSize = {
          x: (_nativeScrollbarSize.x + (_nativeScrollbarIsOverlaid.x ? 0 : 3)) * 3,
          y: (_nativeScrollbarSize.y + (_nativeScrollbarIsOverlaid.y ? 0 : 3)) * 3
        }; //changedOptions = changedOptions || { };
        //freezeResizeObserver(_sizeObserverElement, true);
        //freezeResizeObserver(_sizeAutoObserverElement, true);

        var checkCacheAutoForce = function checkCacheAutoForce() {
          return checkCache.apply(this, [].slice.call(arguments).concat([force]));
        }; //save current scroll offset


        var currScroll = {
          x: _viewportElement[_strScrollLeft](),
          y: _viewportElement[_strScrollTop]()
        };
        var currentPreparedOptionsScrollbars = _currentPreparedOptions.scrollbars;
        var currentPreparedOptionsTextarea = _currentPreparedOptions.textarea; //scrollbars visibility:

        var scrollbarsVisibility = currentPreparedOptionsScrollbars.visibility;
        var scrollbarsVisibilityChanged = checkCacheAutoForce(scrollbarsVisibility, _scrollbarsVisibilityCache); //scrollbars autoHide:

        var scrollbarsAutoHide = currentPreparedOptionsScrollbars.autoHide;
        var scrollbarsAutoHideChanged = checkCacheAutoForce(scrollbarsAutoHide, _scrollbarsAutoHideCache); //scrollbars click scrolling

        var scrollbarsClickScrolling = currentPreparedOptionsScrollbars.clickScrolling;
        var scrollbarsClickScrollingChanged = checkCacheAutoForce(scrollbarsClickScrolling, _scrollbarsClickScrollingCache); //scrollbars drag scrolling

        var scrollbarsDragScrolling = currentPreparedOptionsScrollbars.dragScrolling;
        var scrollbarsDragScrollingChanged = checkCacheAutoForce(scrollbarsDragScrolling, _scrollbarsDragScrollingCache); //className

        var className = _currentPreparedOptions.className;
        var classNameChanged = checkCacheAutoForce(className, _classNameCache); //resize

        var resize = _currentPreparedOptions.resize;
        var resizeChanged = checkCacheAutoForce(resize, _resizeCache) && !_isBody; //body can't be resized since the window itself acts as resize possibility.
        //paddingAbsolute

        var paddingAbsolute = _currentPreparedOptions.paddingAbsolute;
        var paddingAbsoluteChanged = checkCacheAutoForce(paddingAbsolute, _paddingAbsoluteCache); //clipAlways

        var clipAlways = _currentPreparedOptions.clipAlways;
        var clipAlwaysChanged = checkCacheAutoForce(clipAlways, _clipAlwaysCache); //sizeAutoCapable

        var sizeAutoCapable = _currentPreparedOptions.sizeAutoCapable && !_isBody; //body can never be size auto, because it shall be always as big as the viewport.

        var sizeAutoCapableChanged = checkCacheAutoForce(sizeAutoCapable, _sizeAutoCapableCache); //showNativeScrollbars

        var ignoreOverlayScrollbarHiding = _currentPreparedOptions.nativeScrollbarsOverlaid.showNativeScrollbars;
        var ignoreOverlayScrollbarHidingChanged = checkCacheAutoForce(ignoreOverlayScrollbarHiding, _ignoreOverlayScrollbarHidingCache); //autoUpdate

        var autoUpdate = _currentPreparedOptions.autoUpdate;
        var autoUpdateChanged = checkCacheAutoForce(autoUpdate, _autoUpdateCache); //overflowBehavior

        var overflowBehavior = _currentPreparedOptions.overflowBehavior;
        var overflowBehaviorChanged = checkCacheAutoForce(overflowBehavior, _overflowBehaviorCache, force); //dynWidth:

        var textareaDynWidth = currentPreparedOptionsTextarea.dynWidth;
        var textareaDynWidthChanged = checkCacheAutoForce(_textareaDynWidthCache, textareaDynWidth); //dynHeight:

        var textareaDynHeight = currentPreparedOptionsTextarea.dynHeight;
        var textareaDynHeightChanged = checkCacheAutoForce(_textareaDynHeightCache, textareaDynHeight); //scrollbars visibility

        _scrollbarsAutoHideNever = scrollbarsAutoHide === 'n';
        _scrollbarsAutoHideScroll = scrollbarsAutoHide === 's';
        _scrollbarsAutoHideMove = scrollbarsAutoHide === 'm';
        _scrollbarsAutoHideLeave = scrollbarsAutoHide === 'l'; //scrollbars autoHideDelay

        _scrollbarsAutoHideDelay = currentPreparedOptionsScrollbars.autoHideDelay; //old className

        _oldClassName = _classNameCache; //resize

        _resizeNone = resize === 'n';
        _resizeBoth = resize === 'b';
        _resizeHorizontal = resize === 'h';
        _resizeVertical = resize === 'v'; //normalizeRTL

        _normalizeRTLCache = _currentPreparedOptions.normalizeRTL; //ignore overlay scrollbar hiding

        ignoreOverlayScrollbarHiding = ignoreOverlayScrollbarHiding && _nativeScrollbarIsOverlaid.x && _nativeScrollbarIsOverlaid.y; //refresh options cache

        _scrollbarsVisibilityCache = scrollbarsVisibility;
        _scrollbarsAutoHideCache = scrollbarsAutoHide;
        _scrollbarsClickScrollingCache = scrollbarsClickScrolling;
        _scrollbarsDragScrollingCache = scrollbarsDragScrolling;
        _classNameCache = className;
        _resizeCache = resize;
        _paddingAbsoluteCache = paddingAbsolute;
        _clipAlwaysCache = clipAlways;
        _sizeAutoCapableCache = sizeAutoCapable;
        _ignoreOverlayScrollbarHidingCache = ignoreOverlayScrollbarHiding;
        _autoUpdateCache = autoUpdate;
        _overflowBehaviorCache = extendDeep({}, overflowBehavior);
        _textareaDynWidthCache = textareaDynWidth;
        _textareaDynHeightCache = textareaDynHeight;
        _hasOverflowCache = _hasOverflowCache || {
          x: false,
          y: false
        }; //set correct class name to the host element

        if (classNameChanged) {
          removeClass(_hostElement, _oldClassName + _strSpace + _classNameThemeNone);
          addClass(_hostElement, className !== undefined && className !== null && className.length > 0 ? className : _classNameThemeNone);
        } //set correct auto Update


        if (autoUpdateChanged) {
          if (autoUpdate === true) {
            disconnectMutationObservers();
            autoUpdateLoop.add(_base);
          } else if (autoUpdate === null) {
            if (_autoUpdateRecommended) {
              disconnectMutationObservers();
              autoUpdateLoop.add(_base);
            } else {
              autoUpdateLoop.remove(_base);
              connectMutationObservers();
            }
          } else {
            autoUpdateLoop.remove(_base);
            connectMutationObservers();
          }
        } //activate or deactivate size auto capability


        if (sizeAutoCapableChanged) {
          if (sizeAutoCapable) {
            if (!_contentGlueElement) {
              _contentGlueElement = FRAMEWORK(generateDiv(_classNameContentGlueElement));

              _paddingElement.before(_contentGlueElement);
            } else {
              _contentGlueElement.show();
            }

            if (_sizeAutoObserverAdded) {
              _sizeAutoObserverElement.show();
            } else {
              _sizeAutoObserverElement = FRAMEWORK(generateDiv(_classNameSizeAutoObserverElement));
              _sizeAutoObserverElementNative = _sizeAutoObserverElement[0];

              _contentGlueElement.before(_sizeAutoObserverElement);

              var oldSize = {
                w: -1,
                h: -1
              };
              setupResizeObserver(_sizeAutoObserverElement, function () {
                var newSize = {
                  w: _sizeAutoObserverElementNative[LEXICON.oW],
                  h: _sizeAutoObserverElementNative[LEXICON.oH]
                };

                if (checkCache(newSize, oldSize)) {
                  if (_initialized && _heightAutoCache && newSize.h > 0 || _widthAutoCache && newSize.w > 0) {
                    update();
                  } else if (_initialized && !_heightAutoCache && newSize.h === 0 || !_widthAutoCache && newSize.w === 0) {
                    update();
                  }
                }

                oldSize = newSize;
              });
              _sizeAutoObserverAdded = true; //fix heightAuto detector bug if height is fixed but contentHeight is 0.
              //the probability this bug will ever happen is very very low, thats why its ok if we use calc which isn't supported in IE8.

              if (_cssCalc !== null) _sizeAutoObserverElement.css(_strHeight, _cssCalc + '(100% + 1px)');
            }
          } else {
            if (_sizeAutoObserverAdded) _sizeAutoObserverElement.hide();
            if (_contentGlueElement) _contentGlueElement.hide();
          }
        } //if force, update all resizeObservers too


        if (force) {
          _sizeObserverElement.find('*').trigger(_strScroll);

          if (_sizeAutoObserverAdded) _sizeAutoObserverElement.find('*').trigger(_strScroll);
        } //display hidden:


        displayIsHidden = displayIsHidden === undefined ? _hostElement.is(':hidden') : displayIsHidden;
        var displayIsHiddenChanged = checkCacheAutoForce(displayIsHidden, _displayIsHiddenCache); //textarea AutoWrapping:

        var textareaAutoWrapping = _isTextarea ? _targetElement.attr('wrap') !== 'off' : false;
        var textareaAutoWrappingChanged = checkCacheAutoForce(textareaAutoWrapping, _textareaAutoWrappingCache); //detect direction:

        var cssDirection = _hostElement.css('direction');

        var cssDirectionChanged = checkCacheAutoForce(cssDirection, _cssDirectionCache); //detect box-sizing:

        var boxSizing = _hostElement.css('box-sizing');

        var boxSizingChanged = checkCacheAutoForce(boxSizing, _cssBoxSizingCache); //detect padding:

        var padding = {
          c: force,
          t: parseToZeroOrNumber(_hostElement.css(_strPaddingMinus + _strTop)),
          r: parseToZeroOrNumber(_hostElement.css(_strPaddingMinus + _strRight)),
          b: parseToZeroOrNumber(_hostElement.css(_strPaddingMinus + _strBottom)),
          l: parseToZeroOrNumber(_hostElement.css(_strPaddingMinus + _strLeft))
        }; //width + height auto detecting var:

        var sizeAutoObserverElementBCRect; //exception occurs in IE8 sometimes (unknown exception)

        try {
          sizeAutoObserverElementBCRect = _sizeAutoObserverAdded ? _sizeAutoObserverElementNative[LEXICON.bCR]() : null;
        } catch (ex) {
          return;
        }

        _isRTL = cssDirection === 'rtl';
        _isBorderBox = boxSizing === 'border-box';
        var isRTLLeft = _isRTL ? _strLeft : _strRight;
        var isRTLRight = _isRTL ? _strRight : _strLeft; //detect width auto:

        var widthAutoResizeDetection = false;
        var widthAutoObserverDetection = _sizeAutoObserverAdded && _hostElement.css(_strFloat) !== 'none'
        /*|| _isTextarea */
        ? MATH.round(sizeAutoObserverElementBCRect.right - sizeAutoObserverElementBCRect.left) === 0 && (!paddingAbsolute ? _hostElementNative[LEXICON.cW] - _paddingX > 0 : true) : false;

        if (sizeAutoCapable && !widthAutoObserverDetection) {
          var tmpCurrHostWidth = _hostElementNative[LEXICON.oW];

          var tmpCurrContentGlueWidth = _contentGlueElement.css(_strWidth);

          _contentGlueElement.css(_strWidth, _strAuto);

          var tmpNewHostWidth = _hostElementNative[LEXICON.oW];

          _contentGlueElement.css(_strWidth, tmpCurrContentGlueWidth);

          widthAutoResizeDetection = tmpCurrHostWidth !== tmpNewHostWidth;

          if (!widthAutoResizeDetection) {
            _contentGlueElement.css(_strWidth, tmpCurrHostWidth + 1);

            tmpNewHostWidth = _hostElementNative[LEXICON.oW];

            _contentGlueElement.css(_strWidth, tmpCurrContentGlueWidth);

            widthAutoResizeDetection = tmpCurrHostWidth !== tmpNewHostWidth;
          }
        }

        var widthAuto = (widthAutoObserverDetection || widthAutoResizeDetection) && sizeAutoCapable && !displayIsHidden;
        var widthAutoChanged = checkCacheAutoForce(widthAuto, _widthAutoCache);
        var wasWidthAuto = !widthAuto && _widthAutoCache; //detect height auto:

        var heightAuto = _sizeAutoObserverAdded && sizeAutoCapable && !displayIsHidden ? MATH.round(sizeAutoObserverElementBCRect.bottom - sizeAutoObserverElementBCRect.top) === 0 :
        /* && (!paddingAbsolute && (_msieVersion > 9 || !_msieVersion) ? true : true) */
        false;
        var heightAutoChanged = checkCacheAutoForce(heightAuto, _heightAutoCache);
        var wasHeightAuto = !heightAuto && _heightAutoCache; //detect border:
        //we need the border only if border box and auto size

        var strMinusWidth = '-' + _strWidth;
        var updateBorderX = widthAuto && _isBorderBox || !_isBorderBox;
        var updateBorderY = heightAuto && _isBorderBox || !_isBorderBox;
        var border = {
          c: force,
          t: updateBorderY ? parseToZeroOrNumber(_hostElement.css(_strBorderMinus + _strTop + strMinusWidth), true) : 0,
          r: updateBorderX ? parseToZeroOrNumber(_hostElement.css(_strBorderMinus + _strRight + strMinusWidth), true) : 0,
          b: updateBorderY ? parseToZeroOrNumber(_hostElement.css(_strBorderMinus + _strBottom + strMinusWidth), true) : 0,
          l: updateBorderX ? parseToZeroOrNumber(_hostElement.css(_strBorderMinus + _strLeft + strMinusWidth), true) : 0
        }; //detect margin:

        var margin = {
          c: force,
          t: parseToZeroOrNumber(_hostElement.css(_strMarginMinus + _strTop)),
          r: parseToZeroOrNumber(_hostElement.css(_strMarginMinus + _strRight)),
          b: parseToZeroOrNumber(_hostElement.css(_strMarginMinus + _strBottom)),
          l: parseToZeroOrNumber(_hostElement.css(_strMarginMinus + _strLeft))
        }; //detect css max width & height:

        var cssMaxValue = {
          h: String(_hostElement.css(_strMaxMinus + _strHeight)),
          w: String(_hostElement.css(_strMaxMinus + _strWidth))
        }; //vars to apply correct css

        var contentElementCSS = {};
        var contentGlueElementCSS = {}; //funcs

        var getHostSize = function getHostSize() {
          //has to be clientSize because offsetSize respect borders
          return {
            w: _hostElementNative[LEXICON.cW],
            h: _hostElementNative[LEXICON.cH]
          };
        };

        var getViewportSize = function getViewportSize() {
          //viewport size is padding container because it never has padding, margin and a border
          //determine zoom rounding error -> sometimes scrollWidth/Height is smaller than clientWidth/Height
          //if this happens add the difference to the viewportSize to compensate the rounding error
          return {
            w: _paddingElementNative[LEXICON.oW] + MATH.max(0, _contentElementNative[LEXICON.cW] - _contentElementNative[LEXICON.sW]),
            h: _paddingElementNative[LEXICON.oH] + MATH.max(0, _contentElementNative[LEXICON.cH] - _contentElementNative[LEXICON.sH])
          };
        }; //set info for padding


        var paddingAbsoluteX = _paddingX = padding.l + padding.r;
        var paddingAbsoluteY = _paddingY = padding.t + padding.b;
        paddingAbsoluteX *= paddingAbsolute ? 1 : 0;
        paddingAbsoluteY *= paddingAbsolute ? 1 : 0;
        padding.c = checkCacheAutoForce(padding, _cssPaddingCache); //set info for border

        _borderX = border.l + border.r;
        _borderY = border.t + border.b;
        border.c = checkCacheAutoForce(border, _cssBorderCache); //set info for margin

        _marginX = margin.l + margin.r;
        _marginY = margin.t + margin.b;
        margin.c = checkCacheAutoForce(margin, _cssMarginCache); //set info for css max value

        cssMaxValue.ih = parseToZeroOrNumber(cssMaxValue.h); //ih = integer height

        cssMaxValue.iw = parseToZeroOrNumber(cssMaxValue.w); //iw = integer width

        cssMaxValue.ch = cssMaxValue.h.indexOf('px') > -1; //ch = correct height

        cssMaxValue.cw = cssMaxValue.w.indexOf('px') > -1; //cw = correct width

        cssMaxValue.c = checkCacheAutoForce(cssMaxValue, _cssMaxValueCache); //refresh cache

        _displayIsHiddenCache = displayIsHidden;
        _textareaAutoWrappingCache = textareaAutoWrapping;
        _cssDirectionCache = cssDirection;
        _cssBoxSizingCache = boxSizing;
        _widthAutoCache = widthAuto;
        _heightAutoCache = heightAuto;
        _cssPaddingCache = padding;
        _cssBorderCache = border;
        _cssMarginCache = margin;
        _cssMaxValueCache = cssMaxValue; //IEFix direction changed

        if (cssDirectionChanged && _sizeAutoObserverAdded) _sizeAutoObserverElement.css(_strFloat, isRTLRight); //apply padding:

        if (padding.c || cssDirectionChanged || paddingAbsoluteChanged || widthAutoChanged || heightAutoChanged || boxSizingChanged || sizeAutoCapableChanged) {
          var paddingElementCSS = {};
          var textareaCSS = {};
          setTopRightBottomLeft(contentGlueElementCSS, _strMarginMinus, [-padding.t, -padding.r, -padding.b, -padding.l]);

          if (paddingAbsolute) {
            setTopRightBottomLeft(paddingElementCSS, _strEmpty, [padding.t, padding.r, padding.b, padding.l]);
            if (_isTextarea) setTopRightBottomLeft(textareaCSS, _strPaddingMinus);else setTopRightBottomLeft(contentElementCSS, _strPaddingMinus);
          } else {
            setTopRightBottomLeft(paddingElementCSS, _strEmpty);
            if (_isTextarea) setTopRightBottomLeft(textareaCSS, _strPaddingMinus, [padding.t, padding.r, padding.b, padding.l]);else setTopRightBottomLeft(contentElementCSS, _strPaddingMinus, [padding.t, padding.r, padding.b, padding.l]);
          }

          _paddingElement.css(paddingElementCSS);

          _targetElement.css(textareaCSS);
        } //viewport size is padding container because it never has padding, margin and a border.


        _viewportSize = getViewportSize(); //update Textarea

        var textareaSize = _isTextarea ? textareaUpdate() : false;

        var textareaSizeChanged = _isTextarea && checkCacheAutoForce(textareaSize, _textareaSizeCache);

        var textareaDynOrigSize = _isTextarea && textareaSize ? {
          w: textareaDynWidth ? textareaSize._dynamicWidth : textareaSize._originalWidth,
          h: textareaDynHeight ? textareaSize._dynamicHeight : textareaSize._originalHeight
        } : {};
        _textareaSizeCache = textareaSize; //fix height auto / width auto in cooperation with current padding & boxSizing behavior:

        if (heightAuto && (heightAutoChanged || paddingAbsoluteChanged || boxSizingChanged || cssMaxValue.c || padding.c || border.c)) {
          /*
          if (cssMaxValue.ch)
              contentElementCSS[_strMaxMinus + _strHeight] =
                  (cssMaxValue.ch ? (cssMaxValue.ih - paddingAbsoluteY + (_isBorderBox ? -_borderY : _paddingY))
                  : _strEmpty);
          */
          contentElementCSS[_strHeight] = _strAuto;
        } else if (heightAutoChanged || paddingAbsoluteChanged) {
          contentElementCSS[_strMaxMinus + _strHeight] = _strEmpty;
          contentElementCSS[_strHeight] = _strHundredPercent;
        }

        if (widthAuto && (widthAutoChanged || paddingAbsoluteChanged || boxSizingChanged || cssMaxValue.c || padding.c || border.c || cssDirectionChanged)) {
          /*
          if (cssMaxValue.cw)
              contentElementCSS[_strMaxMinus + _strWidth] =
                  (cssMaxValue.cw ? (cssMaxValue.iw - paddingAbsoluteX + (_isBorderBox ? -_borderX : _paddingX)) +
                  (_nativeScrollbarIsOverlaid.y ? _overlayScrollbarDummySize.y : 0)
                  : _strEmpty);
          */
          contentElementCSS[_strWidth] = _strAuto;
          contentGlueElementCSS[_strMaxMinus + _strWidth] = _strHundredPercent; //IE Fix
        } else if (widthAutoChanged || paddingAbsoluteChanged) {
          contentElementCSS[_strMaxMinus + _strWidth] = _strEmpty;
          contentElementCSS[_strWidth] = _strHundredPercent;
          contentElementCSS[_strFloat] = _strEmpty;
          contentGlueElementCSS[_strMaxMinus + _strWidth] = _strEmpty; //IE Fix
        }

        if (widthAuto) {
          if (!cssMaxValue.cw) contentElementCSS[_strMaxMinus + _strWidth] = _strEmpty; //textareaDynOrigSize.w || _strAuto :: doesnt works because applied margin will shift width

          contentGlueElementCSS[_strWidth] = _strAuto;
          contentElementCSS[_strWidth] = _strAuto;
          contentElementCSS[_strFloat] = isRTLRight;
        } else {
          contentGlueElementCSS[_strWidth] = _strEmpty;
        }

        if (heightAuto) {
          if (!cssMaxValue.ch) contentElementCSS[_strMaxMinus + _strHeight] = _strEmpty; //textareaDynOrigSize.h || _contentElementNative[LEXICON.cH] :: use for anti scroll jumping

          contentGlueElementCSS[_strHeight] = textareaDynOrigSize.h || _contentElementNative[LEXICON.cH];
        } else {
          contentGlueElementCSS[_strHeight] = _strEmpty;
        }

        if (sizeAutoCapable) _contentGlueElement.css(contentGlueElementCSS);

        _contentElement.css(contentElementCSS); //CHECKPOINT HERE ~


        contentElementCSS = {};
        contentGlueElementCSS = {}; //if [content(host) client / scroll size, or target element direction, or content(host) max-sizes] changed, or force is true

        if (hostSizeChanged || contentSizeChanged || textareaSizeChanged || cssDirectionChanged || boxSizingChanged || paddingAbsoluteChanged || widthAutoChanged || widthAuto || heightAutoChanged || heightAuto || cssMaxValue.c || ignoreOverlayScrollbarHidingChanged || overflowBehaviorChanged || clipAlwaysChanged || resizeChanged || scrollbarsVisibilityChanged || scrollbarsAutoHideChanged || scrollbarsDragScrollingChanged || scrollbarsClickScrollingChanged || textareaDynWidthChanged || textareaDynHeightChanged || textareaAutoWrappingChanged) {
          var strOverflow = 'overflow';
          var strOverflowX = strOverflow + '-x';
          var strOverflowY = strOverflow + '-y';
          var strHidden = 'hidden';
          var strVisible = 'visible'; //decide whether the content overflow must get hidden for correct overflow measuring, it !MUST! be always hidden if the height is auto

          var hideOverflow4CorrectMeasuring = _restrictedMeasuring ? _nativeScrollbarIsOverlaid.x || _nativeScrollbarIsOverlaid.y || //it must be hidden if native scrollbars are overlaid
          _viewportSize.w < _nativeScrollbarMinSize.y || _viewportSize.h < _nativeScrollbarMinSize.x || //it must be hidden if host-element is too small
          heightAuto || displayIsHiddenChanged //it must be hidden if height is auto or display was changed
          : heightAuto; //if there is not the restricted Measuring bug, it must be hidden if the height is auto
          //Reset the viewport (very important for natively overlaid scrollbars and zoom change
          //don't change the overflow prop as it is very expensive and affects performance !A LOT!

          var viewportElementResetCSS = {};
          var resetXTmp = _hasOverflowCache.y && _hideOverflowCache.ys && !ignoreOverlayScrollbarHiding && !_nativeScrollbarStyling ? _nativeScrollbarIsOverlaid.y ? _viewportElement.css(isRTLLeft) : -_nativeScrollbarSize.y : 0;
          var resetBottomTmp = _hasOverflowCache.x && _hideOverflowCache.xs && !ignoreOverlayScrollbarHiding && !_nativeScrollbarStyling ? _nativeScrollbarIsOverlaid.x ? _viewportElement.css(_strBottom) : -_nativeScrollbarSize.x : 0;
          setTopRightBottomLeft(viewportElementResetCSS, _strEmpty);

          _viewportElement.css(viewportElementResetCSS);

          if (hideOverflow4CorrectMeasuring) _contentElement.css(strOverflow, strHidden); //measure several sizes:

          var contentMeasureElement = getContentMeasureElement(); //in Firefox content element has to have overflow hidden, else element margins aren't calculated properly, this element prevents this bug, but only if scrollbars aren't overlaid

          var contentMeasureElementGuaranty = _restrictedMeasuring && !hideOverflow4CorrectMeasuring ? _viewportElementNative : contentMeasureElement;
          var contentSize = {
            //use clientSize because natively overlaidScrollbars add borders
            w: textareaDynOrigSize.w || contentMeasureElement[LEXICON.cW],
            h: textareaDynOrigSize.h || contentMeasureElement[LEXICON.cH]
          };
          var scrollSize = {
            w: MATH.max(contentMeasureElement[LEXICON.sW], contentMeasureElementGuaranty[LEXICON.sW]),
            h: MATH.max(contentMeasureElement[LEXICON.sH], contentMeasureElementGuaranty[LEXICON.sH])
          }; //apply the correct viewport style and measure viewport size

          viewportElementResetCSS[_strBottom] = wasHeightAuto ? _strEmpty : resetBottomTmp;
          viewportElementResetCSS[isRTLLeft] = wasWidthAuto ? _strEmpty : resetXTmp;

          _viewportElement.css(viewportElementResetCSS);

          _viewportSize = getViewportSize(); //measure and correct several sizes

          var hostSize = getHostSize();
          var contentGlueSize = {
            //client/scrollSize + AbsolutePadding -> because padding is only applied to the paddingElement if its absolute, so you have to add it manually
            //hostSize is clientSize -> so padding should be added manually, right? FALSE! Because content glue is inside hostElement, so we don't have to worry about padding
            w: MATH.max((widthAuto ? contentSize.w : scrollSize.w) + paddingAbsoluteX, hostSize.w),
            h: MATH.max((heightAuto ? contentSize.h : scrollSize.h) + paddingAbsoluteY, hostSize.h)
          };
          contentGlueSize.c = checkCacheAutoForce(contentGlueSize, _contentGlueSizeCache);
          _contentGlueSizeCache = contentGlueSize; //apply correct contentGlue size

          if (sizeAutoCapable) {
            //size contentGlue correctly to make sure the element has correct size if the sizing switches to auto
            if (contentGlueSize.c || heightAuto || widthAuto) {
              contentGlueElementCSS[_strWidth] = contentGlueSize.w;
              contentGlueElementCSS[_strHeight] = contentGlueSize.h; //textarea-sizes are already calculated correctly at this point

              if (!_isTextarea) {
                contentSize = {
                  //use clientSize because natively overlaidScrollbars add borders
                  w: contentMeasureElement[LEXICON.cW],
                  h: contentMeasureElement[LEXICON.cH]
                };
              }
            }

            var textareaCoverCSS = {};

            var setContentGlueElementCSSfunction = function setContentGlueElementCSSfunction(horizontal) {
              var scrollbarVars = getScrollbarVars(horizontal);
              var wh = scrollbarVars._w_h;
              var strWH = scrollbarVars._width_height;
              var autoSize = horizontal ? widthAuto : heightAuto;
              var borderSize = horizontal ? _borderX : _borderY;
              var paddingSize = horizontal ? _paddingX : _paddingY;
              var marginSize = horizontal ? _marginX : _marginY;
              var maxSize = contentGlueElementCSS[strWH] + (_isBorderBox ? borderSize : -paddingSize); //make contentGlue size -1 if element is not auto sized, to make sure that a resize event happens when the element shrinks

              if (!autoSize || !autoSize && border.c) contentGlueElementCSS[strWH] = hostSize[wh] - (_isBorderBox ? 0 : paddingSize + borderSize) - 1 - marginSize; //if size is auto and host is same size as max size, make content glue size +1 to make sure size changes will be detected

              if (autoSize && cssMaxValue['c' + wh] && cssMaxValue['i' + wh] === maxSize) contentGlueElementCSS[strWH] = maxSize + (_isBorderBox ? 0 : paddingSize) + 1; //if size is auto and host is smaller than size as min size, make content glue size -1 to make sure size changes will be detected (this is only needed if padding is 0)

              if (autoSize && contentSize[wh] < _viewportSize[wh] && (horizontal && _isTextarea ? !textareaAutoWrapping : true)) {
                if (_isTextarea) textareaCoverCSS[strWH] = parseToZeroOrNumber(_textareaCoverElement.css(strWH)) - 1;
                contentGlueElementCSS[strWH] -= 1;
              } //make sure content glue size is at least 1


              if (contentSize[wh] > 0) contentGlueElementCSS[strWH] = MATH.max(1, contentGlueElementCSS[strWH]);
            };

            setContentGlueElementCSSfunction(true);
            setContentGlueElementCSSfunction(false);
            if (_isTextarea) _textareaCoverElement.css(textareaCoverCSS);

            _contentGlueElement.css(contentGlueElementCSS);
          }

          if (widthAuto) contentElementCSS[_strWidth] = _strHundredPercent;
          if (widthAuto && !_isBorderBox && !_mutationObserversConnected) contentElementCSS[_strFloat] = 'none'; //apply and reset content style

          _contentElement.css(contentElementCSS);

          contentElementCSS = {}; //measure again, but this time all correct sizes:

          var contentScrollSize = {
            w: MATH.max(contentMeasureElement[LEXICON.sW], contentMeasureElementGuaranty[LEXICON.sW]),
            h: MATH.max(contentMeasureElement[LEXICON.sH], contentMeasureElementGuaranty[LEXICON.sH])
          };
          contentScrollSize.c = contentSizeChanged = checkCacheAutoForce(contentScrollSize, _contentScrollSizeCache);
          _contentScrollSizeCache = contentScrollSize; //remove overflow hidden to restore overflow

          if (hideOverflow4CorrectMeasuring) _contentElement.css(strOverflow, _strEmpty); //refresh viewport size after correct measuring

          _viewportSize = getViewportSize();
          hostSize = getHostSize();
          hostSizeChanged = checkCacheAutoForce(hostSize, _hostSizeCache);
          _hostSizeCache = hostSize;
          var hideOverflowForceTextarea = _isTextarea && (_viewportSize.w === 0 || _viewportSize.h === 0);
          var previousOverflow = _overflowAmountCache;
          var overflowBehaviorIsVS = {};
          var overflowBehaviorIsVH = {};
          var overflowBehaviorIsS = {};
          var overflowAmount = {};
          var hasOverflow = {};
          var hideOverflow = {};
          var canScroll = {};

          var viewportRect = _paddingElementNative[LEXICON.bCR]();

          var setOverflowVariables = function setOverflowVariables(horizontal) {
            var scrollbarVars = getScrollbarVars(horizontal);
            var scrollbarVarsInverted = getScrollbarVars(!horizontal);
            var xyI = scrollbarVarsInverted._x_y;
            var xy = scrollbarVars._x_y;
            var wh = scrollbarVars._w_h;
            var widthHeight = scrollbarVars._width_height;
            var scrollMax = _strScroll + scrollbarVars._Left_Top + 'Max';
            var fractionalOverflowAmount = viewportRect[widthHeight] ? MATH.abs(viewportRect[widthHeight] - _viewportSize[wh]) : 0;
            overflowBehaviorIsVS[xy] = overflowBehavior[xy] === 'v-s';
            overflowBehaviorIsVH[xy] = overflowBehavior[xy] === 'v-h';
            overflowBehaviorIsS[xy] = overflowBehavior[xy] === 's';
            overflowAmount[xy] = MATH.max(0, MATH.round((contentScrollSize[wh] - _viewportSize[wh]) * 100) / 100);
            overflowAmount[xy] *= hideOverflowForceTextarea || _viewportElementNative[scrollMax] === 0 && fractionalOverflowAmount > 0 && fractionalOverflowAmount < 1 ? 0 : 1;
            hasOverflow[xy] = overflowAmount[xy] > 0; //hideOverflow:
            //x || y : true === overflow is hidden by "overflow: scroll" OR "overflow: hidden"
            //xs || ys : true === overflow is hidden by "overflow: scroll"

            hideOverflow[xy] = overflowBehaviorIsVS[xy] || overflowBehaviorIsVH[xy] ? hasOverflow[xyI] && !overflowBehaviorIsVS[xyI] && !overflowBehaviorIsVH[xyI] : hasOverflow[xy];
            hideOverflow[xy + 's'] = hideOverflow[xy] ? overflowBehaviorIsS[xy] || overflowBehaviorIsVS[xy] : false;
            canScroll[xy] = hasOverflow[xy] && hideOverflow[xy + 's'];
          };

          setOverflowVariables(true);
          setOverflowVariables(false);
          overflowAmount.c = checkCacheAutoForce(overflowAmount, _overflowAmountCache);
          _overflowAmountCache = overflowAmount;
          hasOverflow.c = checkCacheAutoForce(hasOverflow, _hasOverflowCache);
          _hasOverflowCache = hasOverflow;
          hideOverflow.c = checkCacheAutoForce(hideOverflow, _hideOverflowCache);
          _hideOverflowCache = hideOverflow; //if native scrollbar is overlay at x OR y axis, prepare DOM

          if (_nativeScrollbarIsOverlaid.x || _nativeScrollbarIsOverlaid.y) {
            var borderDesign = 'px solid transparent';
            var contentArrangeElementCSS = {};
            var arrangeContent = {};
            var arrangeChanged = force;
            var setContentElementCSS;

            if (hasOverflow.x || hasOverflow.y) {
              arrangeContent.w = _nativeScrollbarIsOverlaid.y && hasOverflow.y ? contentScrollSize.w + _overlayScrollbarDummySize.y : _strEmpty;
              arrangeContent.h = _nativeScrollbarIsOverlaid.x && hasOverflow.x ? contentScrollSize.h + _overlayScrollbarDummySize.x : _strEmpty;
              arrangeChanged = checkCacheAutoForce(arrangeContent, _arrangeContentSizeCache);
              _arrangeContentSizeCache = arrangeContent;
            }

            if (hasOverflow.c || hideOverflow.c || contentScrollSize.c || cssDirectionChanged || widthAutoChanged || heightAutoChanged || widthAuto || heightAuto || ignoreOverlayScrollbarHidingChanged) {
              contentElementCSS[_strMarginMinus + isRTLRight] = contentElementCSS[_strBorderMinus + isRTLRight] = _strEmpty;

              setContentElementCSS = function setContentElementCSS(horizontal) {
                var scrollbarVars = getScrollbarVars(horizontal);
                var scrollbarVarsInverted = getScrollbarVars(!horizontal);
                var xy = scrollbarVars._x_y;
                var strDirection = horizontal ? _strBottom : isRTLLeft;
                var invertedAutoSize = horizontal ? heightAuto : widthAuto;

                if (_nativeScrollbarIsOverlaid[xy] && hasOverflow[xy] && hideOverflow[xy + 's']) {
                  contentElementCSS[_strMarginMinus + strDirection] = invertedAutoSize ? ignoreOverlayScrollbarHiding ? _strEmpty : _overlayScrollbarDummySize[xy] : _strEmpty;
                  contentElementCSS[_strBorderMinus + strDirection] = (horizontal ? !invertedAutoSize : true) && !ignoreOverlayScrollbarHiding ? _overlayScrollbarDummySize[xy] + borderDesign : _strEmpty;
                } else {
                  arrangeContent[scrollbarVarsInverted._w_h] = contentElementCSS[_strMarginMinus + strDirection] = contentElementCSS[_strBorderMinus + strDirection] = _strEmpty;
                  arrangeChanged = true;
                }
              };

              if (_nativeScrollbarStyling) {
                if (ignoreOverlayScrollbarHiding) removeClass(_viewportElement, _classNameViewportNativeScrollbarsInvisible);else addClass(_viewportElement, _classNameViewportNativeScrollbarsInvisible);
              } else {
                setContentElementCSS(true);
                setContentElementCSS(false);
              }
            }

            if (ignoreOverlayScrollbarHiding) {
              arrangeContent.w = arrangeContent.h = _strEmpty;
              arrangeChanged = true;
            }

            if (arrangeChanged && !_nativeScrollbarStyling) {
              contentArrangeElementCSS[_strWidth] = hideOverflow.y ? arrangeContent.w : _strEmpty;
              contentArrangeElementCSS[_strHeight] = hideOverflow.x ? arrangeContent.h : _strEmpty;

              if (!_contentArrangeElement) {
                _contentArrangeElement = FRAMEWORK(generateDiv(_classNameContentArrangeElement));

                _viewportElement.prepend(_contentArrangeElement);
              }

              _contentArrangeElement.css(contentArrangeElementCSS);
            }

            _contentElement.css(contentElementCSS);
          }

          var viewportElementCSS = {};
          var paddingElementCSS = {};
          var setViewportCSS;

          if (hostSizeChanged || hasOverflow.c || hideOverflow.c || contentScrollSize.c || overflowBehaviorChanged || boxSizingChanged || ignoreOverlayScrollbarHidingChanged || cssDirectionChanged || clipAlwaysChanged || heightAutoChanged) {
            viewportElementCSS[isRTLRight] = _strEmpty;

            setViewportCSS = function setViewportCSS(horizontal) {
              var scrollbarVars = getScrollbarVars(horizontal);
              var scrollbarVarsInverted = getScrollbarVars(!horizontal);
              var xy = scrollbarVars._x_y;
              var XY = scrollbarVars._X_Y;
              var strDirection = horizontal ? _strBottom : isRTLLeft;

              var reset = function reset() {
                viewportElementCSS[strDirection] = _strEmpty;
                _contentBorderSize[scrollbarVarsInverted._w_h] = 0;
              };

              if (hasOverflow[xy] && hideOverflow[xy + 's']) {
                viewportElementCSS[strOverflow + XY] = _strScroll;

                if (ignoreOverlayScrollbarHiding || _nativeScrollbarStyling) {
                  reset();
                } else {
                  viewportElementCSS[strDirection] = -(_nativeScrollbarIsOverlaid[xy] ? _overlayScrollbarDummySize[xy] : _nativeScrollbarSize[xy]);
                  _contentBorderSize[scrollbarVarsInverted._w_h] = _nativeScrollbarIsOverlaid[xy] ? _overlayScrollbarDummySize[scrollbarVarsInverted._x_y] : 0;
                }
              } else {
                viewportElementCSS[strOverflow + XY] = _strEmpty;
                reset();
              }
            };

            setViewportCSS(true);
            setViewportCSS(false); // if the scroll container is too small and if there is any overflow with no overlay scrollbar (and scrollbar styling isn't possible), 
            // make viewport element greater in size (Firefox hide Scrollbars fix)
            // because firefox starts hiding scrollbars on too small elements
            // with this behavior the overflow calculation may be incorrect or the scrollbars would appear suddenly
            // https://bugzilla.mozilla.org/show_bug.cgi?id=292284

            if (!_nativeScrollbarStyling && (_viewportSize.h < _nativeScrollbarMinSize.x || _viewportSize.w < _nativeScrollbarMinSize.y) && (hasOverflow.x && hideOverflow.x && !_nativeScrollbarIsOverlaid.x || hasOverflow.y && hideOverflow.y && !_nativeScrollbarIsOverlaid.y)) {
              viewportElementCSS[_strPaddingMinus + _strTop] = _nativeScrollbarMinSize.x;
              viewportElementCSS[_strMarginMinus + _strTop] = -_nativeScrollbarMinSize.x;
              viewportElementCSS[_strPaddingMinus + isRTLRight] = _nativeScrollbarMinSize.y;
              viewportElementCSS[_strMarginMinus + isRTLRight] = -_nativeScrollbarMinSize.y;
            } else {
              viewportElementCSS[_strPaddingMinus + _strTop] = viewportElementCSS[_strMarginMinus + _strTop] = viewportElementCSS[_strPaddingMinus + isRTLRight] = viewportElementCSS[_strMarginMinus + isRTLRight] = _strEmpty;
            }

            viewportElementCSS[_strPaddingMinus + isRTLLeft] = viewportElementCSS[_strMarginMinus + isRTLLeft] = _strEmpty; //if there is any overflow (x OR y axis) and this overflow shall be hidden, make overflow hidden, else overflow visible

            if (hasOverflow.x && hideOverflow.x || hasOverflow.y && hideOverflow.y || hideOverflowForceTextarea) {
              //only hide if is Textarea
              if (_isTextarea && hideOverflowForceTextarea) {
                paddingElementCSS[strOverflowX] = paddingElementCSS[strOverflowY] = strHidden;
              }
            } else {
              if (!clipAlways || overflowBehaviorIsVH.x || overflowBehaviorIsVS.x || overflowBehaviorIsVH.y || overflowBehaviorIsVS.y) {
                //only un-hide if Textarea
                if (_isTextarea) {
                  paddingElementCSS[strOverflowX] = paddingElementCSS[strOverflowY] = _strEmpty;
                }

                viewportElementCSS[strOverflowX] = viewportElementCSS[strOverflowY] = strVisible;
              }
            }

            _paddingElement.css(paddingElementCSS);

            _viewportElement.css(viewportElementCSS);

            viewportElementCSS = {}; //force soft redraw in webkit because without the scrollbars will may appear because DOM wont be redrawn under special conditions

            if ((hasOverflow.c || boxSizingChanged || widthAutoChanged || heightAutoChanged) && !(_nativeScrollbarIsOverlaid.x && _nativeScrollbarIsOverlaid.y)) {
              var elementStyle = _contentElementNative[LEXICON.s];
              var dump;
              elementStyle.webkitTransform = 'scale(1)';
              elementStyle.display = 'run-in';
              dump = _contentElementNative[LEXICON.oH];
              elementStyle.display = _strEmpty; //|| dump; //use dump to prevent it from deletion if minify

              elementStyle.webkitTransform = _strEmpty;
            }
            /*
            //force hard redraw in webkit if native overlaid scrollbars shall appear
            if (ignoreOverlayScrollbarHidingChanged && ignoreOverlayScrollbarHiding) {
                _hostElement.hide();
                var dump = _hostElementNative[LEXICON.oH];
                _hostElement.show();
            }
            */

          } //change to direction RTL and width auto Bugfix in Webkit
          //without this fix, the DOM still thinks the scrollbar is LTR and thus the content is shifted to the left


          contentElementCSS = {};

          if (cssDirectionChanged || widthAutoChanged || heightAutoChanged) {
            if (_isRTL && widthAuto) {
              var floatTmp = _contentElement.css(_strFloat);

              var posLeftWithoutFloat = MATH.round(_contentElement.css(_strFloat, _strEmpty).css(_strLeft, _strEmpty).position().left);

              _contentElement.css(_strFloat, floatTmp);

              var posLeftWithFloat = MATH.round(_contentElement.position().left);
              if (posLeftWithoutFloat !== posLeftWithFloat) contentElementCSS[_strLeft] = posLeftWithoutFloat;
            } else {
              contentElementCSS[_strLeft] = _strEmpty;
            }
          }

          _contentElement.css(contentElementCSS); //handle scroll position


          if (_isTextarea && contentSizeChanged) {
            var textareaInfo = getTextareaInfo();

            if (textareaInfo) {
              var textareaRowsChanged = _textareaInfoCache === undefined ? true : textareaInfo._rows !== _textareaInfoCache._rows;
              var cursorRow = textareaInfo._cursorRow;
              var cursorCol = textareaInfo._cursorColumn;
              var widestRow = textareaInfo._widestRow;
              var lastRow = textareaInfo._rows;
              var lastCol = textareaInfo._columns;
              var cursorPos = textareaInfo._cursorPosition;
              var cursorMax = textareaInfo._cursorMax;
              var cursorIsLastPosition = cursorPos >= cursorMax && _textareaHasFocus;
              var textareaScrollAmount = {
                x: !textareaAutoWrapping && cursorCol === lastCol && cursorRow === widestRow ? _overflowAmountCache.x : -1,
                y: (textareaAutoWrapping ? cursorIsLastPosition || textareaRowsChanged && (previousOverflow !== undefined ? currScroll.y === previousOverflow.y : false) : (cursorIsLastPosition || textareaRowsChanged) && cursorRow === lastRow) ? _overflowAmountCache.y : -1
              };
              currScroll.x = textareaScrollAmount.x > -1 ? _isRTL && _normalizeRTLCache && _rtlScrollBehavior.i ? 0 : textareaScrollAmount.x : currScroll.x; //if inverted, scroll to 0 -> normalized this means to max scroll offset.

              currScroll.y = textareaScrollAmount.y > -1 ? textareaScrollAmount.y : currScroll.y;
            }

            _textareaInfoCache = textareaInfo;
          }

          if (_isRTL && _rtlScrollBehavior.i && _nativeScrollbarIsOverlaid.y && hasOverflow.x && _normalizeRTLCache) currScroll.x += _contentBorderSize.w || 0;
          if (widthAuto) _hostElement[_strScrollLeft](0);
          if (heightAuto) _hostElement[_strScrollTop](0);

          _viewportElement[_strScrollLeft](currScroll.x)[_strScrollTop](currScroll.y); //scrollbars management:


          var scrollbarsVisibilityVisible = scrollbarsVisibility === 'v';
          var scrollbarsVisibilityHidden = scrollbarsVisibility === 'h';
          var scrollbarsVisibilityAuto = scrollbarsVisibility === 'a';
          var showScrollbarH = COMPATIBILITY.bind(refreshScrollbarAppearance, 0, true, true, canScroll.x);
          var showScrollbarV = COMPATIBILITY.bind(refreshScrollbarAppearance, 0, false, true, canScroll.y);
          var hideScrollbarH = COMPATIBILITY.bind(refreshScrollbarAppearance, 0, true, false, canScroll.x);
          var hideScrollbarV = COMPATIBILITY.bind(refreshScrollbarAppearance, 0, false, false, canScroll.y); //manage class name which indicates scrollable overflow

          if (hideOverflow.x || hideOverflow.y) addClass(_hostElement, _classNameHostOverflow);else removeClass(_hostElement, _classNameHostOverflow);
          if (hideOverflow.x) addClass(_hostElement, _classNameHostOverflowX);else removeClass(_hostElement, _classNameHostOverflowX);
          if (hideOverflow.y) addClass(_hostElement, _classNameHostOverflowY);else removeClass(_hostElement, _classNameHostOverflowY); //add or remove rtl class name for styling purposes

          if (cssDirectionChanged) {
            if (_isRTL) addClass(_hostElement, _classNameHostRTL);else removeClass(_hostElement, _classNameHostRTL);
          } //manage the resize feature (CSS3 resize "polyfill" for this plugin)


          if (_isBody) addClass(_hostElement, _classNameHostResizeDisabled);

          if (resizeChanged) {
            removeClass(_scrollbarCornerElement, [_classNameScrollbarCornerResize, _classNameScrollbarCornerResizeB, _classNameScrollbarCornerResizeH, _classNameScrollbarCornerResizeV].join(_strSpace));

            if (_resizeNone) {
              addClass(_hostElement, _classNameHostResizeDisabled);
            } else {
              removeClass(_hostElement, _classNameHostResizeDisabled);
              addClass(_scrollbarCornerElement, _classNameScrollbarCornerResize);
              if (_resizeBoth) addClass(_scrollbarCornerElement, _classNameScrollbarCornerResizeB);else if (_resizeHorizontal) addClass(_scrollbarCornerElement, _classNameScrollbarCornerResizeH);else if (_resizeVertical) addClass(_scrollbarCornerElement, _classNameScrollbarCornerResizeV);
            }
          } //manage the scrollbars general visibility + the scrollbar interactivity (unusable class name)


          if (scrollbarsVisibilityChanged || overflowBehaviorChanged || hideOverflow.c || hasOverflow.c || ignoreOverlayScrollbarHidingChanged) {
            if (ignoreOverlayScrollbarHiding) {
              if (ignoreOverlayScrollbarHidingChanged) {
                removeClass(_hostElement, _classNameHostScrolling);

                if (ignoreOverlayScrollbarHiding) {
                  hideScrollbarH();
                  hideScrollbarV();
                }
              }
            } else if (scrollbarsVisibilityAuto) {
              if (canScroll.x) showScrollbarH();else hideScrollbarH();
              if (canScroll.y) showScrollbarV();else hideScrollbarV();
            } else if (scrollbarsVisibilityVisible) {
              showScrollbarH();
              showScrollbarV();
            } else if (scrollbarsVisibilityHidden) {
              hideScrollbarH();
              hideScrollbarV();
            }
          } //manage the scrollbars auto hide feature (auto hide them after specific actions)


          if (scrollbarsAutoHideChanged || ignoreOverlayScrollbarHidingChanged) {
            if (_scrollbarsAutoHideLeave || _scrollbarsAutoHideMove) {
              setupHostMouseTouchEvents(true);
              setupHostMouseTouchEvents();
            } else {
              setupHostMouseTouchEvents(true);
            }

            if (_scrollbarsAutoHideNever) refreshScrollbarsAutoHide(true);else refreshScrollbarsAutoHide(false, true);
          } //manage scrollbars handle length & offset - don't remove!


          if (hostSizeChanged || overflowAmount.c || heightAutoChanged || widthAutoChanged || resizeChanged || boxSizingChanged || paddingAbsoluteChanged || ignoreOverlayScrollbarHidingChanged || cssDirectionChanged) {
            refreshScrollbarHandleLength(true);
            refreshScrollbarHandleOffset(true);
            refreshScrollbarHandleLength(false);
            refreshScrollbarHandleOffset(false);
          } //manage interactivity


          if (scrollbarsClickScrollingChanged) refreshScrollbarsInteractive(true, scrollbarsClickScrolling);
          if (scrollbarsDragScrollingChanged) refreshScrollbarsInteractive(false, scrollbarsDragScrolling); //callbacks:

          if (cssDirectionChanged) {
            dispatchCallback('onDirectionChanged', {
              isRTL: _isRTL,
              dir: cssDirection
            });
          }

          if (hostSizeChanged) {
            dispatchCallback('onHostSizeChanged', {
              width: _hostSizeCache.w,
              height: _hostSizeCache.h
            });
          }

          if (contentSizeChanged) {
            dispatchCallback('onContentSizeChanged', {
              width: _contentScrollSizeCache.w,
              height: _contentScrollSizeCache.h
            });
          }

          if (hasOverflow.c || hideOverflow.c) {
            dispatchCallback('onOverflowChanged', {
              x: hasOverflow.x,
              y: hasOverflow.y,
              xScrollable: hideOverflow.xs,
              yScrollable: hideOverflow.ys,
              clipped: hideOverflow.x || hideOverflow.y
            });
          }

          if (overflowAmount.c) {
            dispatchCallback('onOverflowAmountChanged', {
              x: overflowAmount.x,
              y: overflowAmount.y
            });
          }
        } //fix body min size


        if (_isBody && _bodyMinSizeCache && (_hasOverflowCache.c || _bodyMinSizeCache.c)) {
          //its possible that no min size was measured until now, because the content arrange element was just added now, in this case, measure now the min size.
          if (!_bodyMinSizeCache.f) bodyMinSizeChanged();
          if (_nativeScrollbarIsOverlaid.y && _hasOverflowCache.x) _contentElement.css(_strMinMinus + _strWidth, _bodyMinSizeCache.w + _overlayScrollbarDummySize.y);
          if (_nativeScrollbarIsOverlaid.x && _hasOverflowCache.y) _contentElement.css(_strMinMinus + _strHeight, _bodyMinSizeCache.h + _overlayScrollbarDummySize.x);
          _bodyMinSizeCache.c = false;
        } //freezeResizeObserver(_sizeObserverElement, false);
        //freezeResizeObserver(_sizeAutoObserverElement, false);


        dispatchCallback('onUpdated', {
          forced: force
        });
      } //==== Options ====//

      /**
       * Sets new options but doesn't call the update method.
       * @param newOptions The object which contains the new options.
       * @returns {*} A object which contains the changed options.
       */


      function setOptions(newOptions) {
        var validatedOpts = _pluginsOptions._validate(newOptions, _pluginsOptions._template, true, _currentOptions);

        _currentOptions = extendDeep({}, _currentOptions, validatedOpts._default);
        _currentPreparedOptions = extendDeep({}, _currentPreparedOptions, validatedOpts._prepared);
        return validatedOpts._prepared;
      } //==== Structure ====//

      /**
       * Builds or destroys the wrapper and helper DOM elements.
       * @param destroy Indicates whether the DOM shall be build or destroyed.
       */


      function setupStructureDOM(destroy) {
        var strParent = 'parent';
        var classNameResizeObserverHost = 'os-resize-observer-host';
        var classNameTextareaElementFull = _classNameTextareaElement + _strSpace + _classNameTextInherit;
        var textareaClass = _isTextarea ? _strSpace + _classNameTextInherit : _strEmpty;
        var adoptAttrs = _currentPreparedOptions.textarea.inheritedAttrs;
        var adoptAttrsMap = {};

        var applyAdoptedAttrs = function applyAdoptedAttrs() {
          var applyAdoptedAttrsElm = destroy ? _targetElement : _hostElement;
          each(adoptAttrsMap, function (key, value) {
            if (type(value) == TYPES.s) {
              if (key == LEXICON.c) applyAdoptedAttrsElm.addClass(value);else applyAdoptedAttrsElm.attr(key, value);
            }
          });
        };

        var hostElementClassNames = [_classNameHostElement, _classNameHostTextareaElement, _classNameHostResizeDisabled, _classNameHostRTL, _classNameHostScrollbarHorizontalHidden, _classNameHostScrollbarVerticalHidden, _classNameHostTransition, _classNameHostScrolling, _classNameHostOverflow, _classNameHostOverflowX, _classNameHostOverflowY, _classNameThemeNone, _classNameTextareaElement, _classNameTextInherit, _classNameCache].join(_strSpace);
        var hostElementCSS = {}; //get host element as first element, because that's the most upper element and required for the other elements

        _hostElement = _hostElement || (_isTextarea ? _domExists ? _targetElement[strParent]()[strParent]()[strParent]()[strParent]() : FRAMEWORK(generateDiv(_classNameHostTextareaElement)) : _targetElement);
        _contentElement = _contentElement || selectOrGenerateDivByClass(_classNameContentElement + textareaClass);
        _viewportElement = _viewportElement || selectOrGenerateDivByClass(_classNameViewportElement + textareaClass);
        _paddingElement = _paddingElement || selectOrGenerateDivByClass(_classNamePaddingElement + textareaClass);
        _sizeObserverElement = _sizeObserverElement || selectOrGenerateDivByClass(classNameResizeObserverHost);
        _textareaCoverElement = _textareaCoverElement || (_isTextarea ? selectOrGenerateDivByClass(_classNameTextareaCoverElement) : undefined); //on destroy, remove all generated class names from the host element before collecting the adopted attributes 
        //to prevent adopting generated class names

        if (destroy) removeClass(_hostElement, hostElementClassNames); //collect all adopted attributes

        adoptAttrs = type(adoptAttrs) == TYPES.s ? adoptAttrs.split(_strSpace) : adoptAttrs;

        if (type(adoptAttrs) == TYPES.a && _isTextarea) {
          each(adoptAttrs, function (i, v) {
            if (type(v) == TYPES.s) {
              adoptAttrsMap[v] = destroy ? _hostElement.attr(v) : _targetElement.attr(v);
            }
          });
        }

        if (!destroy) {
          if (_isTextarea) {
            if (!_currentPreparedOptions.sizeAutoCapable) {
              hostElementCSS[_strWidth] = _targetElement.css(_strWidth);
              hostElementCSS[_strHeight] = _targetElement.css(_strHeight);
            }

            if (!_domExists) _targetElement.addClass(_classNameTextInherit).wrap(_hostElement); //jQuery clones elements in wrap functions, so we have to select them again

            _hostElement = _targetElement[strParent]().css(hostElementCSS);
          }

          if (!_domExists) {
            //add the correct class to the target element
            addClass(_targetElement, _isTextarea ? classNameTextareaElementFull : _classNameHostElement); //wrap the content into the generated elements to create the required DOM

            _hostElement.wrapInner(_contentElement).wrapInner(_viewportElement).wrapInner(_paddingElement).prepend(_sizeObserverElement); //jQuery clones elements in wrap functions, so we have to select them again


            _contentElement = findFirst(_hostElement, _strDot + _classNameContentElement);
            _viewportElement = findFirst(_hostElement, _strDot + _classNameViewportElement);
            _paddingElement = findFirst(_hostElement, _strDot + _classNamePaddingElement);

            if (_isTextarea) {
              _contentElement.prepend(_textareaCoverElement);

              applyAdoptedAttrs();
            }
          }

          if (_nativeScrollbarStyling) addClass(_viewportElement, _classNameViewportNativeScrollbarsInvisible);
          if (_nativeScrollbarIsOverlaid.x && _nativeScrollbarIsOverlaid.y) addClass(_viewportElement, _classNameViewportNativeScrollbarsOverlaid);
          if (_isBody) addClass(_htmlElement, _classNameHTMLElement);
          _sizeObserverElementNative = _sizeObserverElement[0];
          _hostElementNative = _hostElement[0];
          _paddingElementNative = _paddingElement[0];
          _viewportElementNative = _viewportElement[0];
          _contentElementNative = _contentElement[0];
        } else {
          if (_domExists && _initialized) {
            //clear size observer
            _sizeObserverElement.children().remove(); //remove the style property and classes from already generated elements


            each([_paddingElement, _viewportElement, _contentElement, _textareaCoverElement], function (i, elm) {
              if (elm) {
                removeClass(elm.removeAttr(LEXICON.s), _classNamesDynamicDestroy);
              }
            }); //add classes to the host element which was removed previously to match the expected DOM

            addClass(_hostElement, _isTextarea ? _classNameHostTextareaElement : _classNameHostElement);
          } else {
            //remove size observer
            remove(_sizeObserverElement); //unwrap the content to restore DOM

            _contentElement.contents().unwrap().unwrap().unwrap();

            if (_isTextarea) {
              _targetElement.unwrap();

              remove(_hostElement);
              remove(_textareaCoverElement);
              applyAdoptedAttrs();
            }
          }

          if (_isTextarea) _targetElement.removeAttr(LEXICON.s);
          if (_isBody) removeClass(_htmlElement, _classNameHTMLElement);
        }
      }
      /**
       * Adds or removes all wrapper elements interactivity events.
       * @param destroy Indicates whether the Events shall be added or removed.
       */


      function setupStructureEvents() {
        var textareaKeyDownRestrictedKeyCodes = [112, 113, 114, 115, 116, 117, 118, 119, 120, 121, 123, //F1 to F12
        33, 34, //page up, page down
        37, 38, 39, 40, //left, up, right, down arrows
        16, 17, 18, 19, 20, 144 //Shift, Ctrl, Alt, Pause, CapsLock, NumLock
        ];
        var textareaKeyDownKeyCodesList = [];
        var textareaUpdateIntervalID;
        var scrollStopTimeoutId;
        var scrollStopDelay = 175;
        var strFocus = 'focus';

        function updateTextarea(doClearInterval) {
          textareaUpdate();

          _base.update(_strAuto);

          if (doClearInterval && _autoUpdateRecommended) clearInterval(textareaUpdateIntervalID);
        }

        function textareaOnScroll(event) {
          _targetElement[_strScrollLeft](_rtlScrollBehavior.i && _normalizeRTLCache ? 9999999 : 0);

          _targetElement[_strScrollTop](0);

          COMPATIBILITY.prvD(event);
          COMPATIBILITY.stpP(event);
          return false;
        }

        function textareaOnDrop(event) {
          setTimeout(function () {
            if (!_destroyed) updateTextarea();
          }, 50);
        }

        function textareaOnFocus() {
          _textareaHasFocus = true;
          addClass(_hostElement, strFocus);
        }

        function textareaOnFocusout() {
          _textareaHasFocus = false;
          textareaKeyDownKeyCodesList = [];
          removeClass(_hostElement, strFocus);
          updateTextarea(true);
        }

        function textareaOnKeyDown(event) {
          var keyCode = event.keyCode;

          if (inArray(keyCode, textareaKeyDownRestrictedKeyCodes) < 0) {
            if (!textareaKeyDownKeyCodesList[LEXICON.l]) {
              updateTextarea();
              textareaUpdateIntervalID = setInterval(updateTextarea, 1000 / 60);
            }

            if (inArray(keyCode, textareaKeyDownKeyCodesList) < 0) textareaKeyDownKeyCodesList.push(keyCode);
          }
        }

        function textareaOnKeyUp(event) {
          var keyCode = event.keyCode;
          var index = inArray(keyCode, textareaKeyDownKeyCodesList);

          if (inArray(keyCode, textareaKeyDownRestrictedKeyCodes) < 0) {
            if (index > -1) textareaKeyDownKeyCodesList.splice(index, 1);
            if (!textareaKeyDownKeyCodesList[LEXICON.l]) updateTextarea(true);
          }
        }

        function contentOnTransitionEnd(event) {
          if (_autoUpdateCache === true) return;
          event = event.originalEvent || event;
          if (isSizeAffectingCSSProperty(event.propertyName)) _base.update(_strAuto);
        }

        function viewportOnScroll(event) {
          if (!_sleeping) {
            if (scrollStopTimeoutId !== undefined) clearTimeout(scrollStopTimeoutId);else {
              if (_scrollbarsAutoHideScroll || _scrollbarsAutoHideMove) refreshScrollbarsAutoHide(true);
              if (!nativeOverlayScrollbarsAreActive()) addClass(_hostElement, _classNameHostScrolling);
              dispatchCallback('onScrollStart', event);
            } //if a scrollbars handle gets dragged, the mousemove event is responsible for refreshing the handle offset
            //because if CSS scroll-snap is used, the handle offset gets only refreshed on every snap point
            //this looks laggy & clunky, it looks much better if the offset refreshes with the mousemove

            if (!_scrollbarsHandlesDefineScrollPos) {
              refreshScrollbarHandleOffset(true);
              refreshScrollbarHandleOffset(false);
            }

            dispatchCallback('onScroll', event);
            scrollStopTimeoutId = setTimeout(function () {
              if (!_destroyed) {
                //OnScrollStop:
                clearTimeout(scrollStopTimeoutId);
                scrollStopTimeoutId = undefined;
                if (_scrollbarsAutoHideScroll || _scrollbarsAutoHideMove) refreshScrollbarsAutoHide(false);
                if (!nativeOverlayScrollbarsAreActive()) removeClass(_hostElement, _classNameHostScrolling);
                dispatchCallback('onScrollStop', event);
              }
            }, scrollStopDelay);
          }
        }

        if (_isTextarea) {
          if (_msieVersion > 9 || !_autoUpdateRecommended) {
            addDestroyEventListener(_targetElement, 'input', updateTextarea);
          } else {
            addDestroyEventListener(_targetElement, [_strKeyDownEvent, _strKeyUpEvent], [textareaOnKeyDown, textareaOnKeyUp]);
          }

          addDestroyEventListener(_targetElement, [_strScroll, 'drop', strFocus, strFocus + 'out'], [textareaOnScroll, textareaOnDrop, textareaOnFocus, textareaOnFocusout]);
        } else {
          addDestroyEventListener(_contentElement, _strTransitionEndEvent, contentOnTransitionEnd);
        }

        addDestroyEventListener(_viewportElement, _strScroll, viewportOnScroll, true);
      } //==== Scrollbars ====//

      /**
       * Builds or destroys all scrollbar DOM elements (scrollbar, track, handle)
       * @param destroy Indicates whether the DOM shall be build or destroyed.
       */


      function setupScrollbarsDOM(destroy) {
        var selectOrGenerateScrollbarDOM = function selectOrGenerateScrollbarDOM(isHorizontal) {
          var scrollbarClassName = isHorizontal ? _classNameScrollbarHorizontal : _classNameScrollbarVertical;
          var scrollbar = selectOrGenerateDivByClass(_classNameScrollbar + _strSpace + scrollbarClassName, true);
          var track = selectOrGenerateDivByClass(_classNameScrollbarTrack, scrollbar);
          var handle = selectOrGenerateDivByClass(_classNameScrollbarHandle, scrollbar);

          if (!_domExists && !destroy) {
            scrollbar.append(track);
            track.append(handle);
          }

          return {
            _scrollbar: scrollbar,
            _track: track,
            _handle: handle
          };
        };

        function resetScrollbarDOM(isHorizontal) {
          var scrollbarVars = getScrollbarVars(isHorizontal);
          var scrollbar = scrollbarVars._scrollbar;
          var track = scrollbarVars._track;
          var handle = scrollbarVars._handle;

          if (_domExists && _initialized) {
            each([scrollbar, track, handle], function (i, elm) {
              removeClass(elm.removeAttr(LEXICON.s), _classNamesDynamicDestroy);
            });
          } else {
            remove(scrollbar || selectOrGenerateScrollbarDOM(isHorizontal)._scrollbar);
          }
        }

        var horizontalElements;
        var verticalElements;

        if (!destroy) {
          horizontalElements = selectOrGenerateScrollbarDOM(true);
          verticalElements = selectOrGenerateScrollbarDOM();
          _scrollbarHorizontalElement = horizontalElements._scrollbar;
          _scrollbarHorizontalTrackElement = horizontalElements._track;
          _scrollbarHorizontalHandleElement = horizontalElements._handle;
          _scrollbarVerticalElement = verticalElements._scrollbar;
          _scrollbarVerticalTrackElement = verticalElements._track;
          _scrollbarVerticalHandleElement = verticalElements._handle;

          if (!_domExists) {
            _paddingElement.after(_scrollbarVerticalElement);

            _paddingElement.after(_scrollbarHorizontalElement);
          }
        } else {
          resetScrollbarDOM(true);
          resetScrollbarDOM();
        }
      }
      /**
       * Initializes all scrollbar interactivity events. (track and handle dragging, clicking, scrolling)
       * @param isHorizontal True if the target scrollbar is the horizontal scrollbar, false if the target scrollbar is the vertical scrollbar.
       */


      function setupScrollbarEvents(isHorizontal) {
        var scrollbarVars = getScrollbarVars(isHorizontal);
        var scrollbarVarsInfo = scrollbarVars._info;
        var insideIFrame = _windowElementNative.top !== _windowElementNative;
        var xy = scrollbarVars._x_y;
        var XY = scrollbarVars._X_Y;
        var scroll = _strScroll + scrollbarVars._Left_Top;
        var strActive = 'active';
        var strSnapHandle = 'snapHandle';
        var scrollDurationFactor = 1;
        var increaseDecreaseScrollAmountKeyCodes = [16, 17]; //shift, ctrl

        var trackTimeout;
        var mouseDownScroll;
        var mouseDownOffset;
        var mouseDownInvertedScale;

        function getPointerPosition(event) {
          return _msieVersion && insideIFrame ? event['screen' + XY] : COMPATIBILITY.page(event)[xy]; //use screen coordinates in EDGE & IE because the page values are incorrect in frames.
        }

        function getPreparedScrollbarsOption(name) {
          return _currentPreparedOptions.scrollbars[name];
        }

        function increaseTrackScrollAmount() {
          scrollDurationFactor = 0.5;
        }

        function decreaseTrackScrollAmount() {
          scrollDurationFactor = 1;
        }

        function documentKeyDown(event) {
          if (inArray(event.keyCode, increaseDecreaseScrollAmountKeyCodes) > -1) increaseTrackScrollAmount();
        }

        function documentKeyUp(event) {
          if (inArray(event.keyCode, increaseDecreaseScrollAmountKeyCodes) > -1) decreaseTrackScrollAmount();
        }

        function onMouseTouchDownContinue(event) {
          var originalEvent = event.originalEvent || event;
          var isTouchEvent = originalEvent.touches !== undefined;
          return _sleeping || _destroyed || nativeOverlayScrollbarsAreActive() || !_scrollbarsDragScrollingCache || isTouchEvent && !getPreparedScrollbarsOption('touchSupport') ? false : COMPATIBILITY.mBtn(event) === 1 || isTouchEvent;
        }

        function documentDragMove(event) {
          if (onMouseTouchDownContinue(event)) {
            var trackLength = scrollbarVarsInfo._trackLength;
            var handleLength = scrollbarVarsInfo._handleLength;
            var scrollRange = scrollbarVarsInfo._maxScroll;
            var scrollRaw = (getPointerPosition(event) - mouseDownOffset) * mouseDownInvertedScale;
            var scrollDeltaPercent = scrollRaw / (trackLength - handleLength);
            var scrollDelta = scrollRange * scrollDeltaPercent;
            scrollDelta = isFinite(scrollDelta) ? scrollDelta : 0;
            if (_isRTL && isHorizontal && !_rtlScrollBehavior.i) scrollDelta *= -1;

            _viewportElement[scroll](MATH.round(mouseDownScroll + scrollDelta));

            if (_scrollbarsHandlesDefineScrollPos) refreshScrollbarHandleOffset(isHorizontal, mouseDownScroll + scrollDelta);
            if (!_supportPassiveEvents) COMPATIBILITY.prvD(event);
          } else documentMouseTouchUp(event);
        }

        function documentMouseTouchUp(event) {
          event = event || event.originalEvent;
          setupResponsiveEventListener(_documentElement, [_strMouseTouchMoveEvent, _strMouseTouchUpEvent, _strKeyDownEvent, _strKeyUpEvent, _strSelectStartEvent], [documentDragMove, documentMouseTouchUp, documentKeyDown, documentKeyUp, documentOnSelectStart], true);
          if (_scrollbarsHandlesDefineScrollPos) refreshScrollbarHandleOffset(isHorizontal, true);
          _scrollbarsHandlesDefineScrollPos = false;
          removeClass(_bodyElement, _classNameDragging);
          removeClass(scrollbarVars._handle, strActive);
          removeClass(scrollbarVars._track, strActive);
          removeClass(scrollbarVars._scrollbar, strActive);
          mouseDownScroll = undefined;
          mouseDownOffset = undefined;
          mouseDownInvertedScale = 1;
          decreaseTrackScrollAmount();

          if (trackTimeout !== undefined) {
            _base.scrollStop();

            clearTimeout(trackTimeout);
            trackTimeout = undefined;
          }

          if (event) {
            var rect = _hostElementNative[LEXICON.bCR]();

            var mouseInsideHost = event.clientX >= rect.left && event.clientX <= rect.right && event.clientY >= rect.top && event.clientY <= rect.bottom; //if mouse is outside host element

            if (!mouseInsideHost) hostOnMouseLeave();
            if (_scrollbarsAutoHideScroll || _scrollbarsAutoHideMove) refreshScrollbarsAutoHide(false);
          }
        }

        function onHandleMouseTouchDown(event) {
          if (onMouseTouchDownContinue(event)) onHandleMouseTouchDownAction(event);
        }

        function onHandleMouseTouchDownAction(event) {
          mouseDownScroll = _viewportElement[scroll]();
          mouseDownScroll = isNaN(mouseDownScroll) ? 0 : mouseDownScroll;
          if (_isRTL && isHorizontal && !_rtlScrollBehavior.n || !_isRTL) mouseDownScroll = mouseDownScroll < 0 ? 0 : mouseDownScroll;
          mouseDownInvertedScale = getHostElementInvertedScale()[xy];
          mouseDownOffset = getPointerPosition(event);
          _scrollbarsHandlesDefineScrollPos = !getPreparedScrollbarsOption(strSnapHandle);
          addClass(_bodyElement, _classNameDragging);
          addClass(scrollbarVars._handle, strActive);
          addClass(scrollbarVars._scrollbar, strActive);
          setupResponsiveEventListener(_documentElement, [_strMouseTouchMoveEvent, _strMouseTouchUpEvent, _strSelectStartEvent], [documentDragMove, documentMouseTouchUp, documentOnSelectStart]);
          if (_msieVersion || !_documentMixed) COMPATIBILITY.prvD(event);
          COMPATIBILITY.stpP(event);
        }

        function onTrackMouseTouchDown(event) {
          if (onMouseTouchDownContinue(event)) {
            var scrollDistance = MATH.round(_viewportSize[scrollbarVars._w_h]);

            var trackOffset = scrollbarVars._track.offset()[scrollbarVars._left_top];

            var ctrlKey = event.ctrlKey;
            var instantScroll = event.shiftKey;
            var instantScrollTransition = instantScroll && ctrlKey;
            var isFirstIteration = true;
            var easing = 'linear';
            var decreaseScroll;
            var finishedCondition;

            var scrollActionFinsished = function scrollActionFinsished(transition) {
              if (_scrollbarsHandlesDefineScrollPos) refreshScrollbarHandleOffset(isHorizontal, transition);
            };

            var scrollActionInstantFinished = function scrollActionInstantFinished() {
              scrollActionFinsished();
              onHandleMouseTouchDownAction(event);
            };

            var scrollAction = function scrollAction() {
              if (!_destroyed) {
                var mouseOffset = (mouseDownOffset - trackOffset) * mouseDownInvertedScale;
                var handleOffset = scrollbarVarsInfo._handleOffset;
                var trackLength = scrollbarVarsInfo._trackLength;
                var handleLength = scrollbarVarsInfo._handleLength;
                var scrollRange = scrollbarVarsInfo._maxScroll;
                var currScroll = scrollbarVarsInfo._currentScroll;
                var scrollDuration = 270 * scrollDurationFactor;
                var timeoutDelay = isFirstIteration ? MATH.max(400, scrollDuration) : scrollDuration;
                var instantScrollPosition = scrollRange * ((mouseOffset - handleLength / 2) / (trackLength - handleLength)); // 100% * positionPercent

                var rtlIsNormal = _isRTL && isHorizontal && (!_rtlScrollBehavior.i && !_rtlScrollBehavior.n || _normalizeRTLCache);
                var decreaseScrollCondition = rtlIsNormal ? handleOffset < mouseOffset : handleOffset > mouseOffset;
                var scrollObj = {};
                var animationObj = {
                  easing: easing,
                  step: function step(now) {
                    if (_scrollbarsHandlesDefineScrollPos) {
                      _viewportElement[scroll](now); //https://github.com/jquery/jquery/issues/4340


                      refreshScrollbarHandleOffset(isHorizontal, now);
                    }
                  }
                };
                instantScrollPosition = isFinite(instantScrollPosition) ? instantScrollPosition : 0;
                instantScrollPosition = _isRTL && isHorizontal && !_rtlScrollBehavior.i ? scrollRange - instantScrollPosition : instantScrollPosition; //_base.scrollStop();

                if (instantScroll) {
                  _viewportElement[scroll](instantScrollPosition); //scroll instantly to new position


                  if (instantScrollTransition) {
                    //get the scroll position after instant scroll (in case CSS Snap Points are used) to get the correct snapped scroll position
                    //and the animation stops at the correct point
                    instantScrollPosition = _viewportElement[scroll](); //scroll back to the position before instant scrolling so animation can be performed

                    _viewportElement[scroll](currScroll);

                    instantScrollPosition = rtlIsNormal && _rtlScrollBehavior.i ? scrollRange - instantScrollPosition : instantScrollPosition;
                    instantScrollPosition = rtlIsNormal && _rtlScrollBehavior.n ? -instantScrollPosition : instantScrollPosition;
                    scrollObj[xy] = instantScrollPosition;

                    _base.scroll(scrollObj, extendDeep(animationObj, {
                      duration: 130,
                      complete: scrollActionInstantFinished
                    }));
                  } else scrollActionInstantFinished();
                } else {
                  decreaseScroll = isFirstIteration ? decreaseScrollCondition : decreaseScroll;
                  finishedCondition = rtlIsNormal ? decreaseScroll ? handleOffset + handleLength >= mouseOffset : handleOffset <= mouseOffset : decreaseScroll ? handleOffset <= mouseOffset : handleOffset + handleLength >= mouseOffset;

                  if (finishedCondition) {
                    clearTimeout(trackTimeout);

                    _base.scrollStop();

                    trackTimeout = undefined;
                    scrollActionFinsished(true);
                  } else {
                    trackTimeout = setTimeout(scrollAction, timeoutDelay);
                    scrollObj[xy] = (decreaseScroll ? '-=' : '+=') + scrollDistance;

                    _base.scroll(scrollObj, extendDeep(animationObj, {
                      duration: scrollDuration
                    }));
                  }

                  isFirstIteration = false;
                }
              }
            };

            if (ctrlKey) increaseTrackScrollAmount();
            mouseDownInvertedScale = getHostElementInvertedScale()[xy];
            mouseDownOffset = COMPATIBILITY.page(event)[xy];
            _scrollbarsHandlesDefineScrollPos = !getPreparedScrollbarsOption(strSnapHandle);
            addClass(_bodyElement, _classNameDragging);
            addClass(scrollbarVars._track, strActive);
            addClass(scrollbarVars._scrollbar, strActive);
            setupResponsiveEventListener(_documentElement, [_strMouseTouchUpEvent, _strKeyDownEvent, _strKeyUpEvent, _strSelectStartEvent], [documentMouseTouchUp, documentKeyDown, documentKeyUp, documentOnSelectStart]);
            scrollAction();
            COMPATIBILITY.prvD(event);
            COMPATIBILITY.stpP(event);
          }
        }

        function onTrackMouseTouchEnter(event) {
          //make sure both scrollbars will stay visible if one scrollbar is hovered if autoHide is "scroll" or "move".
          _scrollbarsHandleHovered = true;
          if (_scrollbarsAutoHideScroll || _scrollbarsAutoHideMove) refreshScrollbarsAutoHide(true);
        }

        function onTrackMouseTouchLeave(event) {
          _scrollbarsHandleHovered = false;
          if (_scrollbarsAutoHideScroll || _scrollbarsAutoHideMove) refreshScrollbarsAutoHide(false);
        }

        function onScrollbarMouseTouchDown(event) {
          COMPATIBILITY.stpP(event);
        }

        addDestroyEventListener(scrollbarVars._handle, _strMouseTouchDownEvent, onHandleMouseTouchDown);
        addDestroyEventListener(scrollbarVars._track, [_strMouseTouchDownEvent, _strMouseTouchEnter, _strMouseTouchLeave], [onTrackMouseTouchDown, onTrackMouseTouchEnter, onTrackMouseTouchLeave]);
        addDestroyEventListener(scrollbarVars._scrollbar, _strMouseTouchDownEvent, onScrollbarMouseTouchDown);

        if (_supportTransition) {
          addDestroyEventListener(scrollbarVars._scrollbar, _strTransitionEndEvent, function (event) {
            if (event.target !== scrollbarVars._scrollbar[0]) return;
            refreshScrollbarHandleLength(isHorizontal);
            refreshScrollbarHandleOffset(isHorizontal);
          });
        }
      }
      /**
       * Shows or hides the given scrollbar and applied a class name which indicates if the scrollbar is scrollable or not.
       * @param isHorizontal True if the horizontal scrollbar is the target, false if the vertical scrollbar is the target.
       * @param shallBeVisible True if the scrollbar shall be shown, false if hidden.
       * @param canScroll True if the scrollbar is scrollable, false otherwise.
       */


      function refreshScrollbarAppearance(isHorizontal, shallBeVisible, canScroll) {
        var scrollbarClassName = isHorizontal ? _classNameHostScrollbarHorizontalHidden : _classNameHostScrollbarVerticalHidden;
        var scrollbarElement = isHorizontal ? _scrollbarHorizontalElement : _scrollbarVerticalElement;
        if (shallBeVisible) removeClass(_hostElement, scrollbarClassName);else addClass(_hostElement, scrollbarClassName);
        if (canScroll) removeClass(scrollbarElement, _classNameScrollbarUnusable);else addClass(scrollbarElement, _classNameScrollbarUnusable);
      }
      /**
       * Autoshows / autohides both scrollbars with.
       * @param shallBeVisible True if the scrollbars shall be autoshown (only the case if they are hidden by a autohide), false if the shall be auto hidden.
       * @param delayfree True if the scrollbars shall be hidden without a delay, false or undefined otherwise.
       */


      function refreshScrollbarsAutoHide(shallBeVisible, delayfree) {
        clearTimeout(_scrollbarsAutoHideTimeoutId);

        if (shallBeVisible) {
          //if(_hasOverflowCache.x && _hideOverflowCache.xs)
          removeClass(_scrollbarHorizontalElement, _classNameScrollbarAutoHidden); //if(_hasOverflowCache.y && _hideOverflowCache.ys)

          removeClass(_scrollbarVerticalElement, _classNameScrollbarAutoHidden);
        } else {
          var anyActive;
          var strActive = 'active';

          var hide = function hide() {
            if (!_scrollbarsHandleHovered && !_destroyed) {
              anyActive = _scrollbarHorizontalHandleElement.hasClass(strActive) || _scrollbarVerticalHandleElement.hasClass(strActive);
              if (!anyActive && (_scrollbarsAutoHideScroll || _scrollbarsAutoHideMove || _scrollbarsAutoHideLeave)) addClass(_scrollbarHorizontalElement, _classNameScrollbarAutoHidden);
              if (!anyActive && (_scrollbarsAutoHideScroll || _scrollbarsAutoHideMove || _scrollbarsAutoHideLeave)) addClass(_scrollbarVerticalElement, _classNameScrollbarAutoHidden);
            }
          };

          if (_scrollbarsAutoHideDelay > 0 && delayfree !== true) _scrollbarsAutoHideTimeoutId = setTimeout(hide, _scrollbarsAutoHideDelay);else hide();
        }
      }
      /**
       * Refreshes the handle length of the given scrollbar.
       * @param isHorizontal True if the horizontal scrollbar handle shall be refreshed, false if the vertical one shall be refreshed.
       */


      function refreshScrollbarHandleLength(isHorizontal) {
        var handleCSS = {};
        var scrollbarVars = getScrollbarVars(isHorizontal);
        var scrollbarVarsInfo = scrollbarVars._info;
        var digit = 1000000; //get and apply intended handle length

        var handleRatio = MATH.min(1, (_hostSizeCache[scrollbarVars._w_h] - (_paddingAbsoluteCache ? isHorizontal ? _paddingX : _paddingY : 0)) / _contentScrollSizeCache[scrollbarVars._w_h]);
        handleCSS[scrollbarVars._width_height] = MATH.floor(handleRatio * 100 * digit) / digit + '%'; //the last * digit / digit is for flooring to the 4th digit

        if (!nativeOverlayScrollbarsAreActive()) scrollbarVars._handle.css(handleCSS); //measure the handle length to respect min & max length

        scrollbarVarsInfo._handleLength = scrollbarVars._handle[0]['offset' + scrollbarVars._Width_Height];
        scrollbarVarsInfo._handleLengthRatio = handleRatio;
      }
      /**
       * Refreshes the handle offset of the given scrollbar.
       * @param isHorizontal True if the horizontal scrollbar handle shall be refreshed, false if the vertical one shall be refreshed.
       * @param scrollOrTransition The scroll position of the given scrollbar axis to which the handle shall be moved or a boolean which indicates whether a transition shall be applied. If undefined or boolean if the current scroll-offset is taken. (if isHorizontal ? scrollLeft : scrollTop)
       */


      function refreshScrollbarHandleOffset(isHorizontal, scrollOrTransition) {
        var transition = type(scrollOrTransition) == TYPES.b;
        var transitionDuration = 250;
        var isRTLisHorizontal = _isRTL && isHorizontal;
        var scrollbarVars = getScrollbarVars(isHorizontal);
        var scrollbarVarsInfo = scrollbarVars._info;
        var strTranslateBrace = 'translate(';

        var strTransform = VENDORS._cssProperty('transform');

        var strTransition = VENDORS._cssProperty('transition');

        var nativeScroll = isHorizontal ? _viewportElement[_strScrollLeft]() : _viewportElement[_strScrollTop]();
        var currentScroll = scrollOrTransition === undefined || transition ? nativeScroll : scrollOrTransition; //measure the handle length to respect min & max length

        var handleLength = scrollbarVarsInfo._handleLength;
        var trackLength = scrollbarVars._track[0]['offset' + scrollbarVars._Width_Height];
        var handleTrackDiff = trackLength - handleLength;
        var handleCSS = {};
        var transformOffset;
        var translateValue; //DONT use the variable '_contentScrollSizeCache[scrollbarVars._w_h]' instead of '_viewportElement[0]['scroll' + scrollbarVars._Width_Height]'
        // because its a bit behind during the small delay when content size updates
        //(delay = mutationObserverContentLag, if its 0 then this var could be used)

        var maxScroll = (_viewportElementNative[_strScroll + scrollbarVars._Width_Height] - _viewportElementNative['client' + scrollbarVars._Width_Height]) * (_rtlScrollBehavior.n && isRTLisHorizontal ? -1 : 1); //* -1 if rtl scroll max is negative

        var getScrollRatio = function getScrollRatio(base) {
          return isNaN(base / maxScroll) ? 0 : MATH.max(0, MATH.min(1, base / maxScroll));
        };

        var getHandleOffset = function getHandleOffset(scrollRatio) {
          var offset = handleTrackDiff * scrollRatio;
          offset = isNaN(offset) ? 0 : offset;
          offset = isRTLisHorizontal && !_rtlScrollBehavior.i ? trackLength - handleLength - offset : offset;
          offset = MATH.max(0, offset);
          return offset;
        };

        var scrollRatio = getScrollRatio(nativeScroll);
        var unsnappedScrollRatio = getScrollRatio(currentScroll);
        var handleOffset = getHandleOffset(unsnappedScrollRatio);
        var snappedHandleOffset = getHandleOffset(scrollRatio);
        scrollbarVarsInfo._maxScroll = maxScroll;
        scrollbarVarsInfo._currentScroll = nativeScroll;
        scrollbarVarsInfo._currentScrollRatio = scrollRatio;

        if (_supportTransform) {
          transformOffset = isRTLisHorizontal ? -(trackLength - handleLength - handleOffset) : handleOffset; //in px
          //transformOffset = (transformOffset / trackLength * 100) * (trackLength / handleLength); //in %

          translateValue = isHorizontal ? strTranslateBrace + transformOffset + 'px, 0)' : strTranslateBrace + '0, ' + transformOffset + 'px)';
          handleCSS[strTransform] = translateValue; //apply or clear up transition

          if (_supportTransition) handleCSS[strTransition] = transition && MATH.abs(handleOffset - scrollbarVarsInfo._handleOffset) > 1 ? getCSSTransitionString(scrollbarVars._handle) + ', ' + (strTransform + _strSpace + transitionDuration + 'ms') : _strEmpty;
        } else handleCSS[scrollbarVars._left_top] = handleOffset; //only apply css if offset has changed and overflow exists.


        if (!nativeOverlayScrollbarsAreActive()) {
          scrollbarVars._handle.css(handleCSS); //clear up transition


          if (_supportTransform && _supportTransition && transition) {
            scrollbarVars._handle.one(_strTransitionEndEvent, function () {
              if (!_destroyed) scrollbarVars._handle.css(strTransition, _strEmpty);
            });
          }
        }

        scrollbarVarsInfo._handleOffset = handleOffset;
        scrollbarVarsInfo._snappedHandleOffset = snappedHandleOffset;
        scrollbarVarsInfo._trackLength = trackLength;
      }
      /**
       * Refreshes the interactivity of the given scrollbar element.
       * @param isTrack True if the track element is the target, false if the handle element is the target.
       * @param value True for interactivity false for no interactivity.
       */


      function refreshScrollbarsInteractive(isTrack, value) {
        var action = value ? 'removeClass' : 'addClass';
        var element1 = isTrack ? _scrollbarHorizontalTrackElement : _scrollbarHorizontalHandleElement;
        var element2 = isTrack ? _scrollbarVerticalTrackElement : _scrollbarVerticalHandleElement;
        var className = isTrack ? _classNameScrollbarTrackOff : _classNameScrollbarHandleOff;
        element1[action](className);
        element2[action](className);
      }
      /**
       * Returns a object which is used for fast access for specific variables.
       * @param isHorizontal True if the horizontal scrollbar vars shall be accessed, false if the vertical scrollbar vars shall be accessed.
       * @returns {{wh: string, WH: string, lt: string, _wh: string, _lt: string, t: *, h: *, c: {}, s: *}}
       */


      function getScrollbarVars(isHorizontal) {
        return {
          _width_height: isHorizontal ? _strWidth : _strHeight,
          _Width_Height: isHorizontal ? 'Width' : 'Height',
          _left_top: isHorizontal ? _strLeft : _strTop,
          _Left_Top: isHorizontal ? 'Left' : 'Top',
          _x_y: isHorizontal ? _strX : _strY,
          _X_Y: isHorizontal ? 'X' : 'Y',
          _w_h: isHorizontal ? 'w' : 'h',
          _l_t: isHorizontal ? 'l' : 't',
          _track: isHorizontal ? _scrollbarHorizontalTrackElement : _scrollbarVerticalTrackElement,
          _handle: isHorizontal ? _scrollbarHorizontalHandleElement : _scrollbarVerticalHandleElement,
          _scrollbar: isHorizontal ? _scrollbarHorizontalElement : _scrollbarVerticalElement,
          _info: isHorizontal ? _scrollHorizontalInfo : _scrollVerticalInfo
        };
      } //==== Scrollbar Corner ====//

      /**
       * Builds or destroys the scrollbar corner DOM element.
       * @param destroy Indicates whether the DOM shall be build or destroyed.
       */


      function setupScrollbarCornerDOM(destroy) {
        _scrollbarCornerElement = _scrollbarCornerElement || selectOrGenerateDivByClass(_classNameScrollbarCorner, true);

        if (!destroy) {
          if (!_domExists) {
            _hostElement.append(_scrollbarCornerElement);
          }
        } else {
          if (_domExists && _initialized) {
            removeClass(_scrollbarCornerElement.removeAttr(LEXICON.s), _classNamesDynamicDestroy);
          } else {
            remove(_scrollbarCornerElement);
          }
        }
      }
      /**
       * Initializes all scrollbar corner interactivity events.
       */


      function setupScrollbarCornerEvents() {
        var insideIFrame = _windowElementNative.top !== _windowElementNative;
        var mouseDownPosition = {};
        var mouseDownSize = {};
        var mouseDownInvertedScale = {};
        var reconnectMutationObserver;

        function documentDragMove(event) {
          if (onMouseTouchDownContinue(event)) {
            var pageOffset = getCoordinates(event);
            var hostElementCSS = {};
            if (_resizeHorizontal || _resizeBoth) hostElementCSS[_strWidth] = mouseDownSize.w + (pageOffset.x - mouseDownPosition.x) * mouseDownInvertedScale.x;
            if (_resizeVertical || _resizeBoth) hostElementCSS[_strHeight] = mouseDownSize.h + (pageOffset.y - mouseDownPosition.y) * mouseDownInvertedScale.y;

            _hostElement.css(hostElementCSS);

            COMPATIBILITY.stpP(event);
          } else {
            documentMouseTouchUp(event);
          }
        }

        function documentMouseTouchUp(event) {
          var eventIsTrusted = event !== undefined;
          setupResponsiveEventListener(_documentElement, [_strSelectStartEvent, _strMouseTouchMoveEvent, _strMouseTouchUpEvent], [documentOnSelectStart, documentDragMove, documentMouseTouchUp], true);
          removeClass(_bodyElement, _classNameDragging);
          if (_scrollbarCornerElement.releaseCapture) _scrollbarCornerElement.releaseCapture();

          if (eventIsTrusted) {
            if (reconnectMutationObserver) connectMutationObservers();

            _base.update(_strAuto);
          }

          reconnectMutationObserver = false;
        }

        function onMouseTouchDownContinue(event) {
          var originalEvent = event.originalEvent || event;
          var isTouchEvent = originalEvent.touches !== undefined;
          return _sleeping || _destroyed ? false : COMPATIBILITY.mBtn(event) === 1 || isTouchEvent;
        }

        function getCoordinates(event) {
          return _msieVersion && insideIFrame ? {
            x: event.screenX,
            y: event.screenY
          } : COMPATIBILITY.page(event);
        }

        addDestroyEventListener(_scrollbarCornerElement, _strMouseTouchDownEvent, function (event) {
          if (onMouseTouchDownContinue(event) && !_resizeNone) {
            if (_mutationObserversConnected) {
              reconnectMutationObserver = true;
              disconnectMutationObservers();
            }

            mouseDownPosition = getCoordinates(event);
            mouseDownSize.w = _hostElementNative[LEXICON.oW] - (!_isBorderBox ? _paddingX : 0);
            mouseDownSize.h = _hostElementNative[LEXICON.oH] - (!_isBorderBox ? _paddingY : 0);
            mouseDownInvertedScale = getHostElementInvertedScale();
            setupResponsiveEventListener(_documentElement, [_strSelectStartEvent, _strMouseTouchMoveEvent, _strMouseTouchUpEvent], [documentOnSelectStart, documentDragMove, documentMouseTouchUp]);
            addClass(_bodyElement, _classNameDragging);
            if (_scrollbarCornerElement.setCapture) _scrollbarCornerElement.setCapture();
            COMPATIBILITY.prvD(event);
            COMPATIBILITY.stpP(event);
          }
        });
      } //==== Utils ====//

      /**
       * Calls the callback with the given name. The Context of this callback is always _base (this).
       * @param name The name of the target which shall be called.
       * @param args The args with which the callback shall be called.
       */


      function dispatchCallback(name, args) {
        if (_initialized) {
          var callback = _currentPreparedOptions.callbacks[name];
          var extensionOnName = name;
          var ext;
          if (extensionOnName.substr(0, 2) === 'on') extensionOnName = extensionOnName.substr(2, 1).toLowerCase() + extensionOnName.substr(3);
          if (type(callback) == TYPES.f) callback.call(_base, args);
          each(_extensions, function () {
            ext = this;
            if (type(ext.on) == TYPES.f) ext.on(extensionOnName, args);
          });
        } else if (!_destroyed) _callbacksInitQeueue.push({
          n: name,
          a: args
        });
      }
      /**
       * Sets the "top, right, bottom, left" properties, with a given prefix, of the given css object.
       * @param targetCSSObject The css object to which the values shall be applied.
       * @param prefix The prefix of the "top, right, bottom, left" css properties. (example: 'padding-' is a valid prefix)
       * @param values A array of values which shall be applied to the "top, right, bottom, left" -properties. The array order is [top, right, bottom, left].
       * If this argument is undefined the value '' (empty string) will be applied to all properties.
       */


      function setTopRightBottomLeft(targetCSSObject, prefix, values) {
        if (values === undefined) values = [_strEmpty, _strEmpty, _strEmpty, _strEmpty];
        targetCSSObject[prefix + _strTop] = values[0];
        targetCSSObject[prefix + _strRight] = values[1];
        targetCSSObject[prefix + _strBottom] = values[2];
        targetCSSObject[prefix + _strLeft] = values[3];
      }
      /**
       * Returns the computed CSS transition string from the given element.
       * @param element The element from which the transition string shall be returned.
       * @returns {string} The CSS transition string from the given element.
       */


      function getCSSTransitionString(element) {
        var transitionStr = VENDORS._cssProperty('transition');

        var assembledValue = element.css(transitionStr);
        if (assembledValue) return assembledValue;
        var regExpString = '\\s*(' + '([^,(]+(\\(.+?\\))?)+' + ')[\\s,]*';
        var regExpMain = new RegExp(regExpString);
        var regExpValidate = new RegExp('^(' + regExpString + ')+$');
        var properties = 'property duration timing-function delay'.split(' ');
        var result = [];
        var strResult;
        var valueArray;
        var i = 0;
        var j;

        var splitCssStyleByComma = function splitCssStyleByComma(str) {
          strResult = [];
          if (!str.match(regExpValidate)) return str;

          while (str.match(regExpMain)) {
            strResult.push(RegExp.$1);
            str = str.replace(regExpMain, _strEmpty);
          }

          return strResult;
        };

        for (; i < properties[LEXICON.l]; i++) {
          valueArray = splitCssStyleByComma(element.css(transitionStr + '-' + properties[i]));

          for (j = 0; j < valueArray[LEXICON.l]; j++) {
            result[j] = (result[j] ? result[j] + _strSpace : _strEmpty) + valueArray[j];
          }
        }

        return result.join(', ');
      }
      /**
       * Calculates the host-elements inverted scale. (invertedScale = 1 / scale)
       * @returns {{x: number, y: number}} The scale of the host-element.
       */


      function getHostElementInvertedScale() {
        var rect = _paddingElementNative[LEXICON.bCR]();

        return {
          x: _supportTransform ? 1 / (MATH.round(rect.width) / _paddingElementNative[LEXICON.oW]) || 1 : 1,
          y: _supportTransform ? 1 / (MATH.round(rect.height) / _paddingElementNative[LEXICON.oH]) || 1 : 1
        };
      }
      /**
       * Checks whether the given object is a HTMLElement.
       * @param o The object which shall be checked.
       * @returns {boolean} True the given object is a HTMLElement, false otherwise.
       */


      function isHTMLElement(o) {
        var strOwnerDocument = 'ownerDocument';
        var strHTMLElement = 'HTMLElement';
        var wnd = o && o[strOwnerDocument] ? o[strOwnerDocument].parentWindow || window : window;
        return typeof wnd[strHTMLElement] == TYPES.o ? o instanceof wnd[strHTMLElement] : //DOM2
        o && typeof o == TYPES.o && o !== null && o.nodeType === 1 && typeof o.nodeName == TYPES.s;
      }
      /**
       * Compares 2 arrays and returns the differences between them as a array.
       * @param a1 The first array which shall be compared.
       * @param a2 The second array which shall be compared.
       * @returns {Array} The differences between the two arrays.
       */


      function getArrayDifferences(a1, a2) {
        var a = [];
        var diff = [];
        var i;
        var k;

        for (i = 0; i < a1.length; i++) {
          a[a1[i]] = true;
        }

        for (i = 0; i < a2.length; i++) {
          if (a[a2[i]]) delete a[a2[i]];else a[a2[i]] = true;
        }

        for (k in a) {
          diff.push(k);
        }

        return diff;
      }
      /**
       * Returns Zero or the number to which the value can be parsed.
       * @param value The value which shall be parsed.
       * @param toFloat Indicates whether the number shall be parsed to a float.
       */


      function parseToZeroOrNumber(value, toFloat) {
        var num = toFloat ? parseFloat(value) : parseInt(value, 10);
        return isNaN(num) ? 0 : num;
      }
      /**
       * Gets several information of the textarea and returns them as a object or undefined if the browser doesn't support it.
       * @returns {{cursorRow: Number, cursorCol, rows: Number, cols: number, wRow: number, pos: number, max : number}} or undefined if not supported.
       */


      function getTextareaInfo() {
        //read needed values
        var textareaCursorPosition = _targetElementNative.selectionStart;
        if (textareaCursorPosition === undefined) return;

        var textareaValue = _targetElement.val();

        var textareaLength = textareaValue[LEXICON.l];
        var textareaRowSplit = textareaValue.split('\n');
        var textareaLastRow = textareaRowSplit[LEXICON.l];
        var textareaCurrentCursorRowSplit = textareaValue.substr(0, textareaCursorPosition).split('\n');
        var widestRow = 0;
        var textareaLastCol = 0;
        var cursorRow = textareaCurrentCursorRowSplit[LEXICON.l];
        var cursorCol = textareaCurrentCursorRowSplit[textareaCurrentCursorRowSplit[LEXICON.l] - 1][LEXICON.l];
        var rowCols;
        var i; //get widest Row and the last column of the textarea

        for (i = 0; i < textareaRowSplit[LEXICON.l]; i++) {
          rowCols = textareaRowSplit[i][LEXICON.l];

          if (rowCols > textareaLastCol) {
            widestRow = i + 1;
            textareaLastCol = rowCols;
          }
        }

        return {
          _cursorRow: cursorRow,
          //cursorRow
          _cursorColumn: cursorCol,
          //cursorCol
          _rows: textareaLastRow,
          //rows
          _columns: textareaLastCol,
          //cols
          _widestRow: widestRow,
          //wRow
          _cursorPosition: textareaCursorPosition,
          //pos
          _cursorMax: textareaLength //max

        };
      }
      /**
       * Determines whether native overlay scrollbars are active.
       * @returns {boolean} True if native overlay scrollbars are active, false otherwise.
       */


      function nativeOverlayScrollbarsAreActive() {
        return _ignoreOverlayScrollbarHidingCache && _nativeScrollbarIsOverlaid.x && _nativeScrollbarIsOverlaid.y;
      }
      /**
       * Gets the element which is used to measure the content size.
       * @returns {*} TextareaCover if target element is textarea else the ContentElement.
       */


      function getContentMeasureElement() {
        return _isTextarea ? _textareaCoverElement[0] : _contentElementNative;
      }
      /**
       * Generates a string which represents a HTML div with the given classes or attributes.
       * @param classesOrAttrs The class of the div as string or a object which represents the attributes of the div. (The class attribute can also be written as "className".)
       * @param content The content of the div as string.
       * @returns {string} The concated string which represents a HTML div and its content.
       */


      function generateDiv(classesOrAttrs, content) {
        return '<div ' + (classesOrAttrs ? type(classesOrAttrs) == TYPES.s ? 'class="' + classesOrAttrs + '"' : function () {
          var key;
          var attrs = _strEmpty;

          if (FRAMEWORK.isPlainObject(classesOrAttrs)) {
            for (key in classesOrAttrs) {
              attrs += (key === 'c' ? 'class' : key) + '="' + classesOrAttrs[key] + '" ';
            }
          }

          return attrs;
        }() : _strEmpty) + '>' + (content || _strEmpty) + '</div>';
      }
      /**
       * Selects or generates a div with the given class attribute.
       * @param className The class names (divided by spaces) of the div which shall be selected or generated.
       * @param selectParentOrOnlyChildren The parent element from which of the element shall be selected. (if undefined or boolean its hostElement)
       * If its a boolean it decides whether only the children of the host element shall be selected.
       * @returns {*} The generated or selected element.
       */


      function selectOrGenerateDivByClass(className, selectParentOrOnlyChildren) {
        var onlyChildren = type(selectParentOrOnlyChildren) == TYPES.b;
        var selectParent = onlyChildren ? _hostElement : selectParentOrOnlyChildren || _hostElement;
        return _domExists && !selectParent[LEXICON.l] ? null : _domExists ? selectParent[onlyChildren ? 'children' : 'find'](_strDot + className.replace(/\s/g, _strDot)).eq(0) : FRAMEWORK(generateDiv(className));
      }
      /**
       * Gets the value of the given property from the given object.
       * @param obj The object from which the property value shall be got.
       * @param path The property of which the value shall be got.
       * @returns {*} Returns the value of the searched property or undefined of the property wasn't found.
       */


      function getObjectPropVal(obj, path) {
        var splits = path.split(_strDot);
        var i = 0;
        var val;

        for (; i < splits.length; i++) {
          if (!obj[LEXICON.hOP](splits[i])) return;
          val = obj[splits[i]];
          if (i < splits.length && type(val) == TYPES.o) obj = val;
        }

        return val;
      }
      /**
       * Sets the value of the given property from the given object.
       * @param obj The object from which the property value shall be set.
       * @param path The property of which the value shall be set.
       * @param val The value of the property which shall be set.
       */


      function setObjectPropVal(obj, path, val) {
        var splits = path.split(_strDot);
        var splitsLength = splits.length;
        var i = 0;
        var extendObj = {};
        var extendObjRoot = extendObj;

        for (; i < splitsLength; i++) {
          extendObj = extendObj[splits[i]] = i + 1 < splitsLength ? {} : val;
        }

        FRAMEWORK.extend(obj, extendObjRoot, true);
      } //==== Utils Cache ====//

      /**
       * Compares two values or objects and returns true if they aren't equal.
       * @param current The first value or object which shall be compared.
       * @param cache The second value or object which shall be compared.
       * @param force If true the returned value is always true.
       * @returns {boolean} True if both values or objects aren't equal or force is true, false otherwise.
       */


      function checkCache(current, cache, force) {
        if (force) return force;

        if (type(current) == TYPES.o && type(cache) == TYPES.o) {
          for (var prop in current) {
            if (prop !== 'c') {
              if (current[LEXICON.hOP](prop) && cache[LEXICON.hOP](prop)) {
                if (checkCache(current[prop], cache[prop])) return true;
              } else {
                return true;
              }
            }
          }
        } else {
          return current !== cache;
        }

        return false;
      } //==== Shortcuts ====//

      /**
       * jQuery extend method shortcut with a appended "true" as first argument.
       */


      function extendDeep() {
        return FRAMEWORK.extend.apply(this, [true].concat([].slice.call(arguments)));
      }
      /**
       * jQuery addClass method shortcut.
       */


      function addClass(el, classes) {
        return _frameworkProto.addClass.call(el, classes);
      }
      /**
       * jQuery removeClass method shortcut.
       */


      function removeClass(el, classes) {
        return _frameworkProto.removeClass.call(el, classes);
      }
      /**
       * jQuery remove method shortcut.
       */


      function remove(el) {
        return _frameworkProto.remove.call(el);
      }
      /**
       * Finds the first child element with the given selector of the given element.
       * @param el The root element from which the selector shall be valid.
       * @param selector The selector of the searched element.
       * @returns {*} The first element which is a child of the given element and matches the givens selector.
       */


      function findFirst(el, selector) {
        return _frameworkProto.find.call(el, selector).eq(0);
      } //==== API ====//

      /**
       * Puts the instance to sleep. It wont respond to any changes in the DOM and won't update. Scrollbar Interactivity is also disabled as well as the resize handle.
       * This behavior can be reset by calling the update method.
       */


      _base.sleep = function () {
        _sleeping = true;
      };
      /**
       * Updates the plugin and DOM to the current options.
       * This method should only be called if a update is 100% required.
       * @param force True if every property shall be updated and the cache shall be ignored.
       * !INTERNAL USAGE! : force can be a string "auto", "sync" or "zoom" too
       * if "auto" then before a real update the content size and host element attributes gets checked, and if they changed only then the update method will be called.
       * if "sync" then the async update process (MutationObserver or UpdateLoop) gets synchronized and a corresponding update takes place if one was needed due to pending changes.
       * if "zoom" then a update takes place where it's assumed that content and host size changed
       * @returns {boolean|undefined} 
       * If force is "sync" then a boolean is returned which indicates whether a update was needed due to pending changes.
       * If force is "auto" then a boolean is returned whether a update was needed due to attribute or size changes.
       * undefined otherwise.
       */


      _base.update = function (force) {
        if (_destroyed) return;
        var attrsChanged;
        var contentSizeC;
        var isString = type(force) == TYPES.s;
        var imgElementSelector = 'img';
        var imgElementLoadEvent = 'load';
        var doUpdateAuto;
        var mutHost;
        var mutContent;

        if (isString) {
          if (force === _strAuto) {
            attrsChanged = meaningfulAttrsChanged();
            contentSizeC = updateAutoContentSizeChanged();
            doUpdateAuto = attrsChanged || contentSizeC;

            if (doUpdateAuto) {
              update({
                _contentSizeChanged: contentSizeC,
                _changedOptions: _initialized ? undefined : _currentPreparedOptions
              });
            }
          } else if (force === _strSync) {
            if (_mutationObserversConnected) {
              mutHost = _mutationObserverHostCallback(_mutationObserverHost.takeRecords());
              mutContent = _mutationObserverContentCallback(_mutationObserverContent.takeRecords());
            } else {
              mutHost = _base.update(_strAuto);
            }
          } else if (force === 'zoom') {
            update({
              _hostSizeChanged: true,
              _contentSizeChanged: true
            });
          }
        } else {
          force = _sleeping || force;
          _sleeping = false;
          if (!_base.update(_strSync) || force) update({
            _force: force
          });
        }

        if (!_isTextarea) {
          _contentElement.find(imgElementSelector).each(function (i, el) {
            var index = COMPATIBILITY.inA(el, _imgs);
            if (index === -1) FRAMEWORK(el).off(imgElementLoadEvent, imgOnLoad).on(imgElementLoadEvent, imgOnLoad);
          });
        }

        return doUpdateAuto || mutHost || mutContent;
      };
      /**
       Gets or sets the current options. The update method will be called automatically if new options were set.
       * @param newOptions If new options are given, then the new options will be set, if new options aren't given (undefined or a not a plain object) then the current options will be returned.
       * @param value If new options is a property path string, then this value will be used to set the option to which the property path string leads.
       * @returns {*}
       */


      _base.options = function (newOptions, value) {
        var option = {};
        var changedOps; //return current options if newOptions are undefined or empty

        if (FRAMEWORK.isEmptyObject(newOptions) || !FRAMEWORK.isPlainObject(newOptions)) {
          if (type(newOptions) == TYPES.s) {
            if (arguments.length > 1) {
              setObjectPropVal(option, newOptions, value);
              changedOps = setOptions(option);
            } else return getObjectPropVal(_currentOptions, newOptions);
          } else return _currentOptions;
        } else {
          changedOps = setOptions(newOptions);
        }

        if (!FRAMEWORK.isEmptyObject(changedOps)) {
          update({
            _changedOptions: changedOps
          });
        }
      };
      /**
       * Restore the DOM, disconnects all observers, remove all resize observers and put the instance to sleep.
       */


      _base.destroy = function () {
        if (_destroyed) return; //remove this instance from auto update loop

        autoUpdateLoop.remove(_base); //disconnect all mutation observers

        disconnectMutationObservers(); //remove all resize observers

        setupResizeObserver(_sizeObserverElement);
        setupResizeObserver(_sizeAutoObserverElement); //remove all extensions

        for (var extName in _extensions) {
          _base.removeExt(extName);
        } //remove all 'destroy' events


        while (_destroyEvents[LEXICON.l] > 0) {
          _destroyEvents.pop()();
        } //remove all events from host element


        setupHostMouseTouchEvents(true); //remove all helper / detection elements

        if (_contentGlueElement) remove(_contentGlueElement);
        if (_contentArrangeElement) remove(_contentArrangeElement);
        if (_sizeAutoObserverAdded) remove(_sizeAutoObserverElement); //remove all generated DOM

        setupScrollbarsDOM(true);
        setupScrollbarCornerDOM(true);
        setupStructureDOM(true); //remove all generated image load events

        for (var i = 0; i < _imgs[LEXICON.l]; i++) {
          FRAMEWORK(_imgs[i]).off('load', imgOnLoad);
        }

        _imgs = undefined;
        _destroyed = true;
        _sleeping = true; //remove this instance from the instances list

        INSTANCES(pluginTargetElement, 0);
        dispatchCallback('onDestroyed'); //remove all properties and methods
        //for (var property in _base)
        //    delete _base[property];
        //_base = undefined;
      };
      /**
       * Scrolls to a given position or element.
       * @param coordinates
       * 1. Can be "coordinates" which looks like:
       *    { x : ?, y : ? } OR          Object with x and y properties
       *    { left : ?, top : ? } OR     Object with left and top properties
       *    { l : ?, t : ? } OR          Object with l and t properties
       *    [ ?, ? ] OR                  Array where the first two element are the coordinates (first is x, second is y)
       *    ?                            A single value which stays for both axis
       *    A value can be a number, a string or a calculation.
       *
       *    Operators:
       *    [NONE]  The current scroll will be overwritten by the value.
       *    '+='    The value will be added to the current scroll offset
       *    '-='    The value will be subtracted from the current scroll offset
       *    '*='    The current scroll wil be multiplicated by the value.
       *    '/='    The current scroll wil be divided by the value.
       *
       *    Units:
       *    [NONE]  The value is the final scroll amount.                   final = (value * 1)
       *    'px'    Same as none
       *    '%'     The value is dependent on the current scroll value.     final = ((currentScrollValue / 100) * value)
       *    'vw'    The value is multiplicated by the viewport width.       final = (value * viewportWidth)
       *    'vh'    The value is multiplicated by the viewport height.      final = (value * viewportHeight)
       *
       *    example final values:
       *    200, '200px', '50%', '1vw', '1vh', '+=200', '/=1vw', '*=2px', '-=5vh', '+=33%', '+= 50% - 2px', '-= 1vw - 50%'
       *
       * 2. Can be a HTML or jQuery element:
       *    The final scroll offset is the offset (without margin) of the given HTML / jQuery element.
       *
       * 3. Can be a object with a HTML or jQuery element with additional settings:
       *    {
       *      el : [HTMLElement, jQuery element],             MUST be specified, else this object isn't valid.
       *      scroll : [string, array, object],               Default value is 'always'.
       *      block : [string, array, object],                Default value is 'begin'.
       *      margin : [number, boolean, array, object]       Default value is false.
       *    }
       *
       *    Possible scroll settings are:
       *    'always'      Scrolls always.
       *    'ifneeded'    Scrolls only if the element isnt fully in view.
       *    'never'       Scrolls never.
       *
       *    Possible block settings are:
       *    'begin'   Both axis shall be docked to the "begin" edge. - The element will be docked to the top and left edge of the viewport.
       *    'end'     Both axis shall be docked to the "end" edge. - The element will be docked to the bottom and right edge of the viewport. (If direction is RTL to the bottom and left edge.)
       *    'center'  Both axis shall be docked to "center". - The element will be centered in the viewport.
       *    'nearest' The element will be docked to the nearest edge(s).
       *
       *    Possible margin settings are: -- The actual margin of the element wont be affect, this option affects only the final scroll offset.
       *    [BOOLEAN]                                         If true the css margin of the element will be used, if false no margin will be used.
       *    [NUMBER]                                          The margin will be used for all edges.
       *
       * @param duration The duration of the scroll animation, OR a jQuery animation configuration object.
       * @param easing The animation easing.
       * @param complete The animation complete callback.
       * @returns {{
       *   position: {x: number, y: number},
       *   ratio: {x: number, y: number},
       *   max: {x: number, y: number},
       *   handleOffset: {x: number, y: number},
       *   handleLength: {x: number, y: number},
       *   handleLengthRatio: {x: number, y: number}, t
       *   rackLength: {x: number, y: number},
       *   isRTL: boolean,
       *   isRTLNormalized: boolean
       *  }}
       */


      _base.scroll = function (coordinates, duration, easing, complete) {
        if (arguments.length === 0 || coordinates === undefined) {
          var infoX = _scrollHorizontalInfo;
          var infoY = _scrollVerticalInfo;
          var normalizeInvert = _normalizeRTLCache && _isRTL && _rtlScrollBehavior.i;
          var normalizeNegate = _normalizeRTLCache && _isRTL && _rtlScrollBehavior.n;
          var scrollX = infoX._currentScroll;
          var scrollXRatio = infoX._currentScrollRatio;
          var maxScrollX = infoX._maxScroll;
          scrollXRatio = normalizeInvert ? 1 - scrollXRatio : scrollXRatio;
          scrollX = normalizeInvert ? maxScrollX - scrollX : scrollX;
          scrollX *= normalizeNegate ? -1 : 1;
          maxScrollX *= normalizeNegate ? -1 : 1;
          return {
            position: {
              x: scrollX,
              y: infoY._currentScroll
            },
            ratio: {
              x: scrollXRatio,
              y: infoY._currentScrollRatio
            },
            max: {
              x: maxScrollX,
              y: infoY._maxScroll
            },
            handleOffset: {
              x: infoX._handleOffset,
              y: infoY._handleOffset
            },
            handleLength: {
              x: infoX._handleLength,
              y: infoY._handleLength
            },
            handleLengthRatio: {
              x: infoX._handleLengthRatio,
              y: infoY._handleLengthRatio
            },
            trackLength: {
              x: infoX._trackLength,
              y: infoY._trackLength
            },
            snappedHandleOffset: {
              x: infoX._snappedHandleOffset,
              y: infoY._snappedHandleOffset
            },
            isRTL: _isRTL,
            isRTLNormalized: _normalizeRTLCache
          };
        }

        _base.update(_strSync);

        var normalizeRTL = _normalizeRTLCache;
        var coordinatesXAxisProps = [_strX, _strLeft, 'l'];
        var coordinatesYAxisProps = [_strY, _strTop, 't'];
        var coordinatesOperators = ['+=', '-=', '*=', '/='];
        var durationIsObject = type(duration) == TYPES.o;
        var completeCallback = durationIsObject ? duration.complete : complete;
        var i;
        var finalScroll = {};
        var specialEasing = {};
        var doScrollLeft;
        var doScrollTop;
        var animationOptions;
        var strEnd = 'end';
        var strBegin = 'begin';
        var strCenter = 'center';
        var strNearest = 'nearest';
        var strAlways = 'always';
        var strNever = 'never';
        var strIfNeeded = 'ifneeded';
        var strLength = LEXICON.l;
        var settingsAxis;
        var settingsScroll;
        var settingsBlock;
        var settingsMargin;
        var finalElement;
        var elementObjSettingsAxisValues = [_strX, _strY, 'xy', 'yx'];
        var elementObjSettingsBlockValues = [strBegin, strEnd, strCenter, strNearest];
        var elementObjSettingsScrollValues = [strAlways, strNever, strIfNeeded];
        var coordinatesIsElementObj = coordinates[LEXICON.hOP]('el');
        var possibleElement = coordinatesIsElementObj ? coordinates.el : coordinates;
        var possibleElementIsJQuery = possibleElement instanceof FRAMEWORK || JQUERY ? possibleElement instanceof JQUERY : false;
        var possibleElementIsHTMLElement = possibleElementIsJQuery ? false : isHTMLElement(possibleElement);
        var proxyCompleteCallback = type(completeCallback) != TYPES.f ? undefined : function () {
          if (doScrollLeft) refreshScrollbarHandleOffset(true);
          if (doScrollTop) refreshScrollbarHandleOffset(false);
          completeCallback();
        };

        function checkSettingsStringValue(currValue, allowedValues) {
          for (i = 0; i < allowedValues[strLength]; i++) {
            if (currValue === allowedValues[i]) return true;
          }

          return false;
        }

        function getRawScroll(isX, coordinates) {
          var coordinateProps = isX ? coordinatesXAxisProps : coordinatesYAxisProps;
          coordinates = type(coordinates) == TYPES.s || type(coordinates) == TYPES.n ? [coordinates, coordinates] : coordinates;
          if (type(coordinates) == TYPES.a) return isX ? coordinates[0] : coordinates[1];else if (type(coordinates) == TYPES.o) {
            //decides RTL normalization "hack" with .n
            //normalizeRTL = type(coordinates.n) == TYPES.b ? coordinates.n : normalizeRTL; 
            for (i = 0; i < coordinateProps[strLength]; i++) {
              if (coordinateProps[i] in coordinates) return coordinates[coordinateProps[i]];
            }
          }
        }

        function getFinalScroll(isX, rawScroll) {
          var isString = type(rawScroll) == TYPES.s;
          var operator;
          var amount;
          var scrollInfo = isX ? _scrollHorizontalInfo : _scrollVerticalInfo;
          var currScroll = scrollInfo._currentScroll;
          var maxScroll = scrollInfo._maxScroll;
          var mult = ' * ';
          var finalValue;
          var isRTLisX = _isRTL && isX;
          var normalizeShortcuts = isRTLisX && _rtlScrollBehavior.n && !normalizeRTL;
          var strReplace = 'replace';
          var evalFunc = eval;
          var possibleOperator;

          if (isString) {
            //check operator
            if (rawScroll[strLength] > 2) {
              possibleOperator = rawScroll.substr(0, 2);
              if (inArray(possibleOperator, coordinatesOperators) > -1) operator = possibleOperator;
            } //calculate units and shortcuts


            rawScroll = operator ? rawScroll.substr(2) : rawScroll;
            rawScroll = rawScroll[strReplace](/min/g, 0) //'min' = 0%
            [strReplace](/</g, 0) //'<'   = 0%
            [strReplace](/max/g, (normalizeShortcuts ? '-' : _strEmpty) + _strHundredPercent) //'max' = 100%
            [strReplace](/>/g, (normalizeShortcuts ? '-' : _strEmpty) + _strHundredPercent) //'>'   = 100%
            [strReplace](/px/g, _strEmpty)[strReplace](/%/g, mult + maxScroll * (isRTLisX && _rtlScrollBehavior.n ? -1 : 1) / 100.0)[strReplace](/vw/g, mult + _viewportSize.w)[strReplace](/vh/g, mult + _viewportSize.h);
            amount = parseToZeroOrNumber(isNaN(rawScroll) ? parseToZeroOrNumber(evalFunc(rawScroll), true).toFixed() : rawScroll);
          } else {
            amount = rawScroll;
          }

          if (amount !== undefined && !isNaN(amount) && type(amount) == TYPES.n) {
            var normalizeIsRTLisX = normalizeRTL && isRTLisX;
            var operatorCurrScroll = currScroll * (normalizeIsRTLisX && _rtlScrollBehavior.n ? -1 : 1);
            var invert = normalizeIsRTLisX && _rtlScrollBehavior.i;
            var negate = normalizeIsRTLisX && _rtlScrollBehavior.n;
            operatorCurrScroll = invert ? maxScroll - operatorCurrScroll : operatorCurrScroll;

            switch (operator) {
              case '+=':
                finalValue = operatorCurrScroll + amount;
                break;

              case '-=':
                finalValue = operatorCurrScroll - amount;
                break;

              case '*=':
                finalValue = operatorCurrScroll * amount;
                break;

              case '/=':
                finalValue = operatorCurrScroll / amount;
                break;

              default:
                finalValue = amount;
                break;
            }

            finalValue = invert ? maxScroll - finalValue : finalValue;
            finalValue *= negate ? -1 : 1;
            finalValue = isRTLisX && _rtlScrollBehavior.n ? MATH.min(0, MATH.max(maxScroll, finalValue)) : MATH.max(0, MATH.min(maxScroll, finalValue));
          }

          return finalValue === currScroll ? undefined : finalValue;
        }

        function getPerAxisValue(value, valueInternalType, defaultValue, allowedValues) {
          var resultDefault = [defaultValue, defaultValue];
          var valueType = type(value);
          var valueArrLength;
          var valueArrItem; //value can be [ string, or array of two strings ]

          if (valueType == valueInternalType) {
            value = [value, value];
          } else if (valueType == TYPES.a) {
            valueArrLength = value[strLength];
            if (valueArrLength > 2 || valueArrLength < 1) value = resultDefault;else {
              if (valueArrLength === 1) value[1] = defaultValue;

              for (i = 0; i < valueArrLength; i++) {
                valueArrItem = value[i];

                if (type(valueArrItem) != valueInternalType || !checkSettingsStringValue(valueArrItem, allowedValues)) {
                  value = resultDefault;
                  break;
                }
              }
            }
          } else if (valueType == TYPES.o) value = [value[_strX] || defaultValue, value[_strY] || defaultValue];else value = resultDefault;

          return {
            x: value[0],
            y: value[1]
          };
        }

        function generateMargin(marginTopRightBottomLeftArray) {
          var result = [];
          var currValue;
          var currValueType;
          var valueDirections = [_strTop, _strRight, _strBottom, _strLeft];

          for (i = 0; i < marginTopRightBottomLeftArray[strLength]; i++) {
            if (i === valueDirections[strLength]) break;
            currValue = marginTopRightBottomLeftArray[i];
            currValueType = type(currValue);
            if (currValueType == TYPES.b) result.push(currValue ? parseToZeroOrNumber(finalElement.css(_strMarginMinus + valueDirections[i])) : 0);else result.push(currValueType == TYPES.n ? currValue : 0);
          }

          return result;
        }

        if (possibleElementIsJQuery || possibleElementIsHTMLElement) {
          //get settings
          var margin = coordinatesIsElementObj ? coordinates.margin : 0;
          var axis = coordinatesIsElementObj ? coordinates.axis : 0;
          var scroll = coordinatesIsElementObj ? coordinates.scroll : 0;
          var block = coordinatesIsElementObj ? coordinates.block : 0;
          var marginDefault = [0, 0, 0, 0];
          var marginType = type(margin);
          var marginLength;
          finalElement = possibleElementIsJQuery ? possibleElement : FRAMEWORK(possibleElement);

          if (finalElement[strLength] > 0) {
            //margin can be [ boolean, number, array of 2, array of 4, object ]
            if (marginType == TYPES.n || marginType == TYPES.b) margin = generateMargin([margin, margin, margin, margin]);else if (marginType == TYPES.a) {
              marginLength = margin[strLength];
              if (marginLength === 2) margin = generateMargin([margin[0], margin[1], margin[0], margin[1]]);else if (marginLength >= 4) margin = generateMargin(margin);else margin = marginDefault;
            } else if (marginType == TYPES.o) margin = generateMargin([margin[_strTop], margin[_strRight], margin[_strBottom], margin[_strLeft]]);else margin = marginDefault; //block = type(block) === TYPES.b ? block ? [ strNearest, strBegin ] : [ strNearest, strEnd ] : block;

            settingsAxis = checkSettingsStringValue(axis, elementObjSettingsAxisValues) ? axis : 'xy';
            settingsScroll = getPerAxisValue(scroll, TYPES.s, strAlways, elementObjSettingsScrollValues);
            settingsBlock = getPerAxisValue(block, TYPES.s, strBegin, elementObjSettingsBlockValues);
            settingsMargin = margin;
            var viewportScroll = {
              l: _scrollHorizontalInfo._currentScroll,
              t: _scrollVerticalInfo._currentScroll
            }; // use padding element instead of viewport element because padding element has never padding, margin or position applied.

            var viewportOffset = _paddingElement.offset(); //get coordinates


            var elementOffset = finalElement.offset();
            var doNotScroll = {
              x: settingsScroll.x == strNever || settingsAxis == _strY,
              y: settingsScroll.y == strNever || settingsAxis == _strX
            };
            elementOffset[_strTop] -= settingsMargin[0];
            elementOffset[_strLeft] -= settingsMargin[3];
            var elementScrollCoordinates = {
              x: MATH.round(elementOffset[_strLeft] - viewportOffset[_strLeft] + viewportScroll.l),
              y: MATH.round(elementOffset[_strTop] - viewportOffset[_strTop] + viewportScroll.t)
            };

            if (_isRTL) {
              if (!_rtlScrollBehavior.n && !_rtlScrollBehavior.i) elementScrollCoordinates.x = MATH.round(viewportOffset[_strLeft] - elementOffset[_strLeft] + viewportScroll.l);
              if (_rtlScrollBehavior.n && normalizeRTL) elementScrollCoordinates.x *= -1;
              if (_rtlScrollBehavior.i && normalizeRTL) elementScrollCoordinates.x = MATH.round(viewportOffset[_strLeft] - elementOffset[_strLeft] + (_scrollHorizontalInfo._maxScroll - viewportScroll.l));
            } //measuring is required


            if (settingsBlock.x != strBegin || settingsBlock.y != strBegin || settingsScroll.x == strIfNeeded || settingsScroll.y == strIfNeeded || _isRTL) {
              var measuringElm = finalElement[0];
              var rawElementSize = _supportTransform ? measuringElm[LEXICON.bCR]() : {
                width: measuringElm[LEXICON.oW],
                height: measuringElm[LEXICON.oH]
              };
              var elementSize = {
                w: rawElementSize[_strWidth] + settingsMargin[3] + settingsMargin[1],
                h: rawElementSize[_strHeight] + settingsMargin[0] + settingsMargin[2]
              };

              var finalizeBlock = function finalizeBlock(isX) {
                var vars = getScrollbarVars(isX);
                var wh = vars._w_h;
                var lt = vars._left_top;
                var xy = vars._x_y;
                var blockIsEnd = settingsBlock[xy] == (isX ? _isRTL ? strBegin : strEnd : strEnd);
                var blockIsCenter = settingsBlock[xy] == strCenter;
                var blockIsNearest = settingsBlock[xy] == strNearest;
                var scrollNever = settingsScroll[xy] == strNever;
                var scrollIfNeeded = settingsScroll[xy] == strIfNeeded;
                var vpSize = _viewportSize[wh];
                var vpOffset = viewportOffset[lt];
                var elSize = elementSize[wh];
                var elOffset = elementOffset[lt];
                var divide = blockIsCenter ? 2 : 1;
                var elementCenterOffset = elOffset + elSize / 2;
                var viewportCenterOffset = vpOffset + vpSize / 2;
                var isInView = elSize <= vpSize && elOffset >= vpOffset && elOffset + elSize <= vpOffset + vpSize;
                if (scrollNever) doNotScroll[xy] = true;else if (!doNotScroll[xy]) {
                  if (blockIsNearest || scrollIfNeeded) {
                    doNotScroll[xy] = scrollIfNeeded ? isInView : false;
                    blockIsEnd = elSize < vpSize ? elementCenterOffset > viewportCenterOffset : elementCenterOffset < viewportCenterOffset;
                  }

                  elementScrollCoordinates[xy] -= blockIsEnd || blockIsCenter ? (vpSize / divide - elSize / divide) * (isX && _isRTL && normalizeRTL ? -1 : 1) : 0;
                }
              };

              finalizeBlock(true);
              finalizeBlock(false);
            }

            if (doNotScroll.y) delete elementScrollCoordinates.y;
            if (doNotScroll.x) delete elementScrollCoordinates.x;
            coordinates = elementScrollCoordinates;
          }
        }

        finalScroll[_strScrollLeft] = getFinalScroll(true, getRawScroll(true, coordinates));
        finalScroll[_strScrollTop] = getFinalScroll(false, getRawScroll(false, coordinates));
        doScrollLeft = finalScroll[_strScrollLeft] !== undefined;
        doScrollTop = finalScroll[_strScrollTop] !== undefined;

        if ((doScrollLeft || doScrollTop) && (duration > 0 || durationIsObject)) {
          if (durationIsObject) {
            duration.complete = proxyCompleteCallback;

            _viewportElement.animate(finalScroll, duration);
          } else {
            animationOptions = {
              duration: duration,
              complete: proxyCompleteCallback
            };

            if (type(easing) == TYPES.a || FRAMEWORK.isPlainObject(easing)) {
              specialEasing[_strScrollLeft] = easing[0] || easing.x;
              specialEasing[_strScrollTop] = easing[1] || easing.y;
              animationOptions.specialEasing = specialEasing;
            } else {
              animationOptions.easing = easing;
            }

            _viewportElement.animate(finalScroll, animationOptions);
          }
        } else {
          if (doScrollLeft) _viewportElement[_strScrollLeft](finalScroll[_strScrollLeft]);
          if (doScrollTop) _viewportElement[_strScrollTop](finalScroll[_strScrollTop]);
        }
      };
      /**
       * Stops all scroll animations.
       * @returns {*} The current OverlayScrollbars instance (for chaining).
       */


      _base.scrollStop = function (param1, param2, param3) {
        _viewportElement.stop(param1, param2, param3);

        return _base;
      };
      /**
       * Returns all relevant elements.
       * @param elementName The name of the element which shall be returned.
       * @returns {{target: *, host: *, padding: *, viewport: *, content: *, scrollbarHorizontal: {scrollbar: *, track: *, handle: *}, scrollbarVertical: {scrollbar: *, track: *, handle: *}, scrollbarCorner: *} | *}
       */


      _base.getElements = function (elementName) {
        var obj = {
          target: _targetElementNative,
          host: _hostElementNative,
          padding: _paddingElementNative,
          viewport: _viewportElementNative,
          content: _contentElementNative,
          scrollbarHorizontal: {
            scrollbar: _scrollbarHorizontalElement[0],
            track: _scrollbarHorizontalTrackElement[0],
            handle: _scrollbarHorizontalHandleElement[0]
          },
          scrollbarVertical: {
            scrollbar: _scrollbarVerticalElement[0],
            track: _scrollbarVerticalTrackElement[0],
            handle: _scrollbarVerticalHandleElement[0]
          },
          scrollbarCorner: _scrollbarCornerElement[0]
        };
        return type(elementName) == TYPES.s ? getObjectPropVal(obj, elementName) : obj;
      };
      /**
       * Returns a object which describes the current state of this instance.
       * @param stateProperty A specific property from the state object which shall be returned.
       * @returns {{widthAuto, heightAuto, overflowAmount, hideOverflow, hasOverflow, contentScrollSize, viewportSize, hostSize, autoUpdate} | *}
       */


      _base.getState = function (stateProperty) {
        function prepare(obj) {
          if (!FRAMEWORK.isPlainObject(obj)) return obj;
          var extended = extendDeep({}, obj);

          var changePropertyName = function changePropertyName(from, to) {
            if (extended[LEXICON.hOP](from)) {
              extended[to] = extended[from];
              delete extended[from];
            }
          };

          changePropertyName('w', _strWidth); //change w to width

          changePropertyName('h', _strHeight); //change h to height

          delete extended.c; //delete c (the 'changed' prop)

          return extended;
        }

        ;
        var obj = {
          destroyed: !!prepare(_destroyed),
          sleeping: !!prepare(_sleeping),
          autoUpdate: prepare(!_mutationObserversConnected),
          widthAuto: prepare(_widthAutoCache),
          heightAuto: prepare(_heightAutoCache),
          padding: prepare(_cssPaddingCache),
          overflowAmount: prepare(_overflowAmountCache),
          hideOverflow: prepare(_hideOverflowCache),
          hasOverflow: prepare(_hasOverflowCache),
          contentScrollSize: prepare(_contentScrollSizeCache),
          viewportSize: prepare(_viewportSize),
          hostSize: prepare(_hostSizeCache),
          documentMixed: prepare(_documentMixed)
        };
        return type(stateProperty) == TYPES.s ? getObjectPropVal(obj, stateProperty) : obj;
      };
      /**
       * Gets all or specific extension instance.
       * @param extName The name of the extension from which the instance shall be got.
       * @returns {{}} The instance of the extension with the given name or undefined if the instance couldn't be found.
       */


      _base.ext = function (extName) {
        var result;

        var privateMethods = _extensionsPrivateMethods.split(' ');

        var i = 0;

        if (type(extName) == TYPES.s) {
          if (_extensions[LEXICON.hOP](extName)) {
            result = extendDeep({}, _extensions[extName]);

            for (; i < privateMethods.length; i++) {
              delete result[privateMethods[i]];
            }
          }
        } else {
          result = {};

          for (i in _extensions) {
            result[i] = extendDeep({}, _base.ext(i));
          }
        }

        return result;
      };
      /**
       * Adds a extension to this instance.
       * @param extName The name of the extension which shall be added.
       * @param extensionOptions The extension options which shall be used.
       * @returns {{}} The instance of the added extension or undefined if the extension couldn't be added properly.
       */


      _base.addExt = function (extName, extensionOptions) {
        var registeredExtensionObj = _plugin.extension(extName);

        var instance;
        var instanceAdded;
        var instanceContract;
        var contractResult;
        var contractFulfilled = true;

        if (registeredExtensionObj) {
          if (!_extensions[LEXICON.hOP](extName)) {
            instance = registeredExtensionObj.extensionFactory.call(_base, extendDeep({}, registeredExtensionObj.defaultOptions), FRAMEWORK, COMPATIBILITY);

            if (instance) {
              instanceContract = instance.contract;

              if (type(instanceContract) == TYPES.f) {
                contractResult = instanceContract(window);
                contractFulfilled = type(contractResult) == TYPES.b ? contractResult : contractFulfilled;
              }

              if (contractFulfilled) {
                _extensions[extName] = instance;
                instanceAdded = instance.added;
                if (type(instanceAdded) == TYPES.f) instanceAdded(extensionOptions);
                return _base.ext(extName);
              }
            }
          } else return _base.ext(extName);
        } else console.warn("A extension with the name \"" + extName + "\" isn't registered.");
      };
      /**
       * Removes a extension from this instance.
       * @param extName The name of the extension which shall be removed.
       * @returns {boolean} True if the extension was removed, false otherwise e.g. if the extension wasn't added before.
       */


      _base.removeExt = function (extName) {
        var instance = _extensions[extName];
        var instanceRemoved;

        if (instance) {
          delete _extensions[extName];
          instanceRemoved = instance.removed;
          if (type(instanceRemoved) == TYPES.f) instanceRemoved();
          return true;
        }

        return false;
      };
      /**
       * Constructs the plugin.
       * @param targetElement The element to which the plugin shall be applied.
       * @param options The initial options of the plugin.
       * @param extensions The extension(s) which shall be added right after the initialization.
       * @returns {boolean} True if the plugin was successfully initialized, false otherwise.
       */


      function construct(targetElement, options, extensions) {
        _defaultOptions = globals.defaultOptions;
        _nativeScrollbarStyling = globals.nativeScrollbarStyling;
        _nativeScrollbarSize = extendDeep({}, globals.nativeScrollbarSize);
        _nativeScrollbarIsOverlaid = extendDeep({}, globals.nativeScrollbarIsOverlaid);
        _overlayScrollbarDummySize = extendDeep({}, globals.overlayScrollbarDummySize);
        _rtlScrollBehavior = extendDeep({}, globals.rtlScrollBehavior); //parse & set options but don't update

        setOptions(extendDeep({}, _defaultOptions, options));
        _cssCalc = globals.cssCalc;
        _msieVersion = globals.msie;
        _autoUpdateRecommended = globals.autoUpdateRecommended;
        _supportTransition = globals.supportTransition;
        _supportTransform = globals.supportTransform;
        _supportPassiveEvents = globals.supportPassiveEvents;
        _supportResizeObserver = globals.supportResizeObserver;
        _supportMutationObserver = globals.supportMutationObserver;
        _restrictedMeasuring = globals.restrictedMeasuring;
        _documentElement = FRAMEWORK(targetElement.ownerDocument);
        _documentElementNative = _documentElement[0];
        _windowElement = FRAMEWORK(_documentElementNative.defaultView || _documentElementNative.parentWindow);
        _windowElementNative = _windowElement[0];
        _htmlElement = findFirst(_documentElement, 'html');
        _bodyElement = findFirst(_htmlElement, 'body');
        _targetElement = FRAMEWORK(targetElement);
        _targetElementNative = _targetElement[0];
        _isTextarea = _targetElement.is('textarea');
        _isBody = _targetElement.is('body');
        _documentMixed = _documentElementNative !== document;
        /* On a div Element The if checks only whether:
         * - the targetElement has the class "os-host"
         * - the targetElement has a a child with the class "os-padding"
         * 
         * If that's the case, its assumed the DOM has already the following structure:
         * (The ".os-host" element is the targetElement)
         *
         *  <div class="os-host">
         *      <div class="os-resize-observer-host"></div>
         *      <div class="os-padding">
         *          <div class="os-viewport">
         *              <div class="os-content"></div>
         *          </div>
         *      </div>
         *      <div class="os-scrollbar os-scrollbar-horizontal ">
         *          <div class="os-scrollbar-track">
         *              <div class="os-scrollbar-handle"></div>
         *          </div>
         *      </div>
         *      <div class="os-scrollbar os-scrollbar-vertical">
         *          <div class="os-scrollbar-track">
         *              <div class="os-scrollbar-handle"></div>
         *          </div>
         *      </div>
         *      <div class="os-scrollbar-corner"></div>
         *  </div>
         *
         * =====================================================================================
         * 
         * On a Textarea Element The if checks only whether:
         * - the targetElement has the class "os-textarea" 
         * - the targetElement is inside a element with the class "os-content" 
         * 
         * If that's the case, its assumed the DOM has already the following structure:
         * (The ".os-textarea" (textarea) element is the targetElement)
         *
         *  <div class="os-host-textarea">
         *      <div class="os-resize-observer-host"></div>
         *      <div class="os-padding os-text-inherit">
         *          <div class="os-viewport os-text-inherit">
         *              <div class="os-content os-text-inherit">
         *                  <div class="os-textarea-cover"></div>
         *                  <textarea class="os-textarea os-text-inherit"></textarea>
         *              </div>
         *          </div>
         *      </div>
         *      <div class="os-scrollbar os-scrollbar-horizontal ">
         *          <div class="os-scrollbar-track">
         *              <div class="os-scrollbar-handle"></div>
         *          </div>
         *      </div>
         *      <div class="os-scrollbar os-scrollbar-vertical">
         *          <div class="os-scrollbar-track">
         *              <div class="os-scrollbar-handle"></div>
         *          </div>
         *      </div>
         *      <div class="os-scrollbar-corner"></div>
         *  </div>
         */

        _domExists = _isTextarea ? _targetElement.hasClass(_classNameTextareaElement) && _targetElement.parent().hasClass(_classNameContentElement) : _targetElement.hasClass(_classNameHostElement) && _targetElement.children(_strDot + _classNamePaddingElement)[LEXICON.l];
        var initBodyScroll;

        var _bodyMouseTouchDownListener; //check if the plugin hasn't to be initialized


        if (_nativeScrollbarIsOverlaid.x && _nativeScrollbarIsOverlaid.y && !_currentPreparedOptions.nativeScrollbarsOverlaid.initialize) {
          dispatchCallback('onInitializationWithdrawn');

          if (_domExists) {
            setupStructureDOM(true);
            setupScrollbarsDOM(true);
            setupScrollbarCornerDOM(true);
          }

          _destroyed = true;
          _sleeping = true;
          return _base;
        }

        if (_isBody) {
          initBodyScroll = {};
          initBodyScroll.l = MATH.max(_targetElement[_strScrollLeft](), _htmlElement[_strScrollLeft](), _windowElement[_strScrollLeft]());
          initBodyScroll.t = MATH.max(_targetElement[_strScrollTop](), _htmlElement[_strScrollTop](), _windowElement[_strScrollTop]());

          _bodyMouseTouchDownListener = function bodyMouseTouchDownListener() {
            _viewportElement.removeAttr('tabindex');

            setupResponsiveEventListener(_viewportElement, _strMouseTouchDownEvent, _bodyMouseTouchDownListener, true, true);
          };
        } //build OverlayScrollbars DOM


        setupStructureDOM();
        setupScrollbarsDOM();
        setupScrollbarCornerDOM(); //create OverlayScrollbars events

        setupStructureEvents();
        setupScrollbarEvents(true);
        setupScrollbarEvents(false);
        setupScrollbarCornerEvents(); //create mutation observers

        createMutationObservers(); //build resize observer for the host element

        setupResizeObserver(_sizeObserverElement, hostOnResized);

        if (_isBody) {
          //apply the body scroll to handle it right in the update method
          _viewportElement[_strScrollLeft](initBodyScroll.l)[_strScrollTop](initBodyScroll.t); //set the focus on the viewport element so you dont have to click on the page to use keyboard keys (up / down / space) for scrolling


          if (document.activeElement == targetElement && _viewportElementNative.focus) {
            //set a tabindex to make the viewportElement focusable
            _viewportElement.attr('tabindex', '-1');

            _viewportElementNative.focus();
            /* the tabindex has to be removed due to;
             * If you set the tabindex attribute on an <div>, then its child content cannot be scrolled with the arrow keys unless you set tabindex on the content, too
             * https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/tabindex
             */


            setupResponsiveEventListener(_viewportElement, _strMouseTouchDownEvent, _bodyMouseTouchDownListener, false, true);
          }
        } //update for the first time & initialize cache


        _base.update(_strAuto); //the plugin is initialized now!


        _initialized = true;
        dispatchCallback('onInitialized'); //call all callbacks which would fire before the initialized was complete

        each(_callbacksInitQeueue, function (index, value) {
          dispatchCallback(value.n, value.a);
        });
        _callbacksInitQeueue = []; //add extensions

        if (type(extensions) == TYPES.s) extensions = [extensions];
        if (COMPATIBILITY.isA(extensions)) each(extensions, function (index, value) {
          _base.addExt(value);
        });else if (FRAMEWORK.isPlainObject(extensions)) each(extensions, function (key, value) {
          _base.addExt(key, value);
        }); //add the transition class for transitions AFTER the first update & AFTER the applied extensions (for preventing unwanted transitions)

        setTimeout(function () {
          if (_supportTransition && !_destroyed) addClass(_hostElement, _classNameHostTransition);
        }, 333);
        return _base;
      }

      if (_plugin.valid(construct(pluginTargetElement, options, extensions))) {
        INSTANCES(pluginTargetElement, _base);
      }

      return _base;
    }
    /**
     * Initializes a new OverlayScrollbarsInstance object or changes options if already initialized or returns the current instance.
     * @param pluginTargetElements The elements to which the Plugin shall be initialized.
     * @param options The custom options with which the plugin shall be initialized.
     * @param extensions The extension(s) which shall be added right after initialization.
     * @returns {*}
     */


    _plugin = window[PLUGINNAME] = function (pluginTargetElements, options, extensions) {
      if (arguments[LEXICON.l] === 0) return this;
      var arr = [];
      var optsIsPlainObj = FRAMEWORK.isPlainObject(options);
      var inst;
      var result; //pluginTargetElements is null or undefined

      if (!pluginTargetElements) return optsIsPlainObj || !options ? result : arr;
      /*
         pluginTargetElements will be converted to:
         1. A jQueryElement Array
         2. A HTMLElement Array
         3. A Array with a single HTML Element
         so pluginTargetElements is always a array.
      */

      pluginTargetElements = pluginTargetElements[LEXICON.l] != undefined ? pluginTargetElements : [pluginTargetElements[0] || pluginTargetElements];
      initOverlayScrollbarsStatics();

      if (pluginTargetElements[LEXICON.l] > 0) {
        if (optsIsPlainObj) {
          FRAMEWORK.each(pluginTargetElements, function (i, v) {
            inst = v;
            if (inst !== undefined) arr.push(OverlayScrollbarsInstance(inst, options, extensions, _pluginsGlobals, _pluginsAutoUpdateLoop));
          });
        } else {
          FRAMEWORK.each(pluginTargetElements, function (i, v) {
            inst = INSTANCES(v);
            if (options === '!' && _plugin.valid(inst) || COMPATIBILITY.type(options) == TYPES.f && options(v, inst)) arr.push(inst);else if (options === undefined) arr.push(inst);
          });
        }

        result = arr[LEXICON.l] === 1 ? arr[0] : arr;
      }

      return result;
    };
    /**
     * Returns a object which contains global information about the plugin and each instance of it.
     * The returned object is just a copy, that means that changes to the returned object won't have any effect to the original object.
     */


    _plugin.globals = function () {
      initOverlayScrollbarsStatics();
      var globals = FRAMEWORK.extend(true, {}, _pluginsGlobals);
      delete globals['msie'];
      return globals;
    };
    /**
     * Gets or Sets the default options for each new plugin initialization.
     * @param newDefaultOptions The object with which the default options shall be extended.
     */


    _plugin.defaultOptions = function (newDefaultOptions) {
      initOverlayScrollbarsStatics();
      var currDefaultOptions = _pluginsGlobals.defaultOptions;
      if (newDefaultOptions === undefined) return FRAMEWORK.extend(true, {}, currDefaultOptions); //set the new default options

      _pluginsGlobals.defaultOptions = FRAMEWORK.extend(true, {}, currDefaultOptions, _pluginsOptions._validate(newDefaultOptions, _pluginsOptions._template, true, currDefaultOptions)._default);
    };
    /**
     * Checks whether the passed instance is a non-destroyed OverlayScrollbars instance.
     * @param osInstance The potential OverlayScrollbars instance which shall be checked.
     * @returns {boolean} True if the passed value is a non-destroyed OverlayScrollbars instance, false otherwise.
     */


    _plugin.valid = function (osInstance) {
      return osInstance instanceof _plugin && !osInstance.getState().destroyed;
    };
    /**
     * Registers, Unregisters or returns a extension.
     * Register: Pass the name and the extension. (defaultOptions is optional)
     * Unregister: Pass the name and anything except a function as extension parameter.
     * Get extension: Pass the name of the extension which shall be got.
     * Get all extensions: Pass no arguments.
     * @param extensionName The name of the extension which shall be registered, unregistered or returned.
     * @param extension A function which generates the instance of the extension or anything other to remove a already registered extension.
     * @param defaultOptions The default options which shall be used for the registered extension.
     */


    _plugin.extension = function (extensionName, extension, defaultOptions) {
      var extNameTypeString = COMPATIBILITY.type(extensionName) == TYPES.s;
      var argLen = arguments[LEXICON.l];
      var i = 0;

      if (argLen < 1 || !extNameTypeString) {
        //return a copy of all extension objects
        return FRAMEWORK.extend(true, {
          length: _pluginsExtensions[LEXICON.l]
        }, _pluginsExtensions);
      } else if (extNameTypeString) {
        if (COMPATIBILITY.type(extension) == TYPES.f) {
          //register extension
          _pluginsExtensions.push({
            name: extensionName,
            extensionFactory: extension,
            defaultOptions: defaultOptions
          });
        } else {
          for (; i < _pluginsExtensions[LEXICON.l]; i++) {
            if (_pluginsExtensions[i].name === extensionName) {
              if (argLen > 1) _pluginsExtensions.splice(i, 1); //remove extension
              else return FRAMEWORK.extend(true, {}, _pluginsExtensions[i]); //return extension with the given name
            }
          }
        }
      }
    };

    return _plugin;
  }();

  if (JQUERY && JQUERY.fn) {
    /**
     * The jQuery initialization interface.
     * @param options The initial options for the construction of the plugin. To initialize the plugin, this option has to be a object! If it isn't a object, the instance(s) are returned and the plugin wont be initialized.
     * @param extensions The extension(s) which shall be added right after initialization.
     * @returns {*} After initialization it returns the jQuery element array, else it returns the instance(s) of the elements which are selected.
     */
    JQUERY.fn.overlayScrollbars = function (options, extensions) {
      var _elements = this;

      if (JQUERY.isPlainObject(options)) {
        JQUERY.each(_elements, function () {
          PLUGIN(this, options, extensions);
        });
        return _elements;
      } else return PLUGIN(_elements, options);
    };
  }

  return PLUGIN;
});

/***/ }),

/***/ "./node_modules/jquery/dist/jquery.js":
/*!********************************************!*\
  !*** ./node_modules/jquery/dist/jquery.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/*!
 * jQuery JavaScript Library v3.4.1
 * https://jquery.com/
 *
 * Includes Sizzle.js
 * https://sizzlejs.com/
 *
 * Copyright JS Foundation and other contributors
 * Released under the MIT license
 * https://jquery.org/license
 *
 * Date: 2019-05-01T21:04Z
 */
(function (global, factory) {
  "use strict";

  if (( false ? undefined : _typeof(module)) === "object" && _typeof(module.exports) === "object") {
    // For CommonJS and CommonJS-like environments where a proper `window`
    // is present, execute the factory and get jQuery.
    // For environments that do not have a `window` with a `document`
    // (such as Node.js), expose a factory as module.exports.
    // This accentuates the need for the creation of a real `window`.
    // e.g. var jQuery = require("jquery")(window);
    // See ticket #14549 for more info.
    module.exports = global.document ? factory(global, true) : function (w) {
      if (!w.document) {
        throw new Error("jQuery requires a window with a document");
      }

      return factory(w);
    };
  } else {
    factory(global);
  } // Pass this if window is not defined yet

})(typeof window !== "undefined" ? window : this, function (window, noGlobal) {
  // Edge <= 12 - 13+, Firefox <=18 - 45+, IE 10 - 11, Safari 5.1 - 9+, iOS 6 - 9.1
  // throw exceptions when non-strict code (e.g., ASP.NET 4.5) accesses strict mode
  // arguments.callee.caller (trac-13335). But as of jQuery 3.0 (2016), strict mode should be common
  // enough that all such attempts are guarded in a try block.
  "use strict";

  var arr = [];
  var document = window.document;
  var getProto = Object.getPrototypeOf;
  var _slice = arr.slice;
  var concat = arr.concat;
  var push = arr.push;
  var indexOf = arr.indexOf;
  var class2type = {};
  var toString = class2type.toString;
  var hasOwn = class2type.hasOwnProperty;
  var fnToString = hasOwn.toString;
  var ObjectFunctionString = fnToString.call(Object);
  var support = {};

  var isFunction = function isFunction(obj) {
    // Support: Chrome <=57, Firefox <=52
    // In some browsers, typeof returns "function" for HTML <object> elements
    // (i.e., `typeof document.createElement( "object" ) === "function"`).
    // We don't want to classify *any* DOM node as a function.
    return typeof obj === "function" && typeof obj.nodeType !== "number";
  };

  var isWindow = function isWindow(obj) {
    return obj != null && obj === obj.window;
  };

  var preservedScriptAttributes = {
    type: true,
    src: true,
    nonce: true,
    noModule: true
  };

  function DOMEval(code, node, doc) {
    doc = doc || document;
    var i,
        val,
        script = doc.createElement("script");
    script.text = code;

    if (node) {
      for (i in preservedScriptAttributes) {
        // Support: Firefox 64+, Edge 18+
        // Some browsers don't support the "nonce" property on scripts.
        // On the other hand, just using `getAttribute` is not enough as
        // the `nonce` attribute is reset to an empty string whenever it
        // becomes browsing-context connected.
        // See https://github.com/whatwg/html/issues/2369
        // See https://html.spec.whatwg.org/#nonce-attributes
        // The `node.getAttribute` check was added for the sake of
        // `jQuery.globalEval` so that it can fake a nonce-containing node
        // via an object.
        val = node[i] || node.getAttribute && node.getAttribute(i);

        if (val) {
          script.setAttribute(i, val);
        }
      }
    }

    doc.head.appendChild(script).parentNode.removeChild(script);
  }

  function toType(obj) {
    if (obj == null) {
      return obj + "";
    } // Support: Android <=2.3 only (functionish RegExp)


    return _typeof(obj) === "object" || typeof obj === "function" ? class2type[toString.call(obj)] || "object" : _typeof(obj);
  }
  /* global Symbol */
  // Defining this global in .eslintrc.json would create a danger of using the global
  // unguarded in another place, it seems safer to define global only for this module


  var version = "3.4.1",
      // Define a local copy of jQuery
  jQuery = function jQuery(selector, context) {
    // The jQuery object is actually just the init constructor 'enhanced'
    // Need init if jQuery is called (just allow error to be thrown if not included)
    return new jQuery.fn.init(selector, context);
  },
      // Support: Android <=4.0 only
  // Make sure we trim BOM and NBSP
  rtrim = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;

  jQuery.fn = jQuery.prototype = {
    // The current version of jQuery being used
    jquery: version,
    constructor: jQuery,
    // The default length of a jQuery object is 0
    length: 0,
    toArray: function toArray() {
      return _slice.call(this);
    },
    // Get the Nth element in the matched element set OR
    // Get the whole matched element set as a clean array
    get: function get(num) {
      // Return all the elements in a clean array
      if (num == null) {
        return _slice.call(this);
      } // Return just the one element from the set


      return num < 0 ? this[num + this.length] : this[num];
    },
    // Take an array of elements and push it onto the stack
    // (returning the new matched element set)
    pushStack: function pushStack(elems) {
      // Build a new jQuery matched element set
      var ret = jQuery.merge(this.constructor(), elems); // Add the old object onto the stack (as a reference)

      ret.prevObject = this; // Return the newly-formed element set

      return ret;
    },
    // Execute a callback for every element in the matched set.
    each: function each(callback) {
      return jQuery.each(this, callback);
    },
    map: function map(callback) {
      return this.pushStack(jQuery.map(this, function (elem, i) {
        return callback.call(elem, i, elem);
      }));
    },
    slice: function slice() {
      return this.pushStack(_slice.apply(this, arguments));
    },
    first: function first() {
      return this.eq(0);
    },
    last: function last() {
      return this.eq(-1);
    },
    eq: function eq(i) {
      var len = this.length,
          j = +i + (i < 0 ? len : 0);
      return this.pushStack(j >= 0 && j < len ? [this[j]] : []);
    },
    end: function end() {
      return this.prevObject || this.constructor();
    },
    // For internal use only.
    // Behaves like an Array's method, not like a jQuery method.
    push: push,
    sort: arr.sort,
    splice: arr.splice
  };

  jQuery.extend = jQuery.fn.extend = function () {
    var options,
        name,
        src,
        copy,
        copyIsArray,
        clone,
        target = arguments[0] || {},
        i = 1,
        length = arguments.length,
        deep = false; // Handle a deep copy situation

    if (typeof target === "boolean") {
      deep = target; // Skip the boolean and the target

      target = arguments[i] || {};
      i++;
    } // Handle case when target is a string or something (possible in deep copy)


    if (_typeof(target) !== "object" && !isFunction(target)) {
      target = {};
    } // Extend jQuery itself if only one argument is passed


    if (i === length) {
      target = this;
      i--;
    }

    for (; i < length; i++) {
      // Only deal with non-null/undefined values
      if ((options = arguments[i]) != null) {
        // Extend the base object
        for (name in options) {
          copy = options[name]; // Prevent Object.prototype pollution
          // Prevent never-ending loop

          if (name === "__proto__" || target === copy) {
            continue;
          } // Recurse if we're merging plain objects or arrays


          if (deep && copy && (jQuery.isPlainObject(copy) || (copyIsArray = Array.isArray(copy)))) {
            src = target[name]; // Ensure proper type for the source value

            if (copyIsArray && !Array.isArray(src)) {
              clone = [];
            } else if (!copyIsArray && !jQuery.isPlainObject(src)) {
              clone = {};
            } else {
              clone = src;
            }

            copyIsArray = false; // Never move original objects, clone them

            target[name] = jQuery.extend(deep, clone, copy); // Don't bring in undefined values
          } else if (copy !== undefined) {
            target[name] = copy;
          }
        }
      }
    } // Return the modified object


    return target;
  };

  jQuery.extend({
    // Unique for each copy of jQuery on the page
    expando: "jQuery" + (version + Math.random()).replace(/\D/g, ""),
    // Assume jQuery is ready without the ready module
    isReady: true,
    error: function error(msg) {
      throw new Error(msg);
    },
    noop: function noop() {},
    isPlainObject: function isPlainObject(obj) {
      var proto, Ctor; // Detect obvious negatives
      // Use toString instead of jQuery.type to catch host objects

      if (!obj || toString.call(obj) !== "[object Object]") {
        return false;
      }

      proto = getProto(obj); // Objects with no prototype (e.g., `Object.create( null )`) are plain

      if (!proto) {
        return true;
      } // Objects with prototype are plain iff they were constructed by a global Object function


      Ctor = hasOwn.call(proto, "constructor") && proto.constructor;
      return typeof Ctor === "function" && fnToString.call(Ctor) === ObjectFunctionString;
    },
    isEmptyObject: function isEmptyObject(obj) {
      var name;

      for (name in obj) {
        return false;
      }

      return true;
    },
    // Evaluates a script in a global context
    globalEval: function globalEval(code, options) {
      DOMEval(code, {
        nonce: options && options.nonce
      });
    },
    each: function each(obj, callback) {
      var length,
          i = 0;

      if (isArrayLike(obj)) {
        length = obj.length;

        for (; i < length; i++) {
          if (callback.call(obj[i], i, obj[i]) === false) {
            break;
          }
        }
      } else {
        for (i in obj) {
          if (callback.call(obj[i], i, obj[i]) === false) {
            break;
          }
        }
      }

      return obj;
    },
    // Support: Android <=4.0 only
    trim: function trim(text) {
      return text == null ? "" : (text + "").replace(rtrim, "");
    },
    // results is for internal usage only
    makeArray: function makeArray(arr, results) {
      var ret = results || [];

      if (arr != null) {
        if (isArrayLike(Object(arr))) {
          jQuery.merge(ret, typeof arr === "string" ? [arr] : arr);
        } else {
          push.call(ret, arr);
        }
      }

      return ret;
    },
    inArray: function inArray(elem, arr, i) {
      return arr == null ? -1 : indexOf.call(arr, elem, i);
    },
    // Support: Android <=4.0 only, PhantomJS 1 only
    // push.apply(_, arraylike) throws on ancient WebKit
    merge: function merge(first, second) {
      var len = +second.length,
          j = 0,
          i = first.length;

      for (; j < len; j++) {
        first[i++] = second[j];
      }

      first.length = i;
      return first;
    },
    grep: function grep(elems, callback, invert) {
      var callbackInverse,
          matches = [],
          i = 0,
          length = elems.length,
          callbackExpect = !invert; // Go through the array, only saving the items
      // that pass the validator function

      for (; i < length; i++) {
        callbackInverse = !callback(elems[i], i);

        if (callbackInverse !== callbackExpect) {
          matches.push(elems[i]);
        }
      }

      return matches;
    },
    // arg is for internal usage only
    map: function map(elems, callback, arg) {
      var length,
          value,
          i = 0,
          ret = []; // Go through the array, translating each of the items to their new values

      if (isArrayLike(elems)) {
        length = elems.length;

        for (; i < length; i++) {
          value = callback(elems[i], i, arg);

          if (value != null) {
            ret.push(value);
          }
        } // Go through every key on the object,

      } else {
        for (i in elems) {
          value = callback(elems[i], i, arg);

          if (value != null) {
            ret.push(value);
          }
        }
      } // Flatten any nested arrays


      return concat.apply([], ret);
    },
    // A global GUID counter for objects
    guid: 1,
    // jQuery.support is not used in Core but other projects attach their
    // properties to it so it needs to exist.
    support: support
  });

  if (typeof Symbol === "function") {
    jQuery.fn[Symbol.iterator] = arr[Symbol.iterator];
  } // Populate the class2type map


  jQuery.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function (i, name) {
    class2type["[object " + name + "]"] = name.toLowerCase();
  });

  function isArrayLike(obj) {
    // Support: real iOS 8.2 only (not reproducible in simulator)
    // `in` check used to prevent JIT error (gh-2145)
    // hasOwn isn't used here due to false negatives
    // regarding Nodelist length in IE
    var length = !!obj && "length" in obj && obj.length,
        type = toType(obj);

    if (isFunction(obj) || isWindow(obj)) {
      return false;
    }

    return type === "array" || length === 0 || typeof length === "number" && length > 0 && length - 1 in obj;
  }

  var Sizzle =
  /*!
   * Sizzle CSS Selector Engine v2.3.4
   * https://sizzlejs.com/
   *
   * Copyright JS Foundation and other contributors
   * Released under the MIT license
   * https://js.foundation/
   *
   * Date: 2019-04-08
   */
  function (window) {
    var i,
        support,
        Expr,
        getText,
        isXML,
        tokenize,
        compile,
        select,
        outermostContext,
        sortInput,
        hasDuplicate,
        // Local document vars
    setDocument,
        document,
        docElem,
        documentIsHTML,
        rbuggyQSA,
        rbuggyMatches,
        matches,
        contains,
        // Instance-specific data
    expando = "sizzle" + 1 * new Date(),
        preferredDoc = window.document,
        dirruns = 0,
        done = 0,
        classCache = createCache(),
        tokenCache = createCache(),
        compilerCache = createCache(),
        nonnativeSelectorCache = createCache(),
        sortOrder = function sortOrder(a, b) {
      if (a === b) {
        hasDuplicate = true;
      }

      return 0;
    },
        // Instance methods
    hasOwn = {}.hasOwnProperty,
        arr = [],
        pop = arr.pop,
        push_native = arr.push,
        push = arr.push,
        slice = arr.slice,
        // Use a stripped-down indexOf as it's faster than native
    // https://jsperf.com/thor-indexof-vs-for/5
    indexOf = function indexOf(list, elem) {
      var i = 0,
          len = list.length;

      for (; i < len; i++) {
        if (list[i] === elem) {
          return i;
        }
      }

      return -1;
    },
        booleans = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
        // Regular expressions
    // http://www.w3.org/TR/css3-selectors/#whitespace
    whitespace = "[\\x20\\t\\r\\n\\f]",
        // http://www.w3.org/TR/CSS21/syndata.html#value-def-identifier
    identifier = "(?:\\\\.|[\\w-]|[^\0-\\xa0])+",
        // Attribute selectors: http://www.w3.org/TR/selectors/#attribute-selectors
    attributes = "\\[" + whitespace + "*(" + identifier + ")(?:" + whitespace + // Operator (capture 2)
    "*([*^$|!~]?=)" + whitespace + // "Attribute values must be CSS identifiers [capture 5] or strings [capture 3 or capture 4]"
    "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + identifier + "))|)" + whitespace + "*\\]",
        pseudos = ":(" + identifier + ")(?:\\((" + // To reduce the number of selectors needing tokenize in the preFilter, prefer arguments:
    // 1. quoted (capture 3; capture 4 or capture 5)
    "('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|" + // 2. simple (capture 6)
    "((?:\\\\.|[^\\\\()[\\]]|" + attributes + ")*)|" + // 3. anything else (capture 2)
    ".*" + ")\\)|)",
        // Leading and non-escaped trailing whitespace, capturing some non-whitespace characters preceding the latter
    rwhitespace = new RegExp(whitespace + "+", "g"),
        rtrim = new RegExp("^" + whitespace + "+|((?:^|[^\\\\])(?:\\\\.)*)" + whitespace + "+$", "g"),
        rcomma = new RegExp("^" + whitespace + "*," + whitespace + "*"),
        rcombinators = new RegExp("^" + whitespace + "*([>+~]|" + whitespace + ")" + whitespace + "*"),
        rdescend = new RegExp(whitespace + "|>"),
        rpseudo = new RegExp(pseudos),
        ridentifier = new RegExp("^" + identifier + "$"),
        matchExpr = {
      "ID": new RegExp("^#(" + identifier + ")"),
      "CLASS": new RegExp("^\\.(" + identifier + ")"),
      "TAG": new RegExp("^(" + identifier + "|[*])"),
      "ATTR": new RegExp("^" + attributes),
      "PSEUDO": new RegExp("^" + pseudos),
      "CHILD": new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + whitespace + "*(even|odd|(([+-]|)(\\d*)n|)" + whitespace + "*(?:([+-]|)" + whitespace + "*(\\d+)|))" + whitespace + "*\\)|)", "i"),
      "bool": new RegExp("^(?:" + booleans + ")$", "i"),
      // For use in libraries implementing .is()
      // We use this for POS matching in `select`
      "needsContext": new RegExp("^" + whitespace + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + whitespace + "*((?:-\\d)?\\d*)" + whitespace + "*\\)|)(?=[^-]|$)", "i")
    },
        rhtml = /HTML$/i,
        rinputs = /^(?:input|select|textarea|button)$/i,
        rheader = /^h\d$/i,
        rnative = /^[^{]+\{\s*\[native \w/,
        // Easily-parseable/retrievable ID or TAG or CLASS selectors
    rquickExpr = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
        rsibling = /[+~]/,
        // CSS escapes
    // http://www.w3.org/TR/CSS21/syndata.html#escaped-characters
    runescape = new RegExp("\\\\([\\da-f]{1,6}" + whitespace + "?|(" + whitespace + ")|.)", "ig"),
        funescape = function funescape(_, escaped, escapedWhitespace) {
      var high = "0x" + escaped - 0x10000; // NaN means non-codepoint
      // Support: Firefox<24
      // Workaround erroneous numeric interpretation of +"0x"

      return high !== high || escapedWhitespace ? escaped : high < 0 ? // BMP codepoint
      String.fromCharCode(high + 0x10000) : // Supplemental Plane codepoint (surrogate pair)
      String.fromCharCode(high >> 10 | 0xD800, high & 0x3FF | 0xDC00);
    },
        // CSS string/identifier serialization
    // https://drafts.csswg.org/cssom/#common-serializing-idioms
    rcssescape = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
        fcssescape = function fcssescape(ch, asCodePoint) {
      if (asCodePoint) {
        // U+0000 NULL becomes U+FFFD REPLACEMENT CHARACTER
        if (ch === "\0") {
          return "\uFFFD";
        } // Control characters and (dependent upon position) numbers get escaped as code points


        return ch.slice(0, -1) + "\\" + ch.charCodeAt(ch.length - 1).toString(16) + " ";
      } // Other potentially-special ASCII characters get backslash-escaped


      return "\\" + ch;
    },
        // Used for iframes
    // See setDocument()
    // Removing the function wrapper causes a "Permission Denied"
    // error in IE
    unloadHandler = function unloadHandler() {
      setDocument();
    },
        inDisabledFieldset = addCombinator(function (elem) {
      return elem.disabled === true && elem.nodeName.toLowerCase() === "fieldset";
    }, {
      dir: "parentNode",
      next: "legend"
    }); // Optimize for push.apply( _, NodeList )


    try {
      push.apply(arr = slice.call(preferredDoc.childNodes), preferredDoc.childNodes); // Support: Android<4.0
      // Detect silently failing push.apply

      arr[preferredDoc.childNodes.length].nodeType;
    } catch (e) {
      push = {
        apply: arr.length ? // Leverage slice if possible
        function (target, els) {
          push_native.apply(target, slice.call(els));
        } : // Support: IE<9
        // Otherwise append directly
        function (target, els) {
          var j = target.length,
              i = 0; // Can't trust NodeList.length

          while (target[j++] = els[i++]) {}

          target.length = j - 1;
        }
      };
    }

    function Sizzle(selector, context, results, seed) {
      var m,
          i,
          elem,
          nid,
          match,
          groups,
          newSelector,
          newContext = context && context.ownerDocument,
          // nodeType defaults to 9, since context defaults to document
      nodeType = context ? context.nodeType : 9;
      results = results || []; // Return early from calls with invalid selector or context

      if (typeof selector !== "string" || !selector || nodeType !== 1 && nodeType !== 9 && nodeType !== 11) {
        return results;
      } // Try to shortcut find operations (as opposed to filters) in HTML documents


      if (!seed) {
        if ((context ? context.ownerDocument || context : preferredDoc) !== document) {
          setDocument(context);
        }

        context = context || document;

        if (documentIsHTML) {
          // If the selector is sufficiently simple, try using a "get*By*" DOM method
          // (excepting DocumentFragment context, where the methods don't exist)
          if (nodeType !== 11 && (match = rquickExpr.exec(selector))) {
            // ID selector
            if (m = match[1]) {
              // Document context
              if (nodeType === 9) {
                if (elem = context.getElementById(m)) {
                  // Support: IE, Opera, Webkit
                  // TODO: identify versions
                  // getElementById can match elements by name instead of ID
                  if (elem.id === m) {
                    results.push(elem);
                    return results;
                  }
                } else {
                  return results;
                } // Element context

              } else {
                // Support: IE, Opera, Webkit
                // TODO: identify versions
                // getElementById can match elements by name instead of ID
                if (newContext && (elem = newContext.getElementById(m)) && contains(context, elem) && elem.id === m) {
                  results.push(elem);
                  return results;
                }
              } // Type selector

            } else if (match[2]) {
              push.apply(results, context.getElementsByTagName(selector));
              return results; // Class selector
            } else if ((m = match[3]) && support.getElementsByClassName && context.getElementsByClassName) {
              push.apply(results, context.getElementsByClassName(m));
              return results;
            }
          } // Take advantage of querySelectorAll


          if (support.qsa && !nonnativeSelectorCache[selector + " "] && (!rbuggyQSA || !rbuggyQSA.test(selector)) && ( // Support: IE 8 only
          // Exclude object elements
          nodeType !== 1 || context.nodeName.toLowerCase() !== "object")) {
            newSelector = selector;
            newContext = context; // qSA considers elements outside a scoping root when evaluating child or
            // descendant combinators, which is not what we want.
            // In such cases, we work around the behavior by prefixing every selector in the
            // list with an ID selector referencing the scope context.
            // Thanks to Andrew Dupont for this technique.

            if (nodeType === 1 && rdescend.test(selector)) {
              // Capture the context ID, setting it first if necessary
              if (nid = context.getAttribute("id")) {
                nid = nid.replace(rcssescape, fcssescape);
              } else {
                context.setAttribute("id", nid = expando);
              } // Prefix every selector in the list


              groups = tokenize(selector);
              i = groups.length;

              while (i--) {
                groups[i] = "#" + nid + " " + toSelector(groups[i]);
              }

              newSelector = groups.join(","); // Expand context for sibling selectors

              newContext = rsibling.test(selector) && testContext(context.parentNode) || context;
            }

            try {
              push.apply(results, newContext.querySelectorAll(newSelector));
              return results;
            } catch (qsaError) {
              nonnativeSelectorCache(selector, true);
            } finally {
              if (nid === expando) {
                context.removeAttribute("id");
              }
            }
          }
        }
      } // All others


      return select(selector.replace(rtrim, "$1"), context, results, seed);
    }
    /**
     * Create key-value caches of limited size
     * @returns {function(string, object)} Returns the Object data after storing it on itself with
     *	property name the (space-suffixed) string and (if the cache is larger than Expr.cacheLength)
     *	deleting the oldest entry
     */


    function createCache() {
      var keys = [];

      function cache(key, value) {
        // Use (key + " ") to avoid collision with native prototype properties (see Issue #157)
        if (keys.push(key + " ") > Expr.cacheLength) {
          // Only keep the most recent entries
          delete cache[keys.shift()];
        }

        return cache[key + " "] = value;
      }

      return cache;
    }
    /**
     * Mark a function for special use by Sizzle
     * @param {Function} fn The function to mark
     */


    function markFunction(fn) {
      fn[expando] = true;
      return fn;
    }
    /**
     * Support testing using an element
     * @param {Function} fn Passed the created element and returns a boolean result
     */


    function assert(fn) {
      var el = document.createElement("fieldset");

      try {
        return !!fn(el);
      } catch (e) {
        return false;
      } finally {
        // Remove from its parent by default
        if (el.parentNode) {
          el.parentNode.removeChild(el);
        } // release memory in IE


        el = null;
      }
    }
    /**
     * Adds the same handler for all of the specified attrs
     * @param {String} attrs Pipe-separated list of attributes
     * @param {Function} handler The method that will be applied
     */


    function addHandle(attrs, handler) {
      var arr = attrs.split("|"),
          i = arr.length;

      while (i--) {
        Expr.attrHandle[arr[i]] = handler;
      }
    }
    /**
     * Checks document order of two siblings
     * @param {Element} a
     * @param {Element} b
     * @returns {Number} Returns less than 0 if a precedes b, greater than 0 if a follows b
     */


    function siblingCheck(a, b) {
      var cur = b && a,
          diff = cur && a.nodeType === 1 && b.nodeType === 1 && a.sourceIndex - b.sourceIndex; // Use IE sourceIndex if available on both nodes

      if (diff) {
        return diff;
      } // Check if b follows a


      if (cur) {
        while (cur = cur.nextSibling) {
          if (cur === b) {
            return -1;
          }
        }
      }

      return a ? 1 : -1;
    }
    /**
     * Returns a function to use in pseudos for input types
     * @param {String} type
     */


    function createInputPseudo(type) {
      return function (elem) {
        var name = elem.nodeName.toLowerCase();
        return name === "input" && elem.type === type;
      };
    }
    /**
     * Returns a function to use in pseudos for buttons
     * @param {String} type
     */


    function createButtonPseudo(type) {
      return function (elem) {
        var name = elem.nodeName.toLowerCase();
        return (name === "input" || name === "button") && elem.type === type;
      };
    }
    /**
     * Returns a function to use in pseudos for :enabled/:disabled
     * @param {Boolean} disabled true for :disabled; false for :enabled
     */


    function createDisabledPseudo(disabled) {
      // Known :disabled false positives: fieldset[disabled] > legend:nth-of-type(n+2) :can-disable
      return function (elem) {
        // Only certain elements can match :enabled or :disabled
        // https://html.spec.whatwg.org/multipage/scripting.html#selector-enabled
        // https://html.spec.whatwg.org/multipage/scripting.html#selector-disabled
        if ("form" in elem) {
          // Check for inherited disabledness on relevant non-disabled elements:
          // * listed form-associated elements in a disabled fieldset
          //   https://html.spec.whatwg.org/multipage/forms.html#category-listed
          //   https://html.spec.whatwg.org/multipage/forms.html#concept-fe-disabled
          // * option elements in a disabled optgroup
          //   https://html.spec.whatwg.org/multipage/forms.html#concept-option-disabled
          // All such elements have a "form" property.
          if (elem.parentNode && elem.disabled === false) {
            // Option elements defer to a parent optgroup if present
            if ("label" in elem) {
              if ("label" in elem.parentNode) {
                return elem.parentNode.disabled === disabled;
              } else {
                return elem.disabled === disabled;
              }
            } // Support: IE 6 - 11
            // Use the isDisabled shortcut property to check for disabled fieldset ancestors


            return elem.isDisabled === disabled || // Where there is no isDisabled, check manually

            /* jshint -W018 */
            elem.isDisabled !== !disabled && inDisabledFieldset(elem) === disabled;
          }

          return elem.disabled === disabled; // Try to winnow out elements that can't be disabled before trusting the disabled property.
          // Some victims get caught in our net (label, legend, menu, track), but it shouldn't
          // even exist on them, let alone have a boolean value.
        } else if ("label" in elem) {
          return elem.disabled === disabled;
        } // Remaining elements are neither :enabled nor :disabled


        return false;
      };
    }
    /**
     * Returns a function to use in pseudos for positionals
     * @param {Function} fn
     */


    function createPositionalPseudo(fn) {
      return markFunction(function (argument) {
        argument = +argument;
        return markFunction(function (seed, matches) {
          var j,
              matchIndexes = fn([], seed.length, argument),
              i = matchIndexes.length; // Match elements found at the specified indexes

          while (i--) {
            if (seed[j = matchIndexes[i]]) {
              seed[j] = !(matches[j] = seed[j]);
            }
          }
        });
      });
    }
    /**
     * Checks a node for validity as a Sizzle context
     * @param {Element|Object=} context
     * @returns {Element|Object|Boolean} The input node if acceptable, otherwise a falsy value
     */


    function testContext(context) {
      return context && typeof context.getElementsByTagName !== "undefined" && context;
    } // Expose support vars for convenience


    support = Sizzle.support = {};
    /**
     * Detects XML nodes
     * @param {Element|Object} elem An element or a document
     * @returns {Boolean} True iff elem is a non-HTML XML node
     */

    isXML = Sizzle.isXML = function (elem) {
      var namespace = elem.namespaceURI,
          docElem = (elem.ownerDocument || elem).documentElement; // Support: IE <=8
      // Assume HTML when documentElement doesn't yet exist, such as inside loading iframes
      // https://bugs.jquery.com/ticket/4833

      return !rhtml.test(namespace || docElem && docElem.nodeName || "HTML");
    };
    /**
     * Sets document-related variables once based on the current document
     * @param {Element|Object} [doc] An element or document object to use to set the document
     * @returns {Object} Returns the current document
     */


    setDocument = Sizzle.setDocument = function (node) {
      var hasCompare,
          subWindow,
          doc = node ? node.ownerDocument || node : preferredDoc; // Return early if doc is invalid or already selected

      if (doc === document || doc.nodeType !== 9 || !doc.documentElement) {
        return document;
      } // Update global variables


      document = doc;
      docElem = document.documentElement;
      documentIsHTML = !isXML(document); // Support: IE 9-11, Edge
      // Accessing iframe documents after unload throws "permission denied" errors (jQuery #13936)

      if (preferredDoc !== document && (subWindow = document.defaultView) && subWindow.top !== subWindow) {
        // Support: IE 11, Edge
        if (subWindow.addEventListener) {
          subWindow.addEventListener("unload", unloadHandler, false); // Support: IE 9 - 10 only
        } else if (subWindow.attachEvent) {
          subWindow.attachEvent("onunload", unloadHandler);
        }
      }
      /* Attributes
      ---------------------------------------------------------------------- */
      // Support: IE<8
      // Verify that getAttribute really returns attributes and not properties
      // (excepting IE8 booleans)


      support.attributes = assert(function (el) {
        el.className = "i";
        return !el.getAttribute("className");
      });
      /* getElement(s)By*
      ---------------------------------------------------------------------- */
      // Check if getElementsByTagName("*") returns only elements

      support.getElementsByTagName = assert(function (el) {
        el.appendChild(document.createComment(""));
        return !el.getElementsByTagName("*").length;
      }); // Support: IE<9

      support.getElementsByClassName = rnative.test(document.getElementsByClassName); // Support: IE<10
      // Check if getElementById returns elements by name
      // The broken getElementById methods don't pick up programmatically-set names,
      // so use a roundabout getElementsByName test

      support.getById = assert(function (el) {
        docElem.appendChild(el).id = expando;
        return !document.getElementsByName || !document.getElementsByName(expando).length;
      }); // ID filter and find

      if (support.getById) {
        Expr.filter["ID"] = function (id) {
          var attrId = id.replace(runescape, funescape);
          return function (elem) {
            return elem.getAttribute("id") === attrId;
          };
        };

        Expr.find["ID"] = function (id, context) {
          if (typeof context.getElementById !== "undefined" && documentIsHTML) {
            var elem = context.getElementById(id);
            return elem ? [elem] : [];
          }
        };
      } else {
        Expr.filter["ID"] = function (id) {
          var attrId = id.replace(runescape, funescape);
          return function (elem) {
            var node = typeof elem.getAttributeNode !== "undefined" && elem.getAttributeNode("id");
            return node && node.value === attrId;
          };
        }; // Support: IE 6 - 7 only
        // getElementById is not reliable as a find shortcut


        Expr.find["ID"] = function (id, context) {
          if (typeof context.getElementById !== "undefined" && documentIsHTML) {
            var node,
                i,
                elems,
                elem = context.getElementById(id);

            if (elem) {
              // Verify the id attribute
              node = elem.getAttributeNode("id");

              if (node && node.value === id) {
                return [elem];
              } // Fall back on getElementsByName


              elems = context.getElementsByName(id);
              i = 0;

              while (elem = elems[i++]) {
                node = elem.getAttributeNode("id");

                if (node && node.value === id) {
                  return [elem];
                }
              }
            }

            return [];
          }
        };
      } // Tag


      Expr.find["TAG"] = support.getElementsByTagName ? function (tag, context) {
        if (typeof context.getElementsByTagName !== "undefined") {
          return context.getElementsByTagName(tag); // DocumentFragment nodes don't have gEBTN
        } else if (support.qsa) {
          return context.querySelectorAll(tag);
        }
      } : function (tag, context) {
        var elem,
            tmp = [],
            i = 0,
            // By happy coincidence, a (broken) gEBTN appears on DocumentFragment nodes too
        results = context.getElementsByTagName(tag); // Filter out possible comments

        if (tag === "*") {
          while (elem = results[i++]) {
            if (elem.nodeType === 1) {
              tmp.push(elem);
            }
          }

          return tmp;
        }

        return results;
      }; // Class

      Expr.find["CLASS"] = support.getElementsByClassName && function (className, context) {
        if (typeof context.getElementsByClassName !== "undefined" && documentIsHTML) {
          return context.getElementsByClassName(className);
        }
      };
      /* QSA/matchesSelector
      ---------------------------------------------------------------------- */
      // QSA and matchesSelector support
      // matchesSelector(:active) reports false when true (IE9/Opera 11.5)


      rbuggyMatches = []; // qSa(:focus) reports false when true (Chrome 21)
      // We allow this because of a bug in IE8/9 that throws an error
      // whenever `document.activeElement` is accessed on an iframe
      // So, we allow :focus to pass through QSA all the time to avoid the IE error
      // See https://bugs.jquery.com/ticket/13378

      rbuggyQSA = [];

      if (support.qsa = rnative.test(document.querySelectorAll)) {
        // Build QSA regex
        // Regex strategy adopted from Diego Perini
        assert(function (el) {
          // Select is set to empty string on purpose
          // This is to test IE's treatment of not explicitly
          // setting a boolean content attribute,
          // since its presence should be enough
          // https://bugs.jquery.com/ticket/12359
          docElem.appendChild(el).innerHTML = "<a id='" + expando + "'></a>" + "<select id='" + expando + "-\r\\' msallowcapture=''>" + "<option selected=''></option></select>"; // Support: IE8, Opera 11-12.16
          // Nothing should be selected when empty strings follow ^= or $= or *=
          // The test attribute must be unknown in Opera but "safe" for WinRT
          // https://msdn.microsoft.com/en-us/library/ie/hh465388.aspx#attribute_section

          if (el.querySelectorAll("[msallowcapture^='']").length) {
            rbuggyQSA.push("[*^$]=" + whitespace + "*(?:''|\"\")");
          } // Support: IE8
          // Boolean attributes and "value" are not treated correctly


          if (!el.querySelectorAll("[selected]").length) {
            rbuggyQSA.push("\\[" + whitespace + "*(?:value|" + booleans + ")");
          } // Support: Chrome<29, Android<4.4, Safari<7.0+, iOS<7.0+, PhantomJS<1.9.8+


          if (!el.querySelectorAll("[id~=" + expando + "-]").length) {
            rbuggyQSA.push("~=");
          } // Webkit/Opera - :checked should return selected option elements
          // http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
          // IE8 throws error here and will not see later tests


          if (!el.querySelectorAll(":checked").length) {
            rbuggyQSA.push(":checked");
          } // Support: Safari 8+, iOS 8+
          // https://bugs.webkit.org/show_bug.cgi?id=136851
          // In-page `selector#id sibling-combinator selector` fails


          if (!el.querySelectorAll("a#" + expando + "+*").length) {
            rbuggyQSA.push(".#.+[+~]");
          }
        });
        assert(function (el) {
          el.innerHTML = "<a href='' disabled='disabled'></a>" + "<select disabled='disabled'><option/></select>"; // Support: Windows 8 Native Apps
          // The type and name attributes are restricted during .innerHTML assignment

          var input = document.createElement("input");
          input.setAttribute("type", "hidden");
          el.appendChild(input).setAttribute("name", "D"); // Support: IE8
          // Enforce case-sensitivity of name attribute

          if (el.querySelectorAll("[name=d]").length) {
            rbuggyQSA.push("name" + whitespace + "*[*^$|!~]?=");
          } // FF 3.5 - :enabled/:disabled and hidden elements (hidden elements are still enabled)
          // IE8 throws error here and will not see later tests


          if (el.querySelectorAll(":enabled").length !== 2) {
            rbuggyQSA.push(":enabled", ":disabled");
          } // Support: IE9-11+
          // IE's :disabled selector does not pick up the children of disabled fieldsets


          docElem.appendChild(el).disabled = true;

          if (el.querySelectorAll(":disabled").length !== 2) {
            rbuggyQSA.push(":enabled", ":disabled");
          } // Opera 10-11 does not throw on post-comma invalid pseudos


          el.querySelectorAll("*,:x");
          rbuggyQSA.push(",.*:");
        });
      }

      if (support.matchesSelector = rnative.test(matches = docElem.matches || docElem.webkitMatchesSelector || docElem.mozMatchesSelector || docElem.oMatchesSelector || docElem.msMatchesSelector)) {
        assert(function (el) {
          // Check to see if it's possible to do matchesSelector
          // on a disconnected node (IE 9)
          support.disconnectedMatch = matches.call(el, "*"); // This should fail with an exception
          // Gecko does not error, returns false instead

          matches.call(el, "[s!='']:x");
          rbuggyMatches.push("!=", pseudos);
        });
      }

      rbuggyQSA = rbuggyQSA.length && new RegExp(rbuggyQSA.join("|"));
      rbuggyMatches = rbuggyMatches.length && new RegExp(rbuggyMatches.join("|"));
      /* Contains
      ---------------------------------------------------------------------- */

      hasCompare = rnative.test(docElem.compareDocumentPosition); // Element contains another
      // Purposefully self-exclusive
      // As in, an element does not contain itself

      contains = hasCompare || rnative.test(docElem.contains) ? function (a, b) {
        var adown = a.nodeType === 9 ? a.documentElement : a,
            bup = b && b.parentNode;
        return a === bup || !!(bup && bup.nodeType === 1 && (adown.contains ? adown.contains(bup) : a.compareDocumentPosition && a.compareDocumentPosition(bup) & 16));
      } : function (a, b) {
        if (b) {
          while (b = b.parentNode) {
            if (b === a) {
              return true;
            }
          }
        }

        return false;
      };
      /* Sorting
      ---------------------------------------------------------------------- */
      // Document order sorting

      sortOrder = hasCompare ? function (a, b) {
        // Flag for duplicate removal
        if (a === b) {
          hasDuplicate = true;
          return 0;
        } // Sort on method existence if only one input has compareDocumentPosition


        var compare = !a.compareDocumentPosition - !b.compareDocumentPosition;

        if (compare) {
          return compare;
        } // Calculate position if both inputs belong to the same document


        compare = (a.ownerDocument || a) === (b.ownerDocument || b) ? a.compareDocumentPosition(b) : // Otherwise we know they are disconnected
        1; // Disconnected nodes

        if (compare & 1 || !support.sortDetached && b.compareDocumentPosition(a) === compare) {
          // Choose the first element that is related to our preferred document
          if (a === document || a.ownerDocument === preferredDoc && contains(preferredDoc, a)) {
            return -1;
          }

          if (b === document || b.ownerDocument === preferredDoc && contains(preferredDoc, b)) {
            return 1;
          } // Maintain original order


          return sortInput ? indexOf(sortInput, a) - indexOf(sortInput, b) : 0;
        }

        return compare & 4 ? -1 : 1;
      } : function (a, b) {
        // Exit early if the nodes are identical
        if (a === b) {
          hasDuplicate = true;
          return 0;
        }

        var cur,
            i = 0,
            aup = a.parentNode,
            bup = b.parentNode,
            ap = [a],
            bp = [b]; // Parentless nodes are either documents or disconnected

        if (!aup || !bup) {
          return a === document ? -1 : b === document ? 1 : aup ? -1 : bup ? 1 : sortInput ? indexOf(sortInput, a) - indexOf(sortInput, b) : 0; // If the nodes are siblings, we can do a quick check
        } else if (aup === bup) {
          return siblingCheck(a, b);
        } // Otherwise we need full lists of their ancestors for comparison


        cur = a;

        while (cur = cur.parentNode) {
          ap.unshift(cur);
        }

        cur = b;

        while (cur = cur.parentNode) {
          bp.unshift(cur);
        } // Walk down the tree looking for a discrepancy


        while (ap[i] === bp[i]) {
          i++;
        }

        return i ? // Do a sibling check if the nodes have a common ancestor
        siblingCheck(ap[i], bp[i]) : // Otherwise nodes in our document sort first
        ap[i] === preferredDoc ? -1 : bp[i] === preferredDoc ? 1 : 0;
      };
      return document;
    };

    Sizzle.matches = function (expr, elements) {
      return Sizzle(expr, null, null, elements);
    };

    Sizzle.matchesSelector = function (elem, expr) {
      // Set document vars if needed
      if ((elem.ownerDocument || elem) !== document) {
        setDocument(elem);
      }

      if (support.matchesSelector && documentIsHTML && !nonnativeSelectorCache[expr + " "] && (!rbuggyMatches || !rbuggyMatches.test(expr)) && (!rbuggyQSA || !rbuggyQSA.test(expr))) {
        try {
          var ret = matches.call(elem, expr); // IE 9's matchesSelector returns false on disconnected nodes

          if (ret || support.disconnectedMatch || // As well, disconnected nodes are said to be in a document
          // fragment in IE 9
          elem.document && elem.document.nodeType !== 11) {
            return ret;
          }
        } catch (e) {
          nonnativeSelectorCache(expr, true);
        }
      }

      return Sizzle(expr, document, null, [elem]).length > 0;
    };

    Sizzle.contains = function (context, elem) {
      // Set document vars if needed
      if ((context.ownerDocument || context) !== document) {
        setDocument(context);
      }

      return contains(context, elem);
    };

    Sizzle.attr = function (elem, name) {
      // Set document vars if needed
      if ((elem.ownerDocument || elem) !== document) {
        setDocument(elem);
      }

      var fn = Expr.attrHandle[name.toLowerCase()],
          // Don't get fooled by Object.prototype properties (jQuery #13807)
      val = fn && hasOwn.call(Expr.attrHandle, name.toLowerCase()) ? fn(elem, name, !documentIsHTML) : undefined;
      return val !== undefined ? val : support.attributes || !documentIsHTML ? elem.getAttribute(name) : (val = elem.getAttributeNode(name)) && val.specified ? val.value : null;
    };

    Sizzle.escape = function (sel) {
      return (sel + "").replace(rcssescape, fcssescape);
    };

    Sizzle.error = function (msg) {
      throw new Error("Syntax error, unrecognized expression: " + msg);
    };
    /**
     * Document sorting and removing duplicates
     * @param {ArrayLike} results
     */


    Sizzle.uniqueSort = function (results) {
      var elem,
          duplicates = [],
          j = 0,
          i = 0; // Unless we *know* we can detect duplicates, assume their presence

      hasDuplicate = !support.detectDuplicates;
      sortInput = !support.sortStable && results.slice(0);
      results.sort(sortOrder);

      if (hasDuplicate) {
        while (elem = results[i++]) {
          if (elem === results[i]) {
            j = duplicates.push(i);
          }
        }

        while (j--) {
          results.splice(duplicates[j], 1);
        }
      } // Clear input after sorting to release objects
      // See https://github.com/jquery/sizzle/pull/225


      sortInput = null;
      return results;
    };
    /**
     * Utility function for retrieving the text value of an array of DOM nodes
     * @param {Array|Element} elem
     */


    getText = Sizzle.getText = function (elem) {
      var node,
          ret = "",
          i = 0,
          nodeType = elem.nodeType;

      if (!nodeType) {
        // If no nodeType, this is expected to be an array
        while (node = elem[i++]) {
          // Do not traverse comment nodes
          ret += getText(node);
        }
      } else if (nodeType === 1 || nodeType === 9 || nodeType === 11) {
        // Use textContent for elements
        // innerText usage removed for consistency of new lines (jQuery #11153)
        if (typeof elem.textContent === "string") {
          return elem.textContent;
        } else {
          // Traverse its children
          for (elem = elem.firstChild; elem; elem = elem.nextSibling) {
            ret += getText(elem);
          }
        }
      } else if (nodeType === 3 || nodeType === 4) {
        return elem.nodeValue;
      } // Do not include comment or processing instruction nodes


      return ret;
    };

    Expr = Sizzle.selectors = {
      // Can be adjusted by the user
      cacheLength: 50,
      createPseudo: markFunction,
      match: matchExpr,
      attrHandle: {},
      find: {},
      relative: {
        ">": {
          dir: "parentNode",
          first: true
        },
        " ": {
          dir: "parentNode"
        },
        "+": {
          dir: "previousSibling",
          first: true
        },
        "~": {
          dir: "previousSibling"
        }
      },
      preFilter: {
        "ATTR": function ATTR(match) {
          match[1] = match[1].replace(runescape, funescape); // Move the given value to match[3] whether quoted or unquoted

          match[3] = (match[3] || match[4] || match[5] || "").replace(runescape, funescape);

          if (match[2] === "~=") {
            match[3] = " " + match[3] + " ";
          }

          return match.slice(0, 4);
        },
        "CHILD": function CHILD(match) {
          /* matches from matchExpr["CHILD"]
          	1 type (only|nth|...)
          	2 what (child|of-type)
          	3 argument (even|odd|\d*|\d*n([+-]\d+)?|...)
          	4 xn-component of xn+y argument ([+-]?\d*n|)
          	5 sign of xn-component
          	6 x of xn-component
          	7 sign of y-component
          	8 y of y-component
          */
          match[1] = match[1].toLowerCase();

          if (match[1].slice(0, 3) === "nth") {
            // nth-* requires argument
            if (!match[3]) {
              Sizzle.error(match[0]);
            } // numeric x and y parameters for Expr.filter.CHILD
            // remember that false/true cast respectively to 0/1


            match[4] = +(match[4] ? match[5] + (match[6] || 1) : 2 * (match[3] === "even" || match[3] === "odd"));
            match[5] = +(match[7] + match[8] || match[3] === "odd"); // other types prohibit arguments
          } else if (match[3]) {
            Sizzle.error(match[0]);
          }

          return match;
        },
        "PSEUDO": function PSEUDO(match) {
          var excess,
              unquoted = !match[6] && match[2];

          if (matchExpr["CHILD"].test(match[0])) {
            return null;
          } // Accept quoted arguments as-is


          if (match[3]) {
            match[2] = match[4] || match[5] || ""; // Strip excess characters from unquoted arguments
          } else if (unquoted && rpseudo.test(unquoted) && ( // Get excess from tokenize (recursively)
          excess = tokenize(unquoted, true)) && ( // advance to the next closing parenthesis
          excess = unquoted.indexOf(")", unquoted.length - excess) - unquoted.length)) {
            // excess is a negative index
            match[0] = match[0].slice(0, excess);
            match[2] = unquoted.slice(0, excess);
          } // Return only captures needed by the pseudo filter method (type and argument)


          return match.slice(0, 3);
        }
      },
      filter: {
        "TAG": function TAG(nodeNameSelector) {
          var nodeName = nodeNameSelector.replace(runescape, funescape).toLowerCase();
          return nodeNameSelector === "*" ? function () {
            return true;
          } : function (elem) {
            return elem.nodeName && elem.nodeName.toLowerCase() === nodeName;
          };
        },
        "CLASS": function CLASS(className) {
          var pattern = classCache[className + " "];
          return pattern || (pattern = new RegExp("(^|" + whitespace + ")" + className + "(" + whitespace + "|$)")) && classCache(className, function (elem) {
            return pattern.test(typeof elem.className === "string" && elem.className || typeof elem.getAttribute !== "undefined" && elem.getAttribute("class") || "");
          });
        },
        "ATTR": function ATTR(name, operator, check) {
          return function (elem) {
            var result = Sizzle.attr(elem, name);

            if (result == null) {
              return operator === "!=";
            }

            if (!operator) {
              return true;
            }

            result += "";
            return operator === "=" ? result === check : operator === "!=" ? result !== check : operator === "^=" ? check && result.indexOf(check) === 0 : operator === "*=" ? check && result.indexOf(check) > -1 : operator === "$=" ? check && result.slice(-check.length) === check : operator === "~=" ? (" " + result.replace(rwhitespace, " ") + " ").indexOf(check) > -1 : operator === "|=" ? result === check || result.slice(0, check.length + 1) === check + "-" : false;
          };
        },
        "CHILD": function CHILD(type, what, argument, first, last) {
          var simple = type.slice(0, 3) !== "nth",
              forward = type.slice(-4) !== "last",
              ofType = what === "of-type";
          return first === 1 && last === 0 ? // Shortcut for :nth-*(n)
          function (elem) {
            return !!elem.parentNode;
          } : function (elem, context, xml) {
            var cache,
                uniqueCache,
                outerCache,
                node,
                nodeIndex,
                start,
                dir = simple !== forward ? "nextSibling" : "previousSibling",
                parent = elem.parentNode,
                name = ofType && elem.nodeName.toLowerCase(),
                useCache = !xml && !ofType,
                diff = false;

            if (parent) {
              // :(first|last|only)-(child|of-type)
              if (simple) {
                while (dir) {
                  node = elem;

                  while (node = node[dir]) {
                    if (ofType ? node.nodeName.toLowerCase() === name : node.nodeType === 1) {
                      return false;
                    }
                  } // Reverse direction for :only-* (if we haven't yet done so)


                  start = dir = type === "only" && !start && "nextSibling";
                }

                return true;
              }

              start = [forward ? parent.firstChild : parent.lastChild]; // non-xml :nth-child(...) stores cache data on `parent`

              if (forward && useCache) {
                // Seek `elem` from a previously-cached index
                // ...in a gzip-friendly way
                node = parent;
                outerCache = node[expando] || (node[expando] = {}); // Support: IE <9 only
                // Defend against cloned attroperties (jQuery gh-1709)

                uniqueCache = outerCache[node.uniqueID] || (outerCache[node.uniqueID] = {});
                cache = uniqueCache[type] || [];
                nodeIndex = cache[0] === dirruns && cache[1];
                diff = nodeIndex && cache[2];
                node = nodeIndex && parent.childNodes[nodeIndex];

                while (node = ++nodeIndex && node && node[dir] || ( // Fallback to seeking `elem` from the start
                diff = nodeIndex = 0) || start.pop()) {
                  // When found, cache indexes on `parent` and break
                  if (node.nodeType === 1 && ++diff && node === elem) {
                    uniqueCache[type] = [dirruns, nodeIndex, diff];
                    break;
                  }
                }
              } else {
                // Use previously-cached element index if available
                if (useCache) {
                  // ...in a gzip-friendly way
                  node = elem;
                  outerCache = node[expando] || (node[expando] = {}); // Support: IE <9 only
                  // Defend against cloned attroperties (jQuery gh-1709)

                  uniqueCache = outerCache[node.uniqueID] || (outerCache[node.uniqueID] = {});
                  cache = uniqueCache[type] || [];
                  nodeIndex = cache[0] === dirruns && cache[1];
                  diff = nodeIndex;
                } // xml :nth-child(...)
                // or :nth-last-child(...) or :nth(-last)?-of-type(...)


                if (diff === false) {
                  // Use the same loop as above to seek `elem` from the start
                  while (node = ++nodeIndex && node && node[dir] || (diff = nodeIndex = 0) || start.pop()) {
                    if ((ofType ? node.nodeName.toLowerCase() === name : node.nodeType === 1) && ++diff) {
                      // Cache the index of each encountered element
                      if (useCache) {
                        outerCache = node[expando] || (node[expando] = {}); // Support: IE <9 only
                        // Defend against cloned attroperties (jQuery gh-1709)

                        uniqueCache = outerCache[node.uniqueID] || (outerCache[node.uniqueID] = {});
                        uniqueCache[type] = [dirruns, diff];
                      }

                      if (node === elem) {
                        break;
                      }
                    }
                  }
                }
              } // Incorporate the offset, then check against cycle size


              diff -= last;
              return diff === first || diff % first === 0 && diff / first >= 0;
            }
          };
        },
        "PSEUDO": function PSEUDO(pseudo, argument) {
          // pseudo-class names are case-insensitive
          // http://www.w3.org/TR/selectors/#pseudo-classes
          // Prioritize by case sensitivity in case custom pseudos are added with uppercase letters
          // Remember that setFilters inherits from pseudos
          var args,
              fn = Expr.pseudos[pseudo] || Expr.setFilters[pseudo.toLowerCase()] || Sizzle.error("unsupported pseudo: " + pseudo); // The user may use createPseudo to indicate that
          // arguments are needed to create the filter function
          // just as Sizzle does

          if (fn[expando]) {
            return fn(argument);
          } // But maintain support for old signatures


          if (fn.length > 1) {
            args = [pseudo, pseudo, "", argument];
            return Expr.setFilters.hasOwnProperty(pseudo.toLowerCase()) ? markFunction(function (seed, matches) {
              var idx,
                  matched = fn(seed, argument),
                  i = matched.length;

              while (i--) {
                idx = indexOf(seed, matched[i]);
                seed[idx] = !(matches[idx] = matched[i]);
              }
            }) : function (elem) {
              return fn(elem, 0, args);
            };
          }

          return fn;
        }
      },
      pseudos: {
        // Potentially complex pseudos
        "not": markFunction(function (selector) {
          // Trim the selector passed to compile
          // to avoid treating leading and trailing
          // spaces as combinators
          var input = [],
              results = [],
              matcher = compile(selector.replace(rtrim, "$1"));
          return matcher[expando] ? markFunction(function (seed, matches, context, xml) {
            var elem,
                unmatched = matcher(seed, null, xml, []),
                i = seed.length; // Match elements unmatched by `matcher`

            while (i--) {
              if (elem = unmatched[i]) {
                seed[i] = !(matches[i] = elem);
              }
            }
          }) : function (elem, context, xml) {
            input[0] = elem;
            matcher(input, null, xml, results); // Don't keep the element (issue #299)

            input[0] = null;
            return !results.pop();
          };
        }),
        "has": markFunction(function (selector) {
          return function (elem) {
            return Sizzle(selector, elem).length > 0;
          };
        }),
        "contains": markFunction(function (text) {
          text = text.replace(runescape, funescape);
          return function (elem) {
            return (elem.textContent || getText(elem)).indexOf(text) > -1;
          };
        }),
        // "Whether an element is represented by a :lang() selector
        // is based solely on the element's language value
        // being equal to the identifier C,
        // or beginning with the identifier C immediately followed by "-".
        // The matching of C against the element's language value is performed case-insensitively.
        // The identifier C does not have to be a valid language name."
        // http://www.w3.org/TR/selectors/#lang-pseudo
        "lang": markFunction(function (lang) {
          // lang value must be a valid identifier
          if (!ridentifier.test(lang || "")) {
            Sizzle.error("unsupported lang: " + lang);
          }

          lang = lang.replace(runescape, funescape).toLowerCase();
          return function (elem) {
            var elemLang;

            do {
              if (elemLang = documentIsHTML ? elem.lang : elem.getAttribute("xml:lang") || elem.getAttribute("lang")) {
                elemLang = elemLang.toLowerCase();
                return elemLang === lang || elemLang.indexOf(lang + "-") === 0;
              }
            } while ((elem = elem.parentNode) && elem.nodeType === 1);

            return false;
          };
        }),
        // Miscellaneous
        "target": function target(elem) {
          var hash = window.location && window.location.hash;
          return hash && hash.slice(1) === elem.id;
        },
        "root": function root(elem) {
          return elem === docElem;
        },
        "focus": function focus(elem) {
          return elem === document.activeElement && (!document.hasFocus || document.hasFocus()) && !!(elem.type || elem.href || ~elem.tabIndex);
        },
        // Boolean properties
        "enabled": createDisabledPseudo(false),
        "disabled": createDisabledPseudo(true),
        "checked": function checked(elem) {
          // In CSS3, :checked should return both checked and selected elements
          // http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
          var nodeName = elem.nodeName.toLowerCase();
          return nodeName === "input" && !!elem.checked || nodeName === "option" && !!elem.selected;
        },
        "selected": function selected(elem) {
          // Accessing this property makes selected-by-default
          // options in Safari work properly
          if (elem.parentNode) {
            elem.parentNode.selectedIndex;
          }

          return elem.selected === true;
        },
        // Contents
        "empty": function empty(elem) {
          // http://www.w3.org/TR/selectors/#empty-pseudo
          // :empty is negated by element (1) or content nodes (text: 3; cdata: 4; entity ref: 5),
          //   but not by others (comment: 8; processing instruction: 7; etc.)
          // nodeType < 6 works because attributes (2) do not appear as children
          for (elem = elem.firstChild; elem; elem = elem.nextSibling) {
            if (elem.nodeType < 6) {
              return false;
            }
          }

          return true;
        },
        "parent": function parent(elem) {
          return !Expr.pseudos["empty"](elem);
        },
        // Element/input types
        "header": function header(elem) {
          return rheader.test(elem.nodeName);
        },
        "input": function input(elem) {
          return rinputs.test(elem.nodeName);
        },
        "button": function button(elem) {
          var name = elem.nodeName.toLowerCase();
          return name === "input" && elem.type === "button" || name === "button";
        },
        "text": function text(elem) {
          var attr;
          return elem.nodeName.toLowerCase() === "input" && elem.type === "text" && ( // Support: IE<8
          // New HTML5 attribute values (e.g., "search") appear with elem.type === "text"
          (attr = elem.getAttribute("type")) == null || attr.toLowerCase() === "text");
        },
        // Position-in-collection
        "first": createPositionalPseudo(function () {
          return [0];
        }),
        "last": createPositionalPseudo(function (matchIndexes, length) {
          return [length - 1];
        }),
        "eq": createPositionalPseudo(function (matchIndexes, length, argument) {
          return [argument < 0 ? argument + length : argument];
        }),
        "even": createPositionalPseudo(function (matchIndexes, length) {
          var i = 0;

          for (; i < length; i += 2) {
            matchIndexes.push(i);
          }

          return matchIndexes;
        }),
        "odd": createPositionalPseudo(function (matchIndexes, length) {
          var i = 1;

          for (; i < length; i += 2) {
            matchIndexes.push(i);
          }

          return matchIndexes;
        }),
        "lt": createPositionalPseudo(function (matchIndexes, length, argument) {
          var i = argument < 0 ? argument + length : argument > length ? length : argument;

          for (; --i >= 0;) {
            matchIndexes.push(i);
          }

          return matchIndexes;
        }),
        "gt": createPositionalPseudo(function (matchIndexes, length, argument) {
          var i = argument < 0 ? argument + length : argument;

          for (; ++i < length;) {
            matchIndexes.push(i);
          }

          return matchIndexes;
        })
      }
    };
    Expr.pseudos["nth"] = Expr.pseudos["eq"]; // Add button/input type pseudos

    for (i in {
      radio: true,
      checkbox: true,
      file: true,
      password: true,
      image: true
    }) {
      Expr.pseudos[i] = createInputPseudo(i);
    }

    for (i in {
      submit: true,
      reset: true
    }) {
      Expr.pseudos[i] = createButtonPseudo(i);
    } // Easy API for creating new setFilters


    function setFilters() {}

    setFilters.prototype = Expr.filters = Expr.pseudos;
    Expr.setFilters = new setFilters();

    tokenize = Sizzle.tokenize = function (selector, parseOnly) {
      var matched,
          match,
          tokens,
          type,
          soFar,
          groups,
          preFilters,
          cached = tokenCache[selector + " "];

      if (cached) {
        return parseOnly ? 0 : cached.slice(0);
      }

      soFar = selector;
      groups = [];
      preFilters = Expr.preFilter;

      while (soFar) {
        // Comma and first run
        if (!matched || (match = rcomma.exec(soFar))) {
          if (match) {
            // Don't consume trailing commas as valid
            soFar = soFar.slice(match[0].length) || soFar;
          }

          groups.push(tokens = []);
        }

        matched = false; // Combinators

        if (match = rcombinators.exec(soFar)) {
          matched = match.shift();
          tokens.push({
            value: matched,
            // Cast descendant combinators to space
            type: match[0].replace(rtrim, " ")
          });
          soFar = soFar.slice(matched.length);
        } // Filters


        for (type in Expr.filter) {
          if ((match = matchExpr[type].exec(soFar)) && (!preFilters[type] || (match = preFilters[type](match)))) {
            matched = match.shift();
            tokens.push({
              value: matched,
              type: type,
              matches: match
            });
            soFar = soFar.slice(matched.length);
          }
        }

        if (!matched) {
          break;
        }
      } // Return the length of the invalid excess
      // if we're just parsing
      // Otherwise, throw an error or return tokens


      return parseOnly ? soFar.length : soFar ? Sizzle.error(selector) : // Cache the tokens
      tokenCache(selector, groups).slice(0);
    };

    function toSelector(tokens) {
      var i = 0,
          len = tokens.length,
          selector = "";

      for (; i < len; i++) {
        selector += tokens[i].value;
      }

      return selector;
    }

    function addCombinator(matcher, combinator, base) {
      var dir = combinator.dir,
          skip = combinator.next,
          key = skip || dir,
          checkNonElements = base && key === "parentNode",
          doneName = done++;
      return combinator.first ? // Check against closest ancestor/preceding element
      function (elem, context, xml) {
        while (elem = elem[dir]) {
          if (elem.nodeType === 1 || checkNonElements) {
            return matcher(elem, context, xml);
          }
        }

        return false;
      } : // Check against all ancestor/preceding elements
      function (elem, context, xml) {
        var oldCache,
            uniqueCache,
            outerCache,
            newCache = [dirruns, doneName]; // We can't set arbitrary data on XML nodes, so they don't benefit from combinator caching

        if (xml) {
          while (elem = elem[dir]) {
            if (elem.nodeType === 1 || checkNonElements) {
              if (matcher(elem, context, xml)) {
                return true;
              }
            }
          }
        } else {
          while (elem = elem[dir]) {
            if (elem.nodeType === 1 || checkNonElements) {
              outerCache = elem[expando] || (elem[expando] = {}); // Support: IE <9 only
              // Defend against cloned attroperties (jQuery gh-1709)

              uniqueCache = outerCache[elem.uniqueID] || (outerCache[elem.uniqueID] = {});

              if (skip && skip === elem.nodeName.toLowerCase()) {
                elem = elem[dir] || elem;
              } else if ((oldCache = uniqueCache[key]) && oldCache[0] === dirruns && oldCache[1] === doneName) {
                // Assign to newCache so results back-propagate to previous elements
                return newCache[2] = oldCache[2];
              } else {
                // Reuse newcache so results back-propagate to previous elements
                uniqueCache[key] = newCache; // A match means we're done; a fail means we have to keep checking

                if (newCache[2] = matcher(elem, context, xml)) {
                  return true;
                }
              }
            }
          }
        }

        return false;
      };
    }

    function elementMatcher(matchers) {
      return matchers.length > 1 ? function (elem, context, xml) {
        var i = matchers.length;

        while (i--) {
          if (!matchers[i](elem, context, xml)) {
            return false;
          }
        }

        return true;
      } : matchers[0];
    }

    function multipleContexts(selector, contexts, results) {
      var i = 0,
          len = contexts.length;

      for (; i < len; i++) {
        Sizzle(selector, contexts[i], results);
      }

      return results;
    }

    function condense(unmatched, map, filter, context, xml) {
      var elem,
          newUnmatched = [],
          i = 0,
          len = unmatched.length,
          mapped = map != null;

      for (; i < len; i++) {
        if (elem = unmatched[i]) {
          if (!filter || filter(elem, context, xml)) {
            newUnmatched.push(elem);

            if (mapped) {
              map.push(i);
            }
          }
        }
      }

      return newUnmatched;
    }

    function setMatcher(preFilter, selector, matcher, postFilter, postFinder, postSelector) {
      if (postFilter && !postFilter[expando]) {
        postFilter = setMatcher(postFilter);
      }

      if (postFinder && !postFinder[expando]) {
        postFinder = setMatcher(postFinder, postSelector);
      }

      return markFunction(function (seed, results, context, xml) {
        var temp,
            i,
            elem,
            preMap = [],
            postMap = [],
            preexisting = results.length,
            // Get initial elements from seed or context
        elems = seed || multipleContexts(selector || "*", context.nodeType ? [context] : context, []),
            // Prefilter to get matcher input, preserving a map for seed-results synchronization
        matcherIn = preFilter && (seed || !selector) ? condense(elems, preMap, preFilter, context, xml) : elems,
            matcherOut = matcher ? // If we have a postFinder, or filtered seed, or non-seed postFilter or preexisting results,
        postFinder || (seed ? preFilter : preexisting || postFilter) ? // ...intermediate processing is necessary
        [] : // ...otherwise use results directly
        results : matcherIn; // Find primary matches

        if (matcher) {
          matcher(matcherIn, matcherOut, context, xml);
        } // Apply postFilter


        if (postFilter) {
          temp = condense(matcherOut, postMap);
          postFilter(temp, [], context, xml); // Un-match failing elements by moving them back to matcherIn

          i = temp.length;

          while (i--) {
            if (elem = temp[i]) {
              matcherOut[postMap[i]] = !(matcherIn[postMap[i]] = elem);
            }
          }
        }

        if (seed) {
          if (postFinder || preFilter) {
            if (postFinder) {
              // Get the final matcherOut by condensing this intermediate into postFinder contexts
              temp = [];
              i = matcherOut.length;

              while (i--) {
                if (elem = matcherOut[i]) {
                  // Restore matcherIn since elem is not yet a final match
                  temp.push(matcherIn[i] = elem);
                }
              }

              postFinder(null, matcherOut = [], temp, xml);
            } // Move matched elements from seed to results to keep them synchronized


            i = matcherOut.length;

            while (i--) {
              if ((elem = matcherOut[i]) && (temp = postFinder ? indexOf(seed, elem) : preMap[i]) > -1) {
                seed[temp] = !(results[temp] = elem);
              }
            }
          } // Add elements to results, through postFinder if defined

        } else {
          matcherOut = condense(matcherOut === results ? matcherOut.splice(preexisting, matcherOut.length) : matcherOut);

          if (postFinder) {
            postFinder(null, results, matcherOut, xml);
          } else {
            push.apply(results, matcherOut);
          }
        }
      });
    }

    function matcherFromTokens(tokens) {
      var checkContext,
          matcher,
          j,
          len = tokens.length,
          leadingRelative = Expr.relative[tokens[0].type],
          implicitRelative = leadingRelative || Expr.relative[" "],
          i = leadingRelative ? 1 : 0,
          // The foundational matcher ensures that elements are reachable from top-level context(s)
      matchContext = addCombinator(function (elem) {
        return elem === checkContext;
      }, implicitRelative, true),
          matchAnyContext = addCombinator(function (elem) {
        return indexOf(checkContext, elem) > -1;
      }, implicitRelative, true),
          matchers = [function (elem, context, xml) {
        var ret = !leadingRelative && (xml || context !== outermostContext) || ((checkContext = context).nodeType ? matchContext(elem, context, xml) : matchAnyContext(elem, context, xml)); // Avoid hanging onto element (issue #299)

        checkContext = null;
        return ret;
      }];

      for (; i < len; i++) {
        if (matcher = Expr.relative[tokens[i].type]) {
          matchers = [addCombinator(elementMatcher(matchers), matcher)];
        } else {
          matcher = Expr.filter[tokens[i].type].apply(null, tokens[i].matches); // Return special upon seeing a positional matcher

          if (matcher[expando]) {
            // Find the next relative operator (if any) for proper handling
            j = ++i;

            for (; j < len; j++) {
              if (Expr.relative[tokens[j].type]) {
                break;
              }
            }

            return setMatcher(i > 1 && elementMatcher(matchers), i > 1 && toSelector( // If the preceding token was a descendant combinator, insert an implicit any-element `*`
            tokens.slice(0, i - 1).concat({
              value: tokens[i - 2].type === " " ? "*" : ""
            })).replace(rtrim, "$1"), matcher, i < j && matcherFromTokens(tokens.slice(i, j)), j < len && matcherFromTokens(tokens = tokens.slice(j)), j < len && toSelector(tokens));
          }

          matchers.push(matcher);
        }
      }

      return elementMatcher(matchers);
    }

    function matcherFromGroupMatchers(elementMatchers, setMatchers) {
      var bySet = setMatchers.length > 0,
          byElement = elementMatchers.length > 0,
          superMatcher = function superMatcher(seed, context, xml, results, outermost) {
        var elem,
            j,
            matcher,
            matchedCount = 0,
            i = "0",
            unmatched = seed && [],
            setMatched = [],
            contextBackup = outermostContext,
            // We must always have either seed elements or outermost context
        elems = seed || byElement && Expr.find["TAG"]("*", outermost),
            // Use integer dirruns iff this is the outermost matcher
        dirrunsUnique = dirruns += contextBackup == null ? 1 : Math.random() || 0.1,
            len = elems.length;

        if (outermost) {
          outermostContext = context === document || context || outermost;
        } // Add elements passing elementMatchers directly to results
        // Support: IE<9, Safari
        // Tolerate NodeList properties (IE: "length"; Safari: <number>) matching elements by id


        for (; i !== len && (elem = elems[i]) != null; i++) {
          if (byElement && elem) {
            j = 0;

            if (!context && elem.ownerDocument !== document) {
              setDocument(elem);
              xml = !documentIsHTML;
            }

            while (matcher = elementMatchers[j++]) {
              if (matcher(elem, context || document, xml)) {
                results.push(elem);
                break;
              }
            }

            if (outermost) {
              dirruns = dirrunsUnique;
            }
          } // Track unmatched elements for set filters


          if (bySet) {
            // They will have gone through all possible matchers
            if (elem = !matcher && elem) {
              matchedCount--;
            } // Lengthen the array for every element, matched or not


            if (seed) {
              unmatched.push(elem);
            }
          }
        } // `i` is now the count of elements visited above, and adding it to `matchedCount`
        // makes the latter nonnegative.


        matchedCount += i; // Apply set filters to unmatched elements
        // NOTE: This can be skipped if there are no unmatched elements (i.e., `matchedCount`
        // equals `i`), unless we didn't visit _any_ elements in the above loop because we have
        // no element matchers and no seed.
        // Incrementing an initially-string "0" `i` allows `i` to remain a string only in that
        // case, which will result in a "00" `matchedCount` that differs from `i` but is also
        // numerically zero.

        if (bySet && i !== matchedCount) {
          j = 0;

          while (matcher = setMatchers[j++]) {
            matcher(unmatched, setMatched, context, xml);
          }

          if (seed) {
            // Reintegrate element matches to eliminate the need for sorting
            if (matchedCount > 0) {
              while (i--) {
                if (!(unmatched[i] || setMatched[i])) {
                  setMatched[i] = pop.call(results);
                }
              }
            } // Discard index placeholder values to get only actual matches


            setMatched = condense(setMatched);
          } // Add matches to results


          push.apply(results, setMatched); // Seedless set matches succeeding multiple successful matchers stipulate sorting

          if (outermost && !seed && setMatched.length > 0 && matchedCount + setMatchers.length > 1) {
            Sizzle.uniqueSort(results);
          }
        } // Override manipulation of globals by nested matchers


        if (outermost) {
          dirruns = dirrunsUnique;
          outermostContext = contextBackup;
        }

        return unmatched;
      };

      return bySet ? markFunction(superMatcher) : superMatcher;
    }

    compile = Sizzle.compile = function (selector, match
    /* Internal Use Only */
    ) {
      var i,
          setMatchers = [],
          elementMatchers = [],
          cached = compilerCache[selector + " "];

      if (!cached) {
        // Generate a function of recursive functions that can be used to check each element
        if (!match) {
          match = tokenize(selector);
        }

        i = match.length;

        while (i--) {
          cached = matcherFromTokens(match[i]);

          if (cached[expando]) {
            setMatchers.push(cached);
          } else {
            elementMatchers.push(cached);
          }
        } // Cache the compiled function


        cached = compilerCache(selector, matcherFromGroupMatchers(elementMatchers, setMatchers)); // Save selector and tokenization

        cached.selector = selector;
      }

      return cached;
    };
    /**
     * A low-level selection function that works with Sizzle's compiled
     *  selector functions
     * @param {String|Function} selector A selector or a pre-compiled
     *  selector function built with Sizzle.compile
     * @param {Element} context
     * @param {Array} [results]
     * @param {Array} [seed] A set of elements to match against
     */


    select = Sizzle.select = function (selector, context, results, seed) {
      var i,
          tokens,
          token,
          type,
          find,
          compiled = typeof selector === "function" && selector,
          match = !seed && tokenize(selector = compiled.selector || selector);
      results = results || []; // Try to minimize operations if there is only one selector in the list and no seed
      // (the latter of which guarantees us context)

      if (match.length === 1) {
        // Reduce context if the leading compound selector is an ID
        tokens = match[0] = match[0].slice(0);

        if (tokens.length > 2 && (token = tokens[0]).type === "ID" && context.nodeType === 9 && documentIsHTML && Expr.relative[tokens[1].type]) {
          context = (Expr.find["ID"](token.matches[0].replace(runescape, funescape), context) || [])[0];

          if (!context) {
            return results; // Precompiled matchers will still verify ancestry, so step up a level
          } else if (compiled) {
            context = context.parentNode;
          }

          selector = selector.slice(tokens.shift().value.length);
        } // Fetch a seed set for right-to-left matching


        i = matchExpr["needsContext"].test(selector) ? 0 : tokens.length;

        while (i--) {
          token = tokens[i]; // Abort if we hit a combinator

          if (Expr.relative[type = token.type]) {
            break;
          }

          if (find = Expr.find[type]) {
            // Search, expanding context for leading sibling combinators
            if (seed = find(token.matches[0].replace(runescape, funescape), rsibling.test(tokens[0].type) && testContext(context.parentNode) || context)) {
              // If seed is empty or no tokens remain, we can return early
              tokens.splice(i, 1);
              selector = seed.length && toSelector(tokens);

              if (!selector) {
                push.apply(results, seed);
                return results;
              }

              break;
            }
          }
        }
      } // Compile and execute a filtering function if one is not provided
      // Provide `match` to avoid retokenization if we modified the selector above


      (compiled || compile(selector, match))(seed, context, !documentIsHTML, results, !context || rsibling.test(selector) && testContext(context.parentNode) || context);
      return results;
    }; // One-time assignments
    // Sort stability


    support.sortStable = expando.split("").sort(sortOrder).join("") === expando; // Support: Chrome 14-35+
    // Always assume duplicates if they aren't passed to the comparison function

    support.detectDuplicates = !!hasDuplicate; // Initialize against the default document

    setDocument(); // Support: Webkit<537.32 - Safari 6.0.3/Chrome 25 (fixed in Chrome 27)
    // Detached nodes confoundingly follow *each other*

    support.sortDetached = assert(function (el) {
      // Should return 1, but returns 4 (following)
      return el.compareDocumentPosition(document.createElement("fieldset")) & 1;
    }); // Support: IE<8
    // Prevent attribute/property "interpolation"
    // https://msdn.microsoft.com/en-us/library/ms536429%28VS.85%29.aspx

    if (!assert(function (el) {
      el.innerHTML = "<a href='#'></a>";
      return el.firstChild.getAttribute("href") === "#";
    })) {
      addHandle("type|href|height|width", function (elem, name, isXML) {
        if (!isXML) {
          return elem.getAttribute(name, name.toLowerCase() === "type" ? 1 : 2);
        }
      });
    } // Support: IE<9
    // Use defaultValue in place of getAttribute("value")


    if (!support.attributes || !assert(function (el) {
      el.innerHTML = "<input/>";
      el.firstChild.setAttribute("value", "");
      return el.firstChild.getAttribute("value") === "";
    })) {
      addHandle("value", function (elem, name, isXML) {
        if (!isXML && elem.nodeName.toLowerCase() === "input") {
          return elem.defaultValue;
        }
      });
    } // Support: IE<9
    // Use getAttributeNode to fetch booleans when getAttribute lies


    if (!assert(function (el) {
      return el.getAttribute("disabled") == null;
    })) {
      addHandle(booleans, function (elem, name, isXML) {
        var val;

        if (!isXML) {
          return elem[name] === true ? name.toLowerCase() : (val = elem.getAttributeNode(name)) && val.specified ? val.value : null;
        }
      });
    }

    return Sizzle;
  }(window);

  jQuery.find = Sizzle;
  jQuery.expr = Sizzle.selectors; // Deprecated

  jQuery.expr[":"] = jQuery.expr.pseudos;
  jQuery.uniqueSort = jQuery.unique = Sizzle.uniqueSort;
  jQuery.text = Sizzle.getText;
  jQuery.isXMLDoc = Sizzle.isXML;
  jQuery.contains = Sizzle.contains;
  jQuery.escapeSelector = Sizzle.escape;

  var dir = function dir(elem, _dir, until) {
    var matched = [],
        truncate = until !== undefined;

    while ((elem = elem[_dir]) && elem.nodeType !== 9) {
      if (elem.nodeType === 1) {
        if (truncate && jQuery(elem).is(until)) {
          break;
        }

        matched.push(elem);
      }
    }

    return matched;
  };

  var _siblings = function siblings(n, elem) {
    var matched = [];

    for (; n; n = n.nextSibling) {
      if (n.nodeType === 1 && n !== elem) {
        matched.push(n);
      }
    }

    return matched;
  };

  var rneedsContext = jQuery.expr.match.needsContext;

  function nodeName(elem, name) {
    return elem.nodeName && elem.nodeName.toLowerCase() === name.toLowerCase();
  }

  ;
  var rsingleTag = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i; // Implement the identical functionality for filter and not

  function winnow(elements, qualifier, not) {
    if (isFunction(qualifier)) {
      return jQuery.grep(elements, function (elem, i) {
        return !!qualifier.call(elem, i, elem) !== not;
      });
    } // Single element


    if (qualifier.nodeType) {
      return jQuery.grep(elements, function (elem) {
        return elem === qualifier !== not;
      });
    } // Arraylike of elements (jQuery, arguments, Array)


    if (typeof qualifier !== "string") {
      return jQuery.grep(elements, function (elem) {
        return indexOf.call(qualifier, elem) > -1 !== not;
      });
    } // Filtered directly for both simple and complex selectors


    return jQuery.filter(qualifier, elements, not);
  }

  jQuery.filter = function (expr, elems, not) {
    var elem = elems[0];

    if (not) {
      expr = ":not(" + expr + ")";
    }

    if (elems.length === 1 && elem.nodeType === 1) {
      return jQuery.find.matchesSelector(elem, expr) ? [elem] : [];
    }

    return jQuery.find.matches(expr, jQuery.grep(elems, function (elem) {
      return elem.nodeType === 1;
    }));
  };

  jQuery.fn.extend({
    find: function find(selector) {
      var i,
          ret,
          len = this.length,
          self = this;

      if (typeof selector !== "string") {
        return this.pushStack(jQuery(selector).filter(function () {
          for (i = 0; i < len; i++) {
            if (jQuery.contains(self[i], this)) {
              return true;
            }
          }
        }));
      }

      ret = this.pushStack([]);

      for (i = 0; i < len; i++) {
        jQuery.find(selector, self[i], ret);
      }

      return len > 1 ? jQuery.uniqueSort(ret) : ret;
    },
    filter: function filter(selector) {
      return this.pushStack(winnow(this, selector || [], false));
    },
    not: function not(selector) {
      return this.pushStack(winnow(this, selector || [], true));
    },
    is: function is(selector) {
      return !!winnow(this, // If this is a positional/relative selector, check membership in the returned set
      // so $("p:first").is("p:last") won't return true for a doc with two "p".
      typeof selector === "string" && rneedsContext.test(selector) ? jQuery(selector) : selector || [], false).length;
    }
  }); // Initialize a jQuery object
  // A central reference to the root jQuery(document)

  var rootjQuery,
      // A simple way to check for HTML strings
  // Prioritize #id over <tag> to avoid XSS via location.hash (#9521)
  // Strict HTML recognition (#11290: must start with <)
  // Shortcut simple #id case for speed
  rquickExpr = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/,
      init = jQuery.fn.init = function (selector, context, root) {
    var match, elem; // HANDLE: $(""), $(null), $(undefined), $(false)

    if (!selector) {
      return this;
    } // Method init() accepts an alternate rootjQuery
    // so migrate can support jQuery.sub (gh-2101)


    root = root || rootjQuery; // Handle HTML strings

    if (typeof selector === "string") {
      if (selector[0] === "<" && selector[selector.length - 1] === ">" && selector.length >= 3) {
        // Assume that strings that start and end with <> are HTML and skip the regex check
        match = [null, selector, null];
      } else {
        match = rquickExpr.exec(selector);
      } // Match html or make sure no context is specified for #id


      if (match && (match[1] || !context)) {
        // HANDLE: $(html) -> $(array)
        if (match[1]) {
          context = context instanceof jQuery ? context[0] : context; // Option to run scripts is true for back-compat
          // Intentionally let the error be thrown if parseHTML is not present

          jQuery.merge(this, jQuery.parseHTML(match[1], context && context.nodeType ? context.ownerDocument || context : document, true)); // HANDLE: $(html, props)

          if (rsingleTag.test(match[1]) && jQuery.isPlainObject(context)) {
            for (match in context) {
              // Properties of context are called as methods if possible
              if (isFunction(this[match])) {
                this[match](context[match]); // ...and otherwise set as attributes
              } else {
                this.attr(match, context[match]);
              }
            }
          }

          return this; // HANDLE: $(#id)
        } else {
          elem = document.getElementById(match[2]);

          if (elem) {
            // Inject the element directly into the jQuery object
            this[0] = elem;
            this.length = 1;
          }

          return this;
        } // HANDLE: $(expr, $(...))

      } else if (!context || context.jquery) {
        return (context || root).find(selector); // HANDLE: $(expr, context)
        // (which is just equivalent to: $(context).find(expr)
      } else {
        return this.constructor(context).find(selector);
      } // HANDLE: $(DOMElement)

    } else if (selector.nodeType) {
      this[0] = selector;
      this.length = 1;
      return this; // HANDLE: $(function)
      // Shortcut for document ready
    } else if (isFunction(selector)) {
      return root.ready !== undefined ? root.ready(selector) : // Execute immediately if ready is not present
      selector(jQuery);
    }

    return jQuery.makeArray(selector, this);
  }; // Give the init function the jQuery prototype for later instantiation


  init.prototype = jQuery.fn; // Initialize central reference

  rootjQuery = jQuery(document);
  var rparentsprev = /^(?:parents|prev(?:Until|All))/,
      // Methods guaranteed to produce a unique set when starting from a unique set
  guaranteedUnique = {
    children: true,
    contents: true,
    next: true,
    prev: true
  };
  jQuery.fn.extend({
    has: function has(target) {
      var targets = jQuery(target, this),
          l = targets.length;
      return this.filter(function () {
        var i = 0;

        for (; i < l; i++) {
          if (jQuery.contains(this, targets[i])) {
            return true;
          }
        }
      });
    },
    closest: function closest(selectors, context) {
      var cur,
          i = 0,
          l = this.length,
          matched = [],
          targets = typeof selectors !== "string" && jQuery(selectors); // Positional selectors never match, since there's no _selection_ context

      if (!rneedsContext.test(selectors)) {
        for (; i < l; i++) {
          for (cur = this[i]; cur && cur !== context; cur = cur.parentNode) {
            // Always skip document fragments
            if (cur.nodeType < 11 && (targets ? targets.index(cur) > -1 : // Don't pass non-elements to Sizzle
            cur.nodeType === 1 && jQuery.find.matchesSelector(cur, selectors))) {
              matched.push(cur);
              break;
            }
          }
        }
      }

      return this.pushStack(matched.length > 1 ? jQuery.uniqueSort(matched) : matched);
    },
    // Determine the position of an element within the set
    index: function index(elem) {
      // No argument, return index in parent
      if (!elem) {
        return this[0] && this[0].parentNode ? this.first().prevAll().length : -1;
      } // Index in selector


      if (typeof elem === "string") {
        return indexOf.call(jQuery(elem), this[0]);
      } // Locate the position of the desired element


      return indexOf.call(this, // If it receives a jQuery object, the first element is used
      elem.jquery ? elem[0] : elem);
    },
    add: function add(selector, context) {
      return this.pushStack(jQuery.uniqueSort(jQuery.merge(this.get(), jQuery(selector, context))));
    },
    addBack: function addBack(selector) {
      return this.add(selector == null ? this.prevObject : this.prevObject.filter(selector));
    }
  });

  function sibling(cur, dir) {
    while ((cur = cur[dir]) && cur.nodeType !== 1) {}

    return cur;
  }

  jQuery.each({
    parent: function parent(elem) {
      var parent = elem.parentNode;
      return parent && parent.nodeType !== 11 ? parent : null;
    },
    parents: function parents(elem) {
      return dir(elem, "parentNode");
    },
    parentsUntil: function parentsUntil(elem, i, until) {
      return dir(elem, "parentNode", until);
    },
    next: function next(elem) {
      return sibling(elem, "nextSibling");
    },
    prev: function prev(elem) {
      return sibling(elem, "previousSibling");
    },
    nextAll: function nextAll(elem) {
      return dir(elem, "nextSibling");
    },
    prevAll: function prevAll(elem) {
      return dir(elem, "previousSibling");
    },
    nextUntil: function nextUntil(elem, i, until) {
      return dir(elem, "nextSibling", until);
    },
    prevUntil: function prevUntil(elem, i, until) {
      return dir(elem, "previousSibling", until);
    },
    siblings: function siblings(elem) {
      return _siblings((elem.parentNode || {}).firstChild, elem);
    },
    children: function children(elem) {
      return _siblings(elem.firstChild);
    },
    contents: function contents(elem) {
      if (typeof elem.contentDocument !== "undefined") {
        return elem.contentDocument;
      } // Support: IE 9 - 11 only, iOS 7 only, Android Browser <=4.3 only
      // Treat the template element as a regular one in browsers that
      // don't support it.


      if (nodeName(elem, "template")) {
        elem = elem.content || elem;
      }

      return jQuery.merge([], elem.childNodes);
    }
  }, function (name, fn) {
    jQuery.fn[name] = function (until, selector) {
      var matched = jQuery.map(this, fn, until);

      if (name.slice(-5) !== "Until") {
        selector = until;
      }

      if (selector && typeof selector === "string") {
        matched = jQuery.filter(selector, matched);
      }

      if (this.length > 1) {
        // Remove duplicates
        if (!guaranteedUnique[name]) {
          jQuery.uniqueSort(matched);
        } // Reverse order for parents* and prev-derivatives


        if (rparentsprev.test(name)) {
          matched.reverse();
        }
      }

      return this.pushStack(matched);
    };
  });
  var rnothtmlwhite = /[^\x20\t\r\n\f]+/g; // Convert String-formatted options into Object-formatted ones

  function createOptions(options) {
    var object = {};
    jQuery.each(options.match(rnothtmlwhite) || [], function (_, flag) {
      object[flag] = true;
    });
    return object;
  }
  /*
   * Create a callback list using the following parameters:
   *
   *	options: an optional list of space-separated options that will change how
   *			the callback list behaves or a more traditional option object
   *
   * By default a callback list will act like an event callback list and can be
   * "fired" multiple times.
   *
   * Possible options:
   *
   *	once:			will ensure the callback list can only be fired once (like a Deferred)
   *
   *	memory:			will keep track of previous values and will call any callback added
   *					after the list has been fired right away with the latest "memorized"
   *					values (like a Deferred)
   *
   *	unique:			will ensure a callback can only be added once (no duplicate in the list)
   *
   *	stopOnFalse:	interrupt callings when a callback returns false
   *
   */


  jQuery.Callbacks = function (options) {
    // Convert options from String-formatted to Object-formatted if needed
    // (we check in cache first)
    options = typeof options === "string" ? createOptions(options) : jQuery.extend({}, options);

    var // Flag to know if list is currently firing
    firing,
        // Last fire value for non-forgettable lists
    memory,
        // Flag to know if list was already fired
    _fired,
        // Flag to prevent firing
    _locked,
        // Actual callback list
    list = [],
        // Queue of execution data for repeatable lists
    queue = [],
        // Index of currently firing callback (modified by add/remove as needed)
    firingIndex = -1,
        // Fire callbacks
    fire = function fire() {
      // Enforce single-firing
      _locked = _locked || options.once; // Execute callbacks for all pending executions,
      // respecting firingIndex overrides and runtime changes

      _fired = firing = true;

      for (; queue.length; firingIndex = -1) {
        memory = queue.shift();

        while (++firingIndex < list.length) {
          // Run callback and check for early termination
          if (list[firingIndex].apply(memory[0], memory[1]) === false && options.stopOnFalse) {
            // Jump to end and forget the data so .add doesn't re-fire
            firingIndex = list.length;
            memory = false;
          }
        }
      } // Forget the data if we're done with it


      if (!options.memory) {
        memory = false;
      }

      firing = false; // Clean up if we're done firing for good

      if (_locked) {
        // Keep an empty list if we have data for future add calls
        if (memory) {
          list = []; // Otherwise, this object is spent
        } else {
          list = "";
        }
      }
    },
        // Actual Callbacks object
    self = {
      // Add a callback or a collection of callbacks to the list
      add: function add() {
        if (list) {
          // If we have memory from a past run, we should fire after adding
          if (memory && !firing) {
            firingIndex = list.length - 1;
            queue.push(memory);
          }

          (function add(args) {
            jQuery.each(args, function (_, arg) {
              if (isFunction(arg)) {
                if (!options.unique || !self.has(arg)) {
                  list.push(arg);
                }
              } else if (arg && arg.length && toType(arg) !== "string") {
                // Inspect recursively
                add(arg);
              }
            });
          })(arguments);

          if (memory && !firing) {
            fire();
          }
        }

        return this;
      },
      // Remove a callback from the list
      remove: function remove() {
        jQuery.each(arguments, function (_, arg) {
          var index;

          while ((index = jQuery.inArray(arg, list, index)) > -1) {
            list.splice(index, 1); // Handle firing indexes

            if (index <= firingIndex) {
              firingIndex--;
            }
          }
        });
        return this;
      },
      // Check if a given callback is in the list.
      // If no argument is given, return whether or not list has callbacks attached.
      has: function has(fn) {
        return fn ? jQuery.inArray(fn, list) > -1 : list.length > 0;
      },
      // Remove all callbacks from the list
      empty: function empty() {
        if (list) {
          list = [];
        }

        return this;
      },
      // Disable .fire and .add
      // Abort any current/pending executions
      // Clear all callbacks and values
      disable: function disable() {
        _locked = queue = [];
        list = memory = "";
        return this;
      },
      disabled: function disabled() {
        return !list;
      },
      // Disable .fire
      // Also disable .add unless we have memory (since it would have no effect)
      // Abort any pending executions
      lock: function lock() {
        _locked = queue = [];

        if (!memory && !firing) {
          list = memory = "";
        }

        return this;
      },
      locked: function locked() {
        return !!_locked;
      },
      // Call all callbacks with the given context and arguments
      fireWith: function fireWith(context, args) {
        if (!_locked) {
          args = args || [];
          args = [context, args.slice ? args.slice() : args];
          queue.push(args);

          if (!firing) {
            fire();
          }
        }

        return this;
      },
      // Call all the callbacks with the given arguments
      fire: function fire() {
        self.fireWith(this, arguments);
        return this;
      },
      // To know if the callbacks have already been called at least once
      fired: function fired() {
        return !!_fired;
      }
    };

    return self;
  };

  function Identity(v) {
    return v;
  }

  function Thrower(ex) {
    throw ex;
  }

  function adoptValue(value, resolve, reject, noValue) {
    var method;

    try {
      // Check for promise aspect first to privilege synchronous behavior
      if (value && isFunction(method = value.promise)) {
        method.call(value).done(resolve).fail(reject); // Other thenables
      } else if (value && isFunction(method = value.then)) {
        method.call(value, resolve, reject); // Other non-thenables
      } else {
        // Control `resolve` arguments by letting Array#slice cast boolean `noValue` to integer:
        // * false: [ value ].slice( 0 ) => resolve( value )
        // * true: [ value ].slice( 1 ) => resolve()
        resolve.apply(undefined, [value].slice(noValue));
      } // For Promises/A+, convert exceptions into rejections
      // Since jQuery.when doesn't unwrap thenables, we can skip the extra checks appearing in
      // Deferred#then to conditionally suppress rejection.

    } catch (value) {
      // Support: Android 4.0 only
      // Strict mode functions invoked without .call/.apply get global-object context
      reject.apply(undefined, [value]);
    }
  }

  jQuery.extend({
    Deferred: function Deferred(func) {
      var tuples = [// action, add listener, callbacks,
      // ... .then handlers, argument index, [final state]
      ["notify", "progress", jQuery.Callbacks("memory"), jQuery.Callbacks("memory"), 2], ["resolve", "done", jQuery.Callbacks("once memory"), jQuery.Callbacks("once memory"), 0, "resolved"], ["reject", "fail", jQuery.Callbacks("once memory"), jQuery.Callbacks("once memory"), 1, "rejected"]],
          _state = "pending",
          _promise = {
        state: function state() {
          return _state;
        },
        always: function always() {
          deferred.done(arguments).fail(arguments);
          return this;
        },
        "catch": function _catch(fn) {
          return _promise.then(null, fn);
        },
        // Keep pipe for back-compat
        pipe: function pipe()
        /* fnDone, fnFail, fnProgress */
        {
          var fns = arguments;
          return jQuery.Deferred(function (newDefer) {
            jQuery.each(tuples, function (i, tuple) {
              // Map tuples (progress, done, fail) to arguments (done, fail, progress)
              var fn = isFunction(fns[tuple[4]]) && fns[tuple[4]]; // deferred.progress(function() { bind to newDefer or newDefer.notify })
              // deferred.done(function() { bind to newDefer or newDefer.resolve })
              // deferred.fail(function() { bind to newDefer or newDefer.reject })

              deferred[tuple[1]](function () {
                var returned = fn && fn.apply(this, arguments);

                if (returned && isFunction(returned.promise)) {
                  returned.promise().progress(newDefer.notify).done(newDefer.resolve).fail(newDefer.reject);
                } else {
                  newDefer[tuple[0] + "With"](this, fn ? [returned] : arguments);
                }
              });
            });
            fns = null;
          }).promise();
        },
        then: function then(onFulfilled, onRejected, onProgress) {
          var maxDepth = 0;

          function resolve(depth, deferred, handler, special) {
            return function () {
              var that = this,
                  args = arguments,
                  mightThrow = function mightThrow() {
                var returned, then; // Support: Promises/A+ section 2.3.3.3.3
                // https://promisesaplus.com/#point-59
                // Ignore double-resolution attempts

                if (depth < maxDepth) {
                  return;
                }

                returned = handler.apply(that, args); // Support: Promises/A+ section 2.3.1
                // https://promisesaplus.com/#point-48

                if (returned === deferred.promise()) {
                  throw new TypeError("Thenable self-resolution");
                } // Support: Promises/A+ sections 2.3.3.1, 3.5
                // https://promisesaplus.com/#point-54
                // https://promisesaplus.com/#point-75
                // Retrieve `then` only once


                then = returned && ( // Support: Promises/A+ section 2.3.4
                // https://promisesaplus.com/#point-64
                // Only check objects and functions for thenability
                _typeof(returned) === "object" || typeof returned === "function") && returned.then; // Handle a returned thenable

                if (isFunction(then)) {
                  // Special processors (notify) just wait for resolution
                  if (special) {
                    then.call(returned, resolve(maxDepth, deferred, Identity, special), resolve(maxDepth, deferred, Thrower, special)); // Normal processors (resolve) also hook into progress
                  } else {
                    // ...and disregard older resolution values
                    maxDepth++;
                    then.call(returned, resolve(maxDepth, deferred, Identity, special), resolve(maxDepth, deferred, Thrower, special), resolve(maxDepth, deferred, Identity, deferred.notifyWith));
                  } // Handle all other returned values

                } else {
                  // Only substitute handlers pass on context
                  // and multiple values (non-spec behavior)
                  if (handler !== Identity) {
                    that = undefined;
                    args = [returned];
                  } // Process the value(s)
                  // Default process is resolve


                  (special || deferred.resolveWith)(that, args);
                }
              },
                  // Only normal processors (resolve) catch and reject exceptions
              process = special ? mightThrow : function () {
                try {
                  mightThrow();
                } catch (e) {
                  if (jQuery.Deferred.exceptionHook) {
                    jQuery.Deferred.exceptionHook(e, process.stackTrace);
                  } // Support: Promises/A+ section 2.3.3.3.4.1
                  // https://promisesaplus.com/#point-61
                  // Ignore post-resolution exceptions


                  if (depth + 1 >= maxDepth) {
                    // Only substitute handlers pass on context
                    // and multiple values (non-spec behavior)
                    if (handler !== Thrower) {
                      that = undefined;
                      args = [e];
                    }

                    deferred.rejectWith(that, args);
                  }
                }
              }; // Support: Promises/A+ section 2.3.3.3.1
              // https://promisesaplus.com/#point-57
              // Re-resolve promises immediately to dodge false rejection from
              // subsequent errors


              if (depth) {
                process();
              } else {
                // Call an optional hook to record the stack, in case of exception
                // since it's otherwise lost when execution goes async
                if (jQuery.Deferred.getStackHook) {
                  process.stackTrace = jQuery.Deferred.getStackHook();
                }

                window.setTimeout(process);
              }
            };
          }

          return jQuery.Deferred(function (newDefer) {
            // progress_handlers.add( ... )
            tuples[0][3].add(resolve(0, newDefer, isFunction(onProgress) ? onProgress : Identity, newDefer.notifyWith)); // fulfilled_handlers.add( ... )

            tuples[1][3].add(resolve(0, newDefer, isFunction(onFulfilled) ? onFulfilled : Identity)); // rejected_handlers.add( ... )

            tuples[2][3].add(resolve(0, newDefer, isFunction(onRejected) ? onRejected : Thrower));
          }).promise();
        },
        // Get a promise for this deferred
        // If obj is provided, the promise aspect is added to the object
        promise: function promise(obj) {
          return obj != null ? jQuery.extend(obj, _promise) : _promise;
        }
      },
          deferred = {}; // Add list-specific methods

      jQuery.each(tuples, function (i, tuple) {
        var list = tuple[2],
            stateString = tuple[5]; // promise.progress = list.add
        // promise.done = list.add
        // promise.fail = list.add

        _promise[tuple[1]] = list.add; // Handle state

        if (stateString) {
          list.add(function () {
            // state = "resolved" (i.e., fulfilled)
            // state = "rejected"
            _state = stateString;
          }, // rejected_callbacks.disable
          // fulfilled_callbacks.disable
          tuples[3 - i][2].disable, // rejected_handlers.disable
          // fulfilled_handlers.disable
          tuples[3 - i][3].disable, // progress_callbacks.lock
          tuples[0][2].lock, // progress_handlers.lock
          tuples[0][3].lock);
        } // progress_handlers.fire
        // fulfilled_handlers.fire
        // rejected_handlers.fire


        list.add(tuple[3].fire); // deferred.notify = function() { deferred.notifyWith(...) }
        // deferred.resolve = function() { deferred.resolveWith(...) }
        // deferred.reject = function() { deferred.rejectWith(...) }

        deferred[tuple[0]] = function () {
          deferred[tuple[0] + "With"](this === deferred ? undefined : this, arguments);
          return this;
        }; // deferred.notifyWith = list.fireWith
        // deferred.resolveWith = list.fireWith
        // deferred.rejectWith = list.fireWith


        deferred[tuple[0] + "With"] = list.fireWith;
      }); // Make the deferred a promise

      _promise.promise(deferred); // Call given func if any


      if (func) {
        func.call(deferred, deferred);
      } // All done!


      return deferred;
    },
    // Deferred helper
    when: function when(singleValue) {
      var // count of uncompleted subordinates
      remaining = arguments.length,
          // count of unprocessed arguments
      i = remaining,
          // subordinate fulfillment data
      resolveContexts = Array(i),
          resolveValues = _slice.call(arguments),
          // the master Deferred
      master = jQuery.Deferred(),
          // subordinate callback factory
      updateFunc = function updateFunc(i) {
        return function (value) {
          resolveContexts[i] = this;
          resolveValues[i] = arguments.length > 1 ? _slice.call(arguments) : value;

          if (! --remaining) {
            master.resolveWith(resolveContexts, resolveValues);
          }
        };
      }; // Single- and empty arguments are adopted like Promise.resolve


      if (remaining <= 1) {
        adoptValue(singleValue, master.done(updateFunc(i)).resolve, master.reject, !remaining); // Use .then() to unwrap secondary thenables (cf. gh-3000)

        if (master.state() === "pending" || isFunction(resolveValues[i] && resolveValues[i].then)) {
          return master.then();
        }
      } // Multiple arguments are aggregated like Promise.all array elements


      while (i--) {
        adoptValue(resolveValues[i], updateFunc(i), master.reject);
      }

      return master.promise();
    }
  }); // These usually indicate a programmer mistake during development,
  // warn about them ASAP rather than swallowing them by default.

  var rerrorNames = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;

  jQuery.Deferred.exceptionHook = function (error, stack) {
    // Support: IE 8 - 9 only
    // Console exists when dev tools are open, which can happen at any time
    if (window.console && window.console.warn && error && rerrorNames.test(error.name)) {
      window.console.warn("jQuery.Deferred exception: " + error.message, error.stack, stack);
    }
  };

  jQuery.readyException = function (error) {
    window.setTimeout(function () {
      throw error;
    });
  }; // The deferred used on DOM ready


  var readyList = jQuery.Deferred();

  jQuery.fn.ready = function (fn) {
    readyList.then(fn) // Wrap jQuery.readyException in a function so that the lookup
    // happens at the time of error handling instead of callback
    // registration.
    ["catch"](function (error) {
      jQuery.readyException(error);
    });
    return this;
  };

  jQuery.extend({
    // Is the DOM ready to be used? Set to true once it occurs.
    isReady: false,
    // A counter to track how many items to wait for before
    // the ready event fires. See #6781
    readyWait: 1,
    // Handle when the DOM is ready
    ready: function ready(wait) {
      // Abort if there are pending holds or we're already ready
      if (wait === true ? --jQuery.readyWait : jQuery.isReady) {
        return;
      } // Remember that the DOM is ready


      jQuery.isReady = true; // If a normal DOM Ready event fired, decrement, and wait if need be

      if (wait !== true && --jQuery.readyWait > 0) {
        return;
      } // If there are functions bound, to execute


      readyList.resolveWith(document, [jQuery]);
    }
  });
  jQuery.ready.then = readyList.then; // The ready event handler and self cleanup method

  function completed() {
    document.removeEventListener("DOMContentLoaded", completed);
    window.removeEventListener("load", completed);
    jQuery.ready();
  } // Catch cases where $(document).ready() is called
  // after the browser event has already occurred.
  // Support: IE <=9 - 10 only
  // Older IE sometimes signals "interactive" too soon


  if (document.readyState === "complete" || document.readyState !== "loading" && !document.documentElement.doScroll) {
    // Handle it asynchronously to allow scripts the opportunity to delay ready
    window.setTimeout(jQuery.ready);
  } else {
    // Use the handy event callback
    document.addEventListener("DOMContentLoaded", completed); // A fallback to window.onload, that will always work

    window.addEventListener("load", completed);
  } // Multifunctional method to get and set values of a collection
  // The value/s can optionally be executed if it's a function


  var access = function access(elems, fn, key, value, chainable, emptyGet, raw) {
    var i = 0,
        len = elems.length,
        bulk = key == null; // Sets many values

    if (toType(key) === "object") {
      chainable = true;

      for (i in key) {
        access(elems, fn, i, key[i], true, emptyGet, raw);
      } // Sets one value

    } else if (value !== undefined) {
      chainable = true;

      if (!isFunction(value)) {
        raw = true;
      }

      if (bulk) {
        // Bulk operations run against the entire set
        if (raw) {
          fn.call(elems, value);
          fn = null; // ...except when executing function values
        } else {
          bulk = fn;

          fn = function fn(elem, key, value) {
            return bulk.call(jQuery(elem), value);
          };
        }
      }

      if (fn) {
        for (; i < len; i++) {
          fn(elems[i], key, raw ? value : value.call(elems[i], i, fn(elems[i], key)));
        }
      }
    }

    if (chainable) {
      return elems;
    } // Gets


    if (bulk) {
      return fn.call(elems);
    }

    return len ? fn(elems[0], key) : emptyGet;
  }; // Matches dashed string for camelizing


  var rmsPrefix = /^-ms-/,
      rdashAlpha = /-([a-z])/g; // Used by camelCase as callback to replace()

  function fcamelCase(all, letter) {
    return letter.toUpperCase();
  } // Convert dashed to camelCase; used by the css and data modules
  // Support: IE <=9 - 11, Edge 12 - 15
  // Microsoft forgot to hump their vendor prefix (#9572)


  function camelCase(string) {
    return string.replace(rmsPrefix, "ms-").replace(rdashAlpha, fcamelCase);
  }

  var acceptData = function acceptData(owner) {
    // Accepts only:
    //  - Node
    //    - Node.ELEMENT_NODE
    //    - Node.DOCUMENT_NODE
    //  - Object
    //    - Any
    return owner.nodeType === 1 || owner.nodeType === 9 || !+owner.nodeType;
  };

  function Data() {
    this.expando = jQuery.expando + Data.uid++;
  }

  Data.uid = 1;
  Data.prototype = {
    cache: function cache(owner) {
      // Check if the owner object already has a cache
      var value = owner[this.expando]; // If not, create one

      if (!value) {
        value = {}; // We can accept data for non-element nodes in modern browsers,
        // but we should not, see #8335.
        // Always return an empty object.

        if (acceptData(owner)) {
          // If it is a node unlikely to be stringify-ed or looped over
          // use plain assignment
          if (owner.nodeType) {
            owner[this.expando] = value; // Otherwise secure it in a non-enumerable property
            // configurable must be true to allow the property to be
            // deleted when data is removed
          } else {
            Object.defineProperty(owner, this.expando, {
              value: value,
              configurable: true
            });
          }
        }
      }

      return value;
    },
    set: function set(owner, data, value) {
      var prop,
          cache = this.cache(owner); // Handle: [ owner, key, value ] args
      // Always use camelCase key (gh-2257)

      if (typeof data === "string") {
        cache[camelCase(data)] = value; // Handle: [ owner, { properties } ] args
      } else {
        // Copy the properties one-by-one to the cache object
        for (prop in data) {
          cache[camelCase(prop)] = data[prop];
        }
      }

      return cache;
    },
    get: function get(owner, key) {
      return key === undefined ? this.cache(owner) : // Always use camelCase key (gh-2257)
      owner[this.expando] && owner[this.expando][camelCase(key)];
    },
    access: function access(owner, key, value) {
      // In cases where either:
      //
      //   1. No key was specified
      //   2. A string key was specified, but no value provided
      //
      // Take the "read" path and allow the get method to determine
      // which value to return, respectively either:
      //
      //   1. The entire cache object
      //   2. The data stored at the key
      //
      if (key === undefined || key && typeof key === "string" && value === undefined) {
        return this.get(owner, key);
      } // When the key is not a string, or both a key and value
      // are specified, set or extend (existing objects) with either:
      //
      //   1. An object of properties
      //   2. A key and value
      //


      this.set(owner, key, value); // Since the "set" path can have two possible entry points
      // return the expected data based on which path was taken[*]

      return value !== undefined ? value : key;
    },
    remove: function remove(owner, key) {
      var i,
          cache = owner[this.expando];

      if (cache === undefined) {
        return;
      }

      if (key !== undefined) {
        // Support array or space separated string of keys
        if (Array.isArray(key)) {
          // If key is an array of keys...
          // We always set camelCase keys, so remove that.
          key = key.map(camelCase);
        } else {
          key = camelCase(key); // If a key with the spaces exists, use it.
          // Otherwise, create an array by matching non-whitespace

          key = key in cache ? [key] : key.match(rnothtmlwhite) || [];
        }

        i = key.length;

        while (i--) {
          delete cache[key[i]];
        }
      } // Remove the expando if there's no more data


      if (key === undefined || jQuery.isEmptyObject(cache)) {
        // Support: Chrome <=35 - 45
        // Webkit & Blink performance suffers when deleting properties
        // from DOM nodes, so set to undefined instead
        // https://bugs.chromium.org/p/chromium/issues/detail?id=378607 (bug restricted)
        if (owner.nodeType) {
          owner[this.expando] = undefined;
        } else {
          delete owner[this.expando];
        }
      }
    },
    hasData: function hasData(owner) {
      var cache = owner[this.expando];
      return cache !== undefined && !jQuery.isEmptyObject(cache);
    }
  };
  var dataPriv = new Data();
  var dataUser = new Data(); //	Implementation Summary
  //
  //	1. Enforce API surface and semantic compatibility with 1.9.x branch
  //	2. Improve the module's maintainability by reducing the storage
  //		paths to a single mechanism.
  //	3. Use the same single mechanism to support "private" and "user" data.
  //	4. _Never_ expose "private" data to user code (TODO: Drop _data, _removeData)
  //	5. Avoid exposing implementation details on user objects (eg. expando properties)
  //	6. Provide a clear path for implementation upgrade to WeakMap in 2014

  var rbrace = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
      rmultiDash = /[A-Z]/g;

  function getData(data) {
    if (data === "true") {
      return true;
    }

    if (data === "false") {
      return false;
    }

    if (data === "null") {
      return null;
    } // Only convert to a number if it doesn't change the string


    if (data === +data + "") {
      return +data;
    }

    if (rbrace.test(data)) {
      return JSON.parse(data);
    }

    return data;
  }

  function dataAttr(elem, key, data) {
    var name; // If nothing was found internally, try to fetch any
    // data from the HTML5 data-* attribute

    if (data === undefined && elem.nodeType === 1) {
      name = "data-" + key.replace(rmultiDash, "-$&").toLowerCase();
      data = elem.getAttribute(name);

      if (typeof data === "string") {
        try {
          data = getData(data);
        } catch (e) {} // Make sure we set the data so it isn't changed later


        dataUser.set(elem, key, data);
      } else {
        data = undefined;
      }
    }

    return data;
  }

  jQuery.extend({
    hasData: function hasData(elem) {
      return dataUser.hasData(elem) || dataPriv.hasData(elem);
    },
    data: function data(elem, name, _data) {
      return dataUser.access(elem, name, _data);
    },
    removeData: function removeData(elem, name) {
      dataUser.remove(elem, name);
    },
    // TODO: Now that all calls to _data and _removeData have been replaced
    // with direct calls to dataPriv methods, these can be deprecated.
    _data: function _data(elem, name, data) {
      return dataPriv.access(elem, name, data);
    },
    _removeData: function _removeData(elem, name) {
      dataPriv.remove(elem, name);
    }
  });
  jQuery.fn.extend({
    data: function data(key, value) {
      var i,
          name,
          data,
          elem = this[0],
          attrs = elem && elem.attributes; // Gets all values

      if (key === undefined) {
        if (this.length) {
          data = dataUser.get(elem);

          if (elem.nodeType === 1 && !dataPriv.get(elem, "hasDataAttrs")) {
            i = attrs.length;

            while (i--) {
              // Support: IE 11 only
              // The attrs elements can be null (#14894)
              if (attrs[i]) {
                name = attrs[i].name;

                if (name.indexOf("data-") === 0) {
                  name = camelCase(name.slice(5));
                  dataAttr(elem, name, data[name]);
                }
              }
            }

            dataPriv.set(elem, "hasDataAttrs", true);
          }
        }

        return data;
      } // Sets multiple values


      if (_typeof(key) === "object") {
        return this.each(function () {
          dataUser.set(this, key);
        });
      }

      return access(this, function (value) {
        var data; // The calling jQuery object (element matches) is not empty
        // (and therefore has an element appears at this[ 0 ]) and the
        // `value` parameter was not undefined. An empty jQuery object
        // will result in `undefined` for elem = this[ 0 ] which will
        // throw an exception if an attempt to read a data cache is made.

        if (elem && value === undefined) {
          // Attempt to get data from the cache
          // The key will always be camelCased in Data
          data = dataUser.get(elem, key);

          if (data !== undefined) {
            return data;
          } // Attempt to "discover" the data in
          // HTML5 custom data-* attrs


          data = dataAttr(elem, key);

          if (data !== undefined) {
            return data;
          } // We tried really hard, but the data doesn't exist.


          return;
        } // Set the data...


        this.each(function () {
          // We always store the camelCased key
          dataUser.set(this, key, value);
        });
      }, null, value, arguments.length > 1, null, true);
    },
    removeData: function removeData(key) {
      return this.each(function () {
        dataUser.remove(this, key);
      });
    }
  });
  jQuery.extend({
    queue: function queue(elem, type, data) {
      var queue;

      if (elem) {
        type = (type || "fx") + "queue";
        queue = dataPriv.get(elem, type); // Speed up dequeue by getting out quickly if this is just a lookup

        if (data) {
          if (!queue || Array.isArray(data)) {
            queue = dataPriv.access(elem, type, jQuery.makeArray(data));
          } else {
            queue.push(data);
          }
        }

        return queue || [];
      }
    },
    dequeue: function dequeue(elem, type) {
      type = type || "fx";

      var queue = jQuery.queue(elem, type),
          startLength = queue.length,
          fn = queue.shift(),
          hooks = jQuery._queueHooks(elem, type),
          next = function next() {
        jQuery.dequeue(elem, type);
      }; // If the fx queue is dequeued, always remove the progress sentinel


      if (fn === "inprogress") {
        fn = queue.shift();
        startLength--;
      }

      if (fn) {
        // Add a progress sentinel to prevent the fx queue from being
        // automatically dequeued
        if (type === "fx") {
          queue.unshift("inprogress");
        } // Clear up the last queue stop function


        delete hooks.stop;
        fn.call(elem, next, hooks);
      }

      if (!startLength && hooks) {
        hooks.empty.fire();
      }
    },
    // Not public - generate a queueHooks object, or return the current one
    _queueHooks: function _queueHooks(elem, type) {
      var key = type + "queueHooks";
      return dataPriv.get(elem, key) || dataPriv.access(elem, key, {
        empty: jQuery.Callbacks("once memory").add(function () {
          dataPriv.remove(elem, [type + "queue", key]);
        })
      });
    }
  });
  jQuery.fn.extend({
    queue: function queue(type, data) {
      var setter = 2;

      if (typeof type !== "string") {
        data = type;
        type = "fx";
        setter--;
      }

      if (arguments.length < setter) {
        return jQuery.queue(this[0], type);
      }

      return data === undefined ? this : this.each(function () {
        var queue = jQuery.queue(this, type, data); // Ensure a hooks for this queue

        jQuery._queueHooks(this, type);

        if (type === "fx" && queue[0] !== "inprogress") {
          jQuery.dequeue(this, type);
        }
      });
    },
    dequeue: function dequeue(type) {
      return this.each(function () {
        jQuery.dequeue(this, type);
      });
    },
    clearQueue: function clearQueue(type) {
      return this.queue(type || "fx", []);
    },
    // Get a promise resolved when queues of a certain type
    // are emptied (fx is the type by default)
    promise: function promise(type, obj) {
      var tmp,
          count = 1,
          defer = jQuery.Deferred(),
          elements = this,
          i = this.length,
          resolve = function resolve() {
        if (! --count) {
          defer.resolveWith(elements, [elements]);
        }
      };

      if (typeof type !== "string") {
        obj = type;
        type = undefined;
      }

      type = type || "fx";

      while (i--) {
        tmp = dataPriv.get(elements[i], type + "queueHooks");

        if (tmp && tmp.empty) {
          count++;
          tmp.empty.add(resolve);
        }
      }

      resolve();
      return defer.promise(obj);
    }
  });
  var pnum = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source;
  var rcssNum = new RegExp("^(?:([+-])=|)(" + pnum + ")([a-z%]*)$", "i");
  var cssExpand = ["Top", "Right", "Bottom", "Left"];
  var documentElement = document.documentElement;

  var isAttached = function isAttached(elem) {
    return jQuery.contains(elem.ownerDocument, elem);
  },
      composed = {
    composed: true
  }; // Support: IE 9 - 11+, Edge 12 - 18+, iOS 10.0 - 10.2 only
  // Check attachment across shadow DOM boundaries when possible (gh-3504)
  // Support: iOS 10.0-10.2 only
  // Early iOS 10 versions support `attachShadow` but not `getRootNode`,
  // leading to errors. We need to check for `getRootNode`.


  if (documentElement.getRootNode) {
    isAttached = function isAttached(elem) {
      return jQuery.contains(elem.ownerDocument, elem) || elem.getRootNode(composed) === elem.ownerDocument;
    };
  }

  var isHiddenWithinTree = function isHiddenWithinTree(elem, el) {
    // isHiddenWithinTree might be called from jQuery#filter function;
    // in that case, element will be second argument
    elem = el || elem; // Inline style trumps all

    return elem.style.display === "none" || elem.style.display === "" && // Otherwise, check computed style
    // Support: Firefox <=43 - 45
    // Disconnected elements can have computed display: none, so first confirm that elem is
    // in the document.
    isAttached(elem) && jQuery.css(elem, "display") === "none";
  };

  var swap = function swap(elem, options, callback, args) {
    var ret,
        name,
        old = {}; // Remember the old values, and insert the new ones

    for (name in options) {
      old[name] = elem.style[name];
      elem.style[name] = options[name];
    }

    ret = callback.apply(elem, args || []); // Revert the old values

    for (name in options) {
      elem.style[name] = old[name];
    }

    return ret;
  };

  function adjustCSS(elem, prop, valueParts, tween) {
    var adjusted,
        scale,
        maxIterations = 20,
        currentValue = tween ? function () {
      return tween.cur();
    } : function () {
      return jQuery.css(elem, prop, "");
    },
        initial = currentValue(),
        unit = valueParts && valueParts[3] || (jQuery.cssNumber[prop] ? "" : "px"),
        // Starting value computation is required for potential unit mismatches
    initialInUnit = elem.nodeType && (jQuery.cssNumber[prop] || unit !== "px" && +initial) && rcssNum.exec(jQuery.css(elem, prop));

    if (initialInUnit && initialInUnit[3] !== unit) {
      // Support: Firefox <=54
      // Halve the iteration target value to prevent interference from CSS upper bounds (gh-2144)
      initial = initial / 2; // Trust units reported by jQuery.css

      unit = unit || initialInUnit[3]; // Iteratively approximate from a nonzero starting point

      initialInUnit = +initial || 1;

      while (maxIterations--) {
        // Evaluate and update our best guess (doubling guesses that zero out).
        // Finish if the scale equals or crosses 1 (making the old*new product non-positive).
        jQuery.style(elem, prop, initialInUnit + unit);

        if ((1 - scale) * (1 - (scale = currentValue() / initial || 0.5)) <= 0) {
          maxIterations = 0;
        }

        initialInUnit = initialInUnit / scale;
      }

      initialInUnit = initialInUnit * 2;
      jQuery.style(elem, prop, initialInUnit + unit); // Make sure we update the tween properties later on

      valueParts = valueParts || [];
    }

    if (valueParts) {
      initialInUnit = +initialInUnit || +initial || 0; // Apply relative offset (+=/-=) if specified

      adjusted = valueParts[1] ? initialInUnit + (valueParts[1] + 1) * valueParts[2] : +valueParts[2];

      if (tween) {
        tween.unit = unit;
        tween.start = initialInUnit;
        tween.end = adjusted;
      }
    }

    return adjusted;
  }

  var defaultDisplayMap = {};

  function getDefaultDisplay(elem) {
    var temp,
        doc = elem.ownerDocument,
        nodeName = elem.nodeName,
        display = defaultDisplayMap[nodeName];

    if (display) {
      return display;
    }

    temp = doc.body.appendChild(doc.createElement(nodeName));
    display = jQuery.css(temp, "display");
    temp.parentNode.removeChild(temp);

    if (display === "none") {
      display = "block";
    }

    defaultDisplayMap[nodeName] = display;
    return display;
  }

  function showHide(elements, show) {
    var display,
        elem,
        values = [],
        index = 0,
        length = elements.length; // Determine new display value for elements that need to change

    for (; index < length; index++) {
      elem = elements[index];

      if (!elem.style) {
        continue;
      }

      display = elem.style.display;

      if (show) {
        // Since we force visibility upon cascade-hidden elements, an immediate (and slow)
        // check is required in this first loop unless we have a nonempty display value (either
        // inline or about-to-be-restored)
        if (display === "none") {
          values[index] = dataPriv.get(elem, "display") || null;

          if (!values[index]) {
            elem.style.display = "";
          }
        }

        if (elem.style.display === "" && isHiddenWithinTree(elem)) {
          values[index] = getDefaultDisplay(elem);
        }
      } else {
        if (display !== "none") {
          values[index] = "none"; // Remember what we're overwriting

          dataPriv.set(elem, "display", display);
        }
      }
    } // Set the display of the elements in a second loop to avoid constant reflow


    for (index = 0; index < length; index++) {
      if (values[index] != null) {
        elements[index].style.display = values[index];
      }
    }

    return elements;
  }

  jQuery.fn.extend({
    show: function show() {
      return showHide(this, true);
    },
    hide: function hide() {
      return showHide(this);
    },
    toggle: function toggle(state) {
      if (typeof state === "boolean") {
        return state ? this.show() : this.hide();
      }

      return this.each(function () {
        if (isHiddenWithinTree(this)) {
          jQuery(this).show();
        } else {
          jQuery(this).hide();
        }
      });
    }
  });
  var rcheckableType = /^(?:checkbox|radio)$/i;
  var rtagName = /<([a-z][^\/\0>\x20\t\r\n\f]*)/i;
  var rscriptType = /^$|^module$|\/(?:java|ecma)script/i; // We have to close these tags to support XHTML (#13200)

  var wrapMap = {
    // Support: IE <=9 only
    option: [1, "<select multiple='multiple'>", "</select>"],
    // XHTML parsers do not magically insert elements in the
    // same way that tag soup parsers do. So we cannot shorten
    // this by omitting <tbody> or other required elements.
    thead: [1, "<table>", "</table>"],
    col: [2, "<table><colgroup>", "</colgroup></table>"],
    tr: [2, "<table><tbody>", "</tbody></table>"],
    td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
    _default: [0, "", ""]
  }; // Support: IE <=9 only

  wrapMap.optgroup = wrapMap.option;
  wrapMap.tbody = wrapMap.tfoot = wrapMap.colgroup = wrapMap.caption = wrapMap.thead;
  wrapMap.th = wrapMap.td;

  function getAll(context, tag) {
    // Support: IE <=9 - 11 only
    // Use typeof to avoid zero-argument method invocation on host objects (#15151)
    var ret;

    if (typeof context.getElementsByTagName !== "undefined") {
      ret = context.getElementsByTagName(tag || "*");
    } else if (typeof context.querySelectorAll !== "undefined") {
      ret = context.querySelectorAll(tag || "*");
    } else {
      ret = [];
    }

    if (tag === undefined || tag && nodeName(context, tag)) {
      return jQuery.merge([context], ret);
    }

    return ret;
  } // Mark scripts as having already been evaluated


  function setGlobalEval(elems, refElements) {
    var i = 0,
        l = elems.length;

    for (; i < l; i++) {
      dataPriv.set(elems[i], "globalEval", !refElements || dataPriv.get(refElements[i], "globalEval"));
    }
  }

  var rhtml = /<|&#?\w+;/;

  function buildFragment(elems, context, scripts, selection, ignored) {
    var elem,
        tmp,
        tag,
        wrap,
        attached,
        j,
        fragment = context.createDocumentFragment(),
        nodes = [],
        i = 0,
        l = elems.length;

    for (; i < l; i++) {
      elem = elems[i];

      if (elem || elem === 0) {
        // Add nodes directly
        if (toType(elem) === "object") {
          // Support: Android <=4.0 only, PhantomJS 1 only
          // push.apply(_, arraylike) throws on ancient WebKit
          jQuery.merge(nodes, elem.nodeType ? [elem] : elem); // Convert non-html into a text node
        } else if (!rhtml.test(elem)) {
          nodes.push(context.createTextNode(elem)); // Convert html into DOM nodes
        } else {
          tmp = tmp || fragment.appendChild(context.createElement("div")); // Deserialize a standard representation

          tag = (rtagName.exec(elem) || ["", ""])[1].toLowerCase();
          wrap = wrapMap[tag] || wrapMap._default;
          tmp.innerHTML = wrap[1] + jQuery.htmlPrefilter(elem) + wrap[2]; // Descend through wrappers to the right content

          j = wrap[0];

          while (j--) {
            tmp = tmp.lastChild;
          } // Support: Android <=4.0 only, PhantomJS 1 only
          // push.apply(_, arraylike) throws on ancient WebKit


          jQuery.merge(nodes, tmp.childNodes); // Remember the top-level container

          tmp = fragment.firstChild; // Ensure the created nodes are orphaned (#12392)

          tmp.textContent = "";
        }
      }
    } // Remove wrapper from fragment


    fragment.textContent = "";
    i = 0;

    while (elem = nodes[i++]) {
      // Skip elements already in the context collection (trac-4087)
      if (selection && jQuery.inArray(elem, selection) > -1) {
        if (ignored) {
          ignored.push(elem);
        }

        continue;
      }

      attached = isAttached(elem); // Append to fragment

      tmp = getAll(fragment.appendChild(elem), "script"); // Preserve script evaluation history

      if (attached) {
        setGlobalEval(tmp);
      } // Capture executables


      if (scripts) {
        j = 0;

        while (elem = tmp[j++]) {
          if (rscriptType.test(elem.type || "")) {
            scripts.push(elem);
          }
        }
      }
    }

    return fragment;
  }

  (function () {
    var fragment = document.createDocumentFragment(),
        div = fragment.appendChild(document.createElement("div")),
        input = document.createElement("input"); // Support: Android 4.0 - 4.3 only
    // Check state lost if the name is set (#11217)
    // Support: Windows Web Apps (WWA)
    // `name` and `type` must use .setAttribute for WWA (#14901)

    input.setAttribute("type", "radio");
    input.setAttribute("checked", "checked");
    input.setAttribute("name", "t");
    div.appendChild(input); // Support: Android <=4.1 only
    // Older WebKit doesn't clone checked state correctly in fragments

    support.checkClone = div.cloneNode(true).cloneNode(true).lastChild.checked; // Support: IE <=11 only
    // Make sure textarea (and checkbox) defaultValue is properly cloned

    div.innerHTML = "<textarea>x</textarea>";
    support.noCloneChecked = !!div.cloneNode(true).lastChild.defaultValue;
  })();

  var rkeyEvent = /^key/,
      rmouseEvent = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
      rtypenamespace = /^([^.]*)(?:\.(.+)|)/;

  function returnTrue() {
    return true;
  }

  function returnFalse() {
    return false;
  } // Support: IE <=9 - 11+
  // focus() and blur() are asynchronous, except when they are no-op.
  // So expect focus to be synchronous when the element is already active,
  // and blur to be synchronous when the element is not already active.
  // (focus and blur are always synchronous in other supported browsers,
  // this just defines when we can count on it).


  function expectSync(elem, type) {
    return elem === safeActiveElement() === (type === "focus");
  } // Support: IE <=9 only
  // Accessing document.activeElement can throw unexpectedly
  // https://bugs.jquery.com/ticket/13393


  function safeActiveElement() {
    try {
      return document.activeElement;
    } catch (err) {}
  }

  function _on(elem, types, selector, data, fn, one) {
    var origFn, type; // Types can be a map of types/handlers

    if (_typeof(types) === "object") {
      // ( types-Object, selector, data )
      if (typeof selector !== "string") {
        // ( types-Object, data )
        data = data || selector;
        selector = undefined;
      }

      for (type in types) {
        _on(elem, type, selector, data, types[type], one);
      }

      return elem;
    }

    if (data == null && fn == null) {
      // ( types, fn )
      fn = selector;
      data = selector = undefined;
    } else if (fn == null) {
      if (typeof selector === "string") {
        // ( types, selector, fn )
        fn = data;
        data = undefined;
      } else {
        // ( types, data, fn )
        fn = data;
        data = selector;
        selector = undefined;
      }
    }

    if (fn === false) {
      fn = returnFalse;
    } else if (!fn) {
      return elem;
    }

    if (one === 1) {
      origFn = fn;

      fn = function fn(event) {
        // Can use an empty set, since event contains the info
        jQuery().off(event);
        return origFn.apply(this, arguments);
      }; // Use same guid so caller can remove using origFn


      fn.guid = origFn.guid || (origFn.guid = jQuery.guid++);
    }

    return elem.each(function () {
      jQuery.event.add(this, types, fn, data, selector);
    });
  }
  /*
   * Helper functions for managing events -- not part of the public interface.
   * Props to Dean Edwards' addEvent library for many of the ideas.
   */


  jQuery.event = {
    global: {},
    add: function add(elem, types, handler, data, selector) {
      var handleObjIn,
          eventHandle,
          tmp,
          events,
          t,
          handleObj,
          special,
          handlers,
          type,
          namespaces,
          origType,
          elemData = dataPriv.get(elem); // Don't attach events to noData or text/comment nodes (but allow plain objects)

      if (!elemData) {
        return;
      } // Caller can pass in an object of custom data in lieu of the handler


      if (handler.handler) {
        handleObjIn = handler;
        handler = handleObjIn.handler;
        selector = handleObjIn.selector;
      } // Ensure that invalid selectors throw exceptions at attach time
      // Evaluate against documentElement in case elem is a non-element node (e.g., document)


      if (selector) {
        jQuery.find.matchesSelector(documentElement, selector);
      } // Make sure that the handler has a unique ID, used to find/remove it later


      if (!handler.guid) {
        handler.guid = jQuery.guid++;
      } // Init the element's event structure and main handler, if this is the first


      if (!(events = elemData.events)) {
        events = elemData.events = {};
      }

      if (!(eventHandle = elemData.handle)) {
        eventHandle = elemData.handle = function (e) {
          // Discard the second event of a jQuery.event.trigger() and
          // when an event is called after a page has unloaded
          return typeof jQuery !== "undefined" && jQuery.event.triggered !== e.type ? jQuery.event.dispatch.apply(elem, arguments) : undefined;
        };
      } // Handle multiple events separated by a space


      types = (types || "").match(rnothtmlwhite) || [""];
      t = types.length;

      while (t--) {
        tmp = rtypenamespace.exec(types[t]) || [];
        type = origType = tmp[1];
        namespaces = (tmp[2] || "").split(".").sort(); // There *must* be a type, no attaching namespace-only handlers

        if (!type) {
          continue;
        } // If event changes its type, use the special event handlers for the changed type


        special = jQuery.event.special[type] || {}; // If selector defined, determine special event api type, otherwise given type

        type = (selector ? special.delegateType : special.bindType) || type; // Update special based on newly reset type

        special = jQuery.event.special[type] || {}; // handleObj is passed to all event handlers

        handleObj = jQuery.extend({
          type: type,
          origType: origType,
          data: data,
          handler: handler,
          guid: handler.guid,
          selector: selector,
          needsContext: selector && jQuery.expr.match.needsContext.test(selector),
          namespace: namespaces.join(".")
        }, handleObjIn); // Init the event handler queue if we're the first

        if (!(handlers = events[type])) {
          handlers = events[type] = [];
          handlers.delegateCount = 0; // Only use addEventListener if the special events handler returns false

          if (!special.setup || special.setup.call(elem, data, namespaces, eventHandle) === false) {
            if (elem.addEventListener) {
              elem.addEventListener(type, eventHandle);
            }
          }
        }

        if (special.add) {
          special.add.call(elem, handleObj);

          if (!handleObj.handler.guid) {
            handleObj.handler.guid = handler.guid;
          }
        } // Add to the element's handler list, delegates in front


        if (selector) {
          handlers.splice(handlers.delegateCount++, 0, handleObj);
        } else {
          handlers.push(handleObj);
        } // Keep track of which events have ever been used, for event optimization


        jQuery.event.global[type] = true;
      }
    },
    // Detach an event or set of events from an element
    remove: function remove(elem, types, handler, selector, mappedTypes) {
      var j,
          origCount,
          tmp,
          events,
          t,
          handleObj,
          special,
          handlers,
          type,
          namespaces,
          origType,
          elemData = dataPriv.hasData(elem) && dataPriv.get(elem);

      if (!elemData || !(events = elemData.events)) {
        return;
      } // Once for each type.namespace in types; type may be omitted


      types = (types || "").match(rnothtmlwhite) || [""];
      t = types.length;

      while (t--) {
        tmp = rtypenamespace.exec(types[t]) || [];
        type = origType = tmp[1];
        namespaces = (tmp[2] || "").split(".").sort(); // Unbind all events (on this namespace, if provided) for the element

        if (!type) {
          for (type in events) {
            jQuery.event.remove(elem, type + types[t], handler, selector, true);
          }

          continue;
        }

        special = jQuery.event.special[type] || {};
        type = (selector ? special.delegateType : special.bindType) || type;
        handlers = events[type] || [];
        tmp = tmp[2] && new RegExp("(^|\\.)" + namespaces.join("\\.(?:.*\\.|)") + "(\\.|$)"); // Remove matching events

        origCount = j = handlers.length;

        while (j--) {
          handleObj = handlers[j];

          if ((mappedTypes || origType === handleObj.origType) && (!handler || handler.guid === handleObj.guid) && (!tmp || tmp.test(handleObj.namespace)) && (!selector || selector === handleObj.selector || selector === "**" && handleObj.selector)) {
            handlers.splice(j, 1);

            if (handleObj.selector) {
              handlers.delegateCount--;
            }

            if (special.remove) {
              special.remove.call(elem, handleObj);
            }
          }
        } // Remove generic event handler if we removed something and no more handlers exist
        // (avoids potential for endless recursion during removal of special event handlers)


        if (origCount && !handlers.length) {
          if (!special.teardown || special.teardown.call(elem, namespaces, elemData.handle) === false) {
            jQuery.removeEvent(elem, type, elemData.handle);
          }

          delete events[type];
        }
      } // Remove data and the expando if it's no longer used


      if (jQuery.isEmptyObject(events)) {
        dataPriv.remove(elem, "handle events");
      }
    },
    dispatch: function dispatch(nativeEvent) {
      // Make a writable jQuery.Event from the native event object
      var event = jQuery.event.fix(nativeEvent);
      var i,
          j,
          ret,
          matched,
          handleObj,
          handlerQueue,
          args = new Array(arguments.length),
          handlers = (dataPriv.get(this, "events") || {})[event.type] || [],
          special = jQuery.event.special[event.type] || {}; // Use the fix-ed jQuery.Event rather than the (read-only) native event

      args[0] = event;

      for (i = 1; i < arguments.length; i++) {
        args[i] = arguments[i];
      }

      event.delegateTarget = this; // Call the preDispatch hook for the mapped type, and let it bail if desired

      if (special.preDispatch && special.preDispatch.call(this, event) === false) {
        return;
      } // Determine handlers


      handlerQueue = jQuery.event.handlers.call(this, event, handlers); // Run delegates first; they may want to stop propagation beneath us

      i = 0;

      while ((matched = handlerQueue[i++]) && !event.isPropagationStopped()) {
        event.currentTarget = matched.elem;
        j = 0;

        while ((handleObj = matched.handlers[j++]) && !event.isImmediatePropagationStopped()) {
          // If the event is namespaced, then each handler is only invoked if it is
          // specially universal or its namespaces are a superset of the event's.
          if (!event.rnamespace || handleObj.namespace === false || event.rnamespace.test(handleObj.namespace)) {
            event.handleObj = handleObj;
            event.data = handleObj.data;
            ret = ((jQuery.event.special[handleObj.origType] || {}).handle || handleObj.handler).apply(matched.elem, args);

            if (ret !== undefined) {
              if ((event.result = ret) === false) {
                event.preventDefault();
                event.stopPropagation();
              }
            }
          }
        }
      } // Call the postDispatch hook for the mapped type


      if (special.postDispatch) {
        special.postDispatch.call(this, event);
      }

      return event.result;
    },
    handlers: function handlers(event, _handlers) {
      var i,
          handleObj,
          sel,
          matchedHandlers,
          matchedSelectors,
          handlerQueue = [],
          delegateCount = _handlers.delegateCount,
          cur = event.target; // Find delegate handlers

      if (delegateCount && // Support: IE <=9
      // Black-hole SVG <use> instance trees (trac-13180)
      cur.nodeType && // Support: Firefox <=42
      // Suppress spec-violating clicks indicating a non-primary pointer button (trac-3861)
      // https://www.w3.org/TR/DOM-Level-3-Events/#event-type-click
      // Support: IE 11 only
      // ...but not arrow key "clicks" of radio inputs, which can have `button` -1 (gh-2343)
      !(event.type === "click" && event.button >= 1)) {
        for (; cur !== this; cur = cur.parentNode || this) {
          // Don't check non-elements (#13208)
          // Don't process clicks on disabled elements (#6911, #8165, #11382, #11764)
          if (cur.nodeType === 1 && !(event.type === "click" && cur.disabled === true)) {
            matchedHandlers = [];
            matchedSelectors = {};

            for (i = 0; i < delegateCount; i++) {
              handleObj = _handlers[i]; // Don't conflict with Object.prototype properties (#13203)

              sel = handleObj.selector + " ";

              if (matchedSelectors[sel] === undefined) {
                matchedSelectors[sel] = handleObj.needsContext ? jQuery(sel, this).index(cur) > -1 : jQuery.find(sel, this, null, [cur]).length;
              }

              if (matchedSelectors[sel]) {
                matchedHandlers.push(handleObj);
              }
            }

            if (matchedHandlers.length) {
              handlerQueue.push({
                elem: cur,
                handlers: matchedHandlers
              });
            }
          }
        }
      } // Add the remaining (directly-bound) handlers


      cur = this;

      if (delegateCount < _handlers.length) {
        handlerQueue.push({
          elem: cur,
          handlers: _handlers.slice(delegateCount)
        });
      }

      return handlerQueue;
    },
    addProp: function addProp(name, hook) {
      Object.defineProperty(jQuery.Event.prototype, name, {
        enumerable: true,
        configurable: true,
        get: isFunction(hook) ? function () {
          if (this.originalEvent) {
            return hook(this.originalEvent);
          }
        } : function () {
          if (this.originalEvent) {
            return this.originalEvent[name];
          }
        },
        set: function set(value) {
          Object.defineProperty(this, name, {
            enumerable: true,
            configurable: true,
            writable: true,
            value: value
          });
        }
      });
    },
    fix: function fix(originalEvent) {
      return originalEvent[jQuery.expando] ? originalEvent : new jQuery.Event(originalEvent);
    },
    special: {
      load: {
        // Prevent triggered image.load events from bubbling to window.load
        noBubble: true
      },
      click: {
        // Utilize native event to ensure correct state for checkable inputs
        setup: function setup(data) {
          // For mutual compressibility with _default, replace `this` access with a local var.
          // `|| data` is dead code meant only to preserve the variable through minification.
          var el = this || data; // Claim the first handler

          if (rcheckableType.test(el.type) && el.click && nodeName(el, "input")) {
            // dataPriv.set( el, "click", ... )
            leverageNative(el, "click", returnTrue);
          } // Return false to allow normal processing in the caller


          return false;
        },
        trigger: function trigger(data) {
          // For mutual compressibility with _default, replace `this` access with a local var.
          // `|| data` is dead code meant only to preserve the variable through minification.
          var el = this || data; // Force setup before triggering a click

          if (rcheckableType.test(el.type) && el.click && nodeName(el, "input")) {
            leverageNative(el, "click");
          } // Return non-false to allow normal event-path propagation


          return true;
        },
        // For cross-browser consistency, suppress native .click() on links
        // Also prevent it if we're currently inside a leveraged native-event stack
        _default: function _default(event) {
          var target = event.target;
          return rcheckableType.test(target.type) && target.click && nodeName(target, "input") && dataPriv.get(target, "click") || nodeName(target, "a");
        }
      },
      beforeunload: {
        postDispatch: function postDispatch(event) {
          // Support: Firefox 20+
          // Firefox doesn't alert if the returnValue field is not set.
          if (event.result !== undefined && event.originalEvent) {
            event.originalEvent.returnValue = event.result;
          }
        }
      }
    }
  }; // Ensure the presence of an event listener that handles manually-triggered
  // synthetic events by interrupting progress until reinvoked in response to
  // *native* events that it fires directly, ensuring that state changes have
  // already occurred before other listeners are invoked.

  function leverageNative(el, type, expectSync) {
    // Missing expectSync indicates a trigger call, which must force setup through jQuery.event.add
    if (!expectSync) {
      if (dataPriv.get(el, type) === undefined) {
        jQuery.event.add(el, type, returnTrue);
      }

      return;
    } // Register the controller as a special universal handler for all event namespaces


    dataPriv.set(el, type, false);
    jQuery.event.add(el, type, {
      namespace: false,
      handler: function handler(event) {
        var notAsync,
            result,
            saved = dataPriv.get(this, type);

        if (event.isTrigger & 1 && this[type]) {
          // Interrupt processing of the outer synthetic .trigger()ed event
          // Saved data should be false in such cases, but might be a leftover capture object
          // from an async native handler (gh-4350)
          if (!saved.length) {
            // Store arguments for use when handling the inner native event
            // There will always be at least one argument (an event object), so this array
            // will not be confused with a leftover capture object.
            saved = _slice.call(arguments);
            dataPriv.set(this, type, saved); // Trigger the native event and capture its result
            // Support: IE <=9 - 11+
            // focus() and blur() are asynchronous

            notAsync = expectSync(this, type);
            this[type]();
            result = dataPriv.get(this, type);

            if (saved !== result || notAsync) {
              dataPriv.set(this, type, false);
            } else {
              result = {};
            }

            if (saved !== result) {
              // Cancel the outer synthetic event
              event.stopImmediatePropagation();
              event.preventDefault();
              return result.value;
            } // If this is an inner synthetic event for an event with a bubbling surrogate
            // (focus or blur), assume that the surrogate already propagated from triggering the
            // native event and prevent that from happening again here.
            // This technically gets the ordering wrong w.r.t. to `.trigger()` (in which the
            // bubbling surrogate propagates *after* the non-bubbling base), but that seems
            // less bad than duplication.

          } else if ((jQuery.event.special[type] || {}).delegateType) {
            event.stopPropagation();
          } // If this is a native event triggered above, everything is now in order
          // Fire an inner synthetic event with the original arguments

        } else if (saved.length) {
          // ...and capture the result
          dataPriv.set(this, type, {
            value: jQuery.event.trigger( // Support: IE <=9 - 11+
            // Extend with the prototype to reset the above stopImmediatePropagation()
            jQuery.extend(saved[0], jQuery.Event.prototype), saved.slice(1), this)
          }); // Abort handling of the native event

          event.stopImmediatePropagation();
        }
      }
    });
  }

  jQuery.removeEvent = function (elem, type, handle) {
    // This "if" is needed for plain objects
    if (elem.removeEventListener) {
      elem.removeEventListener(type, handle);
    }
  };

  jQuery.Event = function (src, props) {
    // Allow instantiation without the 'new' keyword
    if (!(this instanceof jQuery.Event)) {
      return new jQuery.Event(src, props);
    } // Event object


    if (src && src.type) {
      this.originalEvent = src;
      this.type = src.type; // Events bubbling up the document may have been marked as prevented
      // by a handler lower down the tree; reflect the correct value.

      this.isDefaultPrevented = src.defaultPrevented || src.defaultPrevented === undefined && // Support: Android <=2.3 only
      src.returnValue === false ? returnTrue : returnFalse; // Create target properties
      // Support: Safari <=6 - 7 only
      // Target should not be a text node (#504, #13143)

      this.target = src.target && src.target.nodeType === 3 ? src.target.parentNode : src.target;
      this.currentTarget = src.currentTarget;
      this.relatedTarget = src.relatedTarget; // Event type
    } else {
      this.type = src;
    } // Put explicitly provided properties onto the event object


    if (props) {
      jQuery.extend(this, props);
    } // Create a timestamp if incoming event doesn't have one


    this.timeStamp = src && src.timeStamp || Date.now(); // Mark it as fixed

    this[jQuery.expando] = true;
  }; // jQuery.Event is based on DOM3 Events as specified by the ECMAScript Language Binding
  // https://www.w3.org/TR/2003/WD-DOM-Level-3-Events-20030331/ecma-script-binding.html


  jQuery.Event.prototype = {
    constructor: jQuery.Event,
    isDefaultPrevented: returnFalse,
    isPropagationStopped: returnFalse,
    isImmediatePropagationStopped: returnFalse,
    isSimulated: false,
    preventDefault: function preventDefault() {
      var e = this.originalEvent;
      this.isDefaultPrevented = returnTrue;

      if (e && !this.isSimulated) {
        e.preventDefault();
      }
    },
    stopPropagation: function stopPropagation() {
      var e = this.originalEvent;
      this.isPropagationStopped = returnTrue;

      if (e && !this.isSimulated) {
        e.stopPropagation();
      }
    },
    stopImmediatePropagation: function stopImmediatePropagation() {
      var e = this.originalEvent;
      this.isImmediatePropagationStopped = returnTrue;

      if (e && !this.isSimulated) {
        e.stopImmediatePropagation();
      }

      this.stopPropagation();
    }
  }; // Includes all common event props including KeyEvent and MouseEvent specific props

  jQuery.each({
    altKey: true,
    bubbles: true,
    cancelable: true,
    changedTouches: true,
    ctrlKey: true,
    detail: true,
    eventPhase: true,
    metaKey: true,
    pageX: true,
    pageY: true,
    shiftKey: true,
    view: true,
    "char": true,
    code: true,
    charCode: true,
    key: true,
    keyCode: true,
    button: true,
    buttons: true,
    clientX: true,
    clientY: true,
    offsetX: true,
    offsetY: true,
    pointerId: true,
    pointerType: true,
    screenX: true,
    screenY: true,
    targetTouches: true,
    toElement: true,
    touches: true,
    which: function which(event) {
      var button = event.button; // Add which for key events

      if (event.which == null && rkeyEvent.test(event.type)) {
        return event.charCode != null ? event.charCode : event.keyCode;
      } // Add which for click: 1 === left; 2 === middle; 3 === right


      if (!event.which && button !== undefined && rmouseEvent.test(event.type)) {
        if (button & 1) {
          return 1;
        }

        if (button & 2) {
          return 3;
        }

        if (button & 4) {
          return 2;
        }

        return 0;
      }

      return event.which;
    }
  }, jQuery.event.addProp);
  jQuery.each({
    focus: "focusin",
    blur: "focusout"
  }, function (type, delegateType) {
    jQuery.event.special[type] = {
      // Utilize native event if possible so blur/focus sequence is correct
      setup: function setup() {
        // Claim the first handler
        // dataPriv.set( this, "focus", ... )
        // dataPriv.set( this, "blur", ... )
        leverageNative(this, type, expectSync); // Return false to allow normal processing in the caller

        return false;
      },
      trigger: function trigger() {
        // Force setup before trigger
        leverageNative(this, type); // Return non-false to allow normal event-path propagation

        return true;
      },
      delegateType: delegateType
    };
  }); // Create mouseenter/leave events using mouseover/out and event-time checks
  // so that event delegation works in jQuery.
  // Do the same for pointerenter/pointerleave and pointerover/pointerout
  //
  // Support: Safari 7 only
  // Safari sends mouseenter too often; see:
  // https://bugs.chromium.org/p/chromium/issues/detail?id=470258
  // for the description of the bug (it existed in older Chrome versions as well).

  jQuery.each({
    mouseenter: "mouseover",
    mouseleave: "mouseout",
    pointerenter: "pointerover",
    pointerleave: "pointerout"
  }, function (orig, fix) {
    jQuery.event.special[orig] = {
      delegateType: fix,
      bindType: fix,
      handle: function handle(event) {
        var ret,
            target = this,
            related = event.relatedTarget,
            handleObj = event.handleObj; // For mouseenter/leave call the handler if related is outside the target.
        // NB: No relatedTarget if the mouse left/entered the browser window

        if (!related || related !== target && !jQuery.contains(target, related)) {
          event.type = handleObj.origType;
          ret = handleObj.handler.apply(this, arguments);
          event.type = fix;
        }

        return ret;
      }
    };
  });
  jQuery.fn.extend({
    on: function on(types, selector, data, fn) {
      return _on(this, types, selector, data, fn);
    },
    one: function one(types, selector, data, fn) {
      return _on(this, types, selector, data, fn, 1);
    },
    off: function off(types, selector, fn) {
      var handleObj, type;

      if (types && types.preventDefault && types.handleObj) {
        // ( event )  dispatched jQuery.Event
        handleObj = types.handleObj;
        jQuery(types.delegateTarget).off(handleObj.namespace ? handleObj.origType + "." + handleObj.namespace : handleObj.origType, handleObj.selector, handleObj.handler);
        return this;
      }

      if (_typeof(types) === "object") {
        // ( types-object [, selector] )
        for (type in types) {
          this.off(type, selector, types[type]);
        }

        return this;
      }

      if (selector === false || typeof selector === "function") {
        // ( types [, fn] )
        fn = selector;
        selector = undefined;
      }

      if (fn === false) {
        fn = returnFalse;
      }

      return this.each(function () {
        jQuery.event.remove(this, types, fn, selector);
      });
    }
  });
  var
  /* eslint-disable max-len */
  // See https://github.com/eslint/eslint/issues/3229
  rxhtmlTag = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,

  /* eslint-enable */
  // Support: IE <=10 - 11, Edge 12 - 13 only
  // In IE/Edge using regex groups here causes severe slowdowns.
  // See https://connect.microsoft.com/IE/feedback/details/1736512/
  rnoInnerhtml = /<script|<style|<link/i,
      // checked="checked" or checked
  rchecked = /checked\s*(?:[^=]|=\s*.checked.)/i,
      rcleanScript = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g; // Prefer a tbody over its parent table for containing new rows

  function manipulationTarget(elem, content) {
    if (nodeName(elem, "table") && nodeName(content.nodeType !== 11 ? content : content.firstChild, "tr")) {
      return jQuery(elem).children("tbody")[0] || elem;
    }

    return elem;
  } // Replace/restore the type attribute of script elements for safe DOM manipulation


  function disableScript(elem) {
    elem.type = (elem.getAttribute("type") !== null) + "/" + elem.type;
    return elem;
  }

  function restoreScript(elem) {
    if ((elem.type || "").slice(0, 5) === "true/") {
      elem.type = elem.type.slice(5);
    } else {
      elem.removeAttribute("type");
    }

    return elem;
  }

  function cloneCopyEvent(src, dest) {
    var i, l, type, pdataOld, pdataCur, udataOld, udataCur, events;

    if (dest.nodeType !== 1) {
      return;
    } // 1. Copy private data: events, handlers, etc.


    if (dataPriv.hasData(src)) {
      pdataOld = dataPriv.access(src);
      pdataCur = dataPriv.set(dest, pdataOld);
      events = pdataOld.events;

      if (events) {
        delete pdataCur.handle;
        pdataCur.events = {};

        for (type in events) {
          for (i = 0, l = events[type].length; i < l; i++) {
            jQuery.event.add(dest, type, events[type][i]);
          }
        }
      }
    } // 2. Copy user data


    if (dataUser.hasData(src)) {
      udataOld = dataUser.access(src);
      udataCur = jQuery.extend({}, udataOld);
      dataUser.set(dest, udataCur);
    }
  } // Fix IE bugs, see support tests


  function fixInput(src, dest) {
    var nodeName = dest.nodeName.toLowerCase(); // Fails to persist the checked state of a cloned checkbox or radio button.

    if (nodeName === "input" && rcheckableType.test(src.type)) {
      dest.checked = src.checked; // Fails to return the selected option to the default selected state when cloning options
    } else if (nodeName === "input" || nodeName === "textarea") {
      dest.defaultValue = src.defaultValue;
    }
  }

  function domManip(collection, args, callback, ignored) {
    // Flatten any nested arrays
    args = concat.apply([], args);
    var fragment,
        first,
        scripts,
        hasScripts,
        node,
        doc,
        i = 0,
        l = collection.length,
        iNoClone = l - 1,
        value = args[0],
        valueIsFunction = isFunction(value); // We can't cloneNode fragments that contain checked, in WebKit

    if (valueIsFunction || l > 1 && typeof value === "string" && !support.checkClone && rchecked.test(value)) {
      return collection.each(function (index) {
        var self = collection.eq(index);

        if (valueIsFunction) {
          args[0] = value.call(this, index, self.html());
        }

        domManip(self, args, callback, ignored);
      });
    }

    if (l) {
      fragment = buildFragment(args, collection[0].ownerDocument, false, collection, ignored);
      first = fragment.firstChild;

      if (fragment.childNodes.length === 1) {
        fragment = first;
      } // Require either new content or an interest in ignored elements to invoke the callback


      if (first || ignored) {
        scripts = jQuery.map(getAll(fragment, "script"), disableScript);
        hasScripts = scripts.length; // Use the original fragment for the last item
        // instead of the first because it can end up
        // being emptied incorrectly in certain situations (#8070).

        for (; i < l; i++) {
          node = fragment;

          if (i !== iNoClone) {
            node = jQuery.clone(node, true, true); // Keep references to cloned scripts for later restoration

            if (hasScripts) {
              // Support: Android <=4.0 only, PhantomJS 1 only
              // push.apply(_, arraylike) throws on ancient WebKit
              jQuery.merge(scripts, getAll(node, "script"));
            }
          }

          callback.call(collection[i], node, i);
        }

        if (hasScripts) {
          doc = scripts[scripts.length - 1].ownerDocument; // Reenable scripts

          jQuery.map(scripts, restoreScript); // Evaluate executable scripts on first document insertion

          for (i = 0; i < hasScripts; i++) {
            node = scripts[i];

            if (rscriptType.test(node.type || "") && !dataPriv.access(node, "globalEval") && jQuery.contains(doc, node)) {
              if (node.src && (node.type || "").toLowerCase() !== "module") {
                // Optional AJAX dependency, but won't run scripts if not present
                if (jQuery._evalUrl && !node.noModule) {
                  jQuery._evalUrl(node.src, {
                    nonce: node.nonce || node.getAttribute("nonce")
                  });
                }
              } else {
                DOMEval(node.textContent.replace(rcleanScript, ""), node, doc);
              }
            }
          }
        }
      }
    }

    return collection;
  }

  function _remove(elem, selector, keepData) {
    var node,
        nodes = selector ? jQuery.filter(selector, elem) : elem,
        i = 0;

    for (; (node = nodes[i]) != null; i++) {
      if (!keepData && node.nodeType === 1) {
        jQuery.cleanData(getAll(node));
      }

      if (node.parentNode) {
        if (keepData && isAttached(node)) {
          setGlobalEval(getAll(node, "script"));
        }

        node.parentNode.removeChild(node);
      }
    }

    return elem;
  }

  jQuery.extend({
    htmlPrefilter: function htmlPrefilter(html) {
      return html.replace(rxhtmlTag, "<$1></$2>");
    },
    clone: function clone(elem, dataAndEvents, deepDataAndEvents) {
      var i,
          l,
          srcElements,
          destElements,
          clone = elem.cloneNode(true),
          inPage = isAttached(elem); // Fix IE cloning issues

      if (!support.noCloneChecked && (elem.nodeType === 1 || elem.nodeType === 11) && !jQuery.isXMLDoc(elem)) {
        // We eschew Sizzle here for performance reasons: https://jsperf.com/getall-vs-sizzle/2
        destElements = getAll(clone);
        srcElements = getAll(elem);

        for (i = 0, l = srcElements.length; i < l; i++) {
          fixInput(srcElements[i], destElements[i]);
        }
      } // Copy the events from the original to the clone


      if (dataAndEvents) {
        if (deepDataAndEvents) {
          srcElements = srcElements || getAll(elem);
          destElements = destElements || getAll(clone);

          for (i = 0, l = srcElements.length; i < l; i++) {
            cloneCopyEvent(srcElements[i], destElements[i]);
          }
        } else {
          cloneCopyEvent(elem, clone);
        }
      } // Preserve script evaluation history


      destElements = getAll(clone, "script");

      if (destElements.length > 0) {
        setGlobalEval(destElements, !inPage && getAll(elem, "script"));
      } // Return the cloned set


      return clone;
    },
    cleanData: function cleanData(elems) {
      var data,
          elem,
          type,
          special = jQuery.event.special,
          i = 0;

      for (; (elem = elems[i]) !== undefined; i++) {
        if (acceptData(elem)) {
          if (data = elem[dataPriv.expando]) {
            if (data.events) {
              for (type in data.events) {
                if (special[type]) {
                  jQuery.event.remove(elem, type); // This is a shortcut to avoid jQuery.event.remove's overhead
                } else {
                  jQuery.removeEvent(elem, type, data.handle);
                }
              }
            } // Support: Chrome <=35 - 45+
            // Assign undefined instead of using delete, see Data#remove


            elem[dataPriv.expando] = undefined;
          }

          if (elem[dataUser.expando]) {
            // Support: Chrome <=35 - 45+
            // Assign undefined instead of using delete, see Data#remove
            elem[dataUser.expando] = undefined;
          }
        }
      }
    }
  });
  jQuery.fn.extend({
    detach: function detach(selector) {
      return _remove(this, selector, true);
    },
    remove: function remove(selector) {
      return _remove(this, selector);
    },
    text: function text(value) {
      return access(this, function (value) {
        return value === undefined ? jQuery.text(this) : this.empty().each(function () {
          if (this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9) {
            this.textContent = value;
          }
        });
      }, null, value, arguments.length);
    },
    append: function append() {
      return domManip(this, arguments, function (elem) {
        if (this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9) {
          var target = manipulationTarget(this, elem);
          target.appendChild(elem);
        }
      });
    },
    prepend: function prepend() {
      return domManip(this, arguments, function (elem) {
        if (this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9) {
          var target = manipulationTarget(this, elem);
          target.insertBefore(elem, target.firstChild);
        }
      });
    },
    before: function before() {
      return domManip(this, arguments, function (elem) {
        if (this.parentNode) {
          this.parentNode.insertBefore(elem, this);
        }
      });
    },
    after: function after() {
      return domManip(this, arguments, function (elem) {
        if (this.parentNode) {
          this.parentNode.insertBefore(elem, this.nextSibling);
        }
      });
    },
    empty: function empty() {
      var elem,
          i = 0;

      for (; (elem = this[i]) != null; i++) {
        if (elem.nodeType === 1) {
          // Prevent memory leaks
          jQuery.cleanData(getAll(elem, false)); // Remove any remaining nodes

          elem.textContent = "";
        }
      }

      return this;
    },
    clone: function clone(dataAndEvents, deepDataAndEvents) {
      dataAndEvents = dataAndEvents == null ? false : dataAndEvents;
      deepDataAndEvents = deepDataAndEvents == null ? dataAndEvents : deepDataAndEvents;
      return this.map(function () {
        return jQuery.clone(this, dataAndEvents, deepDataAndEvents);
      });
    },
    html: function html(value) {
      return access(this, function (value) {
        var elem = this[0] || {},
            i = 0,
            l = this.length;

        if (value === undefined && elem.nodeType === 1) {
          return elem.innerHTML;
        } // See if we can take a shortcut and just use innerHTML


        if (typeof value === "string" && !rnoInnerhtml.test(value) && !wrapMap[(rtagName.exec(value) || ["", ""])[1].toLowerCase()]) {
          value = jQuery.htmlPrefilter(value);

          try {
            for (; i < l; i++) {
              elem = this[i] || {}; // Remove element nodes and prevent memory leaks

              if (elem.nodeType === 1) {
                jQuery.cleanData(getAll(elem, false));
                elem.innerHTML = value;
              }
            }

            elem = 0; // If using innerHTML throws an exception, use the fallback method
          } catch (e) {}
        }

        if (elem) {
          this.empty().append(value);
        }
      }, null, value, arguments.length);
    },
    replaceWith: function replaceWith() {
      var ignored = []; // Make the changes, replacing each non-ignored context element with the new content

      return domManip(this, arguments, function (elem) {
        var parent = this.parentNode;

        if (jQuery.inArray(this, ignored) < 0) {
          jQuery.cleanData(getAll(this));

          if (parent) {
            parent.replaceChild(elem, this);
          }
        } // Force callback invocation

      }, ignored);
    }
  });
  jQuery.each({
    appendTo: "append",
    prependTo: "prepend",
    insertBefore: "before",
    insertAfter: "after",
    replaceAll: "replaceWith"
  }, function (name, original) {
    jQuery.fn[name] = function (selector) {
      var elems,
          ret = [],
          insert = jQuery(selector),
          last = insert.length - 1,
          i = 0;

      for (; i <= last; i++) {
        elems = i === last ? this : this.clone(true);
        jQuery(insert[i])[original](elems); // Support: Android <=4.0 only, PhantomJS 1 only
        // .get() because push.apply(_, arraylike) throws on ancient WebKit

        push.apply(ret, elems.get());
      }

      return this.pushStack(ret);
    };
  });
  var rnumnonpx = new RegExp("^(" + pnum + ")(?!px)[a-z%]+$", "i");

  var getStyles = function getStyles(elem) {
    // Support: IE <=11 only, Firefox <=30 (#15098, #14150)
    // IE throws on elements created in popups
    // FF meanwhile throws on frame elements through "defaultView.getComputedStyle"
    var view = elem.ownerDocument.defaultView;

    if (!view || !view.opener) {
      view = window;
    }

    return view.getComputedStyle(elem);
  };

  var rboxStyle = new RegExp(cssExpand.join("|"), "i");

  (function () {
    // Executing both pixelPosition & boxSizingReliable tests require only one layout
    // so they're executed at the same time to save the second computation.
    function computeStyleTests() {
      // This is a singleton, we need to execute it only once
      if (!div) {
        return;
      }

      container.style.cssText = "position:absolute;left:-11111px;width:60px;" + "margin-top:1px;padding:0;border:0";
      div.style.cssText = "position:relative;display:block;box-sizing:border-box;overflow:scroll;" + "margin:auto;border:1px;padding:1px;" + "width:60%;top:1%";
      documentElement.appendChild(container).appendChild(div);
      var divStyle = window.getComputedStyle(div);
      pixelPositionVal = divStyle.top !== "1%"; // Support: Android 4.0 - 4.3 only, Firefox <=3 - 44

      reliableMarginLeftVal = roundPixelMeasures(divStyle.marginLeft) === 12; // Support: Android 4.0 - 4.3 only, Safari <=9.1 - 10.1, iOS <=7.0 - 9.3
      // Some styles come back with percentage values, even though they shouldn't

      div.style.right = "60%";
      pixelBoxStylesVal = roundPixelMeasures(divStyle.right) === 36; // Support: IE 9 - 11 only
      // Detect misreporting of content dimensions for box-sizing:border-box elements

      boxSizingReliableVal = roundPixelMeasures(divStyle.width) === 36; // Support: IE 9 only
      // Detect overflow:scroll screwiness (gh-3699)
      // Support: Chrome <=64
      // Don't get tricked when zoom affects offsetWidth (gh-4029)

      div.style.position = "absolute";
      scrollboxSizeVal = roundPixelMeasures(div.offsetWidth / 3) === 12;
      documentElement.removeChild(container); // Nullify the div so it wouldn't be stored in the memory and
      // it will also be a sign that checks already performed

      div = null;
    }

    function roundPixelMeasures(measure) {
      return Math.round(parseFloat(measure));
    }

    var pixelPositionVal,
        boxSizingReliableVal,
        scrollboxSizeVal,
        pixelBoxStylesVal,
        reliableMarginLeftVal,
        container = document.createElement("div"),
        div = document.createElement("div"); // Finish early in limited (non-browser) environments

    if (!div.style) {
      return;
    } // Support: IE <=9 - 11 only
    // Style of cloned element affects source element cloned (#8908)


    div.style.backgroundClip = "content-box";
    div.cloneNode(true).style.backgroundClip = "";
    support.clearCloneStyle = div.style.backgroundClip === "content-box";
    jQuery.extend(support, {
      boxSizingReliable: function boxSizingReliable() {
        computeStyleTests();
        return boxSizingReliableVal;
      },
      pixelBoxStyles: function pixelBoxStyles() {
        computeStyleTests();
        return pixelBoxStylesVal;
      },
      pixelPosition: function pixelPosition() {
        computeStyleTests();
        return pixelPositionVal;
      },
      reliableMarginLeft: function reliableMarginLeft() {
        computeStyleTests();
        return reliableMarginLeftVal;
      },
      scrollboxSize: function scrollboxSize() {
        computeStyleTests();
        return scrollboxSizeVal;
      }
    });
  })();

  function curCSS(elem, name, computed) {
    var width,
        minWidth,
        maxWidth,
        ret,
        // Support: Firefox 51+
    // Retrieving style before computed somehow
    // fixes an issue with getting wrong values
    // on detached elements
    style = elem.style;
    computed = computed || getStyles(elem); // getPropertyValue is needed for:
    //   .css('filter') (IE 9 only, #12537)
    //   .css('--customProperty) (#3144)

    if (computed) {
      ret = computed.getPropertyValue(name) || computed[name];

      if (ret === "" && !isAttached(elem)) {
        ret = jQuery.style(elem, name);
      } // A tribute to the "awesome hack by Dean Edwards"
      // Android Browser returns percentage for some values,
      // but width seems to be reliably pixels.
      // This is against the CSSOM draft spec:
      // https://drafts.csswg.org/cssom/#resolved-values


      if (!support.pixelBoxStyles() && rnumnonpx.test(ret) && rboxStyle.test(name)) {
        // Remember the original values
        width = style.width;
        minWidth = style.minWidth;
        maxWidth = style.maxWidth; // Put in the new values to get a computed value out

        style.minWidth = style.maxWidth = style.width = ret;
        ret = computed.width; // Revert the changed values

        style.width = width;
        style.minWidth = minWidth;
        style.maxWidth = maxWidth;
      }
    }

    return ret !== undefined ? // Support: IE <=9 - 11 only
    // IE returns zIndex value as an integer.
    ret + "" : ret;
  }

  function addGetHookIf(conditionFn, hookFn) {
    // Define the hook, we'll check on the first run if it's really needed.
    return {
      get: function get() {
        if (conditionFn()) {
          // Hook not needed (or it's not possible to use it due
          // to missing dependency), remove it.
          delete this.get;
          return;
        } // Hook needed; redefine it so that the support test is not executed again.


        return (this.get = hookFn).apply(this, arguments);
      }
    };
  }

  var cssPrefixes = ["Webkit", "Moz", "ms"],
      emptyStyle = document.createElement("div").style,
      vendorProps = {}; // Return a vendor-prefixed property or undefined

  function vendorPropName(name) {
    // Check for vendor prefixed names
    var capName = name[0].toUpperCase() + name.slice(1),
        i = cssPrefixes.length;

    while (i--) {
      name = cssPrefixes[i] + capName;

      if (name in emptyStyle) {
        return name;
      }
    }
  } // Return a potentially-mapped jQuery.cssProps or vendor prefixed property


  function finalPropName(name) {
    var _final = jQuery.cssProps[name] || vendorProps[name];

    if (_final) {
      return _final;
    }

    if (name in emptyStyle) {
      return name;
    }

    return vendorProps[name] = vendorPropName(name) || name;
  }

  var // Swappable if display is none or starts with table
  // except "table", "table-cell", or "table-caption"
  // See here for display values: https://developer.mozilla.org/en-US/docs/CSS/display
  rdisplayswap = /^(none|table(?!-c[ea]).+)/,
      rcustomProp = /^--/,
      cssShow = {
    position: "absolute",
    visibility: "hidden",
    display: "block"
  },
      cssNormalTransform = {
    letterSpacing: "0",
    fontWeight: "400"
  };

  function setPositiveNumber(elem, value, subtract) {
    // Any relative (+/-) values have already been
    // normalized at this point
    var matches = rcssNum.exec(value);
    return matches ? // Guard against undefined "subtract", e.g., when used as in cssHooks
    Math.max(0, matches[2] - (subtract || 0)) + (matches[3] || "px") : value;
  }

  function boxModelAdjustment(elem, dimension, box, isBorderBox, styles, computedVal) {
    var i = dimension === "width" ? 1 : 0,
        extra = 0,
        delta = 0; // Adjustment may not be necessary

    if (box === (isBorderBox ? "border" : "content")) {
      return 0;
    }

    for (; i < 4; i += 2) {
      // Both box models exclude margin
      if (box === "margin") {
        delta += jQuery.css(elem, box + cssExpand[i], true, styles);
      } // If we get here with a content-box, we're seeking "padding" or "border" or "margin"


      if (!isBorderBox) {
        // Add padding
        delta += jQuery.css(elem, "padding" + cssExpand[i], true, styles); // For "border" or "margin", add border

        if (box !== "padding") {
          delta += jQuery.css(elem, "border" + cssExpand[i] + "Width", true, styles); // But still keep track of it otherwise
        } else {
          extra += jQuery.css(elem, "border" + cssExpand[i] + "Width", true, styles);
        } // If we get here with a border-box (content + padding + border), we're seeking "content" or
        // "padding" or "margin"

      } else {
        // For "content", subtract padding
        if (box === "content") {
          delta -= jQuery.css(elem, "padding" + cssExpand[i], true, styles);
        } // For "content" or "padding", subtract border


        if (box !== "margin") {
          delta -= jQuery.css(elem, "border" + cssExpand[i] + "Width", true, styles);
        }
      }
    } // Account for positive content-box scroll gutter when requested by providing computedVal


    if (!isBorderBox && computedVal >= 0) {
      // offsetWidth/offsetHeight is a rounded sum of content, padding, scroll gutter, and border
      // Assuming integer scroll gutter, subtract the rest and round down
      delta += Math.max(0, Math.ceil(elem["offset" + dimension[0].toUpperCase() + dimension.slice(1)] - computedVal - delta - extra - 0.5 // If offsetWidth/offsetHeight is unknown, then we can't determine content-box scroll gutter
      // Use an explicit zero to avoid NaN (gh-3964)
      )) || 0;
    }

    return delta;
  }

  function getWidthOrHeight(elem, dimension, extra) {
    // Start with computed style
    var styles = getStyles(elem),
        // To avoid forcing a reflow, only fetch boxSizing if we need it (gh-4322).
    // Fake content-box until we know it's needed to know the true value.
    boxSizingNeeded = !support.boxSizingReliable() || extra,
        isBorderBox = boxSizingNeeded && jQuery.css(elem, "boxSizing", false, styles) === "border-box",
        valueIsBorderBox = isBorderBox,
        val = curCSS(elem, dimension, styles),
        offsetProp = "offset" + dimension[0].toUpperCase() + dimension.slice(1); // Support: Firefox <=54
    // Return a confounding non-pixel value or feign ignorance, as appropriate.

    if (rnumnonpx.test(val)) {
      if (!extra) {
        return val;
      }

      val = "auto";
    } // Fall back to offsetWidth/offsetHeight when value is "auto"
    // This happens for inline elements with no explicit setting (gh-3571)
    // Support: Android <=4.1 - 4.3 only
    // Also use offsetWidth/offsetHeight for misreported inline dimensions (gh-3602)
    // Support: IE 9-11 only
    // Also use offsetWidth/offsetHeight for when box sizing is unreliable
    // We use getClientRects() to check for hidden/disconnected.
    // In those cases, the computed value can be trusted to be border-box


    if ((!support.boxSizingReliable() && isBorderBox || val === "auto" || !parseFloat(val) && jQuery.css(elem, "display", false, styles) === "inline") && elem.getClientRects().length) {
      isBorderBox = jQuery.css(elem, "boxSizing", false, styles) === "border-box"; // Where available, offsetWidth/offsetHeight approximate border box dimensions.
      // Where not available (e.g., SVG), assume unreliable box-sizing and interpret the
      // retrieved value as a content box dimension.

      valueIsBorderBox = offsetProp in elem;

      if (valueIsBorderBox) {
        val = elem[offsetProp];
      }
    } // Normalize "" and auto


    val = parseFloat(val) || 0; // Adjust for the element's box model

    return val + boxModelAdjustment(elem, dimension, extra || (isBorderBox ? "border" : "content"), valueIsBorderBox, styles, // Provide the current computed size to request scroll gutter calculation (gh-3589)
    val) + "px";
  }

  jQuery.extend({
    // Add in style property hooks for overriding the default
    // behavior of getting and setting a style property
    cssHooks: {
      opacity: {
        get: function get(elem, computed) {
          if (computed) {
            // We should always get a number back from opacity
            var ret = curCSS(elem, "opacity");
            return ret === "" ? "1" : ret;
          }
        }
      }
    },
    // Don't automatically add "px" to these possibly-unitless properties
    cssNumber: {
      "animationIterationCount": true,
      "columnCount": true,
      "fillOpacity": true,
      "flexGrow": true,
      "flexShrink": true,
      "fontWeight": true,
      "gridArea": true,
      "gridColumn": true,
      "gridColumnEnd": true,
      "gridColumnStart": true,
      "gridRow": true,
      "gridRowEnd": true,
      "gridRowStart": true,
      "lineHeight": true,
      "opacity": true,
      "order": true,
      "orphans": true,
      "widows": true,
      "zIndex": true,
      "zoom": true
    },
    // Add in properties whose names you wish to fix before
    // setting or getting the value
    cssProps: {},
    // Get and set the style property on a DOM Node
    style: function style(elem, name, value, extra) {
      // Don't set styles on text and comment nodes
      if (!elem || elem.nodeType === 3 || elem.nodeType === 8 || !elem.style) {
        return;
      } // Make sure that we're working with the right name


      var ret,
          type,
          hooks,
          origName = camelCase(name),
          isCustomProp = rcustomProp.test(name),
          style = elem.style; // Make sure that we're working with the right name. We don't
      // want to query the value if it is a CSS custom property
      // since they are user-defined.

      if (!isCustomProp) {
        name = finalPropName(origName);
      } // Gets hook for the prefixed version, then unprefixed version


      hooks = jQuery.cssHooks[name] || jQuery.cssHooks[origName]; // Check if we're setting a value

      if (value !== undefined) {
        type = _typeof(value); // Convert "+=" or "-=" to relative numbers (#7345)

        if (type === "string" && (ret = rcssNum.exec(value)) && ret[1]) {
          value = adjustCSS(elem, name, ret); // Fixes bug #9237

          type = "number";
        } // Make sure that null and NaN values aren't set (#7116)


        if (value == null || value !== value) {
          return;
        } // If a number was passed in, add the unit (except for certain CSS properties)
        // The isCustomProp check can be removed in jQuery 4.0 when we only auto-append
        // "px" to a few hardcoded values.


        if (type === "number" && !isCustomProp) {
          value += ret && ret[3] || (jQuery.cssNumber[origName] ? "" : "px");
        } // background-* props affect original clone's values


        if (!support.clearCloneStyle && value === "" && name.indexOf("background") === 0) {
          style[name] = "inherit";
        } // If a hook was provided, use that value, otherwise just set the specified value


        if (!hooks || !("set" in hooks) || (value = hooks.set(elem, value, extra)) !== undefined) {
          if (isCustomProp) {
            style.setProperty(name, value);
          } else {
            style[name] = value;
          }
        }
      } else {
        // If a hook was provided get the non-computed value from there
        if (hooks && "get" in hooks && (ret = hooks.get(elem, false, extra)) !== undefined) {
          return ret;
        } // Otherwise just get the value from the style object


        return style[name];
      }
    },
    css: function css(elem, name, extra, styles) {
      var val,
          num,
          hooks,
          origName = camelCase(name),
          isCustomProp = rcustomProp.test(name); // Make sure that we're working with the right name. We don't
      // want to modify the value if it is a CSS custom property
      // since they are user-defined.

      if (!isCustomProp) {
        name = finalPropName(origName);
      } // Try prefixed name followed by the unprefixed name


      hooks = jQuery.cssHooks[name] || jQuery.cssHooks[origName]; // If a hook was provided get the computed value from there

      if (hooks && "get" in hooks) {
        val = hooks.get(elem, true, extra);
      } // Otherwise, if a way to get the computed value exists, use that


      if (val === undefined) {
        val = curCSS(elem, name, styles);
      } // Convert "normal" to computed value


      if (val === "normal" && name in cssNormalTransform) {
        val = cssNormalTransform[name];
      } // Make numeric if forced or a qualifier was provided and val looks numeric


      if (extra === "" || extra) {
        num = parseFloat(val);
        return extra === true || isFinite(num) ? num || 0 : val;
      }

      return val;
    }
  });
  jQuery.each(["height", "width"], function (i, dimension) {
    jQuery.cssHooks[dimension] = {
      get: function get(elem, computed, extra) {
        if (computed) {
          // Certain elements can have dimension info if we invisibly show them
          // but it must have a current display style that would benefit
          return rdisplayswap.test(jQuery.css(elem, "display")) && ( // Support: Safari 8+
          // Table columns in Safari have non-zero offsetWidth & zero
          // getBoundingClientRect().width unless display is changed.
          // Support: IE <=11 only
          // Running getBoundingClientRect on a disconnected node
          // in IE throws an error.
          !elem.getClientRects().length || !elem.getBoundingClientRect().width) ? swap(elem, cssShow, function () {
            return getWidthOrHeight(elem, dimension, extra);
          }) : getWidthOrHeight(elem, dimension, extra);
        }
      },
      set: function set(elem, value, extra) {
        var matches,
            styles = getStyles(elem),
            // Only read styles.position if the test has a chance to fail
        // to avoid forcing a reflow.
        scrollboxSizeBuggy = !support.scrollboxSize() && styles.position === "absolute",
            // To avoid forcing a reflow, only fetch boxSizing if we need it (gh-3991)
        boxSizingNeeded = scrollboxSizeBuggy || extra,
            isBorderBox = boxSizingNeeded && jQuery.css(elem, "boxSizing", false, styles) === "border-box",
            subtract = extra ? boxModelAdjustment(elem, dimension, extra, isBorderBox, styles) : 0; // Account for unreliable border-box dimensions by comparing offset* to computed and
        // faking a content-box to get border and padding (gh-3699)

        if (isBorderBox && scrollboxSizeBuggy) {
          subtract -= Math.ceil(elem["offset" + dimension[0].toUpperCase() + dimension.slice(1)] - parseFloat(styles[dimension]) - boxModelAdjustment(elem, dimension, "border", false, styles) - 0.5);
        } // Convert to pixels if value adjustment is needed


        if (subtract && (matches = rcssNum.exec(value)) && (matches[3] || "px") !== "px") {
          elem.style[dimension] = value;
          value = jQuery.css(elem, dimension);
        }

        return setPositiveNumber(elem, value, subtract);
      }
    };
  });
  jQuery.cssHooks.marginLeft = addGetHookIf(support.reliableMarginLeft, function (elem, computed) {
    if (computed) {
      return (parseFloat(curCSS(elem, "marginLeft")) || elem.getBoundingClientRect().left - swap(elem, {
        marginLeft: 0
      }, function () {
        return elem.getBoundingClientRect().left;
      })) + "px";
    }
  }); // These hooks are used by animate to expand properties

  jQuery.each({
    margin: "",
    padding: "",
    border: "Width"
  }, function (prefix, suffix) {
    jQuery.cssHooks[prefix + suffix] = {
      expand: function expand(value) {
        var i = 0,
            expanded = {},
            // Assumes a single number if not a string
        parts = typeof value === "string" ? value.split(" ") : [value];

        for (; i < 4; i++) {
          expanded[prefix + cssExpand[i] + suffix] = parts[i] || parts[i - 2] || parts[0];
        }

        return expanded;
      }
    };

    if (prefix !== "margin") {
      jQuery.cssHooks[prefix + suffix].set = setPositiveNumber;
    }
  });
  jQuery.fn.extend({
    css: function css(name, value) {
      return access(this, function (elem, name, value) {
        var styles,
            len,
            map = {},
            i = 0;

        if (Array.isArray(name)) {
          styles = getStyles(elem);
          len = name.length;

          for (; i < len; i++) {
            map[name[i]] = jQuery.css(elem, name[i], false, styles);
          }

          return map;
        }

        return value !== undefined ? jQuery.style(elem, name, value) : jQuery.css(elem, name);
      }, name, value, arguments.length > 1);
    }
  });

  function Tween(elem, options, prop, end, easing) {
    return new Tween.prototype.init(elem, options, prop, end, easing);
  }

  jQuery.Tween = Tween;
  Tween.prototype = {
    constructor: Tween,
    init: function init(elem, options, prop, end, easing, unit) {
      this.elem = elem;
      this.prop = prop;
      this.easing = easing || jQuery.easing._default;
      this.options = options;
      this.start = this.now = this.cur();
      this.end = end;
      this.unit = unit || (jQuery.cssNumber[prop] ? "" : "px");
    },
    cur: function cur() {
      var hooks = Tween.propHooks[this.prop];
      return hooks && hooks.get ? hooks.get(this) : Tween.propHooks._default.get(this);
    },
    run: function run(percent) {
      var eased,
          hooks = Tween.propHooks[this.prop];

      if (this.options.duration) {
        this.pos = eased = jQuery.easing[this.easing](percent, this.options.duration * percent, 0, 1, this.options.duration);
      } else {
        this.pos = eased = percent;
      }

      this.now = (this.end - this.start) * eased + this.start;

      if (this.options.step) {
        this.options.step.call(this.elem, this.now, this);
      }

      if (hooks && hooks.set) {
        hooks.set(this);
      } else {
        Tween.propHooks._default.set(this);
      }

      return this;
    }
  };
  Tween.prototype.init.prototype = Tween.prototype;
  Tween.propHooks = {
    _default: {
      get: function get(tween) {
        var result; // Use a property on the element directly when it is not a DOM element,
        // or when there is no matching style property that exists.

        if (tween.elem.nodeType !== 1 || tween.elem[tween.prop] != null && tween.elem.style[tween.prop] == null) {
          return tween.elem[tween.prop];
        } // Passing an empty string as a 3rd parameter to .css will automatically
        // attempt a parseFloat and fallback to a string if the parse fails.
        // Simple values such as "10px" are parsed to Float;
        // complex values such as "rotate(1rad)" are returned as-is.


        result = jQuery.css(tween.elem, tween.prop, ""); // Empty strings, null, undefined and "auto" are converted to 0.

        return !result || result === "auto" ? 0 : result;
      },
      set: function set(tween) {
        // Use step hook for back compat.
        // Use cssHook if its there.
        // Use .style if available and use plain properties where available.
        if (jQuery.fx.step[tween.prop]) {
          jQuery.fx.step[tween.prop](tween);
        } else if (tween.elem.nodeType === 1 && (jQuery.cssHooks[tween.prop] || tween.elem.style[finalPropName(tween.prop)] != null)) {
          jQuery.style(tween.elem, tween.prop, tween.now + tween.unit);
        } else {
          tween.elem[tween.prop] = tween.now;
        }
      }
    }
  }; // Support: IE <=9 only
  // Panic based approach to setting things on disconnected nodes

  Tween.propHooks.scrollTop = Tween.propHooks.scrollLeft = {
    set: function set(tween) {
      if (tween.elem.nodeType && tween.elem.parentNode) {
        tween.elem[tween.prop] = tween.now;
      }
    }
  };
  jQuery.easing = {
    linear: function linear(p) {
      return p;
    },
    swing: function swing(p) {
      return 0.5 - Math.cos(p * Math.PI) / 2;
    },
    _default: "swing"
  };
  jQuery.fx = Tween.prototype.init; // Back compat <1.8 extension point

  jQuery.fx.step = {};
  var fxNow,
      inProgress,
      rfxtypes = /^(?:toggle|show|hide)$/,
      rrun = /queueHooks$/;

  function schedule() {
    if (inProgress) {
      if (document.hidden === false && window.requestAnimationFrame) {
        window.requestAnimationFrame(schedule);
      } else {
        window.setTimeout(schedule, jQuery.fx.interval);
      }

      jQuery.fx.tick();
    }
  } // Animations created synchronously will run synchronously


  function createFxNow() {
    window.setTimeout(function () {
      fxNow = undefined;
    });
    return fxNow = Date.now();
  } // Generate parameters to create a standard animation


  function genFx(type, includeWidth) {
    var which,
        i = 0,
        attrs = {
      height: type
    }; // If we include width, step value is 1 to do all cssExpand values,
    // otherwise step value is 2 to skip over Left and Right

    includeWidth = includeWidth ? 1 : 0;

    for (; i < 4; i += 2 - includeWidth) {
      which = cssExpand[i];
      attrs["margin" + which] = attrs["padding" + which] = type;
    }

    if (includeWidth) {
      attrs.opacity = attrs.width = type;
    }

    return attrs;
  }

  function createTween(value, prop, animation) {
    var tween,
        collection = (Animation.tweeners[prop] || []).concat(Animation.tweeners["*"]),
        index = 0,
        length = collection.length;

    for (; index < length; index++) {
      if (tween = collection[index].call(animation, prop, value)) {
        // We're done with this property
        return tween;
      }
    }
  }

  function defaultPrefilter(elem, props, opts) {
    var prop,
        value,
        toggle,
        hooks,
        oldfire,
        propTween,
        restoreDisplay,
        display,
        isBox = "width" in props || "height" in props,
        anim = this,
        orig = {},
        style = elem.style,
        hidden = elem.nodeType && isHiddenWithinTree(elem),
        dataShow = dataPriv.get(elem, "fxshow"); // Queue-skipping animations hijack the fx hooks

    if (!opts.queue) {
      hooks = jQuery._queueHooks(elem, "fx");

      if (hooks.unqueued == null) {
        hooks.unqueued = 0;
        oldfire = hooks.empty.fire;

        hooks.empty.fire = function () {
          if (!hooks.unqueued) {
            oldfire();
          }
        };
      }

      hooks.unqueued++;
      anim.always(function () {
        // Ensure the complete handler is called before this completes
        anim.always(function () {
          hooks.unqueued--;

          if (!jQuery.queue(elem, "fx").length) {
            hooks.empty.fire();
          }
        });
      });
    } // Detect show/hide animations


    for (prop in props) {
      value = props[prop];

      if (rfxtypes.test(value)) {
        delete props[prop];
        toggle = toggle || value === "toggle";

        if (value === (hidden ? "hide" : "show")) {
          // Pretend to be hidden if this is a "show" and
          // there is still data from a stopped show/hide
          if (value === "show" && dataShow && dataShow[prop] !== undefined) {
            hidden = true; // Ignore all other no-op show/hide data
          } else {
            continue;
          }
        }

        orig[prop] = dataShow && dataShow[prop] || jQuery.style(elem, prop);
      }
    } // Bail out if this is a no-op like .hide().hide()


    propTween = !jQuery.isEmptyObject(props);

    if (!propTween && jQuery.isEmptyObject(orig)) {
      return;
    } // Restrict "overflow" and "display" styles during box animations


    if (isBox && elem.nodeType === 1) {
      // Support: IE <=9 - 11, Edge 12 - 15
      // Record all 3 overflow attributes because IE does not infer the shorthand
      // from identically-valued overflowX and overflowY and Edge just mirrors
      // the overflowX value there.
      opts.overflow = [style.overflow, style.overflowX, style.overflowY]; // Identify a display type, preferring old show/hide data over the CSS cascade

      restoreDisplay = dataShow && dataShow.display;

      if (restoreDisplay == null) {
        restoreDisplay = dataPriv.get(elem, "display");
      }

      display = jQuery.css(elem, "display");

      if (display === "none") {
        if (restoreDisplay) {
          display = restoreDisplay;
        } else {
          // Get nonempty value(s) by temporarily forcing visibility
          showHide([elem], true);
          restoreDisplay = elem.style.display || restoreDisplay;
          display = jQuery.css(elem, "display");
          showHide([elem]);
        }
      } // Animate inline elements as inline-block


      if (display === "inline" || display === "inline-block" && restoreDisplay != null) {
        if (jQuery.css(elem, "float") === "none") {
          // Restore the original display value at the end of pure show/hide animations
          if (!propTween) {
            anim.done(function () {
              style.display = restoreDisplay;
            });

            if (restoreDisplay == null) {
              display = style.display;
              restoreDisplay = display === "none" ? "" : display;
            }
          }

          style.display = "inline-block";
        }
      }
    }

    if (opts.overflow) {
      style.overflow = "hidden";
      anim.always(function () {
        style.overflow = opts.overflow[0];
        style.overflowX = opts.overflow[1];
        style.overflowY = opts.overflow[2];
      });
    } // Implement show/hide animations


    propTween = false;

    for (prop in orig) {
      // General show/hide setup for this element animation
      if (!propTween) {
        if (dataShow) {
          if ("hidden" in dataShow) {
            hidden = dataShow.hidden;
          }
        } else {
          dataShow = dataPriv.access(elem, "fxshow", {
            display: restoreDisplay
          });
        } // Store hidden/visible for toggle so `.stop().toggle()` "reverses"


        if (toggle) {
          dataShow.hidden = !hidden;
        } // Show elements before animating them


        if (hidden) {
          showHide([elem], true);
        }
        /* eslint-disable no-loop-func */


        anim.done(function () {
          /* eslint-enable no-loop-func */
          // The final step of a "hide" animation is actually hiding the element
          if (!hidden) {
            showHide([elem]);
          }

          dataPriv.remove(elem, "fxshow");

          for (prop in orig) {
            jQuery.style(elem, prop, orig[prop]);
          }
        });
      } // Per-property setup


      propTween = createTween(hidden ? dataShow[prop] : 0, prop, anim);

      if (!(prop in dataShow)) {
        dataShow[prop] = propTween.start;

        if (hidden) {
          propTween.end = propTween.start;
          propTween.start = 0;
        }
      }
    }
  }

  function propFilter(props, specialEasing) {
    var index, name, easing, value, hooks; // camelCase, specialEasing and expand cssHook pass

    for (index in props) {
      name = camelCase(index);
      easing = specialEasing[name];
      value = props[index];

      if (Array.isArray(value)) {
        easing = value[1];
        value = props[index] = value[0];
      }

      if (index !== name) {
        props[name] = value;
        delete props[index];
      }

      hooks = jQuery.cssHooks[name];

      if (hooks && "expand" in hooks) {
        value = hooks.expand(value);
        delete props[name]; // Not quite $.extend, this won't overwrite existing keys.
        // Reusing 'index' because we have the correct "name"

        for (index in value) {
          if (!(index in props)) {
            props[index] = value[index];
            specialEasing[index] = easing;
          }
        }
      } else {
        specialEasing[name] = easing;
      }
    }
  }

  function Animation(elem, properties, options) {
    var result,
        stopped,
        index = 0,
        length = Animation.prefilters.length,
        deferred = jQuery.Deferred().always(function () {
      // Don't match elem in the :animated selector
      delete tick.elem;
    }),
        tick = function tick() {
      if (stopped) {
        return false;
      }

      var currentTime = fxNow || createFxNow(),
          remaining = Math.max(0, animation.startTime + animation.duration - currentTime),
          // Support: Android 2.3 only
      // Archaic crash bug won't allow us to use `1 - ( 0.5 || 0 )` (#12497)
      temp = remaining / animation.duration || 0,
          percent = 1 - temp,
          index = 0,
          length = animation.tweens.length;

      for (; index < length; index++) {
        animation.tweens[index].run(percent);
      }

      deferred.notifyWith(elem, [animation, percent, remaining]); // If there's more to do, yield

      if (percent < 1 && length) {
        return remaining;
      } // If this was an empty animation, synthesize a final progress notification


      if (!length) {
        deferred.notifyWith(elem, [animation, 1, 0]);
      } // Resolve the animation and report its conclusion


      deferred.resolveWith(elem, [animation]);
      return false;
    },
        animation = deferred.promise({
      elem: elem,
      props: jQuery.extend({}, properties),
      opts: jQuery.extend(true, {
        specialEasing: {},
        easing: jQuery.easing._default
      }, options),
      originalProperties: properties,
      originalOptions: options,
      startTime: fxNow || createFxNow(),
      duration: options.duration,
      tweens: [],
      createTween: function createTween(prop, end) {
        var tween = jQuery.Tween(elem, animation.opts, prop, end, animation.opts.specialEasing[prop] || animation.opts.easing);
        animation.tweens.push(tween);
        return tween;
      },
      stop: function stop(gotoEnd) {
        var index = 0,
            // If we are going to the end, we want to run all the tweens
        // otherwise we skip this part
        length = gotoEnd ? animation.tweens.length : 0;

        if (stopped) {
          return this;
        }

        stopped = true;

        for (; index < length; index++) {
          animation.tweens[index].run(1);
        } // Resolve when we played the last frame; otherwise, reject


        if (gotoEnd) {
          deferred.notifyWith(elem, [animation, 1, 0]);
          deferred.resolveWith(elem, [animation, gotoEnd]);
        } else {
          deferred.rejectWith(elem, [animation, gotoEnd]);
        }

        return this;
      }
    }),
        props = animation.props;

    propFilter(props, animation.opts.specialEasing);

    for (; index < length; index++) {
      result = Animation.prefilters[index].call(animation, elem, props, animation.opts);

      if (result) {
        if (isFunction(result.stop)) {
          jQuery._queueHooks(animation.elem, animation.opts.queue).stop = result.stop.bind(result);
        }

        return result;
      }
    }

    jQuery.map(props, createTween, animation);

    if (isFunction(animation.opts.start)) {
      animation.opts.start.call(elem, animation);
    } // Attach callbacks from options


    animation.progress(animation.opts.progress).done(animation.opts.done, animation.opts.complete).fail(animation.opts.fail).always(animation.opts.always);
    jQuery.fx.timer(jQuery.extend(tick, {
      elem: elem,
      anim: animation,
      queue: animation.opts.queue
    }));
    return animation;
  }

  jQuery.Animation = jQuery.extend(Animation, {
    tweeners: {
      "*": [function (prop, value) {
        var tween = this.createTween(prop, value);
        adjustCSS(tween.elem, prop, rcssNum.exec(value), tween);
        return tween;
      }]
    },
    tweener: function tweener(props, callback) {
      if (isFunction(props)) {
        callback = props;
        props = ["*"];
      } else {
        props = props.match(rnothtmlwhite);
      }

      var prop,
          index = 0,
          length = props.length;

      for (; index < length; index++) {
        prop = props[index];
        Animation.tweeners[prop] = Animation.tweeners[prop] || [];
        Animation.tweeners[prop].unshift(callback);
      }
    },
    prefilters: [defaultPrefilter],
    prefilter: function prefilter(callback, prepend) {
      if (prepend) {
        Animation.prefilters.unshift(callback);
      } else {
        Animation.prefilters.push(callback);
      }
    }
  });

  jQuery.speed = function (speed, easing, fn) {
    var opt = speed && _typeof(speed) === "object" ? jQuery.extend({}, speed) : {
      complete: fn || !fn && easing || isFunction(speed) && speed,
      duration: speed,
      easing: fn && easing || easing && !isFunction(easing) && easing
    }; // Go to the end state if fx are off

    if (jQuery.fx.off) {
      opt.duration = 0;
    } else {
      if (typeof opt.duration !== "number") {
        if (opt.duration in jQuery.fx.speeds) {
          opt.duration = jQuery.fx.speeds[opt.duration];
        } else {
          opt.duration = jQuery.fx.speeds._default;
        }
      }
    } // Normalize opt.queue - true/undefined/null -> "fx"


    if (opt.queue == null || opt.queue === true) {
      opt.queue = "fx";
    } // Queueing


    opt.old = opt.complete;

    opt.complete = function () {
      if (isFunction(opt.old)) {
        opt.old.call(this);
      }

      if (opt.queue) {
        jQuery.dequeue(this, opt.queue);
      }
    };

    return opt;
  };

  jQuery.fn.extend({
    fadeTo: function fadeTo(speed, to, easing, callback) {
      // Show any hidden elements after setting opacity to 0
      return this.filter(isHiddenWithinTree).css("opacity", 0).show() // Animate to the value specified
      .end().animate({
        opacity: to
      }, speed, easing, callback);
    },
    animate: function animate(prop, speed, easing, callback) {
      var empty = jQuery.isEmptyObject(prop),
          optall = jQuery.speed(speed, easing, callback),
          doAnimation = function doAnimation() {
        // Operate on a copy of prop so per-property easing won't be lost
        var anim = Animation(this, jQuery.extend({}, prop), optall); // Empty animations, or finishing resolves immediately

        if (empty || dataPriv.get(this, "finish")) {
          anim.stop(true);
        }
      };

      doAnimation.finish = doAnimation;
      return empty || optall.queue === false ? this.each(doAnimation) : this.queue(optall.queue, doAnimation);
    },
    stop: function stop(type, clearQueue, gotoEnd) {
      var stopQueue = function stopQueue(hooks) {
        var stop = hooks.stop;
        delete hooks.stop;
        stop(gotoEnd);
      };

      if (typeof type !== "string") {
        gotoEnd = clearQueue;
        clearQueue = type;
        type = undefined;
      }

      if (clearQueue && type !== false) {
        this.queue(type || "fx", []);
      }

      return this.each(function () {
        var dequeue = true,
            index = type != null && type + "queueHooks",
            timers = jQuery.timers,
            data = dataPriv.get(this);

        if (index) {
          if (data[index] && data[index].stop) {
            stopQueue(data[index]);
          }
        } else {
          for (index in data) {
            if (data[index] && data[index].stop && rrun.test(index)) {
              stopQueue(data[index]);
            }
          }
        }

        for (index = timers.length; index--;) {
          if (timers[index].elem === this && (type == null || timers[index].queue === type)) {
            timers[index].anim.stop(gotoEnd);
            dequeue = false;
            timers.splice(index, 1);
          }
        } // Start the next in the queue if the last step wasn't forced.
        // Timers currently will call their complete callbacks, which
        // will dequeue but only if they were gotoEnd.


        if (dequeue || !gotoEnd) {
          jQuery.dequeue(this, type);
        }
      });
    },
    finish: function finish(type) {
      if (type !== false) {
        type = type || "fx";
      }

      return this.each(function () {
        var index,
            data = dataPriv.get(this),
            queue = data[type + "queue"],
            hooks = data[type + "queueHooks"],
            timers = jQuery.timers,
            length = queue ? queue.length : 0; // Enable finishing flag on private data

        data.finish = true; // Empty the queue first

        jQuery.queue(this, type, []);

        if (hooks && hooks.stop) {
          hooks.stop.call(this, true);
        } // Look for any active animations, and finish them


        for (index = timers.length; index--;) {
          if (timers[index].elem === this && timers[index].queue === type) {
            timers[index].anim.stop(true);
            timers.splice(index, 1);
          }
        } // Look for any animations in the old queue and finish them


        for (index = 0; index < length; index++) {
          if (queue[index] && queue[index].finish) {
            queue[index].finish.call(this);
          }
        } // Turn off finishing flag


        delete data.finish;
      });
    }
  });
  jQuery.each(["toggle", "show", "hide"], function (i, name) {
    var cssFn = jQuery.fn[name];

    jQuery.fn[name] = function (speed, easing, callback) {
      return speed == null || typeof speed === "boolean" ? cssFn.apply(this, arguments) : this.animate(genFx(name, true), speed, easing, callback);
    };
  }); // Generate shortcuts for custom animations

  jQuery.each({
    slideDown: genFx("show"),
    slideUp: genFx("hide"),
    slideToggle: genFx("toggle"),
    fadeIn: {
      opacity: "show"
    },
    fadeOut: {
      opacity: "hide"
    },
    fadeToggle: {
      opacity: "toggle"
    }
  }, function (name, props) {
    jQuery.fn[name] = function (speed, easing, callback) {
      return this.animate(props, speed, easing, callback);
    };
  });
  jQuery.timers = [];

  jQuery.fx.tick = function () {
    var timer,
        i = 0,
        timers = jQuery.timers;
    fxNow = Date.now();

    for (; i < timers.length; i++) {
      timer = timers[i]; // Run the timer and safely remove it when done (allowing for external removal)

      if (!timer() && timers[i] === timer) {
        timers.splice(i--, 1);
      }
    }

    if (!timers.length) {
      jQuery.fx.stop();
    }

    fxNow = undefined;
  };

  jQuery.fx.timer = function (timer) {
    jQuery.timers.push(timer);
    jQuery.fx.start();
  };

  jQuery.fx.interval = 13;

  jQuery.fx.start = function () {
    if (inProgress) {
      return;
    }

    inProgress = true;
    schedule();
  };

  jQuery.fx.stop = function () {
    inProgress = null;
  };

  jQuery.fx.speeds = {
    slow: 600,
    fast: 200,
    // Default speed
    _default: 400
  }; // Based off of the plugin by Clint Helfers, with permission.
  // https://web.archive.org/web/20100324014747/http://blindsignals.com/index.php/2009/07/jquery-delay/

  jQuery.fn.delay = function (time, type) {
    time = jQuery.fx ? jQuery.fx.speeds[time] || time : time;
    type = type || "fx";
    return this.queue(type, function (next, hooks) {
      var timeout = window.setTimeout(next, time);

      hooks.stop = function () {
        window.clearTimeout(timeout);
      };
    });
  };

  (function () {
    var input = document.createElement("input"),
        select = document.createElement("select"),
        opt = select.appendChild(document.createElement("option"));
    input.type = "checkbox"; // Support: Android <=4.3 only
    // Default value for a checkbox should be "on"

    support.checkOn = input.value !== ""; // Support: IE <=11 only
    // Must access selectedIndex to make default options select

    support.optSelected = opt.selected; // Support: IE <=11 only
    // An input loses its value after becoming a radio

    input = document.createElement("input");
    input.value = "t";
    input.type = "radio";
    support.radioValue = input.value === "t";
  })();

  var boolHook,
      attrHandle = jQuery.expr.attrHandle;
  jQuery.fn.extend({
    attr: function attr(name, value) {
      return access(this, jQuery.attr, name, value, arguments.length > 1);
    },
    removeAttr: function removeAttr(name) {
      return this.each(function () {
        jQuery.removeAttr(this, name);
      });
    }
  });
  jQuery.extend({
    attr: function attr(elem, name, value) {
      var ret,
          hooks,
          nType = elem.nodeType; // Don't get/set attributes on text, comment and attribute nodes

      if (nType === 3 || nType === 8 || nType === 2) {
        return;
      } // Fallback to prop when attributes are not supported


      if (typeof elem.getAttribute === "undefined") {
        return jQuery.prop(elem, name, value);
      } // Attribute hooks are determined by the lowercase version
      // Grab necessary hook if one is defined


      if (nType !== 1 || !jQuery.isXMLDoc(elem)) {
        hooks = jQuery.attrHooks[name.toLowerCase()] || (jQuery.expr.match.bool.test(name) ? boolHook : undefined);
      }

      if (value !== undefined) {
        if (value === null) {
          jQuery.removeAttr(elem, name);
          return;
        }

        if (hooks && "set" in hooks && (ret = hooks.set(elem, value, name)) !== undefined) {
          return ret;
        }

        elem.setAttribute(name, value + "");
        return value;
      }

      if (hooks && "get" in hooks && (ret = hooks.get(elem, name)) !== null) {
        return ret;
      }

      ret = jQuery.find.attr(elem, name); // Non-existent attributes return null, we normalize to undefined

      return ret == null ? undefined : ret;
    },
    attrHooks: {
      type: {
        set: function set(elem, value) {
          if (!support.radioValue && value === "radio" && nodeName(elem, "input")) {
            var val = elem.value;
            elem.setAttribute("type", value);

            if (val) {
              elem.value = val;
            }

            return value;
          }
        }
      }
    },
    removeAttr: function removeAttr(elem, value) {
      var name,
          i = 0,
          // Attribute names can contain non-HTML whitespace characters
      // https://html.spec.whatwg.org/multipage/syntax.html#attributes-2
      attrNames = value && value.match(rnothtmlwhite);

      if (attrNames && elem.nodeType === 1) {
        while (name = attrNames[i++]) {
          elem.removeAttribute(name);
        }
      }
    }
  }); // Hooks for boolean attributes

  boolHook = {
    set: function set(elem, value, name) {
      if (value === false) {
        // Remove boolean attributes when set to false
        jQuery.removeAttr(elem, name);
      } else {
        elem.setAttribute(name, name);
      }

      return name;
    }
  };
  jQuery.each(jQuery.expr.match.bool.source.match(/\w+/g), function (i, name) {
    var getter = attrHandle[name] || jQuery.find.attr;

    attrHandle[name] = function (elem, name, isXML) {
      var ret,
          handle,
          lowercaseName = name.toLowerCase();

      if (!isXML) {
        // Avoid an infinite loop by temporarily removing this function from the getter
        handle = attrHandle[lowercaseName];
        attrHandle[lowercaseName] = ret;
        ret = getter(elem, name, isXML) != null ? lowercaseName : null;
        attrHandle[lowercaseName] = handle;
      }

      return ret;
    };
  });
  var rfocusable = /^(?:input|select|textarea|button)$/i,
      rclickable = /^(?:a|area)$/i;
  jQuery.fn.extend({
    prop: function prop(name, value) {
      return access(this, jQuery.prop, name, value, arguments.length > 1);
    },
    removeProp: function removeProp(name) {
      return this.each(function () {
        delete this[jQuery.propFix[name] || name];
      });
    }
  });
  jQuery.extend({
    prop: function prop(elem, name, value) {
      var ret,
          hooks,
          nType = elem.nodeType; // Don't get/set properties on text, comment and attribute nodes

      if (nType === 3 || nType === 8 || nType === 2) {
        return;
      }

      if (nType !== 1 || !jQuery.isXMLDoc(elem)) {
        // Fix name and attach hooks
        name = jQuery.propFix[name] || name;
        hooks = jQuery.propHooks[name];
      }

      if (value !== undefined) {
        if (hooks && "set" in hooks && (ret = hooks.set(elem, value, name)) !== undefined) {
          return ret;
        }

        return elem[name] = value;
      }

      if (hooks && "get" in hooks && (ret = hooks.get(elem, name)) !== null) {
        return ret;
      }

      return elem[name];
    },
    propHooks: {
      tabIndex: {
        get: function get(elem) {
          // Support: IE <=9 - 11 only
          // elem.tabIndex doesn't always return the
          // correct value when it hasn't been explicitly set
          // https://web.archive.org/web/20141116233347/http://fluidproject.org/blog/2008/01/09/getting-setting-and-removing-tabindex-values-with-javascript/
          // Use proper attribute retrieval(#12072)
          var tabindex = jQuery.find.attr(elem, "tabindex");

          if (tabindex) {
            return parseInt(tabindex, 10);
          }

          if (rfocusable.test(elem.nodeName) || rclickable.test(elem.nodeName) && elem.href) {
            return 0;
          }

          return -1;
        }
      }
    },
    propFix: {
      "for": "htmlFor",
      "class": "className"
    }
  }); // Support: IE <=11 only
  // Accessing the selectedIndex property
  // forces the browser to respect setting selected
  // on the option
  // The getter ensures a default option is selected
  // when in an optgroup
  // eslint rule "no-unused-expressions" is disabled for this code
  // since it considers such accessions noop

  if (!support.optSelected) {
    jQuery.propHooks.selected = {
      get: function get(elem) {
        /* eslint no-unused-expressions: "off" */
        var parent = elem.parentNode;

        if (parent && parent.parentNode) {
          parent.parentNode.selectedIndex;
        }

        return null;
      },
      set: function set(elem) {
        /* eslint no-unused-expressions: "off" */
        var parent = elem.parentNode;

        if (parent) {
          parent.selectedIndex;

          if (parent.parentNode) {
            parent.parentNode.selectedIndex;
          }
        }
      }
    };
  }

  jQuery.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function () {
    jQuery.propFix[this.toLowerCase()] = this;
  }); // Strip and collapse whitespace according to HTML spec
  // https://infra.spec.whatwg.org/#strip-and-collapse-ascii-whitespace

  function stripAndCollapse(value) {
    var tokens = value.match(rnothtmlwhite) || [];
    return tokens.join(" ");
  }

  function getClass(elem) {
    return elem.getAttribute && elem.getAttribute("class") || "";
  }

  function classesToArray(value) {
    if (Array.isArray(value)) {
      return value;
    }

    if (typeof value === "string") {
      return value.match(rnothtmlwhite) || [];
    }

    return [];
  }

  jQuery.fn.extend({
    addClass: function addClass(value) {
      var classes,
          elem,
          cur,
          curValue,
          clazz,
          j,
          finalValue,
          i = 0;

      if (isFunction(value)) {
        return this.each(function (j) {
          jQuery(this).addClass(value.call(this, j, getClass(this)));
        });
      }

      classes = classesToArray(value);

      if (classes.length) {
        while (elem = this[i++]) {
          curValue = getClass(elem);
          cur = elem.nodeType === 1 && " " + stripAndCollapse(curValue) + " ";

          if (cur) {
            j = 0;

            while (clazz = classes[j++]) {
              if (cur.indexOf(" " + clazz + " ") < 0) {
                cur += clazz + " ";
              }
            } // Only assign if different to avoid unneeded rendering.


            finalValue = stripAndCollapse(cur);

            if (curValue !== finalValue) {
              elem.setAttribute("class", finalValue);
            }
          }
        }
      }

      return this;
    },
    removeClass: function removeClass(value) {
      var classes,
          elem,
          cur,
          curValue,
          clazz,
          j,
          finalValue,
          i = 0;

      if (isFunction(value)) {
        return this.each(function (j) {
          jQuery(this).removeClass(value.call(this, j, getClass(this)));
        });
      }

      if (!arguments.length) {
        return this.attr("class", "");
      }

      classes = classesToArray(value);

      if (classes.length) {
        while (elem = this[i++]) {
          curValue = getClass(elem); // This expression is here for better compressibility (see addClass)

          cur = elem.nodeType === 1 && " " + stripAndCollapse(curValue) + " ";

          if (cur) {
            j = 0;

            while (clazz = classes[j++]) {
              // Remove *all* instances
              while (cur.indexOf(" " + clazz + " ") > -1) {
                cur = cur.replace(" " + clazz + " ", " ");
              }
            } // Only assign if different to avoid unneeded rendering.


            finalValue = stripAndCollapse(cur);

            if (curValue !== finalValue) {
              elem.setAttribute("class", finalValue);
            }
          }
        }
      }

      return this;
    },
    toggleClass: function toggleClass(value, stateVal) {
      var type = _typeof(value),
          isValidValue = type === "string" || Array.isArray(value);

      if (typeof stateVal === "boolean" && isValidValue) {
        return stateVal ? this.addClass(value) : this.removeClass(value);
      }

      if (isFunction(value)) {
        return this.each(function (i) {
          jQuery(this).toggleClass(value.call(this, i, getClass(this), stateVal), stateVal);
        });
      }

      return this.each(function () {
        var className, i, self, classNames;

        if (isValidValue) {
          // Toggle individual class names
          i = 0;
          self = jQuery(this);
          classNames = classesToArray(value);

          while (className = classNames[i++]) {
            // Check each className given, space separated list
            if (self.hasClass(className)) {
              self.removeClass(className);
            } else {
              self.addClass(className);
            }
          } // Toggle whole class name

        } else if (value === undefined || type === "boolean") {
          className = getClass(this);

          if (className) {
            // Store className if set
            dataPriv.set(this, "__className__", className);
          } // If the element has a class name or if we're passed `false`,
          // then remove the whole classname (if there was one, the above saved it).
          // Otherwise bring back whatever was previously saved (if anything),
          // falling back to the empty string if nothing was stored.


          if (this.setAttribute) {
            this.setAttribute("class", className || value === false ? "" : dataPriv.get(this, "__className__") || "");
          }
        }
      });
    },
    hasClass: function hasClass(selector) {
      var className,
          elem,
          i = 0;
      className = " " + selector + " ";

      while (elem = this[i++]) {
        if (elem.nodeType === 1 && (" " + stripAndCollapse(getClass(elem)) + " ").indexOf(className) > -1) {
          return true;
        }
      }

      return false;
    }
  });
  var rreturn = /\r/g;
  jQuery.fn.extend({
    val: function val(value) {
      var hooks,
          ret,
          valueIsFunction,
          elem = this[0];

      if (!arguments.length) {
        if (elem) {
          hooks = jQuery.valHooks[elem.type] || jQuery.valHooks[elem.nodeName.toLowerCase()];

          if (hooks && "get" in hooks && (ret = hooks.get(elem, "value")) !== undefined) {
            return ret;
          }

          ret = elem.value; // Handle most common string cases

          if (typeof ret === "string") {
            return ret.replace(rreturn, "");
          } // Handle cases where value is null/undef or number


          return ret == null ? "" : ret;
        }

        return;
      }

      valueIsFunction = isFunction(value);
      return this.each(function (i) {
        var val;

        if (this.nodeType !== 1) {
          return;
        }

        if (valueIsFunction) {
          val = value.call(this, i, jQuery(this).val());
        } else {
          val = value;
        } // Treat null/undefined as ""; convert numbers to string


        if (val == null) {
          val = "";
        } else if (typeof val === "number") {
          val += "";
        } else if (Array.isArray(val)) {
          val = jQuery.map(val, function (value) {
            return value == null ? "" : value + "";
          });
        }

        hooks = jQuery.valHooks[this.type] || jQuery.valHooks[this.nodeName.toLowerCase()]; // If set returns undefined, fall back to normal setting

        if (!hooks || !("set" in hooks) || hooks.set(this, val, "value") === undefined) {
          this.value = val;
        }
      });
    }
  });
  jQuery.extend({
    valHooks: {
      option: {
        get: function get(elem) {
          var val = jQuery.find.attr(elem, "value");
          return val != null ? val : // Support: IE <=10 - 11 only
          // option.text throws exceptions (#14686, #14858)
          // Strip and collapse whitespace
          // https://html.spec.whatwg.org/#strip-and-collapse-whitespace
          stripAndCollapse(jQuery.text(elem));
        }
      },
      select: {
        get: function get(elem) {
          var value,
              option,
              i,
              options = elem.options,
              index = elem.selectedIndex,
              one = elem.type === "select-one",
              values = one ? null : [],
              max = one ? index + 1 : options.length;

          if (index < 0) {
            i = max;
          } else {
            i = one ? index : 0;
          } // Loop through all the selected options


          for (; i < max; i++) {
            option = options[i]; // Support: IE <=9 only
            // IE8-9 doesn't update selected after form reset (#2551)

            if ((option.selected || i === index) && // Don't return options that are disabled or in a disabled optgroup
            !option.disabled && (!option.parentNode.disabled || !nodeName(option.parentNode, "optgroup"))) {
              // Get the specific value for the option
              value = jQuery(option).val(); // We don't need an array for one selects

              if (one) {
                return value;
              } // Multi-Selects return an array


              values.push(value);
            }
          }

          return values;
        },
        set: function set(elem, value) {
          var optionSet,
              option,
              options = elem.options,
              values = jQuery.makeArray(value),
              i = options.length;

          while (i--) {
            option = options[i];
            /* eslint-disable no-cond-assign */

            if (option.selected = jQuery.inArray(jQuery.valHooks.option.get(option), values) > -1) {
              optionSet = true;
            }
            /* eslint-enable no-cond-assign */

          } // Force browsers to behave consistently when non-matching value is set


          if (!optionSet) {
            elem.selectedIndex = -1;
          }

          return values;
        }
      }
    }
  }); // Radios and checkboxes getter/setter

  jQuery.each(["radio", "checkbox"], function () {
    jQuery.valHooks[this] = {
      set: function set(elem, value) {
        if (Array.isArray(value)) {
          return elem.checked = jQuery.inArray(jQuery(elem).val(), value) > -1;
        }
      }
    };

    if (!support.checkOn) {
      jQuery.valHooks[this].get = function (elem) {
        return elem.getAttribute("value") === null ? "on" : elem.value;
      };
    }
  }); // Return jQuery for attributes-only inclusion

  support.focusin = "onfocusin" in window;

  var rfocusMorph = /^(?:focusinfocus|focusoutblur)$/,
      stopPropagationCallback = function stopPropagationCallback(e) {
    e.stopPropagation();
  };

  jQuery.extend(jQuery.event, {
    trigger: function trigger(event, data, elem, onlyHandlers) {
      var i,
          cur,
          tmp,
          bubbleType,
          ontype,
          handle,
          special,
          lastElement,
          eventPath = [elem || document],
          type = hasOwn.call(event, "type") ? event.type : event,
          namespaces = hasOwn.call(event, "namespace") ? event.namespace.split(".") : [];
      cur = lastElement = tmp = elem = elem || document; // Don't do events on text and comment nodes

      if (elem.nodeType === 3 || elem.nodeType === 8) {
        return;
      } // focus/blur morphs to focusin/out; ensure we're not firing them right now


      if (rfocusMorph.test(type + jQuery.event.triggered)) {
        return;
      }

      if (type.indexOf(".") > -1) {
        // Namespaced trigger; create a regexp to match event type in handle()
        namespaces = type.split(".");
        type = namespaces.shift();
        namespaces.sort();
      }

      ontype = type.indexOf(":") < 0 && "on" + type; // Caller can pass in a jQuery.Event object, Object, or just an event type string

      event = event[jQuery.expando] ? event : new jQuery.Event(type, _typeof(event) === "object" && event); // Trigger bitmask: & 1 for native handlers; & 2 for jQuery (always true)

      event.isTrigger = onlyHandlers ? 2 : 3;
      event.namespace = namespaces.join(".");
      event.rnamespace = event.namespace ? new RegExp("(^|\\.)" + namespaces.join("\\.(?:.*\\.|)") + "(\\.|$)") : null; // Clean up the event in case it is being reused

      event.result = undefined;

      if (!event.target) {
        event.target = elem;
      } // Clone any incoming data and prepend the event, creating the handler arg list


      data = data == null ? [event] : jQuery.makeArray(data, [event]); // Allow special events to draw outside the lines

      special = jQuery.event.special[type] || {};

      if (!onlyHandlers && special.trigger && special.trigger.apply(elem, data) === false) {
        return;
      } // Determine event propagation path in advance, per W3C events spec (#9951)
      // Bubble up to document, then to window; watch for a global ownerDocument var (#9724)


      if (!onlyHandlers && !special.noBubble && !isWindow(elem)) {
        bubbleType = special.delegateType || type;

        if (!rfocusMorph.test(bubbleType + type)) {
          cur = cur.parentNode;
        }

        for (; cur; cur = cur.parentNode) {
          eventPath.push(cur);
          tmp = cur;
        } // Only add window if we got to document (e.g., not plain obj or detached DOM)


        if (tmp === (elem.ownerDocument || document)) {
          eventPath.push(tmp.defaultView || tmp.parentWindow || window);
        }
      } // Fire handlers on the event path


      i = 0;

      while ((cur = eventPath[i++]) && !event.isPropagationStopped()) {
        lastElement = cur;
        event.type = i > 1 ? bubbleType : special.bindType || type; // jQuery handler

        handle = (dataPriv.get(cur, "events") || {})[event.type] && dataPriv.get(cur, "handle");

        if (handle) {
          handle.apply(cur, data);
        } // Native handler


        handle = ontype && cur[ontype];

        if (handle && handle.apply && acceptData(cur)) {
          event.result = handle.apply(cur, data);

          if (event.result === false) {
            event.preventDefault();
          }
        }
      }

      event.type = type; // If nobody prevented the default action, do it now

      if (!onlyHandlers && !event.isDefaultPrevented()) {
        if ((!special._default || special._default.apply(eventPath.pop(), data) === false) && acceptData(elem)) {
          // Call a native DOM method on the target with the same name as the event.
          // Don't do default actions on window, that's where global variables be (#6170)
          if (ontype && isFunction(elem[type]) && !isWindow(elem)) {
            // Don't re-trigger an onFOO event when we call its FOO() method
            tmp = elem[ontype];

            if (tmp) {
              elem[ontype] = null;
            } // Prevent re-triggering of the same event, since we already bubbled it above


            jQuery.event.triggered = type;

            if (event.isPropagationStopped()) {
              lastElement.addEventListener(type, stopPropagationCallback);
            }

            elem[type]();

            if (event.isPropagationStopped()) {
              lastElement.removeEventListener(type, stopPropagationCallback);
            }

            jQuery.event.triggered = undefined;

            if (tmp) {
              elem[ontype] = tmp;
            }
          }
        }
      }

      return event.result;
    },
    // Piggyback on a donor event to simulate a different one
    // Used only for `focus(in | out)` events
    simulate: function simulate(type, elem, event) {
      var e = jQuery.extend(new jQuery.Event(), event, {
        type: type,
        isSimulated: true
      });
      jQuery.event.trigger(e, null, elem);
    }
  });
  jQuery.fn.extend({
    trigger: function trigger(type, data) {
      return this.each(function () {
        jQuery.event.trigger(type, data, this);
      });
    },
    triggerHandler: function triggerHandler(type, data) {
      var elem = this[0];

      if (elem) {
        return jQuery.event.trigger(type, data, elem, true);
      }
    }
  }); // Support: Firefox <=44
  // Firefox doesn't have focus(in | out) events
  // Related ticket - https://bugzilla.mozilla.org/show_bug.cgi?id=687787
  //
  // Support: Chrome <=48 - 49, Safari <=9.0 - 9.1
  // focus(in | out) events fire after focus & blur events,
  // which is spec violation - http://www.w3.org/TR/DOM-Level-3-Events/#events-focusevent-event-order
  // Related ticket - https://bugs.chromium.org/p/chromium/issues/detail?id=449857

  if (!support.focusin) {
    jQuery.each({
      focus: "focusin",
      blur: "focusout"
    }, function (orig, fix) {
      // Attach a single capturing handler on the document while someone wants focusin/focusout
      var handler = function handler(event) {
        jQuery.event.simulate(fix, event.target, jQuery.event.fix(event));
      };

      jQuery.event.special[fix] = {
        setup: function setup() {
          var doc = this.ownerDocument || this,
              attaches = dataPriv.access(doc, fix);

          if (!attaches) {
            doc.addEventListener(orig, handler, true);
          }

          dataPriv.access(doc, fix, (attaches || 0) + 1);
        },
        teardown: function teardown() {
          var doc = this.ownerDocument || this,
              attaches = dataPriv.access(doc, fix) - 1;

          if (!attaches) {
            doc.removeEventListener(orig, handler, true);
            dataPriv.remove(doc, fix);
          } else {
            dataPriv.access(doc, fix, attaches);
          }
        }
      };
    });
  }

  var location = window.location;
  var nonce = Date.now();
  var rquery = /\?/; // Cross-browser xml parsing

  jQuery.parseXML = function (data) {
    var xml;

    if (!data || typeof data !== "string") {
      return null;
    } // Support: IE 9 - 11 only
    // IE throws on parseFromString with invalid input.


    try {
      xml = new window.DOMParser().parseFromString(data, "text/xml");
    } catch (e) {
      xml = undefined;
    }

    if (!xml || xml.getElementsByTagName("parsererror").length) {
      jQuery.error("Invalid XML: " + data);
    }

    return xml;
  };

  var rbracket = /\[\]$/,
      rCRLF = /\r?\n/g,
      rsubmitterTypes = /^(?:submit|button|image|reset|file)$/i,
      rsubmittable = /^(?:input|select|textarea|keygen)/i;

  function buildParams(prefix, obj, traditional, add) {
    var name;

    if (Array.isArray(obj)) {
      // Serialize array item.
      jQuery.each(obj, function (i, v) {
        if (traditional || rbracket.test(prefix)) {
          // Treat each array item as a scalar.
          add(prefix, v);
        } else {
          // Item is non-scalar (array or object), encode its numeric index.
          buildParams(prefix + "[" + (_typeof(v) === "object" && v != null ? i : "") + "]", v, traditional, add);
        }
      });
    } else if (!traditional && toType(obj) === "object") {
      // Serialize object item.
      for (name in obj) {
        buildParams(prefix + "[" + name + "]", obj[name], traditional, add);
      }
    } else {
      // Serialize scalar item.
      add(prefix, obj);
    }
  } // Serialize an array of form elements or a set of
  // key/values into a query string


  jQuery.param = function (a, traditional) {
    var prefix,
        s = [],
        add = function add(key, valueOrFunction) {
      // If value is a function, invoke it and use its return value
      var value = isFunction(valueOrFunction) ? valueOrFunction() : valueOrFunction;
      s[s.length] = encodeURIComponent(key) + "=" + encodeURIComponent(value == null ? "" : value);
    };

    if (a == null) {
      return "";
    } // If an array was passed in, assume that it is an array of form elements.


    if (Array.isArray(a) || a.jquery && !jQuery.isPlainObject(a)) {
      // Serialize the form elements
      jQuery.each(a, function () {
        add(this.name, this.value);
      });
    } else {
      // If traditional, encode the "old" way (the way 1.3.2 or older
      // did it), otherwise encode params recursively.
      for (prefix in a) {
        buildParams(prefix, a[prefix], traditional, add);
      }
    } // Return the resulting serialization


    return s.join("&");
  };

  jQuery.fn.extend({
    serialize: function serialize() {
      return jQuery.param(this.serializeArray());
    },
    serializeArray: function serializeArray() {
      return this.map(function () {
        // Can add propHook for "elements" to filter or add form elements
        var elements = jQuery.prop(this, "elements");
        return elements ? jQuery.makeArray(elements) : this;
      }).filter(function () {
        var type = this.type; // Use .is( ":disabled" ) so that fieldset[disabled] works

        return this.name && !jQuery(this).is(":disabled") && rsubmittable.test(this.nodeName) && !rsubmitterTypes.test(type) && (this.checked || !rcheckableType.test(type));
      }).map(function (i, elem) {
        var val = jQuery(this).val();

        if (val == null) {
          return null;
        }

        if (Array.isArray(val)) {
          return jQuery.map(val, function (val) {
            return {
              name: elem.name,
              value: val.replace(rCRLF, "\r\n")
            };
          });
        }

        return {
          name: elem.name,
          value: val.replace(rCRLF, "\r\n")
        };
      }).get();
    }
  });
  var r20 = /%20/g,
      rhash = /#.*$/,
      rantiCache = /([?&])_=[^&]*/,
      rheaders = /^(.*?):[ \t]*([^\r\n]*)$/mg,
      // #7653, #8125, #8152: local protocol detection
  rlocalProtocol = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
      rnoContent = /^(?:GET|HEAD)$/,
      rprotocol = /^\/\//,

  /* Prefilters
   * 1) They are useful to introduce custom dataTypes (see ajax/jsonp.js for an example)
   * 2) These are called:
   *    - BEFORE asking for a transport
   *    - AFTER param serialization (s.data is a string if s.processData is true)
   * 3) key is the dataType
   * 4) the catchall symbol "*" can be used
   * 5) execution will start with transport dataType and THEN continue down to "*" if needed
   */
  prefilters = {},

  /* Transports bindings
   * 1) key is the dataType
   * 2) the catchall symbol "*" can be used
   * 3) selection will start with transport dataType and THEN go to "*" if needed
   */
  transports = {},
      // Avoid comment-prolog char sequence (#10098); must appease lint and evade compression
  allTypes = "*/".concat("*"),
      // Anchor tag for parsing the document origin
  originAnchor = document.createElement("a");
  originAnchor.href = location.href; // Base "constructor" for jQuery.ajaxPrefilter and jQuery.ajaxTransport

  function addToPrefiltersOrTransports(structure) {
    // dataTypeExpression is optional and defaults to "*"
    return function (dataTypeExpression, func) {
      if (typeof dataTypeExpression !== "string") {
        func = dataTypeExpression;
        dataTypeExpression = "*";
      }

      var dataType,
          i = 0,
          dataTypes = dataTypeExpression.toLowerCase().match(rnothtmlwhite) || [];

      if (isFunction(func)) {
        // For each dataType in the dataTypeExpression
        while (dataType = dataTypes[i++]) {
          // Prepend if requested
          if (dataType[0] === "+") {
            dataType = dataType.slice(1) || "*";
            (structure[dataType] = structure[dataType] || []).unshift(func); // Otherwise append
          } else {
            (structure[dataType] = structure[dataType] || []).push(func);
          }
        }
      }
    };
  } // Base inspection function for prefilters and transports


  function inspectPrefiltersOrTransports(structure, options, originalOptions, jqXHR) {
    var inspected = {},
        seekingTransport = structure === transports;

    function inspect(dataType) {
      var selected;
      inspected[dataType] = true;
      jQuery.each(structure[dataType] || [], function (_, prefilterOrFactory) {
        var dataTypeOrTransport = prefilterOrFactory(options, originalOptions, jqXHR);

        if (typeof dataTypeOrTransport === "string" && !seekingTransport && !inspected[dataTypeOrTransport]) {
          options.dataTypes.unshift(dataTypeOrTransport);
          inspect(dataTypeOrTransport);
          return false;
        } else if (seekingTransport) {
          return !(selected = dataTypeOrTransport);
        }
      });
      return selected;
    }

    return inspect(options.dataTypes[0]) || !inspected["*"] && inspect("*");
  } // A special extend for ajax options
  // that takes "flat" options (not to be deep extended)
  // Fixes #9887


  function ajaxExtend(target, src) {
    var key,
        deep,
        flatOptions = jQuery.ajaxSettings.flatOptions || {};

    for (key in src) {
      if (src[key] !== undefined) {
        (flatOptions[key] ? target : deep || (deep = {}))[key] = src[key];
      }
    }

    if (deep) {
      jQuery.extend(true, target, deep);
    }

    return target;
  }
  /* Handles responses to an ajax request:
   * - finds the right dataType (mediates between content-type and expected dataType)
   * - returns the corresponding response
   */


  function ajaxHandleResponses(s, jqXHR, responses) {
    var ct,
        type,
        finalDataType,
        firstDataType,
        contents = s.contents,
        dataTypes = s.dataTypes; // Remove auto dataType and get content-type in the process

    while (dataTypes[0] === "*") {
      dataTypes.shift();

      if (ct === undefined) {
        ct = s.mimeType || jqXHR.getResponseHeader("Content-Type");
      }
    } // Check if we're dealing with a known content-type


    if (ct) {
      for (type in contents) {
        if (contents[type] && contents[type].test(ct)) {
          dataTypes.unshift(type);
          break;
        }
      }
    } // Check to see if we have a response for the expected dataType


    if (dataTypes[0] in responses) {
      finalDataType = dataTypes[0];
    } else {
      // Try convertible dataTypes
      for (type in responses) {
        if (!dataTypes[0] || s.converters[type + " " + dataTypes[0]]) {
          finalDataType = type;
          break;
        }

        if (!firstDataType) {
          firstDataType = type;
        }
      } // Or just use first one


      finalDataType = finalDataType || firstDataType;
    } // If we found a dataType
    // We add the dataType to the list if needed
    // and return the corresponding response


    if (finalDataType) {
      if (finalDataType !== dataTypes[0]) {
        dataTypes.unshift(finalDataType);
      }

      return responses[finalDataType];
    }
  }
  /* Chain conversions given the request and the original response
   * Also sets the responseXXX fields on the jqXHR instance
   */


  function ajaxConvert(s, response, jqXHR, isSuccess) {
    var conv2,
        current,
        conv,
        tmp,
        prev,
        converters = {},
        // Work with a copy of dataTypes in case we need to modify it for conversion
    dataTypes = s.dataTypes.slice(); // Create converters map with lowercased keys

    if (dataTypes[1]) {
      for (conv in s.converters) {
        converters[conv.toLowerCase()] = s.converters[conv];
      }
    }

    current = dataTypes.shift(); // Convert to each sequential dataType

    while (current) {
      if (s.responseFields[current]) {
        jqXHR[s.responseFields[current]] = response;
      } // Apply the dataFilter if provided


      if (!prev && isSuccess && s.dataFilter) {
        response = s.dataFilter(response, s.dataType);
      }

      prev = current;
      current = dataTypes.shift();

      if (current) {
        // There's only work to do if current dataType is non-auto
        if (current === "*") {
          current = prev; // Convert response if prev dataType is non-auto and differs from current
        } else if (prev !== "*" && prev !== current) {
          // Seek a direct converter
          conv = converters[prev + " " + current] || converters["* " + current]; // If none found, seek a pair

          if (!conv) {
            for (conv2 in converters) {
              // If conv2 outputs current
              tmp = conv2.split(" ");

              if (tmp[1] === current) {
                // If prev can be converted to accepted input
                conv = converters[prev + " " + tmp[0]] || converters["* " + tmp[0]];

                if (conv) {
                  // Condense equivalence converters
                  if (conv === true) {
                    conv = converters[conv2]; // Otherwise, insert the intermediate dataType
                  } else if (converters[conv2] !== true) {
                    current = tmp[0];
                    dataTypes.unshift(tmp[1]);
                  }

                  break;
                }
              }
            }
          } // Apply converter (if not an equivalence)


          if (conv !== true) {
            // Unless errors are allowed to bubble, catch and return them
            if (conv && s["throws"]) {
              response = conv(response);
            } else {
              try {
                response = conv(response);
              } catch (e) {
                return {
                  state: "parsererror",
                  error: conv ? e : "No conversion from " + prev + " to " + current
                };
              }
            }
          }
        }
      }
    }

    return {
      state: "success",
      data: response
    };
  }

  jQuery.extend({
    // Counter for holding the number of active queries
    active: 0,
    // Last-Modified header cache for next request
    lastModified: {},
    etag: {},
    ajaxSettings: {
      url: location.href,
      type: "GET",
      isLocal: rlocalProtocol.test(location.protocol),
      global: true,
      processData: true,
      async: true,
      contentType: "application/x-www-form-urlencoded; charset=UTF-8",

      /*
      timeout: 0,
      data: null,
      dataType: null,
      username: null,
      password: null,
      cache: null,
      throws: false,
      traditional: false,
      headers: {},
      */
      accepts: {
        "*": allTypes,
        text: "text/plain",
        html: "text/html",
        xml: "application/xml, text/xml",
        json: "application/json, text/javascript"
      },
      contents: {
        xml: /\bxml\b/,
        html: /\bhtml/,
        json: /\bjson\b/
      },
      responseFields: {
        xml: "responseXML",
        text: "responseText",
        json: "responseJSON"
      },
      // Data converters
      // Keys separate source (or catchall "*") and destination types with a single space
      converters: {
        // Convert anything to text
        "* text": String,
        // Text to html (true = no transformation)
        "text html": true,
        // Evaluate text as a json expression
        "text json": JSON.parse,
        // Parse text as xml
        "text xml": jQuery.parseXML
      },
      // For options that shouldn't be deep extended:
      // you can add your own custom options here if
      // and when you create one that shouldn't be
      // deep extended (see ajaxExtend)
      flatOptions: {
        url: true,
        context: true
      }
    },
    // Creates a full fledged settings object into target
    // with both ajaxSettings and settings fields.
    // If target is omitted, writes into ajaxSettings.
    ajaxSetup: function ajaxSetup(target, settings) {
      return settings ? // Building a settings object
      ajaxExtend(ajaxExtend(target, jQuery.ajaxSettings), settings) : // Extending ajaxSettings
      ajaxExtend(jQuery.ajaxSettings, target);
    },
    ajaxPrefilter: addToPrefiltersOrTransports(prefilters),
    ajaxTransport: addToPrefiltersOrTransports(transports),
    // Main method
    ajax: function ajax(url, options) {
      // If url is an object, simulate pre-1.5 signature
      if (_typeof(url) === "object") {
        options = url;
        url = undefined;
      } // Force options to be an object


      options = options || {};

      var transport,
          // URL without anti-cache param
      cacheURL,
          // Response headers
      responseHeadersString,
          responseHeaders,
          // timeout handle
      timeoutTimer,
          // Url cleanup var
      urlAnchor,
          // Request state (becomes false upon send and true upon completion)
      completed,
          // To know if global events are to be dispatched
      fireGlobals,
          // Loop variable
      i,
          // uncached part of the url
      uncached,
          // Create the final options object
      s = jQuery.ajaxSetup({}, options),
          // Callbacks context
      callbackContext = s.context || s,
          // Context for global events is callbackContext if it is a DOM node or jQuery collection
      globalEventContext = s.context && (callbackContext.nodeType || callbackContext.jquery) ? jQuery(callbackContext) : jQuery.event,
          // Deferreds
      deferred = jQuery.Deferred(),
          completeDeferred = jQuery.Callbacks("once memory"),
          // Status-dependent callbacks
      _statusCode = s.statusCode || {},
          // Headers (they are sent all at once)
      requestHeaders = {},
          requestHeadersNames = {},
          // Default abort message
      strAbort = "canceled",
          // Fake xhr
      jqXHR = {
        readyState: 0,
        // Builds headers hashtable if needed
        getResponseHeader: function getResponseHeader(key) {
          var match;

          if (completed) {
            if (!responseHeaders) {
              responseHeaders = {};

              while (match = rheaders.exec(responseHeadersString)) {
                responseHeaders[match[1].toLowerCase() + " "] = (responseHeaders[match[1].toLowerCase() + " "] || []).concat(match[2]);
              }
            }

            match = responseHeaders[key.toLowerCase() + " "];
          }

          return match == null ? null : match.join(", ");
        },
        // Raw string
        getAllResponseHeaders: function getAllResponseHeaders() {
          return completed ? responseHeadersString : null;
        },
        // Caches the header
        setRequestHeader: function setRequestHeader(name, value) {
          if (completed == null) {
            name = requestHeadersNames[name.toLowerCase()] = requestHeadersNames[name.toLowerCase()] || name;
            requestHeaders[name] = value;
          }

          return this;
        },
        // Overrides response content-type header
        overrideMimeType: function overrideMimeType(type) {
          if (completed == null) {
            s.mimeType = type;
          }

          return this;
        },
        // Status-dependent callbacks
        statusCode: function statusCode(map) {
          var code;

          if (map) {
            if (completed) {
              // Execute the appropriate callbacks
              jqXHR.always(map[jqXHR.status]);
            } else {
              // Lazy-add the new callbacks in a way that preserves old ones
              for (code in map) {
                _statusCode[code] = [_statusCode[code], map[code]];
              }
            }
          }

          return this;
        },
        // Cancel the request
        abort: function abort(statusText) {
          var finalText = statusText || strAbort;

          if (transport) {
            transport.abort(finalText);
          }

          done(0, finalText);
          return this;
        }
      }; // Attach deferreds


      deferred.promise(jqXHR); // Add protocol if not provided (prefilters might expect it)
      // Handle falsy url in the settings object (#10093: consistency with old signature)
      // We also use the url parameter if available

      s.url = ((url || s.url || location.href) + "").replace(rprotocol, location.protocol + "//"); // Alias method option to type as per ticket #12004

      s.type = options.method || options.type || s.method || s.type; // Extract dataTypes list

      s.dataTypes = (s.dataType || "*").toLowerCase().match(rnothtmlwhite) || [""]; // A cross-domain request is in order when the origin doesn't match the current origin.

      if (s.crossDomain == null) {
        urlAnchor = document.createElement("a"); // Support: IE <=8 - 11, Edge 12 - 15
        // IE throws exception on accessing the href property if url is malformed,
        // e.g. http://example.com:80x/

        try {
          urlAnchor.href = s.url; // Support: IE <=8 - 11 only
          // Anchor's host property isn't correctly set when s.url is relative

          urlAnchor.href = urlAnchor.href;
          s.crossDomain = originAnchor.protocol + "//" + originAnchor.host !== urlAnchor.protocol + "//" + urlAnchor.host;
        } catch (e) {
          // If there is an error parsing the URL, assume it is crossDomain,
          // it can be rejected by the transport if it is invalid
          s.crossDomain = true;
        }
      } // Convert data if not already a string


      if (s.data && s.processData && typeof s.data !== "string") {
        s.data = jQuery.param(s.data, s.traditional);
      } // Apply prefilters


      inspectPrefiltersOrTransports(prefilters, s, options, jqXHR); // If request was aborted inside a prefilter, stop there

      if (completed) {
        return jqXHR;
      } // We can fire global events as of now if asked to
      // Don't fire events if jQuery.event is undefined in an AMD-usage scenario (#15118)


      fireGlobals = jQuery.event && s.global; // Watch for a new set of requests

      if (fireGlobals && jQuery.active++ === 0) {
        jQuery.event.trigger("ajaxStart");
      } // Uppercase the type


      s.type = s.type.toUpperCase(); // Determine if request has content

      s.hasContent = !rnoContent.test(s.type); // Save the URL in case we're toying with the If-Modified-Since
      // and/or If-None-Match header later on
      // Remove hash to simplify url manipulation

      cacheURL = s.url.replace(rhash, ""); // More options handling for requests with no content

      if (!s.hasContent) {
        // Remember the hash so we can put it back
        uncached = s.url.slice(cacheURL.length); // If data is available and should be processed, append data to url

        if (s.data && (s.processData || typeof s.data === "string")) {
          cacheURL += (rquery.test(cacheURL) ? "&" : "?") + s.data; // #9682: remove data so that it's not used in an eventual retry

          delete s.data;
        } // Add or update anti-cache param if needed


        if (s.cache === false) {
          cacheURL = cacheURL.replace(rantiCache, "$1");
          uncached = (rquery.test(cacheURL) ? "&" : "?") + "_=" + nonce++ + uncached;
        } // Put hash and anti-cache on the URL that will be requested (gh-1732)


        s.url = cacheURL + uncached; // Change '%20' to '+' if this is encoded form body content (gh-2658)
      } else if (s.data && s.processData && (s.contentType || "").indexOf("application/x-www-form-urlencoded") === 0) {
        s.data = s.data.replace(r20, "+");
      } // Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.


      if (s.ifModified) {
        if (jQuery.lastModified[cacheURL]) {
          jqXHR.setRequestHeader("If-Modified-Since", jQuery.lastModified[cacheURL]);
        }

        if (jQuery.etag[cacheURL]) {
          jqXHR.setRequestHeader("If-None-Match", jQuery.etag[cacheURL]);
        }
      } // Set the correct header, if data is being sent


      if (s.data && s.hasContent && s.contentType !== false || options.contentType) {
        jqXHR.setRequestHeader("Content-Type", s.contentType);
      } // Set the Accepts header for the server, depending on the dataType


      jqXHR.setRequestHeader("Accept", s.dataTypes[0] && s.accepts[s.dataTypes[0]] ? s.accepts[s.dataTypes[0]] + (s.dataTypes[0] !== "*" ? ", " + allTypes + "; q=0.01" : "") : s.accepts["*"]); // Check for headers option

      for (i in s.headers) {
        jqXHR.setRequestHeader(i, s.headers[i]);
      } // Allow custom headers/mimetypes and early abort


      if (s.beforeSend && (s.beforeSend.call(callbackContext, jqXHR, s) === false || completed)) {
        // Abort if not done already and return
        return jqXHR.abort();
      } // Aborting is no longer a cancellation


      strAbort = "abort"; // Install callbacks on deferreds

      completeDeferred.add(s.complete);
      jqXHR.done(s.success);
      jqXHR.fail(s.error); // Get transport

      transport = inspectPrefiltersOrTransports(transports, s, options, jqXHR); // If no transport, we auto-abort

      if (!transport) {
        done(-1, "No Transport");
      } else {
        jqXHR.readyState = 1; // Send global event

        if (fireGlobals) {
          globalEventContext.trigger("ajaxSend", [jqXHR, s]);
        } // If request was aborted inside ajaxSend, stop there


        if (completed) {
          return jqXHR;
        } // Timeout


        if (s.async && s.timeout > 0) {
          timeoutTimer = window.setTimeout(function () {
            jqXHR.abort("timeout");
          }, s.timeout);
        }

        try {
          completed = false;
          transport.send(requestHeaders, done);
        } catch (e) {
          // Rethrow post-completion exceptions
          if (completed) {
            throw e;
          } // Propagate others as results


          done(-1, e);
        }
      } // Callback for when everything is done


      function done(status, nativeStatusText, responses, headers) {
        var isSuccess,
            success,
            error,
            response,
            modified,
            statusText = nativeStatusText; // Ignore repeat invocations

        if (completed) {
          return;
        }

        completed = true; // Clear timeout if it exists

        if (timeoutTimer) {
          window.clearTimeout(timeoutTimer);
        } // Dereference transport for early garbage collection
        // (no matter how long the jqXHR object will be used)


        transport = undefined; // Cache response headers

        responseHeadersString = headers || ""; // Set readyState

        jqXHR.readyState = status > 0 ? 4 : 0; // Determine if successful

        isSuccess = status >= 200 && status < 300 || status === 304; // Get response data

        if (responses) {
          response = ajaxHandleResponses(s, jqXHR, responses);
        } // Convert no matter what (that way responseXXX fields are always set)


        response = ajaxConvert(s, response, jqXHR, isSuccess); // If successful, handle type chaining

        if (isSuccess) {
          // Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
          if (s.ifModified) {
            modified = jqXHR.getResponseHeader("Last-Modified");

            if (modified) {
              jQuery.lastModified[cacheURL] = modified;
            }

            modified = jqXHR.getResponseHeader("etag");

            if (modified) {
              jQuery.etag[cacheURL] = modified;
            }
          } // if no content


          if (status === 204 || s.type === "HEAD") {
            statusText = "nocontent"; // if not modified
          } else if (status === 304) {
            statusText = "notmodified"; // If we have data, let's convert it
          } else {
            statusText = response.state;
            success = response.data;
            error = response.error;
            isSuccess = !error;
          }
        } else {
          // Extract error from statusText and normalize for non-aborts
          error = statusText;

          if (status || !statusText) {
            statusText = "error";

            if (status < 0) {
              status = 0;
            }
          }
        } // Set data for the fake xhr object


        jqXHR.status = status;
        jqXHR.statusText = (nativeStatusText || statusText) + ""; // Success/Error

        if (isSuccess) {
          deferred.resolveWith(callbackContext, [success, statusText, jqXHR]);
        } else {
          deferred.rejectWith(callbackContext, [jqXHR, statusText, error]);
        } // Status-dependent callbacks


        jqXHR.statusCode(_statusCode);
        _statusCode = undefined;

        if (fireGlobals) {
          globalEventContext.trigger(isSuccess ? "ajaxSuccess" : "ajaxError", [jqXHR, s, isSuccess ? success : error]);
        } // Complete


        completeDeferred.fireWith(callbackContext, [jqXHR, statusText]);

        if (fireGlobals) {
          globalEventContext.trigger("ajaxComplete", [jqXHR, s]); // Handle the global AJAX counter

          if (! --jQuery.active) {
            jQuery.event.trigger("ajaxStop");
          }
        }
      }

      return jqXHR;
    },
    getJSON: function getJSON(url, data, callback) {
      return jQuery.get(url, data, callback, "json");
    },
    getScript: function getScript(url, callback) {
      return jQuery.get(url, undefined, callback, "script");
    }
  });
  jQuery.each(["get", "post"], function (i, method) {
    jQuery[method] = function (url, data, callback, type) {
      // Shift arguments if data argument was omitted
      if (isFunction(data)) {
        type = type || callback;
        callback = data;
        data = undefined;
      } // The url can be an options object (which then must have .url)


      return jQuery.ajax(jQuery.extend({
        url: url,
        type: method,
        dataType: type,
        data: data,
        success: callback
      }, jQuery.isPlainObject(url) && url));
    };
  });

  jQuery._evalUrl = function (url, options) {
    return jQuery.ajax({
      url: url,
      // Make this explicit, since user can override this through ajaxSetup (#11264)
      type: "GET",
      dataType: "script",
      cache: true,
      async: false,
      global: false,
      // Only evaluate the response if it is successful (gh-4126)
      // dataFilter is not invoked for failure responses, so using it instead
      // of the default converter is kludgy but it works.
      converters: {
        "text script": function textScript() {}
      },
      dataFilter: function dataFilter(response) {
        jQuery.globalEval(response, options);
      }
    });
  };

  jQuery.fn.extend({
    wrapAll: function wrapAll(html) {
      var wrap;

      if (this[0]) {
        if (isFunction(html)) {
          html = html.call(this[0]);
        } // The elements to wrap the target around


        wrap = jQuery(html, this[0].ownerDocument).eq(0).clone(true);

        if (this[0].parentNode) {
          wrap.insertBefore(this[0]);
        }

        wrap.map(function () {
          var elem = this;

          while (elem.firstElementChild) {
            elem = elem.firstElementChild;
          }

          return elem;
        }).append(this);
      }

      return this;
    },
    wrapInner: function wrapInner(html) {
      if (isFunction(html)) {
        return this.each(function (i) {
          jQuery(this).wrapInner(html.call(this, i));
        });
      }

      return this.each(function () {
        var self = jQuery(this),
            contents = self.contents();

        if (contents.length) {
          contents.wrapAll(html);
        } else {
          self.append(html);
        }
      });
    },
    wrap: function wrap(html) {
      var htmlIsFunction = isFunction(html);
      return this.each(function (i) {
        jQuery(this).wrapAll(htmlIsFunction ? html.call(this, i) : html);
      });
    },
    unwrap: function unwrap(selector) {
      this.parent(selector).not("body").each(function () {
        jQuery(this).replaceWith(this.childNodes);
      });
      return this;
    }
  });

  jQuery.expr.pseudos.hidden = function (elem) {
    return !jQuery.expr.pseudos.visible(elem);
  };

  jQuery.expr.pseudos.visible = function (elem) {
    return !!(elem.offsetWidth || elem.offsetHeight || elem.getClientRects().length);
  };

  jQuery.ajaxSettings.xhr = function () {
    try {
      return new window.XMLHttpRequest();
    } catch (e) {}
  };

  var xhrSuccessStatus = {
    // File protocol always yields status code 0, assume 200
    0: 200,
    // Support: IE <=9 only
    // #1450: sometimes IE returns 1223 when it should be 204
    1223: 204
  },
      xhrSupported = jQuery.ajaxSettings.xhr();
  support.cors = !!xhrSupported && "withCredentials" in xhrSupported;
  support.ajax = xhrSupported = !!xhrSupported;
  jQuery.ajaxTransport(function (options) {
    var _callback, errorCallback; // Cross domain only allowed if supported through XMLHttpRequest


    if (support.cors || xhrSupported && !options.crossDomain) {
      return {
        send: function send(headers, complete) {
          var i,
              xhr = options.xhr();
          xhr.open(options.type, options.url, options.async, options.username, options.password); // Apply custom fields if provided

          if (options.xhrFields) {
            for (i in options.xhrFields) {
              xhr[i] = options.xhrFields[i];
            }
          } // Override mime type if needed


          if (options.mimeType && xhr.overrideMimeType) {
            xhr.overrideMimeType(options.mimeType);
          } // X-Requested-With header
          // For cross-domain requests, seeing as conditions for a preflight are
          // akin to a jigsaw puzzle, we simply never set it to be sure.
          // (it can always be set on a per-request basis or even using ajaxSetup)
          // For same-domain requests, won't change header if already provided.


          if (!options.crossDomain && !headers["X-Requested-With"]) {
            headers["X-Requested-With"] = "XMLHttpRequest";
          } // Set headers


          for (i in headers) {
            xhr.setRequestHeader(i, headers[i]);
          } // Callback


          _callback = function callback(type) {
            return function () {
              if (_callback) {
                _callback = errorCallback = xhr.onload = xhr.onerror = xhr.onabort = xhr.ontimeout = xhr.onreadystatechange = null;

                if (type === "abort") {
                  xhr.abort();
                } else if (type === "error") {
                  // Support: IE <=9 only
                  // On a manual native abort, IE9 throws
                  // errors on any property access that is not readyState
                  if (typeof xhr.status !== "number") {
                    complete(0, "error");
                  } else {
                    complete( // File: protocol always yields status 0; see #8605, #14207
                    xhr.status, xhr.statusText);
                  }
                } else {
                  complete(xhrSuccessStatus[xhr.status] || xhr.status, xhr.statusText, // Support: IE <=9 only
                  // IE9 has no XHR2 but throws on binary (trac-11426)
                  // For XHR2 non-text, let the caller handle it (gh-2498)
                  (xhr.responseType || "text") !== "text" || typeof xhr.responseText !== "string" ? {
                    binary: xhr.response
                  } : {
                    text: xhr.responseText
                  }, xhr.getAllResponseHeaders());
                }
              }
            };
          }; // Listen to events


          xhr.onload = _callback();
          errorCallback = xhr.onerror = xhr.ontimeout = _callback("error"); // Support: IE 9 only
          // Use onreadystatechange to replace onabort
          // to handle uncaught aborts

          if (xhr.onabort !== undefined) {
            xhr.onabort = errorCallback;
          } else {
            xhr.onreadystatechange = function () {
              // Check readyState before timeout as it changes
              if (xhr.readyState === 4) {
                // Allow onerror to be called first,
                // but that will not handle a native abort
                // Also, save errorCallback to a variable
                // as xhr.onerror cannot be accessed
                window.setTimeout(function () {
                  if (_callback) {
                    errorCallback();
                  }
                });
              }
            };
          } // Create the abort callback


          _callback = _callback("abort");

          try {
            // Do send the request (this may raise an exception)
            xhr.send(options.hasContent && options.data || null);
          } catch (e) {
            // #14683: Only rethrow if this hasn't been notified as an error yet
            if (_callback) {
              throw e;
            }
          }
        },
        abort: function abort() {
          if (_callback) {
            _callback();
          }
        }
      };
    }
  }); // Prevent auto-execution of scripts when no explicit dataType was provided (See gh-2432)

  jQuery.ajaxPrefilter(function (s) {
    if (s.crossDomain) {
      s.contents.script = false;
    }
  }); // Install script dataType

  jQuery.ajaxSetup({
    accepts: {
      script: "text/javascript, application/javascript, " + "application/ecmascript, application/x-ecmascript"
    },
    contents: {
      script: /\b(?:java|ecma)script\b/
    },
    converters: {
      "text script": function textScript(text) {
        jQuery.globalEval(text);
        return text;
      }
    }
  }); // Handle cache's special case and crossDomain

  jQuery.ajaxPrefilter("script", function (s) {
    if (s.cache === undefined) {
      s.cache = false;
    }

    if (s.crossDomain) {
      s.type = "GET";
    }
  }); // Bind script tag hack transport

  jQuery.ajaxTransport("script", function (s) {
    // This transport only deals with cross domain or forced-by-attrs requests
    if (s.crossDomain || s.scriptAttrs) {
      var script, _callback2;

      return {
        send: function send(_, complete) {
          script = jQuery("<script>").attr(s.scriptAttrs || {}).prop({
            charset: s.scriptCharset,
            src: s.url
          }).on("load error", _callback2 = function callback(evt) {
            script.remove();
            _callback2 = null;

            if (evt) {
              complete(evt.type === "error" ? 404 : 200, evt.type);
            }
          }); // Use native DOM manipulation to avoid our domManip AJAX trickery

          document.head.appendChild(script[0]);
        },
        abort: function abort() {
          if (_callback2) {
            _callback2();
          }
        }
      };
    }
  });
  var oldCallbacks = [],
      rjsonp = /(=)\?(?=&|$)|\?\?/; // Default jsonp settings

  jQuery.ajaxSetup({
    jsonp: "callback",
    jsonpCallback: function jsonpCallback() {
      var callback = oldCallbacks.pop() || jQuery.expando + "_" + nonce++;
      this[callback] = true;
      return callback;
    }
  }); // Detect, normalize options and install callbacks for jsonp requests

  jQuery.ajaxPrefilter("json jsonp", function (s, originalSettings, jqXHR) {
    var callbackName,
        overwritten,
        responseContainer,
        jsonProp = s.jsonp !== false && (rjsonp.test(s.url) ? "url" : typeof s.data === "string" && (s.contentType || "").indexOf("application/x-www-form-urlencoded") === 0 && rjsonp.test(s.data) && "data"); // Handle iff the expected data type is "jsonp" or we have a parameter to set

    if (jsonProp || s.dataTypes[0] === "jsonp") {
      // Get callback name, remembering preexisting value associated with it
      callbackName = s.jsonpCallback = isFunction(s.jsonpCallback) ? s.jsonpCallback() : s.jsonpCallback; // Insert callback into url or form data

      if (jsonProp) {
        s[jsonProp] = s[jsonProp].replace(rjsonp, "$1" + callbackName);
      } else if (s.jsonp !== false) {
        s.url += (rquery.test(s.url) ? "&" : "?") + s.jsonp + "=" + callbackName;
      } // Use data converter to retrieve json after script execution


      s.converters["script json"] = function () {
        if (!responseContainer) {
          jQuery.error(callbackName + " was not called");
        }

        return responseContainer[0];
      }; // Force json dataType


      s.dataTypes[0] = "json"; // Install callback

      overwritten = window[callbackName];

      window[callbackName] = function () {
        responseContainer = arguments;
      }; // Clean-up function (fires after converters)


      jqXHR.always(function () {
        // If previous value didn't exist - remove it
        if (overwritten === undefined) {
          jQuery(window).removeProp(callbackName); // Otherwise restore preexisting value
        } else {
          window[callbackName] = overwritten;
        } // Save back as free


        if (s[callbackName]) {
          // Make sure that re-using the options doesn't screw things around
          s.jsonpCallback = originalSettings.jsonpCallback; // Save the callback name for future use

          oldCallbacks.push(callbackName);
        } // Call if it was a function and we have a response


        if (responseContainer && isFunction(overwritten)) {
          overwritten(responseContainer[0]);
        }

        responseContainer = overwritten = undefined;
      }); // Delegate to script

      return "script";
    }
  }); // Support: Safari 8 only
  // In Safari 8 documents created via document.implementation.createHTMLDocument
  // collapse sibling forms: the second one becomes a child of the first one.
  // Because of that, this security measure has to be disabled in Safari 8.
  // https://bugs.webkit.org/show_bug.cgi?id=137337

  support.createHTMLDocument = function () {
    var body = document.implementation.createHTMLDocument("").body;
    body.innerHTML = "<form></form><form></form>";
    return body.childNodes.length === 2;
  }(); // Argument "data" should be string of html
  // context (optional): If specified, the fragment will be created in this context,
  // defaults to document
  // keepScripts (optional): If true, will include scripts passed in the html string


  jQuery.parseHTML = function (data, context, keepScripts) {
    if (typeof data !== "string") {
      return [];
    }

    if (typeof context === "boolean") {
      keepScripts = context;
      context = false;
    }

    var base, parsed, scripts;

    if (!context) {
      // Stop scripts or inline event handlers from being executed immediately
      // by using document.implementation
      if (support.createHTMLDocument) {
        context = document.implementation.createHTMLDocument(""); // Set the base href for the created document
        // so any parsed elements with URLs
        // are based on the document's URL (gh-2965)

        base = context.createElement("base");
        base.href = document.location.href;
        context.head.appendChild(base);
      } else {
        context = document;
      }
    }

    parsed = rsingleTag.exec(data);
    scripts = !keepScripts && []; // Single tag

    if (parsed) {
      return [context.createElement(parsed[1])];
    }

    parsed = buildFragment([data], context, scripts);

    if (scripts && scripts.length) {
      jQuery(scripts).remove();
    }

    return jQuery.merge([], parsed.childNodes);
  };
  /**
   * Load a url into a page
   */


  jQuery.fn.load = function (url, params, callback) {
    var selector,
        type,
        response,
        self = this,
        off = url.indexOf(" ");

    if (off > -1) {
      selector = stripAndCollapse(url.slice(off));
      url = url.slice(0, off);
    } // If it's a function


    if (isFunction(params)) {
      // We assume that it's the callback
      callback = params;
      params = undefined; // Otherwise, build a param string
    } else if (params && _typeof(params) === "object") {
      type = "POST";
    } // If we have elements to modify, make the request


    if (self.length > 0) {
      jQuery.ajax({
        url: url,
        // If "type" variable is undefined, then "GET" method will be used.
        // Make value of this field explicit since
        // user can override it through ajaxSetup method
        type: type || "GET",
        dataType: "html",
        data: params
      }).done(function (responseText) {
        // Save response for use in complete callback
        response = arguments;
        self.html(selector ? // If a selector was specified, locate the right elements in a dummy div
        // Exclude scripts to avoid IE 'Permission Denied' errors
        jQuery("<div>").append(jQuery.parseHTML(responseText)).find(selector) : // Otherwise use the full result
        responseText); // If the request succeeds, this function gets "data", "status", "jqXHR"
        // but they are ignored because response was set above.
        // If it fails, this function gets "jqXHR", "status", "error"
      }).always(callback && function (jqXHR, status) {
        self.each(function () {
          callback.apply(this, response || [jqXHR.responseText, status, jqXHR]);
        });
      });
    }

    return this;
  }; // Attach a bunch of functions for handling common AJAX events


  jQuery.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function (i, type) {
    jQuery.fn[type] = function (fn) {
      return this.on(type, fn);
    };
  });

  jQuery.expr.pseudos.animated = function (elem) {
    return jQuery.grep(jQuery.timers, function (fn) {
      return elem === fn.elem;
    }).length;
  };

  jQuery.offset = {
    setOffset: function setOffset(elem, options, i) {
      var curPosition,
          curLeft,
          curCSSTop,
          curTop,
          curOffset,
          curCSSLeft,
          calculatePosition,
          position = jQuery.css(elem, "position"),
          curElem = jQuery(elem),
          props = {}; // Set position first, in-case top/left are set even on static elem

      if (position === "static") {
        elem.style.position = "relative";
      }

      curOffset = curElem.offset();
      curCSSTop = jQuery.css(elem, "top");
      curCSSLeft = jQuery.css(elem, "left");
      calculatePosition = (position === "absolute" || position === "fixed") && (curCSSTop + curCSSLeft).indexOf("auto") > -1; // Need to be able to calculate position if either
      // top or left is auto and position is either absolute or fixed

      if (calculatePosition) {
        curPosition = curElem.position();
        curTop = curPosition.top;
        curLeft = curPosition.left;
      } else {
        curTop = parseFloat(curCSSTop) || 0;
        curLeft = parseFloat(curCSSLeft) || 0;
      }

      if (isFunction(options)) {
        // Use jQuery.extend here to allow modification of coordinates argument (gh-1848)
        options = options.call(elem, i, jQuery.extend({}, curOffset));
      }

      if (options.top != null) {
        props.top = options.top - curOffset.top + curTop;
      }

      if (options.left != null) {
        props.left = options.left - curOffset.left + curLeft;
      }

      if ("using" in options) {
        options.using.call(elem, props);
      } else {
        curElem.css(props);
      }
    }
  };
  jQuery.fn.extend({
    // offset() relates an element's border box to the document origin
    offset: function offset(options) {
      // Preserve chaining for setter
      if (arguments.length) {
        return options === undefined ? this : this.each(function (i) {
          jQuery.offset.setOffset(this, options, i);
        });
      }

      var rect,
          win,
          elem = this[0];

      if (!elem) {
        return;
      } // Return zeros for disconnected and hidden (display: none) elements (gh-2310)
      // Support: IE <=11 only
      // Running getBoundingClientRect on a
      // disconnected node in IE throws an error


      if (!elem.getClientRects().length) {
        return {
          top: 0,
          left: 0
        };
      } // Get document-relative position by adding viewport scroll to viewport-relative gBCR


      rect = elem.getBoundingClientRect();
      win = elem.ownerDocument.defaultView;
      return {
        top: rect.top + win.pageYOffset,
        left: rect.left + win.pageXOffset
      };
    },
    // position() relates an element's margin box to its offset parent's padding box
    // This corresponds to the behavior of CSS absolute positioning
    position: function position() {
      if (!this[0]) {
        return;
      }

      var offsetParent,
          offset,
          doc,
          elem = this[0],
          parentOffset = {
        top: 0,
        left: 0
      }; // position:fixed elements are offset from the viewport, which itself always has zero offset

      if (jQuery.css(elem, "position") === "fixed") {
        // Assume position:fixed implies availability of getBoundingClientRect
        offset = elem.getBoundingClientRect();
      } else {
        offset = this.offset(); // Account for the *real* offset parent, which can be the document or its root element
        // when a statically positioned element is identified

        doc = elem.ownerDocument;
        offsetParent = elem.offsetParent || doc.documentElement;

        while (offsetParent && (offsetParent === doc.body || offsetParent === doc.documentElement) && jQuery.css(offsetParent, "position") === "static") {
          offsetParent = offsetParent.parentNode;
        }

        if (offsetParent && offsetParent !== elem && offsetParent.nodeType === 1) {
          // Incorporate borders into its offset, since they are outside its content origin
          parentOffset = jQuery(offsetParent).offset();
          parentOffset.top += jQuery.css(offsetParent, "borderTopWidth", true);
          parentOffset.left += jQuery.css(offsetParent, "borderLeftWidth", true);
        }
      } // Subtract parent offsets and element margins


      return {
        top: offset.top - parentOffset.top - jQuery.css(elem, "marginTop", true),
        left: offset.left - parentOffset.left - jQuery.css(elem, "marginLeft", true)
      };
    },
    // This method will return documentElement in the following cases:
    // 1) For the element inside the iframe without offsetParent, this method will return
    //    documentElement of the parent window
    // 2) For the hidden or detached element
    // 3) For body or html element, i.e. in case of the html node - it will return itself
    //
    // but those exceptions were never presented as a real life use-cases
    // and might be considered as more preferable results.
    //
    // This logic, however, is not guaranteed and can change at any point in the future
    offsetParent: function offsetParent() {
      return this.map(function () {
        var offsetParent = this.offsetParent;

        while (offsetParent && jQuery.css(offsetParent, "position") === "static") {
          offsetParent = offsetParent.offsetParent;
        }

        return offsetParent || documentElement;
      });
    }
  }); // Create scrollLeft and scrollTop methods

  jQuery.each({
    scrollLeft: "pageXOffset",
    scrollTop: "pageYOffset"
  }, function (method, prop) {
    var top = "pageYOffset" === prop;

    jQuery.fn[method] = function (val) {
      return access(this, function (elem, method, val) {
        // Coalesce documents and windows
        var win;

        if (isWindow(elem)) {
          win = elem;
        } else if (elem.nodeType === 9) {
          win = elem.defaultView;
        }

        if (val === undefined) {
          return win ? win[prop] : elem[method];
        }

        if (win) {
          win.scrollTo(!top ? val : win.pageXOffset, top ? val : win.pageYOffset);
        } else {
          elem[method] = val;
        }
      }, method, val, arguments.length);
    };
  }); // Support: Safari <=7 - 9.1, Chrome <=37 - 49
  // Add the top/left cssHooks using jQuery.fn.position
  // Webkit bug: https://bugs.webkit.org/show_bug.cgi?id=29084
  // Blink bug: https://bugs.chromium.org/p/chromium/issues/detail?id=589347
  // getComputedStyle returns percent when specified for top/left/bottom/right;
  // rather than make the css module depend on the offset module, just check for it here

  jQuery.each(["top", "left"], function (i, prop) {
    jQuery.cssHooks[prop] = addGetHookIf(support.pixelPosition, function (elem, computed) {
      if (computed) {
        computed = curCSS(elem, prop); // If curCSS returns percentage, fallback to offset

        return rnumnonpx.test(computed) ? jQuery(elem).position()[prop] + "px" : computed;
      }
    });
  }); // Create innerHeight, innerWidth, height, width, outerHeight and outerWidth methods

  jQuery.each({
    Height: "height",
    Width: "width"
  }, function (name, type) {
    jQuery.each({
      padding: "inner" + name,
      content: type,
      "": "outer" + name
    }, function (defaultExtra, funcName) {
      // Margin is only for outerHeight, outerWidth
      jQuery.fn[funcName] = function (margin, value) {
        var chainable = arguments.length && (defaultExtra || typeof margin !== "boolean"),
            extra = defaultExtra || (margin === true || value === true ? "margin" : "border");
        return access(this, function (elem, type, value) {
          var doc;

          if (isWindow(elem)) {
            // $( window ).outerWidth/Height return w/h including scrollbars (gh-1729)
            return funcName.indexOf("outer") === 0 ? elem["inner" + name] : elem.document.documentElement["client" + name];
          } // Get document width or height


          if (elem.nodeType === 9) {
            doc = elem.documentElement; // Either scroll[Width/Height] or offset[Width/Height] or client[Width/Height],
            // whichever is greatest

            return Math.max(elem.body["scroll" + name], doc["scroll" + name], elem.body["offset" + name], doc["offset" + name], doc["client" + name]);
          }

          return value === undefined ? // Get width or height on the element, requesting but not forcing parseFloat
          jQuery.css(elem, type, extra) : // Set width or height on the element
          jQuery.style(elem, type, value, extra);
        }, type, chainable ? margin : undefined, chainable);
      };
    });
  });
  jQuery.each(("blur focus focusin focusout resize scroll click dblclick " + "mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave " + "change select submit keydown keypress keyup contextmenu").split(" "), function (i, name) {
    // Handle event binding
    jQuery.fn[name] = function (data, fn) {
      return arguments.length > 0 ? this.on(name, null, data, fn) : this.trigger(name);
    };
  });
  jQuery.fn.extend({
    hover: function hover(fnOver, fnOut) {
      return this.mouseenter(fnOver).mouseleave(fnOut || fnOver);
    }
  });
  jQuery.fn.extend({
    bind: function bind(types, data, fn) {
      return this.on(types, null, data, fn);
    },
    unbind: function unbind(types, fn) {
      return this.off(types, null, fn);
    },
    delegate: function delegate(selector, types, data, fn) {
      return this.on(types, selector, data, fn);
    },
    undelegate: function undelegate(selector, types, fn) {
      // ( namespace ) or ( selector, types [, fn] )
      return arguments.length === 1 ? this.off(selector, "**") : this.off(types, selector || "**", fn);
    }
  }); // Bind a function to a context, optionally partially applying any
  // arguments.
  // jQuery.proxy is deprecated to promote standards (specifically Function#bind)
  // However, it is not slated for removal any time soon

  jQuery.proxy = function (fn, context) {
    var tmp, args, proxy;

    if (typeof context === "string") {
      tmp = fn[context];
      context = fn;
      fn = tmp;
    } // Quick check to determine if target is callable, in the spec
    // this throws a TypeError, but we will just return undefined.


    if (!isFunction(fn)) {
      return undefined;
    } // Simulated bind


    args = _slice.call(arguments, 2);

    proxy = function proxy() {
      return fn.apply(context || this, args.concat(_slice.call(arguments)));
    }; // Set the guid of unique handler to the same of original handler, so it can be removed


    proxy.guid = fn.guid = fn.guid || jQuery.guid++;
    return proxy;
  };

  jQuery.holdReady = function (hold) {
    if (hold) {
      jQuery.readyWait++;
    } else {
      jQuery.ready(true);
    }
  };

  jQuery.isArray = Array.isArray;
  jQuery.parseJSON = JSON.parse;
  jQuery.nodeName = nodeName;
  jQuery.isFunction = isFunction;
  jQuery.isWindow = isWindow;
  jQuery.camelCase = camelCase;
  jQuery.type = toType;
  jQuery.now = Date.now;

  jQuery.isNumeric = function (obj) {
    // As of jQuery 3.0, isNumeric is limited to
    // strings and numbers (primitives or objects)
    // that can be coerced to finite numbers (gh-2662)
    var type = jQuery.type(obj);
    return (type === "number" || type === "string") && // parseFloat NaNs numeric-cast false positives ("")
    // ...but misinterprets leading-number strings, particularly hex literals ("0x...")
    // subtraction forces infinities to NaN
    !isNaN(obj - parseFloat(obj));
  }; // Register as a named AMD module, since jQuery can be concatenated with other
  // files that may use define, but not via a proper concatenation script that
  // understands anonymous AMD modules. A named AMD is safest and most robust
  // way to register. Lowercase jquery is used because AMD module names are
  // derived from file names, and jQuery is normally delivered in a lowercase
  // file name. Do this after creating the global so that if an AMD module wants
  // to call noConflict to hide this version of jQuery, it will work.
  // Note that for maximum portability, libraries that are not jQuery should
  // declare themselves as anonymous modules, and avoid setting a global if an
  // AMD loader is present. jQuery is a special case. For more information, see
  // https://github.com/jrburke/requirejs/wiki/Updating-existing-libraries#wiki-anon


  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = (function () {
      return jQuery;
    }).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  }

  var // Map over jQuery in case of overwrite
  _jQuery = window.jQuery,
      // Map over the $ in case of overwrite
  _$ = window.$;

  jQuery.noConflict = function (deep) {
    if (window.$ === jQuery) {
      window.$ = _$;
    }

    if (deep && window.jQuery === jQuery) {
      window.jQuery = _jQuery;
    }

    return jQuery;
  }; // Expose jQuery and $ identifiers, even in AMD
  // (#7102#comment:10, https://github.com/jquery/jquery/pull/557)
  // and CommonJS for browser emulators (#13566)


  if (!noGlobal) {
    window.jQuery = window.$ = jQuery;
  }

  return jQuery;
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./node_modules/webpack/buildin/module.js":
/*!***********************************!*\
  !*** (webpack)/buildin/module.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (module) {
  if (!module.webpackPolyfill) {
    module.deprecate = function () {};

    module.paths = []; // module.parent = undefined by default

    if (!module.children) module.children = [];
    Object.defineProperty(module, "loaded", {
      enumerable: true,
      get: function get() {
        return module.l;
      }
    });
    Object.defineProperty(module, "id", {
      enumerable: true,
      get: function get() {
        return module.i;
      }
    });
    module.webpackPolyfill = 1;
  }

  return module;
};

/***/ })

/******/ });
//# sourceMappingURL=jquery-72548c2dcb7e547ca083.js.map