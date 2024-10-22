import styles from './styles.module.scss'
import { InputProps } from './types'

export const Input = ({ placeholder }: InputProps) => {
    return <input placeholder={placeholder} className={styles.input} />
}
