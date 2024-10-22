import classNames from 'classnames/bind'

import styles from './styles.module.scss'
import { ButtonProps } from './types'

const cx = classNames.bind(styles)

export const Button = (props: ButtonProps) => {
    const { onClick, title, isWhiteBg, ...restProps } = props
    const className = cx({ button: true, whiteButton: isWhiteBg })

    return (
        <button {...restProps} onClick={onClick} className={className}>
            {title}
        </button>
    )
}
