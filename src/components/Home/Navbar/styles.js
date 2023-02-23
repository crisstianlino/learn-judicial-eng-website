import styled from 'styled-components'
import * as Scroll from 'react-scroll'

export const NavbarContainer = styled.div`
    display: flex;
    justify-content: space-between;
    background: #ffffff;
    height: ${props => (props.isMobile ? '10vh' : '13vh')};
`

export const TabContainer = styled.ul`
    display: flex;
    align-items: center;
    list-style-type: none;
    width: 35%;
    justify-content: space-between;
`

export const TabItem = styled(Scroll.Link)`
    cursor: pointer;

    &:hover {
        color: red;
    }
`

export const LogoContainer = styled.div`
    display: flex;
    align-items: center;
    cursor: pointer;
`

export const SelectLanguageContainer = styled.div`
    display: flex;
    align-items: center;
`
