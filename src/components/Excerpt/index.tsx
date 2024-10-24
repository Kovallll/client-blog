import styles from './styles.module.scss'
import { ExcerptProps } from './types'

export const Excerpt = ({ excerpt }: ExcerptProps) => {
    const { beforeText, highlightText, afterText, color = 'common' } = excerpt

    return (
        <p>
            {afterText}
            <span className={styles[color]}>{highlightText}</span>
            {beforeText}
        </p>
    )
}
