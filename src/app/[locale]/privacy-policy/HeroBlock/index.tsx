import { subtitle, title } from './config'
import styles from './styles.module.scss'

export const HeroBlock = () => {
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>{title}</h1>
            <h1 className={styles.subtitle}>{subtitle}</h1>
        </div>
    )
}
