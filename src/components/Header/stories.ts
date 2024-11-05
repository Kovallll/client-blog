import { Header } from '.'

import type { Meta, StoryObj } from '@storybook/react'

const meta = {
    title: 'Components/Header',
    component: Header,
    tags: ['autodocs'],
    parameters: {
        layout: 'fullscreen',
    },
} satisfies Meta<typeof Header>

export default meta
type Story = StoryObj<typeof meta>

export const DefaultHeader: Story = {}
