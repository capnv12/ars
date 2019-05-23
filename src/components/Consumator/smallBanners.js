import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
    width:100%;
    height: 240px;
    padding: 64px;
    display: -webkit-box;
    display: flex;
    -webkit-box-direction: normal;
    -webkit-box-orient: vertical;
    -moz-flex-direction: column;
    flex-direction: column;
    -webkit-box-pack: center;
    -moz-justify-content: center;
    justify-content: center;
    background-size: 100%;
    background-repeat: no-repeat;
    background-position: center;
`
const SectionContent = styled.div`
    flex-basis: 50%;
    max-width: 50%;
    padding: 64px;
`
const Text = styled.div`
    -webkit-box-flex: 1;
    -moz-flex: 1;
    flex: 1;
    -webkit-box-pack: center;
    -moz-justify-content: center;
    justify-content: center
`
const MaiMultButton = styled.a`
    display: inline-block;
    font-size: 16px;
    font-weight: 600;
    line-height: 46px;
    height: 46px;
    color: #303233;
    cursor: pointer;
`
const H2 = styled.h2`
    font-size: 40px;
`
const P = styled.p`
    color: #303233;
    font-size: 16px;
    line-height: 24px;
    margin:5px;
`
class LearnButton extends React.Component {
    render() {
      return (
        <MaiMultButton className="button button-primary">
          <i className="fa fa-chevron-right"></i>Vezi mai mult >
        </MaiMultButton>
      )
    }
  }

class SmallBanner extends React.Component{
    render() {
        const { image } = this.props;
        var style = {
            backgroundImage: 'url(' + image + ')',
        };
        return (
          <Wrapper style={style} id={image} className="card-header">
              <SectionContent>
                <Text>
                    <H2>{this.props.title}</H2>
                    <P className="body-content">{this.props.text}</P>
                </Text>
            </SectionContent>
          </Wrapper>
        )
      }
    }

export default SmallBanner;