(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
	[332],
	{
		386: (e, t, n) => {
			'use strict';
			(Object.defineProperty(t, '__esModule', { value: !0 }),
				!(function (e, t) {
					for (var n in t) Object.defineProperty(e, n, { enumerable: !0, get: t[n] });
				})(t, {
					default: function () {
						return N;
					},
					useLinkStatus: function () {
						return v;
					},
				}));
			let r = n(8781),
				l = n(5640),
				s = r._(n(148)),
				i = n(2480),
				a = n(2402),
				c = n(6939),
				o = n(9925),
				u = n(5686),
				d = n(3295),
				f = n(7233),
				h = n(4434),
				p = n(5767),
				x = n(6492);
			n(5446);
			let m = new Set();
			function g(e, t, n, r) {
				if ((0, a.isLocalURL)(t)) {
					if (!r.bypassPrefetchedCheck) {
						let l = t + '%' + n + '%' + (void 0 !== r.locale ? r.locale : 'locale' in e ? e.locale : void 0);
						if (m.has(l)) return;
						m.add(l);
					}
					e.prefetch(t, n, r).catch((e) => {});
				}
			}
			function b(e) {
				return 'string' == typeof e ? e : (0, c.formatUrl)(e);
			}
			let j = s.default.forwardRef(function (e, t) {
					let n,
						r,
						{
							href: c,
							as: m,
							children: j,
							prefetch: y = null,
							passHref: v,
							replace: N,
							shallow: O,
							scroll: w,
							locale: P,
							onClick: k,
							onNavigate: _,
							onMouseEnter: C,
							onTouchStart: M,
							legacyBehavior: E = !1,
							...I
						} = e;
					((n = j), E && ('string' == typeof n || 'number' == typeof n) && (n = (0, l.jsx)('a', { children: n })));
					let B = s.default.useContext(d.RouterContext),
						T = !1 !== y,
						{ href: A, as: S } = s.default.useMemo(() => {
							if (!B) {
								let e = b(c);
								return { href: e, as: m ? b(m) : e };
							}
							let [e, t] = (0, i.resolveHref)(B, c, !0);
							return { href: e, as: m ? (0, i.resolveHref)(B, m) : t || e };
						}, [B, c, m]),
						D = s.default.useRef(A),
						L = s.default.useRef(S);
					E && (r = s.default.Children.only(n));
					let R = E ? r && 'object' == typeof r && r.ref : t,
						[q, V, K] = (0, f.useIntersection)({ rootMargin: '200px' }),
						G = s.default.useCallback(
							(e) => {
								((L.current !== S || D.current !== A) && (K(), (L.current = S), (D.current = A)), q(e));
							},
							[S, A, K, q],
						),
						H = (0, x.useMergedRef)(G, R);
					s.default.useEffect(() => {
						B && V && T && g(B, A, S, { locale: P });
					}, [S, A, V, P, T, null == B ? void 0 : B.locale, B]);
					let F = {
						ref: H,
						onClick(e) {
							(E || 'function' != typeof k || k(e),
								E && r.props && 'function' == typeof r.props.onClick && r.props.onClick(e),
								B &&
									(e.defaultPrevented ||
										(function (e, t, n, r, l, s, i, c, o) {
											let { nodeName: u } = e.currentTarget;
											if (
												!(
													('A' === u.toUpperCase() &&
														(function (e) {
															let t = e.currentTarget.getAttribute('target');
															return (
																(t && '_self' !== t) ||
																e.metaKey ||
																e.ctrlKey ||
																e.shiftKey ||
																e.altKey ||
																(e.nativeEvent && 2 === e.nativeEvent.which)
															);
														})(e)) ||
													e.currentTarget.hasAttribute('download')
												)
											) {
												if (!(0, a.isLocalURL)(n)) {
													l && (e.preventDefault(), location.replace(n));
													return;
												}
												(e.preventDefault(),
													(() => {
														if (o) {
															let e = !1;
															if (
																(o({
																	preventDefault: () => {
																		e = !0;
																	},
																}),
																e)
															)
																return;
														}
														let e = null == i || i;
														'beforePopState' in t
															? t[l ? 'replace' : 'push'](n, r, { shallow: s, locale: c, scroll: e })
															: t[l ? 'replace' : 'push'](r || n, { scroll: e });
													})());
											}
										})(e, B, A, S, N, O, w, P, _)));
						},
						onMouseEnter(e) {
							(E || 'function' != typeof C || C(e),
								E && r.props && 'function' == typeof r.props.onMouseEnter && r.props.onMouseEnter(e),
								B && g(B, A, S, { locale: P, priority: !0, bypassPrefetchedCheck: !0 }));
						},
						onTouchStart: function (e) {
							(E || 'function' != typeof M || M(e),
								E && r.props && 'function' == typeof r.props.onTouchStart && r.props.onTouchStart(e),
								B && g(B, A, S, { locale: P, priority: !0, bypassPrefetchedCheck: !0 }));
						},
					};
					if ((0, o.isAbsoluteUrl)(S)) F.href = S;
					else if (!E || v || ('a' === r.type && !('href' in r.props))) {
						let e = void 0 !== P ? P : null == B ? void 0 : B.locale;
						F.href =
							((null == B ? void 0 : B.isLocaleDomain) &&
								(0, h.getDomainLocale)(S, e, null == B ? void 0 : B.locales, null == B ? void 0 : B.domainLocales)) ||
							(0, p.addBasePath)((0, u.addLocale)(S, e, null == B ? void 0 : B.defaultLocale));
					}
					return E ? s.default.cloneElement(r, F) : (0, l.jsx)('a', { ...I, ...F, children: n });
				}),
				y = (0, s.createContext)({ pending: !1 }),
				v = () => (0, s.useContext)(y),
				N = j;
			('function' == typeof t.default || ('object' == typeof t.default && null !== t.default)) &&
				void 0 === t.default.__esModule &&
				(Object.defineProperty(t.default, '__esModule', { value: !0 }),
				Object.assign(t.default, t),
				(e.exports = t.default));
		},
		4373: (e, t, n) => {
			'use strict';
			n.d(t, { k5: () => u });
			var r = n(148),
				l = { color: void 0, size: void 0, className: void 0, style: void 0, attr: void 0 },
				s = r.createContext && r.createContext(l),
				i = ['attr', 'size', 'title'];
			function a() {
				return (a = Object.assign
					? Object.assign.bind()
					: function (e) {
							for (var t = 1; t < arguments.length; t++) {
								var n = arguments[t];
								for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
							}
							return e;
						}).apply(this, arguments);
			}
			function c(e, t) {
				var n = Object.keys(e);
				if (Object.getOwnPropertySymbols) {
					var r = Object.getOwnPropertySymbols(e);
					(t &&
						(r = r.filter(function (t) {
							return Object.getOwnPropertyDescriptor(e, t).enumerable;
						})),
						n.push.apply(n, r));
				}
				return n;
			}
			function o(e) {
				for (var t = 1; t < arguments.length; t++) {
					var n = null != arguments[t] ? arguments[t] : {};
					t % 2
						? c(Object(n), !0).forEach(function (t) {
								var r, l, s;
								((r = e),
									(l = t),
									(s = n[t]),
									(l = (function (e) {
										var t = (function (e, t) {
											if ('object' != typeof e || !e) return e;
											var n = e[Symbol.toPrimitive];
											if (void 0 !== n) {
												var r = n.call(e, t || 'default');
												if ('object' != typeof r) return r;
												throw TypeError('@@toPrimitive must return a primitive value.');
											}
											return ('string' === t ? String : Number)(e);
										})(e, 'string');
										return 'symbol' == typeof t ? t : t + '';
									})(l)) in r
										? Object.defineProperty(r, l, { value: s, enumerable: !0, configurable: !0, writable: !0 })
										: (r[l] = s));
							})
						: Object.getOwnPropertyDescriptors
							? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
							: c(Object(n)).forEach(function (t) {
									Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
								});
				}
				return e;
			}
			function u(e) {
				return (t) =>
					r.createElement(
						d,
						a({ attr: o({}, e.attr) }, t),
						(function e(t) {
							return t && t.map((t, n) => r.createElement(t.tag, o({ key: n }, t.attr), e(t.child)));
						})(e.child),
					);
			}
			function d(e) {
				var t = (t) => {
					var n,
						{ attr: l, size: s, title: c } = e,
						u = (function (e, t) {
							if (null == e) return {};
							var n,
								r,
								l = (function (e, t) {
									if (null == e) return {};
									var n = {};
									for (var r in e)
										if (Object.prototype.hasOwnProperty.call(e, r)) {
											if (t.indexOf(r) >= 0) continue;
											n[r] = e[r];
										}
									return n;
								})(e, t);
							if (Object.getOwnPropertySymbols) {
								var s = Object.getOwnPropertySymbols(e);
								for (r = 0; r < s.length; r++)
									((n = s[r]),
										!(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (l[n] = e[n]));
							}
							return l;
						})(e, i),
						d = s || t.size || '1em';
					return (
						t.className && (n = t.className),
						e.className && (n = (n ? n + ' ' : '') + e.className),
						r.createElement(
							'svg',
							a({ stroke: 'currentColor', fill: 'currentColor', strokeWidth: '0' }, t.attr, l, u, {
								className: n,
								style: o(o({ color: e.color || t.color }, t.style), e.style),
								height: d,
								width: d,
								xmlns: 'http://www.w3.org/2000/svg',
							}),
							c && r.createElement('title', null, c),
							e.children,
						)
					);
				};
				return void 0 !== s ? r.createElement(s.Consumer, null, (e) => t(e)) : t(l);
			}
		},
		4434: (e, t, n) => {
			'use strict';
			function r(e, t, n, r) {
				return !1;
			}
			(Object.defineProperty(t, '__esModule', { value: !0 }),
				Object.defineProperty(t, 'getDomainLocale', {
					enumerable: !0,
					get: function () {
						return r;
					},
				}),
				n(1092),
				('function' == typeof t.default || ('object' == typeof t.default && null !== t.default)) &&
					void 0 === t.default.__esModule &&
					(Object.defineProperty(t.default, '__esModule', { value: !0 }),
					Object.assign(t.default, t),
					(e.exports = t.default)));
		},
		5446: (e, t) => {
			'use strict';
			(Object.defineProperty(t, '__esModule', { value: !0 }),
				Object.defineProperty(t, 'errorOnce', {
					enumerable: !0,
					get: function () {
						return n;
					},
				}));
			let n = (e) => {};
		},
		6492: (e, t, n) => {
			'use strict';
			(Object.defineProperty(t, '__esModule', { value: !0 }),
				Object.defineProperty(t, 'useMergedRef', {
					enumerable: !0,
					get: function () {
						return l;
					},
				}));
			let r = n(148);
			function l(e, t) {
				let n = (0, r.useRef)(null),
					l = (0, r.useRef)(null);
				return (0, r.useCallback)(
					(r) => {
						if (null === r) {
							let e = n.current;
							e && ((n.current = null), e());
							let t = l.current;
							t && ((l.current = null), t());
						} else (e && (n.current = s(e, r)), t && (l.current = s(t, r)));
					},
					[e, t],
				);
			}
			function s(e, t) {
				if ('function' != typeof e)
					return (
						(e.current = t),
						() => {
							e.current = null;
						}
					);
				{
					let n = e(t);
					return 'function' == typeof n ? n : () => e(null);
				}
			}
			('function' == typeof t.default || ('object' == typeof t.default && null !== t.default)) &&
				void 0 === t.default.__esModule &&
				(Object.defineProperty(t.default, '__esModule', { value: !0 }),
				Object.assign(t.default, t),
				(e.exports = t.default));
		},
		7233: (e, t, n) => {
			'use strict';
			(Object.defineProperty(t, '__esModule', { value: !0 }),
				Object.defineProperty(t, 'useIntersection', {
					enumerable: !0,
					get: function () {
						return c;
					},
				}));
			let r = n(148),
				l = n(9780),
				s = 'function' == typeof IntersectionObserver,
				i = new Map(),
				a = [];
			function c(e) {
				let { rootRef: t, rootMargin: n, disabled: c } = e,
					o = c || !s,
					[u, d] = (0, r.useState)(!1),
					f = (0, r.useRef)(null),
					h = (0, r.useCallback)((e) => {
						f.current = e;
					}, []);
				return (
					(0, r.useEffect)(() => {
						if (s) {
							if (o || u) return;
							let e = f.current;
							if (e && e.tagName)
								return (function (e, t, n) {
									let {
										id: r,
										observer: l,
										elements: s,
									} = (function (e) {
										let t,
											n = { root: e.root || null, margin: e.rootMargin || '' },
											r = a.find((e) => e.root === n.root && e.margin === n.margin);
										if (r && (t = i.get(r))) return t;
										let l = new Map();
										return (
											(t = {
												id: n,
												observer: new IntersectionObserver((e) => {
													e.forEach((e) => {
														let t = l.get(e.target),
															n = e.isIntersecting || e.intersectionRatio > 0;
														t && n && t(n);
													});
												}, e),
												elements: l,
											}),
											a.push(n),
											i.set(n, t),
											t
										);
									})(n);
									return (
										s.set(e, t),
										l.observe(e),
										function () {
											if ((s.delete(e), l.unobserve(e), 0 === s.size)) {
												(l.disconnect(), i.delete(r));
												let e = a.findIndex((e) => e.root === r.root && e.margin === r.margin);
												e > -1 && a.splice(e, 1);
											}
										}
									);
								})(e, (e) => e && d(e), { root: null == t ? void 0 : t.current, rootMargin: n });
						} else if (!u) {
							let e = (0, l.requestIdleCallback)(() => d(!0));
							return () => (0, l.cancelIdleCallback)(e);
						}
					}, [o, n, t, u, f.current]),
					[
						h,
						u,
						(0, r.useCallback)(() => {
							d(!1);
						}, []),
					]
				);
			}
			('function' == typeof t.default || ('object' == typeof t.default && null !== t.default)) &&
				void 0 === t.default.__esModule &&
				(Object.defineProperty(t.default, '__esModule', { value: !0 }),
				Object.assign(t.default, t),
				(e.exports = t.default));
		},
		7864: (e, t, n) => {
			e.exports = n(386);
		},
		8030: (e, t, n) => {
			'use strict';
			(n.r(t), n.d(t, { default: () => y }));
			var r = n(5640),
				l = n(3282);
			let s = [
					{
						question: 'Open Banking API l\xe0 g\xec?',
						answer:
							'Open Banking API cho ph\xe9p b\xean thứ ba truy cập th\xf4ng tin t\xe0i ch\xednh một c\xe1ch an to\xe0n v\xe0 chuẩn h\xf3a với sự đồng \xfd của người d\xf9ng.',
					},
					{
						question: 'Open Banking đ\xe3 c\xf3 mặt tại Việt Nam chưa?',
						answer:
							'Đ\xe3 c\xf3. Việt Nam đang \xe1p dụng ti\xeau chuẩn Open Banking để hiện đại h\xf3a hệ sinh th\xe1i t\xe0i ch\xednh.',
					},
					{
						question: 'Ai c\xf3 thể sử dụng API n\xe0y?',
						answer:
							'C\xe1c ng\xe2n h\xe0ng được cấp ph\xe9p, c\xf4ng ty fintech v\xe0 c\xe1c b\xean thứ ba được ủy quyền đều c\xf3 thể t\xedch hợp v\xe0 sử dụng API.',
					},
				],
				i = () =>
					(0, r.jsxs)('section', {
						id: 'faqs',
						className: 'mx-auto max-w-4xl bg-white px-4 py-16',
						children: [
							(0, r.jsx)('h3', {
								className: 'mb-12 text-center text-3xl font-semibold text-green-700',
								children: 'C\xe2u hỏi thường gặp',
							}),
							(0, r.jsx)('div', {
								className: 'space-y-8',
								children: s.map((e, t) =>
									(0, r.jsx)(
										'div',
										{
											className: 'border-b pb-4',
											children: (0, r.jsxs)('div', {
												className: 'flex items-start gap-3',
												children: [
													(0, r.jsx)(l.gZZ, { className: 'mt-1 text-green-600' }),
													(0, r.jsxs)('div', {
														children: [
															(0, r.jsx)('h4', { className: 'mb-1 text-lg font-semibold', children: e.question }),
															(0, r.jsx)('p', { children: e.answer }),
														],
													}),
												],
											}),
										},
										t,
									),
								),
							}),
						],
					}),
				a = [
					'Giao thức API ti\xeau chuẩn v\xe0 bảo mật',
					'Truy cập dữ liệu t\xe0i ch\xednh theo thời gian thực',
					'Cải thiện trải nghiệm kh\xe1ch h\xe0ng',
					'Hỗ trợ đổi mới trong lĩnh vực fintech',
				],
				c = () =>
					(0, r.jsxs)('section', {
						id: 'features',
						className: 'px-4 py-16 text-center',
						children: [
							(0, r.jsx)('h3', { className: 'mb-10 text-3xl font-semibold text-green-700', children: 'Key Features' }),
							(0, r.jsx)('div', {
								className: 'mx-auto grid max-w-6xl gap-8 md:grid-cols-2 lg:grid-cols-4',
								children: a.map((e, t) =>
									(0, r.jsxs)(
										'div',
										{
											className: 'flex items-center justify-center gap-3',
											children: [
												(0, r.jsx)(l.A7C, { className: 'text-xl text-green-600' }),
												(0, r.jsx)('span', { className: 'text-lg', children: e }),
											],
										},
										t,
									),
								),
							}),
						],
					}),
				o = () =>
					(0, r.jsxs)('header', {
						className: 'px-4 py-20 text-center',
						children: [
							(0, r.jsx)('h2', {
								className: 'mb-6 text-4xl font-bold text-green-600 md:text-5xl',
								children: 'Kh\xe1m ph\xe1 tiềm năng đổi mới t\xe0i ch\xednh tại Việt Nam',
							}),
							(0, r.jsx)('p', {
								className: 'mx-auto mb-8 max-w-xl text-lg text-green-700',
								children:
									'Tăng cường ứng dụng của bạn với khả năng truy cập dịch vụ ng\xe2n h\xe0ng an to\xe0n v\xe0 thời gian thực th\xf4ng qua Open Banking API tại Việt Nam.',
							}),
							(0, r.jsx)('button', {
								className: 'rounded-full bg-green-600 px-6 py-3 text-lg text-white hover:bg-green-700',
								children: 'Kh\xe1m ph\xe1 API',
							}),
						],
					}),
				u = ['Vietcombank', 'BIDV', 'Techcombank', 'VPBank', 'TPBank', 'MB Bank', 'ACB', 'Sacombank'],
				d = () =>
					(0, r.jsxs)('section', {
						className: 'py-16',
						children: [
							(0, r.jsx)('div', {
								className: 'mb-6 text-center text-3xl font-semibold text-green-700',
								children: 'Connected with',
							}),
							(0, r.jsx)('div', {
								className: 'flex flex-wrap justify-center gap-8 text-2xl',
								children: u.map((e, t) => (0, r.jsx)('span', { children: e }, t)),
							}),
						],
					}),
				f = () =>
					(0, r.jsx)('footer', {
						className: 'border-t bg-white text-sm',
						children: (0, r.jsxs)('div', {
							className: 'mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-4 py-8 md:flex-row',
							children: [
								(0, r.jsxs)('p', {
									children: ['\xa9 ', new Date().getFullYear(), ' OpenBankingVN. Bản quyền đ\xe3 được bảo hộ.'],
								}),
								(0, r.jsxs)('div', {
									className: 'grid grid-cols-2 gap-x-6 gap-y-1 text-center md:text-left',
									children: [
										(0, r.jsx)('a', {
											href: '/privacy',
											className: 'hover:underline',
											children: 'Ch\xednh s\xe1ch bảo mật',
										}),
										(0, r.jsx)('a', { href: '/docs', className: 'hover:underline', children: 'T\xe0i liệu' }),
										(0, r.jsx)('a', { href: '/terms', className: 'hover:underline', children: 'Điều khoản sử dụng' }),
										(0, r.jsx)('a', {
											href: '/developer',
											className: 'hover:underline',
											children: 'Nh\xe0 ph\xe1t triển',
										}),
									],
								}),
							],
						}),
					});
			var h = n(7864),
				p = n.n(h);
			let x = () =>
					(0, r.jsx)('nav', {
						className: 'bg-white shadow-md',
						children: (0, r.jsxs)('div', {
							className: 'container mx-auto flex items-center justify-between px-4 py-4',
							children: [
								(0, r.jsxs)('h1', {
									className: 'flex items-center gap-2 text-2xl font-bold text-green-600',
									children: [(0, r.jsx)(l.O2x, {}), ' OpenBankingVN'],
								}),
								(0, r.jsxs)('div', {
									className: 'space-x-6',
									children: [
										(0, r.jsx)('a', { href: '#features', className: 'hover:text-green-600', children: 'Features' }),
										(0, r.jsx)('a', { href: '#faqs', className: 'hover:text-green-600', children: 'FAQs' }),
										(0, r.jsx)(p(), {
											href: '#',
											className: 'rounded-md bg-green-600 px-4 py-2 text-white transition hover:bg-green-700',
											children: 'Get Started',
										}),
									],
								}),
							],
						}),
					}),
				m = [
					{
						name: 'G\xf3i Cơ Bản',
						price: 'Miễn ph\xed',
						features: ['Truy cập API cơ bản', 'Tối đa 1000 y\xeau cầu mỗi th\xe1ng'],
						button: 'Bắt đầu miễn ph\xed',
					},
					{
						name: 'G\xf3i Chuy\xean Nghiệp',
						price: '$49/th\xe1ng',
						features: ['Giới hạn cao hơn', 'Hỗ trợ ưu ti\xean'],
						button: 'Đăng k\xfd Pro',
					},
					{
						name: 'G\xf3i Doanh Nghiệp',
						price: 'Theo y\xeau cầu',
						features: ['Kh\xf4ng giới hạn sử dụng', 'Hỗ trợ chuy\xean biệt'],
						button: 'Li\xean hệ tư vấn',
					},
				],
				g = () =>
					(0, r.jsxs)('section', {
						className: 'bg-white px-4 py-16 text-center',
						children: [
							(0, r.jsx)('h3', { className: 'mb-10 text-3xl font-semibold text-green-600', children: 'Pricing' }),
							(0, r.jsx)('div', {
								className: 'mx-auto grid max-w-6xl gap-8 md:grid-cols-3',
								children: m.map((e, t) =>
									(0, r.jsxs)(
										'div',
										{
											className: 'rounded-lg border p-6',
											children: [
												(0, r.jsx)('h4', { className: 'mb-2 text-xl font-bold', children: e.name }),
												(0, r.jsx)('p', { className: 'mb-4 font-semibold text-green-600', children: e.price }),
												e.features.map((e, t) => (0, r.jsx)('p', { className: 'mb-2', children: e }, t)),
												(0, r.jsx)('button', {
													className: 'mt-4 rounded-full bg-green-600 px-4 py-2 text-white hover:bg-green-700',
													children: e.button,
												}),
											],
										},
										t,
									),
								),
							}),
						],
					}),
				b = () =>
					(0, r.jsxs)('section', {
						className: 'bg-white px-4 py-16 text-center',
						children: [
							(0, r.jsx)('h3', {
								className: 'mb-6 text-3xl font-semibold text-green-600',
								children: 'Sẵn s\xe0ng kiến tạo tương lai t\xe0i ch\xednh?',
							}),
							(0, r.jsx)('p', {
								className: 'mx-auto mb-6 max-w-xl',
								children: 'Bắt đầu t\xedch hợp OpenBankingVN ngay h\xf4m nay để tăng tốc đổi mới sản phẩm của bạn.',
							}),
							(0, r.jsx)('button', {
								className: 'rounded-full bg-green-600 px-6 py-3 text-lg text-white hover:bg-green-700',
								children: 'Bắt đầu',
							}),
						],
					}),
				j = () =>
					(0, r.jsxs)('section', {
						className: 'bg-white px-4 py-16 text-center',
						children: [
							(0, r.jsx)('h3', { className: 'mb-10 text-3xl font-semibold text-green-600', children: 'How It Works' }),
							(0, r.jsxs)('div', {
								className: 'mx-auto grid max-w-6xl gap-8 md:grid-cols-3',
								children: [
									(0, r.jsxs)('div', {
										children: [
											(0, r.jsx)('h4', { className: 'mb-2 text-xl font-bold text-green-600', children: '1. Register' }),
											(0, r.jsx)('p', { children: 'Create a developer account and access the dashboard.' }),
										],
									}),
									(0, r.jsxs)('div', {
										children: [
											(0, r.jsx)('h4', { className: 'mb-2 text-xl font-bold text-green-600', children: '2. Connect' }),
											(0, r.jsx)('p', { children: 'Integrate with our secure APIs using your credentials.' }),
										],
									}),
									(0, r.jsxs)('div', {
										children: [
											(0, r.jsx)('h4', { className: 'mb-2 text-xl font-bold text-green-600', children: '3. Launch' }),
											(0, r.jsx)('p', { children: 'Deploy innovative fintech solutions for your users.' }),
										],
									}),
								],
							}),
						],
					}),
				y = () =>
					(0, r.jsxs)(r.Fragment, {
						children: [
							(0, r.jsx)(x, {}),
							(0, r.jsx)(o, {}),
							(0, r.jsx)(c, {}),
							(0, r.jsx)(d, {}),
							(0, r.jsx)(j, {}),
							(0, r.jsx)(g, {}),
							(0, r.jsx)(b, {}),
							(0, r.jsx)(i, {}),
							(0, r.jsx)(f, {}),
						],
					});
		},
		8898: (e, t, n) => {
			(window.__NEXT_P = window.__NEXT_P || []).push([
				'/',
				function () {
					return n(8030);
				},
			]);
		},
	},
	(e) => {
		var t = (t) => e((e.s = t));
		(e.O(0, [505, 636, 593, 792], () => t(8898)), (_N_E = e.O()));
	},
]);
