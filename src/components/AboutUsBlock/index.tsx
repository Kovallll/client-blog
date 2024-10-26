import { Link } from 'src/i18n/routing'
import { className, linkText } from './config'
import styles from './styles.module.scss'

import { Article } from '@components/Article'
import ColorsLines from '@components/ColorsLines'
import { Paths } from '@constants'
import { AboutUsProps } from '@types'

const AboutUsBlock = ({
    firstArticle,
    secondArticle,
    withLine,
}: AboutUsProps) => {
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
                        <Link href={Paths.AboutUs}>{linkText}</Link>
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
