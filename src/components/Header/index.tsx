import classNames from 'classnames'

import { Link } from 'src/i18n/routing'
import { logoTitle } from './config'
import styles from './styles.module.scss'
import { HeaderProps } from './types'
import { VideoButton } from './VideoButton'

import { BurgerMenu } from '@components/BurgerMenu'
import { navigationLinks } from '@constants'

export const Header = ({ withVideo = true, className }: HeaderProps) => {
    const headerStyles = classNames(
        styles.header,
        className ? styles[className] : ''
    )

    return (
        <header className={headerStyles}>
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
                {withVideo && <VideoButton />}
            </div>
        </header>
    )
}
