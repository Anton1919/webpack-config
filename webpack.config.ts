import {buildWebpack} from "./config/build/buildWebpack";
import {BuildMode, BuildPaths} from "./config/build/types/types";
import path from "path";

type EnvVariablesType = {
    mode: BuildMode
    port: number
    analyzer?: boolean
}
export default (env: EnvVariablesType) => {
    const {mode, port} = env
    const paths: BuildPaths = {
        html: path.resolve(__dirname, 'public', 'index.html'),
        entry: path.resolve(__dirname, 'src', 'index.tsx'),
        output: path.resolve(__dirname, 'build'),
        src: path.resolve(__dirname, 'src'),
        public: path.resolve(__dirname, 'public')
    }

    const isDevMode = mode === 'development'
    const isProdMode = mode === 'production'

    return buildWebpack({
        port: port ?? 3000,
        mode: mode ?? 'development',
        paths,
        isDevMode,
        isProdMode,
        analyzer: env.analyzer
    })
}
