import { AuthorType, CommentsData, PostData, PostInfoData } from '@types'

export enum Categories {
    ECONOMY = 'ECONOMY',
    TECHNOLOGY = 'TECHNOLOGY',
    STARTUP = 'STARTUP',
    BUSINESS = 'BUSINESS',
}

export const loremTextXs =
    'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.'
export const loremTextSm =
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim.'
export const loremTextMd =
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Non blandit massa enim nec. Scelerisque viverra mauris in aliquam sem. At risus viverra adipiscing at in tellus.'
export const loremTextLg =
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat.'
export const loremTextXl = `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
        incididunt ut labore et dolore magna aliqua. Non blandit massa enim nec. Scelerisque viverra mauris 
        in aliquam sem. At risus viverra adipiscing at in tellus. Sociis natoque penatibus et magnis dis parturient 
        montes. Ridiculus mus mauris vitae ultricies leo. Neque egestas congue quisque egestas diam. Risus in hendrerit
         gravida rutrum quisque non.`

export const loremTitle =
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.'
export const loremList = 'Lorem ipsum dolor sit amet'

const postInfo: PostInfoData[] = [
    {
        title: loremTitle,
        textData: [loremTextXl],
    },
    {
        title: loremTitle,
        textData: [loremTextXl, loremTextXl, loremTextXl],
        listData: [loremList, loremList, loremList],
    },
    {
        title: loremTitle,
        textData: [loremTextXl],
    },
]

export const allTags = [
    'Business',
    'Experience',
    'Screen',
    'Technology',
    'Life',
    'Marketing',
]

export const authorsData: AuthorType[] = [
    {
        id: '1',
        avatarUrl: '/images/author1.png',
        avatarPageUrl: '/images/author1-512.png',
        fullName: 'Floyd Miles',
        description: 'Content Writer @Company',
        text: loremTextMd,
    },
    {
        id: '2',
        avatarUrl: '/images/author2.png',
        avatarPageUrl: '/images/author2-512.png',
        fullName: 'Dianne Russell',
        description: 'Content Writer @Company',
        text: loremTextMd,
    },
    {
        id: '3',
        avatarUrl: '/images/author3.png',
        avatarPageUrl: '/images/author3-512.png',
        fullName: 'Jenny Wilson',
        description: 'Content Writer @Company',
        text: loremTextMd,
    },
    {
        id: '4',
        avatarUrl: '/images/author4.png',
        avatarPageUrl: '/images/author4-512.png',
        fullName: 'Leslie Alexander',
        description: 'Content Writer @Company',
        text: loremTextMd,
    },
    {
        id: '5',
        avatarUrl: '/images/author5.png',
        avatarPageUrl: '/images/author5-512.png',
        fullName: 'Guy Hawkins',
        description: 'Content Writer @Company',
        text: loremTextMd,
    },
    {
        id: '6',
        avatarUrl: '/images/author6.png',
        avatarPageUrl: '/images/author6-512.png',
        fullName: 'Eleanor Pena',
        description: 'Content Writer @Company',
        text: loremTextMd,
    },
    {
        id: '7',
        avatarUrl: '/images/author7.png',
        avatarPageUrl: '/images/author7-512.png',
        fullName: 'Robert Fox',
        description: 'Content Writer @Company',
        text: loremTextMd,
    },
    {
        id: '8',
        avatarUrl: '/images/author8.png',
        avatarPageUrl: '/images/author8-512.png',
        fullName: 'Jacob Jones',
        description: 'Content Writer @Company',
        text: loremTextMd,
    },
]

export const commentsData: CommentsData[] = [
    {
        id: '1',
        author: authorsData[0],
        location: 'New york, USA',
        comment: loremTextSm,
    },
    {
        id: '2',
        author: authorsData[1],
        location: 'New york, USA',
        comment: loremTextSm,
    },
    {
        id: '3',
        author: authorsData[2],
        location: 'New york, USA',
        comment: loremTextSm,
    },
    {
        id: '4',
        author: authorsData[3],
        location: 'New york, USA',
        comment: loremTextSm,
    },
]

export const homeStepByStepPost: PostData = {
    id: '17',
    excerptChunk: 'By <yellow>James West</yellow> | May 23, 2022',
    category: Categories.STARTUP,
    title: 'Step-by-step guide to choosing great font pairs',
    subtitle: loremTextSm,
    author: authorsData[7],
    postTime: 'Posted on 27th January 2022',
    image: {
        imageUrl: '/images/homeTopImage.png',
        altText: 'home top image',
        hqImageUrl: '/images/homeTopImage-high-quality.png',
    },
    postInfo,
    tags: [allTags[0], allTags[1]],
}

