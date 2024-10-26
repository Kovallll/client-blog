'use client'

import { memo } from 'react'
import { toast } from 'react-toastify'
import { useFormik } from 'formik'
import { withZodSchema } from 'formik-validator-zod'

import { buttonText, placeholder, title } from './config'
import { schema, SchemaType } from './schema'
import styles from './styles.module.scss'

import Button from '@components/Button'
import { Input } from '@components/Input'
import emailjs from '@emailjs/browser'

const SubscribeBlock = () => {
    const formik = useFormik<SchemaType>({
        initialValues: {
            email: '',
        },
        onSubmit: ({ email }) => {
            handleSendEmail(email)
        },
        validate: withZodSchema(schema),
        validateOnChange: true,
    })

    const handleSendEmail = (email: string) => {
        toast.info('Sending...')
        emailjs
            .send(
                process.env.NEXT_PUBLIC_SERVICE_ID as string,
                process.env.NEXT_PUBLIC_TEMPLATE_ID as string,
                { email },
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

    const emailError =
        formik.errors.email && formik.touched.email ? formik.errors.email : null

    return (
        <div className={styles.container}>
            <h2 className={styles.title}>{title}</h2>
            <div className={styles.subscribeContent}>
                <Input
                    id="email"
                    name="email"
                    type="text"
                    placeholder={placeholder}
                    value={formik.values.email}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    error={emailError}
                />
                <div className={styles.button}>
                    <Button
                        type="submit"
                        onClick={formik.handleSubmit}
                        title={buttonText}
                    />
                </div>
            </div>
        </div>
    )
}

export default memo(SubscribeBlock)
