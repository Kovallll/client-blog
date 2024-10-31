'use client'

import { Fragment } from 'react'
import classNames from 'classnames'
import dynamic from 'next/dynamic'

import { countOfAuthors, translate } from './config'
import { FeaturedPost } from './FeaturedPost'
import { HeroBlock } from './HeroBlock'
import styles from './page.module.scss'

import { useObserver } from '@hooks'

const FeaturedInBlock = dynamic(() => import('./FeaturedInBlock'))
const AboutUsBlock = dynamic(() => import('@components/AboutUsBlock'))
const CategoryBlock = dynamic(() => import('@components/CategoryBlock'))
const AuthorsList = dynamic(() => import('@components/AuthorsList'))
const DiscoverBlock = dynamic(() => import('./DiscoverBlock'))
const CommetsBlock = dynamic(() => import('./CommetsBlock'))
const JoinUs = dynamic(() => import('@components/JoinUs'))

const allComponents = [
    <AboutUsBlock translate={translate} withLine={true} />,
    <CategoryBlock translate={translate} />,
    <DiscoverBlock />,
    <AuthorsList countAuthors={countOfAuthors} />,
    <FeaturedInBlock />,
    <CommetsBlock />,
    <JoinUs />,
]

export default function Home() {
    const {
        components,
        componentsCount,
        hasIntersected,
        visibleComponents,
        observeRef,
    } = useObserver(allComponents)

    return (
        <div className={styles.page}>
            <HeroBlock />
            <div className={styles.content}>
                {componentsCount === 0 && (
                    <div
                        className={styles.observe}
                        ref={observeRef}
                        data-testid="observer"
                    />
                )}
                <FeaturedPost />
                {components.map((component, index) => {
                    const style = classNames(styles.component, {
                        [styles.visible]: visibleComponents[index],
                    })
                    const isObserverVisible =
                        componentsCount === index + 1 && hasIntersected !== null

                    return (
                        <Fragment key={index}>
                            {isObserverVisible && (
                                <div
                                    className={styles.observe}
                                    ref={observeRef}
                                    data-testid="observer"
                                />
                            )}
                            <div className={style} key={index}>
                                {component}
                            </div>
                        </Fragment>
                    )
                })}
            </div>
        </div>
    )
}
