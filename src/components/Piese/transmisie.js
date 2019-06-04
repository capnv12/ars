import React from 'react';
import styled from 'styled-components';
import {ProductCard} from './productCard';
import Cendence from '../../images/Piese/cendence.jpg';
import Datalink_3 from '../../images/Piese/datalink_3.jpg';
const Ul = styled.ul`
display: flex;
flex-wrap: wrap;
margin: 0 -10px;
list-style: none;
`
const Li = styled.li`
    flex-basis: 50%;
    max-width: 50%;
    box-sizing: border-box;
    flex-shrink: 0;
    padding: 0 10px;
`

const Transmisie = () => {
    return(
        <Ul>
                    <Li>
                        <ProductCard image={Cendence} title={'Cendence'} text={'Telecomanda Cendence are mai multe butoane personalizabile, permitandu-va sa setati…'}/>
                    </Li>
                    <Li>
                        <ProductCard image={Datalink_3} title={'Datalink 3'} text={'Telecomanda adaptabila cu modem integrat.'}/>
                    </Li>
                </Ul>
    )
}

export default Transmisie;