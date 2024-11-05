import dynamic from 'next/dynamic'

import { Form } from './Form'
import { Head } from './Head'
import { Loader } from './Map/Loader'
import styles from './page.module.scss'
import { WorkInfo } from './WorkInfo'

const Map = dynamic(() => import('./Map'), {
    ssr: false,
    loading: () => <Loader />,
})

export default function ContactUs() {
    return (
        <div className={styles.page}>
            <div className={styles.content}>
                <Head />
                <WorkInfo />
                <Form />
            </div>
            <Map />
        </div>
    )
}
