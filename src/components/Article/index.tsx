import classNames from 'classnames'
import { useTranslations } from 'next-intl'

import styles from './styles.module.scss'
import { ArticleProps } from './types'

export const Article = (props: ArticleProps) => {
    const { withCaption = true, translate, numberCard, className } = props

    const t = useTranslations(`Article.${translate}.${numberCard - 1}`)

    const style = classNames(
        styles.container,
        className ? styles[className] : ''
    )
    return (
        <article className={style}>
            {withCaption && <p className={styles.caption}>{t('caption')}</p>}
            <p className={styles.title}>{t('title')}</p>
            <p className={styles.subtitle}>{t('subtitle')}</p>
        </article>
    )
}
