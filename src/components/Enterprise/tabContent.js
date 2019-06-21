import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import TabController from './tabController';

const Wrapper = styled.div`
`


const ElementWrapper = styled.div`

`
const ControllerWrapper = styled.div`

`
const Container = styled.div`

`
const TabNav = styled.div`
position: absolute;
left: 0;
top: 0;
width: 30%;
height: 100%;
padding-left: 15px;
padding-right: 15px;
z-index: 30;
border-right: solid 1px rgba(255,255,255,.3);
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
              <TabNav>
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
                  </TabNav>
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
