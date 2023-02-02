import Navbar from '@/components/Home/Navbar'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

export default function Home() {
    return (
        <>
            <Navbar />
            <div style={{ height: '300px', border: '1px solid blue' }}></div>
            <div style={{ height: '300px', border: '1px solid blue' }}></div>
            <div style={{ height: '300px', border: '1px solid blue' }}></div>
            <div style={{ height: '300px', border: '1px solid blue' }}></div>
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
