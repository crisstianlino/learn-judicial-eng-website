import styled from 'styled-components'

const ResponsiveContainer = styled.div`
    display: flex;
    justify-content: center;
    width: 100vw;
    background: ${({ color }) => (color ? color : 'none')};
    position: ${({ isFixed }) => (isFixed ? 'fixed' : 'static')};
    z-index: ${({ zIndex }) => (zIndex ? zIndex : 'none')};
`

export default ResponsiveContainer
