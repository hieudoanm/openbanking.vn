(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
	[332],
	{
		1307: (e, t, n) => {
			'use strict';
			n.d(t, { k5: () => o });
			var s = n(2223),
				r = {
					color: void 0,
					size: void 0,
					className: void 0,
					style: void 0,
					attr: void 0,
				},
				i = s.createContext && s.createContext(r),
				a = ['attr', 'size', 'title'];
			function l() {
				return (l = Object.assign
					? Object.assign.bind()
					: function (e) {
							for (var t = 1; t < arguments.length; t++) {
								var n = arguments[t];
								for (var s in n)
									Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s]);
							}
							return e;
						}).apply(this, arguments);
			}
			function c(e, t) {
				var n = Object.keys(e);
				if (Object.getOwnPropertySymbols) {
					var s = Object.getOwnPropertySymbols(e);
					(t &&
						(s = s.filter(function (t) {
							return Object.getOwnPropertyDescriptor(e, t).enumerable;
						})),
						n.push.apply(n, s));
				}
				return n;
			}
			function h(e) {
				for (var t = 1; t < arguments.length; t++) {
					var n = null != arguments[t] ? arguments[t] : {};
					t % 2
						? c(Object(n), !0).forEach(function (t) {
								var s, r, i;
								((s = e),
									(r = t),
									(i = n[t]),
									(r = (function (e) {
										var t = (function (e, t) {
											if ('object' != typeof e || !e) return e;
											var n = e[Symbol.toPrimitive];
											if (void 0 !== n) {
												var s = n.call(e, t || 'default');
												if ('object' != typeof s) return s;
												throw TypeError(
													'@@toPrimitive must return a primitive value.',
												);
											}
											return ('string' === t ? String : Number)(e);
										})(e, 'string');
										return 'symbol' == typeof t ? t : t + '';
									})(r)) in s
										? Object.defineProperty(s, r, {
												value: i,
												enumerable: !0,
												configurable: !0,
												writable: !0,
											})
										: (s[r] = i));
							})
						: Object.getOwnPropertyDescriptors
							? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
							: c(Object(n)).forEach(function (t) {
									Object.defineProperty(
										e,
										t,
										Object.getOwnPropertyDescriptor(n, t),
									);
								});
				}
				return e;
			}
			function o(e) {
				return (t) =>
					s.createElement(
						x,
						l({ attr: h({}, e.attr) }, t),
						(function e(t) {
							return (
								t &&
								t.map((t, n) =>
									s.createElement(t.tag, h({ key: n }, t.attr), e(t.child)),
								)
							);
						})(e.child),
					);
			}
			function x(e) {
				var t = (t) => {
					var n,
						{ attr: r, size: i, title: c } = e,
						o = (function (e, t) {
							if (null == e) return {};
							var n,
								s,
								r = (function (e, t) {
									if (null == e) return {};
									var n = {};
									for (var s in e)
										if (Object.prototype.hasOwnProperty.call(e, s)) {
											if (t.indexOf(s) >= 0) continue;
											n[s] = e[s];
										}
									return n;
								})(e, t);
							if (Object.getOwnPropertySymbols) {
								var i = Object.getOwnPropertySymbols(e);
								for (s = 0; s < i.length; s++)
									((n = i[s]),
										!(t.indexOf(n) >= 0) &&
											Object.prototype.propertyIsEnumerable.call(e, n) &&
											(r[n] = e[n]));
							}
							return r;
						})(e, a),
						x = i || t.size || '1em';
					return (
						t.className && (n = t.className),
						e.className && (n = (n ? n + ' ' : '') + e.className),
						s.createElement(
							'svg',
							l(
								{
									stroke: 'currentColor',
									fill: 'currentColor',
									strokeWidth: '0',
								},
								t.attr,
								r,
								o,
								{
									className: n,
									style: h(h({ color: e.color || t.color }, t.style), e.style),
									height: x,
									width: x,
									xmlns: 'http://www.w3.org/2000/svg',
								},
							),
							c && s.createElement('title', null, c),
							e.children,
						)
					);
				};
				return void 0 !== i
					? s.createElement(i.Consumer, null, (e) => t(e))
					: t(r);
			}
		},
		2780: (e, t, n) => {
			(window.__NEXT_P = window.__NEXT_P || []).push([
				'/',
				function () {
					return n(7734);
				},
			]);
		},
		7734: (e, t, n) => {
			'use strict';
			(n.r(t), n.d(t, { default: () => v }));
			var s = n(1503),
				r = n(4486);
			let i = [
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
				a = () =>
					(0, s.jsxs)('section', {
						id: 'faqs',
						className: 'mx-auto max-w-4xl bg-white px-4 py-16',
						children: [
							(0, s.jsx)('h3', {
								className:
									'mb-12 text-center text-3xl font-semibold text-blue-700',
								children: 'C\xe2u hỏi thường gặp',
							}),
							(0, s.jsx)('div', {
								className: 'space-y-8',
								children: i.map((e, t) =>
									(0, s.jsx)(
										'div',
										{
											className: 'border-b pb-4',
											children: (0, s.jsxs)('div', {
												className: 'flex items-start gap-3',
												children: [
													(0, s.jsx)(r.gZZ, {
														className: 'mt-1 text-blue-600',
													}),
													(0, s.jsxs)('div', {
														children: [
															(0, s.jsx)('h4', {
																className: 'mb-1 text-lg font-semibold',
																children: e.question,
															}),
															(0, s.jsx)('p', { children: e.answer }),
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
				l = [
					'Giao thức API ti\xeau chuẩn v\xe0 bảo mật',
					'Truy cập dữ liệu t\xe0i ch\xednh theo thời gian thực',
					'Cải thiện trải nghiệm kh\xe1ch h\xe0ng',
					'Hỗ trợ đổi mới trong lĩnh vực fintech',
				],
				c = () =>
					(0, s.jsxs)('section', {
						id: 'features',
						className: 'px-4 py-16 text-center',
						children: [
							(0, s.jsx)('h3', {
								className: 'mb-10 text-3xl font-semibold text-blue-700',
								children: 'Key Features',
							}),
							(0, s.jsx)('div', {
								className:
									'mx-auto grid max-w-6xl gap-8 md:grid-cols-2 lg:grid-cols-4',
								children: l.map((e, t) =>
									(0, s.jsxs)(
										'div',
										{
											className: 'flex items-center justify-center gap-3',
											children: [
												(0, s.jsx)(r.A7C, {
													className: 'text-xl text-blue-600',
												}),
												(0, s.jsx)('span', {
													className: 'text-lg',
													children: e,
												}),
											],
										},
										t,
									),
								),
							}),
						],
					}),
				h = () =>
					(0, s.jsxs)('header', {
						className: 'px-4 py-20 text-center',
						children: [
							(0, s.jsx)('h2', {
								className: 'mb-6 text-4xl font-bold text-blue-600 md:text-5xl',
								children:
									'Kh\xe1m ph\xe1 tiềm năng đổi mới t\xe0i ch\xednh tại Việt Nam',
							}),
							(0, s.jsx)('p', {
								className: 'mx-auto mb-8 max-w-xl text-lg text-blue-700',
								children:
									'Tăng cường ứng dụng của bạn với khả năng truy cập dịch vụ ng\xe2n h\xe0ng an to\xe0n v\xe0 thời gian thực th\xf4ng qua Open Banking API tại Việt Nam.',
							}),
							(0, s.jsx)('button', {
								className:
									'rounded-full bg-blue-600 px-6 py-3 text-lg text-white hover:bg-blue-700',
								children: 'Kh\xe1m ph\xe1 API',
							}),
						],
					}),
				o = [
					'Vietcombank',
					'BIDV',
					'Techcombank',
					'VPBank',
					'TPBank',
					'MB Bank',
					'ACB',
					'Sacombank',
				],
				x = () =>
					(0, s.jsxs)('section', {
						className: 'py-16',
						children: [
							(0, s.jsx)('div', {
								className:
									'mb-6 text-center text-3xl font-semibold text-blue-700',
								children: 'Connected with',
							}),
							(0, s.jsx)('div', {
								className: 'flex flex-wrap justify-center gap-8 text-2xl',
								children: o.map((e, t) =>
									(0, s.jsx)('span', { children: e }, t),
								),
							}),
						],
					}),
				d = () =>
					(0, s.jsx)('footer', {
						className: 'border-t bg-white text-sm',
						children: (0, s.jsxs)('div', {
							className:
								'mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-4 py-8 md:flex-row',
							children: [
								(0, s.jsxs)('p', {
									children: [
										'\xa9 ',
										new Date().getFullYear(),
										' OpenBankingVN. Bản quyền đ\xe3 được bảo hộ.',
									],
								}),
								(0, s.jsxs)('div', {
									className:
										'grid grid-cols-2 gap-x-6 gap-y-1 text-center md:text-left',
									children: [
										(0, s.jsx)('a', {
											href: '/privacy',
											className: 'hover:underline',
											children: 'Ch\xednh s\xe1ch bảo mật',
										}),
										(0, s.jsx)('a', {
											href: '/docs',
											className: 'hover:underline',
											children: 'T\xe0i liệu',
										}),
										(0, s.jsx)('a', {
											href: '/terms',
											className: 'hover:underline',
											children: 'Điều khoản sử dụng',
										}),
										(0, s.jsx)('a', {
											href: '/developer',
											className: 'hover:underline',
											children: 'Nh\xe0 ph\xe1t triển',
										}),
									],
								}),
							],
						}),
					});
			var m = n(5570),
				u = n.n(m);
			let b = () =>
					(0, s.jsx)('nav', {
						className: 'bg-white shadow-md',
						children: (0, s.jsxs)('div', {
							className:
								'container mx-auto flex items-center justify-between px-4 py-4',
							children: [
								(0, s.jsxs)('h1', {
									className:
										'flex items-center gap-2 text-2xl font-bold text-blue-600',
									children: [(0, s.jsx)(r.O2x, {}), ' OpenBankingVN'],
								}),
								(0, s.jsxs)('div', {
									className: 'space-x-6',
									children: [
										(0, s.jsx)('a', {
											href: '#features',
											className: 'hover:text-blue-600',
											children: 'Features',
										}),
										(0, s.jsx)('a', {
											href: '#faqs',
											className: 'hover:text-blue-600',
											children: 'FAQs',
										}),
										(0, s.jsx)(u(), {
											href: '#',
											className:
												'rounded-md bg-blue-600 px-4 py-2 text-white transition hover:bg-blue-700',
											children: 'Get Started',
										}),
									],
								}),
							],
						}),
					}),
				p = [
					{
						name: 'G\xf3i Cơ Bản',
						price: 'Miễn ph\xed',
						features: [
							'Truy cập API cơ bản',
							'Tối đa 1000 y\xeau cầu mỗi th\xe1ng',
						],
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
					(0, s.jsxs)('section', {
						className: 'bg-white px-4 py-16 text-center',
						children: [
							(0, s.jsx)('h3', {
								className: 'mb-10 text-3xl font-semibold text-blue-600',
								children: 'Pricing',
							}),
							(0, s.jsx)('div', {
								className: 'mx-auto grid max-w-6xl gap-8 md:grid-cols-3',
								children: p.map((e, t) =>
									(0, s.jsxs)(
										'div',
										{
											className: 'rounded-lg border p-6',
											children: [
												(0, s.jsx)('h4', {
													className: 'mb-2 text-xl font-bold',
													children: e.name,
												}),
												(0, s.jsx)('p', {
													className: 'mb-4 font-semibold text-blue-600',
													children: e.price,
												}),
												e.features.map((e, t) =>
													(0, s.jsx)(
														'p',
														{ className: 'mb-2', children: e },
														t,
													),
												),
												(0, s.jsx)('button', {
													className:
														'mt-4 rounded-full bg-blue-600 px-4 py-2 text-white hover:bg-blue-700',
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
				j = () =>
					(0, s.jsxs)('section', {
						className: 'bg-white px-4 py-16 text-center',
						children: [
							(0, s.jsx)('h3', {
								className: 'mb-6 text-3xl font-semibold text-blue-600',
								children: 'Sẵn s\xe0ng kiến tạo tương lai t\xe0i ch\xednh?',
							}),
							(0, s.jsx)('p', {
								className: 'mx-auto mb-6 max-w-xl',
								children:
									'Bắt đầu t\xedch hợp OpenBankingVN ngay h\xf4m nay để tăng tốc đổi mới sản phẩm của bạn.',
							}),
							(0, s.jsx)('button', {
								className:
									'rounded-full bg-blue-600 px-6 py-3 text-lg text-white hover:bg-blue-700',
								children: 'Bắt đầu',
							}),
						],
					}),
				f = () =>
					(0, s.jsxs)('section', {
						className: 'bg-white px-4 py-16 text-center',
						children: [
							(0, s.jsx)('h3', {
								className: 'mb-10 text-3xl font-semibold text-blue-600',
								children: 'How It Works',
							}),
							(0, s.jsxs)('div', {
								className: 'mx-auto grid max-w-6xl gap-8 md:grid-cols-3',
								children: [
									(0, s.jsxs)('div', {
										children: [
											(0, s.jsx)('h4', {
												className: 'mb-2 text-xl font-bold text-blue-600',
												children: '1. Register',
											}),
											(0, s.jsx)('p', {
												children:
													'Create a developer account and access the dashboard.',
											}),
										],
									}),
									(0, s.jsxs)('div', {
										children: [
											(0, s.jsx)('h4', {
												className: 'mb-2 text-xl font-bold text-blue-600',
												children: '2. Connect',
											}),
											(0, s.jsx)('p', {
												children:
													'Integrate with our secure APIs using your credentials.',
											}),
										],
									}),
									(0, s.jsxs)('div', {
										children: [
											(0, s.jsx)('h4', {
												className: 'mb-2 text-xl font-bold text-blue-600',
												children: '3. Launch',
											}),
											(0, s.jsx)('p', {
												children:
													'Deploy innovative fintech solutions for your users.',
											}),
										],
									}),
								],
							}),
						],
					}),
				v = () =>
					(0, s.jsxs)(s.Fragment, {
						children: [
							(0, s.jsx)(b, {}),
							(0, s.jsx)(h, {}),
							(0, s.jsx)(c, {}),
							(0, s.jsx)(x, {}),
							(0, s.jsx)(f, {}),
							(0, s.jsx)(g, {}),
							(0, s.jsx)(j, {}),
							(0, s.jsx)(a, {}),
							(0, s.jsx)(d, {}),
						],
					});
		},
	},
	(e) => {
		(e.O(0, [291, 570, 636, 593, 792], () => e((e.s = 2780))), (_N_E = e.O()));
	},
]);
