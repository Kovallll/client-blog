import { toast } from 'react-toastify'

import { FooterSchemaType } from '@components/Footer/SubscribeBlock/schema'
import emailjs from '@emailjs/browser'
import { ContactSchemaType } from '@pages/contact-us/Form/schema'

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
