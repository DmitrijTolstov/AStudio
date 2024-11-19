import path from 'path'
import { fileURLToPath } from 'url'
const __dirname = path.dirname(fileURLToPath(import.meta.url))

import HtmlWebpackPlugin from 'html-webpack-plugin'
import CopyPlugin from 'copy-webpack-plugin'

export default{
	mode:'development',
	 devtool: 'eval-source-map',
	entry: './src/index.js',
	output:{
		path: path.resolve(__dirname,'dist'),
		filename: 'main.js',
		clean:true,
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

	devServer: {
    static: {
      directory: path.resolve(__dirname, 'dist'),
    },
	port: 3000,
    open: true,
    hot: true,
    compress: true,

	}
}