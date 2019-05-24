import React from 'react';
import styled from 'styled-components';
import banner_consumator from '../../images/Consumator/banner_consumator.jpg';
import mavic_2_pro from '../../images/Consumator/mavic_2_pro.jpg';
import mavic_2_zoom from '../../images/Consumator/mavic_2_zoom.jpg';
import mavic_air from '../../images/Consumator/mavic_air.jpg';
import mavic_series from '../../images/Consumator/mavic_series.jpg';
import mavic_pro_platinum from '../../images/Consumator/mavic_pro_platinum.jpg';
import mavic_pro from '../../images/Consumator/mavic_pro.jpg';
import spark from '../../images/Consumator/spark.jpg';
import spark_banner from '../../images/Consumator/spark_banner.jpg';
import phantom_4_pro_v2 from '../../images/Consumator/phantom_4_pro_v2.jpg';
import phantom_banner from '../../images/Consumator/phantom_banner.jpg';
import phantom_4_advanced from '../../images/Consumator/phantom_4_advanced.jpg';
import osmo_action from '../../images/Consumator/osmo_action.jpg';
import osmo_pocket from '../../images/Consumator/osmo_pocket.jpg';
import osmo_mobile_2 from '../../images/Consumator/osmo_mobile_2.jpg';
import osmo_banner from '../../images/Consumator/osmo_banner.jpg';
import goggles from '../../images/Consumator/goggles.jpg';
import phantom_3_se from '../../images/Consumator/phantom_3_se.png';
import { CardBody, CardHeader } from './bigCard';
import { SmallCardBody,} from './smallCard';
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
    display: flex;
    flex-wrap: wrap;
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
    box-shadow: 0 5px 25px 0 rgba(0,0,0,.15);
    border-radius:2px;
`
const SmallSection = styled.div`

    flex-basis: 48%;
    max-width: 48%;
    position: relative;
    margin:10px;
    box-shadow: 0 5px 25px 0 rgba(0,0,0,.15);
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
                    <CardBody title={'MAVIC AIR'} text={'Panorame Sferice 32 MP | Portabil | Gimbal 3-Axe &  Camera 4K |  Senzori de obstacole tridirectionali | SmartCapture | Timp de zbor 21 de Minute | Imagini HDR '}/>
                    <CardHeader image={mavic_air}/>
                </Section>
                <SmallSection>
                    <SmallCardBody image={mavic_pro_platinum} title={'Mavic Pro Platinum'} text={'Timp de zbor 30 de minute | Zgomot redus cu 4 dB  '}/>
                </SmallSection>
                <SmallSection>
                    <SmallCardBody  image={mavic_pro} title={'Mavic Pro'} text={'Camera 4K | Imagini 12 MP | Viteza maxima 65 km/h  '}/>
                </SmallSection>
                <SmallBanner title={'Seria Mavic'} text={'Puternic si portabil. Pregatit pentru o aventura aeriana. '} image={mavic_series}/>
            </Container>
            <Container>
                <ContainerGrid>
                    <SectionTitle>
                        <H2>Seria Spark</H2>
                    </SectionTitle>
                </ContainerGrid>
                <Section>
                    <CardBody title={'SPARK'} text={'Portabil | Sonzori de Obstacole | PalmLaunch | Control prin gesturi  | Editeaza si distribuie | 50 de km/h Viteza Maxima   '}/>
                    <CardHeader image={spark}/>
                </Section>
                <SmallBanner title={'Seria Spark'} text={'Profita de moment '} image={spark_banner}/>
            </Container>
            <Container>
                <ContainerGrid>
                    <SectionTitle>
                        <H2>Seria Phantom</H2>
                    </SectionTitle>
                </ContainerGrid>
                <Section>
                    <CardBody title={'PHANTOM 4 PRO V2.0'} text={'Senzor de 1” 20 MP CMOS  | Timp de zbor 30 de minute  | Senzori de obstacole in 5 directii | Transmisie Video OCUSYNC | Vizualizare LIVE 1080P   '}/>
                    <CardHeader image={phantom_4_pro_v2}/>
                </Section>
                <SmallSection>
                    <SmallCardBody  image={phantom_4_advanced} title={'Phantom 4 Advanced'} text={'Senzor de 1” CMOS Sensor | Video 4K  | Fotografii 20 MP  | Timp de zbor 30 minute | Senzor de obstacol frontal  '}/>
                </SmallSection>
                <SmallSection>
                    <SmallCardBody  image={phantom_3_se} title={'Phantom 3 SE'} text={'Video 4K | Timp de zbor 25 minute |Distanta de transmisie 4 km | Plutire in aer siguri chai si in interior  '}/>
                </SmallSection>
                <SmallBanner title={'Seria Phantom'} text={'Imagistica aeriana la nivel inalt.  '} image={phantom_banner}/>
            </Container>
            <Container>
                <ContainerGrid>
                    <SectionTitle>
                        <H2>Seria Osmo</H2>
                    </SectionTitle>
                </ContainerGrid>
                <Section>
                    <CardBody title={'OSMO Action'} text={'Display Dual | Video 4K HDR | EIS | Slow Motion 8x | 4K/60fps | Rezistent la apa pana la 11m | Stabilizare RockSteady '}/>
                    <CardHeader image={osmo_action}/>
                </Section>
                <Section>
                    <CardBody title={'OSMO Pocket'} text={'Usor si Portabil | 4K/60fps | Stabilitate fara pierderi | Captura Inteligenta | Timp de utilizare 140 minute  '}/>
                    <CardHeader image={osmo_pocket}/>
                </Section>
                <Section>
                    <CardBody title={'OSMO Mobile 2'} text={'Video Fluent | Motion Timelapse | Zoom Controlat | Panorama | Live Streaming | Orientare Portret '}/>
                    <CardHeader image={osmo_mobile_2}/>
                </Section>
                <SmallBanner title={'Seria Osmo'} text={'Capturati cele mai bune momente ale dvs. cu un Osmo '} image={osmo_banner}/>
            </Container>
            <Container>
                <ContainerGrid>
                    <SectionTitle>
                        <H2>Alte Produse</H2>
                    </SectionTitle>
                </ContainerGrid>
                <Section style={{marginBottom:'44px'}}>
                    <CardBody title={'DJI Goggles'} text={'Ecran Dual 1080p  | Moduri de Zbor Inteligente | Urmarirea Miscarii | 6 Ore de Operare | Distractie mai mare  '}/>
                    <CardHeader image={goggles}/>
                </Section>
            </Container>
        </Wrapper>
        )
    }

export default Consumator;