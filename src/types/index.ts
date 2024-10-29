import { Categories } from '@constants'

export type LocaleType = 'en' | 'ru'

export interface PostData {
    id: string
    title: string
    excerptChunk: string
    category: Categories
    author: AuthorType
    postTime: string
    postInfo: PostInfoData[]
    tags: string[]
    image?: ImageType
    subtitle?: string
    className?: string
}

export interface AuthorType {
    id: string
    avatarUrl: string
    fullName: string
    description?: string
    text: string
}

export interface ImageType {
    imageUrl: string
    altText: string
}

export interface PostInfoData {
    title: string
    textData: string[]
    listData?: string[]
}

export interface CommentsData {
    id: string
    author: AuthorType
    location: string
    comment: string
}

export type PaginationDirection = 'prev' | 'next'

export interface AboutUsProps {
    firstArticle: Article
    secondArticle: Article
    withLine: boolean
}

export interface Article {
    title: string
    subtitle: string
    caption?: string
    className?: string
}

export interface MarkerObject {
    id: number
    marker: mapboxgl.Marker
}

export interface CountryData {
    properties: {
        title: string
    }
    geometry: {
        coordinates: {
            lng: number
            lat: number
        }
    }
}
