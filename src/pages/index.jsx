import Navbar from '@/components/Home/Navbar'
import HomeSection from '@/components/Home/HomeSection'
import AboutSection from '@/components/Home/AboutSection'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import useWindowSize from '@/hooks/useWindowSize'

export default function Home() {
    const { width } = useWindowSize()
    const isDesktop = width >= 1200
    const isMobile = width < 1200

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
