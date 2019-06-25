import React from 'react';
import styled from 'styled-components';
import ProductBanner from './productBanner';
import bannerBackground from '../../../../images/Products/MavicAir/bannerBackground.jpg';
import HDR from './hdr'

const Wrapper = styled.div`
    width:100%;
`

const MavicAir = () => {
    return(
        <Wrapper>
            <ProductBanner backgroundImage={bannerBackground} title={'Adventure Unfolds'} text={'O minune a ingineriei si a designului, Mavic Air a fost construit pentru a merge oriunde v-ar duce aventura. Mostenind ce e mai bun de la seriile Mavic, aceasta drona ultraportabila si pliabila ofera performante de zbor de top si functionalitate pentru explorari nelimitate.'}/>
            <HDR/>
        </Wrapper>
    )
}

export default MavicAir;