import autoprefixer from 'autoprefixer';
import tailwindcss from 'tailwindcss';
export  const plugins = [
	'postcss-preset-env',
	tailwindcss,
	autoprefixer()
];