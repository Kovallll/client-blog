'use client'
import { useEffect, useRef, useState } from 'react'
import classNames from 'classnames'
import dynamic from 'next/dynamic'

import {
    aboutCaption,
    aboutSubtitle,
    aboutTitle,
    categoryTitle,
    countOfAuthors,
    ourCaption,
    OurSubtitle,
    OurTitle,
} from './config'
import { FeaturedPost } from './FeaturedPost'
import { HeroBlock } from './HeroBlock'
import styles from './page.module.scss'

const FeaturedInBlock = dynamic(() => import('./FeaturedInBlock'))
const AboutUsBlock = dynamic(() => import('../../../components/AboutUsBlock'))
const CategoryBlock = dynamic(() => import('@components/CategoryBlock'))
const AuthorsList = dynamic(() => import('@components/AuthorsList'))
const DiscoverBlock = dynamic(() => import('./DiscoverBlock'))
const CommetsBlock = dynamic(() => import('./CommetsBlock'))
const JoinUs = dynamic(() => import('@components/JoinUs'))

const allComponents = [
    <AboutUsBlock
        firstArticle={{
            title: aboutTitle,
            subtitle: aboutSubtitle,
            caption: aboutCaption,
        }}
        secondArticle={{
            title: OurTitle,
            subtitle: OurSubtitle,
            caption: ourCaption,
        }}
        withLine={true}
    />,
    <CategoryBlock title={categoryTitle} />,
    <DiscoverBlock />,
    <AuthorsList countAuthors={countOfAuthors} />,
    <FeaturedInBlock />,
    <CommetsBlock />,
    <JoinUs />,
]

export default function Home() {
    const [components, setComponents] = useState<JSX.Element[]>([])
    const [hasIntersected, setHasIntersected] = useState<boolean | null>(false)
    const [visibleComponents, setVisibleComponents] = useState<boolean[]>([])
    const observeRef = useRef(null)

    const allComponentsCount = allComponents.length
    const componentsCount = components.length

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting && !hasIntersected) {
                    setHasIntersected(true)
                    if (componentsCount < allComponentsCount) {
                        setComponents((prev) => [
                            ...prev,
                            allComponents[prev.length]!,
                        ])
                        setVisibleComponents(
                            new Array(components.length).fill(true)
                        )
                    }
                } else if (!entry.isIntersecting) {
                    setHasIntersected(false)
                }
                if (componentsCount === allComponentsCount) {
                    setVisibleComponents(
                        new Array(components.length).fill(true)
                    )
                    setHasIntersected(null)
                }
            })
        })
        const element = observeRef.current

        if (element) {
            observer.observe(element)
        }

        return () => {
            if (element) {
                observer.unobserve(element)
            }
        }
    }, [allComponentsCount, components.length, componentsCount, hasIntersected])

    return (
        <div className={styles.page}>
            <HeroBlock />
            <div className={styles.content}>
                {componentsCount === 0 && (
                    <div className={styles.observe} ref={observeRef} />
                )}
                <FeaturedPost />
                {components.map((component, index) => {
                    const style = classNames(styles.component, {
                        [styles.visible]: visibleComponents[index],
                    })

                    const isObserverVisible =
                        componentsCount === index + 1 && hasIntersected !== null

                    return (
                        <>
                            {isObserverVisible && (
                                <div
                                    className={styles.observe}
                                    ref={observeRef}
                                />
                            )}
                            <div className={style} key={index}>
                                {component}
                            </div>
                        </>
                    )
                })}
            </div>
        </div>
    )
}
