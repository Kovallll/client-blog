import Link from 'next/link'
import { useTranslations } from 'next-intl'

import styles from './styles.module.scss'

import { logoIcons, Paths } from '@constants'

const FeaturedInBlock = () => {
    const t = useTranslations('HomePage')

    return (
        <div className={styles.container}>
            <h2 className={styles.title}>
                <span className={styles.topTitle}>
                    {t('featuredIn.topTitle')}
                </span>
                <br />
                <span className={styles.bottomTitile}>
                    {t('featuredIn.bottomTitle')}
                </span>
            </h2>
            <div className={styles.sponsors}>
                {logoIcons.map(({ icon, id }) => (
                    <Link key={id} href={Paths.Home}>
                        {icon}
                    </Link>
                ))}
            </div>
        </div>
    )
}

export default FeaturedInBlock
