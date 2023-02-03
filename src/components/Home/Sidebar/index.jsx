import React from 'react'
import * as styles from './styles'
import { Close } from '@styled-icons/ionicons-solid/Close'
import { useTranslation } from 'next-i18next'

const Sidebar = ({ isOpen, toggle }) => {
    const { t } = useTranslation()

    return (
        <styles.SidebarContainer isOpen={isOpen} onClick={toggle}>
            <styles.Icon onClick={toggle}>
                <Close size={30} />
            </styles.Icon>
            <styles.SidebarWrapper>
                <styles.SidebarMenu>
                    <styles.SidebarLink to="about" onClick={toggle}>
                        {t('navbar.about')}
                    </styles.SidebarLink>
                    <styles.SidebarLink to="discover" onClick={toggle}>
                        {t('navbar.discover')}
                    </styles.SidebarLink>
                    <styles.SidebarLink to="services" onClick={toggle}>
                        {t('navbar.services')}
                    </styles.SidebarLink>
                    <styles.SidebarLink to="contac" onClick={toggle}>
                        {t('navbar.contact')}
                    </styles.SidebarLink>
                    {/* <styles.SidebarLink to="signup" onClick={toggle}>Sign Up</styles.SidebarLink> */}
                </styles.SidebarMenu>
                {/* <SideBtnWrap>
          <SidebarRoute to="/signin">Sign In</SidebarRoute>
        </SideBtnWrap> */}
            </styles.SidebarWrapper>
        </styles.SidebarContainer>
    )
}

export default Sidebar
