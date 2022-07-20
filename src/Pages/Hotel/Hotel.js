import React, { useState } from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faCircleArrowLeft, faCircleArrowRight, faCircleXmark, faLocationDot} from '@fortawesome/free-solid-svg-icons'
import Header from '../../Components/Header/Header';
import Navbar from '../../Components/Navbar/Navbar';
import './hotel.css'
import MailList from '../../Components/MailList/MailList';
import Footer from '../../Components/Footer/Footer';
const Hotel = () => {
    const [slideNumber, setSlideNumber]=useState(0)
    const [open, setOpen]=useState(false)
    const photos=[
        {src: 'https://t-cf.bstatic.com/xdata/images/hotel/max1024x768/13128451.jpg?k=eb149d895c4300d0a33fb404d45da03569ec0d4f3a4ef24b8b16baf524c0b503&o=&hp=1'},
        
        {src: 'https://t-cf.bstatic.com/xdata/images/hotel/max1024x768/241315670.jpg?k=e840e8e98ac0c3c2b774877791a2c041fbabf2fd8f580d81f652ff55b616a5c4&o=&hp=1'},
        {src: 'https://t-cf.bstatic.com/xdata/images/hotel/max1024x768/328064357.jpg?k=bc26e0aeb6581529c38eb4fe591a41afe396cacf2b4252e5288c4a2a1a60d73c&o=&hp=1'},
       
        {src: 'https://t-cf.bstatic.com/xdata/images/hotel/max1024x768/241312386.jpg?k=90a115630d561d607014d29c76de79c3741555010fb4a69587702813d71b4ab4&o=&hp=1'},
        {src:'https://t-cf.bstatic.com/xdata/images/hotel/max1024x768/301780004.jpg?k=b2b625eff395b16ad8e2f7e98ce84c748aca1eaa5a62330f648936c7ff4b3bcb&o=&hp=1'},
        {src:'https://t-cf.bstatic.com/xdata/images/hotel/max1024x768/283030128.jpg?k=809be09feacb12cb6ad19bb843072f6696ee737707863e790f210a13e1f0f172&o=&hp=1'}
    ]

    const handleOpen=(i)=>{
        setSlideNumber(i)
        setOpen(true)
    }
    const handleMove=(direction)=>{
        let newSlideNumber
        if(direction==='l'){
            newSlideNumber= slideNumber===0? 5 : slideNumber -1
        }
        else{
            newSlideNumber= slideNumber===5? 0 : slideNumber+1
        }
        setSlideNumber(newSlideNumber)
    }
    return (
        <div>
            <Navbar/>
            <Header type='list'/>
            <div className="hotelContainer">
               {open &&  <div className="slider">
               <FontAwesomeIcon icon={faCircleXmark}  className='close' onClick={()=>setOpen(false)}/>
              <div className="imgDiv">
              <FontAwesomeIcon icon={faCircleArrowLeft}  className='arrow' onClick={()=>handleMove('l')}/>
               <div className="sliderWrapper">
                <img src={photos[slideNumber].src} alt='' className='sliderImg'/>
               </div>
               <FontAwesomeIcon icon={faCircleArrowRight}  className='arrow' onClick={()=>handleMove('r')}/>
              </div>
                </div>
                }
                <div className="hotelWrapper">
                    <button className="bookNow">Reserve or Book Now</button>
                    <h1 className="hotelTitle">Grand Hotel</h1>
                    <div className="hotelAddress">
                        <FontAwesomeIcon icon={faLocationDot}/>
                        <span>Elton St 125 New york</span>
                    </div>
                    <span className="hotelDistance">Excellent location - 500m from center</span>
                    <span className="hotelPriceHighlight">Book a stay over $124 at this property and get a free airport taxi</span>
                    <div className="hotelImages">
                        {
                            photos.map((photo, i)=><div className='hotelImageWrapper'>
                                <img onClick={()=>handleOpen(i)} src={photo.src} alt='' className='hotelimg'/>

                            </div>)
                        }
                    </div>
                    <div className="hotelDetails">
                        <div className="hotelDetailsText">
                            <h1 className="hotelDetailsTitle">
                                Stay in the heart of Madrid
                            </h1>
                            <p className="hotelDetailsDesc">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid a illo dolorem dicta possimus pariatur iure unde velit assumenda consequuntur repudiandae fugit earum veritatis expedita minus enim soluta, corporis quasi incidunt! Omnis a culpa placeat sunt deserunt sequi. Ea at, officia incidunt quos necessitatibus repellendus debitis fugit illum suscipit nisi.
                            </p>
                        </div>
                        <div className="hotelDetailsPrice">
                            <h1>Perfect for a 9 night stay</h1>
                            <span>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Beatae nesciunt qui perferendis. Qui, laboriosam sapiente.</span>
                            <h2><b>$195</b> 9 nights</h2>
                            <button>Reserve or book now</button>
                        </div>
                    </div>
                </div>
                <MailList/>
                <Footer/>
            </div>
        </div>
    );
};

export default Hotel;