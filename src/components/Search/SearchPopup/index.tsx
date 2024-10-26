import classNames from 'classnames'

import { noValue } from './config'
import styles from './styles.module.scss'
import { SearchPopupProps } from './types'

export const SearchPopup = (props: SearchPopupProps) => {
    const { activeIndex, onClickValue, searchedValues, ...restProps } = props

    const handleOnClickValue = (value: string) => () => {
        onClickValue(value)
    }

    return (
        <div {...restProps} className={styles.container}>
            {searchedValues.length ? (
                searchedValues.map((value, index) => {
                    const className = classNames(styles.textWrap, {
                        [styles.active]: activeIndex === index,
                    })

                    return (
                        <div
                            key={value}
                            tabIndex={activeIndex}
                            className={className}
                            onClick={handleOnClickValue(value)}
                        >
                            <p className={styles.text}>{value}</p>
                        </div>
                    )
                })
            ) : (
                <div tabIndex={activeIndex} className={styles.textWrap}>
                    <p className={styles.text}>{noValue}</p>
                </div>
            )}
        </div>
    )
}
