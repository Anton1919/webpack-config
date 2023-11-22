export type BuildMode = 'development' | 'production'

export type BuildPaths = {
    entry: string
    output: string
    html: string
    src: string
    public: string
}

export type BuildOptions = {
    port: number
    paths: BuildPaths
    mode: BuildMode
    analyzer?: boolean
    isDevMode: boolean
    isProdMode: boolean
}
