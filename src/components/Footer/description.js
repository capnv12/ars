import React from 'react';
import styled from 'styled-components';
import { MdLocationOn } from "react-icons/md";
import { MdPhone } from "react-icons/md";
import { MdEmail } from "react-icons/md";

const Wrapper = styled.div`
    width:25%;
    position: relative;
    margin-right: 4%;
    float: left;
`

const TitleLine = styled.div`
    width: 36px;
    height: 3px;
    padding: 0;
    margin: 5px auto 30px 0;
    background-color: #727272;
`

const Title = styled.h2`
    font-size: 20px;
    margin-bottom: 10px;
    color: #fff;
    font-weight: normal;
`
const Contact = styled.h3`
    font-size: 1.2em;
    margin: 15px 0px 15px 0;
    font-weight: normal;
    text-decoration:none;
`
const Link = styled.a`
    text-decoration:none;
    color:#727272;
`

const Description = () =>{
    return (
        <Wrapper>
            <Title>Despre Companie</Title>
            <TitleLine></TitleLine>
            <p>Compania noastra a fost infiintata in luna mai 2015. Suntem prima companie cara se ocupa cu produsele DJI exclusiv in Romania. Gama noastra de produse acopera atat nevoile amatorilor cat si cele ale persoanelor care doresc echipamente profesionale.</p>
            <Contact><MdLocationOn /> Str.Piata Emanuil Gojdu, Nr. 37 A, Oradea, jud. Bihor</Contact>
            <Contact><Link href="tel:+40773303447"><MdPhone /> 0773303447</Link></Contact>
            <Contact><Link href="mailto:office@djiromania.ro"><MdEmail /> office@djiromania.ro</Link></Contact>
        </Wrapper>
    );
}

export default Description;