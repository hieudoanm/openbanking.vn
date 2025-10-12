((self.__BUILD_MANIFEST = (function (e, s, a, t) {
	return {
		__rewrites: { afterFiles: [], beforeFiles: [], fallback: [] },
		__routerFilterStatic: {
			numItems: 0,
			errorRate: 1e-4,
			numBits: 0,
			numHashes: null,
			bitArray: [],
		},
		__routerFilterDynamic: {
			numItems: e,
			errorRate: 1e-4,
			numBits: e,
			numHashes: null,
			bitArray: [],
		},
		'/': [
			'static/chunks/6de85cd9-b7a693716ae4c1e5.js',
			s,
			'static/chunks/pages/index-f74715a30657166f.js',
		],
		'/404': [s, 'static/chunks/pages/404-7c4b0f004aaabcbf.js'],
		'/500': [s, 'static/chunks/pages/500-581d8a9159c25427.js'],
		'/_error': ['static/chunks/pages/_error-fc28e980d31c3751.js'],
		'/app': ['static/chunks/pages/app-4439d8bad53ca136.js'],
		sortedPages: ['/', '/404', '/500', '/_app', '/_error', '/app'],
	};
})(0, 'static/chunks/476-7282d6af0646777c.js', 1e-4, null)),
	self.__BUILD_MANIFEST_CB && self.__BUILD_MANIFEST_CB());
