(() => {
	'use strict';
	var e = {},
		r = {};
	function t(n) {
		var o = r[n];
		if (void 0 !== o) return o.exports;
		var i = (r[n] = { exports: {} }),
			a = !0;
		try {
			(e[n](i, i.exports, t), (a = !1));
		} finally {
			a && delete r[n];
		}
		return i.exports;
	}
	((t.m = e),
		(() => {
			var e = [];
			t.O = (r, n, o, i) => {
				if (n) {
					i = i || 0;
					for (var a = e.length; a > 0 && e[a - 1][2] > i; a--) e[a] = e[a - 1];
					e[a] = [n, o, i];
					return;
				}
				for (var l = 1 / 0, a = 0; a < e.length; a++) {
					for (var [n, o, i] = e[a], u = !0, f = 0; f < n.length; f++)
						(!1 & i || l >= i) && Object.keys(t.O).every((e) => t.O[e](n[f]))
							? n.splice(f--, 1)
							: ((u = !1), i < l && (l = i));
					if (u) {
						e.splice(a--, 1);
						var p = o();
						void 0 !== p && (r = p);
					}
				}
				return r;
			};
		})(),
		(t.n = (e) => {
			var r = e && e.__esModule ? () => e.default : () => e;
			return (t.d(r, { a: r }), r);
		}),
		(t.d = (e, r) => {
			for (var n in r) t.o(r, n) && !t.o(e, n) && Object.defineProperty(e, n, { enumerable: !0, get: r[n] });
		}),
		(t.g = (function () {
			if ('object' == typeof globalThis) return globalThis;
			try {
				return this || Function('return this')();
			} catch (e) {
				if ('object' == typeof window) return window;
			}
		})()),
		(t.o = (e, r) => Object.prototype.hasOwnProperty.call(e, r)),
		(t.r = (e) => {
			('undefined' != typeof Symbol &&
				Symbol.toStringTag &&
				Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }),
				Object.defineProperty(e, '__esModule', { value: !0 }));
		}),
		(t.p = '/openbanking.vn/_next/'),
		(() => {
			var e = { 68: 0 };
			t.O.j = (r) => 0 === e[r];
			var r = (r, n) => {
					var o,
						i,
						[a, l, u] = n,
						f = 0;
					if (a.some((r) => 0 !== e[r])) {
						for (o in l) t.o(l, o) && (t.m[o] = l[o]);
						if (u) var p = u(t);
					}
					for (r && r(n); f < a.length; f++) ((i = a[f]), t.o(e, i) && e[i] && e[i][0](), (e[i] = 0));
					return t.O(p);
				},
				n = (self.webpackChunk_N_E = self.webpackChunk_N_E || []);
			(n.forEach(r.bind(null, 0)), (n.push = r.bind(null, n.push.bind(n))));
		})());
})();
