import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.section`
    flex-basis: 50%;
    max-width: 50%;
    display: -webkit-box;
    display: flex;
    height: 480px;
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
const H2 = styled.h2`
    font-size: 40px;
`
const P = styled.p`
    color: #303233;
    font-size: 24px;
    line-height: 32px;
    margin:5px;
    font-weight:500;
`
const CumparaButton = styled.a`
    background: #3c3e40;
    background-image: linear-gradient(-180deg,#3c3e40 0%,#303233 100%);
    display: inline-block;
    color: #fff;
    font-size: 16px;
    line-height: 16px;
    padding: 15px 32px;
    border: none;
    border-radius: 2px;
    outline: none;
    cursor: pointer;
    transition: all .3s ease;
    margin:100px 100px 0 0 ;
    &:hover{
        background-image: linear-gradient(-180deg,#545759 0%,#303233 100%);
    }
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

class CardHeader extends React.Component {
    render() {
      const { image } = this.props;
      var style = {
          backgroundImage: 'url(' + image + ')',
      };
      return (
        <Wrapper style={style} id={image} className="card-header"></Wrapper>
      )
    }
  }

  class BuyButton extends React.Component {
    render() {
      return (
        <CumparaButton className="button button-primary">CUMPARA ACUM
        </CumparaButton>
      )
    }
  }
  class LearnButton extends React.Component {
    render() {
      return (
        <MaiMultButton className="button button-primary">
          <i className="fa fa-chevron-right"></i>Vezi mai mult >
        </MaiMultButton>
      )
    }
  }

  class CardBody extends React.Component {
    render() {
      return (
        <SectionContent className="card-body">
            <Text>
                <H2>{this.props.title}</H2>
                <P className="body-content">{this.props.text}</P>
            </Text>
            <BuyButton/>
            <LearnButton/>
        </SectionContent>
      )
    }
  }


export{
    CardHeader,
    CardBody,
}