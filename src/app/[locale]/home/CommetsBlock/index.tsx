'use client'

import { memo, useRef } from 'react'
import { useTranslations } from 'use-intl'

import { translate } from './config'
import { Pagination } from './Pagination'
import styles from './styles.module.scss'

import { Article } from '@components/Article'
import AuthorCard from '@components/AuthorCard'
import { commentsData } from '@constants'

const CommetsBlock = () => {
    const carouselRef = useRef(null)
    const t = useTranslations('HomePage')

    return (
        <div className={styles.container}>
            <div className={styles.article}>
                <Article numberCard={1} translate={translate} />
            </div>
            <span className={styles.line}></span>
            <div className={styles.comments} ref={carouselRef}>
                {commentsData.map(({ author, id, location }) => (
                    <div className={styles.comment} key={id}>
                        <p className={styles.commetText}>{t('commentText')}</p>
                        <AuthorCard
                            author={author}
                            subtitle={location}
                            horizontalCard={true}
                        />
                    </div>
                ))}
            </div>
            <Pagination carouselRef={carouselRef} />
        </div>
    )
}

export default memo(CommetsBlock)
