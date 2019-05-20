import React from 'react';
import styled from 'styled-components';


const Wrapper = styled.div`
    max-width: 1200px;
    margin:0 auto;
`
const Title =styled.h1`
    font-size: 1.5em;
`
const Pragraph = styled.p`
    font-size: 16x;
    font-weight: 300;
    line-height: 24px
`
const Cards = (props) => {
    return(
        <Wrapper>
            <Title>{props.name}</Title>
            <Pragraph>{props.shortDescription}</Pragraph>
        </Wrapper>
    )
}

export default Cards;