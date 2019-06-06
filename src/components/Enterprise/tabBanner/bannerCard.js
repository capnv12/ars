import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.section`
width: 100%;
`
const ProductItem = styled.div`
padding: 40px;
color: #fff;
background-size: cover;
height: 480px;
`
const SectionContent = styled.div`
    margin-left: -15px;
    margin-right: -15px;
`
const Text = styled.div`
margin-left: 33.33333333333333%;
width: 66.66666666666666%;
float: left;
`

const H2 = styled.h2`
font-size: 26px;
margin-bottom: 25px;
position: relative;
`
const P = styled.p`
margin-bottom: 30px;
font-size: 16px;
line-height: 24px;
`
const Ul = styled.ul`
margin-bottom: 120px;
list-style: none;
vertical-align: baseline;
`
const Li = styled.li`
    display: inline-block;
    vertical-align: bottom;
    margin-bottom: 10px;
    color: #fff;
    text-align: center;
    border-right: 1px solid #fff;
    border-left: 1px solid #fff;
    padding: 0 15px;
    width: auto;
    height: auto;
    display: inline-block;
    font-size: 14px;
    color: #fff;
    cursor: pointer;
`

  class BannerCard extends React.Component {
    render()
      {
        const { image } = this.props;
      var style = {
          backgroundImage: 'url(' + image + ')',
      };
      return (
        <Wrapper>
            <ProductItem  style={style} id={image}>
                <SectionContent className="card-body">
                    <Text>
                        <H2>{this.props.title}</H2>
                        <P className="body-content">{this.props.text}</P>
                        <Ul>
                          <Li>Consultare recolta </Li>
                          <Li>Inspectie recolta </Li>
                          <Li>Managementul irigatiilor </Li>
                          <Li>Pulverizare</Li>
                        </Ul>
                    </Text>
                </SectionContent>
            </ProductItem>
        </Wrapper>
      )
    }
  }


export default BannerCard;