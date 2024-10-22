import CloseIcon from '@assets/icons/close.svg'

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

export const icons = { CloseIcon }
