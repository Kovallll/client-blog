export type LocaleType = 'en' | 'ru'

export interface PostData {
    id: string
    title: string
    excerpt: string
    imageUrl?: string
    altText?: string
    subtitle?: string
    className?: string
}
