import { useTranslations } from 'next-intl'

import styles from './styles.module.scss'
import { ContentBlockProps } from './types'

export const ContentBlock = ({ contentData, index }: ContentBlockProps) => {
    const { textData } = contentData

    const t = useTranslations('PrivacyPolicy')

    return (
        <div className={styles.container}>
            <p className={styles.title}>{t(`contentData.${index}.title`)}</p>
            {textData.map((_, id) => (
                <p className={styles.text} key={id}>
                    {t(`contentData.${index}.textData.${id}`)}
                </p>
            ))}
        </div>
    )
}
