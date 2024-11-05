import styles from './styles.module.scss'
import { ExcerptProps } from './types'

export const Excerpt = ({ children }: ExcerptProps) => {
    return (
        <p>
            {children({
                purple: (chunks) => (
                    <span className={styles.purple}>{chunks}</span>
                ),
                yellow: (chunks) => (
                    <span className={styles.yellow}>{chunks}</span>
                ),
                common: (chunks) => (
                    <span className={styles.common}>{chunks}</span>
                ),
            })}
        </p>
    )
}
