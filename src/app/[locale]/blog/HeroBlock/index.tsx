import Image from 'next/image'
import { useTranslations } from 'next-intl'

import styles from './styles.module.scss'

import { Excerpt } from '@components/Excerpt'
import { blogStepByStepPost } from '@constants'
import { ReadMoreButton } from '@pages/home/HeroBlock/ReadMoreButton'

export const HeroBlock = () => {
    const { id, image } = blogStepByStepPost

    const t = useTranslations('Blog')

    return (
        <div className={styles.container}>
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
            {image && (
                <Image
                    width={520}
                    height={360}
                    alt={image?.altText}
                    src={image?.imageUrl}
                    className={styles.image}
                />
            )}
        </div>
    )
}
