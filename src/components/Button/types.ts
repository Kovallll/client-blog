export interface ButtonProps
    extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    onClick: () => void
    title: string
    isWhiteBg?: boolean
}
