const path = require('path');
const loaders = require('./loaders');
const plugins = require('./plugins');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const ProgressBarPlugin = require('progress-bar-webpack-plugin');
const webpack = require('webpack');

const minify = {
    collapseWhitespace: true,
    removeComments: true,
    minifyJS: true,
    minifyURLs: true,
    removeEmptyAttributes: true,
    removeScriptTypeAttributes: true,
}



const templateFileMapper = [

	{ template: "./src/about.ejs", file: "about.html" },
	{ template: "./src/artwork-bleed-guide.ejs", file: "artwork-bleed-guide.html" },	
	{ template: "./src/artwork-colour-guide.ejs", file: "artwork-colour-guide.html" },
	{ template: "./src/artwork-resolution-guide.ejs", file: "artwork-resolution-guide.html" },
	{ template: "./src/black-white.ejs", file: "black-white.html" },
	{ template: "./src/blog.ejs", file: "blog.html" },
	{ template: "./src/colour-copying.ejs", file: "colour-copying.html" },
	{ template: "./src/contact.ejs", file: "contact.html" },
	{ template: "./src/design.ejs", file: "design.html" },
    { template: "./src/index.ejs", file: "index.html" },
    { template: "./src/leaflets-flyers.ejs", file: "leaflets-flyers.html" },
    { template: "./src/notepads.ejs", file: "notepads.html" },
    { template: "./src/order-process.ejs", file: "order-process.html" },
    { template: "./src/postcards.ejs", file: "postcards.html"},
    { template: "./src/standard-document-sizes.ejs", file: "standard-document-sizes.html"},
    { template: "./src/supplied-artwork.ejs", file: "supplied-artwork.html" },
    { template: "./src/vinyl-graphics.ejs", file: "vinyl-graphics.html" },
    { template: "./src/vouchers.ejs", file: "vouchers.html" },

]


const htmlPlugins = () => {
  return templateFileMapper.map(entry => {
    return new HtmlWebpackPlugin({
      template: entry.template,
      filename: entry.file,
    });
  })
};

                    
module.exports = {
    mode: 'development',

    entry: {
        app: "./src/app.js"
    },
    
    devServer: {
        contentBase: './dist',
        hot: true
    },

    output: {
        path: path.resolve(__dirname, './dist'),
        filename: "js/[name].bundle.js",
        publicPath: ''
    },

    module: {
    	rules: [
    	    loaders.css,
    		loaders.scss,
            loaders.fonts,
            loaders.images,
            loaders.js,
            loaders.ejs
		]
    },

   

    plugins: htmlPlugins().concat([
        new ProgressBarPlugin(),
        new webpack.ProvidePlugin({
            _: "underscore"
        }),

        plugins.MiniCssExtractPlugin,        
        plugins.css,
        plugins.js,
        plugins.HotModuleReplacementPlugin
    ]),
	
    optimization: {
        namedModules: true, // NamedModulesPlugin()
        /*
splitChunks: { // CommonsChunkPlugin()
            name: 'commons',
            minChunks: 2
        },
        noEmitOnErrors: true, // NoEmitOnErrorsPlugin
        concatenateModules: true //ModuleConcatenationPlugin
*/
    }
};



