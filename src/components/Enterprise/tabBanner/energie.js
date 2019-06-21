import React from 'react';
import styled from 'styled-components';
import BannerCard from './bannerCard';
import energie from '../../../images/Enterprise/energie.jpg'
const Wrapper = styled.div`

`

const Energie = () => {
    return(
        <Wrapper>
            <BannerCard image={energie} title={'Desfasurati inspectii sigure si eficiente'} text={'Dronele vizualizeaza diversele active energetice ale companiilor in timp real pentru planificarea rapida a intretinerii, sporind in acelasi timp siguranta si eficienta muncii inspectorilor.'}
                specs={'Solara | Eoliana | Ulei si Combustibil | Linii de inalta tensiune | Nucleara'}
            />
        </Wrapper>
    )
}

export default Energie;