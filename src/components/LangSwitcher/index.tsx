'use client'
import { ChangeEvent, memo, useState } from 'react'
import { useRouter } from 'next/navigation'
import { useLocale } from 'next-intl'

import { usePathname } from 'src/i18n/routing'
import { en, ru } from './config'
import styles from './styles.module.scss'

const LangSwitcher = () => {
    const [isRuSelected, setIsRuSelected] = useState(false)
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
            setIsRuSelected(false)
        } else {
            router.push(`/ru${cleanedPathName}`)
            setIsRuSelected(true)
        }
    }

    return (
        <select
            className={styles.select}
            onChange={handleLanguageChange}
            defaultValue={locale}
            data-testid="lang-selectt"
            aria-label="language"
        >
            <option selected={isRuSelected} value="ru">
                {ru}
            </option>
            <option selected={!isRuSelected} value="en">
                {en}
            </option>
        </select>
    )
}

export default memo(LangSwitcher)
