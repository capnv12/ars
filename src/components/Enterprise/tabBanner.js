import React from 'react';
import styled from 'styled-components';
import TabContent from './tabContent';
import Agricultura from './tabBanner/agricultura'
import Energie from './tabBanner/energie';

const Wrapper = styled.div`
    width:1200px;
    margin: 0 auto;

`
const Container = styled.div`
    position: relative;
    z-index: 20;
    margin: 0 auto;
    position: relative;
    overflow: hidden;
    z-index: 1;
`

const TabBanner = () => {
    return(
        <Wrapper>
            <Container>
                <TabContent>
                    <div label="Agricultura">
                        <Agricultura/>
                    </div>
                    <div label="Energie">
                        <Energie/>
                    </div>
                    <div label="Energie">
                        <Energie/>
                    </div>
                </TabContent>
            </Container>
        </Wrapper>
    )
}

export default TabBanner;