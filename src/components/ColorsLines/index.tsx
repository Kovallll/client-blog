import { memo } from 'react'
import classNames from 'classnames'

import styles from './styles.module.scss'
import { ColorsLinesProps } from './types'

const ColorsLines = ({ isYellowFirts, className }: ColorsLinesProps) => {
    const style = classNames(styles.lines, className ? styles[className] : '', {
        [styles.reverse]: isYellowFirts,
    })

    return (
        <div className={style}>
            <span className={styles.purpleLine}></span>
            <span className={styles.yellowLine}></span>
        </div>
    )
}

export default memo(ColorsLines)
