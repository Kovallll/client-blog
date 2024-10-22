import classNames from 'classnames'

import styles from './styles.module.scss'
import { ButtonProps } from './types'

export const Button = (props: ButtonProps) => {
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
