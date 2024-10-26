import Image from 'next/image'

import { captionBoldText, captionText } from './config'
import styles from './styles.module.scss'

import { Excerpt } from '@components/Excerpt'
import { blogStepByStepPost } from '@constants'
import { ReadMoreButton } from '@pages/home/HeroBlock/ReadMoreButton'

export const HeroBlock = () => {
    const { id, image, title, subtitle, excerpt } = blogStepByStepPost

    return (
        <div className={styles.container}>
            <div className={styles.content}>
                <p className={styles.caption}>
                    {captionText}
                    <span className={styles.captionBold}>
                        {captionBoldText}
                    </span>
                </p>
                <p className={styles.title}>{title}</p>
                <div className={styles.publicationInfo}>
                    <Excerpt excerpt={excerpt} />
                </div>
                <p className={styles.subtitle}>{subtitle}</p>
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
