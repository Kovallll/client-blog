import en from '../messages/en'
import ru from '../messages/ru'

const messagesByLocale: Record<string, any> = { en, ru }

const nextIntl = {
    defaultLocale: 'en',
    messagesByLocale,
}

export default nextIntl
