import Link from 'next/link'

import { bottomText, topText } from './config'
import styles from './styles.module.scss'

import { socialLinks } from '@constants'

export const FooterInfoBlock = () => {
    return (
        <div className={styles.info}>
            <p className={styles.text}>
                {topText} <br />
                {bottomText}
            </p>
            <div className={styles.social}>
                {socialLinks.map(({ icon, path }) => (
                    <Link href={path} key={path} className={styles.link}>
                        {icon}
                    </Link>
                ))}
            </div>
        </div>
    )
}
