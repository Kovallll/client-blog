'use client'

import { memo, useRef, useState } from 'react'
import classNames from 'classnames'

import { Link } from 'src/i18n/routing'
import styles from './styles.module.scss'
import { BurgerMenuProps } from './types'

import { navigationLinks } from '@constants'
import { useClickOutside } from '@hooks'

const BurgerMenu = ({ navCount }: BurgerMenuProps) => {
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
                {navigationLinks.slice(0, navCount).map(({ title, path }) => (
                    <Link key={path} href={path} className={styles.link}>
                        {title}
                    </Link>
                ))}
            </div>
        </div>
    )
}

export default memo(BurgerMenu)
