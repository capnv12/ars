import React from 'react';
import styled from 'styled-components';
import ModalVideo from 'react-modal-video'
import '../../../../../node_modules/react-modal-video/scss/modal-video.scss';

const Button = styled.button`
display: -webkit-inline-box;
display: inline-flex;
-webkit-box-pack: center;
justify-content: center;
-webkit-box-align: center;
align-items: center;
height: 64px;
width: 64px;
border-radius: 50%;
background-color: rgba(48,50,51,.5);
transition: all .3s ease;
cursor: pointer;
position: absolute;
top: 68%;
left: 50%;
-webkit-transform: translate(-50%,-50%);
transform: translate(-50%,-50%);
border:none;
// z-index:1000;
 &:before{
    content: '';
    display: inline-block;
    width: 0;
    height: 0;
    margin-right: -5px;
    border-left: solid 18px #fff;
    border-top: solid 10px transparent;
    border-bottom: solid 10px transparent;
 }
`

class Video extends React.Component {

    constructor () {
      super()
      this.state = {
        isOpen: false
      }
      this.openModal = this.openModal.bind(this)
    }

    openModal () {
      this.setState({isOpen: true})
    }

    render () {
      return (
        <div>
          <ModalVideo channel='youtube' isOpen={this.state.isOpen} videoId='uF-WXHwzURs' onClose={() => this.setState({isOpen: false})} />
          <Button onClick={this.openModal}></Button>
        </div>
      )
    }
  }

  export default Video;