import {
    contactId,
    contactTitle,
    date,
    email,
    text,
    time,
    workTitle,
} from './config'
import styles from './styles.module.scss'

export const WorkInfo = () => {
    return (
        <div className={styles.container}>
            <div className={styles.work}>
                <p className={styles.title}>{workTitle}</p>
                <div className={styles.info}>
                    <p className={styles.caption}>{date}</p>
                    <p className={styles.caption}>{time}</p>
                    <p className={styles.text}>{text}</p>
                </div>
            </div>
            <div className={styles.contact}>
                <p className={styles.title}>{contactTitle}</p>
                <div className={styles.info}>
                    <p className={styles.caption}>{contactId}</p>
                    <p className={styles.text}>{email}</p>
                </div>
            </div>
        </div>
    )
}
