import { Article } from '.'

import { caption, subtitle, title } from '@pages/home/CommetsBlock/config'
import type { Meta, StoryObj } from '@storybook/react'

const meta = {
    title: 'Components/Article',
    component: Article,
    tags: ['autodocs'],
} satisfies Meta<typeof Article>

export default meta
type Story = StoryObj<typeof meta>

export const DefaultArticle: Story = {
    args: { subtitle, title, caption },
}
