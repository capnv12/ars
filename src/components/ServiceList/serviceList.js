import React from 'react';
import styled from 'styled-components';
const Wrapper = styled.div`
    max-width: 1200px;
    margin:0 auto;
    display: flex;
    flex-wrap: wrap;
    padding:10px;
`
const Ul = styled.ul`
    list-style: none;
    margin:0 auto;
`
const Li = styled.li`
    display: inline-block;
    width: 33.3%;
    vertical-align: bottom;
    background-color: #fff;
`
const Link = styled.a`
    position: relative;
    display: inline-block;
    padding: 55px 55px;
    border-left: 1px solid #f2f2f2;
    color: #303233;
    width: 100%;
    cursor: pointer;
    transition: all .4s;
    text-decoration:none;
    &::before{
        display: block;
        content: '';
        position: absolute;
        width: 3px;
        height: 46px;
        background-color: #c2c8cc;
        left: 0;
        top: 50%;
        margin-top: -23px;
        border-top-right-radius: 3px;
        border-bottom-right-radius: 3px;
        transition: all .4s;
    }
    &:hover{
        text-decoration: none;
        color: #727272;
        transition: all 0.3s ease-out 0s;
        &::before{
            background-color: #109ee6;
        }
    }
`
const Title = styled.h2`
    font-size: 24px;
    font-weight: 500;
    line-height: 32px;
`

const ServiceList = () =>{
    return(
        <Wrapper>
            <Ul>
                <Li>
                    <Link href="#"><Title>De unde sa cumpar?</Title></Link>

                </Li>
                <Li>
                    <Link href="#"><Title>Suntem aici sa te ajutam!</Title></Link>
                </Li>
                <Li>
                    <Link href="#"><Title>Zboara in siguranta</Title></Link>

                </Li>
            </Ul>
        </Wrapper>
    )
}

export default ServiceList;