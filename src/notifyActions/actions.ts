'use server'

import webpush, { PushSubscription } from 'web-push'

webpush.setVapidDetails(
    'mailto:kovallll.e@gmail.com',
    process.env.NEXT_PUBLIC_VAPID_PUBLIC_KEY!,
    process.env.VAPID_PRIVATE_KEY!
)

export async function sendNotification(
    message: string,
    subscription: globalThis.PushSubscription | null
) {
    if (!subscription) {
        throw new Error('No subscription available')
    }

    try {
        await webpush.sendNotification(
            subscription as unknown as PushSubscription,
            JSON.stringify({
                title: 'Test Notification',
                body: message,
                icon: '/icons/icon-512x512.png',
            })
        )
        return { success: true }
    } catch (error) {
        console.error('Error sending push notification:', error)
        return { success: false, error: 'Failed to send notification' }
    }
}
