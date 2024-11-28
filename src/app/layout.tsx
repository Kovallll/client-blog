import { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'MovieMaster',
    description: 'Find the latest movies with ease.',
    manifest: '/manifest.json', // Link to the manifest file
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return <>{children}</>
}
