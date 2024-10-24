import styles from './styles.module.scss'
import { ReadNextProps } from './types'

import { PostCard } from '@components/PostCard'
import { allPosts } from '@constants'

const postsOnPage = 3

export const ReadNext = ({ post: currentPost }: ReadNextProps) => {
    const categoryPosts = allPosts
        .map((post) => {
            if (
                post.category === currentPost.category &&
                post.id !== currentPost.id
            ) {
                return post
            }
        })
        .filter((post) => post !== undefined)

    return (
        <div className={styles.container}>
            <h2 className={styles.title}>What to read next</h2>
            <div className={styles.posts}>
                {categoryPosts
                    .slice(0, postsOnPage)
                    .map(({ excerpt, id, title, image, subtitle }) => (
                        <PostCard
                            key={id}
                            excerpt={excerpt}
                            id={id}
                            title={title}
                            image={image}
                            subtitle={subtitle}
                            verticalCard={true}
                            className="blogPost"
                        />
                    ))}
            </div>
        </div>
    )
}
