const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const DEV = 'development', TEST = 'test', PRODUCTION = 'production';
const InlineManifestWebpackPlugin = require('inline-manifest-webpack-plugin');

let wpconfig = {
    entry: {
        main: './src/entries/index.js',
    },
    devServer: {
        stats: 'errors-only',
    },
    module: {
        rules: [{
            test: /\.(js|jsx)$/,
            exclude: /(node_modules|bower_components)/,
            use: ['babel-loader']
        }, {
            test: /\.(png|jpe?g|svg|gif|woff|woff2|eot|ttf)$/i,
            use: {
                loader: 'url-loader',
                options: {
                    limit: 8989,
                    name: 'images/[hash:8].[name].[ext]'
                }
            }
        }]
    },
    resolve: {
        extensions: [".js",".jsx",".json"]
    },
    externals: {
        "react": "React",
        "react-dom": "ReactDOM",
        "redux": "Redux",
        'react-router': 'ReactRouter',
        'react-redux': 'ReactRedux',
        'react-router-redux': 'ReactRouterRedux',
        'thunk': 'Thunk',
        'antd': 'Antd'
    },
};

process.noDeprecation = true;
/*https://github.com/vuejs/vue-loader/issues/666*/

switch (process.env.NODE_ENV) {
    case DEV:
        wpconfig.output = {
            filename: '[name].[hash:5].js',
            chunkFilename: '[name].[hash:5].js',
            path: path.resolve(__dirname, 'dist')
        };
        wpconfig.module.rules.push({
            test: /\.css$/,
            use: ['style-loader', 'css-loader']
        });
        wpconfig.module.rules.push({
            test: /\.less$/,
            use: ['style-loader', 'css-loader', 'less-loader']
        });
        wpconfig.plugins = [
            new HtmlWebpackPlugin({//重构入口html，动态添加<link>和<script>
                template: 'ejs-loader!./dist/index.ejs'
            }),
            new webpack.DefinePlugin({
                'NODE_ENV':  JSON.stringify(DEV),
                'MID_URL': JSON.stringify('HELLO1')
            }),
            new webpack.ProvidePlugin({//自动加载模块
                React: 'React'
            }),
            new webpack.DefinePlugin({//定义全局变量
                'process.env':{ 'NODE_ENV': JSON.stringify('production')},
                'NODE_ENV':  JSON.stringify(DEV),
                'GONGJIJIN_URL': JSON.stringify('http://demo.jieba.mifengkong.cn'),
            })
        ];
        break;
    case TEST:
        console.log('测试环境打包');
        wpconfig = getBuildConfig(wpconfig);
        wpconfig.plugins.push( new webpack.DefinePlugin({
            'process.env':{ 'NODE_ENV': JSON.stringify('production')},
            'NODE_ENV':  JSON.stringify(DEV),
            'GONGJIJIN_URL': JSON.stringify('http://demo.jieba.mifengkong.cn'),
        }));
        break;
    case PRODUCTION:
        console.log('线上环境打包');
        wpconfig = getBuildConfig(wpconfig);
        wpconfig.plugins.push( new webpack.DefinePlugin({
            'process.env':{ 'NODE_ENV': JSON.stringify('production')},
            'NODE_ENV':  JSON.stringify(PRODUCTION),
            'GONGJIJIN_URL': JSON.stringify('http://qianba.mifengkong.cn:810'),
        }));
        break;
    default:
        break;
}


function getBuildConfig(wpconfig) {
    /*测试环境&生产环境的打包相关配置*/
    wpconfig.output = {
        filename: '[name].[chunkhash:5].js',
        chunkFilename: '[name].[chunkhash:5].js',
        path: path.resolve(__dirname, 'dist')
    };

    wpconfig.plugins = [
        new webpack.optimize.CommonsChunkPlugin({//合并公共模块为单独文件，比如全局通用的js，长期不回修改，从而可以从缓存中获取，优化网页性能
            names: ['manifest'].reverse()
        }),
        new HtmlWebpackPlugin(
            {
                title:'world',
                template: 'ejs-loader!./dist/index.ejs',
                chunks: ['manifest', 'main']
            }
        ),
        new InlineManifestWebpackPlugin(),
        new webpack.optimize.UglifyJsPlugin(),//js压缩
        new ExtractTextPlugin("[name].[contenthash:5].css")
    ];

    wpconfig.module.rules.push({
        test: /\.css/,
        use: ExtractTextPlugin.extract({//分离css文件
            fallback: 'style-loader',
            use: [
                { loader: 'css-loader', options: { importLoaders: 1 } },
                'postcss-loader'
            ]
        })
    });
    wpconfig.module.rules.push({
        test: /\.less$/,
        use: ExtractTextPlugin.extract({
            fallback: 'style-loader',
            use: [
                { loader: 'css-loader', options: { importLoaders: 1 } },
                'postcss-loader', 'less-loader'
            ]
        })
    });
    return wpconfig
}

module.exports = wpconfig;
