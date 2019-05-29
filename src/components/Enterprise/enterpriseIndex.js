import React from 'react';
import styled from 'styled-components';


import {Element} from './elements';

const Wrapper = styled.div`
position: relative;
`
const Container = styled.div`
position: relative;
    z-index: 20;
`
const SwiperWrapper = styled.div``
const Figure = styled.div`
    height: 480px;
    width: 100%;
    margin: 40px 0 40px 0;
    color: #fff;
    background-size: cover;
`
const ControlerWrapper = styled.div`
    position: absolute;
    left: 0;
    top: 0;
    width: 30%;
    height: 100%;
    padding-left: 15px;
    padding-right: 15px;
    z-index: 30;
`
const Ul = styled.ul`
    height: 100%;
    width: 100%;
    border-right: solid 1px rgba(255,255,255,.3);
    position: relative;
    padding: 20px 20px 10px 100px;
    list-style: none;
    vertical-align: baseline;
`
const Li = styled.li`
    position: relative;
    height: 16.6%;
    width: 100%;
    display: table;
    opacity: .7;
    z-index: 30;
    transition: all .4s;
    color: #fff;
    font-size: 24px;
    vertical-align: middle;
    cursor: pointer;
`

class Slide extends React.Component{
    render(){
        const { image } = this.props;
        var style = { backgroundImage: 'url(' + image + ')'};

        return(

            <Figure style={style} id={image}></Figure>
        )
    };
}



class Swiper extends React.Component{
        state={
            active:[Element[0].id]
        }


    render(){
        const {active} = this.state

        return(
            <Wrapper>
                <Container>
                    <SwiperWrapper>
                        <Slide activeImage={active} image={Element[0].image} />
                        <Controler/>
                    </SwiperWrapper>
                </Container>
            </Wrapper>
        )
    }
}
const Controler = ({activeImage}) => {
    console.log(activeImage)
        return(
            <ControlerWrapper>
                <Ul>
                    <Li>{Element[0].name}</Li>
                    <Li>{Element[1].name}</Li>
                    <Li>{Element[2].name}</Li>
                    <Li>{Element[3].name}</Li>
                    <Li>{Element[4].name}</Li>
                    <Li>{Element[5].name}</Li>
                </Ul>
            </ControlerWrapper>
        )
}

export default Swiper;