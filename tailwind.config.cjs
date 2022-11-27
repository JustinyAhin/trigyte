/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		fontFamily: {
			'font-lato': ['Lato', 'sans-serif']
		},
		colors: {
			'alice-blue': '#F1F5F9',
			mauvelous: '#FDA4AF',
			gray: {
				300: '#D4D4D8',
				800: '#1F2937',
				900: '#111827'
			},
			indigo: {
				600: '#4F46E5'
			},
			white: '#FFFFFF'
		},
		extend: {}
	},
	plugins: []
};
