import styled from 'styled-components'

export const NavbarContainer = styled.div`
    display: flex;
    justify-content: space-between;
`

export const TabContainer = styled.ul`
    display: flex;
    align-items: center;
    list-style-type: none;
    width: 35%;
    justify-content: space-between;
`

export const TabItem = styled.li`
    cursor: pointer;

    &:hover {
        color: red;
    }
`

export const LogoContainer = styled.div`
    cursor: pointer;
`

export const SelectLanguageContainer = styled.div`
    display: flex;
    align-items: center;
    width: 20%;
`
