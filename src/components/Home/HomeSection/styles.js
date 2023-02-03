import styled from 'styled-components'

export const BackgroundImage = styled.div`
    display: flex;
    position: relative;
    object-fit: cover;
    height: ${props => (props.isMobile ? '90vh' : '87vh')};
`

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
`

export const Title = styled.h1`
    color: #ffffff;
`

export const Text = styled.p`
    color: #ffffff;
`

export const Button = styled.button``
