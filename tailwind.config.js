// See https://tailwindcss.com/docs/configuration for details
module.exports = {
	purge: ['./src/**/*.tsx'],
	theme: {
		extend: {
			boxShadow: {
				round: '0 0 20px rgba(0,0,0,0.6)',
			},
		},
	},
	variants: {},
}
