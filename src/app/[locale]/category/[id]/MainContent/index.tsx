'use client'

import { useRef, useState } from 'react'
import { useParams } from 'next/navigation'
import { useTranslations } from 'use-intl'

import { CategoriesBlock } from '../CategoriesBlock'
import {
    className,
    postsOnPage,
    sidebarWidth,
    verticalCardWidth,
} from './config'
import styles from './styles.module.scss'

import Button from '@components/Button'
import PostCard from '@components/PostCard'
import { categoriesData } from '@constants'
import { useClickOutside, useSearchPosts, useWindowSize } from '@hooks'

export const MainContent = () => {
    const { id } = useParams()

    const { category } = categoriesData.find((category) => category.id === id)!

    const [isOpenSidebar, setIsOpenSidebar] = useState(false)
    const { posts, searchTag, handleSearchTag, handleChangeSearchTag } =
        useSearchPosts(category)

    const sidebarRef = useRef(null)

    const tPosts = useTranslations('Posts')
    const t = useTranslations('CategoryPage')

    const { width } = useWindowSize()

    useClickOutside(sidebarRef, () => {
        setIsOpenSidebar(false)
    })

    const isSidebar = width <= sidebarWidth
    const isVerticalCard = width <= verticalCardWidth

    const handleChangeIsOpenSidebar = () => {
        setIsOpenSidebar((prev) => !prev)
    }

    return (
        <div className={styles.container}>
            <div className={styles.posts}>
                {posts.length !== 0 ? (
                    posts
                        .slice(0, postsOnPage)
                        .map(({ id, image }) => (
                            <PostCard
                                key={id}
                                excerpt={(colors) =>
                                    tPosts.rich(
                                        `${Number(id) - 1}.excerptChunk`,
                                        colors
                                    )
                                }
                                id={id}
                                title={tPosts(`${Number(id) - 1}.title`)}
                                image={image}
                                subtitle={tPosts(`${Number(id) - 1}.subtitle`)}
                                className={className}
                                verticalCard={isVerticalCard}
                            />
                        ))
                ) : (
                    <p className={styles.noPosts}>{t('noPostsText')}</p>
                )}
            </div>
            <div ref={sidebarRef}>
                <CategoriesBlock
                    currentCategory={category}
                    isOpenSidebar={isOpenSidebar}
                    searchTag={searchTag}
                    handleChangeSearchTag={handleChangeSearchTag}
                    handleSearchTag={handleSearchTag}
                />
                {isSidebar && (
                    <div className={styles.sidebarButton}>
                        <Button
                            title={t('categoryButtonTitle')}
                            onClick={handleChangeIsOpenSidebar}
                        />
                    </div>
                )}
            </div>
        </div>
    )
}
