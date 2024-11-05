'use client'

import { memo } from 'react'
import { useFormik } from 'formik'
import { withZodSchema } from 'formik-validator-zod'
import { useTranslations } from 'use-intl'

import { footerSchema, FooterSchemaType } from './schema'
import styles from './styles.module.scss'

import Button from '@components/Button'
import { Input } from '@components/Input'
import { sendMail } from '@utils'

const SubscribeBlock = () => {
    const formik = useFormik<FooterSchemaType>({
        initialValues: {
            email: '',
        },
        onSubmit: (values) => {
            sendMail(values)
        },
        validate: withZodSchema(footerSchema),
        validateOnChange: true,
    })

    const t = useTranslations('Footer')

    const emailError =
        formik.errors.email && formik.touched.email ? formik.errors.email : null

    return (
        <div className={styles.container}>
            <h2 className={styles.title}>{t('subscribeTitle')}</h2>
            <div className={styles.subscribeContent}>
                <Input
                    id="email"
                    name="email"
                    type="text"
                    placeholder={t('footerPlaceholder')}
                    value={formik.values.email}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    error={emailError}
                />
                <div className={styles.button}>
                    <Button
                        type="submit"
                        onClick={formik.handleSubmit}
                        title={t('footerButtonText')}
                    />
                </div>
            </div>
        </div>
    )
}

export default memo(SubscribeBlock)
