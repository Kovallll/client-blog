'use client'

import { memo, useEffect, useRef, useState } from 'react'
import { createRoot } from 'react-dom/client'
import mapboxgl, { LngLatLike } from 'mapbox-gl'

import { centerMap, zoom } from './config'
import { Marker } from './Marker'
import styles from './styles.module.scss'

import 'mapbox-gl/dist/mapbox-gl.css'
import { countries } from '@constants'

const Map = () => {
    const [map, setMap] = useState<mapboxgl.Map>()
    const mapNode = useRef(null)

    useEffect(() => {
        const node = mapNode.current
        if (typeof window === 'undefined' || node === null) return
        const mapboxMap = new mapboxgl.Map({
            container: node,
            accessToken: process.env.NEXT_PUBLIC_MAPBOX_TOKEN,
            center: centerMap as LngLatLike,
            zoom,
        })

        setMap(mapboxMap)

        return () => {
            mapboxMap.remove()
        }
    }, [])

    useEffect(() => {
        if (map) {
            map.addControl(new mapboxgl.NavigationControl(), 'top-right')

            countries.forEach((country) => {
                const markerDiv = document.createElement('div')

                createRoot(markerDiv).render(<Marker country={country} />)

                new mapboxgl.Marker(markerDiv, {
                    anchor: 'bottom',
                })
                    .setLngLat(country.geometry.coordinates)
                    .addTo(map)
            })
        }
    }, [map])

    return <div ref={mapNode} className={styles.mapContainer} />
}

export default memo(Map)
