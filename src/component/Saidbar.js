import React, { useState } from 'react';
import dashbordicon from "../assert/images/dashicon.svg"
import { Link } from 'react-router-dom'
import Campaignsicon from "../assert/images/Campaignsicon.svg"
import Reportsicon from "../assert/images/Reportsicon.svg"
import Analiticsicon from "../assert/images/Analiticsicon.svg"
import Inboxicon from "../assert/images/Inboxicon.svg"
import Settingicon from "../assert/images/settingicon.svg"
import Logoicon from "../assert/images/logo2.png"

const Saidbar = () => {
    const [activeLink, setActiveLink] = useState('/');
    const handleLinkClick = (path) => {
        setActiveLink(path);
    };

    const toggleDropdown2 = () => {
        const menuDropdown = document.querySelector('.nav_bar_menu');
        const menuDropdown2 = document.querySelector('.menubarsss');
    
        // Toggle the display property immediately
        menuDropdown.style.display = menuDropdown.style.display === 'none' ? 'block' : 'block';
    
        if (menuDropdown.style.display === 'none') {
            menuDropdown2.style.width = '100%'; 
            setTimeout(() => {
                menuDropdown2.style.transition = 'width 1s ease';
                menuDropdown2.style.transitionDelay = '0s'; // Reset transition delay
                menuDropdown2.style.width = '0%'; // Transition to 100% width
            }, 10); 
        } else {
            // Apply transition properties
            menuDropdown2.style.transition = 'width 1.2s ease';
            menuDropdown2.style.transitionDelay = '0s'; 
            setTimeout(() => {
                menuDropdown2.style.width = '100%';
                menuDropdown2.style.left = '0px'; // Adjust the initial width as needed
            }, 10);
        }
    };
    

    const closeDropdown = () => {
        const menuDropdown2 = document.querySelector('.menubarsss');
        menuDropdown2.style.transition = 'width 1.2s ease';
        menuDropdown2.style.transitionDelay = '0s'; // Reset transition delay
        menuDropdown2.style.width = '0%';
    };
    
    
 
    

    return (

        <div className="sidebar">
            <div className='container'>
                <div className='navbar_logo_and_toggle'>
                    <div className='Logo_icon'>
                        <img src={Logoicon} alt='logo' className='logoicons' />
                        {/* <p>JSR Dashboard</p> */}
                    </div>

                    <button onClick={toggleDropdown2} className='bars'><i className="fa fa-bars" aria-hidden="true"></i></button>

                </div>

                <div className='nav_bar_menu' >
                    <div className='menubarsss'>
                        <div className='close_btn_menu'>
                            <button onClick={closeDropdown} ><i className="fa fa-times" aria-hidden="true"></i></button>
                        </div>
<Link
                            to="/"
                            className={activeLink === '/' ? 'active sidebar_link' : 'sidebar_link'}
                            onClick={() => handleLinkClick('/')}
                        >
                            <span><img src={dashbordicon} alt="icons" className="saidbar_icon saidbar_icon2" /></span>
                            <span className="sidebar_title">Dashboard</span>
                        </Link>
                        <Link
                            to="/Campintable"
                            className={activeLink === '/Campintable' ? 'active sidebar_link' : 'sidebar_link'}
                            onClick={() => handleLinkClick('/Campintable')}
                        >
                            <span><img src={Campaignsicon} alt="icons" className="saidbar_icon saidbar_icon2" /></span>
                            <span className="sidebar_title">Staking</span>
                        </Link>
                        <Link
                            to="/ReportTable"
                            className={activeLink === '/ReportTable' ? 'active sidebar_link' : 'sidebar_link'}
                            onClick={() => handleLinkClick('/ReportTable')}
                        >
                            <span><img src={Reportsicon} alt="icons" className="saidbar_icon saidbar_icon2" /></span>
                            <span className="sidebar_title">Level Rewards</span>
                        </Link>

                        <Link
                            to="/RewardAmountDaily"
                            className={activeLink === '/RewardAmountDaily' ? 'active sidebar_link' : 'sidebar_link'}
                            onClick={() => handleLinkClick('/RewardAmountDaily')}
                        >
                            <span><img src={Reportsicon} alt="icons" className="saidbar_icon saidbar_icon2" /></span>
                            <span className="sidebar_title">Daily Rewards</span>
                        </Link>

                        <Link
                            to="/AnaliticsTable"
                            className={activeLink === '/AnaliticsTable' ? 'active sidebar_link' : 'sidebar_link'}
                            onClick={() => handleLinkClick('/AnaliticsTable')}
                        >
                            <span><img src={Analiticsicon} alt="icons" className="saidbar_icon saidbar_icon2" /></span>
                            <span className="sidebar_title">Team Bonus</span>
                        </Link>
                        <Link
                            to="/withdrawalList"
                            className={activeLink === '/withdrawalList' ? 'active sidebar_link' : 'sidebar_link'}
                            onClick={() => handleLinkClick('/withdrawalList')}
                        >
                            <span><img src={Analiticsicon} alt="icons" className="saidbar_icon saidbar_icon2" /></span>
                            <span className="sidebar_title">withdrawal List</span>
                        </Link>
                        <Link
                            to="#"
                            className={activeLink === '#' ? 'active sidebar_link' : 'sidebar_link'}
                            onClick={() => handleLinkClick('#')}
                        >
                            <span><img src={Inboxicon} alt="icons" className="saidbar_icon" /></span>
                            <span className="sidebar_title">Inbox</span>
                        </Link>
                        <Link
                            to="#"
                            className={activeLink === '#' ? 'active sidebar_link' : 'sidebar_link'}
                            onClick={() => handleLinkClick('#')}
                        >
                            <span><img src={Settingicon} alt="icons" className="saidbar_icon" /></span>
                            <span className="sidebar_title">Setting</span>
                        </Link>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Saidbar
