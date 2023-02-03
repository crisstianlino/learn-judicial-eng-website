import styled from 'styled-components'

export const ContentContainer = styled.div`
    width: 100%;
    max-width: ${props => (props.isMobile ? '480px' : '1440px')};
    padding: ${props => (props.isMobile ? '0 24px' : '0 80px')};
    z-index: ${props => (props.zIndex ? props.zIndex : 'none')};
`

export default ContentContainer
