import { Search } from '.'

import type { Meta, StoryObj } from '@storybook/react'

const meta = {
    title: 'Components/Search',
    component: Search,
    tags: ['autodocs'],
    decorators: [
        (Story) => (
            <div style={{ width: '400px', height: '40px' }}>
                <Story />
            </div>
        ),
    ],
} satisfies Meta<typeof Search>

export default meta
type Story = StoryObj<typeof meta>

export const DefaultSearch: Story = {
    args: {
        searchValue: '',
        handleChangeSearchValue: () => {},
    },
}
