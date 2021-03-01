import styled, { css } from 'styled-components'

const theme = {
    colors: {
        background: 'rgba(250, 245, 255, 1)',
        text: '#383E71',
        neutral: '#989FDB',
        secondary: '#9D25B0',
        neutralLightest: '#ffff',
        btnPrimary: '#383e71',
        btnSecondary: '#9d25b0',
        btnNeutral: '#cf99db',
        error: '#FF377F'
    },

    sizes: {
        xsmall: '1rem',
        small: '1.2rem',
        normal: '2.4rem',
        large: '2.4rem',
        xlarge: '3.2rem',
        xxlarge: '4rem'
    }
}

export default theme

export type HeadingProps = {
    color?: keyof typeof theme.colors
    size?: keyof typeof theme.sizes
    fontWeight?: 100 | 400 | 700
    lineHeight?: string | number
    level?: 1 | 2 | 3 | 4 | 5 | 6
}

export const Heading = styled('h1').attrs<HeadingProps>(({ level }) => ({
    as: `h${level}`
}))<HeadingProps>`
    ${({
        color = 'white',
        size = 'normal',
        fontWeight = 700,
        lineHeight = 1.5
    }) => css`
        font-size: ${theme.sizes[size]}
        color: ${theme.sizes[color]}
        font-weight: ${fontWeight}
        font-height: ${lineHeight}
    `}
`
