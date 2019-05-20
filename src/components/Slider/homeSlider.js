import React from 'react';
import styled from 'styled-components';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import osmo_pocket_background from '../../images/SliderImages/osmo_pocket_background.jpg';
import osmo_pocket from '../../images/SliderImages/osmo_pocket.png';
import osmo_pocket_title from '../../images/SliderImages/osmo_pocket_title.png';
import osmo_action from '../../images/SliderImages/osmo_action.png';

const Background1 = styled.img`

`
const Background2 = styled.img`

`
const Wrapper = styled.div`
  width:100%;
`
const Banner1 = styled.div`
  background-image:url(${osmo_pocket_background});
  max-height:750px;
  width:100%;

`
const Banner2 = styled.div`
  background-image:background-image: linear-gradient(top,#282c35,#090b18);background-image: -webkit-linear-gradient(top,#282c35,#090b18);background-image: -o-linear-gradient(top,#282c35,#090b18);background-image: -ms-linear-gradient(top,#282c35,#090b18);background-image: -moz-linear-gradient(top,#282c35,#090b18);
  max-height:750px;
  width:100%;
  `
const BannerDescription = styled.h3`
  font-size: 24px;
  color:#fff;
  padding-top:25px;
`
const BannerTitle = styled.img`
  width:351;
  margin:0 auto;
  padding-top:75px;

`


export default class DemoCarousel extends React.Component {
    render() {
      return (
          <Wrapper>
            <Carousel infiniteLoop autoPlay swipeable={true} interval={7000} showThumbs={false} showStatus={false}>
                <Banner1>
                  <BannerTitle style={{ width:'351px'}} src={osmo_pocket_title} />
                  <BannerDescription>See the Bigger Picture</BannerDescription>
                  <Background1 style={{ width:'1300px'}} src={osmo_pocket} alt="Osmo Pocket"/>
                </Banner1>
                <Banner2>
                  <BannerTitle style={{ width:'351px'}} src={osmo_pocket_title} />
                  <BannerDescription>Unleash Your Other Side</BannerDescription>
                  <Background2 style={{ width:'756px'}} src={osmo_action} alt="Osmo Action"/>
                </Banner2>
            </Carousel>
          </Wrapper>
      );
    }
  }