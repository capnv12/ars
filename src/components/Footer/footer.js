import React from 'react';
import styled from 'styled-components';
import Description from './description';
import Categories from './categories';
import Utile from './utile';
import Copyright from './copyright';


const Wrapper = styled.div`
    width: 100%;
    float: left;
    padding: 100px 0 25px 0;
    margin: 0;
    background-color: #222222;
    color: #727272;
`
const Container = styled.div`
    width: 1200px;
    margin:0 auto;
    background-color: #222222;
`
const BottomLinks = styled.div`
width: 100%;
margin: 0;
background-color: #222222;
color: #727272;
`

const Footer = () => {
    return(<div>
            <Wrapper>
                <Container>
                    <Description/>
                    <Categories/>
                    <Utile/>
                </Container>
                <Container></Container>

            </Wrapper>
            <BottomLinks><Copyright/></BottomLinks>

        </div>
    );
}

export default Footer;