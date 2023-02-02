import ReactFlagsSelect from 'react-flags-select'
import { useRouter } from 'next/router'
import { useCallback, useState } from 'react'
import flagCodeToLocale from '@/utils/lang/flagCodeToLocale'
import localeToFlagCode from '@/utils/lang/localeToFlagCode'

const LanguageSwitcher = () => {
    const { locale } = useRouter()
    const [value, setValue] = useState(localeToFlagCode(locale))
    const router = useRouter()

    const switchToLocale = useCallback(
        locale => {
            const path = router.asPath

            return router.push(path, path, { locale })
        },
        [router]
    )

    const languageChanged = useCallback(
        async option => {
            setValue(option)

            const locale = flagCodeToLocale(option)

            await switchToLocale(locale)
        },
        [switchToLocale]
    )

    return (
        <ReactFlagsSelect
            selected={value}
            onSelect={code => languageChanged(code)}
            customLabels={{
                GB: {
                    primary: 'English'
                },
                FR: {
                    primary: 'Français'
                }
            }}
            countries={['GB', 'FR']}
        />
    )
}

export default LanguageSwitcher
