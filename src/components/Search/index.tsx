'use client'

import { useTranslations } from 'next-intl'

import { SearchPopup } from './SearchPopup'
import styles from './styles.module.scss'
import { SearchProps } from './types'

import { Input } from '@components/Input'
import { allTags } from '@constants'
import { useClickOutside, useSearch } from '@hooks'

export const Search = ({
    searchValue,
    handleChangeSearchValue,
}: SearchProps) => {
    const {
        searchedValues,
        activeIndex,
        isFocus,
        searchRef,
        handleKeyClick,
        handleMouseLeave,
        handleMouseOver,
        handleChangeFocus,
    } = useSearch(searchValue, handleChangeSearchValue, allTags)

    const t = useTranslations('CategoryPage')
    useClickOutside(searchRef, () => handleChangeFocus(false))

    return (
        <div className={styles.search} ref={searchRef}>
            <div className={styles.input}>
                <Input
                    placeholder={t('searchPlaceholder')}
                    value={searchValue}
                    onChangeInput={handleChangeSearchValue}
                    type="search"
                    onFocusInput={handleChangeFocus}
                    onKeyDown={handleKeyClick}
                />
            </div>
            <div>
                {isFocus && (
                    <SearchPopup
                        activeIndex={activeIndex}
                        onClickValue={handleChangeSearchValue}
                        searchedValues={searchedValues}
                        onMouseOver={handleMouseOver}
                        onMouseLeave={handleMouseLeave}
                    />
                )}
            </div>
        </div>
    )
}
