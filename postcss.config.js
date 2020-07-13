const plugins = {
	tailwindcss: {},
	autoprefixer: {},
}

if (process.env.NODE_ENV === 'production') {
	plugins['cssnano'] = {
		discardComments: {
			removeAll: true,
		},
	}
}

module.exports = {
	plugins,
}
