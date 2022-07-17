import { faCalendar } from "@fortawesome/free-regular-svg-icons";
import {
  faBed,
  faCar,
  faPlane,
  faTaxi,
  faPerson,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import "./Header.css";
import { DateRange } from "react-date-range";
import 'react-date-range/dist/styles.css'; 
import 'react-date-range/dist/theme/default.css'; 
import { format } from "date-fns";

const Header = () => {
    const [openDate, setOpenDate]=useState(false)
  const [date, setDate] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);
const [openOptions, setOpenOptions]=useState(false)
const [options, setOptions]=useState({
    adult:1,
    children:0,
    room:1
})

const handleOption=(name, operation)=>{
  setOptions((prev)=>{
    return{
      ...prev,
      [name]: operation === "i"? options[name]+1: options[name]-1
    }
    
  })
}
  return (
    <div className="header">
      <div className="headerContainer">
        <div className="headerList">
          <div className="headerListItem active">
            <FontAwesomeIcon icon={faBed} />
            <span>Stays</span>
          </div>
          <div className="headerListItem">
            <FontAwesomeIcon icon={faPlane} />
            <span>Flights</span>
          </div>
          <div className="headerListItem">
            <FontAwesomeIcon icon={faCar} />
            <span>Car rentals</span>
          </div>
          <div className="headerListItem">
            <FontAwesomeIcon icon={faBed} />
            <span>Attractions</span>
          </div>
          <div className="headerListItem">
            <FontAwesomeIcon icon={faTaxi} />
            <span>Airport Taxi</span>
          </div>
        </div>
        <div className="headerTitle">
          <h1>A lifetime discounts? It's genius!</h1>
        </div>
        <p className="headerDesc">
          Get rewarded for your travels. Unlock instant savings of 10% or more
          with free E-booking account
        </p>
        <button className="headerButton">Register / Sign in</button>
        <div className="headerSearch">
          <div className="headerSearchItem">
            <FontAwesomeIcon
              icon={faBed}
              className="headerIcon"
            ></FontAwesomeIcon>
            <input
              type="text"
              placeholder="Where are you going?"
              className="headerSearchInput"
            />
          </div>
          <div className="headerSearchItem">
            <FontAwesomeIcon
              icon={faCalendar}
              className="headerIcon"
            ></FontAwesomeIcon>
            <span onClick={()=>setOpenDate(!openDate)} className="headerSearchText">{`${format(date[0].startDate, "PPP")} to ${format(date[0].startDate, "PPP")}`}</span>
            {
                openDate && <DateRange
                editableDateInputs={true}
                onChange={(item) => setDate([item.selection])}
                moveRangeOnFirstSelection={false}
                ranges={date}
                className='date'
              />
            }
          </div>
          <div className="headerSearchItem">
            <FontAwesomeIcon
              icon={faPerson}
              className="headerIcon"
            ></FontAwesomeIcon>
            <span onClick={()=>setOpenOptions(!openOptions)} className="headerSearchText">{`${options.adult} adult, ${options.children} children, ${options.room} room`}</span>
            {
              openOptions && <div className="options">
              <div className="optionItem">
              <span className="optionText">Adult</span>
               <div className="optionCounter">
               <button disabled={options.adult <=1} className="optionCounterBtn" onClick={()=>handleOption("adult", "d")}>-</button>
               <span className="optionCounterNumber">{options.adult}</span>
               <button className="optionCounterBtn" onClick={()=>handleOption("adult", "i")}>+</button>
               </div>
              </div>
          
           
               <div className="optionItem">
               <span className="optionText">Children</span>
               <div className="optionCounter">
               <button disabled={options.children <=1} className="optionCounterBtn" onClick={()=>handleOption("children", "d")}>-</button>
               <span className="optionCounterNumber">{options.children}</span>
               <button className="optionCounterBtn" onClick={()=>handleOption("children", "i")}>+</button>
               </div>
               </div>
         
               <div className="optionItem">
               <span className="optionText">Room</span>
               <div className="optionCounter">
               <button disabled={options.room <=1} className="optionCounterBtn" onClick={()=>handleOption("room", "d")}>-</button>
               <span className="optionCounterNumber">{options.room}</span>
               <button className="optionCounterBtn" onClick={()=>handleOption("room", "i")}>+</button>
               </div>
               </div>
           </div>
            }
          </div>
          <div className="headerSearchItem">
            <button className="headerButton">Search</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
