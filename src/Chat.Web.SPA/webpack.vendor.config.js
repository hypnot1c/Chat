const path = require("path");
const {
    DllPlugin,
    ProvidePlugin,
    ContextReplacementPlugin,
    DefinePlugin,
    SourceMapDevToolPlugin
} = require("webpack");

const { AureliaPlugin } = require("aurelia-webpack-plugin");
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
//const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

//const extractCSS = new ExtractTextPlugin();

const srcDir = path.resolve(__dirname, 'src');


module.exports = (env, argv) => {
    const isProd = argv.mode == 'production';
    let config = {
        mode: argv.mode,
        resolve: {
            modules: ['node_modules'],
            extensions: ['.js']
        },
        module: {
            rules: [
                { test: /\.(png|woff|woff2|eot|ttf|svg)(\?|$)/, loader: 'url-loader?limit=100000' },
                { test: /\.html$/i, loader: 'html-loader' },
            ],
            noParse: [/oidc-client/, /jquery/]
        },
        entry: {
            vendor: [
                "aurelia-bootstrapper",
                "aurelia-open-id-connect",
                "@aspnet/signalr",
                'bluebird'
            ],
        },
        output: {
            path: path.join(__dirname, 'wwwroot', 'dist'),
            publicPath: '/dist/',
            filename: isProd ? '[name]_[hash].js' : '[name].js',
            library: isProd ? '[name]_[hash]' : '[name]'
        },
        plugins: [
            new ContextReplacementPlugin(/moment[\/\\]locale$/, /fr/),
            new ProvidePlugin({
                'Promise': 'bluebird',
                '$R': 'Redactor'
            }), // Maps these identifiers to the jQuery package (because Bootstrap expects it to be a global variable)
            new DllPlugin({
                path: path.join(__dirname, 'wwwroot', 'dist', '[name]-manifest.json'),
                name: isProd ? '[name]_[hash]' : '[name]'
            }),
            new AureliaPlugin({
                aureliaApp: undefined,
            })
        ]
    };

    if (isProd) {
        config.plugins = config.plugins.concat([
            new DefinePlugin({
                'process.env.NODE_ENV': JSON.stringify('production')
            }),
            new UglifyJsPlugin()
        ]);
    }
    else {
        config.plugins.push(
            //new BundleAnalyzerPlugin(),
            new SourceMapDevToolPlugin({
                filename: '[file].map', // Remove this line if you prefer inline source maps
                moduleFilenameTemplate: path.relative(path.join(__dirname, 'wwwroot', 'dist'), '[resourcePath]')  // Point sourcemap entries to the original file locations on disk
            })
        );
    }

    return config;
};