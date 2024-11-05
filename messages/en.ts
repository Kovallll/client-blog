import { listTitle } from '@components/AuthorsList/config'
import {
    footerButtonText,
    footerPlaceholder,
    subscribeTitle,
} from '@components/Footer/SubscribeBlock/config'
import { vadeoButtonTitle } from '@components/Header/config'
import { joinButtonTitle, joinTitle } from '@components/JoinUs/config'
import { searchPlaceholder } from '@components/Search/config'
import {
    aboutUsNavText,
    allPosts,
    allTags,
    authorsData,
    blogNavText,
    blogStepByStepPost,
    categoriesData,
    commentsData,
    contactUsNavText,
    homeNavText,
    homeStepByStepPost,
    loremTextSm,
    Paths,
    privacyPolicyNavText,
} from '@constants'
import {
    firstCardSubtitle,
    firstCardText,
    firstCardTitle,
    misionCaption,
    misionSubtitle,
    misionTitle,
    secondCardSubtitle,
    secondCardText,
    secondCardTitle,
    visionCaption,
    visionSubtitle,
    visionTitle,
} from '@pages/about-us/config'
import {
    cardCaption,
    cardTitle,
    heroText,
    statisticInfo,
} from '@pages/about-us/HeroBlock/config'
import { postTitle } from '@pages/author/[id]/config'
import {
    afterNameText,
    beforeNameText,
} from '@pages/author/[id]/HeroBlock/config'
import { blogTitle } from '@pages/blog/AllPostsBlock/config'
import { allCategoryTitle } from '@pages/blog/config'
import { nextTitle } from '@pages/blog-post/[id]/ReadNext/config'
import {
    categoriesTitle,
    categoryButtonTitle,
    tagsTitle,
} from '@pages/category/[id]/CategoriesBlock/config'
import { cagegorySubtitle } from '@pages/category/[id]/HeroBlock/config'
import { noPostsText } from '@pages/category/[id]/MainContent/config'
import {
    contactCaption,
    contactSubtitle,
    contactTitle,
} from '@pages/contact-us/config'
import {
    emailPlaceholder,
    formButtonText,
    namePlaceholder,
    selectPlaceholder,
    textareaPlaceholder,
} from '@pages/contact-us/Form/config'
import {
    contactId,
    contactUsTitle,
    date,
    email,
    text,
    time,
    workTitle,
} from '@pages/contact-us/WorkInfo/config'
import {
    commentCaption,
    commentSubtitle,
    commentTitle,
} from '@pages/home/CommetsBlock/config'
import {
    aboutCaption,
    aboutSubtitle,
    aboutTitle,
    categoryTitle,
    ourCaption,
    ourSubtitle,
    ourTitle,
} from '@pages/home/config'
import {
    buttonTitle,
    caption,
    discoverSubtitle,
    discoverTitle,
} from '@pages/home/DiscoverBlock/config'
import { bottomTitle, topTitle } from '@pages/home/FeaturedInBlock/config'
import {
    allPostsTitle,
    featureButtonTitle,
    featureTitle,
    viewText,
} from '@pages/home/FeaturedPost/config'
import {
    captionBoldText,
    captionText,
    heroButtonTitle,
} from '@pages/home/HeroBlock/config'
import { contentData } from '@pages/privacy-policy/config'
import { ppSubtitle, ppTitle } from '@pages/privacy-policy/HeroBlock/config'

const {
    title: homeTitle,
    subtitle: homeSubtitle,
    excerptChunk: homeExcerptChunk,
} = homeStepByStepPost
const {
    title: blogHeroTitle,
    subtitle: blogSubtitle,
    excerptChunk: blogExcerptChunk,
} = blogStepByStepPost

