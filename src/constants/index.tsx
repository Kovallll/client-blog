import CloseIcon from '@assets/icons/close.svg'
import FacebookIcon from '@assets/icons/facebook.svg'
import InstagramIcon from '@assets/icons/instagram.svg'
import LinkedInIcon from '@assets/icons/linkedIn.svg'
import TwitterIcon from '@assets/icons/twitter.svg'

export enum Paths {
    Home = '/',
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
}

export const socialLinks = [
    { path: '/', icon: <FacebookIcon /> },
    { path: '/', icon: <TwitterIcon /> },
    { path: '/', icon: <InstagramIcon /> },
    { path: '/', icon: <LinkedInIcon /> },
]
