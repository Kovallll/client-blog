export interface SearchPopupProps
    extends React.InputHTMLAttributes<HTMLDivElement> {
    searchedValues: string[]
    onClickValue: (value: string) => void
    activeIndex: number
}
