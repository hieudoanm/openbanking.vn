(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([
	'object' == typeof document ? document.currentScript : void 0,
	5402,
	(e, t, n) => {
		var r = {
				229: function (e) {
					var t,
						n,
						r,
						o = (e.exports = {});
					function u() {
						throw Error('setTimeout has not been defined');
					}
					function i() {
						throw Error('clearTimeout has not been defined');
					}
					try {
						t = 'function' == typeof setTimeout ? setTimeout : u;
					} catch (e) {
						t = u;
					}
					try {
						n = 'function' == typeof clearTimeout ? clearTimeout : i;
					} catch (e) {
						n = i;
					}
					function a(e) {
						if (t === setTimeout) return setTimeout(e, 0);
						if ((t === u || !t) && setTimeout)
							return ((t = setTimeout), setTimeout(e, 0));
						try {
							return t(e, 0);
						} catch (n) {
							try {
								return t.call(null, e, 0);
							} catch (n) {
								return t.call(this, e, 0);
							}
						}
					}
					var c = [],
						s = !1,
						l = -1;
					function f() {
						s &&
							r &&
							((s = !1),
							r.length ? (c = r.concat(c)) : (l = -1),
							c.length && d());
					}
					function d() {
						if (!s) {
							var e = a(f);
							s = !0;
							for (var t = c.length; t; ) {
								for (r = c, c = []; ++l < t; ) r && r[l].run();
								((l = -1), (t = c.length));
							}
							((r = null),
								(s = !1),
								(function (e) {
									if (n === clearTimeout) return clearTimeout(e);
									if ((n === i || !n) && clearTimeout)
										return ((n = clearTimeout), clearTimeout(e));
									try {
										n(e);
									} catch (t) {
										try {
											return n.call(null, e);
										} catch (t) {
											return n.call(this, e);
										}
									}
								})(e));
						}
					}
					function p(e, t) {
						((this.fun = e), (this.array = t));
					}
					function y() {}
					((o.nextTick = function (e) {
						var t = Array(arguments.length - 1);
						if (arguments.length > 1)
							for (var n = 1; n < arguments.length; n++)
								t[n - 1] = arguments[n];
						(c.push(new p(e, t)), 1 !== c.length || s || a(d));
					}),
						(p.prototype.run = function () {
							this.fun.apply(null, this.array);
						}),
						(o.title = 'browser'),
						(o.browser = !0),
						(o.env = {}),
						(o.argv = []),
						(o.version = ''),
						(o.versions = {}),
						(o.on = y),
						(o.addListener = y),
						(o.once = y),
						(o.off = y),
						(o.removeListener = y),
						(o.removeAllListeners = y),
						(o.emit = y),
						(o.prependListener = y),
						(o.prependOnceListener = y),
						(o.listeners = function (e) {
							return [];
						}),
						(o.binding = function (e) {
							throw Error('process.binding is not supported');
						}),
						(o.cwd = function () {
							return '/';
						}),
						(o.chdir = function (e) {
							throw Error('process.chdir is not supported');
						}),
						(o.umask = function () {
							return 0;
						}));
				},
			},
			o = {};
		function u(e) {
			var t = o[e];
			if (void 0 !== t) return t.exports;
			var n = (o[e] = { exports: {} }),
				i = !0;
			try {
				(r[e](n, n.exports, u), (i = !1));
			} finally {
				i && delete o[e];
			}
			return n.exports;
		}
		((u.ab =
			'/ROOT/node_modules/.pnpm/next@16.0.0_@babel+core@7.28.4_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/next/dist/compiled/process/'),
			(t.exports = u(229)));
	},
	9779,
	(e, t, n) => {
		'use strict';
		var r, o;
		t.exports =
			(null == (r = e.g.process) ? void 0 : r.env) &&
			'object' == typeof (null == (o = e.g.process) ? void 0 : o.env)
				? e.g.process
				: e.r(5402);
	},
	2983,
	(e, t, n) => {
		'use strict';
		var r = Symbol.for('react.transitional.element');
		function o(e, t, n) {
			var o = null;
			if (
				(void 0 !== n && (o = '' + n),
				void 0 !== t.key && (o = '' + t.key),
				'key' in t)
			)
				for (var u in ((n = {}), t)) 'key' !== u && (n[u] = t[u]);
			else n = t;
			return {
				$$typeof: r,
				type: e,
				key: o,
				ref: void 0 !== (t = n.ref) ? t : null,
				props: n,
			};
		}
		((n.Fragment = Symbol.for('react.fragment')), (n.jsx = o), (n.jsxs = o));
	},
	4601,
	(e, t, n) => {
		'use strict';
		t.exports = e.r(2983);
	},
	2879,
	(e, t, n) => {
		'use strict';
		n._ = function (e) {
			return e && e.__esModule ? e : { default: e };
		};
	},
	4513,
	(e, t, n) => {
		'use strict';
		var r = e.i(9779),
			o = Symbol.for('react.transitional.element'),
			u = Symbol.for('react.portal'),
			i = Symbol.for('react.fragment'),
			a = Symbol.for('react.strict_mode'),
			c = Symbol.for('react.profiler'),
			s = Symbol.for('react.consumer'),
			l = Symbol.for('react.context'),
			f = Symbol.for('react.forward_ref'),
			d = Symbol.for('react.suspense'),
			p = Symbol.for('react.memo'),
			y = Symbol.for('react.lazy'),
			h = Symbol.for('react.activity'),
			m = Symbol.iterator,
			_ = {
				isMounted: function () {
					return !1;
				},
				enqueueForceUpdate: function () {},
				enqueueReplaceState: function () {},
				enqueueSetState: function () {},
			},
			v = Object.assign,
			b = {};
		function g(e, t, n) {
			((this.props = e),
				(this.context = t),
				(this.refs = b),
				(this.updater = n || _));
		}
		function w() {}
		function E(e, t, n) {
			((this.props = e),
				(this.context = t),
				(this.refs = b),
				(this.updater = n || _));
		}
		((g.prototype.isReactComponent = {}),
			(g.prototype.setState = function (e, t) {
				if ('object' != typeof e && 'function' != typeof e && null != e)
					throw Error(
						'takes an object of state variables to update or a function which returns an object of state variables.',
					);
				this.updater.enqueueSetState(this, e, t, 'setState');
			}),
			(g.prototype.forceUpdate = function (e) {
				this.updater.enqueueForceUpdate(this, e, 'forceUpdate');
			}),
			(w.prototype = g.prototype));
		var S = (E.prototype = new w());
		((S.constructor = E), v(S, g.prototype), (S.isPureReactComponent = !0));
		var j = Array.isArray;
		function x() {}
		var O = { H: null, A: null, T: null, S: null },
			P = Object.prototype.hasOwnProperty;
		function T(e, t, n) {
			var r = n.ref;
			return {
				$$typeof: o,
				type: e,
				key: t,
				ref: void 0 !== r ? r : null,
				props: n,
			};
		}
		function k(e) {
			return 'object' == typeof e && null !== e && e.$$typeof === o;
		}
		var C = /\/+/g;
		function $(e, t) {
			var n, r;
			return 'object' == typeof e && null !== e && null != e.key
				? ((n = '' + e.key),
					(r = { '=': '=0', ':': '=2' }),
					'$' +
						n.replace(/[=:]/g, function (e) {
							return r[e];
						}))
				: t.toString(36);
		}
		function R(e, t, n) {
			if (null == e) return e;
			var r = [],
				i = 0;
			return (
				!(function e(t, n, r, i, a) {
					var c,
						s,
						l,
						f = typeof t;
					('undefined' === f || 'boolean' === f) && (t = null);
					var d = !1;
					if (null === t) d = !0;
					else
						switch (f) {
							case 'bigint':
							case 'string':
							case 'number':
								d = !0;
								break;
							case 'object':
								switch (t.$$typeof) {
									case o:
									case u:
										d = !0;
										break;
									case y:
										return e((d = t._init)(t._payload), n, r, i, a);
								}
						}
					if (d)
						return (
							(a = a(t)),
							(d = '' === i ? '.' + $(t, 0) : i),
							j(a)
								? ((r = ''),
									null != d && (r = d.replace(C, '$&/') + '/'),
									e(a, n, r, '', function (e) {
										return e;
									}))
								: null != a &&
									(k(a) &&
										((c = a),
										(s =
											r +
											(null == a.key || (t && t.key === a.key)
												? ''
												: ('' + a.key).replace(C, '$&/') + '/') +
											d),
										(a = T(c.type, s, c.props))),
									n.push(a)),
							1
						);
					d = 0;
					var p = '' === i ? '.' : i + ':';
					if (j(t))
						for (var h = 0; h < t.length; h++)
							((f = p + $((i = t[h]), h)), (d += e(i, n, r, f, a)));
					else if (
						'function' ==
						typeof (h =
							null === (l = t) || 'object' != typeof l
								? null
								: 'function' == typeof (l = (m && l[m]) || l['@@iterator'])
									? l
									: null)
					)
						for (t = h.call(t), h = 0; !(i = t.next()).done; )
							((f = p + $((i = i.value), h++)), (d += e(i, n, r, f, a)));
					else if ('object' === f) {
						if ('function' == typeof t.then)
							return e(
								(function (e) {
									switch (e.status) {
										case 'fulfilled':
											return e.value;
										case 'rejected':
											throw e.reason;
										default:
											switch (
												('string' == typeof e.status
													? e.then(x, x)
													: ((e.status = 'pending'),
														e.then(
															function (t) {
																'pending' === e.status &&
																	((e.status = 'fulfilled'), (e.value = t));
															},
															function (t) {
																'pending' === e.status &&
																	((e.status = 'rejected'), (e.reason = t));
															},
														)),
												e.status)
											) {
												case 'fulfilled':
													return e.value;
												case 'rejected':
													throw e.reason;
											}
									}
									throw e;
								})(t),
								n,
								r,
								i,
								a,
							);
						throw Error(
							'Objects are not valid as a React child (found: ' +
								('[object Object]' === (n = String(t))
									? 'object with keys {' + Object.keys(t).join(', ') + '}'
									: n) +
								'). If you meant to render a collection of children, use an array instead.',
						);
					}
					return d;
				})(e, r, '', '', function (e) {
					return t.call(n, e, i++);
				}),
				r
			);
		}
		function H(e) {
			if (-1 === e._status) {
				var t = e._result;
				((t = t()).then(
					function (t) {
						(0 === e._status || -1 === e._status) &&
							((e._status = 1), (e._result = t));
					},
					function (t) {
						(0 === e._status || -1 === e._status) &&
							((e._status = 2), (e._result = t));
					},
				),
					-1 === e._status && ((e._status = 0), (e._result = t)));
			}
			if (1 === e._status) return e._result.default;
			throw e._result;
		}
		var N =
			'function' == typeof reportError
				? reportError
				: function (e) {
						if (
							'object' == typeof window &&
							'function' == typeof window.ErrorEvent
						) {
							var t = new window.ErrorEvent('error', {
								bubbles: !0,
								cancelable: !0,
								message:
									'object' == typeof e &&
									null !== e &&
									'string' == typeof e.message
										? String(e.message)
										: String(e),
								error: e,
							});
							if (!window.dispatchEvent(t)) return;
						} else if (
							'object' == typeof r.default &&
							'function' == typeof r.default.emit
						)
							return void r.default.emit('uncaughtException', e);
						console.error(e);
					};
		((n.Activity = h),
			(n.Children = {
				map: R,
				forEach: function (e, t, n) {
					R(
						e,
						function () {
							t.apply(this, arguments);
						},
						n,
					);
				},
				count: function (e) {
					var t = 0;
					return (
						R(e, function () {
							t++;
						}),
						t
					);
				},
				toArray: function (e) {
					return (
						R(e, function (e) {
							return e;
						}) || []
					);
				},
				only: function (e) {
					if (!k(e))
						throw Error(
							'React.Children.only expected to receive a single React element child.',
						);
					return e;
				},
			}),
			(n.Component = g),
			(n.Fragment = i),
			(n.Profiler = c),
			(n.PureComponent = E),
			(n.StrictMode = a),
			(n.Suspense = d),
			(n.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = O),
			(n.__COMPILER_RUNTIME = {
				__proto__: null,
				c: function (e) {
					return O.H.useMemoCache(e);
				},
			}),
			(n.cache = function (e) {
				return function () {
					return e.apply(null, arguments);
				};
			}),
			(n.cacheSignal = function () {
				return null;
			}),
			(n.cloneElement = function (e, t, n) {
				if (null == e)
					throw Error(
						'The argument must be a React element, but you passed ' + e + '.',
					);
				var r = v({}, e.props),
					o = e.key;
				if (null != t)
					for (u in (void 0 !== t.key && (o = '' + t.key), t))
						P.call(t, u) &&
							'key' !== u &&
							'__self' !== u &&
							'__source' !== u &&
							('ref' !== u || void 0 !== t.ref) &&
							(r[u] = t[u]);
				var u = arguments.length - 2;
				if (1 === u) r.children = n;
				else if (1 < u) {
					for (var i = Array(u), a = 0; a < u; a++) i[a] = arguments[a + 2];
					r.children = i;
				}
				return T(e.type, o, r);
			}),
			(n.createContext = function (e) {
				return (
					((e = {
						$$typeof: l,
						_currentValue: e,
						_currentValue2: e,
						_threadCount: 0,
						Provider: null,
						Consumer: null,
					}).Provider = e),
					(e.Consumer = { $$typeof: s, _context: e }),
					e
				);
			}),
			(n.createElement = function (e, t, n) {
				var r,
					o = {},
					u = null;
				if (null != t)
					for (r in (void 0 !== t.key && (u = '' + t.key), t))
						P.call(t, r) &&
							'key' !== r &&
							'__self' !== r &&
							'__source' !== r &&
							(o[r] = t[r]);
				var i = arguments.length - 2;
				if (1 === i) o.children = n;
				else if (1 < i) {
					for (var a = Array(i), c = 0; c < i; c++) a[c] = arguments[c + 2];
					o.children = a;
				}
				if (e && e.defaultProps)
					for (r in (i = e.defaultProps)) void 0 === o[r] && (o[r] = i[r]);
				return T(e, u, o);
			}),
			(n.createRef = function () {
				return { current: null };
			}),
			(n.forwardRef = function (e) {
				return { $$typeof: f, render: e };
			}),
			(n.isValidElement = k),
			(n.lazy = function (e) {
				return { $$typeof: y, _payload: { _status: -1, _result: e }, _init: H };
			}),
			(n.memo = function (e, t) {
				return { $$typeof: p, type: e, compare: void 0 === t ? null : t };
			}),
			(n.startTransition = function (e) {
				var t = O.T,
					n = {};
				O.T = n;
				try {
					var r = e(),
						o = O.S;
					(null !== o && o(n, r),
						'object' == typeof r &&
							null !== r &&
							'function' == typeof r.then &&
							r.then(x, N));
				} catch (e) {
					N(e);
				} finally {
					(null !== t && null !== n.types && (t.types = n.types), (O.T = t));
				}
			}),
			(n.unstable_useCacheRefresh = function () {
				return O.H.useCacheRefresh();
			}),
			(n.use = function (e) {
				return O.H.use(e);
			}),
			(n.useActionState = function (e, t, n) {
				return O.H.useActionState(e, t, n);
			}),
			(n.useCallback = function (e, t) {
				return O.H.useCallback(e, t);
			}),
			(n.useContext = function (e) {
				return O.H.useContext(e);
			}),
			(n.useDebugValue = function () {}),
			(n.useDeferredValue = function (e, t) {
				return O.H.useDeferredValue(e, t);
			}),
			(n.useEffect = function (e, t) {
				return O.H.useEffect(e, t);
			}),
			(n.useEffectEvent = function (e) {
				return O.H.useEffectEvent(e);
			}),
			(n.useId = function () {
				return O.H.useId();
			}),
			(n.useImperativeHandle = function (e, t, n) {
				return O.H.useImperativeHandle(e, t, n);
			}),
			(n.useInsertionEffect = function (e, t) {
				return O.H.useInsertionEffect(e, t);
			}),
			(n.useLayoutEffect = function (e, t) {
				return O.H.useLayoutEffect(e, t);
			}),
			(n.useMemo = function (e, t) {
				return O.H.useMemo(e, t);
			}),
			(n.useOptimistic = function (e, t) {
				return O.H.useOptimistic(e, t);
			}),
			(n.useReducer = function (e, t, n) {
				return O.H.useReducer(e, t, n);
			}),
			(n.useRef = function (e) {
				return O.H.useRef(e);
			}),
			(n.useState = function (e) {
				return O.H.useState(e);
			}),
			(n.useSyncExternalStore = function (e, t, n) {
				return O.H.useSyncExternalStore(e, t, n);
			}),
			(n.useTransition = function () {
				return O.H.useTransition();
			}),
			(n.version = '19.2.0'));
	},
	6960,
	(e, t, n) => {
		'use strict';
		t.exports = e.r(4513);
	},
	7602,
	(e, t, n) => {
		'use strict';
		function r(e) {
			if ('function' != typeof WeakMap) return null;
			var t = new WeakMap(),
				n = new WeakMap();
			return (r = function (e) {
				return e ? n : t;
			})(e);
		}
		n._ = function (e, t) {
			if (!t && e && e.__esModule) return e;
			if (null === e || ('object' != typeof e && 'function' != typeof e))
				return { default: e };
			var n = r(t);
			if (n && n.has(e)) return n.get(e);
			var o = { __proto__: null },
				u = Object.defineProperty && Object.getOwnPropertyDescriptor;
			for (var i in e)
				if ('default' !== i && Object.prototype.hasOwnProperty.call(e, i)) {
					var a = u ? Object.getOwnPropertyDescriptor(e, i) : null;
					a && (a.get || a.set)
						? Object.defineProperty(o, i, a)
						: (o[i] = e[i]);
				}
			return ((o.default = e), n && n.set(e, o), o);
		};
	},
	3790,
	(e, t, n) => {
		'use strict';
		Object.defineProperty(n, '__esModule', { value: !0 });
		var r = {
			DecodeError: function () {
				return _;
			},
			MiddlewareNotFoundError: function () {
				return w;
			},
			MissingStaticPage: function () {
				return g;
			},
			NormalizeError: function () {
				return v;
			},
			PageNotFoundError: function () {
				return b;
			},
			SP: function () {
				return h;
			},
			ST: function () {
				return m;
			},
			WEB_VITALS: function () {
				return u;
			},
			execOnce: function () {
				return i;
			},
			getDisplayName: function () {
				return f;
			},
			getLocationOrigin: function () {
				return s;
			},
			getURL: function () {
				return l;
			},
			isAbsoluteUrl: function () {
				return c;
			},
			isResSent: function () {
				return d;
			},
			loadGetInitialProps: function () {
				return y;
			},
			normalizeRepeatedSlashes: function () {
				return p;
			},
			stringifyError: function () {
				return E;
			},
		};
		for (var o in r) Object.defineProperty(n, o, { enumerable: !0, get: r[o] });
		let u = ['CLS', 'FCP', 'FID', 'INP', 'LCP', 'TTFB'];
		function i(e) {
			let t,
				n = !1;
			return (...r) => (n || ((n = !0), (t = e(...r))), t);
		}
		let a = /^[a-zA-Z][a-zA-Z\d+\-.]*?:/,
			c = (e) => a.test(e);
		function s() {
			let { protocol: e, hostname: t, port: n } = window.location;
			return `${e}//${t}${n ? ':' + n : ''}`;
		}
		function l() {
			let { href: e } = window.location,
				t = s();
			return e.substring(t.length);
		}
		function f(e) {
			return 'string' == typeof e ? e : e.displayName || e.name || 'Unknown';
		}
		function d(e) {
			return e.finished || e.headersSent;
		}
		function p(e) {
			let t = e.split('?');
			return (
				t[0].replace(/\\/g, '/').replace(/\/\/+/g, '/') +
				(t[1] ? `?${t.slice(1).join('?')}` : '')
			);
		}
		async function y(e, t) {
			let n = t.res || (t.ctx && t.ctx.res);
			if (!e.getInitialProps)
				return t.ctx && t.Component
					? { pageProps: await y(t.Component, t.ctx) }
					: {};
			let r = await e.getInitialProps(t);
			if (n && d(n)) return r;
			if (!r)
				throw Object.defineProperty(
					Error(
						`"${f(e)}.getInitialProps()" should resolve to an object. But found "${r}" instead.`,
					),
					'__NEXT_ERROR_CODE',
					{ value: 'E394', enumerable: !1, configurable: !0 },
				);
			return r;
		}
		let h = 'undefined' != typeof performance,
			m =
				h &&
				['mark', 'measure', 'getEntriesByName'].every(
					(e) => 'function' == typeof performance[e],
				);
		class _ extends Error {}
		class v extends Error {}
		class b extends Error {
			constructor(e) {
				(super(),
					(this.code = 'ENOENT'),
					(this.name = 'PageNotFoundError'),
					(this.message = `Cannot find module for page: ${e}`));
			}
		}
		class g extends Error {
			constructor(e, t) {
				(super(),
					(this.message = `Failed to load static file for page: ${e} ${t}`));
			}
		}
		class w extends Error {
			constructor() {
				(super(),
					(this.code = 'ENOENT'),
					(this.message = 'Cannot find the middleware module'));
			}
		}
		function E(e) {
			return JSON.stringify({ message: e.message, stack: e.stack });
		}
	},
	8065,
	(e, t, n) => {
		'use strict';
		(Object.defineProperty(n, '__esModule', { value: !0 }),
			Object.defineProperty(n, 'HeadManagerContext', {
				enumerable: !0,
				get: function () {
					return r;
				},
			}));
		let r = e.r(2879)._(e.r(6960)).default.createContext({});
	},
	8114,
	(e, t, n) => {
		'use strict';
		(Object.defineProperty(n, '__esModule', { value: !0 }),
			Object.defineProperty(n, 'warnOnce', {
				enumerable: !0,
				get: function () {
					return r;
				},
			}));
		let r = (e) => {};
	},
	4366,
	(e, t, n) => {
		'use strict';
		(Object.defineProperty(n, '__esModule', { value: !0 }),
			Object.defineProperty(n, 'default', {
				enumerable: !0,
				get: function () {
					return a;
				},
			}));
		let r = e.r(6960),
			o = 'undefined' == typeof window,
			u = o ? () => {} : r.useLayoutEffect,
			i = o ? () => {} : r.useEffect;
		function a(e) {
			let { headManager: t, reduceComponentsToState: n } = e;
			function a() {
				if (t && t.mountedInstances) {
					let e = r.Children.toArray(
						Array.from(t.mountedInstances).filter(Boolean),
					);
					t.updateHead(n(e));
				}
			}
			return (
				o && (t?.mountedInstances?.add(e.children), a()),
				u(
					() => (
						t?.mountedInstances?.add(e.children),
						() => {
							t?.mountedInstances?.delete(e.children);
						}
					),
				),
				u(
					() => (
						t && (t._pendingUpdate = a),
						() => {
							t && (t._pendingUpdate = a);
						}
					),
				),
				i(
					() => (
						t &&
							t._pendingUpdate &&
							(t._pendingUpdate(), (t._pendingUpdate = null)),
						() => {
							t &&
								t._pendingUpdate &&
								(t._pendingUpdate(), (t._pendingUpdate = null));
						}
					),
				),
				null
			);
		}
	},
	6196,
	(e, t, n) => {
		'use strict';
		Object.defineProperty(n, '__esModule', { value: !0 });
		var r = {
			default: function () {
				return h;
			},
			defaultHead: function () {
				return f;
			},
		};
		for (var o in r) Object.defineProperty(n, o, { enumerable: !0, get: r[o] });
		let u = e.r(2879),
			i = e.r(7602),
			a = e.r(4601),
			c = i._(e.r(6960)),
			s = u._(e.r(4366)),
			l = e.r(8065);
		function f() {
			return [
				(0, a.jsx)('meta', { charSet: 'utf-8' }, 'charset'),
				(0, a.jsx)(
					'meta',
					{ name: 'viewport', content: 'width=device-width' },
					'viewport',
				),
			];
		}
		function d(e, t) {
			return 'string' == typeof t || 'number' == typeof t
				? e
				: t.type === c.default.Fragment
					? e.concat(
							c.default.Children.toArray(t.props.children).reduce(
								(e, t) =>
									'string' == typeof t || 'number' == typeof t
										? e
										: e.concat(t),
								[],
							),
						)
					: e.concat(t);
		}
		e.r(8114);
		let p = ['name', 'httpEquiv', 'charSet', 'itemProp'];
		function y(e) {
			let t, n, r, o;
			return e
				.reduce(d, [])
				.reverse()
				.concat(f().reverse())
				.filter(
					((t = new Set()),
					(n = new Set()),
					(r = new Set()),
					(o = {}),
					(e) => {
						let u = !0,
							i = !1;
						if (e.key && 'number' != typeof e.key && e.key.indexOf('$') > 0) {
							i = !0;
							let n = e.key.slice(e.key.indexOf('$') + 1);
							t.has(n) ? (u = !1) : t.add(n);
						}
						switch (e.type) {
							case 'title':
							case 'base':
								n.has(e.type) ? (u = !1) : n.add(e.type);
								break;
							case 'meta':
								for (let t = 0, n = p.length; t < n; t++) {
									let n = p[t];
									if (e.props.hasOwnProperty(n))
										if ('charSet' === n) r.has(n) ? (u = !1) : r.add(n);
										else {
											let t = e.props[n],
												r = o[n] || new Set();
											('name' !== n || !i) && r.has(t)
												? (u = !1)
												: (r.add(t), (o[n] = r));
										}
								}
						}
						return u;
					}),
				)
				.reverse()
				.map((e, t) => {
					let n = e.key || t;
					return c.default.cloneElement(e, { key: n });
				});
		}
		let h = function ({ children: e }) {
			let t = (0, c.useContext)(l.HeadManagerContext);
			return (0, a.jsx)(s.default, {
				reduceComponentsToState: y,
				headManager: t,
				children: e,
			});
		};
		('function' == typeof n.default ||
			('object' == typeof n.default && null !== n.default)) &&
			void 0 === n.default.__esModule &&
			(Object.defineProperty(n.default, '__esModule', { value: !0 }),
			Object.assign(n.default, n),
			(t.exports = n.default));
	},
	1805,
	(e, t, n) => {
		t.exports = e.r(6196);
	},
	6027,
	(e) => {
		'use strict';
		var t = e.i(4601),
			n = e.i(1805);
		e.s([
			'default',
			0,
			({ Component: e, pageProps: r }) =>
				(0, t.jsxs)(t.Fragment, {
					children: [
						(0, t.jsx)(n.default, {
							children: (0, t.jsx)('title', {
								children: 'Open Banking in Vietnam',
							}),
						}),
						(0, t.jsx)('div', { children: (0, t.jsx)(e, { ...r }) }),
					],
				}),
		]);
	},
	4757,
	(e, t, n) => {
		let r = '/_app';
		((window.__NEXT_P = window.__NEXT_P || []).push([r, () => e.r(6027)]),
			t.hot &&
				t.hot.dispose(function () {
					window.__NEXT_P.push([r]);
				}));
	},
	7114,
	(e) => {
		e.v((t) =>
			Promise.all(
				['static/chunks/90899a9f881f81b2.js'].map((t) => e.l(t)),
			).then(() => t(1201)),
		);
	},
	8093,
	(e) => {
		e.v((t) =>
			Promise.all(
				['static/chunks/001ccb3ba18d9746.js'].map((t) => e.l(t)),
			).then(() => t(2314)),
		);
	},
]);
