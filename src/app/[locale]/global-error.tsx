'use client'
import { GlobalErrorType } from './types'

export default function GlobalError({ reset }: GlobalErrorType) {
    return (
        <html>
            <body>
                <h2>Something went wrong!</h2>
                <button onClick={() => reset()}>Try again</button>
            </body>
        </html>
    )
}
