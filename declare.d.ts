declare module '*.mp4'
declare module '*.svg' {
    const ReactComponent: React.FC<React.SVGProps<SVGSVGElement>>
    export default ReactComponent
}
