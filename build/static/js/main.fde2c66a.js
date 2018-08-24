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
/******/ 	__webpack_require__.p = "/zp-dev/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 94);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


if (true) {
  module.exports = __webpack_require__(101);
} else {
  module.exports = require('./cjs/react.development.js');
}


/***/ }),
/* 1 */
/***/ (function(module, exports) {

/**
 * Checks if `value` is classified as an `Array` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array, else `false`.
 * @example
 *
 * _.isArray([1, 2, 3]);
 * // => true
 *
 * _.isArray(document.body.children);
 * // => false
 *
 * _.isArray('abc');
 * // => false
 *
 * _.isArray(_.noop);
 * // => false
 */
var isArray = Array.isArray;

module.exports = isArray;


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

var freeGlobal = __webpack_require__(68);

/** Detect free variable `self`. */
var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

/** Used as a reference to the global object. */
var root = freeGlobal || freeSelf || Function('return this')();

module.exports = root;


/***/ }),
/* 3 */
/***/ (function(module, exports) {

/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */
function isObject(value) {
  var type = typeof value;
  return value != null && (type == 'object' || type == 'function');
}

module.exports = isObject;


/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return createStore; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return combineReducers; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return bindActionCreators; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return applyMiddleware; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return compose; });
/* unused harmony export __DO_NOT_USE__ActionTypes */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_symbol_observable__ = __webpack_require__(118);


/**
 * These are private action types reserved by Redux.
 * For any unknown actions, you must return the current state.
 * If the current state is undefined, you must return the initial state.
 * Do not reference these action types directly in your code.
 */
var ActionTypes = {
  INIT: '@@redux/INIT' + Math.random().toString(36).substring(7).split('').join('.'),
  REPLACE: '@@redux/REPLACE' + Math.random().toString(36).substring(7).split('').join('.')
};

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {
  return typeof obj;
} : function (obj) {
  return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
};

var _extends = Object.assign || function (target) {
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

/**
 * @param {any} obj The object to inspect.
 * @returns {boolean} True if the argument appears to be a plain object.
 */
function isPlainObject(obj) {
  if ((typeof obj === 'undefined' ? 'undefined' : _typeof(obj)) !== 'object' || obj === null) return false;

  var proto = obj;
  while (Object.getPrototypeOf(proto) !== null) {
    proto = Object.getPrototypeOf(proto);
  }

  return Object.getPrototypeOf(obj) === proto;
}

/**
 * Creates a Redux store that holds the state tree.
 * The only way to change the data in the store is to call `dispatch()` on it.
 *
 * There should only be a single store in your app. To specify how different
 * parts of the state tree respond to actions, you may combine several reducers
 * into a single reducer function by using `combineReducers`.
 *
 * @param {Function} reducer A function that returns the next state tree, given
 * the current state tree and the action to handle.
 *
 * @param {any} [preloadedState] The initial state. You may optionally specify it
 * to hydrate the state from the server in universal apps, or to restore a
 * previously serialized user session.
 * If you use `combineReducers` to produce the root reducer function, this must be
 * an object with the same shape as `combineReducers` keys.
 *
 * @param {Function} [enhancer] The store enhancer. You may optionally specify it
 * to enhance the store with third-party capabilities such as middleware,
 * time travel, persistence, etc. The only store enhancer that ships with Redux
 * is `applyMiddleware()`.
 *
 * @returns {Store} A Redux store that lets you read the state, dispatch actions
 * and subscribe to changes.
 */
function createStore(reducer, preloadedState, enhancer) {
  var _ref2;

  if (typeof preloadedState === 'function' && typeof enhancer === 'undefined') {
    enhancer = preloadedState;
    preloadedState = undefined;
  }

  if (typeof enhancer !== 'undefined') {
    if (typeof enhancer !== 'function') {
      throw new Error('Expected the enhancer to be a function.');
    }

    return enhancer(createStore)(reducer, preloadedState);
  }

  if (typeof reducer !== 'function') {
    throw new Error('Expected the reducer to be a function.');
  }

  var currentReducer = reducer;
  var currentState = preloadedState;
  var currentListeners = [];
  var nextListeners = currentListeners;
  var isDispatching = false;

  function ensureCanMutateNextListeners() {
    if (nextListeners === currentListeners) {
      nextListeners = currentListeners.slice();
    }
  }

  /**
   * Reads the state tree managed by the store.
   *
   * @returns {any} The current state tree of your application.
   */
  function getState() {
    if (isDispatching) {
      throw new Error('You may not call store.getState() while the reducer is executing. ' + 'The reducer has already received the state as an argument. ' + 'Pass it down from the top reducer instead of reading it from the store.');
    }

    return currentState;
  }

  /**
   * Adds a change listener. It will be called any time an action is dispatched,
   * and some part of the state tree may potentially have changed. You may then
   * call `getState()` to read the current state tree inside the callback.
   *
   * You may call `dispatch()` from a change listener, with the following
   * caveats:
   *
   * 1. The subscriptions are snapshotted just before every `dispatch()` call.
   * If you subscribe or unsubscribe while the listeners are being invoked, this
   * will not have any effect on the `dispatch()` that is currently in progress.
   * However, the next `dispatch()` call, whether nested or not, will use a more
   * recent snapshot of the subscription list.
   *
   * 2. The listener should not expect to see all state changes, as the state
   * might have been updated multiple times during a nested `dispatch()` before
   * the listener is called. It is, however, guaranteed that all subscribers
   * registered before the `dispatch()` started will be called with the latest
   * state by the time it exits.
   *
   * @param {Function} listener A callback to be invoked on every dispatch.
   * @returns {Function} A function to remove this change listener.
   */
  function subscribe(listener) {
    if (typeof listener !== 'function') {
      throw new Error('Expected the listener to be a function.');
    }

    if (isDispatching) {
      throw new Error('You may not call store.subscribe() while the reducer is executing. ' + 'If you would like to be notified after the store has been updated, subscribe from a ' + 'component and invoke store.getState() in the callback to access the latest state. ' + 'See https://redux.js.org/api-reference/store#subscribe(listener) for more details.');
    }

    var isSubscribed = true;

    ensureCanMutateNextListeners();
    nextListeners.push(listener);

    return function unsubscribe() {
      if (!isSubscribed) {
        return;
      }

      if (isDispatching) {
        throw new Error('You may not unsubscribe from a store listener while the reducer is executing. ' + 'See https://redux.js.org/api-reference/store#subscribe(listener) for more details.');
      }

      isSubscribed = false;

      ensureCanMutateNextListeners();
      var index = nextListeners.indexOf(listener);
      nextListeners.splice(index, 1);
    };
  }

  /**
   * Dispatches an action. It is the only way to trigger a state change.
   *
   * The `reducer` function, used to create the store, will be called with the
   * current state tree and the given `action`. Its return value will
   * be considered the **next** state of the tree, and the change listeners
   * will be notified.
   *
   * The base implementation only supports plain object actions. If you want to
   * dispatch a Promise, an Observable, a thunk, or something else, you need to
   * wrap your store creating function into the corresponding middleware. For
   * example, see the documentation for the `redux-thunk` package. Even the
   * middleware will eventually dispatch plain object actions using this method.
   *
   * @param {Object} action A plain object representing “what changed”. It is
   * a good idea to keep actions serializable so you can record and replay user
   * sessions, or use the time travelling `redux-devtools`. An action must have
   * a `type` property which may not be `undefined`. It is a good idea to use
   * string constants for action types.
   *
   * @returns {Object} For convenience, the same action object you dispatched.
   *
   * Note that, if you use a custom middleware, it may wrap `dispatch()` to
   * return something else (for example, a Promise you can await).
   */
  function dispatch(action) {
    if (!isPlainObject(action)) {
      throw new Error('Actions must be plain objects. ' + 'Use custom middleware for async actions.');
    }

    if (typeof action.type === 'undefined') {
      throw new Error('Actions may not have an undefined "type" property. ' + 'Have you misspelled a constant?');
    }

    if (isDispatching) {
      throw new Error('Reducers may not dispatch actions.');
    }

    try {
      isDispatching = true;
      currentState = currentReducer(currentState, action);
    } finally {
      isDispatching = false;
    }

    var listeners = currentListeners = nextListeners;
    for (var i = 0; i < listeners.length; i++) {
      var listener = listeners[i];
      listener();
    }

    return action;
  }

  /**
   * Replaces the reducer currently used by the store to calculate the state.
   *
   * You might need this if your app implements code splitting and you want to
   * load some of the reducers dynamically. You might also need this if you
   * implement a hot reloading mechanism for Redux.
   *
   * @param {Function} nextReducer The reducer for the store to use instead.
   * @returns {void}
   */
  function replaceReducer(nextReducer) {
    if (typeof nextReducer !== 'function') {
      throw new Error('Expected the nextReducer to be a function.');
    }

    currentReducer = nextReducer;
    dispatch({ type: ActionTypes.REPLACE });
  }

  /**
   * Interoperability point for observable/reactive libraries.
   * @returns {observable} A minimal observable of state changes.
   * For more information, see the observable proposal:
   * https://github.com/tc39/proposal-observable
   */
  function observable() {
    var _ref;

    var outerSubscribe = subscribe;
    return _ref = {
      /**
       * The minimal observable subscription method.
       * @param {Object} observer Any object that can be used as an observer.
       * The observer object should have a `next` method.
       * @returns {subscription} An object with an `unsubscribe` method that can
       * be used to unsubscribe the observable from the store, and prevent further
       * emission of values from the observable.
       */
      subscribe: function subscribe(observer) {
        if ((typeof observer === 'undefined' ? 'undefined' : _typeof(observer)) !== 'object' || observer === null) {
          throw new TypeError('Expected the observer to be an object.');
        }

        function observeState() {
          if (observer.next) {
            observer.next(getState());
          }
        }

        observeState();
        var unsubscribe = outerSubscribe(observeState);
        return { unsubscribe: unsubscribe };
      }
    }, _ref[__WEBPACK_IMPORTED_MODULE_0_symbol_observable__["a" /* default */]] = function () {
      return this;
    }, _ref;
  }

  // When a store is created, an "INIT" action is dispatched so that every
  // reducer returns their initial state. This effectively populates
  // the initial state tree.
  dispatch({ type: ActionTypes.INIT });

  return _ref2 = {
    dispatch: dispatch,
    subscribe: subscribe,
    getState: getState,
    replaceReducer: replaceReducer
  }, _ref2[__WEBPACK_IMPORTED_MODULE_0_symbol_observable__["a" /* default */]] = observable, _ref2;
}

/**
 * Prints a warning in the console if it exists.
 *
 * @param {String} message The warning message.
 * @returns {void}
 */
function warning(message) {
  /* eslint-disable no-console */
  if (typeof console !== 'undefined' && typeof console.error === 'function') {
    console.error(message);
  }
  /* eslint-enable no-console */
  try {
    // This error was thrown as a convenience so that if you enable
    // "break on all exceptions" in your console,
    // it would pause the execution at this line.
    throw new Error(message);
  } catch (e) {} // eslint-disable-line no-empty
}

function getUndefinedStateErrorMessage(key, action) {
  var actionType = action && action.type;
  var actionDescription = actionType && 'action "' + String(actionType) + '"' || 'an action';

  return 'Given ' + actionDescription + ', reducer "' + key + '" returned undefined. ' + 'To ignore an action, you must explicitly return the previous state. ' + 'If you want this reducer to hold no value, you can return null instead of undefined.';
}

function getUnexpectedStateShapeWarningMessage(inputState, reducers, action, unexpectedKeyCache) {
  var reducerKeys = Object.keys(reducers);
  var argumentName = action && action.type === ActionTypes.INIT ? 'preloadedState argument passed to createStore' : 'previous state received by the reducer';

  if (reducerKeys.length === 0) {
    return 'Store does not have a valid reducer. Make sure the argument passed ' + 'to combineReducers is an object whose values are reducers.';
  }

  if (!isPlainObject(inputState)) {
    return 'The ' + argumentName + ' has unexpected type of "' + {}.toString.call(inputState).match(/\s([a-z|A-Z]+)/)[1] + '". Expected argument to be an object with the following ' + ('keys: "' + reducerKeys.join('", "') + '"');
  }

  var unexpectedKeys = Object.keys(inputState).filter(function (key) {
    return !reducers.hasOwnProperty(key) && !unexpectedKeyCache[key];
  });

  unexpectedKeys.forEach(function (key) {
    unexpectedKeyCache[key] = true;
  });

  if (action && action.type === ActionTypes.REPLACE) return;

  if (unexpectedKeys.length > 0) {
    return 'Unexpected ' + (unexpectedKeys.length > 1 ? 'keys' : 'key') + ' ' + ('"' + unexpectedKeys.join('", "') + '" found in ' + argumentName + '. ') + 'Expected to find one of the known reducer keys instead: ' + ('"' + reducerKeys.join('", "') + '". Unexpected keys will be ignored.');
  }
}

function assertReducerShape(reducers) {
  Object.keys(reducers).forEach(function (key) {
    var reducer = reducers[key];
    var initialState = reducer(undefined, { type: ActionTypes.INIT });

    if (typeof initialState === 'undefined') {
      throw new Error('Reducer "' + key + '" returned undefined during initialization. ' + 'If the state passed to the reducer is undefined, you must ' + 'explicitly return the initial state. The initial state may ' + 'not be undefined. If you don\'t want to set a value for this reducer, ' + 'you can use null instead of undefined.');
    }

    var type = '@@redux/PROBE_UNKNOWN_ACTION_' + Math.random().toString(36).substring(7).split('').join('.');
    if (typeof reducer(undefined, { type: type }) === 'undefined') {
      throw new Error('Reducer "' + key + '" returned undefined when probed with a random type. ' + ('Don\'t try to handle ' + ActionTypes.INIT + ' or other actions in "redux/*" ') + 'namespace. They are considered private. Instead, you must return the ' + 'current state for any unknown actions, unless it is undefined, ' + 'in which case you must return the initial state, regardless of the ' + 'action type. The initial state may not be undefined, but can be null.');
    }
  });
}

/**
 * Turns an object whose values are different reducer functions, into a single
 * reducer function. It will call every child reducer, and gather their results
 * into a single state object, whose keys correspond to the keys of the passed
 * reducer functions.
 *
 * @param {Object} reducers An object whose values correspond to different
 * reducer functions that need to be combined into one. One handy way to obtain
 * it is to use ES6 `import * as reducers` syntax. The reducers may never return
 * undefined for any action. Instead, they should return their initial state
 * if the state passed to them was undefined, and the current state for any
 * unrecognized action.
 *
 * @returns {Function} A reducer function that invokes every reducer inside the
 * passed object, and builds a state object with the same shape.
 */
function combineReducers(reducers) {
  var reducerKeys = Object.keys(reducers);
  var finalReducers = {};
  for (var i = 0; i < reducerKeys.length; i++) {
    var key = reducerKeys[i];

    if (false) {
      if (typeof reducers[key] === 'undefined') {
        warning('No reducer provided for key "' + key + '"');
      }
    }

    if (typeof reducers[key] === 'function') {
      finalReducers[key] = reducers[key];
    }
  }
  var finalReducerKeys = Object.keys(finalReducers);

  var unexpectedKeyCache = void 0;
  if (false) {
    unexpectedKeyCache = {};
  }

  var shapeAssertionError = void 0;
  try {
    assertReducerShape(finalReducers);
  } catch (e) {
    shapeAssertionError = e;
  }

  return function combination() {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    var action = arguments[1];

    if (shapeAssertionError) {
      throw shapeAssertionError;
    }

    if (false) {
      var warningMessage = getUnexpectedStateShapeWarningMessage(state, finalReducers, action, unexpectedKeyCache);
      if (warningMessage) {
        warning(warningMessage);
      }
    }

    var hasChanged = false;
    var nextState = {};
    for (var _i = 0; _i < finalReducerKeys.length; _i++) {
      var _key = finalReducerKeys[_i];
      var reducer = finalReducers[_key];
      var previousStateForKey = state[_key];
      var nextStateForKey = reducer(previousStateForKey, action);
      if (typeof nextStateForKey === 'undefined') {
        var errorMessage = getUndefinedStateErrorMessage(_key, action);
        throw new Error(errorMessage);
      }
      nextState[_key] = nextStateForKey;
      hasChanged = hasChanged || nextStateForKey !== previousStateForKey;
    }
    return hasChanged ? nextState : state;
  };
}

function bindActionCreator(actionCreator, dispatch) {
  return function () {
    return dispatch(actionCreator.apply(this, arguments));
  };
}

/**
 * Turns an object whose values are action creators, into an object with the
 * same keys, but with every function wrapped into a `dispatch` call so they
 * may be invoked directly. This is just a convenience method, as you can call
 * `store.dispatch(MyActionCreators.doSomething())` yourself just fine.
 *
 * For convenience, you can also pass a single function as the first argument,
 * and get a function in return.
 *
 * @param {Function|Object} actionCreators An object whose values are action
 * creator functions. One handy way to obtain it is to use ES6 `import * as`
 * syntax. You may also pass a single function.
 *
 * @param {Function} dispatch The `dispatch` function available on your Redux
 * store.
 *
 * @returns {Function|Object} The object mimicking the original object, but with
 * every action creator wrapped into the `dispatch` call. If you passed a
 * function as `actionCreators`, the return value will also be a single
 * function.
 */
function bindActionCreators(actionCreators, dispatch) {
  if (typeof actionCreators === 'function') {
    return bindActionCreator(actionCreators, dispatch);
  }

  if ((typeof actionCreators === 'undefined' ? 'undefined' : _typeof(actionCreators)) !== 'object' || actionCreators === null) {
    throw new Error('bindActionCreators expected an object or a function, instead received ' + (actionCreators === null ? 'null' : typeof actionCreators === 'undefined' ? 'undefined' : _typeof(actionCreators)) + '. ' + 'Did you write "import ActionCreators from" instead of "import * as ActionCreators from"?');
  }

  var keys = Object.keys(actionCreators);
  var boundActionCreators = {};
  for (var i = 0; i < keys.length; i++) {
    var key = keys[i];
    var actionCreator = actionCreators[key];
    if (typeof actionCreator === 'function') {
      boundActionCreators[key] = bindActionCreator(actionCreator, dispatch);
    }
  }
  return boundActionCreators;
}

/**
 * Composes single-argument functions from right to left. The rightmost
 * function can take multiple arguments as it provides the signature for
 * the resulting composite function.
 *
 * @param {...Function} funcs The functions to compose.
 * @returns {Function} A function obtained by composing the argument functions
 * from right to left. For example, compose(f, g, h) is identical to doing
 * (...args) => f(g(h(...args))).
 */

function compose() {
  for (var _len = arguments.length, funcs = Array(_len), _key = 0; _key < _len; _key++) {
    funcs[_key] = arguments[_key];
  }

  if (funcs.length === 0) {
    return function (arg) {
      return arg;
    };
  }

  if (funcs.length === 1) {
    return funcs[0];
  }

  return funcs.reduce(function (a, b) {
    return function () {
      return a(b.apply(undefined, arguments));
    };
  });
}

/**
 * Creates a store enhancer that applies middleware to the dispatch method
 * of the Redux store. This is handy for a variety of tasks, such as expressing
 * asynchronous actions in a concise manner, or logging every action payload.
 *
 * See `redux-thunk` package as an example of the Redux middleware.
 *
 * Because middleware is potentially asynchronous, this should be the first
 * store enhancer in the composition chain.
 *
 * Note that each middleware will be given the `dispatch` and `getState` functions
 * as named arguments.
 *
 * @param {...Function} middlewares The middleware chain to be applied.
 * @returns {Function} A store enhancer applying the middleware.
 */
function applyMiddleware() {
  for (var _len = arguments.length, middlewares = Array(_len), _key = 0; _key < _len; _key++) {
    middlewares[_key] = arguments[_key];
  }

  return function (createStore) {
    return function () {
      for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        args[_key2] = arguments[_key2];
      }

      var store = createStore.apply(undefined, args);
      var _dispatch = function dispatch() {
        throw new Error('Dispatching while constructing your middleware is not allowed. ' + 'Other middleware would not be applied to this dispatch.');
      };

      var middlewareAPI = {
        getState: store.getState,
        dispatch: function dispatch() {
          return _dispatch.apply(undefined, arguments);
        }
      };
      var chain = middlewares.map(function (middleware) {
        return middleware(middlewareAPI);
      });
      _dispatch = compose.apply(undefined, chain)(store.dispatch);

      return _extends({}, store, {
        dispatch: _dispatch
      });
    };
  };
}

/*
 * This is a dummy function to check if the function name has been altered by minification.
 * If the function has been minified and NODE_ENV !== 'production', warn the user.
 */
function isCrushed() {}

if (false) {
  warning("You are currently using minified code outside of NODE_ENV === 'production'. " + 'This means that you are running a slower development build of Redux. ' + 'You can use loose-envify (https://github.com/zertosh/loose-envify) for browserify ' + 'or DefinePlugin for webpack (http://stackoverflow.com/questions/30030031) ' + 'to ensure you have the correct code for your production build.');
}




/***/ }),
/* 5 */
/***/ (function(module, exports) {

/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */
function isObjectLike(value) {
  return value != null && typeof value == 'object';
}

module.exports = isObjectLike;


/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

(function webpackUniversalModuleDefinition(root, factory) {
	if(true)
		module.exports = factory(__webpack_require__(0), __webpack_require__(29), __webpack_require__(26), __webpack_require__(27), __webpack_require__(57));
	else if(typeof define === 'function' && define.amd)
		define(["react", "prop-types", "svg-baker-runtime/browser-symbol", "svg-sprite-loader/runtime/browser-sprite.build", "react-dom"], factory);
	else {
		var a = typeof exports === 'object' ? factory(require("react"), require("prop-types"), require("svg-baker-runtime/browser-symbol"), require("svg-sprite-loader/runtime/browser-sprite.build"), require("react-dom")) : factory(root["react"], root["prop-types"], root["svg-baker-runtime/browser-symbol"], root["svg-sprite-loader/runtime/browser-sprite.build"], root["react-dom"]);
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(window, function(__WEBPACK_EXTERNAL_MODULE__0__, __WEBPACK_EXTERNAL_MODULE__1__, __WEBPACK_EXTERNAL_MODULE__6__, __WEBPACK_EXTERNAL_MODULE__7__, __WEBPACK_EXTERNAL_MODULE__33__) {
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
/******/ 	return __webpack_require__(__webpack_require__.s = 167);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__0__;

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__1__;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

exports.default = classNames;
function classNames() {
  var result = [];

  [].concat(Array.prototype.slice.call(arguments)).forEach(function (item) {
    if (!item) {
      return;
    }
    switch (typeof item === 'undefined' ? 'undefined' : _typeof(item)) {
      case 'string':
        result.push(item);
        break;
      case 'object':
        Object.keys(item).forEach(function (key) {
          if (item[key]) {
            result.push(key);
          }
        });
        break;
      default:
        result.push('' + item);
    }
  });

  return result.join(' ');
}

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = getClassname;

var _platform = __webpack_require__(4);

var _classnames2 = __webpack_require__(2);

var _classnames3 = _interopRequireDefault(_classnames2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var osname = (0, _platform.platform)();

function getClassname(base) {
  var _classnames;

  return (0, _classnames3.default)(base, (_classnames = {}, _defineProperty(_classnames, base + '--ios', osname === _platform.IOS), _defineProperty(_classnames, base + '--android', osname === _platform.ANDROID), _classnames));
}

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.platform = platform;
var ANDROID = exports.ANDROID = 'android';
var IOS = exports.IOS = 'ios';

var ua = void 0;
var platformName = void 0;

function platform(useragent) {
  if (!ua) {
    ua = useragent || navigator && navigator.userAgent || '';
  }
  if (!platformName) {
    platformName = /android/i.test(ua) ? ANDROID : IOS;
  }

  return platformName;
}

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ACTIVE_EFFECT_DELAY = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

__webpack_require__(155);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _Touch = __webpack_require__(8);

var _Touch2 = _interopRequireDefault(_Touch);

var _classnames = __webpack_require__(2);

var _classnames2 = _interopRequireDefault(_classnames);

var _getClassName = __webpack_require__(3);

var _getClassName2 = _interopRequireDefault(_getClassName);

var _platform = __webpack_require__(4);

var _offset = __webpack_require__(31);

var _touch = __webpack_require__(35);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ts = function ts() {
  return +Date.now();
};
var baseClassNames = (0, _getClassName2.default)('Tappable');
var osname = (0, _platform.platform)();

var ACTIVE_DELAY = 70;
var ACTIVE_EFFECT_DELAY = exports.ACTIVE_EFFECT_DELAY = 600;

var storage = {};

/**
 * Очищает таймауты и хранилище для всех экземпляров компонента, кроме переданного
 *
 * @param {String} exclude ID экземпляра-исключения
 * @returns {void}
 */
function deactivateOtherInstances(exclude) {
  Object.keys(storage).filter(function (id) {
    return id !== exclude;
  }).forEach(function (id) {
    clearTimeout(storage[id].activeTimeout);
    clearTimeout(storage[id].timeout);
    storage[id].stop();

    delete storage[id];
  });
}

var Tappable = function (_Component) {
  _inherits(Tappable, _Component);

  function Tappable(props) {
    _classCallCheck(this, Tappable);

    var _this = _possibleConstructorReturn(this, (Tappable.__proto__ || Object.getPrototypeOf(Tappable)).call(this, props));

    _this.isSlide = false;

    _this.onStart = function (_ref) {
      var originalEvent = _ref.originalEvent;

      _this.props.stopPropagation && originalEvent.stopPropagation();
      if (originalEvent.touches && originalEvent.touches.length > 1) {
        return deactivateOtherInstances();
      }

      if (osname === _platform.ANDROID) {
        _this.onDown(originalEvent);
      }

      storage[_this.id] = {};
      _this.getStorage().stop = _this.stop;
      _this.getStorage().activeTimeout = setTimeout(_this.start, ACTIVE_DELAY);
    };

    _this.onMove = function (_ref2) {
      var originalEvent = _ref2.originalEvent,
          shiftXAbs = _ref2.shiftXAbs,
          shiftYAbs = _ref2.shiftYAbs;

      _this.props.stopPropagation && originalEvent.stopPropagation();
      if (shiftXAbs > 20 || shiftYAbs > 20) {
        _this.isSlide = true;
        _this.stop();
      }
    };

    _this.onEnd = function (_ref3) {
      var originalEvent = _ref3.originalEvent;

      _this.props.stopPropagation && originalEvent.stopPropagation();
      var now = ts();

      if (originalEvent.touches && originalEvent.touches.length > 0) {
        _this.isSlide = false;
        return;
      }

      if (_this.state.active) {
        if (now - _this.state.ts >= 100) {
          // Долгий тап, выключаем подсветку
          _this.stop();
        } else {
          // Короткий тап, оставляем подсветку
          var timeout = setTimeout(_this.stop, _this.props.activeEffectDelay - now + _this.state.ts);
          var store = _this.getStorage();

          if (store) {
            store.timeout = timeout;
          }
        }
      } else if (!_this.isSlide) {
        // Очень короткий тап, включаем подсветку
        _this.start();

        var _timeout = setTimeout(_this.stop, _this.props.activeEffectDelay);

        if (_this.getStorage()) {
          clearTimeout(_this.getStorage().activeTimeout);
          _this.getStorage().timeout = _timeout;
        } else {
          _this.timeout = _timeout;
        }
      }

      _this.isSlide = false;
    };

    _this.onDown = function (e) {
      if (osname === _platform.ANDROID) {
        var _getOffsetRect = (0, _offset.getOffsetRect)(_this.container),
            top = _getOffsetRect.top,
            left = _getOffsetRect.left;

        var x = (0, _touch.coordX)(e);
        var y = (0, _touch.coordY)(e);
        var key = 'wave' + Date.now().toString();

        _this.setState(function (state) {
          return {
            clicks: Object.assign({}, state.clicks, _defineProperty({}, key, {
              x: Math.round(x - left),
              y: Math.round(y - top)
            }))
          };
        });

        _this.wavesTimeout = setTimeout(function () {
          _this.setState(function (state) {
            var clicks = Object.assign({}, state.clicks);
            delete clicks[key];
            return { clicks: clicks };
          });
        }, 225);
      }
    };

    _this.start = function () {
      if (!_this.state.active) {
        _this.setState({
          active: true,
          ts: ts()
        });
      }
      deactivateOtherInstances(_this.id);
    };

    _this.stop = function () {
      if (_this.state.active) {
        _this.setState({
          active: false,
          ts: null
        });
      }
      if (_this.getStorage()) {
        clearTimeout(_this.getStorage().activeTimeout);
        delete storage[_this.id];
      }
    };

    _this.getStorage = function () {
      return storage[_this.id];
    };

    _this.getRef = function (container) {
      _this.container = container;
      _this.props.getRootRef && _this.props.getRootRef(container);
    };

    _this.id = Math.round(Math.random() * 1e8).toString(16);
    _this.state = {
      clicks: {},
      active: false,
      ts: null
    };
    return _this;
  }

  /**
   * Обрабатывает событие touchstart
   *
   * @returns {void}
   */


  /**
   * Обрабатывает событие touchmove
   *
   * @returns {void}
   */


  /**
   * Обрабатывает событие touchend
   *
   * @returns {void}
   */


  /**
   * Реализует эффект при тапе для Андроида
   *
   * @returns {void}
   */


  /**
   * Устанавливает активное выделение
   *
   * @returns {void}
   */


  /**
   * Снимает активное выделение
   *
   * @returns {void}
   */


  /**
   * Возвращает хранилище для экземпляра компонента
   *
   * @returns {Object} Хранилище для текущего экземпляра компонента
   */


  /**
   * Берет ref на DOM-ноду из экземпляра Touch
   *
   * @param {React.Component} container Touch component instance
   */


  _createClass(Tappable, [{
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      if (storage[this.id]) {
        clearTimeout(storage[this.id].timeout);
        clearTimeout(storage[this.id].activeTimeout);

        delete storage[this.id];
      }

      clearTimeout(this.wavesTimeout);
    }
  }, {
    key: 'render',
    value: function render() {
      var _state = this.state,
          clicks = _state.clicks,
          active = _state.active;

      var _props = this.props,
          children = _props.children,
          className = _props.className,
          component = _props.component,
          activeEffectDelay = _props.activeEffectDelay,
          stopPropagation = _props.stopPropagation,
          getRootRef = _props.getRootRef,
          restProps = _objectWithoutProperties(_props, ['children', 'className', 'component', 'activeEffectDelay', 'stopPropagation', 'getRootRef']);

      var Component = !restProps.disabled ? _Touch2.default : component;
      var classes = (0, _classnames2.default)(baseClassNames, className, {
        'Tappable--active': active,
        'Tappable--inactive': !active
      });

      var props = {};

      if (!restProps.disabled) {
        props.component = component;
        props.onStart = this.onStart;
        props.onMove = this.onMove;
        props.onEnd = this.onEnd;
      }

      if (typeof Component === 'string') {
        props.ref = this.getRef;
      } else {
        props.getRootRef = this.getRef;
      }

      return _react2.default.createElement(
        Component,
        _extends({}, restProps, { className: classes }, props),
        osname === _platform.ANDROID && _react2.default.createElement(
          'span',
          { className: 'Tappable__waves' },
          Object.keys(clicks).map(function (k) {
            return _react2.default.createElement('span', { className: 'Tappable__wave', style: { top: clicks[k].y, left: clicks[k].x }, key: k });
          })
        ),
        children
      );
    }
  }]);

  return Tappable;
}(_react.Component);

Tappable.propTypes = {
  onClick: _propTypes2.default.func,
  className: _propTypes2.default.string,
  children: _propTypes2.default.node,
  component: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.element]),
  role: _propTypes2.default.string,
  activeEffectDelay: _propTypes2.default.number,
  stopPropagation: _propTypes2.default.bool,
  disabled: _propTypes2.default.bool,
  getRootRef: _propTypes2.default.func
};
Tappable.defaultProps = {
  component: 'div',
  role: 'button',
  stopPropagation: false,
  disabled: false,
  activeEffectDelay: ACTIVE_EFFECT_DELAY
};
exports.default = Tappable;

/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__6__;

/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__7__;

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _touch = __webpack_require__(35);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var events = (0, _touch.getSupportedEvents)();

var Touch = function (_Component) {
  _inherits(Touch, _Component);

  function Touch() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Touch);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Touch.__proto__ || Object.getPrototypeOf(Touch)).call.apply(_ref, [this].concat(args))), _this), _this.cancelClick = false, _this.gesture = {}, _this.onStart = function (e) {
      _this.gesture = {
        startX: (0, _touch.coordX)(e),
        startY: (0, _touch.coordY)(e),
        startT: new Date(),
        isPressed: true
      };

      // Вызываем нужные колбеки из props
      var outputEvent = Object.assign({}, _this.gesture, {
        originalEvent: e
      });

      if (_this.props.onStart) {
        _this.props.onStart(outputEvent);
      }

      if (_this.props.onStartX) {
        _this.props.onStartX(outputEvent);
      }

      if (_this.props.onStartY) {
        _this.props.onStartY(outputEvent);
      }

      !_touch.touchEnabled && _this.subscribe(_this.document);
    }, _this.onMove = function (e) {
      var _this$gesture = _this.gesture,
          isPressed = _this$gesture.isPressed,
          isX = _this$gesture.isX,
          isY = _this$gesture.isY,
          startX = _this$gesture.startX,
          startY = _this$gesture.startY;


      if (isPressed) {
        // смещения
        var shiftX = (0, _touch.coordX)(e) - startX;
        var shiftY = (0, _touch.coordY)(e) - startY;

        // абсолютные значения смещений
        var shiftXAbs = Math.abs(shiftX);
        var shiftYAbs = Math.abs(shiftY);

        // Если определяем мультитач, то прерываем жест
        if (!!e.touches && e.touches.length > 1) {
          return _this.onEnd(e);
        }

        // если мы ещё не определились
        if (!isX && !isY) {
          var willBeX = shiftXAbs >= 5 && shiftXAbs > shiftYAbs;
          var willBeY = shiftYAbs >= 5 && shiftYAbs > shiftXAbs;
          var willBeSlidedX = willBeX && !!_this.props.onMoveX || !!_this.props.onMove;
          var willBeSlidedY = willBeY && !!_this.props.onMoveY || !!_this.props.onMove;

          _this.gesture.isY = willBeY;
          _this.gesture.isX = willBeX;
          _this.gesture.isSlideX = willBeSlidedX;
          _this.gesture.isSlideY = willBeSlidedY;
          _this.gesture.isSlide = willBeSlidedX || willBeSlidedY;
        }

        if (_this.gesture.isSlide) {
          _this.gesture.shiftX = shiftX;
          _this.gesture.shiftY = shiftY;
          _this.gesture.shiftXAbs = shiftXAbs;
          _this.gesture.shiftYAbs = shiftYAbs;

          // Вызываем нужные колбеки из props
          var outputEvent = Object.assign({}, _this.gesture, {
            originalEvent: e
          });

          if (_this.props.onMove) {
            _this.props.onMove(outputEvent);
          }

          if (_this.gesture.isSlideX && _this.props.onMoveX) {
            _this.props.onMoveX(outputEvent);
          }

          if (_this.gesture.isSlideY && _this.props.onMoveY) {
            _this.props.onMoveY(outputEvent);
          }
        }
      }
    }, _this.onEnd = function (e) {
      var _this$gesture2 = _this.gesture,
          isPressed = _this$gesture2.isPressed,
          isSlide = _this$gesture2.isSlide,
          isSlideX = _this$gesture2.isSlideX,
          isSlideY = _this$gesture2.isSlideY;


      if (isPressed) {
        // Вызываем нужные колбеки из props
        var outputEvent = Object.assign({}, _this.gesture, {
          originalEvent: e
        });

        if (_this.props.onEnd) {
          _this.props.onEnd(outputEvent);
        }

        if (isSlideY && _this.props.onEndY) {
          _this.props.onEndY(outputEvent);
        }

        if (isSlideX && _this.props.onEndX) {
          _this.props.onEndX(outputEvent);
        }
      }

      // Если закончили жест на ссылке, выставляем флаг для отмены перехода
      _this.cancelClick = e.target.tagName === 'A' && isSlide;
      _this.gesture = {};

      !_touch.touchEnabled && _this.unsubscribe(_this.document);
    }, _this.onDragStart = function (e) {
      if (e.target.tagName === 'A' || e.target.tagName === 'IMG') {
        e.preventDefault();
      }
    }, _this.onClick = function (e) {
      if (_this.cancelClick) {
        _this.cancelClick = false;
        e.preventDefault();
      }
      _this.props.onClick && _this.props.onClick(e);
    }, _this.getRef = function (container) {
      _this.container = container;
      _this.props.getRootRef && _this.props.getRootRef(container);
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Touch, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.container.addEventListener(events[0], this.onStart, { capture: this.props.useCapture, passive: false });
      _touch.touchEnabled && this.subscribe(this.container);
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      this.container.removeEventListener(events[0], this.onStart, { capture: this.props.useCapture, passive: false });
      _touch.touchEnabled && this.unsubscribe(this.container);
    }

    /**
     * Обработчик событий touchstart
     *
     * @param {Object} e Браузерное событие
     * @returns {void}
     */


    /**
     * Обработчик событий touchmove
     *
     * @param {Object} e Браузерное событие
     * @returns {void}
     */


    /**
     * Обработчик событий touchend, touchcancel
     *
     * @param {Object} e Браузерное событие
     * @returns {void}
     */

  }, {
    key: 'subscribe',
    value: function subscribe(element) {
      element.addEventListener(events[1], this.onMove, { capture: this.props.useCapture, passive: false });
      element.addEventListener(events[2], this.onEnd, { capture: this.props.useCapture, passive: false });
      element.addEventListener(events[3], this.onEnd, { capture: this.props.useCapture, passive: false });
    }
  }, {
    key: 'unsubscribe',
    value: function unsubscribe(element) {
      element.removeEventListener(events[1], this.onMove, { capture: this.props.useCapture, passive: false });
      element.removeEventListener(events[2], this.onEnd, { capture: this.props.useCapture, passive: false });
      element.removeEventListener(events[3], this.onEnd, { capture: this.props.useCapture, passive: false });
    }

    /**
     * Обработчик событий dragstart
     * Отменяет нативное браузерное поведение для вложенных ссылок и изображений
     *
     * @param {Object} e Браузерное событие
     * @returns {void}
     */


    /**
     * Обработчик клика по компоненту
     * Отменяет переход по вложенной ссылке, если был зафиксирован свайп
     *
     * @param {Object} e Браузерное событие
     * @returns {void}
     */

  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          onStart = _props.onStart,
          onStartX = _props.onStartX,
          onStartY = _props.onStartY,
          onMove = _props.onMove,
          onMoveX = _props.onMoveX,
          onMoveY = _props.onMoveY,
          onEnd = _props.onEnd,
          onEndX = _props.onEndX,
          onEndY = _props.onEndY,
          useCapture = _props.useCapture,
          component = _props.component,
          getRootRef = _props.getRootRef,
          restProps = _objectWithoutProperties(_props, ['onStart', 'onStartX', 'onStartY', 'onMove', 'onMoveX', 'onMoveY', 'onEnd', 'onEndX', 'onEndY', 'useCapture', 'component', 'getRootRef']);

      var ComponentName = component;

      return _react2.default.createElement(
        ComponentName,
        _extends({}, restProps, { onDragStart: this.onDragStart, onClick: this.onClick, ref: this.getRef }),
        this.props.children
      );
    }
  }, {
    key: 'document',
    get: function get() {
      return this.context.document || document;
    }
  }]);

  return Touch;
}(_react.Component);

Touch.propTypes = {
  onStart: _propTypes2.default.func,
  onStartX: _propTypes2.default.func,
  onStartY: _propTypes2.default.func,
  onMove: _propTypes2.default.func,
  onMoveX: _propTypes2.default.func,
  onMoveY: _propTypes2.default.func,
  onEnd: _propTypes2.default.func,
  onEndX: _propTypes2.default.func,
  onEndY: _propTypes2.default.func,
  useCapture: _propTypes2.default.bool,
  component: _propTypes2.default.string,
  children: _propTypes2.default.node,
  onClick: _propTypes2.default.func,
  getRootRef: _propTypes2.default.func
};
Touch.defaultProps = {
  component: 'div',
  children: '',
  useCapture: false
};
Touch.contextTypes = {
  document: _propTypes2.default.any
};
exports.default = Touch;

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var requestAnimationFrame = typeof window !== 'undefined' && window.requestAnimationFrame ? window.requestAnimationFrame : function (cb) {
  return setTimeout(cb, 1000 / 60);
};

exports.default = requestAnimationFrame;

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var supported = void 0,
    prefix = void 0;

if (typeof document !== 'undefined' && document.createElement) {
  var d = document.createElement('div');

  for (var i in d.style) {
    var m = i.match(/^(moz|webkit|ms|)(transition|animation)$/i);
    if (m) supported = true;
    if (m && m[1]) {
      // согласно спецификации, префиксы к событиям должны быть в нижнем регистре
      // https://www.w3schools.com/jsref/event_transitionend.asp
      prefix = m[1].toLowerCase();
    }
  }
}

exports.default = { supported: supported, prefix: prefix };

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _getClassName = __webpack_require__(3);

var _getClassName2 = _interopRequireDefault(_getClassName);

var _classnames2 = __webpack_require__(2);

var _classnames3 = _interopRequireDefault(_classnames2);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

__webpack_require__(134);

var _platform = __webpack_require__(4);

var _transitionEvents = __webpack_require__(10);

var _transitionEvents2 = _interopRequireDefault(_transitionEvents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var osname = (0, _platform.platform)();

var baseClassNames = (0, _getClassName2.default)('PopoutWrapper');

var PopoutWrapper = function (_React$Component) {
  _inherits(PopoutWrapper, _React$Component);

  function PopoutWrapper() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, PopoutWrapper);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = PopoutWrapper.__proto__ || Object.getPrototypeOf(PopoutWrapper)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      opened: false
    }, _this.onFadeInEnd = function () {
      var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : { manual: true };

      if (e.animationName === 'animation-full-fade-in' || e.manual) {
        _this.setState({ opened: true });
      }
    }, _this.preventTouch = function (e) {
      return e.preventDefault();
    }, _this.onClick = function (e) {
      return _this.state.opened && _this.props.onClick && _this.props.onClick(e);
    }, _this.getRef = function (el) {
      return _this.el = el;
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(PopoutWrapper, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      window.addEventListener('touchmove', this.preventTouch, { passive: false });
      this.waitAnimationFinish(this.el, this.onFadeInEnd);
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      window.removeEventListener('touchmove', this.preventTouch, { passive: false });
      clearTimeout(this.animationFinishTimeout);
    }
  }, {
    key: 'waitAnimationFinish',
    value: function waitAnimationFinish(elem, eventHandler) {
      if (_transitionEvents2.default.supported) {
        var eventName = _transitionEvents2.default.prefix ? _transitionEvents2.default.prefix + 'AnimationEnd' : 'animationend';
        elem.removeEventListener(eventName, eventHandler);
        elem.addEventListener(eventName, eventHandler);
      } else {
        this.animationFinishTimeout = setTimeout(eventHandler.bind(this), osname === _platform.ANDROID ? 300 : 600);
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _classnames;

      var _props = this.props,
          v = _props.v,
          h = _props.h,
          closing = _props.closing,
          children = _props.children,
          hasMask = _props.hasMask,
          onClick = _props.onClick,
          className = _props.className,
          restProps = _objectWithoutProperties(_props, ['v', 'h', 'closing', 'children', 'hasMask', 'onClick', 'className']);

      return _react2.default.createElement(
        'div',
        _extends({}, restProps, { className: (0, _classnames3.default)(baseClassNames, (_classnames = {}, _defineProperty(_classnames, 'PopoutWrapper--v-' + v, v), _defineProperty(_classnames, 'PopoutWrapper--h-' + h, h), _defineProperty(_classnames, 'PopoutWrapper--closing', closing), _classnames), className), onClick: this.onClick, ref: this.getRef }),
        hasMask && _react2.default.createElement('div', { className: 'PopoutWrapper__mask' }),
        _react2.default.createElement(
          'div',
          { className: 'PopoutWrapper__container' },
          children
        )
      );
    }
  }]);

  return PopoutWrapper;
}(_react2.default.Component);

PopoutWrapper.propTypes = {
  hasMask: _propTypes2.default.bool,
  v: _propTypes2.default.oneOf(['top', 'center', 'bottom']),
  h: _propTypes2.default.oneOf(['left', 'center', 'right']),
  closing: _propTypes2.default.bool,
  onClick: _propTypes2.default.func,
  style: _propTypes2.default.object,
  children: _propTypes2.default.node,
  className: _propTypes2.default.string
};
PopoutWrapper.defaultProps = {
  hasMask: true,
  v: 'center',
  h: 'center',
  closing: false
};
exports.default = PopoutWrapper;

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _getClassName = __webpack_require__(3);

var _getClassName2 = _interopRequireDefault(_getClassName);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

__webpack_require__(150);

var _classnames2 = __webpack_require__(2);

var _classnames3 = _interopRequireDefault(_classnames2);

var _View = __webpack_require__(36);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var baseClassNames = (0, _getClassName2.default)('FixedLayout');

var FixedLayout = function (_React$Component) {
  _inherits(FixedLayout, _React$Component);

  function FixedLayout() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, FixedLayout);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = FixedLayout.__proto__ || Object.getPrototypeOf(FixedLayout)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      transition: false,
      topOffset: null,
      paddings: {}
    }, _this.onViewTransitionStart = function (e) {
      var panelScroll = e.detail.scrolls[_this.context.panel] || 0;
      _this.setPaddings(function () {
        _this.setState({ transition: true, topOffset: _this.el.offsetTop + panelScroll });
      });
    }, _this.onViewTransitionEnd = function () {
      _this.setState({ transition: false, topOffset: null });
    }, _this.getRef = function (el) {
      return _this.el = el;
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(FixedLayout, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.document.addEventListener(_View.transitionStartEventName, this.onViewTransitionStart);
      this.document.addEventListener(_View.transitionEndEventName, this.onViewTransitionEnd);
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      this.document.removeEventListener(_View.transitionStartEventName, this.onViewTransitionStart);
      this.document.removeEventListener(_View.transitionEndEventName, this.onViewTransitionEnd);
    }
  }, {
    key: 'setPaddings',
    value: function setPaddings(callback) {
      if (this.props.vertical === 'bottom') {
        var paddingBottom = parseInt(window.getComputedStyle(this.el).padding);

        this.setState({
          paddings: { paddingBottom: paddingBottom + (this.insets.bottom || 0) }
        }, function () {
          return callback && callback();
        });
      } else {
        callback && callback();
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          className = _props.className,
          children = _props.children,
          style = _props.style,
          vertical = _props.vertical,
          restProps = _objectWithoutProperties(_props, ['className', 'children', 'style', 'vertical']);

      return _react2.default.createElement(
        'div',
        _extends({}, restProps, {
          ref: this.getRef,
          className: (0, _classnames3.default)(baseClassNames, _defineProperty({}, 'FixedLayout--' + vertical, vertical), className),
          style: _extends({}, style, this.state.paddings, this.state.transition ? { position: 'absolute', top: this.state.topOffset } : {})
        }),
        _react2.default.createElement(
          'div',
          { className: 'FixedLayout__in' },
          children
        )
      );
    }
  }, {
    key: 'document',
    get: function get() {
      return this.context.document || document;
    }
  }, {
    key: 'insets',
    get: function get() {
      return this.context.insets || {};
    }
  }]);

  return FixedLayout;
}(_react2.default.Component);

FixedLayout.propTypes = {
  children: _propTypes2.default.node,
  style: _propTypes2.default.object,
  className: _propTypes2.default.string,
  vertical: _propTypes2.default.oneOf(['top', 'bottom'])
};
FixedLayout.contextTypes = {
  insets: _propTypes2.default.shape({
    top: _propTypes2.default.number,
    right: _propTypes2.default.number,
    bottom: _propTypes2.default.number,
    left: _propTypes2.default.number
  }),
  panel: _propTypes2.default.string,
  document: _propTypes2.default.any
};
exports.default = FixedLayout;

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = removeObjectKeys;
function removeObjectKeys() {
  var obj = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var keys = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];

  var newObj = Object.assign({}, obj);

  keys.forEach(function (key) {
    return delete newObj[key];
  });

  return newObj;
}

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var querystring = {
  parse: function parse() {
    var string = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';

    if (typeof string !== 'string') return {};

    var matches = /\?(.+)$/ig.exec(string);
    var str = matches ? matches[1] : string;

    return str.split('&').reduce(function (acc, item) {
      var param = item.split('=');

      if (param[1]) {
        acc[param[0]] = decodeURIComponent(param[1]);
      }

      return acc;
    }, {});
  },
  create: function create() {
    var data = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    var opts = arguments[1];

    if ((typeof data === 'undefined' ? 'undefined' : _typeof(data)) !== 'object' || data === null) return '';

    var options = _extends({ encode: true }, opts);

    return Object.keys(data).reduce(function (acc, item) {
      var type = _typeof(data[item]);

      if (type === 'string' || type === 'number' || type === 'boolean') {
        acc.push(item + '=' + (options.encode ? encodeURIComponent(data[item]) : data[item]));
      }

      if (Array.isArray(data[item])) {
        data[item].forEach(function (value) {
          acc.push(item + '[]=' + (options.encode ? encodeURIComponent(value) : value));
        });
      }

      return acc;
    }, []).join('&');
  }
};

exports.default = querystring;

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var isWebView = exports.isWebView = !!(window && (window.AndroidBridge || window.webkit && window.webkit.messageHandlers));

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

(function webpackUniversalModuleDefinition(root, factory) {
	if(true)
		module.exports = factory(__webpack_require__(0), __webpack_require__(7), __webpack_require__(6));
	else { var i, a; }
})(window, function(__WEBPACK_EXTERNAL_MODULE__0__, __WEBPACK_EXTERNAL_MODULE__1__, __WEBPACK_EXTERNAL_MODULE__2__) {
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
/******/ 	return __webpack_require__(__webpack_require__.s = 192);
/******/ })
/************************************************************************/
/******/ ({

/***/ 0:
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__0__;

/***/ }),

/***/ 1:
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__1__;

/***/ }),

/***/ 192:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _browserSymbol = __webpack_require__(2);

var _browserSymbol2 = _interopRequireDefault(_browserSymbol);

var _browserSprite = __webpack_require__(1);

var _browserSprite2 = _interopRequireDefault(_browserSprite);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var symbol = new _browserSymbol2.default({
  "id": "dropdown_24",
  "use": "dropdown_24-usage",
  "viewBox": "0 0 24 24",
  "content": "<symbol viewBox=\"0 0 24 24\" id=\"dropdown_24\"><g fill=\"none\" fill-rule=\"evenodd\"><path d=\"M0 0h24v24H0z\" /><path d=\"M12 14.198L6.64 9.732a1 1 0 1 0-1.28 1.536l6 5a1 1 0 0 0 1.28 0l6-5a1 1 0 1 0-1.28-1.536L12 14.198z\" fill=\"currentColor\" fill-rule=\"nonzero\" /></g></symbol>"
});
var result = _browserSprite2.default.add(symbol);

var width = symbol.viewBox.split(' ')[2];
var height = symbol.viewBox.split(' ')[3];
var size = Math.max(width, height);

function SvgIcon(_ref) {
  var className = _ref.className,
      fill = _ref.fill,
      style = _ref.style,
      getRootRef = _ref.getRootRef,
      restProps = _objectWithoutProperties(_ref, ["className", "fill", "style", "getRootRef"]);

  return _react2.default.createElement(
    "div",
    _extends({}, restProps, {
      ref: getRootRef,
      className: 'Icon' + ' Icon--' + size + ' Icon--' + symbol.id + ' ' + (className || ''),
      style: _extends({}, style, { width: width + 'px', height: height + 'px' })
    }),
    _react2.default.createElement(
      "svg",
      { viewBox: symbol.viewBox, width: width, height: height, style: { display: 'block' } },
      _react2.default.createElement("use", { xlinkHref: '#' + symbol.id, style: { fill: 'currentColor', color: fill } })
    )
  );
}
exports.default = SvgIcon;

/***/ }),

/***/ 2:
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__2__;

/***/ })

/******/ });
});

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

__webpack_require__(57);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _Touch = __webpack_require__(8);

var _Touch2 = _interopRequireDefault(_Touch);

var _classnames = __webpack_require__(2);

var _classnames2 = _interopRequireDefault(_classnames);

var _getClassName = __webpack_require__(3);

var _getClassName2 = _interopRequireDefault(_getClassName);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var baseClassNames = (0, _getClassName2.default)('Slider');

function precisionRound(number, precision) {
  var factor = Math.pow(10, precision || 1);
  return Math.round(number * factor) / factor;
}

var Slider = function (_Component) {
  _inherits(Slider, _Component);

  function Slider(props) {
    _classCallCheck(this, Slider);

    var _this = _possibleConstructorReturn(this, (Slider.__proto__ || Object.getPrototypeOf(Slider)).call(this, props));

    _this.onStart = function (e) {
      var absolutePosition = _this.validateAbsolute(e.startX - _this.state.containerLeft);
      var percentPosition = _this.absoluteToPecent(absolutePosition);

      _this.onChange(_this.percentToValue(percentPosition));

      if (_this.isControlledOutside) {
        _this.setState({ startX: absolutePosition });
      } else {
        _this.setState({
          startX: absolutePosition,
          percentPosition: percentPosition
        });
      }

      _this.setState({ active: !!e.originalEvent.target.closest('.Slider__thumb') });
    };

    _this.onMoveX = function (e) {
      var absolutePosition = _this.validateAbsolute(_this.state.startX + (e.shiftX || 0));
      var percentPosition = _this.absoluteToPecent(absolutePosition);

      _this.onChange(_this.percentToValue(percentPosition));

      if (!_this.isControlledOutside) {
        _this.setState({ percentPosition: percentPosition });
      }

      e.originalEvent.preventDefault();
    };

    _this.onEnd = function () {
      _this.setState({
        active: false
      });
    };

    _this.onResize = function (callback) {
      _this.setState({
        containerLeft: _this.container.offsetLeft,
        containerWidth: _this.container.offsetWidth
      }, function () {
        typeof callback === 'function' && callback();
      });
    };

    _this.getRef = function (container) {
      _this.container = container;
      _this.props.getRootRef && _this.props.getRootRef(container);
    };

    _this.state = {
      startX: 0
    };
    _this.isControlledOutside = _this.props.hasOwnProperty('value');
    return _this;
  }

  _createClass(Slider, [{
    key: 'onChange',
    value: function onChange(value) {
      this.props.onChange && this.props.onChange(value);
    }
  }, {
    key: 'validateAbsolute',
    value: function validateAbsolute(absolute) {
      var res = Math.max(0, Math.min(absolute, this.state.containerWidth));

      if (this.props.step > 0) {
        var stepCount = (this.props.max - this.props.min) / this.props.step;
        var absStep = this.state.containerWidth / stepCount;

        res = Math.round(res / absStep) * absStep;
      }

      return res;
    }
  }, {
    key: 'validatePercent',
    value: function validatePercent(percent) {
      return Math.max(0, Math.min(percent, 100));
    }
  }, {
    key: 'absoluteToPecent',
    value: function absoluteToPecent(absolute) {
      return absolute * 100 / this.state.containerWidth;
    }
  }, {
    key: 'percentToValue',
    value: function percentToValue(percent) {
      var res = percent * (this.props.max - this.props.min) / 100 + this.props.min;
      if (this.props.step > 0) {
        var stepFloatPart = ('' + this.props.step).split('.')[1] || '';
        return precisionRound(res, stepFloatPart.length);
      }
      return res;
    }
  }, {
    key: 'valueToPercent',
    value: function valueToPercent(value) {
      return (value - this.props.min) * 100 / (this.props.max - this.props.min);
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _this2 = this;

      window.addEventListener('resize', this.onResize);
      this.onResize(function () {
        _this2.setState({ percentPosition: _this2.validatePercent(_this2.valueToPercent(_this2.value)) });
      });
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      if (this.isControlledOutside && nextProps.value !== this.props.value) {
        this.setState({ percentPosition: this.validatePercent(this.valueToPercent(nextProps.value)) });
      }
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      window.removeEventListener('resize', this.onResize);
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          className = _props.className,
          min = _props.min,
          max = _props.max,
          step = _props.step,
          value = _props.value,
          defaultValue = _props.defaultValue,
          onChange = _props.onChange,
          getRootRef = _props.getRootRef,
          restProps = _objectWithoutProperties(_props, ['className', 'min', 'max', 'step', 'value', 'defaultValue', 'onChange', 'getRootRef']);

      return _react2.default.createElement(
        'div',
        _extends({}, restProps, { className: (0, _classnames2.default)(baseClassNames, className), ref: this.getRef }),
        _react2.default.createElement(
          _Touch2.default,
          { onStart: this.onStart, onMoveX: this.onMoveX, onEnd: this.onEnd, className: 'Slider__in' },
          _react2.default.createElement(
            'div',
            { className: 'Slider__dragger', style: { width: this.state.percentPosition + '%' } },
            _react2.default.createElement('span', {
              className: (0, _classnames2.default)('Slider__thumb', 'Slider__thumb--end', {
                'Slider__thumb--active': this.state.active
              })
            })
          )
        )
      );
    }
  }, {
    key: 'value',
    get: function get() {
      if (this.isControlledOutside) {
        return this.props.value;
      } else if (this.props.hasOwnProperty('defaultValue')) {
        return this.props.defaultValue;
      } else {
        return this.props.min;
      }
    }
  }]);

  return Slider;
}(_react.Component);

Slider.propTypes = {
  min: _propTypes2.default.number,
  max: _propTypes2.default.number,
  value: _propTypes2.default.number,
  step: _propTypes2.default.number,
  onChange: _propTypes2.default.func,
  defaultValue: _propTypes2.default.number,
  className: _propTypes2.default.string,
  style: _propTypes2.default.object,
  getRootRef: _propTypes2.default.func
};
Slider.defaultProps = {
  min: 0,
  max: 100,
  step: 0
};
exports.default = Slider;

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _getClassName = __webpack_require__(3);

var _getClassName2 = _interopRequireDefault(_getClassName);

var _classnames2 = __webpack_require__(2);

var _classnames3 = _interopRequireDefault(_classnames2);

__webpack_require__(81);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var baseClassName = (0, _getClassName2.default)('Tabs');

var Tabs = function (_React$Component) {
  _inherits(Tabs, _React$Component);

  function Tabs() {
    _classCallCheck(this, Tabs);

    return _possibleConstructorReturn(this, (Tabs.__proto__ || Object.getPrototypeOf(Tabs)).apply(this, arguments));
  }

  _createClass(Tabs, [{
    key: 'render',
    value: function render() {
      var _classnames;

      var _props = this.props,
          className = _props.className,
          children = _props.children,
          theme = _props.theme,
          style = _props.style,
          type = _props.type,
          getRootRef = _props.getRootRef,
          restProps = _objectWithoutProperties(_props, ['className', 'children', 'theme', 'style', 'type', 'getRootRef']);

      return _react2.default.createElement(
        'div',
        _extends({}, restProps, { ref: getRootRef, className: (0, _classnames3.default)(baseClassName, (_classnames = {}, _defineProperty(_classnames, 'Tabs--' + this.theme, true), _defineProperty(_classnames, 'Tabs--' + type, true), _classnames), className), style: style }),
        children
      );
    }
  }, {
    key: 'theme',


    /**
     * Метод нужен для маппинга устаревших значений theme на новые
     * @returns {string}
     */
    get: function get() {
      switch (this.props.theme) {
        case 'white':
          return 'header';
        case 'gray':
          return 'light';
        default:
          return this.props.theme;
      }
    }
  }]);

  return Tabs;
}(_react2.default.Component);

Tabs.propTypes = {
  children: _propTypes2.default.node,
  className: _propTypes2.default.string,
  /**
   * Значения white и gray устарели. Они будут удалены в следующей мажорной версии
   */
  theme: _propTypes2.default.oneOf(['light', 'header']),
  /**
   * Свойство отвечает за растягивание табов
   */
  type: _propTypes2.default.oneOf(['default', 'buttons']),
  style: _propTypes2.default.object,
  getRootRef: _propTypes2.default.func
};
Tabs.defaultProps = {
  theme: 'light',
  type: 'default'
};
exports.default = Tabs;

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _getClassName = __webpack_require__(3);

var _getClassName2 = _interopRequireDefault(_getClassName);

var _classnames2 = __webpack_require__(2);

var _classnames3 = _interopRequireDefault(_classnames2);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

__webpack_require__(99);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var baseClassName = (0, _getClassName2.default)('Avatar');

var Avatar = function Avatar(_ref) {
  var src = _ref.src,
      size = _ref.size,
      type = _ref.type,
      style = _ref.style,
      className = _ref.className,
      children = _ref.children,
      getRootRef = _ref.getRootRef,
      restProps = _objectWithoutProperties(_ref, ['src', 'size', 'type', 'style', 'className', 'children', 'getRootRef']);

  var Component = src ? 'img' : 'div';
  var borderRadius = void 0;

  switch (type) {
    case 'default':
      borderRadius = '50%';
      break;
    case 'image':
      borderRadius = 4;
      break;
    case 'app':
      borderRadius = Math.floor(size * 10 / 48);
      break;
  }

  return _react2.default.createElement(
    'div',
    { className: (0, _classnames3.default)(baseClassName, className, _defineProperty({}, 'Avatar--type-' + type, true)), ref: getRootRef },
    _react2.default.createElement(
      'div',
      { className: 'Avatar__in' },
      _react2.default.createElement(Component, _extends({}, restProps, {
        className: 'Avatar__img',
        src: src,
        style: _extends({}, style, { width: size, height: size, borderRadius: borderRadius })
      })),
      children && _react2.default.createElement(
        'div',
        { className: 'Avatar__children', style: { width: size, height: size, borderRadius: borderRadius } },
        children
      )
    )
  );
};

Avatar.propTypes = {
  size: _propTypes2.default.oneOf([80, 72, 64, 56, 48, 40, 36, 32, 28]),
  src: _propTypes2.default.string,
  style: _propTypes2.default.object,
  className: _propTypes2.default.string,
  type: _propTypes2.default.oneOf(['default', 'image', 'app']),
  children: _propTypes2.default.node,
  getRootRef: _propTypes2.default.func
};

Avatar.defaultProps = {
  size: 48,
  type: 'default'
};

exports.default = Avatar;

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = Div;

__webpack_require__(107);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = __webpack_require__(2);

var _classnames2 = _interopRequireDefault(_classnames);

var _getClassName = __webpack_require__(3);

var _getClassName2 = _interopRequireDefault(_getClassName);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var baseClassNames = (0, _getClassName2.default)('Div');

function Div(_ref) {
  var className = _ref.className,
      children = _ref.children,
      getRootRef = _ref.getRootRef,
      restProps = _objectWithoutProperties(_ref, ['className', 'children', 'getRootRef']);

  return _react2.default.createElement(
    'div',
    _extends({}, restProps, { ref: getRootRef, className: (0, _classnames2.default)(baseClassNames, className) }),
    children
  );
}

Div.propTypes = {
  style: _propTypes2.default.object,
  children: _propTypes2.default.node,
  className: _propTypes2.default.string,
  getRootRef: _propTypes2.default.func
};

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

(function webpackUniversalModuleDefinition(root, factory) {
	if(true)
		module.exports = factory(__webpack_require__(0), __webpack_require__(7), __webpack_require__(6));
	else { var i, a; }
})(window, function(__WEBPACK_EXTERNAL_MODULE__0__, __WEBPACK_EXTERNAL_MODULE__1__, __WEBPACK_EXTERNAL_MODULE__2__) {
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
/******/ 	return __webpack_require__(__webpack_require__.s = 205);
/******/ })
/************************************************************************/
/******/ ({

/***/ 0:
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__0__;

/***/ }),

/***/ 1:
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__1__;

/***/ }),

/***/ 2:
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__2__;

/***/ }),

/***/ 205:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _browserSymbol = __webpack_require__(2);

var _browserSymbol2 = _interopRequireDefault(_browserSymbol);

var _browserSprite = __webpack_require__(1);

var _browserSprite2 = _interopRequireDefault(_browserSprite);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var symbol = new _browserSymbol2.default({
  "id": "cancel_24",
  "use": "cancel_24-usage",
  "viewBox": "0 0 24 24",
  "content": "<symbol viewBox=\"0 0 24 24\" id=\"cancel_24\"><g fill=\"none\" fill-rule=\"evenodd\"><path d=\"M0 0h24v24H0z\" /><path d=\"M18.3 5.7a.99.99 0 0 0-1.4 0L12 10.6 7.1 5.7a.99.99 0 0 0-1.4 1.4l4.9 4.9-4.9 4.9a.99.99 0 0 0 1.4 1.4l4.9-4.9 4.9 4.9a.99.99 0 0 0 1.4-1.4L13.4 12l4.9-4.9a.99.99 0 0 0 0-1.4z\" fill=\"currentColor\" /></g></symbol>"
});
var result = _browserSprite2.default.add(symbol);

var width = symbol.viewBox.split(' ')[2];
var height = symbol.viewBox.split(' ')[3];
var size = Math.max(width, height);

function SvgIcon(_ref) {
  var className = _ref.className,
      fill = _ref.fill,
      style = _ref.style,
      getRootRef = _ref.getRootRef,
      restProps = _objectWithoutProperties(_ref, ["className", "fill", "style", "getRootRef"]);

  return _react2.default.createElement(
    "div",
    _extends({}, restProps, {
      ref: getRootRef,
      className: 'Icon' + ' Icon--' + size + ' Icon--' + symbol.id + ' ' + (className || ''),
      style: _extends({}, style, { width: width + 'px', height: height + 'px' })
    }),
    _react2.default.createElement(
      "svg",
      { viewBox: symbol.viewBox, width: width, height: height, style: { display: 'block' } },
      _react2.default.createElement("use", { xlinkHref: '#' + symbol.id, style: { fill: 'currentColor', color: fill } })
    )
  );
}
exports.default = SvgIcon;

/***/ })

/******/ });
});

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

(function webpackUniversalModuleDefinition(root, factory) {
	if(true)
		module.exports = factory(__webpack_require__(0), __webpack_require__(7), __webpack_require__(6));
	else { var i, a; }
})(window, function(__WEBPACK_EXTERNAL_MODULE__0__, __WEBPACK_EXTERNAL_MODULE__1__, __WEBPACK_EXTERNAL_MODULE__2__) {
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
/******/ 	return __webpack_require__(__webpack_require__.s = 242);
/******/ })
/************************************************************************/
/******/ ({

/***/ 0:
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__0__;

/***/ }),

/***/ 1:
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__1__;

/***/ }),

/***/ 2:
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__2__;

/***/ }),

/***/ 242:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _browserSymbol = __webpack_require__(2);

var _browserSymbol2 = _interopRequireDefault(_browserSymbol);

var _browserSprite = __webpack_require__(1);

var _browserSprite2 = _interopRequireDefault(_browserSprite);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var symbol = new _browserSymbol2.default({
  "id": "done_16",
  "use": "done_16-usage",
  "viewBox": "0 0 16 16",
  "content": "<symbol viewBox=\"0 0 16 16\" id=\"done_16\"><g fill=\"none\" fill-rule=\"evenodd\"><path d=\"M0 0h16v16H0z\" /><path d=\"M6 10.2L3.5 7.7a.99.99 0 1 0-1.4 1.4l3.193 3.193a1 1 0 0 0 1.414 0L14.3 4.7a.99.99 0 0 0-1.4-1.4L6 10.2z\" fill=\"currentColor\" /></g></symbol>"
});
var result = _browserSprite2.default.add(symbol);

var width = symbol.viewBox.split(' ')[2];
var height = symbol.viewBox.split(' ')[3];
var size = Math.max(width, height);

function SvgIcon(_ref) {
  var className = _ref.className,
      fill = _ref.fill,
      style = _ref.style,
      getRootRef = _ref.getRootRef,
      restProps = _objectWithoutProperties(_ref, ["className", "fill", "style", "getRootRef"]);

  return _react2.default.createElement(
    "div",
    _extends({}, restProps, {
      ref: getRootRef,
      className: 'Icon' + ' Icon--' + size + ' Icon--' + symbol.id + ' ' + (className || ''),
      style: _extends({}, style, { width: width + 'px', height: height + 'px' })
    }),
    _react2.default.createElement(
      "svg",
      { viewBox: symbol.viewBox, width: width, height: height, style: { display: 'block' } },
      _react2.default.createElement("use", { xlinkHref: '#' + symbol.id, style: { fill: 'currentColor', color: fill } })
    )
  );
}
exports.default = SvgIcon;

/***/ })

/******/ });
});

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _getClassName = __webpack_require__(3);

var _getClassName2 = _interopRequireDefault(_getClassName);

var _classnames2 = __webpack_require__(2);

var _classnames3 = _interopRequireDefault(_classnames2);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

__webpack_require__(122);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var baseClassNames = (0, _getClassName2.default)('Header');

var Header = function Header(_ref) {
  var className = _ref.className,
      level = _ref.level,
      children = _ref.children,
      aside = _ref.aside,
      getRootRef = _ref.getRootRef,
      restProps = _objectWithoutProperties(_ref, ['className', 'level', 'children', 'aside', 'getRootRef']);

  return _react2.default.createElement(
    'div',
    _extends({}, restProps, {
      ref: getRootRef,
      className: (0, _classnames3.default)(baseClassNames, className, _defineProperty({}, 'Header--level-' + level, true))
    }),
    _react2.default.createElement(
      'div',
      { className: 'Header__in' },
      _react2.default.createElement(
        'div',
        { className: 'Header__content' },
        children
      ),
      aside && _react2.default.createElement(
        'div',
        { className: 'Header__aside' },
        aside
      )
    )
  );
};

Header.propTypes = {
  className: _propTypes2.default.string,
  level: _propTypes2.default.oneOf(['1', '2']),
  aside: _propTypes2.default.node,
  children: _propTypes2.default.node,
  style: _propTypes2.default.object,
  getRootRef: _propTypes2.default.func
};

Header.defaultProps = {
  level: '1'
};

exports.default = Header;

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _Tappable = __webpack_require__(5);

var _Tappable2 = _interopRequireDefault(_Tappable);

var _getClassName = __webpack_require__(3);

var _getClassName2 = _interopRequireDefault(_getClassName);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames2 = __webpack_require__(2);

var _classnames3 = _interopRequireDefault(_classnames2);

__webpack_require__(124);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var baseClassName = (0, _getClassName2.default)('Button');

var Button = function (_React$Component) {
  _inherits(Button, _React$Component);

  function Button() {
    _classCallCheck(this, Button);

    return _possibleConstructorReturn(this, (Button.__proto__ || Object.getPrototypeOf(Button)).apply(this, arguments));
  }

  _createClass(Button, [{
    key: 'render',
    value: function render() {
      var _classnames;

      var _props = this.props,
          className = _props.className,
          size = _props.size,
          level = _props.level,
          type = _props.type,
          stretched = _props.stretched,
          align = _props.align,
          children = _props.children,
          before = _props.before,
          restProps = _objectWithoutProperties(_props, ['className', 'size', 'level', 'type', 'stretched', 'align', 'children', 'before']);

      switch (type) {
        case 'default':
          level = level || '1';
          break;
        case 'cell':
          level = level || 'primary';
      }

      var classNames = (0, _classnames3.default)(baseClassName, className, (_classnames = {}, _defineProperty(_classnames, 'Button--size-' + size, type === 'default' && size), _defineProperty(_classnames, 'Button--level-' + level, level), _defineProperty(_classnames, 'Button--type-' + type, type), _defineProperty(_classnames, 'Button--align-' + align, type === 'cell' && align), _defineProperty(_classnames, 'Button--stretched', type === 'default' && stretched), _classnames));

      return _react2.default.createElement(
        _Tappable2.default,
        _extends({}, restProps, { className: classNames, stopPropagation: true }),
        _react2.default.createElement(
          'div',
          { className: 'Button__in' },
          before && _react2.default.createElement(
            'div',
            { className: 'Button__before' },
            before
          ),
          children && _react2.default.createElement(
            'div',
            { className: 'Button__content' },
            children
          )
        )
      );
    }
  }]);

  return Button;
}(_react2.default.Component);

Button.propTypes = {
  level: _propTypes2.default.oneOf(['1', '2', '3', 'sell', 'buy', 'primary', 'danger']),
  size: _propTypes2.default.oneOf(['m', 'l', 'xl']),
  type: _propTypes2.default.oneOf(['default', 'cell']),
  align: _propTypes2.default.oneOf(['left', 'center', 'right']),
  stretched: _propTypes2.default.bool,
  before: _propTypes2.default.node,
  children: _propTypes2.default.node,
  style: _propTypes2.default.object,
  className: _propTypes2.default.string,
  component: _propTypes2.default.any
};
Button.defaultProps = {
  type: 'default',
  component: 'button',
  align: 'left',
  size: 'm',
  stretched: false
};
exports.default = Button;

/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = keyframes;
function keyframes(name, obj) {
  if (!name || !obj) {
    return '';
  }

  var selectors = Object.keys(obj).map(function (key) {
    return key + ' {' + Object.keys(obj[key]).map(function (k) {
      return k + ':' + obj[key][k];
    }).join(';') + '}';
  }).join('');

  return '@-webkit-keyframes ' + name + ' {' + selectors + '} @keyframes ' + name + ' {' + selectors + '}';
}

/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

__webpack_require__(128);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _getClassName = __webpack_require__(3);

var _getClassName2 = _interopRequireDefault(_getClassName);

var _platform = __webpack_require__(4);

var _classnames = __webpack_require__(2);

var _classnames2 = _interopRequireDefault(_classnames);

var _AndroidSpinner = __webpack_require__(126);

var _AndroidSpinner2 = _interopRequireDefault(_AndroidSpinner);

var _IosSpinner = __webpack_require__(125);

var _IosSpinner2 = _interopRequireDefault(_IosSpinner);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var osname = (0, _platform.platform)();
var baseClassNames = (0, _getClassName2.default)('Spinner');

var Spinner = function (_Component) {
  _inherits(Spinner, _Component);

  function Spinner() {
    _classCallCheck(this, Spinner);

    return _possibleConstructorReturn(this, (Spinner.__proto__ || Object.getPrototypeOf(Spinner)).apply(this, arguments));
  }

  _createClass(Spinner, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          on = _props.on,
          progress = _props.progress,
          size = _props.size,
          style = _props.style,
          className = _props.className;

      var isAnimated = on && progress === null;
      var modifiers = {
        'Spinner--on': isAnimated
      };

      var Component = osname === _platform.IOS ? _IosSpinner2.default : _AndroidSpinner2.default;

      return _react2.default.createElement(
        'div',
        { className: (0, _classnames2.default)(baseClassNames, modifiers, className), style: style },
        _react2.default.createElement(
          'svg',
          {
            className: 'Spinner__self',
            style: { width: size, height: size },
            viewBox: '0 0 ' + size + ' ' + size,
            xmlns: 'http://www.w3.org/2000/svg'
          },
          _react2.default.createElement(Component, this.props)
        )
      );
    }
  }]);

  return Spinner;
}(_react.Component);

Spinner.propTypes = {
  style: _propTypes2.default.object,
  color: _propTypes2.default.string,
  size: _propTypes2.default.number,
  androidStrokeWidth: _propTypes2.default.number,
  on: _propTypes2.default.bool,
  progress: _propTypes2.default.number,
  className: _propTypes2.default.string
};
Spinner.defaultProps = {
  color: osname === _platform.ANDROID ? '#5181b8' : '#262626',
  androidStrokeWidth: 4,
  size: osname === _platform.ANDROID ? 38 : 20,
  animated: true,
  on: true,
  progress: null
};
exports.default = Spinner;

/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames2 = __webpack_require__(2);

var _classnames3 = _interopRequireDefault(_classnames2);

var _getClassName = __webpack_require__(3);

var _getClassName2 = _interopRequireDefault(_getClassName);

var _Tappable = __webpack_require__(5);

var _Tappable2 = _interopRequireDefault(_Tappable);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var baseClassNames = (0, _getClassName2.default)('ActionSheetItem');

var ActionSheetItem = function ActionSheetItem(_ref) {
  var className = _ref.className,
      children = _ref.children,
      autoclose = _ref.autoclose,
      theme = _ref.theme,
      restProps = _objectWithoutProperties(_ref, ['className', 'children', 'autoclose', 'theme']);

  return _react2.default.createElement(
    _Tappable2.default,
    _extends({}, restProps, {
      className: (0, _classnames3.default)(baseClassNames, className, _defineProperty({}, 'ActionSheetItem--' + theme, true)),
      component: theme === 'cancel' ? 'span' : 'div'
    }),
    children
  );
};

ActionSheetItem.propTypes = {
  theme: _propTypes2.default.oneOf(['default', 'destructive', 'cancel']),
  children: _propTypes2.default.node,
  style: _propTypes2.default.object,
  onClick: _propTypes2.default.func,
  className: _propTypes2.default.string,
  autoclose: _propTypes2.default.bool
};

ActionSheetItem.defaultProps = {
  theme: 'default'
};

exports.default = ActionSheetItem;

/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _PopoutWrapper = __webpack_require__(11);

var _PopoutWrapper2 = _interopRequireDefault(_PopoutWrapper);

var _getClassName = __webpack_require__(3);

var _getClassName2 = _interopRequireDefault(_getClassName);

var _classnames = __webpack_require__(2);

var _classnames2 = _interopRequireDefault(_classnames);

__webpack_require__(132);

var _platform = __webpack_require__(4);

var _transitionEvents = __webpack_require__(10);

var _transitionEvents2 = _interopRequireDefault(_transitionEvents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var osname = (0, _platform.platform)();

var baseClassNames = (0, _getClassName2.default)('ActionSheet');

var ActionSheet = function (_React$Component) {
  _inherits(ActionSheet, _React$Component);

  function ActionSheet() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, ActionSheet);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = ActionSheet.__proto__ || Object.getPrototypeOf(ActionSheet)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      closing: false
    }, _this.onClose = function () {
      _this.setState({ closing: true });
      _this.waitTransitionFinish(_this.props.onClose);
    }, _this.onItemClick = function (action, autoclose) {
      return function () {
        if (autoclose) {
          _this.setState({ closing: true });
          _this.waitTransitionFinish(function () {
            autoclose && _this.props.onClose();
            action && action();
          });
        } else {
          action && action();
        }
      };
    }, _this.getRef = function (el) {
      return _this.el = el;
    }, _this.stopPropagation = function (e) {
      return e.stopPropagation();
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(ActionSheet, [{
    key: 'waitTransitionFinish',
    value: function waitTransitionFinish(eventHandler) {
      if (_transitionEvents2.default.supported) {
        var eventName = _transitionEvents2.default.prefix ? _transitionEvents2.default.prefix + 'TransitionEnd' : 'transitionend';

        this.el.removeEventListener(eventName, eventHandler);
        this.el.addEventListener(eventName, eventHandler);
      } else {
        setTimeout(eventHandler.bind(this), osname === _platform.ANDROID ? 200 : 300);
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          children = _props.children,
          className = _props.className,
          title = _props.title,
          text = _props.text,
          style = _props.style,
          restProps = _objectWithoutProperties(_props, ['children', 'className', 'title', 'text', 'style']);

      return _react2.default.createElement(
        _PopoutWrapper2.default,
        {
          closing: this.state.closing,
          v: osname === _platform.IOS ? 'bottom' : 'center',
          h: 'center',
          className: className,
          style: style,
          onClick: this.onClose
        },
        _react2.default.createElement(
          'div',
          _extends({}, restProps, { ref: this.getRef, onClick: this.stopPropagation, className: (0, _classnames2.default)(baseClassNames, {
              'ActionSheet--closing': this.state.closing
            }) }),
          osname === _platform.IOS && _react2.default.createElement(
            'header',
            { className: 'ActionSheet__header' },
            title && _react2.default.createElement(
              'div',
              { className: 'ActionSheet__title' },
              title
            ),
            text && _react2.default.createElement(
              'div',
              { className: 'ActionSheet__text' },
              text
            )
          ),
          _react2.default.Children.map(children, function (Child) {
            return Child && _react2.default.cloneElement(Child, {
              onClick: _this2.onItemClick(Child.props.onClick, Child.props.autoclose)
            });
          }, null)
        )
      );
    }
  }]);

  return ActionSheet;
}(_react2.default.Component);

ActionSheet.propTypes = {
  /**
   * iOS only
   */
  title: _propTypes2.default.node,
  /**
   * iOS only
   */
  text: _propTypes2.default.node,
  onClose: _propTypes2.default.func.isRequired,
  style: _propTypes2.default.object,
  children: _propTypes2.default.node,
  className: _propTypes2.default.string
};
exports.default = ActionSheet;

/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

__webpack_require__(136);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _Tappable = __webpack_require__(5);

var _Tappable2 = _interopRequireDefault(_Tappable);

var _PopoutWrapper = __webpack_require__(11);

var _PopoutWrapper2 = _interopRequireDefault(_PopoutWrapper);

var _getClassName = __webpack_require__(3);

var _getClassName2 = _interopRequireDefault(_getClassName);

var _classnames2 = __webpack_require__(2);

var _classnames3 = _interopRequireDefault(_classnames2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var baseClassNames = (0, _getClassName2.default)('Alert');

var Alert = function (_Component) {
  _inherits(Alert, _Component);

  function Alert() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Alert);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Alert.__proto__ || Object.getPrototypeOf(Alert)).call.apply(_ref, [this].concat(args))), _this), _this.onItemClick = function (item) {
      return function () {
        item.autoclose && _this.props.onClose();
        item.action && item.action();
      };
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Alert, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          actions = _props.actions,
          actionsLayout = _props.actionsLayout,
          children = _props.children,
          className = _props.className,
          style = _props.style,
          restProps = _objectWithoutProperties(_props, ['actions', 'actionsLayout', 'children', 'className', 'style']);

      return _react2.default.createElement(
        _PopoutWrapper2.default,
        { className: className, style: style },
        _react2.default.createElement(
          'div',
          _extends({}, restProps, { className: (0, _classnames3.default)(baseClassNames, {
              'Alert--v': actionsLayout === 'vertical',
              'Alert--h': actionsLayout === 'horizontal'
            }) }),
          _react2.default.createElement(
            'div',
            { className: 'Alert__content' },
            children
          ),
          _react2.default.createElement(
            'footer',
            { className: 'Alert__footer' },
            actions.map(function (button, i) {
              return _react2.default.createElement(
                _Tappable2.default,
                {
                  component: 'button',
                  className: (0, _classnames3.default)('Alert__btn', _defineProperty({}, 'Alert__btn--' + button.style, true)),
                  onClick: _this2.onItemClick(button),
                  key: 'alert-action-' + i
                },
                _react2.default.createElement('span', { dangerouslySetInnerHTML: { __html: button.title } })
              );
            })
          )
        )
      );
    }
  }]);

  return Alert;
}(_react.Component);

Alert.propTypes = {
  style: _propTypes2.default.object,
  className: _propTypes2.default.string,
  children: _propTypes2.default.node,
  actionsLayout: _propTypes2.default.oneOf(['vertical', 'horizontal']),
  actions: _propTypes2.default.arrayOf(_propTypes2.default.shape({
    title: _propTypes2.default.string,
    action: _propTypes2.default.func,
    style: _propTypes2.default.oneOf(['primary', 'cancel', 'destructive', 'default'])
  })),
  onClose: _propTypes2.default.func
};
Alert.defaultProps = {
  actionsLayout: 'horizontal',
  actions: []
};
exports.default = Alert;

/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getOffsetRect = getOffsetRect;
function getOffsetRect(elem) {
  var box = elem.getBoundingClientRect();
  var body = document.body;
  var doc = document.documentElement;
  var scrollTop = window.pageYOffset || doc.scrollTop || body.scrollTop;
  var scrollLeft = window.pageXOffset || doc.scrollLeft || body.scrollLeft;
  var clientTop = doc.clientTop || body.clientTop || 0;
  var clientLeft = doc.clientLeft || body.clientLeft || 0;

  return {
    top: Math.round(box.top + scrollTop - clientTop),
    left: Math.round(box.left + scrollLeft - clientLeft),
    width: elem.offsetWidth,
    height: elem.offsetHeight
  };
}

/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _Tappable = __webpack_require__(5);

var _Tappable2 = _interopRequireDefault(_Tappable);

var _getClassName = __webpack_require__(3);

var _getClassName2 = _interopRequireDefault(_getClassName);

var _classnames = __webpack_require__(2);

var _classnames2 = _interopRequireDefault(_classnames);

__webpack_require__(153);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var baseClassName = (0, _getClassName2.default)('HeaderButton');

var HeaderButton = function HeaderButton(_ref) {
  var className = _ref.className,
      children = _ref.children,
      primary = _ref.primary,
      restProps = _objectWithoutProperties(_ref, ['className', 'children', 'primary']);

  var isPrimitive = typeof children === 'string' || typeof children === 'number';

  return _react2.default.createElement(
    _Tappable2.default,
    _extends({}, restProps, { component: 'button', className: (0, _classnames2.default)(baseClassName, className, {
        'HeaderButton--primary': primary
      }) }),
    isPrimitive ? _react2.default.createElement(
      'span',
      { className: 'HeaderButton__primitive' },
      children
    ) : children
  );
};

HeaderButton.propTypes = {
  children: _propTypes2.default.node,
  className: _propTypes2.default.string,
  primary: _propTypes2.default.bool
};

HeaderButton.defaultProps = {
  primary: false
};

exports.default = HeaderButton;

/***/ }),
/* 33 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__33__;

/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.baseClassNames = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(33);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _getClassName = __webpack_require__(3);

var _getClassName2 = _interopRequireDefault(_getClassName);

var _classnames6 = __webpack_require__(2);

var _classnames7 = _interopRequireDefault(_classnames6);

__webpack_require__(160);

var _platform = __webpack_require__(4);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var osname = (0, _platform.platform)();

var baseClassNames = exports.baseClassNames = (0, _getClassName2.default)('PanelHeader');

var PanelHeader = function (_React$Component) {
  _inherits(PanelHeader, _React$Component);

  function PanelHeader() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, PanelHeader);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = PanelHeader.__proto__ || Object.getPrototypeOf(PanelHeader)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      ready: false,
      rightWidth: null,
      leftWidth: null
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(PanelHeader, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.leftNode = this.document.getElementById('header-left-' + this.context.panel);
      this.addonNode = this.document.getElementById('header-addon-' + this.context.panel);
      this.titleNode = this.document.getElementById('header-title-' + this.context.panel);
      this.rightNode = this.document.getElementById('header-right-' + this.context.panel);
      this.bgNode = this.document.getElementById('header-bg-' + this.context.panel);
      this.setState({ ready: true });
    }
  }, {
    key: 'render',
    value: function render() {
      var _classnames, _classnames5;

      var _props = this.props,
          left = _props.left,
          addon = _props.addon,
          children = _props.children,
          right = _props.right,
          theme = _props.theme,
          noShadow = _props.noShadow;

      var isPrimitive = typeof children === 'string' || typeof children === 'number';

      return this.state.ready ? [_reactDom2.default.createPortal(_react2.default.createElement('div', { className: (0, _classnames7.default)('PanelHeader-bg', (_classnames = {}, _defineProperty(_classnames, 'PanelHeader-bg--' + theme, true), _defineProperty(_classnames, 'PanelHeader-bg--no-shadow', noShadow), _classnames)) }), this.bgNode), _reactDom2.default.createPortal(_react2.default.createElement(
        'div',
        { className: (0, _classnames7.default)('PanelHeader-left-in', _defineProperty({}, 'PanelHeader-left-in--' + theme, true)) },
        left
      ), this.leftNode), osname === _platform.IOS && _reactDom2.default.createPortal(_react2.default.createElement(
        'div',
        { className: (0, _classnames7.default)('PanelHeader-addon', _defineProperty({}, 'PanelHeader-addon--' + theme, true)) },
        addon
      ), this.addonNode), _reactDom2.default.createPortal(_react2.default.createElement(
        'div',
        { className: (0, _classnames7.default)('PanelHeader-content', _defineProperty({}, 'PanelHeader-content--' + theme, true)) },
        isPrimitive ? _react2.default.createElement(
          'span',
          null,
          children
        ) : children
      ), this.titleNode), _reactDom2.default.createPortal(_react2.default.createElement(
        'div',
        { className: (0, _classnames7.default)('PanelHeader-right', (_classnames5 = {}, _defineProperty(_classnames5, 'PanelHeader-right--' + theme, true), _defineProperty(_classnames5, 'PanelHeader-right--vkapps', this.webviewType === 'vkapps'), _classnames5)) },
        this.webviewType === 'internal' ? right : null
      ), this.rightNode)] : null;
    }
  }, {
    key: 'document',
    get: function get() {
      return this.context.document || document;
    }
  }, {
    key: 'webviewType',
    get: function get() {
      return this.context.webviewType || 'vkapps';
    }
  }]);

  return PanelHeader;
}(_react2.default.Component);

PanelHeader.propTypes = {
  left: _propTypes2.default.node,
  /**
   * iOS only
   */
  addon: _propTypes2.default.node,
  right: _propTypes2.default.node,
  children: _propTypes2.default.node,
  theme: _propTypes2.default.oneOf(['light', 'brand']),
  noShadow: _propTypes2.default.bool
};
PanelHeader.defaultProps = {
  theme: 'brand',
  noShadow: false
};
PanelHeader.contextTypes = {
  panel: _propTypes2.default.string,
  document: _propTypes2.default.any,
  webviewType: _propTypes2.default.oneOf(['vkapps', 'internal'])
};
exports.default = PanelHeader;

/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

/**
 * Получает кординату по оси абсцисс из touch- или mouse-события
 *
 * @param {Object} e Бразуерное событие
 * @returns {Number} Координата взаимодействия по оси абсцисс
 */
var coordX = function coordX(e) {
  return e.clientX || e.touches && e.touches[0].clientX;
};

/**
 * Получает кординату по оси ординат из touch- или mouse-события
 *
 * @param {Object} e Бразуерное событие
 * @returns {Number} Координата взаимодействия по оси ординат
 */
var coordY = function coordY(e) {
  return e.clientY || e.touches && e.touches[0].clientY;
};

var isClient = typeof window !== 'undefined';
var touchEnabled = isClient && 'ontouchstart' in window;

/**
 * Возвращает массив поддерживаемых событий
 * Если браузер поддерживает pointer events или подключена handjs, вернет события указателя.
 * Если нет, используем события мыши
 *
 * @returns {Array} Массив с названиями событий
 */
function getSupportedEvents() {
  if (touchEnabled) {
    return ['touchstart', 'touchmove', 'touchend', 'touchcancel'];
  }

  return ['mousedown', 'mousemove', 'mouseup', 'mouseleave'];
}

exports.getSupportedEvents = getSupportedEvents;
exports.coordX = coordX;
exports.coordY = coordY;
exports.touchEnabled = touchEnabled;

/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.transitionEndEventName = exports.transitionStartEventName = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

__webpack_require__(163);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames2 = __webpack_require__(2);

var _classnames3 = _interopRequireDefault(_classnames2);

var _animate = __webpack_require__(161);

var _animate2 = _interopRequireDefault(_animate);

var _transitionEvents = __webpack_require__(10);

var _transitionEvents2 = _interopRequireDefault(_transitionEvents);

var _getClassName = __webpack_require__(3);

var _getClassName2 = _interopRequireDefault(_getClassName);

var _platform = __webpack_require__(4);

var _Touch = __webpack_require__(8);

var _Touch2 = _interopRequireDefault(_Touch);

var _removeObjectKeys = __webpack_require__(13);

var _removeObjectKeys2 = _interopRequireDefault(_removeObjectKeys);

var _PanelHeader = __webpack_require__(34);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var osname = (0, _platform.platform)();
var baseClassNames = (0, _getClassName2.default)('View');

var transitionStartEventName = exports.transitionStartEventName = 'VKUI:View:transition-start';
var transitionEndEventName = exports.transitionEndEventName = 'VKUI:View:transition-end';

var View = function (_Component) {
  _inherits(View, _Component);

  function View(props) {
    _classCallCheck(this, View);

    var _this = _possibleConstructorReturn(this, (View.__proto__ || Object.getPrototypeOf(View)).call(this, props));

    _this.refsStore = {};

    _this.transitionEndHandler = function () {
      var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : { manual: true };

      if (['animation-ios-next-forward', 'animation-ios-next-back', 'animation-ios-prev-forward', 'animation-ios-prev-back', 'animation-android-next-forward', 'animation-android-prev-back'].indexOf(e.animationName) > -1 || e.manual) {
        var activePanel = _this.props.activePanel;
        var isBack = _this.state.isBack;
        var prevPanel = _this.state.prevPanel;
        _this.document.dispatchEvent(new _this.window.CustomEvent(transitionEndEventName));
        _this.setState({
          prevPanel: null,
          nextPanel: null,
          visiblePanels: [activePanel],
          activePanel: activePanel,
          animated: false,
          isBack: undefined,
          scrolls: isBack ? (0, _removeObjectKeys2.default)(_this.state.scrolls, [prevPanel]) : _this.state.scrolls
        }, function () {
          isBack && this.window.scrollTo(0, this.state.scrolls[activePanel]);
          this.props.onTransition && this.props.onTransition();
        });
      }
    };

    _this.swipingBackTransitionEndHandler = function (e) {
      // indexOf because of vendor prefixes in old browsers
      if (e.propertyName.indexOf('transform') >= 0 && e.target.classList.contains('View__panel--swipe-back-next')) {
        _this.state.swipingBackFinish ? _this.onSwipeBackSuccess() : _this.onSwipeBackCancel();
      }
    };

    _this.onScrollTop = function () {
      var activePanel = _this.state.activePanel;


      if (activePanel) {
        var scrollTop = _this.document.body.scrollTop || _this.document.this.documentElement.scrollTop;

        if (scrollTop) {
          (0, _animate2.default)({
            duration: 200,
            timing: function timing(n) {
              return Math.sqrt(n);
            },
            draw: function draw(val) {
              _this.window.scrollTo(0, scrollTop - val * scrollTop);
            }
          });
        }
      }
    };

    _this.onMoveX = function (e) {
      if (osname === _platform.IOS && !_this.context.isWebView && (e.startX <= 70 || e.startX >= _this.window.innerWidth - 70) && !_this.state.browserSwipe) {
        _this.setState({ browserSwipe: true });
      }

      if (osname === _platform.IOS && _this.context.isWebView && _this.props.onSwipeBack) {
        if (_this.state.animated && e.startX <= 70) {
          return;
        }

        if (e.startX <= 70 && !_this.state.swipingBack && _this.props.history.length > 1) {
          _this.setState({
            swipingBack: true,
            swipebackStartX: e.startX,
            startT: e.startT,
            swipeBackPrevPanel: _this.state.activePanel,
            swipeBackNextPanel: _this.props.history.slice(-2)[0],
            scrolls: Object.assign({}, _this.state.scrolls, _defineProperty({}, _this.state.activePanel, _this.window.pageYOffset))
          });
        }
        if (_this.state.swipingBack) {
          var swipeBackShift = void 0;
          if (e.shiftX < 0) {
            swipeBackShift = 0;
          } else if (e.shiftX > _this.window.innerWidth - _this.state.swipebackStartX) {
            swipeBackShift = _this.window.innerWidth;
          } else {
            swipeBackShift = e.shiftX;
          }
          _this.setState({ swipeBackShift: swipeBackShift });
        }
      }
    };

    _this.onEnd = function () {
      if (_this.state.swipingBack) {
        var speed = _this.state.swipeBackShift / (new Date() - _this.state.startT) * 1000;
        if (_this.state.swipeBackShift === 0) {
          _this.onSwipeBackCancel();
        } else if (_this.state.swipeBackShift >= _this.window.innerWidth) {
          _this.onSwipeBackSuccess();
        } else {
          _this.setState({ swipingBackFinish: speed > 250 || _this.state.swipebackStartX + _this.state.swipeBackShift > _this.window.innerWidth / 2 });
        }
      }
    };

    _this.getRef = function (c) {
      if (c && c.container && c.id) {
        var el = c;

        while (el.container) {
          el = el.container;
        }

        _this.refsStore[c.id] = el;
      }
    };

    _this.state = {
      scrolls: {},

      visiblePanels: [props.activePanel],
      activePanel: props.activePanel,
      isBack: undefined,
      prevPanel: null,
      nextPanel: null,

      swipingBack: false,
      swipebackStartX: 0,
      swipeBackShift: 0,
      swipeBackNextPanel: null,
      swipeBackPrevPanel: null,
      swipingBackFinish: null,

      browserSwipe: false
    };
    return _this;
  }

  _createClass(View, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      this.setPanelBg(this.props.activePanel);
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      var _this2 = this;

      if (this.props.activePanel !== nextProps.activePanel) {
        this.setPanelBg(nextProps.activePanel);
      }

      if (nextProps.popout && !this.props.popout) {
        this.blurActiveElement();
      }

      // Нужен переход
      if (this.props.activePanel !== nextProps.activePanel && !this.state.swipingBack && !this.state.browserSwipe) {
        var firstLayer = this.panels.find(function (panel) {
          return panel.props.id === _this2.props.activePanel || panel.props.id === nextProps.activePanel;
        });

        var isBack = firstLayer && firstLayer.props.id === nextProps.activePanel;

        this.blurActiveElement();

        this.setState({
          visiblePanels: [this.props.activePanel, nextProps.activePanel],
          prevPanel: this.props.activePanel,
          nextPanel: nextProps.activePanel,
          activePanel: null,
          animated: true,
          scrolls: Object.assign({}, this.state.scrolls, _defineProperty({}, this.props.activePanel, this.window.pageYOffset)),
          isBack: isBack
        });
      }

      // Закончилась анимация свайпа назад
      if (this.props.activePanel !== nextProps.activePanel && this.state.swipingBack) {
        this.setState({
          swipeBackPrevPanel: null,
          swipeBackNextPanel: null,
          swipingBack: false,
          swipingBackFinish: null,
          swipebackStartX: 0,
          swipeBackShift: 0,
          activePanel: nextProps.activePanel,
          visiblePanels: [nextProps.activePanel],
          scrolls: (0, _removeObjectKeys2.default)(this.state.scrolls, [this.state.swipeBackPrevPanel])
        }, function () {
          _this2.document.dispatchEvent(new _this2.window.CustomEvent(transitionEndEventName));
          window.scrollTo(0, _this2.state.scrolls[_this2.state.activePanel]);
          _this2.props.onTransition && _this2.props.onTransition();
        });
      }
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate(prevProps, prevState) {
      var scrolls = this.state.scrolls;

      // Начался переход
      if (!prevState.animated && this.state.animated) {
        this.document.dispatchEvent(new this.window.CustomEvent(transitionStartEventName, { detail: { scrolls: scrolls } }));
        var nextPanelElement = this.pickPanel(this.state.nextPanel);
        var prevPanelElement = this.pickPanel(this.state.prevPanel);

        prevPanelElement.scrollTop = scrolls[this.state.prevPanel];
        if (this.state.isBack) {
          nextPanelElement.scrollTop = scrolls[this.state.nextPanel];
        }
        this.waitAnimationFinish(this.pickPanel(this.state.isBack ? this.state.prevPanel : this.state.nextPanel), this.transitionEndHandler);
      }

      // Начался свайп назад
      if (!prevState.swipingBack && this.state.swipingBack) {
        this.document.dispatchEvent(new this.window.CustomEvent(transitionStartEventName, { detail: { scrolls: scrolls } }));
        this.props.onSwipeBackStart && this.props.onSwipeBackStart();
        var _nextPanelElement = this.pickPanel(this.state.swipeBackNextPanel);
        var _prevPanelElement = this.pickPanel(this.state.swipeBackPrevPanel);

        _nextPanelElement.scrollTop = scrolls[this.state.swipeBackNextPanel];
        _prevPanelElement.scrollTop = scrolls[this.state.swipeBackPrevPanel];
      }

      // Началась анимация завершения свайпа назад.
      if (prevState.swipingBackFinish === null && this.state.swipingBackFinish !== null) {
        this.waitTransitionFinish(this.pickPanel(this.state.swipeBackNextPanel), this.swipingBackTransitionEndHandler);
      }

      // Если свайп назад отменился (когда пользователь недостаточно сильно свайпнул)
      if (prevState.swipingBackFinish === false && this.state.swipingBackFinish === null) {
        this.window.scrollTo(0, scrolls[this.state.activePanel]);
      }

      // Закончился Safari свайп
      if (prevProps.activePanel !== this.props.activePanel && this.state.browserSwipe) {
        this.setState({
          browserSwipe: false,
          nextPanel: null,
          prevPanel: null,
          animated: false,
          visiblePanels: [this.props.activePanel],
          activePanel: this.props.activePanel
        });
      }
    }
  }, {
    key: 'waitTransitionFinish',
    value: function waitTransitionFinish(elem, eventHandler) {
      if (_transitionEvents2.default.supported) {
        var eventName = _transitionEvents2.default.prefix ? _transitionEvents2.default.prefix + 'TransitionEnd' : 'transitionend';

        elem.removeEventListener(eventName, eventHandler);
        elem.addEventListener(eventName, eventHandler);
      } else {
        setTimeout(eventHandler.bind(this), osname === _platform.ANDROID ? 300 : 600);
      }
    }
  }, {
    key: 'waitAnimationFinish',
    value: function waitAnimationFinish(elem, eventHandler) {
      if (_transitionEvents2.default.supported) {
        var eventName = _transitionEvents2.default.prefix ? _transitionEvents2.default.prefix + 'AnimationEnd' : 'animationend';

        elem.removeEventListener(eventName, eventHandler);
        elem.addEventListener(eventName, eventHandler);
      } else {
        setTimeout(eventHandler.bind(this), osname === _platform.ANDROID ? 300 : 600);
      }
    }
  }, {
    key: 'blurActiveElement',
    value: function blurActiveElement() {
      if (typeof this.window !== 'undefined' && this.document.activeElement) {
        this.document.activeElement.blur();
      }
    }
  }, {
    key: 'setPanelBg',
    value: function setPanelBg(panelId) {
      var panel = this.panels.find(function (panel) {
        return panel.props.id === panelId;
      });
      if (panel) {
        this.document.documentElement.setAttribute('theme', panel.props.theme);
      } else {
        this.document.documentElement.removeAttribute('theme');
      }
    }
  }, {
    key: 'pickPanel',
    value: function pickPanel(id) {
      var elem = this.document.getElementById(id);

      if (!elem) {
        console.warn('Element #' + id + ' not found');
      }

      return elem && elem.parentNode.parentNode;
    }
  }, {
    key: 'onSwipeBackSuccess',
    value: function onSwipeBackSuccess() {
      this.props.onSwipeBack && this.props.onSwipeBack();
    }
  }, {
    key: 'onSwipeBackCancel',
    value: function onSwipeBackCancel() {
      var _this3 = this;

      this.setState({
        swipeBackPrevPanel: null,
        swipeBackNextPanel: null,
        swipingBack: false,
        swipingBackFinish: null,
        swipebackStartX: 0,
        swipeBackShift: 0
      }, function () {
        _this3.document.dispatchEvent(new _this3.window.CustomEvent(transitionEndEventName));
      });
    }
  }, {
    key: 'calcPanelSwipeStyles',
    value: function calcPanelSwipeStyles(panelId) {
      var isPrev = panelId === this.state.swipeBackPrevPanel;
      var isNext = panelId === this.state.swipeBackNextPanel;

      var prevPanelTranslate = this.state.swipeBackShift + 'px';
      var nextPanelTranslate = -50 + this.state.swipeBackShift * 100 / this.window.innerWidth / 2 + '%';
      var prevPanelShadow = 0.3 * (this.window.innerWidth - this.state.swipeBackShift) / this.window.innerWidth;

      if (this.state.swipingBackFinish !== null) {
        return isPrev ? { boxShadow: '-2px 0 12px rgba(0, 0, 0, ' + prevPanelShadow + ')' } : {};
      }

      if (isNext) {
        return {
          transform: 'translate3d(' + nextPanelTranslate + ', 0, 0)',
          WebkitTransform: 'translate3d(' + nextPanelTranslate + ', 0, 0)'
        };
      }
      if (isPrev) {
        return {
          transform: 'translate3d(' + prevPanelTranslate + ', 0, 0)',
          WebkitTransform: 'translate3d(' + prevPanelTranslate + ', 0, 0)',
          boxShadow: '-2px 0 12px rgba(0, 0, 0, ' + prevPanelShadow + ')'
        };
      }

      return {};
    }
  }, {
    key: 'calcHeaderSwipeStyles',
    value: function calcHeaderSwipeStyles(panelId) {
      var isPrev = panelId === this.state.swipeBackPrevPanel;
      var isNext = panelId === this.state.swipeBackNextPanel;

      if (!isPrev && !isNext || this.state.swipingBackFinish !== null) {
        return {
          title: {},
          bg: {},
          left: {},
          addon: {},
          right: {}
        };
      }

      var opacity = this.state.swipeBackShift / this.window.innerWidth;
      var titleTransform = this.state.swipeBackShift / this.window.innerWidth * 100;
      var leftTransform = this.state.swipeBackShift / this.window.innerWidth * 100;

      if (isNext) {
        return {
          title: {
            transform: 'translate3d(' + (-100 + titleTransform) + '%, 0, 0)',
            WebkitTransform: 'translate3d(' + (-100 + titleTransform) + '%, 0, 0)',
            opacity: opacity
          },
          left: { opacity: opacity },
          addon: {
            opacity: 1,
            transform: 'translate3d(' + (-100 + leftTransform) + '%, 0, 0)',
            WebkitTransform: 'translate3d(' + (-100 + leftTransform) + '%, 0, 0)'
          },
          right: { opacity: opacity }
        };
      }
      if (isPrev) {
        return {
          title: {
            transform: 'translate3d(' + titleTransform + '%, 0, 0)',
            WebkitTransform: 'translate3d(' + titleTransform + '%, 0, 0)',
            opacity: 1 - opacity
          },
          bg: { opacity: 1 - opacity },
          left: { opacity: 1 - opacity },
          addon: {
            transform: 'translate3d(' + leftTransform + '%, 0, 0)',
            WebkitTransform: 'translate3d(' + leftTransform + '%, 0, 0)',
            opacity: 1 - opacity
          }
        };
      }
    }
  }, {
    key: 'shouldComponentUpdate',
    value: function shouldComponentUpdate(_ref) {
      var inRoot = _ref.inRoot,
          isNext = _ref.isNext,
          isPrev = _ref.isPrev;

      return inRoot ? !isNext && !isPrev : true;
    }
  }, {
    key: 'render',
    value: function render() {
      var _this4 = this;

      var _props = this.props,
          style = _props.style,
          popout = _props.popout,
          header = _props.header;
      var _state = this.state,
          prevPanel = _state.prevPanel,
          nextPanel = _state.nextPanel,
          activePanel = _state.activePanel,
          swipeBackPrevPanel = _state.swipeBackPrevPanel,
          swipeBackNextPanel = _state.swipeBackNextPanel;

      var hasPopout = !!popout;
      var panels = this.panels.filter(function (panel) {
        return _this4.state.visiblePanels.indexOf(panel.props.id) > -1 || panel.props.id === _this4.state.swipeBackPrevPanel || panel.props.id === _this4.state.swipeBackNextPanel;
      });

      var modifiers = {
        'View--header': header,
        'View--animated': this.state.animated,
        'View--swiping-back': this.state.swipingBack
      };

      return _react2.default.createElement(
        _Touch2.default,
        {
          component: 'section',
          className: (0, _classnames3.default)(baseClassNames, modifiers),
          style: style,
          onMoveX: this.onMoveX,
          onEnd: this.onEnd
        },
        header && _react2.default.createElement(
          'div',
          { className: 'View__header' },
          osname === _platform.IOS && _react2.default.createElement('div', { className: 'View__header-scrolltop', onClick: this.onScrollTop }),
          _react2.default.createElement(
            'div',
            { className: (0, _classnames3.default)(_PanelHeader.baseClassNames) },
            panels.map(function (panel) {
              return _react2.default.createElement(
                'div',
                {
                  className: (0, _classnames3.default)('PanelHeader__in', {
                    'PanelHeader__in--active': panel.props.id === activePanel,
                    'PanelHeader__in--prev': panel.props.id === prevPanel,
                    'PanelHeader__in--next': panel.props.id === nextPanel,
                    'PanelHeader__in--swipe-back-prev': panel.props.id === _this4.state.swipeBackPrevPanel,
                    'PanelHeader__in--swipe-back-next': panel.props.id === _this4.state.swipeBackNextPanel,
                    'PanelHeader__in--swipe-back-success': _this4.state.swipingBackFinish === true,
                    'PanelHeader__in--swipe-back-failed': _this4.state.swipingBackFinish === false
                  }),
                  key: panel.props.id
                },
                _react2.default.createElement('div', {
                  className: 'PanelHeader__bg',
                  key: panel.props.id,
                  id: 'header-bg-' + panel.props.id,
                  style: _this4.calcHeaderSwipeStyles(panel.props.id).bg
                }),
                _react2.default.createElement(
                  'div',
                  { className: 'PanelHeader__container' },
                  _react2.default.createElement(
                    'div',
                    { className: 'PanelHeader__left' },
                    _react2.default.createElement('div', {
                      className: 'PanelHeader__left-in',
                      id: 'header-left-' + panel.props.id,
                      style: _this4.calcHeaderSwipeStyles(panel.props.id).left
                    }),
                    osname === _platform.IOS && _react2.default.createElement('div', {
                      className: 'PanelHeader__addon',
                      id: 'header-addon-' + panel.props.id,
                      style: _this4.calcHeaderSwipeStyles(panel.props.id).icon
                    })
                  ),
                  _react2.default.createElement('div', {
                    className: 'PanelHeader__content',
                    style: _this4.calcHeaderSwipeStyles(panel.props.id).title,
                    id: 'header-title-' + panel.props.id
                  }),
                  _react2.default.createElement('div', {
                    className: 'PanelHeader__right',
                    id: 'header-right-' + panel.props.id,
                    style: _this4.calcHeaderSwipeStyles(panel.props.id).right
                  })
                )
              );
            })
          )
        ),
        _react2.default.createElement(
          'div',
          { className: 'View__panels' },
          panels.map(function (panel) {
            return _react2.default.createElement(
              'div',
              {
                className: (0, _classnames3.default)('View__panel', _defineProperty({
                  'View__panel--active': panel.props.id === activePanel,
                  'View__panel--prev': panel.props.id === prevPanel,
                  'View__panel--next': panel.props.id === nextPanel,
                  'View__panel--swipe-back-prev': panel.props.id === _this4.state.swipeBackPrevPanel,
                  'View__panel--swipe-back-next': panel.props.id === _this4.state.swipeBackNextPanel,
                  'View__panel--swipe-back-success': _this4.state.swipingBackFinish === true,
                  'View__panel--swipe-back-failed': _this4.state.swipingBackFinish === false
                }, 'View__panel--theme-' + panel.props.theme, true)),
                style: _this4.calcPanelSwipeStyles(panel.props.id),
                key: panel.props.id
              },
              _react2.default.createElement(
                'div',
                { className: 'View__panel-in' },
                _react2.default.cloneElement(panel, {
                  isNext: panel.props.id === nextPanel || panel.props.id === swipeBackNextPanel,
                  isPrev: panel.props.id === prevPanel || panel.props.id === swipeBackPrevPanel
                })
              )
            );
          })
        ),
        hasPopout && _react2.default.createElement(
          'div',
          { className: 'View__popout' },
          popout
        )
      );
    }
  }, {
    key: 'document',
    get: function get() {
      return this.context.document || document;
    }
  }, {
    key: 'window',
    get: function get() {
      return this.context.window || window;
    }
  }, {
    key: 'panels',
    get: function get() {
      return [].concat(this.props.children);
    }
  }]);

  return View;
}(_react.Component);

View.propTypes = {
  style: _propTypes2.default.object,
  activePanel: _propTypes2.default.string,
  header: _propTypes2.default.oneOfType([_propTypes2.default.object, _propTypes2.default.bool]),
  children: _propTypes2.default.node,
  popout: _propTypes2.default.node,
  onTransition: _propTypes2.default.func,
  onSwipeBack: _propTypes2.default.func,
  onSwipeBackStart: _propTypes2.default.func,
  history: _propTypes2.default.arrayOf(_propTypes2.default.string),

  /**
   * @ignore
   */
  isNext: _propTypes2.default.bool,
  /**
   * @ignore
   */
  isPrev: _propTypes2.default.bool,
  /**
   * @ignore
   */
  inRoot: _propTypes2.default.bool
};
View.defaultProps = {
  style: {},
  children: null,
  popout: null,
  header: true,
  history: []
};
View.contextTypes = {
  isWebView: _propTypes2.default.bool,
  window: _propTypes2.default.any,
  document: _propTypes2.default.any
};
exports.default = View;

/***/ }),
/* 37 */,
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// CustomEvent
if (window && !window.CustomEvent) {
  var CustomEvent = function CustomEvent(event, params) {
    params = params || { bubbles: false, cancelable: false, detail: undefined };
    var evt = document.createEvent('CustomEvent');
    evt.initCustomEvent(event, params.bubbles, params.cancelable, params.detail);
    return evt;
  };

  CustomEvent.prototype = window.Event.prototype;

  window.CustomEvent = CustomEvent;
}

// Element.prototype.closest
if (window) {
  window.Element.prototype.closest = window.Element.prototype.closest || function (css) {
    var node = this;
    while (node) {
      if (node.matches(css)) return node;else node = node.parentElement;
    }
    return null;
  };
}

// Array.prototype.find
Array.prototype.find = Array.prototype.find || function (callback) {
  if (this === null) {
    throw new TypeError('Array.prototype.find called on null or undefined');
  } else if (typeof callback !== 'function') {
    throw new TypeError('callback must be a function');
  }

  var list = Object(this);
  var length = list.length >>> 0;
  var thisArg = arguments[1];

  for (var i = 0; i < length; i++) {
    var element = list[i];
    if (callback.call(thisArg, element, i, list)) {
      return element;
    }
  }
};

/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  black: '#000',
  mutedBlack: '#2c2d2e',
  subheadGray: '#71757a',
  captionGray: '#909499',
  lightGray: '#aaaeb3',
  backgroundBlue: '#ebedf0',

  mediumBlueGray: '#818c99',
  lightBlueGray: '#99a2ad',

  mutedBlue: '#45678f',
  headerBlue: '#5181b8',
  accentBlue: '#528bcc',
  lightBlue: '#74a2d6',

  niceRed: '#ff3347',
  red: '#e64646',
  fireOrange: '#f05c44',
  orange: '#ffa000',
  green: '#4bb34b',
  blue: '#5c9ce6',

  separator: 'rgba(0, 0, 0, .12)',
  placeholderBackground: 'rgba(0, 28, 61, .08)',
  placeholderForeground: 'rgba(0, 36, 77, .25)'
};

/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _querystring = __webpack_require__(14);

var _querystring2 = _interopRequireDefault(_querystring);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var defaultOptions = {
  method: 'GET',
  data: null
};

function getXMLHttpRequest() {
  if (typeof XMLHttpRequest !== 'undefined') {
    // eslint-disable-next-line
    return new XMLHttpRequest();
  }
}

function makeRequest(url, options) {
  var isCanceled = void 0;

  var error = new Error('Request was aborted');
  var request = getXMLHttpRequest();
  var opts = Object.assign({}, defaultOptions, options);

  if (opts.data && opts.method.toLowerCase() === 'get') {
    url += '?' + _querystring2.default.create(opts.data);
  }

  var requestPromise = new Promise(function (resolve, reject) {
    if (!request) {
      reject(new Error('XMLHttpRequest not supported'));
    }

    if (opts.timeout) {
      request.timeout = opts.timeout;
    }

    request.open(opts.method, url, true);

    if (opts.headers) {
      Object.keys(opts.headers).forEach(function (key) {
        request.setRequestHeader(key, opts.headers[key]);
      });
    }

    request.onreadystatechange = function () {
      if (request.readyState === 4) {
        if (request.status === 200) {
          resolve(request.responseText);
        } else {
          reject(new Error(request.status));
        }
      }
    };

    request.ontimeout = function () {
      reject(new Error('XMLHttpRequest timeout expires'));
    };

    request.send(opts.data);
  });

  return {

    promise: new Promise(function (resolve, reject) {
      requestPromise.then(function (res) {
        return isCanceled ? reject(error) : resolve(res);
      }).catch(function (e) {
        return isCanceled ? console.log(error) || reject(error) : reject(e);
      });
    }),

    abort: function abort() {
      isCanceled = true;
      if (request) {
        request.abort();
      }
    }
  };
}

exports.default = function (url, options) {
  return makeRequest(url, options);
};

/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _webview = __webpack_require__(15);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ConfigProvider = function (_React$Component) {
  _inherits(ConfigProvider, _React$Component);

  function ConfigProvider() {
    _classCallCheck(this, ConfigProvider);

    return _possibleConstructorReturn(this, (ConfigProvider.__proto__ || Object.getPrototypeOf(ConfigProvider)).apply(this, arguments));
  }

  _createClass(ConfigProvider, [{
    key: 'getChildContext',
    value: function getChildContext() {
      var insets = Object.assign({ top: 0, right: 0, bottom: 0, left: 0 }, this.props.insets, { bottom: !parseInt(this.props.insets.bottom) || this.props.insets.bottom > 100 ? 0 : this.props.insets.bottom });
      return {
        insets: insets,
        isWebView: this.props.isWebView,
        webviewType: this.props.webviewType
      };
    }
  }, {
    key: 'render',
    value: function render() {
      return this.props.children;
    }
  }]);

  return ConfigProvider;
}(_react2.default.Component);

ConfigProvider.childContextTypes = {
  insets: _propTypes2.default.shape({
    top: _propTypes2.default.number,
    right: _propTypes2.default.number,
    bottom: _propTypes2.default.number,
    left: _propTypes2.default.number
  }),
  isWebView: _propTypes2.default.bool,
  webviewType: _propTypes2.default.oneOf(['vkapps', 'internal'])
};
ConfigProvider.propTypes = {
  insets: _propTypes2.default.shape({
    top: _propTypes2.default.number,
    right: _propTypes2.default.number,
    bottom: _propTypes2.default.number,
    left: _propTypes2.default.number
  }),
  isWebView: _propTypes2.default.bool,
  webviewType: _propTypes2.default.oneOf(['vkapps', 'internal']),
  children: _propTypes2.default.node
};
ConfigProvider.defaultProps = {
  insets: {},
  webviewType: 'internal',
  isWebView: _webview.isWebView
};
exports.default = ConfigProvider;

/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

__webpack_require__(17);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _getClassName = __webpack_require__(3);

var _getClassName2 = _interopRequireDefault(_getClassName);

var _classnames2 = __webpack_require__(2);

var _classnames3 = _interopRequireDefault(_classnames2);

var _dropdown = __webpack_require__(16);

var _dropdown2 = _interopRequireDefault(_dropdown);

var _platform = __webpack_require__(4);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var osname = (0, _platform.platform)();
var baseClassName = (0, _getClassName2.default)('Select');

var SelectMimicry = function (_Component) {
  _inherits(SelectMimicry, _Component);

  function SelectMimicry() {
    _classCallCheck(this, SelectMimicry);

    return _possibleConstructorReturn(this, (SelectMimicry.__proto__ || Object.getPrototypeOf(SelectMimicry)).apply(this, arguments));
  }

  _createClass(SelectMimicry, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          className = _props.className,
          placeholder = _props.placeholder,
          children = _props.children,
          alignment = _props.alignment,
          getRootRef = _props.getRootRef,
          restProps = _objectWithoutProperties(_props, ['className', 'placeholder', 'children', 'alignment', 'getRootRef']);

      return _react2.default.createElement(
        'div',
        _extends({}, restProps, {
          className: (0, _classnames3.default)(baseClassName, _defineProperty({
            'Select--not-selected': !children,
            'Select--mimicry': true
          }, 'Select--align-' + alignment, alignment), className),
          ref: getRootRef
        }),
        _react2.default.createElement(
          'div',
          { className: 'Select__container' },
          _react2.default.createElement(
            'div',
            { className: 'Select__title' },
            children || placeholder
          ),
          _react2.default.createElement(_dropdown2.default, null)
        ),
        osname === _platform.ANDROID && _react2.default.createElement('div', { className: 'Select-underline' })
      );
    }
  }]);

  return SelectMimicry;
}(_react.Component);

SelectMimicry.propTypes = {
  style: _propTypes2.default.object,
  className: _propTypes2.default.string,
  children: _propTypes2.default.node,
  tabIndex: _propTypes2.default.number,
  placeholder: _propTypes2.default.string,
  alignment: _propTypes2.default.oneOf(['left', 'center', 'top']),
  getRootRef: _propTypes2.default.func
};
SelectMimicry.defaultProps = {
  tabIndex: 0,
  alignment: 'left'
};
exports.default = SelectMimicry;

/***/ }),
/* 44 */,
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

__webpack_require__(17);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _getClassName = __webpack_require__(3);

var _getClassName2 = _interopRequireDefault(_getClassName);

var _classnames2 = __webpack_require__(2);

var _classnames3 = _interopRequireDefault(_classnames2);

var _dropdown = __webpack_require__(16);

var _dropdown2 = _interopRequireDefault(_dropdown);

var _platform = __webpack_require__(4);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var osname = (0, _platform.platform)();
var baseClassName = (0, _getClassName2.default)('Select');

var Select = function (_Component) {
  _inherits(Select, _Component);

  function Select(props) {
    _classCallCheck(this, Select);

    var _this = _possibleConstructorReturn(this, (Select.__proto__ || Object.getPrototypeOf(Select)).call(this, props));

    _this.onChange = function (e) {
      _this.setTitle();
      if (!_this.isControlledOutside) {
        _this.setState({ value: e.target.value });
      }
      if (_this.props.onChange) {
        _this.props.onChange(e);
      }
    };

    _this.setTitle = function () {
      var selectedOption = _this.selectEl.options[_this.selectEl.selectedIndex];
      selectedOption && _this.setState({
        title: selectedOption.text,
        notSelected: selectedOption.value === '' && _this.props.hasOwnProperty('placeholder')
      });
    };

    _this.getRef = function (el) {
      _this.selectEl = el;
      _this.props.getRef && _this.props.getRef(el);
    };

    var state = {
      title: '',
      notSelected: false
    };
    if (typeof props.value !== 'undefined') {
      _this.isControlledOutside = true;
    } else {
      state.value = props.defaultValue || '';
    }
    _this.state = state;
    return _this;
  }

  _createClass(Select, [{
    key: 'componentDidUpdate',
    value: function componentDidUpdate(prevProps) {
      if (prevProps.value !== this.props.value || prevProps.children !== this.props.children) {
        this.setTitle();
      }
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.setTitle();
    }
  }, {
    key: 'render',
    value: function render() {
      var _classnames;

      var _props = this.props,
          style = _props.style,
          label = _props.label,
          value = _props.value,
          defaultValue = _props.defaultValue,
          onChange = _props.onChange,
          alignment = _props.alignment,
          placeholder = _props.placeholder,
          children = _props.children,
          className = _props.className,
          getRef = _props.getRef,
          getRootRef = _props.getRootRef,
          restProps = _objectWithoutProperties(_props, ['style', 'label', 'value', 'defaultValue', 'onChange', 'alignment', 'placeholder', 'children', 'className', 'getRef', 'getRootRef']);

      return _react2.default.createElement(
        'label',
        {
          className: (0, _classnames3.default)(baseClassName, (_classnames = {}, _defineProperty(_classnames, 'Select--not-selected', this.state.notSelected), _defineProperty(_classnames, 'Select--align-' + alignment, alignment), _classnames), className),
          style: style,
          ref: getRootRef
        },
        _react2.default.createElement(
          'select',
          _extends({
            onChange: this.onChange,
            value: this.value,
            ref: this.getRef
          }, restProps),
          placeholder && _react2.default.createElement(
            'option',
            { value: '' },
            placeholder
          ),
          children
        ),
        _react2.default.createElement(
          'div',
          { className: 'Select__container' },
          _react2.default.createElement(
            'div',
            { className: 'Select__title' },
            this.state.title
          ),
          _react2.default.createElement(_dropdown2.default, null)
        ),
        osname === _platform.ANDROID && _react2.default.createElement('div', { className: 'Select-underline' })
      );
    }
  }, {
    key: 'value',
    get: function get() {
      return this.isControlledOutside ? this.props.value : this.state.value;
    }
  }]);

  return Select;
}(_react.Component);

Select.propTypes = {
  style: _propTypes2.default.object,
  className: _propTypes2.default.string,
  label: _propTypes2.default.string,
  name: _propTypes2.default.string,
  onChange: _propTypes2.default.func,
  value: _propTypes2.default.any,
  defaultValue: _propTypes2.default.any,
  children: _propTypes2.default.node,
  placeholder: _propTypes2.default.string,
  getRef: _propTypes2.default.func,
  getRootRef: _propTypes2.default.func,
  alignment: _propTypes2.default.oneOf(['left', 'center', 'top'])
};
Select.defaultProps = {
  alignment: 'left'
};
exports.default = Select;

/***/ }),
/* 46 */,
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

__webpack_require__(47);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _Tappable = __webpack_require__(5);

var _Tappable2 = _interopRequireDefault(_Tappable);

var _getClassName = __webpack_require__(3);

var _getClassName2 = _interopRequireDefault(_getClassName);

var _classnames = __webpack_require__(2);

var _classnames2 = _interopRequireDefault(_classnames);

var _platform = __webpack_require__(4);

var _done = __webpack_require__(23);

var _done2 = _interopRequireDefault(_done);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var osname = (0, _platform.platform)();
var baseClassName = (0, _getClassName2.default)('Checkbox');

var Checkbox = function Checkbox(_ref) {
  var children = _ref.children,
      className = _ref.className,
      style = _ref.style,
      getRootRef = _ref.getRootRef,
      restProps = _objectWithoutProperties(_ref, ['children', 'className', 'style', 'getRootRef']);

  return _react2.default.createElement(
    _Tappable2.default,
    {
      component: 'label',
      className: (0, _classnames2.default)(baseClassName, className),
      style: style,
      disabled: restProps.disabled,
      activeEffectDelay: osname === _platform.IOS ? 100 : _Tappable.ACTIVE_EFFECT_DELAY,
      getRootRef: getRootRef
    },
    _react2.default.createElement('input', _extends({}, restProps, { type: 'checkbox', className: 'Checkbox__input' })),
    _react2.default.createElement(
      'div',
      { className: 'Checkbox__container' },
      _react2.default.createElement(
        'div',
        { className: 'Checkbox__icon' },
        _react2.default.createElement(_done2.default, null)
      ),
      _react2.default.createElement(
        'div',
        { className: 'Checkbox__content' },
        children
      )
    )
  );
};

Checkbox.propTypes = {
  children: _propTypes2.default.node,
  style: _propTypes2.default.object,
  className: _propTypes2.default.string,
  getRootRef: _propTypes2.default.func
};

exports.default = Checkbox;

/***/ }),
/* 49 */,
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

__webpack_require__(50);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _Tappable = __webpack_require__(5);

var _Tappable2 = _interopRequireDefault(_Tappable);

var _getClassName = __webpack_require__(3);

var _getClassName2 = _interopRequireDefault(_getClassName);

var _classnames = __webpack_require__(2);

var _classnames2 = _interopRequireDefault(_classnames);

var _platform = __webpack_require__(4);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var osname = (0, _platform.platform)();
var baseClassName = (0, _getClassName2.default)('Radio');

var Radio = function Radio(_ref) {
  var children = _ref.children,
      description = _ref.description,
      style = _ref.style,
      className = _ref.className,
      getRef = _ref.getRef,
      getRootRef = _ref.getRootRef,
      restProps = _objectWithoutProperties(_ref, ['children', 'description', 'style', 'className', 'getRef', 'getRootRef']);

  return _react2.default.createElement(
    _Tappable2.default,
    {
      component: 'label',
      style: style,
      className: (0, _classnames2.default)(baseClassName, className),
      activeEffectDelay: osname === _platform.IOS ? 100 : _Tappable.ACTIVE_EFFECT_DELAY,
      disabled: restProps.disabled,
      getRootRef: getRootRef
    },
    _react2.default.createElement('input', _extends({}, restProps, { type: 'radio', className: 'Radio__input', ref: getRef })),
    _react2.default.createElement(
      'div',
      { className: 'Radio__container' },
      _react2.default.createElement('div', { className: 'Radio__icon' }),
      _react2.default.createElement(
        'div',
        { className: 'Radio__content' },
        children,
        _react2.default.createElement(
          'div',
          { className: 'Radio__description' },
          description
        )
      )
    )
  );
};

Radio.propTypes = {
  children: _propTypes2.default.node,
  description: _propTypes2.default.node,
  style: _propTypes2.default.object,
  className: _propTypes2.default.string,
  getRef: _propTypes2.default.func,
  getRootRef: _propTypes2.default.func
};

exports.default = Radio;

/***/ }),
/* 52 */,
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

__webpack_require__(53);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _getClassName = __webpack_require__(3);

var _getClassName2 = _interopRequireDefault(_getClassName);

var _requestAnimationFrame = __webpack_require__(9);

var _requestAnimationFrame2 = _interopRequireDefault(_requestAnimationFrame);

var _platform = __webpack_require__(4);

var _classnames = __webpack_require__(2);

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var osname = (0, _platform.platform)();
var baseClassName = (0, _getClassName2.default)('Textarea');

var Textarea = function (_Component) {
  _inherits(Textarea, _Component);

  function Textarea(props) {
    _classCallCheck(this, Textarea);

    var _this = _possibleConstructorReturn(this, (Textarea.__proto__ || Object.getPrototypeOf(Textarea)).call(this, props));

    _this.getRef = function (element) {
      _this.element = element;
      _this.props.getRef && _this.props.getRef(element);
    };

    _this.resize = function () {
      var el = _this.element;

      if (el) {
        var offsetHeight = el.offsetHeight,
            scrollHeight = el.scrollHeight;

        var style = window.getComputedStyle(el);
        var paddingTop = parseInt(style.paddingTop);
        var paddingBottom = parseInt(style.paddingBottom);

        var diff = paddingTop + paddingBottom;

        if (scrollHeight + diff <= offsetHeight) {
          diff = 0;
        }

        if (el.value) {
          _this.setState({ height: scrollHeight - diff });
        }

        _this.setState({ height: 0 }, function () {
          var height = el.scrollHeight - diff;

          _this.setState({ height: height });

          _this.props.onResize(el);
        });
      }
    };

    _this.onChange = function (e) {
      if (_this.props.grow) {
        _this.resize();
      }

      if (!_this.isControlledOutside) {
        _this.setState({ value: e.target.value });
      }

      if (_this.props.onChange) {
        _this.props.onChange(e);
      }
    };

    if (typeof props.value !== 'undefined') {
      _this.isControlledOutside = true;
      _this.state = {};
    } else {
      _this.state = {
        value: props.defaultValue || ''
      };
    }
    return _this;
  }

  _createClass(Textarea, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      if (this.props.grow) {
        this.resize();
      }
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate(prevProps) {
      var _this2 = this;

      if (prevProps.value && this.props.value === '') {
        // Fix iOS extra indent on removing content
        (0, _requestAnimationFrame2.default)(function () {
          _this2.element.value = '';
        });
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          defaultValue = _props.defaultValue,
          value = _props.value,
          onChange = _props.onChange,
          grow = _props.grow,
          style = _props.style,
          onResize = _props.onResize,
          className = _props.className,
          getRootRef = _props.getRootRef,
          restProps = _objectWithoutProperties(_props, ['defaultValue', 'value', 'onChange', 'grow', 'style', 'onResize', 'className', 'getRootRef']);

      var height = this.state.height || style.height || 66;

      return _react2.default.createElement(
        'div',
        { className: (0, _classnames2.default)(baseClassName, className), style: style, ref: getRootRef },
        _react2.default.createElement('textarea', _extends({}, restProps, {
          value: this.value,
          onChange: this.onChange,
          ref: this.getRef,
          style: { height: height }
        })),
        osname === _platform.ANDROID && _react2.default.createElement('div', { className: 'Textarea-underline' })
      );
    }
  }, {
    key: 'value',
    get: function get() {
      return this.isControlledOutside ? this.props.value : this.state.value;
    }
  }]);

  return Textarea;
}(_react.Component);

Textarea.propTypes = {
  style: _propTypes2.default.object,
  value: _propTypes2.default.string,
  defaultValue: _propTypes2.default.string,
  grow: _propTypes2.default.bool,
  onChange: _propTypes2.default.func,
  onResize: _propTypes2.default.func,
  className: _propTypes2.default.string,
  getRef: _propTypes2.default.func,
  getRootRef: _propTypes2.default.func
};
Textarea.defaultProps = {
  style: {},
  defaultValue: '',
  grow: true,
  onResize: function onResize() {}
};
exports.default = Textarea;

/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _Touch = __webpack_require__(8);

var _Touch2 = _interopRequireDefault(_Touch);

var _getClassName = __webpack_require__(3);

var _getClassName2 = _interopRequireDefault(_getClassName);

var _Slider2 = __webpack_require__(18);

var _Slider3 = _interopRequireDefault(_Slider2);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = __webpack_require__(2);

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var baseClassNames = (0, _getClassName2.default)('Slider');

var RangeSlider = function (_Slider) {
  _inherits(RangeSlider, _Slider);

  function RangeSlider() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, RangeSlider);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = RangeSlider.__proto__ || Object.getPrototypeOf(RangeSlider)).call.apply(_ref, [this].concat(args))), _this), _this.onStart = function (e) {
      var absolutePosition = _this.validateAbsolute(e.startX - _this.state.containerLeft);
      var percentPosition = _this.absoluteToPecent(absolutePosition);
      var percentRange = _this.calcPercentRange(percentPosition);

      _this.onChange(_this.percentToValue(percentRange));

      if (_this.isControlledOutside) {
        _this.setState({ startX: absolutePosition });
      } else {
        _this.setState(_extends({
          startX: absolutePosition
        }, percentRange));
      }

      var thumb = e.originalEvent.target.closest('.Slider__thumb');

      if (thumb === _this.thumbStart) {
        _this.setState({ active: 'start' });
      } else if (thumb === _this.thumbEnd) {
        _this.setState({ active: 'end' });
      }
    }, _this.onMoveX = function (e) {
      var absolutePosition = _this.validateAbsolute(_this.state.startX + (e.shiftX || 0));
      var percentPosition = _this.absoluteToPecent(absolutePosition);
      var percentRange = _this.calcPercentRange(percentPosition);

      _this.onChange(_this.percentToValue(percentRange));

      if (!_this.isControlledOutside) {
        _this.setState(percentRange);
      }

      e.originalEvent.preventDefault();
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(RangeSlider, [{
    key: 'calcPercentRange',
    value: function calcPercentRange(percent) {
      var _state = this.state,
          percentStart = _state.percentStart,
          percentEnd = _state.percentEnd;


      if (percentStart === 100) {
        return { percentStart: percent, percentEnd: percentEnd };
      } else if (percentEnd === 0) {
        return { percentEnd: percent, percentStart: percentStart };
      } else if (Math.abs(percentStart - percent) <= Math.abs(percentEnd - percent)) {
        return { percentStart: percent, percentEnd: percentEnd };
      } else {
        return { percentEnd: percent, percentStart: percentStart };
      }
    }
  }, {
    key: 'validatePercent',
    value: function validatePercent(_ref2) {
      var percentStart = _ref2.percentStart,
          percentEnd = _ref2.percentEnd;

      return {
        percentStart: _get(RangeSlider.prototype.__proto__ || Object.getPrototypeOf(RangeSlider.prototype), 'validatePercent', this).call(this, percentStart),
        percentEnd: _get(RangeSlider.prototype.__proto__ || Object.getPrototypeOf(RangeSlider.prototype), 'validatePercent', this).call(this, percentEnd)
      };
    }
  }, {
    key: 'percentToValue',
    value: function percentToValue(_ref3) {
      var percentStart = _ref3.percentStart,
          percentEnd = _ref3.percentEnd;

      return [_get(RangeSlider.prototype.__proto__ || Object.getPrototypeOf(RangeSlider.prototype), 'percentToValue', this).call(this, percentStart), _get(RangeSlider.prototype.__proto__ || Object.getPrototypeOf(RangeSlider.prototype), 'percentToValue', this).call(this, percentEnd)];
    }
  }, {
    key: 'valueToPercent',
    value: function valueToPercent(_ref4) {
      var _ref5 = _slicedToArray(_ref4, 2),
          valueStart = _ref5[0],
          valueEnd = _ref5[1];

      return {
        percentStart: _get(RangeSlider.prototype.__proto__ || Object.getPrototypeOf(RangeSlider.prototype), 'valueToPercent', this).call(this, valueStart),
        percentEnd: _get(RangeSlider.prototype.__proto__ || Object.getPrototypeOf(RangeSlider.prototype), 'valueToPercent', this).call(this, valueEnd)
      };
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _this2 = this;

      window.addEventListener('resize', this.onResize);
      this.onResize(function () {
        _this2.setState(_this2.validatePercent(_this2.valueToPercent(_this2.value)));
      });
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      if (this.isControlledOutside && nextProps.value !== this.props.value) {
        this.setState(this.validatePercent(this.valueToPercent(nextProps.value)));
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _this3 = this;

      var _props = this.props,
          className = _props.className,
          min = _props.min,
          max = _props.max,
          step = _props.step,
          value = _props.value,
          defaultValue = _props.defaultValue,
          onChange = _props.onChange,
          getRootRef = _props.getRootRef,
          restProps = _objectWithoutProperties(_props, ['className', 'min', 'max', 'step', 'value', 'defaultValue', 'onChange', 'getRootRef']);

      return _react2.default.createElement(
        'div',
        _extends({}, restProps, { className: (0, _classnames2.default)(baseClassNames, className), ref: this.getRef }),
        _react2.default.createElement(
          _Touch2.default,
          { onStart: this.onStart, onMoveX: this.onMoveX, onEnd: this.onEnd, className: 'Slider__in' },
          _react2.default.createElement(
            'div',
            {
              className: 'Slider__dragger',
              style: {
                width: this.state.percentEnd - this.state.percentStart + '%',
                left: this.state.percentStart + '%'
              }
            },
            _react2.default.createElement('span', {
              className: (0, _classnames2.default)('Slider__thumb', 'Slider__thumb--start', {
                'Slider__thumb--active': this.state.active === 'start'
              }),
              ref: function ref(el) {
                return _this3.thumbStart = el;
              }
            }),
            _react2.default.createElement('span', {
              className: (0, _classnames2.default)('Slider__thumb', 'Slider__thumb--end', {
                'Slider__thumb--active': this.state.active === 'end'
              }),
              ref: function ref(el) {
                return _this3.thumbEnd = el;
              }
            })
          )
        )
      );
    }
  }, {
    key: 'value',
    get: function get() {
      if (this.isControlledOutside) {
        return this.props.value;
      } else if (this.props.hasOwnProperty('defaultValue')) {
        return this.props.defaultValue;
      } else {
        return [this.props.min, this.props.max];
      }
    }
  }]);

  return RangeSlider;
}(_Slider3.default);

RangeSlider.propTypes = _extends({}, _Slider3.default.propTypes, {
  value: _propTypes2.default.arrayOf(_propTypes2.default.number),
  defaultValue: _propTypes2.default.arrayOf(_propTypes2.default.number)
});
RangeSlider.defaultProps = _Slider3.default.defaultProps;
exports.default = RangeSlider;

/***/ }),
/* 56 */,
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 58 */,
/* 59 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 60 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

__webpack_require__(59);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _getClassName = __webpack_require__(3);

var _getClassName2 = _interopRequireDefault(_getClassName);

var _classnames = __webpack_require__(2);

var _classnames2 = _interopRequireDefault(_classnames);

var _requestAnimationFrame = __webpack_require__(9);

var _requestAnimationFrame2 = _interopRequireDefault(_requestAnimationFrame);

var _platform = __webpack_require__(4);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var osname = (0, _platform.platform)();
var baseClassName = (0, _getClassName2.default)('Input');

var Input = function (_Component) {
  _inherits(Input, _Component);

  function Input(props) {
    _classCallCheck(this, Input);

    var _this = _possibleConstructorReturn(this, (Input.__proto__ || Object.getPrototypeOf(Input)).call(this, props));

    _this.onChange = function (e) {
      if (!_this.isControlledOutside) {
        _this.setState({ value: e.target.value });
      }
      if (_this.props.onChange) {
        _this.props.onChange(e);
      }
    };

    _this.getRef = function (element) {
      _this.props.getRef && _this.props.getRef(element);
      _this.element = element;
    };

    if (typeof props.value !== 'undefined') {
      _this.isControlledOutside = true;
    } else {
      _this.state = {
        value: props.defaultValue || ''
      };
    }
    return _this;
  }

  _createClass(Input, [{
    key: 'componentDidUpdate',
    value: function componentDidUpdate(prevProps) {
      var _this2 = this;

      if (prevProps.value && this.props.value === '') {
        // Fix iOS extra indent on removing content
        (0, _requestAnimationFrame2.default)(function () {
          _this2.element.value = '';
        });
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          onChange = _props.onChange,
          defaultValue = _props.defaultValue,
          alignment = _props.alignment,
          placeholder = _props.placeholder,
          value = _props.value,
          status = _props.status,
          getRef = _props.getRef,
          className = _props.className,
          getRootRef = _props.getRootRef,
          restProps = _objectWithoutProperties(_props, ['onChange', 'defaultValue', 'alignment', 'placeholder', 'value', 'status', 'getRef', 'className', 'getRootRef']);

      var modifiers = _defineProperty({
        'Input--left': alignment === 'left',
        'Input--center': alignment === 'center',
        'Input--right': alignment === 'right'
      }, 'Input--s-' + this.props.status, true);

      var customPlaceolder = ['date', 'datetime-local', 'time', 'month'].indexOf(this.props.type) > -1 && this.context.isWebView ? this.props.placeholder : null;

      return _react2.default.createElement(
        'div',
        { className: (0, _classnames2.default)(baseClassName, modifiers, className), ref: getRootRef },
        _react2.default.createElement('input', _extends({
          className: 'Input__el',
          ref: this.getRef,
          value: this.value,
          onChange: this.onChange,
          placeholder: customPlaceolder ? null : this.props.placeholder
        }, restProps)),
        osname === _platform.ANDROID && _react2.default.createElement('div', { className: 'Input-underline' }),
        customPlaceolder && !this.value && _react2.default.createElement(
          'div',
          { className: 'Input__placeholder' },
          this.props.placeholder
        )
      );
    }
  }, {
    key: 'value',
    get: function get() {
      return this.isControlledOutside ? this.props.value : this.state.value;
    }
  }]);

  return Input;
}(_react.Component);

Input.propTypes = {
  type: _propTypes2.default.oneOf(['text', 'password', 'date', 'datetime-local', 'time', 'month', 'email', 'number', 'tel', 'url']),
  alignment: _propTypes2.default.oneOf(['left', 'center', 'right']),
  value: _propTypes2.default.string,
  defaultValue: _propTypes2.default.string,
  onChange: _propTypes2.default.func,
  placeholder: _propTypes2.default.string,
  status: _propTypes2.default.oneOf(['default', 'error', 'verified']),
  getRef: _propTypes2.default.func,
  getRootRef: _propTypes2.default.func,
  className: _propTypes2.default.string
};
Input.defaultProps = {
  type: 'text',
  alignment: 'left',
  defaultValue: '',
  status: 'default'
};
Input.contextTypes = {
  isWebView: _propTypes2.default.bool
};
exports.default = Input;

/***/ }),
/* 61 */,
/* 62 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 63 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

__webpack_require__(62);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _getClassName = __webpack_require__(3);

var _getClassName2 = _interopRequireDefault(_getClassName);

var _Button = __webpack_require__(25);

var _Button2 = _interopRequireDefault(_Button);

var _classnames = __webpack_require__(2);

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var baseClassNames = (0, _getClassName2.default)('File');

var File = function (_Component) {
  _inherits(File, _Component);

  function File(props) {
    _classCallCheck(this, File);

    var _this = _possibleConstructorReturn(this, (File.__proto__ || Object.getPrototypeOf(File)).call(this, props));

    _this.state = {
      value: null
    };
    return _this;
  }

  _createClass(File, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          children = _props.children,
          label = _props.label,
          alignment = _props.alignment,
          align = _props.align,
          size = _props.size,
          level = _props.level,
          type = _props.type,
          stretched = _props.stretched,
          before = _props.before,
          className = _props.className,
          style = _props.style,
          getRef = _props.getRef,
          getRootRef = _props.getRootRef,
          restProps = _objectWithoutProperties(_props, ['children', 'label', 'alignment', 'align', 'size', 'level', 'type', 'stretched', 'before', 'className', 'style', 'getRef', 'getRootRef']);

      return _react2.default.createElement(
        _Button2.default,
        {
          align: align || alignment,
          className: (0, _classnames2.default)(baseClassNames, className),
          component: 'label',
          type: type,
          stretched: stretched,
          level: level,
          size: size,
          before: before,
          style: style,
          getRootRef: getRootRef
        },
        _react2.default.createElement('input', _extends({}, restProps, { className: 'File__input', type: 'file', ref: getRef })),
        children || label
      );
    }
  }]);

  return File;
}(_react.Component);

File.propTypes = {
  style: _propTypes2.default.object,
  children: _propTypes2.default.node,
  className: _propTypes2.default.string,
  /**
   * @ignore
   */
  level: _propTypes2.default.any,
  /**
   * @ignore
   */
  size: _propTypes2.default.any,
  /**
   * @ignore
   */
  type: _propTypes2.default.any,
  /**
   * @ignore
   */
  align: _propTypes2.default.any,
  /**
   * @ignore
   */
  stretched: _propTypes2.default.any,
  /**
   * @ignore
   */
  before: _propTypes2.default.any,
  getRef: _propTypes2.default.func,
  getRootRef: _propTypes2.default.func,
  /**
   * @deprecated Используйте children
   */
  label: _propTypes2.default.string,
  /**
   * @deprecated Используйте align
   */
  alignment: _propTypes2.default.oneOf(['left', 'center', 'right'])
};
File.defaultProps = {
  label: 'Выберите файл',
  children: 'Выберите файл',
  alignment: 'left',
  align: 'left'
};
exports.default = File;

/***/ }),
/* 64 */,
/* 65 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 66 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

__webpack_require__(65);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _getClassName = __webpack_require__(3);

var _getClassName2 = _interopRequireDefault(_getClassName);

var _classnames = __webpack_require__(2);

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var baseClassNames = (0, _getClassName2.default)('Switch');

var Switch = function Switch(_ref) {
  var style = _ref.style,
      className = _ref.className,
      getRef = _ref.getRef,
      getRootRef = _ref.getRootRef,
      restProps = _objectWithoutProperties(_ref, ['style', 'className', 'getRef', 'getRootRef']);

  return _react2.default.createElement(
    'label',
    { className: (0, _classnames2.default)(baseClassNames, className), style: style, ref: getRootRef },
    _react2.default.createElement('input', _extends({}, restProps, { type: 'checkbox', className: 'Switch__self', ref: getRef })),
    _react2.default.createElement('span', { className: 'Switch__pseudo' })
  );
};

Switch.propTypes = {
  style: _propTypes2.default.object,
  className: _propTypes2.default.string,
  getRef: _propTypes2.default.func,
  getRootRef: _propTypes2.default.func
};

exports.default = Switch;

/***/ }),
/* 67 */,
/* 68 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 69 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

__webpack_require__(68);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _getClassName = __webpack_require__(3);

var _getClassName2 = _interopRequireDefault(_getClassName);

var _classnames = __webpack_require__(2);

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var baseClassName = (0, _getClassName2.default)('FormLayout');

var FormLayout = function (_React$Component) {
  _inherits(FormLayout, _React$Component);

  function FormLayout() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, FormLayout);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = FormLayout.__proto__ || Object.getPrototypeOf(FormLayout)).call.apply(_ref, [this].concat(args))), _this), _this.onSubmit = function (e) {
      return _this.props.onSubmit ? _this.props.onSubmit(e) : e.preventDefault();
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(FormLayout, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          children = _props.children,
          TagName = _props.TagName,
          className = _props.className,
          getRef = _props.getRef,
          restProps = _objectWithoutProperties(_props, ['children', 'TagName', 'className', 'getRef']);

      var arrayChildren = Array.isArray(children) ? children : [children];

      return _react2.default.createElement(
        TagName,
        _extends({}, restProps, {
          className: (0, _classnames2.default)(baseClassName, className),
          onSubmit: this.onSubmit,
          ref: getRef
        }),
        _react2.default.createElement(
          'div',
          { className: 'FormLayout__container' },
          arrayChildren.map(function (field, i) {
            return field ? _react2.default.createElement(
              'label',
              { className: 'FormLayout__row', key: field.key || 'row-' + i },
              field.props.top && _react2.default.createElement(
                'div',
                { className: 'FormLayout__row-top' },
                field.props.top
              ),
              _react2.default.createElement(
                'div',
                { className: 'FormLayout__field' },
                field
              ),
              field.props.bottom && _react2.default.createElement(
                'div',
                { className: 'FormLayout__row-bottom' },
                field.props.bottom
              )
            ) : null;
          })
        ),
        TagName === 'form' && _react2.default.createElement('input', { type: 'submit', className: 'FormLayout__submit', value: '' })
      );
    }
  }]);

  return FormLayout;
}(_react2.default.Component);

FormLayout.propTypes = {
  children: _propTypes2.default.node,
  className: _propTypes2.default.string,
  TagName: _propTypes2.default.string,
  onSubmit: _propTypes2.default.func,
  getRef: _propTypes2.default.func
};
FormLayout.defaultProps = {
  status: 'default',
  TagName: 'form'
};
exports.default = FormLayout;

/***/ }),
/* 70 */,
/* 71 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 72 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames2 = __webpack_require__(2);

var _classnames3 = _interopRequireDefault(_classnames2);

var _getClassName = __webpack_require__(3);

var _getClassName2 = _interopRequireDefault(_getClassName);

var _reactDom = __webpack_require__(33);

var _reactDom2 = _interopRequireDefault(_reactDom);

__webpack_require__(71);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var isElement = function isElement(element) {
  return _react2.default.isValidElement(element);
};
var isDOMTypeElement = function isDOMTypeElement(element) {
  return isElement(element) && typeof element.type === 'string';
};
var baseClassName = (0, _getClassName2.default)('Tooltip');

var TooltipPortal = function (_React$Component) {
  _inherits(TooltipPortal, _React$Component);

  function TooltipPortal() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, TooltipPortal);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = TooltipPortal.__proto__ || Object.getPrototypeOf(TooltipPortal)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      x: 0,
      y: 0
    }, _this.fixedPortal = false, _this.getRef = function (el) {
      return _this.el = el;
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(TooltipPortal, [{
    key: 'findPortalTarget',
    value: function findPortalTarget() {
      var target = this.props.target;

      var closestFixed = target.closest('.FixedLayout');
      var closestHeader = target.closest('.PanelHeader__in');
      var closestPanel = this.document.getElementById(this.context.panel).childNodes[0];

      if (closestFixed || closestHeader) {
        this.fixedPortal = true;
      }

      return closestFixed || closestHeader || closestPanel;
    }
  }, {
    key: 'getBoundingTargetRect',
    value: function getBoundingTargetRect() {
      var target = this.props.target;

      var targetBounds = target.getBoundingClientRect();
      var portalBounds = this.portalTarget.getBoundingClientRect();

      return {
        width: targetBounds.width,
        height: targetBounds.height,
        x: targetBounds.x - portalBounds.x,
        y: targetBounds.y - portalBounds.y
      };
    }
  }, {
    key: 'componentWillMount',
    value: function componentWillMount() {
      this.portalTarget = this.findPortalTarget();
      this.document.addEventListener('click', this.props.onClose);
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      this.document.removeEventListener('click', this.props.onClose);
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _props = this.props,
          offsetY = _props.offsetY,
          offsetX = _props.offsetX,
          alignX = _props.alignX,
          alignY = _props.alignY;

      var coords = this.getBoundingTargetRect();

      this.setState({
        x: coords.x + offsetX + (alignX === 'right' ? coords.width - this.el.offsetWidth : 0),
        y: coords.y + (alignY === 'top' ? -this.el.offsetHeight - offsetY : coords.height + offsetY)
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var _classnames;

      var _props2 = this.props,
          title = _props2.title,
          text = _props2.text,
          alignX = _props2.alignX,
          alignY = _props2.alignY,
          cornerOffset = _props2.cornerOffset;


      return _reactDom2.default.createPortal(_react2.default.createElement(
        'div',
        { className: (0, _classnames3.default)(baseClassName, (_classnames = {}, _defineProperty(_classnames, 'Tooltip--x-' + alignX, true), _defineProperty(_classnames, 'Tooltip--y-' + alignY, true), _defineProperty(_classnames, 'Tooltip--fixed', this.fixedPortal), _classnames)) },
        _react2.default.createElement(
          'div',
          { className: 'Tooltip__container', style: { top: this.state.y, left: this.state.x }, ref: this.getRef },
          _react2.default.createElement('div', { className: 'Tooltip__corner', style: _defineProperty({}, alignX, 20 + cornerOffset) }),
          _react2.default.createElement(
            'div',
            { className: 'Tooltip__content' },
            title && _react2.default.createElement(
              'div',
              { className: 'Tooltip__title' },
              title
            ),
            text && _react2.default.createElement(
              'div',
              { className: 'Tooltip__text' },
              text
            )
          )
        )
      ), this.portalTarget);
    }
  }, {
    key: 'document',
    get: function get() {
      return this.context.document || document;
    }
  }]);

  return TooltipPortal;
}(_react2.default.Component);

TooltipPortal.propTypes = {
  target: _propTypes2.default.object,
  text: _propTypes2.default.node,
  title: _propTypes2.default.node,
  alignX: _propTypes2.default.oneOf(['left', 'right']),
  alignY: _propTypes2.default.oneOf(['top', 'bottom']),
  offsetX: _propTypes2.default.number,
  offsetY: _propTypes2.default.number,
  cornerOffset: _propTypes2.default.number,
  onClose: _propTypes2.default.func.isRequired
};
TooltipPortal.contextTypes = {
  document: _propTypes2.default.any,
  panel: _propTypes2.default.string
};

var Tooltip = function (_React$Component2) {
  _inherits(Tooltip, _React$Component2);

  function Tooltip() {
    var _ref3;

    var _temp2, _this2, _ret2;

    _classCallCheck(this, Tooltip);

    for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      args[_key2] = arguments[_key2];
    }

    return _ret2 = (_temp2 = (_this2 = _possibleConstructorReturn(this, (_ref3 = Tooltip.__proto__ || Object.getPrototypeOf(Tooltip)).call.apply(_ref3, [this].concat(args))), _this2), _this2.state = {
      ready: false
    }, _this2.getRef = function (el) {
      return _this2.targetEl = el;
    }, _temp2), _possibleConstructorReturn(_this2, _ret2);
  }

  _createClass(Tooltip, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.targetEl && this.setState({ ready: true });
    }
  }, {
    key: 'render',
    value: function render() {
      var _React$cloneElement;

      var _props3 = this.props,
          children = _props3.children,
          isShown = _props3.isShown,
          portalProps = _objectWithoutProperties(_props3, ['children', 'isShown']);

      var child = _react2.default.cloneElement(children, (_React$cloneElement = {}, _defineProperty(_React$cloneElement, isDOMTypeElement(children) ? 'ref' : 'getRootRef', this.getRef), _defineProperty(_React$cloneElement, 'key', 'c'), _React$cloneElement));

      if (!isShown || !this.state.ready) {
        return child;
      }

      return [child, _react2.default.createElement(TooltipPortal, _extends({}, portalProps, { target: this.targetEl, key: 't' }))];
    }
  }]);

  return Tooltip;
}(_react2.default.Component);

Tooltip.propTypes = {
  /**
   * **Важно**: если в `children` передан React-компонент, то необходимо убедиться в том, что он поддерживает
   * свойство `getRootRef`, которое должно возвращаться ссылку на корневой DOM-элемент компонента,
   * иначе тултип показан не будет. Если передан React-element, то такой проблемы нет.
   */
  children: _propTypes2.default.node.isRequired,
  /**
   * Если передан `false`, то рисуется просто `children`.
   */
  isShown: _propTypes2.default.bool.isRequired,
  /**
   * Текст тултипа.
   */
  text: _propTypes2.default.node,
  /**
   * Заголовок тултипа.
   */
  title: _propTypes2.default.node,
  /**
   * Положение по-горизонтали (прижатие к левому или правому краю `children`).
   */
  alignX: _propTypes2.default.oneOf(['left', 'right']),
  /**
   * Положение по-вертикали (расположение над или под `children`).
   */
  alignY: _propTypes2.default.oneOf(['top', 'bottom']),
  /**
   * Сдвиг по-горизонтали (относительно портала, в котором рисуется тултип).
   */
  offsetX: _propTypes2.default.number,
  /**
   * Сдвиг по-вертикали (относительно портала, в котором рисуется тултип).
   */
  offsetY: _propTypes2.default.number,
  /**
   * Сдвиг треугольника (относительно ширины тултипа).
   */
  cornerOffset: _propTypes2.default.number,
  /**
   * Callback, который вызывается при клике по любому месту в пределах экрана.
   */
  onClose: _propTypes2.default.func.isRequired
};
Tooltip.defaultProps = {
  offsetX: 0,
  offsetY: 15,
  alignX: 'left',
  alignY: 'bottom',
  cornerOffset: 0,
  isShown: true
};
exports.default = Tooltip;

/***/ }),
/* 73 */,
/* 74 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 75 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _getClassName = __webpack_require__(3);

var _getClassName2 = _interopRequireDefault(_getClassName);

var _classnames = __webpack_require__(2);

var _classnames2 = _interopRequireDefault(_classnames);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

__webpack_require__(74);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var baseClassName = (0, _getClassName2.default)('Link');

var Link = function Link(_ref) {
  var children = _ref.children,
      className = _ref.className,
      Component = _ref.Component,
      getRootRef = _ref.getRootRef,
      restProps = _objectWithoutProperties(_ref, ['children', 'className', 'Component', 'getRootRef']);

  return _react2.default.createElement(
    Component,
    _extends({}, restProps, { ref: getRootRef, className: (0, _classnames2.default)(baseClassName, className) }),
    children
  );
};

Link.propTypes = {
  children: _propTypes2.default.node,
  className: _propTypes2.default.string,
  Component: _propTypes2.default.any,
  getRootRef: _propTypes2.default.func
};

Link.defaultProps = {
  Component: 'a'
};

exports.default = Link;

/***/ }),
/* 76 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _FixedLayout = __webpack_require__(12);

var _FixedLayout2 = _interopRequireDefault(_FixedLayout);

var _Tabs = __webpack_require__(19);

var _Tabs2 = _interopRequireDefault(_Tabs);

var _platform = __webpack_require__(4);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var osname = (0, _platform.platform)();

/**
 * @deprecated этот компонент устарел и будет удален в следущей мажорной версии.
 * Для отрисовки фиксированных табов используйте связку `Tabs` и `FixedLayout`.
 */

var FixedTabs = function (_React$Component) {
  _inherits(FixedTabs, _React$Component);

  function FixedTabs() {
    _classCallCheck(this, FixedTabs);

    return _possibleConstructorReturn(this, (FixedTabs.__proto__ || Object.getPrototypeOf(FixedTabs)).apply(this, arguments));
  }

  _createClass(FixedTabs, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          vertical = _props.vertical,
          className = _props.className,
          style = _props.style,
          theme = _props.theme,
          children = _props.children;


      return _react2.default.createElement(
        _FixedLayout2.default,
        { vertical: vertical, className: className, style: style },
        _react2.default.createElement(
          _Tabs2.default,
          { theme: theme },
          children
        )
      );
    }
  }]);

  return FixedTabs;
}(_react2.default.Component);

FixedTabs.propTypes = {
  children: _propTypes2.default.node.isRequired,
  className: _propTypes2.default.string,
  vertical: _propTypes2.default.oneOf(['top', 'bottom']),
  style: _propTypes2.default.object,
  /**
   * Значения white и gray устарели. Они будут удалены в следующей мажорной версии.
   * Для Android актуален только header
   */
  theme: _propTypes2.default.oneOf(['light', 'header']),
  /**
   * iOS only
   */
  type: _propTypes2.default.oneOf(['default', 'buttons'])
};
FixedTabs.defaultProps = {
  theme: osname === _platform.IOS ? 'light' : 'header',
  vertical: 'top'
};
exports.default = FixedTabs;

/***/ }),
/* 77 */,
/* 78 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 79 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _getClassName = __webpack_require__(3);

var _getClassName2 = _interopRequireDefault(_getClassName);

var _Tappable = __webpack_require__(5);

var _Tappable2 = _interopRequireDefault(_Tappable);

__webpack_require__(78);

var _classnames = __webpack_require__(2);

var _classnames2 = _interopRequireDefault(_classnames);

var _platform = __webpack_require__(4);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var osname = (0, _platform.platform)();
var baseClassName = (0, _getClassName2.default)('TabsItem');

var TabsItem = function (_React$Component) {
  _inherits(TabsItem, _React$Component);

  function TabsItem() {
    _classCallCheck(this, TabsItem);

    return _possibleConstructorReturn(this, (TabsItem.__proto__ || Object.getPrototypeOf(TabsItem)).apply(this, arguments));
  }

  _createClass(TabsItem, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          children = _props.children,
          selected = _props.selected,
          className = _props.className,
          restProps = _objectWithoutProperties(_props, ['children', 'selected', 'className']);

      return _react2.default.createElement(
        _Tappable2.default,
        _extends({}, restProps, {
          className: (0, _classnames2.default)(baseClassName, { 'TabsItem--selected': selected }, className),
          activeEffectDelay: osname === _platform.IOS ? 0 : _Tappable.ACTIVE_EFFECT_DELAY
        }),
        children
      );
    }
  }]);

  return TabsItem;
}(_react2.default.Component);

TabsItem.propTypes = {
  children: _propTypes2.default.node,
  selected: _propTypes2.default.bool,
  className: _propTypes2.default.string
};
TabsItem.defaultProps = {
  selected: false
};
exports.default = TabsItem;

/***/ }),
/* 80 */,
/* 81 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 82 */
/***/ (function(module, exports, __webpack_require__) {

(function webpackUniversalModuleDefinition(root, factory) {
	if(true)
		module.exports = factory(__webpack_require__(0), __webpack_require__(7), __webpack_require__(6));
	else { var i, a; }
})(window, function(__WEBPACK_EXTERNAL_MODULE__0__, __WEBPACK_EXTERNAL_MODULE__1__, __WEBPACK_EXTERNAL_MODULE__2__) {
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
/******/ 	return __webpack_require__(__webpack_require__.s = 116);
/******/ })
/************************************************************************/
/******/ ({

/***/ 0:
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__0__;

/***/ }),

/***/ 1:
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__1__;

/***/ }),

/***/ 116:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _browserSymbol = __webpack_require__(2);

var _browserSymbol2 = _interopRequireDefault(_browserSymbol);

var _browserSprite = __webpack_require__(1);

var _browserSprite2 = _interopRequireDefault(_browserSprite);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var symbol = new _browserSymbol2.default({
  "id": "search_24",
  "use": "search_24-usage",
  "viewBox": "0 0 24 24",
  "content": "<symbol viewBox=\"0 0 24 24\" id=\"search_24\"><g fill=\"none\" fill-rule=\"evenodd\"><path d=\"M0 0h24v24H0z\" /><path d=\"M16.535 15.12l4.172 4.173a1 1 0 0 1-1.414 1.414l-4.172-4.172a7.25 7.25 0 1 1 1.414-1.414zM10.75 16a5.25 5.25 0 1 0 0-10.5 5.25 5.25 0 0 0 0 10.5z\" fill=\"currentColor\" fill-rule=\"nonzero\" /></g></symbol>"
});
var result = _browserSprite2.default.add(symbol);

var width = symbol.viewBox.split(' ')[2];
var height = symbol.viewBox.split(' ')[3];
var size = Math.max(width, height);

function SvgIcon(_ref) {
  var className = _ref.className,
      fill = _ref.fill,
      style = _ref.style,
      getRootRef = _ref.getRootRef,
      restProps = _objectWithoutProperties(_ref, ["className", "fill", "style", "getRootRef"]);

  return _react2.default.createElement(
    "div",
    _extends({}, restProps, {
      ref: getRootRef,
      className: 'Icon' + ' Icon--' + size + ' Icon--' + symbol.id + ' ' + (className || ''),
      style: _extends({}, style, { width: width + 'px', height: height + 'px' })
    }),
    _react2.default.createElement(
      "svg",
      { viewBox: symbol.viewBox, width: width, height: height, style: { display: 'block' } },
      _react2.default.createElement("use", { xlinkHref: '#' + symbol.id, style: { fill: 'currentColor', color: fill } })
    )
  );
}
exports.default = SvgIcon;

/***/ }),

/***/ 2:
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__2__;

/***/ })

/******/ });
});

/***/ }),
/* 83 */
/***/ (function(module, exports, __webpack_require__) {

(function webpackUniversalModuleDefinition(root, factory) {
	if(true)
		module.exports = factory(__webpack_require__(0), __webpack_require__(7), __webpack_require__(6));
	else { var i, a; }
})(window, function(__WEBPACK_EXTERNAL_MODULE__0__, __WEBPACK_EXTERNAL_MODULE__1__, __WEBPACK_EXTERNAL_MODULE__2__) {
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
/******/ 	return __webpack_require__(__webpack_require__.s = 210);
/******/ })
/************************************************************************/
/******/ ({

/***/ 0:
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__0__;

/***/ }),

/***/ 1:
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__1__;

/***/ }),

/***/ 2:
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__2__;

/***/ }),

/***/ 210:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _browserSymbol = __webpack_require__(2);

var _browserSymbol2 = _interopRequireDefault(_browserSymbol);

var _browserSprite = __webpack_require__(1);

var _browserSprite2 = _interopRequireDefault(_browserSprite);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var symbol = new _browserSymbol2.default({
  "id": "back_24",
  "use": "back_24-usage",
  "viewBox": "0 0 24 24",
  "content": "<symbol viewBox=\"0 0 24 24\" id=\"back_24\"><g fill=\"none\" fill-rule=\"evenodd\"><path d=\"M24 0H0v24h24z\" /><path d=\"M7.8 11l4.9-4.9a.99.99 0 0 0-1.4-1.4l-6.593 6.593a1 1 0 0 0 0 1.414L11.3 19.3a.99.99 0 0 0 1.4-1.4L7.8 13H20a1 1 0 0 0 0-2H7.8z\" fill=\"currentColor\" /></g></symbol>"
});
var result = _browserSprite2.default.add(symbol);

var width = symbol.viewBox.split(' ')[2];
var height = symbol.viewBox.split(' ')[3];
var size = Math.max(width, height);

function SvgIcon(_ref) {
  var className = _ref.className,
      fill = _ref.fill,
      style = _ref.style,
      getRootRef = _ref.getRootRef,
      restProps = _objectWithoutProperties(_ref, ["className", "fill", "style", "getRootRef"]);

  return _react2.default.createElement(
    "div",
    _extends({}, restProps, {
      ref: getRootRef,
      className: 'Icon' + ' Icon--' + size + ' Icon--' + symbol.id + ' ' + (className || ''),
      style: _extends({}, style, { width: width + 'px', height: height + 'px' })
    }),
    _react2.default.createElement(
      "svg",
      { viewBox: symbol.viewBox, width: width, height: height, style: { display: 'block' } },
      _react2.default.createElement("use", { xlinkHref: '#' + symbol.id, style: { fill: 'currentColor', color: fill } })
    )
  );
}
exports.default = SvgIcon;

/***/ })

/******/ });
});

/***/ }),
/* 84 */,
/* 85 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 86 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _getClassName = __webpack_require__(3);

var _getClassName2 = _interopRequireDefault(_getClassName);

var _classnames2 = __webpack_require__(2);

var _classnames3 = _interopRequireDefault(_classnames2);

__webpack_require__(85);

var _HeaderButton = __webpack_require__(32);

var _HeaderButton2 = _interopRequireDefault(_HeaderButton);

var _back = __webpack_require__(83);

var _back2 = _interopRequireDefault(_back);

var _cancel = __webpack_require__(22);

var _cancel2 = _interopRequireDefault(_cancel);

var _search = __webpack_require__(82);

var _search2 = _interopRequireDefault(_search);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var baseClassName = (0, _getClassName2.default)('Search');

var SearchAndroid = function (_React$Component) {
  _inherits(SearchAndroid, _React$Component);

  function SearchAndroid(props) {
    _classCallCheck(this, SearchAndroid);

    var _this = _possibleConstructorReturn(this, (SearchAndroid.__proto__ || Object.getPrototypeOf(SearchAndroid)).call(this, props));

    _this.onCancel = function () {
      if (!_this.isControlledOutside) {
        _this.setState({ value: '' });
      }
      if (_this.props.onChange) {
        _this.props.onChange('');
      }
      _this.inputEl.focus();
    };

    _this.onChange = function (e) {
      if (!_this.isControlledOutside) {
        _this.setState({ value: e.target.value });
      }
      if (_this.props.onChange) {
        _this.props.onChange(e.target.value, e);
      }
    };

    _this.inputRef = function (el) {
      _this.inputEl = el;
      _this.props.getRef && _this.props.getRef(el);
    };

    var state = {};

    if (props.hasOwnProperty('value')) {
      _this.isControlledOutside = true;
    } else {
      state.value = props.defaultValue || '';
    }

    _this.state = state;
    return _this;
  }

  _createClass(SearchAndroid, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.props.theme === 'header' && this.inputEl.focus();
    }
  }, {
    key: 'render',
    value: function render() {
      var _classnames;

      var _props = this.props,
          getRef = _props.getRef,
          value = _props.value,
          defaultValue = _props.defaultValue,
          onChange = _props.onChange,
          onClose = _props.onClose,
          theme = _props.theme,
          inputProps = _objectWithoutProperties(_props, ['getRef', 'value', 'defaultValue', 'onChange', 'onClose', 'theme']);

      var className = (0, _classnames3.default)(baseClassName, (_classnames = {}, _defineProperty(_classnames, 'Search--' + theme, true), _defineProperty(_classnames, 'Search--focused', this.state.focused), _defineProperty(_classnames, 'Search--has-value', !!this.value), _classnames), this.props.className);

      return _react2.default.createElement(
        'div',
        { className: className },
        _react2.default.createElement(
          'div',
          { className: 'Search__container' },
          _react2.default.createElement(
            'div',
            { className: 'Search__before' },
            theme === 'default' && _react2.default.createElement(_search2.default, null),
            theme === 'header' && _react2.default.createElement(
              _HeaderButton2.default,
              { onClick: onClose },
              _react2.default.createElement(_back2.default, null)
            )
          ),
          _react2.default.createElement(
            'div',
            { className: 'Search__control' },
            _react2.default.createElement('input', _extends({}, inputProps, {
              className: 'Search__input',
              ref: this.inputRef,
              value: this.value,
              onChange: this.onChange
            }))
          ),
          !!this.value && _react2.default.createElement(
            'div',
            { className: 'Search__after' },
            theme === 'default' && _react2.default.createElement(_cancel2.default, { onClick: this.onCancel }),
            theme === 'header' && _react2.default.createElement(
              _HeaderButton2.default,
              { onClick: this.onCancel },
              _react2.default.createElement(_cancel2.default, null)
            )
          )
        )
      );
    }
  }, {
    key: 'value',
    get: function get() {
      return this.isControlledOutside ? this.props.value : this.state.value;
    }
  }]);

  return SearchAndroid;
}(_react2.default.Component);

SearchAndroid.propTypes = {
  className: _propTypes2.default.string,
  defaultValue: _propTypes2.default.string,
  value: _propTypes2.default.string,
  onChange: _propTypes2.default.func,
  onFocus: _propTypes2.default.func,
  onBlur: _propTypes2.default.func,
  onClose: _propTypes2.default.func,
  placeholder: _propTypes2.default.node,
  theme: _propTypes2.default.oneOf(['header', 'default']),
  getRef: _propTypes2.default.func
};
SearchAndroid.defaultProps = {
  placeholder: 'Поиск',
  theme: 'default'
};
exports.default = SearchAndroid;

/***/ }),
/* 87 */
/***/ (function(module, exports, __webpack_require__) {

(function webpackUniversalModuleDefinition(root, factory) {
	if(true)
		module.exports = factory(__webpack_require__(0), __webpack_require__(7), __webpack_require__(6));
	else { var i, a; }
})(window, function(__WEBPACK_EXTERNAL_MODULE__0__, __WEBPACK_EXTERNAL_MODULE__1__, __WEBPACK_EXTERNAL_MODULE__2__) {
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
/******/ 	return __webpack_require__(__webpack_require__.s = 224);
/******/ })
/************************************************************************/
/******/ ({

/***/ 0:
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__0__;

/***/ }),

/***/ 1:
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__1__;

/***/ }),

/***/ 2:
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__2__;

/***/ }),

/***/ 224:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _browserSymbol = __webpack_require__(2);

var _browserSymbol2 = _interopRequireDefault(_browserSymbol);

var _browserSprite = __webpack_require__(1);

var _browserSprite2 = _interopRequireDefault(_browserSprite);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var symbol = new _browserSymbol2.default({
  "id": "search_16",
  "use": "search_16-usage",
  "viewBox": "0 0 16 16",
  "content": "<symbol viewBox=\"0 0 16 16\" id=\"search_16\"><g fill=\"none\" fill-rule=\"evenodd\"><path d=\"M0 0h16v16H0z\" /><path d=\"M14.743 13.574L10.91 9.74a5.426 5.426 0 0 0 1.05-3.232A5.532 5.532 0 0 0 6.46 1 5.436 5.436 0 0 0 1 6.468a5.532 5.532 0 0 0 5.5 5.508 5.408 5.408 0 0 0 3.242-1.061l.004-.003 3.83 3.831a.826.826 0 1 0 1.167-1.169zm-8.247-2.696a4.425 4.425 0 0 1-4.4-4.406 4.35 4.35 0 0 1 4.368-4.374 4.426 4.426 0 0 1 4.4 4.406 4.35 4.35 0 0 1-4.368 4.374z\" fill=\"currentColor\" /></g></symbol>"
});
var result = _browserSprite2.default.add(symbol);

var width = symbol.viewBox.split(' ')[2];
var height = symbol.viewBox.split(' ')[3];
var size = Math.max(width, height);

function SvgIcon(_ref) {
  var className = _ref.className,
      fill = _ref.fill,
      style = _ref.style,
      getRootRef = _ref.getRootRef,
      restProps = _objectWithoutProperties(_ref, ["className", "fill", "style", "getRootRef"]);

  return _react2.default.createElement(
    "div",
    _extends({}, restProps, {
      ref: getRootRef,
      className: 'Icon' + ' Icon--' + size + ' Icon--' + symbol.id + ' ' + (className || ''),
      style: _extends({}, style, { width: width + 'px', height: height + 'px' })
    }),
    _react2.default.createElement(
      "svg",
      { viewBox: symbol.viewBox, width: width, height: height, style: { display: 'block' } },
      _react2.default.createElement("use", { xlinkHref: '#' + symbol.id, style: { fill: 'currentColor', color: fill } })
    )
  );
}
exports.default = SvgIcon;

/***/ })

/******/ });
});

/***/ }),
/* 88 */,
/* 89 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 90 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _getClassName = __webpack_require__(3);

var _getClassName2 = _interopRequireDefault(_getClassName);

var _classnames2 = __webpack_require__(2);

var _classnames3 = _interopRequireDefault(_classnames2);

__webpack_require__(89);

var _search = __webpack_require__(87);

var _search2 = _interopRequireDefault(_search);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var baseClassName = (0, _getClassName2.default)('Search');

var searchId = 0;

var SearchIOS = function (_React$Component) {
  _inherits(SearchIOS, _React$Component);

  function SearchIOS(props) {
    _classCallCheck(this, SearchIOS);

    var _this = _possibleConstructorReturn(this, (SearchIOS.__proto__ || Object.getPrototypeOf(SearchIOS)).call(this, props));

    _this.onFocus = function (e) {
      _this.setState({ focused: true });
      _this.props.onFocus && _this.props.onFocus(e);
    };

    _this.onBlur = function (e) {
      _this.setState({ focused: false });
      _this.props.onBlur && _this.props.onBlur(e);
    };

    _this.onChange = function (e) {
      if (!_this.isControlledOutside) {
        _this.setState({ value: e.target.value });
      }
      if (_this.props.onChange) {
        _this.props.onChange(e.target.value, e);
      }
    };

    _this.onCancel = function () {
      if (!_this.isControlledOutside) {
        _this.setState({ value: '' });
      }
      if (_this.props.onChange) {
        _this.props.onChange('');
      }
    };

    _this.inputRef = function (el) {
      return _this.props.getRef && _this.props.getRef(el);
    };

    var state = {
      showAfter: false,
      focused: false,
      placeholderOffset: null,
      afterWidth: null
    };

    if (props.hasOwnProperty('value')) {
      _this.isControlledOutside = true;
    } else {
      state.value = props.defaultValue || '';
    }
    searchId++;
    _this.state = state;
    return _this;
  }

  _createClass(SearchIOS, [{
    key: 'render',
    value: function render() {
      var _classnames;

      var _props = this.props,
          className = _props.className,
          theme = _props.theme,
          onFocus = _props.onFocus,
          onBlur = _props.onBlur,
          onChange = _props.onChange,
          defaultValue = _props.defaultValue,
          value = _props.value,
          placeholder = _props.placeholder,
          after = _props.after,
          getRef = _props.getRef,
          inputProps = _objectWithoutProperties(_props, ['className', 'theme', 'onFocus', 'onBlur', 'onChange', 'defaultValue', 'value', 'placeholder', 'after', 'getRef']);

      return _react2.default.createElement(
        'div',
        { className: (0, _classnames3.default)(baseClassName, (_classnames = {}, _defineProperty(_classnames, 'Search--' + theme, true), _defineProperty(_classnames, 'Search--focused', this.state.focused), _defineProperty(_classnames, 'Search--has-value', this.value), _defineProperty(_classnames, 'Search--has-after', after), _classnames), className) },
        _react2.default.createElement(
          'div',
          { className: 'Search__in' },
          _react2.default.createElement('div', { className: 'Search__width' }),
          _react2.default.createElement(
            'div',
            { className: 'Search__control' },
            _react2.default.createElement('input', _extends({}, inputProps, {
              id: 'search-' + searchId,
              ref: this.inputRef,
              type: 'text',
              className: 'Search__input',
              onFocus: this.onFocus,
              onBlur: this.onBlur,
              onChange: this.onChange,
              value: this.value
            })),
            after && _react2.default.createElement(
              'div',
              { className: 'Search__after-width' },
              after
            ),
            _react2.default.createElement(
              'label',
              {
                className: 'Search__placeholder',
                htmlFor: 'search-' + searchId
              },
              _react2.default.createElement(
                'div',
                { className: 'Search__placeholder-in' },
                _react2.default.createElement(_search2.default, null),
                _react2.default.createElement('div', { className: 'Search__placeholder-text', dangerouslySetInnerHTML: { __html: placeholder } })
              )
            )
          ),
          after && _react2.default.createElement(
            'div',
            { className: 'Search__after', onClick: this.onCancel },
            _react2.default.createElement(
              'div',
              { className: 'Search__after-in' },
              after
            )
          )
        )
      );
    }
  }, {
    key: 'value',
    get: function get() {
      return this.isControlledOutside ? this.props.value : this.state.value;
    }
  }]);

  return SearchIOS;
}(_react2.default.Component);

SearchIOS.propTypes = {
  className: _propTypes2.default.string,
  after: _propTypes2.default.node,
  defaultValue: _propTypes2.default.string,
  value: _propTypes2.default.string,
  onChange: _propTypes2.default.func,
  onFocus: _propTypes2.default.func,
  onBlur: _propTypes2.default.func,
  placeholder: _propTypes2.default.node,
  theme: _propTypes2.default.oneOf(['header', 'default']),
  getRef: _propTypes2.default.func
};
SearchIOS.defaultProps = {
  after: 'Отменить',
  theme: 'default',
  placeholder: 'Поиск'
};
exports.default = SearchIOS;

/***/ }),
/* 91 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _platform = __webpack_require__(4);

var _SearchIOS = __webpack_require__(90);

var _SearchIOS2 = _interopRequireDefault(_SearchIOS);

var _SearchAndroid = __webpack_require__(86);

var _SearchAndroid2 = _interopRequireDefault(_SearchAndroid);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var osname = (0, _platform.platform)();

var Search = function (_React$Component) {
  _inherits(Search, _React$Component);

  function Search() {
    _classCallCheck(this, Search);

    return _possibleConstructorReturn(this, (Search.__proto__ || Object.getPrototypeOf(Search)).apply(this, arguments));
  }

  _createClass(Search, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          onClose = _props.onClose,
          iosProps = _objectWithoutProperties(_props, ['onClose']);

      var _props2 = this.props,
          after = _props2.after,
          before = _props2.before,
          androidProps = _objectWithoutProperties(_props2, ['after', 'before']);

      if (osname === _platform.IOS) {
        return _react2.default.createElement(_SearchIOS2.default, iosProps);
      } else {
        return _react2.default.createElement(_SearchAndroid2.default, androidProps);
      }
    }
  }]);

  return Search;
}(_react2.default.Component);

Search.propTypes = {
  className: _propTypes2.default.string,
  getRef: _propTypes2.default.func,
  /**
   * iOS only. Текст кнопки "отмена", которая чистит текстовое поле и убирает фокус.
   */
  after: _propTypes2.default.node,
  /**
   * iOS only
   */
  before: _propTypes2.default.node,
  theme: _propTypes2.default.oneOf(['header', 'default']),

  /**
   * Android only. Вызывается при клике по стрелке (слева). Этот контрол служит для выхода из режима поиска.
   */
  onClose: _propTypes2.default.func,

  /**
   * **Важно:** в коллбэк первым аргументом прилетает *значение* текстового поля.
   * Объект события передается вторым аргументом.
   */
  onChange: _propTypes2.default.func
};
Search.defaultProps = {
  theme: 'default'
};
exports.default = Search;

/***/ }),
/* 92 */,
/* 93 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 94 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _getClassName = __webpack_require__(3);

var _getClassName2 = _interopRequireDefault(_getClassName);

var _classnames = __webpack_require__(2);

var _classnames2 = _interopRequireDefault(_classnames);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

__webpack_require__(93);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var baseClassName = (0, _getClassName2.default)('Progress');

var Progress = function Progress(_ref) {
  var value = _ref.value,
      className = _ref.className,
      color = _ref.color,
      getRootRef = _ref.getRootRef,
      restProps = _objectWithoutProperties(_ref, ['value', 'className', 'color', 'getRootRef']);

  return _react2.default.createElement(
    'div',
    _extends({}, restProps, { ref: getRootRef, className: (0, _classnames2.default)(baseClassName, className) }),
    _react2.default.createElement('div', { className: 'Progress__in', style: { width: value + '%', backgroundColor: color } })
  );
};

Progress.propTypes = {
  color: _propTypes2.default.string,
  style: _propTypes2.default.object,
  className: _propTypes2.default.string,
  value: _propTypes2.default.number,
  getRootRef: _propTypes2.default.func
};

Progress.defaultProps = {
  color: '#528bcc',
  value: 0
};

exports.default = Progress;

/***/ }),
/* 95 */,
/* 96 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 97 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

__webpack_require__(96);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _getClassName = __webpack_require__(3);

var _getClassName2 = _interopRequireDefault(_getClassName);

var _Touch = __webpack_require__(8);

var _Touch2 = _interopRequireDefault(_Touch);

var _classnames3 = __webpack_require__(2);

var _classnames4 = _interopRequireDefault(_classnames3);

var _requestAnimationFrame = __webpack_require__(9);

var _requestAnimationFrame2 = _interopRequireDefault(_requestAnimationFrame);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var baseClassNames = (0, _getClassName2.default)('Gallery');

var Gallery = function (_Component) {
  _inherits(Gallery, _Component);

  function Gallery(props) {
    _classCallCheck(this, Gallery);

    var _this = _possibleConstructorReturn(this, (Gallery.__proto__ || Object.getPrototypeOf(Gallery)).call(this, props));

    _initialiseProps.call(_this);

    var current = typeof props.slideIndex === 'number' ? props.slideIndex : props.initialSlideIndex;

    _this.state = {
      containerWidth: 0,
      current: current,
      deltaX: 0,
      shiftX: 0,
      slides: [],
      animation: false,
      duration: 0.24
    };

    _this.slides = _this.getChildren(props.children);
    return _this;
  }

  _createClass(Gallery, [{
    key: 'initializeSlides',
    value: function initializeSlides() {
      var callback = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : function () {};

      var slides = this.getSlidesCoords();
      var containerWidth = this.container.offsetWidth;
      var viewportWidth = this.viewport.offsetWidth;
      var layerWidth = slides.reduce(function (val, slide) {
        return slide.width + val;
      }, 0);
      var min = this.calcMin({ containerWidth: containerWidth, layerWidth: layerWidth, viewportWidth: viewportWidth });
      var max = 0;

      this.setState({ min: min, max: max, layerWidth: layerWidth, containerWidth: containerWidth, slides: slides }, callback);
    }
  }, {
    key: 'calcMin',
    value: function calcMin(_ref) {
      var containerWidth = _ref.containerWidth,
          layerWidth = _ref.layerWidth,
          viewportWidth = _ref.viewportWidth;

      switch (this.props.align) {
        case 'left':
          return containerWidth - layerWidth;
        case 'right':
          return viewportWidth - layerWidth;
        case 'center':
          return viewportWidth - (containerWidth - viewportWidth) / 2 - layerWidth;
      }
    }

    /**
     * Получает координаты и размеры каждого слайда
      * @returns {Array} Массив с объектами, описывающими габариты слайда
     */

  }, {
    key: 'getSlidesCoords',
    value: function getSlidesCoords() {
      var _this2 = this;

      return [].concat(this.props.children).reduce(function (acc, item, i) {
        if (item) {
          var elem = _this2.slidesStore['slide-' + i];
          var res = {
            coordX: elem.offsetLeft,
            width: elem.offsetWidth,
            id: item.props.id
          };

          acc.push(res);
        }

        return acc;
      }, []);
    }

    /**
     * Считает отступ слоя галереи во время драга
     *
     * @returns {Number} Значения отступа
     */

  }, {
    key: 'calculateDragIndent',
    value: function calculateDragIndent() {
      var _state = this.state,
          shiftX = _state.shiftX,
          deltaX = _state.deltaX,
          min = _state.min,
          max = _state.max;

      var indent = shiftX + deltaX;
      if (indent > max) {
        return max + Number((indent - max) / 3);
      } else if (indent < min) {
        return min + Number((indent - min) / 3);
      }

      return indent;
    }

    /**
     * Считает отступ слоя галереи
     *
     * @param {Number} targetIndex ID целевого слайда
     * @returns {Number} Значения отступа
     */

  }, {
    key: 'calculateIndent',
    value: function calculateIndent(targetIndex) {
      var slides = this.state.slides;


      if (!this.isDraggable()) {
        return 0;
      }

      var coordX = slides.length ? slides[targetIndex].coordX : 0;
      return this.validateIndent(-1 * coordX);
    }
  }, {
    key: 'validateIndent',
    value: function validateIndent(value) {
      var _state2 = this.state,
          min = _state2.min,
          max = _state2.max;


      if (value < min) {
        return min;
      } else if (value > max) {
        return max;
      }

      return value;
    }
  }, {
    key: 'isDraggable',
    value: function isDraggable() {
      return this.state.layerWidth > this.state.containerWidth;
    }

    /**
     * Получает индекс слайда, к которому будет осуществлен переход
     *
     * @returns {Number} Индекс слайда
     */

  }, {
    key: 'getTarget',
    value: function getTarget() {
      var _state3 = this.state,
          slides = _state3.slides,
          current = _state3.current,
          deltaX = _state3.deltaX,
          shiftX = _state3.shiftX,
          startT = _state3.startT;

      var expectDeltaX = deltaX / (new Date() - startT) * 240 * 0.6;
      var shift = shiftX + deltaX + expectDeltaX;
      var direction = deltaX < 0 ? 1 : -1;

      // Находим ближайшую границу слайда к текущему отступу
      var targetIndex = slides.reduce(function (val, item, index) {
        var previousValue = Math.abs(slides[val].coordX + shift);
        var currentValue = Math.abs(item.coordX + shift);

        return previousValue < currentValue ? val : index;
      }, current);

      if (targetIndex === current) {
        var targetSlide = current + direction;

        if (targetSlide >= 0 && targetSlide < slides.length) {
          if (Math.abs(deltaX) > slides[targetSlide].width * 0.05) {
            targetIndex = targetSlide;
          }
        }
      }

      return targetIndex;
    }
  }, {
    key: 'getChildren',
    value: function getChildren(children) {
      return [].concat(children || this.props.children).reduce(this.reduceChildren, []);
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _this3 = this;

      this.initializeSlides(function () {
        _this3.setState({
          shiftX: _this3.calculateIndent(_this3.state.current)
        });
      });
      window.addEventListener('resize', this.onResize);

      if (this.props.autoplay) {
        this.setTimeout(this.props.autoplay);
      }
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate(prevProps, prevState) {
      if (this.isChildrenDirty) {
        this.isChildrenDirty = false;
        this.initializeSlides();
      }
      if (prevState.current !== this.state.current && this.props.onChange) {
        this.props.onChange(this.state.current);
      }
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      this.slides = this.getChildren(nextProps.children);
      this.isChildrenDirty = true;

      if (nextProps.autoplay && !this.props.autoplay) {
        if (nextProps.autoplay) {
          this.setTimeout(nextProps.autoplay);
        }
      }
      if (!nextProps.autoplay && this.props.autoplay) {
        this.clearTimeout();
      }
      if (nextProps.slideIndex !== this.props.slideIndex && typeof nextProps.slideIndex === 'number') {
        this.go(nextProps.slideIndex);
      }
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      window.removeEventListener('resize', this.onResize);
      this.clearTimeout();
    }
  }, {
    key: 'render',
    value: function render() {
      var _state4 = this.state,
          animation = _state4.animation,
          duration = _state4.duration,
          current = _state4.current,
          dragging = _state4.dragging;

      var _props = this.props,
          children = _props.children,
          slideWidth = _props.slideWidth,
          autoplay = _props.autoplay,
          initialSlideIndex = _props.initialSlideIndex,
          slideIndex = _props.slideIndex,
          onDragStart = _props.onDragStart,
          onDragEnd = _props.onDragEnd,
          onChange = _props.onChange,
          onEnd = _props.onEnd,
          align = _props.align,
          bullets = _props.bullets,
          className = _props.className,
          restProps = _objectWithoutProperties(_props, ['children', 'slideWidth', 'autoplay', 'initialSlideIndex', 'slideIndex', 'onDragStart', 'onDragEnd', 'onChange', 'onEnd', 'align', 'bullets', 'className']);

      var indent = dragging ? this.calculateDragIndent() : this.calculateIndent(current);
      var layerStyle = {
        WebkitTransform: 'translateX(' + indent + 'px)',
        transform: 'translateX(' + indent + 'px)',
        WebkitTransition: animation ? '-webkit-transform ' + duration + 's cubic-bezier(.1, 0, .25, 1)' : 'none',
        transition: animation ? 'transform ' + duration + 's cubic-bezier(.1, 0, .25, 1)' : 'none'
      };

      return _react2.default.createElement(
        'div',
        _extends({}, restProps, { className: (0, _classnames4.default)(baseClassNames, className, _defineProperty({
            'Gallery--dragging': dragging
          }, 'Gallery--' + this.props.align, true)), ref: this.getContainerRef }),
        _react2.default.createElement(
          _Touch2.default,
          {
            className: 'Gallery__viewport',
            onStartX: this.onStart,
            onMoveX: this.onMoveX,
            onEnd: this.onEnd,
            style: { width: slideWidth },
            ref: this.getViewportRef
          },
          _react2.default.createElement(
            'div',
            { className: 'Gallery__layer', style: layerStyle },
            this.slides
          )
        ),
        this.props.bullets && _react2.default.createElement(
          'div',
          { className: (0, _classnames4.default)('Gallery__bullets', _defineProperty({}, 'Gallery__bullets--' + this.props.bullets, true)) },
          this.slides.map(function (item, index) {
            return _react2.default.createElement('div', { className: (0, _classnames4.default)('Gallery__bullet', { 'Gallery__bullet--active': index === current }), key: index });
          })
        )
      );
    }
  }]);

  return Gallery;
}(_react.Component);

Gallery.propTypes = {
  children: _propTypes2.default.node,
  className: _propTypes2.default.string,
  style: _propTypes2.default.object,
  slideWidth: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number]),
  autoplay: _propTypes2.default.number,
  initialSlideIndex: _propTypes2.default.number,
  slideIndex: _propTypes2.default.number,
  onDragStart: _propTypes2.default.func,
  onDragEnd: _propTypes2.default.func,
  onChange: _propTypes2.default.func,
  onEnd: _propTypes2.default.func,
  align: _propTypes2.default.oneOf(['left', 'center', 'right']),
  bullets: _propTypes2.default.oneOf(['dark', 'light', false])
};
Gallery.defaultProps = {
  slideWidth: '100%',
  children: '',
  autoplay: 0,
  initialSlideIndex: 0,
  align: 'left',
  bullets: false
};

var _initialiseProps = function _initialiseProps() {
  var _this4 = this;

  this.slidesStore = {};

  this.go = function (targetIndex) {
    _this4.setState({
      animation: true,
      shiftX: _this4.calculateIndent(targetIndex),
      current: targetIndex
    });

    if (_this4.timeout) {
      _this4.clearTimeout();
      _this4.setTimeout(_this4.props.autoplay);
    }
  };

  this.onStart = function (e) {
    _this4.setState({
      animation: false,
      startT: e.startT
    });
  };

  this.onMoveX = function (e) {
    if (!_this4.isDraggable()) {
      return;
    }

    e.originalEvent.preventDefault();

    if (e.isSlideX) {
      _this4.props.onDragStart && _this4.props.onDragStart();
      if (_this4.state.deltaX !== e.shiftX || _this4.state.dragging !== e.isSlideX) {
        _this4.setState({
          deltaX: e.shiftX,
          dragging: e.isSlideX
        });
      }

      return true;
    }
  };

  this.onEnd = function (e) {
    var targetIndex = e.isSlide ? _this4.getTarget() : _this4.state.current;
    _this4.props.onDragEnd && _this4.props.onDragEnd();

    _this4.setState({
      shiftX: _this4.calculateIndent(targetIndex),
      deltaX: 0,
      animation: true,
      current: targetIndex,
      duration: '.24'
    });

    if (_this4.props.onEnd) {
      _this4.props.onEnd({
        targetIndex: targetIndex
      });
    }

    if (_this4.timeout) {
      _this4.clearTimeout();
      _this4.setTimeout(_this4.props.autoplay);
    }

    return true;
  };

  this.onResize = function () {
    _this4.initializeSlides();

    var layerWidth = _this4.state.layerWidth;

    var containerWidth = _this4.container.offsetWidth;
    var viewportWidth = _this4.viewport.offsetWidth;

    _this4.setState({
      shiftX: _this4.calculateIndent(_this4.state.current),
      containerWidth: containerWidth,
      min: _this4.calcMin({ layerWidth: layerWidth, containerWidth: containerWidth, viewportWidth: viewportWidth }),
      animation: false
    }, function () {
      (0, _requestAnimationFrame2.default)(function () {
        return _this4.setState({ animation: true });
      });
    });
  };

  this.setTimeout = function (duration) {
    _this4.timeout = setTimeout(function () {
      var _state5 = _this4.state,
          slides = _state5.slides,
          current = _state5.current;

      var targetIndex = current < slides.length - 1 ? current + 1 : 0;

      _this4.go(targetIndex);
    }, duration);
  };

  this.clearTimeout = function () {
    clearTimeout(_this4.timeout);
  };

  this.reduceChildren = function (acc, item, i) {
    if (item) {
      var ref = _this4.getSlideRef(i);
      acc.push(_react2.default.createElement(
        'div',
        { className: 'Gallery__slide', key: 'slide-' + i, ref: ref },
        item
      ));
    }

    return acc;
  };

  this.getContainerRef = function (container) {
    _this4.container = container;
  };

  this.getViewportRef = function (viewport) {
    _this4.viewport = viewport ? viewport.container : {};
  };

  this.getSlideRef = function (id) {
    return function (slide) {
      _this4.slidesStore['slide-' + id] = slide;
    };
  };
};

exports.default = Gallery;

/***/ }),
/* 98 */,
/* 99 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 100 */,
/* 101 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 102 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

__webpack_require__(101);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = __webpack_require__(2);

var _classnames2 = _interopRequireDefault(_classnames);

var _getClassName = __webpack_require__(3);

var _getClassName2 = _interopRequireDefault(_getClassName);

var _Avatar = __webpack_require__(20);

var _Avatar2 = _interopRequireDefault(_Avatar);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var baseClassNames = (0, _getClassName2.default)('Entity');

// @TODO Try to load photo
/**
 * @deprecated этот компонент устарел и будет удален в следущей мажорной версии.
 * Используйте `Cell`.
 */

var Entity = function (_Component) {
  _inherits(Entity, _Component);

  function Entity() {
    _classCallCheck(this, Entity);

    return _possibleConstructorReturn(this, (Entity.__proto__ || Object.getPrototypeOf(Entity)).apply(this, arguments));
  }

  _createClass(Entity, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          className = _props.className,
          style = _props.style,
          photo = _props.photo,
          title = _props.title,
          description = _props.description,
          avatarProps = _props.avatarProps,
          children = _props.children;


      return _react2.default.createElement(
        'div',
        { className: (0, _classnames2.default)(baseClassNames, className), style: style },
        _react2.default.createElement(
          'div',
          { className: 'Entity__aside' },
          _react2.default.createElement(_Avatar2.default, _extends({ src: photo, alt: title, size: this.avatarSize }, avatarProps))
        ),
        _react2.default.createElement(
          'div',
          { className: 'Entity__main' },
          title && _react2.default.createElement(
            'div',
            { className: 'Entity__title' },
            title
          ),
          description && _react2.default.createElement(
            'div',
            { className: 'Entity__description' },
            description
          ),
          children && _react2.default.createElement(
            'div',
            { className: 'Entity__content' },
            children
          )
        )
      );
    }
  }, {
    key: 'avatarSize',
    get: function get() {
      switch (this.props.size) {
        case 'm':
          return 64;
        case 's':
          return 48;
        default:
          return this.props.size;
      }
    }
  }]);

  return Entity;
}(_react.Component);

Entity.propTypes = {
  style: _propTypes2.default.object,
  /**
   * @deprecated
   * Use avatarProps.size instead
   */
  size: _propTypes2.default.oneOf(['m', 's', 80, 72, 64, 56, 48, 40, 36, 32, 28]),
  photo: _propTypes2.default.string,
  title: _propTypes2.default.node,
  description: _propTypes2.default.node,
  className: _propTypes2.default.string,
  avatarProps: _propTypes2.default.shape(_Avatar2.default.propTypes),
  children: _propTypes2.default.node
};
Entity.defaultProps = {
  size: 48,
  photo: '',
  title: '',
  description: ''
};
exports.default = Entity;

/***/ }),
/* 103 */,
/* 104 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 105 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _getClassName = __webpack_require__(3);

var _getClassName2 = _interopRequireDefault(_getClassName);

var _classnames = __webpack_require__(2);

var _classnames2 = _interopRequireDefault(_classnames);

__webpack_require__(104);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var baseClassName = (0, _getClassName2.default)('InfoRow');

var InfoRow = function InfoRow(_ref) {
  var title = _ref.title,
      className = _ref.className,
      children = _ref.children,
      restProps = _objectWithoutProperties(_ref, ['title', 'className', 'children']);

  return _react2.default.createElement(
    'div',
    _extends({}, restProps, { className: (0, _classnames2.default)(baseClassName, className) }),
    title && _react2.default.createElement(
      'div',
      { className: 'InfoRow__title' },
      title
    ),
    children && _react2.default.createElement(
      'div',
      null,
      children
    )
  );
};

InfoRow.propTypes = {
  title: _propTypes2.default.node.isRequired,
  children: _propTypes2.default.node,
  className: _propTypes2.default.string,
  style: _propTypes2.default.object
};

exports.default = InfoRow;

/***/ }),
/* 106 */,
/* 107 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 108 */,
/* 109 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 110 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = __webpack_require__(2);

var _classnames2 = _interopRequireDefault(_classnames);

__webpack_require__(109);

var _Div = __webpack_require__(21);

var _Div2 = _interopRequireDefault(_Div);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var Footer = function Footer(_ref) {
  var className = _ref.className,
      children = _ref.children,
      restProps = _objectWithoutProperties(_ref, ['className', 'children']);

  return _react2.default.createElement(
    _Div2.default,
    _extends({}, restProps, { className: (0, _classnames2.default)('Footer', className) }),
    children
  );
};

Footer.propTypes = {
  children: _propTypes2.default.node,
  className: _propTypes2.default.string,
  style: _propTypes2.default.object
};

exports.default = Footer;

/***/ }),
/* 111 */
/***/ (function(module, exports, __webpack_require__) {

(function webpackUniversalModuleDefinition(root, factory) {
	if(true)
		module.exports = factory(__webpack_require__(0), __webpack_require__(7), __webpack_require__(6));
	else { var i, a; }
})(window, function(__WEBPACK_EXTERNAL_MODULE__0__, __WEBPACK_EXTERNAL_MODULE__1__, __WEBPACK_EXTERNAL_MODULE__2__) {
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
/******/ 	return __webpack_require__(__webpack_require__.s = 204);
/******/ })
/************************************************************************/
/******/ ({

/***/ 0:
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__0__;

/***/ }),

/***/ 1:
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__1__;

/***/ }),

/***/ 2:
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__2__;

/***/ }),

/***/ 204:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _browserSymbol = __webpack_require__(2);

var _browserSymbol2 = _interopRequireDefault(_browserSymbol);

var _browserSprite = __webpack_require__(1);

var _browserSprite2 = _interopRequireDefault(_browserSprite);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var symbol = new _browserSymbol2.default({
  "id": "chevron_24",
  "use": "chevron_24-usage",
  "viewBox": "0 0 16 24",
  "content": "<symbol viewBox=\"0 0 16 24\" id=\"chevron_24\"><g fill=\"none\" fill-rule=\"evenodd\"><path d=\"M0 0h16v24H0z\" /><path d=\"M4.706 7.706a1 1 0 0 1 0-1.412l.088-.088a.997.997 0 0 1 1.414.002l5.084 5.084a.998.998 0 0 1 0 1.416l-5.084 5.084a1.002 1.002 0 0 1-1.414.002l-.088-.088a.995.995 0 0 1 0-1.412L9 12 4.706 7.706z\" fill=\"currentColor\" /></g></symbol>"
});
var result = _browserSprite2.default.add(symbol);

var width = symbol.viewBox.split(' ')[2];
var height = symbol.viewBox.split(' ')[3];
var size = Math.max(width, height);

function SvgIcon(_ref) {
  var className = _ref.className,
      fill = _ref.fill,
      style = _ref.style,
      getRootRef = _ref.getRootRef,
      restProps = _objectWithoutProperties(_ref, ["className", "fill", "style", "getRootRef"]);

  return _react2.default.createElement(
    "div",
    _extends({}, restProps, {
      ref: getRootRef,
      className: 'Icon' + ' Icon--' + size + ' Icon--' + symbol.id + ' ' + (className || ''),
      style: _extends({}, style, { width: width + 'px', height: height + 'px' })
    }),
    _react2.default.createElement(
      "svg",
      { viewBox: symbol.viewBox, width: width, height: height, style: { display: 'block' } },
      _react2.default.createElement("use", { xlinkHref: '#' + symbol.id, style: { fill: 'currentColor', color: fill } })
    )
  );
}
exports.default = SvgIcon;

/***/ })

/******/ });
});

/***/ }),
/* 112 */,
/* 113 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 114 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

__webpack_require__(113);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames2 = __webpack_require__(2);

var _classnames3 = _interopRequireDefault(_classnames2);

var _getClassName = __webpack_require__(3);

var _getClassName2 = _interopRequireDefault(_getClassName);

var _Tappable = __webpack_require__(5);

var _Tappable2 = _interopRequireDefault(_Tappable);

var _platform = __webpack_require__(4);

var _chevron = __webpack_require__(111);

var _chevron2 = _interopRequireDefault(_chevron);

var _done = __webpack_require__(23);

var _done2 = _interopRequireDefault(_done);

var _cancel = __webpack_require__(22);

var _cancel2 = _interopRequireDefault(_cancel);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var osname = (0, _platform.platform)();
var baseClassNames = (0, _getClassName2.default)('Cell');

var Cell = function (_Component) {
  _inherits(Cell, _Component);

  function Cell() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Cell);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Cell.__proto__ || Object.getPrototypeOf(Cell)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      isRemoveActivated: false,
      removeOffset: 0
    }, _this.onClick = function (e) {
      if (e.target.tagName.toLowerCase() === 'input') {
        e.stopPropagation();
      } else {
        _this.props.onClick && _this.props.onClick(e);
      }
    }, _this.activateRemove = function () {
      _this.setState({ isRemoveActivated: true });
      _this.document.addEventListener('click', _this.deactivateRemove);
    }, _this.deactivateRemove = function () {
      _this.setState({ isRemoveActivated: false, removeOffset: 0 });
      _this.document.removeEventListener('click', _this.deactivateRemove);
    }, _this.onRemoveClick = function (e) {
      e.nativeEvent.stopImmediatePropagation();
      e.preventDefault();
      _this.props.onRemove && _this.props.onRemove();
    }, _this.getRemoveRef = function (el) {
      return _this.removeButton = el;
    }, _this.getRootRef = function (el) {
      _this.rootEl = el;
      _this.props.getRootRef && _this.props.getRootRef(el);
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Cell, [{
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      this.document.removeEventListener('click', this.deactivateRemove);
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate(prevProps, prevState) {
      if (prevState.isRemoveActivated !== this.state.isRemoveActivated && this.state.isRemoveActivated) {
        this.setState({ removeOffset: this.removeButton.offsetWidth });
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _classnames;

      var _props = this.props,
          before = _props.before,
          indicator = _props.indicator,
          asideContent = _props.asideContent,
          expandable = _props.expandable,
          onClick = _props.onClick,
          children = _props.children,
          getRootRef = _props.getRootRef,
          description = _props.description,
          selectable = _props.selectable,
          multiline = _props.multiline,
          className = _props.className,
          onRemove = _props.onRemove,
          removable = _props.removable,
          removePlaceholder = _props.removePlaceholder,
          href = _props.href,
          size = _props.size,
          bottomContent = _props.bottomContent,
          restProps = _objectWithoutProperties(_props, ['before', 'indicator', 'asideContent', 'expandable', 'onClick', 'children', 'getRootRef', 'description', 'selectable', 'multiline', 'className', 'onRemove', 'removable', 'removePlaceholder', 'href', 'size', 'bottomContent']);

      var rootProps = selectable ? {} : restProps;
      var inputProps = selectable ? restProps : {};
      var linkProps = href ? restProps : {};

      return _react2.default.createElement(
        'div',
        _extends({}, rootProps, {
          onClick: href ? null : this.onClick,
          className: (0, _classnames3.default)(baseClassNames, (_classnames = {
            'Cell--expandable': expandable,
            'Cell--multiline': multiline
          }, _defineProperty(_classnames, 'Cell--' + size, size), _defineProperty(_classnames, 'Cell--removing', this.state.removing), _classnames), className),
          ref: this.getRootRef
        }),
        _react2.default.createElement(
          _Tappable2.default,
          _extends({}, linkProps, {
            onClick: href ? this.onClick : null,
            component: selectable ? 'label' : href ? 'a' : 'div',
            className: 'Cell__in',
            href: href,
            disabled: !selectable && !onClick && !href,
            style: removable ? { transform: 'translateX(-' + this.state.removeOffset + 'px)' } : null
          }),
          selectable && _react2.default.createElement('input', _extends({}, inputProps, { type: 'checkbox', className: 'Cell__checkbox' })),
          _react2.default.createElement(
            'div',
            { className: 'Cell__before' },
            selectable && osname === _platform.IOS && _react2.default.createElement(
              'div',
              { className: 'Cell__checkbox-marker' },
              _react2.default.createElement(_done2.default, null)
            ),
            removable && osname === _platform.IOS && _react2.default.createElement('div', { className: 'Cell__remove-marker', onClick: this.activateRemove }),
            before && _react2.default.createElement(
              'div',
              { className: 'Cell__before-in' },
              before
            )
          ),
          _react2.default.createElement(
            'div',
            { className: 'Cell__main' },
            _react2.default.createElement(
              'div',
              { className: 'Cell__children' },
              children
            ),
            description && _react2.default.createElement(
              'div',
              { className: 'Cell__description' },
              description
            ),
            size === 'l' && bottomContent && _react2.default.createElement(
              'div',
              { className: 'Cell__bottom' },
              bottomContent
            )
          ),
          _react2.default.createElement(
            'div',
            { className: 'Cell__indicator' },
            indicator
          ),
          _react2.default.createElement(
            'div',
            { className: 'Cell__aside' },
            asideContent,
            selectable && osname === _platform.ANDROID && _react2.default.createElement(
              'div',
              { className: 'Cell__checkbox-marker' },
              _react2.default.createElement(_done2.default, null)
            ),
            removable && osname === _platform.ANDROID && _react2.default.createElement(
              'div',
              { className: 'Cell__remove-marker', onClick: onRemove },
              _react2.default.createElement(_cancel2.default, null)
            ),
            osname === _platform.IOS && expandable && _react2.default.createElement(_chevron2.default, { className: 'Cell__chevron' })
          )
        ),
        removable && osname === _platform.IOS && _react2.default.createElement(
          'div',
          {
            ref: this.getRemoveRef,
            className: 'Cell__remove',
            onClick: this.onRemoveClick,
            style: removable ? { transform: 'translateX(-' + this.state.removeOffset + 'px)' } : null
          },
          removePlaceholder
        )
      );
    }
  }, {
    key: 'document',
    get: function get() {
      return this.context.document || document;
    }

    /**
     * предотвращает двойное срабатывание в случае с input
     * (https://github.com/vuejs/vue/issues/3699#issuecomment-247957931)
     * @param e
     */

  }]);

  return Cell;
}(_react.Component);

Cell.propTypes = {
  before: _propTypes2.default.node,
  indicator: _propTypes2.default.node,
  asideContent: _propTypes2.default.node,
  expandable: _propTypes2.default.bool,
  children: _propTypes2.default.node,
  onClick: _propTypes2.default.func,
  multiline: _propTypes2.default.bool,
  description: _propTypes2.default.node,
  getRootRef: _propTypes2.default.func,
  /**
   * Контейнер для произвольного содержимого под `description`. Рисуется только если передать `size="l"`.
   */
  bottomContent: _propTypes2.default.node,
  className: _propTypes2.default.string,
  style: _propTypes2.default.object,
  /**
   * Размер влияет на выравнивание блоков по-вертикали, виду сепаратора (iOS) и возможности вставлять `bottomContent`.
   */
  size: _propTypes2.default.oneOf(['m', 'l']),

  selectable: _propTypes2.default.bool,

  removable: _propTypes2.default.bool,
  onRemove: _propTypes2.default.func,
  /**
   * iOS only
   */
  removePlaceholder: _propTypes2.default.node,

  href: _propTypes2.default.string
};
Cell.defaultProps = {
  before: null,
  indicator: '',
  asideContent: '',
  bottomContent: null,
  expandable: false,
  children: '',
  selectable: false,
  multiline: false,
  removable: false,
  size: 'm',
  removePlaceholder: 'Удалить'
};
Cell.contextTypes = {
  document: _propTypes2.default.any
};
exports.default = Cell;

/***/ }),
/* 115 */,
/* 116 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 117 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

__webpack_require__(116);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = __webpack_require__(2);

var _classnames2 = _interopRequireDefault(_classnames);

var _getClassName = __webpack_require__(3);

var _getClassName2 = _interopRequireDefault(_getClassName);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var baseClassNames = (0, _getClassName2.default)('List');

var List = function List(_ref) {
  var className = _ref.className,
      children = _ref.children,
      restProps = _objectWithoutProperties(_ref, ['className', 'children']);

  return _react2.default.createElement(
    'div',
    _extends({}, restProps, { className: (0, _classnames2.default)(baseClassNames, className) }),
    children
  );
};

List.propTypes = {
  style: _propTypes2.default.object,
  children: _propTypes2.default.node,
  className: _propTypes2.default.string
};
List.defaultProps = {
  style: {},
  children: ''
};

exports.default = List;

/***/ }),
/* 118 */,
/* 119 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 120 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

__webpack_require__(119);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _getClassName = __webpack_require__(3);

var _getClassName2 = _interopRequireDefault(_getClassName);

var _classnames = __webpack_require__(2);

var _classnames2 = _interopRequireDefault(_classnames);

var _Header = __webpack_require__(24);

var _Header2 = _interopRequireDefault(_Header);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var baseClassNames = (0, _getClassName2.default)('Group');

var Group = function (_Component) {
  _inherits(Group, _Component);

  function Group() {
    _classCallCheck(this, Group);

    return _possibleConstructorReturn(this, (Group.__proto__ || Object.getPrototypeOf(Group)).apply(this, arguments));
  }

  _createClass(Group, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          title = _props.title,
          description = _props.description,
          className = _props.className,
          children = _props.children,
          getRootRef = _props.getRootRef,
          restProps = _objectWithoutProperties(_props, ['title', 'description', 'className', 'children', 'getRootRef']);

      return _react2.default.createElement(
        'div',
        _extends({}, restProps, { ref: getRootRef, className: (0, _classnames2.default)(baseClassNames, className) }),
        title && _react2.default.createElement(
          _Header2.default,
          { level: '2' },
          title
        ),
        children && _react2.default.createElement(
          'div',
          { className: 'Group__content' },
          children
        ),
        description && _react2.default.createElement(
          'div',
          { className: 'Group__description' },
          description
        )
      );
    }
  }]);

  return Group;
}(_react.Component);

Group.propTypes = {
  style: _propTypes2.default.object,
  title: _propTypes2.default.node,
  description: _propTypes2.default.node,
  children: _propTypes2.default.node,
  className: _propTypes2.default.string,
  getRootRef: _propTypes2.default.func
};
Group.defaultProps = {
  title: null,
  description: null
};
exports.default = Group;

/***/ }),
/* 121 */,
/* 122 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 123 */,
/* 124 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 125 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var IOS_PART_HEIGHT = 0.275;

var IosSpinner = function (_Component) {
  _inherits(IosSpinner, _Component);

  function IosSpinner(props) {
    _classCallCheck(this, IosSpinner);

    var _this = _possibleConstructorReturn(this, (IosSpinner.__proto__ || Object.getPrototypeOf(IosSpinner)).call(this, props));

    var c = 0.5 * props.size;
    var r = Math.max(Math.floor(props.size * 0.075), 2);
    var ty = Math.ceil(-0.5 * (1 - IOS_PART_HEIGHT) * props.size);

    var iosStyles = [];

    for (var i = 0; i < 12; i++) {
      iosStyles.push({
        transform: 'rotate(' + i * 30 + ', ' + c + ', ' + c + ') translate(0 ' + ty + ')',
        rx: r,
        ry: r,
        style: {
          fill: props.color,
          animationDelay: Math.round(props.duration / 12 * 100 * (-11 + i)) / 100 + 's'
        }
      });
    }

    _this.state = { iosStyles: iosStyles };
    return _this;
  }

  _createClass(IosSpinner, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          on = _props.on,
          progress = _props.progress;
      var iosStyles = this.state.iosStyles;


      var parts = iosStyles;

      if (!on) {
        parts = iosStyles.slice(0, Math.round(progress / (100 / 12)));
      }

      return parts.map(function (item, i) {
        return _react2.default.createElement('rect', _extends({
          x: '46.25%',
          y: '36.25%',
          width: '7.5%',
          height: '27.5%',
          className: 'Spinner__part'
        }, item, {
          key: 'spinner-part-' + i
        }));
      });
    }
  }]);

  return IosSpinner;
}(_react.Component);

IosSpinner.propTypes = {
  color: _propTypes2.default.string,
  size: _propTypes2.default.number,
  duration: _propTypes2.default.number,
  on: _propTypes2.default.bool,
  progress: _propTypes2.default.number
};
IosSpinner.defaultProps = {
  color: '#262626',
  size: 20,
  duration: 1.4,
  on: true,
  progress: null
};
exports.default = IosSpinner;

/***/ }),
/* 126 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _keyframes = __webpack_require__(26);

var _keyframes2 = _interopRequireDefault(_keyframes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var AndroidSpinner = function (_Component) {
  _inherits(AndroidSpinner, _Component);

  function AndroidSpinner(props) {
    _classCallCheck(this, AndroidSpinner);

    var _this = _possibleConstructorReturn(this, (AndroidSpinner.__proto__ || Object.getPrototypeOf(AndroidSpinner)).call(this, props));

    var id = Math.round(Math.random() * 1e6).toString(16);
    var offset = Math.round(Math.PI * props.size);
    var c = 0.5 * props.size;

    _this.state = {
      c: c,
      id: id,
      offset: offset,
      animation: (0, _keyframes2.default)('dash' + id, {
        '0%': {
          'stroke-dashoffset': offset
        },
        '50%': {
          'stroke-dashoffset': Math.round(0.25 * offset),
          'transform': 'rotate(135deg)'
        },
        '100%': {
          'stroke-dashoffset': offset,
          'transform': 'rotate(360deg)'
        }
      })
    };
    return _this;
  }

  _createClass(AndroidSpinner, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          color = _props.color,
          size = _props.size,
          on = _props.on,
          progress = _props.progress,
          duration = _props.duration,
          strokeWidth = _props.strokeWidth;
      var _state = this.state,
          id = _state.id,
          offset = _state.offset,
          animation = _state.animation;


      var dashoffset = offset;
      var transform = '';

      if (!on) {
        dashoffset = Math.abs(0.02 * (progress - 50) * 0.75 * offset) + 0.25 * offset;

        if (progress <= 50) {
          transform = 'rotate(' + Math.round(progress * 135 / 50) + 'deg)';
        } else {
          transform = 'rotate(' + (135 + Math.round((progress - 50) * 360 / 50)) + 'deg)';
        }
      }

      return _react2.default.createElement(
        'g',
        {
          style: {
            width: size,
            height: size,
            transformOrigin: 0.5 * size + 'px ' + 0.5 * size + 'px',
            transform: transform
          }
        },
        _react2.default.createElement('style', { dangerouslySetInnerHTML: { __html: animation } }),
        _react2.default.createElement('circle', {
          className: 'Spinner__path',
          fill: 'none',
          stroke: color,
          strokeDasharray: offset,
          strokeDashoffset: dashoffset,
          strokeWidth: strokeWidth,
          style: {
            animationName: on ? 'dash' + id : 'none',
            animationTimingFunction: 'ease-in-out',
            animationDuration: duration + 's',
            animationIterationCount: 'infinite'
          },
          cx: 0.5 * size,
          cy: 0.5 * size,
          r: 0.5 * size - 0.5 * strokeWidth
        })
      );
    }
  }]);

  return AndroidSpinner;
}(_react.Component);

AndroidSpinner.propTypes = {
  color: _propTypes2.default.string,
  size: _propTypes2.default.number,
  strokeWidth: _propTypes2.default.number,
  duration: _propTypes2.default.number,
  on: _propTypes2.default.bool,
  progress: _propTypes2.default.number
};
AndroidSpinner.defaultProps = {
  color: '#5181b8',
  size: 38,
  strokeWidth: 4,
  duration: 1.4,
  on: true,
  progress: null
};
exports.default = AndroidSpinner;

/***/ }),
/* 127 */,
/* 128 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 129 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = ScreenSpinner;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _Spinner = __webpack_require__(27);

var _Spinner2 = _interopRequireDefault(_Spinner);

var _PopoutWrapper = __webpack_require__(11);

var _PopoutWrapper2 = _interopRequireDefault(_PopoutWrapper);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function ScreenSpinner(_ref) {
  var style = _ref.style,
      className = _ref.className,
      restProps = _objectWithoutProperties(_ref, ['style', 'className']);

  return _react2.default.createElement(
    _PopoutWrapper2.default,
    { className: className, style: style },
    _react2.default.createElement(_Spinner2.default, restProps)
  );
}

ScreenSpinner.propTypes = {
  className: _propTypes2.default.string,
  style: _propTypes2.default.object,
  color: _propTypes2.default.string
};

ScreenSpinner.defaultProps = {
  color: '#fff'
};

/***/ }),
/* 130 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.brToNl = brToNl;
function brToNl() {
  var str = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';

  var regex = /<br\s*\/?>/gi;

  return str.replace(regex, '\n');
}

/***/ }),
/* 131 */,
/* 132 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 133 */,
/* 134 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 135 */,
/* 136 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 137 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _removeObjectKeys = __webpack_require__(13);

var _removeObjectKeys2 = _interopRequireDefault(_removeObjectKeys);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _Alert = __webpack_require__(30);

var _Alert2 = _interopRequireDefault(_Alert);

var _ActionSheet = __webpack_require__(29);

var _ActionSheet2 = _interopRequireDefault(_ActionSheet);

var _ActionSheetItem = __webpack_require__(28);

var _ActionSheetItem2 = _interopRequireDefault(_ActionSheetItem);

var _string = __webpack_require__(130);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var actionId = 1;

var NativePopouts = function (_React$Component) {
  _inherits(NativePopouts, _React$Component);

  function NativePopouts() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, NativePopouts);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = NativePopouts.__proto__ || Object.getPrototypeOf(NativePopouts)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      popout: null
    }, _this.actions = [], _this.actionsStore = {}, _this.vkuiListener = function (e) {
      if (e.type === 'VKWebAppEvent' && e.detail && e.detail.action) {
        if (_this.actionsStore.hasOwnProperty(e.detail.action)) {
          _this.actionsStore[e.detail.action](e.detail);
          _this.props.popout && _this.props.popout.onClose && _this.props.popout.onClose();
        }
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(NativePopouts, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.props.vkuiConnect.subscribe(this.vkuiListener);
      if (this.props.popout) {
        this.renderPopout(this.props);
      }
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      this.props.vkuiConnect.unsubscribe(this.vkuiListener);
    }
  }, {
    key: 'renderNativeAlert',
    value: function renderNativeAlert(popout) {
      var style = popout.style,
          title = popout.title,
          message = popout.text;

      this.props.vkuiConnect.send('VKWebAppAlert', {
        style: style,
        title: (0, _string.brToNl)(title),
        message: (0, _string.brToNl)(message),
        actions: this.actions.map(function (item) {
          return (0, _removeObjectKeys2.default)(item, ['action']);
        })
      });
    }
  }, {
    key: 'renderUIAlert',
    value: function renderUIAlert(popout) {
      var title = popout.title,
          text = popout.text,
          onClose = popout.onClose,
          actionsLayout = popout.actionsLayout;

      this.setState({
        popout: _react2.default.createElement(
          _Alert2.default,
          {
            actions: this.actions.map(function (item) {
              return (0, _removeObjectKeys2.default)(item, ['params']);
            }),
            onClose: onClose,
            actionsLayout: actionsLayout
          },
          title && _react2.default.createElement(
            'h2',
            null,
            title
          ),
          text && _react2.default.createElement(
            'p',
            null,
            text
          )
        )
      });
    }
  }, {
    key: 'renderNativeSheet',
    value: function renderNativeSheet(popout) {
      var style = popout.style;

      this.props.vkuiConnect.send('VKWebAppAlert', {
        style: style,
        actions: this.actions.map(function (item) {
          return (0, _removeObjectKeys2.default)(item, ['action']);
        })
      });
    }
  }, {
    key: 'renderUISheet',
    value: function renderUISheet(popout) {
      var title = popout.title,
          text = popout.text,
          onClose = popout.onClose;

      this.setState({
        popout: _react2.default.createElement(
          _ActionSheet2.default,
          { title: title, text: text, onClose: onClose },
          this.actions.map(function (item, index) {
            return _react2.default.createElement(
              _ActionSheetItem2.default,
              { autoclose: item.autoclose, theme: item.style, onClick: item.action, key: '' + index },
              item.title
            );
          })
        )
      });
    }
  }, {
    key: 'closeUIPopout',
    value: function closeUIPopout() {
      this.setState({ popout: null });
    }
  }, {
    key: 'renderPopout',
    value: function renderPopout(props) {
      if (props.popout.style) {
        this.actions = props.popout.actions.map(function (item) {
          return Object.assign({}, item, {
            autoclose: item.hasOwnProperty('autoclose') ? item.autoclose : true,
            action: item.action || props.popout.onClose,
            handler: Object.assign({}, item.params, { action: 'action-' + actionId++ })
          });
        });

        this.actionsStore = this.actions.reduce(function (res, item) {
          res[item.handler.action] = item.action;return res;
        }, {});

        switch (props.popout.style) {
          case 'alert':
            this.context.isWebView ? this.renderNativeAlert(props.popout) : this.renderUIAlert(props.popout);
            break;
          case 'actionSheet':
            this.context.isWebView ? this.renderNativeSheet(props.popout) : this.renderUISheet(props.popout);
            break;
        }
      } else {
        this.setState({ popout: props.popout });
      }
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      if (!nextProps.popout && this.props.popout) {
        this.closeUIPopout();
      }
      if (nextProps.popout && nextProps.popout !== this.props.popout) {
        this.context.isWebView && this.closeUIPopout();
        this.renderPopout(nextProps);
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var Component = this.props.component;
      return _react2.default.createElement(Component, _extends({}, (0, _removeObjectKeys2.default)(this.props, ['popout']), { popout: this.state.popout }));
    }
  }]);

  return NativePopouts;
}(_react2.default.Component);

NativePopouts.propTypes = {
  popout: _propTypes2.default.oneOfType([_propTypes2.default.shape({
    style: _propTypes2.default.oneOf(['alert', 'actionSheet']).isRequired,
    title: _propTypes2.default.string,
    text: _propTypes2.default.string,
    onClose: _propTypes2.default.func.isRequired,
    actions: _propTypes2.default.arrayOf(_propTypes2.default.shape({
      style: _propTypes2.default.oneOf(['cancel', 'default', 'destructive']),
      title: _propTypes2.default.string,
      action: _propTypes2.default.func
    }))
  }), _propTypes2.default.element]),
  vkuiConnect: _propTypes2.default.object.isRequired,
  /**
   * Root or View
   */
  component: _propTypes2.default.func.isRequired
};
NativePopouts.contextTypes = {
  isWebView: _propTypes2.default.bool
};
exports.default = NativePopouts;

/***/ }),
/* 138 */,
/* 139 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 140 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = __webpack_require__(2);

var _classnames2 = _interopRequireDefault(_classnames);

__webpack_require__(139);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var HorizontalScroll = function (_React$Component) {
  _inherits(HorizontalScroll, _React$Component);

  function HorizontalScroll() {
    _classCallCheck(this, HorizontalScroll);

    return _possibleConstructorReturn(this, (HorizontalScroll.__proto__ || Object.getPrototypeOf(HorizontalScroll)).apply(this, arguments));
  }

  _createClass(HorizontalScroll, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          children = _props.children,
          className = _props.className,
          restProps = _objectWithoutProperties(_props, ['children', 'className']);

      return _react2.default.createElement(
        'div',
        _extends({}, restProps, { className: (0, _classnames2.default)('HorizontalScroll', className) }),
        _react2.default.createElement(
          'div',
          { className: 'HorizontalScroll__in' },
          children
        )
      );
    }
  }]);

  return HorizontalScroll;
}(_react2.default.Component);

HorizontalScroll.propTypes = {
  children: _propTypes2.default.node,
  className: _propTypes2.default.string,
  style: _propTypes2.default.object
};
exports.default = HorizontalScroll;

/***/ }),
/* 141 */,
/* 142 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 143 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = __webpack_require__(2);

var _classnames2 = _interopRequireDefault(_classnames);

var _getClassName = __webpack_require__(3);

var _getClassName2 = _interopRequireDefault(_getClassName);

var _platform = __webpack_require__(4);

var _Tappable = __webpack_require__(5);

var _Tappable2 = _interopRequireDefault(_Tappable);

__webpack_require__(142);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var osname = (0, _platform.platform)();
var baseClassNames = (0, _getClassName2.default)('PanelHeaderContent');

var PanelHeaderContent = function PanelHeaderContent(_ref) {
  var className = _ref.className,
      style = _ref.style,
      aside = _ref.aside,
      status = _ref.status,
      before = _ref.before,
      children = _ref.children,
      onClick = _ref.onClick,
      restProps = _objectWithoutProperties(_ref, ['className', 'style', 'aside', 'status', 'before', 'children', 'onClick']);

  var InComponent = onClick ? _Tappable2.default : 'div';
  var rootProps = onClick ? {} : restProps;
  var inProps = onClick ? restProps : {};

  return _react2.default.createElement(
    'div',
    _extends({}, rootProps, { className: (0, _classnames2.default)(baseClassNames, className), style: style }),
    osname === _platform.ANDROID && before && _react2.default.createElement(
      'div',
      { className: 'PanelHeaderContent__before' },
      before
    ),
    _react2.default.createElement(
      InComponent,
      _extends({}, inProps, { className: 'PanelHeaderContent__in', onClick: onClick }),
      status && _react2.default.createElement(
        'div',
        { className: 'PanelHeaderContent__status' },
        status
      ),
      _react2.default.createElement(
        'div',
        { className: 'PanelHeaderContent__children' },
        _react2.default.createElement(
          'span',
          null,
          children
        ),
        aside && _react2.default.createElement(
          'div',
          { className: 'PanelHeaderContent__aside' },
          aside
        )
      )
    )
  );
};

PanelHeaderContent.propTypes = {
  children: _propTypes2.default.node,
  className: _propTypes2.default.string,
  style: _propTypes2.default.object,
  aside: _propTypes2.default.node,
  status: _propTypes2.default.node,
  onClick: _propTypes2.default.func,
  /**
   * Android only
   */
  before: _propTypes2.default.node
};

exports.default = PanelHeaderContent;

/***/ }),
/* 144 */,
/* 145 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 146 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _getClassName = __webpack_require__(3);

var _getClassName2 = _interopRequireDefault(_getClassName);

var _classnames = __webpack_require__(2);

var _classnames2 = _interopRequireDefault(_classnames);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

__webpack_require__(145);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var baseClassName = (0, _getClassName2.default)('InnerScroll');

var InnerScroll = function (_React$Component) {
  _inherits(InnerScroll, _React$Component);

  function InnerScroll() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, InnerScroll);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = InnerScroll.__proto__ || Object.getPrototypeOf(InnerScroll)).call.apply(_ref, [this].concat(args))), _this), _this.onScroll = function (e) {
      if (_this.el.scrollTop <= 0) {
        _this.el.scrollTop = 1;
      } else if (_this.el.scrollTop >= _this.el.scrollHeight - _this.el.offsetHeight) {
        _this.el.scrollTop = _this.el.scrollHeight - _this.el.offsetHeight - 1;
      }

      _this.props.onScroll && _this.props.onScroll(e);
    }, _this.ref = function (el) {
      return _this.el = el;
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(InnerScroll, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.el.scrollTop = 1;
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          className = _props.className,
          children = _props.children,
          onScroll = _props.onScroll,
          restProps = _objectWithoutProperties(_props, ['className', 'children', 'onScroll']);

      return _react2.default.createElement(
        'div',
        _extends({}, restProps, {
          className: (0, _classnames2.default)(baseClassName, className),
          onScroll: this.onScroll,
          ref: this.getRef
        }),
        children
      );
    }
  }]);

  return InnerScroll;
}(_react2.default.Component);

InnerScroll.propTypes = {
  className: _propTypes2.default.string,
  children: _propTypes2.default.node,
  style: _propTypes2.default.object,
  onScroll: _propTypes2.default.func
};
exports.default = InnerScroll;

/***/ }),
/* 147 */,
/* 148 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 149 */,
/* 150 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 151 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = __webpack_require__(2);

var _classnames2 = _interopRequireDefault(_classnames);

var _getClassName = __webpack_require__(3);

var _getClassName2 = _interopRequireDefault(_getClassName);

var _FixedLayout = __webpack_require__(12);

var _FixedLayout2 = _interopRequireDefault(_FixedLayout);

__webpack_require__(148);

var _transitionEvents = __webpack_require__(10);

var _transitionEvents2 = _interopRequireDefault(_transitionEvents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var baseClassNames = (0, _getClassName2.default)('HeaderContext');

var HeaderContext = function (_React$Component) {
  _inherits(HeaderContext, _React$Component);

  function HeaderContext() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, HeaderContext);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = HeaderContext.__proto__ || Object.getPrototypeOf(HeaderContext)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      closing: false
    }, _this.onAnimationFinish = function () {
      return _this.setState({ closing: false });
    }, _this.getRef = function (el) {
      return _this.el = el;
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(HeaderContext, [{
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      if (nextProps.opened !== this.props.opened) {
        if (nextProps.opened === false) {
          this.setState({ closing: true });
          this.waitAnimationFinish(this.onAnimationFinish);
        } else {
          clearTimeout(this.closeAnimationTimeiout);
        }
      }
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      clearTimeout(this.closeAnimationTimeiout);
    }
  }, {
    key: 'waitAnimationFinish',
    value: function waitAnimationFinish(eventHandler) {
      if (_transitionEvents2.default.supported) {
        var eventName = _transitionEvents2.default.prefix ? _transitionEvents2.default.prefix + 'AnimationEnd' : 'animationend';
        this.el.removeEventListener(eventName, eventHandler);
        this.el.addEventListener(eventName, eventHandler);
      } else {
        this.closeAnimationTimeiout = setTimeout(eventHandler.bind(this), 200);
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          children = _props.children,
          className = _props.className,
          opened = _props.opened,
          onClose = _props.onClose,
          restProps = _objectWithoutProperties(_props, ['children', 'className', 'opened', 'onClose']);

      return _react2.default.createElement(
        _FixedLayout2.default,
        _extends({}, restProps, { className: (0, _classnames2.default)(baseClassNames, {
            'HeaderContext--opened': opened,
            'HeaderContext--closing': this.state.closing
          }, className), vertical: 'top' }),
        _react2.default.createElement(
          'div',
          { className: 'HeaderContext__in', ref: this.getRef },
          (opened || this.state.closing) && children
        ),
        (opened || this.state.closing) && _react2.default.createElement('div', { onClick: onClose, className: 'HeaderContext__fade' })
      );
    }
  }]);

  return HeaderContext;
}(_react2.default.Component);

HeaderContext.propTypes = {
  children: _propTypes2.default.node,
  className: _propTypes2.default.string,
  style: _propTypes2.default.object,
  onClose: _propTypes2.default.func.isRequired,
  opened: _propTypes2.default.bool.isRequired
};
HeaderContext.defaultProps = {
  opened: false
};
exports.default = HeaderContext;

/***/ }),
/* 152 */,
/* 153 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 154 */,
/* 155 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 156 */,
/* 157 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 158 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

__webpack_require__(157);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _getClassName = __webpack_require__(3);

var _getClassName2 = _interopRequireDefault(_getClassName);

var _classnames = __webpack_require__(2);

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var baseClassNames = (0, _getClassName2.default)('Panel');

var Panel = function (_Component) {
  _inherits(Panel, _Component);

  function Panel() {
    _classCallCheck(this, Panel);

    return _possibleConstructorReturn(this, (Panel.__proto__ || Object.getPrototypeOf(Panel)).apply(this, arguments));
  }

  _createClass(Panel, [{
    key: 'getChildContext',
    value: function getChildContext() {
      return {
        panel: this.props.id
      };
    }
  }, {
    key: 'shouldComponentUpdate',
    value: function shouldComponentUpdate(_ref) {
      var optimized = _ref.optimized,
          isNext = _ref.isNext,
          isPrev = _ref.isPrev;

      return optimized ? !isNext && !isPrev : true;
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          className = _props.className,
          centered = _props.centered,
          children = _props.children,
          isPrev = _props.isPrev,
          isNext = _props.isNext,
          theme = _props.theme,
          optimized = _props.optimized,
          restProps = _objectWithoutProperties(_props, ['className', 'centered', 'children', 'isPrev', 'isNext', 'theme', 'optimized']);

      return _react2.default.createElement(
        'div',
        _extends({}, restProps, { className: (0, _classnames2.default)(baseClassNames, className, { 'Panel--centered': centered }) }),
        _react2.default.createElement(
          'div',
          { className: 'Panel__in', style: { paddingBottom: this.insets.bottom || null, paddingTop: this.insets.top || null } },
          _react2.default.createElement('div', { className: 'Panel__in-before' }),
          children,
          _react2.default.createElement('div', { className: 'Panel__in-after' })
        )
      );
    }
  }, {
    key: 'insets',
    get: function get() {
      return this.context.insets || {};
    }
  }]);

  return Panel;
}(_react.Component);

Panel.childContextTypes = {
  panel: _propTypes2.default.string
};
Panel.propTypes = {
  children: _propTypes2.default.node,
  className: _propTypes2.default.string,
  theme: _propTypes2.default.oneOf(['white', 'gray']),
  id: _propTypes2.default.string.isRequired,
  optimized: _propTypes2.default.bool,
  centered: _propTypes2.default.bool,
  style: _propTypes2.default.object,
  /**
   * @ignore
   */
  isPrev: _propTypes2.default.bool,
  /**
   * @ignore
   */
  isNext: _propTypes2.default.bool
};
Panel.defaultProps = {
  children: '',
  theme: 'gray',
  centered: false,
  optimized: true
};
Panel.contextTypes = {
  insets: _propTypes2.default.shape({
    top: _propTypes2.default.number,
    right: _propTypes2.default.number,
    bottom: _propTypes2.default.number,
    left: _propTypes2.default.number
  })
};
exports.default = Panel;

/***/ }),
/* 159 */,
/* 160 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 161 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = animate;

var _requestAnimationFrame = __webpack_require__(9);

var _requestAnimationFrame2 = _interopRequireDefault(_requestAnimationFrame);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function animate(options) {
  if (typeof window === 'undefined') {
    return;
  }

  var start = window.performance.now();

  (0, _requestAnimationFrame2.default)(function animate(time) {
    var timeFraction = (time - start) / options.duration;

    if (timeFraction > 1) {
      timeFraction = 1;
    }

    var progress = options.timing(timeFraction);

    options.draw(progress);

    if (timeFraction < 1) {
      (0, _requestAnimationFrame2.default)(animate);
    }
  });
}

/***/ }),
/* 162 */,
/* 163 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 164 */,
/* 165 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 166 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = __webpack_require__(2);

var _classnames2 = _interopRequireDefault(_classnames);

var _getClassName = __webpack_require__(3);

var _getClassName2 = _interopRequireDefault(_getClassName);

__webpack_require__(165);

var _transitionEvents = __webpack_require__(10);

var _transitionEvents2 = _interopRequireDefault(_transitionEvents);

var _platform = __webpack_require__(4);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var osname = (0, _platform.platform)();
var baseClassName = (0, _getClassName2.default)('Root');

var Root = function (_React$Component) {
  _inherits(Root, _React$Component);

  function Root(props) {
    _classCallCheck(this, Root);

    var _this = _possibleConstructorReturn(this, (Root.__proto__ || Object.getPrototypeOf(Root)).call(this));

    _this.onAnimationEnd = function () {
      var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : { manual: true };

      if (['root-android-animation-hide-back', 'root-android-animation-show-forward', 'root-ios-animation-hide-back', 'root-ios-animation-show-forward'].indexOf(e.animationName) > -1 || e.manual) {
        var isBack = _this.state.isBack;
        _this.setState({
          activeView: _this.state.nextView,
          prevView: null,
          nextView: null,
          visibleViews: [_this.state.nextView],
          transition: false,
          isBack: undefined
        }, function () {
          isBack ? _this.window.scrollTo(0, _this.state.scrolls[_this.state.activeView]) : _this.window.scrollTo(0, 0);
          _this.props.onTransition && _this.props.onTransition(_this.state.isBack);
        });
      }
    };

    _this.state = {
      activeView: props.activeView,
      prevView: null,
      nextView: null,
      visibleViews: [props.activeView],
      isBack: undefined,
      scrolls: {}
    };

    _this.arrayChildren = _react2.default.Children.toArray(props.children);
    return _this;
  }

  _createClass(Root, [{
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      var _this2 = this;

      if (nextProps.popout && !this.props.popout) {
        this.blurActiveElement();
      }

      if (nextProps.children !== this.props.children) {
        this.arrayChildren = _react2.default.Children.toArray(nextProps.children);
      }

      if (nextProps.activeView !== this.props.activeView) {
        var pageYOffset = this.window.pageYOffset;
        var firstLayerId = this.props.children.find(function (view) {
          return view.props.id === _this2.props.activeView || view.props.id === nextProps.activeView;
        }).props.id;
        var isBack = firstLayerId === nextProps.activeView;

        this.blurActiveElement();

        var nextView = nextProps.activeView;
        var prevView = this.props.activeView;

        this.setState({
          scrolls: Object.assign({}, this.state.scrolls, _defineProperty({}, this.props.activeView, pageYOffset)),
          transition: true,
          activeView: null,
          nextView: nextView,
          prevView: prevView,
          visibleViews: [nextView, prevView],
          isBack: isBack
        });
      }
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate(prevProps, prevState) {
      if (!prevState.transition && this.state.transition) {
        var prevViewElement = this.document.getElementById('view-' + this.state.prevView);
        var nextViewElement = this.document.getElementById('view-' + this.state.nextView);

        prevViewElement.querySelector('.View__panel').scrollTop = this.state.scrolls[this.state.prevView];

        if (this.state.isBack) {
          nextViewElement.querySelector('.View__panel').scrollTop = this.state.scrolls[this.state.nextView];
        }
        this.waitAnimationFinish(this.state.isBack ? prevViewElement : nextViewElement, this.onAnimationEnd);
      }
    }
  }, {
    key: 'waitAnimationFinish',
    value: function waitAnimationFinish(elem, eventHandler) {
      if (_transitionEvents2.default.supported) {
        var eventName = _transitionEvents2.default.prefix ? _transitionEvents2.default.prefix + 'AnimationEnd' : 'animationend';

        elem.removeEventListener(eventName, eventHandler);
        elem.addEventListener(eventName, eventHandler);
      } else {
        setTimeout(eventHandler.bind(this), osname === _platform.ANDROID ? 300 : 600);
      }
    }
  }, {
    key: 'blurActiveElement',
    value: function blurActiveElement() {
      if (typeof this.window !== 'undefined' && this.document.activeElement) {
        this.document.activeElement.blur();
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _this3 = this;

      var Views = this.arrayChildren.filter(function (View) {
        return _this3.state.visibleViews.indexOf(View.props.id) >= 0;
      });
      var _state = this.state,
          transition = _state.transition,
          isBack = _state.isBack,
          prevView = _state.prevView,
          activeView = _state.activeView,
          nextView = _state.nextView;


      return _react2.default.createElement(
        'div',
        { className: (0, _classnames2.default)(baseClassName, { 'Root--transition': transition }) },
        Views.map(function (View) {
          return _react2.default.createElement(
            'div',
            { key: View.props.id, id: 'view-' + View.props.id, className: (0, _classnames2.default)('Root__view', {
                'Root__view--hide-back': View.props.id === prevView && isBack,
                'Root__view--hide-forward': View.props.id === prevView && !isBack,
                'Root__view--show-back': View.props.id === nextView && isBack,
                'Root__view--show-forward': View.props.id === nextView && !isBack,
                'Root__view--active': View.props.id === activeView
              }) },
            _react2.default.cloneElement(View, {
              inRoot: true,
              isNext: View.props.id === nextView,
              isPrev: View.props.id === prevView
            })
          );
        }),
        this.props.popout && _react2.default.createElement(
          'div',
          { className: 'Root__popout' },
          this.props.popout
        )
      );
    }
  }, {
    key: 'document',
    get: function get() {
      return this.context.document || document;
    }
  }, {
    key: 'window',
    get: function get() {
      return this.context.window || window;
    }
  }]);

  return Root;
}(_react2.default.Component);

Root.propTypes = {
  activeView: _propTypes2.default.string.isRequired,
  popout: _propTypes2.default.node,
  onTransition: _propTypes2.default.func,
  children: _propTypes2.default.node
};
Root.defaultProps = {
  popout: null
};
Root.contextTypes = {
  window: _propTypes2.default.any,
  document: _propTypes2.default.any
};
exports.default = Root;

/***/ }),
/* 167 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.v = exports.colors = exports.isWebView = exports.requestAnimationFrame = exports.getClassName = exports.querystring = exports.request = exports.removeObjectKeys = exports.IOS = exports.ANDROID = exports.platform = exports.getOffsetRect = exports.keyframes = exports.classnames = exports.ConfigProvider = exports.Touch = exports.Tappable = exports.Div = exports.SelectMimicry = exports.Select = exports.Checkbox = exports.Radio = exports.Textarea = exports.RangeSlider = exports.Slider = exports.Input = exports.File = exports.Switch = exports.FormLayout = exports.Tooltip = exports.Link = exports.Spinner = exports.FixedTabs = exports.TabsItem = exports.Tabs = exports.Search = exports.Progress = exports.Avatar = exports.Gallery = exports.Entity = exports.InfoRow = exports.Footer = exports.ListItem = exports.Cell = exports.List = exports.Group = exports.Header = exports.Button = exports.ScreenSpinner = exports.ActionSheetItem = exports.ActionSheet = exports.Alert = exports.PopoutWrapper = exports.NativePopouts = exports.HorizontalScroll = exports.PanelHeaderContent = exports.InnerScroll = exports.PanelHeader = exports.FixedLayout = exports.HeaderContext = exports.HeaderButton = exports.Panel = exports.View = exports.Root = undefined;

var _Root = __webpack_require__(166);

Object.defineProperty(exports, 'Root', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_Root).default;
  }
});

var _View = __webpack_require__(36);

Object.defineProperty(exports, 'View', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_View).default;
  }
});

var _Panel = __webpack_require__(158);

Object.defineProperty(exports, 'Panel', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_Panel).default;
  }
});

var _HeaderButton = __webpack_require__(32);

Object.defineProperty(exports, 'HeaderButton', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_HeaderButton).default;
  }
});

var _HeaderContext = __webpack_require__(151);

Object.defineProperty(exports, 'HeaderContext', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_HeaderContext).default;
  }
});

var _FixedLayout = __webpack_require__(12);

Object.defineProperty(exports, 'FixedLayout', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_FixedLayout).default;
  }
});

var _PanelHeader = __webpack_require__(34);

Object.defineProperty(exports, 'PanelHeader', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_PanelHeader).default;
  }
});

var _InnerScroll = __webpack_require__(146);

Object.defineProperty(exports, 'InnerScroll', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_InnerScroll).default;
  }
});

var _PanelHeaderContent = __webpack_require__(143);

Object.defineProperty(exports, 'PanelHeaderContent', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_PanelHeaderContent).default;
  }
});

var _HorizontalScroll = __webpack_require__(140);

Object.defineProperty(exports, 'HorizontalScroll', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_HorizontalScroll).default;
  }
});

var _NativePopouts = __webpack_require__(137);

Object.defineProperty(exports, 'NativePopouts', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_NativePopouts).default;
  }
});

var _PopoutWrapper = __webpack_require__(11);

Object.defineProperty(exports, 'PopoutWrapper', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_PopoutWrapper).default;
  }
});

var _Alert = __webpack_require__(30);

Object.defineProperty(exports, 'Alert', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_Alert).default;
  }
});

var _ActionSheet = __webpack_require__(29);

Object.defineProperty(exports, 'ActionSheet', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_ActionSheet).default;
  }
});

var _ActionSheetItem = __webpack_require__(28);

Object.defineProperty(exports, 'ActionSheetItem', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_ActionSheetItem).default;
  }
});

var _ScreenSpinner = __webpack_require__(129);

Object.defineProperty(exports, 'ScreenSpinner', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_ScreenSpinner).default;
  }
});

var _Button = __webpack_require__(25);

Object.defineProperty(exports, 'Button', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_Button).default;
  }
});

var _Header = __webpack_require__(24);

Object.defineProperty(exports, 'Header', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_Header).default;
  }
});

var _Group = __webpack_require__(120);

Object.defineProperty(exports, 'Group', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_Group).default;
  }
});

var _List = __webpack_require__(117);

Object.defineProperty(exports, 'List', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_List).default;
  }
});

var _Cell = __webpack_require__(114);

Object.defineProperty(exports, 'Cell', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_Cell).default;
  }
});
Object.defineProperty(exports, 'ListItem', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_Cell).default;
  }
});

var _Footer = __webpack_require__(110);

Object.defineProperty(exports, 'Footer', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_Footer).default;
  }
});

var _InfoRow = __webpack_require__(105);

Object.defineProperty(exports, 'InfoRow', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_InfoRow).default;
  }
});

var _Entity = __webpack_require__(102);

Object.defineProperty(exports, 'Entity', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_Entity).default;
  }
});

var _Gallery = __webpack_require__(97);

Object.defineProperty(exports, 'Gallery', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_Gallery).default;
  }
});

var _Avatar = __webpack_require__(20);

Object.defineProperty(exports, 'Avatar', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_Avatar).default;
  }
});

var _Progress = __webpack_require__(94);

Object.defineProperty(exports, 'Progress', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_Progress).default;
  }
});

var _Search = __webpack_require__(91);

Object.defineProperty(exports, 'Search', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_Search).default;
  }
});

var _Tabs = __webpack_require__(19);

Object.defineProperty(exports, 'Tabs', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_Tabs).default;
  }
});

var _TabsItem = __webpack_require__(79);

Object.defineProperty(exports, 'TabsItem', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_TabsItem).default;
  }
});

var _FixedTabs = __webpack_require__(76);

Object.defineProperty(exports, 'FixedTabs', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_FixedTabs).default;
  }
});

var _Spinner = __webpack_require__(27);

Object.defineProperty(exports, 'Spinner', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_Spinner).default;
  }
});

var _Link = __webpack_require__(75);

Object.defineProperty(exports, 'Link', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_Link).default;
  }
});

var _Tooltip = __webpack_require__(72);

Object.defineProperty(exports, 'Tooltip', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_Tooltip).default;
  }
});

var _FormLayout = __webpack_require__(69);

Object.defineProperty(exports, 'FormLayout', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_FormLayout).default;
  }
});

var _Switch = __webpack_require__(66);

Object.defineProperty(exports, 'Switch', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_Switch).default;
  }
});

var _File = __webpack_require__(63);

Object.defineProperty(exports, 'File', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_File).default;
  }
});

var _Input = __webpack_require__(60);

Object.defineProperty(exports, 'Input', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_Input).default;
  }
});

var _Slider = __webpack_require__(18);

Object.defineProperty(exports, 'Slider', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_Slider).default;
  }
});

var _RangeSlider = __webpack_require__(55);

Object.defineProperty(exports, 'RangeSlider', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_RangeSlider).default;
  }
});

var _Textarea = __webpack_require__(54);

Object.defineProperty(exports, 'Textarea', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_Textarea).default;
  }
});

var _Radio = __webpack_require__(51);

Object.defineProperty(exports, 'Radio', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_Radio).default;
  }
});

var _Checkbox = __webpack_require__(48);

Object.defineProperty(exports, 'Checkbox', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_Checkbox).default;
  }
});

var _Select = __webpack_require__(45);

Object.defineProperty(exports, 'Select', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_Select).default;
  }
});

var _SelectMimicry = __webpack_require__(43);

Object.defineProperty(exports, 'SelectMimicry', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_SelectMimicry).default;
  }
});

var _Div = __webpack_require__(21);

Object.defineProperty(exports, 'Div', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_Div).default;
  }
});

var _Tappable = __webpack_require__(5);

Object.defineProperty(exports, 'Tappable', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_Tappable).default;
  }
});

var _Touch = __webpack_require__(8);

Object.defineProperty(exports, 'Touch', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_Touch).default;
  }
});

var _ConfigProvider = __webpack_require__(42);

Object.defineProperty(exports, 'ConfigProvider', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_ConfigProvider).default;
  }
});

var _classnames = __webpack_require__(2);

Object.defineProperty(exports, 'classnames', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_classnames).default;
  }
});

var _keyframes = __webpack_require__(26);

Object.defineProperty(exports, 'keyframes', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_keyframes).default;
  }
});

var _offset = __webpack_require__(31);

Object.defineProperty(exports, 'getOffsetRect', {
  enumerable: true,
  get: function get() {
    return _offset.getOffsetRect;
  }
});

var _platform = __webpack_require__(4);

Object.defineProperty(exports, 'platform', {
  enumerable: true,
  get: function get() {
    return _platform.platform;
  }
});
Object.defineProperty(exports, 'ANDROID', {
  enumerable: true,
  get: function get() {
    return _platform.ANDROID;
  }
});
Object.defineProperty(exports, 'IOS', {
  enumerable: true,
  get: function get() {
    return _platform.IOS;
  }
});

var _removeObjectKeys = __webpack_require__(13);

Object.defineProperty(exports, 'removeObjectKeys', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_removeObjectKeys).default;
  }
});

var _request = __webpack_require__(41);

Object.defineProperty(exports, 'request', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_request).default;
  }
});

var _querystring = __webpack_require__(14);

Object.defineProperty(exports, 'querystring', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_querystring).default;
  }
});

var _getClassName = __webpack_require__(3);

Object.defineProperty(exports, 'getClassName', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_getClassName).default;
  }
});

var _requestAnimationFrame = __webpack_require__(9);

Object.defineProperty(exports, 'requestAnimationFrame', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_requestAnimationFrame).default;
  }
});

var _webview = __webpack_require__(15);

Object.defineProperty(exports, 'isWebView', {
  enumerable: true,
  get: function get() {
    return _webview.isWebView;
  }
});

var _colors = __webpack_require__(40);

Object.defineProperty(exports, 'colors', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_colors).default;
  }
});

__webpack_require__(39);

__webpack_require__(38);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var v = exports.v = "2.9.1";

/***/ })
/******/ ]);
});
//# sourceMappingURL=vkui.js.map

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

var baseIsNative = __webpack_require__(143),
    getValue = __webpack_require__(148);

/**
 * Gets the native function at `key` of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {string} key The key of the method to get.
 * @returns {*} Returns the function if it's native, else `undefined`.
 */
function getNative(object, key) {
  var value = getValue(object, key);
  return baseIsNative(value) ? value : undefined;
}

module.exports = getNative;


/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

var Symbol = __webpack_require__(10),
    getRawTag = __webpack_require__(144),
    objectToString = __webpack_require__(145);

/** `Object#toString` result references. */
var nullTag = '[object Null]',
    undefinedTag = '[object Undefined]';

/** Built-in value references. */
var symToStringTag = Symbol ? Symbol.toStringTag : undefined;

/**
 * The base implementation of `getTag` without fallbacks for buggy environments.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
function baseGetTag(value) {
  if (value == null) {
    return value === undefined ? undefinedTag : nullTag;
  }
  return (symToStringTag && symToStringTag in Object(value))
    ? getRawTag(value)
    : objectToString(value);
}

module.exports = baseGetTag;


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
/***/ (function(module, exports, __webpack_require__) {

var root = __webpack_require__(2);

/** Built-in value references. */
var Symbol = root.Symbol;

module.exports = Symbol;


/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

var isSymbol = __webpack_require__(17);

/** Used as references for various `Number` constants. */
var INFINITY = 1 / 0;

/**
 * Converts `value` to a string key if it's not a string or symbol.
 *
 * @private
 * @param {*} value The value to inspect.
 * @returns {string|symbol} Returns the key.
 */
function toKey(value) {
  if (typeof value == 'string' || isSymbol(value)) {
    return value;
  }
  var result = (value + '');
  return (result == '0' && (1 / value) == -INFINITY) ? '-0' : result;
}

module.exports = toKey;


/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

var isArray = __webpack_require__(1),
    isKey = __webpack_require__(34),
    stringToPath = __webpack_require__(149),
    toString = __webpack_require__(169);

/**
 * Casts `value` to a path array if it's not one.
 *
 * @private
 * @param {*} value The value to inspect.
 * @param {Object} [object] The object to query keys on.
 * @returns {Array} Returns the cast property path array.
 */
function castPath(value, object) {
  if (isArray(value)) {
    return value;
  }
  return isKey(value, object) ? [value] : stringToPath(toString(value));
}

module.exports = castPath;


/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

var DataView = __webpack_require__(178),
    Map = __webpack_require__(36),
    Promise = __webpack_require__(179),
    Set = __webpack_require__(180),
    WeakMap = __webpack_require__(181),
    baseGetTag = __webpack_require__(8),
    toSource = __webpack_require__(69);

/** `Object#toString` result references. */
var mapTag = '[object Map]',
    objectTag = '[object Object]',
    promiseTag = '[object Promise]',
    setTag = '[object Set]',
    weakMapTag = '[object WeakMap]';

var dataViewTag = '[object DataView]';

/** Used to detect maps, sets, and weakmaps. */
var dataViewCtorString = toSource(DataView),
    mapCtorString = toSource(Map),
    promiseCtorString = toSource(Promise),
    setCtorString = toSource(Set),
    weakMapCtorString = toSource(WeakMap);

/**
 * Gets the `toStringTag` of `value`.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
var getTag = baseGetTag;

// Fallback for data views, maps, sets, and weak maps in IE 11 and promises in Node.js < 6.
if ((DataView && getTag(new DataView(new ArrayBuffer(1))) != dataViewTag) ||
    (Map && getTag(new Map) != mapTag) ||
    (Promise && getTag(Promise.resolve()) != promiseTag) ||
    (Set && getTag(new Set) != setTag) ||
    (WeakMap && getTag(new WeakMap) != weakMapTag)) {
  getTag = function(value) {
    var result = baseGetTag(value),
        Ctor = result == objectTag ? value.constructor : undefined,
        ctorString = Ctor ? toSource(Ctor) : '';

    if (ctorString) {
      switch (ctorString) {
        case dataViewCtorString: return dataViewTag;
        case mapCtorString: return mapTag;
        case promiseCtorString: return promiseTag;
        case setCtorString: return setTag;
        case weakMapCtorString: return weakMapTag;
      }
    }
    return result;
  };
}

module.exports = getTag;


/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

var arrayLikeKeys = __webpack_require__(80),
    baseKeys = __webpack_require__(73),
    isArrayLike = __webpack_require__(24);

/**
 * Creates an array of the own enumerable property names of `object`.
 *
 * **Note:** Non-object values are coerced to objects. See the
 * [ES spec](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
 * for more details.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Object
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 *   this.b = 2;
 * }
 *
 * Foo.prototype.c = 3;
 *
 * _.keys(new Foo);
 * // => ['a', 'b'] (iteration order is not guaranteed)
 *
 * _.keys('hi');
 * // => ['0', '1']
 */
function keys(object) {
  return isArrayLike(object) ? arrayLikeKeys(object) : baseKeys(object);
}

module.exports = keys;


/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

var assignValue = __webpack_require__(32),
    baseAssignValue = __webpack_require__(65);

/**
 * Copies properties of `source` to `object`.
 *
 * @private
 * @param {Object} source The object to copy properties from.
 * @param {Array} props The property identifiers to copy.
 * @param {Object} [object={}] The object to copy properties to.
 * @param {Function} [customizer] The function to customize copied values.
 * @returns {Object} Returns `object`.
 */
function copyObject(source, props, object, customizer) {
  var isNew = !object;
  object || (object = {});

  var index = -1,
      length = props.length;

  while (++index < length) {
    var key = props[index];

    var newValue = customizer
      ? customizer(object[key], source[key], key, object, source)
      : undefined;

    if (newValue === undefined) {
      newValue = source[key];
    }
    if (isNew) {
      baseAssignValue(object, key, newValue);
    } else {
      assignValue(object, key, newValue);
    }
  }
  return object;
}

module.exports = copyObject;


/***/ }),
/* 16 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_Provider__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_connectAdvanced__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__connect_connect__ = __webpack_require__(115);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__components_Provider__["a"]; });
/* unused harmony reexport createProvider */
/* unused harmony reexport connectAdvanced */
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_2__connect_connect__["a"]; });






/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

var baseGetTag = __webpack_require__(8),
    isObjectLike = __webpack_require__(5);

/** `Object#toString` result references. */
var symbolTag = '[object Symbol]';

/**
 * Checks if `value` is classified as a `Symbol` primitive or object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
 * @example
 *
 * _.isSymbol(Symbol.iterator);
 * // => true
 *
 * _.isSymbol('abc');
 * // => false
 */
function isSymbol(value) {
  return typeof value == 'symbol' ||
    (isObjectLike(value) && baseGetTag(value) == symbolTag);
}

module.exports = isSymbol;


/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

var getNative = __webpack_require__(7);

/* Built-in method references that are verified to be native. */
var nativeCreate = getNative(Object, 'create');

module.exports = nativeCreate;


/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

var listCacheClear = __webpack_require__(159),
    listCacheDelete = __webpack_require__(160),
    listCacheGet = __webpack_require__(161),
    listCacheHas = __webpack_require__(162),
    listCacheSet = __webpack_require__(163);

/**
 * Creates an list cache object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function ListCache(entries) {
  var index = -1,
      length = entries == null ? 0 : entries.length;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

// Add methods to `ListCache`.
ListCache.prototype.clear = listCacheClear;
ListCache.prototype['delete'] = listCacheDelete;
ListCache.prototype.get = listCacheGet;
ListCache.prototype.has = listCacheHas;
ListCache.prototype.set = listCacheSet;

module.exports = ListCache;


/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

var eq = __webpack_require__(33);

/**
 * Gets the index at which the `key` is found in `array` of key-value pairs.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {*} key The key to search for.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */
function assocIndexOf(array, key) {
  var length = array.length;
  while (length--) {
    if (eq(array[length][0], key)) {
      return length;
    }
  }
  return -1;
}

module.exports = assocIndexOf;


/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

var isKeyable = __webpack_require__(165);

/**
 * Gets the data for `map`.
 *
 * @private
 * @param {Object} map The map to query.
 * @param {string} key The reference key.
 * @returns {*} Returns the map data.
 */
function getMapData(map, key) {
  var data = map.__data__;
  return isKeyable(key)
    ? data[typeof key == 'string' ? 'string' : 'hash']
    : data.map;
}

module.exports = getMapData;


/***/ }),
/* 22 */
/***/ (function(module, exports) {

/** Used for built-in method references. */
var objectProto = Object.prototype;

/**
 * Checks if `value` is likely a prototype object.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a prototype, else `false`.
 */
function isPrototype(value) {
  var Ctor = value && value.constructor,
      proto = (typeof Ctor == 'function' && Ctor.prototype) || objectProto;

  return value === proto;
}

module.exports = isPrototype;


/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

var baseIsArguments = __webpack_require__(182),
    isObjectLike = __webpack_require__(5);

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/** Built-in value references. */
var propertyIsEnumerable = objectProto.propertyIsEnumerable;

/**
 * Checks if `value` is likely an `arguments` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
 *  else `false`.
 * @example
 *
 * _.isArguments(function() { return arguments; }());
 * // => true
 *
 * _.isArguments([1, 2, 3]);
 * // => false
 */
var isArguments = baseIsArguments(function() { return arguments; }()) ? baseIsArguments : function(value) {
  return isObjectLike(value) && hasOwnProperty.call(value, 'callee') &&
    !propertyIsEnumerable.call(value, 'callee');
};

module.exports = isArguments;


/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

var isFunction = __webpack_require__(67),
    isLength = __webpack_require__(38);

/**
 * Checks if `value` is array-like. A value is considered array-like if it's
 * not a function and has a `value.length` that's an integer greater than or
 * equal to `0` and less than or equal to `Number.MAX_SAFE_INTEGER`.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
 * @example
 *
 * _.isArrayLike([1, 2, 3]);
 * // => true
 *
 * _.isArrayLike(document.body.children);
 * // => true
 *
 * _.isArrayLike('abc');
 * // => true
 *
 * _.isArrayLike(_.noop);
 * // => false
 */
function isArrayLike(value) {
  return value != null && isLength(value.length) && !isFunction(value);
}

module.exports = isArrayLike;


/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {var root = __webpack_require__(2),
    stubFalse = __webpack_require__(183);

/** Detect free variable `exports`. */
var freeExports = typeof exports == 'object' && exports && !exports.nodeType && exports;

/** Detect free variable `module`. */
var freeModule = freeExports && typeof module == 'object' && module && !module.nodeType && module;

/** Detect the popular CommonJS extension `module.exports`. */
var moduleExports = freeModule && freeModule.exports === freeExports;

/** Built-in value references. */
var Buffer = moduleExports ? root.Buffer : undefined;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeIsBuffer = Buffer ? Buffer.isBuffer : undefined;

/**
 * Checks if `value` is a buffer.
 *
 * @static
 * @memberOf _
 * @since 4.3.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a buffer, else `false`.
 * @example
 *
 * _.isBuffer(new Buffer(2));
 * // => true
 *
 * _.isBuffer(new Uint8Array(2));
 * // => false
 */
var isBuffer = nativeIsBuffer || stubFalse;

module.exports = isBuffer;

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(39)(module)))

/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {(function (global, factory) {
	 true ? module.exports = factory() :
	typeof define === 'function' && define.amd ? define(factory) :
	(global.BrowserSpriteSymbol = factory());
}(this, (function () { 'use strict';

var SpriteSymbol = function SpriteSymbol(ref) {
  var id = ref.id;
  var viewBox = ref.viewBox;
  var content = ref.content;

  this.id = id;
  this.viewBox = viewBox;
  this.content = content;
};

/**
 * @return {string}
 */
SpriteSymbol.prototype.stringify = function stringify () {
  return this.content;
};

/**
 * @return {string}
 */
SpriteSymbol.prototype.toString = function toString () {
  return this.stringify();
};

SpriteSymbol.prototype.destroy = function destroy () {
    var this$1 = this;

  ['id', 'viewBox', 'content'].forEach(function (prop) { return delete this$1[prop]; });
};

/**
 * @param {string} content
 * @return {Element}
 */
var parse = function (content) {
  var hasImportNode = !!document.importNode;
  var doc = new DOMParser().parseFromString(content, 'image/svg+xml').documentElement;

  /**
   * Fix for browser which are throwing WrongDocumentError
   * if you insert an element which is not part of the document
   * @see http://stackoverflow.com/a/7986519/4624403
   */
  if (hasImportNode) {
    return document.importNode(doc, true);
  }

  return doc;
};

var commonjsGlobal = typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};





function createCommonjsModule(fn, module) {
	return module = { exports: {} }, fn(module, module.exports), module.exports;
}

var deepmerge = createCommonjsModule(function (module, exports) {
(function (root, factory) {
    if (false) {
        undefined(factory);
    } else {
        module.exports = factory();
    }
}(commonjsGlobal, function () {

function isMergeableObject(val) {
    var nonNullObject = val && typeof val === 'object';

    return nonNullObject
        && Object.prototype.toString.call(val) !== '[object RegExp]'
        && Object.prototype.toString.call(val) !== '[object Date]'
}

function emptyTarget(val) {
    return Array.isArray(val) ? [] : {}
}

function cloneIfNecessary(value, optionsArgument) {
    var clone = optionsArgument && optionsArgument.clone === true;
    return (clone && isMergeableObject(value)) ? deepmerge(emptyTarget(value), value, optionsArgument) : value
}

function defaultArrayMerge(target, source, optionsArgument) {
    var destination = target.slice();
    source.forEach(function(e, i) {
        if (typeof destination[i] === 'undefined') {
            destination[i] = cloneIfNecessary(e, optionsArgument);
        } else if (isMergeableObject(e)) {
            destination[i] = deepmerge(target[i], e, optionsArgument);
        } else if (target.indexOf(e) === -1) {
            destination.push(cloneIfNecessary(e, optionsArgument));
        }
    });
    return destination
}

function mergeObject(target, source, optionsArgument) {
    var destination = {};
    if (isMergeableObject(target)) {
        Object.keys(target).forEach(function (key) {
            destination[key] = cloneIfNecessary(target[key], optionsArgument);
        });
    }
    Object.keys(source).forEach(function (key) {
        if (!isMergeableObject(source[key]) || !target[key]) {
            destination[key] = cloneIfNecessary(source[key], optionsArgument);
        } else {
            destination[key] = deepmerge(target[key], source[key], optionsArgument);
        }
    });
    return destination
}

function deepmerge(target, source, optionsArgument) {
    var array = Array.isArray(source);
    var options = optionsArgument || { arrayMerge: defaultArrayMerge };
    var arrayMerge = options.arrayMerge || defaultArrayMerge;

    if (array) {
        return Array.isArray(target) ? arrayMerge(target, source, optionsArgument) : cloneIfNecessary(source, optionsArgument)
    } else {
        return mergeObject(target, source, optionsArgument)
    }
}

deepmerge.all = function deepmergeAll(array, optionsArgument) {
    if (!Array.isArray(array) || array.length < 2) {
        throw new Error('first argument should be an array with at least two elements')
    }

    // we are sure there are at least 2 values, so it is safe to have no initial value
    return array.reduce(function(prev, next) {
        return deepmerge(prev, next, optionsArgument)
    })
};

return deepmerge

}));
});

var namespaces_1 = createCommonjsModule(function (module, exports) {
var namespaces = {
  svg: {
    name: 'xmlns',
    uri: 'http://www.w3.org/2000/svg'
  },
  xlink: {
    name: 'xmlns:xlink',
    uri: 'http://www.w3.org/1999/xlink'
  }
};

exports.default = namespaces;
module.exports = exports.default;
});

/**
 * @param {Object} attrs
 * @return {string}
 */
var objectToAttrsString = function (attrs) {
  return Object.keys(attrs).map(function (attr) {
    var value = attrs[attr].toString().replace(/"/g, '&quot;');
    return (attr + "=\"" + value + "\"");
  }).join(' ');
};

var svg = namespaces_1.svg;
var xlink = namespaces_1.xlink;

var defaultAttrs = {};
defaultAttrs[svg.name] = svg.uri;
defaultAttrs[xlink.name] = xlink.uri;

/**
 * @param {string} [content]
 * @param {Object} [attributes]
 * @return {string}
 */
var wrapInSvgString = function (content, attributes) {
  if ( content === void 0 ) content = '';

  var attrs = deepmerge(defaultAttrs, attributes || {});
  var attrsRendered = objectToAttrsString(attrs);
  return ("<svg " + attrsRendered + ">" + content + "</svg>");
};

var BrowserSpriteSymbol = (function (SpriteSymbol$$1) {
  function BrowserSpriteSymbol () {
    SpriteSymbol$$1.apply(this, arguments);
  }

  if ( SpriteSymbol$$1 ) BrowserSpriteSymbol.__proto__ = SpriteSymbol$$1;
  BrowserSpriteSymbol.prototype = Object.create( SpriteSymbol$$1 && SpriteSymbol$$1.prototype );
  BrowserSpriteSymbol.prototype.constructor = BrowserSpriteSymbol;

  var prototypeAccessors = { isMounted: {} };

  prototypeAccessors.isMounted.get = function () {
    return !!this.node;
  };

  /**
   * @param {Element} node
   * @return {BrowserSpriteSymbol}
   */
  BrowserSpriteSymbol.createFromExistingNode = function createFromExistingNode (node) {
    return new BrowserSpriteSymbol({
      id: node.getAttribute('id'),
      viewBox: node.getAttribute('viewBox'),
      content: node.outerHTML
    });
  };

  BrowserSpriteSymbol.prototype.destroy = function destroy () {
    if (this.isMounted) {
      this.unmount();
    }
    SpriteSymbol$$1.prototype.destroy.call(this);
  };

  /**
   * @param {Element|string} target
   * @return {Element}
   */
  BrowserSpriteSymbol.prototype.mount = function mount (target) {
    if (this.isMounted) {
      return this.node;
    }

    var mountTarget = typeof target === 'string' ? document.querySelector(target) : target;
    var node = this.render();
    this.node = node;

    mountTarget.appendChild(node);

    return node;
  };

  /**
   * @return {Element}
   */
  BrowserSpriteSymbol.prototype.render = function render () {
    var content = this.stringify();
    return parse(wrapInSvgString(content)).childNodes[0];
  };

  BrowserSpriteSymbol.prototype.unmount = function unmount () {
    this.node.parentNode.removeChild(this.node);
  };

  Object.defineProperties( BrowserSpriteSymbol.prototype, prototypeAccessors );

  return BrowserSpriteSymbol;
}(SpriteSymbol));

return BrowserSpriteSymbol;

})));

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(9)))

/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {(function (global, factory) {
	 true ? module.exports = factory() :
	typeof define === 'function' && define.amd ? define(factory) :
	(global.BrowserSprite = factory());
}(this, (function () { 'use strict';

var commonjsGlobal = typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};





function createCommonjsModule(fn, module) {
	return module = { exports: {} }, fn(module, module.exports), module.exports;
}

var deepmerge = createCommonjsModule(function (module, exports) {
(function (root, factory) {
    if (false) {
        undefined(factory);
    } else {
        module.exports = factory();
    }
}(commonjsGlobal, function () {

function isMergeableObject(val) {
    var nonNullObject = val && typeof val === 'object';

    return nonNullObject
        && Object.prototype.toString.call(val) !== '[object RegExp]'
        && Object.prototype.toString.call(val) !== '[object Date]'
}

function emptyTarget(val) {
    return Array.isArray(val) ? [] : {}
}

function cloneIfNecessary(value, optionsArgument) {
    var clone = optionsArgument && optionsArgument.clone === true;
    return (clone && isMergeableObject(value)) ? deepmerge(emptyTarget(value), value, optionsArgument) : value
}

function defaultArrayMerge(target, source, optionsArgument) {
    var destination = target.slice();
    source.forEach(function(e, i) {
        if (typeof destination[i] === 'undefined') {
            destination[i] = cloneIfNecessary(e, optionsArgument);
        } else if (isMergeableObject(e)) {
            destination[i] = deepmerge(target[i], e, optionsArgument);
        } else if (target.indexOf(e) === -1) {
            destination.push(cloneIfNecessary(e, optionsArgument));
        }
    });
    return destination
}

function mergeObject(target, source, optionsArgument) {
    var destination = {};
    if (isMergeableObject(target)) {
        Object.keys(target).forEach(function (key) {
            destination[key] = cloneIfNecessary(target[key], optionsArgument);
        });
    }
    Object.keys(source).forEach(function (key) {
        if (!isMergeableObject(source[key]) || !target[key]) {
            destination[key] = cloneIfNecessary(source[key], optionsArgument);
        } else {
            destination[key] = deepmerge(target[key], source[key], optionsArgument);
        }
    });
    return destination
}

function deepmerge(target, source, optionsArgument) {
    var array = Array.isArray(source);
    var options = optionsArgument || { arrayMerge: defaultArrayMerge };
    var arrayMerge = options.arrayMerge || defaultArrayMerge;

    if (array) {
        return Array.isArray(target) ? arrayMerge(target, source, optionsArgument) : cloneIfNecessary(source, optionsArgument)
    } else {
        return mergeObject(target, source, optionsArgument)
    }
}

deepmerge.all = function deepmergeAll(array, optionsArgument) {
    if (!Array.isArray(array) || array.length < 2) {
        throw new Error('first argument should be an array with at least two elements')
    }

    // we are sure there are at least 2 values, so it is safe to have no initial value
    return array.reduce(function(prev, next) {
        return deepmerge(prev, next, optionsArgument)
    })
};

return deepmerge

}));
});

//      
// An event handler can take an optional event argument
// and should not return a value
                                          
// An array of all currently registered event handlers for a type
                                            
// A map of event types and their corresponding event handlers.
                        
                                   
  

/** Mitt: Tiny (~200b) functional event emitter / pubsub.
 *  @name mitt
 *  @returns {Mitt}
 */
function mitt(all                 ) {
	all = all || Object.create(null);

	return {
		/**
		 * Register an event handler for the given type.
		 *
		 * @param  {String} type	Type of event to listen for, or `"*"` for all events
		 * @param  {Function} handler Function to call in response to given event
		 * @memberOf mitt
		 */
		on: function on(type        , handler              ) {
			(all[type] || (all[type] = [])).push(handler);
		},

		/**
		 * Remove an event handler for the given type.
		 *
		 * @param  {String} type	Type of event to unregister `handler` from, or `"*"`
		 * @param  {Function} handler Handler function to remove
		 * @memberOf mitt
		 */
		off: function off(type        , handler              ) {
			if (all[type]) {
				all[type].splice(all[type].indexOf(handler) >>> 0, 1);
			}
		},

		/**
		 * Invoke all handlers for the given type.
		 * If present, `"*"` handlers are invoked after type-matched handlers.
		 *
		 * @param {String} type  The event type to invoke
		 * @param {Any} [evt]  Any value (object is recommended and powerful), passed to each handler
		 * @memberof mitt
		 */
		emit: function emit(type        , evt     ) {
			(all[type] || []).map(function (handler) { handler(evt); });
			(all['*'] || []).map(function (handler) { handler(type, evt); });
		}
	};
}

var namespaces_1 = createCommonjsModule(function (module, exports) {
var namespaces = {
  svg: {
    name: 'xmlns',
    uri: 'http://www.w3.org/2000/svg'
  },
  xlink: {
    name: 'xmlns:xlink',
    uri: 'http://www.w3.org/1999/xlink'
  }
};

exports.default = namespaces;
module.exports = exports.default;
});

/**
 * @param {Object} attrs
 * @return {string}
 */
var objectToAttrsString = function (attrs) {
  return Object.keys(attrs).map(function (attr) {
    var value = attrs[attr].toString().replace(/"/g, '&quot;');
    return (attr + "=\"" + value + "\"");
  }).join(' ');
};

var svg = namespaces_1.svg;
var xlink = namespaces_1.xlink;

var defaultAttrs = {};
defaultAttrs[svg.name] = svg.uri;
defaultAttrs[xlink.name] = xlink.uri;

/**
 * @param {string} [content]
 * @param {Object} [attributes]
 * @return {string}
 */
var wrapInSvgString = function (content, attributes) {
  if ( content === void 0 ) content = '';

  var attrs = deepmerge(defaultAttrs, attributes || {});
  var attrsRendered = objectToAttrsString(attrs);
  return ("<svg " + attrsRendered + ">" + content + "</svg>");
};

var svg$1 = namespaces_1.svg;
var xlink$1 = namespaces_1.xlink;

var defaultConfig = {
  attrs: ( obj = {
    style: ['position: absolute', 'width: 0', 'height: 0'].join('; ')
  }, obj[svg$1.name] = svg$1.uri, obj[xlink$1.name] = xlink$1.uri, obj )
};
var obj;

var Sprite = function Sprite(config) {
  this.config = deepmerge(defaultConfig, config || {});
  this.symbols = [];
};

/**
 * Add new symbol. If symbol with the same id exists it will be replaced.
 * @param {SpriteSymbol} symbol
 * @return {boolean} `true` - symbol was added, `false` - replaced
 */
Sprite.prototype.add = function add (symbol) {
  var ref = this;
    var symbols = ref.symbols;
  var existing = this.find(symbol.id);

  if (existing) {
    symbols[symbols.indexOf(existing)] = symbol;
    return false;
  }

  symbols.push(symbol);
  return true;
};

/**
 * Remove symbol & destroy it
 * @param {string} id
 * @return {boolean} `true` - symbol was found & successfully destroyed, `false` - otherwise
 */
Sprite.prototype.remove = function remove (id) {
  var ref = this;
    var symbols = ref.symbols;
  var symbol = this.find(id);

  if (symbol) {
    symbols.splice(symbols.indexOf(symbol), 1);
    symbol.destroy();
    return true;
  }

  return false;
};

/**
 * @param {string} id
 * @return {SpriteSymbol|null}
 */
Sprite.prototype.find = function find (id) {
  return this.symbols.filter(function (s) { return s.id === id; })[0] || null;
};

/**
 * @param {string} id
 * @return {boolean}
 */
Sprite.prototype.has = function has (id) {
  return this.find(id) !== null;
};

/**
 * @return {string}
 */
Sprite.prototype.stringify = function stringify () {
  var ref = this.config;
    var attrs = ref.attrs;
  var stringifiedSymbols = this.symbols.map(function (s) { return s.stringify(); }).join('');
  return wrapInSvgString(stringifiedSymbols, attrs);
};

/**
 * @return {string}
 */
Sprite.prototype.toString = function toString () {
  return this.stringify();
};

Sprite.prototype.destroy = function destroy () {
  this.symbols.forEach(function (s) { return s.destroy(); });
};

var SpriteSymbol = function SpriteSymbol(ref) {
  var id = ref.id;
  var viewBox = ref.viewBox;
  var content = ref.content;

  this.id = id;
  this.viewBox = viewBox;
  this.content = content;
};

/**
 * @return {string}
 */
SpriteSymbol.prototype.stringify = function stringify () {
  return this.content;
};

/**
 * @return {string}
 */
SpriteSymbol.prototype.toString = function toString () {
  return this.stringify();
};

SpriteSymbol.prototype.destroy = function destroy () {
    var this$1 = this;

  ['id', 'viewBox', 'content'].forEach(function (prop) { return delete this$1[prop]; });
};

/**
 * @param {string} content
 * @return {Element}
 */
var parse = function (content) {
  var hasImportNode = !!document.importNode;
  var doc = new DOMParser().parseFromString(content, 'image/svg+xml').documentElement;

  /**
   * Fix for browser which are throwing WrongDocumentError
   * if you insert an element which is not part of the document
   * @see http://stackoverflow.com/a/7986519/4624403
   */
  if (hasImportNode) {
    return document.importNode(doc, true);
  }

  return doc;
};

var BrowserSpriteSymbol = (function (SpriteSymbol$$1) {
  function BrowserSpriteSymbol () {
    SpriteSymbol$$1.apply(this, arguments);
  }

  if ( SpriteSymbol$$1 ) BrowserSpriteSymbol.__proto__ = SpriteSymbol$$1;
  BrowserSpriteSymbol.prototype = Object.create( SpriteSymbol$$1 && SpriteSymbol$$1.prototype );
  BrowserSpriteSymbol.prototype.constructor = BrowserSpriteSymbol;

  var prototypeAccessors = { isMounted: {} };

  prototypeAccessors.isMounted.get = function () {
    return !!this.node;
  };

  /**
   * @param {Element} node
   * @return {BrowserSpriteSymbol}
   */
  BrowserSpriteSymbol.createFromExistingNode = function createFromExistingNode (node) {
    return new BrowserSpriteSymbol({
      id: node.getAttribute('id'),
      viewBox: node.getAttribute('viewBox'),
      content: node.outerHTML
    });
  };

  BrowserSpriteSymbol.prototype.destroy = function destroy () {
    if (this.isMounted) {
      this.unmount();
    }
    SpriteSymbol$$1.prototype.destroy.call(this);
  };

  /**
   * @param {Element|string} target
   * @return {Element}
   */
  BrowserSpriteSymbol.prototype.mount = function mount (target) {
    if (this.isMounted) {
      return this.node;
    }

    var mountTarget = typeof target === 'string' ? document.querySelector(target) : target;
    var node = this.render();
    this.node = node;

    mountTarget.appendChild(node);

    return node;
  };

  /**
   * @return {Element}
   */
  BrowserSpriteSymbol.prototype.render = function render () {
    var content = this.stringify();
    return parse(wrapInSvgString(content)).childNodes[0];
  };

  BrowserSpriteSymbol.prototype.unmount = function unmount () {
    this.node.parentNode.removeChild(this.node);
  };

  Object.defineProperties( BrowserSpriteSymbol.prototype, prototypeAccessors );

  return BrowserSpriteSymbol;
}(SpriteSymbol));

var defaultConfig$1 = {
  /**
   * Should following options be automatically configured:
   * - `syncUrlsWithBaseTag`
   * - `locationChangeAngularEmitter`
   * - `moveGradientsOutsideSymbol`
   * @type {boolean}
   */
  autoConfigure: true,

  /**
   * Default mounting selector
   * @type {string}
   */
  mountTo: 'body',

  /**
   * Fix disappearing SVG elements when <base href> exists.
   * Executes when sprite mounted.
   * @see http://stackoverflow.com/a/18265336/796152
   * @see https://github.com/everdimension/angular-svg-base-fix
   * @see https://github.com/angular/angular.js/issues/8934#issuecomment-56568466
   * @type {boolean}
   */
  syncUrlsWithBaseTag: false,

  /**
   * Should sprite listen custom location change event
   * @type {boolean}
   */
  listenLocationChangeEvent: true,

  /**
   * Custom window event name which should be emitted to update sprite urls
   * @type {string}
   */
  locationChangeEvent: 'locationChange',

  /**
   * Emit location change event in Angular automatically
   * @type {boolean}
   */
  locationChangeAngularEmitter: false,

  /**
   * Selector to find symbols usages when updating sprite urls
   * @type {string}
   */
  usagesToUpdate: 'use[*|href]',

  /**
   * Fix Firefox bug when gradients and patterns don't work if they are within a symbol.
   * Executes when sprite is rendered, but not mounted.
   * @see https://bugzilla.mozilla.org/show_bug.cgi?id=306674
   * @see https://bugzilla.mozilla.org/show_bug.cgi?id=353575
   * @see https://bugzilla.mozilla.org/show_bug.cgi?id=1235364
   * @type {boolean}
   */
  moveGradientsOutsideSymbol: false
};

/**
 * @param {*} arrayLike
 * @return {Array}
 */
var arrayFrom = function (arrayLike) {
  return Array.prototype.slice.call(arrayLike, 0);
};

var ua = navigator.userAgent;

var browser = {
  isChrome: /chrome/i.test(ua),
  isFirefox: /firefox/i.test(ua),

  // https://msdn.microsoft.com/en-us/library/ms537503(v=vs.85).aspx
  isIE: /msie/i.test(ua) || /trident/i.test(ua),
  isEdge: /edge/i.test(ua)
};

/**
 * @param {string} name
 * @param {*} data
 */
var dispatchEvent = function (name, data) {
  var event = document.createEvent('CustomEvent');
  event.initCustomEvent(name, false, false, data);
  window.dispatchEvent(event);
};

/**
 * IE doesn't evaluate <style> tags in SVGs that are dynamically added to the page.
 * This trick will trigger IE to read and use any existing SVG <style> tags.
 * @see https://github.com/iconic/SVGInjector/issues/23
 * @see https://developer.microsoft.com/en-us/microsoft-edge/platform/issues/10898469/
 *
 * @param {Element} node DOM Element to search <style> tags in
 * @return {Array<HTMLStyleElement>}
 */
var evalStylesIEWorkaround = function (node) {
  var updatedNodes = [];

  arrayFrom(node.querySelectorAll('style'))
    .forEach(function (style) {
      style.textContent += '';
      updatedNodes.push(style);
    });

  return updatedNodes;
};

/**
 * @param {string} [url] If not provided - current URL will be used
 * @return {string}
 */
var getUrlWithoutFragment = function (url) {
  return (url || window.location.href).split('#')[0];
};

/* global angular */
/**
 * @param {string} eventName
 */
var locationChangeAngularEmitter = function (eventName) {
  angular.module('ng').run(['$rootScope', function ($rootScope) {
    $rootScope.$on('$locationChangeSuccess', function (e, newUrl, oldUrl) {
      dispatchEvent(eventName, { oldUrl: oldUrl, newUrl: newUrl });
    });
  }]);
};

var defaultSelector = 'linearGradient, radialGradient, pattern';

/**
 * @param {Element} svg
 * @param {string} [selector]
 * @return {Element}
 */
var moveGradientsOutsideSymbol = function (svg, selector) {
  if ( selector === void 0 ) selector = defaultSelector;

  arrayFrom(svg.querySelectorAll('symbol')).forEach(function (symbol) {
    arrayFrom(symbol.querySelectorAll(selector)).forEach(function (node) {
      symbol.parentNode.insertBefore(node, symbol);
    });
  });
  return svg;
};

/**
 * @param {NodeList} nodes
 * @param {Function} [matcher]
 * @return {Attr[]}
 */
function selectAttributes(nodes, matcher) {
  var attrs = arrayFrom(nodes).reduce(function (acc, node) {
    if (!node.attributes) {
      return acc;
    }

    var arrayfied = arrayFrom(node.attributes);
    var matched = matcher ? arrayfied.filter(matcher) : arrayfied;
    return acc.concat(matched);
  }, []);

  return attrs;
}

/**
 * @param {NodeList|Node} nodes
 * @param {boolean} [clone=true]
 * @return {string}
 */

var xLinkNS = namespaces_1.xlink.uri;
var xLinkAttrName = 'xlink:href';

// eslint-disable-next-line no-useless-escape
var specialUrlCharsPattern = /[{}|\\\^\[\]`"<>]/g;

function encoder(url) {
  return url.replace(specialUrlCharsPattern, function (match) {
    return ("%" + (match[0].charCodeAt(0).toString(16).toUpperCase()));
  });
}

/**
 * @param {NodeList} nodes
 * @param {string} startsWith
 * @param {string} replaceWith
 * @return {NodeList}
 */
function updateReferences(nodes, startsWith, replaceWith) {
  arrayFrom(nodes).forEach(function (node) {
    var href = node.getAttribute(xLinkAttrName);
    if (href && href.indexOf(startsWith) === 0) {
      var newUrl = href.replace(startsWith, replaceWith);
      node.setAttributeNS(xLinkNS, xLinkAttrName, newUrl);
    }
  });

  return nodes;
}

/**
 * List of SVG attributes to update url() target in them
 */
var attList = [
  'clipPath',
  'colorProfile',
  'src',
  'cursor',
  'fill',
  'filter',
  'marker',
  'markerStart',
  'markerMid',
  'markerEnd',
  'mask',
  'stroke',
  'style'
];

var attSelector = attList.map(function (attr) { return ("[" + attr + "]"); }).join(',');

/**
 * Update URLs in svg image (like `fill="url(...)"`) and update referencing elements
 * @param {Element} svg
 * @param {NodeList} references
 * @param {string|RegExp} startsWith
 * @param {string} replaceWith
 * @return {void}
 *
 * @example
 * const sprite = document.querySelector('svg.sprite');
 * const usages = document.querySelectorAll('use');
 * updateUrls(sprite, usages, '#', 'prefix#');
 */
var updateUrls = function (svg, references, startsWith, replaceWith) {
  var startsWithEncoded = encoder(startsWith);
  var replaceWithEncoded = encoder(replaceWith);

  var nodes = svg.querySelectorAll(attSelector);
  var attrs = selectAttributes(nodes, function (ref) {
    var localName = ref.localName;
    var value = ref.value;

    return attList.indexOf(localName) !== -1 && value.indexOf(("url(" + startsWithEncoded)) !== -1;
  });

  attrs.forEach(function (attr) { return attr.value = attr.value.replace(startsWithEncoded, replaceWithEncoded); });
  updateReferences(references, startsWithEncoded, replaceWithEncoded);
};

/**
 * Internal emitter events
 * @enum
 * @private
 */
var Events = {
  MOUNT: 'mount',
  SYMBOL_MOUNT: 'symbol_mount'
};

var BrowserSprite = (function (Sprite$$1) {
  function BrowserSprite(cfg) {
    var this$1 = this;
    if ( cfg === void 0 ) cfg = {};

    Sprite$$1.call(this, deepmerge(defaultConfig$1, cfg));

    var emitter = mitt();
    this._emitter = emitter;
    this.node = null;

    var ref = this;
    var config = ref.config;

    if (config.autoConfigure) {
      this._autoConfigure(cfg);
    }

    if (config.syncUrlsWithBaseTag) {
      var baseUrl = document.getElementsByTagName('base')[0].getAttribute('href');
      emitter.on(Events.MOUNT, function () { return this$1.updateUrls('#', baseUrl); });
    }

    var handleLocationChange = this._handleLocationChange.bind(this);
    this._handleLocationChange = handleLocationChange;

    // Provide way to update sprite urls externally via dispatching custom window event
    if (config.listenLocationChangeEvent) {
      window.addEventListener(config.locationChangeEvent, handleLocationChange);
    }

    // Emit location change event in Angular automatically
    if (config.locationChangeAngularEmitter) {
      locationChangeAngularEmitter(config.locationChangeEvent);
    }

    // After sprite mounted
    emitter.on(Events.MOUNT, function (spriteNode) {
      if (config.moveGradientsOutsideSymbol) {
        moveGradientsOutsideSymbol(spriteNode);
      }
    });

    // After symbol mounted into sprite
    emitter.on(Events.SYMBOL_MOUNT, function (symbolNode) {
      if (config.moveGradientsOutsideSymbol) {
        moveGradientsOutsideSymbol(symbolNode.parentNode);
      }

      if (browser.isIE || browser.isEdge) {
        evalStylesIEWorkaround(symbolNode);
      }
    });
  }

  if ( Sprite$$1 ) BrowserSprite.__proto__ = Sprite$$1;
  BrowserSprite.prototype = Object.create( Sprite$$1 && Sprite$$1.prototype );
  BrowserSprite.prototype.constructor = BrowserSprite;

  var prototypeAccessors = { isMounted: {} };

  /**
   * @return {boolean}
   */
  prototypeAccessors.isMounted.get = function () {
    return !!this.node;
  };

  /**
   * Automatically configure following options
   * - `syncUrlsWithBaseTag`
   * - `locationChangeAngularEmitter`
   * - `moveGradientsOutsideSymbol`
   * @param {Object} cfg
   * @private
   */
  BrowserSprite.prototype._autoConfigure = function _autoConfigure (cfg) {
    var ref = this;
    var config = ref.config;

    if (typeof cfg.syncUrlsWithBaseTag === 'undefined') {
      config.syncUrlsWithBaseTag = typeof document.getElementsByTagName('base')[0] !== 'undefined';
    }

    if (typeof cfg.locationChangeAngularEmitter === 'undefined') {
      config.locationChangeAngularEmitter = 'angular' in window;
    }

    if (typeof cfg.moveGradientsOutsideSymbol === 'undefined') {
      config.moveGradientsOutsideSymbol = browser.isFirefox;
    }
  };

  /**
   * @param {Event} event
   * @param {Object} event.detail
   * @param {string} event.detail.oldUrl
   * @param {string} event.detail.newUrl
   * @private
   */
  BrowserSprite.prototype._handleLocationChange = function _handleLocationChange (event) {
    var ref = event.detail;
    var oldUrl = ref.oldUrl;
    var newUrl = ref.newUrl;
    this.updateUrls(oldUrl, newUrl);
  };

  /**
   * Add new symbol. If symbol with the same id exists it will be replaced.
   * If sprite already mounted - `symbol.mount(sprite.node)` will be called.
   * @fires Events#SYMBOL_MOUNT
   * @param {BrowserSpriteSymbol} symbol
   * @return {boolean} `true` - symbol was added, `false` - replaced
   */
  BrowserSprite.prototype.add = function add (symbol) {
    var sprite = this;
    var isNewSymbol = Sprite$$1.prototype.add.call(this, symbol);

    if (this.isMounted && isNewSymbol) {
      symbol.mount(sprite.node);
      this._emitter.emit(Events.SYMBOL_MOUNT, symbol.node);
    }

    return isNewSymbol;
  };

  /**
   * Attach to existing DOM node
   * @param {string|Element} target
   * @return {Element|null} attached DOM Element. null if node to attach not found.
   */
  BrowserSprite.prototype.attach = function attach (target) {
    var this$1 = this;

    var sprite = this;

    if (sprite.isMounted) {
      return sprite.node;
    }

    /** @type Element */
    var node = typeof target === 'string' ? document.querySelector(target) : target;
    sprite.node = node;

    // Already added symbols needs to be mounted
    this.symbols.forEach(function (symbol) {
      symbol.mount(sprite.node);
      this$1._emitter.emit(Events.SYMBOL_MOUNT, symbol.node);
    });

    // Create symbols from existing DOM nodes, add and mount them
    arrayFrom(node.querySelectorAll('symbol'))
      .forEach(function (symbolNode) {
        var symbol = BrowserSpriteSymbol.createFromExistingNode(symbolNode);
        symbol.node = symbolNode; // hack to prevent symbol mounting to sprite when adding
        sprite.add(symbol);
      });

    this._emitter.emit(Events.MOUNT, node);

    return node;
  };

  BrowserSprite.prototype.destroy = function destroy () {
    var ref = this;
    var config = ref.config;
    var symbols = ref.symbols;
    var _emitter = ref._emitter;

    symbols.forEach(function (s) { return s.destroy(); });

    _emitter.off('*');
    window.removeEventListener(config.locationChangeEvent, this._handleLocationChange);

    if (this.isMounted) {
      this.unmount();
    }
  };

  /**
   * @fires Events#MOUNT
   * @param {string|Element} [target]
   * @param {boolean} [prepend=false]
   * @return {Element|null} rendered sprite node. null if mount node not found.
   */
  BrowserSprite.prototype.mount = function mount (target, prepend) {
    if ( target === void 0 ) target = this.config.mountTo;
    if ( prepend === void 0 ) prepend = false;

    var sprite = this;

    if (sprite.isMounted) {
      return sprite.node;
    }

    var mountNode = typeof target === 'string' ? document.querySelector(target) : target;
    var node = sprite.render();
    this.node = node;

    if (prepend && mountNode.childNodes[0]) {
      mountNode.insertBefore(node, mountNode.childNodes[0]);
    } else {
      mountNode.appendChild(node);
    }

    this._emitter.emit(Events.MOUNT, node);

    return node;
  };

  /**
   * @return {Element}
   */
  BrowserSprite.prototype.render = function render () {
    return parse(this.stringify());
  };

  /**
   * Detach sprite from the DOM
   */
  BrowserSprite.prototype.unmount = function unmount () {
    this.node.parentNode.removeChild(this.node);
  };

  /**
   * Update URLs in sprite and usage elements
   * @param {string} oldUrl
   * @param {string} newUrl
   * @return {boolean} `true` - URLs was updated, `false` - sprite is not mounted
   */
  BrowserSprite.prototype.updateUrls = function updateUrls$1 (oldUrl, newUrl) {
    if (!this.isMounted) {
      return false;
    }

    var usages = document.querySelectorAll(this.config.usagesToUpdate);

    updateUrls(
      this.node,
      usages,
      ((getUrlWithoutFragment(oldUrl)) + "#"),
      ((getUrlWithoutFragment(newUrl)) + "#")
    );

    return true;
  };

  Object.defineProperties( BrowserSprite.prototype, prototypeAccessors );

  return BrowserSprite;
}(Sprite));

var ready$1 = createCommonjsModule(function (module) {
/*!
  * domready (c) Dustin Diaz 2014 - License MIT
  */
!function (name, definition) {

  { module.exports = definition(); }

}('domready', function () {

  var fns = [], listener
    , doc = document
    , hack = doc.documentElement.doScroll
    , domContentLoaded = 'DOMContentLoaded'
    , loaded = (hack ? /^loaded|^c/ : /^loaded|^i|^c/).test(doc.readyState);


  if (!loaded)
  { doc.addEventListener(domContentLoaded, listener = function () {
    doc.removeEventListener(domContentLoaded, listener);
    loaded = 1;
    while (listener = fns.shift()) { listener(); }
  }); }

  return function (fn) {
    loaded ? setTimeout(fn, 0) : fns.push(fn);
  }

});
});

var spriteNodeId = '__SVG_SPRITE_NODE__';
var spriteGlobalVarName = '__SVG_SPRITE__';
var isSpriteExists = !!window[spriteGlobalVarName];

// eslint-disable-next-line import/no-mutable-exports
var sprite;

if (isSpriteExists) {
  sprite = window[spriteGlobalVarName];
} else {
  sprite = new BrowserSprite({ attrs: { id: spriteNodeId } });
  window[spriteGlobalVarName] = sprite;
}

var loadSprite = function () {
  /**
   * Check for page already contains sprite node
   * If found - attach to and reuse it's content
   * If not - render and mount the new sprite
   */
  var existing = document.getElementById(spriteNodeId);

  if (existing) {
    sprite.attach(existing);
  } else {
    sprite.mount(document.body, true);
  }
};

if (document.body) {
  loadSprite();
} else {
  ready$1(loadSprite);
}

var sprite$1 = sprite;

return sprite$1;

})));

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(9)))

/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/


/* eslint-disable no-unused-vars */
var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var hasOwnProperty = Object.prototype.hasOwnProperty;
var propIsEnumerable = Object.prototype.propertyIsEnumerable;

function toObject(val) {
	if (val === null || val === undefined) {
		throw new TypeError('Object.assign cannot be called with null or undefined');
	}

	return Object(val);
}

function shouldUseNative() {
	try {
		if (!Object.assign) {
			return false;
		}

		// Detect buggy property enumeration order in older V8 versions.

		// https://bugs.chromium.org/p/v8/issues/detail?id=4118
		var test1 = new String('abc');  // eslint-disable-line no-new-wrappers
		test1[5] = 'de';
		if (Object.getOwnPropertyNames(test1)[0] === '5') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test2 = {};
		for (var i = 0; i < 10; i++) {
			test2['_' + String.fromCharCode(i)] = i;
		}
		var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
			return test2[n];
		});
		if (order2.join('') !== '0123456789') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test3 = {};
		'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
			test3[letter] = letter;
		});
		if (Object.keys(Object.assign({}, test3)).join('') !==
				'abcdefghijklmnopqrst') {
			return false;
		}

		return true;
	} catch (err) {
		// We don't expect any of the above to throw, but better to be safe.
		return false;
	}
}

module.exports = shouldUseNative() ? Object.assign : function (target, source) {
	var from;
	var to = toObject(target);
	var symbols;

	for (var s = 1; s < arguments.length; s++) {
		from = Object(arguments[s]);

		for (var key in from) {
			if (hasOwnProperty.call(from, key)) {
				to[key] = from[key];
			}
		}

		if (getOwnPropertySymbols) {
			symbols = getOwnPropertySymbols(from);
			for (var i = 0; i < symbols.length; i++) {
				if (propIsEnumerable.call(from, symbols[i])) {
					to[symbols[i]] = from[symbols[i]];
				}
			}
		}
	}

	return to;
};


/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
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
  module.exports = __webpack_require__(110)();
}


/***/ }),
/* 30 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = warning;
/**
 * Prints a warning in the console if it exists.
 *
 * @param {String} message The warning message.
 * @returns {void}
 */
function warning(message) {
  /* eslint-disable no-console */
  if (typeof console !== 'undefined' && typeof console.error === 'function') {
    console.error(message);
  }
  /* eslint-enable no-console */
  try {
    // This error was thrown as a convenience so that if you enable
    // "break on all exceptions" in your console,
    // it would pause the execution at this line.
    throw new Error(message);
    /* eslint-disable no-empty */
  } catch (e) {}
  /* eslint-enable no-empty */
}

/***/ }),
/* 31 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FETCH_VACANCIES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return FETCH_VACANCIES_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return FETCH_VACANCIES_FAILUR; });
var FETCH_VACANCIES='FETCH_VACANCIES';var FETCH_VACANCIES_SUCCESS='FETCH_VACANCIES_SUCCESS';var FETCH_VACANCIES_FAILUR='FETCH_VACANCIES_FAILUR';

/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

var baseAssignValue = __webpack_require__(65),
    eq = __webpack_require__(33);

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Assigns `value` to `key` of `object` if the existing value is not equivalent
 * using [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * for equality comparisons.
 *
 * @private
 * @param {Object} object The object to modify.
 * @param {string} key The key of the property to assign.
 * @param {*} value The value to assign.
 */
function assignValue(object, key, value) {
  var objValue = object[key];
  if (!(hasOwnProperty.call(object, key) && eq(objValue, value)) ||
      (value === undefined && !(key in object))) {
    baseAssignValue(object, key, value);
  }
}

module.exports = assignValue;


/***/ }),
/* 33 */
/***/ (function(module, exports) {

/**
 * Performs a
 * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * comparison between two values to determine if they are equivalent.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 * @example
 *
 * var object = { 'a': 1 };
 * var other = { 'a': 1 };
 *
 * _.eq(object, object);
 * // => true
 *
 * _.eq(object, other);
 * // => false
 *
 * _.eq('a', 'a');
 * // => true
 *
 * _.eq('a', Object('a'));
 * // => false
 *
 * _.eq(NaN, NaN);
 * // => true
 */
function eq(value, other) {
  return value === other || (value !== value && other !== other);
}

module.exports = eq;


/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

var isArray = __webpack_require__(1),
    isSymbol = __webpack_require__(17);

/** Used to match property names within property paths. */
var reIsDeepProp = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
    reIsPlainProp = /^\w*$/;

/**
 * Checks if `value` is a property name and not a property path.
 *
 * @private
 * @param {*} value The value to check.
 * @param {Object} [object] The object to query keys on.
 * @returns {boolean} Returns `true` if `value` is a property name, else `false`.
 */
function isKey(value, object) {
  if (isArray(value)) {
    return false;
  }
  var type = typeof value;
  if (type == 'number' || type == 'symbol' || type == 'boolean' ||
      value == null || isSymbol(value)) {
    return true;
  }
  return reIsPlainProp.test(value) || !reIsDeepProp.test(value) ||
    (object != null && value in Object(object));
}

module.exports = isKey;


/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

var mapCacheClear = __webpack_require__(152),
    mapCacheDelete = __webpack_require__(164),
    mapCacheGet = __webpack_require__(166),
    mapCacheHas = __webpack_require__(167),
    mapCacheSet = __webpack_require__(168);

/**
 * Creates a map cache object to store key-value pairs.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function MapCache(entries) {
  var index = -1,
      length = entries == null ? 0 : entries.length;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

// Add methods to `MapCache`.
MapCache.prototype.clear = mapCacheClear;
MapCache.prototype['delete'] = mapCacheDelete;
MapCache.prototype.get = mapCacheGet;
MapCache.prototype.has = mapCacheHas;
MapCache.prototype.set = mapCacheSet;

module.exports = MapCache;


/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

var getNative = __webpack_require__(7),
    root = __webpack_require__(2);

/* Built-in method references that are verified to be native. */
var Map = getNative(root, 'Map');

module.exports = Map;


/***/ }),
/* 37 */
/***/ (function(module, exports) {

/** Used as references for various `Number` constants. */
var MAX_SAFE_INTEGER = 9007199254740991;

/** Used to detect unsigned integer values. */
var reIsUint = /^(?:0|[1-9]\d*)$/;

/**
 * Checks if `value` is a valid array-like index.
 *
 * @private
 * @param {*} value The value to check.
 * @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.
 * @returns {boolean} Returns `true` if `value` is a valid index, else `false`.
 */
function isIndex(value, length) {
  var type = typeof value;
  length = length == null ? MAX_SAFE_INTEGER : length;

  return !!length &&
    (type == 'number' ||
      (type != 'symbol' && reIsUint.test(value))) &&
        (value > -1 && value % 1 == 0 && value < length);
}

module.exports = isIndex;


/***/ }),
/* 38 */
/***/ (function(module, exports) {

/** Used as references for various `Number` constants. */
var MAX_SAFE_INTEGER = 9007199254740991;

/**
 * Checks if `value` is a valid array-like length.
 *
 * **Note:** This method is loosely based on
 * [`ToLength`](http://ecma-international.org/ecma-262/7.0/#sec-tolength).
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
 * @example
 *
 * _.isLength(3);
 * // => true
 *
 * _.isLength(Number.MIN_VALUE);
 * // => false
 *
 * _.isLength(Infinity);
 * // => false
 *
 * _.isLength('3');
 * // => false
 */
function isLength(value) {
  return typeof value == 'number' &&
    value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
}

module.exports = isLength;


/***/ }),
/* 39 */
/***/ (function(module, exports) {

module.exports = function(module) {
	if(!module.webpackPolyfill) {
		module.deprecate = function() {};
		module.paths = [];
		// module.parent = undefined by default
		if(!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function() {
				return module.i;
			}
		});
		module.webpackPolyfill = 1;
	}
	return module;
};


/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

var baseIsTypedArray = __webpack_require__(184),
    baseUnary = __webpack_require__(41),
    nodeUtil = __webpack_require__(42);

/* Node.js helper references. */
var nodeIsTypedArray = nodeUtil && nodeUtil.isTypedArray;

/**
 * Checks if `value` is classified as a typed array.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
 * @example
 *
 * _.isTypedArray(new Uint8Array);
 * // => true
 *
 * _.isTypedArray([]);
 * // => false
 */
var isTypedArray = nodeIsTypedArray ? baseUnary(nodeIsTypedArray) : baseIsTypedArray;

module.exports = isTypedArray;


/***/ }),
/* 41 */
/***/ (function(module, exports) {

/**
 * The base implementation of `_.unary` without support for storing metadata.
 *
 * @private
 * @param {Function} func The function to cap arguments for.
 * @returns {Function} Returns the new capped function.
 */
function baseUnary(func) {
  return function(value) {
    return func(value);
  };
}

module.exports = baseUnary;


/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {var freeGlobal = __webpack_require__(68);

/** Detect free variable `exports`. */
var freeExports = typeof exports == 'object' && exports && !exports.nodeType && exports;

/** Detect free variable `module`. */
var freeModule = freeExports && typeof module == 'object' && module && !module.nodeType && module;

/** Detect the popular CommonJS extension `module.exports`. */
var moduleExports = freeModule && freeModule.exports === freeExports;

/** Detect free variable `process` from Node.js. */
var freeProcess = moduleExports && freeGlobal.process;

/** Used to access faster Node.js helpers. */
var nodeUtil = (function() {
  try {
    // Use `util.types` for Node.js 10+.
    var types = freeModule && freeModule.require && freeModule.require('util').types;

    if (types) {
      return types;
    }

    // Legacy `process.binding('util')` for Node.js < 10.
    return freeProcess && freeProcess.binding && freeProcess.binding('util');
  } catch (e) {}
}());

module.exports = nodeUtil;

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(39)(module)))

/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

var baseIsEqualDeep = __webpack_require__(186),
    isObjectLike = __webpack_require__(5);

/**
 * The base implementation of `_.isEqual` which supports partial comparisons
 * and tracks traversed objects.
 *
 * @private
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @param {boolean} bitmask The bitmask flags.
 *  1 - Unordered comparison
 *  2 - Partial comparison
 * @param {Function} [customizer] The function to customize comparisons.
 * @param {Object} [stack] Tracks traversed `value` and `other` objects.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 */
function baseIsEqual(value, other, bitmask, customizer, stack) {
  if (value === other) {
    return true;
  }
  if (value == null || other == null || (!isObjectLike(value) && !isObjectLike(other))) {
    return value !== value && other !== other;
  }
  return baseIsEqualDeep(value, other, bitmask, customizer, baseIsEqual, stack);
}

module.exports = baseIsEqual;


/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

var ListCache = __webpack_require__(19),
    stackClear = __webpack_require__(187),
    stackDelete = __webpack_require__(188),
    stackGet = __webpack_require__(189),
    stackHas = __webpack_require__(190),
    stackSet = __webpack_require__(191);

/**
 * Creates a stack cache object to store key-value pairs.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function Stack(entries) {
  var data = this.__data__ = new ListCache(entries);
  this.size = data.size;
}

// Add methods to `Stack`.
Stack.prototype.clear = stackClear;
Stack.prototype['delete'] = stackDelete;
Stack.prototype.get = stackGet;
Stack.prototype.has = stackHas;
Stack.prototype.set = stackSet;

module.exports = Stack;


/***/ }),
/* 45 */
/***/ (function(module, exports) {

/**
 * Appends the elements of `values` to `array`.
 *
 * @private
 * @param {Array} array The array to modify.
 * @param {Array} values The values to append.
 * @returns {Array} Returns `array`.
 */
function arrayPush(array, values) {
  var index = -1,
      length = values.length,
      offset = array.length;

  while (++index < length) {
    array[offset + index] = values[index];
  }
  return array;
}

module.exports = arrayPush;


/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

var arrayFilter = __webpack_require__(201),
    stubArray = __webpack_require__(79);

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Built-in value references. */
var propertyIsEnumerable = objectProto.propertyIsEnumerable;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeGetSymbols = Object.getOwnPropertySymbols;

/**
 * Creates an array of the own enumerable symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of symbols.
 */
var getSymbols = !nativeGetSymbols ? stubArray : function(object) {
  if (object == null) {
    return [];
  }
  object = Object(object);
  return arrayFilter(nativeGetSymbols(object), function(symbol) {
    return propertyIsEnumerable.call(object, symbol);
  });
};

module.exports = getSymbols;


/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

var baseGet = __webpack_require__(48);

/**
 * Gets the value at `path` of `object`. If the resolved value is
 * `undefined`, the `defaultValue` is returned in its place.
 *
 * @static
 * @memberOf _
 * @since 3.7.0
 * @category Object
 * @param {Object} object The object to query.
 * @param {Array|string} path The path of the property to get.
 * @param {*} [defaultValue] The value returned for `undefined` resolved values.
 * @returns {*} Returns the resolved value.
 * @example
 *
 * var object = { 'a': [{ 'b': { 'c': 3 } }] };
 *
 * _.get(object, 'a[0].b.c');
 * // => 3
 *
 * _.get(object, ['a', '0', 'b', 'c']);
 * // => 3
 *
 * _.get(object, 'a.b.c', 'default');
 * // => 'default'
 */
function get(object, path, defaultValue) {
  var result = object == null ? undefined : baseGet(object, path);
  return result === undefined ? defaultValue : result;
}

module.exports = get;


/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

var castPath = __webpack_require__(12),
    toKey = __webpack_require__(11);

/**
 * The base implementation of `_.get` without support for default values.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Array|string} path The path of the property to get.
 * @returns {*} Returns the resolved value.
 */
function baseGet(object, path) {
  path = castPath(path, object);

  var index = 0,
      length = path.length;

  while (object != null && index < length) {
    object = object[toKey(path[index++])];
  }
  return (index && index == length) ? object : undefined;
}

module.exports = baseGet;


/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

var overArg = __webpack_require__(74);

/** Built-in value references. */
var getPrototype = overArg(Object.getPrototypeOf, Object);

module.exports = getPrototype;


/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

var Uint8Array = __webpack_require__(76);

/**
 * Creates a clone of `arrayBuffer`.
 *
 * @private
 * @param {ArrayBuffer} arrayBuffer The array buffer to clone.
 * @returns {ArrayBuffer} Returns the cloned array buffer.
 */
function cloneArrayBuffer(arrayBuffer) {
  var result = new arrayBuffer.constructor(arrayBuffer.byteLength);
  new Uint8Array(result).set(new Uint8Array(arrayBuffer));
  return result;
}

module.exports = cloneArrayBuffer;


/***/ }),
/* 51 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return apiV1; });
/* unused harmony export apiV2 */
/* unused harmony export apiV3 */
/* unused harmony export apiRpc */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__zp_utils_js_lib_api_client__ = __webpack_require__(266);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__zp_utils_js_lib_api_client___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__zp_utils_js_lib_api_client__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__requests__ = __webpack_require__(274);
// import { ENV_TYPE } from 'constants/hosts';
var ENV_TYPE='';var getAuthToken=function getAuthToken(){return'';};var apiV1=new __WEBPACK_IMPORTED_MODULE_0__zp_utils_js_lib_api_client___default.a({envType:ENV_TYPE,version:'v1',getAuthToken:getAuthToken,requests:__WEBPACK_IMPORTED_MODULE_1__requests__["a" /* default */]});var apiV2=new __WEBPACK_IMPORTED_MODULE_0__zp_utils_js_lib_api_client___default.a({envType:ENV_TYPE,version:'v2',getAuthToken:getAuthToken,requests:__WEBPACK_IMPORTED_MODULE_1__requests__["a" /* default */]});var apiV3=new __WEBPACK_IMPORTED_MODULE_0__zp_utils_js_lib_api_client___default.a({envType:ENV_TYPE,version:'v3',getAuthToken:getAuthToken,requests:__WEBPACK_IMPORTED_MODULE_1__requests__["a" /* default */]});var apiRpc=new __WEBPACK_IMPORTED_MODULE_0__zp_utils_js_lib_api_client___default.a({envType:ENV_TYPE,version:'rpc',getAuthToken:getAuthToken,requests:__WEBPACK_IMPORTED_MODULE_1__requests__["a" /* default */]});

/***/ }),
/* 52 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PANELS; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__vkontakte_vkui__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__vkontakte_vkui___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__vkontakte_vkui__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__panels_list__ = __webpack_require__(276);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__panels_geo_picker__ = __webpack_require__(295);
var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}var PANELS={main:'main',geoPicker:'geoPicker'};var MainPage=function(_React$Component){_inherits(MainPage,_React$Component);function MainPage(){var _ref;var _temp,_this,_ret;_classCallCheck(this,MainPage);for(var _len=arguments.length,args=Array(_len),_key=0;_key<_len;_key++){args[_key]=arguments[_key];}return _ret=(_temp=(_this=_possibleConstructorReturn(this,(_ref=MainPage.__proto__||Object.getPrototypeOf(MainPage)).call.apply(_ref,[this].concat(args))),_this),_this.state={activePanel:PANELS.main},_this.handleChangePanel=function(namePanel){_this.setState({activePanel:namePanel});},_temp),_possibleConstructorReturn(_this,_ret);}_createClass(MainPage,[{key:'render',value:function render(){return __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_1__vkontakte_vkui__["View"],{activePanel:this.state.activePanel},__WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_1__vkontakte_vkui__["Panel"],{id:PANELS.main},__WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_2__panels_list__["a" /* default */],{onChangePanel:this.handleChangePanel})),__WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_1__vkontakte_vkui__["Panel"],{id:PANELS.geoPicker},__WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_3__panels_geo_picker__["a" /* default */],{onChangePanel:this.handleChangePanel})));}}]);return MainPage;}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);/* harmony default export */ __webpack_exports__["b"] = (MainPage);

/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var asap = __webpack_require__(97);

function noop() {}

// States:
//
// 0 - pending
// 1 - fulfilled with _value
// 2 - rejected with _value
// 3 - adopted the state of another promise, _value
//
// once the state is no longer pending (0) it is immutable

// All `_` prefixed properties will be reduced to `_{random number}`
// at build time to obfuscate them and discourage their use.
// We don't use symbols or Object.defineProperty to fully hide them
// because the performance isn't good enough.


// to avoid using try/catch inside critical functions, we
// extract them to here.
var LAST_ERROR = null;
var IS_ERROR = {};
function getThen(obj) {
  try {
    return obj.then;
  } catch (ex) {
    LAST_ERROR = ex;
    return IS_ERROR;
  }
}

function tryCallOne(fn, a) {
  try {
    return fn(a);
  } catch (ex) {
    LAST_ERROR = ex;
    return IS_ERROR;
  }
}
function tryCallTwo(fn, a, b) {
  try {
    fn(a, b);
  } catch (ex) {
    LAST_ERROR = ex;
    return IS_ERROR;
  }
}

module.exports = Promise;

function Promise(fn) {
  if (typeof this !== 'object') {
    throw new TypeError('Promises must be constructed via new');
  }
  if (typeof fn !== 'function') {
    throw new TypeError('Promise constructor\'s argument is not a function');
  }
  this._75 = 0;
  this._83 = 0;
  this._18 = null;
  this._38 = null;
  if (fn === noop) return;
  doResolve(fn, this);
}
Promise._47 = null;
Promise._71 = null;
Promise._44 = noop;

Promise.prototype.then = function(onFulfilled, onRejected) {
  if (this.constructor !== Promise) {
    return safeThen(this, onFulfilled, onRejected);
  }
  var res = new Promise(noop);
  handle(this, new Handler(onFulfilled, onRejected, res));
  return res;
};

function safeThen(self, onFulfilled, onRejected) {
  return new self.constructor(function (resolve, reject) {
    var res = new Promise(noop);
    res.then(resolve, reject);
    handle(self, new Handler(onFulfilled, onRejected, res));
  });
}
function handle(self, deferred) {
  while (self._83 === 3) {
    self = self._18;
  }
  if (Promise._47) {
    Promise._47(self);
  }
  if (self._83 === 0) {
    if (self._75 === 0) {
      self._75 = 1;
      self._38 = deferred;
      return;
    }
    if (self._75 === 1) {
      self._75 = 2;
      self._38 = [self._38, deferred];
      return;
    }
    self._38.push(deferred);
    return;
  }
  handleResolved(self, deferred);
}

function handleResolved(self, deferred) {
  asap(function() {
    var cb = self._83 === 1 ? deferred.onFulfilled : deferred.onRejected;
    if (cb === null) {
      if (self._83 === 1) {
        resolve(deferred.promise, self._18);
      } else {
        reject(deferred.promise, self._18);
      }
      return;
    }
    var ret = tryCallOne(cb, self._18);
    if (ret === IS_ERROR) {
      reject(deferred.promise, LAST_ERROR);
    } else {
      resolve(deferred.promise, ret);
    }
  });
}
function resolve(self, newValue) {
  // Promise Resolution Procedure: https://github.com/promises-aplus/promises-spec#the-promise-resolution-procedure
  if (newValue === self) {
    return reject(
      self,
      new TypeError('A promise cannot be resolved with itself.')
    );
  }
  if (
    newValue &&
    (typeof newValue === 'object' || typeof newValue === 'function')
  ) {
    var then = getThen(newValue);
    if (then === IS_ERROR) {
      return reject(self, LAST_ERROR);
    }
    if (
      then === self.then &&
      newValue instanceof Promise
    ) {
      self._83 = 3;
      self._18 = newValue;
      finale(self);
      return;
    } else if (typeof then === 'function') {
      doResolve(then.bind(newValue), self);
      return;
    }
  }
  self._83 = 1;
  self._18 = newValue;
  finale(self);
}

function reject(self, newValue) {
  self._83 = 2;
  self._18 = newValue;
  if (Promise._71) {
    Promise._71(self, newValue);
  }
  finale(self);
}
function finale(self) {
  if (self._75 === 1) {
    handle(self, self._38);
    self._38 = null;
  }
  if (self._75 === 2) {
    for (var i = 0; i < self._38.length; i++) {
      handle(self, self._38[i]);
    }
    self._38 = null;
  }
}

function Handler(onFulfilled, onRejected, promise){
  this.onFulfilled = typeof onFulfilled === 'function' ? onFulfilled : null;
  this.onRejected = typeof onRejected === 'function' ? onRejected : null;
  this.promise = promise;
}

/**
 * Take a potentially misbehaving resolver function and make sure
 * onFulfilled and onRejected are only called once.
 *
 * Makes no guarantees about asynchrony.
 */
function doResolve(fn, promise) {
  var done = false;
  var res = tryCallTwo(fn, function (value) {
    if (done) return;
    done = true;
    resolve(promise, value);
  }, function (reason) {
    if (done) return;
    done = true;
    reject(promise, reason);
  });
  if (!done && res === IS_ERROR) {
    done = true;
    reject(promise, LAST_ERROR);
  }
}


/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
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
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */



var emptyObject = {};

if (false) {
  Object.freeze(emptyObject);
}

module.exports = emptyObject;

/***/ }),
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
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
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function checkDCE() {
  /* global __REACT_DEVTOOLS_GLOBAL_HOOK__ */
  if (
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ === 'undefined' ||
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE !== 'function'
  ) {
    return;
  }
  if (false) {
    // This branch is unreachable because this function is only called
    // in production, but the condition is true only in development.
    // Therefore if the branch is still here, dead code elimination wasn't
    // properly applied.
    // Don't change the message. React DevTools relies on it. Also make sure
    // this message doesn't occur elsewhere in this function, or it will cause
    // a false positive.
    throw new Error('^_^');
  }
  try {
    // Verify that the code above has been dead code eliminated (DCE'd).
    __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(checkDCE);
  } catch (err) {
    // DevTools shouldn't crash React, no matter what.
    // We should still report in case we break this code.
    console.error(err);
  }
}

if (true) {
  // DCE check should happen before ReactDOM bundle executes so that
  // DevTools can report bad minification during injection.
  checkDCE();
  module.exports = __webpack_require__(102);
} else {
  module.exports = require('./cjs/react-dom.development.js');
}


/***/ }),
/* 58 */
/***/ (function(module, exports) {

(function(window) {
  var FUNCTION = 'function';
  var UNDEFINED = 'undefined';
  var subscribers = [];

  if (typeof window !== UNDEFINED) {

    //polyfill
    if (!window.CustomEvent) {
      (function() {
        function CustomEvent(event, params) {
          params = params || {bubbles: false, cancelable: false, detail: undefined};
          var evt = document.createEvent('CustomEvent');
          evt.initCustomEvent(event, params.bubbles, params.cancelable, params.detail);
          return evt;
        };

        CustomEvent.prototype = window.Event.prototype;

        window.CustomEvent = CustomEvent;
      })();
    }

    window.addEventListener('VKWebAppEvent', function() {
      var args = Array.prototype.slice.call(arguments);

      subscribers.forEach(function(fn) {
        fn.apply(null, args);
      });
    });
  }

  module.exports = {
    /**
     * Sends a message to native client
     *
     * @example
     * message.send('VKWebAppInit');
     *
     * @param {String} handler Message type
     * @param {Object} params Message data
     * @returns {void}
     */
    send: function send(handler, params) {
      if (!params) {
        params = {};
      }

      var isClient = typeof window !== UNDEFINED;
      var androidBridge = isClient && window.AndroidBridge;
      var iosBridge = isClient && window.webkit && window.webkit.messageHandlers;

      if (androidBridge && typeof androidBridge[handler] == FUNCTION) {
        androidBridge[handler](JSON.stringify(params));
      }
      if (iosBridge && iosBridge[handler] && typeof iosBridge[handler].postMessage == FUNCTION) {
        iosBridge[handler].postMessage(params);
      }
    },
    /**
     * Subscribe on VKWebAppEvent
     *
     * @param {Function} fn Event handler
     * @returns {void}
     */
    subscribe: function subscribe(fn) {
      subscribers.push(fn);
    },
    /**
     * Unsubscribe on VKWebAppEvent
     *
     * @param {Function} fn Event handler
     * @returns {void}
     */
    unsubscribe: function unsubscribe(fn) {
      var index = subscribers.indexOf(fn);

      if (index > -1) {
        subscribers.splice(index, 1);
      }
    },

    /**
     * Checks if native client supports nandler
     *
     * @param {String} handler Handler name
     * @returns {boolean}
     */
    supports: function supports(handler) {

      var isClient = typeof window !== UNDEFINED;
      var androidBridge = isClient && window.AndroidBridge;
      var iosBridge = isClient && window.webkit && window.webkit.messageHandlers;

      if (androidBridge && typeof androidBridge[handler] == FUNCTION) return true;

      if (iosBridge && iosBridge[handler] && typeof iosBridge[handler].postMessage == FUNCTION) return true;

      return false;
    }
  };
})(window);


/***/ }),
/* 59 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return subscriptionShape; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return storeShape; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_prop_types__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_prop_types__);


var subscriptionShape = __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.shape({
  trySubscribe: __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.func.isRequired,
  tryUnsubscribe: __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.func.isRequired,
  notifyNestedSubs: __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.func.isRequired,
  isSubscribed: __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.func.isRequired
});

var storeShape = __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.shape({
  subscribe: __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.func.isRequired,
  dispatch: __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.func.isRequired,
  getState: __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.func.isRequired
});

/***/ }),
/* 60 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = connectAdvanced;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_hoist_non_react_statics__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_hoist_non_react_statics___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_hoist_non_react_statics__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_invariant__ = __webpack_require__(113);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_invariant___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_invariant__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__utils_Subscription__ = __webpack_require__(114);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__utils_PropTypes__ = __webpack_require__(59);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }








var hotReloadingVersion = 0;
var dummyState = {};
function noop() {}
function makeSelectorStateful(sourceSelector, store) {
  // wrap the selector in an object that tracks its results between runs.
  var selector = {
    run: function runComponentSelector(props) {
      try {
        var nextProps = sourceSelector(store.getState(), props);
        if (nextProps !== selector.props || selector.error) {
          selector.shouldComponentUpdate = true;
          selector.props = nextProps;
          selector.error = null;
        }
      } catch (error) {
        selector.shouldComponentUpdate = true;
        selector.error = error;
      }
    }
  };

  return selector;
}

function connectAdvanced(
/*
  selectorFactory is a func that is responsible for returning the selector function used to
  compute new props from state, props, and dispatch. For example:
     export default connectAdvanced((dispatch, options) => (state, props) => ({
      thing: state.things[props.thingId],
      saveThing: fields => dispatch(actionCreators.saveThing(props.thingId, fields)),
    }))(YourComponent)
   Access to dispatch is provided to the factory so selectorFactories can bind actionCreators
  outside of their selector as an optimization. Options passed to connectAdvanced are passed to
  the selectorFactory, along with displayName and WrappedComponent, as the second argument.
   Note that selectorFactory is responsible for all caching/memoization of inbound and outbound
  props. Do not use connectAdvanced directly without memoizing results between calls to your
  selector, otherwise the Connect component will re-render on every state or props change.
*/
selectorFactory) {
  var _contextTypes, _childContextTypes;

  var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
      _ref$getDisplayName = _ref.getDisplayName,
      getDisplayName = _ref$getDisplayName === undefined ? function (name) {
    return 'ConnectAdvanced(' + name + ')';
  } : _ref$getDisplayName,
      _ref$methodName = _ref.methodName,
      methodName = _ref$methodName === undefined ? 'connectAdvanced' : _ref$methodName,
      _ref$renderCountProp = _ref.renderCountProp,
      renderCountProp = _ref$renderCountProp === undefined ? undefined : _ref$renderCountProp,
      _ref$shouldHandleStat = _ref.shouldHandleStateChanges,
      shouldHandleStateChanges = _ref$shouldHandleStat === undefined ? true : _ref$shouldHandleStat,
      _ref$storeKey = _ref.storeKey,
      storeKey = _ref$storeKey === undefined ? 'store' : _ref$storeKey,
      _ref$withRef = _ref.withRef,
      withRef = _ref$withRef === undefined ? false : _ref$withRef,
      connectOptions = _objectWithoutProperties(_ref, ['getDisplayName', 'methodName', 'renderCountProp', 'shouldHandleStateChanges', 'storeKey', 'withRef']);

  var subscriptionKey = storeKey + 'Subscription';
  var version = hotReloadingVersion++;

  var contextTypes = (_contextTypes = {}, _contextTypes[storeKey] = __WEBPACK_IMPORTED_MODULE_4__utils_PropTypes__["a" /* storeShape */], _contextTypes[subscriptionKey] = __WEBPACK_IMPORTED_MODULE_4__utils_PropTypes__["b" /* subscriptionShape */], _contextTypes);
  var childContextTypes = (_childContextTypes = {}, _childContextTypes[subscriptionKey] = __WEBPACK_IMPORTED_MODULE_4__utils_PropTypes__["b" /* subscriptionShape */], _childContextTypes);

  return function wrapWithConnect(WrappedComponent) {
    __WEBPACK_IMPORTED_MODULE_1_invariant___default()(typeof WrappedComponent == 'function', 'You must pass a component to the function returned by ' + (methodName + '. Instead received ' + JSON.stringify(WrappedComponent)));

    var wrappedComponentName = WrappedComponent.displayName || WrappedComponent.name || 'Component';

    var displayName = getDisplayName(wrappedComponentName);

    var selectorFactoryOptions = _extends({}, connectOptions, {
      getDisplayName: getDisplayName,
      methodName: methodName,
      renderCountProp: renderCountProp,
      shouldHandleStateChanges: shouldHandleStateChanges,
      storeKey: storeKey,
      withRef: withRef,
      displayName: displayName,
      wrappedComponentName: wrappedComponentName,
      WrappedComponent: WrappedComponent
    });

    var Connect = function (_Component) {
      _inherits(Connect, _Component);

      function Connect(props, context) {
        _classCallCheck(this, Connect);

        var _this = _possibleConstructorReturn(this, _Component.call(this, props, context));

        _this.version = version;
        _this.state = {};
        _this.renderCount = 0;
        _this.store = props[storeKey] || context[storeKey];
        _this.propsMode = Boolean(props[storeKey]);
        _this.setWrappedInstance = _this.setWrappedInstance.bind(_this);

        __WEBPACK_IMPORTED_MODULE_1_invariant___default()(_this.store, 'Could not find "' + storeKey + '" in either the context or props of ' + ('"' + displayName + '". Either wrap the root component in a <Provider>, ') + ('or explicitly pass "' + storeKey + '" as a prop to "' + displayName + '".'));

        _this.initSelector();
        _this.initSubscription();
        return _this;
      }

      Connect.prototype.getChildContext = function getChildContext() {
        var _ref2;

        // If this component received store from props, its subscription should be transparent
        // to any descendants receiving store+subscription from context; it passes along
        // subscription passed to it. Otherwise, it shadows the parent subscription, which allows
        // Connect to control ordering of notifications to flow top-down.
        var subscription = this.propsMode ? null : this.subscription;
        return _ref2 = {}, _ref2[subscriptionKey] = subscription || this.context[subscriptionKey], _ref2;
      };

      Connect.prototype.componentDidMount = function componentDidMount() {
        if (!shouldHandleStateChanges) return;

        // componentWillMount fires during server side rendering, but componentDidMount and
        // componentWillUnmount do not. Because of this, trySubscribe happens during ...didMount.
        // Otherwise, unsubscription would never take place during SSR, causing a memory leak.
        // To handle the case where a child component may have triggered a state change by
        // dispatching an action in its componentWillMount, we have to re-run the select and maybe
        // re-render.
        this.subscription.trySubscribe();
        this.selector.run(this.props);
        if (this.selector.shouldComponentUpdate) this.forceUpdate();
      };

      Connect.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
        this.selector.run(nextProps);
      };

      Connect.prototype.shouldComponentUpdate = function shouldComponentUpdate() {
        return this.selector.shouldComponentUpdate;
      };

      Connect.prototype.componentWillUnmount = function componentWillUnmount() {
        if (this.subscription) this.subscription.tryUnsubscribe();
        this.subscription = null;
        this.notifyNestedSubs = noop;
        this.store = null;
        this.selector.run = noop;
        this.selector.shouldComponentUpdate = false;
      };

      Connect.prototype.getWrappedInstance = function getWrappedInstance() {
        __WEBPACK_IMPORTED_MODULE_1_invariant___default()(withRef, 'To access the wrapped instance, you need to specify ' + ('{ withRef: true } in the options argument of the ' + methodName + '() call.'));
        return this.wrappedInstance;
      };

      Connect.prototype.setWrappedInstance = function setWrappedInstance(ref) {
        this.wrappedInstance = ref;
      };

      Connect.prototype.initSelector = function initSelector() {
        var sourceSelector = selectorFactory(this.store.dispatch, selectorFactoryOptions);
        this.selector = makeSelectorStateful(sourceSelector, this.store);
        this.selector.run(this.props);
      };

      Connect.prototype.initSubscription = function initSubscription() {
        if (!shouldHandleStateChanges) return;

        // parentSub's source should match where store came from: props vs. context. A component
        // connected to the store via props shouldn't use subscription from context, or vice versa.
        var parentSub = (this.propsMode ? this.props : this.context)[subscriptionKey];
        this.subscription = new __WEBPACK_IMPORTED_MODULE_3__utils_Subscription__["a" /* default */](this.store, parentSub, this.onStateChange.bind(this));

        // `notifyNestedSubs` is duplicated to handle the case where the component is  unmounted in
        // the middle of the notification loop, where `this.subscription` will then be null. An
        // extra null check every change can be avoided by copying the method onto `this` and then
        // replacing it with a no-op on unmount. This can probably be avoided if Subscription's
        // listeners logic is changed to not call listeners that have been unsubscribed in the
        // middle of the notification loop.
        this.notifyNestedSubs = this.subscription.notifyNestedSubs.bind(this.subscription);
      };

      Connect.prototype.onStateChange = function onStateChange() {
        this.selector.run(this.props);

        if (!this.selector.shouldComponentUpdate) {
          this.notifyNestedSubs();
        } else {
          this.componentDidUpdate = this.notifyNestedSubsOnComponentDidUpdate;
          this.setState(dummyState);
        }
      };

      Connect.prototype.notifyNestedSubsOnComponentDidUpdate = function notifyNestedSubsOnComponentDidUpdate() {
        // `componentDidUpdate` is conditionally implemented when `onStateChange` determines it
        // needs to notify nested subs. Once called, it unimplements itself until further state
        // changes occur. Doing it this way vs having a permanent `componentDidUpdate` that does
        // a boolean check every time avoids an extra method call most of the time, resulting
        // in some perf boost.
        this.componentDidUpdate = undefined;
        this.notifyNestedSubs();
      };

      Connect.prototype.isSubscribed = function isSubscribed() {
        return Boolean(this.subscription) && this.subscription.isSubscribed();
      };

      Connect.prototype.addExtraProps = function addExtraProps(props) {
        if (!withRef && !renderCountProp && !(this.propsMode && this.subscription)) return props;
        // make a shallow copy so that fields added don't leak to the original selector.
        // this is especially important for 'ref' since that's a reference back to the component
        // instance. a singleton memoized selector would then be holding a reference to the
        // instance, preventing the instance from being garbage collected, and that would be bad
        var withExtras = _extends({}, props);
        if (withRef) withExtras.ref = this.setWrappedInstance;
        if (renderCountProp) withExtras[renderCountProp] = this.renderCount++;
        if (this.propsMode && this.subscription) withExtras[subscriptionKey] = this.subscription;
        return withExtras;
      };

      Connect.prototype.render = function render() {
        var selector = this.selector;
        selector.shouldComponentUpdate = false;

        if (selector.error) {
          throw selector.error;
        } else {
          return Object(__WEBPACK_IMPORTED_MODULE_2_react__["createElement"])(WrappedComponent, this.addExtraProps(selector.props));
        }
      };

      return Connect;
    }(__WEBPACK_IMPORTED_MODULE_2_react__["Component"]);

    Connect.WrappedComponent = WrappedComponent;
    Connect.displayName = displayName;
    Connect.childContextTypes = childContextTypes;
    Connect.contextTypes = contextTypes;
    Connect.propTypes = contextTypes;

    if (false) {
      Connect.prototype.componentWillUpdate = function componentWillUpdate() {
        var _this2 = this;

        // We are hot reloading!
        if (this.version !== version) {
          this.version = version;
          this.initSelector();

          // If any connected descendants don't hot reload (and resubscribe in the process), their
          // listeners will be lost when we unsubscribe. Unfortunately, by copying over all
          // listeners, this does mean that the old versions of connected descendants will still be
          // notified of state changes; however, their onStateChange function is a no-op so this
          // isn't a huge deal.
          var oldListeners = [];

          if (this.subscription) {
            oldListeners = this.subscription.listeners.get();
            this.subscription.tryUnsubscribe();
          }
          this.initSubscription();
          if (shouldHandleStateChanges) {
            this.subscription.trySubscribe();
            oldListeners.forEach(function (listener) {
              return _this2.subscription.listeners.subscribe(listener);
            });
          }
        }
      };
    }

    return __WEBPACK_IMPORTED_MODULE_0_hoist_non_react_statics___default()(Connect, WrappedComponent);
  };
}

/***/ }),
/* 61 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = wrapMapToPropsConstant;
/* unused harmony export getDependsOnOwnProps */
/* harmony export (immutable) */ __webpack_exports__["b"] = wrapMapToPropsFunc;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils_verifyPlainObject__ = __webpack_require__(62);


function wrapMapToPropsConstant(getConstant) {
  return function initConstantSelector(dispatch, options) {
    var constant = getConstant(dispatch, options);

    function constantSelector() {
      return constant;
    }
    constantSelector.dependsOnOwnProps = false;
    return constantSelector;
  };
}

// dependsOnOwnProps is used by createMapToPropsProxy to determine whether to pass props as args
// to the mapToProps function being wrapped. It is also used by makePurePropsSelector to determine
// whether mapToProps needs to be invoked when props have changed.
// 
// A length of one signals that mapToProps does not depend on props from the parent component.
// A length of zero is assumed to mean mapToProps is getting args via arguments or ...args and
// therefore not reporting its length accurately..
function getDependsOnOwnProps(mapToProps) {
  return mapToProps.dependsOnOwnProps !== null && mapToProps.dependsOnOwnProps !== undefined ? Boolean(mapToProps.dependsOnOwnProps) : mapToProps.length !== 1;
}

// Used by whenMapStateToPropsIsFunction and whenMapDispatchToPropsIsFunction,
// this function wraps mapToProps in a proxy function which does several things:
// 
//  * Detects whether the mapToProps function being called depends on props, which
//    is used by selectorFactory to decide if it should reinvoke on props changes.
//    
//  * On first call, handles mapToProps if returns another function, and treats that
//    new function as the true mapToProps for subsequent calls.
//    
//  * On first call, verifies the first result is a plain object, in order to warn
//    the developer that their mapToProps function is not returning a valid result.
//    
function wrapMapToPropsFunc(mapToProps, methodName) {
  return function initProxySelector(dispatch, _ref) {
    var displayName = _ref.displayName;

    var proxy = function mapToPropsProxy(stateOrDispatch, ownProps) {
      return proxy.dependsOnOwnProps ? proxy.mapToProps(stateOrDispatch, ownProps) : proxy.mapToProps(stateOrDispatch);
    };

    // allow detectFactoryAndVerify to get ownProps
    proxy.dependsOnOwnProps = true;

    proxy.mapToProps = function detectFactoryAndVerify(stateOrDispatch, ownProps) {
      proxy.mapToProps = mapToProps;
      proxy.dependsOnOwnProps = getDependsOnOwnProps(mapToProps);
      var props = proxy(stateOrDispatch, ownProps);

      if (typeof props === 'function') {
        proxy.mapToProps = props;
        proxy.dependsOnOwnProps = getDependsOnOwnProps(props);
        props = proxy(stateOrDispatch, ownProps);
      }

      if (false) verifyPlainObject(props, displayName, methodName);

      return props;
    };

    return proxy;
  };
}

/***/ }),
/* 62 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export default */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash_es_isPlainObject__ = __webpack_require__(121);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__warning__ = __webpack_require__(30);



function verifyPlainObject(value, displayName, methodName) {
  if (!Object(__WEBPACK_IMPORTED_MODULE_0_lodash_es_isPlainObject__["a" /* default */])(value)) {
    Object(__WEBPACK_IMPORTED_MODULE_1__warning__["a" /* default */])(methodName + '() in ' + displayName + ' must return a plain object. Instead received ' + value + '.');
  }
}

/***/ }),
/* 63 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__root_js__ = __webpack_require__(123);


/** Built-in value references. */
var Symbol = __WEBPACK_IMPORTED_MODULE_0__root_js__["a" /* default */].Symbol;

/* harmony default export */ __webpack_exports__["a"] = (Symbol);


/***/ }),
/* 64 */
/***/ (function(module, exports, __webpack_require__) {

var baseSet = __webpack_require__(142);

/**
 * Sets the value at `path` of `object`. If a portion of `path` doesn't exist,
 * it's created. Arrays are created for missing index properties while objects
 * are created for all other missing properties. Use `_.setWith` to customize
 * `path` creation.
 *
 * **Note:** This method mutates `object`.
 *
 * @static
 * @memberOf _
 * @since 3.7.0
 * @category Object
 * @param {Object} object The object to modify.
 * @param {Array|string} path The path of the property to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns `object`.
 * @example
 *
 * var object = { 'a': [{ 'b': { 'c': 3 } }] };
 *
 * _.set(object, 'a[0].b.c', 4);
 * console.log(object.a[0].b.c);
 * // => 4
 *
 * _.set(object, ['x', '0', 'y', 'z'], 5);
 * console.log(object.x[0].y.z);
 * // => 5
 */
function set(object, path, value) {
  return object == null ? object : baseSet(object, path, value);
}

module.exports = set;


/***/ }),
/* 65 */
/***/ (function(module, exports, __webpack_require__) {

var defineProperty = __webpack_require__(66);

/**
 * The base implementation of `assignValue` and `assignMergeValue` without
 * value checks.
 *
 * @private
 * @param {Object} object The object to modify.
 * @param {string} key The key of the property to assign.
 * @param {*} value The value to assign.
 */
function baseAssignValue(object, key, value) {
  if (key == '__proto__' && defineProperty) {
    defineProperty(object, key, {
      'configurable': true,
      'enumerable': true,
      'value': value,
      'writable': true
    });
  } else {
    object[key] = value;
  }
}

module.exports = baseAssignValue;


/***/ }),
/* 66 */
/***/ (function(module, exports, __webpack_require__) {

var getNative = __webpack_require__(7);

var defineProperty = (function() {
  try {
    var func = getNative(Object, 'defineProperty');
    func({}, '', {});
    return func;
  } catch (e) {}
}());

module.exports = defineProperty;


/***/ }),
/* 67 */
/***/ (function(module, exports, __webpack_require__) {

var baseGetTag = __webpack_require__(8),
    isObject = __webpack_require__(3);

/** `Object#toString` result references. */
var asyncTag = '[object AsyncFunction]',
    funcTag = '[object Function]',
    genTag = '[object GeneratorFunction]',
    proxyTag = '[object Proxy]';

/**
 * Checks if `value` is classified as a `Function` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a function, else `false`.
 * @example
 *
 * _.isFunction(_);
 * // => true
 *
 * _.isFunction(/abc/);
 * // => false
 */
function isFunction(value) {
  if (!isObject(value)) {
    return false;
  }
  // The use of `Object#toString` avoids issues with the `typeof` operator
  // in Safari 9 which returns 'object' for typed arrays and other constructors.
  var tag = baseGetTag(value);
  return tag == funcTag || tag == genTag || tag == asyncTag || tag == proxyTag;
}

module.exports = isFunction;


/***/ }),
/* 68 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {/** Detect free variable `global` from Node.js. */
var freeGlobal = typeof global == 'object' && global && global.Object === Object && global;

module.exports = freeGlobal;

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(9)))

/***/ }),
/* 69 */
/***/ (function(module, exports) {

/** Used for built-in method references. */
var funcProto = Function.prototype;

/** Used to resolve the decompiled source of functions. */
var funcToString = funcProto.toString;

/**
 * Converts `func` to its source code.
 *
 * @private
 * @param {Function} func The function to convert.
 * @returns {string} Returns the source code.
 */
function toSource(func) {
  if (func != null) {
    try {
      return funcToString.call(func);
    } catch (e) {}
    try {
      return (func + '');
    } catch (e) {}
  }
  return '';
}

module.exports = toSource;


/***/ }),
/* 70 */
/***/ (function(module, exports) {

/**
 * A specialized version of `_.map` for arrays without support for iteratee
 * shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the new mapped array.
 */
function arrayMap(array, iteratee) {
  var index = -1,
      length = array == null ? 0 : array.length,
      result = Array(length);

  while (++index < length) {
    result[index] = iteratee(array[index], index, array);
  }
  return result;
}

module.exports = arrayMap;


/***/ }),
/* 71 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return FETCH_GEO; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return FETCH_GEO_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return FETCH_GEO_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return RESET_GEO; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return FETCH_CURRENT_GEO; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return FETCH_CURRENT_GEO_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return FETCH_CURRENT_GEO_FAILURE; });
/* unused harmony export FETCH_GEO_IDS */
/* unused harmony export FETCH_GEO_IDS_SUCCESS */
/* unused harmony export FETCH_GEO_IDS_FAILURE */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return GEO_REDIRECT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CHANGE_CURRENT_GEO; });
var FETCH_GEO='FETCH_GEO';var FETCH_GEO_SUCCESS='FETCH_GEO_SUCCESS';var FETCH_GEO_FAILURE='FETCH_GEO_FAILURE';var RESET_GEO='RESET_GEO';var FETCH_CURRENT_GEO='FETCH_CURRENT_GEO';var FETCH_CURRENT_GEO_SUCCESS='FETCH_CURRENT_GEO_SUCCESS';var FETCH_CURRENT_GEO_FAILURE='FETCH_CURRENT_GEO_FAILURE';var FETCH_GEO_IDS='FETCH_GEO_IDS';var FETCH_GEO_IDS_SUCCESS='FETCH_GEO_IDS_SUCCESS';var FETCH_GEO_IDS_FAILURE='FETCH_GEO_IDS_FAILURE';var GEO_REDIRECT='GEO_REDIRECT';var CHANGE_CURRENT_GEO='CHANGE_CURRENT_GEO';

/***/ }),
/* 72 */
/***/ (function(module, exports, __webpack_require__) {

var baseKeys = __webpack_require__(73),
    getTag = __webpack_require__(13),
    isArguments = __webpack_require__(23),
    isArray = __webpack_require__(1),
    isArrayLike = __webpack_require__(24),
    isBuffer = __webpack_require__(25),
    isPrototype = __webpack_require__(22),
    isTypedArray = __webpack_require__(40);

/** `Object#toString` result references. */
var mapTag = '[object Map]',
    setTag = '[object Set]';

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Checks if `value` is an empty object, collection, map, or set.
 *
 * Objects are considered empty if they have no own enumerable string keyed
 * properties.
 *
 * Array-like values such as `arguments` objects, arrays, buffers, strings, or
 * jQuery-like collections are considered empty if they have a `length` of `0`.
 * Similarly, maps and sets are considered empty if they have a `size` of `0`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is empty, else `false`.
 * @example
 *
 * _.isEmpty(null);
 * // => true
 *
 * _.isEmpty(true);
 * // => true
 *
 * _.isEmpty(1);
 * // => true
 *
 * _.isEmpty([1, 2, 3]);
 * // => false
 *
 * _.isEmpty({ 'a': 1 });
 * // => false
 */
function isEmpty(value) {
  if (value == null) {
    return true;
  }
  if (isArrayLike(value) &&
      (isArray(value) || typeof value == 'string' || typeof value.splice == 'function' ||
        isBuffer(value) || isTypedArray(value) || isArguments(value))) {
    return !value.length;
  }
  var tag = getTag(value);
  if (tag == mapTag || tag == setTag) {
    return !value.size;
  }
  if (isPrototype(value)) {
    return !baseKeys(value).length;
  }
  for (var key in value) {
    if (hasOwnProperty.call(value, key)) {
      return false;
    }
  }
  return true;
}

module.exports = isEmpty;


/***/ }),
/* 73 */
/***/ (function(module, exports, __webpack_require__) {

var isPrototype = __webpack_require__(22),
    nativeKeys = __webpack_require__(177);

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * The base implementation of `_.keys` which doesn't treat sparse arrays as dense.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 */
function baseKeys(object) {
  if (!isPrototype(object)) {
    return nativeKeys(object);
  }
  var result = [];
  for (var key in Object(object)) {
    if (hasOwnProperty.call(object, key) && key != 'constructor') {
      result.push(key);
    }
  }
  return result;
}

module.exports = baseKeys;


/***/ }),
/* 74 */
/***/ (function(module, exports) {

/**
 * Creates a unary function that invokes `func` with its argument transformed.
 *
 * @private
 * @param {Function} func The function to wrap.
 * @param {Function} transform The argument transform.
 * @returns {Function} Returns the new function.
 */
function overArg(func, transform) {
  return function(arg) {
    return func(transform(arg));
  };
}

module.exports = overArg;


/***/ }),
/* 75 */
/***/ (function(module, exports, __webpack_require__) {

var SetCache = __webpack_require__(192),
    arraySome = __webpack_require__(195),
    cacheHas = __webpack_require__(196);

/** Used to compose bitmasks for value comparisons. */
var COMPARE_PARTIAL_FLAG = 1,
    COMPARE_UNORDERED_FLAG = 2;

/**
 * A specialized version of `baseIsEqualDeep` for arrays with support for
 * partial deep comparisons.
 *
 * @private
 * @param {Array} array The array to compare.
 * @param {Array} other The other array to compare.
 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
 * @param {Function} customizer The function to customize comparisons.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Object} stack Tracks traversed `array` and `other` objects.
 * @returns {boolean} Returns `true` if the arrays are equivalent, else `false`.
 */
function equalArrays(array, other, bitmask, customizer, equalFunc, stack) {
  var isPartial = bitmask & COMPARE_PARTIAL_FLAG,
      arrLength = array.length,
      othLength = other.length;

  if (arrLength != othLength && !(isPartial && othLength > arrLength)) {
    return false;
  }
  // Assume cyclic values are equal.
  var stacked = stack.get(array);
  if (stacked && stack.get(other)) {
    return stacked == other;
  }
  var index = -1,
      result = true,
      seen = (bitmask & COMPARE_UNORDERED_FLAG) ? new SetCache : undefined;

  stack.set(array, other);
  stack.set(other, array);

  // Ignore non-index properties.
  while (++index < arrLength) {
    var arrValue = array[index],
        othValue = other[index];

    if (customizer) {
      var compared = isPartial
        ? customizer(othValue, arrValue, index, other, array, stack)
        : customizer(arrValue, othValue, index, array, other, stack);
    }
    if (compared !== undefined) {
      if (compared) {
        continue;
      }
      result = false;
      break;
    }
    // Recursively compare arrays (susceptible to call stack limits).
    if (seen) {
      if (!arraySome(other, function(othValue, othIndex) {
            if (!cacheHas(seen, othIndex) &&
                (arrValue === othValue || equalFunc(arrValue, othValue, bitmask, customizer, stack))) {
              return seen.push(othIndex);
            }
          })) {
        result = false;
        break;
      }
    } else if (!(
          arrValue === othValue ||
            equalFunc(arrValue, othValue, bitmask, customizer, stack)
        )) {
      result = false;
      break;
    }
  }
  stack['delete'](array);
  stack['delete'](other);
  return result;
}

module.exports = equalArrays;


/***/ }),
/* 76 */
/***/ (function(module, exports, __webpack_require__) {

var root = __webpack_require__(2);

/** Built-in value references. */
var Uint8Array = root.Uint8Array;

module.exports = Uint8Array;


/***/ }),
/* 77 */
/***/ (function(module, exports, __webpack_require__) {

var baseGetAllKeys = __webpack_require__(78),
    getSymbols = __webpack_require__(46),
    keys = __webpack_require__(14);

/**
 * Creates an array of own enumerable property names and symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names and symbols.
 */
function getAllKeys(object) {
  return baseGetAllKeys(object, keys, getSymbols);
}

module.exports = getAllKeys;


/***/ }),
/* 78 */
/***/ (function(module, exports, __webpack_require__) {

var arrayPush = __webpack_require__(45),
    isArray = __webpack_require__(1);

/**
 * The base implementation of `getAllKeys` and `getAllKeysIn` which uses
 * `keysFunc` and `symbolsFunc` to get the enumerable property names and
 * symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Function} keysFunc The function to get the keys of `object`.
 * @param {Function} symbolsFunc The function to get the symbols of `object`.
 * @returns {Array} Returns the array of property names and symbols.
 */
function baseGetAllKeys(object, keysFunc, symbolsFunc) {
  var result = keysFunc(object);
  return isArray(object) ? result : arrayPush(result, symbolsFunc(object));
}

module.exports = baseGetAllKeys;


/***/ }),
/* 79 */
/***/ (function(module, exports) {

/**
 * This method returns a new empty array.
 *
 * @static
 * @memberOf _
 * @since 4.13.0
 * @category Util
 * @returns {Array} Returns the new empty array.
 * @example
 *
 * var arrays = _.times(2, _.stubArray);
 *
 * console.log(arrays);
 * // => [[], []]
 *
 * console.log(arrays[0] === arrays[1]);
 * // => false
 */
function stubArray() {
  return [];
}

module.exports = stubArray;


/***/ }),
/* 80 */
/***/ (function(module, exports, __webpack_require__) {

var baseTimes = __webpack_require__(202),
    isArguments = __webpack_require__(23),
    isArray = __webpack_require__(1),
    isBuffer = __webpack_require__(25),
    isIndex = __webpack_require__(37),
    isTypedArray = __webpack_require__(40);

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Creates an array of the enumerable property names of the array-like `value`.
 *
 * @private
 * @param {*} value The value to query.
 * @param {boolean} inherited Specify returning inherited property names.
 * @returns {Array} Returns the array of property names.
 */
function arrayLikeKeys(value, inherited) {
  var isArr = isArray(value),
      isArg = !isArr && isArguments(value),
      isBuff = !isArr && !isArg && isBuffer(value),
      isType = !isArr && !isArg && !isBuff && isTypedArray(value),
      skipIndexes = isArr || isArg || isBuff || isType,
      result = skipIndexes ? baseTimes(value.length, String) : [],
      length = result.length;

  for (var key in value) {
    if ((inherited || hasOwnProperty.call(value, key)) &&
        !(skipIndexes && (
           // Safari 9 has enumerable `arguments.length` in strict mode.
           key == 'length' ||
           // Node.js 0.10 has enumerable non-index properties on buffers.
           (isBuff && (key == 'offset' || key == 'parent')) ||
           // PhantomJS 2 has enumerable non-index properties on typed arrays.
           (isType && (key == 'buffer' || key == 'byteLength' || key == 'byteOffset')) ||
           // Skip index properties.
           isIndex(key, length)
        ))) {
      result.push(key);
    }
  }
  return result;
}

module.exports = arrayLikeKeys;


/***/ }),
/* 81 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(3);

/**
 * Checks if `value` is suitable for strict equality comparisons, i.e. `===`.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` if suitable for strict
 *  equality comparisons, else `false`.
 */
function isStrictComparable(value) {
  return value === value && !isObject(value);
}

module.exports = isStrictComparable;


/***/ }),
/* 82 */
/***/ (function(module, exports) {

/**
 * A specialized version of `matchesProperty` for source values suitable
 * for strict equality comparisons, i.e. `===`.
 *
 * @private
 * @param {string} key The key of the property to get.
 * @param {*} srcValue The value to match.
 * @returns {Function} Returns the new spec function.
 */
function matchesStrictComparable(key, srcValue) {
  return function(object) {
    if (object == null) {
      return false;
    }
    return object[key] === srcValue &&
      (srcValue !== undefined || (key in Object(object)));
  };
}

module.exports = matchesStrictComparable;


/***/ }),
/* 83 */
/***/ (function(module, exports) {

/**
 * This method returns the first argument it receives.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Util
 * @param {*} value Any value.
 * @returns {*} Returns `value`.
 * @example
 *
 * var object = { 'a': 1 };
 *
 * console.log(_.identity(object) === object);
 * // => true
 */
function identity(value) {
  return value;
}

module.exports = identity;


/***/ }),
/* 84 */
/***/ (function(module, exports, __webpack_require__) {

var arrayLikeKeys = __webpack_require__(80),
    baseKeysIn = __webpack_require__(227),
    isArrayLike = __webpack_require__(24);

/**
 * Creates an array of the own and inherited enumerable property names of `object`.
 *
 * **Note:** Non-object values are coerced to objects.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category Object
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 *   this.b = 2;
 * }
 *
 * Foo.prototype.c = 3;
 *
 * _.keysIn(new Foo);
 * // => ['a', 'b', 'c'] (iteration order is not guaranteed)
 */
function keysIn(object) {
  return isArrayLike(object) ? arrayLikeKeys(object, true) : baseKeysIn(object);
}

module.exports = keysIn;


/***/ }),
/* 85 */
/***/ (function(module, exports, __webpack_require__) {

var arrayPush = __webpack_require__(45),
    getPrototype = __webpack_require__(49),
    getSymbols = __webpack_require__(46),
    stubArray = __webpack_require__(79);

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeGetSymbols = Object.getOwnPropertySymbols;

/**
 * Creates an array of the own and inherited enumerable symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of symbols.
 */
var getSymbolsIn = !nativeGetSymbols ? stubArray : function(object) {
  var result = [];
  while (object) {
    arrayPush(result, getSymbols(object));
    object = getPrototype(object);
  }
  return result;
};

module.exports = getSymbolsIn;


/***/ }),
/* 86 */
/***/ (function(module, exports, __webpack_require__) {

var baseGetAllKeys = __webpack_require__(78),
    getSymbolsIn = __webpack_require__(85),
    keysIn = __webpack_require__(84);

/**
 * Creates an array of own and inherited enumerable property names and
 * symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names and symbols.
 */
function getAllKeysIn(object) {
  return baseGetAllKeys(object, keysIn, getSymbolsIn);
}

module.exports = getAllKeysIn;


/***/ }),
/* 87 */
/***/ (function(module, exports, __webpack_require__) {

var baseGetTag = __webpack_require__(8),
    getPrototype = __webpack_require__(49),
    isObjectLike = __webpack_require__(5);

/** `Object#toString` result references. */
var objectTag = '[object Object]';

/** Used for built-in method references. */
var funcProto = Function.prototype,
    objectProto = Object.prototype;

/** Used to resolve the decompiled source of functions. */
var funcToString = funcProto.toString;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/** Used to infer the `Object` constructor. */
var objectCtorString = funcToString.call(Object);

/**
 * Checks if `value` is a plain object, that is, an object created by the
 * `Object` constructor or one with a `[[Prototype]]` of `null`.
 *
 * @static
 * @memberOf _
 * @since 0.8.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a plain object, else `false`.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 * }
 *
 * _.isPlainObject(new Foo);
 * // => false
 *
 * _.isPlainObject([1, 2, 3]);
 * // => false
 *
 * _.isPlainObject({ 'x': 0, 'y': 0 });
 * // => true
 *
 * _.isPlainObject(Object.create(null));
 * // => true
 */
function isPlainObject(value) {
  if (!isObjectLike(value) || baseGetTag(value) != objectTag) {
    return false;
  }
  var proto = getPrototype(value);
  if (proto === null) {
    return true;
  }
  var Ctor = hasOwnProperty.call(proto, 'constructor') && proto.constructor;
  return typeof Ctor == 'function' && Ctor instanceof Ctor &&
    funcToString.call(Ctor) == objectCtorString;
}

module.exports = isPlainObject;


/***/ }),
/* 88 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CHANGE_VACANCIES_FILTER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return RESET_VACANCIES_FILTER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return HIDE_ADDITIONAL_FILTERS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return SHOW_ADDITIONAL_FILTERS; });
/* unused harmony export SAVE_REQUEST_VACANCIES */
var CHANGE_VACANCIES_FILTER='CHANGE_VACANCIES_FILTER';var RESET_VACANCIES_FILTER='RESET_VACANCIES_FILTER';var HIDE_ADDITIONAL_FILTERS='HIDE_ADDITIONAL_FILTERS';var SHOW_ADDITIONAL_FILTERS='SHOW_ADDITIONAL_FILTERS';var SAVE_REQUEST_VACANCIES='SAVE_REQUEST_VACANCIES';

/***/ }),
/* 89 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export geoRedirect */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return detectGeo; });
/* unused harmony export fetchCurrentGeo */
/* unused harmony export fetchGeo */
/* unused harmony export resetGeo */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return changeCurrentGeo; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_utils_api_client__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_constants_actions_geo__ = __webpack_require__(71);
var _slicedToArray=function(){function sliceIterator(arr,i){var _arr=[];var _n=true;var _d=false;var _e=undefined;try{for(var _i=arr[Symbol.iterator](),_s;!(_n=(_s=_i.next()).done);_n=true){_arr.push(_s.value);if(i&&_arr.length===i)break;}}catch(err){_d=true;_e=err;}finally{try{if(!_n&&_i["return"])_i["return"]();}finally{if(_d)throw _e;}}return _arr;}return function(arr,i){if(Array.isArray(arr)){return arr;}else if(Symbol.iterator in Object(arr)){return sliceIterator(arr,i);}else{throw new TypeError("Invalid attempt to destructure non-iterable instance");}};}();var geoRedirect=function geoRedirect(id,url,query){return function(dispatch){__WEBPACK_IMPORTED_MODULE_0_utils_api_client__["a" /* apiV1 */].get('geo/'+id).then(function(json){var _json$geo=_slicedToArray(json.geo,1),geo=_json$geo[0];dispatch({type:__WEBPACK_IMPORTED_MODULE_1_constants_actions_geo__["h" /* GEO_REDIRECT */],payload:{geo:geo,url:url,query:query}});},function(){});};};var processCurrentGeo=function processCurrentGeo(dispatch,promise){dispatch({type:__WEBPACK_IMPORTED_MODULE_1_constants_actions_geo__["b" /* FETCH_CURRENT_GEO */]});return promise.then(function(json){return dispatch({type:__WEBPACK_IMPORTED_MODULE_1_constants_actions_geo__["d" /* FETCH_CURRENT_GEO_SUCCESS */],payload:json});},function(response){return dispatch({type:__WEBPACK_IMPORTED_MODULE_1_constants_actions_geo__["c" /* FETCH_CURRENT_GEO_FAILURE */],payload:{errors:response.errors}});});};var detectGeo=function detectGeo(geoIp){return function(dispatch){return processCurrentGeo(dispatch,__WEBPACK_IMPORTED_MODULE_0_utils_api_client__["a" /* apiV1 */].post('geo/current',{rssr_geo_ip:geoIp}));};};var fetchCurrentGeo=function fetchCurrentGeo(id){return function(dispatch){return processCurrentGeo(dispatch,__WEBPACK_IMPORTED_MODULE_0_utils_api_client__["a" /* apiV1 */].get('geo/'+id));};};var fetchGeo=function fetchGeo(id){return function(dispatch){dispatch({type:__WEBPACK_IMPORTED_MODULE_1_constants_actions_geo__["e" /* FETCH_GEO */],payload:{id:id}});return __WEBPACK_IMPORTED_MODULE_0_utils_api_client__["a" /* apiV1 */].get('geo/'+id).then(function(json){return dispatch({type:__WEBPACK_IMPORTED_MODULE_1_constants_actions_geo__["g" /* FETCH_GEO_SUCCESS */],payload:Object.assign({id:id},json)});},function(response){return dispatch({type:__WEBPACK_IMPORTED_MODULE_1_constants_actions_geo__["f" /* FETCH_GEO_FAILURE */],payload:{id:id,errors:response.errors},error:true});});};};var resetGeo=function resetGeo(){return{type:__WEBPACK_IMPORTED_MODULE_1_constants_actions_geo__["i" /* RESET_GEO */]};};var changeCurrentGeo=function changeCurrentGeo(geo){return{type:__WEBPACK_IMPORTED_MODULE_1_constants_actions_geo__["a" /* CHANGE_CURRENT_GEO */],payload:geo};};

/***/ }),
/* 90 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _request = __webpack_require__(267);

var defaultRequests = {
  get: _request.requestGet,
  post: _request.requestPost,
  patch: _request.requestPatch,
  delete: _request.requestDelete
};
var _default = defaultRequests;
exports.default = _default;
//# sourceMappingURL=requests.js.map

/***/ }),
/* 91 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(3),
    now = __webpack_require__(277),
    toNumber = __webpack_require__(278);

/** Error message constants. */
var FUNC_ERROR_TEXT = 'Expected a function';

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeMax = Math.max,
    nativeMin = Math.min;

/**
 * Creates a debounced function that delays invoking `func` until after `wait`
 * milliseconds have elapsed since the last time the debounced function was
 * invoked. The debounced function comes with a `cancel` method to cancel
 * delayed `func` invocations and a `flush` method to immediately invoke them.
 * Provide `options` to indicate whether `func` should be invoked on the
 * leading and/or trailing edge of the `wait` timeout. The `func` is invoked
 * with the last arguments provided to the debounced function. Subsequent
 * calls to the debounced function return the result of the last `func`
 * invocation.
 *
 * **Note:** If `leading` and `trailing` options are `true`, `func` is
 * invoked on the trailing edge of the timeout only if the debounced function
 * is invoked more than once during the `wait` timeout.
 *
 * If `wait` is `0` and `leading` is `false`, `func` invocation is deferred
 * until to the next tick, similar to `setTimeout` with a timeout of `0`.
 *
 * See [David Corbacho's article](https://css-tricks.com/debouncing-throttling-explained-examples/)
 * for details over the differences between `_.debounce` and `_.throttle`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Function
 * @param {Function} func The function to debounce.
 * @param {number} [wait=0] The number of milliseconds to delay.
 * @param {Object} [options={}] The options object.
 * @param {boolean} [options.leading=false]
 *  Specify invoking on the leading edge of the timeout.
 * @param {number} [options.maxWait]
 *  The maximum time `func` is allowed to be delayed before it's invoked.
 * @param {boolean} [options.trailing=true]
 *  Specify invoking on the trailing edge of the timeout.
 * @returns {Function} Returns the new debounced function.
 * @example
 *
 * // Avoid costly calculations while the window size is in flux.
 * jQuery(window).on('resize', _.debounce(calculateLayout, 150));
 *
 * // Invoke `sendMail` when clicked, debouncing subsequent calls.
 * jQuery(element).on('click', _.debounce(sendMail, 300, {
 *   'leading': true,
 *   'trailing': false
 * }));
 *
 * // Ensure `batchLog` is invoked once after 1 second of debounced calls.
 * var debounced = _.debounce(batchLog, 250, { 'maxWait': 1000 });
 * var source = new EventSource('/stream');
 * jQuery(source).on('message', debounced);
 *
 * // Cancel the trailing debounced invocation.
 * jQuery(window).on('popstate', debounced.cancel);
 */
function debounce(func, wait, options) {
  var lastArgs,
      lastThis,
      maxWait,
      result,
      timerId,
      lastCallTime,
      lastInvokeTime = 0,
      leading = false,
      maxing = false,
      trailing = true;

  if (typeof func != 'function') {
    throw new TypeError(FUNC_ERROR_TEXT);
  }
  wait = toNumber(wait) || 0;
  if (isObject(options)) {
    leading = !!options.leading;
    maxing = 'maxWait' in options;
    maxWait = maxing ? nativeMax(toNumber(options.maxWait) || 0, wait) : maxWait;
    trailing = 'trailing' in options ? !!options.trailing : trailing;
  }

  function invokeFunc(time) {
    var args = lastArgs,
        thisArg = lastThis;

    lastArgs = lastThis = undefined;
    lastInvokeTime = time;
    result = func.apply(thisArg, args);
    return result;
  }

  function leadingEdge(time) {
    // Reset any `maxWait` timer.
    lastInvokeTime = time;
    // Start the timer for the trailing edge.
    timerId = setTimeout(timerExpired, wait);
    // Invoke the leading edge.
    return leading ? invokeFunc(time) : result;
  }

  function remainingWait(time) {
    var timeSinceLastCall = time - lastCallTime,
        timeSinceLastInvoke = time - lastInvokeTime,
        timeWaiting = wait - timeSinceLastCall;

    return maxing
      ? nativeMin(timeWaiting, maxWait - timeSinceLastInvoke)
      : timeWaiting;
  }

  function shouldInvoke(time) {
    var timeSinceLastCall = time - lastCallTime,
        timeSinceLastInvoke = time - lastInvokeTime;

    // Either this is the first call, activity has stopped and we're at the
    // trailing edge, the system time has gone backwards and we're treating
    // it as the trailing edge, or we've hit the `maxWait` limit.
    return (lastCallTime === undefined || (timeSinceLastCall >= wait) ||
      (timeSinceLastCall < 0) || (maxing && timeSinceLastInvoke >= maxWait));
  }

  function timerExpired() {
    var time = now();
    if (shouldInvoke(time)) {
      return trailingEdge(time);
    }
    // Restart the timer.
    timerId = setTimeout(timerExpired, remainingWait(time));
  }

  function trailingEdge(time) {
    timerId = undefined;

    // Only invoke if we have `lastArgs` which means `func` has been
    // debounced at least once.
    if (trailing && lastArgs) {
      return invokeFunc(time);
    }
    lastArgs = lastThis = undefined;
    return result;
  }

  function cancel() {
    if (timerId !== undefined) {
      clearTimeout(timerId);
    }
    lastInvokeTime = 0;
    lastArgs = lastCallTime = lastThis = timerId = undefined;
  }

  function flush() {
    return timerId === undefined ? result : trailingEdge(now());
  }

  function debounced() {
    var time = now(),
        isInvoking = shouldInvoke(time);

    lastArgs = arguments;
    lastThis = this;
    lastCallTime = time;

    if (isInvoking) {
      if (timerId === undefined) {
        return leadingEdge(lastCallTime);
      }
      if (maxing) {
        // Handle invocations in a tight loop.
        timerId = setTimeout(timerExpired, wait);
        return invokeFunc(lastCallTime);
      }
    }
    if (timerId === undefined) {
      timerId = setTimeout(timerExpired, wait);
    }
    return result;
  }
  debounced.cancel = cancel;
  debounced.flush = flush;
  return debounced;
}

module.exports = debounce;


/***/ }),
/* 92 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _default = function _default(input) {
  if (input instanceof Date) {
    return input;
  }

  try {
    return new Date(input.replace(/\+([0-9]{2})([0-9]{2})$/, '+$1:$2'));
  } catch (e) {
    return new Date();
  }
};

exports.default = _default;
//# sourceMappingURL=date.js.map

/***/ }),
/* 93 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__vkontakte_vkui__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__vkontakte_vkui___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__vkontakte_vkui__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__styles_css__ = __webpack_require__(290);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__styles_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__styles_css__);
var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}var SearchModules=function(_React$Component){_inherits(SearchModules,_React$Component);function SearchModules(){_classCallCheck(this,SearchModules);return _possibleConstructorReturn(this,(SearchModules.__proto__||Object.getPrototypeOf(SearchModules)).apply(this,arguments));}_createClass(SearchModules,[{key:'render',value:function render(){return __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]('div',{className:'main-search'},__WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_1__vkontakte_vkui__["Search"],this.props));}}]);return SearchModules;}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);/* harmony default export */ __webpack_exports__["a"] = (SearchModules);

/***/ }),
/* 94 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(95);
module.exports = __webpack_require__(100);


/***/ }),
/* 95 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// @remove-on-eject-begin
/**
 * Copyright (c) 2015-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
// @remove-on-eject-end


if (typeof Promise === 'undefined') {
  // Rejection tracking prevents a common issue where React gets into an
  // inconsistent state due to an error, but it gets swallowed by a Promise,
  // and the user has no idea what causes React's erratic future behavior.
  __webpack_require__(96).enable();
  window.Promise = __webpack_require__(98);
}

// fetch() polyfill for making API calls.
__webpack_require__(99);

// Object.assign() is commonly used with React.
// It will use the native implementation if it's present and isn't buggy.
Object.assign = __webpack_require__(28);

// In tests, polyfill requestAnimationFrame since jsdom doesn't provide it yet.
// We don't polyfill it in the browser--this is user's responsibility.
if (false) {
  require('raf').polyfill(global);
}


/***/ }),
/* 96 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var Promise = __webpack_require__(53);

var DEFAULT_WHITELIST = [
  ReferenceError,
  TypeError,
  RangeError
];

var enabled = false;
exports.disable = disable;
function disable() {
  enabled = false;
  Promise._47 = null;
  Promise._71 = null;
}

exports.enable = enable;
function enable(options) {
  options = options || {};
  if (enabled) disable();
  enabled = true;
  var id = 0;
  var displayId = 0;
  var rejections = {};
  Promise._47 = function (promise) {
    if (
      promise._83 === 2 && // IS REJECTED
      rejections[promise._56]
    ) {
      if (rejections[promise._56].logged) {
        onHandled(promise._56);
      } else {
        clearTimeout(rejections[promise._56].timeout);
      }
      delete rejections[promise._56];
    }
  };
  Promise._71 = function (promise, err) {
    if (promise._75 === 0) { // not yet handled
      promise._56 = id++;
      rejections[promise._56] = {
        displayId: null,
        error: err,
        timeout: setTimeout(
          onUnhandled.bind(null, promise._56),
          // For reference errors and type errors, this almost always
          // means the programmer made a mistake, so log them after just
          // 100ms
          // otherwise, wait 2 seconds to see if they get handled
          matchWhitelist(err, DEFAULT_WHITELIST)
            ? 100
            : 2000
        ),
        logged: false
      };
    }
  };
  function onUnhandled(id) {
    if (
      options.allRejections ||
      matchWhitelist(
        rejections[id].error,
        options.whitelist || DEFAULT_WHITELIST
      )
    ) {
      rejections[id].displayId = displayId++;
      if (options.onUnhandled) {
        rejections[id].logged = true;
        options.onUnhandled(
          rejections[id].displayId,
          rejections[id].error
        );
      } else {
        rejections[id].logged = true;
        logError(
          rejections[id].displayId,
          rejections[id].error
        );
      }
    }
  }
  function onHandled(id) {
    if (rejections[id].logged) {
      if (options.onHandled) {
        options.onHandled(rejections[id].displayId, rejections[id].error);
      } else if (!rejections[id].onUnhandled) {
        console.warn(
          'Promise Rejection Handled (id: ' + rejections[id].displayId + '):'
        );
        console.warn(
          '  This means you can ignore any previous messages of the form "Possible Unhandled Promise Rejection" with id ' +
          rejections[id].displayId + '.'
        );
      }
    }
  }
}

function logError(id, error) {
  console.warn('Possible Unhandled Promise Rejection (id: ' + id + '):');
  var errStr = (error && (error.stack || error)) + '';
  errStr.split('\n').forEach(function (line) {
    console.warn('  ' + line);
  });
}

function matchWhitelist(error, list) {
  return list.some(function (cls) {
    return error instanceof cls;
  });
}

/***/ }),
/* 97 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {

// Use the fastest means possible to execute a task in its own turn, with
// priority over other events including IO, animation, reflow, and redraw
// events in browsers.
//
// An exception thrown by a task will permanently interrupt the processing of
// subsequent tasks. The higher level `asap` function ensures that if an
// exception is thrown by a task, that the task queue will continue flushing as
// soon as possible, but if you use `rawAsap` directly, you are responsible to
// either ensure that no exceptions are thrown from your task, or to manually
// call `rawAsap.requestFlush` if an exception is thrown.
module.exports = rawAsap;
function rawAsap(task) {
    if (!queue.length) {
        requestFlush();
        flushing = true;
    }
    // Equivalent to push, but avoids a function call.
    queue[queue.length] = task;
}

var queue = [];
// Once a flush has been requested, no further calls to `requestFlush` are
// necessary until the next `flush` completes.
var flushing = false;
// `requestFlush` is an implementation-specific method that attempts to kick
// off a `flush` event as quickly as possible. `flush` will attempt to exhaust
// the event queue before yielding to the browser's own event loop.
var requestFlush;
// The position of the next task to execute in the task queue. This is
// preserved between calls to `flush` so that it can be resumed if
// a task throws an exception.
var index = 0;
// If a task schedules additional tasks recursively, the task queue can grow
// unbounded. To prevent memory exhaustion, the task queue will periodically
// truncate already-completed tasks.
var capacity = 1024;

// The flush function processes all tasks that have been scheduled with
// `rawAsap` unless and until one of those tasks throws an exception.
// If a task throws an exception, `flush` ensures that its state will remain
// consistent and will resume where it left off when called again.
// However, `flush` does not make any arrangements to be called again if an
// exception is thrown.
function flush() {
    while (index < queue.length) {
        var currentIndex = index;
        // Advance the index before calling the task. This ensures that we will
        // begin flushing on the next task the task throws an error.
        index = index + 1;
        queue[currentIndex].call();
        // Prevent leaking memory for long chains of recursive calls to `asap`.
        // If we call `asap` within tasks scheduled by `asap`, the queue will
        // grow, but to avoid an O(n) walk for every task we execute, we don't
        // shift tasks off the queue after they have been executed.
        // Instead, we periodically shift 1024 tasks off the queue.
        if (index > capacity) {
            // Manually shift all values starting at the index back to the
            // beginning of the queue.
            for (var scan = 0, newLength = queue.length - index; scan < newLength; scan++) {
                queue[scan] = queue[scan + index];
            }
            queue.length -= index;
            index = 0;
        }
    }
    queue.length = 0;
    index = 0;
    flushing = false;
}

// `requestFlush` is implemented using a strategy based on data collected from
// every available SauceLabs Selenium web driver worker at time of writing.
// https://docs.google.com/spreadsheets/d/1mG-5UYGup5qxGdEMWkhP6BWCz053NUb2E1QoUTU16uA/edit#gid=783724593

// Safari 6 and 6.1 for desktop, iPad, and iPhone are the only browsers that
// have WebKitMutationObserver but not un-prefixed MutationObserver.
// Must use `global` or `self` instead of `window` to work in both frames and web
// workers. `global` is a provision of Browserify, Mr, Mrs, or Mop.

/* globals self */
var scope = typeof global !== "undefined" ? global : self;
var BrowserMutationObserver = scope.MutationObserver || scope.WebKitMutationObserver;

// MutationObservers are desirable because they have high priority and work
// reliably everywhere they are implemented.
// They are implemented in all modern browsers.
//
// - Android 4-4.3
// - Chrome 26-34
// - Firefox 14-29
// - Internet Explorer 11
// - iPad Safari 6-7.1
// - iPhone Safari 7-7.1
// - Safari 6-7
if (typeof BrowserMutationObserver === "function") {
    requestFlush = makeRequestCallFromMutationObserver(flush);

// MessageChannels are desirable because they give direct access to the HTML
// task queue, are implemented in Internet Explorer 10, Safari 5.0-1, and Opera
// 11-12, and in web workers in many engines.
// Although message channels yield to any queued rendering and IO tasks, they
// would be better than imposing the 4ms delay of timers.
// However, they do not work reliably in Internet Explorer or Safari.

// Internet Explorer 10 is the only browser that has setImmediate but does
// not have MutationObservers.
// Although setImmediate yields to the browser's renderer, it would be
// preferrable to falling back to setTimeout since it does not have
// the minimum 4ms penalty.
// Unfortunately there appears to be a bug in Internet Explorer 10 Mobile (and
// Desktop to a lesser extent) that renders both setImmediate and
// MessageChannel useless for the purposes of ASAP.
// https://github.com/kriskowal/q/issues/396

// Timers are implemented universally.
// We fall back to timers in workers in most engines, and in foreground
// contexts in the following browsers.
// However, note that even this simple case requires nuances to operate in a
// broad spectrum of browsers.
//
// - Firefox 3-13
// - Internet Explorer 6-9
// - iPad Safari 4.3
// - Lynx 2.8.7
} else {
    requestFlush = makeRequestCallFromTimer(flush);
}

// `requestFlush` requests that the high priority event queue be flushed as
// soon as possible.
// This is useful to prevent an error thrown in a task from stalling the event
// queue if the exception handled by Node.js’s
// `process.on("uncaughtException")` or by a domain.
rawAsap.requestFlush = requestFlush;

// To request a high priority event, we induce a mutation observer by toggling
// the text of a text node between "1" and "-1".
function makeRequestCallFromMutationObserver(callback) {
    var toggle = 1;
    var observer = new BrowserMutationObserver(callback);
    var node = document.createTextNode("");
    observer.observe(node, {characterData: true});
    return function requestCall() {
        toggle = -toggle;
        node.data = toggle;
    };
}

// The message channel technique was discovered by Malte Ubl and was the
// original foundation for this library.
// http://www.nonblocking.io/2011/06/windownexttick.html

// Safari 6.0.5 (at least) intermittently fails to create message ports on a
// page's first load. Thankfully, this version of Safari supports
// MutationObservers, so we don't need to fall back in that case.

// function makeRequestCallFromMessageChannel(callback) {
//     var channel = new MessageChannel();
//     channel.port1.onmessage = callback;
//     return function requestCall() {
//         channel.port2.postMessage(0);
//     };
// }

// For reasons explained above, we are also unable to use `setImmediate`
// under any circumstances.
// Even if we were, there is another bug in Internet Explorer 10.
// It is not sufficient to assign `setImmediate` to `requestFlush` because
// `setImmediate` must be called *by name* and therefore must be wrapped in a
// closure.
// Never forget.

// function makeRequestCallFromSetImmediate(callback) {
//     return function requestCall() {
//         setImmediate(callback);
//     };
// }

// Safari 6.0 has a problem where timers will get lost while the user is
// scrolling. This problem does not impact ASAP because Safari 6.0 supports
// mutation observers, so that implementation is used instead.
// However, if we ever elect to use timers in Safari, the prevalent work-around
// is to add a scroll event listener that calls for a flush.

// `setTimeout` does not call the passed callback if the delay is less than
// approximately 7 in web workers in Firefox 8 through 18, and sometimes not
// even then.

function makeRequestCallFromTimer(callback) {
    return function requestCall() {
        // We dispatch a timeout with a specified delay of 0 for engines that
        // can reliably accommodate that request. This will usually be snapped
        // to a 4 milisecond delay, but once we're flushing, there's no delay
        // between events.
        var timeoutHandle = setTimeout(handleTimer, 0);
        // However, since this timer gets frequently dropped in Firefox
        // workers, we enlist an interval handle that will try to fire
        // an event 20 times per second until it succeeds.
        var intervalHandle = setInterval(handleTimer, 50);

        function handleTimer() {
            // Whichever timer succeeds will cancel both timers and
            // execute the callback.
            clearTimeout(timeoutHandle);
            clearInterval(intervalHandle);
            callback();
        }
    };
}

// This is for `asap.js` only.
// Its name will be periodically randomized to break any code that depends on
// its existence.
rawAsap.makeRequestCallFromTimer = makeRequestCallFromTimer;

// ASAP was originally a nextTick shim included in Q. This was factored out
// into this ASAP package. It was later adapted to RSVP which made further
// amendments. These decisions, particularly to marginalize MessageChannel and
// to capture the MutationObserver implementation in a closure, were integrated
// back into ASAP proper.
// https://github.com/tildeio/rsvp.js/blob/cddf7232546a9cf858524b75cde6f9edf72620a7/lib/rsvp/asap.js

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(9)))

/***/ }),
/* 98 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


//This file contains the ES6 extensions to the core Promises/A+ API

var Promise = __webpack_require__(53);

module.exports = Promise;

/* Static Functions */

var TRUE = valuePromise(true);
var FALSE = valuePromise(false);
var NULL = valuePromise(null);
var UNDEFINED = valuePromise(undefined);
var ZERO = valuePromise(0);
var EMPTYSTRING = valuePromise('');

function valuePromise(value) {
  var p = new Promise(Promise._44);
  p._83 = 1;
  p._18 = value;
  return p;
}
Promise.resolve = function (value) {
  if (value instanceof Promise) return value;

  if (value === null) return NULL;
  if (value === undefined) return UNDEFINED;
  if (value === true) return TRUE;
  if (value === false) return FALSE;
  if (value === 0) return ZERO;
  if (value === '') return EMPTYSTRING;

  if (typeof value === 'object' || typeof value === 'function') {
    try {
      var then = value.then;
      if (typeof then === 'function') {
        return new Promise(then.bind(value));
      }
    } catch (ex) {
      return new Promise(function (resolve, reject) {
        reject(ex);
      });
    }
  }
  return valuePromise(value);
};

Promise.all = function (arr) {
  var args = Array.prototype.slice.call(arr);

  return new Promise(function (resolve, reject) {
    if (args.length === 0) return resolve([]);
    var remaining = args.length;
    function res(i, val) {
      if (val && (typeof val === 'object' || typeof val === 'function')) {
        if (val instanceof Promise && val.then === Promise.prototype.then) {
          while (val._83 === 3) {
            val = val._18;
          }
          if (val._83 === 1) return res(i, val._18);
          if (val._83 === 2) reject(val._18);
          val.then(function (val) {
            res(i, val);
          }, reject);
          return;
        } else {
          var then = val.then;
          if (typeof then === 'function') {
            var p = new Promise(then.bind(val));
            p.then(function (val) {
              res(i, val);
            }, reject);
            return;
          }
        }
      }
      args[i] = val;
      if (--remaining === 0) {
        resolve(args);
      }
    }
    for (var i = 0; i < args.length; i++) {
      res(i, args[i]);
    }
  });
};

Promise.reject = function (value) {
  return new Promise(function (resolve, reject) {
    reject(value);
  });
};

Promise.race = function (values) {
  return new Promise(function (resolve, reject) {
    values.forEach(function(value){
      Promise.resolve(value).then(resolve, reject);
    });
  });
};

/* Prototype Methods */

Promise.prototype['catch'] = function (onRejected) {
  return this.then(null, onRejected);
};


/***/ }),
/* 99 */
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
    } else if (Array.isArray(headers)) {
      headers.forEach(function(header) {
        this.append(header[0], header[1])
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
    var oldValue = this.map[name]
    this.map[name] = oldValue ? oldValue+','+value : value
  }

  Headers.prototype['delete'] = function(name) {
    delete this.map[normalizeName(name)]
  }

  Headers.prototype.get = function(name) {
    name = normalizeName(name)
    return this.has(name) ? this.map[name] : null
  }

  Headers.prototype.has = function(name) {
    return this.map.hasOwnProperty(normalizeName(name))
  }

  Headers.prototype.set = function(name, value) {
    this.map[normalizeName(name)] = normalizeValue(value)
  }

  Headers.prototype.forEach = function(callback, thisArg) {
    for (var name in this.map) {
      if (this.map.hasOwnProperty(name)) {
        callback.call(thisArg, this.map[name], name, this)
      }
    }
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

    if (input instanceof Request) {
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
    } else {
      this.url = String(input)
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
    rawHeaders.split(/\r?\n/).forEach(function(line) {
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
/* 100 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_dom__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_dom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_dom__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__vkontakte_vkui_connect__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__vkontakte_vkui_connect___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__vkontakte_vkui_connect__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_redux__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_store_configure_store__ = __webpack_require__(134);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__App__ = __webpack_require__(263);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__sw__ = __webpack_require__(299);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__style_css__ = __webpack_require__(300);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__style_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7__style_css__);
var root=document.getElementById('root');// Render
var render=function render(Component){__WEBPACK_IMPORTED_MODULE_1_react_dom___default.a.render(__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_react_redux__["a" /* Provider */],{store:__WEBPACK_IMPORTED_MODULE_4_store_configure_store__["a" /* default */]},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(Component,null)),root);};// Init VK App
__WEBPACK_IMPORTED_MODULE_2__vkontakte_vkui_connect__["send"]('VKWebAppInit',{});render(__WEBPACK_IMPORTED_MODULE_5__App__["a" /* default */]);// Service Worker For Cache
Object(__WEBPACK_IMPORTED_MODULE_6__sw__["a" /* default */])();

/***/ }),
/* 101 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/** @license React v16.4.2
 * react.production.min.js
 *
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var k=__webpack_require__(28),n=__webpack_require__(54),p=__webpack_require__(55),q=__webpack_require__(56),r="function"===typeof Symbol&&Symbol.for,t=r?Symbol.for("react.element"):60103,u=r?Symbol.for("react.portal"):60106,v=r?Symbol.for("react.fragment"):60107,w=r?Symbol.for("react.strict_mode"):60108,x=r?Symbol.for("react.profiler"):60114,y=r?Symbol.for("react.provider"):60109,z=r?Symbol.for("react.context"):60110,A=r?Symbol.for("react.async_mode"):60111,B=
r?Symbol.for("react.forward_ref"):60112;r&&Symbol.for("react.timeout");var C="function"===typeof Symbol&&Symbol.iterator;function D(a){for(var b=arguments.length-1,e="https://reactjs.org/docs/error-decoder.html?invariant="+a,c=0;c<b;c++)e+="&args[]="+encodeURIComponent(arguments[c+1]);n(!1,"Minified React error #"+a+"; visit %s for the full message or use the non-minified dev environment for full errors and additional helpful warnings. ",e)}
var E={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}};function F(a,b,e){this.props=a;this.context=b;this.refs=p;this.updater=e||E}F.prototype.isReactComponent={};F.prototype.setState=function(a,b){"object"!==typeof a&&"function"!==typeof a&&null!=a?D("85"):void 0;this.updater.enqueueSetState(this,a,b,"setState")};F.prototype.forceUpdate=function(a){this.updater.enqueueForceUpdate(this,a,"forceUpdate")};function G(){}
G.prototype=F.prototype;function H(a,b,e){this.props=a;this.context=b;this.refs=p;this.updater=e||E}var I=H.prototype=new G;I.constructor=H;k(I,F.prototype);I.isPureReactComponent=!0;var J={current:null},K=Object.prototype.hasOwnProperty,L={key:!0,ref:!0,__self:!0,__source:!0};
function M(a,b,e){var c=void 0,d={},g=null,h=null;if(null!=b)for(c in void 0!==b.ref&&(h=b.ref),void 0!==b.key&&(g=""+b.key),b)K.call(b,c)&&!L.hasOwnProperty(c)&&(d[c]=b[c]);var f=arguments.length-2;if(1===f)d.children=e;else if(1<f){for(var l=Array(f),m=0;m<f;m++)l[m]=arguments[m+2];d.children=l}if(a&&a.defaultProps)for(c in f=a.defaultProps,f)void 0===d[c]&&(d[c]=f[c]);return{$$typeof:t,type:a,key:g,ref:h,props:d,_owner:J.current}}
function N(a){return"object"===typeof a&&null!==a&&a.$$typeof===t}function escape(a){var b={"=":"=0",":":"=2"};return"$"+(""+a).replace(/[=:]/g,function(a){return b[a]})}var O=/\/+/g,P=[];function Q(a,b,e,c){if(P.length){var d=P.pop();d.result=a;d.keyPrefix=b;d.func=e;d.context=c;d.count=0;return d}return{result:a,keyPrefix:b,func:e,context:c,count:0}}function R(a){a.result=null;a.keyPrefix=null;a.func=null;a.context=null;a.count=0;10>P.length&&P.push(a)}
function S(a,b,e,c){var d=typeof a;if("undefined"===d||"boolean"===d)a=null;var g=!1;if(null===a)g=!0;else switch(d){case "string":case "number":g=!0;break;case "object":switch(a.$$typeof){case t:case u:g=!0}}if(g)return e(c,a,""===b?"."+T(a,0):b),1;g=0;b=""===b?".":b+":";if(Array.isArray(a))for(var h=0;h<a.length;h++){d=a[h];var f=b+T(d,h);g+=S(d,f,e,c)}else if(null===a||"undefined"===typeof a?f=null:(f=C&&a[C]||a["@@iterator"],f="function"===typeof f?f:null),"function"===typeof f)for(a=f.call(a),
h=0;!(d=a.next()).done;)d=d.value,f=b+T(d,h++),g+=S(d,f,e,c);else"object"===d&&(e=""+a,D("31","[object Object]"===e?"object with keys {"+Object.keys(a).join(", ")+"}":e,""));return g}function T(a,b){return"object"===typeof a&&null!==a&&null!=a.key?escape(a.key):b.toString(36)}function U(a,b){a.func.call(a.context,b,a.count++)}
function V(a,b,e){var c=a.result,d=a.keyPrefix;a=a.func.call(a.context,b,a.count++);Array.isArray(a)?W(a,c,e,q.thatReturnsArgument):null!=a&&(N(a)&&(b=d+(!a.key||b&&b.key===a.key?"":(""+a.key).replace(O,"$&/")+"/")+e,a={$$typeof:t,type:a.type,key:b,ref:a.ref,props:a.props,_owner:a._owner}),c.push(a))}function W(a,b,e,c,d){var g="";null!=e&&(g=(""+e).replace(O,"$&/")+"/");b=Q(b,g,c,d);null==a||S(a,"",V,b);R(b)}
var X={Children:{map:function(a,b,e){if(null==a)return a;var c=[];W(a,c,null,b,e);return c},forEach:function(a,b,e){if(null==a)return a;b=Q(null,null,b,e);null==a||S(a,"",U,b);R(b)},count:function(a){return null==a?0:S(a,"",q.thatReturnsNull,null)},toArray:function(a){var b=[];W(a,b,null,q.thatReturnsArgument);return b},only:function(a){N(a)?void 0:D("143");return a}},createRef:function(){return{current:null}},Component:F,PureComponent:H,createContext:function(a,b){void 0===b&&(b=null);a={$$typeof:z,
_calculateChangedBits:b,_defaultValue:a,_currentValue:a,_currentValue2:a,_changedBits:0,_changedBits2:0,Provider:null,Consumer:null};a.Provider={$$typeof:y,_context:a};return a.Consumer=a},forwardRef:function(a){return{$$typeof:B,render:a}},Fragment:v,StrictMode:w,unstable_AsyncMode:A,unstable_Profiler:x,createElement:M,cloneElement:function(a,b,e){null===a||void 0===a?D("267",a):void 0;var c=void 0,d=k({},a.props),g=a.key,h=a.ref,f=a._owner;if(null!=b){void 0!==b.ref&&(h=b.ref,f=J.current);void 0!==
b.key&&(g=""+b.key);var l=void 0;a.type&&a.type.defaultProps&&(l=a.type.defaultProps);for(c in b)K.call(b,c)&&!L.hasOwnProperty(c)&&(d[c]=void 0===b[c]&&void 0!==l?l[c]:b[c])}c=arguments.length-2;if(1===c)d.children=e;else if(1<c){l=Array(c);for(var m=0;m<c;m++)l[m]=arguments[m+2];d.children=l}return{$$typeof:t,type:a.type,key:g,ref:h,props:d,_owner:f}},createFactory:function(a){var b=M.bind(null,a);b.type=a;return b},isValidElement:N,version:"16.4.2",__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED:{ReactCurrentOwner:J,
assign:k}},Y={default:X},Z=Y&&X||Y;module.exports=Z.default?Z.default:Z;


/***/ }),
/* 102 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/** @license React v16.4.2
 * react-dom.production.min.js
 *
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

/*
 Modernizr 3.0.0pre (Custom Build) | MIT
*/
var aa=__webpack_require__(54),ba=__webpack_require__(0),m=__webpack_require__(103),p=__webpack_require__(28),v=__webpack_require__(56),da=__webpack_require__(104),ea=__webpack_require__(105),fa=__webpack_require__(106),ha=__webpack_require__(55);
function A(a){for(var b=arguments.length-1,c="https://reactjs.org/docs/error-decoder.html?invariant="+a,d=0;d<b;d++)c+="&args[]="+encodeURIComponent(arguments[d+1]);aa(!1,"Minified React error #"+a+"; visit %s for the full message or use the non-minified dev environment for full errors and additional helpful warnings. ",c)}ba?void 0:A("227");
function ia(a,b,c,d,e,f,g,h,k){this._hasCaughtError=!1;this._caughtError=null;var n=Array.prototype.slice.call(arguments,3);try{b.apply(c,n)}catch(r){this._caughtError=r,this._hasCaughtError=!0}}
var B={_caughtError:null,_hasCaughtError:!1,_rethrowError:null,_hasRethrowError:!1,invokeGuardedCallback:function(a,b,c,d,e,f,g,h,k){ia.apply(B,arguments)},invokeGuardedCallbackAndCatchFirstError:function(a,b,c,d,e,f,g,h,k){B.invokeGuardedCallback.apply(this,arguments);if(B.hasCaughtError()){var n=B.clearCaughtError();B._hasRethrowError||(B._hasRethrowError=!0,B._rethrowError=n)}},rethrowCaughtError:function(){return ka.apply(B,arguments)},hasCaughtError:function(){return B._hasCaughtError},clearCaughtError:function(){if(B._hasCaughtError){var a=
B._caughtError;B._caughtError=null;B._hasCaughtError=!1;return a}A("198")}};function ka(){if(B._hasRethrowError){var a=B._rethrowError;B._rethrowError=null;B._hasRethrowError=!1;throw a;}}var la=null,ma={};
function na(){if(la)for(var a in ma){var b=ma[a],c=la.indexOf(a);-1<c?void 0:A("96",a);if(!oa[c]){b.extractEvents?void 0:A("97",a);oa[c]=b;c=b.eventTypes;for(var d in c){var e=void 0;var f=c[d],g=b,h=d;pa.hasOwnProperty(h)?A("99",h):void 0;pa[h]=f;var k=f.phasedRegistrationNames;if(k){for(e in k)k.hasOwnProperty(e)&&qa(k[e],g,h);e=!0}else f.registrationName?(qa(f.registrationName,g,h),e=!0):e=!1;e?void 0:A("98",d,a)}}}}
function qa(a,b,c){ra[a]?A("100",a):void 0;ra[a]=b;sa[a]=b.eventTypes[c].dependencies}var oa=[],pa={},ra={},sa={};function ta(a){la?A("101"):void 0;la=Array.prototype.slice.call(a);na()}function ua(a){var b=!1,c;for(c in a)if(a.hasOwnProperty(c)){var d=a[c];ma.hasOwnProperty(c)&&ma[c]===d||(ma[c]?A("102",c):void 0,ma[c]=d,b=!0)}b&&na()}
var va={plugins:oa,eventNameDispatchConfigs:pa,registrationNameModules:ra,registrationNameDependencies:sa,possibleRegistrationNames:null,injectEventPluginOrder:ta,injectEventPluginsByName:ua},wa=null,xa=null,ya=null;function za(a,b,c,d){b=a.type||"unknown-event";a.currentTarget=ya(d);B.invokeGuardedCallbackAndCatchFirstError(b,c,void 0,a);a.currentTarget=null}
function Aa(a,b){null==b?A("30"):void 0;if(null==a)return b;if(Array.isArray(a)){if(Array.isArray(b))return a.push.apply(a,b),a;a.push(b);return a}return Array.isArray(b)?[a].concat(b):[a,b]}function Ba(a,b,c){Array.isArray(a)?a.forEach(b,c):a&&b.call(c,a)}var Ca=null;
function Da(a,b){if(a){var c=a._dispatchListeners,d=a._dispatchInstances;if(Array.isArray(c))for(var e=0;e<c.length&&!a.isPropagationStopped();e++)za(a,b,c[e],d[e]);else c&&za(a,b,c,d);a._dispatchListeners=null;a._dispatchInstances=null;a.isPersistent()||a.constructor.release(a)}}function Ea(a){return Da(a,!0)}function Fa(a){return Da(a,!1)}var Ga={injectEventPluginOrder:ta,injectEventPluginsByName:ua};
function Ha(a,b){var c=a.stateNode;if(!c)return null;var d=wa(c);if(!d)return null;c=d[b];a:switch(b){case "onClick":case "onClickCapture":case "onDoubleClick":case "onDoubleClickCapture":case "onMouseDown":case "onMouseDownCapture":case "onMouseMove":case "onMouseMoveCapture":case "onMouseUp":case "onMouseUpCapture":(d=!d.disabled)||(a=a.type,d=!("button"===a||"input"===a||"select"===a||"textarea"===a));a=!d;break a;default:a=!1}if(a)return null;c&&"function"!==typeof c?A("231",b,typeof c):void 0;
return c}function Ia(a,b){null!==a&&(Ca=Aa(Ca,a));a=Ca;Ca=null;a&&(b?Ba(a,Ea):Ba(a,Fa),Ca?A("95"):void 0,B.rethrowCaughtError())}function Ja(a,b,c,d){for(var e=null,f=0;f<oa.length;f++){var g=oa[f];g&&(g=g.extractEvents(a,b,c,d))&&(e=Aa(e,g))}Ia(e,!1)}var Ka={injection:Ga,getListener:Ha,runEventsInBatch:Ia,runExtractedEventsInBatch:Ja},La=Math.random().toString(36).slice(2),C="__reactInternalInstance$"+La,Ma="__reactEventHandlers$"+La;
function Na(a){if(a[C])return a[C];for(;!a[C];)if(a.parentNode)a=a.parentNode;else return null;a=a[C];return 5===a.tag||6===a.tag?a:null}function Oa(a){if(5===a.tag||6===a.tag)return a.stateNode;A("33")}function Pa(a){return a[Ma]||null}var Qa={precacheFiberNode:function(a,b){b[C]=a},getClosestInstanceFromNode:Na,getInstanceFromNode:function(a){a=a[C];return!a||5!==a.tag&&6!==a.tag?null:a},getNodeFromInstance:Oa,getFiberCurrentPropsFromNode:Pa,updateFiberProps:function(a,b){a[Ma]=b}};
function F(a){do a=a.return;while(a&&5!==a.tag);return a?a:null}function Ra(a,b,c){for(var d=[];a;)d.push(a),a=F(a);for(a=d.length;0<a--;)b(d[a],"captured",c);for(a=0;a<d.length;a++)b(d[a],"bubbled",c)}function Sa(a,b,c){if(b=Ha(a,c.dispatchConfig.phasedRegistrationNames[b]))c._dispatchListeners=Aa(c._dispatchListeners,b),c._dispatchInstances=Aa(c._dispatchInstances,a)}function Ta(a){a&&a.dispatchConfig.phasedRegistrationNames&&Ra(a._targetInst,Sa,a)}
function Ua(a){if(a&&a.dispatchConfig.phasedRegistrationNames){var b=a._targetInst;b=b?F(b):null;Ra(b,Sa,a)}}function Va(a,b,c){a&&c&&c.dispatchConfig.registrationName&&(b=Ha(a,c.dispatchConfig.registrationName))&&(c._dispatchListeners=Aa(c._dispatchListeners,b),c._dispatchInstances=Aa(c._dispatchInstances,a))}function Xa(a){a&&a.dispatchConfig.registrationName&&Va(a._targetInst,null,a)}function Ya(a){Ba(a,Ta)}
function Za(a,b,c,d){if(c&&d)a:{var e=c;for(var f=d,g=0,h=e;h;h=F(h))g++;h=0;for(var k=f;k;k=F(k))h++;for(;0<g-h;)e=F(e),g--;for(;0<h-g;)f=F(f),h--;for(;g--;){if(e===f||e===f.alternate)break a;e=F(e);f=F(f)}e=null}else e=null;f=e;for(e=[];c&&c!==f;){g=c.alternate;if(null!==g&&g===f)break;e.push(c);c=F(c)}for(c=[];d&&d!==f;){g=d.alternate;if(null!==g&&g===f)break;c.push(d);d=F(d)}for(d=0;d<e.length;d++)Va(e[d],"bubbled",a);for(a=c.length;0<a--;)Va(c[a],"captured",b)}
var $a={accumulateTwoPhaseDispatches:Ya,accumulateTwoPhaseDispatchesSkipTarget:function(a){Ba(a,Ua)},accumulateEnterLeaveDispatches:Za,accumulateDirectDispatches:function(a){Ba(a,Xa)}};function ab(a,b){var c={};c[a.toLowerCase()]=b.toLowerCase();c["Webkit"+a]="webkit"+b;c["Moz"+a]="moz"+b;c["ms"+a]="MS"+b;c["O"+a]="o"+b.toLowerCase();return c}
var bb={animationend:ab("Animation","AnimationEnd"),animationiteration:ab("Animation","AnimationIteration"),animationstart:ab("Animation","AnimationStart"),transitionend:ab("Transition","TransitionEnd")},cb={},db={};m.canUseDOM&&(db=document.createElement("div").style,"AnimationEvent"in window||(delete bb.animationend.animation,delete bb.animationiteration.animation,delete bb.animationstart.animation),"TransitionEvent"in window||delete bb.transitionend.transition);
function eb(a){if(cb[a])return cb[a];if(!bb[a])return a;var b=bb[a],c;for(c in b)if(b.hasOwnProperty(c)&&c in db)return cb[a]=b[c];return a}var fb=eb("animationend"),gb=eb("animationiteration"),hb=eb("animationstart"),ib=eb("transitionend"),jb="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),kb=null;
function lb(){!kb&&m.canUseDOM&&(kb="textContent"in document.documentElement?"textContent":"innerText");return kb}var G={_root:null,_startText:null,_fallbackText:null};function mb(){if(G._fallbackText)return G._fallbackText;var a,b=G._startText,c=b.length,d,e=nb(),f=e.length;for(a=0;a<c&&b[a]===e[a];a++);var g=c-a;for(d=1;d<=g&&b[c-d]===e[f-d];d++);G._fallbackText=e.slice(a,1<d?1-d:void 0);return G._fallbackText}function nb(){return"value"in G._root?G._root.value:G._root[lb()]}
var ob="dispatchConfig _targetInst nativeEvent isDefaultPrevented isPropagationStopped _dispatchListeners _dispatchInstances".split(" "),pb={type:null,target:null,currentTarget:v.thatReturnsNull,eventPhase:null,bubbles:null,cancelable:null,timeStamp:function(a){return a.timeStamp||Date.now()},defaultPrevented:null,isTrusted:null};
function H(a,b,c,d){this.dispatchConfig=a;this._targetInst=b;this.nativeEvent=c;a=this.constructor.Interface;for(var e in a)a.hasOwnProperty(e)&&((b=a[e])?this[e]=b(c):"target"===e?this.target=d:this[e]=c[e]);this.isDefaultPrevented=(null!=c.defaultPrevented?c.defaultPrevented:!1===c.returnValue)?v.thatReturnsTrue:v.thatReturnsFalse;this.isPropagationStopped=v.thatReturnsFalse;return this}
p(H.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():"unknown"!==typeof a.returnValue&&(a.returnValue=!1),this.isDefaultPrevented=v.thatReturnsTrue)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():"unknown"!==typeof a.cancelBubble&&(a.cancelBubble=!0),this.isPropagationStopped=v.thatReturnsTrue)},persist:function(){this.isPersistent=v.thatReturnsTrue},isPersistent:v.thatReturnsFalse,
destructor:function(){var a=this.constructor.Interface,b;for(b in a)this[b]=null;for(a=0;a<ob.length;a++)this[ob[a]]=null}});H.Interface=pb;H.extend=function(a){function b(){}function c(){return d.apply(this,arguments)}var d=this;b.prototype=d.prototype;var e=new b;p(e,c.prototype);c.prototype=e;c.prototype.constructor=c;c.Interface=p({},d.Interface,a);c.extend=d.extend;qb(c);return c};qb(H);
function rb(a,b,c,d){if(this.eventPool.length){var e=this.eventPool.pop();this.call(e,a,b,c,d);return e}return new this(a,b,c,d)}function sb(a){a instanceof this?void 0:A("223");a.destructor();10>this.eventPool.length&&this.eventPool.push(a)}function qb(a){a.eventPool=[];a.getPooled=rb;a.release=sb}var tb=H.extend({data:null}),ub=H.extend({data:null}),vb=[9,13,27,32],wb=m.canUseDOM&&"CompositionEvent"in window,xb=null;m.canUseDOM&&"documentMode"in document&&(xb=document.documentMode);
var yb=m.canUseDOM&&"TextEvent"in window&&!xb,zb=m.canUseDOM&&(!wb||xb&&8<xb&&11>=xb),Ab=String.fromCharCode(32),Bb={beforeInput:{phasedRegistrationNames:{bubbled:"onBeforeInput",captured:"onBeforeInputCapture"},dependencies:["compositionend","keypress","textInput","paste"]},compositionEnd:{phasedRegistrationNames:{bubbled:"onCompositionEnd",captured:"onCompositionEndCapture"},dependencies:"blur compositionend keydown keypress keyup mousedown".split(" ")},compositionStart:{phasedRegistrationNames:{bubbled:"onCompositionStart",
captured:"onCompositionStartCapture"},dependencies:"blur compositionstart keydown keypress keyup mousedown".split(" ")},compositionUpdate:{phasedRegistrationNames:{bubbled:"onCompositionUpdate",captured:"onCompositionUpdateCapture"},dependencies:"blur compositionupdate keydown keypress keyup mousedown".split(" ")}},Cb=!1;
function Db(a,b){switch(a){case "keyup":return-1!==vb.indexOf(b.keyCode);case "keydown":return 229!==b.keyCode;case "keypress":case "mousedown":case "blur":return!0;default:return!1}}function Eb(a){a=a.detail;return"object"===typeof a&&"data"in a?a.data:null}var Fb=!1;function Gb(a,b){switch(a){case "compositionend":return Eb(b);case "keypress":if(32!==b.which)return null;Cb=!0;return Ab;case "textInput":return a=b.data,a===Ab&&Cb?null:a;default:return null}}
function Hb(a,b){if(Fb)return"compositionend"===a||!wb&&Db(a,b)?(a=mb(),G._root=null,G._startText=null,G._fallbackText=null,Fb=!1,a):null;switch(a){case "paste":return null;case "keypress":if(!(b.ctrlKey||b.altKey||b.metaKey)||b.ctrlKey&&b.altKey){if(b.char&&1<b.char.length)return b.char;if(b.which)return String.fromCharCode(b.which)}return null;case "compositionend":return zb?null:b.data;default:return null}}
var Ib={eventTypes:Bb,extractEvents:function(a,b,c,d){var e=void 0;var f=void 0;if(wb)b:{switch(a){case "compositionstart":e=Bb.compositionStart;break b;case "compositionend":e=Bb.compositionEnd;break b;case "compositionupdate":e=Bb.compositionUpdate;break b}e=void 0}else Fb?Db(a,c)&&(e=Bb.compositionEnd):"keydown"===a&&229===c.keyCode&&(e=Bb.compositionStart);e?(zb&&(Fb||e!==Bb.compositionStart?e===Bb.compositionEnd&&Fb&&(f=mb()):(G._root=d,G._startText=nb(),Fb=!0)),e=tb.getPooled(e,b,c,d),f?e.data=
f:(f=Eb(c),null!==f&&(e.data=f)),Ya(e),f=e):f=null;(a=yb?Gb(a,c):Hb(a,c))?(b=ub.getPooled(Bb.beforeInput,b,c,d),b.data=a,Ya(b)):b=null;return null===f?b:null===b?f:[f,b]}},Jb=null,Kb={injectFiberControlledHostComponent:function(a){Jb=a}},Lb=null,Mb=null;function Nb(a){if(a=xa(a)){Jb&&"function"===typeof Jb.restoreControlledState?void 0:A("194");var b=wa(a.stateNode);Jb.restoreControlledState(a.stateNode,a.type,b)}}function Ob(a){Lb?Mb?Mb.push(a):Mb=[a]:Lb=a}
function Pb(){return null!==Lb||null!==Mb}function Qb(){if(Lb){var a=Lb,b=Mb;Mb=Lb=null;Nb(a);if(b)for(a=0;a<b.length;a++)Nb(b[a])}}var Rb={injection:Kb,enqueueStateRestore:Ob,needsStateRestore:Pb,restoreStateIfNeeded:Qb};function Sb(a,b){return a(b)}function Tb(a,b,c){return a(b,c)}function Ub(){}var Vb=!1;function Wb(a,b){if(Vb)return a(b);Vb=!0;try{return Sb(a,b)}finally{Vb=!1,Pb()&&(Ub(),Qb())}}
var Xb={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Yb(a){var b=a&&a.nodeName&&a.nodeName.toLowerCase();return"input"===b?!!Xb[a.type]:"textarea"===b?!0:!1}function Zb(a){a=a.target||a.srcElement||window;a.correspondingUseElement&&(a=a.correspondingUseElement);return 3===a.nodeType?a.parentNode:a}
function $b(a,b){if(!m.canUseDOM||b&&!("addEventListener"in document))return!1;a="on"+a;b=a in document;b||(b=document.createElement("div"),b.setAttribute(a,"return;"),b="function"===typeof b[a]);return b}function ac(a){var b=a.type;return(a=a.nodeName)&&"input"===a.toLowerCase()&&("checkbox"===b||"radio"===b)}
function bc(a){var b=ac(a)?"checked":"value",c=Object.getOwnPropertyDescriptor(a.constructor.prototype,b),d=""+a[b];if(!a.hasOwnProperty(b)&&"undefined"!==typeof c&&"function"===typeof c.get&&"function"===typeof c.set){var e=c.get,f=c.set;Object.defineProperty(a,b,{configurable:!0,get:function(){return e.call(this)},set:function(a){d=""+a;f.call(this,a)}});Object.defineProperty(a,b,{enumerable:c.enumerable});return{getValue:function(){return d},setValue:function(a){d=""+a},stopTracking:function(){a._valueTracker=
null;delete a[b]}}}}function cc(a){a._valueTracker||(a._valueTracker=bc(a))}function dc(a){if(!a)return!1;var b=a._valueTracker;if(!b)return!0;var c=b.getValue();var d="";a&&(d=ac(a)?a.checked?"true":"false":a.value);a=d;return a!==c?(b.setValue(a),!0):!1}
var ec=ba.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,fc="function"===typeof Symbol&&Symbol.for,gc=fc?Symbol.for("react.element"):60103,hc=fc?Symbol.for("react.portal"):60106,ic=fc?Symbol.for("react.fragment"):60107,jc=fc?Symbol.for("react.strict_mode"):60108,kc=fc?Symbol.for("react.profiler"):60114,lc=fc?Symbol.for("react.provider"):60109,mc=fc?Symbol.for("react.context"):60110,pc=fc?Symbol.for("react.async_mode"):60111,qc=fc?Symbol.for("react.forward_ref"):60112,rc=fc?Symbol.for("react.timeout"):
60113,sc="function"===typeof Symbol&&Symbol.iterator;function tc(a){if(null===a||"undefined"===typeof a)return null;a=sc&&a[sc]||a["@@iterator"];return"function"===typeof a?a:null}
function uc(a){var b=a.type;if("function"===typeof b)return b.displayName||b.name;if("string"===typeof b)return b;switch(b){case pc:return"AsyncMode";case mc:return"Context.Consumer";case ic:return"ReactFragment";case hc:return"ReactPortal";case kc:return"Profiler("+a.pendingProps.id+")";case lc:return"Context.Provider";case jc:return"StrictMode";case rc:return"Timeout"}if("object"===typeof b&&null!==b)switch(b.$$typeof){case qc:return a=b.render.displayName||b.render.name||"",""!==a?"ForwardRef("+
a+")":"ForwardRef"}return null}function vc(a){var b="";do{a:switch(a.tag){case 0:case 1:case 2:case 5:var c=a._debugOwner,d=a._debugSource;var e=uc(a);var f=null;c&&(f=uc(c));c=d;e="\n    in "+(e||"Unknown")+(c?" (at "+c.fileName.replace(/^.*[\\\/]/,"")+":"+c.lineNumber+")":f?" (created by "+f+")":"");break a;default:e=""}b+=e;a=a.return}while(a);return b}
var wc=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,xc=Object.prototype.hasOwnProperty,zc={},Ac={};
function Bc(a){if(xc.call(Ac,a))return!0;if(xc.call(zc,a))return!1;if(wc.test(a))return Ac[a]=!0;zc[a]=!0;return!1}function Cc(a,b,c,d){if(null!==c&&0===c.type)return!1;switch(typeof b){case "function":case "symbol":return!0;case "boolean":if(d)return!1;if(null!==c)return!c.acceptsBooleans;a=a.toLowerCase().slice(0,5);return"data-"!==a&&"aria-"!==a;default:return!1}}
function Dc(a,b,c,d){if(null===b||"undefined"===typeof b||Cc(a,b,c,d))return!0;if(d)return!1;if(null!==c)switch(c.type){case 3:return!b;case 4:return!1===b;case 5:return isNaN(b);case 6:return isNaN(b)||1>b}return!1}function I(a,b,c,d,e){this.acceptsBooleans=2===b||3===b||4===b;this.attributeName=d;this.attributeNamespace=e;this.mustUseProperty=c;this.propertyName=a;this.type=b}var J={};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(a){J[a]=new I(a,0,!1,a,null)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(a){var b=a[0];J[b]=new I(b,1,!1,a[1],null)});["contentEditable","draggable","spellCheck","value"].forEach(function(a){J[a]=new I(a,2,!1,a.toLowerCase(),null)});
["autoReverse","externalResourcesRequired","preserveAlpha"].forEach(function(a){J[a]=new I(a,2,!1,a,null)});"allowFullScreen async autoFocus autoPlay controls default defer disabled formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(a){J[a]=new I(a,3,!1,a.toLowerCase(),null)});["checked","multiple","muted","selected"].forEach(function(a){J[a]=new I(a,3,!0,a.toLowerCase(),null)});
["capture","download"].forEach(function(a){J[a]=new I(a,4,!1,a.toLowerCase(),null)});["cols","rows","size","span"].forEach(function(a){J[a]=new I(a,6,!1,a.toLowerCase(),null)});["rowSpan","start"].forEach(function(a){J[a]=new I(a,5,!1,a.toLowerCase(),null)});var Ec=/[\-:]([a-z])/g;function Fc(a){return a[1].toUpperCase()}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(a){var b=a.replace(Ec,
Fc);J[b]=new I(b,1,!1,a,null)});"xlink:actuate xlink:arcrole xlink:href xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(a){var b=a.replace(Ec,Fc);J[b]=new I(b,1,!1,a,"http://www.w3.org/1999/xlink")});["xml:base","xml:lang","xml:space"].forEach(function(a){var b=a.replace(Ec,Fc);J[b]=new I(b,1,!1,a,"http://www.w3.org/XML/1998/namespace")});J.tabIndex=new I("tabIndex",1,!1,"tabindex",null);
function Gc(a,b,c,d){var e=J.hasOwnProperty(b)?J[b]:null;var f=null!==e?0===e.type:d?!1:!(2<b.length)||"o"!==b[0]&&"O"!==b[0]||"n"!==b[1]&&"N"!==b[1]?!1:!0;f||(Dc(b,c,e,d)&&(c=null),d||null===e?Bc(b)&&(null===c?a.removeAttribute(b):a.setAttribute(b,""+c)):e.mustUseProperty?a[e.propertyName]=null===c?3===e.type?!1:"":c:(b=e.attributeName,d=e.attributeNamespace,null===c?a.removeAttribute(b):(e=e.type,c=3===e||4===e&&!0===c?"":""+c,d?a.setAttributeNS(d,b,c):a.setAttribute(b,c))))}
function Hc(a,b){var c=b.checked;return p({},b,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:null!=c?c:a._wrapperState.initialChecked})}function Ic(a,b){var c=null==b.defaultValue?"":b.defaultValue,d=null!=b.checked?b.checked:b.defaultChecked;c=Jc(null!=b.value?b.value:c);a._wrapperState={initialChecked:d,initialValue:c,controlled:"checkbox"===b.type||"radio"===b.type?null!=b.checked:null!=b.value}}function Kc(a,b){b=b.checked;null!=b&&Gc(a,"checked",b,!1)}
function Lc(a,b){Kc(a,b);var c=Jc(b.value);if(null!=c)if("number"===b.type){if(0===c&&""===a.value||a.value!=c)a.value=""+c}else a.value!==""+c&&(a.value=""+c);b.hasOwnProperty("value")?Mc(a,b.type,c):b.hasOwnProperty("defaultValue")&&Mc(a,b.type,Jc(b.defaultValue));null==b.checked&&null!=b.defaultChecked&&(a.defaultChecked=!!b.defaultChecked)}
function Nc(a,b,c){if(b.hasOwnProperty("value")||b.hasOwnProperty("defaultValue")){b=""+a._wrapperState.initialValue;var d=a.value;c||b===d||(a.value=b);a.defaultValue=b}c=a.name;""!==c&&(a.name="");a.defaultChecked=!a.defaultChecked;a.defaultChecked=!a.defaultChecked;""!==c&&(a.name=c)}function Mc(a,b,c){if("number"!==b||a.ownerDocument.activeElement!==a)null==c?a.defaultValue=""+a._wrapperState.initialValue:a.defaultValue!==""+c&&(a.defaultValue=""+c)}
function Jc(a){switch(typeof a){case "boolean":case "number":case "object":case "string":case "undefined":return a;default:return""}}var Oc={change:{phasedRegistrationNames:{bubbled:"onChange",captured:"onChangeCapture"},dependencies:"blur change click focus input keydown keyup selectionchange".split(" ")}};function Pc(a,b,c){a=H.getPooled(Oc.change,a,b,c);a.type="change";Ob(c);Ya(a);return a}var Qc=null,Rc=null;function Sc(a){Ia(a,!1)}function Tc(a){var b=Oa(a);if(dc(b))return a}
function Uc(a,b){if("change"===a)return b}var Vc=!1;m.canUseDOM&&(Vc=$b("input")&&(!document.documentMode||9<document.documentMode));function Wc(){Qc&&(Qc.detachEvent("onpropertychange",Xc),Rc=Qc=null)}function Xc(a){"value"===a.propertyName&&Tc(Rc)&&(a=Pc(Rc,a,Zb(a)),Wb(Sc,a))}function Yc(a,b,c){"focus"===a?(Wc(),Qc=b,Rc=c,Qc.attachEvent("onpropertychange",Xc)):"blur"===a&&Wc()}function Zc(a){if("selectionchange"===a||"keyup"===a||"keydown"===a)return Tc(Rc)}
function $c(a,b){if("click"===a)return Tc(b)}function ad(a,b){if("input"===a||"change"===a)return Tc(b)}
var bd={eventTypes:Oc,_isInputEventSupported:Vc,extractEvents:function(a,b,c,d){var e=b?Oa(b):window,f=void 0,g=void 0,h=e.nodeName&&e.nodeName.toLowerCase();"select"===h||"input"===h&&"file"===e.type?f=Uc:Yb(e)?Vc?f=ad:(f=Zc,g=Yc):(h=e.nodeName)&&"input"===h.toLowerCase()&&("checkbox"===e.type||"radio"===e.type)&&(f=$c);if(f&&(f=f(a,b)))return Pc(f,c,d);g&&g(a,e,b);"blur"===a&&(a=e._wrapperState)&&a.controlled&&"number"===e.type&&Mc(e,"number",e.value)}},cd=H.extend({view:null,detail:null}),dd={Alt:"altKey",
Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function ed(a){var b=this.nativeEvent;return b.getModifierState?b.getModifierState(a):(a=dd[a])?!!b[a]:!1}function fd(){return ed}
var gd=cd.extend({screenX:null,screenY:null,clientX:null,clientY:null,pageX:null,pageY:null,ctrlKey:null,shiftKey:null,altKey:null,metaKey:null,getModifierState:fd,button:null,buttons:null,relatedTarget:function(a){return a.relatedTarget||(a.fromElement===a.srcElement?a.toElement:a.fromElement)}}),hd=gd.extend({pointerId:null,width:null,height:null,pressure:null,tiltX:null,tiltY:null,pointerType:null,isPrimary:null}),id={mouseEnter:{registrationName:"onMouseEnter",dependencies:["mouseout","mouseover"]},
mouseLeave:{registrationName:"onMouseLeave",dependencies:["mouseout","mouseover"]},pointerEnter:{registrationName:"onPointerEnter",dependencies:["pointerout","pointerover"]},pointerLeave:{registrationName:"onPointerLeave",dependencies:["pointerout","pointerover"]}},jd={eventTypes:id,extractEvents:function(a,b,c,d){var e="mouseover"===a||"pointerover"===a,f="mouseout"===a||"pointerout"===a;if(e&&(c.relatedTarget||c.fromElement)||!f&&!e)return null;e=d.window===d?d:(e=d.ownerDocument)?e.defaultView||
e.parentWindow:window;f?(f=b,b=(b=c.relatedTarget||c.toElement)?Na(b):null):f=null;if(f===b)return null;var g=void 0,h=void 0,k=void 0,n=void 0;if("mouseout"===a||"mouseover"===a)g=gd,h=id.mouseLeave,k=id.mouseEnter,n="mouse";else if("pointerout"===a||"pointerover"===a)g=hd,h=id.pointerLeave,k=id.pointerEnter,n="pointer";a=null==f?e:Oa(f);e=null==b?e:Oa(b);h=g.getPooled(h,f,c,d);h.type=n+"leave";h.target=a;h.relatedTarget=e;c=g.getPooled(k,b,c,d);c.type=n+"enter";c.target=e;c.relatedTarget=a;Za(h,
c,f,b);return[h,c]}};function kd(a){var b=a;if(a.alternate)for(;b.return;)b=b.return;else{if(0!==(b.effectTag&2))return 1;for(;b.return;)if(b=b.return,0!==(b.effectTag&2))return 1}return 3===b.tag?2:3}function ld(a){2!==kd(a)?A("188"):void 0}
function md(a){var b=a.alternate;if(!b)return b=kd(a),3===b?A("188"):void 0,1===b?null:a;for(var c=a,d=b;;){var e=c.return,f=e?e.alternate:null;if(!e||!f)break;if(e.child===f.child){for(var g=e.child;g;){if(g===c)return ld(e),a;if(g===d)return ld(e),b;g=g.sibling}A("188")}if(c.return!==d.return)c=e,d=f;else{g=!1;for(var h=e.child;h;){if(h===c){g=!0;c=e;d=f;break}if(h===d){g=!0;d=e;c=f;break}h=h.sibling}if(!g){for(h=f.child;h;){if(h===c){g=!0;c=f;d=e;break}if(h===d){g=!0;d=f;c=e;break}h=h.sibling}g?
void 0:A("189")}}c.alternate!==d?A("190"):void 0}3!==c.tag?A("188"):void 0;return c.stateNode.current===c?a:b}function nd(a){a=md(a);if(!a)return null;for(var b=a;;){if(5===b.tag||6===b.tag)return b;if(b.child)b.child.return=b,b=b.child;else{if(b===a)break;for(;!b.sibling;){if(!b.return||b.return===a)return null;b=b.return}b.sibling.return=b.return;b=b.sibling}}return null}
function od(a){a=md(a);if(!a)return null;for(var b=a;;){if(5===b.tag||6===b.tag)return b;if(b.child&&4!==b.tag)b.child.return=b,b=b.child;else{if(b===a)break;for(;!b.sibling;){if(!b.return||b.return===a)return null;b=b.return}b.sibling.return=b.return;b=b.sibling}}return null}var pd=H.extend({animationName:null,elapsedTime:null,pseudoElement:null}),qd=H.extend({clipboardData:function(a){return"clipboardData"in a?a.clipboardData:window.clipboardData}}),rd=cd.extend({relatedTarget:null});
function sd(a){var b=a.keyCode;"charCode"in a?(a=a.charCode,0===a&&13===b&&(a=13)):a=b;10===a&&(a=13);return 32<=a||13===a?a:0}
var td={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},ud={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",
116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},vd=cd.extend({key:function(a){if(a.key){var b=td[a.key]||a.key;if("Unidentified"!==b)return b}return"keypress"===a.type?(a=sd(a),13===a?"Enter":String.fromCharCode(a)):"keydown"===a.type||"keyup"===a.type?ud[a.keyCode]||"Unidentified":""},location:null,ctrlKey:null,shiftKey:null,altKey:null,metaKey:null,repeat:null,locale:null,getModifierState:fd,charCode:function(a){return"keypress"===
a.type?sd(a):0},keyCode:function(a){return"keydown"===a.type||"keyup"===a.type?a.keyCode:0},which:function(a){return"keypress"===a.type?sd(a):"keydown"===a.type||"keyup"===a.type?a.keyCode:0}}),wd=gd.extend({dataTransfer:null}),xd=cd.extend({touches:null,targetTouches:null,changedTouches:null,altKey:null,metaKey:null,ctrlKey:null,shiftKey:null,getModifierState:fd}),yd=H.extend({propertyName:null,elapsedTime:null,pseudoElement:null}),zd=gd.extend({deltaX:function(a){return"deltaX"in a?a.deltaX:"wheelDeltaX"in
a?-a.wheelDeltaX:0},deltaY:function(a){return"deltaY"in a?a.deltaY:"wheelDeltaY"in a?-a.wheelDeltaY:"wheelDelta"in a?-a.wheelDelta:0},deltaZ:null,deltaMode:null}),Ad=[["abort","abort"],[fb,"animationEnd"],[gb,"animationIteration"],[hb,"animationStart"],["canplay","canPlay"],["canplaythrough","canPlayThrough"],["drag","drag"],["dragenter","dragEnter"],["dragexit","dragExit"],["dragleave","dragLeave"],["dragover","dragOver"],["durationchange","durationChange"],["emptied","emptied"],["encrypted","encrypted"],
["ended","ended"],["error","error"],["gotpointercapture","gotPointerCapture"],["load","load"],["loadeddata","loadedData"],["loadedmetadata","loadedMetadata"],["loadstart","loadStart"],["lostpointercapture","lostPointerCapture"],["mousemove","mouseMove"],["mouseout","mouseOut"],["mouseover","mouseOver"],["playing","playing"],["pointermove","pointerMove"],["pointerout","pointerOut"],["pointerover","pointerOver"],["progress","progress"],["scroll","scroll"],["seeking","seeking"],["stalled","stalled"],
["suspend","suspend"],["timeupdate","timeUpdate"],["toggle","toggle"],["touchmove","touchMove"],[ib,"transitionEnd"],["waiting","waiting"],["wheel","wheel"]],Bd={},Cd={};function Dd(a,b){var c=a[0];a=a[1];var d="on"+(a[0].toUpperCase()+a.slice(1));b={phasedRegistrationNames:{bubbled:d,captured:d+"Capture"},dependencies:[c],isInteractive:b};Bd[a]=b;Cd[c]=b}
[["blur","blur"],["cancel","cancel"],["click","click"],["close","close"],["contextmenu","contextMenu"],["copy","copy"],["cut","cut"],["dblclick","doubleClick"],["dragend","dragEnd"],["dragstart","dragStart"],["drop","drop"],["focus","focus"],["input","input"],["invalid","invalid"],["keydown","keyDown"],["keypress","keyPress"],["keyup","keyUp"],["mousedown","mouseDown"],["mouseup","mouseUp"],["paste","paste"],["pause","pause"],["play","play"],["pointercancel","pointerCancel"],["pointerdown","pointerDown"],
["pointerup","pointerUp"],["ratechange","rateChange"],["reset","reset"],["seeked","seeked"],["submit","submit"],["touchcancel","touchCancel"],["touchend","touchEnd"],["touchstart","touchStart"],["volumechange","volumeChange"]].forEach(function(a){Dd(a,!0)});Ad.forEach(function(a){Dd(a,!1)});
var Ed={eventTypes:Bd,isInteractiveTopLevelEventType:function(a){a=Cd[a];return void 0!==a&&!0===a.isInteractive},extractEvents:function(a,b,c,d){var e=Cd[a];if(!e)return null;switch(a){case "keypress":if(0===sd(c))return null;case "keydown":case "keyup":a=vd;break;case "blur":case "focus":a=rd;break;case "click":if(2===c.button)return null;case "dblclick":case "mousedown":case "mousemove":case "mouseup":case "mouseout":case "mouseover":case "contextmenu":a=gd;break;case "drag":case "dragend":case "dragenter":case "dragexit":case "dragleave":case "dragover":case "dragstart":case "drop":a=
wd;break;case "touchcancel":case "touchend":case "touchmove":case "touchstart":a=xd;break;case fb:case gb:case hb:a=pd;break;case ib:a=yd;break;case "scroll":a=cd;break;case "wheel":a=zd;break;case "copy":case "cut":case "paste":a=qd;break;case "gotpointercapture":case "lostpointercapture":case "pointercancel":case "pointerdown":case "pointermove":case "pointerout":case "pointerover":case "pointerup":a=hd;break;default:a=H}b=a.getPooled(e,b,c,d);Ya(b);return b}},Fd=Ed.isInteractiveTopLevelEventType,
Gd=[];function Hd(a){var b=a.targetInst;do{if(!b){a.ancestors.push(b);break}var c;for(c=b;c.return;)c=c.return;c=3!==c.tag?null:c.stateNode.containerInfo;if(!c)break;a.ancestors.push(b);b=Na(c)}while(b);for(c=0;c<a.ancestors.length;c++)b=a.ancestors[c],Ja(a.topLevelType,b,a.nativeEvent,Zb(a.nativeEvent))}var Id=!0;function Kd(a){Id=!!a}function K(a,b){if(!b)return null;var c=(Fd(a)?Ld:Md).bind(null,a);b.addEventListener(a,c,!1)}
function Nd(a,b){if(!b)return null;var c=(Fd(a)?Ld:Md).bind(null,a);b.addEventListener(a,c,!0)}function Ld(a,b){Tb(Md,a,b)}function Md(a,b){if(Id){var c=Zb(b);c=Na(c);null===c||"number"!==typeof c.tag||2===kd(c)||(c=null);if(Gd.length){var d=Gd.pop();d.topLevelType=a;d.nativeEvent=b;d.targetInst=c;a=d}else a={topLevelType:a,nativeEvent:b,targetInst:c,ancestors:[]};try{Wb(Hd,a)}finally{a.topLevelType=null,a.nativeEvent=null,a.targetInst=null,a.ancestors.length=0,10>Gd.length&&Gd.push(a)}}}
var Od={get _enabled(){return Id},setEnabled:Kd,isEnabled:function(){return Id},trapBubbledEvent:K,trapCapturedEvent:Nd,dispatchEvent:Md},Pd={},Qd=0,Rd="_reactListenersID"+(""+Math.random()).slice(2);function Sd(a){Object.prototype.hasOwnProperty.call(a,Rd)||(a[Rd]=Qd++,Pd[a[Rd]]={});return Pd[a[Rd]]}function Td(a){for(;a&&a.firstChild;)a=a.firstChild;return a}
function Ud(a,b){var c=Td(a);a=0;for(var d;c;){if(3===c.nodeType){d=a+c.textContent.length;if(a<=b&&d>=b)return{node:c,offset:b-a};a=d}a:{for(;c;){if(c.nextSibling){c=c.nextSibling;break a}c=c.parentNode}c=void 0}c=Td(c)}}function Vd(a){var b=a&&a.nodeName&&a.nodeName.toLowerCase();return b&&("input"===b&&("text"===a.type||"search"===a.type||"tel"===a.type||"url"===a.type||"password"===a.type)||"textarea"===b||"true"===a.contentEditable)}
var Wd=m.canUseDOM&&"documentMode"in document&&11>=document.documentMode,Xd={select:{phasedRegistrationNames:{bubbled:"onSelect",captured:"onSelectCapture"},dependencies:"blur contextmenu focus keydown keyup mousedown mouseup selectionchange".split(" ")}},Yd=null,Zd=null,$d=null,ae=!1;
function be(a,b){if(ae||null==Yd||Yd!==da())return null;var c=Yd;"selectionStart"in c&&Vd(c)?c={start:c.selectionStart,end:c.selectionEnd}:window.getSelection?(c=window.getSelection(),c={anchorNode:c.anchorNode,anchorOffset:c.anchorOffset,focusNode:c.focusNode,focusOffset:c.focusOffset}):c=void 0;return $d&&ea($d,c)?null:($d=c,a=H.getPooled(Xd.select,Zd,a,b),a.type="select",a.target=Yd,Ya(a),a)}
var ce={eventTypes:Xd,extractEvents:function(a,b,c,d){var e=d.window===d?d.document:9===d.nodeType?d:d.ownerDocument,f;if(!(f=!e)){a:{e=Sd(e);f=sa.onSelect;for(var g=0;g<f.length;g++){var h=f[g];if(!e.hasOwnProperty(h)||!e[h]){e=!1;break a}}e=!0}f=!e}if(f)return null;e=b?Oa(b):window;switch(a){case "focus":if(Yb(e)||"true"===e.contentEditable)Yd=e,Zd=b,$d=null;break;case "blur":$d=Zd=Yd=null;break;case "mousedown":ae=!0;break;case "contextmenu":case "mouseup":return ae=!1,be(c,d);case "selectionchange":if(Wd)break;
case "keydown":case "keyup":return be(c,d)}return null}};Ga.injectEventPluginOrder("ResponderEventPlugin SimpleEventPlugin TapEventPlugin EnterLeaveEventPlugin ChangeEventPlugin SelectEventPlugin BeforeInputEventPlugin".split(" "));wa=Qa.getFiberCurrentPropsFromNode;xa=Qa.getInstanceFromNode;ya=Qa.getNodeFromInstance;Ga.injectEventPluginsByName({SimpleEventPlugin:Ed,EnterLeaveEventPlugin:jd,ChangeEventPlugin:bd,SelectEventPlugin:ce,BeforeInputEventPlugin:Ib});
var de="function"===typeof requestAnimationFrame?requestAnimationFrame:void 0,ee=Date,fe=setTimeout,ge=clearTimeout,he=void 0;if("object"===typeof performance&&"function"===typeof performance.now){var ie=performance;he=function(){return ie.now()}}else he=function(){return ee.now()};var je=void 0,ke=void 0;
if(m.canUseDOM){var le="function"===typeof de?de:function(){A("276")},L=null,me=null,ne=-1,oe=!1,pe=!1,qe=0,re=33,se=33,te={didTimeout:!1,timeRemaining:function(){var a=qe-he();return 0<a?a:0}},ve=function(a,b){var c=a.scheduledCallback,d=!1;try{c(b),d=!0}finally{ke(a),d||(oe=!0,window.postMessage(ue,"*"))}},ue="__reactIdleCallback$"+Math.random().toString(36).slice(2);window.addEventListener("message",function(a){if(a.source===window&&a.data===ue&&(oe=!1,null!==L)){if(null!==L){var b=he();if(!(-1===
ne||ne>b)){a=-1;for(var c=[],d=L;null!==d;){var e=d.timeoutTime;-1!==e&&e<=b?c.push(d):-1!==e&&(-1===a||e<a)&&(a=e);d=d.next}if(0<c.length)for(te.didTimeout=!0,b=0,d=c.length;b<d;b++)ve(c[b],te);ne=a}}for(a=he();0<qe-a&&null!==L;)a=L,te.didTimeout=!1,ve(a,te),a=he();null===L||pe||(pe=!0,le(we))}},!1);var we=function(a){pe=!1;var b=a-qe+se;b<se&&re<se?(8>b&&(b=8),se=b<re?re:b):re=b;qe=a+se;oe||(oe=!0,window.postMessage(ue,"*"))};je=function(a,b){var c=-1;null!=b&&"number"===typeof b.timeout&&(c=he()+
b.timeout);if(-1===ne||-1!==c&&c<ne)ne=c;a={scheduledCallback:a,timeoutTime:c,prev:null,next:null};null===L?L=a:(b=a.prev=me,null!==b&&(b.next=a));me=a;pe||(pe=!0,le(we));return a};ke=function(a){if(null!==a.prev||L===a){var b=a.next,c=a.prev;a.next=null;a.prev=null;null!==b?null!==c?(c.next=b,b.prev=c):(b.prev=null,L=b):null!==c?(c.next=null,me=c):me=L=null}}}else{var xe=new Map;je=function(a){var b={scheduledCallback:a,timeoutTime:0,next:null,prev:null},c=fe(function(){a({timeRemaining:function(){return Infinity},
didTimeout:!1})});xe.set(a,c);return b};ke=function(a){var b=xe.get(a.scheduledCallback);xe.delete(a);ge(b)}}function ye(a){var b="";ba.Children.forEach(a,function(a){null==a||"string"!==typeof a&&"number"!==typeof a||(b+=a)});return b}function ze(a,b){a=p({children:void 0},b);if(b=ye(b.children))a.children=b;return a}
function Ae(a,b,c,d){a=a.options;if(b){b={};for(var e=0;e<c.length;e++)b["$"+c[e]]=!0;for(c=0;c<a.length;c++)e=b.hasOwnProperty("$"+a[c].value),a[c].selected!==e&&(a[c].selected=e),e&&d&&(a[c].defaultSelected=!0)}else{c=""+c;b=null;for(e=0;e<a.length;e++){if(a[e].value===c){a[e].selected=!0;d&&(a[e].defaultSelected=!0);return}null!==b||a[e].disabled||(b=a[e])}null!==b&&(b.selected=!0)}}
function Be(a,b){var c=b.value;a._wrapperState={initialValue:null!=c?c:b.defaultValue,wasMultiple:!!b.multiple}}function Ce(a,b){null!=b.dangerouslySetInnerHTML?A("91"):void 0;return p({},b,{value:void 0,defaultValue:void 0,children:""+a._wrapperState.initialValue})}function De(a,b){var c=b.value;null==c&&(c=b.defaultValue,b=b.children,null!=b&&(null!=c?A("92"):void 0,Array.isArray(b)&&(1>=b.length?void 0:A("93"),b=b[0]),c=""+b),null==c&&(c=""));a._wrapperState={initialValue:""+c}}
function Ee(a,b){var c=b.value;null!=c&&(c=""+c,c!==a.value&&(a.value=c),null==b.defaultValue&&(a.defaultValue=c));null!=b.defaultValue&&(a.defaultValue=b.defaultValue)}function Fe(a){var b=a.textContent;b===a._wrapperState.initialValue&&(a.value=b)}var Ge={html:"http://www.w3.org/1999/xhtml",mathml:"http://www.w3.org/1998/Math/MathML",svg:"http://www.w3.org/2000/svg"};
function He(a){switch(a){case "svg":return"http://www.w3.org/2000/svg";case "math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Ie(a,b){return null==a||"http://www.w3.org/1999/xhtml"===a?He(b):"http://www.w3.org/2000/svg"===a&&"foreignObject"===b?"http://www.w3.org/1999/xhtml":a}
var Je=void 0,Ke=function(a){return"undefined"!==typeof MSApp&&MSApp.execUnsafeLocalFunction?function(b,c,d,e){MSApp.execUnsafeLocalFunction(function(){return a(b,c,d,e)})}:a}(function(a,b){if(a.namespaceURI!==Ge.svg||"innerHTML"in a)a.innerHTML=b;else{Je=Je||document.createElement("div");Je.innerHTML="<svg>"+b+"</svg>";for(b=Je.firstChild;a.firstChild;)a.removeChild(a.firstChild);for(;b.firstChild;)a.appendChild(b.firstChild)}});
function Le(a,b){if(b){var c=a.firstChild;if(c&&c===a.lastChild&&3===c.nodeType){c.nodeValue=b;return}}a.textContent=b}
var Me={animationIterationCount:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,
stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Ne=["Webkit","ms","Moz","O"];Object.keys(Me).forEach(function(a){Ne.forEach(function(b){b=b+a.charAt(0).toUpperCase()+a.substring(1);Me[b]=Me[a]})});
function Oe(a,b){a=a.style;for(var c in b)if(b.hasOwnProperty(c)){var d=0===c.indexOf("--");var e=c;var f=b[c];e=null==f||"boolean"===typeof f||""===f?"":d||"number"!==typeof f||0===f||Me.hasOwnProperty(e)&&Me[e]?(""+f).trim():f+"px";"float"===c&&(c="cssFloat");d?a.setProperty(c,e):a[c]=e}}var Pe=p({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});
function Qe(a,b,c){b&&(Pe[a]&&(null!=b.children||null!=b.dangerouslySetInnerHTML?A("137",a,c()):void 0),null!=b.dangerouslySetInnerHTML&&(null!=b.children?A("60"):void 0,"object"===typeof b.dangerouslySetInnerHTML&&"__html"in b.dangerouslySetInnerHTML?void 0:A("61")),null!=b.style&&"object"!==typeof b.style?A("62",c()):void 0)}
function Re(a,b){if(-1===a.indexOf("-"))return"string"===typeof b.is;switch(a){case "annotation-xml":case "color-profile":case "font-face":case "font-face-src":case "font-face-uri":case "font-face-format":case "font-face-name":case "missing-glyph":return!1;default:return!0}}var Se=v.thatReturns("");
function Te(a,b){a=9===a.nodeType||11===a.nodeType?a:a.ownerDocument;var c=Sd(a);b=sa[b];for(var d=0;d<b.length;d++){var e=b[d];if(!c.hasOwnProperty(e)||!c[e]){switch(e){case "scroll":Nd("scroll",a);break;case "focus":case "blur":Nd("focus",a);Nd("blur",a);c.blur=!0;c.focus=!0;break;case "cancel":case "close":$b(e,!0)&&Nd(e,a);break;case "invalid":case "submit":case "reset":break;default:-1===jb.indexOf(e)&&K(e,a)}c[e]=!0}}}
function Ue(a,b,c,d){c=9===c.nodeType?c:c.ownerDocument;d===Ge.html&&(d=He(a));d===Ge.html?"script"===a?(a=c.createElement("div"),a.innerHTML="<script>\x3c/script>",a=a.removeChild(a.firstChild)):a="string"===typeof b.is?c.createElement(a,{is:b.is}):c.createElement(a):a=c.createElementNS(d,a);return a}function Ve(a,b){return(9===b.nodeType?b:b.ownerDocument).createTextNode(a)}
function We(a,b,c,d){var e=Re(b,c);switch(b){case "iframe":case "object":K("load",a);var f=c;break;case "video":case "audio":for(f=0;f<jb.length;f++)K(jb[f],a);f=c;break;case "source":K("error",a);f=c;break;case "img":case "image":case "link":K("error",a);K("load",a);f=c;break;case "form":K("reset",a);K("submit",a);f=c;break;case "details":K("toggle",a);f=c;break;case "input":Ic(a,c);f=Hc(a,c);K("invalid",a);Te(d,"onChange");break;case "option":f=ze(a,c);break;case "select":Be(a,c);f=p({},c,{value:void 0});
K("invalid",a);Te(d,"onChange");break;case "textarea":De(a,c);f=Ce(a,c);K("invalid",a);Te(d,"onChange");break;default:f=c}Qe(b,f,Se);var g=f,h;for(h in g)if(g.hasOwnProperty(h)){var k=g[h];"style"===h?Oe(a,k,Se):"dangerouslySetInnerHTML"===h?(k=k?k.__html:void 0,null!=k&&Ke(a,k)):"children"===h?"string"===typeof k?("textarea"!==b||""!==k)&&Le(a,k):"number"===typeof k&&Le(a,""+k):"suppressContentEditableWarning"!==h&&"suppressHydrationWarning"!==h&&"autoFocus"!==h&&(ra.hasOwnProperty(h)?null!=k&&Te(d,
h):null!=k&&Gc(a,h,k,e))}switch(b){case "input":cc(a);Nc(a,c,!1);break;case "textarea":cc(a);Fe(a,c);break;case "option":null!=c.value&&a.setAttribute("value",c.value);break;case "select":a.multiple=!!c.multiple;b=c.value;null!=b?Ae(a,!!c.multiple,b,!1):null!=c.defaultValue&&Ae(a,!!c.multiple,c.defaultValue,!0);break;default:"function"===typeof f.onClick&&(a.onclick=v)}}
function Xe(a,b,c,d,e){var f=null;switch(b){case "input":c=Hc(a,c);d=Hc(a,d);f=[];break;case "option":c=ze(a,c);d=ze(a,d);f=[];break;case "select":c=p({},c,{value:void 0});d=p({},d,{value:void 0});f=[];break;case "textarea":c=Ce(a,c);d=Ce(a,d);f=[];break;default:"function"!==typeof c.onClick&&"function"===typeof d.onClick&&(a.onclick=v)}Qe(b,d,Se);b=a=void 0;var g=null;for(a in c)if(!d.hasOwnProperty(a)&&c.hasOwnProperty(a)&&null!=c[a])if("style"===a){var h=c[a];for(b in h)h.hasOwnProperty(b)&&(g||
(g={}),g[b]="")}else"dangerouslySetInnerHTML"!==a&&"children"!==a&&"suppressContentEditableWarning"!==a&&"suppressHydrationWarning"!==a&&"autoFocus"!==a&&(ra.hasOwnProperty(a)?f||(f=[]):(f=f||[]).push(a,null));for(a in d){var k=d[a];h=null!=c?c[a]:void 0;if(d.hasOwnProperty(a)&&k!==h&&(null!=k||null!=h))if("style"===a)if(h){for(b in h)!h.hasOwnProperty(b)||k&&k.hasOwnProperty(b)||(g||(g={}),g[b]="");for(b in k)k.hasOwnProperty(b)&&h[b]!==k[b]&&(g||(g={}),g[b]=k[b])}else g||(f||(f=[]),f.push(a,g)),
g=k;else"dangerouslySetInnerHTML"===a?(k=k?k.__html:void 0,h=h?h.__html:void 0,null!=k&&h!==k&&(f=f||[]).push(a,""+k)):"children"===a?h===k||"string"!==typeof k&&"number"!==typeof k||(f=f||[]).push(a,""+k):"suppressContentEditableWarning"!==a&&"suppressHydrationWarning"!==a&&(ra.hasOwnProperty(a)?(null!=k&&Te(e,a),f||h===k||(f=[])):(f=f||[]).push(a,k))}g&&(f=f||[]).push("style",g);return f}
function Ye(a,b,c,d,e){"input"===c&&"radio"===e.type&&null!=e.name&&Kc(a,e);Re(c,d);d=Re(c,e);for(var f=0;f<b.length;f+=2){var g=b[f],h=b[f+1];"style"===g?Oe(a,h,Se):"dangerouslySetInnerHTML"===g?Ke(a,h):"children"===g?Le(a,h):Gc(a,g,h,d)}switch(c){case "input":Lc(a,e);break;case "textarea":Ee(a,e);break;case "select":a._wrapperState.initialValue=void 0,b=a._wrapperState.wasMultiple,a._wrapperState.wasMultiple=!!e.multiple,c=e.value,null!=c?Ae(a,!!e.multiple,c,!1):b!==!!e.multiple&&(null!=e.defaultValue?
Ae(a,!!e.multiple,e.defaultValue,!0):Ae(a,!!e.multiple,e.multiple?[]:"",!1))}}
function Ze(a,b,c,d,e){switch(b){case "iframe":case "object":K("load",a);break;case "video":case "audio":for(d=0;d<jb.length;d++)K(jb[d],a);break;case "source":K("error",a);break;case "img":case "image":case "link":K("error",a);K("load",a);break;case "form":K("reset",a);K("submit",a);break;case "details":K("toggle",a);break;case "input":Ic(a,c);K("invalid",a);Te(e,"onChange");break;case "select":Be(a,c);K("invalid",a);Te(e,"onChange");break;case "textarea":De(a,c),K("invalid",a),Te(e,"onChange")}Qe(b,
c,Se);d=null;for(var f in c)if(c.hasOwnProperty(f)){var g=c[f];"children"===f?"string"===typeof g?a.textContent!==g&&(d=["children",g]):"number"===typeof g&&a.textContent!==""+g&&(d=["children",""+g]):ra.hasOwnProperty(f)&&null!=g&&Te(e,f)}switch(b){case "input":cc(a);Nc(a,c,!0);break;case "textarea":cc(a);Fe(a,c);break;case "select":case "option":break;default:"function"===typeof c.onClick&&(a.onclick=v)}return d}function $e(a,b){return a.nodeValue!==b}
var af={createElement:Ue,createTextNode:Ve,setInitialProperties:We,diffProperties:Xe,updateProperties:Ye,diffHydratedProperties:Ze,diffHydratedText:$e,warnForUnmatchedText:function(){},warnForDeletedHydratableElement:function(){},warnForDeletedHydratableText:function(){},warnForInsertedHydratedElement:function(){},warnForInsertedHydratedText:function(){},restoreControlledState:function(a,b,c){switch(b){case "input":Lc(a,c);b=c.name;if("radio"===c.type&&null!=b){for(c=a;c.parentNode;)c=c.parentNode;
c=c.querySelectorAll("input[name="+JSON.stringify(""+b)+'][type="radio"]');for(b=0;b<c.length;b++){var d=c[b];if(d!==a&&d.form===a.form){var e=Pa(d);e?void 0:A("90");dc(d);Lc(d,e)}}}break;case "textarea":Ee(a,c);break;case "select":b=c.value,null!=b&&Ae(a,!!c.multiple,b,!1)}}},bf=null,cf=null;function df(a,b){switch(a){case "button":case "input":case "select":case "textarea":return!!b.autoFocus}return!1}
function ef(a,b){return"textarea"===a||"string"===typeof b.children||"number"===typeof b.children||"object"===typeof b.dangerouslySetInnerHTML&&null!==b.dangerouslySetInnerHTML&&"string"===typeof b.dangerouslySetInnerHTML.__html}var ff=he,gf=je,hf=ke;function jf(a){for(a=a.nextSibling;a&&1!==a.nodeType&&3!==a.nodeType;)a=a.nextSibling;return a}function kf(a){for(a=a.firstChild;a&&1!==a.nodeType&&3!==a.nodeType;)a=a.nextSibling;return a}new Set;var lf=[],mf=-1;function nf(a){return{current:a}}
function M(a){0>mf||(a.current=lf[mf],lf[mf]=null,mf--)}function N(a,b){mf++;lf[mf]=a.current;a.current=b}var of=nf(ha),O=nf(!1),pf=ha;function qf(a){return rf(a)?pf:of.current}
function sf(a,b){var c=a.type.contextTypes;if(!c)return ha;var d=a.stateNode;if(d&&d.__reactInternalMemoizedUnmaskedChildContext===b)return d.__reactInternalMemoizedMaskedChildContext;var e={},f;for(f in c)e[f]=b[f];d&&(a=a.stateNode,a.__reactInternalMemoizedUnmaskedChildContext=b,a.__reactInternalMemoizedMaskedChildContext=e);return e}function rf(a){return 2===a.tag&&null!=a.type.childContextTypes}function tf(a){rf(a)&&(M(O,a),M(of,a))}function uf(a){M(O,a);M(of,a)}
function vf(a,b,c){of.current!==ha?A("168"):void 0;N(of,b,a);N(O,c,a)}function wf(a,b){var c=a.stateNode,d=a.type.childContextTypes;if("function"!==typeof c.getChildContext)return b;c=c.getChildContext();for(var e in c)e in d?void 0:A("108",uc(a)||"Unknown",e);return p({},b,c)}function xf(a){if(!rf(a))return!1;var b=a.stateNode;b=b&&b.__reactInternalMemoizedMergedChildContext||ha;pf=of.current;N(of,b,a);N(O,O.current,a);return!0}
function yf(a,b){var c=a.stateNode;c?void 0:A("169");if(b){var d=wf(a,pf);c.__reactInternalMemoizedMergedChildContext=d;M(O,a);M(of,a);N(of,d,a)}else M(O,a);N(O,b,a)}
function zf(a,b,c,d){this.tag=a;this.key=c;this.sibling=this.child=this.return=this.stateNode=this.type=null;this.index=0;this.ref=null;this.pendingProps=b;this.memoizedState=this.updateQueue=this.memoizedProps=null;this.mode=d;this.effectTag=0;this.lastEffect=this.firstEffect=this.nextEffect=null;this.expirationTime=0;this.alternate=null}
function Af(a,b,c){var d=a.alternate;null===d?(d=new zf(a.tag,b,a.key,a.mode),d.type=a.type,d.stateNode=a.stateNode,d.alternate=a,a.alternate=d):(d.pendingProps=b,d.effectTag=0,d.nextEffect=null,d.firstEffect=null,d.lastEffect=null);d.expirationTime=c;d.child=a.child;d.memoizedProps=a.memoizedProps;d.memoizedState=a.memoizedState;d.updateQueue=a.updateQueue;d.sibling=a.sibling;d.index=a.index;d.ref=a.ref;return d}
function Bf(a,b,c){var d=a.type,e=a.key;a=a.props;if("function"===typeof d)var f=d.prototype&&d.prototype.isReactComponent?2:0;else if("string"===typeof d)f=5;else switch(d){case ic:return Cf(a.children,b,c,e);case pc:f=11;b|=3;break;case jc:f=11;b|=2;break;case kc:return d=new zf(15,a,e,b|4),d.type=kc,d.expirationTime=c,d;case rc:f=16;b|=2;break;default:a:{switch("object"===typeof d&&null!==d?d.$$typeof:null){case lc:f=13;break a;case mc:f=12;break a;case qc:f=14;break a;default:A("130",null==d?
d:typeof d,"")}f=void 0}}b=new zf(f,a,e,b);b.type=d;b.expirationTime=c;return b}function Cf(a,b,c,d){a=new zf(10,a,d,b);a.expirationTime=c;return a}function Df(a,b,c){a=new zf(6,a,null,b);a.expirationTime=c;return a}function Ef(a,b,c){b=new zf(4,null!==a.children?a.children:[],a.key,b);b.expirationTime=c;b.stateNode={containerInfo:a.containerInfo,pendingChildren:null,implementation:a.implementation};return b}
function Ff(a,b,c){b=new zf(3,null,null,b?3:0);a={current:b,containerInfo:a,pendingChildren:null,earliestPendingTime:0,latestPendingTime:0,earliestSuspendedTime:0,latestSuspendedTime:0,latestPingedTime:0,pendingCommitExpirationTime:0,finishedWork:null,context:null,pendingContext:null,hydrate:c,remainingExpirationTime:0,firstBatch:null,nextScheduledRoot:null};return b.stateNode=a}var Gf=null,Hf=null;function If(a){return function(b){try{return a(b)}catch(c){}}}
function Jf(a){if("undefined"===typeof __REACT_DEVTOOLS_GLOBAL_HOOK__)return!1;var b=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(b.isDisabled||!b.supportsFiber)return!0;try{var c=b.inject(a);Gf=If(function(a){return b.onCommitFiberRoot(c,a)});Hf=If(function(a){return b.onCommitFiberUnmount(c,a)})}catch(d){}return!0}function Kf(a){"function"===typeof Gf&&Gf(a)}function Lf(a){"function"===typeof Hf&&Hf(a)}var Mf=!1;
function Nf(a){return{expirationTime:0,baseState:a,firstUpdate:null,lastUpdate:null,firstCapturedUpdate:null,lastCapturedUpdate:null,firstEffect:null,lastEffect:null,firstCapturedEffect:null,lastCapturedEffect:null}}function Of(a){return{expirationTime:a.expirationTime,baseState:a.baseState,firstUpdate:a.firstUpdate,lastUpdate:a.lastUpdate,firstCapturedUpdate:null,lastCapturedUpdate:null,firstEffect:null,lastEffect:null,firstCapturedEffect:null,lastCapturedEffect:null}}
function Pf(a){return{expirationTime:a,tag:0,payload:null,callback:null,next:null,nextEffect:null}}function Qf(a,b,c){null===a.lastUpdate?a.firstUpdate=a.lastUpdate=b:(a.lastUpdate.next=b,a.lastUpdate=b);if(0===a.expirationTime||a.expirationTime>c)a.expirationTime=c}
function Rf(a,b,c){var d=a.alternate;if(null===d){var e=a.updateQueue;var f=null;null===e&&(e=a.updateQueue=Nf(a.memoizedState))}else e=a.updateQueue,f=d.updateQueue,null===e?null===f?(e=a.updateQueue=Nf(a.memoizedState),f=d.updateQueue=Nf(d.memoizedState)):e=a.updateQueue=Of(f):null===f&&(f=d.updateQueue=Of(e));null===f||e===f?Qf(e,b,c):null===e.lastUpdate||null===f.lastUpdate?(Qf(e,b,c),Qf(f,b,c)):(Qf(e,b,c),f.lastUpdate=b)}
function Sf(a,b,c){var d=a.updateQueue;d=null===d?a.updateQueue=Nf(a.memoizedState):Tf(a,d);null===d.lastCapturedUpdate?d.firstCapturedUpdate=d.lastCapturedUpdate=b:(d.lastCapturedUpdate.next=b,d.lastCapturedUpdate=b);if(0===d.expirationTime||d.expirationTime>c)d.expirationTime=c}function Tf(a,b){var c=a.alternate;null!==c&&b===c.updateQueue&&(b=a.updateQueue=Of(b));return b}
function Uf(a,b,c,d,e,f){switch(c.tag){case 1:return a=c.payload,"function"===typeof a?a.call(f,d,e):a;case 3:a.effectTag=a.effectTag&-1025|64;case 0:a=c.payload;e="function"===typeof a?a.call(f,d,e):a;if(null===e||void 0===e)break;return p({},d,e);case 2:Mf=!0}return d}
function Vf(a,b,c,d,e){Mf=!1;if(!(0===b.expirationTime||b.expirationTime>e)){b=Tf(a,b);for(var f=b.baseState,g=null,h=0,k=b.firstUpdate,n=f;null!==k;){var r=k.expirationTime;if(r>e){if(null===g&&(g=k,f=n),0===h||h>r)h=r}else n=Uf(a,b,k,n,c,d),null!==k.callback&&(a.effectTag|=32,k.nextEffect=null,null===b.lastEffect?b.firstEffect=b.lastEffect=k:(b.lastEffect.nextEffect=k,b.lastEffect=k));k=k.next}r=null;for(k=b.firstCapturedUpdate;null!==k;){var w=k.expirationTime;if(w>e){if(null===r&&(r=k,null===
g&&(f=n)),0===h||h>w)h=w}else n=Uf(a,b,k,n,c,d),null!==k.callback&&(a.effectTag|=32,k.nextEffect=null,null===b.lastCapturedEffect?b.firstCapturedEffect=b.lastCapturedEffect=k:(b.lastCapturedEffect.nextEffect=k,b.lastCapturedEffect=k));k=k.next}null===g&&(b.lastUpdate=null);null===r?b.lastCapturedUpdate=null:a.effectTag|=32;null===g&&null===r&&(f=n);b.baseState=f;b.firstUpdate=g;b.firstCapturedUpdate=r;b.expirationTime=h;a.memoizedState=n}}
function Wf(a,b){"function"!==typeof a?A("191",a):void 0;a.call(b)}
function Xf(a,b,c){null!==b.firstCapturedUpdate&&(null!==b.lastUpdate&&(b.lastUpdate.next=b.firstCapturedUpdate,b.lastUpdate=b.lastCapturedUpdate),b.firstCapturedUpdate=b.lastCapturedUpdate=null);a=b.firstEffect;for(b.firstEffect=b.lastEffect=null;null!==a;){var d=a.callback;null!==d&&(a.callback=null,Wf(d,c));a=a.nextEffect}a=b.firstCapturedEffect;for(b.firstCapturedEffect=b.lastCapturedEffect=null;null!==a;)b=a.callback,null!==b&&(a.callback=null,Wf(b,c)),a=a.nextEffect}
function Yf(a,b){return{value:a,source:b,stack:vc(b)}}var Zf=nf(null),$f=nf(null),ag=nf(0);function bg(a){var b=a.type._context;N(ag,b._changedBits,a);N($f,b._currentValue,a);N(Zf,a,a);b._currentValue=a.pendingProps.value;b._changedBits=a.stateNode}function cg(a){var b=ag.current,c=$f.current;M(Zf,a);M($f,a);M(ag,a);a=a.type._context;a._currentValue=c;a._changedBits=b}var dg={},eg=nf(dg),fg=nf(dg),gg=nf(dg);function hg(a){a===dg?A("174"):void 0;return a}
function jg(a,b){N(gg,b,a);N(fg,a,a);N(eg,dg,a);var c=b.nodeType;switch(c){case 9:case 11:b=(b=b.documentElement)?b.namespaceURI:Ie(null,"");break;default:c=8===c?b.parentNode:b,b=c.namespaceURI||null,c=c.tagName,b=Ie(b,c)}M(eg,a);N(eg,b,a)}function kg(a){M(eg,a);M(fg,a);M(gg,a)}function lg(a){fg.current===a&&(M(eg,a),M(fg,a))}function mg(a,b,c){var d=a.memoizedState;b=b(c,d);d=null===b||void 0===b?d:p({},d,b);a.memoizedState=d;a=a.updateQueue;null!==a&&0===a.expirationTime&&(a.baseState=d)}
var qg={isMounted:function(a){return(a=a._reactInternalFiber)?2===kd(a):!1},enqueueSetState:function(a,b,c){a=a._reactInternalFiber;var d=ng();d=og(d,a);var e=Pf(d);e.payload=b;void 0!==c&&null!==c&&(e.callback=c);Rf(a,e,d);pg(a,d)},enqueueReplaceState:function(a,b,c){a=a._reactInternalFiber;var d=ng();d=og(d,a);var e=Pf(d);e.tag=1;e.payload=b;void 0!==c&&null!==c&&(e.callback=c);Rf(a,e,d);pg(a,d)},enqueueForceUpdate:function(a,b){a=a._reactInternalFiber;var c=ng();c=og(c,a);var d=Pf(c);d.tag=2;void 0!==
b&&null!==b&&(d.callback=b);Rf(a,d,c);pg(a,c)}};function rg(a,b,c,d,e,f){var g=a.stateNode;a=a.type;return"function"===typeof g.shouldComponentUpdate?g.shouldComponentUpdate(c,e,f):a.prototype&&a.prototype.isPureReactComponent?!ea(b,c)||!ea(d,e):!0}
function sg(a,b,c,d){a=b.state;"function"===typeof b.componentWillReceiveProps&&b.componentWillReceiveProps(c,d);"function"===typeof b.UNSAFE_componentWillReceiveProps&&b.UNSAFE_componentWillReceiveProps(c,d);b.state!==a&&qg.enqueueReplaceState(b,b.state,null)}
function tg(a,b){var c=a.type,d=a.stateNode,e=a.pendingProps,f=qf(a);d.props=e;d.state=a.memoizedState;d.refs=ha;d.context=sf(a,f);f=a.updateQueue;null!==f&&(Vf(a,f,e,d,b),d.state=a.memoizedState);f=a.type.getDerivedStateFromProps;"function"===typeof f&&(mg(a,f,e),d.state=a.memoizedState);"function"===typeof c.getDerivedStateFromProps||"function"===typeof d.getSnapshotBeforeUpdate||"function"!==typeof d.UNSAFE_componentWillMount&&"function"!==typeof d.componentWillMount||(c=d.state,"function"===typeof d.componentWillMount&&
d.componentWillMount(),"function"===typeof d.UNSAFE_componentWillMount&&d.UNSAFE_componentWillMount(),c!==d.state&&qg.enqueueReplaceState(d,d.state,null),f=a.updateQueue,null!==f&&(Vf(a,f,e,d,b),d.state=a.memoizedState));"function"===typeof d.componentDidMount&&(a.effectTag|=4)}var ug=Array.isArray;
function vg(a,b,c){a=c.ref;if(null!==a&&"function"!==typeof a&&"object"!==typeof a){if(c._owner){c=c._owner;var d=void 0;c&&(2!==c.tag?A("110"):void 0,d=c.stateNode);d?void 0:A("147",a);var e=""+a;if(null!==b&&null!==b.ref&&"function"===typeof b.ref&&b.ref._stringRef===e)return b.ref;b=function(a){var b=d.refs===ha?d.refs={}:d.refs;null===a?delete b[e]:b[e]=a};b._stringRef=e;return b}"string"!==typeof a?A("148"):void 0;c._owner?void 0:A("254",a)}return a}
function wg(a,b){"textarea"!==a.type&&A("31","[object Object]"===Object.prototype.toString.call(b)?"object with keys {"+Object.keys(b).join(", ")+"}":b,"")}
function xg(a){function b(b,c){if(a){var d=b.lastEffect;null!==d?(d.nextEffect=c,b.lastEffect=c):b.firstEffect=b.lastEffect=c;c.nextEffect=null;c.effectTag=8}}function c(c,d){if(!a)return null;for(;null!==d;)b(c,d),d=d.sibling;return null}function d(a,b){for(a=new Map;null!==b;)null!==b.key?a.set(b.key,b):a.set(b.index,b),b=b.sibling;return a}function e(a,b,c){a=Af(a,b,c);a.index=0;a.sibling=null;return a}function f(b,c,d){b.index=d;if(!a)return c;d=b.alternate;if(null!==d)return d=d.index,d<c?(b.effectTag=
2,c):d;b.effectTag=2;return c}function g(b){a&&null===b.alternate&&(b.effectTag=2);return b}function h(a,b,c,d){if(null===b||6!==b.tag)return b=Df(c,a.mode,d),b.return=a,b;b=e(b,c,d);b.return=a;return b}function k(a,b,c,d){if(null!==b&&b.type===c.type)return d=e(b,c.props,d),d.ref=vg(a,b,c),d.return=a,d;d=Bf(c,a.mode,d);d.ref=vg(a,b,c);d.return=a;return d}function n(a,b,c,d){if(null===b||4!==b.tag||b.stateNode.containerInfo!==c.containerInfo||b.stateNode.implementation!==c.implementation)return b=
Ef(c,a.mode,d),b.return=a,b;b=e(b,c.children||[],d);b.return=a;return b}function r(a,b,c,d,f){if(null===b||10!==b.tag)return b=Cf(c,a.mode,d,f),b.return=a,b;b=e(b,c,d);b.return=a;return b}function w(a,b,c){if("string"===typeof b||"number"===typeof b)return b=Df(""+b,a.mode,c),b.return=a,b;if("object"===typeof b&&null!==b){switch(b.$$typeof){case gc:return c=Bf(b,a.mode,c),c.ref=vg(a,null,b),c.return=a,c;case hc:return b=Ef(b,a.mode,c),b.return=a,b}if(ug(b)||tc(b))return b=Cf(b,a.mode,c,null),b.return=
a,b;wg(a,b)}return null}function P(a,b,c,d){var e=null!==b?b.key:null;if("string"===typeof c||"number"===typeof c)return null!==e?null:h(a,b,""+c,d);if("object"===typeof c&&null!==c){switch(c.$$typeof){case gc:return c.key===e?c.type===ic?r(a,b,c.props.children,d,e):k(a,b,c,d):null;case hc:return c.key===e?n(a,b,c,d):null}if(ug(c)||tc(c))return null!==e?null:r(a,b,c,d,null);wg(a,c)}return null}function nc(a,b,c,d,e){if("string"===typeof d||"number"===typeof d)return a=a.get(c)||null,h(b,a,""+d,e);
if("object"===typeof d&&null!==d){switch(d.$$typeof){case gc:return a=a.get(null===d.key?c:d.key)||null,d.type===ic?r(b,a,d.props.children,e,d.key):k(b,a,d,e);case hc:return a=a.get(null===d.key?c:d.key)||null,n(b,a,d,e)}if(ug(d)||tc(d))return a=a.get(c)||null,r(b,a,d,e,null);wg(b,d)}return null}function Jd(e,g,h,k){for(var u=null,x=null,t=g,q=g=0,n=null;null!==t&&q<h.length;q++){t.index>q?(n=t,t=null):n=t.sibling;var l=P(e,t,h[q],k);if(null===l){null===t&&(t=n);break}a&&t&&null===l.alternate&&b(e,
t);g=f(l,g,q);null===x?u=l:x.sibling=l;x=l;t=n}if(q===h.length)return c(e,t),u;if(null===t){for(;q<h.length;q++)if(t=w(e,h[q],k))g=f(t,g,q),null===x?u=t:x.sibling=t,x=t;return u}for(t=d(e,t);q<h.length;q++)if(n=nc(t,e,q,h[q],k))a&&null!==n.alternate&&t.delete(null===n.key?q:n.key),g=f(n,g,q),null===x?u=n:x.sibling=n,x=n;a&&t.forEach(function(a){return b(e,a)});return u}function E(e,g,h,k){var u=tc(h);"function"!==typeof u?A("150"):void 0;h=u.call(h);null==h?A("151"):void 0;for(var t=u=null,n=g,x=
g=0,y=null,l=h.next();null!==n&&!l.done;x++,l=h.next()){n.index>x?(y=n,n=null):y=n.sibling;var r=P(e,n,l.value,k);if(null===r){n||(n=y);break}a&&n&&null===r.alternate&&b(e,n);g=f(r,g,x);null===t?u=r:t.sibling=r;t=r;n=y}if(l.done)return c(e,n),u;if(null===n){for(;!l.done;x++,l=h.next())l=w(e,l.value,k),null!==l&&(g=f(l,g,x),null===t?u=l:t.sibling=l,t=l);return u}for(n=d(e,n);!l.done;x++,l=h.next())l=nc(n,e,x,l.value,k),null!==l&&(a&&null!==l.alternate&&n.delete(null===l.key?x:l.key),g=f(l,g,x),null===
t?u=l:t.sibling=l,t=l);a&&n.forEach(function(a){return b(e,a)});return u}return function(a,d,f,h){var k="object"===typeof f&&null!==f&&f.type===ic&&null===f.key;k&&(f=f.props.children);var n="object"===typeof f&&null!==f;if(n)switch(f.$$typeof){case gc:a:{n=f.key;for(k=d;null!==k;){if(k.key===n)if(10===k.tag?f.type===ic:k.type===f.type){c(a,k.sibling);d=e(k,f.type===ic?f.props.children:f.props,h);d.ref=vg(a,k,f);d.return=a;a=d;break a}else{c(a,k);break}else b(a,k);k=k.sibling}f.type===ic?(d=Cf(f.props.children,
a.mode,h,f.key),d.return=a,a=d):(h=Bf(f,a.mode,h),h.ref=vg(a,d,f),h.return=a,a=h)}return g(a);case hc:a:{for(k=f.key;null!==d;){if(d.key===k)if(4===d.tag&&d.stateNode.containerInfo===f.containerInfo&&d.stateNode.implementation===f.implementation){c(a,d.sibling);d=e(d,f.children||[],h);d.return=a;a=d;break a}else{c(a,d);break}else b(a,d);d=d.sibling}d=Ef(f,a.mode,h);d.return=a;a=d}return g(a)}if("string"===typeof f||"number"===typeof f)return f=""+f,null!==d&&6===d.tag?(c(a,d.sibling),d=e(d,f,h),d.return=
a,a=d):(c(a,d),d=Df(f,a.mode,h),d.return=a,a=d),g(a);if(ug(f))return Jd(a,d,f,h);if(tc(f))return E(a,d,f,h);n&&wg(a,f);if("undefined"===typeof f&&!k)switch(a.tag){case 2:case 1:h=a.type,A("152",h.displayName||h.name||"Component")}return c(a,d)}}var yg=xg(!0),zg=xg(!1),Ag=null,Bg=null,Cg=!1;function Dg(a,b){var c=new zf(5,null,null,0);c.type="DELETED";c.stateNode=b;c.return=a;c.effectTag=8;null!==a.lastEffect?(a.lastEffect.nextEffect=c,a.lastEffect=c):a.firstEffect=a.lastEffect=c}
function Eg(a,b){switch(a.tag){case 5:var c=a.type;b=1!==b.nodeType||c.toLowerCase()!==b.nodeName.toLowerCase()?null:b;return null!==b?(a.stateNode=b,!0):!1;case 6:return b=""===a.pendingProps||3!==b.nodeType?null:b,null!==b?(a.stateNode=b,!0):!1;default:return!1}}function Fg(a){if(Cg){var b=Bg;if(b){var c=b;if(!Eg(a,b)){b=jf(c);if(!b||!Eg(a,b)){a.effectTag|=2;Cg=!1;Ag=a;return}Dg(Ag,c)}Ag=a;Bg=kf(b)}else a.effectTag|=2,Cg=!1,Ag=a}}
function Gg(a){for(a=a.return;null!==a&&5!==a.tag&&3!==a.tag;)a=a.return;Ag=a}function Hg(a){if(a!==Ag)return!1;if(!Cg)return Gg(a),Cg=!0,!1;var b=a.type;if(5!==a.tag||"head"!==b&&"body"!==b&&!ef(b,a.memoizedProps))for(b=Bg;b;)Dg(a,b),b=jf(b);Gg(a);Bg=Ag?jf(a.stateNode):null;return!0}function Ig(){Bg=Ag=null;Cg=!1}function Q(a,b,c){Jg(a,b,c,b.expirationTime)}function Jg(a,b,c,d){b.child=null===a?zg(b,null,c,d):yg(b,a.child,c,d)}
function Kg(a,b){var c=b.ref;if(null===a&&null!==c||null!==a&&a.ref!==c)b.effectTag|=128}function Lg(a,b,c,d,e){Kg(a,b);var f=0!==(b.effectTag&64);if(!c&&!f)return d&&yf(b,!1),R(a,b);c=b.stateNode;ec.current=b;var g=f?null:c.render();b.effectTag|=1;f&&(Jg(a,b,null,e),b.child=null);Jg(a,b,g,e);b.memoizedState=c.state;b.memoizedProps=c.props;d&&yf(b,!0);return b.child}
function Mg(a){var b=a.stateNode;b.pendingContext?vf(a,b.pendingContext,b.pendingContext!==b.context):b.context&&vf(a,b.context,!1);jg(a,b.containerInfo)}
function Ng(a,b,c,d){var e=a.child;null!==e&&(e.return=a);for(;null!==e;){switch(e.tag){case 12:var f=e.stateNode|0;if(e.type===b&&0!==(f&c)){for(f=e;null!==f;){var g=f.alternate;if(0===f.expirationTime||f.expirationTime>d)f.expirationTime=d,null!==g&&(0===g.expirationTime||g.expirationTime>d)&&(g.expirationTime=d);else if(null!==g&&(0===g.expirationTime||g.expirationTime>d))g.expirationTime=d;else break;f=f.return}f=null}else f=e.child;break;case 13:f=e.type===a.type?null:e.child;break;default:f=
e.child}if(null!==f)f.return=e;else for(f=e;null!==f;){if(f===a){f=null;break}e=f.sibling;if(null!==e){e.return=f.return;f=e;break}f=f.return}e=f}}
function Rg(a,b,c){var d=b.type._context,e=b.pendingProps,f=b.memoizedProps,g=!0;if(O.current)g=!1;else if(f===e)return b.stateNode=0,bg(b),R(a,b);var h=e.value;b.memoizedProps=e;if(null===f)h=1073741823;else if(f.value===e.value){if(f.children===e.children&&g)return b.stateNode=0,bg(b),R(a,b);h=0}else{var k=f.value;if(k===h&&(0!==k||1/k===1/h)||k!==k&&h!==h){if(f.children===e.children&&g)return b.stateNode=0,bg(b),R(a,b);h=0}else if(h="function"===typeof d._calculateChangedBits?d._calculateChangedBits(k,
h):1073741823,h|=0,0===h){if(f.children===e.children&&g)return b.stateNode=0,bg(b),R(a,b)}else Ng(b,d,h,c)}b.stateNode=h;bg(b);Q(a,b,e.children);return b.child}function R(a,b){null!==a&&b.child!==a.child?A("153"):void 0;if(null!==b.child){a=b.child;var c=Af(a,a.pendingProps,a.expirationTime);b.child=c;for(c.return=b;null!==a.sibling;)a=a.sibling,c=c.sibling=Af(a,a.pendingProps,a.expirationTime),c.return=b;c.sibling=null}return b.child}
function Sg(a,b,c){if(0===b.expirationTime||b.expirationTime>c){switch(b.tag){case 3:Mg(b);break;case 2:xf(b);break;case 4:jg(b,b.stateNode.containerInfo);break;case 13:bg(b)}return null}switch(b.tag){case 0:null!==a?A("155"):void 0;var d=b.type,e=b.pendingProps,f=qf(b);f=sf(b,f);d=d(e,f);b.effectTag|=1;"object"===typeof d&&null!==d&&"function"===typeof d.render&&void 0===d.$$typeof?(f=b.type,b.tag=2,b.memoizedState=null!==d.state&&void 0!==d.state?d.state:null,f=f.getDerivedStateFromProps,"function"===
typeof f&&mg(b,f,e),e=xf(b),d.updater=qg,b.stateNode=d,d._reactInternalFiber=b,tg(b,c),a=Lg(a,b,!0,e,c)):(b.tag=1,Q(a,b,d),b.memoizedProps=e,a=b.child);return a;case 1:return e=b.type,c=b.pendingProps,O.current||b.memoizedProps!==c?(d=qf(b),d=sf(b,d),e=e(c,d),b.effectTag|=1,Q(a,b,e),b.memoizedProps=c,a=b.child):a=R(a,b),a;case 2:e=xf(b);if(null===a)if(null===b.stateNode){var g=b.pendingProps,h=b.type;d=qf(b);var k=2===b.tag&&null!=b.type.contextTypes;f=k?sf(b,d):ha;g=new h(g,f);b.memoizedState=null!==
g.state&&void 0!==g.state?g.state:null;g.updater=qg;b.stateNode=g;g._reactInternalFiber=b;k&&(k=b.stateNode,k.__reactInternalMemoizedUnmaskedChildContext=d,k.__reactInternalMemoizedMaskedChildContext=f);tg(b,c);d=!0}else{h=b.type;d=b.stateNode;k=b.memoizedProps;f=b.pendingProps;d.props=k;var n=d.context;g=qf(b);g=sf(b,g);var r=h.getDerivedStateFromProps;(h="function"===typeof r||"function"===typeof d.getSnapshotBeforeUpdate)||"function"!==typeof d.UNSAFE_componentWillReceiveProps&&"function"!==typeof d.componentWillReceiveProps||
(k!==f||n!==g)&&sg(b,d,f,g);Mf=!1;var w=b.memoizedState;n=d.state=w;var P=b.updateQueue;null!==P&&(Vf(b,P,f,d,c),n=b.memoizedState);k!==f||w!==n||O.current||Mf?("function"===typeof r&&(mg(b,r,f),n=b.memoizedState),(k=Mf||rg(b,k,f,w,n,g))?(h||"function"!==typeof d.UNSAFE_componentWillMount&&"function"!==typeof d.componentWillMount||("function"===typeof d.componentWillMount&&d.componentWillMount(),"function"===typeof d.UNSAFE_componentWillMount&&d.UNSAFE_componentWillMount()),"function"===typeof d.componentDidMount&&
(b.effectTag|=4)):("function"===typeof d.componentDidMount&&(b.effectTag|=4),b.memoizedProps=f,b.memoizedState=n),d.props=f,d.state=n,d.context=g,d=k):("function"===typeof d.componentDidMount&&(b.effectTag|=4),d=!1)}else h=b.type,d=b.stateNode,f=b.memoizedProps,k=b.pendingProps,d.props=f,n=d.context,g=qf(b),g=sf(b,g),r=h.getDerivedStateFromProps,(h="function"===typeof r||"function"===typeof d.getSnapshotBeforeUpdate)||"function"!==typeof d.UNSAFE_componentWillReceiveProps&&"function"!==typeof d.componentWillReceiveProps||
(f!==k||n!==g)&&sg(b,d,k,g),Mf=!1,n=b.memoizedState,w=d.state=n,P=b.updateQueue,null!==P&&(Vf(b,P,k,d,c),w=b.memoizedState),f!==k||n!==w||O.current||Mf?("function"===typeof r&&(mg(b,r,k),w=b.memoizedState),(r=Mf||rg(b,f,k,n,w,g))?(h||"function"!==typeof d.UNSAFE_componentWillUpdate&&"function"!==typeof d.componentWillUpdate||("function"===typeof d.componentWillUpdate&&d.componentWillUpdate(k,w,g),"function"===typeof d.UNSAFE_componentWillUpdate&&d.UNSAFE_componentWillUpdate(k,w,g)),"function"===typeof d.componentDidUpdate&&
(b.effectTag|=4),"function"===typeof d.getSnapshotBeforeUpdate&&(b.effectTag|=256)):("function"!==typeof d.componentDidUpdate||f===a.memoizedProps&&n===a.memoizedState||(b.effectTag|=4),"function"!==typeof d.getSnapshotBeforeUpdate||f===a.memoizedProps&&n===a.memoizedState||(b.effectTag|=256),b.memoizedProps=k,b.memoizedState=w),d.props=k,d.state=w,d.context=g,d=r):("function"!==typeof d.componentDidUpdate||f===a.memoizedProps&&n===a.memoizedState||(b.effectTag|=4),"function"!==typeof d.getSnapshotBeforeUpdate||
f===a.memoizedProps&&n===a.memoizedState||(b.effectTag|=256),d=!1);return Lg(a,b,d,e,c);case 3:Mg(b);e=b.updateQueue;if(null!==e)if(d=b.memoizedState,d=null!==d?d.element:null,Vf(b,e,b.pendingProps,null,c),e=b.memoizedState.element,e===d)Ig(),a=R(a,b);else{d=b.stateNode;if(d=(null===a||null===a.child)&&d.hydrate)Bg=kf(b.stateNode.containerInfo),Ag=b,d=Cg=!0;d?(b.effectTag|=2,b.child=zg(b,null,e,c)):(Ig(),Q(a,b,e));a=b.child}else Ig(),a=R(a,b);return a;case 5:a:{hg(gg.current);e=hg(eg.current);d=Ie(e,
b.type);e!==d&&(N(fg,b,b),N(eg,d,b));null===a&&Fg(b);e=b.type;k=b.memoizedProps;d=b.pendingProps;f=null!==a?a.memoizedProps:null;if(!O.current&&k===d){if(k=b.mode&1&&!!d.hidden)b.expirationTime=1073741823;if(!k||1073741823!==c){a=R(a,b);break a}}k=d.children;ef(e,d)?k=null:f&&ef(e,f)&&(b.effectTag|=16);Kg(a,b);1073741823!==c&&b.mode&1&&d.hidden?(b.expirationTime=1073741823,b.memoizedProps=d,a=null):(Q(a,b,k),b.memoizedProps=d,a=b.child)}return a;case 6:return null===a&&Fg(b),b.memoizedProps=b.pendingProps,
null;case 16:return null;case 4:return jg(b,b.stateNode.containerInfo),e=b.pendingProps,O.current||b.memoizedProps!==e?(null===a?b.child=yg(b,null,e,c):Q(a,b,e),b.memoizedProps=e,a=b.child):a=R(a,b),a;case 14:return e=b.type.render,c=b.pendingProps,d=b.ref,O.current||b.memoizedProps!==c||d!==(null!==a?a.ref:null)?(e=e(c,d),Q(a,b,e),b.memoizedProps=c,a=b.child):a=R(a,b),a;case 10:return c=b.pendingProps,O.current||b.memoizedProps!==c?(Q(a,b,c),b.memoizedProps=c,a=b.child):a=R(a,b),a;case 11:return c=
b.pendingProps.children,O.current||null!==c&&b.memoizedProps!==c?(Q(a,b,c),b.memoizedProps=c,a=b.child):a=R(a,b),a;case 15:return c=b.pendingProps,b.memoizedProps===c?a=R(a,b):(Q(a,b,c.children),b.memoizedProps=c,a=b.child),a;case 13:return Rg(a,b,c);case 12:a:if(d=b.type,f=b.pendingProps,k=b.memoizedProps,e=d._currentValue,g=d._changedBits,O.current||0!==g||k!==f){b.memoizedProps=f;h=f.unstable_observedBits;if(void 0===h||null===h)h=1073741823;b.stateNode=h;if(0!==(g&h))Ng(b,d,g,c);else if(k===f){a=
R(a,b);break a}c=f.children;c=c(e);b.effectTag|=1;Q(a,b,c);a=b.child}else a=R(a,b);return a;default:A("156")}}function Tg(a){a.effectTag|=4}var Ug=void 0,Vg=void 0,Wg=void 0;Ug=function(){};Vg=function(a,b,c){(b.updateQueue=c)&&Tg(b)};Wg=function(a,b,c,d){c!==d&&Tg(b)};
function Xg(a,b){var c=b.pendingProps;switch(b.tag){case 1:return null;case 2:return tf(b),null;case 3:kg(b);uf(b);var d=b.stateNode;d.pendingContext&&(d.context=d.pendingContext,d.pendingContext=null);if(null===a||null===a.child)Hg(b),b.effectTag&=-3;Ug(b);return null;case 5:lg(b);d=hg(gg.current);var e=b.type;if(null!==a&&null!=b.stateNode){var f=a.memoizedProps,g=b.stateNode,h=hg(eg.current);g=Xe(g,e,f,c,d);Vg(a,b,g,e,f,c,d,h);a.ref!==b.ref&&(b.effectTag|=128)}else{if(!c)return null===b.stateNode?
A("166"):void 0,null;a=hg(eg.current);if(Hg(b))c=b.stateNode,e=b.type,f=b.memoizedProps,c[C]=b,c[Ma]=f,d=Ze(c,e,f,a,d),b.updateQueue=d,null!==d&&Tg(b);else{a=Ue(e,c,d,a);a[C]=b;a[Ma]=c;a:for(f=b.child;null!==f;){if(5===f.tag||6===f.tag)a.appendChild(f.stateNode);else if(4!==f.tag&&null!==f.child){f.child.return=f;f=f.child;continue}if(f===b)break;for(;null===f.sibling;){if(null===f.return||f.return===b)break a;f=f.return}f.sibling.return=f.return;f=f.sibling}We(a,e,c,d);df(e,c)&&Tg(b);b.stateNode=
a}null!==b.ref&&(b.effectTag|=128)}return null;case 6:if(a&&null!=b.stateNode)Wg(a,b,a.memoizedProps,c);else{if("string"!==typeof c)return null===b.stateNode?A("166"):void 0,null;d=hg(gg.current);hg(eg.current);Hg(b)?(d=b.stateNode,c=b.memoizedProps,d[C]=b,$e(d,c)&&Tg(b)):(d=Ve(c,d),d[C]=b,b.stateNode=d)}return null;case 14:return null;case 16:return null;case 10:return null;case 11:return null;case 15:return null;case 4:return kg(b),Ug(b),null;case 13:return cg(b),null;case 12:return null;case 0:A("167");
default:A("156")}}function Yg(a,b){var c=b.source;null===b.stack&&null!==c&&vc(c);null!==c&&uc(c);b=b.value;null!==a&&2===a.tag&&uc(a);try{b&&b.suppressReactErrorLogging||console.error(b)}catch(d){d&&d.suppressReactErrorLogging||console.error(d)}}function Zg(a){var b=a.ref;if(null!==b)if("function"===typeof b)try{b(null)}catch(c){$g(a,c)}else b.current=null}
function ah(a){"function"===typeof Lf&&Lf(a);switch(a.tag){case 2:Zg(a);var b=a.stateNode;if("function"===typeof b.componentWillUnmount)try{b.props=a.memoizedProps,b.state=a.memoizedState,b.componentWillUnmount()}catch(c){$g(a,c)}break;case 5:Zg(a);break;case 4:bh(a)}}function ch(a){return 5===a.tag||3===a.tag||4===a.tag}
function dh(a){a:{for(var b=a.return;null!==b;){if(ch(b)){var c=b;break a}b=b.return}A("160");c=void 0}var d=b=void 0;switch(c.tag){case 5:b=c.stateNode;d=!1;break;case 3:b=c.stateNode.containerInfo;d=!0;break;case 4:b=c.stateNode.containerInfo;d=!0;break;default:A("161")}c.effectTag&16&&(Le(b,""),c.effectTag&=-17);a:b:for(c=a;;){for(;null===c.sibling;){if(null===c.return||ch(c.return)){c=null;break a}c=c.return}c.sibling.return=c.return;for(c=c.sibling;5!==c.tag&&6!==c.tag;){if(c.effectTag&2)continue b;
if(null===c.child||4===c.tag)continue b;else c.child.return=c,c=c.child}if(!(c.effectTag&2)){c=c.stateNode;break a}}for(var e=a;;){if(5===e.tag||6===e.tag)if(c)if(d){var f=b,g=e.stateNode,h=c;8===f.nodeType?f.parentNode.insertBefore(g,h):f.insertBefore(g,h)}else b.insertBefore(e.stateNode,c);else d?(f=b,g=e.stateNode,8===f.nodeType?f.parentNode.insertBefore(g,f):f.appendChild(g)):b.appendChild(e.stateNode);else if(4!==e.tag&&null!==e.child){e.child.return=e;e=e.child;continue}if(e===a)break;for(;null===
e.sibling;){if(null===e.return||e.return===a)return;e=e.return}e.sibling.return=e.return;e=e.sibling}}
function bh(a){for(var b=a,c=!1,d=void 0,e=void 0;;){if(!c){c=b.return;a:for(;;){null===c?A("160"):void 0;switch(c.tag){case 5:d=c.stateNode;e=!1;break a;case 3:d=c.stateNode.containerInfo;e=!0;break a;case 4:d=c.stateNode.containerInfo;e=!0;break a}c=c.return}c=!0}if(5===b.tag||6===b.tag){a:for(var f=b,g=f;;)if(ah(g),null!==g.child&&4!==g.tag)g.child.return=g,g=g.child;else{if(g===f)break;for(;null===g.sibling;){if(null===g.return||g.return===f)break a;g=g.return}g.sibling.return=g.return;g=g.sibling}e?
(f=d,g=b.stateNode,8===f.nodeType?f.parentNode.removeChild(g):f.removeChild(g)):d.removeChild(b.stateNode)}else if(4===b.tag?d=b.stateNode.containerInfo:ah(b),null!==b.child){b.child.return=b;b=b.child;continue}if(b===a)break;for(;null===b.sibling;){if(null===b.return||b.return===a)return;b=b.return;4===b.tag&&(c=!1)}b.sibling.return=b.return;b=b.sibling}}
function eh(a,b){switch(b.tag){case 2:break;case 5:var c=b.stateNode;if(null!=c){var d=b.memoizedProps;a=null!==a?a.memoizedProps:d;var e=b.type,f=b.updateQueue;b.updateQueue=null;null!==f&&(c[Ma]=d,Ye(c,f,e,a,d))}break;case 6:null===b.stateNode?A("162"):void 0;b.stateNode.nodeValue=b.memoizedProps;break;case 3:break;case 15:break;case 16:break;default:A("163")}}function fh(a,b,c){c=Pf(c);c.tag=3;c.payload={element:null};var d=b.value;c.callback=function(){gh(d);Yg(a,b)};return c}
function hh(a,b,c){c=Pf(c);c.tag=3;var d=a.stateNode;null!==d&&"function"===typeof d.componentDidCatch&&(c.callback=function(){null===ih?ih=new Set([this]):ih.add(this);var c=b.value,d=b.stack;Yg(a,b);this.componentDidCatch(c,{componentStack:null!==d?d:""})});return c}
function jh(a,b,c,d,e,f){c.effectTag|=512;c.firstEffect=c.lastEffect=null;d=Yf(d,c);a=b;do{switch(a.tag){case 3:a.effectTag|=1024;d=fh(a,d,f);Sf(a,d,f);return;case 2:if(b=d,c=a.stateNode,0===(a.effectTag&64)&&null!==c&&"function"===typeof c.componentDidCatch&&(null===ih||!ih.has(c))){a.effectTag|=1024;d=hh(a,b,f);Sf(a,d,f);return}}a=a.return}while(null!==a)}
function kh(a){switch(a.tag){case 2:tf(a);var b=a.effectTag;return b&1024?(a.effectTag=b&-1025|64,a):null;case 3:return kg(a),uf(a),b=a.effectTag,b&1024?(a.effectTag=b&-1025|64,a):null;case 5:return lg(a),null;case 16:return b=a.effectTag,b&1024?(a.effectTag=b&-1025|64,a):null;case 4:return kg(a),null;case 13:return cg(a),null;default:return null}}var lh=ff(),mh=2,nh=lh,oh=0,ph=0,qh=!1,S=null,rh=null,T=0,sh=-1,th=!1,U=null,uh=!1,vh=!1,ih=null;
function wh(){if(null!==S)for(var a=S.return;null!==a;){var b=a;switch(b.tag){case 2:tf(b);break;case 3:kg(b);uf(b);break;case 5:lg(b);break;case 4:kg(b);break;case 13:cg(b)}a=a.return}rh=null;T=0;sh=-1;th=!1;S=null;vh=!1}
function xh(a){for(;;){var b=a.alternate,c=a.return,d=a.sibling;if(0===(a.effectTag&512)){b=Xg(b,a,T);var e=a;if(1073741823===T||1073741823!==e.expirationTime){var f=0;switch(e.tag){case 3:case 2:var g=e.updateQueue;null!==g&&(f=g.expirationTime)}for(g=e.child;null!==g;)0!==g.expirationTime&&(0===f||f>g.expirationTime)&&(f=g.expirationTime),g=g.sibling;e.expirationTime=f}if(null!==b)return b;null!==c&&0===(c.effectTag&512)&&(null===c.firstEffect&&(c.firstEffect=a.firstEffect),null!==a.lastEffect&&
(null!==c.lastEffect&&(c.lastEffect.nextEffect=a.firstEffect),c.lastEffect=a.lastEffect),1<a.effectTag&&(null!==c.lastEffect?c.lastEffect.nextEffect=a:c.firstEffect=a,c.lastEffect=a));if(null!==d)return d;if(null!==c)a=c;else{vh=!0;break}}else{a=kh(a,th,T);if(null!==a)return a.effectTag&=511,a;null!==c&&(c.firstEffect=c.lastEffect=null,c.effectTag|=512);if(null!==d)return d;if(null!==c)a=c;else break}}return null}
function yh(a){var b=Sg(a.alternate,a,T);null===b&&(b=xh(a));ec.current=null;return b}
function zh(a,b,c){qh?A("243"):void 0;qh=!0;if(b!==T||a!==rh||null===S)wh(),rh=a,T=b,sh=-1,S=Af(rh.current,null,T),a.pendingCommitExpirationTime=0;var d=!1;th=!c||T<=mh;do{try{if(c)for(;null!==S&&!Ah();)S=yh(S);else for(;null!==S;)S=yh(S)}catch(f){if(null===S)d=!0,gh(f);else{null===S?A("271"):void 0;c=S;var e=c.return;if(null===e){d=!0;gh(f);break}jh(a,e,c,f,th,T,nh);S=xh(c)}}break}while(1);qh=!1;if(d)return null;if(null===S){if(vh)return a.pendingCommitExpirationTime=b,a.current.alternate;th?A("262"):
void 0;0<=sh&&setTimeout(function(){var b=a.current.expirationTime;0!==b&&(0===a.remainingExpirationTime||a.remainingExpirationTime<b)&&Bh(a,b)},sh);Ch(a.current.expirationTime)}return null}
function $g(a,b){var c;a:{qh&&!uh?A("263"):void 0;for(c=a.return;null!==c;){switch(c.tag){case 2:var d=c.stateNode;if("function"===typeof c.type.getDerivedStateFromCatch||"function"===typeof d.componentDidCatch&&(null===ih||!ih.has(d))){a=Yf(b,a);a=hh(c,a,1);Rf(c,a,1);pg(c,1);c=void 0;break a}break;case 3:a=Yf(b,a);a=fh(c,a,1);Rf(c,a,1);pg(c,1);c=void 0;break a}c=c.return}3===a.tag&&(c=Yf(b,a),c=fh(a,c,1),Rf(a,c,1),pg(a,1));c=void 0}return c}
function Dh(){var a=2+25*(((ng()-2+500)/25|0)+1);a<=oh&&(a=oh+1);return oh=a}function og(a,b){a=0!==ph?ph:qh?uh?1:T:b.mode&1?Eh?2+10*(((a-2+15)/10|0)+1):2+25*(((a-2+500)/25|0)+1):1;Eh&&(0===Fh||a>Fh)&&(Fh=a);return a}
function pg(a,b){for(;null!==a;){if(0===a.expirationTime||a.expirationTime>b)a.expirationTime=b;null!==a.alternate&&(0===a.alternate.expirationTime||a.alternate.expirationTime>b)&&(a.alternate.expirationTime=b);if(null===a.return)if(3===a.tag){var c=a.stateNode;!qh&&0!==T&&b<T&&wh();var d=c.current.expirationTime;qh&&!uh&&rh===c||Bh(c,d);Gh>Hh&&A("185")}else break;a=a.return}}function ng(){nh=ff()-lh;return mh=(nh/10|0)+2}
function Ih(a){var b=ph;ph=2+25*(((ng()-2+500)/25|0)+1);try{return a()}finally{ph=b}}function Jh(a,b,c,d,e){var f=ph;ph=1;try{return a(b,c,d,e)}finally{ph=f}}var Kh=null,V=null,Lh=0,Mh=void 0,W=!1,X=null,Y=0,Fh=0,Nh=!1,Oh=!1,Ph=null,Qh=null,Z=!1,Rh=!1,Eh=!1,Sh=null,Hh=1E3,Gh=0,Th=1;function Uh(a){if(0!==Lh){if(a>Lh)return;null!==Mh&&hf(Mh)}var b=ff()-lh;Lh=a;Mh=gf(Vh,{timeout:10*(a-2)-b})}
function Bh(a,b){if(null===a.nextScheduledRoot)a.remainingExpirationTime=b,null===V?(Kh=V=a,a.nextScheduledRoot=a):(V=V.nextScheduledRoot=a,V.nextScheduledRoot=Kh);else{var c=a.remainingExpirationTime;if(0===c||b<c)a.remainingExpirationTime=b}W||(Z?Rh&&(X=a,Y=1,Wh(a,1,!1)):1===b?Xh():Uh(b))}
function Yh(){var a=0,b=null;if(null!==V)for(var c=V,d=Kh;null!==d;){var e=d.remainingExpirationTime;if(0===e){null===c||null===V?A("244"):void 0;if(d===d.nextScheduledRoot){Kh=V=d.nextScheduledRoot=null;break}else if(d===Kh)Kh=e=d.nextScheduledRoot,V.nextScheduledRoot=e,d.nextScheduledRoot=null;else if(d===V){V=c;V.nextScheduledRoot=Kh;d.nextScheduledRoot=null;break}else c.nextScheduledRoot=d.nextScheduledRoot,d.nextScheduledRoot=null;d=c.nextScheduledRoot}else{if(0===a||e<a)a=e,b=d;if(d===V)break;
c=d;d=d.nextScheduledRoot}}c=X;null!==c&&c===b&&1===a?Gh++:Gh=0;X=b;Y=a}function Vh(a){Zh(0,!0,a)}function Xh(){Zh(1,!1,null)}function Zh(a,b,c){Qh=c;Yh();if(b)for(;null!==X&&0!==Y&&(0===a||a>=Y)&&(!Nh||ng()>=Y);)ng(),Wh(X,Y,!Nh),Yh();else for(;null!==X&&0!==Y&&(0===a||a>=Y);)Wh(X,Y,!1),Yh();null!==Qh&&(Lh=0,Mh=null);0!==Y&&Uh(Y);Qh=null;Nh=!1;$h()}function ai(a,b){W?A("253"):void 0;X=a;Y=b;Wh(a,b,!1);Xh();$h()}
function $h(){Gh=0;if(null!==Sh){var a=Sh;Sh=null;for(var b=0;b<a.length;b++){var c=a[b];try{c._onComplete()}catch(d){Oh||(Oh=!0,Ph=d)}}}if(Oh)throw a=Ph,Ph=null,Oh=!1,a;}function Wh(a,b,c){W?A("245"):void 0;W=!0;c?(c=a.finishedWork,null!==c?bi(a,c,b):(c=zh(a,b,!0),null!==c&&(Ah()?a.finishedWork=c:bi(a,c,b)))):(c=a.finishedWork,null!==c?bi(a,c,b):(c=zh(a,b,!1),null!==c&&bi(a,c,b)));W=!1}
function bi(a,b,c){var d=a.firstBatch;if(null!==d&&d._expirationTime<=c&&(null===Sh?Sh=[d]:Sh.push(d),d._defer)){a.finishedWork=b;a.remainingExpirationTime=0;return}a.finishedWork=null;uh=qh=!0;c=b.stateNode;c.current===b?A("177"):void 0;d=c.pendingCommitExpirationTime;0===d?A("261"):void 0;c.pendingCommitExpirationTime=0;ng();ec.current=null;if(1<b.effectTag)if(null!==b.lastEffect){b.lastEffect.nextEffect=b;var e=b.firstEffect}else e=b;else e=b.firstEffect;bf=Id;var f=da();if(Vd(f)){if("selectionStart"in
f)var g={start:f.selectionStart,end:f.selectionEnd};else a:{var h=window.getSelection&&window.getSelection();if(h&&0!==h.rangeCount){g=h.anchorNode;var k=h.anchorOffset,n=h.focusNode;h=h.focusOffset;try{g.nodeType,n.nodeType}catch(Wa){g=null;break a}var r=0,w=-1,P=-1,nc=0,Jd=0,E=f,t=null;b:for(;;){for(var x;;){E!==g||0!==k&&3!==E.nodeType||(w=r+k);E!==n||0!==h&&3!==E.nodeType||(P=r+h);3===E.nodeType&&(r+=E.nodeValue.length);if(null===(x=E.firstChild))break;t=E;E=x}for(;;){if(E===f)break b;t===g&&
++nc===k&&(w=r);t===n&&++Jd===h&&(P=r);if(null!==(x=E.nextSibling))break;E=t;t=E.parentNode}E=x}g=-1===w||-1===P?null:{start:w,end:P}}else g=null}g=g||{start:0,end:0}}else g=null;cf={focusedElem:f,selectionRange:g};Kd(!1);for(U=e;null!==U;){f=!1;g=void 0;try{for(;null!==U;){if(U.effectTag&256){var u=U.alternate;k=U;switch(k.tag){case 2:if(k.effectTag&256&&null!==u){var y=u.memoizedProps,D=u.memoizedState,ja=k.stateNode;ja.props=k.memoizedProps;ja.state=k.memoizedState;var ni=ja.getSnapshotBeforeUpdate(y,
D);ja.__reactInternalSnapshotBeforeUpdate=ni}break;case 3:case 5:case 6:case 4:break;default:A("163")}}U=U.nextEffect}}catch(Wa){f=!0,g=Wa}f&&(null===U?A("178"):void 0,$g(U,g),null!==U&&(U=U.nextEffect))}for(U=e;null!==U;){u=!1;y=void 0;try{for(;null!==U;){var q=U.effectTag;q&16&&Le(U.stateNode,"");if(q&128){var z=U.alternate;if(null!==z){var l=z.ref;null!==l&&("function"===typeof l?l(null):l.current=null)}}switch(q&14){case 2:dh(U);U.effectTag&=-3;break;case 6:dh(U);U.effectTag&=-3;eh(U.alternate,
U);break;case 4:eh(U.alternate,U);break;case 8:D=U,bh(D),D.return=null,D.child=null,D.alternate&&(D.alternate.child=null,D.alternate.return=null)}U=U.nextEffect}}catch(Wa){u=!0,y=Wa}u&&(null===U?A("178"):void 0,$g(U,y),null!==U&&(U=U.nextEffect))}l=cf;z=da();q=l.focusedElem;u=l.selectionRange;if(z!==q&&fa(document.documentElement,q)){null!==u&&Vd(q)&&(z=u.start,l=u.end,void 0===l&&(l=z),"selectionStart"in q?(q.selectionStart=z,q.selectionEnd=Math.min(l,q.value.length)):window.getSelection&&(z=window.getSelection(),
y=q[lb()].length,l=Math.min(u.start,y),u=void 0===u.end?l:Math.min(u.end,y),!z.extend&&l>u&&(y=u,u=l,l=y),y=Ud(q,l),D=Ud(q,u),y&&D&&(1!==z.rangeCount||z.anchorNode!==y.node||z.anchorOffset!==y.offset||z.focusNode!==D.node||z.focusOffset!==D.offset)&&(ja=document.createRange(),ja.setStart(y.node,y.offset),z.removeAllRanges(),l>u?(z.addRange(ja),z.extend(D.node,D.offset)):(ja.setEnd(D.node,D.offset),z.addRange(ja)))));z=[];for(l=q;l=l.parentNode;)1===l.nodeType&&z.push({element:l,left:l.scrollLeft,
top:l.scrollTop});"function"===typeof q.focus&&q.focus();for(q=0;q<z.length;q++)l=z[q],l.element.scrollLeft=l.left,l.element.scrollTop=l.top}cf=null;Kd(bf);bf=null;c.current=b;for(U=e;null!==U;){e=!1;q=void 0;try{for(z=d;null!==U;){var ig=U.effectTag;if(ig&36){var oc=U.alternate;l=U;u=z;switch(l.tag){case 2:var ca=l.stateNode;if(l.effectTag&4)if(null===oc)ca.props=l.memoizedProps,ca.state=l.memoizedState,ca.componentDidMount();else{var xi=oc.memoizedProps,yi=oc.memoizedState;ca.props=l.memoizedProps;
ca.state=l.memoizedState;ca.componentDidUpdate(xi,yi,ca.__reactInternalSnapshotBeforeUpdate)}var Og=l.updateQueue;null!==Og&&(ca.props=l.memoizedProps,ca.state=l.memoizedState,Xf(l,Og,ca,u));break;case 3:var Pg=l.updateQueue;if(null!==Pg){y=null;if(null!==l.child)switch(l.child.tag){case 5:y=l.child.stateNode;break;case 2:y=l.child.stateNode}Xf(l,Pg,y,u)}break;case 5:var zi=l.stateNode;null===oc&&l.effectTag&4&&df(l.type,l.memoizedProps)&&zi.focus();break;case 6:break;case 4:break;case 15:break;case 16:break;
default:A("163")}}if(ig&128){l=void 0;var yc=U.ref;if(null!==yc){var Qg=U.stateNode;switch(U.tag){case 5:l=Qg;break;default:l=Qg}"function"===typeof yc?yc(l):yc.current=l}}var Ai=U.nextEffect;U.nextEffect=null;U=Ai}}catch(Wa){e=!0,q=Wa}e&&(null===U?A("178"):void 0,$g(U,q),null!==U&&(U=U.nextEffect))}qh=uh=!1;"function"===typeof Kf&&Kf(b.stateNode);b=c.current.expirationTime;0===b&&(ih=null);a.remainingExpirationTime=b}function Ah(){return null===Qh||Qh.timeRemaining()>Th?!1:Nh=!0}
function gh(a){null===X?A("246"):void 0;X.remainingExpirationTime=0;Oh||(Oh=!0,Ph=a)}function Ch(a){null===X?A("246"):void 0;X.remainingExpirationTime=a}function ci(a,b){var c=Z;Z=!0;try{return a(b)}finally{(Z=c)||W||Xh()}}function di(a,b){if(Z&&!Rh){Rh=!0;try{return a(b)}finally{Rh=!1}}return a(b)}function ei(a,b){W?A("187"):void 0;var c=Z;Z=!0;try{return Jh(a,b)}finally{Z=c,Xh()}}
function fi(a,b,c){if(Eh)return a(b,c);Z||W||0===Fh||(Zh(Fh,!1,null),Fh=0);var d=Eh,e=Z;Z=Eh=!0;try{return a(b,c)}finally{Eh=d,(Z=e)||W||Xh()}}function gi(a){var b=Z;Z=!0;try{Jh(a)}finally{(Z=b)||W||Zh(1,!1,null)}}
function hi(a,b,c,d,e){var f=b.current;if(c){c=c._reactInternalFiber;var g;b:{2===kd(c)&&2===c.tag?void 0:A("170");for(g=c;3!==g.tag;){if(rf(g)){g=g.stateNode.__reactInternalMemoizedMergedChildContext;break b}(g=g.return)?void 0:A("171")}g=g.stateNode.context}c=rf(c)?wf(c,g):g}else c=ha;null===b.context?b.context=c:b.pendingContext=c;b=e;e=Pf(d);e.payload={element:a};b=void 0===b?null:b;null!==b&&(e.callback=b);Rf(f,e,d);pg(f,d);return d}
function ii(a){var b=a._reactInternalFiber;void 0===b&&("function"===typeof a.render?A("188"):A("268",Object.keys(a)));a=nd(b);return null===a?null:a.stateNode}function ji(a,b,c,d){var e=b.current,f=ng();e=og(f,e);return hi(a,b,c,e,d)}function ki(a){a=a.current;if(!a.child)return null;switch(a.child.tag){case 5:return a.child.stateNode;default:return a.child.stateNode}}
function li(a){var b=a.findFiberByHostInstance;return Jf(p({},a,{findHostInstanceByFiber:function(a){a=nd(a);return null===a?null:a.stateNode},findFiberByHostInstance:function(a){return b?b(a):null}}))}
var mi={updateContainerAtExpirationTime:hi,createContainer:function(a,b,c){return Ff(a,b,c)},updateContainer:ji,flushRoot:ai,requestWork:Bh,computeUniqueAsyncExpiration:Dh,batchedUpdates:ci,unbatchedUpdates:di,deferredUpdates:Ih,syncUpdates:Jh,interactiveUpdates:fi,flushInteractiveUpdates:function(){W||0===Fh||(Zh(Fh,!1,null),Fh=0)},flushControlled:gi,flushSync:ei,getPublicRootInstance:ki,findHostInstance:ii,findHostInstanceWithNoPortals:function(a){a=od(a);return null===a?null:a.stateNode},injectIntoDevTools:li};
function oi(a,b,c){var d=3<arguments.length&&void 0!==arguments[3]?arguments[3]:null;return{$$typeof:hc,key:null==d?null:""+d,children:a,containerInfo:b,implementation:c}}Kb.injectFiberControlledHostComponent(af);function pi(a){this._expirationTime=Dh();this._root=a;this._callbacks=this._next=null;this._hasChildren=this._didComplete=!1;this._children=null;this._defer=!0}
pi.prototype.render=function(a){this._defer?void 0:A("250");this._hasChildren=!0;this._children=a;var b=this._root._internalRoot,c=this._expirationTime,d=new qi;hi(a,b,null,c,d._onCommit);return d};pi.prototype.then=function(a){if(this._didComplete)a();else{var b=this._callbacks;null===b&&(b=this._callbacks=[]);b.push(a)}};
pi.prototype.commit=function(){var a=this._root._internalRoot,b=a.firstBatch;this._defer&&null!==b?void 0:A("251");if(this._hasChildren){var c=this._expirationTime;if(b!==this){this._hasChildren&&(c=this._expirationTime=b._expirationTime,this.render(this._children));for(var d=null,e=b;e!==this;)d=e,e=e._next;null===d?A("251"):void 0;d._next=e._next;this._next=b;a.firstBatch=this}this._defer=!1;ai(a,c);b=this._next;this._next=null;b=a.firstBatch=b;null!==b&&b._hasChildren&&b.render(b._children)}else this._next=
null,this._defer=!1};pi.prototype._onComplete=function(){if(!this._didComplete){this._didComplete=!0;var a=this._callbacks;if(null!==a)for(var b=0;b<a.length;b++)(0,a[b])()}};function qi(){this._callbacks=null;this._didCommit=!1;this._onCommit=this._onCommit.bind(this)}qi.prototype.then=function(a){if(this._didCommit)a();else{var b=this._callbacks;null===b&&(b=this._callbacks=[]);b.push(a)}};
qi.prototype._onCommit=function(){if(!this._didCommit){this._didCommit=!0;var a=this._callbacks;if(null!==a)for(var b=0;b<a.length;b++){var c=a[b];"function"!==typeof c?A("191",c):void 0;c()}}};function ri(a,b,c){this._internalRoot=Ff(a,b,c)}ri.prototype.render=function(a,b){var c=this._internalRoot,d=new qi;b=void 0===b?null:b;null!==b&&d.then(b);ji(a,c,null,d._onCommit);return d};
ri.prototype.unmount=function(a){var b=this._internalRoot,c=new qi;a=void 0===a?null:a;null!==a&&c.then(a);ji(null,b,null,c._onCommit);return c};ri.prototype.legacy_renderSubtreeIntoContainer=function(a,b,c){var d=this._internalRoot,e=new qi;c=void 0===c?null:c;null!==c&&e.then(c);ji(b,d,a,e._onCommit);return e};
ri.prototype.createBatch=function(){var a=new pi(this),b=a._expirationTime,c=this._internalRoot,d=c.firstBatch;if(null===d)c.firstBatch=a,a._next=null;else{for(c=null;null!==d&&d._expirationTime<=b;)c=d,d=d._next;a._next=d;null!==c&&(c._next=a)}return a};function si(a){return!(!a||1!==a.nodeType&&9!==a.nodeType&&11!==a.nodeType&&(8!==a.nodeType||" react-mount-point-unstable "!==a.nodeValue))}Sb=mi.batchedUpdates;Tb=mi.interactiveUpdates;Ub=mi.flushInteractiveUpdates;
function ti(a,b){b||(b=a?9===a.nodeType?a.documentElement:a.firstChild:null,b=!(!b||1!==b.nodeType||!b.hasAttribute("data-reactroot")));if(!b)for(var c;c=a.lastChild;)a.removeChild(c);return new ri(a,!1,b)}
function ui(a,b,c,d,e){si(c)?void 0:A("200");var f=c._reactRootContainer;if(f){if("function"===typeof e){var g=e;e=function(){var a=ki(f._internalRoot);g.call(a)}}null!=a?f.legacy_renderSubtreeIntoContainer(a,b,e):f.render(b,e)}else{f=c._reactRootContainer=ti(c,d);if("function"===typeof e){var h=e;e=function(){var a=ki(f._internalRoot);h.call(a)}}di(function(){null!=a?f.legacy_renderSubtreeIntoContainer(a,b,e):f.render(b,e)})}return ki(f._internalRoot)}
function vi(a,b){var c=2<arguments.length&&void 0!==arguments[2]?arguments[2]:null;si(b)?void 0:A("200");return oi(a,b,null,c)}
var wi={createPortal:vi,findDOMNode:function(a){return null==a?null:1===a.nodeType?a:ii(a)},hydrate:function(a,b,c){return ui(null,a,b,!0,c)},render:function(a,b,c){return ui(null,a,b,!1,c)},unstable_renderSubtreeIntoContainer:function(a,b,c,d){null==a||void 0===a._reactInternalFiber?A("38"):void 0;return ui(a,b,c,!1,d)},unmountComponentAtNode:function(a){si(a)?void 0:A("40");return a._reactRootContainer?(di(function(){ui(null,null,a,!1,function(){a._reactRootContainer=null})}),!0):!1},unstable_createPortal:function(){return vi.apply(void 0,
arguments)},unstable_batchedUpdates:ci,unstable_deferredUpdates:Ih,unstable_interactiveUpdates:fi,flushSync:ei,unstable_flushControlled:gi,__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED:{EventPluginHub:Ka,EventPluginRegistry:va,EventPropagators:$a,ReactControlledComponent:Rb,ReactDOMComponentTree:Qa,ReactDOMEventListener:Od},unstable_createRoot:function(a,b){return new ri(a,!0,null!=b&&!0===b.hydrate)}};li({findFiberByHostInstance:Na,bundleType:0,version:"16.4.2",rendererPackageName:"react-dom"});
var Bi={default:wi},Ci=Bi&&wi||Bi;module.exports=Ci.default?Ci.default:Ci;


/***/ }),
/* 103 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */



var canUseDOM = !!(typeof window !== 'undefined' && window.document && window.document.createElement);

/**
 * Simple, lightweight module assisting with the detection and context of
 * Worker. Helps avoid circular dependencies and allows code to reason about
 * whether or not they are in a Worker, even if they never include the main
 * `ReactWorker` dependency.
 */
var ExecutionEnvironment = {

  canUseDOM: canUseDOM,

  canUseWorkers: typeof Worker !== 'undefined',

  canUseEventListeners: canUseDOM && !!(window.addEventListener || window.attachEvent),

  canUseViewport: canUseDOM && !!window.screen,

  isInWorker: !canUseDOM // For now, this is true - might change in the future.

};

module.exports = ExecutionEnvironment;

/***/ }),
/* 104 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @typechecks
 */

/* eslint-disable fb-www/typeof-undefined */

/**
 * Same as document.activeElement but wraps in a try-catch block. In IE it is
 * not safe to call document.activeElement if there is nothing focused.
 *
 * The activeElement will be null only if the document or document body is not
 * yet defined.
 *
 * @param {?DOMDocument} doc Defaults to current document.
 * @return {?DOMElement}
 */
function getActiveElement(doc) /*?DOMElement*/{
  doc = doc || (typeof document !== 'undefined' ? document : undefined);
  if (typeof doc === 'undefined') {
    return null;
  }
  try {
    return doc.activeElement || doc.body;
  } catch (e) {
    return doc.body;
  }
}

module.exports = getActiveElement;

/***/ }),
/* 105 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @typechecks
 * 
 */

/*eslint-disable no-self-compare */



var hasOwnProperty = Object.prototype.hasOwnProperty;

/**
 * inlined Object.is polyfill to avoid requiring consumers ship their own
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
 */
function is(x, y) {
  // SameValue algorithm
  if (x === y) {
    // Steps 1-5, 7-10
    // Steps 6.b-6.e: +0 != -0
    // Added the nonzero y check to make Flow happy, but it is redundant
    return x !== 0 || y !== 0 || 1 / x === 1 / y;
  } else {
    // Step 6.a: NaN == NaN
    return x !== x && y !== y;
  }
}

/**
 * Performs equality by iterating through keys on an object and returning false
 * when any key has values which are not strictly equal between the arguments.
 * Returns true when the values of all keys are strictly equal.
 */
function shallowEqual(objA, objB) {
  if (is(objA, objB)) {
    return true;
  }

  if (typeof objA !== 'object' || objA === null || typeof objB !== 'object' || objB === null) {
    return false;
  }

  var keysA = Object.keys(objA);
  var keysB = Object.keys(objB);

  if (keysA.length !== keysB.length) {
    return false;
  }

  // Test for A's keys different from B.
  for (var i = 0; i < keysA.length; i++) {
    if (!hasOwnProperty.call(objB, keysA[i]) || !is(objA[keysA[i]], objB[keysA[i]])) {
      return false;
    }
  }

  return true;
}

module.exports = shallowEqual;

/***/ }),
/* 106 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 */

var isTextNode = __webpack_require__(107);

/*eslint-disable no-bitwise */

/**
 * Checks if a given DOM node contains or is another DOM node.
 */
function containsNode(outerNode, innerNode) {
  if (!outerNode || !innerNode) {
    return false;
  } else if (outerNode === innerNode) {
    return true;
  } else if (isTextNode(outerNode)) {
    return false;
  } else if (isTextNode(innerNode)) {
    return containsNode(outerNode, innerNode.parentNode);
  } else if ('contains' in outerNode) {
    return outerNode.contains(innerNode);
  } else if (outerNode.compareDocumentPosition) {
    return !!(outerNode.compareDocumentPosition(innerNode) & 16);
  } else {
    return false;
  }
}

module.exports = containsNode;

/***/ }),
/* 107 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @typechecks
 */

var isNode = __webpack_require__(108);

/**
 * @param {*} object The object to check.
 * @return {boolean} Whether or not the object is a DOM text node.
 */
function isTextNode(object) {
  return isNode(object) && object.nodeType == 3;
}

module.exports = isTextNode;

/***/ }),
/* 108 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @typechecks
 */

/**
 * @param {*} object The object to check.
 * @return {boolean} Whether or not the object is a DOM node.
 */
function isNode(object) {
  var doc = object ? object.ownerDocument || object : document;
  var defaultView = doc.defaultView || window;
  return !!(object && (typeof defaultView.Node === 'function' ? object instanceof defaultView.Node : typeof object === 'object' && typeof object.nodeType === 'number' && typeof object.nodeName === 'string'));
}

module.exports = isNode;

/***/ }),
/* 109 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export createProvider */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__utils_PropTypes__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__utils_warning__ = __webpack_require__(30);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }






var didWarnAboutReceivingStore = false;
function warnAboutReceivingStore() {
  if (didWarnAboutReceivingStore) {
    return;
  }
  didWarnAboutReceivingStore = true;

  Object(__WEBPACK_IMPORTED_MODULE_3__utils_warning__["a" /* default */])('<Provider> does not support changing `store` on the fly. ' + 'It is most likely that you see this error because you updated to ' + 'Redux 2.x and React Redux 2.x which no longer hot reload reducers ' + 'automatically. See https://github.com/reactjs/react-redux/releases/' + 'tag/v2.0.0 for the migration instructions.');
}

function createProvider() {
  var _Provider$childContex;

  var storeKey = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'store';
  var subKey = arguments[1];

  var subscriptionKey = subKey || storeKey + 'Subscription';

  var Provider = function (_Component) {
    _inherits(Provider, _Component);

    Provider.prototype.getChildContext = function getChildContext() {
      var _ref;

      return _ref = {}, _ref[storeKey] = this[storeKey], _ref[subscriptionKey] = null, _ref;
    };

    function Provider(props, context) {
      _classCallCheck(this, Provider);

      var _this = _possibleConstructorReturn(this, _Component.call(this, props, context));

      _this[storeKey] = props.store;
      return _this;
    }

    Provider.prototype.render = function render() {
      return __WEBPACK_IMPORTED_MODULE_0_react__["Children"].only(this.props.children);
    };

    return Provider;
  }(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

  if (false) {
    Provider.prototype.componentWillReceiveProps = function (nextProps) {
      if (this[storeKey] !== nextProps.store) {
        warnAboutReceivingStore();
      }
    };
  }

  Provider.propTypes = {
    store: __WEBPACK_IMPORTED_MODULE_2__utils_PropTypes__["a" /* storeShape */].isRequired,
    children: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.element.isRequired
  };
  Provider.childContextTypes = (_Provider$childContex = {}, _Provider$childContex[storeKey] = __WEBPACK_IMPORTED_MODULE_2__utils_PropTypes__["a" /* storeShape */].isRequired, _Provider$childContex[subscriptionKey] = __WEBPACK_IMPORTED_MODULE_2__utils_PropTypes__["b" /* subscriptionShape */], _Provider$childContex);

  return Provider;
}

/* harmony default export */ __webpack_exports__["a"] = (createProvider());

/***/ }),
/* 110 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var ReactPropTypesSecret = __webpack_require__(111);

function emptyFunction() {}

module.exports = function() {
  function shim(props, propName, componentName, location, propFullName, secret) {
    if (secret === ReactPropTypesSecret) {
      // It is still safe when called from React.
      return;
    }
    var err = new Error(
      'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
      'Use PropTypes.checkPropTypes() to call them. ' +
      'Read more at http://fb.me/use-check-prop-types'
    );
    err.name = 'Invariant Violation';
    throw err;
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
    shape: getShim,
    exact: getShim
  };

  ReactPropTypes.checkPropTypes = emptyFunction;
  ReactPropTypes.PropTypes = ReactPropTypes;

  return ReactPropTypes;
};


/***/ }),
/* 111 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';

module.exports = ReactPropTypesSecret;


/***/ }),
/* 112 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Copyright 2015, Yahoo! Inc.
 * Copyrights licensed under the New BSD License. See the accompanying LICENSE file for terms.
 */
var REACT_STATICS = {
    childContextTypes: true,
    contextTypes: true,
    defaultProps: true,
    displayName: true,
    getDefaultProps: true,
    getDerivedStateFromProps: true,
    mixins: true,
    propTypes: true,
    type: true
};

var KNOWN_STATICS = {
    name: true,
    length: true,
    prototype: true,
    caller: true,
    callee: true,
    arguments: true,
    arity: true
};

var defineProperty = Object.defineProperty;
var getOwnPropertyNames = Object.getOwnPropertyNames;
var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
var getPrototypeOf = Object.getPrototypeOf;
var objectPrototype = getPrototypeOf && getPrototypeOf(Object);

function hoistNonReactStatics(targetComponent, sourceComponent, blacklist) {
    if (typeof sourceComponent !== 'string') { // don't hoist over string (html) components

        if (objectPrototype) {
            var inheritedComponent = getPrototypeOf(sourceComponent);
            if (inheritedComponent && inheritedComponent !== objectPrototype) {
                hoistNonReactStatics(targetComponent, inheritedComponent, blacklist);
            }
        }

        var keys = getOwnPropertyNames(sourceComponent);

        if (getOwnPropertySymbols) {
            keys = keys.concat(getOwnPropertySymbols(sourceComponent));
        }

        for (var i = 0; i < keys.length; ++i) {
            var key = keys[i];
            if (!REACT_STATICS[key] && !KNOWN_STATICS[key] && (!blacklist || !blacklist[key])) {
                var descriptor = getOwnPropertyDescriptor(sourceComponent, key);
                try { // Avoid failures from read-only properties
                    defineProperty(targetComponent, key, descriptor);
                } catch (e) {}
            }
        }

        return targetComponent;
    }

    return targetComponent;
}

module.exports = hoistNonReactStatics;


/***/ }),
/* 113 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
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

var invariant = function(condition, format, a, b, c, d, e, f) {
  if (false) {
    if (format === undefined) {
      throw new Error('invariant requires an error message argument');
    }
  }

  if (!condition) {
    var error;
    if (format === undefined) {
      error = new Error(
        'Minified exception occurred; use the non-minified dev environment ' +
        'for the full error message and additional helpful warnings.'
      );
    } else {
      var args = [a, b, c, d, e, f];
      var argIndex = 0;
      error = new Error(
        format.replace(/%s/g, function() { return args[argIndex++]; })
      );
      error.name = 'Invariant Violation';
    }

    error.framesToPop = 1; // we don't care about invariant's own frame
    throw error;
  }
};

module.exports = invariant;


/***/ }),
/* 114 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Subscription; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

// encapsulates the subscription logic for connecting a component to the redux store, as
// well as nesting subscriptions of descendant components, so that we can ensure the
// ancestor components re-render before descendants

var CLEARED = null;
var nullListeners = {
  notify: function notify() {}
};

function createListenerCollection() {
  // the current/next pattern is copied from redux's createStore code.
  // TODO: refactor+expose that code to be reusable here?
  var current = [];
  var next = [];

  return {
    clear: function clear() {
      next = CLEARED;
      current = CLEARED;
    },
    notify: function notify() {
      var listeners = current = next;
      for (var i = 0; i < listeners.length; i++) {
        listeners[i]();
      }
    },
    get: function get() {
      return next;
    },
    subscribe: function subscribe(listener) {
      var isSubscribed = true;
      if (next === current) next = current.slice();
      next.push(listener);

      return function unsubscribe() {
        if (!isSubscribed || current === CLEARED) return;
        isSubscribed = false;

        if (next === current) next = current.slice();
        next.splice(next.indexOf(listener), 1);
      };
    }
  };
}

var Subscription = function () {
  function Subscription(store, parentSub, onStateChange) {
    _classCallCheck(this, Subscription);

    this.store = store;
    this.parentSub = parentSub;
    this.onStateChange = onStateChange;
    this.unsubscribe = null;
    this.listeners = nullListeners;
  }

  Subscription.prototype.addNestedSub = function addNestedSub(listener) {
    this.trySubscribe();
    return this.listeners.subscribe(listener);
  };

  Subscription.prototype.notifyNestedSubs = function notifyNestedSubs() {
    this.listeners.notify();
  };

  Subscription.prototype.isSubscribed = function isSubscribed() {
    return Boolean(this.unsubscribe);
  };

  Subscription.prototype.trySubscribe = function trySubscribe() {
    if (!this.unsubscribe) {
      this.unsubscribe = this.parentSub ? this.parentSub.addNestedSub(this.onStateChange) : this.store.subscribe(this.onStateChange);

      this.listeners = createListenerCollection();
    }
  };

  Subscription.prototype.tryUnsubscribe = function tryUnsubscribe() {
    if (this.unsubscribe) {
      this.unsubscribe();
      this.unsubscribe = null;
      this.listeners.clear();
      this.listeners = nullListeners;
    }
  };

  return Subscription;
}();



/***/ }),
/* 115 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export createConnect */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_connectAdvanced__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils_shallowEqual__ = __webpack_require__(116);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__mapDispatchToProps__ = __webpack_require__(117);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__mapStateToProps__ = __webpack_require__(130);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__mergeProps__ = __webpack_require__(131);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__selectorFactory__ = __webpack_require__(132);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }








/*
  connect is a facade over connectAdvanced. It turns its args into a compatible
  selectorFactory, which has the signature:

    (dispatch, options) => (nextState, nextOwnProps) => nextFinalProps
  
  connect passes its args to connectAdvanced as options, which will in turn pass them to
  selectorFactory each time a Connect component instance is instantiated or hot reloaded.

  selectorFactory returns a final props selector from its mapStateToProps,
  mapStateToPropsFactories, mapDispatchToProps, mapDispatchToPropsFactories, mergeProps,
  mergePropsFactories, and pure args.

  The resulting final props selector is called by the Connect component instance whenever
  it receives new props or store state.
 */

function match(arg, factories, name) {
  for (var i = factories.length - 1; i >= 0; i--) {
    var result = factories[i](arg);
    if (result) return result;
  }

  return function (dispatch, options) {
    throw new Error('Invalid value of type ' + typeof arg + ' for ' + name + ' argument when connecting component ' + options.wrappedComponentName + '.');
  };
}

function strictEqual(a, b) {
  return a === b;
}

// createConnect with default args builds the 'official' connect behavior. Calling it with
// different options opens up some testing and extensibility scenarios
function createConnect() {
  var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      _ref$connectHOC = _ref.connectHOC,
      connectHOC = _ref$connectHOC === undefined ? __WEBPACK_IMPORTED_MODULE_0__components_connectAdvanced__["a" /* default */] : _ref$connectHOC,
      _ref$mapStateToPropsF = _ref.mapStateToPropsFactories,
      mapStateToPropsFactories = _ref$mapStateToPropsF === undefined ? __WEBPACK_IMPORTED_MODULE_3__mapStateToProps__["a" /* default */] : _ref$mapStateToPropsF,
      _ref$mapDispatchToPro = _ref.mapDispatchToPropsFactories,
      mapDispatchToPropsFactories = _ref$mapDispatchToPro === undefined ? __WEBPACK_IMPORTED_MODULE_2__mapDispatchToProps__["a" /* default */] : _ref$mapDispatchToPro,
      _ref$mergePropsFactor = _ref.mergePropsFactories,
      mergePropsFactories = _ref$mergePropsFactor === undefined ? __WEBPACK_IMPORTED_MODULE_4__mergeProps__["a" /* default */] : _ref$mergePropsFactor,
      _ref$selectorFactory = _ref.selectorFactory,
      selectorFactory = _ref$selectorFactory === undefined ? __WEBPACK_IMPORTED_MODULE_5__selectorFactory__["a" /* default */] : _ref$selectorFactory;

  return function connect(mapStateToProps, mapDispatchToProps, mergeProps) {
    var _ref2 = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {},
        _ref2$pure = _ref2.pure,
        pure = _ref2$pure === undefined ? true : _ref2$pure,
        _ref2$areStatesEqual = _ref2.areStatesEqual,
        areStatesEqual = _ref2$areStatesEqual === undefined ? strictEqual : _ref2$areStatesEqual,
        _ref2$areOwnPropsEqua = _ref2.areOwnPropsEqual,
        areOwnPropsEqual = _ref2$areOwnPropsEqua === undefined ? __WEBPACK_IMPORTED_MODULE_1__utils_shallowEqual__["a" /* default */] : _ref2$areOwnPropsEqua,
        _ref2$areStatePropsEq = _ref2.areStatePropsEqual,
        areStatePropsEqual = _ref2$areStatePropsEq === undefined ? __WEBPACK_IMPORTED_MODULE_1__utils_shallowEqual__["a" /* default */] : _ref2$areStatePropsEq,
        _ref2$areMergedPropsE = _ref2.areMergedPropsEqual,
        areMergedPropsEqual = _ref2$areMergedPropsE === undefined ? __WEBPACK_IMPORTED_MODULE_1__utils_shallowEqual__["a" /* default */] : _ref2$areMergedPropsE,
        extraOptions = _objectWithoutProperties(_ref2, ['pure', 'areStatesEqual', 'areOwnPropsEqual', 'areStatePropsEqual', 'areMergedPropsEqual']);

    var initMapStateToProps = match(mapStateToProps, mapStateToPropsFactories, 'mapStateToProps');
    var initMapDispatchToProps = match(mapDispatchToProps, mapDispatchToPropsFactories, 'mapDispatchToProps');
    var initMergeProps = match(mergeProps, mergePropsFactories, 'mergeProps');

    return connectHOC(selectorFactory, _extends({
      // used in error messages
      methodName: 'connect',

      // used to compute Connect's displayName from the wrapped component's displayName.
      getDisplayName: function getDisplayName(name) {
        return 'Connect(' + name + ')';
      },

      // if mapStateToProps is falsy, the Connect component doesn't subscribe to store state changes
      shouldHandleStateChanges: Boolean(mapStateToProps),

      // passed through to selectorFactory
      initMapStateToProps: initMapStateToProps,
      initMapDispatchToProps: initMapDispatchToProps,
      initMergeProps: initMergeProps,
      pure: pure,
      areStatesEqual: areStatesEqual,
      areOwnPropsEqual: areOwnPropsEqual,
      areStatePropsEqual: areStatePropsEqual,
      areMergedPropsEqual: areMergedPropsEqual

    }, extraOptions));
  };
}

/* harmony default export */ __webpack_exports__["a"] = (createConnect());

/***/ }),
/* 116 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = shallowEqual;
var hasOwn = Object.prototype.hasOwnProperty;

function is(x, y) {
  if (x === y) {
    return x !== 0 || y !== 0 || 1 / x === 1 / y;
  } else {
    return x !== x && y !== y;
  }
}

function shallowEqual(objA, objB) {
  if (is(objA, objB)) return true;

  if (typeof objA !== 'object' || objA === null || typeof objB !== 'object' || objB === null) {
    return false;
  }

  var keysA = Object.keys(objA);
  var keysB = Object.keys(objB);

  if (keysA.length !== keysB.length) return false;

  for (var i = 0; i < keysA.length; i++) {
    if (!hasOwn.call(objB, keysA[i]) || !is(objA[keysA[i]], objB[keysA[i]])) {
      return false;
    }
  }

  return true;
}

/***/ }),
/* 117 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export whenMapDispatchToPropsIsFunction */
/* unused harmony export whenMapDispatchToPropsIsMissing */
/* unused harmony export whenMapDispatchToPropsIsObject */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_redux__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__wrapMapToProps__ = __webpack_require__(61);



function whenMapDispatchToPropsIsFunction(mapDispatchToProps) {
  return typeof mapDispatchToProps === 'function' ? Object(__WEBPACK_IMPORTED_MODULE_1__wrapMapToProps__["b" /* wrapMapToPropsFunc */])(mapDispatchToProps, 'mapDispatchToProps') : undefined;
}

function whenMapDispatchToPropsIsMissing(mapDispatchToProps) {
  return !mapDispatchToProps ? Object(__WEBPACK_IMPORTED_MODULE_1__wrapMapToProps__["a" /* wrapMapToPropsConstant */])(function (dispatch) {
    return { dispatch: dispatch };
  }) : undefined;
}

function whenMapDispatchToPropsIsObject(mapDispatchToProps) {
  return mapDispatchToProps && typeof mapDispatchToProps === 'object' ? Object(__WEBPACK_IMPORTED_MODULE_1__wrapMapToProps__["a" /* wrapMapToPropsConstant */])(function (dispatch) {
    return Object(__WEBPACK_IMPORTED_MODULE_0_redux__["b" /* bindActionCreators */])(mapDispatchToProps, dispatch);
  }) : undefined;
}

/* harmony default export */ __webpack_exports__["a"] = ([whenMapDispatchToPropsIsFunction, whenMapDispatchToPropsIsMissing, whenMapDispatchToPropsIsObject]);

/***/ }),
/* 118 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global, module) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ponyfill_js__ = __webpack_require__(120);
/* global window */


var root;

if (typeof self !== 'undefined') {
  root = self;
} else if (typeof window !== 'undefined') {
  root = window;
} else if (typeof global !== 'undefined') {
  root = global;
} else if (true) {
  root = module;
} else {
  root = Function('return this')();
}

var result = Object(__WEBPACK_IMPORTED_MODULE_0__ponyfill_js__["a" /* default */])(root);
/* harmony default export */ __webpack_exports__["a"] = (result);

/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(9), __webpack_require__(119)(module)))

/***/ }),
/* 119 */
/***/ (function(module, exports) {

module.exports = function(originalModule) {
	if(!originalModule.webpackPolyfill) {
		var module = Object.create(originalModule);
		// module.parent = undefined by default
		if(!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function() {
				return module.i;
			}
		});
		Object.defineProperty(module, "exports", {
			enumerable: true,
		});
		module.webpackPolyfill = 1;
	}
	return module;
};


/***/ }),
/* 120 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = symbolObservablePonyfill;
function symbolObservablePonyfill(root) {
	var result;
	var Symbol = root.Symbol;

	if (typeof Symbol === 'function') {
		if (Symbol.observable) {
			result = Symbol.observable;
		} else {
			result = Symbol('observable');
			Symbol.observable = result;
		}
	} else {
		result = '@@observable';
	}

	return result;
};


/***/ }),
/* 121 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__baseGetTag_js__ = __webpack_require__(122);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__getPrototype_js__ = __webpack_require__(127);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__isObjectLike_js__ = __webpack_require__(129);




/** `Object#toString` result references. */
var objectTag = '[object Object]';

/** Used for built-in method references. */
var funcProto = Function.prototype,
    objectProto = Object.prototype;

/** Used to resolve the decompiled source of functions. */
var funcToString = funcProto.toString;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/** Used to infer the `Object` constructor. */
var objectCtorString = funcToString.call(Object);

/**
 * Checks if `value` is a plain object, that is, an object created by the
 * `Object` constructor or one with a `[[Prototype]]` of `null`.
 *
 * @static
 * @memberOf _
 * @since 0.8.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a plain object, else `false`.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 * }
 *
 * _.isPlainObject(new Foo);
 * // => false
 *
 * _.isPlainObject([1, 2, 3]);
 * // => false
 *
 * _.isPlainObject({ 'x': 0, 'y': 0 });
 * // => true
 *
 * _.isPlainObject(Object.create(null));
 * // => true
 */
function isPlainObject(value) {
  if (!Object(__WEBPACK_IMPORTED_MODULE_2__isObjectLike_js__["a" /* default */])(value) || Object(__WEBPACK_IMPORTED_MODULE_0__baseGetTag_js__["a" /* default */])(value) != objectTag) {
    return false;
  }
  var proto = Object(__WEBPACK_IMPORTED_MODULE_1__getPrototype_js__["a" /* default */])(value);
  if (proto === null) {
    return true;
  }
  var Ctor = hasOwnProperty.call(proto, 'constructor') && proto.constructor;
  return typeof Ctor == 'function' && Ctor instanceof Ctor &&
    funcToString.call(Ctor) == objectCtorString;
}

/* harmony default export */ __webpack_exports__["a"] = (isPlainObject);


/***/ }),
/* 122 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Symbol_js__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__getRawTag_js__ = __webpack_require__(125);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__objectToString_js__ = __webpack_require__(126);




/** `Object#toString` result references. */
var nullTag = '[object Null]',
    undefinedTag = '[object Undefined]';

/** Built-in value references. */
var symToStringTag = __WEBPACK_IMPORTED_MODULE_0__Symbol_js__["a" /* default */] ? __WEBPACK_IMPORTED_MODULE_0__Symbol_js__["a" /* default */].toStringTag : undefined;

/**
 * The base implementation of `getTag` without fallbacks for buggy environments.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
function baseGetTag(value) {
  if (value == null) {
    return value === undefined ? undefinedTag : nullTag;
  }
  return (symToStringTag && symToStringTag in Object(value))
    ? Object(__WEBPACK_IMPORTED_MODULE_1__getRawTag_js__["a" /* default */])(value)
    : Object(__WEBPACK_IMPORTED_MODULE_2__objectToString_js__["a" /* default */])(value);
}

/* harmony default export */ __webpack_exports__["a"] = (baseGetTag);


/***/ }),
/* 123 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__freeGlobal_js__ = __webpack_require__(124);


/** Detect free variable `self`. */
var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

/** Used as a reference to the global object. */
var root = __WEBPACK_IMPORTED_MODULE_0__freeGlobal_js__["a" /* default */] || freeSelf || Function('return this')();

/* harmony default export */ __webpack_exports__["a"] = (root);


/***/ }),
/* 124 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {/** Detect free variable `global` from Node.js. */
var freeGlobal = typeof global == 'object' && global && global.Object === Object && global;

/* harmony default export */ __webpack_exports__["a"] = (freeGlobal);

/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(9)))

/***/ }),
/* 125 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Symbol_js__ = __webpack_require__(63);


/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString = objectProto.toString;

/** Built-in value references. */
var symToStringTag = __WEBPACK_IMPORTED_MODULE_0__Symbol_js__["a" /* default */] ? __WEBPACK_IMPORTED_MODULE_0__Symbol_js__["a" /* default */].toStringTag : undefined;

/**
 * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the raw `toStringTag`.
 */
function getRawTag(value) {
  var isOwn = hasOwnProperty.call(value, symToStringTag),
      tag = value[symToStringTag];

  try {
    value[symToStringTag] = undefined;
    var unmasked = true;
  } catch (e) {}

  var result = nativeObjectToString.call(value);
  if (unmasked) {
    if (isOwn) {
      value[symToStringTag] = tag;
    } else {
      delete value[symToStringTag];
    }
  }
  return result;
}

/* harmony default export */ __webpack_exports__["a"] = (getRawTag);


/***/ }),
/* 126 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/** Used for built-in method references. */
var objectProto = Object.prototype;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString = objectProto.toString;

/**
 * Converts `value` to a string using `Object.prototype.toString`.
 *
 * @private
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 */
function objectToString(value) {
  return nativeObjectToString.call(value);
}

/* harmony default export */ __webpack_exports__["a"] = (objectToString);


/***/ }),
/* 127 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__overArg_js__ = __webpack_require__(128);


/** Built-in value references. */
var getPrototype = Object(__WEBPACK_IMPORTED_MODULE_0__overArg_js__["a" /* default */])(Object.getPrototypeOf, Object);

/* harmony default export */ __webpack_exports__["a"] = (getPrototype);


/***/ }),
/* 128 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/**
 * Creates a unary function that invokes `func` with its argument transformed.
 *
 * @private
 * @param {Function} func The function to wrap.
 * @param {Function} transform The argument transform.
 * @returns {Function} Returns the new function.
 */
function overArg(func, transform) {
  return function(arg) {
    return func(transform(arg));
  };
}

/* harmony default export */ __webpack_exports__["a"] = (overArg);


/***/ }),
/* 129 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */
function isObjectLike(value) {
  return value != null && typeof value == 'object';
}

/* harmony default export */ __webpack_exports__["a"] = (isObjectLike);


/***/ }),
/* 130 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export whenMapStateToPropsIsFunction */
/* unused harmony export whenMapStateToPropsIsMissing */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__wrapMapToProps__ = __webpack_require__(61);


function whenMapStateToPropsIsFunction(mapStateToProps) {
  return typeof mapStateToProps === 'function' ? Object(__WEBPACK_IMPORTED_MODULE_0__wrapMapToProps__["b" /* wrapMapToPropsFunc */])(mapStateToProps, 'mapStateToProps') : undefined;
}

function whenMapStateToPropsIsMissing(mapStateToProps) {
  return !mapStateToProps ? Object(__WEBPACK_IMPORTED_MODULE_0__wrapMapToProps__["a" /* wrapMapToPropsConstant */])(function () {
    return {};
  }) : undefined;
}

/* harmony default export */ __webpack_exports__["a"] = ([whenMapStateToPropsIsFunction, whenMapStateToPropsIsMissing]);

/***/ }),
/* 131 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export defaultMergeProps */
/* unused harmony export wrapMergePropsFunc */
/* unused harmony export whenMergePropsIsFunction */
/* unused harmony export whenMergePropsIsOmitted */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils_verifyPlainObject__ = __webpack_require__(62);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };



function defaultMergeProps(stateProps, dispatchProps, ownProps) {
  return _extends({}, ownProps, stateProps, dispatchProps);
}

function wrapMergePropsFunc(mergeProps) {
  return function initMergePropsProxy(dispatch, _ref) {
    var displayName = _ref.displayName,
        pure = _ref.pure,
        areMergedPropsEqual = _ref.areMergedPropsEqual;

    var hasRunOnce = false;
    var mergedProps = void 0;

    return function mergePropsProxy(stateProps, dispatchProps, ownProps) {
      var nextMergedProps = mergeProps(stateProps, dispatchProps, ownProps);

      if (hasRunOnce) {
        if (!pure || !areMergedPropsEqual(nextMergedProps, mergedProps)) mergedProps = nextMergedProps;
      } else {
        hasRunOnce = true;
        mergedProps = nextMergedProps;

        if (false) verifyPlainObject(mergedProps, displayName, 'mergeProps');
      }

      return mergedProps;
    };
  };
}

function whenMergePropsIsFunction(mergeProps) {
  return typeof mergeProps === 'function' ? wrapMergePropsFunc(mergeProps) : undefined;
}

function whenMergePropsIsOmitted(mergeProps) {
  return !mergeProps ? function () {
    return defaultMergeProps;
  } : undefined;
}

/* harmony default export */ __webpack_exports__["a"] = ([whenMergePropsIsFunction, whenMergePropsIsOmitted]);

/***/ }),
/* 132 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export impureFinalPropsSelectorFactory */
/* unused harmony export pureFinalPropsSelectorFactory */
/* harmony export (immutable) */ __webpack_exports__["a"] = finalPropsSelectorFactory;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__verifySubselectors__ = __webpack_require__(133);
function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }



function impureFinalPropsSelectorFactory(mapStateToProps, mapDispatchToProps, mergeProps, dispatch) {
  return function impureFinalPropsSelector(state, ownProps) {
    return mergeProps(mapStateToProps(state, ownProps), mapDispatchToProps(dispatch, ownProps), ownProps);
  };
}

function pureFinalPropsSelectorFactory(mapStateToProps, mapDispatchToProps, mergeProps, dispatch, _ref) {
  var areStatesEqual = _ref.areStatesEqual,
      areOwnPropsEqual = _ref.areOwnPropsEqual,
      areStatePropsEqual = _ref.areStatePropsEqual;

  var hasRunAtLeastOnce = false;
  var state = void 0;
  var ownProps = void 0;
  var stateProps = void 0;
  var dispatchProps = void 0;
  var mergedProps = void 0;

  function handleFirstCall(firstState, firstOwnProps) {
    state = firstState;
    ownProps = firstOwnProps;
    stateProps = mapStateToProps(state, ownProps);
    dispatchProps = mapDispatchToProps(dispatch, ownProps);
    mergedProps = mergeProps(stateProps, dispatchProps, ownProps);
    hasRunAtLeastOnce = true;
    return mergedProps;
  }

  function handleNewPropsAndNewState() {
    stateProps = mapStateToProps(state, ownProps);

    if (mapDispatchToProps.dependsOnOwnProps) dispatchProps = mapDispatchToProps(dispatch, ownProps);

    mergedProps = mergeProps(stateProps, dispatchProps, ownProps);
    return mergedProps;
  }

  function handleNewProps() {
    if (mapStateToProps.dependsOnOwnProps) stateProps = mapStateToProps(state, ownProps);

    if (mapDispatchToProps.dependsOnOwnProps) dispatchProps = mapDispatchToProps(dispatch, ownProps);

    mergedProps = mergeProps(stateProps, dispatchProps, ownProps);
    return mergedProps;
  }

  function handleNewState() {
    var nextStateProps = mapStateToProps(state, ownProps);
    var statePropsChanged = !areStatePropsEqual(nextStateProps, stateProps);
    stateProps = nextStateProps;

    if (statePropsChanged) mergedProps = mergeProps(stateProps, dispatchProps, ownProps);

    return mergedProps;
  }

  function handleSubsequentCalls(nextState, nextOwnProps) {
    var propsChanged = !areOwnPropsEqual(nextOwnProps, ownProps);
    var stateChanged = !areStatesEqual(nextState, state);
    state = nextState;
    ownProps = nextOwnProps;

    if (propsChanged && stateChanged) return handleNewPropsAndNewState();
    if (propsChanged) return handleNewProps();
    if (stateChanged) return handleNewState();
    return mergedProps;
  }

  return function pureFinalPropsSelector(nextState, nextOwnProps) {
    return hasRunAtLeastOnce ? handleSubsequentCalls(nextState, nextOwnProps) : handleFirstCall(nextState, nextOwnProps);
  };
}

// TODO: Add more comments

// If pure is true, the selector returned by selectorFactory will memoize its results,
// allowing connectAdvanced's shouldComponentUpdate to return false if final
// props have not changed. If false, the selector will always return a new
// object and shouldComponentUpdate will always return true.

function finalPropsSelectorFactory(dispatch, _ref2) {
  var initMapStateToProps = _ref2.initMapStateToProps,
      initMapDispatchToProps = _ref2.initMapDispatchToProps,
      initMergeProps = _ref2.initMergeProps,
      options = _objectWithoutProperties(_ref2, ['initMapStateToProps', 'initMapDispatchToProps', 'initMergeProps']);

  var mapStateToProps = initMapStateToProps(dispatch, options);
  var mapDispatchToProps = initMapDispatchToProps(dispatch, options);
  var mergeProps = initMergeProps(dispatch, options);

  if (false) {
    verifySubselectors(mapStateToProps, mapDispatchToProps, mergeProps, options.displayName);
  }

  var selectorFactory = options.pure ? pureFinalPropsSelectorFactory : impureFinalPropsSelectorFactory;

  return selectorFactory(mapStateToProps, mapDispatchToProps, mergeProps, dispatch, options);
}

/***/ }),
/* 133 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export default */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils_warning__ = __webpack_require__(30);


function verify(selector, methodName, displayName) {
  if (!selector) {
    throw new Error('Unexpected value for ' + methodName + ' in ' + displayName + '.');
  } else if (methodName === 'mapStateToProps' || methodName === 'mapDispatchToProps') {
    if (!selector.hasOwnProperty('dependsOnOwnProps')) {
      Object(__WEBPACK_IMPORTED_MODULE_0__utils_warning__["a" /* default */])('The selector for ' + methodName + ' of ' + displayName + ' did not specify a value for dependsOnOwnProps.');
    }
  }
}

function verifySubselectors(mapStateToProps, mapDispatchToProps, mergeProps, displayName) {
  verify(mapStateToProps, 'mapStateToProps', displayName);
  verify(mapDispatchToProps, 'mapDispatchToProps', displayName);
  verify(mergeProps, 'mergeProps', displayName);
}

/***/ }),
/* 134 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export buildStore */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_redux__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_redux_thunk__ = __webpack_require__(135);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_reducers__ = __webpack_require__(136);
var createStoreWithMiddleware=Object(__WEBPACK_IMPORTED_MODULE_0_redux__["d" /* compose */])(Object(__WEBPACK_IMPORTED_MODULE_0_redux__["a" /* applyMiddleware */])(__WEBPACK_IMPORTED_MODULE_1_redux_thunk__["a" /* default */]),typeof window!=='undefined'&&window.devToolsExtension?window.devToolsExtension():function(f){return f;})(__WEBPACK_IMPORTED_MODULE_0_redux__["e" /* createStore */]);function configureStore(){var initialState=arguments.length>0&&arguments[0]!==undefined?arguments[0]:{};var store=createStoreWithMiddleware(__WEBPACK_IMPORTED_MODULE_2_reducers__["a" /* default */],initialState);return store;}var buildStore=function buildStore(){var initialState=arguments.length>0&&arguments[0]!==undefined?arguments[0]:{};return configureStore(Object.assign({},initialState));};/* harmony default export */ __webpack_exports__["a"] = (buildStore());

/***/ }),
/* 135 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
function createThunkMiddleware(extraArgument) {
  return function (_ref) {
    var dispatch = _ref.dispatch,
        getState = _ref.getState;
    return function (next) {
      return function (action) {
        if (typeof action === 'function') {
          return action(dispatch, getState, extraArgument);
        }

        return next(action);
      };
    };
  };
}

var thunk = createThunkMiddleware();
thunk.withExtraArgument = createThunkMiddleware;

/* harmony default export */ __webpack_exports__["a"] = (thunk);

/***/ }),
/* 136 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_redux__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__pages__ = __webpack_require__(137);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__vacancies__ = __webpack_require__(140);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__current_geo__ = __webpack_require__(171);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__vacancies_filter__ = __webpack_require__(176);
/* harmony default export */ __webpack_exports__["a"] = (Object(__WEBPACK_IMPORTED_MODULE_0_redux__["c" /* combineReducers */])({pages:__WEBPACK_IMPORTED_MODULE_1__pages__["a" /* default */],vacancies:__WEBPACK_IMPORTED_MODULE_2__vacancies__["a" /* default */],currentGeo:__WEBPACK_IMPORTED_MODULE_3__current_geo__["a" /* default */],vacanciesFilter:__WEBPACK_IMPORTED_MODULE_4__vacancies_filter__["a" /* default */]}));

/***/ }),
/* 137 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_redux__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__main__ = __webpack_require__(138);
/* harmony default export */ __webpack_exports__["a"] = (Object(__WEBPACK_IMPORTED_MODULE_0_redux__["c" /* combineReducers */])({main:__WEBPACK_IMPORTED_MODULE_1__main__["a" /* default */]}));

/***/ }),
/* 138 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_redux__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__vacancies__ = __webpack_require__(139);
/* harmony default export */ __webpack_exports__["a"] = (Object(__WEBPACK_IMPORTED_MODULE_0_redux__["c" /* combineReducers */])({vacancies:__WEBPACK_IMPORTED_MODULE_1__vacancies__["a" /* default */]}));

/***/ }),
/* 139 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_constants_actions_vacancies__ = __webpack_require__(31);
var initState={isLoading:false,ids:[]};/* harmony default export */ __webpack_exports__["a"] = (function(){var state=arguments.length>0&&arguments[0]!==undefined?arguments[0]:initState;var action=arguments[1];switch(action.type){case __WEBPACK_IMPORTED_MODULE_0_constants_actions_vacancies__["c" /* FETCH_VACANCIES_SUCCESS */]:return Object.assign({},state,{metadata:action.payload.metadata,ids:action.payload.vacancies.map(function(item){return item.id;})});default:return state;}});

/***/ }),
/* 140 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_redux__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__entities__ = __webpack_require__(141);
/* harmony default export */ __webpack_exports__["a"] = (Object(__WEBPACK_IMPORTED_MODULE_0_redux__["c" /* combineReducers */])({entities:__WEBPACK_IMPORTED_MODULE_1__entities__["a" /* default */]}));

/***/ }),
/* 141 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash_set__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash_set___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_lodash_set__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_constants_actions_vacancies__ = __webpack_require__(31);
var extendCollection=function extendCollection(collection,vacancy){return __WEBPACK_IMPORTED_MODULE_0_lodash_set___default()(collection,vacancy.id,vacancy);};/* harmony default export */ __webpack_exports__["a"] = (function(){var state=arguments.length>0&&arguments[0]!==undefined?arguments[0]:{};var action=arguments[1];switch(action.type){case __WEBPACK_IMPORTED_MODULE_1_constants_actions_vacancies__["c" /* FETCH_VACANCIES_SUCCESS */]:return action.payload.vacancies.reduce(extendCollection,Object.assign({},state));default:return state;}});

/***/ }),
/* 142 */
/***/ (function(module, exports, __webpack_require__) {

var assignValue = __webpack_require__(32),
    castPath = __webpack_require__(12),
    isIndex = __webpack_require__(37),
    isObject = __webpack_require__(3),
    toKey = __webpack_require__(11);

/**
 * The base implementation of `_.set`.
 *
 * @private
 * @param {Object} object The object to modify.
 * @param {Array|string} path The path of the property to set.
 * @param {*} value The value to set.
 * @param {Function} [customizer] The function to customize path creation.
 * @returns {Object} Returns `object`.
 */
function baseSet(object, path, value, customizer) {
  if (!isObject(object)) {
    return object;
  }
  path = castPath(path, object);

  var index = -1,
      length = path.length,
      lastIndex = length - 1,
      nested = object;

  while (nested != null && ++index < length) {
    var key = toKey(path[index]),
        newValue = value;

    if (index != lastIndex) {
      var objValue = nested[key];
      newValue = customizer ? customizer(objValue, key, nested) : undefined;
      if (newValue === undefined) {
        newValue = isObject(objValue)
          ? objValue
          : (isIndex(path[index + 1]) ? [] : {});
      }
    }
    assignValue(nested, key, newValue);
    nested = nested[key];
  }
  return object;
}

module.exports = baseSet;


/***/ }),
/* 143 */
/***/ (function(module, exports, __webpack_require__) {

var isFunction = __webpack_require__(67),
    isMasked = __webpack_require__(146),
    isObject = __webpack_require__(3),
    toSource = __webpack_require__(69);

/**
 * Used to match `RegExp`
 * [syntax characters](http://ecma-international.org/ecma-262/7.0/#sec-patterns).
 */
var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;

/** Used to detect host constructors (Safari). */
var reIsHostCtor = /^\[object .+?Constructor\]$/;

/** Used for built-in method references. */
var funcProto = Function.prototype,
    objectProto = Object.prototype;

/** Used to resolve the decompiled source of functions. */
var funcToString = funcProto.toString;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/** Used to detect if a method is native. */
var reIsNative = RegExp('^' +
  funcToString.call(hasOwnProperty).replace(reRegExpChar, '\\$&')
  .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$'
);

/**
 * The base implementation of `_.isNative` without bad shim checks.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a native function,
 *  else `false`.
 */
function baseIsNative(value) {
  if (!isObject(value) || isMasked(value)) {
    return false;
  }
  var pattern = isFunction(value) ? reIsNative : reIsHostCtor;
  return pattern.test(toSource(value));
}

module.exports = baseIsNative;


/***/ }),
/* 144 */
/***/ (function(module, exports, __webpack_require__) {

var Symbol = __webpack_require__(10);

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString = objectProto.toString;

/** Built-in value references. */
var symToStringTag = Symbol ? Symbol.toStringTag : undefined;

/**
 * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the raw `toStringTag`.
 */
function getRawTag(value) {
  var isOwn = hasOwnProperty.call(value, symToStringTag),
      tag = value[symToStringTag];

  try {
    value[symToStringTag] = undefined;
    var unmasked = true;
  } catch (e) {}

  var result = nativeObjectToString.call(value);
  if (unmasked) {
    if (isOwn) {
      value[symToStringTag] = tag;
    } else {
      delete value[symToStringTag];
    }
  }
  return result;
}

module.exports = getRawTag;


/***/ }),
/* 145 */
/***/ (function(module, exports) {

/** Used for built-in method references. */
var objectProto = Object.prototype;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString = objectProto.toString;

/**
 * Converts `value` to a string using `Object.prototype.toString`.
 *
 * @private
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 */
function objectToString(value) {
  return nativeObjectToString.call(value);
}

module.exports = objectToString;


/***/ }),
/* 146 */
/***/ (function(module, exports, __webpack_require__) {

var coreJsData = __webpack_require__(147);

/** Used to detect methods masquerading as native. */
var maskSrcKey = (function() {
  var uid = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || '');
  return uid ? ('Symbol(src)_1.' + uid) : '';
}());

/**
 * Checks if `func` has its source masked.
 *
 * @private
 * @param {Function} func The function to check.
 * @returns {boolean} Returns `true` if `func` is masked, else `false`.
 */
function isMasked(func) {
  return !!maskSrcKey && (maskSrcKey in func);
}

module.exports = isMasked;


/***/ }),
/* 147 */
/***/ (function(module, exports, __webpack_require__) {

var root = __webpack_require__(2);

/** Used to detect overreaching core-js shims. */
var coreJsData = root['__core-js_shared__'];

module.exports = coreJsData;


/***/ }),
/* 148 */
/***/ (function(module, exports) {

/**
 * Gets the value at `key` of `object`.
 *
 * @private
 * @param {Object} [object] The object to query.
 * @param {string} key The key of the property to get.
 * @returns {*} Returns the property value.
 */
function getValue(object, key) {
  return object == null ? undefined : object[key];
}

module.exports = getValue;


/***/ }),
/* 149 */
/***/ (function(module, exports, __webpack_require__) {

var memoizeCapped = __webpack_require__(150);

/** Used to match property names within property paths. */
var rePropName = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g;

/** Used to match backslashes in property paths. */
var reEscapeChar = /\\(\\)?/g;

/**
 * Converts `string` to a property path array.
 *
 * @private
 * @param {string} string The string to convert.
 * @returns {Array} Returns the property path array.
 */
var stringToPath = memoizeCapped(function(string) {
  var result = [];
  if (string.charCodeAt(0) === 46 /* . */) {
    result.push('');
  }
  string.replace(rePropName, function(match, number, quote, subString) {
    result.push(quote ? subString.replace(reEscapeChar, '$1') : (number || match));
  });
  return result;
});

module.exports = stringToPath;


/***/ }),
/* 150 */
/***/ (function(module, exports, __webpack_require__) {

var memoize = __webpack_require__(151);

/** Used as the maximum memoize cache size. */
var MAX_MEMOIZE_SIZE = 500;

/**
 * A specialized version of `_.memoize` which clears the memoized function's
 * cache when it exceeds `MAX_MEMOIZE_SIZE`.
 *
 * @private
 * @param {Function} func The function to have its output memoized.
 * @returns {Function} Returns the new memoized function.
 */
function memoizeCapped(func) {
  var result = memoize(func, function(key) {
    if (cache.size === MAX_MEMOIZE_SIZE) {
      cache.clear();
    }
    return key;
  });

  var cache = result.cache;
  return result;
}

module.exports = memoizeCapped;


/***/ }),
/* 151 */
/***/ (function(module, exports, __webpack_require__) {

var MapCache = __webpack_require__(35);

/** Error message constants. */
var FUNC_ERROR_TEXT = 'Expected a function';

/**
 * Creates a function that memoizes the result of `func`. If `resolver` is
 * provided, it determines the cache key for storing the result based on the
 * arguments provided to the memoized function. By default, the first argument
 * provided to the memoized function is used as the map cache key. The `func`
 * is invoked with the `this` binding of the memoized function.
 *
 * **Note:** The cache is exposed as the `cache` property on the memoized
 * function. Its creation may be customized by replacing the `_.memoize.Cache`
 * constructor with one whose instances implement the
 * [`Map`](http://ecma-international.org/ecma-262/7.0/#sec-properties-of-the-map-prototype-object)
 * method interface of `clear`, `delete`, `get`, `has`, and `set`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Function
 * @param {Function} func The function to have its output memoized.
 * @param {Function} [resolver] The function to resolve the cache key.
 * @returns {Function} Returns the new memoized function.
 * @example
 *
 * var object = { 'a': 1, 'b': 2 };
 * var other = { 'c': 3, 'd': 4 };
 *
 * var values = _.memoize(_.values);
 * values(object);
 * // => [1, 2]
 *
 * values(other);
 * // => [3, 4]
 *
 * object.a = 2;
 * values(object);
 * // => [1, 2]
 *
 * // Modify the result cache.
 * values.cache.set(object, ['a', 'b']);
 * values(object);
 * // => ['a', 'b']
 *
 * // Replace `_.memoize.Cache`.
 * _.memoize.Cache = WeakMap;
 */
function memoize(func, resolver) {
  if (typeof func != 'function' || (resolver != null && typeof resolver != 'function')) {
    throw new TypeError(FUNC_ERROR_TEXT);
  }
  var memoized = function() {
    var args = arguments,
        key = resolver ? resolver.apply(this, args) : args[0],
        cache = memoized.cache;

    if (cache.has(key)) {
      return cache.get(key);
    }
    var result = func.apply(this, args);
    memoized.cache = cache.set(key, result) || cache;
    return result;
  };
  memoized.cache = new (memoize.Cache || MapCache);
  return memoized;
}

// Expose `MapCache`.
memoize.Cache = MapCache;

module.exports = memoize;


/***/ }),
/* 152 */
/***/ (function(module, exports, __webpack_require__) {

var Hash = __webpack_require__(153),
    ListCache = __webpack_require__(19),
    Map = __webpack_require__(36);

/**
 * Removes all key-value entries from the map.
 *
 * @private
 * @name clear
 * @memberOf MapCache
 */
function mapCacheClear() {
  this.size = 0;
  this.__data__ = {
    'hash': new Hash,
    'map': new (Map || ListCache),
    'string': new Hash
  };
}

module.exports = mapCacheClear;


/***/ }),
/* 153 */
/***/ (function(module, exports, __webpack_require__) {

var hashClear = __webpack_require__(154),
    hashDelete = __webpack_require__(155),
    hashGet = __webpack_require__(156),
    hashHas = __webpack_require__(157),
    hashSet = __webpack_require__(158);

/**
 * Creates a hash object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function Hash(entries) {
  var index = -1,
      length = entries == null ? 0 : entries.length;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

// Add methods to `Hash`.
Hash.prototype.clear = hashClear;
Hash.prototype['delete'] = hashDelete;
Hash.prototype.get = hashGet;
Hash.prototype.has = hashHas;
Hash.prototype.set = hashSet;

module.exports = Hash;


/***/ }),
/* 154 */
/***/ (function(module, exports, __webpack_require__) {

var nativeCreate = __webpack_require__(18);

/**
 * Removes all key-value entries from the hash.
 *
 * @private
 * @name clear
 * @memberOf Hash
 */
function hashClear() {
  this.__data__ = nativeCreate ? nativeCreate(null) : {};
  this.size = 0;
}

module.exports = hashClear;


/***/ }),
/* 155 */
/***/ (function(module, exports) {

/**
 * Removes `key` and its value from the hash.
 *
 * @private
 * @name delete
 * @memberOf Hash
 * @param {Object} hash The hash to modify.
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function hashDelete(key) {
  var result = this.has(key) && delete this.__data__[key];
  this.size -= result ? 1 : 0;
  return result;
}

module.exports = hashDelete;


/***/ }),
/* 156 */
/***/ (function(module, exports, __webpack_require__) {

var nativeCreate = __webpack_require__(18);

/** Used to stand-in for `undefined` hash values. */
var HASH_UNDEFINED = '__lodash_hash_undefined__';

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Gets the hash value for `key`.
 *
 * @private
 * @name get
 * @memberOf Hash
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function hashGet(key) {
  var data = this.__data__;
  if (nativeCreate) {
    var result = data[key];
    return result === HASH_UNDEFINED ? undefined : result;
  }
  return hasOwnProperty.call(data, key) ? data[key] : undefined;
}

module.exports = hashGet;


/***/ }),
/* 157 */
/***/ (function(module, exports, __webpack_require__) {

var nativeCreate = __webpack_require__(18);

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Checks if a hash value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf Hash
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function hashHas(key) {
  var data = this.__data__;
  return nativeCreate ? (data[key] !== undefined) : hasOwnProperty.call(data, key);
}

module.exports = hashHas;


/***/ }),
/* 158 */
/***/ (function(module, exports, __webpack_require__) {

var nativeCreate = __webpack_require__(18);

/** Used to stand-in for `undefined` hash values. */
var HASH_UNDEFINED = '__lodash_hash_undefined__';

/**
 * Sets the hash `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf Hash
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the hash instance.
 */
function hashSet(key, value) {
  var data = this.__data__;
  this.size += this.has(key) ? 0 : 1;
  data[key] = (nativeCreate && value === undefined) ? HASH_UNDEFINED : value;
  return this;
}

module.exports = hashSet;


/***/ }),
/* 159 */
/***/ (function(module, exports) {

/**
 * Removes all key-value entries from the list cache.
 *
 * @private
 * @name clear
 * @memberOf ListCache
 */
function listCacheClear() {
  this.__data__ = [];
  this.size = 0;
}

module.exports = listCacheClear;


/***/ }),
/* 160 */
/***/ (function(module, exports, __webpack_require__) {

var assocIndexOf = __webpack_require__(20);

/** Used for built-in method references. */
var arrayProto = Array.prototype;

/** Built-in value references. */
var splice = arrayProto.splice;

/**
 * Removes `key` and its value from the list cache.
 *
 * @private
 * @name delete
 * @memberOf ListCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function listCacheDelete(key) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  if (index < 0) {
    return false;
  }
  var lastIndex = data.length - 1;
  if (index == lastIndex) {
    data.pop();
  } else {
    splice.call(data, index, 1);
  }
  --this.size;
  return true;
}

module.exports = listCacheDelete;


/***/ }),
/* 161 */
/***/ (function(module, exports, __webpack_require__) {

var assocIndexOf = __webpack_require__(20);

/**
 * Gets the list cache value for `key`.
 *
 * @private
 * @name get
 * @memberOf ListCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function listCacheGet(key) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  return index < 0 ? undefined : data[index][1];
}

module.exports = listCacheGet;


/***/ }),
/* 162 */
/***/ (function(module, exports, __webpack_require__) {

var assocIndexOf = __webpack_require__(20);

/**
 * Checks if a list cache value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf ListCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function listCacheHas(key) {
  return assocIndexOf(this.__data__, key) > -1;
}

module.exports = listCacheHas;


/***/ }),
/* 163 */
/***/ (function(module, exports, __webpack_require__) {

var assocIndexOf = __webpack_require__(20);

/**
 * Sets the list cache `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf ListCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the list cache instance.
 */
function listCacheSet(key, value) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  if (index < 0) {
    ++this.size;
    data.push([key, value]);
  } else {
    data[index][1] = value;
  }
  return this;
}

module.exports = listCacheSet;


/***/ }),
/* 164 */
/***/ (function(module, exports, __webpack_require__) {

var getMapData = __webpack_require__(21);

/**
 * Removes `key` and its value from the map.
 *
 * @private
 * @name delete
 * @memberOf MapCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function mapCacheDelete(key) {
  var result = getMapData(this, key)['delete'](key);
  this.size -= result ? 1 : 0;
  return result;
}

module.exports = mapCacheDelete;


/***/ }),
/* 165 */
/***/ (function(module, exports) {

/**
 * Checks if `value` is suitable for use as unique object key.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is suitable, else `false`.
 */
function isKeyable(value) {
  var type = typeof value;
  return (type == 'string' || type == 'number' || type == 'symbol' || type == 'boolean')
    ? (value !== '__proto__')
    : (value === null);
}

module.exports = isKeyable;


/***/ }),
/* 166 */
/***/ (function(module, exports, __webpack_require__) {

var getMapData = __webpack_require__(21);

/**
 * Gets the map value for `key`.
 *
 * @private
 * @name get
 * @memberOf MapCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function mapCacheGet(key) {
  return getMapData(this, key).get(key);
}

module.exports = mapCacheGet;


/***/ }),
/* 167 */
/***/ (function(module, exports, __webpack_require__) {

var getMapData = __webpack_require__(21);

/**
 * Checks if a map value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf MapCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function mapCacheHas(key) {
  return getMapData(this, key).has(key);
}

module.exports = mapCacheHas;


/***/ }),
/* 168 */
/***/ (function(module, exports, __webpack_require__) {

var getMapData = __webpack_require__(21);

/**
 * Sets the map `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf MapCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the map cache instance.
 */
function mapCacheSet(key, value) {
  var data = getMapData(this, key),
      size = data.size;

  data.set(key, value);
  this.size += data.size == size ? 0 : 1;
  return this;
}

module.exports = mapCacheSet;


/***/ }),
/* 169 */
/***/ (function(module, exports, __webpack_require__) {

var baseToString = __webpack_require__(170);

/**
 * Converts `value` to a string. An empty string is returned for `null`
 * and `undefined` values. The sign of `-0` is preserved.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 * @example
 *
 * _.toString(null);
 * // => ''
 *
 * _.toString(-0);
 * // => '-0'
 *
 * _.toString([1, 2, 3]);
 * // => '1,2,3'
 */
function toString(value) {
  return value == null ? '' : baseToString(value);
}

module.exports = toString;


/***/ }),
/* 170 */
/***/ (function(module, exports, __webpack_require__) {

var Symbol = __webpack_require__(10),
    arrayMap = __webpack_require__(70),
    isArray = __webpack_require__(1),
    isSymbol = __webpack_require__(17);

/** Used as references for various `Number` constants. */
var INFINITY = 1 / 0;

/** Used to convert symbols to primitives and strings. */
var symbolProto = Symbol ? Symbol.prototype : undefined,
    symbolToString = symbolProto ? symbolProto.toString : undefined;

/**
 * The base implementation of `_.toString` which doesn't convert nullish
 * values to empty strings.
 *
 * @private
 * @param {*} value The value to process.
 * @returns {string} Returns the string.
 */
function baseToString(value) {
  // Exit early for strings to avoid a performance hit in some environments.
  if (typeof value == 'string') {
    return value;
  }
  if (isArray(value)) {
    // Recursively convert values (susceptible to call stack limits).
    return arrayMap(value, baseToString) + '';
  }
  if (isSymbol(value)) {
    return symbolToString ? symbolToString.call(value) : '';
  }
  var result = (value + '');
  return (result == '0' && (1 / value) == -INFINITY) ? '-0' : result;
}

module.exports = baseToString;


/***/ }),
/* 171 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export getBounds */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash_head__ = __webpack_require__(172);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash_head___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_lodash_head__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__zp_utils_js_lib_user_storage__ = __webpack_require__(173);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__zp_utils_js_lib_user_storage___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__zp_utils_js_lib_user_storage__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_constants_actions_geo__ = __webpack_require__(71);
var defaultGeo={id:1219,name:'Россия',level:'country',parent_level:null,franchise_name:'Zarplata',mobile_codes:[],domain:'zarplata.ru',skin:'zarplata',site_name:'Зарплата.ру',copyright:'&copy; ООО <a href="#">НГС</a>',geonames_id:2017370,phone_code_length:5,alias:'russia',phone_code:'7',gmt:null,name_ru:'Россия',grammatical_cases_ru:{nominative:'Россия',genitive:'России',locative:'России',locative_preposition:'в'},is_region_capital:false,full_title:'Россия'};var savedGeo=__WEBPACK_IMPORTED_MODULE_1__zp_utils_js_lib_user_storage__["LocalStorage"].getItem('currentGeo');var initialState={data:savedGeo?JSON.parse(savedGeo):null,isLoading:false,errors:[]};/* harmony default export */ __webpack_exports__["a"] = (function(){var state=arguments.length>0&&arguments[0]!==undefined?arguments[0]:initialState;var action=arguments[1];switch(action.type){case __WEBPACK_IMPORTED_MODULE_2_constants_actions_geo__["b" /* FETCH_CURRENT_GEO */]:return Object.assign({},state,{isLoading:true});case __WEBPACK_IMPORTED_MODULE_2_constants_actions_geo__["d" /* FETCH_CURRENT_GEO_SUCCESS */]:var currentGeo=__WEBPACK_IMPORTED_MODULE_0_lodash_head___default()(action.payload.geo);__WEBPACK_IMPORTED_MODULE_1__zp_utils_js_lib_user_storage__["LocalStorage"].setItem('currentGeo',JSON.stringify(currentGeo));return Object.assign({},state,{data:currentGeo,isLoading:false});case __WEBPACK_IMPORTED_MODULE_2_constants_actions_geo__["c" /* FETCH_CURRENT_GEO_FAILURE */]:return Object.assign({},state,{data:defaultGeo,isLoading:false});case __WEBPACK_IMPORTED_MODULE_2_constants_actions_geo__["a" /* CHANGE_CURRENT_GEO */]:__WEBPACK_IMPORTED_MODULE_1__zp_utils_js_lib_user_storage__["LocalStorage"].setItem('currentGeo',JSON.stringify(action.payload));return Object.assign({},state,{data:action.payload});default:return state;}});var getBounds=function getBounds(state){var bounds=state.data.bounds;return bounds&&bounds.length===2?bounds:null;};

/***/ }),
/* 172 */
/***/ (function(module, exports) {

/**
 * Gets the first element of `array`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @alias first
 * @category Array
 * @param {Array} array The array to query.
 * @returns {*} Returns the first element of `array`.
 * @example
 *
 * _.head([1, 2, 3]);
 * // => 1
 *
 * _.head([]);
 * // => undefined
 */
function head(array) {
  return (array && array.length) ? array[0] : undefined;
}

module.exports = head;


/***/ }),
/* 173 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.LocalStorage = exports.StoredData = exports.default = exports.DefaultStorage = exports.HasLocalStorage = void 0;

var _isObject = _interopRequireDefault(__webpack_require__(3));

var _isArray = _interopRequireDefault(__webpack_require__(1));

var _requestIdleCallback = _interopRequireDefault(__webpack_require__(174));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var HasLocalStorage = function HasLocalStorage() {
  try {
    var _window = window,
        localStorage = _window.localStorage;
    var uid = new Date();
    localStorage.setItem(uid, uid);
    localStorage.getItem(uid);
    localStorage.removeItem(uid);
    return true;
  } catch (exception) {
    return false;
  }
};

exports.HasLocalStorage = HasLocalStorage;

var DefaultStorage = function DefaultStorage() {
  var _this = this;

  _classCallCheck(this, DefaultStorage);

  _defineProperty(this, "getItem", function (key) {
    return key in _this._store ? _this._store[key] : undefined;
  });

  _defineProperty(this, "setItem", function (key, value) {
    var val = String(value);
    _this._store[key] = val;
    return val;
  });

  _defineProperty(this, "removeItem", function (key) {
    return delete _this._store[key];
  });

  _defineProperty(this, "clear", function () {
    _this._store = {};
    return _this._store;
  });

  this._store = {};
};

exports.DefaultStorage = DefaultStorage;

var UserStorage = function () {
  function UserStorage(store) {
    _classCallCheck(this, UserStorage);

    if (store) {
      this._store = store;
    }

    if (!HasLocalStorage()) {
      this._store = new DefaultStorage();
      return;
    }

    this._store = window.localStorage;
  }

  _createClass(UserStorage, [{
    key: "getItem",
    value: function getItem(key) {
      return this._store.getItem(key);
    }
  }, {
    key: "setItem",
    value: function setItem(key, value) {
      this._store.setItem(key, value);
    }
  }, {
    key: "setItemIdle",
    value: function setItemIdle(key, value) {
      var _this2 = this;

      (0, _requestIdleCallback.default)(function () {
        var prepareValue = value;

        if ((0, _isArray.default)(value) || (0, _isObject.default)(value)) {
          prepareValue = JSON.stringify(value);
        }

        _this2._store.setItem(key, prepareValue);
      });
    }
  }, {
    key: "removeItem",
    value: function removeItem(key) {
      this._store.removeItem(key);
    }
  }]);

  return UserStorage;
}();

exports.default = UserStorage;

var StoredData = function (_UserStorage) {
  _inherits(StoredData, _UserStorage);

  function StoredData(key, store) {
    var _this3;

    _classCallCheck(this, StoredData);

    _this3 = _possibleConstructorReturn(this, _getPrototypeOf(StoredData).call(this, store));
    _this3._key = key;
    return _this3;
  }

  _createClass(StoredData, [{
    key: "getItem",
    value: function getItem() {
      return _get(_getPrototypeOf(StoredData.prototype), "getItem", this).call(this, this._key);
    }
  }, {
    key: "setItem",
    value: function setItem(value) {
      _get(_getPrototypeOf(StoredData.prototype), "setItem", this).call(this, this._key, value);
    }
  }, {
    key: "setItemIdle",
    value: function setItemIdle(value) {
      _get(_getPrototypeOf(StoredData.prototype), "setItemIdle", this).call(this, this._key, value);
    }
  }, {
    key: "removeItem",
    value: function removeItem() {
      _get(_getPrototypeOf(StoredData.prototype), "removeItem", this).call(this, this._key);
    }
  }]);

  return StoredData;
}(UserStorage);

exports.StoredData = StoredData;
var LocalStorage = new UserStorage();
exports.LocalStorage = LocalStorage;
//# sourceMappingURL=user-storage.js.map

/***/ }),
/* 174 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.cancelIdleCallback = void 0;

var _isBrowser = _interopRequireDefault(__webpack_require__(175));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var Deadline = function Deadline() {
  _classCallCheck(this, Deadline);

  _defineProperty(this, "timeRemaining", function () {
    return 9000;
  });

  _defineProperty(this, "didTimeout", false);
};

var cancelIdleCallback = (0, _isBrowser.default)() && window.cancelIdleCallback || clearTimeout;
exports.cancelIdleCallback = cancelIdleCallback;

var _default = function _default(callback) {
  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  if ((0, _isBrowser.default)() && window.requestIdleCallback) {
    return window.requestIdleCallback(callback, options);
  }

  return setTimeout(function () {
    return callback(new Deadline());
  });
};

exports.default = _default;
//# sourceMappingURL=request-idle-callback.js.map

/***/ }),
/* 175 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var _default = function _default() {
  return (typeof window === "undefined" ? "undefined" : _typeof(window)) === 'object';
};

exports.default = _default;
//# sourceMappingURL=is-browser.js.map

/***/ }),
/* 176 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export mapData */
/* unused harmony export castQueryToFilters */
/* unused harmony export getCleared */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash_isEmpty__ = __webpack_require__(72);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash_isEmpty___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_lodash_isEmpty__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash_isEqual__ = __webpack_require__(185);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash_isEqual___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_lodash_isEqual__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_lodash_reduce__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_lodash_reduce___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_lodash_reduce__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_lodash_omit__ = __webpack_require__(222);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_lodash_omit___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_lodash_omit__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__zp_utils_js_lib_cast_to_type__ = __webpack_require__(260);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__zp_utils_js_lib_cast_to_type___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__zp_utils_js_lib_cast_to_type__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_constants_actions_vacancies_filter__ = __webpack_require__(88);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_constants_vacancies_filters__ = __webpack_require__(262);
function _defineProperty(obj,key,value){if(key in obj){Object.defineProperty(obj,key,{value:value,enumerable:true,configurable:true,writable:true});}else{obj[key]=value;}return obj;}var initialState={q:'',search_type:'',salary:'',geo_id:null,rubric_id:[],district_id:[],subway_line_id:[],subway_id:[],similar_vacancy_id:null,schedule_id:[],working_type_id:[],experience_length_id:[],education_id:[],employees:[],period:'',is_new_only:false,is_available_for_invalids:false,is_available_for_students:false,is_available_for_pensioners:false,employer_group:'',sort:'',speciality_id:0,offset:0,limit:25};// в случае если поменяются типы фильтров или если появятся множественные специализации смотреть сюда
var mapData=function mapData(data,state){if(!data.period){data.is_new_only=false;}var stateRubricId=state.rubric_id||[];var dataRubricId=data.rubric_id||[];if(stateRubricId.length===1&&dataRubricId.length===1&&stateRubricId[0]!==dataRubricId[0]){data.speciality_id=0;}if(dataRubricId.length!==1){data.speciality_id=0;}if(data.q&&data.similar_vacancy_id){data.similar_vacancy_id=null;}return data;};/* harmony default export */ __webpack_exports__["a"] = (function(){var state=arguments.length>0&&arguments[0]!==undefined?arguments[0]:initialState;var action=arguments[1];switch(action.type){case __WEBPACK_IMPORTED_MODULE_5_constants_actions_vacancies_filter__["c" /* RESET_VACANCIES_FILTER */]:var payload=action.payload.value;if(__WEBPACK_IMPORTED_MODULE_0_lodash_isEmpty___default()(payload)){return initialState;}Object.keys(payload).forEach(function(key){payload[key]=Object(__WEBPACK_IMPORTED_MODULE_4__zp_utils_js_lib_cast_to_type__["castToType"])(payload[key],__WEBPACK_IMPORTED_MODULE_6_constants_vacancies_filters__["a" /* defaultTypes */][key]);});return mapData(Object.assign({},initialState,payload),state);case __WEBPACK_IMPORTED_MODULE_5_constants_actions_vacancies_filter__["a" /* CHANGE_VACANCIES_FILTER */]:var _action$payload=action.payload,filterName=_action$payload.filterName,value=_action$payload.value;return mapData(Object.assign({},state,_defineProperty({offset:state[filterName]===value?state.offset:0},filterName,Object(__WEBPACK_IMPORTED_MODULE_4__zp_utils_js_lib_cast_to_type__["castToType"])(value,__WEBPACK_IMPORTED_MODULE_6_constants_vacancies_filters__["a" /* defaultTypes */][filterName]))),state);default:return state;}});var castQueryToFilters=function castQueryToFilters(data){return __WEBPACK_IMPORTED_MODULE_2_lodash_reduce___default()(data,function(result,value,key){result[key]=Object(__WEBPACK_IMPORTED_MODULE_4__zp_utils_js_lib_cast_to_type__["castToType"])(value,__WEBPACK_IMPORTED_MODULE_6_constants_vacancies_filters__["a" /* defaultTypes */][key]);return result;},{});};var getCleared=function getCleared(data){return __WEBPACK_IMPORTED_MODULE_2_lodash_reduce___default()(__WEBPACK_IMPORTED_MODULE_3_lodash_omit___default()(data,'geo_id'),function(result,value,key){var typedValue=Object(__WEBPACK_IMPORTED_MODULE_4__zp_utils_js_lib_cast_to_type__["castToType"])(data[key],__WEBPACK_IMPORTED_MODULE_6_constants_vacancies_filters__["a" /* defaultTypes */][key]);if(!__WEBPACK_IMPORTED_MODULE_1_lodash_isEqual___default()(typedValue,initialState[key])){result[key]=typedValue;}return result;},{});};

/***/ }),
/* 177 */
/***/ (function(module, exports, __webpack_require__) {

var overArg = __webpack_require__(74);

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeKeys = overArg(Object.keys, Object);

module.exports = nativeKeys;


/***/ }),
/* 178 */
/***/ (function(module, exports, __webpack_require__) {

var getNative = __webpack_require__(7),
    root = __webpack_require__(2);

/* Built-in method references that are verified to be native. */
var DataView = getNative(root, 'DataView');

module.exports = DataView;


/***/ }),
/* 179 */
/***/ (function(module, exports, __webpack_require__) {

var getNative = __webpack_require__(7),
    root = __webpack_require__(2);

/* Built-in method references that are verified to be native. */
var Promise = getNative(root, 'Promise');

module.exports = Promise;


/***/ }),
/* 180 */
/***/ (function(module, exports, __webpack_require__) {

var getNative = __webpack_require__(7),
    root = __webpack_require__(2);

/* Built-in method references that are verified to be native. */
var Set = getNative(root, 'Set');

module.exports = Set;


/***/ }),
/* 181 */
/***/ (function(module, exports, __webpack_require__) {

var getNative = __webpack_require__(7),
    root = __webpack_require__(2);

/* Built-in method references that are verified to be native. */
var WeakMap = getNative(root, 'WeakMap');

module.exports = WeakMap;


/***/ }),
/* 182 */
/***/ (function(module, exports, __webpack_require__) {

var baseGetTag = __webpack_require__(8),
    isObjectLike = __webpack_require__(5);

/** `Object#toString` result references. */
var argsTag = '[object Arguments]';

/**
 * The base implementation of `_.isArguments`.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
 */
function baseIsArguments(value) {
  return isObjectLike(value) && baseGetTag(value) == argsTag;
}

module.exports = baseIsArguments;


/***/ }),
/* 183 */
/***/ (function(module, exports) {

/**
 * This method returns `false`.
 *
 * @static
 * @memberOf _
 * @since 4.13.0
 * @category Util
 * @returns {boolean} Returns `false`.
 * @example
 *
 * _.times(2, _.stubFalse);
 * // => [false, false]
 */
function stubFalse() {
  return false;
}

module.exports = stubFalse;


/***/ }),
/* 184 */
/***/ (function(module, exports, __webpack_require__) {

var baseGetTag = __webpack_require__(8),
    isLength = __webpack_require__(38),
    isObjectLike = __webpack_require__(5);

/** `Object#toString` result references. */
var argsTag = '[object Arguments]',
    arrayTag = '[object Array]',
    boolTag = '[object Boolean]',
    dateTag = '[object Date]',
    errorTag = '[object Error]',
    funcTag = '[object Function]',
    mapTag = '[object Map]',
    numberTag = '[object Number]',
    objectTag = '[object Object]',
    regexpTag = '[object RegExp]',
    setTag = '[object Set]',
    stringTag = '[object String]',
    weakMapTag = '[object WeakMap]';

var arrayBufferTag = '[object ArrayBuffer]',
    dataViewTag = '[object DataView]',
    float32Tag = '[object Float32Array]',
    float64Tag = '[object Float64Array]',
    int8Tag = '[object Int8Array]',
    int16Tag = '[object Int16Array]',
    int32Tag = '[object Int32Array]',
    uint8Tag = '[object Uint8Array]',
    uint8ClampedTag = '[object Uint8ClampedArray]',
    uint16Tag = '[object Uint16Array]',
    uint32Tag = '[object Uint32Array]';

/** Used to identify `toStringTag` values of typed arrays. */
var typedArrayTags = {};
typedArrayTags[float32Tag] = typedArrayTags[float64Tag] =
typedArrayTags[int8Tag] = typedArrayTags[int16Tag] =
typedArrayTags[int32Tag] = typedArrayTags[uint8Tag] =
typedArrayTags[uint8ClampedTag] = typedArrayTags[uint16Tag] =
typedArrayTags[uint32Tag] = true;
typedArrayTags[argsTag] = typedArrayTags[arrayTag] =
typedArrayTags[arrayBufferTag] = typedArrayTags[boolTag] =
typedArrayTags[dataViewTag] = typedArrayTags[dateTag] =
typedArrayTags[errorTag] = typedArrayTags[funcTag] =
typedArrayTags[mapTag] = typedArrayTags[numberTag] =
typedArrayTags[objectTag] = typedArrayTags[regexpTag] =
typedArrayTags[setTag] = typedArrayTags[stringTag] =
typedArrayTags[weakMapTag] = false;

/**
 * The base implementation of `_.isTypedArray` without Node.js optimizations.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
 */
function baseIsTypedArray(value) {
  return isObjectLike(value) &&
    isLength(value.length) && !!typedArrayTags[baseGetTag(value)];
}

module.exports = baseIsTypedArray;


/***/ }),
/* 185 */
/***/ (function(module, exports, __webpack_require__) {

var baseIsEqual = __webpack_require__(43);

/**
 * Performs a deep comparison between two values to determine if they are
 * equivalent.
 *
 * **Note:** This method supports comparing arrays, array buffers, booleans,
 * date objects, error objects, maps, numbers, `Object` objects, regexes,
 * sets, strings, symbols, and typed arrays. `Object` objects are compared
 * by their own, not inherited, enumerable properties. Functions and DOM
 * nodes are compared by strict equality, i.e. `===`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 * @example
 *
 * var object = { 'a': 1 };
 * var other = { 'a': 1 };
 *
 * _.isEqual(object, other);
 * // => true
 *
 * object === other;
 * // => false
 */
function isEqual(value, other) {
  return baseIsEqual(value, other);
}

module.exports = isEqual;


/***/ }),
/* 186 */
/***/ (function(module, exports, __webpack_require__) {

var Stack = __webpack_require__(44),
    equalArrays = __webpack_require__(75),
    equalByTag = __webpack_require__(197),
    equalObjects = __webpack_require__(200),
    getTag = __webpack_require__(13),
    isArray = __webpack_require__(1),
    isBuffer = __webpack_require__(25),
    isTypedArray = __webpack_require__(40);

/** Used to compose bitmasks for value comparisons. */
var COMPARE_PARTIAL_FLAG = 1;

/** `Object#toString` result references. */
var argsTag = '[object Arguments]',
    arrayTag = '[object Array]',
    objectTag = '[object Object]';

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * A specialized version of `baseIsEqual` for arrays and objects which performs
 * deep comparisons and tracks traversed objects enabling objects with circular
 * references to be compared.
 *
 * @private
 * @param {Object} object The object to compare.
 * @param {Object} other The other object to compare.
 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
 * @param {Function} customizer The function to customize comparisons.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Object} [stack] Tracks traversed `object` and `other` objects.
 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
 */
function baseIsEqualDeep(object, other, bitmask, customizer, equalFunc, stack) {
  var objIsArr = isArray(object),
      othIsArr = isArray(other),
      objTag = objIsArr ? arrayTag : getTag(object),
      othTag = othIsArr ? arrayTag : getTag(other);

  objTag = objTag == argsTag ? objectTag : objTag;
  othTag = othTag == argsTag ? objectTag : othTag;

  var objIsObj = objTag == objectTag,
      othIsObj = othTag == objectTag,
      isSameTag = objTag == othTag;

  if (isSameTag && isBuffer(object)) {
    if (!isBuffer(other)) {
      return false;
    }
    objIsArr = true;
    objIsObj = false;
  }
  if (isSameTag && !objIsObj) {
    stack || (stack = new Stack);
    return (objIsArr || isTypedArray(object))
      ? equalArrays(object, other, bitmask, customizer, equalFunc, stack)
      : equalByTag(object, other, objTag, bitmask, customizer, equalFunc, stack);
  }
  if (!(bitmask & COMPARE_PARTIAL_FLAG)) {
    var objIsWrapped = objIsObj && hasOwnProperty.call(object, '__wrapped__'),
        othIsWrapped = othIsObj && hasOwnProperty.call(other, '__wrapped__');

    if (objIsWrapped || othIsWrapped) {
      var objUnwrapped = objIsWrapped ? object.value() : object,
          othUnwrapped = othIsWrapped ? other.value() : other;

      stack || (stack = new Stack);
      return equalFunc(objUnwrapped, othUnwrapped, bitmask, customizer, stack);
    }
  }
  if (!isSameTag) {
    return false;
  }
  stack || (stack = new Stack);
  return equalObjects(object, other, bitmask, customizer, equalFunc, stack);
}

module.exports = baseIsEqualDeep;


/***/ }),
/* 187 */
/***/ (function(module, exports, __webpack_require__) {

var ListCache = __webpack_require__(19);

/**
 * Removes all key-value entries from the stack.
 *
 * @private
 * @name clear
 * @memberOf Stack
 */
function stackClear() {
  this.__data__ = new ListCache;
  this.size = 0;
}

module.exports = stackClear;


/***/ }),
/* 188 */
/***/ (function(module, exports) {

/**
 * Removes `key` and its value from the stack.
 *
 * @private
 * @name delete
 * @memberOf Stack
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function stackDelete(key) {
  var data = this.__data__,
      result = data['delete'](key);

  this.size = data.size;
  return result;
}

module.exports = stackDelete;


/***/ }),
/* 189 */
/***/ (function(module, exports) {

/**
 * Gets the stack value for `key`.
 *
 * @private
 * @name get
 * @memberOf Stack
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function stackGet(key) {
  return this.__data__.get(key);
}

module.exports = stackGet;


/***/ }),
/* 190 */
/***/ (function(module, exports) {

/**
 * Checks if a stack value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf Stack
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function stackHas(key) {
  return this.__data__.has(key);
}

module.exports = stackHas;


/***/ }),
/* 191 */
/***/ (function(module, exports, __webpack_require__) {

var ListCache = __webpack_require__(19),
    Map = __webpack_require__(36),
    MapCache = __webpack_require__(35);

/** Used as the size to enable large array optimizations. */
var LARGE_ARRAY_SIZE = 200;

/**
 * Sets the stack `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf Stack
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the stack cache instance.
 */
function stackSet(key, value) {
  var data = this.__data__;
  if (data instanceof ListCache) {
    var pairs = data.__data__;
    if (!Map || (pairs.length < LARGE_ARRAY_SIZE - 1)) {
      pairs.push([key, value]);
      this.size = ++data.size;
      return this;
    }
    data = this.__data__ = new MapCache(pairs);
  }
  data.set(key, value);
  this.size = data.size;
  return this;
}

module.exports = stackSet;


/***/ }),
/* 192 */
/***/ (function(module, exports, __webpack_require__) {

var MapCache = __webpack_require__(35),
    setCacheAdd = __webpack_require__(193),
    setCacheHas = __webpack_require__(194);

/**
 *
 * Creates an array cache object to store unique values.
 *
 * @private
 * @constructor
 * @param {Array} [values] The values to cache.
 */
function SetCache(values) {
  var index = -1,
      length = values == null ? 0 : values.length;

  this.__data__ = new MapCache;
  while (++index < length) {
    this.add(values[index]);
  }
}

// Add methods to `SetCache`.
SetCache.prototype.add = SetCache.prototype.push = setCacheAdd;
SetCache.prototype.has = setCacheHas;

module.exports = SetCache;


/***/ }),
/* 193 */
/***/ (function(module, exports) {

/** Used to stand-in for `undefined` hash values. */
var HASH_UNDEFINED = '__lodash_hash_undefined__';

/**
 * Adds `value` to the array cache.
 *
 * @private
 * @name add
 * @memberOf SetCache
 * @alias push
 * @param {*} value The value to cache.
 * @returns {Object} Returns the cache instance.
 */
function setCacheAdd(value) {
  this.__data__.set(value, HASH_UNDEFINED);
  return this;
}

module.exports = setCacheAdd;


/***/ }),
/* 194 */
/***/ (function(module, exports) {

/**
 * Checks if `value` is in the array cache.
 *
 * @private
 * @name has
 * @memberOf SetCache
 * @param {*} value The value to search for.
 * @returns {number} Returns `true` if `value` is found, else `false`.
 */
function setCacheHas(value) {
  return this.__data__.has(value);
}

module.exports = setCacheHas;


/***/ }),
/* 195 */
/***/ (function(module, exports) {

/**
 * A specialized version of `_.some` for arrays without support for iteratee
 * shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} predicate The function invoked per iteration.
 * @returns {boolean} Returns `true` if any element passes the predicate check,
 *  else `false`.
 */
function arraySome(array, predicate) {
  var index = -1,
      length = array == null ? 0 : array.length;

  while (++index < length) {
    if (predicate(array[index], index, array)) {
      return true;
    }
  }
  return false;
}

module.exports = arraySome;


/***/ }),
/* 196 */
/***/ (function(module, exports) {

/**
 * Checks if a `cache` value for `key` exists.
 *
 * @private
 * @param {Object} cache The cache to query.
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function cacheHas(cache, key) {
  return cache.has(key);
}

module.exports = cacheHas;


/***/ }),
/* 197 */
/***/ (function(module, exports, __webpack_require__) {

var Symbol = __webpack_require__(10),
    Uint8Array = __webpack_require__(76),
    eq = __webpack_require__(33),
    equalArrays = __webpack_require__(75),
    mapToArray = __webpack_require__(198),
    setToArray = __webpack_require__(199);

/** Used to compose bitmasks for value comparisons. */
var COMPARE_PARTIAL_FLAG = 1,
    COMPARE_UNORDERED_FLAG = 2;

/** `Object#toString` result references. */
var boolTag = '[object Boolean]',
    dateTag = '[object Date]',
    errorTag = '[object Error]',
    mapTag = '[object Map]',
    numberTag = '[object Number]',
    regexpTag = '[object RegExp]',
    setTag = '[object Set]',
    stringTag = '[object String]',
    symbolTag = '[object Symbol]';

var arrayBufferTag = '[object ArrayBuffer]',
    dataViewTag = '[object DataView]';

/** Used to convert symbols to primitives and strings. */
var symbolProto = Symbol ? Symbol.prototype : undefined,
    symbolValueOf = symbolProto ? symbolProto.valueOf : undefined;

/**
 * A specialized version of `baseIsEqualDeep` for comparing objects of
 * the same `toStringTag`.
 *
 * **Note:** This function only supports comparing values with tags of
 * `Boolean`, `Date`, `Error`, `Number`, `RegExp`, or `String`.
 *
 * @private
 * @param {Object} object The object to compare.
 * @param {Object} other The other object to compare.
 * @param {string} tag The `toStringTag` of the objects to compare.
 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
 * @param {Function} customizer The function to customize comparisons.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Object} stack Tracks traversed `object` and `other` objects.
 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
 */
function equalByTag(object, other, tag, bitmask, customizer, equalFunc, stack) {
  switch (tag) {
    case dataViewTag:
      if ((object.byteLength != other.byteLength) ||
          (object.byteOffset != other.byteOffset)) {
        return false;
      }
      object = object.buffer;
      other = other.buffer;

    case arrayBufferTag:
      if ((object.byteLength != other.byteLength) ||
          !equalFunc(new Uint8Array(object), new Uint8Array(other))) {
        return false;
      }
      return true;

    case boolTag:
    case dateTag:
    case numberTag:
      // Coerce booleans to `1` or `0` and dates to milliseconds.
      // Invalid dates are coerced to `NaN`.
      return eq(+object, +other);

    case errorTag:
      return object.name == other.name && object.message == other.message;

    case regexpTag:
    case stringTag:
      // Coerce regexes to strings and treat strings, primitives and objects,
      // as equal. See http://www.ecma-international.org/ecma-262/7.0/#sec-regexp.prototype.tostring
      // for more details.
      return object == (other + '');

    case mapTag:
      var convert = mapToArray;

    case setTag:
      var isPartial = bitmask & COMPARE_PARTIAL_FLAG;
      convert || (convert = setToArray);

      if (object.size != other.size && !isPartial) {
        return false;
      }
      // Assume cyclic values are equal.
      var stacked = stack.get(object);
      if (stacked) {
        return stacked == other;
      }
      bitmask |= COMPARE_UNORDERED_FLAG;

      // Recursively compare objects (susceptible to call stack limits).
      stack.set(object, other);
      var result = equalArrays(convert(object), convert(other), bitmask, customizer, equalFunc, stack);
      stack['delete'](object);
      return result;

    case symbolTag:
      if (symbolValueOf) {
        return symbolValueOf.call(object) == symbolValueOf.call(other);
      }
  }
  return false;
}

module.exports = equalByTag;


/***/ }),
/* 198 */
/***/ (function(module, exports) {

/**
 * Converts `map` to its key-value pairs.
 *
 * @private
 * @param {Object} map The map to convert.
 * @returns {Array} Returns the key-value pairs.
 */
function mapToArray(map) {
  var index = -1,
      result = Array(map.size);

  map.forEach(function(value, key) {
    result[++index] = [key, value];
  });
  return result;
}

module.exports = mapToArray;


/***/ }),
/* 199 */
/***/ (function(module, exports) {

/**
 * Converts `set` to an array of its values.
 *
 * @private
 * @param {Object} set The set to convert.
 * @returns {Array} Returns the values.
 */
function setToArray(set) {
  var index = -1,
      result = Array(set.size);

  set.forEach(function(value) {
    result[++index] = value;
  });
  return result;
}

module.exports = setToArray;


/***/ }),
/* 200 */
/***/ (function(module, exports, __webpack_require__) {

var getAllKeys = __webpack_require__(77);

/** Used to compose bitmasks for value comparisons. */
var COMPARE_PARTIAL_FLAG = 1;

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * A specialized version of `baseIsEqualDeep` for objects with support for
 * partial deep comparisons.
 *
 * @private
 * @param {Object} object The object to compare.
 * @param {Object} other The other object to compare.
 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
 * @param {Function} customizer The function to customize comparisons.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Object} stack Tracks traversed `object` and `other` objects.
 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
 */
function equalObjects(object, other, bitmask, customizer, equalFunc, stack) {
  var isPartial = bitmask & COMPARE_PARTIAL_FLAG,
      objProps = getAllKeys(object),
      objLength = objProps.length,
      othProps = getAllKeys(other),
      othLength = othProps.length;

  if (objLength != othLength && !isPartial) {
    return false;
  }
  var index = objLength;
  while (index--) {
    var key = objProps[index];
    if (!(isPartial ? key in other : hasOwnProperty.call(other, key))) {
      return false;
    }
  }
  // Assume cyclic values are equal.
  var stacked = stack.get(object);
  if (stacked && stack.get(other)) {
    return stacked == other;
  }
  var result = true;
  stack.set(object, other);
  stack.set(other, object);

  var skipCtor = isPartial;
  while (++index < objLength) {
    key = objProps[index];
    var objValue = object[key],
        othValue = other[key];

    if (customizer) {
      var compared = isPartial
        ? customizer(othValue, objValue, key, other, object, stack)
        : customizer(objValue, othValue, key, object, other, stack);
    }
    // Recursively compare objects (susceptible to call stack limits).
    if (!(compared === undefined
          ? (objValue === othValue || equalFunc(objValue, othValue, bitmask, customizer, stack))
          : compared
        )) {
      result = false;
      break;
    }
    skipCtor || (skipCtor = key == 'constructor');
  }
  if (result && !skipCtor) {
    var objCtor = object.constructor,
        othCtor = other.constructor;

    // Non `Object` object instances with different constructors are not equal.
    if (objCtor != othCtor &&
        ('constructor' in object && 'constructor' in other) &&
        !(typeof objCtor == 'function' && objCtor instanceof objCtor &&
          typeof othCtor == 'function' && othCtor instanceof othCtor)) {
      result = false;
    }
  }
  stack['delete'](object);
  stack['delete'](other);
  return result;
}

module.exports = equalObjects;


/***/ }),
/* 201 */
/***/ (function(module, exports) {

/**
 * A specialized version of `_.filter` for arrays without support for
 * iteratee shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} predicate The function invoked per iteration.
 * @returns {Array} Returns the new filtered array.
 */
function arrayFilter(array, predicate) {
  var index = -1,
      length = array == null ? 0 : array.length,
      resIndex = 0,
      result = [];

  while (++index < length) {
    var value = array[index];
    if (predicate(value, index, array)) {
      result[resIndex++] = value;
    }
  }
  return result;
}

module.exports = arrayFilter;


/***/ }),
/* 202 */
/***/ (function(module, exports) {

/**
 * The base implementation of `_.times` without support for iteratee shorthands
 * or max array length checks.
 *
 * @private
 * @param {number} n The number of times to invoke `iteratee`.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the array of results.
 */
function baseTimes(n, iteratee) {
  var index = -1,
      result = Array(n);

  while (++index < n) {
    result[index] = iteratee(index);
  }
  return result;
}

module.exports = baseTimes;


/***/ }),
/* 203 */
/***/ (function(module, exports, __webpack_require__) {

var arrayReduce = __webpack_require__(204),
    baseEach = __webpack_require__(205),
    baseIteratee = __webpack_require__(210),
    baseReduce = __webpack_require__(221),
    isArray = __webpack_require__(1);

/**
 * Reduces `collection` to a value which is the accumulated result of running
 * each element in `collection` thru `iteratee`, where each successive
 * invocation is supplied the return value of the previous. If `accumulator`
 * is not given, the first element of `collection` is used as the initial
 * value. The iteratee is invoked with four arguments:
 * (accumulator, value, index|key, collection).
 *
 * Many lodash methods are guarded to work as iteratees for methods like
 * `_.reduce`, `_.reduceRight`, and `_.transform`.
 *
 * The guarded methods are:
 * `assign`, `defaults`, `defaultsDeep`, `includes`, `merge`, `orderBy`,
 * and `sortBy`
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Collection
 * @param {Array|Object} collection The collection to iterate over.
 * @param {Function} [iteratee=_.identity] The function invoked per iteration.
 * @param {*} [accumulator] The initial value.
 * @returns {*} Returns the accumulated value.
 * @see _.reduceRight
 * @example
 *
 * _.reduce([1, 2], function(sum, n) {
 *   return sum + n;
 * }, 0);
 * // => 3
 *
 * _.reduce({ 'a': 1, 'b': 2, 'c': 1 }, function(result, value, key) {
 *   (result[value] || (result[value] = [])).push(key);
 *   return result;
 * }, {});
 * // => { '1': ['a', 'c'], '2': ['b'] } (iteration order is not guaranteed)
 */
function reduce(collection, iteratee, accumulator) {
  var func = isArray(collection) ? arrayReduce : baseReduce,
      initAccum = arguments.length < 3;

  return func(collection, baseIteratee(iteratee, 4), accumulator, initAccum, baseEach);
}

module.exports = reduce;


/***/ }),
/* 204 */
/***/ (function(module, exports) {

/**
 * A specialized version of `_.reduce` for arrays without support for
 * iteratee shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @param {*} [accumulator] The initial value.
 * @param {boolean} [initAccum] Specify using the first element of `array` as
 *  the initial value.
 * @returns {*} Returns the accumulated value.
 */
function arrayReduce(array, iteratee, accumulator, initAccum) {
  var index = -1,
      length = array == null ? 0 : array.length;

  if (initAccum && length) {
    accumulator = array[++index];
  }
  while (++index < length) {
    accumulator = iteratee(accumulator, array[index], index, array);
  }
  return accumulator;
}

module.exports = arrayReduce;


/***/ }),
/* 205 */
/***/ (function(module, exports, __webpack_require__) {

var baseForOwn = __webpack_require__(206),
    createBaseEach = __webpack_require__(209);

/**
 * The base implementation of `_.forEach` without support for iteratee shorthands.
 *
 * @private
 * @param {Array|Object} collection The collection to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array|Object} Returns `collection`.
 */
var baseEach = createBaseEach(baseForOwn);

module.exports = baseEach;


/***/ }),
/* 206 */
/***/ (function(module, exports, __webpack_require__) {

var baseFor = __webpack_require__(207),
    keys = __webpack_require__(14);

/**
 * The base implementation of `_.forOwn` without support for iteratee shorthands.
 *
 * @private
 * @param {Object} object The object to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Object} Returns `object`.
 */
function baseForOwn(object, iteratee) {
  return object && baseFor(object, iteratee, keys);
}

module.exports = baseForOwn;


/***/ }),
/* 207 */
/***/ (function(module, exports, __webpack_require__) {

var createBaseFor = __webpack_require__(208);

/**
 * The base implementation of `baseForOwn` which iterates over `object`
 * properties returned by `keysFunc` and invokes `iteratee` for each property.
 * Iteratee functions may exit iteration early by explicitly returning `false`.
 *
 * @private
 * @param {Object} object The object to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @param {Function} keysFunc The function to get the keys of `object`.
 * @returns {Object} Returns `object`.
 */
var baseFor = createBaseFor();

module.exports = baseFor;


/***/ }),
/* 208 */
/***/ (function(module, exports) {

/**
 * Creates a base function for methods like `_.forIn` and `_.forOwn`.
 *
 * @private
 * @param {boolean} [fromRight] Specify iterating from right to left.
 * @returns {Function} Returns the new base function.
 */
function createBaseFor(fromRight) {
  return function(object, iteratee, keysFunc) {
    var index = -1,
        iterable = Object(object),
        props = keysFunc(object),
        length = props.length;

    while (length--) {
      var key = props[fromRight ? length : ++index];
      if (iteratee(iterable[key], key, iterable) === false) {
        break;
      }
    }
    return object;
  };
}

module.exports = createBaseFor;


/***/ }),
/* 209 */
/***/ (function(module, exports, __webpack_require__) {

var isArrayLike = __webpack_require__(24);

/**
 * Creates a `baseEach` or `baseEachRight` function.
 *
 * @private
 * @param {Function} eachFunc The function to iterate over a collection.
 * @param {boolean} [fromRight] Specify iterating from right to left.
 * @returns {Function} Returns the new base function.
 */
function createBaseEach(eachFunc, fromRight) {
  return function(collection, iteratee) {
    if (collection == null) {
      return collection;
    }
    if (!isArrayLike(collection)) {
      return eachFunc(collection, iteratee);
    }
    var length = collection.length,
        index = fromRight ? length : -1,
        iterable = Object(collection);

    while ((fromRight ? index-- : ++index < length)) {
      if (iteratee(iterable[index], index, iterable) === false) {
        break;
      }
    }
    return collection;
  };
}

module.exports = createBaseEach;


/***/ }),
/* 210 */
/***/ (function(module, exports, __webpack_require__) {

var baseMatches = __webpack_require__(211),
    baseMatchesProperty = __webpack_require__(214),
    identity = __webpack_require__(83),
    isArray = __webpack_require__(1),
    property = __webpack_require__(218);

/**
 * The base implementation of `_.iteratee`.
 *
 * @private
 * @param {*} [value=_.identity] The value to convert to an iteratee.
 * @returns {Function} Returns the iteratee.
 */
function baseIteratee(value) {
  // Don't store the `typeof` result in a variable to avoid a JIT bug in Safari 9.
  // See https://bugs.webkit.org/show_bug.cgi?id=156034 for more details.
  if (typeof value == 'function') {
    return value;
  }
  if (value == null) {
    return identity;
  }
  if (typeof value == 'object') {
    return isArray(value)
      ? baseMatchesProperty(value[0], value[1])
      : baseMatches(value);
  }
  return property(value);
}

module.exports = baseIteratee;


/***/ }),
/* 211 */
/***/ (function(module, exports, __webpack_require__) {

var baseIsMatch = __webpack_require__(212),
    getMatchData = __webpack_require__(213),
    matchesStrictComparable = __webpack_require__(82);

/**
 * The base implementation of `_.matches` which doesn't clone `source`.
 *
 * @private
 * @param {Object} source The object of property values to match.
 * @returns {Function} Returns the new spec function.
 */
function baseMatches(source) {
  var matchData = getMatchData(source);
  if (matchData.length == 1 && matchData[0][2]) {
    return matchesStrictComparable(matchData[0][0], matchData[0][1]);
  }
  return function(object) {
    return object === source || baseIsMatch(object, source, matchData);
  };
}

module.exports = baseMatches;


/***/ }),
/* 212 */
/***/ (function(module, exports, __webpack_require__) {

var Stack = __webpack_require__(44),
    baseIsEqual = __webpack_require__(43);

/** Used to compose bitmasks for value comparisons. */
var COMPARE_PARTIAL_FLAG = 1,
    COMPARE_UNORDERED_FLAG = 2;

/**
 * The base implementation of `_.isMatch` without support for iteratee shorthands.
 *
 * @private
 * @param {Object} object The object to inspect.
 * @param {Object} source The object of property values to match.
 * @param {Array} matchData The property names, values, and compare flags to match.
 * @param {Function} [customizer] The function to customize comparisons.
 * @returns {boolean} Returns `true` if `object` is a match, else `false`.
 */
function baseIsMatch(object, source, matchData, customizer) {
  var index = matchData.length,
      length = index,
      noCustomizer = !customizer;

  if (object == null) {
    return !length;
  }
  object = Object(object);
  while (index--) {
    var data = matchData[index];
    if ((noCustomizer && data[2])
          ? data[1] !== object[data[0]]
          : !(data[0] in object)
        ) {
      return false;
    }
  }
  while (++index < length) {
    data = matchData[index];
    var key = data[0],
        objValue = object[key],
        srcValue = data[1];

    if (noCustomizer && data[2]) {
      if (objValue === undefined && !(key in object)) {
        return false;
      }
    } else {
      var stack = new Stack;
      if (customizer) {
        var result = customizer(objValue, srcValue, key, object, source, stack);
      }
      if (!(result === undefined
            ? baseIsEqual(srcValue, objValue, COMPARE_PARTIAL_FLAG | COMPARE_UNORDERED_FLAG, customizer, stack)
            : result
          )) {
        return false;
      }
    }
  }
  return true;
}

module.exports = baseIsMatch;


/***/ }),
/* 213 */
/***/ (function(module, exports, __webpack_require__) {

var isStrictComparable = __webpack_require__(81),
    keys = __webpack_require__(14);

/**
 * Gets the property names, values, and compare flags of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the match data of `object`.
 */
function getMatchData(object) {
  var result = keys(object),
      length = result.length;

  while (length--) {
    var key = result[length],
        value = object[key];

    result[length] = [key, value, isStrictComparable(value)];
  }
  return result;
}

module.exports = getMatchData;


/***/ }),
/* 214 */
/***/ (function(module, exports, __webpack_require__) {

var baseIsEqual = __webpack_require__(43),
    get = __webpack_require__(47),
    hasIn = __webpack_require__(215),
    isKey = __webpack_require__(34),
    isStrictComparable = __webpack_require__(81),
    matchesStrictComparable = __webpack_require__(82),
    toKey = __webpack_require__(11);

/** Used to compose bitmasks for value comparisons. */
var COMPARE_PARTIAL_FLAG = 1,
    COMPARE_UNORDERED_FLAG = 2;

/**
 * The base implementation of `_.matchesProperty` which doesn't clone `srcValue`.
 *
 * @private
 * @param {string} path The path of the property to get.
 * @param {*} srcValue The value to match.
 * @returns {Function} Returns the new spec function.
 */
function baseMatchesProperty(path, srcValue) {
  if (isKey(path) && isStrictComparable(srcValue)) {
    return matchesStrictComparable(toKey(path), srcValue);
  }
  return function(object) {
    var objValue = get(object, path);
    return (objValue === undefined && objValue === srcValue)
      ? hasIn(object, path)
      : baseIsEqual(srcValue, objValue, COMPARE_PARTIAL_FLAG | COMPARE_UNORDERED_FLAG);
  };
}

module.exports = baseMatchesProperty;


/***/ }),
/* 215 */
/***/ (function(module, exports, __webpack_require__) {

var baseHasIn = __webpack_require__(216),
    hasPath = __webpack_require__(217);

/**
 * Checks if `path` is a direct or inherited property of `object`.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Object
 * @param {Object} object The object to query.
 * @param {Array|string} path The path to check.
 * @returns {boolean} Returns `true` if `path` exists, else `false`.
 * @example
 *
 * var object = _.create({ 'a': _.create({ 'b': 2 }) });
 *
 * _.hasIn(object, 'a');
 * // => true
 *
 * _.hasIn(object, 'a.b');
 * // => true
 *
 * _.hasIn(object, ['a', 'b']);
 * // => true
 *
 * _.hasIn(object, 'b');
 * // => false
 */
function hasIn(object, path) {
  return object != null && hasPath(object, path, baseHasIn);
}

module.exports = hasIn;


/***/ }),
/* 216 */
/***/ (function(module, exports) {

/**
 * The base implementation of `_.hasIn` without support for deep paths.
 *
 * @private
 * @param {Object} [object] The object to query.
 * @param {Array|string} key The key to check.
 * @returns {boolean} Returns `true` if `key` exists, else `false`.
 */
function baseHasIn(object, key) {
  return object != null && key in Object(object);
}

module.exports = baseHasIn;


/***/ }),
/* 217 */
/***/ (function(module, exports, __webpack_require__) {

var castPath = __webpack_require__(12),
    isArguments = __webpack_require__(23),
    isArray = __webpack_require__(1),
    isIndex = __webpack_require__(37),
    isLength = __webpack_require__(38),
    toKey = __webpack_require__(11);

/**
 * Checks if `path` exists on `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Array|string} path The path to check.
 * @param {Function} hasFunc The function to check properties.
 * @returns {boolean} Returns `true` if `path` exists, else `false`.
 */
function hasPath(object, path, hasFunc) {
  path = castPath(path, object);

  var index = -1,
      length = path.length,
      result = false;

  while (++index < length) {
    var key = toKey(path[index]);
    if (!(result = object != null && hasFunc(object, key))) {
      break;
    }
    object = object[key];
  }
  if (result || ++index != length) {
    return result;
  }
  length = object == null ? 0 : object.length;
  return !!length && isLength(length) && isIndex(key, length) &&
    (isArray(object) || isArguments(object));
}

module.exports = hasPath;


/***/ }),
/* 218 */
/***/ (function(module, exports, __webpack_require__) {

var baseProperty = __webpack_require__(219),
    basePropertyDeep = __webpack_require__(220),
    isKey = __webpack_require__(34),
    toKey = __webpack_require__(11);

/**
 * Creates a function that returns the value at `path` of a given object.
 *
 * @static
 * @memberOf _
 * @since 2.4.0
 * @category Util
 * @param {Array|string} path The path of the property to get.
 * @returns {Function} Returns the new accessor function.
 * @example
 *
 * var objects = [
 *   { 'a': { 'b': 2 } },
 *   { 'a': { 'b': 1 } }
 * ];
 *
 * _.map(objects, _.property('a.b'));
 * // => [2, 1]
 *
 * _.map(_.sortBy(objects, _.property(['a', 'b'])), 'a.b');
 * // => [1, 2]
 */
function property(path) {
  return isKey(path) ? baseProperty(toKey(path)) : basePropertyDeep(path);
}

module.exports = property;


/***/ }),
/* 219 */
/***/ (function(module, exports) {

/**
 * The base implementation of `_.property` without support for deep paths.
 *
 * @private
 * @param {string} key The key of the property to get.
 * @returns {Function} Returns the new accessor function.
 */
function baseProperty(key) {
  return function(object) {
    return object == null ? undefined : object[key];
  };
}

module.exports = baseProperty;


/***/ }),
/* 220 */
/***/ (function(module, exports, __webpack_require__) {

var baseGet = __webpack_require__(48);

/**
 * A specialized version of `baseProperty` which supports deep paths.
 *
 * @private
 * @param {Array|string} path The path of the property to get.
 * @returns {Function} Returns the new accessor function.
 */
function basePropertyDeep(path) {
  return function(object) {
    return baseGet(object, path);
  };
}

module.exports = basePropertyDeep;


/***/ }),
/* 221 */
/***/ (function(module, exports) {

/**
 * The base implementation of `_.reduce` and `_.reduceRight`, without support
 * for iteratee shorthands, which iterates over `collection` using `eachFunc`.
 *
 * @private
 * @param {Array|Object} collection The collection to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @param {*} accumulator The initial value.
 * @param {boolean} initAccum Specify using the first or last element of
 *  `collection` as the initial value.
 * @param {Function} eachFunc The function to iterate over `collection`.
 * @returns {*} Returns the accumulated value.
 */
function baseReduce(collection, iteratee, accumulator, initAccum, eachFunc) {
  eachFunc(collection, function(value, index, collection) {
    accumulator = initAccum
      ? (initAccum = false, value)
      : iteratee(accumulator, value, index, collection);
  });
  return accumulator;
}

module.exports = baseReduce;


/***/ }),
/* 222 */
/***/ (function(module, exports, __webpack_require__) {

var arrayMap = __webpack_require__(70),
    baseClone = __webpack_require__(223),
    baseUnset = __webpack_require__(245),
    castPath = __webpack_require__(12),
    copyObject = __webpack_require__(15),
    customOmitClone = __webpack_require__(249),
    flatRest = __webpack_require__(250),
    getAllKeysIn = __webpack_require__(86);

/** Used to compose bitmasks for cloning. */
var CLONE_DEEP_FLAG = 1,
    CLONE_FLAT_FLAG = 2,
    CLONE_SYMBOLS_FLAG = 4;

/**
 * The opposite of `_.pick`; this method creates an object composed of the
 * own and inherited enumerable property paths of `object` that are not omitted.
 *
 * **Note:** This method is considerably slower than `_.pick`.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Object
 * @param {Object} object The source object.
 * @param {...(string|string[])} [paths] The property paths to omit.
 * @returns {Object} Returns the new object.
 * @example
 *
 * var object = { 'a': 1, 'b': '2', 'c': 3 };
 *
 * _.omit(object, ['a', 'c']);
 * // => { 'b': '2' }
 */
var omit = flatRest(function(object, paths) {
  var result = {};
  if (object == null) {
    return result;
  }
  var isDeep = false;
  paths = arrayMap(paths, function(path) {
    path = castPath(path, object);
    isDeep || (isDeep = path.length > 1);
    return path;
  });
  copyObject(object, getAllKeysIn(object), result);
  if (isDeep) {
    result = baseClone(result, CLONE_DEEP_FLAG | CLONE_FLAT_FLAG | CLONE_SYMBOLS_FLAG, customOmitClone);
  }
  var length = paths.length;
  while (length--) {
    baseUnset(result, paths[length]);
  }
  return result;
});

module.exports = omit;


/***/ }),
/* 223 */
/***/ (function(module, exports, __webpack_require__) {

var Stack = __webpack_require__(44),
    arrayEach = __webpack_require__(224),
    assignValue = __webpack_require__(32),
    baseAssign = __webpack_require__(225),
    baseAssignIn = __webpack_require__(226),
    cloneBuffer = __webpack_require__(229),
    copyArray = __webpack_require__(230),
    copySymbols = __webpack_require__(231),
    copySymbolsIn = __webpack_require__(232),
    getAllKeys = __webpack_require__(77),
    getAllKeysIn = __webpack_require__(86),
    getTag = __webpack_require__(13),
    initCloneArray = __webpack_require__(233),
    initCloneByTag = __webpack_require__(234),
    initCloneObject = __webpack_require__(239),
    isArray = __webpack_require__(1),
    isBuffer = __webpack_require__(25),
    isMap = __webpack_require__(241),
    isObject = __webpack_require__(3),
    isSet = __webpack_require__(243),
    keys = __webpack_require__(14);

/** Used to compose bitmasks for cloning. */
var CLONE_DEEP_FLAG = 1,
    CLONE_FLAT_FLAG = 2,
    CLONE_SYMBOLS_FLAG = 4;

/** `Object#toString` result references. */
var argsTag = '[object Arguments]',
    arrayTag = '[object Array]',
    boolTag = '[object Boolean]',
    dateTag = '[object Date]',
    errorTag = '[object Error]',
    funcTag = '[object Function]',
    genTag = '[object GeneratorFunction]',
    mapTag = '[object Map]',
    numberTag = '[object Number]',
    objectTag = '[object Object]',
    regexpTag = '[object RegExp]',
    setTag = '[object Set]',
    stringTag = '[object String]',
    symbolTag = '[object Symbol]',
    weakMapTag = '[object WeakMap]';

var arrayBufferTag = '[object ArrayBuffer]',
    dataViewTag = '[object DataView]',
    float32Tag = '[object Float32Array]',
    float64Tag = '[object Float64Array]',
    int8Tag = '[object Int8Array]',
    int16Tag = '[object Int16Array]',
    int32Tag = '[object Int32Array]',
    uint8Tag = '[object Uint8Array]',
    uint8ClampedTag = '[object Uint8ClampedArray]',
    uint16Tag = '[object Uint16Array]',
    uint32Tag = '[object Uint32Array]';

/** Used to identify `toStringTag` values supported by `_.clone`. */
var cloneableTags = {};
cloneableTags[argsTag] = cloneableTags[arrayTag] =
cloneableTags[arrayBufferTag] = cloneableTags[dataViewTag] =
cloneableTags[boolTag] = cloneableTags[dateTag] =
cloneableTags[float32Tag] = cloneableTags[float64Tag] =
cloneableTags[int8Tag] = cloneableTags[int16Tag] =
cloneableTags[int32Tag] = cloneableTags[mapTag] =
cloneableTags[numberTag] = cloneableTags[objectTag] =
cloneableTags[regexpTag] = cloneableTags[setTag] =
cloneableTags[stringTag] = cloneableTags[symbolTag] =
cloneableTags[uint8Tag] = cloneableTags[uint8ClampedTag] =
cloneableTags[uint16Tag] = cloneableTags[uint32Tag] = true;
cloneableTags[errorTag] = cloneableTags[funcTag] =
cloneableTags[weakMapTag] = false;

/**
 * The base implementation of `_.clone` and `_.cloneDeep` which tracks
 * traversed objects.
 *
 * @private
 * @param {*} value The value to clone.
 * @param {boolean} bitmask The bitmask flags.
 *  1 - Deep clone
 *  2 - Flatten inherited properties
 *  4 - Clone symbols
 * @param {Function} [customizer] The function to customize cloning.
 * @param {string} [key] The key of `value`.
 * @param {Object} [object] The parent object of `value`.
 * @param {Object} [stack] Tracks traversed objects and their clone counterparts.
 * @returns {*} Returns the cloned value.
 */
function baseClone(value, bitmask, customizer, key, object, stack) {
  var result,
      isDeep = bitmask & CLONE_DEEP_FLAG,
      isFlat = bitmask & CLONE_FLAT_FLAG,
      isFull = bitmask & CLONE_SYMBOLS_FLAG;

  if (customizer) {
    result = object ? customizer(value, key, object, stack) : customizer(value);
  }
  if (result !== undefined) {
    return result;
  }
  if (!isObject(value)) {
    return value;
  }
  var isArr = isArray(value);
  if (isArr) {
    result = initCloneArray(value);
    if (!isDeep) {
      return copyArray(value, result);
    }
  } else {
    var tag = getTag(value),
        isFunc = tag == funcTag || tag == genTag;

    if (isBuffer(value)) {
      return cloneBuffer(value, isDeep);
    }
    if (tag == objectTag || tag == argsTag || (isFunc && !object)) {
      result = (isFlat || isFunc) ? {} : initCloneObject(value);
      if (!isDeep) {
        return isFlat
          ? copySymbolsIn(value, baseAssignIn(result, value))
          : copySymbols(value, baseAssign(result, value));
      }
    } else {
      if (!cloneableTags[tag]) {
        return object ? value : {};
      }
      result = initCloneByTag(value, tag, isDeep);
    }
  }
  // Check for circular references and return its corresponding clone.
  stack || (stack = new Stack);
  var stacked = stack.get(value);
  if (stacked) {
    return stacked;
  }
  stack.set(value, result);

  if (isSet(value)) {
    value.forEach(function(subValue) {
      result.add(baseClone(subValue, bitmask, customizer, subValue, value, stack));
    });

    return result;
  }

  if (isMap(value)) {
    value.forEach(function(subValue, key) {
      result.set(key, baseClone(subValue, bitmask, customizer, key, value, stack));
    });

    return result;
  }

  var keysFunc = isFull
    ? (isFlat ? getAllKeysIn : getAllKeys)
    : (isFlat ? keysIn : keys);

  var props = isArr ? undefined : keysFunc(value);
  arrayEach(props || value, function(subValue, key) {
    if (props) {
      key = subValue;
      subValue = value[key];
    }
    // Recursively populate clone (susceptible to call stack limits).
    assignValue(result, key, baseClone(subValue, bitmask, customizer, key, value, stack));
  });
  return result;
}

module.exports = baseClone;


/***/ }),
/* 224 */
/***/ (function(module, exports) {

/**
 * A specialized version of `_.forEach` for arrays without support for
 * iteratee shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns `array`.
 */
function arrayEach(array, iteratee) {
  var index = -1,
      length = array == null ? 0 : array.length;

  while (++index < length) {
    if (iteratee(array[index], index, array) === false) {
      break;
    }
  }
  return array;
}

module.exports = arrayEach;


/***/ }),
/* 225 */
/***/ (function(module, exports, __webpack_require__) {

var copyObject = __webpack_require__(15),
    keys = __webpack_require__(14);

/**
 * The base implementation of `_.assign` without support for multiple sources
 * or `customizer` functions.
 *
 * @private
 * @param {Object} object The destination object.
 * @param {Object} source The source object.
 * @returns {Object} Returns `object`.
 */
function baseAssign(object, source) {
  return object && copyObject(source, keys(source), object);
}

module.exports = baseAssign;


/***/ }),
/* 226 */
/***/ (function(module, exports, __webpack_require__) {

var copyObject = __webpack_require__(15),
    keysIn = __webpack_require__(84);

/**
 * The base implementation of `_.assignIn` without support for multiple sources
 * or `customizer` functions.
 *
 * @private
 * @param {Object} object The destination object.
 * @param {Object} source The source object.
 * @returns {Object} Returns `object`.
 */
function baseAssignIn(object, source) {
  return object && copyObject(source, keysIn(source), object);
}

module.exports = baseAssignIn;


/***/ }),
/* 227 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(3),
    isPrototype = __webpack_require__(22),
    nativeKeysIn = __webpack_require__(228);

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * The base implementation of `_.keysIn` which doesn't treat sparse arrays as dense.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 */
function baseKeysIn(object) {
  if (!isObject(object)) {
    return nativeKeysIn(object);
  }
  var isProto = isPrototype(object),
      result = [];

  for (var key in object) {
    if (!(key == 'constructor' && (isProto || !hasOwnProperty.call(object, key)))) {
      result.push(key);
    }
  }
  return result;
}

module.exports = baseKeysIn;


/***/ }),
/* 228 */
/***/ (function(module, exports) {

/**
 * This function is like
 * [`Object.keys`](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
 * except that it includes inherited enumerable properties.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 */
function nativeKeysIn(object) {
  var result = [];
  if (object != null) {
    for (var key in Object(object)) {
      result.push(key);
    }
  }
  return result;
}

module.exports = nativeKeysIn;


/***/ }),
/* 229 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {var root = __webpack_require__(2);

/** Detect free variable `exports`. */
var freeExports = typeof exports == 'object' && exports && !exports.nodeType && exports;

/** Detect free variable `module`. */
var freeModule = freeExports && typeof module == 'object' && module && !module.nodeType && module;

/** Detect the popular CommonJS extension `module.exports`. */
var moduleExports = freeModule && freeModule.exports === freeExports;

/** Built-in value references. */
var Buffer = moduleExports ? root.Buffer : undefined,
    allocUnsafe = Buffer ? Buffer.allocUnsafe : undefined;

/**
 * Creates a clone of  `buffer`.
 *
 * @private
 * @param {Buffer} buffer The buffer to clone.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Buffer} Returns the cloned buffer.
 */
function cloneBuffer(buffer, isDeep) {
  if (isDeep) {
    return buffer.slice();
  }
  var length = buffer.length,
      result = allocUnsafe ? allocUnsafe(length) : new buffer.constructor(length);

  buffer.copy(result);
  return result;
}

module.exports = cloneBuffer;

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(39)(module)))

/***/ }),
/* 230 */
/***/ (function(module, exports) {

/**
 * Copies the values of `source` to `array`.
 *
 * @private
 * @param {Array} source The array to copy values from.
 * @param {Array} [array=[]] The array to copy values to.
 * @returns {Array} Returns `array`.
 */
function copyArray(source, array) {
  var index = -1,
      length = source.length;

  array || (array = Array(length));
  while (++index < length) {
    array[index] = source[index];
  }
  return array;
}

module.exports = copyArray;


/***/ }),
/* 231 */
/***/ (function(module, exports, __webpack_require__) {

var copyObject = __webpack_require__(15),
    getSymbols = __webpack_require__(46);

/**
 * Copies own symbols of `source` to `object`.
 *
 * @private
 * @param {Object} source The object to copy symbols from.
 * @param {Object} [object={}] The object to copy symbols to.
 * @returns {Object} Returns `object`.
 */
function copySymbols(source, object) {
  return copyObject(source, getSymbols(source), object);
}

module.exports = copySymbols;


/***/ }),
/* 232 */
/***/ (function(module, exports, __webpack_require__) {

var copyObject = __webpack_require__(15),
    getSymbolsIn = __webpack_require__(85);

/**
 * Copies own and inherited symbols of `source` to `object`.
 *
 * @private
 * @param {Object} source The object to copy symbols from.
 * @param {Object} [object={}] The object to copy symbols to.
 * @returns {Object} Returns `object`.
 */
function copySymbolsIn(source, object) {
  return copyObject(source, getSymbolsIn(source), object);
}

module.exports = copySymbolsIn;


/***/ }),
/* 233 */
/***/ (function(module, exports) {

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Initializes an array clone.
 *
 * @private
 * @param {Array} array The array to clone.
 * @returns {Array} Returns the initialized clone.
 */
function initCloneArray(array) {
  var length = array.length,
      result = new array.constructor(length);

  // Add properties assigned by `RegExp#exec`.
  if (length && typeof array[0] == 'string' && hasOwnProperty.call(array, 'index')) {
    result.index = array.index;
    result.input = array.input;
  }
  return result;
}

module.exports = initCloneArray;


/***/ }),
/* 234 */
/***/ (function(module, exports, __webpack_require__) {

var cloneArrayBuffer = __webpack_require__(50),
    cloneDataView = __webpack_require__(235),
    cloneRegExp = __webpack_require__(236),
    cloneSymbol = __webpack_require__(237),
    cloneTypedArray = __webpack_require__(238);

/** `Object#toString` result references. */
var boolTag = '[object Boolean]',
    dateTag = '[object Date]',
    mapTag = '[object Map]',
    numberTag = '[object Number]',
    regexpTag = '[object RegExp]',
    setTag = '[object Set]',
    stringTag = '[object String]',
    symbolTag = '[object Symbol]';

var arrayBufferTag = '[object ArrayBuffer]',
    dataViewTag = '[object DataView]',
    float32Tag = '[object Float32Array]',
    float64Tag = '[object Float64Array]',
    int8Tag = '[object Int8Array]',
    int16Tag = '[object Int16Array]',
    int32Tag = '[object Int32Array]',
    uint8Tag = '[object Uint8Array]',
    uint8ClampedTag = '[object Uint8ClampedArray]',
    uint16Tag = '[object Uint16Array]',
    uint32Tag = '[object Uint32Array]';

/**
 * Initializes an object clone based on its `toStringTag`.
 *
 * **Note:** This function only supports cloning values with tags of
 * `Boolean`, `Date`, `Error`, `Map`, `Number`, `RegExp`, `Set`, or `String`.
 *
 * @private
 * @param {Object} object The object to clone.
 * @param {string} tag The `toStringTag` of the object to clone.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Object} Returns the initialized clone.
 */
function initCloneByTag(object, tag, isDeep) {
  var Ctor = object.constructor;
  switch (tag) {
    case arrayBufferTag:
      return cloneArrayBuffer(object);

    case boolTag:
    case dateTag:
      return new Ctor(+object);

    case dataViewTag:
      return cloneDataView(object, isDeep);

    case float32Tag: case float64Tag:
    case int8Tag: case int16Tag: case int32Tag:
    case uint8Tag: case uint8ClampedTag: case uint16Tag: case uint32Tag:
      return cloneTypedArray(object, isDeep);

    case mapTag:
      return new Ctor;

    case numberTag:
    case stringTag:
      return new Ctor(object);

    case regexpTag:
      return cloneRegExp(object);

    case setTag:
      return new Ctor;

    case symbolTag:
      return cloneSymbol(object);
  }
}

module.exports = initCloneByTag;


/***/ }),
/* 235 */
/***/ (function(module, exports, __webpack_require__) {

var cloneArrayBuffer = __webpack_require__(50);

/**
 * Creates a clone of `dataView`.
 *
 * @private
 * @param {Object} dataView The data view to clone.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Object} Returns the cloned data view.
 */
function cloneDataView(dataView, isDeep) {
  var buffer = isDeep ? cloneArrayBuffer(dataView.buffer) : dataView.buffer;
  return new dataView.constructor(buffer, dataView.byteOffset, dataView.byteLength);
}

module.exports = cloneDataView;


/***/ }),
/* 236 */
/***/ (function(module, exports) {

/** Used to match `RegExp` flags from their coerced string values. */
var reFlags = /\w*$/;

/**
 * Creates a clone of `regexp`.
 *
 * @private
 * @param {Object} regexp The regexp to clone.
 * @returns {Object} Returns the cloned regexp.
 */
function cloneRegExp(regexp) {
  var result = new regexp.constructor(regexp.source, reFlags.exec(regexp));
  result.lastIndex = regexp.lastIndex;
  return result;
}

module.exports = cloneRegExp;


/***/ }),
/* 237 */
/***/ (function(module, exports, __webpack_require__) {

var Symbol = __webpack_require__(10);

/** Used to convert symbols to primitives and strings. */
var symbolProto = Symbol ? Symbol.prototype : undefined,
    symbolValueOf = symbolProto ? symbolProto.valueOf : undefined;

/**
 * Creates a clone of the `symbol` object.
 *
 * @private
 * @param {Object} symbol The symbol object to clone.
 * @returns {Object} Returns the cloned symbol object.
 */
function cloneSymbol(symbol) {
  return symbolValueOf ? Object(symbolValueOf.call(symbol)) : {};
}

module.exports = cloneSymbol;


/***/ }),
/* 238 */
/***/ (function(module, exports, __webpack_require__) {

var cloneArrayBuffer = __webpack_require__(50);

/**
 * Creates a clone of `typedArray`.
 *
 * @private
 * @param {Object} typedArray The typed array to clone.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Object} Returns the cloned typed array.
 */
function cloneTypedArray(typedArray, isDeep) {
  var buffer = isDeep ? cloneArrayBuffer(typedArray.buffer) : typedArray.buffer;
  return new typedArray.constructor(buffer, typedArray.byteOffset, typedArray.length);
}

module.exports = cloneTypedArray;


/***/ }),
/* 239 */
/***/ (function(module, exports, __webpack_require__) {

var baseCreate = __webpack_require__(240),
    getPrototype = __webpack_require__(49),
    isPrototype = __webpack_require__(22);

/**
 * Initializes an object clone.
 *
 * @private
 * @param {Object} object The object to clone.
 * @returns {Object} Returns the initialized clone.
 */
function initCloneObject(object) {
  return (typeof object.constructor == 'function' && !isPrototype(object))
    ? baseCreate(getPrototype(object))
    : {};
}

module.exports = initCloneObject;


/***/ }),
/* 240 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(3);

/** Built-in value references. */
var objectCreate = Object.create;

/**
 * The base implementation of `_.create` without support for assigning
 * properties to the created object.
 *
 * @private
 * @param {Object} proto The object to inherit from.
 * @returns {Object} Returns the new object.
 */
var baseCreate = (function() {
  function object() {}
  return function(proto) {
    if (!isObject(proto)) {
      return {};
    }
    if (objectCreate) {
      return objectCreate(proto);
    }
    object.prototype = proto;
    var result = new object;
    object.prototype = undefined;
    return result;
  };
}());

module.exports = baseCreate;


/***/ }),
/* 241 */
/***/ (function(module, exports, __webpack_require__) {

var baseIsMap = __webpack_require__(242),
    baseUnary = __webpack_require__(41),
    nodeUtil = __webpack_require__(42);

/* Node.js helper references. */
var nodeIsMap = nodeUtil && nodeUtil.isMap;

/**
 * Checks if `value` is classified as a `Map` object.
 *
 * @static
 * @memberOf _
 * @since 4.3.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a map, else `false`.
 * @example
 *
 * _.isMap(new Map);
 * // => true
 *
 * _.isMap(new WeakMap);
 * // => false
 */
var isMap = nodeIsMap ? baseUnary(nodeIsMap) : baseIsMap;

module.exports = isMap;


/***/ }),
/* 242 */
/***/ (function(module, exports, __webpack_require__) {

var getTag = __webpack_require__(13),
    isObjectLike = __webpack_require__(5);

/** `Object#toString` result references. */
var mapTag = '[object Map]';

/**
 * The base implementation of `_.isMap` without Node.js optimizations.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a map, else `false`.
 */
function baseIsMap(value) {
  return isObjectLike(value) && getTag(value) == mapTag;
}

module.exports = baseIsMap;


/***/ }),
/* 243 */
/***/ (function(module, exports, __webpack_require__) {

var baseIsSet = __webpack_require__(244),
    baseUnary = __webpack_require__(41),
    nodeUtil = __webpack_require__(42);

/* Node.js helper references. */
var nodeIsSet = nodeUtil && nodeUtil.isSet;

/**
 * Checks if `value` is classified as a `Set` object.
 *
 * @static
 * @memberOf _
 * @since 4.3.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a set, else `false`.
 * @example
 *
 * _.isSet(new Set);
 * // => true
 *
 * _.isSet(new WeakSet);
 * // => false
 */
var isSet = nodeIsSet ? baseUnary(nodeIsSet) : baseIsSet;

module.exports = isSet;


/***/ }),
/* 244 */
/***/ (function(module, exports, __webpack_require__) {

var getTag = __webpack_require__(13),
    isObjectLike = __webpack_require__(5);

/** `Object#toString` result references. */
var setTag = '[object Set]';

/**
 * The base implementation of `_.isSet` without Node.js optimizations.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a set, else `false`.
 */
function baseIsSet(value) {
  return isObjectLike(value) && getTag(value) == setTag;
}

module.exports = baseIsSet;


/***/ }),
/* 245 */
/***/ (function(module, exports, __webpack_require__) {

var castPath = __webpack_require__(12),
    last = __webpack_require__(246),
    parent = __webpack_require__(247),
    toKey = __webpack_require__(11);

/**
 * The base implementation of `_.unset`.
 *
 * @private
 * @param {Object} object The object to modify.
 * @param {Array|string} path The property path to unset.
 * @returns {boolean} Returns `true` if the property is deleted, else `false`.
 */
function baseUnset(object, path) {
  path = castPath(path, object);
  object = parent(object, path);
  return object == null || delete object[toKey(last(path))];
}

module.exports = baseUnset;


/***/ }),
/* 246 */
/***/ (function(module, exports) {

/**
 * Gets the last element of `array`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Array
 * @param {Array} array The array to query.
 * @returns {*} Returns the last element of `array`.
 * @example
 *
 * _.last([1, 2, 3]);
 * // => 3
 */
function last(array) {
  var length = array == null ? 0 : array.length;
  return length ? array[length - 1] : undefined;
}

module.exports = last;


/***/ }),
/* 247 */
/***/ (function(module, exports, __webpack_require__) {

var baseGet = __webpack_require__(48),
    baseSlice = __webpack_require__(248);

/**
 * Gets the parent value at `path` of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Array} path The path to get the parent value of.
 * @returns {*} Returns the parent value.
 */
function parent(object, path) {
  return path.length < 2 ? object : baseGet(object, baseSlice(path, 0, -1));
}

module.exports = parent;


/***/ }),
/* 248 */
/***/ (function(module, exports) {

/**
 * The base implementation of `_.slice` without an iteratee call guard.
 *
 * @private
 * @param {Array} array The array to slice.
 * @param {number} [start=0] The start position.
 * @param {number} [end=array.length] The end position.
 * @returns {Array} Returns the slice of `array`.
 */
function baseSlice(array, start, end) {
  var index = -1,
      length = array.length;

  if (start < 0) {
    start = -start > length ? 0 : (length + start);
  }
  end = end > length ? length : end;
  if (end < 0) {
    end += length;
  }
  length = start > end ? 0 : ((end - start) >>> 0);
  start >>>= 0;

  var result = Array(length);
  while (++index < length) {
    result[index] = array[index + start];
  }
  return result;
}

module.exports = baseSlice;


/***/ }),
/* 249 */
/***/ (function(module, exports, __webpack_require__) {

var isPlainObject = __webpack_require__(87);

/**
 * Used by `_.omit` to customize its `_.cloneDeep` use to only clone plain
 * objects.
 *
 * @private
 * @param {*} value The value to inspect.
 * @param {string} key The key of the property to inspect.
 * @returns {*} Returns the uncloned value or `undefined` to defer cloning to `_.cloneDeep`.
 */
function customOmitClone(value) {
  return isPlainObject(value) ? undefined : value;
}

module.exports = customOmitClone;


/***/ }),
/* 250 */
/***/ (function(module, exports, __webpack_require__) {

var flatten = __webpack_require__(251),
    overRest = __webpack_require__(254),
    setToString = __webpack_require__(256);

/**
 * A specialized version of `baseRest` which flattens the rest array.
 *
 * @private
 * @param {Function} func The function to apply a rest parameter to.
 * @returns {Function} Returns the new function.
 */
function flatRest(func) {
  return setToString(overRest(func, undefined, flatten), func + '');
}

module.exports = flatRest;


/***/ }),
/* 251 */
/***/ (function(module, exports, __webpack_require__) {

var baseFlatten = __webpack_require__(252);

/**
 * Flattens `array` a single level deep.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Array
 * @param {Array} array The array to flatten.
 * @returns {Array} Returns the new flattened array.
 * @example
 *
 * _.flatten([1, [2, [3, [4]], 5]]);
 * // => [1, 2, [3, [4]], 5]
 */
function flatten(array) {
  var length = array == null ? 0 : array.length;
  return length ? baseFlatten(array, 1) : [];
}

module.exports = flatten;


/***/ }),
/* 252 */
/***/ (function(module, exports, __webpack_require__) {

var arrayPush = __webpack_require__(45),
    isFlattenable = __webpack_require__(253);

/**
 * The base implementation of `_.flatten` with support for restricting flattening.
 *
 * @private
 * @param {Array} array The array to flatten.
 * @param {number} depth The maximum recursion depth.
 * @param {boolean} [predicate=isFlattenable] The function invoked per iteration.
 * @param {boolean} [isStrict] Restrict to values that pass `predicate` checks.
 * @param {Array} [result=[]] The initial result value.
 * @returns {Array} Returns the new flattened array.
 */
function baseFlatten(array, depth, predicate, isStrict, result) {
  var index = -1,
      length = array.length;

  predicate || (predicate = isFlattenable);
  result || (result = []);

  while (++index < length) {
    var value = array[index];
    if (depth > 0 && predicate(value)) {
      if (depth > 1) {
        // Recursively flatten arrays (susceptible to call stack limits).
        baseFlatten(value, depth - 1, predicate, isStrict, result);
      } else {
        arrayPush(result, value);
      }
    } else if (!isStrict) {
      result[result.length] = value;
    }
  }
  return result;
}

module.exports = baseFlatten;


/***/ }),
/* 253 */
/***/ (function(module, exports, __webpack_require__) {

var Symbol = __webpack_require__(10),
    isArguments = __webpack_require__(23),
    isArray = __webpack_require__(1);

/** Built-in value references. */
var spreadableSymbol = Symbol ? Symbol.isConcatSpreadable : undefined;

/**
 * Checks if `value` is a flattenable `arguments` object or array.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is flattenable, else `false`.
 */
function isFlattenable(value) {
  return isArray(value) || isArguments(value) ||
    !!(spreadableSymbol && value && value[spreadableSymbol]);
}

module.exports = isFlattenable;


/***/ }),
/* 254 */
/***/ (function(module, exports, __webpack_require__) {

var apply = __webpack_require__(255);

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeMax = Math.max;

/**
 * A specialized version of `baseRest` which transforms the rest array.
 *
 * @private
 * @param {Function} func The function to apply a rest parameter to.
 * @param {number} [start=func.length-1] The start position of the rest parameter.
 * @param {Function} transform The rest array transform.
 * @returns {Function} Returns the new function.
 */
function overRest(func, start, transform) {
  start = nativeMax(start === undefined ? (func.length - 1) : start, 0);
  return function() {
    var args = arguments,
        index = -1,
        length = nativeMax(args.length - start, 0),
        array = Array(length);

    while (++index < length) {
      array[index] = args[start + index];
    }
    index = -1;
    var otherArgs = Array(start + 1);
    while (++index < start) {
      otherArgs[index] = args[index];
    }
    otherArgs[start] = transform(array);
    return apply(func, this, otherArgs);
  };
}

module.exports = overRest;


/***/ }),
/* 255 */
/***/ (function(module, exports) {

/**
 * A faster alternative to `Function#apply`, this function invokes `func`
 * with the `this` binding of `thisArg` and the arguments of `args`.
 *
 * @private
 * @param {Function} func The function to invoke.
 * @param {*} thisArg The `this` binding of `func`.
 * @param {Array} args The arguments to invoke `func` with.
 * @returns {*} Returns the result of `func`.
 */
function apply(func, thisArg, args) {
  switch (args.length) {
    case 0: return func.call(thisArg);
    case 1: return func.call(thisArg, args[0]);
    case 2: return func.call(thisArg, args[0], args[1]);
    case 3: return func.call(thisArg, args[0], args[1], args[2]);
  }
  return func.apply(thisArg, args);
}

module.exports = apply;


/***/ }),
/* 256 */
/***/ (function(module, exports, __webpack_require__) {

var baseSetToString = __webpack_require__(257),
    shortOut = __webpack_require__(259);

/**
 * Sets the `toString` method of `func` to return `string`.
 *
 * @private
 * @param {Function} func The function to modify.
 * @param {Function} string The `toString` result.
 * @returns {Function} Returns `func`.
 */
var setToString = shortOut(baseSetToString);

module.exports = setToString;


/***/ }),
/* 257 */
/***/ (function(module, exports, __webpack_require__) {

var constant = __webpack_require__(258),
    defineProperty = __webpack_require__(66),
    identity = __webpack_require__(83);

/**
 * The base implementation of `setToString` without support for hot loop shorting.
 *
 * @private
 * @param {Function} func The function to modify.
 * @param {Function} string The `toString` result.
 * @returns {Function} Returns `func`.
 */
var baseSetToString = !defineProperty ? identity : function(func, string) {
  return defineProperty(func, 'toString', {
    'configurable': true,
    'enumerable': false,
    'value': constant(string),
    'writable': true
  });
};

module.exports = baseSetToString;


/***/ }),
/* 258 */
/***/ (function(module, exports) {

/**
 * Creates a function that returns `value`.
 *
 * @static
 * @memberOf _
 * @since 2.4.0
 * @category Util
 * @param {*} value The value to return from the new function.
 * @returns {Function} Returns the new constant function.
 * @example
 *
 * var objects = _.times(2, _.constant({ 'a': 1 }));
 *
 * console.log(objects);
 * // => [{ 'a': 1 }, { 'a': 1 }]
 *
 * console.log(objects[0] === objects[1]);
 * // => true
 */
function constant(value) {
  return function() {
    return value;
  };
}

module.exports = constant;


/***/ }),
/* 259 */
/***/ (function(module, exports) {

/** Used to detect hot functions by number of calls within a span of milliseconds. */
var HOT_COUNT = 800,
    HOT_SPAN = 16;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeNow = Date.now;

/**
 * Creates a function that'll short out and invoke `identity` instead
 * of `func` when it's called `HOT_COUNT` or more times in `HOT_SPAN`
 * milliseconds.
 *
 * @private
 * @param {Function} func The function to restrict.
 * @returns {Function} Returns the new shortable function.
 */
function shortOut(func) {
  var count = 0,
      lastCalled = 0;

  return function() {
    var stamp = nativeNow(),
        remaining = HOT_SPAN - (stamp - lastCalled);

    lastCalled = stamp;
    if (remaining > 0) {
      if (++count >= HOT_COUNT) {
        return arguments[0];
      }
    } else {
      count = 0;
    }
    return func.apply(undefined, arguments);
  };
}

module.exports = shortOut;


/***/ }),
/* 260 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.castToType = void 0;

var _castArray = _interopRequireDefault(__webpack_require__(261));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var castToType = function castToType(value, mapping) {
  var isArray = false;

  if (!mapping) {
    return value;
  }

  if (mapping.substr(-2) == '[]') {
    isArray = true;
    mapping = mapping.substr(0, mapping.length - 2);
  }

  if (isArray) {
    return (0, _castArray.default)(value).map(function (value) {
      return castToType(value, mapping);
    });
  }

  if (mapping == 'Int' && value !== null) {
    return Number.parseInt(value);
  }

  if (mapping == 'Boolean') {
    return value == true || value === 'true';
  }

  if (mapping == 'String') {
    return String(value);
  }

  return value;
};

exports.castToType = castToType;
//# sourceMappingURL=cast-to-type.js.map

/***/ }),
/* 261 */
/***/ (function(module, exports, __webpack_require__) {

var isArray = __webpack_require__(1);

/**
 * Casts `value` as an array if it's not one.
 *
 * @static
 * @memberOf _
 * @since 4.4.0
 * @category Lang
 * @param {*} value The value to inspect.
 * @returns {Array} Returns the cast array.
 * @example
 *
 * _.castArray(1);
 * // => [1]
 *
 * _.castArray({ 'a': 1 });
 * // => [{ 'a': 1 }]
 *
 * _.castArray('abc');
 * // => ['abc']
 *
 * _.castArray(null);
 * // => [null]
 *
 * _.castArray(undefined);
 * // => [undefined]
 *
 * _.castArray();
 * // => []
 *
 * var array = [1, 2, 3];
 * console.log(_.castArray(array) === array);
 * // => true
 */
function castArray() {
  if (!arguments.length) {
    return [];
  }
  var value = arguments[0];
  return isArray(value) ? value : [value];
}

module.exports = castArray;


/***/ }),
/* 262 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return defaultTypes; });
var defaultTypes={q:'String',salary:'String',search_type:'String',geo_id:'Int',offset:'Int',limit:'Int',subway_line_id:'Int[]',subway_id:'Int[]',schedule_id:'Int[]',working_type_id:'Int[]',experience_length_id:'Int[]',education_id:'Int[]',employees:'Int[]',is_new_only:'Boolean',rubric_id:'Int[]',speciality_id:'Int',district_id:'Int[]',similar_vacancy_id:'Int',is_upped:'Boolean',is_premium:'Boolean',is_notempty_salary:'Boolean'};

/***/ }),
/* 263 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_redux__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_redux__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__vkontakte_vkui_connect__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__vkontakte_vkui_connect___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__vkontakte_vkui_connect__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__vkontakte_vkui__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__vkontakte_vkui___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__vkontakte_vkui__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__vkontakte_vkui_src_lib_webview__ = __webpack_require__(264);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__vkontakte_vkui_dist_vkui_css__ = __webpack_require__(265);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__vkontakte_vkui_dist_vkui_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6__vkontakte_vkui_dist_vkui_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_lodash_isEmpty__ = __webpack_require__(72);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_lodash_isEmpty___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_lodash_isEmpty__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_actions_geo__ = __webpack_require__(89);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_main__ = __webpack_require__(52);
var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}var App=function(_React$Component){_inherits(App,_React$Component);function App(props){_classCallCheck(this,App);var _this=_possibleConstructorReturn(this,(App.__proto__||Object.getPrototypeOf(App)).call(this,props));_this.state={activePanel:'home',fetchedUser:{}};return _this;}_createClass(App,[{key:'componentDidMount',value:function componentDidMount(){var _this2=this;if(!this.props.hasCurrentGeo){this.props.actions.detectGeo();}__WEBPACK_IMPORTED_MODULE_3__vkontakte_vkui_connect__["subscribe"](function(e){if(!e.detail){}else if(e.detail.type==='VKWebAppGetUserInfoResult'){_this2.setState({fetchedUser:Object.assign({},e.detail.data)});}});__WEBPACK_IMPORTED_MODULE_3__vkontakte_vkui_connect__["send"]('VKWebAppInit',{});__WEBPACK_IMPORTED_MODULE_3__vkontakte_vkui_connect__["send"]('VKWebAppGetUserInfo',{});}},{key:'render',value:function render(){return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__vkontakte_vkui__["ConfigProvider"],{isWebView:__WEBPACK_IMPORTED_MODULE_5__vkontakte_vkui_src_lib_webview__["a" /* isWebView */]},this.props.hasCurrentGeo&&__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_9__pages_main__["b" /* default */],null));}}]);return App;}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);var mapDispatchToProps=function mapDispatchToProps(dispatch){return{actions:Object(__WEBPACK_IMPORTED_MODULE_1_redux__["b" /* bindActionCreators */])({detectGeo:__WEBPACK_IMPORTED_MODULE_8_actions_geo__["b" /* detectGeo */]},dispatch)};};var mapStateToProps=function mapStateToProps(state){return{hasCurrentGeo:!__WEBPACK_IMPORTED_MODULE_7_lodash_isEmpty___default()(state.currentGeo.data)};};/* harmony default export */ __webpack_exports__["a"] = (Object(__WEBPACK_IMPORTED_MODULE_2_react_redux__["b" /* connect */])(mapStateToProps,mapDispatchToProps)(App));

/***/ }),
/* 264 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
const isWebView = !!(window && (window.AndroidBridge || (window.webkit && window.webkit.messageHandlers)));
/* harmony export (immutable) */ __webpack_exports__["a"] = isWebView;



/***/ }),
/* 265 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 266 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _set = _interopRequireDefault(__webpack_require__(64));

var _requests = _interopRequireDefault(__webpack_require__(90));

var _wrappers = _interopRequireDefault(__webpack_require__(272));

var _constants = __webpack_require__(273);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var tryWrap = function tryWrap(data, wrapper) {
  if (wrapper) {
    return wrapper(data);
  }

  return data;
};

var ApiClient = function () {
  function ApiClient(_config) {
    var _this = this;

    _classCallCheck(this, ApiClient);

    _defineProperty(this, "getUrl", function (resource) {
      var config = _this.config;
      return "".concat(config.host).concat(config.envType, "/").concat(config.version, "/").concat(resource);
    });

    _defineProperty(this, "get", function (resource) {
      var query = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
      return _this.config.requests.get(_this.getUrl(resource), _this._wrapQuery(query), _this._wrapOptions(options));
    });

    _defineProperty(this, "post", function (resource, body) {
      var query = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
      var options = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
      return _this.config.requests.post(_this.getUrl(resource), _this._wrapBody(body), _this._wrapQuery(query), _this._wrapOptions(options));
    });

    _defineProperty(this, "patch", function (resource, body) {
      var query = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
      var options = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
      return _this.config.requests.patch(_this.getUrl(resource), _this._wrapBody(body), _this._wrapQuery(query), _this._wrapOptions(options));
    });

    _defineProperty(this, "delete", function (resource) {
      var query = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
      return _this.config.requests.delete(_this.getUrl(resource), _this._wrapQuery(query), _this._wrapOptions(options));
    });

    _defineProperty(this, "withConfig", function (config) {
      return new ApiClient(_objectSpread({}, _this.config, config));
    });

    this.config = _objectSpread({}, ApiClient.defaultConfig, _config);
  }

  _createClass(ApiClient, [{
    key: "_wrapQuery",
    value: function _wrapQuery(query) {
      return tryWrap(query, this.config.wrappers.query);
    }
  }, {
    key: "_wrapBody",
    value: function _wrapBody(body) {
      return tryWrap(body, this.config.wrappers.body);
    }
  }, {
    key: "_wrapOptions",
    value: function _wrapOptions(options) {
      var authToken = this.config.getAuthToken();

      if (authToken) {
        (0, _set.default)(options, 'headers.Authorization', "token ".concat(authToken));
      }

      return tryWrap(options, this.config.wrappers.options);
    }
  }]);

  return ApiClient;
}();

exports.default = ApiClient;

_defineProperty(ApiClient, "defaultConfig", {
  version: _constants.DEFAULT_API_VERSION,
  host: _constants.DEFAULT_HOST,
  envType: '',
  requests: _requests.default,
  wrappers: _wrappers.default
});
//# sourceMappingURL=index.js.map

/***/ }),
/* 267 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.requestPatch = exports.requestDelete = exports.requestGet = exports.requestPost = exports.request = void 0;

var _isError = _interopRequireDefault(__webpack_require__(268));

var _queryString = __webpack_require__(269);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var request = function request(url) {
  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  return fetch(url, options).then(function (response) {
    if (response.status >= 400) {
      return response.json().then(function (json) {
        return Promise.reject({
          status: response.status,
          statusText: response.statusText,
          errors: json.errors
        });
      }, function (error) {
        return Promise.reject(_objectSpread({
          status: response.status,
          statusText: response.statusText
        }, error));
      });
    }

    return response;
  }, function (error) {
    if ((0, _isError.default)(error)) {
      return Promise.reject({
        errors: [{
          message: 'Непредвиденная ошибка',
          code: 500,
          error: String(error),
          data: {
            url: url,
            options: options
          }
        }],
        status: 500,
        statusText: String(error),
        error: error
      });
    }

    return Promise.reject(error);
  });
};

exports.request = request;

var requestPost = function requestPost(url) {
  var body = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var query = arguments.length > 2 ? arguments[2] : undefined;
  var options = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};

  if (query) {
    url = "".concat(url, "?").concat((0, _queryString.stringify)(query));
  }

  return request(url, _objectSpread({
    method: 'POST',
    body: JSON.stringify(body)
  }, options));
};

exports.requestPost = requestPost;

var requestGet = function requestGet(url, query) {
  var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

  if (query) {
    url = "".concat(url, "?").concat((0, _queryString.stringify)(query));
  }

  return request(url, _objectSpread({
    method: 'GET'
  }, options));
};

exports.requestGet = requestGet;

var requestDelete = function requestDelete(url, query) {
  var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

  if (query) {
    url = "".concat(url, "?").concat((0, _queryString.stringify)(query));
  }

  return request(url, _objectSpread({
    method: 'DELETE'
  }, options));
};

exports.requestDelete = requestDelete;

var requestPatch = function requestPatch(url) {
  var body = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var query = arguments.length > 2 ? arguments[2] : undefined;
  var options = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};

  if (query) {
    url = "".concat(url, "?").concat((0, _queryString.stringify)(query));
  }

  return request(url, _objectSpread({
    method: 'PATCH',
    body: JSON.stringify(body)
  }, options));
};

exports.requestPatch = requestPatch;
//# sourceMappingURL=request.js.map

/***/ }),
/* 268 */
/***/ (function(module, exports, __webpack_require__) {

var baseGetTag = __webpack_require__(8),
    isObjectLike = __webpack_require__(5),
    isPlainObject = __webpack_require__(87);

/** `Object#toString` result references. */
var domExcTag = '[object DOMException]',
    errorTag = '[object Error]';

/**
 * Checks if `value` is an `Error`, `EvalError`, `RangeError`, `ReferenceError`,
 * `SyntaxError`, `TypeError`, or `URIError` object.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an error object, else `false`.
 * @example
 *
 * _.isError(new Error);
 * // => true
 *
 * _.isError(Error);
 * // => false
 */
function isError(value) {
  if (!isObjectLike(value)) {
    return false;
  }
  var tag = baseGetTag(value);
  return tag == errorTag || tag == domExcTag ||
    (typeof value.message == 'string' && typeof value.name == 'string' && !isPlainObject(value));
}

module.exports = isError;


/***/ }),
/* 269 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.stringify = exports.parse = exports.extract = void 0;

var _strictUriEncode = _interopRequireDefault(__webpack_require__(270));

var _isUndefined = _interopRequireDefault(__webpack_require__(271));

var _isObject = _interopRequireDefault(__webpack_require__(3));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var extract = function extract(str) {
  return str.split('?')[1] || '';
};

exports.extract = extract;

var parse = function parse(str) {
  if (typeof str !== 'string') {
    return {};
  }

  str = str.trim().replace(/^(\?|#|&)/, '');

  if (!str) {
    return {};
  }

  return str.split('&').reduce(function (ret, param) {
    var parts = param.replace(/\+/g, ' ').split('=');
    var key = decodeURIComponent(parts.shift());
    var val = parts.length > 0 ? decodeURIComponent(parts.join('=')) : null;

    if (!val) {
      return ret;
    }

    if (key.substring(key.length - 2) === '[]') {
      key = key.substring(0, key.length - 2);
      ret[key] = ret[key] || [];
      ret[key] = ret[key].concat(val);
    } else {
      ret[key] = val;
    }

    return ret;
  }, {});
};

exports.parse = parse;

var stringify = function stringify(obj) {
  if (!obj || !(0, _isObject.default)(obj)) {
    return '';
  }

  var queryParameters = Object.keys(obj).reduce(function (state, key) {
    if (!obj) {
      return state;
    }

    var value = obj[key];

    if ((0, _isUndefined.default)(value)) {
      return state;
    }

    if (value === null) {
      state.push((0, _strictUriEncode.default)(key));
      return state;
    }

    if (Array.isArray(value)) {
      if (value.length === 0) {
        return state;
      }

      var arrayQuery = value.map(function (val) {
        return "".concat((0, _strictUriEncode.default)(key), "[]=").concat((0, _strictUriEncode.default)(val));
      });
      state.push(arrayQuery.join('&'));
      return state;
    }

    var queryParam = "".concat((0, _strictUriEncode.default)(key), "=").concat((0, _strictUriEncode.default)(value));
    state.push(queryParam);
    return state;
  }, []);
  return queryParameters.join('&');
};

exports.stringify = stringify;
//# sourceMappingURL=query-string.js.map

/***/ }),
/* 270 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

module.exports = str => encodeURIComponent(str).replace(/[!'()*]/g, x => `%${x.charCodeAt(0).toString(16).toUpperCase()}`);


/***/ }),
/* 271 */
/***/ (function(module, exports) {

/**
 * Checks if `value` is `undefined`.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is `undefined`, else `false`.
 * @example
 *
 * _.isUndefined(void 0);
 * // => true
 *
 * _.isUndefined(null);
 * // => false
 */
function isUndefined(value) {
  return value === undefined;
}

module.exports = isUndefined;


/***/ }),
/* 272 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var defaultWrappers = {};
var _default = defaultWrappers;
exports.default = _default;
//# sourceMappingURL=wrappers.js.map

/***/ }),
/* 273 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DEFAULT_API_VERSION = exports.API_VERSION = exports.DEFAULT_HOST = void 0;
var DEFAULT_HOST = 'https://api.zp.ru';
exports.DEFAULT_HOST = DEFAULT_HOST;
var API_VERSION = {
  v1: 'v1',
  v2: 'v2',
  v3: 'v3'
};
exports.API_VERSION = API_VERSION;
var DEFAULT_API_VERSION = API_VERSION.v1;
exports.DEFAULT_API_VERSION = DEFAULT_API_VERSION;
//# sourceMappingURL=constants.js.map

/***/ }),
/* 274 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__zp_utils_js_lib_api_client_requests__ = __webpack_require__(90);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__zp_utils_js_lib_api_client_requests___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__zp_utils_js_lib_api_client_requests__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__zp_utils_js_lib_promise_deduplicate__ = __webpack_require__(275);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__zp_utils_js_lib_promise_deduplicate___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__zp_utils_js_lib_promise_deduplicate__);
// import ENV_TYPE from 'constants/hosts/env-type';
var extractJson=function extractJson(response){return response.json();};var responseJson=function responseJson(fn){return function(){return fn.apply(undefined,arguments).then(extractJson);};};/* harmony default export */ __webpack_exports__["a"] = (Object.keys(__WEBPACK_IMPORTED_MODULE_0__zp_utils_js_lib_api_client_requests___default.a).reduce(function(result,method){if(method==='delete'){return result;}var request=responseJson(__WEBPACK_IMPORTED_MODULE_0__zp_utils_js_lib_api_client_requests___default.a[method]);result[method]=__WEBPACK_IMPORTED_MODULE_1__zp_utils_js_lib_promise_deduplicate___default()(request,{onDuplicate:function onDuplicate(){// if (ENV_TYPE) {
//     console.warn(new Error(`Duplicate request ${method.toUpperCase()}`)); // eslint-disable-line no-console
// }
}});return result;},Object.assign({},__WEBPACK_IMPORTED_MODULE_0__zp_utils_js_lib_api_client_requests___default.a)));

/***/ }),
/* 275 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _default = function _default(fn) {
  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var activePromises = {};
  return function () {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    var key = JSON.stringify(args);

    if (!activePromises[key]) {
      var result = fn.apply(void 0, args).then(function (res) {
        delete activePromises[key];
        return res;
      }, function (err) {
        delete activePromises[key];
        throw err;
      });
      activePromises[key] = result;
      return result;
    }

    var onDuplicate = options.onDuplicate;

    if (onDuplicate) {
      onDuplicate.apply(void 0, args);
    }

    return activePromises[key];
  };
};

exports.default = _default;
//# sourceMappingURL=promise-deduplicate.js.map

/***/ }),
/* 276 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_redux__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_redux__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__vkontakte_vkui__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__vkontakte_vkui___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__vkontakte_vkui__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_lodash_debounce__ = __webpack_require__(91);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_lodash_debounce___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_lodash_debounce__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_actions_pages_main_vacancies__ = __webpack_require__(279);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_actions_vacancies_filter__ = __webpack_require__(280);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__zarplata_ru_logo_svg__ = __webpack_require__(281);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__zarplata_ru_logo_svg___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7__zarplata_ru_logo_svg__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__containers_list__ = __webpack_require__(282);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__views_search__ = __webpack_require__(289);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__selectors__ = __webpack_require__(291);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__styles_css__ = __webpack_require__(294);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__styles_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11__styles_css__);
var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}var MainPage=function(_React$Component){_inherits(MainPage,_React$Component);function MainPage(){var _ref;var _temp,_this,_ret;_classCallCheck(this,MainPage);for(var _len=arguments.length,args=Array(_len),_key=0;_key<_len;_key++){args[_key]=arguments[_key];}return _ret=(_temp=(_this=_possibleConstructorReturn(this,(_ref=MainPage.__proto__||Object.getPrototypeOf(MainPage)).call.apply(_ref,[this].concat(args))),_this),_this.handleChangeQ=function(value){_this.props.actions.changeVacanciesFilter('q',value);_this.fetchVacancies(value);},_this.fetchVacancies=__WEBPACK_IMPORTED_MODULE_4_lodash_debounce___default()(function(value){_this.props.actions.fetchVacanciesList({geo_id:_this.props.currentGeo.id,q:value});},450),_temp),_possibleConstructorReturn(_this,_ret);}_createClass(MainPage,[{key:'componentDidMount',value:function componentDidMount(){this.props.actions.fetchVacanciesList({geo_id:this.props.currentGeo.id,q:this.props.vacanciesFilter.q});}},{key:'render',value:function render(){var _props=this.props,vacancies=_props.vacancies,vacanciesCount=_props.vacanciesCount,currentGeo=_props.currentGeo;console.log(this.props);return __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_0_react__["Fragment"],null,__WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_3__vkontakte_vkui__["PanelHeader"],{noShadow:true,theme:'light'},__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]('div',{className:'main-wrapper-logo'},__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]('img',{src:__WEBPACK_IMPORTED_MODULE_7__zarplata_ru_logo_svg___default.a,className:'main-logo'}))),__WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_9__views_search__["a" /* default */],{value:this.props.vacanciesFilter.q,onChangeQ:this.handleChangeQ,currentGeo:currentGeo,onChangePanel:this.props.onChangePanel,vacanciesCount:vacanciesCount}),vacancies&&__WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_8__containers_list__["a" /* default */],{vacancies:vacancies}));}}]);return MainPage;}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);var mapDispatchToProps=function mapDispatchToProps(dispatch){return{actions:Object(__WEBPACK_IMPORTED_MODULE_1_redux__["b" /* bindActionCreators */])({fetchVacanciesList:__WEBPACK_IMPORTED_MODULE_5_actions_pages_main_vacancies__["a" /* fetchVacanciesList */],changeVacanciesFilter:__WEBPACK_IMPORTED_MODULE_6_actions_vacancies_filter__["a" /* changeVacanciesFilter */]},dispatch)};};/* harmony default export */ __webpack_exports__["a"] = (Object(__WEBPACK_IMPORTED_MODULE_2_react_redux__["b" /* connect */])(__WEBPACK_IMPORTED_MODULE_10__selectors__["a" /* default */],mapDispatchToProps)(MainPage));

/***/ }),
/* 277 */
/***/ (function(module, exports, __webpack_require__) {

var root = __webpack_require__(2);

/**
 * Gets the timestamp of the number of milliseconds that have elapsed since
 * the Unix epoch (1 January 1970 00:00:00 UTC).
 *
 * @static
 * @memberOf _
 * @since 2.4.0
 * @category Date
 * @returns {number} Returns the timestamp.
 * @example
 *
 * _.defer(function(stamp) {
 *   console.log(_.now() - stamp);
 * }, _.now());
 * // => Logs the number of milliseconds it took for the deferred invocation.
 */
var now = function() {
  return root.Date.now();
};

module.exports = now;


/***/ }),
/* 278 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(3),
    isSymbol = __webpack_require__(17);

/** Used as references for various `Number` constants. */
var NAN = 0 / 0;

/** Used to match leading and trailing whitespace. */
var reTrim = /^\s+|\s+$/g;

/** Used to detect bad signed hexadecimal string values. */
var reIsBadHex = /^[-+]0x[0-9a-f]+$/i;

/** Used to detect binary string values. */
var reIsBinary = /^0b[01]+$/i;

/** Used to detect octal string values. */
var reIsOctal = /^0o[0-7]+$/i;

/** Built-in method references without a dependency on `root`. */
var freeParseInt = parseInt;

/**
 * Converts `value` to a number.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to process.
 * @returns {number} Returns the number.
 * @example
 *
 * _.toNumber(3.2);
 * // => 3.2
 *
 * _.toNumber(Number.MIN_VALUE);
 * // => 5e-324
 *
 * _.toNumber(Infinity);
 * // => Infinity
 *
 * _.toNumber('3.2');
 * // => 3.2
 */
function toNumber(value) {
  if (typeof value == 'number') {
    return value;
  }
  if (isSymbol(value)) {
    return NAN;
  }
  if (isObject(value)) {
    var other = typeof value.valueOf == 'function' ? value.valueOf() : value;
    value = isObject(other) ? (other + '') : other;
  }
  if (typeof value != 'string') {
    return value === 0 ? value : +value;
  }
  value = value.replace(reTrim, '');
  var isBinary = reIsBinary.test(value);
  return (isBinary || reIsOctal.test(value))
    ? freeParseInt(value.slice(2), isBinary ? 2 : 8)
    : (reIsBadHex.test(value) ? NAN : +value);
}

module.exports = toNumber;


/***/ }),
/* 279 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return fetchVacanciesList; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_utils_api_client__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_constants_actions_vacancies__ = __webpack_require__(31);
var fetchVacanciesList=function fetchVacanciesList(){var query=arguments.length>0&&arguments[0]!==undefined?arguments[0]:{};return function(dispatch){dispatch({type:__WEBPACK_IMPORTED_MODULE_1_constants_actions_vacancies__["a" /* FETCH_VACANCIES */]});return __WEBPACK_IMPORTED_MODULE_0_utils_api_client__["a" /* apiV1 */].get('vacancies',query).then(function(json){return dispatch({type:__WEBPACK_IMPORTED_MODULE_1_constants_actions_vacancies__["c" /* FETCH_VACANCIES_SUCCESS */],payload:json});},function(response){return dispatch({type:__WEBPACK_IMPORTED_MODULE_1_constants_actions_vacancies__["b" /* FETCH_VACANCIES_FAILUR */],payload:{errors:response.errors}});});};};

/***/ }),
/* 280 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return changeVacanciesFilter; });
/* unused harmony export resetVacanciesFilter */
/* unused harmony export hideAdditionalFilters */
/* unused harmony export showAdditionalFilters */
/* unused harmony export toggleAdditionalFilters */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_constants_actions_vacancies_filter__ = __webpack_require__(88);
var changeVacanciesFilter=function changeVacanciesFilter(filterName,value){return{type:__WEBPACK_IMPORTED_MODULE_0_constants_actions_vacancies_filter__["a" /* CHANGE_VACANCIES_FILTER */],payload:{value:value,filterName:filterName}};};var resetVacanciesFilter=function resetVacanciesFilter(){var value=arguments.length>0&&arguments[0]!==undefined?arguments[0]:{};return function(dispatch,getState){var _getState=getState(),currentGeo=_getState.currentGeo;dispatch({type:__WEBPACK_IMPORTED_MODULE_0_constants_actions_vacancies_filter__["c" /* RESET_VACANCIES_FILTER */],payload:{value:Object.assign({},value,{geo_id:currentGeo.data.id})}});};};var hideAdditionalFilters=function hideAdditionalFilters(){return{type:__WEBPACK_IMPORTED_MODULE_0_constants_actions_vacancies_filter__["b" /* HIDE_ADDITIONAL_FILTERS */],payload:false};};var showAdditionalFilters=function showAdditionalFilters(){return{type:__WEBPACK_IMPORTED_MODULE_0_constants_actions_vacancies_filter__["d" /* SHOW_ADDITIONAL_FILTERS */],payload:true};};var toggleAdditionalFilters=function toggleAdditionalFilters(){return function(dispatch,getState){var _getState2=getState(),vacanciesFilter=_getState2.vacanciesFilter;if(!vacanciesFilter.isAdditionalFiltersOpened){dispatch(showAdditionalFilters());}else{dispatch(hideAdditionalFilters());}};};

/***/ }),
/* 281 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/zarplata.ru-logo.fd20f0f8.svg";

/***/ }),
/* 282 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__views_vacancy_item__ = __webpack_require__(283);
var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}var VacanciesListContainer=function(_React$PureComponent){_inherits(VacanciesListContainer,_React$PureComponent);function VacanciesListContainer(){_classCallCheck(this,VacanciesListContainer);return _possibleConstructorReturn(this,(VacanciesListContainer.__proto__||Object.getPrototypeOf(VacanciesListContainer)).apply(this,arguments));}_createClass(VacanciesListContainer,[{key:'renderItem',value:function renderItem(vacancy){return __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_1__views_vacancy_item__["a" /* default */],{key:vacancy.id,vacancy:vacancy});}},{key:'render',value:function render(){return __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_0_react__["Fragment"],null,this.props.vacancies.map(this.renderItem));}}]);return VacanciesListContainer;}(__WEBPACK_IMPORTED_MODULE_0_react__["PureComponent"]);/* harmony default export */ __webpack_exports__["a"] = (VacanciesListContainer);

/***/ }),
/* 283 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__vkontakte_vkui__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__vkontakte_vkui___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__vkontakte_vkui__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_lodash_get__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_lodash_get___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_lodash_get__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__zp_utils_js_lib_date_elapsed__ = __webpack_require__(284);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__zp_utils_js_lib_date_elapsed___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__zp_utils_js_lib_date_elapsed__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__vkontakte_icons_dist_16_fire__ = __webpack_require__(287);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__vkontakte_icons_dist_16_fire___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__vkontakte_icons_dist_16_fire__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__styles_css__ = __webpack_require__(288);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__styles_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__styles_css__);
var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}var VacancyItem=function(_React$PureComponent){_inherits(VacancyItem,_React$PureComponent);function VacancyItem(){_classCallCheck(this,VacancyItem);return _possibleConstructorReturn(this,(VacancyItem.__proto__||Object.getPrototypeOf(VacancyItem)).apply(this,arguments));}_createClass(VacancyItem,[{key:'render',value:function render(){var vacancy=this.props.vacancy;var companyTitle=__WEBPACK_IMPORTED_MODULE_2_lodash_get___default()(vacancy,'company.title');var cityTitle=__WEBPACK_IMPORTED_MODULE_2_lodash_get___default()(vacancy,'contact.city.title');return __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_1__vkontakte_vkui__["Group"],{className:'vacancy-item',style:{color:__WEBPACK_IMPORTED_MODULE_1__vkontakte_vkui__["colors"].mutedBlack}},__WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_1__vkontakte_vkui__["Link"],{className:'vacancy-item-header'},vacancy.header,' ',vacancy.is_premium&&__WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_4__vkontakte_icons_dist_16_fire___default.a,{fill:__WEBPACK_IMPORTED_MODULE_1__vkontakte_vkui__["colors"].orange})),(vacancy.is_premium||vacancy.is_upped)&&__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]('div',{className:'vacancy-item-left-panel',style:{backgroundColor:__WEBPACK_IMPORTED_MODULE_1__vkontakte_vkui__["colors"].orange}}),__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]('div',{className:'vacancy-item-salary vacancy-item-sub-text'},vacancy.salary),companyTitle&&__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]('div',{className:'vacancy-item-company-name vacancy-item-sub-text'},companyTitle),__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]('div',{className:'vacancy-item-sub-text',style:{color:__WEBPACK_IMPORTED_MODULE_1__vkontakte_vkui__["colors"].lightGray}},__WEBPACK_IMPORTED_MODULE_3__zp_utils_js_lib_date_elapsed___default()(vacancy.mod_date||''),' ',cityTitle&&__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]('span',{className:'vacancy-item-city'},cityTitle)));}}]);return VacancyItem;}(__WEBPACK_IMPORTED_MODULE_0_react__["PureComponent"]);/* harmony default export */ __webpack_exports__["a"] = (VacancyItem);

/***/ }),
/* 284 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _date = _interopRequireDefault(__webpack_require__(92));

var _dateFormat = _interopRequireDefault(__webpack_require__(285));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = function _default(date) {
  var today = new Date();
  var todayBegin = new Date().setHours(0, 0, 0, 0);
  var currentYearBegin = new Date(today.getFullYear(), 0);
  date = (0, _date.default)(date);

  if (date - todayBegin >= 0) {
    return 'сегодня в '.concat((0, _dateFormat.default)(date, 'HH:MM'));
  }

  if (date - currentYearBegin > 0) {
    return (0, _dateFormat.default)(date, 'dd mmmm в HH:MM');
  }

  return (0, _dateFormat.default)(date, 'dd mmmm yyyy в HH:MM');
};

exports.default = _default;
//# sourceMappingURL=date-elapsed.js.map

/***/ }),
/* 285 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.timeNames = exports.MonthNamesGenitive = exports.MonthNamesNominative = exports.DayNames = void 0;

var _dateformat = _interopRequireDefault(__webpack_require__(286));

var _date = _interopRequireDefault(__webpack_require__(92));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var DayNames = ['вос', 'пон', 'вто', 'сре', 'чет', 'пят', 'суб', 'воскресенье', 'понедельник', 'вторник', 'среда', 'четверг', 'пятница', 'суббота'];
exports.DayNames = DayNames;
var MonthNamesNominative = ['янв', 'фев', 'мар', 'апр', 'май', 'июн', 'июл', 'авг', 'сен', 'окт', 'ноя', 'дек', 'январь', 'февраль', 'март', 'апрель', 'май', 'июнь', 'июль', 'август', 'сентябрь', 'октябрь', 'ноябрь', 'декабрь'];
exports.MonthNamesNominative = MonthNamesNominative;
var MonthNamesGenitive = ['янв', 'фев', 'мар', 'апр', 'мая', 'июн', 'июл', 'авг', 'сен', 'окт', 'ноя', 'дек', 'января', 'февраля', 'марта', 'апреля', 'мая', 'июня', 'июля', 'августа', 'сентября', 'октября', 'ноября', 'декабря'];
exports.MonthNamesGenitive = MonthNamesGenitive;
var timeNames = ['a', 'p', 'am', 'pm', 'A', 'P', 'AM', 'PM'];
exports.timeNames = timeNames;

var _default = function _default(date) {
  var format = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
  date = (0, _date.default)(date);

  if (format.indexOf('d') !== -1) {
    _dateformat.default.i18n = {
      dayNames: DayNames,
      monthNames: MonthNamesGenitive,
      timeNames: timeNames
    };
  } else {
    _dateformat.default.i18n = {
      dayNames: DayNames,
      monthNames: MonthNamesNominative,
      timeNames: timeNames
    };
  }

  return (0, _dateformat.default)(date, format);
};

exports.default = _default;
//# sourceMappingURL=date-format.js.map

/***/ }),
/* 286 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_RESULT__;/*
 * Date Format 1.2.3
 * (c) 2007-2009 Steven Levithan <stevenlevithan.com>
 * MIT license
 *
 * Includes enhancements by Scott Trenda <scott.trenda.net>
 * and Kris Kowal <cixar.com/~kris.kowal/>
 *
 * Accepts a date, a mask, or a date and a mask.
 * Returns a formatted version of the given date.
 * The date defaults to the current date/time.
 * The mask defaults to dateFormat.masks.default.
 */

(function(global) {
  'use strict';

  var dateFormat = (function() {
      var token = /d{1,4}|m{1,4}|yy(?:yy)?|([HhMsTt])\1?|[LloSZWN]|"[^"]*"|'[^']*'/g;
      var timezone = /\b(?:[PMCEA][SDP]T|(?:Pacific|Mountain|Central|Eastern|Atlantic) (?:Standard|Daylight|Prevailing) Time|(?:GMT|UTC)(?:[-+]\d{4})?)\b/g;
      var timezoneClip = /[^-+\dA-Z]/g;
  
      // Regexes and supporting functions are cached through closure
      return function (date, mask, utc, gmt) {
  
        // You can't provide utc if you skip other args (use the 'UTC:' mask prefix)
        if (arguments.length === 1 && kindOf(date) === 'string' && !/\d/.test(date)) {
          mask = date;
          date = undefined;
        }
  
        date = date || new Date;
  
        if(!(date instanceof Date)) {
          date = new Date(date);
        }
  
        if (isNaN(date)) {
          throw TypeError('Invalid date');
        }
  
        mask = String(dateFormat.masks[mask] || mask || dateFormat.masks['default']);
  
        // Allow setting the utc/gmt argument via the mask
        var maskSlice = mask.slice(0, 4);
        if (maskSlice === 'UTC:' || maskSlice === 'GMT:') {
          mask = mask.slice(4);
          utc = true;
          if (maskSlice === 'GMT:') {
            gmt = true;
          }
        }
  
        var _ = utc ? 'getUTC' : 'get';
        var d = date[_ + 'Date']();
        var D = date[_ + 'Day']();
        var m = date[_ + 'Month']();
        var y = date[_ + 'FullYear']();
        var H = date[_ + 'Hours']();
        var M = date[_ + 'Minutes']();
        var s = date[_ + 'Seconds']();
        var L = date[_ + 'Milliseconds']();
        var o = utc ? 0 : date.getTimezoneOffset();
        var W = getWeek(date);
        var N = getDayOfWeek(date);
        var flags = {
          d:    d,
          dd:   pad(d),
          ddd:  dateFormat.i18n.dayNames[D],
          dddd: dateFormat.i18n.dayNames[D + 7],
          m:    m + 1,
          mm:   pad(m + 1),
          mmm:  dateFormat.i18n.monthNames[m],
          mmmm: dateFormat.i18n.monthNames[m + 12],
          yy:   String(y).slice(2),
          yyyy: y,
          h:    H % 12 || 12,
          hh:   pad(H % 12 || 12),
          H:    H,
          HH:   pad(H),
          M:    M,
          MM:   pad(M),
          s:    s,
          ss:   pad(s),
          l:    pad(L, 3),
          L:    pad(Math.round(L / 10)),
          t:    H < 12 ? dateFormat.i18n.timeNames[0] : dateFormat.i18n.timeNames[1],
          tt:   H < 12 ? dateFormat.i18n.timeNames[2] : dateFormat.i18n.timeNames[3],
          T:    H < 12 ? dateFormat.i18n.timeNames[4] : dateFormat.i18n.timeNames[5],
          TT:   H < 12 ? dateFormat.i18n.timeNames[6] : dateFormat.i18n.timeNames[7],
          Z:    gmt ? 'GMT' : utc ? 'UTC' : (String(date).match(timezone) || ['']).pop().replace(timezoneClip, ''),
          o:    (o > 0 ? '-' : '+') + pad(Math.floor(Math.abs(o) / 60) * 100 + Math.abs(o) % 60, 4),
          S:    ['th', 'st', 'nd', 'rd'][d % 10 > 3 ? 0 : (d % 100 - d % 10 != 10) * d % 10],
          W:    W,
          N:    N
        };
  
        return mask.replace(token, function (match) {
          if (match in flags) {
            return flags[match];
          }
          return match.slice(1, match.length - 1);
        });
      };
    })();

  dateFormat.masks = {
    'default':               'ddd mmm dd yyyy HH:MM:ss',
    'shortDate':             'm/d/yy',
    'mediumDate':            'mmm d, yyyy',
    'longDate':              'mmmm d, yyyy',
    'fullDate':              'dddd, mmmm d, yyyy',
    'shortTime':             'h:MM TT',
    'mediumTime':            'h:MM:ss TT',
    'longTime':              'h:MM:ss TT Z',
    'isoDate':               'yyyy-mm-dd',
    'isoTime':               'HH:MM:ss',
    'isoDateTime':           'yyyy-mm-dd\'T\'HH:MM:sso',
    'isoUtcDateTime':        'UTC:yyyy-mm-dd\'T\'HH:MM:ss\'Z\'',
    'expiresHeaderFormat':   'ddd, dd mmm yyyy HH:MM:ss Z'
  };

  // Internationalization strings
  dateFormat.i18n = {
    dayNames: [
      'Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat',
      'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'
    ],
    monthNames: [
      'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec',
      'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'
    ],
    timeNames: [
      'a', 'p', 'am', 'pm', 'A', 'P', 'AM', 'PM'
    ]
  };

function pad(val, len) {
  val = String(val);
  len = len || 2;
  while (val.length < len) {
    val = '0' + val;
  }
  return val;
}

/**
 * Get the ISO 8601 week number
 * Based on comments from
 * http://techblog.procurios.nl/k/n618/news/view/33796/14863/Calculate-ISO-8601-week-and-year-in-javascript.html
 *
 * @param  {Object} `date`
 * @return {Number}
 */
function getWeek(date) {
  // Remove time components of date
  var targetThursday = new Date(date.getFullYear(), date.getMonth(), date.getDate());

  // Change date to Thursday same week
  targetThursday.setDate(targetThursday.getDate() - ((targetThursday.getDay() + 6) % 7) + 3);

  // Take January 4th as it is always in week 1 (see ISO 8601)
  var firstThursday = new Date(targetThursday.getFullYear(), 0, 4);

  // Change date to Thursday same week
  firstThursday.setDate(firstThursday.getDate() - ((firstThursday.getDay() + 6) % 7) + 3);

  // Check if daylight-saving-time-switch occurred and correct for it
  var ds = targetThursday.getTimezoneOffset() - firstThursday.getTimezoneOffset();
  targetThursday.setHours(targetThursday.getHours() - ds);

  // Number of weeks between target Thursday and first Thursday
  var weekDiff = (targetThursday - firstThursday) / (86400000*7);
  return 1 + Math.floor(weekDiff);
}

/**
 * Get ISO-8601 numeric representation of the day of the week
 * 1 (for Monday) through 7 (for Sunday)
 * 
 * @param  {Object} `date`
 * @return {Number}
 */
function getDayOfWeek(date) {
  var dow = date.getDay();
  if(dow === 0) {
    dow = 7;
  }
  return dow;
}

/**
 * kind-of shortcut
 * @param  {*} val
 * @return {String}
 */
function kindOf(val) {
  if (val === null) {
    return 'null';
  }

  if (val === undefined) {
    return 'undefined';
  }

  if (typeof val !== 'object') {
    return typeof val;
  }

  if (Array.isArray(val)) {
    return 'array';
  }

  return {}.toString.call(val)
    .slice(8, -1).toLowerCase();
};



  if (true) {
    !(__WEBPACK_AMD_DEFINE_RESULT__ = function () {
      return dateFormat;
    }.call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else if (typeof exports === 'object') {
    module.exports = dateFormat;
  } else {
    global.dateFormat = dateFormat;
  }
})(this);


/***/ }),
/* 287 */
/***/ (function(module, exports, __webpack_require__) {

(function webpackUniversalModuleDefinition(root, factory) {
	if(true)
		module.exports = factory(__webpack_require__(0), __webpack_require__(27), __webpack_require__(26));
	else if(typeof define === 'function' && define.amd)
		define(["react", "svg-sprite-loader/runtime/browser-sprite.build", "svg-baker-runtime/browser-symbol"], factory);
	else {
		var a = typeof exports === 'object' ? factory(require("react"), require("svg-sprite-loader/runtime/browser-sprite.build"), require("svg-baker-runtime/browser-symbol")) : factory(root["react"], root["svg-sprite-loader/runtime/browser-sprite.build"], root["svg-baker-runtime/browser-symbol"]);
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(window, function(__WEBPACK_EXTERNAL_MODULE__0__, __WEBPACK_EXTERNAL_MODULE__1__, __WEBPACK_EXTERNAL_MODULE__2__) {
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
/******/ 	return __webpack_require__(__webpack_require__.s = 239);
/******/ })
/************************************************************************/
/******/ ({

/***/ 0:
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__0__;

/***/ }),

/***/ 1:
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__1__;

/***/ }),

/***/ 2:
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__2__;

/***/ }),

/***/ 239:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _browserSymbol = __webpack_require__(2);

var _browserSymbol2 = _interopRequireDefault(_browserSymbol);

var _browserSprite = __webpack_require__(1);

var _browserSprite2 = _interopRequireDefault(_browserSprite);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var symbol = new _browserSymbol2.default({
  "id": "fire_16",
  "use": "fire_16-usage",
  "viewBox": "0 0 16 16",
  "content": "<symbol viewBox=\"0 0 16 16\" id=\"fire_16\"><g fill=\"none\" fill-rule=\"evenodd\"><path d=\"M0 0h16v16H0z\" /><path d=\"M7.456.05a.25.25 0 0 1 .393.255c-.035.157-.08.277-.133.36C5.828 3.578 6.658 5.33 7.93 5.52c1.317.194 2.28-.688 2.074-2.592L9.915 2.1a.23.23 0 0 1 .355-.216c.428.282.94.795 1.536 1.538C13.928 6.068 14.011 8.283 14 9.235 13.956 12.651 11.428 15 8 15 4.572 15 2 12.651 2 9.235 2.015 6.65 3.322 3.01 6.928.435c.135-.096.31-.225.528-.386z\" fill=\"currentColor\" fill-rule=\"nonzero\" /></g></symbol>"
});
var result = _browserSprite2.default.add(symbol);

var width = symbol.viewBox.split(' ')[2];
var height = symbol.viewBox.split(' ')[3];
var size = Math.max(width, height);

function SvgIcon(_ref) {
  var className = _ref.className,
      fill = _ref.fill,
      style = _ref.style,
      getRootRef = _ref.getRootRef,
      restProps = _objectWithoutProperties(_ref, ["className", "fill", "style", "getRootRef"]);

  return _react2.default.createElement(
    "div",
    _extends({}, restProps, {
      ref: getRootRef,
      className: 'Icon' + ' Icon--' + size + ' Icon--' + symbol.id + ' ' + (className || ''),
      style: _extends({}, style, { width: width + 'px', height: height + 'px' })
    }),
    _react2.default.createElement(
      "svg",
      { viewBox: symbol.viewBox, width: width, height: height, style: { display: 'block' } },
      _react2.default.createElement("use", { xlinkHref: '#' + symbol.id, style: { fill: 'currentColor', color: fill } })
    )
  );
}
exports.default = SvgIcon;

/***/ })

/******/ });
});

/***/ }),
/* 288 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 289 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__vkontakte_vkui__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__vkontakte_vkui___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__vkontakte_vkui__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_components_modules_search__ = __webpack_require__(93);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_pages_main__ = __webpack_require__(52);
var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}var SearchBlock=function(_React$Component){_inherits(SearchBlock,_React$Component);function SearchBlock(){var _ref;var _temp,_this,_ret;_classCallCheck(this,SearchBlock);for(var _len=arguments.length,args=Array(_len),_key=0;_key<_len;_key++){args[_key]=arguments[_key];}return _ret=(_temp=(_this=_possibleConstructorReturn(this,(_ref=SearchBlock.__proto__||Object.getPrototypeOf(SearchBlock)).call.apply(_ref,[this].concat(args))),_this),_this.handleChangePanel=function(e){e.preventDefault();_this.props.onChangePanel(__WEBPACK_IMPORTED_MODULE_3_pages_main__["a" /* PANELS */].geoPicker);},_this.handleCHangeSearch=function(value){_this.props.onChangeQ(value);},_temp),_possibleConstructorReturn(_this,_ret);}_createClass(SearchBlock,[{key:'render',value:function render(){var _props=this.props,vacanciesCount=_props.vacanciesCount,currentGeo=_props.currentGeo,value=_props.value;return __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_0_react__["Fragment"],null,__WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_2_components_modules_search__["a" /* default */],{value:value,onChange:this.handleCHangeSearch}),__WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_1__vkontakte_vkui__["Header"],{level:'2'},vacanciesCount,' \u0432\u0430\u043A\u0430\u043D\u0441\u0438\u0439 \u0432 ',__WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_1__vkontakte_vkui__["Link"],{onClick:this.handleChangePanel},currentGeo.grammatical_cases_ru.locative)));}}]);return SearchBlock;}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);/* harmony default export */ __webpack_exports__["a"] = (SearchBlock);

/***/ }),
/* 290 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 291 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_reselect__ = __webpack_require__(292);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_reselect___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_reselect__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash_get__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash_get___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_lodash_get__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_utils_get_by_ids__ = __webpack_require__(293);
var vacanciesSelector=Object(__WEBPACK_IMPORTED_MODULE_0_reselect__["createSelector"])([function(state){return state.vacancies.entities;},function(state){return state.pages.main.vacancies.ids;}],function(entities,ids){return Object(__WEBPACK_IMPORTED_MODULE_2_utils_get_by_ids__["a" /* default */])(entities,ids);});var mapStateToProps=Object(__WEBPACK_IMPORTED_MODULE_0_reselect__["createSelector"])([vacanciesSelector,function(state){return __WEBPACK_IMPORTED_MODULE_1_lodash_get___default()(state.pages.main.vacancies.metadata,'resultset.count');},function(state){return state.currentGeo.data;},function(state){return state.vacanciesFilter;}],function(vacancies,vacanciesCount,currentGeo,vacanciesFilter){return{vacancies:vacancies,vacanciesCount:vacanciesCount,currentGeo:currentGeo,vacanciesFilter:vacanciesFilter};});/* harmony default export */ __webpack_exports__["a"] = (mapStateToProps);

/***/ }),
/* 292 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.defaultMemoize = defaultMemoize;
exports.createSelectorCreator = createSelectorCreator;
exports.createStructuredSelector = createStructuredSelector;
function defaultEqualityCheck(a, b) {
  return a === b;
}

function areArgumentsShallowlyEqual(equalityCheck, prev, next) {
  if (prev === null || next === null || prev.length !== next.length) {
    return false;
  }

  // Do this in a for loop (and not a `forEach` or an `every`) so we can determine equality as fast as possible.
  var length = prev.length;
  for (var i = 0; i < length; i++) {
    if (!equalityCheck(prev[i], next[i])) {
      return false;
    }
  }

  return true;
}

function defaultMemoize(func) {
  var equalityCheck = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultEqualityCheck;

  var lastArgs = null;
  var lastResult = null;
  // we reference arguments instead of spreading them for performance reasons
  return function () {
    if (!areArgumentsShallowlyEqual(equalityCheck, lastArgs, arguments)) {
      // apply arguments instead of spreading for performance.
      lastResult = func.apply(null, arguments);
    }

    lastArgs = arguments;
    return lastResult;
  };
}

function getDependencies(funcs) {
  var dependencies = Array.isArray(funcs[0]) ? funcs[0] : funcs;

  if (!dependencies.every(function (dep) {
    return typeof dep === 'function';
  })) {
    var dependencyTypes = dependencies.map(function (dep) {
      return typeof dep;
    }).join(', ');
    throw new Error('Selector creators expect all input-selectors to be functions, ' + ('instead received the following types: [' + dependencyTypes + ']'));
  }

  return dependencies;
}

function createSelectorCreator(memoize) {
  for (var _len = arguments.length, memoizeOptions = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    memoizeOptions[_key - 1] = arguments[_key];
  }

  return function () {
    for (var _len2 = arguments.length, funcs = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      funcs[_key2] = arguments[_key2];
    }

    var recomputations = 0;
    var resultFunc = funcs.pop();
    var dependencies = getDependencies(funcs);

    var memoizedResultFunc = memoize.apply(undefined, [function () {
      recomputations++;
      // apply arguments instead of spreading for performance.
      return resultFunc.apply(null, arguments);
    }].concat(memoizeOptions));

    // If a selector is called with the exact same arguments we don't need to traverse our dependencies again.
    var selector = defaultMemoize(function () {
      var params = [];
      var length = dependencies.length;

      for (var i = 0; i < length; i++) {
        // apply arguments instead of spreading and mutate a local list of params for performance.
        params.push(dependencies[i].apply(null, arguments));
      }

      // apply arguments instead of spreading for performance.
      return memoizedResultFunc.apply(null, params);
    });

    selector.resultFunc = resultFunc;
    selector.recomputations = function () {
      return recomputations;
    };
    selector.resetRecomputations = function () {
      return recomputations = 0;
    };
    return selector;
  };
}

var createSelector = exports.createSelector = createSelectorCreator(defaultMemoize);

function createStructuredSelector(selectors) {
  var selectorCreator = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : createSelector;

  if (typeof selectors !== 'object') {
    throw new Error('createStructuredSelector expects first argument to be an object ' + ('where each property is a selector, instead received a ' + typeof selectors));
  }
  var objectKeys = Object.keys(selectors);
  return selectorCreator(objectKeys.map(function (key) {
    return selectors[key];
  }), function () {
    for (var _len3 = arguments.length, values = Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
      values[_key3] = arguments[_key3];
    }

    return values.reduce(function (composition, value, index) {
      composition[objectKeys[index]] = value;
      return composition;
    }, {});
  });
}

/***/ }),
/* 293 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (function(){var state=arguments.length>0&&arguments[0]!==undefined?arguments[0]:{};var ids=arguments[1];return ids.map(function(id){return state[id];});});

/***/ }),
/* 294 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 295 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_redux__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_redux__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__vkontakte_vkui__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__vkontakte_vkui___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__vkontakte_vkui__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__vkontakte_icons_dist_24_back__ = __webpack_require__(296);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__vkontakte_icons_dist_24_back___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__vkontakte_icons_dist_24_back__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__vkontakte_icons_dist_28_chevron_back__ = __webpack_require__(297);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__vkontakte_icons_dist_28_chevron_back___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__vkontakte_icons_dist_28_chevron_back__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_lodash_debounce__ = __webpack_require__(91);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_lodash_debounce___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_lodash_debounce__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_actions_geo__ = __webpack_require__(89);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_components_modules_search__ = __webpack_require__(93);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_utils_api_client__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_pages_main__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__item__ = __webpack_require__(298);
var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}var osname=Object(__WEBPACK_IMPORTED_MODULE_3__vkontakte_vkui__["platform"])();var initList=[];var GeoPickerPanel=function(_React$Component){_inherits(GeoPickerPanel,_React$Component);function GeoPickerPanel(){var _ref;var _temp,_this,_ret;_classCallCheck(this,GeoPickerPanel);for(var _len=arguments.length,args=Array(_len),_key=0;_key<_len;_key++){args[_key]=arguments[_key];}return _ret=(_temp=(_this=_possibleConstructorReturn(this,(_ref=GeoPickerPanel.__proto__||Object.getPrototypeOf(GeoPickerPanel)).call.apply(_ref,[this].concat(args))),_this),_this._isMounted=false,_this.state={list:initList,value:''},_this.handleSearch=function(value){_this.setState({value:value});_this.fetchGeo(value);},_this.fetchGeo=__WEBPACK_IMPORTED_MODULE_6_lodash_debounce___default()(function(){var search=arguments.length>0&&arguments[0]!==undefined?arguments[0]:'';__WEBPACK_IMPORTED_MODULE_9_utils_api_client__["a" /* apiV1 */].get('geo',{q:search,limit:18}).then(function(response){if(!_this._isMounted){return;}_this.setState({list:response.geo});},function(){});},200),_this.handleChangePanel=function(e){e.preventDefault();_this.props.onChangePanel(__WEBPACK_IMPORTED_MODULE_10_pages_main__["a" /* PANELS */].main);},_this.handleChangeGeo=function(geo){_this.props.actions.changeCurrentGeo(geo);_this.props.onChangePanel(__WEBPACK_IMPORTED_MODULE_10_pages_main__["a" /* PANELS */].main);},_this.renderItem=function(geo){return __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_11__item__["a" /* default */],{key:geo.id,geo:geo,expandable:true,onChangeGeo:_this.handleChangeGeo},geo.name);},_temp),_possibleConstructorReturn(_this,_ret);}_createClass(GeoPickerPanel,[{key:'componentDidMount',value:function componentDidMount(){var _this2=this;this._isMounted=true;__WEBPACK_IMPORTED_MODULE_9_utils_api_client__["a" /* apiV1 */].get('geo',{limit:18}).then(function(response){if(!_this2._isMounted){return;}initList=response.geo;_this2.setState({list:response.geo});},function(){});}},{key:'componentWillUnmount',value:function componentWillUnmount(){this._isMounted=false;this.fetchGeo.cancel();}},{key:'renderBackButton',value:function renderBackButton(){return __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_3__vkontakte_vkui__["HeaderButton"],{onClick:this.handleChangePanel},osname===__WEBPACK_IMPORTED_MODULE_3__vkontakte_vkui__["IOS"]?__WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_5__vkontakte_icons_dist_28_chevron_back___default.a,null):__WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_4__vkontakte_icons_dist_24_back___default.a,null));}},{key:'render',value:function render(){return __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_0_react__["Fragment"],null,__WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_3__vkontakte_vkui__["PanelHeader"],{noShadow:true,theme:'light',left:this.renderBackButton()},'\u0412\u044B\u0431\u043E\u0440 \u0433\u043E\u0440\u043E\u0434\u0430'),__WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_8_components_modules_search__["a" /* default */],{value:this.state.value,onChange:this.handleSearch}),__WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_3__vkontakte_vkui__["List"],null,this.state.list.map(this.renderItem)));}}]);return GeoPickerPanel;}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);var mapDispatchToProps=function mapDispatchToProps(dispatch){return{actions:Object(__WEBPACK_IMPORTED_MODULE_1_redux__["b" /* bindActionCreators */])({changeCurrentGeo:__WEBPACK_IMPORTED_MODULE_7_actions_geo__["a" /* changeCurrentGeo */]},dispatch)};};/* harmony default export */ __webpack_exports__["a"] = (Object(__WEBPACK_IMPORTED_MODULE_2_react_redux__["b" /* connect */])(null,mapDispatchToProps)(GeoPickerPanel));

/***/ }),
/* 296 */
/***/ (function(module, exports, __webpack_require__) {

(function webpackUniversalModuleDefinition(root, factory) {
	if(true)
		module.exports = factory(__webpack_require__(0), __webpack_require__(27), __webpack_require__(26));
	else if(typeof define === 'function' && define.amd)
		define(["react", "svg-sprite-loader/runtime/browser-sprite.build", "svg-baker-runtime/browser-symbol"], factory);
	else {
		var a = typeof exports === 'object' ? factory(require("react"), require("svg-sprite-loader/runtime/browser-sprite.build"), require("svg-baker-runtime/browser-symbol")) : factory(root["react"], root["svg-sprite-loader/runtime/browser-sprite.build"], root["svg-baker-runtime/browser-symbol"]);
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(window, function(__WEBPACK_EXTERNAL_MODULE__0__, __WEBPACK_EXTERNAL_MODULE__1__, __WEBPACK_EXTERNAL_MODULE__2__) {
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
/******/ 	return __webpack_require__(__webpack_require__.s = 210);
/******/ })
/************************************************************************/
/******/ ({

/***/ 0:
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__0__;

/***/ }),

/***/ 1:
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__1__;

/***/ }),

/***/ 2:
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__2__;

/***/ }),

/***/ 210:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _browserSymbol = __webpack_require__(2);

var _browserSymbol2 = _interopRequireDefault(_browserSymbol);

var _browserSprite = __webpack_require__(1);

var _browserSprite2 = _interopRequireDefault(_browserSprite);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var symbol = new _browserSymbol2.default({
  "id": "back_24",
  "use": "back_24-usage",
  "viewBox": "0 0 24 24",
  "content": "<symbol viewBox=\"0 0 24 24\" id=\"back_24\"><g fill=\"none\" fill-rule=\"evenodd\"><path d=\"M24 0H0v24h24z\" /><path d=\"M7.8 11l4.9-4.9a.99.99 0 0 0-1.4-1.4l-6.593 6.593a1 1 0 0 0 0 1.414L11.3 19.3a.99.99 0 0 0 1.4-1.4L7.8 13H20a1 1 0 0 0 0-2H7.8z\" fill=\"currentColor\" /></g></symbol>"
});
var result = _browserSprite2.default.add(symbol);

var width = symbol.viewBox.split(' ')[2];
var height = symbol.viewBox.split(' ')[3];
var size = Math.max(width, height);

function SvgIcon(_ref) {
  var className = _ref.className,
      fill = _ref.fill,
      style = _ref.style,
      getRootRef = _ref.getRootRef,
      restProps = _objectWithoutProperties(_ref, ["className", "fill", "style", "getRootRef"]);

  return _react2.default.createElement(
    "div",
    _extends({}, restProps, {
      ref: getRootRef,
      className: 'Icon' + ' Icon--' + size + ' Icon--' + symbol.id + ' ' + (className || ''),
      style: _extends({}, style, { width: width + 'px', height: height + 'px' })
    }),
    _react2.default.createElement(
      "svg",
      { viewBox: symbol.viewBox, width: width, height: height, style: { display: 'block' } },
      _react2.default.createElement("use", { xlinkHref: '#' + symbol.id, style: { fill: 'currentColor', color: fill } })
    )
  );
}
exports.default = SvgIcon;

/***/ })

/******/ });
});

/***/ }),
/* 297 */
/***/ (function(module, exports, __webpack_require__) {

(function webpackUniversalModuleDefinition(root, factory) {
	if(true)
		module.exports = factory(__webpack_require__(0), __webpack_require__(27), __webpack_require__(26));
	else if(typeof define === 'function' && define.amd)
		define(["react", "svg-sprite-loader/runtime/browser-sprite.build", "svg-baker-runtime/browser-symbol"], factory);
	else {
		var a = typeof exports === 'object' ? factory(require("react"), require("svg-sprite-loader/runtime/browser-sprite.build"), require("svg-baker-runtime/browser-symbol")) : factory(root["react"], root["svg-sprite-loader/runtime/browser-sprite.build"], root["svg-baker-runtime/browser-symbol"]);
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(window, function(__WEBPACK_EXTERNAL_MODULE__0__, __WEBPACK_EXTERNAL_MODULE__1__, __WEBPACK_EXTERNAL_MODULE__2__) {
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
/******/ 	return __webpack_require__(__webpack_require__.s = 72);
/******/ })
/************************************************************************/
/******/ ({

/***/ 0:
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__0__;

/***/ }),

/***/ 1:
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__1__;

/***/ }),

/***/ 2:
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__2__;

/***/ }),

/***/ 72:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _browserSymbol = __webpack_require__(2);

var _browserSymbol2 = _interopRequireDefault(_browserSymbol);

var _browserSprite = __webpack_require__(1);

var _browserSprite2 = _interopRequireDefault(_browserSprite);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var symbol = new _browserSymbol2.default({
  "id": "chevron_back_28",
  "use": "chevron_back_28-usage",
  "viewBox": "0 0 20 28",
  "content": "<symbol viewBox=\"0 0 20 28\" id=\"chevron_back_28\"><g fill=\"none\" fill-rule=\"evenodd\"><path d=\"M0 0h20v28H0z\" /><path d=\"M4.56 12.94L13 4.5a1.414 1.414 0 0 1 2 2L7.5 14l7.5 7.5a1.414 1.414 0 0 1-2 2l-8.44-8.44a1.5 1.5 0 0 1 0-2.12z\" fill=\"currentColor\" /></g></symbol>"
});
var result = _browserSprite2.default.add(symbol);

var width = symbol.viewBox.split(' ')[2];
var height = symbol.viewBox.split(' ')[3];
var size = Math.max(width, height);

function SvgIcon(_ref) {
  var className = _ref.className,
      fill = _ref.fill,
      style = _ref.style,
      getRootRef = _ref.getRootRef,
      restProps = _objectWithoutProperties(_ref, ["className", "fill", "style", "getRootRef"]);

  return _react2.default.createElement(
    "div",
    _extends({}, restProps, {
      ref: getRootRef,
      className: 'Icon' + ' Icon--' + size + ' Icon--' + symbol.id + ' ' + (className || ''),
      style: _extends({}, style, { width: width + 'px', height: height + 'px' })
    }),
    _react2.default.createElement(
      "svg",
      { viewBox: symbol.viewBox, width: width, height: height, style: { display: 'block' } },
      _react2.default.createElement("use", { xlinkHref: '#' + symbol.id, style: { fill: 'currentColor', color: fill } })
    )
  );
}
exports.default = SvgIcon;

/***/ })

/******/ });
});

/***/ }),
/* 298 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__vkontakte_vkui__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__vkontakte_vkui___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__vkontakte_vkui__);
var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}var GeoItem=function(_React$PureComponent){_inherits(GeoItem,_React$PureComponent);function GeoItem(){var _ref;var _temp,_this,_ret;_classCallCheck(this,GeoItem);for(var _len=arguments.length,args=Array(_len),_key=0;_key<_len;_key++){args[_key]=arguments[_key];}return _ret=(_temp=(_this=_possibleConstructorReturn(this,(_ref=GeoItem.__proto__||Object.getPrototypeOf(GeoItem)).call.apply(_ref,[this].concat(args))),_this),_this.handleClick=function(e){e.preventDefault();_this.props.onChangeGeo(_this.props.geo);},_temp),_possibleConstructorReturn(_this,_ret);}_createClass(GeoItem,[{key:'render',value:function render(){return __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_1__vkontakte_vkui__["Cell"],{onClick:this.handleClick},this.props.children);}}]);return GeoItem;}(__WEBPACK_IMPORTED_MODULE_0_react__["PureComponent"]);/* harmony default export */ __webpack_exports__["a"] = (GeoItem);

/***/ }),
/* 299 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = register;
/* unused harmony export unregister */
// In production, we register a service worker to serve assets from local cache.
// This lets the app load faster on subsequent visits in production, and gives
// it offline capabilities. However, it also means that developers (and users)
// will only see deployed updates on the "N+1" visit to a page, since previously
// cached resources are updated in the background.
// To learn more about the benefits of this model, read https://goo.gl/KwvDNy.
// This link also includes instructions on opting out of this behavior.
function registerValidSW(swUrl){navigator.serviceWorker.register(swUrl).then(function(registration){registration.onupdatefound=function(){var installingWorker=registration.installing;installingWorker.onstatechange=function(){if(installingWorker.state==='installed'){if(navigator.serviceWorker.controller){// At this point, the old content will have been purged and
// the fresh content will have been added to the cache.
// It's the perfect time to display a "New content is
// available; please refresh." message in your web app.
console.log('New content is available; please refresh.');}else{// At this point, everything has been precached.
// It's the perfect time to display a
// "Content is cached for offline use." message.
console.log('Content is cached for offline use.');}}};};}).catch(function(error){console.error('Error during service worker registration:',error);});}function checkValidServiceWorker(swUrl){// Check if the service worker can be found. If it can't reload the page.
fetch(swUrl).then(function(response){// Ensure service worker exists, and that we really are getting a JS file.
if(response.status===404||response.headers.get('content-type').indexOf('javascript')===-1){// No service worker found. Probably a different app. Reload the page.
navigator.serviceWorker.ready.then(function(registration){registration.unregister().then(function(){window.location.reload();});});}else{// Service worker found. Proceed as normal.
registerValidSW(swUrl);}}).catch(function(){console.log('No internet connection found. App is running in offline mode.');});}var isLocalhost=Boolean(window.location.hostname==='localhost'||// [::1] is the IPv6 localhost address.
window.location.hostname==='[::1]'||// 127.0.0.1/8 is considered localhost for IPv4.
window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function register(){if("production"==='production'&&'serviceWorker'in navigator){// The URL constructor is available in all browsers that support SW.
var publicUrl=new URL("/zp-dev",window.location);if(publicUrl.origin!==window.location.origin){// Our service worker won't work if PUBLIC_URL is on a different origin
// from what our page is served on. This might happen if a CDN is used to
// serve assets; see https://github.com/facebookincubator/create-react-app/issues/2374
return;}window.addEventListener('load',function(){var swUrl="/zp-dev"+'/service-worker.js';if(isLocalhost){// This is running on localhost. Lets check if a service worker still exists or not.
checkValidServiceWorker(swUrl);// Add some additional logging to localhost, pointing developers to the
// service worker/PWA documentation.
navigator.serviceWorker.ready.then(function(){console.log('This web app is being served cache-first by a service '+'worker. To learn more, visit https://goo.gl/SC7cgQ');});}else{// Is not local host. Just register service worker
registerValidSW(swUrl);}});}}function unregister(){if('serviceWorker'in navigator){navigator.serviceWorker.ready.then(function(registration){registration.unregister();});}}

/***/ }),
/* 300 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ })
/******/ ]);
//# sourceMappingURL=main.fde2c66a.js.map