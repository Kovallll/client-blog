import { useCallback, useState } from 'react'

import { PaginationDirection, PostData } from '@types'

export const usePostPagination = (
    postsOnPage: number,
    postsData: PostData[]
) => {
    const [posts, setPosts] = useState(postsData.slice(0, postsOnPage))
    const [postsPage, setPostsPage] = useState(1)

    const paginationSwap = useCallback(
        (direction: PaginationDirection, countPosts: number) => {
            const pageSwap = direction === 'next' ? 1 : -1
            setPostsPage((prev) => (prev += pageSwap))

            const startSlice =
                direction === 'next' ? countPosts : countPosts - postsOnPage
            const endSlice =
                direction === 'next' ? countPosts + postsOnPage : countPosts

            const newPosts = postsData.slice(startSlice, endSlice)
            setPosts(newPosts)
        },
        [postsData, postsOnPage]
    )

    const handleClickNextButton = useCallback(() => {
        const countPosts = postsPage * postsOnPage
        paginationSwap('next', countPosts)
    }, [paginationSwap, postsOnPage, postsPage])

    const handleClickPrevButton = useCallback(() => {
        const countPosts = (postsPage - 1) * postsOnPage
        paginationSwap('prev', countPosts)
    }, [paginationSwap, postsOnPage, postsPage])

    return { posts, postsPage, handleClickNextButton, handleClickPrevButton }
}
