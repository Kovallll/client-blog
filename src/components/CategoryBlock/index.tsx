import classNames from 'classnames'
import { useTranslations } from 'use-intl'

import styles from './styles.module.scss'
import { CategoryBlockProps } from './types'

import CategoryCard from '@components/CategoryCard'
import { categoriesData } from '@constants'

const CategoryBlock = ({ title, className }: CategoryBlockProps) => {
    const t = useTranslations('Category')

    const style = classNames(
        styles.container,
        className ? styles[className] : ''
    )

    return (
        <section className={style}>
            <h2 className={styles.title}>{title}</h2>
            <div className={styles.categories}>
                {categoriesData.map(({ id, Icon }) => {
                    const category = t(`categories.${Number(id) - 1}.category`)
                    const subtitle = t(`categories.${Number(id) - 1}.subtitle`)

                    return (
                        <CategoryCard
                            id={id}
                            key={id}
                            category={category}
                            subtitle={subtitle}
                            Icon={Icon}
                        />
                    )
                })}
            </div>
        </section>
    )
}

export default CategoryBlock
