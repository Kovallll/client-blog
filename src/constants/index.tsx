import { Categories, loremTextXs } from './postsValues'

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
    homeStepByStepPost,
    blogStepByStepPost,
    commentsData,
    allTags,
    loremTextLg,
    loremTextMd,
    loremTextSm,
    loremTextXs,
    loremList,
    loremTextXl,
    loremTitle,
} from './postsValues'

export { countries } from './countries.json'

export enum Paths {
    Home = '/home',
    Blog = '/blog',
    AboutUs = '/about-us',
    ContactUs = '/contact-us',
    BlogPost = '/blog-post',
    Category = '/category',
    Author = '/author',
    Privacy = '/privacy-policy',
}

export const homeNavText = 'Home'
export const blogNavText = 'Blog'
export const aboutUsNavText = 'About Us'
export const contactUsNavText = 'Contact Us'
export const privacyPolicyNavText = 'Privacy Policy'

export const navigationLinks = [
    { path: Paths.Home, title: homeNavText },
    { path: Paths.Blog, title: blogNavText },
    { path: Paths.AboutUs, title: aboutUsNavText },
    { path: Paths.ContactUs, title: contactUsNavText },
    { path: Paths.Privacy, title: privacyPolicyNavText },
]

export const icons = {
    CloseIcon,
    PrevArrowIcon,
    NextArrowIcon,
}

export const socialLinks = [
    {
        path: '/facebook',
        icon: <FacebookIcon title="facebookIcon" />,
    },
    {
        path: '/twitter',
        icon: <TwitterIcon title="twitterIcon" />,
    },
    {
        path: '/instagram',
        icon: <InstagramIcon title="instagramIcon" />,
    },
    {
        path: '/linkedin',
        icon: <LinkedInIcon title="linkedinIcon" />,
    },
]

export const categoriesData = [
    {
        id: '1',
        category: Categories.BUSINESS,
        subtitle: loremTextXs,
        Icon: <BusinessIcon />,
    },
    {
        id: '2',
        category: Categories.STARTUP,
        subtitle: loremTextXs,
        Icon: <StartupIcon />,
    },
    {
        id: '3',
        category: Categories.ECONOMY,
        subtitle: loremTextXs,
        Icon: <EconomyIcon />,
    },
    {
        id: '4',
        category: Categories.TECHNOLOGY,
        subtitle: loremTextXs,
        Icon: <TechnologyIcon />,
    },
]

export const logoIcons = [
    { id: '1', icon: <Logo1Icon /> },
    { id: '2', icon: <Logo2Icon /> },
    { id: '3', icon: <Logo3Icon /> },
    { id: '4', icon: <Logo4Icon /> },
    { id: '5', icon: <Logo5Icon /> },
]
