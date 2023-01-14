import React, { useState } from 'react';
import {
    // FaBars,
    IoIosArrowBack,
}from "react-icons/io";
import {
    AiOutlineHome,
    AiOutlineMail,
    AiOutlineSetting
}from "react-icons/ai";
import {
    CgNotes,
   
}from "react-icons/cg";
import {
    FiHelpCircle
}from "react-icons/fi";
import { NavLink } from 'react-router-dom';
import Logo from '../../assests/logo.png';

const Sidebar = ({children}) => {
    
    const[isOpen ,setIsOpen] = useState(false);
    const toggle = () => setIsOpen (!isOpen);
    const menuItem=[
       
        {
            path:"/",
            name:"Home",
            icon:<AiOutlineHome/>
        },
        {
            path:"/orders",
            name:"Orders",
            icon:<CgNotes/>
        },
        {
            path:"/notifications",
            name:"Notifications",
            icon:<AiOutlineMail/>
        },
        {
            path:"/helpAndSupport",
            name:"HelpAndSupport",
            icon:<FiHelpCircle/>
        },
        {
            path:"/settings",
            name:"Settings",
            icon:<AiOutlineSetting/>
        }
        
    ]
    return (
        <div className="container">
           <div style={{width: isOpen ? "200px" : "50px"}} className="sidebar">
               <div className="top_section">
               <img src={Logo} alt="" srcSet="" />
                   <h1 style={{display: isOpen ? "block" : "none"}} className="logo">
                    Promo & co
                   </h1>
                   <div style={{marginLeft: isOpen ? "50px" : "0px"}} className="bars">
                       <IoIosArrowBack onClick={toggle}/>
                   </div>
               </div>
               {
                   menuItem.map((item, index)=>(
                       <NavLink to={item.path} key={index} className="link" activeclass="active">
                           <div className="icon">{item.icon}</div>
                           <div style={{display: isOpen ? "block" : "none"}} className="link_text">{item.name}</div>
                       </NavLink>
                   ))
               }
           </div>
           <main>{children}</main>
        </div>
    );

};

export default Sidebar;