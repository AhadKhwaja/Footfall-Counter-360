import React, { useContext, useState, useEffect } from 'react';
import '../styles/SideBar.css';
import { StateContext } from '../contexts/StateContext';
import { Link } from 'react-router-dom';

const SideBar = () => {
    const { show_sidebar, dark_mode } = useContext(StateContext);
    const [showSideBar, setShowSideBar] = show_sidebar;
    const [showMenu, setShowMenu] = useState(false);
    const darkMode = dark_mode[0];

    const openSideBar = () => {
        setShowSideBar(!showSideBar);
    };

    useEffect(() => {
        if (showSideBar) {
            setTimeout(() => {
                setShowMenu(showSideBar);
            }, 300);
        }
        else {
            setShowMenu(false);
        }
    }, [showSideBar]);


    const style = {
        width: showSideBar ? '200px' : '70px',
    };
    const iconStyle2 = {
        color: darkMode ? 'beige' : '#596dd4',
        position: 'absolute',
        top: '24px',
        left: '155px',
        transition: '0.5s',
        transform: 'rotate(180deg)',
    };
    const iconStyle = {
        color: darkMode ? 'beige' : '#596dd4',
        position: 'absolute',
        top: '24px',
        left: '24px',
        transition: '0.5s',
    };
    const textStyle = {
        opacity: !showMenu ? 0 : 1,
        color: darkMode ? 'beige' : '#596dd4'
    };
    const sideBarIcons = {
        opacity: !showMenu ? 0 : 1,
        fontWeight: 'bold',
        transition: '0.3s',
    };

    return (
        <div className={darkMode ? "sidebar_dark" : 'sidebar'} style={style}>
            <i style={!showSideBar ? iconStyle : iconStyle2} className="fa fa-2x fa-arrow-circle-right" aria-hidden="true" onClick={openSideBar}></i>
            <Link className="sidebarLinks" to="/"><div className="text_style" style={textStyle}><i className="fa fa-bar-chart" style={sideBarIcons} aria-hidden="true"></i> Dashboard</div></Link>
            <Link className="sidebarLinks" to="/heatmap"><div className="text_style" style={textStyle}><i className="fas fa-fire-alt" style={sideBarIcons} aria-hidden="true"></i> Heatmap</div></Link>
            <Link className="sidebarLinks" to="/About"><div className="text_style" style={textStyle}><i className="fa fa-question-circle" style={sideBarIcons} aria-hidden="true"></i> About</div></Link>
            <Link className="sidebarLinks" to="/Contact"><div className="text_style" style={textStyle}><i className="fa fa-address-book" style={sideBarIcons} aria-hidden="true"></i> Contact</div></Link>
        </div>
    );
};

export default SideBar;