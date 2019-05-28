import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Wrapper = styled.div`
    width:100%;
`
const StyledLink = styled(Link)`
  text-decoration:none;
  cursor:pointer;
  padding: 8px 15px;
  width: auto;
  height: auto;
  min-width: 100px;
  display: inline-block;
  font-size: 18px;
  font-weight: 600px;
  border: solid 2px #44a8f2;
  cursor: pointer;
  margin: 30px;
  background-color: #44a8f2;
  color: #fff;
  &:visited{
      color:white;
  }
  &:hover{
      color:#44a8f2;
      border: 2px solid #44a8f2;
      background-color: #fff;
  }
`;

const Contact = () => {
    return(
        <Wrapper>
            <h4>PENTRU MAI MULTE INFORMATII</h4>
            <StyledLink to='/contact'>Contacteaza-ne</StyledLink>
        </Wrapper>
    )
}

export default Contact;