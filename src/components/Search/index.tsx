'use client'

import { useEffect, useRef, useState } from 'react'

import { placeholder, unActiveIndex } from './config'
import { SearchPopup } from './SearchPopup'
import styles from './styles.module.scss'
import { SearchProps } from './types'

import { Input } from '@components/Input'
import { allTags } from '@constants'
import { useClickOutside } from '@hooks'

export const Search = ({
    searchValue,
    handleChangeSearchValue,
}: SearchProps) => {
    const [isFocus, setIsFocus] = useState(false)
    const [activeIndex, setActiveIndex] = useState(0)
    const [prevSearchValue, setPrevSearchValue] = useState(searchValue)
    const [searchedValues, setSearchedValues] = useState(allTags)

    const popupRef = useRef(null)
    const searchRef = useRef(null)

    const popup = popupRef.current as HTMLElement | null

    useClickOutside(searchRef, () => setIsFocus(false))

    useEffect(() => {
        if (prevSearchValue !== searchValue) {
            setActiveIndex(0)
            setSearchedValues(
                allTags.filter((tag) =>
                    tag
                        .toLocaleLowerCase()
                        .includes(searchValue.toLocaleLowerCase())
                )
            )
            setPrevSearchValue(searchValue)
        }
    }, [prevSearchValue, searchValue])

    const handleFocusInput = () => {
        setIsFocus(true)
        setActiveIndex(0)
    }

    const handleKeyEnter = () => {
        handleChangeSearchValue(searchedValues[activeIndex])
    }

    const handleKeyUp = (scrollValue: number, countVisibleElements: number) => {
        if (activeIndex === 0) {
            setActiveIndex(searchedValues.length - 1)
            popup?.scrollBy(
                0,
                (searchedValues.length - countVisibleElements) * scrollValue
            )
        } else {
            setActiveIndex((prev) => (prev -= 1))
            if (activeIndex <= searchedValues.length - countVisibleElements) {
                popup?.scrollBy(0, -scrollValue)
            }
        }
    }

    const handleKeyDown = (
        scrollValue: number,
        countVisibleElements: number
    ) => {
        console.log('asdass')
        if (activeIndex === searchedValues.length - 1) {
            setActiveIndex(0)
            popup?.scrollBy(0, -searchedValues.length * scrollValue)
        } else {
            setActiveIndex((prev) => (prev += 1))
            if (activeIndex + 1 >= countVisibleElements) {
                popup?.scrollBy(0, scrollValue)
            }
        }
    }

    const handleKeyClick = (event: React.KeyboardEvent<HTMLInputElement>) => {
        const scrollValue = (popup?.childNodes[0] as HTMLElement).offsetHeight

        const countVisibleElements = (popup?.offsetHeight ?? 0) / scrollValue

        if (event.key === 'ArrowUp' && activeIndex >= 0) {
            handleKeyUp(scrollValue, countVisibleElements)
        }
        if (
            event.key === 'ArrowDown' &&
            activeIndex <= searchedValues.length - 1
        ) {
            handleKeyDown(scrollValue, countVisibleElements)
        }
        if (event.key === 'Enter') {
            handleKeyEnter()
        }
    }

    const handleMouseOver = () => {
        setActiveIndex(unActiveIndex)
    }

    const handleMouseLeave = () => {
        setActiveIndex(0)
    }

    return (
        <div className={styles.search} ref={searchRef}>
            <div className={styles.input}>
                <Input
                    placeholder={placeholder}
                    value={searchValue}
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
