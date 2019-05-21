import React from 'react';
import styled from 'styled-components';
import { MdChevronRight } from "react-icons/md";

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

const Link = styled.a`
    text-decoration:none;
    color:#727272;
    cursor:pointer;
`

const Li = styled.li`
    list-style:none;
    font-size: 1em;
    transition: all .5s;
    positon:absolute;
    padding: 0 0 25px 0;
    &:hover {
        transform: translate(5px,0);
    }
`

const Categories = () =>{
    return (
        <Wrapper>
            <Title>Categorii Produse</Title>
            <TitleLine></TitleLine>
            <ul>
                <Link href="/consumator"><Li><MdChevronRight/>Consumator</Li></Link>
                <Link href="/profesional"><Li><MdChevronRight/>Profesional</Li></Link>
                <Link href="/enterprise"><Li><MdChevronRight/>Enterprise</Li></Link>
                <Link href="/piese"><Li><MdChevronRight/>Piese</Li></Link>
            </ul>

        </Wrapper>
    );
}

export default Categories;