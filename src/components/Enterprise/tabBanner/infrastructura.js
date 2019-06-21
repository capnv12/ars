import React from 'react';
import styled from 'styled-components';
import BannerCard from './bannerCard';
import infrastructura from '../../../images/Enterprise/infrastructura.jpg'
const Wrapper = styled.div`

`
const Infrastructura = () => {
    return(
        <Wrapper>
            <BannerCard image={infrastructura} title={'Vizualizati retelele complexe de terenuri'} text={'Imaginati-va proiectele intr-o varietate de formate pentru a va asigura ca dezvoltarea se desfasoara conform planificarii, identificati teritoriile cu probleme si prevenitile inainte de a se intampla.'}
                specs={'Retele de transport | Minerit | Topografie'}
            />
        </Wrapper>
    )
}

export default Infrastructura;