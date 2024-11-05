import { useCallback, useEffect, useRef, useState } from 'react'

import { unActiveIndex } from '@components/Search/config'

export const useSearch = (
    searchValue: string,
    handleChangeSearchValue: (value: string) => void,
    allValues: string[]
) => {
    const [isFocus, setIsFocus] = useState(false)
    const [activeIndex, setActiveIndex] = useState(0)
    const [prevSearchValue, setPrevSearchValue] = useState(searchValue)
    const [searchedValues, setSearchedValues] = useState(allValues)

    const searchRef = useRef(null)

    const searchPopup = searchRef.current as HTMLElement | null

    useEffect(() => {
        if (prevSearchValue !== searchValue) {
            setActiveIndex(0)
            setSearchedValues(
                allValues.filter((tag) =>
                    tag
                        .toLocaleLowerCase()
                        .includes(searchValue.toLocaleLowerCase())
                )
            )
            setPrevSearchValue(searchValue)
        }
    }, [allValues, prevSearchValue, searchValue])

    const handleChangeFocus = useCallback((isFocus: boolean) => {
        setIsFocus(isFocus)
        setActiveIndex(0)
    }, [])

    const handleKeyEnter = useCallback(() => {
        handleChangeSearchValue(searchedValues[activeIndex])
    }, [activeIndex, handleChangeSearchValue, searchedValues])

    const handleKeyUp = useCallback(
        (scrollValue: number, countVisibleElements: number) => {
            if (activeIndex === 0) {
                setActiveIndex(searchedValues.length - 1)
                searchPopup?.scrollBy(
                    0,
                    (searchedValues.length - countVisibleElements) * scrollValue
                )
            } else {
                setActiveIndex((prev) => (prev -= 1))
                if (
                    activeIndex <=
                    searchedValues.length - countVisibleElements
                ) {
                    searchPopup?.scrollBy(0, -scrollValue)
                }
            }
        },
        [activeIndex, searchPopup, searchedValues.length]
    )

    const handleKeyDown = useCallback(
        (scrollValue: number, countVisibleElements: number) => {
            if (activeIndex === searchedValues.length - 1) {
                setActiveIndex(0)
                searchPopup?.scrollBy(0, -searchedValues.length * scrollValue)
            } else {
                setActiveIndex((prev) => (prev += 1))
                if (activeIndex + 1 >= countVisibleElements) {
                    searchPopup?.scrollBy(0, scrollValue)
                }
            }
        },
        [activeIndex, searchPopup, searchedValues.length]
    )

    const handleKeyClick = useCallback(
        (event: React.KeyboardEvent<HTMLInputElement>) => {
            const scrollValue = (searchPopup?.childNodes[0] as HTMLElement)
                ?.offsetHeight

            const countVisibleElements =
                (searchPopup?.offsetHeight ?? 0) / scrollValue

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
        },
        [
            activeIndex,
            handleKeyDown,
            handleKeyEnter,
            handleKeyUp,
            searchPopup?.childNodes,
            searchPopup?.offsetHeight,
            searchedValues.length,
        ]
    )

    const handleMouseOver = useCallback(() => {
        setActiveIndex(unActiveIndex)
    }, [])

    const handleMouseLeave = useCallback(() => {
        setActiveIndex(0)
    }, [])

    return {
        searchedValues,
        activeIndex,
        isFocus,
        searchRef,
        handleMouseOver,
        handleMouseLeave,
        handleKeyClick,
        handleChangeFocus,
    }
}
