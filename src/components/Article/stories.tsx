import { Article } from '.'

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
        numberCard: 1,
        translate: 'HomePage',
    },
}
