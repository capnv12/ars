import React from 'react';
import SimpleSlider from '../Slider/homeSlider';
import CardList from '../CardsHomepage/CardList';
import ServiceList from '../ServiceList/serviceList';


const Home = () => {
    return(
        <div>
            <SimpleSlider/>
            <CardList/>
            <ServiceList/>
        </div>
    )
}

export default Home;