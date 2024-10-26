export interface InputProps
    extends React.InputHTMLAttributes<HTMLInputElement> {
    placeholder: string
    error?: string | null
    value?: string
    onChangeInput?: (value: string) => void
}
