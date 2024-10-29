'use client'
import { ChangeEvent, memo } from 'react'
import { useRouter } from 'next/navigation'
import { useLocale } from 'next-intl'

import { usePathname } from 'src/i18n/routing'
import { en, ru } from './config'
import styles from './styles.module.scss'

const LangSwitcher = () => {
    const router = useRouter()
    const pathName = usePathname()
    const locale = useLocale()

    const handleLanguageChange = (event: ChangeEvent<HTMLSelectElement>) => {
        const locale = event.target.value

        const cleanedPathName = pathName.startsWith('/')
            ? pathName
            : '/' + pathName
        if (locale === 'en') {
            router.push(`/en${cleanedPathName}`)
        } else {
            router.push(`/ru${cleanedPathName}`)
        }
    }

    return (
        <select
            className={styles.select}
            onChange={handleLanguageChange}
            defaultValue={locale}
        >
            <option value="ru">{en}</option>
            <option value="en">{ru}</option>
        </select>
    )
}

export default memo(LangSwitcher)
