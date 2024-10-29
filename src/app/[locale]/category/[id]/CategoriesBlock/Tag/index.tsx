import classNames from 'classnames'
import { useTranslations } from 'next-intl'

import styles from './styles.module.scss'
import { TagProps } from './types'

export const Tag = ({ tag, handleClickTag, isActive }: TagProps) => {
    const t = useTranslations('CategoryPage')

    const onClickTag = () => {
        handleClickTag(tag)
    }

    const style = classNames(styles.tag, { [styles.active]: isActive })

    return (
        <p className={style} onClick={onClickTag}>
            {t(`tags.${tag}`)}
        </p>
    )
}
