import { useTranslations } from 'next-intl'

import styles from './styles.module.scss'
import { PostInfoProps } from './types'

export const PostInfo = ({ postInfoData, id, index }: PostInfoProps) => {
    const { textData, listData } = postInfoData
    const tPosts = useTranslations('Posts')

    const textLength = textData.length

    const title = tPosts(`${Number(id) - 1}.postInfo.${index}.title`)
    const getText = (i: number) => {
        return tPosts(`${Number(id) - 1}.postInfo.${index}.textData.${i}`)
    }
    const getList = (i: number) => {
        return tPosts(`${Number(id) - 1}.postInfo.${index}.listData.${i}`)
    }

    if (listData) {
        return (
            <>
                <p className={styles.infoTitle}>{title}</p>
                {textData.slice(0, textLength - 2).map((_, i) => (
                    <p className={styles.infoText} key={i}>
                        {getText(i)}
                    </p>
                ))}
                {listData.map((_, i) => (
                    <p className={styles.infoList} key={i}>
                        &#x2022; {getList(i)}
                    </p>
                ))}
                <p className={styles.infoText}>{getText(textLength - 1)}</p>
            </>
        )
    }

    return (
        <>
            <p className={styles.infoTitle}>{title}</p>
            {textData.map((_, i) => (
                <p className={styles.infoText} key={i}>
                    {getText(i)}
                </p>
            ))}
        </>
    )
}
