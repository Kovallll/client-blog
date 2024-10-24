import styles from './styles.module.scss'

import { AuthorCard } from '@components/AuthorCard'
import { authorsData } from '@constants'

export const AuthorsList = () => {
    return (
        <section className={styles.container}>
            <h2 className={styles.title}>List of Authors</h2>
            <div className={styles.authors}>
                {authorsData
                    .slice(0, 4)
                    .map(({ id, avatarUrl, fullName, description }) => (
                        <AuthorCard
                            key={id}
                            avatarUrl={avatarUrl}
                            fullName={fullName}
                            subtitle={description}
                        />
                    ))}
            </div>
        </section>
    )
}
