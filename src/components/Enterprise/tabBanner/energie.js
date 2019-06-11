import React from 'react';
import styled from 'styled-components';
import BannerCard from './bannerCard';
import energie from '../../../images/Enterprise/energie.jpg'
const Wrapper = styled.div`

`

const Energie = () => {
    return(
        <Wrapper>
            <BannerCard image={energie} title={'D-RTK 2'} text={'Sistem de pozitionare la nivel centimetru cu transmisie de date neintrerupta.'}/>
        </Wrapper>
    )
}

export default Energie;