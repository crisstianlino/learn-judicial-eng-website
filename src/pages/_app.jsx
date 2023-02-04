import '@/styles/globals.css'
import { appWithTranslation } from 'next-i18next'
import { Lato } from '@next/font/google'

const lato = Lato({
    subsets: ['latin'],
    weight: ['400', '700']
})

const App = ({ Component, pageProps }) => {
    return (
        <main className={lato.className}>
            <Component {...pageProps} />
        </main>
    )
}

export default appWithTranslation(App)
