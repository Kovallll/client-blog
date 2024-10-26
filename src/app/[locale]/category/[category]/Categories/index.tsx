'use client'

import classNames from 'classnames'

import {
    activeClassName,
    buttonTitle,
    categoriesTitle,
    className,
    tagsTitle,
} from './config'
import styles from './styles.module.scss'
import { Tag } from './Tag'
import { CategoriesProps } from './types'

import Button from '@components/Button'
import CategoryCard from '@components/CategoryCard'
import { Search } from '@components/Search'
import { categoriesData } from '@constants'
import { getPairsTags } from '@utils'

export const Categories = ({
    currentCategory,
    isOpenSidebar,
    searchTag,
    handleChangeSearchTag,
    handleSearchTag,
}: CategoriesProps) => {
    const pairsTags = getPairsTags()

    const handleClickTag = (value: string) => {
        handleChangeSearchTag(value)
        handleSearchTag(value)
    }

    const handleClickButton = () => {
        handleSearchTag(searchTag)
    }

    const style = classNames(styles.container, styles.closeSidebar, {
        [styles.openSidebar]: isOpenSidebar,
    })

    return (
        <div className={style}>
            <div className={styles.search}>
                <Search
                    searchValue={searchTag}
                    handleChangeSearchValue={handleChangeSearchTag}
                />
                <div className={styles.button}>
                    <Button title={buttonTitle} onClick={handleClickButton} />
                </div>
            </div>
            <div className={styles.categories}>
                <p className={styles.title}>{categoriesTitle}</p>
                {categoriesData.map(({ category }) => (
                    <CategoryCard
                        category={category}
                        className={
                            category.toLowerCase() === currentCategory
                                ? `${className}${activeClassName}`
                                : className
                        }
                    />
                ))}
            </div>
            <div className={styles.allTags}>
                <p className={styles.title}>{tagsTitle}</p>
                <div className={styles.tags}>
                    {pairsTags.map((pairTags) => (
                        <div className={styles.pairTags}>
                            <Tag
                                tag={pairTags[0]}
                                handleClickTag={handleClickTag}
                                isActive={searchTag === pairTags[0]}
                            />
                            {pairTags[1] && (
                                <Tag
                                    tag={pairTags[1]}
                                    handleClickTag={handleClickTag}
                                    isActive={searchTag === pairTags[1]}
                                />
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
