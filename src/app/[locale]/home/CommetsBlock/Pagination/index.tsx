import { commentGap } from '../config'
import styles from './styles.module.scss'
import { PaginationProps } from './types'

import { icons } from '@constants'
import { PaginationDirection } from '@types'

export const Pagination = ({ carouselRef }: PaginationProps) => {
    const paginationScroll = (direction: PaginationDirection) => {
        const carousel = carouselRef.current as HTMLDivElement
        if (carousel) {
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

    const { NextArrowIcon, PrevArrowIcon } = icons

    return (
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
    )
}
