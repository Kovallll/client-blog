import { Input } from '.'

import type { Meta, StoryObj } from '@storybook/react'

const meta = {
    title: 'Components/Input',
    component: Input,
    tags: ['autodocs'],
    decorators: [
        (Story) => (
            <div style={{ width: '200px', height: '40px' }}>
                <Story />
            </div>
        ),
    ],
} satisfies Meta<typeof Input>

export default meta
type Story = StoryObj<typeof meta>

export const DefaultInput: Story = {
    args: { placeholder: 'print...' },
}
