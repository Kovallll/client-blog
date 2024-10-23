import styles from './styles.module.scss'

import { AuthorCard } from '@components/AuthorCard'
import { authorsData } from '@constants'

export const AuthorsList = () => {
    return (
        <section className={styles.container}>
            <h2 className={styles.title}>List of Authors</h2>
            <div className={styles.authors}>
                {authorsData.map(({ id, avatarUrl, fullName, subtitle }) => (
                    <AuthorCard
                        key={id}
                        avatarUrl={avatarUrl}
                        fullName={fullName}
                        subtitle={subtitle}
                    />
                ))}
            </div>
        </section>
    )
}
