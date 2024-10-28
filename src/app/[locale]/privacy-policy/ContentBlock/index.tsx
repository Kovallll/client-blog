import styles from './styles.module.scss'
import { ContentBlockProps } from './types'

export const ContentBlock = ({ contentData }: ContentBlockProps) => {
    const { textData, title } = contentData

    return (
        <div className={styles.container}>
            <p className={styles.title}>{title}</p>
            {textData.map((text) => (
                <p className={styles.text}>{text}</p>
            ))}
        </div>
    )
}
