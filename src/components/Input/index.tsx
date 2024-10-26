import styles from './styles.module.scss'
import { InputProps } from './types'

export const Input = ({ placeholder, error, ...props }: InputProps) => {
    return (
        <div className={styles.wrap}>
            <p className={styles.error}>{!!error && error}</p>
            <input
                {...props}
                placeholder={placeholder}
                className={styles.input}
            />
        </div>
    )
}
