const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { sourceMapsEnabled } = require('process');
const BundleAnalayzerPlugin = require("webpack-bundle-analyzer").BundleAnalyzerPlugin

module.exports = (env, argv) => {
    const isDevelopment = argv.mode === "development"; //присвоюється значення, якщо воно є true(перевірка чи argv.mode === dev )

    return {
        entry: './src/main.ts',
        output: {
            filename: isDevelopment ? '[name].js' : '[name].[contenthash].js',
            path: path.resolve(__dirname, 'dist')
        },
        devtool: "eval-source-map",
        resolve: {
            extensions: ['.ts', '.tsx', '.js', '.jsx']
        },
        //налаштування модульності
        module: {
            rules: [
                //правило для обробки TypeScript коду
                {
                    test: /\.(ts|tsx)$/,
                    exclude: "/node_modules/",
                    use: {
                        loader: "ts-loader"
                    }
                },
                //правило для обробки js коду (для зворотної сумісності)
                {
                    test: /\.(js|jsx)$/,
                    exclude: "/node_modules/",
                    use: {
                        loader: "babel-loader"
                    }
                },
                //правило для обробки css коду
                {
                    test: /\.css$/,
                    use: ['style-loader', {
                        loader: 'css-loader',
                        options: {
                            sourceMap: true, /* Увімкнути source maps для CSS */
                        }
                    }]
                }
            ],
        },
        plugins: [
            new HtmlWebpackPlugin({
                template: "./src/index.html",
                title: "task 044_3D TypeScript"
            }),
            new BundleAnalayzerPlugin()
        ]
    }

};