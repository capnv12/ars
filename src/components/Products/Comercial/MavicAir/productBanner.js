import React from 'react';
import styled from 'styled-components';
import mavicAir from '../../../../images/Products/MavicAir/mavicAir.png';
import airVideo from '../../../../images/Products/MavicAir/airVideo.jpg';
import {Animated} from "react-animated-css";
import ScrollAnimation from 'react-animate-on-scroll';
import Video from './video'
import '../../../../../node_modules/react-modal-video/scss/modal-video.scss';

const Wrapper = styled.section`
width: 100%;
position: relative;
    overflow: hidden;
    background-color: #000;
`
const ProductItem = styled.div`
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  height:auto;
`
const SectionContent = styled.div`
  height: 856px;
  position: relative;
  z-index: 3;
  overflow: hidden;
`
const Text = styled.div`
display: block;
position: absolute;
top: 160px;
z-index: 100;
left: 50%;
-webkit-transform: translate(-50%,0);
transform: translate(-50%,0);
text-align: center;
`

const H2 = styled.h2`
height: 56px;
margin: 0 0 32px;
`
const H3 = styled.p`
color: #fff;
font-size: 32px;
font-weight: 300;
margin-bottom: 50px;;
`
const ProductImage = styled.div`
  width: 960px;
  display: block;
  padding: 200px 0 8px;
  margin: 0 auto;
  position: relative;
  z-index: 3;
`
const Img = styled.img`
width: 100%;
`
// const ProductVideo = styled.div`
//   position: absolute;
//   top: 0;
//   left: 0;
//   width: 100%;
//   height: 1000px;
//   text-align: center;
//   transition: all .8s;
// `
// const Video = styled.video`
// height: 1000px;
// position: absolute;
// left: 50%;
// margin-left: -960px;
// display: inline-block;
// vertical-align: baseline;
// `
const P = styled.p`
  text-align: center;
  transition: all .3s ease;
  color: #fff;
  width: 960px;
  padding-bottom: 32px;
  margin: 0 auto;
`
const SectionContent2 = styled.div`
  text-align: center;
  padding-bottom: 140px;
`
const VideoBox = styled.div`
margin:0 auto;
  width: 800px;
  height: 450px;
  overflow: hidden;
`
const Ul = styled.ul`
  display: flex;
  width: 1080px;
  margin: 0 auto;
  list-style:none;
  padding:50px;
`
const Li = styled.li`
-webkit-box-flex: 1;
flex: 1;
max-width: 180px;
border-right: 1px solid #fff;
border-left: 1px solid #fff;
color: #fff;
    font-size: 20px;
    line-height: 1.5;
    font-weight: 600;
    text-align: center;
    padding: 0 8px;
`
  class ProductBanner extends React.Component {
    render()
      {
        const { backgroundImage } = this.props;
      var backgroundStyle = {
          backgroundImage: 'url(' + backgroundImage + ')',
      };
      return (
        <Wrapper>
            <ProductItem  style={backgroundStyle} id={backgroundImage}>
                <SectionContent className="card-body">
                    <Text>
                        <H2><img alt='Mavic Air' src='//www5.djicdn.com/assets/images/products/mavic-air/banner/logo-fcef9bc7b6ee1c58a3628054717ae3ac.svg'/></H2>
                        <H3 className="body-content">{this.props.title}</H3>
                    </Text>
                    <ProductImage>
                      <Img alt='Mavic Air' src={mavicAir}/>
                    </ProductImage>
                      <ScrollAnimation
                        animateIn='slideInUp'
                        delay={600}>
                        <P className="body-content">{this.props.text}</P>
                      </ScrollAnimation>
                </SectionContent>
                <SectionContent2>
                  <VideoBox>
                    <Img src={airVideo}/>
                    <Video/>
                  </VideoBox>
                  <Ul>
                    <Li>Panorama Sferica 32 MP</Li>
                    <Li>Portabil</Li>
                    <Li>Camera 4K</Li>
                    <Li>Gimbal pe 3 Axe</Li>
                    <Li>SmartCapture</Li>
                    <Li>Timp de zbor 21 minute</Li>
                  </Ul>
                </SectionContent2>

            </ProductItem>
        </Wrapper>
      )
    }
  }


export default ProductBanner;