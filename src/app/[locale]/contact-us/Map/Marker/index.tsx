import styles from './styles.module.scss'
import { MarkerProps } from './types'

export const Marker = ({ country }: MarkerProps) => {
    return <button className={styles.marker}>{country.properties.title}</button>
}
