import { format } from 'date-fns';
import React, { useState } from 'react';
import { DateRange } from 'react-date-range';
import { useLocation } from 'react-router-dom';
import Header from '../../Components/Header/Header';
import Navbar from '../../Components/Navbar/Navbar';
import SearchItem from '../../Components/SearchItem/SearchItem';
import './List.css'

const List = () => {
    const location=useLocation()
   const [destination, setDestination]=useState(location.state.destination)
   const [date, setDate]=useState(location.state.date)
   console.log(date[0].startDate)
   const [openDate, setOpenDate]=useState(false)
   const [options, setOptions]=useState(location.state.options)
    return (
        <div>
            <Navbar/>
            <Header type="list"/>
            <div className='listContainer'>
                <div className="listWrapper">
                    <div className="listSearch">
                        <h1 className='lsTitle'>Search</h1>
                        <div className="lsItem">
                            <label htmlFor="">Destination</label>
                            <input type="text" placeholder={destination}/>
                        </div>
                        <div className="lsItem">
                            <label htmlFor="">Check-in-date: </label>
                            <span onClick={()=>setOpenDate(!openDate)}>{`${format(date[0]?.startDate, "PPP")} to ${format(date[0]?.endDate, "PPP")}`}</span>
                           {
                            openDate && <DateRange onChange={(item)=>setDate(item.selection)} minDate={new Date()} ranges={date}  />
                           }
                        </div>
                        <label style={{color: 'black', fontSize: '12px'}} htmlFor="">Options</label>
                        <div className="lsOptions">
                        <div className="lsItem">
                           
                            <div className="lsOptionItem">
                                <span className='lsOptionText'>Min price <small>per night</small></span>
                                <input type='number' className='lsOptionInput'/>
                            </div>
                        </div>
                        <div className="lsItem">
                            <label htmlFor=""></label>
                            <div className="lsOptionItem">
                                <span className='lsOptionText'>Max price <small>per night</small></span>
                                <input type='number' className='lsOptionInput'/>
                            </div>
                        </div>
                        <div className="lsItem">
                            <label htmlFor=""></label>
                            <div className="lsOptionItem">
                                <span className='lsOptionText'>Adult </span>
                                <input type='number' className='lsOptionInput' placeholder={options.adult} min='1'/>
                            </div>
                        </div>
                        <div className="lsItem">
                            <label htmlFor=""></label>
                            <div className="lsOptionItem">
                                <span className='lsOptionText'>Children</span>
                                <input type='number' className='lsOptionInput' placeholder={options.children} min='0'/>
                            </div>
                        </div>
                        <div className="lsItem">
                            <label htmlFor=""></label>
                            <div className="lsOptionItem">
                                <span className='lsOptionText'>Room</span>
                                <input type='number' className='lsOptionInput' placeholder={options.room} min='1'/>
                            </div>
                        </div>
                        </div>
                        <button>Search</button>
                    </div>
                    <div className="listResult">
                    <SearchItem/>
                    <SearchItem/>
                    <SearchItem/>
                    <SearchItem/>
                    <SearchItem/>
                    <SearchItem/>
                    <SearchItem/>
                    <SearchItem/>
                    
                    </div>
                    
                </div>
            </div>
        </div>
    );
};

export default List;