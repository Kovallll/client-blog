import CategoryCard from '.'

import { categoriesData } from '@constants'
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
        Icon: categoriesData[0].Icon,
        id: categoriesData[0].id,
        category: categoriesData[0].category,
    },
}
