'use client'

import classNames from 'classnames'
import { useTranslations } from 'use-intl'

import { Link } from 'src/i18n/routing'
import { logoTitle } from './config'
import styles from './styles.module.scss'
import { HeaderProps } from './types'
import VideoButton from './VideoButton'

import BurgerMenu from '@components/BurgerMenu'
import LangSwitcher from '@components/LangSwitcher'
import { navigationLinks } from '@constants'

export const Header = (props: HeaderProps) => {
    const { withVideo = true, withPrivacy = false, className } = props

    const t = useTranslations('Header')

    const headerStyles = classNames(
        styles.header,
        className ? styles[className] : ''
    )

    const navCount = withPrivacy
        ? navigationLinks.length
        : navigationLinks.length - 1

    return (
        <header className={headerStyles}>
            <p className={styles.title}>{logoTitle}</p>

            <div className={styles.content}>
                <nav className={styles.nav}>
                    {navigationLinks.slice(0, navCount).map(({ path }) => (
                        <Link
                            key={path}
                            className={styles.link}
                            href={path}
                        >
                            {t(`nav.${path}`)}
                        </Link>
                    ))}
                </nav>
                <div className={styles.menu}>
                    <BurgerMenu navCount={navCount} />
                </div>
                <div className={styles.switcher}>
                    <LangSwitcher />
                </div>
                {withVideo && <VideoButton />}
            </div>
        </header>
    )
}
