import TerserPlugin from 'terser-webpack-plugin'
import path from 'path'
import { fileURLToPath } from 'url'
const __dirname = path.dirname(fileURLToPath(import.meta.url))

import HtmlWebpackPlugin from 'html-webpack-plugin'
import CopyPlugin from 'copy-webpack-plugin'
import MiniCssExtractPlugin from 'mini-css-extract-plugin'


export default {
  mode: 'production',
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'index.js',
	clean:true
  },
  optimization: {
    minimize: true,
    minimizer: [new TerserPlugin()]
  },
  plugins:[
		new HtmlWebpackPlugin({
		title:'A+Studio',
		template:path.resolve('./src/index.html'),
		filename:'index.html'

	}),
	new CopyPlugin({
		patterns:[
			{
				from: path.resolve(__dirname, 'src/assets/images'),
          to: path.resolve(__dirname, 'dist/assets/images')
			},
		]
	}),
	new MiniCssExtractPlugin({
		filename:'index.css'
	})
],
	module:{
		rules:[
			{
			test: /\.css$/i,
			use:[MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader']
      },
		]
	},
};