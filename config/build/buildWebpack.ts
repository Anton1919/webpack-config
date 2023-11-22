import webpack from "webpack";
import {buildDevServer} from "./buildDevServer";
import {buildLoaders} from "./buildLoaders";
import {buildPlugins} from "./buildPlugins";
import {buildResolvers} from "./buildResolvers";
import {BuildOptions} from "./types/types";

export function buildWebpack(options: BuildOptions): webpack.Configuration {
    const { mode, paths, isDevMode } = options

    return {
        mode: mode ?? "development",
        entry: paths.entry,
        module: {
            rules: buildLoaders(options),
        },
        resolve: buildResolvers(options),
        output: {
            path: paths.output,
            filename: "[name].[contenthash].js",
            clean: true
        },
        plugins: buildPlugins(options),
        // devtool: isDevMode && 'inline-source-map',
        devtool: isDevMode ? 'eval-cheap-module-source-map' : 'source-map',
        devServer: isDevMode ? buildDevServer(options) : undefined
    }
}
