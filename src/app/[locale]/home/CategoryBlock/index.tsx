import styles from './styles.module.scss'

import { CategoryCard } from '@components/CategoryCard'
import { categoryData } from '@constants'

export const CategoryBlock = () => {
    return (
        <section className={styles.container}>
            <h2 className={styles.title}>Choose A Catagory</h2>
            <div className={styles.categories}>
                {categoryData.map(({ Icon, subtitle, title }) => (
                    <CategoryCard
                        Icon={Icon}
                        title={title}
                        subtitle={subtitle}
                    />
                ))}
            </div>
        </section>
    )
}
