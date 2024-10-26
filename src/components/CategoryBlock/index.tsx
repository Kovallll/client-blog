import classNames from 'classnames'

import styles from './styles.module.scss'
import { CategoryBlockProps } from './types'

import CategoryCard from '@components/CategoryCard'
import { categoriesData } from '@constants'

const CategoryBlock = ({ title, className }: CategoryBlockProps) => {
    const style = classNames(
        styles.container,
        className ? styles[className] : ''
    )

    return (
        <section className={style}>
            <h2 className={styles.title}>{title}</h2>
            <div className={styles.categories}>
                {categoriesData.map(({ subtitle, category }) => (
                    <CategoryCard category={category} subtitle={subtitle} />
                ))}
            </div>
        </section>
    )
}

export default CategoryBlock
