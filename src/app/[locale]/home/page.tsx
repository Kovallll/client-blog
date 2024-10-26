'use client'

import { useEffect, useRef, useState } from 'react'
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
    const observeRef = useRef(null)
    const [hasIntersected, setHasIntersected] = useState(false)

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
                    }
                } else if (!entry.isIntersecting) {
                    setHasIntersected(false)
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
    }, [allComponentsCount, componentsCount, hasIntersected])

    return (
        <div className={styles.page}>
            <HeroBlock />
            <div className={styles.content}>
                <FeaturedPost />
                {components.map((component, index) => (
                    <div className={styles.component} key={index}>{component}</div>
                ))}
                {componentsCount !== allComponentsCount && (
                    <div className={styles.obrerve} ref={observeRef} />
                )}
            </div>
        </div>
    )
}
