import Image from 'next/image'

import { captionBoldText, captionText } from './config'
import { ReadMoreButton } from './ReadMoreButton'
import styles from './styles.module.scss'

import { Excerpt } from '@components/Excerpt'
import { homeStepByStepPost } from '@constants'

export const HeroBlock = () => {
    const { id, image, title, subtitle, excerpt } = homeStepByStepPost

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
        </div>
    )
}
