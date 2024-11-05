import { ChangeEvent } from 'react'
import classNames from 'classnames'

import styles from './styles.module.scss'
import { InputProps } from './types'

export const Input = (props: InputProps) => {
    const {
        placeholder,
        error,
        onChange,
        onChangeInput,
        value,
        className,
        onFocusInput,
        ...restProps
    } = props

    const handleChangeInput = (e: ChangeEvent<HTMLInputElement>) => {
        if (onChangeInput) {
            onChangeInput(e.target.value)
        }
        if (onChange) {
            onChange(e)
        }
    }

    const handleFocus = () => {
        if (onFocusInput) onFocusInput(true)
    }

    const style = classNames(styles.wrap, className ? styles[className] : '')

    return (
        <div className={style}>
            {!onChangeInput && (
                <p className={styles.error}>{!!error && error}</p>
            )}
            <input
                {...restProps}
                onFocus={handleFocus}
                placeholder={placeholder}
                className={styles.input}
                value={value}
                onChange={handleChangeInput}
            />
        </div>
    )
}
