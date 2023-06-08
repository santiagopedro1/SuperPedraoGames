/** @type {import('tailwindcss').Config}*/
const config = {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		extend: {
			spacing: {
				'page-h': 'calc(100vh - 60px)'
			}
		}
	},

	plugins: []
};

module.exports = config;
