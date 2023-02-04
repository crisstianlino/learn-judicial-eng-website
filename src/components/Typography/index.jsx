import styled, { css } from 'styled-components'

const theme = {
    colors: {
        white: '#ffffff',
        black: '#000000'
    },
    sizes: {
        xsmall: '1rem',
        small: '1.2rem',
        normal: '1.6rem',
        large: '2.4rem',
        xlarge: '3.2rem',
        xxlarge: '4rem'
    }
}

export const Heading = styled('h1').attrs(({ level }) => ({
    as: `h${level}`
}))`
    ${({
        color = 'black',
        size = 'normal',
        fontWeight = 400,
        lineHeight = 1
    }) => css`
        font-size: ${theme.sizes[size]};
        color: ${theme.colors[color]};
        font-weight: ${fontWeight};
        line-height: ${lineHeight};
    `}
`