export const blogStepByStepPost: PostData = {
    id: '18',
    excerptChunk: 'By <purple>James West</purple> | May 23, 2022',
    category: Categories.STARTUP,
    title: 'Step-by-step guide to choosing great font pairs',
    subtitle: loremTextSm,
    author: authorsData[1],
    postTime: 'Posted on 27th January 2022',
    image: {
        imageUrl: '/images/blogTopImage.png',
        altText: 'blog top image',
        hqImageUrl: '/images/blogTopImage-high-quality.png',
    },
    postInfo,
    tags: [allTags[0], allTags[3]],
}

export const homePostsData: PostData[] = [
    {
        id: '13',
        excerptChunk: 'By <purple>James West</purple> | May 23, 2022',
        category: Categories.STARTUP,
        title: '1 Figma design systems that you can download for free today.',
        subtitle: loremTextSm,
        author: authorsData[7],
        postTime: 'Posted on 27th January 2022',
        image: {
            imageUrl: '/images/featurePost.png',
            altText: 'feature post image',
            hqImageUrl: '/images/featurePost-high-quality.png',
        },
        postInfo,
        tags: [allTags[0], allTags[5], allTags[4]],
    },
    {
        id: '14',
        excerptChunk: 'By <purple>James West</purple> | May 23, 2022',
        category: Categories.ECONOMY,
        title: '2 Figma design systems that you can download for free today.',
        subtitle: loremTextSm,
        author: authorsData[2],
        postTime: 'Posted on 27th January 2022',
        image: {
            imageUrl: '/images/featurePost.png',
            altText: 'feature post image',
            hqImageUrl: '/images/featurePost-high-quality.png',
        },
        postInfo,
        tags: [allTags[0], allTags[2], allTags[4]],
    },
    {
        id: '15',
        excerptChunk: 'By <purple>James West</purple> | May 23, 2022',
        category: Categories.BUSINESS,
        title: '3 Figma design systems that you can download for free today.',
        subtitle: loremTextSm,
        author: authorsData[0],
        postTime: 'Posted on 27th January 2022',
        image: {
            imageUrl: '/images/featurePost.png',
            altText: 'feature post image',
            hqImageUrl: '/images/featurePost-high-quality.png',
        },
        postInfo,
        tags: [allTags[3], allTags[4]],
    },
    {
        id: '16',
        excerptChunk: 'By <purple>James West</purple> | May 23, 2022',
        category: Categories.TECHNOLOGY,
        title: '4 Figma design systems that you can download for free today.',
        subtitle: loremTextSm,
        author: authorsData[1],
        postTime: 'Posted on 27th January 2022',
        image: {
            imageUrl: '/images/featurePost.png',
            altText: 'feature post image',
            hqImageUrl: '/images/featurePost-high-quality.png',
        },
        postInfo,
        tags: [allTags[1], allTags[3], allTags[2]],
    },
]

