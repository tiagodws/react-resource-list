const path = require("path");

const ExtractTextPlugin = require("extract-text-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = () => {
    const BUILD_FOLDER = "dist";
    const BUNDLE_NAME = "bundle";

    return {
        context: path.join(__dirname, "src"),
        entry: ["./index.js"],
        output: {
            path: path.join(__dirname, BUILD_FOLDER),
            filename: `${BUNDLE_NAME}.js`,
        },
        module: {
            rules: [
                {
                    test: /\.js$/,
                    exclude: /node_modules/,
                    use: ["babel-loader"],
                },
                {
                    test: /\.(css|scss|sass)$/,
                    use: ["css-hot-loader"].concat(
                        ExtractTextPlugin.extract({
                            fallback: "style-loader",
                            use: [
                                {
                                    loader: "css-loader",
                                },
                                {
                                    loader: "sass-loader",
                                    options: {
                                        includePaths: ["src/assets/style"],
                                    },
                                },
                            ],
                        }),
                    ),
                },
            ],
        },
        resolve: {
            extensions: [".js", ".jsx"],
            modules: [path.join(__dirname, "node_modules")],
        },
        plugins: [
            new HtmlWebpackPlugin({
                template: "index.html",
            }),
            new ExtractTextPlugin("style.css"),
        ],
        devtool: "source-map",
        devServer: {
            historyApiFallback: true,
            contentBase: "./",
            compress: true,
            open: true,
            stats: "minimal",
            overlay: true,
        },
    };
};
