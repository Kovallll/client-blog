import { z } from 'zod'

export const contactSchema = z.object({
    email: z
        .string()
        .email({ message: 'Invalid email address' })
        .min(1, { message: 'Email is required' }),

    name: z.string().min(1, { message: 'Full Name is required' }),
    query: z.string(),
    message: z.string(),
})

export type ContactSchemaType = z.infer<typeof contactSchema>
