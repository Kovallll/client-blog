'use client'

import { memo, useRef } from 'react'
import { useTranslations } from 'use-intl'

import { commentGap, translate } from './config'
import styles from './styles.module.scss'

import { Article } from '@components/Article'
import AuthorCard from '@components/AuthorCard'
import { commentsData, icons } from '@constants'
import { PaginationDirection } from '@types'

const CommetsBlock = () => {
    const carouselRef = useRef(null)
    const t = useTranslations('HomePage')

    const { NextArrowIcon, PrevArrowIcon } = icons

    const paginationScroll = (direction: PaginationDirection) => {
        if (carouselRef.current) {
            const carousel = carouselRef.current as HTMLDivElement
            const px = direction === 'next' ? 1 : -1
            const scrollPosition = carousel.scrollLeft + px

            const itemWidth = carousel.offsetWidth + commentGap
            const itemIndex =
                direction === 'next'
                    ? Math.ceil(scrollPosition / itemWidth)
                    : Math.floor(scrollPosition / itemWidth)

            carousel.scrollTo({
                left: itemIndex * itemWidth,
                behavior: 'smooth',
            })
        }
    }

    const handleClickPrevButton = () => {
        paginationScroll('prev')
    }

    const handleClickNextButton = () => {
        paginationScroll('next')
    }

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
            <div className={styles.pagination}>
                <button
                    className={styles.prevArrow}
                    onClick={handleClickPrevButton}
                >
                    <PrevArrowIcon />
                </button>
                <button
                    className={styles.nextArrow}
                    onClick={handleClickNextButton}
                >
                    <NextArrowIcon />
                </button>
            </div>
        </div>
    )
}

export default memo(CommetsBlock)
