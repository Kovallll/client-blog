import { Link } from 'src/i18n/routing'
import { logoTitle } from './config'
import styles from './styles.module.scss'
import { VideoButton } from './VideoButton'

import { BurgerMenu } from '@components/BurgerMenu'
import { navigationLinks } from '@constants'

export const Header = () => {
    return (
        <header className={styles.header}>
            <p className={styles.title}>{logoTitle}</p>

            <div className={styles.content}>
                <nav className={styles.nav}>
                    {navigationLinks.map(({ title, path }) => (
                        <Link key={path} className={styles.link} href={path}>
                            {title}
                        </Link>
                    ))}
                </nav>
                <BurgerMenu />
                <VideoButton />
            </div>
        </header>
    )
}
