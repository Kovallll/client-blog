'use client'

import { memo, useState } from 'react'
import { useTranslations } from 'use-intl'

import styles from './styles.module.scss'

import Button from '@components/Button'
import Modal from '@components/Modal'

const VideoButton = () => {
    const [isVideoOpen, setIsVideoOpen] = useState(false)
    const t = useTranslations('Header')

    const handleClickVideoButton = () => {
        setIsVideoOpen((prev) => !prev)
    }

    return (
        <>
            <Button
                isWhiteBg={true}
                onClick={handleClickVideoButton}
                title={t('buttonTitle')}
            />
            {isVideoOpen && (
                <Modal onCloseModal={handleClickVideoButton}>
                    <video controls autoPlay className={styles.video}>
                        <source src="/video/modsenIntro.mp4" type="video/mp4" />
                    </video>
                </Modal>
            )}
        </>
    )
}

export default memo(VideoButton)
