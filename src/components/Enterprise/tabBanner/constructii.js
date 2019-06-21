import React from 'react';
import styled from 'styled-components';
import BannerCard from './bannerCard';
import constructii from '../../../images/Enterprise/constructii.jpg'
const Wrapper = styled.div`

`
const Constructii = () => {
    return(
        <Wrapper>
            <BannerCard image={constructii} title={'Imbunatatiti managementul de proiect cu date regulate'} text={'Permiteti echipelor sa gestioneze proiecte mai complexe de constructie care implica numeroase subcontractanti.'}
                specs={'Marketing imobiliar | Cartografiere terenuri | Inspectia cladirilor '}
            />
        </Wrapper>
    )
}

export default Constructii;