'use client'
import { useRef, useState } from 'react'
import classNames from 'classnames'

import { Link } from 'src/i18n/routing'
import styles from './styles.module.scss'

import { navigationLinks } from '@constants'
import { useClickOutside } from '@hooks'

export const BurgerMenu = () => {
    const [isOpen, setIsOpen] = useState<boolean>(false)
    const burgerRef = useRef(null)

    const handleClickBurgerMenu = () => {
        setIsOpen((prev) => !prev)
    }

    useClickOutside(burgerRef, () => {
        setIsOpen(false)
    })

    const navbarStyle = classNames(styles.navbar, {
        [styles.activeNavbar]: isOpen,
    })

    const lineStyle = classNames(styles.line, {
        [styles.activeLine]: isOpen,
    })

    return (
        <div className={styles.container} ref={burgerRef}>
            <div className={styles.menu} onClick={handleClickBurgerMenu}>
                <span className={lineStyle} />
                <span className={lineStyle} />
                <span className={lineStyle} />
            </div>
            <div className={navbarStyle}>
                {navigationLinks.map(({ title, path }) => (
                    <Link key={path} href={path} className={styles.link}>
                        {title}
                    </Link>
                ))}
            </div>
        </div>
    )
}
