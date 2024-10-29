'use client'

import { useRef } from 'react'
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
        popupRef,
        handleFocusInput,
        handleKeyClick,
        handleMouseLeave,
        handleMouseOver,
        handleChangeFocus,
    } = useSearch(searchValue, handleChangeSearchValue, allTags)

    const searchRef = useRef(null)

    const t = useTranslations('CategoryPage')
    useClickOutside(searchRef, () => handleChangeFocus(false))

    const value = searchValue ? t(`tags.${searchValue}`) : searchValue

    return (
        <div className={styles.search} ref={searchRef}>
            <div className={styles.input}>
                <Input
                    placeholder={t('searchPlaceholder')}
                    value={value}
                    onChangeInput={handleChangeSearchValue}
                    type="search"
                    onFocus={handleFocusInput}
                    onKeyDown={handleKeyClick}
                />
            </div>
            <div ref={popupRef}>
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
