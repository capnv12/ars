import React from 'react';
import styled from 'styled-components';
import { MdCopyright } from "react-icons/md";
import { FaFacebookSquare } from "react-icons/fa";

const Wrapper = styled.div`
    width:1200px;
    margin:0 auto;
    padding-bottom: 10px;
    display: flex;
    -webkit-box-align: end;
    -moz-align-items: flex-end;
    align-items: flex-end;
    justify-content: space-between;
`

const Title = styled.h2`
    font-size: 14px;
    color: #fff;
    font-weight: normal;
    display: flex;
    -webkit-box-align: end;
    -moz-align-items: flex-end;
    align-items: flex-end;
`

const Link = styled.a`
    text-decoration:none;
    color:#727272;
    cursor:pointer;
    display: flex;
    -webkit-box-align: center;
    -moz-align-items: center;
    align-items: center;
    font-size:1.5em;

`


const Copyright = () =>{
    return (
        <Wrapper>
            <Title>Copyright djiars.ro<MdCopyright/> 2019</Title>
            <Link href="https://www.facebook.com/RomaniaDJI" target="_blank"><FaFacebookSquare/></Link>
        </Wrapper>
    );
}

export default Copyright;