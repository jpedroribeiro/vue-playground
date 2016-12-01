module.exports = {
	entry: './src/main',
	output: {
		path: './build',
		filename: 'main.js'
	},
	module: {
		rules: [
			{
				test: /\.vue$/,
				loader: 'vue',
			}
		]
	}
}