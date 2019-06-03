import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
    flex-basis: 25%;
    max-width: 25%;
    box-sizing: border-box;
    flex-shrink: 0;
    padding: 0 10px;
`
const Container = styled.div`
    padding: 24px 32px;
    background: #fff;
    min-height: 474px;
    box-shadow: 0 5px 25px 0 rgba(0,0,0,0.05);
`
const Ul = styled.ul`
    list-style: none;
`
const Li = styled.li`
    padding: 8px 0;
    cursor: pointer;
`

const Nav = () => {
        return(
            <Wrapper>
                <Container>
                    <Ul>
                        <Li>Controler de zbor</Li>
                        <Li>Sistem de propulsie</Li>
                        <Li>Transmisie</Li>
                        <Li>Dezvoltatori</Li>
                        <Li>Alte accesorii</Li>
                    </Ul>
                </Container>
            </Wrapper>

        )
}

export default Nav;