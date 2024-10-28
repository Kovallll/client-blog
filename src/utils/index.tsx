import { toast } from 'react-toastify'

import { FooterSchemaType } from '@components/Footer/SubscribeBlock/schema'
import { allPosts, allTags, authorsData } from '@constants'
import emailjs from '@emailjs/browser'
import { ContactSchemaType } from '@pages/contact-us/Form/schema'

export const getPairsTags = () => {
    const pairsTags = []

    for (let i = 0; i < allTags.length; i += 2) {
        if (allTags[i + 1]) pairsTags.push([allTags[i], allTags[i + 1]])
        else {
            pairsTags.push([allTags[i]])
        }
    }

    return pairsTags
}

export const getPostsByCategory = (currentCategory: string) => {
    return allPosts.filter(
        (post) => post.category === currentCategory.toUpperCase()
    )
}

export const getAuthorPosts = (authorId: string) => {
    return allPosts.filter((post) => post.author.id === authorId)
}

export const getAuthorData = (authorId: string) => {
    return authorsData.find((author) => author.id === authorId)!
}

export const sendMail = (values: FooterSchemaType | ContactSchemaType) => {
    toast.info('Sending...')
    emailjs
        .send(
            process.env.NEXT_PUBLIC_SERVICE_ID as string,
            process.env.NEXT_PUBLIC_TEMPLATE_ID as string,
            { ...values },
            process.env.NEXT_PUBLIC_EMAIL_JS_KEY
        )
        .then(() => {
            toast.success('Send successful!')
        })
        .catch((error) => {
            toast.error('Failed send!')
            console.error('Error', error)
        })
}
