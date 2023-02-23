import * as styles from './styles'
import ResponsiveContainer from '@/components/Containers/ResponsiveContainer'
import ContentContainer from '@/components/Containers/ContentContainer'
import Image from 'next/image'
import Logo from 'public/images/logo.svg'
import LanguageSwitcher from '@/components/Home/LanguageSwitcher'
import { useTranslation } from 'next-i18next'
import { Bars } from '@styled-icons/fa-solid/Bars'
import { useState } from 'react'
import Sidebar from '@/components/Home/Sidebar'
import * as Scroll from 'react-scroll'

const Navbar = props => {
    const { isDesktop, isMobile } = props
    const [isOpen, setIsOpen] = useState(false)
    const { t } = useTranslation()

    const sc = Scroll.animateScroll

    const toggle = () => {
        setIsOpen(!isOpen)
    }

    return (
        <ResponsiveContainer color={'#ffffff'} isFixed zIndex={99}>
            <ContentContainer isMobile={isMobile}>
                <styles.NavbarContainer isMobile={isMobile}>
                    {isDesktop ? (
                        <>
                            <styles.LogoContainer
                                onClick={() => sc.scrollToTop()}
                            >
                                <Image src={Logo} width={100} height={100} />
                            </styles.LogoContainer>

                            <styles.TabContainer>
                                <styles.TabItem to="about" smooth={true}>
                                    {t('navbar.about')}
                                </styles.TabItem>
                                <styles.TabItem to="about2" smooth={true}>
                                    {t('navbar.discover')}
                                </styles.TabItem>
                                <styles.TabItem to="about3" smooth={true}>
                                    {t('navbar.services')}
                                </styles.TabItem>
                                <styles.TabItem to="about4" smooth={true}>
                                    {t('navbar.contact')}
                                </styles.TabItem>
                            </styles.TabContainer>

                            <styles.SelectLanguageContainer>
                                <LanguageSwitcher />
                            </styles.SelectLanguageContainer>
                        </>
                    ) : (
                        <>
                            <styles.LogoContainer
                                onClick={() => sc.scrollToTop()}
                            >
                                <Image src={Logo} width={70} height={70} />
                            </styles.LogoContainer>
                            <styles.SelectLanguageContainer>
                                <Bars size={30} onClick={toggle} />
                            </styles.SelectLanguageContainer>
                        </>
                    )}
                </styles.NavbarContainer>
            </ContentContainer>
            <Sidebar isOpen={isOpen} toggle={toggle} />
        </ResponsiveContainer>
    )
}

export default Navbar
