const plugin = require('tailwindcss/plugin');

const focusedSiblingPlugin = plugin(function ({ addVariant, e }) {
	addVariant('focused-sibling', ({ container }) => {
		container.walkRules((rule) => {
			rule.selector = `:focus + .focused-sibling\\:${rule.selector.slice(1)}`;
		});
	});
});

module.exports = {
	purge: ['./src/**/*.{js,jsx}', './public/index.html'],
	darkMode: false,
	theme: {
		gradientColorStops: (theme) => ({
			...theme('colors'),
			'black-hard': '#000 50%',
			'transparent-hard': 'rgba(0,0,0,0) 50%',
		}),

		backgroundSize: {
			'200%': '200%',
			'100%': '100%',
			'200-100': '200% 100%',
		},
		fontFamily: {
			sans: ['Roboto', 'sans-serif'],
			mono: ['"Source Code Pro"', 'monospace'],
		},
		minWidth: {
			0: '0',
			'1/4': '25%',
			'1/2': '50%',
			'3/4': '75%',
			full: '100%',
		},
		minHeight: {
			0: '0',
			'1/4': '25%',
			'1/2': '50%',
			'3/4': '75%',
			full: '100%',
		},
		extend: {
			height: (theme) => ({
				'9/10': '90%',
				169: '42.25rem',
				171: '42.75rem',
				172: '43rem',
				128: '32rem',
				140: '35rem',
				hero: 'calc(100vh - 5rem)',
			}),
			width: (theme) => ({
				'9/10': '90%',
				88: '22rem',
				92: '23rem',
				96: '24rem',
				128: '32rem',
				169: '42.25rem',
				171: '42.75rem',
				172: '43rem',
				105: '26.25rem',
			}),
			backgroundImage: (theme) => ({
				'hero-pattern': "url('/src/assets/img/bg-blue.jpg')",
			}),
			keyframes: {
				cardHeaderKeyframeIn: {
					'0%': {
						transform: 'translateX(-10rem) translateY(10rem) rotate(-90deg)',
						opacity: 1,
					},
					'40%': {
						transform: 'translateX(-10rem) translateY(10rem) rotate(-90deg)',
						opacity: 0,
					},
					'50%': {
						transform: 'translateX(0) translateY(0) rotate(0)',
						opacity: 0,
					},
					'60%': {
						transform: 'translateX(0) translateY(0) rotate(0)',
						opacity: 0,
					},
					'100%': {
						opacity: 1,
						transform: 'translateX(0) translateY(0) rotate(0)',
					},
				},
				cardHeaderKeyframeOut: {
					'0%': {
						opacity: 1,
						transform: 'translateX(0) translateY(0) rotate(0)',
					},
					'40%': {
						transform: 'translateX(0) translateY(0) rotate(0)',
						opacity: 0,
					},
					'50%': {
						transform: 'translateX(0) translateY(0) rotate(0)',
						opacity: 0,
					},
					'60%': {
						transform: 'translateX(-10rem) translateY(10rem) rotate(-90deg)',
						opacity: 0,
					},
					'100%': {
						transform: 'translateX(-10rem) translateY(10rem) rotate(-90deg)',
						opacity: 1,
					},
				},
			},
			animation: {
				cardHeaderAnimationIn: 'cardHeaderKeyframeIn 500ms ease-in-out forwards',
				cardHeaderAnimationOut: 'cardHeaderKeyframeOut 500ms ease-in-out forwards',
			},
		},
	},
	variants: {
		extend: {
			animation: ['hover', 'focus', 'group-hover'],
			translate: ['active', 'group-hover'],
			rotate: ['group-hover'],
			backgroundColor: ['group-focus', 'focused-sibling'],
			borderColor: ['group-focus'],
			backgroundPosition: ['hover'],
			outline: ['group-focus'],
			textColor: ['checked', 'focused-sibling'],
		},
	},
	plugins: [focusedSiblingPlugin],
};
