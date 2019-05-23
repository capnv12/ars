import React from 'react';
import styled from 'styled-components';
import banner_consumator from '../../images/Consumator/banner_consumator.jpg';
import mavic_2_pro from '../../images/Consumator/mavic_2_pro.jpg';
import mavic_2_zoom from '../../images/Consumator/mavic_2_zoom.jpg';
import mavic_air from '../../images/Consumator/mavic_air.jpg';
import mavic_series from '../../images/Consumator/mavic_series.jpg';
import { CardBody, CardHeader } from './bigCard';
import SmallBanner from './smallBanners';

const Wrapper = styled.div`
    width:100%;
`

const BannerWrap = styled.div`
    height: 400px;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    background-color: #494b4d;
    background-image: url(${banner_consumator});
`
const Container = styled.div`
    width: 1200px;
    margin: 0 auto;
    padding-top: 40px;
`
const ContainerGrid = styled.div`
    display: -webkit-box;
    display: flex;
    flex-wrap: wrap;
    margin: 0 -10px;
`
const TitleContainer = styled.div`
    text-align: left;
    color: #303233;
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
const SectionTitle = styled.div`
    flex-basis: 100%;
    max-width: 100%;
    color: #303233;
    font-size: 40px;
    font-weight: 600;
    line-height: 40px;
    text-align: center;
    margin-bottom: 32px;
`
const H2 = styled.h2`
    font-size: 40px;
    font-weight: 600;
`
const Section = styled.div`
    display: -webkit-box;
    display: flex;
    margin:10px;
    height: 480px;
    background-size: 100%;
    background-repeat: no-repeat;
    background-position: center;
    box-shadow: 2px 2px 10px -10px rgba(0,0,0,0.75);
    border-radius:2px;
`

const Consumator = () => {
    return(
        <Wrapper>
            <BannerWrap>
                <Container>
                    <TitleContainer>
                        <H1>Consumator</H1>
                        <P>Fotografiaza Lumea Ca Niciodata Pana Acum.</P>
                    </TitleContainer>
                </Container>
            </BannerWrap>
            <Container>
                <ContainerGrid>
                    <SectionTitle>
                        <H2>Seria Mavic</H2>
                    </SectionTitle>
                </ContainerGrid>
                <Section>
                    <CardBody title={'MAVIC 2 PRO'} text={'Camera Hasselblad | 20 MP 1” CMOS Sensor | Diafragma ajustabila | Profil de culoare pe 10-bit Dlog-M  | 10-bit HDR Video | Hyperlapse | Transmisie Video 8 km 1080p | Timp de zbor 31min '}/>
                    <CardHeader image={mavic_2_pro}/>
                </Section>
                <Section>
                    <CardBody title={'MAVIC 2 ZOOM'} text={'Camera cu Zoom Optic 2× |  Zoom 4× FHD  | Imagini 48MP Super Resolution  | Dolly Zoom | Hyperlapse | Transmisie Video 8 km 1080p | Timp de zbor 31min '}/>
                    <CardHeader image={mavic_2_zoom}/>
                </Section>
                <Section>
                    <CardBody title={'MAVIC AIR'} text={'Panorame Sferice 32 MP | Portabil | Gimbal 3-Axe &  Camera 4K |  Senzori de obstacole tridirectionali | SmartCapture | Timp de zbor 21 de Minute  '}/>
                    <CardHeader image={mavic_air}/>
                </Section>
                <SmallBanner title={'MAVIC 2 PRO'} text={'Puternic si portabil. Pregatit pentru o aventura aeriana.'} image={mavic_series}/>
            </Container>
        </Wrapper>
        )
    }

export default Consumator;