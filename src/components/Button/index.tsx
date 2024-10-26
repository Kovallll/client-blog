'use client'

import { memo } from 'react'
import classNames from 'classnames'

import styles from './styles.module.scss'
import { ButtonProps } from './types'

const Button = (props: ButtonProps) => {
    const { onClick, title, isWhiteBg, ...restProps } = props
    const className = classNames(styles.button, {
        [styles.whiteButton]: isWhiteBg,
    })

    return (
        <button {...restProps} onClick={onClick} className={className}>
            {title}
        </button>
    )
}

export default memo(Button)
