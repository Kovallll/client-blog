import type { StorybookConfig } from '@storybook/nextjs'

const config: StorybookConfig = {
    stories: ['../src/**/stories.@(js|jsx|mjs|ts|tsx)'],
    addons: [
        '@storybook/addon-onboarding',
        '@storybook/addon-links',
        '@storybook/addon-essentials',
        '@chromatic-com/storybook',
        '@storybook/addon-interactions',
        '@storybook/addon-styling-webpack',
        'storybook-next-intl',
    ],
    framework: {
        name: '@storybook/nextjs',
        options: {},
    },
    webpackFinal: async (config) => {
        if (config.module) {
            config.module.rules = [
                ...config.module.rules!.map((rule) => {
                    if (/svg/.test((rule! as { test: string }).test)) {
                        return { ...(rule as object), exclude: /\.svg$/i }
                    }
                    return rule
                }),
                {
                    test: /\.svg$/i,
                    use: ['@svgr/webpack'],
                },
            ]
        }
        return config
    },
}
export default config
