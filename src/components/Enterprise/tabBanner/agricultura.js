import React from 'react';
import styled from 'styled-components';
import BannerCard from './bannerCard';
import agricultura from '../../../images/Enterprise/agricultura.jpg'
const Wrapper = styled.div`

`
const Agricultura = () => {
    return(
        <Wrapper>
            <BannerCard image={agricultura} title={'Maximizati randamentele cu ajutorul imaginilor aeriene'} text={'Datele aeriene permit fermierilor sa optimizeze intrarile, sa reactioneze mai repede la amenintari si sa parcurga rapid parcele.'}
                specs={'Consultare recolta | Inspectie recolta | Managementul irigatiilor | Pulverizare'}
            />
        </Wrapper>
    )
}

export default Agricultura;