const flagCodeToLocale = code => {
    switch (code) {
        case 'GB':
            return 'en'
        case 'FR':
            return 'fr'
        default:
            return 'en'
    }
}

export default flagCodeToLocale
