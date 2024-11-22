/** @type {import('tailwindcss').Config} */
import defaultTheme from 'tailwindcss/defaultTheme';

export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		colors: {
			"transparent": "transparent",
			"space-navy": "#0B0D17",
			"soft-blue": "#D0D6F9",
			"white": "#FFFFFF",
		},
		extend: {
			fontFamily: {
				"sans": ["Barlow Condensed", ...defaultTheme.fontFamily.sans],
				"serif": ["Bellefair", ...defaultTheme.fontFamily.serif],
				"body": ["Barlow"],
			},
			screens: {
				"xl": "1440px",
			}
		}
	},
	plugins: [],
}
