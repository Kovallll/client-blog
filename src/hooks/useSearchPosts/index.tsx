import { useCallback, useMemo, useState } from 'react'

import { allPosts } from '@constants'

export const useSearchPosts = (category: string) => {
    const getPostsByCategory = (currentCategory: string) => {
        return allPosts.filter(
            (post) => post.category === currentCategory.toUpperCase()
        )
    }

    const [searchTag, setSearchTag] = useState('')
    const [posts, setPosts] = useState(getPostsByCategory(category))

    const categoryPosts = useMemo(
        () => getPostsByCategory(category),
        [category]
    )

    const handleChangeSearchTag = useCallback((value: string) => {
        setSearchTag(value)
    }, [])

    const handleSearchTag = useCallback(
        (searchValue: string) => {
            setPosts(
                categoryPosts.filter((post) => post.tags.includes(searchValue))
            )
        },
        [categoryPosts]
    )

    return { searchTag, posts, handleSearchTag, handleChangeSearchTag }
}
