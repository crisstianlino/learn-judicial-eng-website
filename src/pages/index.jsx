import Navbar from '@/components/Home/Navbar'
import HomeSection from '@/components/Home/HomeSection'
import AboutSection from '@/components/Home/AboutSection'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import useWindowSize from '@/hooks/useWindowSize'
import { breakpoint } from '@/constants/breakpoints'

export default function Home() {
    const { width } = useWindowSize()
    const isDesktop = width >= breakpoint
    const isMobile = width < breakpoint

    return (
        <>
            <Navbar isDesktop={isDesktop} isMobile={isMobile} />
            <HomeSection isDesktop={isDesktop} isMobile={isMobile} />
            <AboutSection isDesktop={isDesktop} isMobile={isMobile} />
        </>
    )
}

export async function getStaticProps({ locale }) {
    return {
        props: {
            ...(await serverSideTranslations(locale, ['common']))
        }
    }
}
