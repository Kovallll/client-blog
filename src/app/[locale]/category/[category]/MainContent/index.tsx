'use client'

import { useRef, useState } from 'react'
import { useParams } from 'next/navigation'

import { Categories } from '../Categories'
import { buttonTitle } from '../Categories/config'
import {
    className,
    excerptColor,
    noPostsText,
    postsOnPage,
    sidebarWidth,
    verticalCardWidth,
} from './config'
import styles from './styles.module.scss'

import Button from '@components/Button'
import PostCard from '@components/PostCard'
import { useClickOutside, useWindowSize } from '@hooks'
import { getPostsByCategory } from '@utils'

export const MainContent = () => {
    const { category } = useParams()
    const currentCategory = category as string

    const [isOpenSidebar, setIsOpenSidebar] = useState(false)
    const [searchTag, setSearchTag] = useState('')
    const [posts, setPosts] = useState(getPostsByCategory(currentCategory))

    const sidebarRef = useRef(null)

    const { width } = useWindowSize()

    useClickOutside(sidebarRef, () => {
        setIsOpenSidebar(false)
    })

    const categoryPosts = getPostsByCategory(currentCategory)
    const isSidebar = width <= sidebarWidth
    const isVerticalCard = width <= verticalCardWidth

    const handleChangeSearchTag = (value: string) => {
        setSearchTag(value)
    }

    const handleChangeIsOpenSidebar = () => {
        setIsOpenSidebar((prev) => !prev)
    }

    const handleSearchTag = (searchValue: string) => {
        setPosts(
            categoryPosts.filter((post) => post.tags.includes(searchValue))
        )
    }

    return (
        <div className={styles.container}>
            <div className={styles.posts}>
                {posts.length !== 0 ? (
                    posts
                        .slice(0, postsOnPage)
                        .map(({ category, id, title, image, subtitle }) => (
                            <PostCard
                                key={id}
                                excerpt={{
                                    highlightText: category,
                                    color: excerptColor,
                                }}
                                id={id}
                                title={title}
                                image={image}
                                subtitle={subtitle}
                                className={className}
                                verticalCard={isVerticalCard}
                            />
                        ))
                ) : (
                    <p className={styles.noPosts}>{noPostsText}</p>
                )}
            </div>
            <div ref={sidebarRef}>
                <Categories
                    currentCategory={currentCategory}
                    isOpenSidebar={isOpenSidebar}
                    searchTag={searchTag}
                    handleChangeSearchTag={handleChangeSearchTag}
                    handleSearchTag={handleSearchTag}
                />
                {isSidebar && (
                    <div className={styles.sidebarButton}>
                        <Button
                            title={buttonTitle}
                            onClick={handleChangeIsOpenSidebar}
                        />
                    </div>
                )}
            </div>
        </div>
    )
}
