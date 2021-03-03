import styled from 'styled-components'

export const Container = styled.div`
    padding: 5%;
    display: flex;
    flex-wrap: wrap;
`

export const Card = styled.div`
    width: 250px;
    height: 414px;
    cursor: pointer;
    overflow: hidden;
    margin: 0 8px 16px;
    border-radius: 4px;
    border: 2px solid ${props => props.theme.colors.background};
`

export const Img = styled.div`
    text-align: center;
    background: ${props => props.theme.colors.background};
    > img {
        height: 224px;
    }
`

export const CardText = styled.div`
    width: 100%;
    padding: 5%;
    text-align: justify;
    > h2 {
        overflow: hidden;
        display: -webkit-box;
        /* max-height: 800px; */
        -webkit-line-clamp: 4;
        text-overflow: ellipsis;
        -webkit-box-orient: vertical;
    }
`
