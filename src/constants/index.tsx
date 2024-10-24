import { Categories } from './postsValues'

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

export {
    Categories,
    authorsData,
    blogPostsData,
    homePostsData,
    allPosts,
} from './postsValues'

export enum Paths {
    Home = '/home',
    Blog = '/blog',
    AboutUs = '/about-us',
    ContactUs = '/contact-us',
    BlogPost = '/blog-post',
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

export const categoryData = {
    [Categories.STARTUP]: { Icon: <StartupIcon />, title: 'Startup' },
    [Categories.BUSINESS]: { Icon: <BusinessIcon />, title: 'Business' },
    [Categories.ECONOMY]: { Icon: <EconomyIcon />, title: 'Economy' },
    [Categories.TECHNOLOGY]: {
        Icon: <TechnologyIcon />,
        title: 'Technology',
    },
}

export const categoriesData = [
    {
        category: Categories.BUSINESS,
        subtitle: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
    },
    {
        category: Categories.STARTUP,
        subtitle: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
    },
    {
        category: Categories.ECONOMY,
        subtitle: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
    },
    {
        category: Categories.TECHNOLOGY,
        subtitle: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
    },
]

export const logoIcons = [
    { id: '1', icon: <Logo1Icon /> },
    { id: '2', icon: <Logo2Icon /> },
    { id: '3', icon: <Logo3Icon /> },
    { id: '4', icon: <Logo4Icon /> },
    { id: '5', icon: <Logo5Icon /> },
]
