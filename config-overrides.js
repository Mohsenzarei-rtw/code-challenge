const path = require('path');

module.exports = function override(config) {
	config.resolve = {
		...config.resolve,
		extensions: ['.js', '.jsx', '.ts', '.tsx'],
		alias: {
			...config.alias,
			src: path.resolve(__dirname, './src/'),
			store: path.resolve(__dirname, './src/store/'),
			service: path.resolve(__dirname, './src/store/'),
		},
	};

	return config;
};
