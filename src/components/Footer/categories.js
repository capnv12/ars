import React from 'react';
import { Link } from 'react-router-dom';
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
const StyledLink = styled(Link)`
  text-decoration:none;
  cursor:pointer
  color:#727272;
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
                <StyledLink to='/consumator'><Li><MdChevronRight/>Consumator</Li></StyledLink>
                <StyledLink to='/profesional'><Li><MdChevronRight/>Profesional</Li></StyledLink>
                <StyledLink to='/enterprise'><Li><MdChevronRight/>Enterprise</Li></StyledLink>
                <StyledLink to='/piese'><Li><MdChevronRight/>Piese</Li></StyledLink>
            </ul>

        </Wrapper>
    );
}

export default Categories;