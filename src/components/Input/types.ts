export interface InputProps
    extends React.InputHTMLAttributes<HTMLInputElement> {
    placeholder: string
    onFocusInput?: (isFocus: boolean) => void
    error?: string | null
    value?: string
    onChangeInput?: (value: string) => void
}
