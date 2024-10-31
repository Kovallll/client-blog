'use client'

import classNames from 'classnames'
import { useTranslations } from 'next-intl'

import { activeClassName, className } from './config'
import styles from './styles.module.scss'
import { Tag } from './Tag'
import { CategoriesProps } from './types'

import Button from '@components/Button'
import CategoryCard from '@components/CategoryCard'
import { Search } from '@components/Search'
import { categoriesData } from '@constants'
import { getPairsTags } from '@utils'

export const CategoriesBlock = ({
    currentCategory,
    isOpenSidebar,
    searchTag,
    handleChangeSearchTag,
    handleSearchTag,
}: CategoriesProps) => {
    const pairsTags = getPairsTags()

    const t = useTranslations('CategoryPage')
    const tCategory = useTranslations('Category')

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
                    <Button
                        title={t('categoryButtonTitle')}
                        onClick={handleClickButton}
                    />
                </div>
            </div>
            <div className={styles.categories} data-testid='category-cards'>
                <p className={styles.title}>{t('categoriesTitle')}</p>
                {categoriesData.map(({ id, category, Icon }) => {
                    const categoryTitle = tCategory(
                        `categories.${Number(id) - 1}.category`
                    )
                    const style =
                        category === currentCategory
                            ? `${className}${activeClassName}`
                            : className

                    return (
                        <CategoryCard
                            id={id}
                            key={id}
                            category={categoryTitle}
                            className={style}
                            Icon={Icon}
                        />
                    )
                })}
            </div>
            <div className={styles.allTags}>
                <p className={styles.title}>{t('tagsTitle')}</p>
                <div className={styles.tags} data-testid='category-tags'>
                    {pairsTags.map((pairTags, index) => (
                        <div className={styles.pairTags} key={index}>
                            <Tag
                                tag={pairTags[0]}
                                handleClickTag={handleClickTag}
                                isActive={
                                    searchTag === t(`tags.${pairTags[0]}`)
                                }
                            />
                            {pairTags[1] && (
                                <Tag
                                    tag={pairTags[1]}
                                    handleClickTag={handleClickTag}
                                    isActive={
                                        searchTag === t(`tags.${pairTags[1]}`)
                                    }
                                />
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
