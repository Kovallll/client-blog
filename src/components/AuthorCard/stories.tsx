import AuthorCard from '.'

import { authorsData } from '@constants'
import type { Meta, StoryObj } from '@storybook/react'

const meta = {
    title: 'Components/AuthorCard',
    component: AuthorCard,
    tags: ['autodocs'],
} satisfies Meta<typeof AuthorCard>

export default meta
type Story = StoryObj<typeof meta>

export const DefaultAuthorCard: Story = {
    args: {
        author: authorsData[0],
    },
}
