import { v4 as uuidv4 } from 'uuid'

import { AuthorType, PostData, PostInfoData } from '@types'

export enum Categories {
    ECONOMY = 'ECONOMY',
    TECHNOLOGY = 'TECHNOLOGY',
    STARTUP = 'STARTUP',
    BUSINESS = 'BUSINESS',
}

const loremText = `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
        incididunt ut labore et dolore magna aliqua. Non blandit massa enim nec. Scelerisque viverra mauris 
        in aliquam sem. At risus viverra adipiscing at in tellus. Sociis natoque penatibus et magnis dis parturient 
        montes. Ridiculus mus mauris vitae ultricies leo. Neque egestas congue quisque egestas diam. Risus in hendrerit
         gravida rutrum quisque non.`
const loremTitle =
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.'
const loremList = 'Lorem ipsum dolor sit amet'

const postInfo: PostInfoData[] = [
    {
        title: loremTitle,
        textData: [loremText],
    },
    {
        title: loremTitle,
        textData: [loremText, loremText, loremText],
        listData: [loremList, loremList, loremList],
    },
    {
        title: loremTitle,
        textData: [loremText],
    },
]

export const authorsData: AuthorType[] = [
    {
        id: uuidv4(),
        avatarUrl: '/images/author1.png',
        fullName: 'Floyd Miles',
        description: 'Content Writer @Company',
    },
    {
        id: uuidv4(),
        avatarUrl: '/images/author2.png',
        fullName: 'Dianne Russell',
        description: 'Content Writer @Company',
    },
    {
        id: uuidv4(),
        avatarUrl: '/images/author3.png',
        fullName: 'Jenny Wilson',
        description: 'Content Writer @Company',
    },
    {
        id: uuidv4(),
        avatarUrl: '/images/author4.png',
        fullName: 'Leslie Alexander',
        description: 'Content Writer @Company',
    },
    {
        id: uuidv4(),
        avatarUrl: '/images/author5.png',
        fullName: 'Guy Hawkins',
        description: 'Content Writer @Company',
    },
    {
        id: uuidv4(),
        avatarUrl: '/images/author6.png',
        fullName: 'Eleanor Pena',
        description: 'Content Writer @Company',
    },
    {
        id: uuidv4(),
        avatarUrl: '/images/author7.png',
        fullName: 'Robert Fox',
        description: 'Content Writer @Company',
    },
    {
        id: uuidv4(),
        avatarUrl: '/images/author8.png',
        fullName: 'Jacob Jones',
        description: 'Content Writer @Company',
    },
]

export const homePostsData: PostData[] = [
    {
        id: '13',
        excerpt: {
            afterText: 'By ',
            highlightText: 'John Deo',
            beforeText: ' | Aug 23, 2021',
            color: 'purple',
        },
        category: Categories.STARTUP,
        title: '1 Figma design systems that you can download for free today.',
        subtitle: `Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
         Excepteur sint occaecat cupidatat non proident.`,
        author: authorsData[7],
        postTime: 'Posted on 27th January 2022',
        image: {
            imageUrl: '/images/featurePost.png',
            altText: 'feature post image',
        },
        postInfo,
    },
    {
        id: '14',
        excerpt: {
            afterText: 'By ',
            highlightText: 'John Deo',
            beforeText: ' | Aug 23, 2021',
            color: 'purple',
        },
        category: Categories.ECONOMY,
        title: '2 Figma design systems that you can download for free today.',
        subtitle: `Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
         Excepteur sint occaecat cupidatat non proident.`,
        author: authorsData[2],
        postTime: 'Posted on 27th January 2022',
        image: {
            imageUrl: '/images/featurePost.png',
            altText: 'feature post image',
        },
        postInfo,
    },
    {
        id: '15',
        excerpt: {
            afterText: 'By ',
            highlightText: 'John Deo',
            beforeText: ' | Aug 23, 2021',
            color: 'purple',
        },
        category: Categories.BUSINESS,
        title: '3 Figma design systems that you can download for free today.',
        subtitle: `Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
         Excepteur sint occaecat cupidatat non proident.`,
        author: authorsData[0],
        postTime: 'Posted on 27th January 2022',
        image: {
            imageUrl: '/images/featurePost.png',
            altText: 'feature post image',
        },
        postInfo,
    },
    {
        id: '16',
        excerpt: {
            afterText: 'By ',
            highlightText: 'John Deo',
            beforeText: ' | Aug 23, 2021',
            color: 'purple',
        },
        category: Categories.TECHNOLOGY,
        title: '4 Figma design systems that you can download for free today.',
        subtitle: `Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
         Excepteur sint occaecat cupidatat non proident.`,
        author: authorsData[1],
        postTime: 'Posted on 27th January 2022',
        image: {
            imageUrl: '/images/featurePost.png',
            altText: 'feature post image',
        },
        postInfo,
    },
]

