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
			'static/chunks/954ef8d5-a8e53501dc62cb2b.js',
			s,
			'static/chunks/pages/index-9e3c83125e28c982.js',
		],
		'/404': [s, 'static/chunks/pages/404-9ffc1279ddc048ef.js'],
		'/500': [s, 'static/chunks/pages/500-590157fe7e18129c.js'],
		'/_error': ['static/chunks/pages/_error-a34b1df36ac0f996.js'],
		'/app': ['static/chunks/pages/app-2a721d6bcc62b34e.js'],
		sortedPages: ['/', '/404', '/500', '/_app', '/_error', '/app'],
	};
})(0, 'static/chunks/570-e41b933fb5a57723.js', 1e-4, null)),
	self.__BUILD_MANIFEST_CB && self.__BUILD_MANIFEST_CB());
