/// <binding BeforeBuild='Run - Development' ProjectOpened='Watch - Development' />
const path = require('path');

const {
    ProvidePlugin,
    SourceMapDevToolPlugin,
    DllReferencePlugin,
    DefinePlugin,
    NormalModuleReplacementPlugin
} = require('webpack');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const BrowserSyncPlugin = require('browser-sync-webpack-plugin');
const { AureliaPlugin } = require('aurelia-webpack-plugin');
const { TsConfigPathsPlugin, CheckerPlugin } = require('awesome-typescript-loader');

// primary config:
const outDir = path.resolve(__dirname, 'wwwroot/dist');
const srcDir = path.resolve(__dirname, 'src');
const nodeModulesDir = path.resolve(__dirname, 'node_modules');
const baseUrl = '/';

const vendorManifest = require(path.resolve(outDir, 'vendor-manifest.json'));

/**
 * @return {webpack.Configuration}
*/
module.exports = (env, argv) => {
    const isProd = argv.mode === 'production';
    const isTest = process.env.NODE_ENV === 'testing';

    const cssRules = [
        'css-loader',
        {
            loader: 'sass-loader',
            options: {
                includePaths: [
                    path.resolve(nodeModulesDir, 'normalize-scss/sass')
                ],
                sourceMap: !isProd && !isTest

            }
        }
    ];

    let config = {
        mode: argv.mode || 'development',

        resolve: {
            modules: [srcDir, 'node_modules'],
            extensions: ['.ts', '.js'],
            plugins: [
                new TsConfigPathsPlugin(),
            ]
        },

        entry: {
            app: ['aurelia-bootstrapper']
        },

        output: {
            path: outDir,
            publicPath: '/dist/',
            filename: isProd || isTest ? "[name].[chunkhash].js" : "[name].js",
            chunkFilename: isProd || isTest ? "[name].[chunkhash].js" : "[name].js",
        },
        devServer: {
            contentBase: outDir,
            // serve index.html for all 404 (required for push-state)
            historyApiFallback: true,
        },
        module: {
            rules: [
                // CSS required in JS/TS files should use the style-loader that auto-injects it into the website
                // only when the issuer is a .js/.ts file, so the loaders are not applied inside html templates
                {
                    test: /\.css$/i,
                    issuer: [{ not: [{ test: /\.html$/i }] }],
                    use: cssRules,
                },
                {
                    test: /\.css$/i,
                    issuer: [{ test: /\.html$/i }],
                    // CSS required in templates cannot be extracted safely
                    // because Aurelia would try to require it again in runtime
                    use: cssRules,
                },
                {
                    test: /\.scss$/,
                    use: cssRules,
                },
                { test: /\.html$/i, loader: 'html-loader' },
                { test: /\.ts$/i, loader: 'awesome-typescript-loader', exclude: nodeModulesDir },
                { test: /\.json$/i, loader: 'json-loader' },
                // use Bluebird as the global Promise implementation:
                { test: /[\/\\]node_modules[\/\\]bluebird[\/\\].+\.js$/, loader: 'expose-loader?Promise' },
                // embed small images and fonts as Data Urls and larger ones as files:
                { test: /\.(png|gif|jpg|cur)$/i, loader: 'url-loader', options: { limit: 8192 } }
            ]
        },
        plugins: [
            new NormalModuleReplacementPlugin(/(.*)app-config(\.*)/, (resource) => {
                let cfgFileName = 'app-config';
                if (isTest) {
                    cfgFileName = `${cfgFileName}-test`;
                }
                else if (isProd) {
                    cfgFileName = `${cfgFileName}-prod`;
                }
                resource.request = resource.request.replace(/app-config/, cfgFileName);
            }),
            new DllReferencePlugin({
                manifest: vendorManifest
            }),
            new HtmlWebpackPlugin({
                inject: false,
                template: "Views/Templates/Index_Template.cshtml",
                filename: "../../Views/Home/Index.cshtml",
                vendorFileName: `${vendorManifest.name}.js`
            }),
            new ProvidePlugin({
                'Promise': 'bluebird'
            }),
            new AureliaPlugin({ aureliaApp: 'main' })
        ]
    };

    if (isProd || isTest) {
        config.plugins = config.plugins.concat([
            new DefinePlugin({
                'process.env.NODE_ENV': JSON.stringify('production')
            }),
            new UglifyJsPlugin()
        ]);
    }
    else {
        config.plugins.push(
            new SourceMapDevToolPlugin({
                // Remove this line if you prefer inline source maps
                filename: '[file].map',
                // Point sourcemap entries to the original file locations on disk
                moduleFilenameTemplate: path.relative(outDir, '[resourcePath]')
            }),
            new BrowserSyncPlugin({
                host: 'localhost',
                port: 3000,
                proxy: 'http://localhost:49788/',
                open: false
            })
        );
    }
    return config;
};
