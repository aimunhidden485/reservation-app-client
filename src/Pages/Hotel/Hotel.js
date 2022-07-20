import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faLocationDot} from '@fortawesome/free-solid-svg-icons'
import Header from '../../Components/Header/Header';
import Navbar from '../../Components/Navbar/Navbar';
import './hotel.css'
const Hotel = () => {
    return (
        <div>
            <Navbar/>
            <Header type='list'/>
            <div className="hotelContainer">
                <div className="hotelWrapper">
                    <h1 className="hotelTitle">Grand Hotel</h1>
                    <div className="hotelAddress">
                        <FontAwesomeIcon icon={faLocationDot}/>
                        <span>Elton St 125 New york</span>
                    </div>
                    <span className="hotelDistance">Excellent location - 500m from center</span>
                    <span className="hotelPriceHighlight">Book a stay over $124 at this property and get a free airport taxi</span>
                    <div className="hotelImages">
                        
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hotel;