import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import ESlider from './slider';

const Wrapper = styled.div`
    width:100%;
`

const Enterprise = () => {
    return(
        <Wrapper>
            <ESlider/>
        </Wrapper>
    )
}

export default Enterprise;