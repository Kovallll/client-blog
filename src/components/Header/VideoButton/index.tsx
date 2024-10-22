'use client'

import { useState } from 'react'

import { buttonTitle } from '../config'
import styles from './styles.module.scss'

import { Button } from '@components/Button'
import Modal from '@components/Modal'

export const VideoButton = () => {
    const [isVideoOpen, setIsVideoOpen] = useState(false)

    const handleClickVideoButton = () => {
        setIsVideoOpen((prev) => !prev)
    }

    return (
        <>
            <Button
                isWhiteBg={true}
                onClick={handleClickVideoButton}
                title={buttonTitle}
            />
            {isVideoOpen && (
                <Modal onCloseModal={handleClickVideoButton}>
                    <video controls className={styles.video}>
                        <source src="/video/modsenIntro.mp4" type="video/mp4" />
                    </video>
                </Modal>
            )}
        </>
    )
}
