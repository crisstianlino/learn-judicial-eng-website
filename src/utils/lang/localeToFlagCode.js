const localeToFlagCode = locale => {
    switch (locale) {
        case 'en':
            return 'GB'
        case 'fr':
            return 'FR'
        default:
            return 'GB'
    }
}

export default localeToFlagCode
