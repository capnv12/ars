import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
const Wrapper = styled.div`
position: absolute;
left: 0;
top: 0;
width: 30%;
height: 100%;
padding-left: 15px;
padding-right: 15px;
z-index: 30;
`
const Ul = styled.ul`
height: 100%;
    width: 100%;
    border-right: solid 1px rgba(255,255,255,.3);
    position: relative;
    padding: 10px 20px 10px 100px;
    list-style: none;
    vertical-align: baseline;
`
const Li = styled.li`
position: absolute;
height: 16.6%;
width: 100%;
display: table;
opacity: .7;
z-index: 30;
transition: all .4s;
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
          className += ' tab-list-active';
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