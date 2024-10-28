import { allPosts, allTags, authorsData } from '@constants'

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
    return allPosts.filter(
        (post) => post.category === currentCategory.toUpperCase()
    )
}

export const getAuthorPosts = (authorId: string) => {
    return allPosts.filter((post) => post.author.id === authorId)
}

export const getAuthorData = (authorId: string) => {
    return authorsData.find((author) => author.id === authorId)!
}
