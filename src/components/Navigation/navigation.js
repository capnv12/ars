import React from 'react';
import styled from 'styled-components';
import logo from '../../images/logo/logo.png';

const Nav = styled.nav`
    width:100%;
    margin: 0;
    padding: 0;
    height: 100%;
`

const Menu = styled.div`
    width: 100%;
    background: #f7f8f9;
    float: right;
    height:26px;
    padding:5px;`

const MenuElements = styled.p`
margin-right:15px;
float: right;
padding: 0 10px;
border-left: 1px solid #ddd;
height: 24px;
`


const Menu2 = styled.div`
    max-width: 960px;
    background: #fff;
    margin:0 auto;
    display: flex;
    padding: 10px;
`
const MenuElements2 = styled.p`
    padding: 16px;
`
const Logo = styled.img`
    max-width:200px;
    height:72px;
    margin-top:10px;

`

const Navigation = () =>{
    return(
        <Nav>
            <Menu>
            <MenuElements>Inregistrare</MenuElements>
            <MenuElements>Logare</MenuElements>
            </Menu>
            <Menu2>
                <Logo src={logo} alt="DJI ARS Oradea Logo"/>
                <MenuElements2>Consumator</MenuElements2>
                <MenuElements2>Profesional</MenuElements2>
                <MenuElements2>Enterprise</MenuElements2>
                <MenuElements2>Piese</MenuElements2>
                <MenuElements2>Explorati</MenuElements2>
                <MenuElements2>Contact</MenuElements2>
            </Menu2>
        </Nav>
    );
}

export default Navigation;