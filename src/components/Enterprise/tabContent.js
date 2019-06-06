import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import TabController from './tabController';

const Wrapper = styled.div`
`

const ProductSection = styled.div`

`

const ElementWrapper = styled.div`

`
const ControllerWrapper = styled.div`

`
const Container = styled.div`

`

class TabContent extends React.Component {
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
            <Wrapper className="tabs" >
              <ControllerWrapper className="container">
                <Container className="tab-list">
                {children.map((child) => {
                  const { label } = child.props;
                  return (
                    <TabController
                      activeTab={activeTab}
                      key={label}
                      label={label}
                      onClick={onClickTabItem}
                      />
                      );
                  })}
                  </Container>
                </ControllerWrapper>
                <ElementWrapper className="tab-content">
                  {children.map((child) => {
                    if (child.props.label !== activeTab) return undefined;
                    return child.props.children;
                  })}
                </ElementWrapper>
            </Wrapper>
        )
    }
}

export default TabContent;
