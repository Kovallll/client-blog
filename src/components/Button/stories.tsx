import Button from '.'

import type { Meta, StoryObj } from '@storybook/react'

const meta = {
    title: 'Components/Button',
    component: Button,
    tags: ['autodocs'],
    decorators: [
        (Story) => (
            <div style={{ width: '200px', height: '100px' }}>
                <Story />
            </div>
        ),
    ],
} satisfies Meta<typeof Button>

export default meta
type Story = StoryObj<typeof meta>

export const DefaultButton: Story = {
    args: {
        onClick: () => {},
        title: 'Button',
    },
}
