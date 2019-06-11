import React from 'react';
import styled from 'styled-components';
import BannerCard from './bannerCard';
import agricultura from '../../../images/Enterprise/agricultura.jpg'
const Wrapper = styled.div`

`
const Agricultura = () => {
    return(
        <Wrapper>
            <BannerCard image={agricultura} title={'D-RTK 2'} text={'Sistem de pozitionare la nivel centimetru cu transmisie de date neintrerupta.'}/>
        </Wrapper>
    )
}

export default Agricultura;