export const blogPostsData: PostData[] = [
    {
        id: '1',
        category: Categories.STARTUP,
        excerpt: { highlightText: Categories.STARTUP, color: 'purple' },
        title: 'Design tips for designers that cover everything you need',
        subtitle: `Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
         Excepteur sint occaecat cupidatat non proident.`,
        author: authorsData[0],
        postTime: 'Posted on 27th January 2022',
        image: { imageUrl: '/images/postImage1.png', altText: 'post image' },
        postInfo,
    },
    {
        id: '2',
        category: Categories.BUSINESS,
        excerpt: { highlightText: Categories.BUSINESS, color: 'purple' },
        title: 'How to build rapport with your web design clients',
        subtitle: `Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
         Excepteur sint occaecat cupidatat non proident.`,
        author: authorsData[1],
        postTime: 'Posted on 27th January 2022',
        image: { imageUrl: '/images/postImage2.png', altText: 'post image' },
        postInfo,
    },
    {
        id: '3',
        category: Categories.STARTUP,
        excerpt: { highlightText: Categories.STARTUP, color: 'purple' },
        title: 'Logo design trends to avoid in 2022',
        subtitle: `Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
         Excepteur sint occaecat cupidatat non proident.`,
        author: authorsData[2],
        postTime: 'Posted on 27th January 2022',
        image: { imageUrl: '/images/postImage3.png', altText: 'post image' },
        postInfo,
    },
    {
        id: '4',
        category: Categories.TECHNOLOGY,
        excerpt: { highlightText: Categories.TECHNOLOGY, color: 'purple' },
        title: '8 Figma design systems you can download for free today',
        subtitle: `Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
         Excepteur sint occaecat cupidatat non proident.`,
        author: authorsData[3],
        postTime: 'Posted on 27th January 2022',
        image: { imageUrl: '/images/postImage4.png', altText: 'post image' },
        postInfo,
    },
    {
        id: '5',
        category: Categories.ECONOMY,
        excerpt: { highlightText: Categories.ECONOMY, color: 'purple' },
        title: 'Font sizes in UI design: The complete guide to follow',
        subtitle: `Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
         Excepteur sint occaecat cupidatat non proident.`,
        author: authorsData[4],
        postTime: 'Posted on 27th January 2022',
        image: { imageUrl: '/images/postImage1.png', altText: 'post image' },
        postInfo,
    },
    {
        id: '6',
        category: Categories.STARTUP,
        excerpt: { highlightText: Categories.STARTUP, color: 'purple' },
        title: 'Font sizes in UI design: The complete guide to follow',
        subtitle: `Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
         Excepteur sint occaecat cupidatat non proident.`,
        author: authorsData[5],
        postTime: 'Posted on 27th January 2022',
        image: { imageUrl: '/images/postImage4.png', altText: 'post image' },
        postInfo,
    },
    {
        id: '7',
        category: Categories.ECONOMY,
        excerpt: { highlightText: Categories.ECONOMY, color: 'purple' },
        title: 'Design tips for designers that cover everything you need',
        subtitle: `Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
         Excepteur sint occaecat cupidatat non proident.`,
        author: authorsData[6],
        postTime: 'Posted on 27th January 2022',
        image: { imageUrl: '/images/postImage3.png', altText: 'post image' },
        postInfo,
    },
    {
        id: '8',
        category: Categories.TECHNOLOGY,
        excerpt: { highlightText: Categories.TECHNOLOGY, color: 'purple' },
        title: 'Font sizes in UI design: The complete guide to follow',
        subtitle: `Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
         Excepteur sint occaecat cupidatat non proident.`,
        author: authorsData[7],
        postTime: 'Posted on 27th January 2022',
        image: { imageUrl: '/images/postImage2.png', altText: 'post image' },
        postInfo,
    },
    {
        id: '9',
        category: Categories.ECONOMY,
        excerpt: { highlightText: Categories.ECONOMY, color: 'purple' },
        title: 'Font sizes in UI design: The complete guide to follow',
        subtitle: `Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
         Excepteur sint occaecat cupidatat non proident.`,
        author: authorsData[4],
        postTime: 'Posted on 27th January 2022',
        image: { imageUrl: '/images/postImage2.png', altText: 'post image' },
        postInfo,
    },
    {
        id: '10',
        category: Categories.BUSINESS,
        excerpt: { highlightText: Categories.BUSINESS, color: 'purple' },
        title: 'Font sizes in UI design: The complete guide to follow',
        subtitle: `Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
         Excepteur sint occaecat cupidatat non proident.`,
        author: authorsData[2],
        postTime: 'Posted on 27th January 2022',
        image: { imageUrl: '/images/postImage1.png', altText: 'post image' },
        postInfo,
    },

    {
        id: '11',
        image: { imageUrl: '/images/postImage3.png', altText: 'post image' },
        category: Categories.TECHNOLOGY,
        excerpt: { highlightText: Categories.TECHNOLOGY, color: 'purple' },
        title: 'Font sizes in UI design: The complete guide to follow',
        subtitle: `Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
         Excepteur sint occaecat cupidatat non proident.`,
        author: authorsData[5],
        postTime: 'Posted on 27th January 2022',
        postInfo,
    },
    {
        id: '12',
        image: {
            imageUrl: '/images/postImage1.png',
            altText: 'post image',
        },
        category: Categories.BUSINESS,
        excerpt: { highlightText: Categories.BUSINESS, color: 'purple' },
        title: 'Design tips for designers that cover everything you need',
        subtitle: `Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
         Excepteur sint occaecat cupidatat non proident.`,
        author: authorsData[6],
        postTime: 'Posted on 27th January 2022',
        postInfo,
    },
]

export const allPosts = [...homePostsData, ...blogPostsData]
