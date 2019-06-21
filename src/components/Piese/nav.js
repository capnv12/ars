import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import './navStyle.css';
const Wrapper = styled.div`

`
const Ul = styled.ul`
list-style: none;
display: flex;
    flex-wrap: wrap;
    margin: 0 -10px;
`
const Li = styled.li`
    padding: 8px 0;
    cursor: pointer;
    font-weight: 600;
    max-width: 200px;
    font-size: 18px;
    line-height: 36px;
    color: #303233;
    display: -webkit-box;
    display: flex;
    -webkit-box-align: center;
    align-items: center;
`

class Nav extends React.Component {
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
                        {label}
                        </Li>
                    </Ul>
            </Wrapper>
        )
      }
}

export default Nav;