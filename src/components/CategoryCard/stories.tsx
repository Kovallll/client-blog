import CategoryCard from '.'

import { Categories } from '@constants'
import type { Meta, StoryObj } from '@storybook/react'

const meta = {
    title: 'Components/CategoryCard',
    component: CategoryCard,
    tags: ['autodocs'],
} satisfies Meta<typeof CategoryCard>

export default meta
type Story = StoryObj<typeof meta>

export const DefaultCategoryCard: Story = {
    args: {
        category: Categories.BUSINESS,
    },
}
