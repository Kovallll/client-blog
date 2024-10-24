import styles from './styles.module.scss'
import { PostInfoProps } from './types'

export const PostInfo = ({ postInfoData }: PostInfoProps) => {
    const { textData, title, listData } = postInfoData

    const textLength = textData.length

    if (listData) {
        return (
            <>
                <p className={styles.infoTitle}>{title}</p>
                {textData.slice(0, textLength - 2).map((text) => (
                    <p className={styles.infoText}>{text}</p>
                ))}
                {listData.map((list) => (
                    <p className={styles.infoList}>&#x2022; {list}</p>
                ))}
                <p className={styles.infoText}>{textData[textLength - 1]}</p>
            </>
        )
    }

    return (
        <>
            <p className={styles.infoTitle}>{title}</p>
            {textData.map((text) => (
                <p className={styles.infoText}>{text}</p>
            ))}
        </>
    )
}
