import Image from 'next/image'
import { useTranslations } from 'next-intl'

import { ReadMoreButton } from './ReadMoreButton'
import styles from './styles.module.scss'

import { Excerpt } from '@components/Excerpt'
import { homeStepByStepPost } from '@constants'

export const HeroBlock = () => {
    const { id, image } = homeStepByStepPost
    const t = useTranslations('HomePage')

    return (
        <div className={styles.container}>
            {image && (
                <Image
                    width={1440}
                    height={720}
                    alt={image?.altText}
                    src={image?.imageUrl}
                    className={styles.image}
                />
            )}
            <div className={styles.overlay}></div>
            <div className={styles.content}>
                <p className={styles.caption}>
                    {t('captionText')}
                    <span className={styles.captionBold}>
                        {t('captionBoldText')}
                    </span>
                </p>
                <p className={styles.title}>{t('heroTitle')}</p>
                <div className={styles.publicationInfo}>
                    <Excerpt>
                        {(colors) => t.rich('heroExcerpt', colors)}
                    </Excerpt>
                </div>
                <p className={styles.subtitle}>{t('heroSubtitle')}</p>
                <ReadMoreButton id={id} />
            </div>
        </div>
    )
}
