import Link from 'next/link'

import { bottomTitle, topTitle } from './config'
import styles from './styles.module.scss'

import { logoIcons, Paths } from '@constants'

const FeaturedInBlock = () => {
    return (
        <div className={styles.container}>
            <h2 className={styles.title}>
                <span className={styles.topTitle}>{topTitle}</span> <br />
                <span className={styles.bottomTitile}>{bottomTitle}</span>
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
