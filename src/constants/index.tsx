import BusinessIcon from '@assets/icons/business.svg'
import CloseIcon from '@assets/icons/close.svg'
import EconomyIcon from '@assets/icons/economy.svg'
import FacebookIcon from '@assets/icons/facebook.svg'
import InstagramIcon from '@assets/icons/instagram.svg'
import LinkedInIcon from '@assets/icons/linkedIn.svg'
import Logo2Icon from '@assets/icons/logo1.svg'
import Logo3Icon from '@assets/icons/logo2.svg'
import Logo4Icon from '@assets/icons/logo3.svg'
import Logo5Icon from '@assets/icons/logo4.svg'
import Logo1Icon from '@assets/icons/logo5.svg'
import NextArrowIcon from '@assets/icons/nextArrow.svg'
import PrevArrowIcon from '@assets/icons/prevArrow.svg'
import StartupIcon from '@assets/icons/startup.svg'
import TechnologyIcon from '@assets/icons/technology.svg'
import TwitterIcon from '@assets/icons/twitter.svg'
import { PostData } from '@types'

export enum Paths {
    Home = '/home',
    Blog = '/blog',
    AboutUs = '/about-us',
    ContactUs = '/contact-us',
}

export const homeNavText = 'Home'
export const blogNavText = 'Blog'
export const aboutUsNavText = 'About Us'
export const contactUsNavText = 'Contact us'

export const navigationLinks = [
    { path: Paths.Home, title: homeNavText },
    { path: Paths.Blog, title: blogNavText },
    { path: Paths.AboutUs, title: aboutUsNavText },
    { path: Paths.ContactUs, title: contactUsNavText },
]

export const icons = {
    CloseIcon,
    PrevArrowIcon,
    NextArrowIcon,
}

export const socialLinks = [
    { path: '/', icon: <FacebookIcon /> },
    { path: '/', icon: <TwitterIcon /> },
    { path: '/', icon: <InstagramIcon /> },
    { path: '/', icon: <LinkedInIcon /> },
]

export const homePostsData: PostData[] = [
    {
        id: '1',
        imageUrl: '/images/featurePost.png',
        altText: 'feature post image',
        excerpt: 'By John Deo | Aug 23, 2021',
        title: '1 Figma design systems that you can download for free today.',
        subtitle: `Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
         Excepteur sint occaecat cupidatat non proident.`,
    },
    {
        id: '2',
        imageUrl: '/images/featurePost.png',
        altText: 'feature post image',
        excerpt: 'By John Deo | Aug 23, 2021',
        title: '2 Figma design systems that you can download for free today.',
        subtitle: `Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
         Excepteur sint occaecat cupidatat non proident.`,
    },
    {
        id: '3',
        imageUrl: '/images/featurePost.png',
        altText: 'feature post image',
        excerpt: 'By John Deo | Aug 23, 2021',
        title: '3 Figma design systems that you can download for free today.',
        subtitle: `Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
         Excepteur sint occaecat cupidatat non proident.`,
    },
    {
        id: '4',
        imageUrl: '/images/featurePost.png',
        altText: 'feature post image',
        excerpt: 'By John Deo | Aug 23, 2021',
        title: '4 Figma design systems that you can download for free today.',
        subtitle: `Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
         Excepteur sint occaecat cupidatat non proident.`,
    },
]

export const categoryData = [
    {
        Icon: <BusinessIcon />,
        title: 'Business',
        subtitle: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
    },
    {
        Icon: <StartupIcon />,
        title: 'Startup',
        subtitle: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
    },
    {
        Icon: <EconomyIcon />,
        title: 'Economy',
        subtitle: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
    },
    {
        Icon: <TechnologyIcon />,
        title: 'Technology',
        subtitle: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
    },
]

export const authorsData = [
    {
        id: '1',
        avatarUrl: '/images/author1.png',
        fullName: 'Floyd Miles',
        subtitle: 'Content Writer @Company',
    },
    {
        id: '2',
        avatarUrl: '/images/author2.png',
        fullName: 'Dianne Russell',
        subtitle: 'Content Writer @Company',
    },
    {
        id: '3',
        avatarUrl: '/images/author3.png',
        fullName: 'Jenny Wilson',
        subtitle: 'Content Writer @Company',
    },
    {
        id: '4',
        avatarUrl: '/images/author4.png',
        fullName: 'Leslie Alexander',
        subtitle: 'Content Writer @Company',
    },
]

export const logoIcons = [
    { id: '1', icon: <Logo1Icon /> },
    { id: '2', icon: <Logo2Icon /> },
    { id: '3', icon: <Logo3Icon /> },
    { id: '4', icon: <Logo4Icon /> },
    { id: '5', icon: <Logo5Icon /> },
]
