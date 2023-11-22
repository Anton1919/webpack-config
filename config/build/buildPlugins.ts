import HtmlWebpackPlugin from "html-webpack-plugin";
import MiniCssExtractPlugin, {Configuration} from "mini-css-extract-plugin";
import webpack from "webpack";
import {BuildOptions} from "./types/types";
import {BundleAnalyzerPlugin} from "webpack-bundle-analyzer";
import ForkTsCheckerWebpackPlugin from "fork-ts-checker-webpack-plugin";
import ReactRefreshWebpackPlugin from '@pmmmwh/react-refresh-webpack-plugin'
import CopyPlugin from "copy-webpack-plugin";
import path from "path";

export function buildPlugins(options: BuildOptions): Configuration['plugins'] {
    const {paths, analyzer, isDevMode, isProdMode} = options

    const plugins: Configuration['plugins'] = [
        new HtmlWebpackPlugin({template: paths.html}),
    ]

    if (isDevMode) {
        plugins.push(new webpack.ProgressPlugin())
        plugins.push(new ForkTsCheckerWebpackPlugin())
        plugins.push(new ReactRefreshWebpackPlugin())
    }

    if (isProdMode) {
        plugins.push(new MiniCssExtractPlugin({
            filename: 'css/[name].[contenthash:8].css',
            chunkFilename: 'css/[name].[contenthash:8].css'
        }))
        plugins.push(new CopyPlugin({
            patterns: [
                {
                    from: path.resolve(paths.public, 'favicon.png'),
                    to: paths.output
                    // если хотим создать папку в build то вот так надо
                    // to: path.resolve(paths.output, 'some dir')

                }
            ]
        }))
    }

    if (analyzer) {
        plugins.push(new BundleAnalyzerPlugin())
    }

    return plugins
}
