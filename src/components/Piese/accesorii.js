import React from 'react';
import styled from 'styled-components';
import {ProductCard} from './productCard';
import D_RTK_2 from '../../images/Piese/d_rtk_2.jpg';
import D_RTK from '../../images/Piese/d_rtk.jpg';
import Iosd_mark_2 from '../../images/Piese/iosd_mark_2.png';
import Iosd_mini from '../../images/Piese/iosd_mini.png';
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

const Accesorii = () => {
    return(
        <Ul>
                    <Li>
                        <ProductCard image={D_RTK_2} title={'D-RTK 2'} text={'Sistem de pozitionare la nivel centimetru cu transmisie de date neintrerupta.'}/>
                    </Li>
                    <Li>
                        <ProductCard image={D_RTK} title={'D-RTK'} text={'Sistem de pozitionare special conceput pentru controlorii de zbor din seria DJI A3.'}/>
                    </Li>
                    <Li>
                        <ProductCard image={Iosd_mark_2} title={'iOSD MARK II'} text={'Datele de zbor in timp real pentru transmiterea la sol'}/>
                    </Li>
                    <Li>
                        <ProductCard image={Iosd_mini} title={'iOSD mini'} text={'Conceput pentru un sistem pilot automat DJI si este utilizat impreuna cu modelele WooKong-M, Naza-M sau Naza-M V2.'}/>
                    </Li>
                </Ul>
    )
}

export default Accesorii;