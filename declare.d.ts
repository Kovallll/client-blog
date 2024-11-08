declare module '*.mp4'
declare module '*.scss'
declare module '*.svg' {
    const ReactComponent: React.FunctionComponent<
        React.SVGProps<SVGSVGElement> & {
            title?: string
        }
    >
    export default ReactComponent
}