export const blogPostsData: PostData[] = [
    {
        id: '1',
        category: Categories.STARTUP,
        excerptChunk: `<purple>${Categories.STARTUP}</purple>`,
        title: 'Design tips for designers that cover everything you need',
        subtitle: loremTextSm,
        author: authorsData[0],
        postTime: 'Posted on 27th January 2022',
        image: {
            imageUrl: '/images/postImage1.png',
            altText: 'post image',
            hqImageUrl: '/images/postImage1-high-quality.png',
        },
        postInfo,
        tags: [...allTags],
    },
    {
        id: '2',
        category: Categories.BUSINESS,
        excerptChunk: `<purple>${Categories.BUSINESS}</purple>`,
        title: 'How to build rapport with your web design clients',
        subtitle: loremTextSm,
        author: authorsData[1],
        postTime: 'Posted on 27th January 2022',
        image: {
            imageUrl: '/images/postImage2.png',
            altText: 'post image',
            hqImageUrl: '/images/postImage2-high-quality.png',
        },
        postInfo,
        tags: [allTags[1]],
    },
    {
        id: '3',
        category: Categories.STARTUP,
        excerptChunk: `<purple>${Categories.STARTUP}</purple>`,
        title: 'Logo design trends to avoid in 2022',
        subtitle: loremTextSm,
        author: authorsData[2],
        postTime: 'Posted on 27th January 2022',
        image: {
            imageUrl: '/images/postImage3.png',
            altText: 'post image',
            hqImageUrl: '/images/postImage3-high-quality.png',
        },
        postInfo,
        tags: [allTags[2]],
    },
    {
        id: '4',
        category: Categories.TECHNOLOGY,
        excerptChunk: `<purple>${Categories.TECHNOLOGY}</purple>`,
        title: '8 Figma design systems you can download for free today',
        subtitle: loremTextSm,
        author: authorsData[3],
        postTime: 'Posted on 27th January 2022',
        image: {
            imageUrl: '/images/postImage4.png',
            altText: 'post image',
            hqImageUrl: '/images/postImage4-high-quality.png',
        },
        postInfo,
        tags: [allTags[3]],
    },
    {
        id: '5',
        category: Categories.ECONOMY,
        excerptChunk: `<purple>${Categories.ECONOMY}</purple>`,
        title: 'Font sizes in UI design: The complete guide to follow',
        subtitle: loremTextSm,
        author: authorsData[4],
        postTime: 'Posted on 27th January 2022',
        image: {
            imageUrl: '/images/postImage1.png',
            altText: 'post image',
            hqImageUrl: '/images/postImage1-high-quality.png',
        },
        postInfo,
        tags: [allTags[4]],
    },
    {
        id: '6',
        category: Categories.STARTUP,
        excerptChunk: `<purple>${Categories.STARTUP}</purple>`,
        title: 'Font sizes in UI design: The complete guide to follow',
        subtitle: loremTextSm,
        author: authorsData[5],
        postTime: 'Posted on 27th January 2022',
        image: {
            imageUrl: '/images/postImage4.png',
            altText: 'post image',
            hqImageUrl: '/images/postImage4-high-quality.png',
        },
        postInfo,
        tags: [allTags[1], allTags[3]],
    },
    {
        id: '7',
        category: Categories.ECONOMY,
        excerptChunk: `<purple>${Categories.ECONOMY}</purple>`,
        title: 'Design tips for designers that cover everything you need',
        subtitle: loremTextSm,
        author: authorsData[6],
        postTime: 'Posted on 27th January 2022',
        image: {
            imageUrl: '/images/postImage3.png',
            altText: 'post image',
            hqImageUrl: '/images/postImage3-high-quality.png',
        },
        postInfo,
        tags: [allTags[1], allTags[4]],
    },
    {
        id: '8',
        category: Categories.TECHNOLOGY,
        excerptChunk: `<purple>${Categories.TECHNOLOGY}</purple>`,
        title: 'Font sizes in UI design: The complete guide to follow',
        subtitle: loremTextSm,
        author: authorsData[7],
        postTime: 'Posted on 27th January 2022',
        image: {
            imageUrl: '/images/postImage2.png',
            altText: 'post image',
            hqImageUrl: '/images/postImage2-high-quality.png',
        },
        postInfo,
        tags: [allTags[4], allTags[3]],
    },
    {
        id: '9',
        category: Categories.ECONOMY,
        excerptChunk: `<purple>${Categories.ECONOMY}</purple>`,
        title: 'Font sizes in UI design: The complete guide to follow',
        subtitle: loremTextSm,
        author: authorsData[4],
        postTime: 'Posted on 27th January 2022',
        image: {
            imageUrl: '/images/postImage2.png',
            altText: 'post image',
            hqImageUrl: '/images/postImage2-high-quality.png',
        },
        postInfo,
        tags: [...allTags],
    },
    {
        id: '10',
        category: Categories.BUSINESS,
        excerptChunk: `<purple>${Categories.BUSINESS}</purple>`,
        title: 'Logo design trends to avoid in 2022',
        subtitle: loremTextSm,
        author: authorsData[2],
        postTime: 'Posted on 27th January 2022',
        image: {
            imageUrl: '/images/postImage1.png',
            altText: 'post image',
            hqImageUrl: '/images/postImage1-high-quality.png',
        },
        postInfo,
        tags: [allTags[4], allTags[5]],
    },

    {
        id: '11',
        image: {
            imageUrl: '/images/postImage3.png',
            altText: 'post image',
            hqImageUrl: '/images/postImage3-high-quality.png',
        },
        category: Categories.TECHNOLOGY,
        excerptChunk: `<purple>${Categories.TECHNOLOGY}</purple>`,
        title: 'How to build rapport with your web design clients',
        subtitle: loremTextSm,
        author: authorsData[5],
        postTime: 'Posted on 27th January 2022',
        postInfo,
        tags: [allTags[3], allTags[4]],
    },
    {
        id: '12',
        image: {
            imageUrl: '/images/postImage1.png',
            altText: 'post image',
            hqImageUrl: '/images/postImage1-high-quality.png',
        },
        category: Categories.BUSINESS,
        excerptChunk: `<purple>${Categories.BUSINESS}</purple>`,
        title: 'Design tips for designers that cover everything you need',
        subtitle: loremTextSm,
        author: authorsData[6],
        postTime: 'Posted on 27th January 2022',
        postInfo,
        tags: [allTags[2], allTags[3]],
    },
]

export const allPosts = [
    ...blogPostsData,
    ...homePostsData,
    homeStepByStepPost,
    blogStepByStepPost,
]
