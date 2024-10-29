import { useEffect, useRef, useState } from 'react'

export const useObserver = (allComponents: JSX.Element[]) => {
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
    }, [
        allComponents,
        allComponentsCount,
        components.length,
        componentsCount,
        hasIntersected,
    ])

    return {
        visibleComponents,
        hasIntersected,
        componentsCount,
        observeRef,
        components,
    }
}
