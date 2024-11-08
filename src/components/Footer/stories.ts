import { Footer } from '.'

import type { Meta, StoryObj } from '@storybook/react'

const meta = {
    title: 'Components/Footer',
    component: Footer,
    tags: ['autodocs'],
    parameters: {
        layout: 'fullscreen',
    },
} satisfies Meta<typeof Footer>

export default meta
type Story = StoryObj<typeof meta>

export const DefaultFooter: Story = {}
