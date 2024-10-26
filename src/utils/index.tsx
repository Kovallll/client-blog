import { allPosts, allTags } from '@constants'

export const getPairsTags = () => {
    const pairsTags = []

    for (let i = 0; i < allTags.length; i += 2) {
        if (allTags[i + 1]) pairsTags.push([allTags[i], allTags[i + 1]])
        else {
            pairsTags.push([allTags[i]])
        }
    }

    return pairsTags
}

export const getPostsByCategory = (currentCategory: string) => {
    return allPosts
        .map((post) => {
            if (post.category === currentCategory.toUpperCase()) {
                return post
            }
        })
        .filter((post) => post !== undefined)
}
