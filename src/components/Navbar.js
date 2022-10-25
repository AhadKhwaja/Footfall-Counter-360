import React, { useState, useContext } from 'react';
import '../styles/Navbar.css';
import { StateContext } from '../contexts/StateContext';
import logo from '../public/logo.png';


const Navbar = () => {
    const { dark_mode, is_logged_in, quarter_traffic, month_traffic } = useContext(StateContext);
    const [showPopUp, setShowPopUp] = useState(false);
    const [darkMode, setDarkMode] = dark_mode;
    const setIsLoggedIn = is_logged_in[1];
    const setQuarterTraffic = quarter_traffic[1];
    const setMonthTraffic = month_traffic[1];

    const togglePopUp = () => {
        setShowPopUp(!showPopUp)
    };
    const darkModeToggle = () => {
        setDarkMode(!darkMode);
    };
    const logout = () => {
        setMonthTraffic([
            { month: 'Jan', count: 0, males: 0, females: 0, '4-6': 0, '8-12': 0, '15-20': 0, '25-32': 0, '38-43': 0, '48-53': 0, '60-100': 0 },
            { month: 'Feb', count: 0, males: 0, females: 0, '4-6': 0, '8-12': 0, '15-20': 0, '25-32': 0, '38-43': 0, '48-53': 0, '60-100': 0 },
            { month: 'Mar', count: 0, males: 0, females: 0, '4-6': 0, '8-12': 0, '15-20': 0, '25-32': 0, '38-43': 0, '48-53': 0, '60-100': 0 },
            { month: 'Apr', count: 0, males: 0, females: 0, '4-6': 0, '8-12': 0, '15-20': 0, '25-32': 0, '38-43': 0, '48-53': 0, '60-100': 0 },
            { month: 'May', count: 0, males: 0, females: 0, '4-6': 0, '8-12': 0, '15-20': 0, '25-32': 0, '38-43': 0, '48-53': 0, '60-100': 0 },
            { month: 'Jun', count: 0, males: 0, females: 0, '4-6': 0, '8-12': 0, '15-20': 0, '25-32': 0, '38-43': 0, '48-53': 0, '60-100': 0 },
            { month: 'Jul', count: 0, males: 0, females: 0, '4-6': 0, '8-12': 0, '15-20': 0, '25-32': 0, '38-43': 0, '48-53': 0, '60-100': 0 },
            { month: 'Aug', count: 0, males: 0, females: 0, '4-6': 0, '8-12': 0, '15-20': 0, '25-32': 0, '38-43': 0, '48-53': 0, '60-100': 0 },
            { month: 'Sep', count: 0, males: 0, females: 0, '4-6': 0, '8-12': 0, '15-20': 0, '25-32': 0, '38-43': 0, '48-53': 0, '60-100': 0 },
            { month: 'Oct', count: 0, males: 0, females: 0, '4-6': 0, '8-12': 0, '15-20': 0, '25-32': 0, '38-43': 0, '48-53': 0, '60-100': 0 },
            { month: 'Nov', count: 0, males: 0, females: 0, '4-6': 0, '8-12': 0, '15-20': 0, '25-32': 0, '38-43': 0, '48-53': 0, '60-100': 0 },
            { month: 'Dec', count: 0, males: 0, females: 0, '4-6': 0, '8-12': 0, '15-20': 0, '25-32': 0, '38-43': 0, '48-53': 0, '60-100': 0 },
        ]);
        setQuarterTraffic([
            { quarter: '1st', count: 0, males: 0, females: 0, '4-6': 0, '8-12': 0, '15-20': 0, '25-32': 0, '38-43': 0, '48-53': 0, '60-100': 0 },
            { quarter: '2nd', count: 0, males: 0, females: 0, '4-6': 0, '8-12': 0, '15-20': 0, '25-32': 0, '38-43': 0, '48-53': 0, '60-100': 0 },
            { quarter: '3rd', count: 0, males: 0, females: 0, '4-6': 0, '8-12': 0, '15-20': 0, '25-32': 0, '38-43': 0, '48-53': 0, '60-100': 0 },
            { quarter: '4th', count: 0, males: 0, females: 0, '4-6': 0, '8-12': 0, '15-20': 0, '25-32': 0, '38-43': 0, '48-53': 0, '60-100': 0 },
        ]);
        setIsLoggedIn(false)
    };

    const popStyle = {
        opacity: (showPopUp) ? 1 : 0,
        height: (showPopUp) ? '100px' : 0,
        visibility: (showPopUp) ? 'visible' : 'hidden',
    };
    const darkModeStyle = {
        color: darkMode ? '#c7c7c7' : 'yellow',
    };
    const text_style = {
        color: darkMode ? 'beige' : 'white',
    }

    return (
        <div className="navbar">
            <div className="topnav_right">
                <span style={text_style}>Try Dark Mode</span> <i style={darkModeStyle} className="fa fa-lightbulb-o light_mode" aria-hidden="true" onClick={darkModeToggle}></i>
                <div className="user_info" style={{ 'display': 'flex' }} >
                    <i style={text_style} className="fas fa-user user_icon"></i>
                    <div style={popStyle} className="user_pop_up">
                        <a  >Account</a>
                        <a onClick={logout}>Logout <i className="fa fa-sign-out" aria-hidden="true" ></i></a>
                    </div>
                    <p style={{ 'padding': '10px', 'fontWeight': 'bold', 'alignSelf': 'center', color: darkMode ? 'beige' : 'white' }}>Admin</p>
                </div>
                <img src={logo} className="logo-img" />
                {/* <p style={text_style} className="logo_text">Footfall Counter 360</p> */}
            </div>
        </div>
    )
}

export default Navbar;