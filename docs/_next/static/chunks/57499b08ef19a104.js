(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([
	'object' == typeof document ? document.currentScript : void 0,
	7856,
	(e) => {
		'use strict';
		var t = e.i(4601),
			n = e.i(6960),
			s = {
				color: void 0,
				size: void 0,
				className: void 0,
				style: void 0,
				attr: void 0,
			},
			r = n.default.createContext && n.default.createContext(s),
			i = ['attr', 'size', 'title'];
		function a() {
			return (a = Object.assign.bind()).apply(this, arguments);
		}
		function l(e, t) {
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
		function c(e) {
			for (var t = 1; t < arguments.length; t++) {
				var n = null != arguments[t] ? arguments[t] : {};
				t % 2
					? l(Object(n), !0).forEach(function (t) {
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
						: l(Object(n)).forEach(function (t) {
								Object.defineProperty(
									e,
									t,
									Object.getOwnPropertyDescriptor(n, t),
								);
							});
			}
			return e;
		}
		function h(e) {
			return (t) =>
				n.default.createElement(
					o,
					a({ attr: c({}, e.attr) }, t),
					(function e(t) {
						return (
							t &&
							t.map((t, s) =>
								n.default.createElement(
									t.tag,
									c({ key: s }, t.attr),
									e(t.child),
								),
							)
						);
					})(e.child),
				);
		}
		function o(e) {
			var t = (t) => {
				var s,
					{ attr: r, size: l, title: h } = e,
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
					})(e, i),
					d = l || t.size || '1em';
				return (
					t.className && (s = t.className),
					e.className && (s = (s ? s + ' ' : '') + e.className),
					n.default.createElement(
						'svg',
						a(
							{
								stroke: 'currentColor',
								fill: 'currentColor',
								strokeWidth: '0',
							},
							t.attr,
							r,
							o,
							{
								className: s,
								style: c(c({ color: e.color || t.color }, t.style), e.style),
								height: d,
								width: d,
								xmlns: 'http://www.w3.org/2000/svg',
							},
						),
						h && n.default.createElement('title', null, h),
						e.children,
					)
				);
			};
			return void 0 !== r
				? n.default.createElement(r.Consumer, null, (e) => t(e))
				: t(s);
		}
		function d(e) {
			return h({
				tag: 'svg',
				attr: { viewBox: '0 0 512 512' },
				child: [
					{
						tag: 'path',
						attr: {
							d: 'M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z',
						},
						child: [],
					},
				],
			})(e);
		}
		function x(e) {
			return h({
				tag: 'svg',
				attr: { viewBox: '0 0 384 512' },
				child: [
					{
						tag: 'path',
						attr: {
							d: 'M320,32a32,32,0,0,0-64,0v96h64Zm48,128H16A16,16,0,0,0,0,176v32a16,16,0,0,0,16,16H32v32A160.07,160.07,0,0,0,160,412.8V512h64V412.8A160.07,160.07,0,0,0,352,256V224h16a16,16,0,0,0,16-16V176A16,16,0,0,0,368,160ZM128,32a32,32,0,0,0-64,0v96h64Z',
						},
						child: [],
					},
				],
			})(e);
		}
		function u(e) {
			return h({
				tag: 'svg',
				attr: { viewBox: '0 0 512 512' },
				child: [
					{
						tag: 'path',
						attr: {
							d: 'M504 256c0 136.997-111.043 248-248 248S8 392.997 8 256C8 119.083 119.043 8 256 8s248 111.083 248 248zM262.655 90c-54.497 0-89.255 22.957-116.549 63.758-3.536 5.286-2.353 12.415 2.715 16.258l34.699 26.31c5.205 3.947 12.621 3.008 16.665-2.122 17.864-22.658 30.113-35.797 57.303-35.797 20.429 0 45.698 13.148 45.698 32.958 0 14.976-12.363 22.667-32.534 33.976C247.128 238.528 216 254.941 216 296v4c0 6.627 5.373 12 12 12h56c6.627 0 12-5.373 12-12v-1.333c0-28.462 83.186-29.647 83.186-106.667 0-58.002-60.165-102-116.531-102zM256 338c-25.365 0-46 20.635-46 46 0 25.364 20.635 46 46 46s46-20.636 46-46c0-25.365-20.635-46-46-46z',
						},
						child: [],
					},
				],
			})(e);
		}
		let m = [
				{
					question: 'Open Banking API là gì?',
					answer:
						'Open Banking API cho phép bên thứ ba truy cập thông tin tài chính một cách an toàn và chuẩn hóa với sự đồng ý của người dùng.',
				},
				{
					question: 'Open Banking đã có mặt tại Việt Nam chưa?',
					answer:
						'Đã có. Việt Nam đang áp dụng tiêu chuẩn Open Banking để hiện đại hóa hệ sinh thái tài chính.',
				},
				{
					question: 'Ai có thể sử dụng API này?',
					answer:
						'Các ngân hàng được cấp phép, công ty fintech và các bên thứ ba được ủy quyền đều có thể tích hợp và sử dụng API.',
				},
			],
			p = () =>
				(0, t.jsxs)('section', {
					id: 'faqs',
					className: 'mx-auto max-w-4xl bg-white px-4 py-16',
					children: [
						(0, t.jsx)('h3', {
							className:
								'mb-12 text-center text-3xl font-semibold text-blue-700',
							children: 'Câu hỏi thường gặp',
						}),
						(0, t.jsx)('div', {
							className: 'space-y-8',
							children: m.map((e, n) =>
								(0, t.jsx)(
									'div',
									{
										className: 'border-b pb-4',
										children: (0, t.jsxs)('div', {
											className: 'flex items-start gap-3',
											children: [
												(0, t.jsx)(u, { className: 'mt-1 text-blue-600' }),
												(0, t.jsxs)('div', {
													children: [
														(0, t.jsx)('h4', {
															className: 'mb-1 text-lg font-semibold',
															children: e.question,
														}),
														(0, t.jsx)('p', { children: e.answer }),
													],
												}),
											],
										}),
									},
									n,
								),
							),
						}),
					],
				}),
			b = [
				'Giao thức API tiêu chuẩn và bảo mật',
				'Truy cập dữ liệu tài chính theo thời gian thực',
				'Cải thiện trải nghiệm khách hàng',
				'Hỗ trợ đổi mới trong lĩnh vực fintech',
			],
			g = () =>
				(0, t.jsxs)('section', {
					id: 'features',
					className: 'px-4 py-16 text-center',
					children: [
						(0, t.jsx)('h3', {
							className: 'mb-10 text-3xl font-semibold text-blue-700',
							children: 'Key Features',
						}),
						(0, t.jsx)('div', {
							className:
								'mx-auto grid max-w-6xl gap-8 md:grid-cols-2 lg:grid-cols-4',
							children: b.map((e, n) =>
								(0, t.jsxs)(
									'div',
									{
										className: 'flex items-center justify-center gap-3',
										children: [
											(0, t.jsx)(d, { className: 'text-xl text-blue-600' }),
											(0, t.jsx)('span', { className: 'text-lg', children: e }),
										],
									},
									n,
								),
							),
						}),
					],
				}),
			f = () =>
				(0, t.jsxs)('header', {
					className: 'px-4 py-20 text-center',
					children: [
						(0, t.jsx)('h2', {
							className: 'mb-6 text-4xl font-bold text-blue-600 md:text-5xl',
							children: 'Khám phá tiềm năng đổi mới tài chính tại Việt Nam',
						}),
						(0, t.jsx)('p', {
							className: 'mx-auto mb-8 max-w-xl text-lg text-blue-700',
							children:
								'Tăng cường ứng dụng của bạn với khả năng truy cập dịch vụ ngân hàng an toàn và thời gian thực thông qua Open Banking API tại Việt Nam.',
						}),
						(0, t.jsx)('button', {
							className:
								'rounded-full bg-blue-600 px-6 py-3 text-lg text-white hover:bg-blue-700',
							children: 'Khám phá API',
						}),
					],
				}),
			j = [
				'Vietcombank',
				'BIDV',
				'Techcombank',
				'VPBank',
				'TPBank',
				'MB Bank',
				'ACB',
				'Sacombank',
			],
			v = () =>
				(0, t.jsxs)('section', {
					className: 'py-16',
					children: [
						(0, t.jsx)('div', {
							className:
								'mb-6 text-center text-3xl font-semibold text-blue-700',
							children: 'Connected with',
						}),
						(0, t.jsx)('div', {
							className: 'flex flex-wrap justify-center gap-8 text-2xl',
							children: j.map((e, n) => (0, t.jsx)('span', { children: e }, n)),
						}),
					],
				}),
			y = () =>
				(0, t.jsx)('footer', {
					className: 'border-t bg-white text-sm',
					children: (0, t.jsxs)('div', {
						className:
							'mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-4 py-8 md:flex-row',
						children: [
							(0, t.jsxs)('p', {
								children: [
									'© ',
									new Date().getFullYear(),
									' OpenBankingVN. Bản quyền đã được bảo hộ.',
								],
							}),
							(0, t.jsxs)('div', {
								className:
									'grid grid-cols-2 gap-x-6 gap-y-1 text-center md:text-left',
								children: [
									(0, t.jsx)('a', {
										href: '/privacy',
										className: 'hover:underline',
										children: 'Chính sách bảo mật',
									}),
									(0, t.jsx)('a', {
										href: '/docs',
										className: 'hover:underline',
										children: 'Tài liệu',
									}),
									(0, t.jsx)('a', {
										href: '/terms',
										className: 'hover:underline',
										children: 'Điều khoản sử dụng',
									}),
									(0, t.jsx)('a', {
										href: '/developer',
										className: 'hover:underline',
										children: 'Nhà phát triển',
									}),
								],
							}),
						],
					}),
				});
		var N = e.i(4017);
		let w = () =>
				(0, t.jsx)('nav', {
					className: 'bg-white shadow-md',
					children: (0, t.jsxs)('div', {
						className:
							'container mx-auto flex items-center justify-between px-4 py-4',
						children: [
							(0, t.jsxs)('h1', {
								className:
									'flex items-center gap-2 text-2xl font-bold text-blue-600',
								children: [(0, t.jsx)(x, {}), ' OpenBankingVN'],
							}),
							(0, t.jsxs)('div', {
								className: 'space-x-6',
								children: [
									(0, t.jsx)('a', {
										href: '#features',
										className: 'hover:text-blue-600',
										children: 'Features',
									}),
									(0, t.jsx)('a', {
										href: '#faqs',
										className: 'hover:text-blue-600',
										children: 'FAQs',
									}),
									(0, t.jsx)(N.default, {
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
			O = [
				{
					name: 'Gói Cơ Bản',
					price: 'Miễn phí',
					features: ['Truy cập API cơ bản', 'Tối đa 1000 yêu cầu mỗi tháng'],
					button: 'Bắt đầu miễn phí',
				},
				{
					name: 'Gói Chuyên Nghiệp',
					price: '$49/tháng',
					features: ['Giới hạn cao hơn', 'Hỗ trợ ưu tiên'],
					button: 'Đăng ký Pro',
				},
				{
					name: 'Gói Doanh Nghiệp',
					price: 'Theo yêu cầu',
					features: ['Không giới hạn sử dụng', 'Hỗ trợ chuyên biệt'],
					button: 'Liên hệ tư vấn',
				},
			],
			P = () =>
				(0, t.jsxs)('section', {
					className: 'bg-white px-4 py-16 text-center',
					children: [
						(0, t.jsx)('h3', {
							className: 'mb-10 text-3xl font-semibold text-blue-600',
							children: 'Pricing',
						}),
						(0, t.jsx)('div', {
							className: 'mx-auto grid max-w-6xl gap-8 md:grid-cols-3',
							children: O.map((e, n) =>
								(0, t.jsxs)(
									'div',
									{
										className: 'rounded-lg border p-6',
										children: [
											(0, t.jsx)('h4', {
												className: 'mb-2 text-xl font-bold',
												children: e.name,
											}),
											(0, t.jsx)('p', {
												className: 'mb-4 font-semibold text-blue-600',
												children: e.price,
											}),
											e.features.map((e, n) =>
												(0, t.jsx)('p', { className: 'mb-2', children: e }, n),
											),
											(0, t.jsx)('button', {
												className:
													'mt-4 rounded-full bg-blue-600 px-4 py-2 text-white hover:bg-blue-700',
												children: e.button,
											}),
										],
									},
									n,
								),
							),
						}),
					],
				}),
			k = () =>
				(0, t.jsxs)('section', {
					className: 'bg-white px-4 py-16 text-center',
					children: [
						(0, t.jsx)('h3', {
							className: 'mb-6 text-3xl font-semibold text-blue-600',
							children: 'Sẵn sàng kiến tạo tương lai tài chính?',
						}),
						(0, t.jsx)('p', {
							className: 'mx-auto mb-6 max-w-xl',
							children:
								'Bắt đầu tích hợp OpenBankingVN ngay hôm nay để tăng tốc đổi mới sản phẩm của bạn.',
						}),
						(0, t.jsx)('button', {
							className:
								'rounded-full bg-blue-600 px-6 py-3 text-lg text-white hover:bg-blue-700',
							children: 'Bắt đầu',
						}),
					],
				}),
			B = () =>
				(0, t.jsxs)('section', {
					className: 'bg-white px-4 py-16 text-center',
					children: [
						(0, t.jsx)('h3', {
							className: 'mb-10 text-3xl font-semibold text-blue-600',
							children: 'How It Works',
						}),
						(0, t.jsxs)('div', {
							className: 'mx-auto grid max-w-6xl gap-8 md:grid-cols-3',
							children: [
								(0, t.jsxs)('div', {
									children: [
										(0, t.jsx)('h4', {
											className: 'mb-2 text-xl font-bold text-blue-600',
											children: '1. Register',
										}),
										(0, t.jsx)('p', {
											children:
												'Create a developer account and access the dashboard.',
										}),
									],
								}),
								(0, t.jsxs)('div', {
									children: [
										(0, t.jsx)('h4', {
											className: 'mb-2 text-xl font-bold text-blue-600',
											children: '2. Connect',
										}),
										(0, t.jsx)('p', {
											children:
												'Integrate with our secure APIs using your credentials.',
										}),
									],
								}),
								(0, t.jsxs)('div', {
									children: [
										(0, t.jsx)('h4', {
											className: 'mb-2 text-xl font-bold text-blue-600',
											children: '3. Launch',
										}),
										(0, t.jsx)('p', {
											children:
												'Deploy innovative fintech solutions for your users.',
										}),
									],
								}),
							],
						}),
					],
				});
		e.s(
			[
				'default',
				0,
				() =>
					(0, t.jsxs)(t.Fragment, {
						children: [
							(0, t.jsx)(w, {}),
							(0, t.jsx)(f, {}),
							(0, t.jsx)(g, {}),
							(0, t.jsx)(v, {}),
							(0, t.jsx)(B, {}),
							(0, t.jsx)(P, {}),
							(0, t.jsx)(k, {}),
							(0, t.jsx)(p, {}),
							(0, t.jsx)(y, {}),
						],
					}),
			],
			7856,
		);
	},
	5075,
	(e, t, n) => {
		((window.__NEXT_P = window.__NEXT_P || []).push(['/', () => e.r(7856)]),
			t.hot &&
				t.hot.dispose(function () {
					window.__NEXT_P.push(['/']);
				}));
	},
]);
