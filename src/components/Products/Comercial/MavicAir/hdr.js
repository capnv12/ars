import React from 'react';
import styled from 'styled-components';
import hdrImage from '../../../../images/Products/MavicAir/hdrImage.jpg'
const Wrapper = styled.div`
    width:100%;
    padding-top:72px;
    background-color: #fff;
`
const Container = styled.div`
    width: 960px;
    margin: 0 auto;
    text-align:center;
`
const H2 = styled.h2`
font-size: 40px!important;
line-height: 1.5!important;
margin: 0 auto 32px!important;
font-weight: 600!important;
text-transform: initial!important;
`
const P = styled.p`
font-size: 16px!important;
line-height: 24px!important;
// margin: 0 auto;
margin-bottom: 32px!important;
`
const Img = styled.img`
width: 100%;
    height: 540px;
    margin-bottom: 32px;
`
const Span = styled.span`
    width: 480px;
    display: inline-block;
    text-align: center;
`
const Span1 = styled.span`
    width: 480px;
    display: inline-block;
    text-align: center;
    font-size: 32px;
    font-weight: 600;
    margin-bottom: 32px;
`
const P1 = styled.p`
    width: 480px;
    display: inline-block;
    margin-bottom: 32px;
`
const Span2 = styled.span`
    width: 480px;
    display: inline-block;
    margin-bottom: 32px;
`
const HDR = () => {
    return(
        <Wrapper>
            <Container>
                <H2>Fotografii HDR</H2>
                <P>Noii algoritmi HDR va ajuta sa obtineti inteligent setarile de expunere potrivite, in functie de conditiile de iluminare.
                    Zonele supraexpuse sau intunecate sunt procesate pentru tranzitii mai naturale intre evidentiere si umbre, in timp ce acceleratia DSP permite o fotografiere mai eficienta.</P>
                <Img alt='Mavic Air Imagine HDR' src={hdrImage}/>
                <P>
                    <Span>Cu HDR</Span>
                    <Span>Fara HDR</Span>
                </P>
                <P1>
                    <Span1><strong>Imagini de 12 MP</strong></Span1>
                    <Span2>Camera de la bordul Mavic Air integreaza o camera de 1 / 2.3″. Senzor CMOS de 12 megapixeli si un obiectiv f / 2.8 cu 35 mm lungime focala echivalenta de 24 mm pentru fotografii si clipuri video de inalta calitate.</Span2>
                </P1>
                <P1>
                    <Span1><strong>Memorie interna de 8 GB</strong></Span1>
                    <Span2>In plus fata de un slot pentru card Micro SD, spatiul de stocare intern de 8 GB va permite sa salvati direct fotografiile si videoclipurile direct pe drona si sa exportati fisierele prin portul USB 3.0 de tip C.</Span2>
                </P1>
            </Container>
        </Wrapper>
    )
}

export default HDR;