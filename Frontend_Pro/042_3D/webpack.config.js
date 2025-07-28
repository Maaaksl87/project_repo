const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { sourceMapsEnabled } = require('process');

module.exports = (env, argv) => {
    const isDevelopment = argv.mode === "development"; //присвоюється значення, якщо воно є true(перевірка чи argv.mode === dev )

    return {
        entry: './src/main.js',
        output: {
            filename: isDevelopment ? '[name].js' : '[name].[contenthash].js',
            path: path.resolve(__dirname, 'dist')
        },
        devtool: "eval-source-map",
        //налаштування модульності
        module: {
            rules: [
                //правило для обробки js коду
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
                title: "task 042_3D"
            })
        ]
    }

};