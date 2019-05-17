import React from 'react';
import styled from 'styled-components';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import logo from '../../images/logo/logo.png';

const Logo = styled.img`
    // max-width:200px;
    // height:72px;
    // margin-top:10px;
`
const Wrapper = styled.div`
  width:100%;
`
const Page = styled.div`
  width:100%;
`

export default class DemoCarousel extends React.Component {
    render() {
      return (
          <Wrapper>
            <Carousel>
                <div>
                    <Logo src={logo} />
                    <p className="legend">Legend 1</p>
                </div>
                <div>
                    <img src="assets/2.jpeg" />
                    <p className="legend">Legend 2</p>
                </div>
                <div>
                    <img src="assets/3.jpeg" />
                    <p className="legend">Legend 3</p>
                </div>
            </Carousel>
          </Wrapper>
      );
    }
  }