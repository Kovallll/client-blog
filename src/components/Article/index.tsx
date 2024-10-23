import classNames from 'classnames'

import styles from './styles.module.scss'
import { ArticleProps } from './types'

export const Article = ({
    caption,
    title,
    subtitle,
    className,
}: ArticleProps) => {
    const style = classNames(
        styles.container,
        className ? styles[className] : ''
    )
    return (
        <article className={style}>
            {caption && <p className={styles.caption}>{caption}</p>}
            <p className={styles.title}>{title}</p>
            <p className={styles.subtitle}>{subtitle}</p>
        </article>
    )
}
