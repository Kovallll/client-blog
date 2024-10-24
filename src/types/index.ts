import { Categories } from '@constants'

export type LocaleType = 'en' | 'ru'

export interface PostData {
    id: string
    title: string
    excerpt: ExcerptType
    category: Categories
    author: AuthorType
    postTime: string
    postInfo: PostInfoData[]
    image?: ImageType
    subtitle?: string
    className?: string
}

export interface ExcerptType {
    beforeText?: string
    highlightText: string
    afterText?: string
    color?: 'common' | 'yellow' | 'purple'
}

export interface AuthorType {
    id: string
    avatarUrl: string
    fullName: string
    description?: string
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
