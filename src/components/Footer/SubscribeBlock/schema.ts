import { z } from 'zod'

export const footerSchema = z.object({
    email: z.string().email({ message: 'Invalid email address' }),
})

export type FooterSchemaType = z.infer<typeof footerSchema>
