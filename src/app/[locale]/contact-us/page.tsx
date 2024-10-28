import { caption, subtitle, title } from './config'
import { Form } from './Form'
import { Map } from './Map'
import styles from './page.module.scss'
import { WorkInfo } from './WorkInfo'

export default function Home() {
    return (
        <div className={styles.page}>
            <div className={styles.content}>
                <div className={styles.head}>
                    <p className={styles.caption}>{caption}</p>
                    <p className={styles.title}>{title}</p>
                    <p className={styles.subtitle}>{subtitle}</p>
                </div>
                <WorkInfo />
                <Form />
            </div>
            <Map />
        </div>
    )
}
