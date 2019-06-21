import React from 'react';
import styled from 'styled-components';
import BannerCard from './bannerCard';
import siguranta from '../../../images/Enterprise/siguranta.jpg'
const Wrapper = styled.div`

`
const Siguranta = () => {
    return(
        <Wrapper>
            <BannerCard image={siguranta} title={'Salvati vieti cu o constientizare situationala imbunatatita'} text={'Gestioneati mai bine operatiunile de salvare directe, cu o vedere aeriana, astfel incat echipele pot reduce rapid si in conditii de siguranta situatiile de urgenta.'}
                specs={'Cautare si salvare | Incendii | Dezastre | Aplicarea legii'}
            />
        </Wrapper>
    )
}

export default Siguranta;