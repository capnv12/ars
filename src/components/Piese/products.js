import React from 'react';
import styled from 'styled-components';
import {ProductCard} from './productCard';
import N3 from '../../images/Piese/n3.png';
import Naza_v2 from '../../images/Piese/naza_v2.png';
import E305 from '../../images/Piese/e305.jpg';
import E2000 from '../../images/Piese/e2000.jpg';
import E5000 from '../../images/Piese/e5000.jpg';
import E7000 from '../../images/Piese/e7000.png';
import Snail from '../../images/Piese/snail.jpg';
import Takyon from '../../images/Piese/takyon.png';
import Cendence from '../../images/Piese/cendence.jpg';
import Datalink_3 from '../../images/Piese/datalink_3.jpg';
import Manifold_2 from '../../images/Piese/manifold_2.png';
import Guidance from '../../images/Piese/guidance.jpg';
import D_RTK_2 from '../../images/Piese/d_rtk_2.jpg';
import D_RTK from '../../images/Piese/d_rtk.jpg';
import Iosd_mark_2 from '../../images/Piese/iosd_mark_2.png';
import Iosd_mini from '../../images/Piese/iosd_mini.png';

const Wrapper = styled.div`
    flex-basis: 75%;
    max-width: 75%;
    box-sizing: border-box;
    flex-shrink: 0;
    padding: 0 10px;
`
const Container = styled.div`
    padding: 24px 32px;
    background: #fff;
    min-height: 474px;
    box-shadow: 0 5px 25px 0 rgba(0,0,0,0.05);
`
const Ul = styled.ul`
display: flex;
flex-wrap: wrap;
margin: 0 -10px;
list-style: none;
`
const Li = styled.li`
    flex-basis: 50%;
    max-width: 50%;
    box-sizing: border-box;
    flex-shrink: 0;
    padding: 0 10px;
`
class Products extends React.Component {
    // constructor() {
    //     super();
    //     this.state = {
    //       category:'controler-de-zbor',
    //     }
    //   }

    // CategoryChange = (category) => {
    //     this.setState({category:category});
    //   }

      render(){
        return(
        <Wrapper>
            <Container>
                <Ul>
                    <Li>
                        <ProductCard image={N3} title={'N3'} text={'Un nou algoritm de control al zborului, sistem dual-IMU si sistem de amortizare a vibratiilor.'}/>
                    </Li>
                    <Li>
                        <ProductCard image={Naza_v2} title={'Naza-M V2'} text={'Design integrat, modul de alimentare independent si mai multe aplicatii.'}/>
                    </Li>
                </Ul>
                <Ul>
                        <Li>
                            <ProductCard image={E7000} title={'E7000'} text={'Sistem de propulsie imbunatatit, conceput pentru aplicatii industriale.'}/>
                        </Li>
                        <Li>
                            <ProductCard image={E5000} title={'E5000'} text={'Un sistem de propulsie conceput pentru aplicatii industriale multirotor.'}/>
                        </Li>
                        <Li>
                            <ProductCard image={E2000} title={'E2000'} text={'Sistem de propulsie proiectat pentru aplicatii industriale.'}/>
                        </Li>
                        <Li>
                            <ProductCard image={Snail} title={'Snail'} text={'Un sistem optimizat de propulsie pentru drone de cursa.'}/>
                        </Li>
                        <Li>
                            <ProductCard image={E305} title={'E305'} text={'Sistem de propulsie bine reglat conceput pentru drone cu greutatea de 1-2,5 kg.'}/>
                        </Li>
                        <Li>
                            <ProductCard image={Takyon} title={'Takyon Z318 and Z420'} text={'System Custom on Chip(SOC) si design modular cu DJI Assistant 2.'}/>
                        </Li>
                </Ul>
                <Ul>
                    <Li>
                        <ProductCard image={Cendence} title={'Cendence'} text={'Telecomanda Cendence are mai multe butoane personalizabile, permitandu-va sa setati…'}/>
                    </Li>
                    <Li>
                        <ProductCard image={Datalink_3} title={'Datalink 3'} text={'Telecomanda adaptabila cu modem integrat.'}/>
                    </Li>
                </Ul>
                <Ul>
                    <Li>
                        <ProductCard image={Manifold_2} title={'Manifold 2'} text={'Transforma-ti viziunea in realitate.'}/>
                    </Li>
                    <Li>
                        <ProductCard image={Guidance} title={'Guidance'} text={'Sistem revolutionar de detectare a obstacolelor.'}/>
                    </Li>
                </Ul>
                <Ul>
                    <Li>
                        <ProductCard image={D_RTK_2} title={'D-RTK 2'} text={'Sistem de pozitionare la nivel centimetru cu transmisie de date neintrerupta.'}/>
                    </Li>
                    <Li>
                        <ProductCard image={D_RTK} title={'D-RTK'} text={'Sistem de pozitionare special conceput pentru controlorii de zbor din seria DJI A3.'}/>
                    </Li>
                    <Li>
                        <ProductCard image={Iosd_mark_2} title={'iOSD MARK II'} text={'Datele de zbor in timp real pentru transmiterea la sol'}/>
                    </Li>
                    <Li>
                        <ProductCard image={Iosd_mini} title={'iOSD mini'} text={'Conceput pentru un sistem pilot automat DJI si este utilizat impreuna cu modelele WooKong-M, Naza-M sau Naza-M V2.'}/>
                    </Li>
                </Ul>
            </Container>
        </Wrapper>
        )
    }
}

export default Products;
