import { Article } from '.'

import {
    commentCaption,
    commentSubtitle,
    commentTitle,
} from '@pages/home/CommetsBlock/config'
import type { Meta, StoryObj } from '@storybook/react'

const meta = {
    title: 'Components/Article',
    component: Article,
    tags: ['autodocs'],
} satisfies Meta<typeof Article>

export default meta
type Story = StoryObj<typeof meta>

export const DefaultArticle: Story = {
    args: {
        subtitle: commentSubtitle,
        title: commentTitle,
        caption: commentCaption,
    },
}
