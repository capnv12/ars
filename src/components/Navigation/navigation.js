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


const MainMenu = styled.div`
    max-width: 960px;
    background: #fff;
    margin:0 auto;
    display: flex;
    padding: 10px;
    text-decoration:none;
`
const MainMenuElements = styled.a`
    padding: 16px;
    text-decoration:none;
    cursor:pointer
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
            <MainMenu>
                <MainMenuElements><Logo src={logo} alt="DJI ARS Oradea Logo"/></MainMenuElements>
                <MainMenuElements>Consumator</MainMenuElements>
                <MainMenuElements>Profesional</MainMenuElements>
                <MainMenuElements>Enterprise</MainMenuElements>
                <MainMenuElements>Piese</MainMenuElements>
                <MainMenuElements>Explorati</MainMenuElements>
                <MainMenuElements>Contact</MainMenuElements>
            </MainMenu>
        </Nav>
    );
}

export default Navigation;