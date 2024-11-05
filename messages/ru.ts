import { Paths } from '@constants'
import { contactId, email } from '@pages/contact-us/WorkInfo/config'

const lorem = {
    loremTextLg:
        'Пожалуйста, обратите внимание, что это очень важный, стоящий и болезненный процесс, но не стоит списывать его на временные последствия родов и ожирения. Что касается самого простого подхода, то любая тренировка любого из наших медведей может быть направлена только на достижение поставленных целей, поэтому, пожалуйста, следуйте инструкциям. Клянусь, мне было больно, когда я убегал от этого дерьма, я убегал',
    loremTextMd:
        'Мне жаль слышать о вашей боли, но мне так жаль слышать о вашей тяжелой работе и вашей боли. Я не ем слишком много Нью-Йорка. Шоколад каким-то образом приживется в Морисе. Смех будет жить на земле.',
    loremTextSm:
        'Мне жаль слышать о вашей боли, но мне так жаль слышать о вашей тяжелой работе и вашей боли. Сведите к минимуму.',
    loremTextXl: `Я собираюсь стать поклонником Lorem ipsum, но все же попробую я испытывал сильную боль и страдание. Я не ем слишком много Нью-Йорка. Мультяшный шоколад несколько отстраненно. Смех будет жить на земле. Союзники и подчиненные породят великих богов монс. Нелепая, нелепейшая, нелепейшее высмеивание жизни Лео. Я не хочу молчать вечно. Смех в бюро макияж для беременных делают не все.`,
    loremList: 'Морковь Дание само',
    loremTitle:
        'Большое вам спасибо за вашу поддержку, и я скоро передам ее вам.',
    loremTextXs:
        'Спасибо вам за ваш интерес к сестринскому делу, отличная работа.',
}

const postInfo = {
    '0': { title: lorem.loremTitle, textData: [lorem.loremTextXl] },
    '1': {
        title: lorem.loremTitle,
        textData: [lorem.loremTextXl, lorem.loremTextXl, lorem.loremTextXl],
        listData: [lorem.loremList, lorem.loremList, lorem.loremList],
    },
    '2': { title: lorem.loremTitle, textData: [lorem.loremTextXl] },
}

const contentWriter = 'Автор контента @Company'

