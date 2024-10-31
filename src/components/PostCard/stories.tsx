import PostCard from '.'

import { allPosts } from '@constants'
import type { Meta, StoryObj } from '@storybook/react'

const meta = {
    title: 'Components/PostCard',
    component: PostCard,
    tags: ['autodocs'],
    decorators: [
        (Story) => (
            <div style={{ width: '200px', height: '100px' }}>
                <Story />
            </div>
        ),
    ],
} satisfies Meta<typeof PostCard>

export default meta
type Story = StoryObj<typeof meta>

const { id, image } = allPosts[0]

export const DefaultPostCard: Story = {
    args: {
        id,
        image,
    },
}
