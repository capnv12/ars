import React from 'react';
import styled from 'styled-components';
import {ProductCard} from './productCard';
import E305 from '../../images/Piese/e305.jpg';
import E2000 from '../../images/Piese/e2000.jpg';
import E5000 from '../../images/Piese/e5000.jpg';
import E7000 from '../../images/Piese/e7000.png';
import Snail from '../../images/Piese/snail.jpg';
import Takyon from '../../images/Piese/takyon.png';
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

const Sistem = () => {
    return(
        <Ul>
            <Li>
                <ProductCard image={E7000} title={'E7000'} text={'Sistem de propulsie imbunatatit, conceput pentru aplicatii industriale.'}/>
            </Li>
            <Li>
                <ProductCard image={E5000} title={'E5000'} text={'Un sistem de propulsie conceput pentru aplicatii industriale multirotor.'}/>
            </Li>
            <Li>
                <ProductCard image={E2000} title={'E2000'} text={'Sistem de propulsie proiectat pentru aplicatii industriale.'}/>
            </Li>
            <Li>
                <ProductCard image={Snail} title={'Snail'} text={'Un sistem optimizat de propulsie pentru drone de cursa.'}/>
            </Li>
            <Li>
                <ProductCard image={E305} title={'E305'} text={'Sistem de propulsie bine reglat conceput pentru drone cu greutatea de 1-2,5 kg.'}/>
            </Li>
            <Li>
                <ProductCard image={Takyon} title={'Takyon Z318 and Z420'} text={'System Custom on Chip(SOC) si design modular cu DJI Assistant 2.'}/>
            </Li>
        </Ul>
    )
}

export default Sistem;