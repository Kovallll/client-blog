import { useTranslations } from 'next-intl'

import { Link } from 'src/i18n/routing'
import { className } from './config'
import styles from './styles.module.scss'

import { Article } from '@components/Article'
import ColorsLines from '@components/ColorsLines'
import { Paths } from '@constants'
import { AboutUsProps } from '@types'

const AboutUsBlock = (props: AboutUsProps) => {
    const { firstArticle, secondArticle, withLine } = props
    const t = useTranslations('Global')

    return (
        <section className={styles.container}>
            {withLine && <ColorsLines isYellowFirts={true} />}
            <div className={styles.content}>
                <div className={styles.about}>
                    <Article
                        caption={firstArticle.caption}
                        title={firstArticle.title}
                        subtitle={firstArticle.subtitle}
                    />
                    <div className={styles.link}>
                        <Link href={Paths.AboutUs}>{t('buttonTitle')}</Link>
                    </div>
                </div>
                <div className={styles.mision}>
                    <Article
                        caption={secondArticle.caption}
                        title={secondArticle.title}
                        subtitle={secondArticle.subtitle}
                        className={className}
                    />
                </div>
            </div>
        </section>
    )
}

export default AboutUsBlock
