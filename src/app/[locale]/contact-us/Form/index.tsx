'use client'

import { useFormik } from 'formik'
import { withZodSchema } from 'formik-validator-zod'
import { useTranslations } from 'use-intl'

import { className, selectData } from './config'
import { contactSchema, ContactSchemaType } from './schema'
import styles from './styles.module.scss'

import Button from '@components/Button'
import { Input } from '@components/Input'
import { sendMail } from '@utils'

export const Form = () => {
    const formik = useFormik<ContactSchemaType>({
        initialValues: {
            email: '',
            name: '',
            message: '',
            query: '',
        },
        onSubmit: (values) => {
            sendMail(values)
        },
        validate: withZodSchema(contactSchema),
        validateOnChange: true,
    })

    const t = useTranslations('ContactUs')

    const emailError =
        formik.errors.email && formik.touched.email ? formik.errors.email : null
    const nameError =
        formik.errors.name && formik.touched.name ? formik.errors.name : null

    return (
        <div className={styles.container}>
            <Input
                id="name"
                name="name"
                type="text"
                placeholder={t('form.namePlaceholder')}
                value={formik.values.name}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={nameError}
                className={className}
            />
            <Input
                id="email"
                name="email"
                type="text"
                placeholder={t('form.emailPlaceholder')}
                value={formik.values.email}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={emailError}
                className={className}
            />
            <select
                className={styles.select}
                name="query"
                id="query"
                data-testid="form-select"
                value={formik.values.query}
                onChange={formik.handleChange}
            >
                <option selected hidden>
                    {t('form.selectPlaceholder')}
                </option>
                {selectData.map((text) => (
                    <option key={text} value={text}>
                        {text}
                    </option>
                ))}
            </select>
            <textarea
                placeholder={t('form.textareaPlaceholder')}
                className={styles.textarea}
                name="message"
                id="message"
                value={formik.values.message}
                onChange={formik.handleChange}
            ></textarea>
            <Button
                type="submit"
                onClick={formik.handleSubmit}
                title={t('form.buttonText')}
            />
        </div>
    )
}
