import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
const Wrapper = styled.div`

`
const Ul = styled.ul`
height: 100%;
width: 100%;
position: relative;
padding: 25px 20px 20px 100px;
`
const Li = styled.li`
position: relative;
height: 16.6%;
width: 100%;
display: table;
opacity: .7;
z-index: 30;
transition: all .1s;
`
const P = styled.p`
color: #fff;
    font-size: 24px;
    display: table-cell;
    vertical-align: middle;
    cursor: pointer;
`

class TabController extends React.Component {
    static propTypes = {
        activeTab: PropTypes.string.isRequired,
        label: PropTypes.string.isRequired,
        onClick: PropTypes.func.isRequired,
      };

      onClick = () => {
        const { label, onClick } = this.props;
        onClick(label);
      }

      render() {
        const {
          onClick,
          props: {
            activeTab,
            label,
          },
        } = this;

        let className = 'tab-list-item';

        if (activeTab === label) {
          className += ' active-enterprise';
        }

        return(
            <Wrapper>
                    <Ul>
                        <Li
                            className={className}
                            onClick={onClick}
                        >
                        <P>{label}</P>
                        </Li>
                    </Ul>
            </Wrapper>
        )
      }
}

export default TabController;