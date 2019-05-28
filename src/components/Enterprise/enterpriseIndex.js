// import React from 'react';
// import styled from 'styled-components';
// import agricultura from '../../images/Enterprise/agricultura.jpg'
// import energie from '../../images/Enterprise/energie.jpg'

// const Wrapper = styled.div`
// position: relative;
// `
// const Container = styled.div`
// position: relative;
//     z-index: 20;
// `
// const SwiperWrapper = styled.div``
// const Figure = styled.div`
//     height: 480px;
//     width: 100%;
//     margin: 40px 0 40px 0;
//     color: #fff;
//     background-size: cover;
// `
// const ControlerWrapper = styled.div`
//     position: absolute;
//     left: 0;
//     top: 0;
//     width: 30%;
//     height: 100%;
//     padding-left: 15px;
//     padding-right: 15px;
//     z-index: 30;
// `
// const Ul = styled.ul`
//     height: 100%;
//     width: 100%;
//     border-right: solid 1px rgba(255,255,255,.3);
//     position: relative;
//     padding: 20px 20px 10px 100px;
//     list-style: none;
//     vertical-align: baseline;
// `
// const Li = styled.li`
//     position: relative;
//     height: 16.6%;
//     width: 100%;
//     display: table;
//     opacity: .7;
//     z-index: 30;
//     transition: all .4s;
//     color: #fff;
//     font-size: 24px;
//     vertical-align: middle;
//     cursor: pointer;
// `

// class Slide extends React.Component{
//     render(){
//         const { image } = this.props;
//         var style = { backgroundImage: 'url(' + image + ')'};

//         return(

//             <Figure style={style} id={image}></Figure>
//         )
//     };
// }

// class Controler extends React.Component {
//     render(){
//         return(
//             <ControlerWrapper>
//                 <Ul>
//                     <Li onClick={this.setState.active}>Agricultura</Li>
//                     <Li onClick={this.setState.energie}>Energie</Li>
//                     <Li>Siguranta Publica</Li>
//                     <Li>Media</Li>
//                     <Li>Infrastructura</Li>
//                     <Li>Constructii</Li>

//                 </Ul>
//             </ControlerWrapper>
//         )
//     }
// }
// console.log(Controler);

// class Swiper extends React.Component{
//     constructor() {
//         super();
//         this.state = {
//             image: [
//                 {
//                     id:1,
//                     img: {agricultura}
//                 },
//                 {
//                     id:2,
//                     img:{energie}
//                 }
//             ]
//         }
//     }

//     handleClick = () => {
//         this.state.image[0]['img']:
//     }

//     render(){
//         return(
//             <Wrapper>
//                 <Container>
//                     <SwiperWrapper>
//                         <Slide image={agricultura}/>
//                         <Controler/>
//                     </SwiperWrapper>
//                 </Container>
//             </Wrapper>
//         )
//     }
// }

// export default Swiper;