export default {
    Header: {
        buttonTitle: 'Видео о нас',
        nav: {
            [Paths.Home]: 'Главная',
            [Paths.Blog]: 'Блог',
            [Paths.ContactUs]: 'Контакты',
            [Paths.AboutUs]: 'О Нас',
            [Paths.Privacy]: 'Политика Конфиденциальности',
        },
    },
    Footer: {
        subscribeTitle:
            'Подпишитесь на нашу рассылку, чтобы получать последние обновления и новости',
        footerPlaceholder: 'Введите Email',
        footerButtonText: 'Подписаться',
    },
    JoinUs: {
        buttonTitle: 'Присоединиться',
    },
    CategoryPage: {
        categoriesTitle: 'Категории',
        tagsTitle: 'Все теги',
        categoryButtonTitle: 'Поиск',
        searchPlaceholder: 'Поиск по тегу...',
        cagegorySubtitle: lorem.loremTextSm,
        noPostsText: 'По этому тегу нет постов ¯\\_(ツ)_/¯',
        tags: {
            Business: 'Бизнес',
            Experience: 'Опыт',
            Screen: 'Дисплей',
            Technology: 'Технологии',
            Life: 'Жизнь',
            Marketing: 'Маркетинг',
        },
    },
    NotFoundPage: {
        title: 'Страница не найдена',
    },
    CategoryBlock: {
        HomePage: {
            title: 'Выберите категорию',
        },

        BlogPage: {
            title: 'Все категории',
        },
    },
    Category: {
        categories: [
            {
                category: 'Бизнес',
                subtitle: lorem.loremTextXs,
            },
            {
                category: 'Стартап',
                subtitle: lorem.loremTextXs,
            },
            {
                category: 'Экономика',
                subtitle: lorem.loremTextXs,
            },
            {
                category: 'Технология',
                subtitle: lorem.loremTextXs,
            },
        ],
    },
    PrivacyPolicy: {
        contentData: [
            {
                title: lorem.loremTextXs,
                textData: [
                    lorem.loremTextLg + lorem.loremTextLg + lorem.loremTextLg,
                ],
            },
            {
                title: lorem.loremTextSm,
                textData: [
                    lorem.loremTextLg + lorem.loremTextLg + lorem.loremTextLg,
                    lorem.loremTextLg + lorem.loremTextLg,
                ],
            },
        ],
        ppTitle: 'Политика Конфиденциальности',
        ppSubtitle: 'Последнее обновление 27 января 2022 года',
    },
    Author: {
        listTitle: 'Список авторов',
        postTitle: 'Мои посты',
        afterNameText: ' и добро пожаловать в мой блог',
        beforeNameText: 'Привет всем, меня зовут ',
        authors: [
            {
                fullName: 'Флойд Майлз',
                description: contentWriter,
                text: lorem.loremTextMd,
            },
            {
                fullName: 'Диана Рассел',
                description: contentWriter,
                text: lorem.loremTextMd,
            },
            {
                fullName: 'Дженни Уилсон',
                description: contentWriter,
                text: lorem.loremTextMd,
            },
            {
                fullName: 'Лесли Александер',
                description: contentWriter,
                text: lorem.loremTextMd,
            },
            {
                fullName: 'Гай Хокинс',
                description: contentWriter,
                text: lorem.loremTextMd,
            },
            {
                fullName: 'Элеонора Пена',
                description: contentWriter,
                text: lorem.loremTextMd,
            },
            {
                fullName: 'Роберт Фокс',
                description: contentWriter,
                text: lorem.loremTextMd,
            },
            {
                fullName: 'Джейкоб Джонс',
                description: contentWriter,
                text: lorem.loremTextMd,
            },
        ],
    },
    AboutUsBlock: {
        HomePage: {
            buttonTitle: 'Подробнее >',
        },
        AboutUs: {
            buttonTitle: 'Подробнее >',
        },
    },
    Article: {
        Discover: [
            {
                caption: 'Почему мы начали',
                title: 'Все началось с простой идеи, а затем переросло в нашу страсть',
                subtitle: lorem.loremTextMd,
                buttonTitle: 'Узнать больше',
            },
        ],
        JoinUs: [
            {
                title: 'Присоединяйтесь к нашей команде, чтобы стать частью нашей истории',
                subtitle: lorem.loremTextSm,
            },
        ],
        HomePage: [
            {
                caption: 'О нас',
                subtitle: lorem.loremTextSm,
                title: 'Мы - сообщество авторов контента, которые делятся своими знаниями',
            },
            {
                caption: 'Наша задача',
                subtitle: lorem.loremTextLg,
                title: 'Создание ценного контента для креативщиков по всему миру',
            },
        ],
        AboutUs: [
            {
                caption: 'Наша миссия',
                title: 'Создание ценного контента для креативщиков по всему миру',
                subtitle: lorem.loremTextLg,
            },
            {
                caption: 'Наше видение',
                title: 'Платформа, которая дает людям возможность совершенствоваться',
                subtitle: lorem.loremTextLg,
            },
        ],
        Comment: [
            {
                caption: 'рекомендации',
                title: 'Что люди говорят о нашем блоге',
                subtitle: lorem.loremTextSm,
            },
        ],
    },
    AboutUsCard: [
        {
            title: 'Наша команда креативщиков',
            subtitle: lorem.loremTextSm,
            text: lorem.loremTextLg,
        },
        {
            title: 'Почему мы завели этот блог',
            subtitle: lorem.loremTextSm,
            text: lorem.loremTextLg,
        },
    ],
    AboutUs: {
        cardCaption: 'О нас',
        cardTitle:
            'Мы - команда авторов контента, которые делятся своими знаниями',
        heroText: lorem.loremTextMd,
        statisticInfo: [
            { title: '12+', subtitle: 'Опубликованных блогов' },
            { title: '18K+', subtitle: 'Мнений о Finsweet' },
            { title: '30K+', subtitle: 'Активных пользователей' },
        ],
    },
    ContactUs: {
        caption: 'Свяжитесь с нами',
        title: 'Давайте начнем разговор',
        subtitle: lorem.loremTextSm,
        work: {
            title: 'Рабочее время',
            date: 'С Понедельника по Пятницу',
            time: 'С 9:00 утра до 20:00 вечера',
            text: 'Наша служба поддержки доступна круглосуточно и без выходных',
            contactUsTitle: 'Связаться с нами',
            contactId,
            email,
        },
        form: {
            buttonText: 'Отправить',
            namePlaceholder: 'ФИО',
            emailPlaceholder: 'Введите Email',
            selectPlaceholder: 'Связанный с запросом',
            textareaPlaceholder: 'Сообщение',
        },
    },
    BlogPost: {
        nextTitle: 'Что читать дальше',
    },
    Blog: {
        captionBoldText: ' запуске',
        captionText: 'Опубликовано при',
        heroTitle: 'Пошаговое руководство по выбору отличных шрифтов',
        heroSubtitle: lorem.loremTextSm,
        heroExcerpt: 'Автор: <purple>Джеймс Уэст</purple> | 23 мая 2022',
        title: 'Все посты',
    },
    HomePage: {
        featureTitle: 'Избранный пост',
        captionBoldText: ' запуске',
        captionText: 'Опубликовано при',
        heroTitle: 'Пошаговое руководство по выбору отличных шрифтов',
        heroSubtitle: lorem.loremTextSm,
        allPostsTitle: 'Все посты',
        heroExcerpt: 'Автор: <yellow>Джеймс Уэст</yellow> | 23 мая 2022',
        viewAll: 'Просмотреть все',
        heroButtonTitle: 'Подробнее',
        featureButtonTitle: 'Подробнее >',
        featuredIn: {
            bottomTitle: 'Представлены в',
            topTitle: 'Мы',
        },
        commentText: lorem.loremTextSm,
    },
    Posts: [
        {
            title: 'Советы по дизайну для дизайнеров, которые охватывают все, что вам нужно',
            excerptChunk: `<purple>Стартап</purple>`,
            subtitle: lorem.loremTextSm,
            postInfo,
        },
        {
            title: 'Как наладить контакт с вашими клиентами по веб-дизайну',
            excerptChunk: `<purple>Бизнес</purple>`,
            subtitle: lorem.loremTextSm,
            postInfo,
        },
        {
            title: 'Тенденции в дизайне логотипов, которых следует избегать в 2022 году',
            excerptChunk: `<purple>Стартап</purple>`,
            subtitle: lorem.loremTextSm,
            postInfo,
        },
        {
            title: '8 дизайн-систем Figma, которые вы можете скачать бесплатно уже сегодня',
            excerptChunk: `<purple>Технология</purple>`,
            subtitle: lorem.loremTextSm,
        },
        {
            title: 'Размеры шрифтов в дизайне пользовательского интерфейса: полное руководство, которому следует следовать',
            excerptChunk: `<purple>Экономика</purple>`,
            subtitle: lorem.loremTextSm,
            postInfo,
        },
        {
            title: 'Размеры шрифтов в дизайне пользовательского интерфейса: полное руководство, которому следует следовать',
            excerptChunk: `<purple>Стартап</purple>`,
            subtitle: lorem.loremTextSm,
            postInfo,
        },
        {
            title: 'Советы по дизайну для дизайнеров, которые охватывают все, что вам нужно',
            excerptChunk: `<purple>Экономика</purple>`,
            subtitle: lorem.loremTextSm,
            postInfo,
        },
        {
            title: 'Размеры шрифтов в дизайне пользовательского интерфейса: полное руководство, которому следует следовать',
            excerptChunk: `<purple>Технология</purple>`,
            subtitle: lorem.loremTextSm,
            postInfo,
        },
        {
            title: 'Размеры шрифтов в дизайне пользовательского интерфейса: полное руководство, которому следует следовать',
            excerptChunk: `<purple>Экономика</purple>`,
            subtitle: lorem.loremTextSm,
            postInfo,
        },
        {
            title: 'Тенденции в дизайне логотипов, которых следует избегать в 2022 году',
            excerptChunk: `<purple>Бизнес</purple>`,
            subtitle: lorem.loremTextSm,
            postInfo,
        },
        {
            title: 'Как наладить контакт с вашими клиентами по веб-дизайну',
            excerptChunk: `<purple>Технология</purple>`,
            subtitle: lorem.loremTextSm,
            postInfo,
        },
        {
            title: 'Советы по дизайну для дизайнеров, которые охватывают все, что вам нужно',
            excerptChunk: `<purple>Бизнес</purple>`,
            subtitle: lorem.loremTextSm,
            postInfo,
        },
        {
            title: '1 Системы проектирования Figma, которые вы можете скачать бесплатно уже сегодня.',
            excerptChunk: 'Автор: <purple>Джеймс Уэст</purple> | 23 мая 2022',
            subtitle: lorem.loremTextSm,
            postInfo,
        },
        {
            title: '2 Системы проектирования Figma, которые вы можете скачать бесплатно уже сегодня.',
            excerptChunk: 'Автор: <purple>Джеймс Уэст</purple> | 23 мая 2022',
            subtitle: lorem.loremTextSm,
            postInfo,
        },
        {
            title: '3 Системы проектирования Figma, которые вы можете скачать бесплатно уже сегодня.',
            excerptChunk: 'Автор: <purple>Джеймс Уэст</purple> | 23 мая 2022',
            subtitle: lorem.loremTextSm,
            postInfo,
        },
        {
            title: '4 Системы проектирования Figma, которые вы можете скачать бесплатно уже сегодня.',
            excerptChunk: 'Автор: <purple>Джеймс Уэст</purple> | 23 мая 2022',
            subtitle: lorem.loremTextSm,
            postInfo,
        },
        {
            title: 'Пошаговое руководство по выбору отличных шрифтов',
            excerptChunk: 'Автор: <purple>Джеймс Уэст</purple> | 23 мая 2022',
            subtitle: lorem.loremTextSm,
            postInfo,
        },
        {
            title: 'Пошаговое руководство по выбору отличных шрифтов',
            excerptChunk: 'Автор: <purple>Джеймс Уэст</purple> | 23 мая 2022',
            subtitle: lorem.loremTextSm,
            postInfo,
        },
    ],
}
