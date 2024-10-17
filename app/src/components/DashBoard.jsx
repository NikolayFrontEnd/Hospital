/* import { IoMdHome } from "react-icons/io";
import { FaUser } from "react-icons/fa";
import { IoMdSettings } from "react-icons/io";
import { FaBriefcaseMedical } from "react-icons/fa";
import { FaMessage } from "react-icons/fa6";
import { FaBell } from "react-icons/fa";
import { RxAvatar } from "react-icons/rx";
import React, { useState } from 'react';
import photo2 from '../photos/hh.jpg'
import photo3 from '../photos/doctors.jpg'
import photo4 from "../photos/chat.png"
import { NavLink } from "react-router-dom";
import { FaRegCalendarAlt } from "react-icons/fa"
import "./main.css"

const DashBoard = ()=>{

    const [activeIndex, setActiveIndex] = useState(0);

    const handleClick = (index) => {
      setActiveIndex(index); // обновляем состояние при клике на элемент меню
    };
    return (<>
  
  <nav className="main-menu">
  <h1>Medical App</h1>
                <ul>
                <li className={`nav-item ${activeIndex === 0 ? 'active' : ''}`} onClick={() => handleClick(0)}>
                  <b></b>
                  <b></b>
                  <NavLink to="/">
                    <IoMdHome className = "nav-icon" />
                    <span className="nav-text">Home</span>
                  </NavLink>
                </li>
  
                <li className={`nav-item ${activeIndex === 1 ? 'active' : ''}`} onClick={() => handleClick(1)}>
                  <b></b>
                  <b></b>
                  <a href="#">
                    <FaUser className = "nav-icon"/>
                    <span className="nav-text">Profile</span>
                  </a>
                </li>
  
                <li className={`nav-item ${activeIndex === 2 ? 'active' : ''}`} onClick={() => handleClick(2)}>
                  <b></b>
                  <b></b>
                  <a href="#">
                    <FaBriefcaseMedical className = "nav-icon"/>
                    <span className="nav-text">Card</span>
                  </a>
                </li>
  
                <li className={`nav-item ${activeIndex === 3 ? 'active' : ''}`} onClick={() => handleClick(3)}>
                  <b></b>
                  <b></b>
                  <a href="#">
                    <IoMdSettings className = "nav-icon" />
                    <span className="nav-text">Setting</span>
                  </a>
                </li>
                
                <li className={`nav-item ${activeIndex === 4 ? 'active' : ''}`} onClick={() => handleClick(4)}>
                  <b></b>
                  <b></b>
                  <NavLink to="/calendar">
                  <FaRegCalendarAlt className = "nav-icon"/>
                    <span className="nav-text">Calendar</span>
                  </NavLink>
                </li>
              </ul>
              </nav>
    </>)
  }

  export default DashBoard; */