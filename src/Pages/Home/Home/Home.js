import React from 'react';
import SocialMedia from '../../SocialMedia/SocialMedia';
import Training from '../../Training/Training';
import Banner from '../Banner/Banner';
import Services from '../Services/Services';
import './Home.css';

const Home = () => {
    return (
        <div id="home">
            <Banner></Banner>
            <Services></Services>
            <Training></Training>
            <SocialMedia></SocialMedia>
        </div>
    );
};

export default Home;