import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    flex-wrap: wrap;
    padding: 20px 15px 50px 15px;
    width: 100%;
`

export const Img = styled.div`
    flex: 1;
    text-align: center;
    background: ${props => props.theme.colors.background};
    height: 300px;
    > img {
        width: 300px;
    }
`

export const Text = styled.div`
    padding: 0 5%;
    flex: 2;
    text-align: center;
    text-align: justify;
`

export const Payment = styled.div`
    padding: 20px 10px;
    margin-bottom: 20px;
    width: 280px;
    text-align: center;
    text-align: justify;
    border-radius: 8px;
    border: 2px solid ${props => props.theme.colors.background};

    > strong {
        margin-top: 20px;
        display: flex;
        flex-direction: column;
        > button {
            padding: 0 24px;
            color: white;
            width: 100%;
            height: 50px;
            margin-top: 20px;
            text-align: center;
            border-radius: 6px;
            border-color: transparent;
            background: ${props => props.theme.colors.sucess};
            font-size: ${props => props.theme.sizes.small};
            cursor: pointer;
            transition: box-shadow 0.25s ease-out,
                background-color 0.2s ease-out;
            box-shadow: 0 0 0 0 #fff;

            > svg {
                width: 25px;
                margin-right: 10px;
            }
        }

        > a {
            text-align: center;

        }
    }
`

export const Box = styled.div`
    flex: 1;
`
