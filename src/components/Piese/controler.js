import React from 'react';
import styled from 'styled-components';
import N3 from '../../images/Piese/n3.png';
import Naza_v2 from '../../images/Piese/naza_v2.png';
import {ProductCard} from './productCard';
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

const Controler = ({handleHello}) => {
    return(
        <Ul>
                 <Li>
                    <ProductCard image={N3} title={'N3'} text={'Un nou algoritm de control al zborului, sistem dual-IMU si sistem de amortizare a vibratiilor.'}/>
                </Li>
                <Li>
                    <ProductCard image={Naza_v2} title={'Naza-M V2'} text={'Design integrat, modul de alimentare independent si mai multe aplicatii.'}/>
                </Li>
        </Ul>
    )
}

export default Controler;