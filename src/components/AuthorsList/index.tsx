import { title } from './config'
import styles from './styles.module.scss'
import { AuthorsListProps } from './types'

import AuthorCard from '@components/AuthorCard'
import { authorsData } from '@constants'

const AuthorsList = ({ countAuthors }: AuthorsListProps) => {
    return (
        <section className={styles.container}>
            <h2 className={styles.title}>{title}</h2>
            <div className={styles.authors}>
                {authorsData.slice(0, countAuthors).map((author) => (
                    <AuthorCard key={author.id} author={author} />
                ))}
            </div>
        </section>
    )
}

export default AuthorsList
