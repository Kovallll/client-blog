import { memo, useRef } from 'react'
import { createPortal } from 'react-dom'

import { closeAltText } from './config'
import styles from './styles.module.scss'
import { ModalProps } from './types'

import { icons } from '@constants'
import { useClickOutside } from '@hooks'

const Modal = ({ onCloseModal, children }: ModalProps) => {
    const modalRef = useRef(null)
    useClickOutside(modalRef, () => onCloseModal())

    const CloseIcon = icons.CloseIcon

    return createPortal(
        <div className={styles.container}>
            <div className={styles.window} ref={modalRef}>
                <button onClick={onCloseModal} className={styles.closeButton}>
                    <CloseIcon title={closeAltText} className={styles.img} />
                </button>
                {children}
            </div>
        </div>,
        document.body
    )
}

export default memo(Modal)
