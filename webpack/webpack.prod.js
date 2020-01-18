process.env.NODE_ENV = 'production';
const path = require('path');
const loaders = require('./loaders');
const plugins = require('./plugins');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const HappyPack = require('happypack');
const happyThreadPool = HappyPack.ThreadPool({ size: 5 });
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ProgressBarPlugin = require('progress-bar-webpack-plugin');
const webpack = require('webpack');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

console.log(process.env.NODE_ENV);

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
      minify: {
        removeScriptTypeAttributes: true,
      }
    });
  })
};


module.exports = {
    mode: 'production',
    devtool: 'source-map',
    
    entry: {
        'app.js': [
          path.resolve(__dirname, '../src/app.js')
        ]
    },

    output: {
        path: path.resolve(__dirname, '../dist'),
        filename: "js/[name]",
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
        
        plugins.MiniCssExtractPlugin,

        createHappyPlugin('scss', ['css-loader?importLoaders:1!postcss-loader?sourceMap:1!sass-loader']),
        
        plugins.js,

    ]),
	
	optimization: {
	    minimizer: [
          new UglifyJsPlugin({
            uglifyOptions: {
              output: {
                comments: false
              }
            }
          })
        ],
	    minimize: false,
        namedModules: true, // NamedModulesPlugin()
        noEmitOnErrors: true, // NoEmitOnErrorsPlugin
        concatenateModules: true //ModuleConcatenationPlugin
    }
};


function createHappyPlugin(id, loaders) {
    return new HappyPack({
        id: id,
        loaders: loaders,
        threadPool: happyThreadPool,
        verbose: false,
    });
}

