import React from 'react';
import styled from 'styled-components';
// import { Player } from 'video-react';
import { CardBody, CardHeader } from '../Consumator/bigCard';
import { SmallCardBody,} from '../Consumator/smallCard';
// import banner_profesional from '../../videos/banner_profesional.mp4';
import banner_consumator from '../../images/Consumator/banner_consumator.jpg';
import inspire_2 from '../../images/Profesional/inspire_2.jpg';
import zenmuse_x7 from '../../images/Profesional/zenmuse_x7.jpg';
import zenmuse_x5s from '../../images/Profesional/zenmuse_x5s.jpg';
import ronin_s from '../../images/Profesional/ronin_s.jpg';
import ronin_2 from '../../images/Profesional/ronin_2.jpg';
import ronin_mx from '../../images/Profesional/ronin_mx.jpg';
import crystalsky from '../../images/Profesional/crystalsky.jpg';


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
// const StyledPlayer = styled(Player)`
//     height: 400px;
// `
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


const Profesional = () => {
    return(
        <Wrapper>
            <BannerWrap>
                {/* <StyledPlayer playsInline src={banner_profesional} autoPlay /> */}
                <Container>
                    <TitleContainer>
                        <H1>Profesional</H1>
                    </TitleContainer>
                </Container>
            </BannerWrap>
            <Container>
                <ContainerGrid>
                    <SectionTitle>
                        <H2>Sisteme Integrate</H2>
                    </SectionTitle>
                </ContainerGrid>
                <Section>
                    <CardBody title={'Inspire 2'} text={'Timp de zbor 27 de minute | Viteza maxima 94 km/h | Distanta de operare 7km | Imagine live 1080P '}/>
                    <CardHeader image={inspire_2}/>
                </Section>
            </Container>
            <Container>
                <ContainerGrid>
                    <SectionTitle>
                        <H2>Camere</H2>
                    </SectionTitle>
                </ContainerGrid>
                <Section>
                    <CardBody title={'Zenmuse X7'} text={'Compatibil cu Inspire 2 | Super Senzor 35 | 6K CinemaDNG | 5.2K Apple ProRes | Fotografii de 24 MP '}/>
                    <CardHeader image={zenmuse_x7}/>
                </Section>
                <Section>
                    <CardBody title={'Zenmuse X5S'} text={'Compatibil cu Inspire 2 | Micro 4/3 | 5.2K CinemaDNG | 4K Apple ProRes | Fotografii de 20.8 MP '}/>
                    <CardHeader image={zenmuse_x5s}/>
                </Section>
            </Container>
            <Container>
                <ContainerGrid>
                    <SectionTitle>
                        <H2>Stabilizatoare</H2>
                    </SectionTitle>
                </ContainerGrid>
                <Section>
                    <CardBody title={'Ronin S'} text={'Viteza maxima de operare: 75 km/h | Greutate maxima suportata: 3.6 kg | Mod Sport | Functii inteligente automate '}/>
                    <CardHeader image={ronin_s}/>
                </Section>
                <SmallSection>
                    <SmallCardBody  image={ronin_2} title={'Ronin 2'} text={'Sistem profesional de stabilizare pe 3 axe | Cadru de fibra de carbon | Mod Sport | Control extrem de precis  '}/>
                </SmallSection>
                <SmallSection>
                    <SmallCardBody  image={ronin_mx} title={'Ronin MX'} text={'Compatibil cu DJI M600 | Setare in 5 minute | Auto Tune Stability (ATS) pentru o echilibrare rapida | SmoothTrack™ miscare fulenta  '}/>
                </SmallSection>
            </Container>
            <Container>
                <ContainerGrid>
                    <SectionTitle>
                        <H2>Accesorii Profesionale</H2>
                    </SectionTitle>
                </ContainerGrid>
                <Section>
                    <CardBody title={'CrystalSky'} text={'Luminozitate maxima de 2000 cd/m| Afisare video mai fulenta | TImp de operare maxim 5-6 ore '}/>
                    <CardHeader image={crystalsky}/>
                </Section>
            </Container>
            <Container>
            </Container>
        </Wrapper>
        )
    }

export default Profesional;