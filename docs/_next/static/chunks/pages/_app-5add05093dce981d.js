(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
	[636],
	{
		2147: () => {},
		4626: (e, n, r) => {
			e.exports = r(5274);
		},
		6404: (e, n, r) => {
			'use strict';
			(r.r(n), r.d(n, { default: () => _ }));
			var s = r(5640);
			r(2147);
			var i = r(4626),
				t = r.n(i);
			let _ = (e) => {
				let { Component: n, pageProps: r } = e;
				return (0, s.jsxs)(s.Fragment, {
					children: [
						(0, s.jsx)(t(), { children: (0, s.jsx)('title', { children: 'Open Banking in Vietnam' }) }),
						(0, s.jsx)('div', { children: (0, s.jsx)(n, { ...r }) }),
					],
				});
			};
		},
		8462: (e, n, r) => {
			(window.__NEXT_P = window.__NEXT_P || []).push([
				'/_app',
				function () {
					return r(6404);
				},
			]);
		},
	},
	(e) => {
		var n = (n) => e((e.s = n));
		(e.O(0, [593, 792], () => (n(8462), n(8231))), (_N_E = e.O()));
	},
]);
