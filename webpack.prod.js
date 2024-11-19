import TerserPlugin from 'terser-webpack-plugin'
import path from 'path'
import { fileURLToPath } from 'url'
const __dirname = path.dirname(fileURLToPath(import.meta.url))

import HtmlWebpackPlugin from 'html-webpack-plugin'
import CopyPlugin from 'copy-webpack-plugin'

export default {
  mode: 'production',
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'main.js',
	clean:true
  },
  optimization: {
    minimize: true,
    minimizer: [new TerserPlugin()]
  },
  plugins:[
		new HtmlWebpackPlugin({
		title:'A+Studio',
		template:path.resolve(__dirname, './src/index.html'),
		filename:'main.html'

	}),
	new CopyPlugin({
		patterns:[
			{
				from: path.resolve(__dirname, 'src/assets/images'),
          to: path.resolve(__dirname, 'dist/assets/images')
			},
		]
	})
],
	module:{
		rules:[
			{
			test: /\.css$/i,
			 use: ['style-loader', 'css-loader', 'postcss-loader'],
      },
		]
	},
};