import React from 'react';
import styled from 'styled-components';
import {ProductCard} from './productCard';
import Manifold_2 from '../../images/Piese/manifold_2.png';
import Guidance from '../../images/Piese/guidance.jpg';
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

const Dezvoltatori = () => {
    return(
        <Ul>
                    <Li>
                        <ProductCard image={Manifold_2} title={'Manifold 2'} text={'Transforma-ti viziunea in realitate.'}/>
                    </Li>
                    <Li>
                        <ProductCard image={Guidance} title={'Guidance'} text={'Sistem revolutionar de detectare a obstacolelor.'}/>
                    </Li>
                </Ul>
    )
}

export default Dezvoltatori;