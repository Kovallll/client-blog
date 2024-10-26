import { ChangeEvent } from 'react'

import styles from './styles.module.scss'
import { InputProps } from './types'

export const Input = (props: InputProps) => {
    const { placeholder, error, onChange, onChangeInput, value, ...restProps } =
        props

    const handleChangeInput = (e: ChangeEvent<HTMLInputElement>) => {
        if (onChangeInput) {
            onChangeInput(e.target.value)
        }
        if (onChange) {
            onChange(e)
        }
    }

    return (
        <div className={styles.wrap}>
            {!onChangeInput && (
                <p className={styles.error}>{!!error && error}</p>
            )}
            <input
                {...restProps}
                placeholder={placeholder}
                className={styles.input}
                value={value}
                onChange={handleChangeInput}
            />
        </div>
    )
}
