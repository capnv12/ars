import React from 'react';
import styled from 'styled-components';
import BannerCard from './bannerCard';
import media from '../../../images/Enterprise/media.jpg'
const Wrapper = styled.div`

`
const Media = () => {
    return(
        <Wrapper>
            <BannerCard image={media} title={'Spune povestile dintr-o perspectiva noua'} text={'Platformele portabile de drone permit jurnalistilor, cinematografilor, vloggerilor si altora sa captureze un continut unic si interesant de oriunde din lume.'}
                specs={'Jurnalism | Cinematografie | Fotografie nunti'}
            />
        </Wrapper>
    )
}

export default Media;