import React from 'react';
import styled from 'styled-components';
import piese_banner from '../../images/Piese/piese_banner.jpg';
import Products from './products';
import Controler from './controler';
import Sistem from './sistem';
import Transmisie from './transmisie';
import Dezvoltatori from './dezvoltatori';
import Accesorii from './accesorii';

const Wrapper = styled.div`
    width:100%;

`

const BannerWrap = styled.div`
    height: 400px;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    background-color: #494b4d;
    background-image: url(${piese_banner});
`
const Container = styled.div`
    width: 1200px;
    margin: 0 auto;
    padding-top: 40px;
    display: flex;
    flex-wrap: wrap;
`
const TitleContainer = styled.div`
    text-align: left;
    color: #fff;
    height: 400px;
    display: -webkit-box;
    display: flex;
    -webkit-box-direction: normal;
    -webkit-box-orient: vertical;
    -moz-flex-direction: column;
    flex-direction: column;
    -webkit-box-pack: center;
    -moz-justify-content: center;
    justify-content: center;
    padding: 24px;
`
const H1 = styled.h1`
    font-size: 40px;
    margin-bottom: 16px;
    line-height: 1;
`
const P = styled.p`
    font-size: 16px;
    line-height: 24px;
`
const ProductSection = styled.div`
padding: 40px 0;
width:1200px;
margin:0 auto;
`


const Piese = () => {
        return(
            <Wrapper>
                <BannerWrap>
                    <Container>
                        <TitleContainer>
                            <H1>Piese</H1>
                            <P>Descopera adevaratul potential al dronei tale.</P>
                        </TitleContainer>
                    </Container>
                </BannerWrap>
                <ProductSection>
                    <Products>
                            <div label="Controlor de zbor">
                                <Controler/>
                            </div>
                            <div label="Sistem de propulsie">
                                <Sistem/>
                            </div>
                            <div label="Transmisie">
                                <Transmisie/>
                            </div>
                            <div label="Dezvoltatori">
                                <Dezvoltatori/>
                            </div>
                            <div label="Alte accesorii">
                                <Accesorii/>
                            </div>
                        </Products>

                </ProductSection>
            </Wrapper>
        )
    }

export default Piese;