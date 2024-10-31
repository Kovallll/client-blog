'use client'

import { useTranslations } from 'next-intl'

import { Link } from 'src/i18n/routing'
import { className } from './config'
import styles from './styles.module.scss'

import { Article } from '@components/Article'
import ColorsLines from '@components/ColorsLines'
import { Paths } from '@constants'
import { AboutUsProps } from '@types'

const AboutUsBlock = (props: AboutUsProps) => {
    const { translate, withLine } = props
    const t = useTranslations(`AboutUsBlock.${translate}`)

    return (
        <section className={styles.container}>
            {withLine && <ColorsLines isYellowFirts={true} />}
            <div className={styles.content}>
                <div className={styles.about}>
                    <Article translate={translate} numberCard={1} />
                    <div className={styles.link}>
                        <Link href={Paths.AboutUs}>{t('buttonTitle')}</Link>
                    </div>
                </div>
                <div className={styles.mision}>
                    <Article
                        translate={translate}
                        numberCard={2}
                        className={className}
                    />
                </div>
            </div>
        </section>
    )
}

export default AboutUsBlock
