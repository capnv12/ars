import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.section`
    // flex-basis: 50%;
    // max-width: 50%;
`
const ProductItem = styled.div`
    background: #fff;
    transition: all .3s ease;
    cursor: pointer;
    margin-bottom: 20px;
`
const Figure = styled.div`
    padding: 0;
    width: 100%;
    height: 270px;
    overflow: hidden;
    background-size: 10 0%;
    background-repeat: no-repeat;
    background-position: center;
`
const SectionContent = styled.div`
    padding: 6px 32px 32px;
`
const Text = styled.div`
    height: 32px;
    margin-bottom: 16px;
    // display: -webkit-box;
    // display: flex;
    -webkit-box-align: center;
    -moz-align-items: center;
    align-items: center;
`

const H2 = styled.h2`
    color: #303233;
    font-size: 24px;
    min-height: 24px;
    margin-bottom: 16px;
    line-height: 1;
`
const P = styled.p`
    color: #303233;
    font-size: 16px;
    line-height: 24px;
    margin-bottom: 32px;
    height: 48px;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
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

// class SmallCardHeader extends React.Component {
//     render() {
//       const { image } = this.props;
//       var style = {
//           backgroundImage: 'url(' + image + ')',
//       };
//       return (
//         <Figure style={style} id={image} className="card-header"></Figure>
//       )
//     }
//   }

  class SmallBuyButton extends React.Component {
    render() {
      return (
        <CumparaButton className="button button-primary">CUMPARA ACUM
        </CumparaButton>
      )
    }
  }
  class SmallLearnButton extends React.Component {
    render() {
      return (
        <MaiMultButton className="button button-primary">
          <i className="fa fa-chevron-right"></i>Vezi mai mult >
        </MaiMultButton>
      )
    }
  }

  class ProductCard extends React.Component {
    render()
      {
        const { image } = this.props;
      var style = {
          backgroundImage: 'url(' + image + ')',
      };
      return (
        <Wrapper>
            <ProductItem>
            <Figure style={style} id={image} className="card-header"></Figure>
                <SectionContent className="card-body">
                    <Text>
                        <H2>{this.props.title}</H2>
                        <P className="body-content">{this.props.text}</P>
                    </Text>
                    <SmallBuyButton/>
                    <SmallLearnButton/>
                </SectionContent>
            </ProductItem>
        </Wrapper>
      )
    }
  }


export{
    ProductCard,
}