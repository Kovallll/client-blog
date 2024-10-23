import Link from 'next/link'

import styles from './styles.module.scss'

import { logoIcons } from '@constants'

export const FeaturedInBlock = () => {
    return (
        <div className={styles.container}>
            <h2 className={styles.title}>
                <span className={styles.topTitle}>We are</span> <br />
                <span className={styles.bottomTitile}>Featured in</span>
            </h2>
            <div className={styles.sponsors}>
                {logoIcons.map(({ icon, id }) => (
                    <Link key={id} href="/">
                        {icon}
                    </Link>
                ))}
            </div>
        </div>
    )
}
