import { CreditCardFill } from '@styled-icons/bootstrap/CreditCardFill'
import { OkRu } from '@styled-icons/boxicons-logos/OkRu'
import { CarCrash } from '@styled-icons/boxicons-solid/CarCrash'
import { Car } from '@styled-icons/evaicons-solid/Car'
import styled, { css } from 'styled-components'



export const Wrapper = styled.div`
    height: 90px;
    display: flex;
    margin: 0 auto;
    align-items: center;
    padding: 0 1%;
    justify-content: space-between;

    max-width: ${props => props.theme.breakpoints.medium};
    background-color: ${props => props.theme.colors.theme};

    @media screen and (max-width: ${props => props.theme.breakpoints.small}) {
       display: none;
    }
`

export const Benefit = styled.section`
    display: flex;
    align-items: center;

    a {
        color: ${props => props.theme.colors.primary};
    }
`

const generalIconCss = css`
    width: 30px;
    height: 30px;
    margin-right: 10px;
    color: ${props => props.theme.colors.primary};
`

export const Truck = styled(Car)`
    right: 32px;
    ${generalIconCss}
`

export const Card = styled(CreditCardFill)`
    right: 32px;
    ${generalIconCss}
`

export const Crash = styled(CarCrash)`
    right: 32px;
    ${generalIconCss}
`
export const OK = styled(OkRu)`
    right: 32px;
    ${generalIconCss}
`
