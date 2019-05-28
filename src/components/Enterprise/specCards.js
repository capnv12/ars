import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
    width:100%;
    float:left;
    // border: 1px solid rgba(236, 236, 236, 1);
    box-shadow: 0 5px 25px 0 rgba(0,0,0,0.05);
`
const ProductItem = styled.div`
    padding: 15px 15px 20px;
    background-color: #fff;
    margin:0 5px 0 5px;
`
const Figure = styled.div`
padding: 0;
width: 100%;
height: 340px;
overflow: hidden;
    // display: block;
    // width: 100%;
    // margin-bottom: 15px;
    background-size: 100%;
    background-repeat: no-repeat;
    background-position: center;

`
const H4 = styled.h4`
    margin-bottom: 10px;
    margin-top: 10px;
    font-size: 1.6em;
    color: #141414;
`
const P = styled.p`
    font-size: 1.4em;
    line-height: 20px;
    color: #979797;
`

class SpecCards extends React.Component {
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
                        <H4>{this.props.title}</H4>
                        <P className="body-content">{this.props.text}</P>
            </ProductItem>
        </Wrapper>
      )
    }
  }

  export default SpecCards;