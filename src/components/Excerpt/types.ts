import { ReactNode } from 'react'

export interface ExcerptProps {
    children: (
        colors: Record<Colors, (chunks: ReactNode) => ReactNode>
    ) => ReactNode
}

export type Colors = 'purple' | 'yellow' | 'common'
