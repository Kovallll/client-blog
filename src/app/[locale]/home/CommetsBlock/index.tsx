'use client'

import { memo, useRef } from 'react'

import { caption, commentGap, subtitle, title } from './config'
import styles from './styles.module.scss'

import { Article } from '@components/Article'
import AuthorCard  from '@components/AuthorCard'
import { commentsData, icons } from '@constants'
import { PaginationDirection } from '@types'

const CommetsBlock = () => {
    const carouselRef = useRef(null)

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
                <Article caption={caption} title={title} subtitle={subtitle} />
            </div>
            <span className={styles.line}></span>
            <div className={styles.comments} ref={carouselRef}>
                {commentsData.map(({ author, comment, id, location }) => (
                    <div className={styles.comment} key={id}>
                        <p className={styles.commetText}>{comment}</p>
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
