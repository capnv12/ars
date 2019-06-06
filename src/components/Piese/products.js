import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Nav from './nav';

const ProductSection = styled.div`
display: -webkit-box;
display: flex;
flex-wrap: wrap;
margin: 0 -10px;
`

const ElementWrapper = styled.div`

`
const NavWrapper = styled.div`

`
const Container = styled.div`
    padding: 24px 32px;
    background: #fff;
    // min-height: 474px;
    display: block;

`
const Cell = styled.div`
    flex-basis: 25%;
    max-width: 25%;
    box-sizing: border-box;
    flex-shrink: 0;
    padding: 0 10px;
    box-shadow: 0 5px 25px 0 rgba(0,0,0,0.05);

`
const Cell2 = styled.div`
    flex-basis: 75%;
    max-width: 75%;
    box-sizing: border-box;
    flex-shrink: 0;
    padding: 0 10px;
`

class Products extends React.Component {
    static propTypes = {
        children: PropTypes.instanceOf(Array).isRequired,
      }

      constructor(props) {
        super(props);

        this.state = {
          activeTab: this.props.children[0].props.label,
        };
      }

      onClickTabItem = (tab) => {
        this.setState({ activeTab: tab });
      }

      render() {
        const {
          onClickTabItem,
          props: {
            children,
          },
          state: {
            activeTab,
          }
        } = this;
        return(
            <ProductSection className="tabs" >
                <Cell className="container">
                    <Container>
                        <NavWrapper className="tab-list">
                        {children.map((child) => {
                            const { label } = child.props;

                            return (
                            <Nav
                                activeTab={activeTab}
                                key={label}
                                label={label}
                                onClick={onClickTabItem}
                                />
                                );
                            })}
                            </NavWrapper>
                    </Container>
                    </Cell>
                    <Cell2>
                <ElementWrapper className="tab-content">
                {children.map((child) => {
                    if (child.props.label !== activeTab) return undefined;
                    return child.props.children;
                })}
                </ElementWrapper>
                </Cell2>
            </ProductSection>
        )
    }
}

export default Products;
