import classNames from 'classnames'
import { useTranslations } from 'next-intl'

import styles from './styles.module.scss'
import { CategoryBlockProps } from './types'

import CategoryCard from '@components/CategoryCard'
import { categoriesData } from '@constants'

const CategoryBlock = ({ translate, className }: CategoryBlockProps) => {
    const tPage = useTranslations(`CategoryBlock.${translate}`)

    const style = classNames(
        styles.container,
        className ? styles[className] : ''
    )

    return (
        <section className={style}>
            <h2 className={styles.title}>{tPage('title')}</h2>
            <div className={styles.categories} data-testid="categories">
                {categoriesData.map(({ id, Icon }) => {
                    return (
                        <CategoryCard
                            id={id}
                            key={id}
                            Icon={Icon}
                        />
                    )
                })}
            </div>
        </section>
    )
}

export default CategoryBlock
