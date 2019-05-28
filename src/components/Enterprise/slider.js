import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import mavic_2_enterprise_banner from '../../images/Enterprise/mavic_2_enterprise_banner.jpg';

const Wrapper = styled.div`
  width:100%;
`
const Banner1 = styled.div`
    background-image:url(${mavic_2_enterprise_banner});
    height:500px;
    width:100%;
    background-position: center center;
    background-repeat: no-repeat;
    background-size: cover;;

`
const BannerTitle = styled.div`
    color: #fff;
    text-align: center;
    padding-top: 180px;
`
const StyledLink = styled(Link)`
  text-decoration:none;
  cursor:pointer;
  display: block;
  width: 110px;
  height: 30px;
  margin-top: 20px;
  line-height: 30px;
  color: #fff;
  font-size: 1.em;
  font-weight: 600;
  text-align: center;
  border: 2px solid #fff;
  margin-top: 10px;
    width: auto;
    min-width: 110px;
    height: auto;
    padding: 4px 25px;
    display: inline-block;
    font-size: 16px;
    text-transform: uppercase;
  &:hover{
    background-color: #fff;
    color: rgba(66,51,51,.77);
  }
`

export default class ESlider extends React.Component {
    render() {
      return (
          <Wrapper>
            <Carousel infiniteLoop autoPlay swipeable={true} interval={7000} showThumbs={false} showStatus={false}>
                <Banner1>
                    <BannerTitle>
                        <h3>Mavic 2 Enterprise</h3>
                        <p style={{fontSize:'1.3em'}}>See the Bigger Picture</p>
                        <StyledLink>Vezi mai mult</StyledLink>
                    </BannerTitle>
                </Banner1>
            </Carousel>
          </Wrapper>
      );
    }
  }
