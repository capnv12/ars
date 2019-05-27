import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Cards from './Cards';
import { card } from './card';
import smart_controller from '../../images/cardsHome/smart_controller.jpg'
import ronin_s from '../../images/cardsHome/ronin_s.jpg'
import osmo_pocket from '../../images/cardsHome/osmo_pocket.jpg'
import mavic_2_enterprise from '../../images/cardsHome/mavic_2_enterprise.jpg'
import prof from '../../images/cardsHome/prof.jpg'
import entrp from '../../images/cardsHome/entrp.jpg'

const Container = styled.div`
    width:100%;
    background:#f7f8f9;
`
const Wrapper = styled.div`
    max-width: 1200px;
    margin:0 auto;
    display: flex;
    flex-wrap: wrap;
`
const Img = styled.img`
    width: 100%;
    background-position: center center;
    background-size: auto 320px;
    transition: all .7s;
    z-index: 300
    positon:absolute;
    &:hover {
        transform: scale(1.03);
    }
`

const Box = styled.div`
    flex-basis: 48%;
    max-width: 48%;
    position: relative;
    padding:5px;
`
const Box2 = styled.div`
    flex-basis: 48%;
    max-width: 48%;
    position: relative;
    padding:5px;
    margin-top: 20px;
`

const Content1 = styled.div`
position: absolute;
left: 320px;
top: 160px;
z-index: 1000;
padding: 5px;
color: #FFFFFF;
`
const Content2 = styled.div`
position: absolute;
left: 40px;
top: 40%;
z-index: 1000;
padding: 5px;
color: #000;
`
const Content3 = styled.div`
position: absolute;
left: 40px;
top: 40%;
z-index: 1000;
padding: 5px;
color: #000;
`
const Content4 = styled.div`
position: absolute;
left: 40px;
top: 65%;
z-index: 1000;
padding: 5px;
color: #000;

`
const StyledLink = styled(Link)`
  text-decoration:none;
  cursor:pointer;
&:visited{
    color:black;
}
`

const CardList = () => {
    return(
    <Container>
        <Wrapper>
            <Box>
                <Img src={smart_controller} alt="test"/>
                <Content1>
                    <Cards id={card[0].id} shortDescription={card[0].shortDescription} src={card[0].src}/>
                </Content1>
            </Box>
            <Box>
                <Img src={ronin_s} alt="test"/>
                <Content2>
                    <Cards id={card[1].id} name={card[1].name} shortDescription={card[1].shortDescription} src={card[1].src}/>
                </Content2>
            </Box>
            <Box>
                <Img src={osmo_pocket} alt="test"/>
                <Content3>
                    <Cards id={card[2].id}/>
                </Content3>
            </Box>
            <Box>
                <Img src={mavic_2_enterprise} alt="test"/>
                <Content4>
                    <Cards id={card[3].id}/>
                </Content4>
            </Box>
            <Box2>
                <StyledLink to='/profesional'>
                    <Img src={prof} alt="test"/>
                    <Content4>
                        <Cards id={card[4].id} name={card[4].name} shortDescription={card[4].shortDescription}/>
                    </Content4>
                </StyledLink>
            </Box2>
            <Box2>
                <StyledLink to='/enterprise'>
                <Img src={entrp} alt="test"/>
                    <Content4>
                        <Cards id={card[5].id} name={card[5].name} shortDescription={card[5].shortDescription}/>
                    </Content4>
                </StyledLink>
            </Box2>
        </Wrapper>
    </Container>
    )
}
export default CardList;
