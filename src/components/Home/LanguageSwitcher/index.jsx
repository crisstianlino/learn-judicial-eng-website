import { useState } from 'react'
import ReactFlagsSelect from 'react-flags-select'
import { useRouter } from 'next/router'
import { useCallback, useState } from 'react'
import flagCodeToLocale from '@/utils/lang/flagCodeToLocale'

const LanguageSwitcher = () => {
    const [value, setValue] = useState('GB')
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

            // if (onChange) {
            //     onChange(locale)
            // }

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
