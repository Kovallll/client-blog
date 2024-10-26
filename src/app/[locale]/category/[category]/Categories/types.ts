export interface CategoriesProps {
    currentCategory: string
    isOpenSidebar: boolean
    searchTag: string
    handleChangeSearchTag: (value: string) => void
    handleSearchTag: (searchValue: string) => void
}