const translate = {
    Header: {
        buttonTitle: vadeoButtonTitle,
        nav: {
            [Paths.Home]: homeNavText,
            [Paths.Blog]: blogNavText,
            [Paths.ContactUs]: contactUsNavText,
            [Paths.AboutUs]: aboutUsNavText,
            [Paths.Privacy]: privacyPolicyNavText,
        },
    },
    Footer: {
        subscribeTitle,
        footerPlaceholder,
        footerButtonText,
    },
    JoinUs: {
        buttonTitle: joinButtonTitle,
    },
    PrivacyPolicy: {
        contentData,
        ppTitle,
        ppSubtitle,
    },
    Author: {
        postTitle,
        listTitle,
        afterNameText,
        beforeNameText,
        authors: {
            ...authorsData,
        },
    },
    NotFoundPage: {
        title: 'Not Found',
    },
    Article: {
        Discover: [
            {
                caption,
                title: discoverTitle,
                subtitle: discoverSubtitle,
                buttonTitle,
            },
        ],
        JoinUs: [{ title: joinTitle, subtitle: loremTextSm }],
        HomePage: [
            {
                caption: aboutCaption,
                subtitle: aboutSubtitle,
                title: aboutTitle,
            },
            {
                caption: ourCaption,
                subtitle: ourSubtitle,
                title: ourTitle,
            },
        ],
        AboutUs: [
            {
                caption: misionCaption,
                title: misionTitle,
                subtitle: misionSubtitle,
            },
            {
                caption: visionCaption,
                title: visionTitle,
                subtitle: visionSubtitle,
            },
        ],
        Comment: [
            {
                caption: commentCaption,
                title: commentTitle,
                subtitle: commentSubtitle,
            },
        ],
    },
    AboutUsCard: [
        {
            title: firstCardTitle,
            subtitle: firstCardSubtitle,
            text: firstCardText,
        },
        {
            title: secondCardTitle,
            subtitle: secondCardSubtitle,
            text: secondCardText,
        },
    ],
    AboutUsBlock: {
        HomePage: {
            buttonTitle: featureButtonTitle,
        },
        AboutUs: {
            buttonTitle: featureButtonTitle,
        },
    },
    AboutUs: {
        cardCaption,
        cardTitle,
        heroText,
        statisticInfo,
    },
    CategoryBlock: {
        HomePage: {
            title: categoryTitle,
        },
        BlogPage: {
            title: allCategoryTitle,
        },
    },
    CategoryPage: {
        categoriesTitle,
        tagsTitle,
        categoryButtonTitle,
        cagegorySubtitle,
        searchPlaceholder,
        noPostsText,
        tags: {
            Business: allTags[0],
            Experience: allTags[1],
            Screen: allTags[2],
            Technology: allTags[3],
            Life: allTags[4],
            Marketing: allTags[5],
        },
    },
    Category: {
        allCategoryTitle,
        categories: {
            ...categoriesData,
        },
    },
    ContactUs: {
        caption: contactCaption,
        title: contactTitle,
        subtitle: contactSubtitle,
        work: {
            title: workTitle,
            date,
            time,
            text,
            contactUsTitle,
            contactId,
            email,
        },
        form: {
            buttonText: formButtonText,
            namePlaceholder,
            emailPlaceholder,
            selectPlaceholder,
            textareaPlaceholder,
        },
    },
    BlogPost: {
        nextTitle,
    },
    Blog: {
        captionBoldText,
        captionText,
        heroTitle: blogHeroTitle,
        heroSubtitle: blogSubtitle,
        heroExcerpt: blogExcerptChunk,
        title: blogTitle,
    },
    HomePage: {
        featureTitle,
        captionBoldText,
        captionText,
        heroTitle: homeTitle,
        heroSubtitle: homeSubtitle,
        allPostsTitle,
        heroExcerpt: homeExcerptChunk,
        viewAll: viewText,
        heroButtonTitle,
        featureButtonTitle,
        featuredIn: {
            bottomTitle,
            topTitle,
        },
        commentText: commentsData[0].comment,
    },
    Posts: { ...allPosts },
}

export default translate
