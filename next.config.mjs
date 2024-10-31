import createNextIntlPlugin from 'next-intl/plugin'

const withNextIntl = createNextIntlPlugin()
const IS_DEV = process.env.NODE_ENV === 'development'
/** @type {import('next').NextConfig} */
const nextConfig = {
    compiler: !IS_DEV
        ? {
              reactRemoveProperties: { properties: ['^data-testid$'] },
          }
        : {},
    webpack(config) {
        config.module.rules.push({
            test: /\.svg$/i,
            use: ['@svgr/webpack'],
        })
        return config
    },
}

export default withNextIntl(nextConfig)
