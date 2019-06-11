import React from 'react';
import styled from 'styled-components';
import ESlider from './slider';
import SpecCards from './specCards';
import captura_reala from '../../images/Enterprise/captura_reala.jpg'
import sarcina from '../../images/Enterprise/sarcina.jpg'
import gestionare from '../../images/Enterprise/gestionare.jpg'
import Contact from './contact';
import TabContent from './tabContent';
import Agricultura from './tabBanner/agricultura'
import Energie from './tabBanner/energie'
const Wrapper = styled.div`
    width:100%;
`
const Container = styled.div`
    width:1200px;
    display:flex;
    margin:0 auto;

`
const TitleContainer = styled.div`
    text-align: center;
    color: #303233;
    // height: 200px;
    display: -webkit-box;
    display: flex;
    -webkit-box-direction: normal;
    -webkit-box-orient: vertical;
    -moz-flex-direction: column;
    flex-direction: column;
    -webkit-box-pack: center;
    -moz-justify-content: center;
    justify-content: center;
    padding: 15px;
`
const H2 = styled.h2`
    font-size: 32px;
    font-weight: 600;
`
const BannerWrapper = styled.div`
    width:1200px;
margin: 0 auto;
`
const BannerContainer  = styled.div`
position: relative;
z-index: 20;
margin: 0 auto;
position: relative;
overflow: hidden;
z-index: 1;
`

const Enterprise = () => {
    return(
        <Wrapper>
            <ESlider/>
            <TitleContainer>
                <H2>
                COLECTATI SI FOLOSITI DATE IN OPERATIUNILE DVS. CU DRONELE DJI
                </H2>
            </TitleContainer>
            <Container>
                <SpecCards image={captura_reala} title={'Captura reala rapida'} text={'Verificati terenurileurile dvs. din aer, aducand noi perspective si economii potentiale.'}/>
                <SpecCards image={sarcina} title={'Instrumente mai bune'} text={'Imbunatatiti timpul pentru munca repetitiva si inlocuiti sarcinile periculoase.'}/>
                <SpecCards image={gestionare} title={'Gestionare in timp real'} text={'Integrati datele aeriene in fluxurile dvs. de lucru pentru a va administra bunurile din orice locatie.'}/>
            </Container>
            <TitleContainer>
                <Contact/>
            </TitleContainer>
            <BannerWrapper>
                <BannerContainer>
                    <TabContent>
                        <div label="Agricultura">
                            <Agricultura/>
                        </div>
                        <div label="Energie">
                            <Energie/>
                        </div>
                        <div label="Energie">
                            <Energie/>
                        </div>
                    </TabContent>
                </BannerContainer>
            </BannerWrapper>
        </Wrapper>


    )
}

export default Enterprise;