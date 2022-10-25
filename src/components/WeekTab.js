import React, { useContext } from 'react';
import '../styles/GraphLayout.css';
import { StateContext } from '../contexts/StateContext.js';

const WeekTab = () => {
    const { value1, dark_mode } = useContext(StateContext);
    const [filter, setFilter] = value1;
    const darkMode = dark_mode[0];
    const handleSelect = (e) => {
        setFilter(e.target.value);
    };

    const MonStyle = {
        background: filter === 'Monday' ? darkMode ? 'white' : 'linear-gradient(to right, #5a6ed4, #785fde)' : !darkMode ? 'white' : '#2a3256',
        color: filter === 'Monday' ? darkMode ? 'black' : 'white' : darkMode ? 'white' : '#596dd4',
        border: '1px solid white'
    };
    const TueStyle = {
        background: filter === 'Tuesday' ? darkMode ? 'white' : 'linear-gradient(to right, #5a6ed4, #785fde)' : !darkMode ? 'white' : '#2a3256',
        color: filter === 'Tuesday' ? darkMode ? 'black' : 'white' : darkMode ? 'white' : '#596dd4',
        border: '1px solid white'
    };
    const WedStyle = {
        background: filter === 'Wednesday' ? darkMode ? 'white' : 'linear-gradient(to right, #5a6ed4, #785fde)' : !darkMode ? 'white' : '#2a3256',
        color: filter === 'Wednesday' ? darkMode ? 'black' : 'white' : darkMode ? 'white' : '#596dd4',
        border: '1px solid white'
    };
    const ThuStyle = {
        background: filter === 'Thursday' ? darkMode ? 'white' : 'linear-gradient(to right, #5a6ed4, #785fde)' : !darkMode ? 'white' : '#2a3256',
        color: filter === 'Thursday' ? darkMode ? 'black' : 'white' : darkMode ? 'white' : '#596dd4',
        border: '1px solid white'
    };
    const FriStyle = {
        background: filter === 'Friday' ? darkMode ? 'white' : 'linear-gradient(to right, #5a6ed4, #785fde)' : !darkMode ? 'white' : '#2a3256',
        color: filter === 'Friday' ? darkMode ? 'black' : 'white' : darkMode ? 'white' : '#596dd4',
        border: '1px solid white'
    };
    const SatStyle = {
        background: filter === 'Saturday' ? darkMode ? 'white' : 'linear-gradient(to right, #5a6ed4, #785fde)' : !darkMode ? 'white' : '#2a3256',
        color: filter === 'Saturday' ? darkMode ? 'black' : 'white' : darkMode ? 'white' : '#596dd4',
        border: '1px solid white'
    };
    const SunStyle = {
        background: filter === 'Sunday' ? darkMode ? 'white' : 'linear-gradient(to right, #5a6ed4, #785fde)' : !darkMode ? 'white' : '#2a3256',
        color: filter === 'Sunday' ? darkMode ? 'black' : 'white' : darkMode ? 'white' : '#596dd4',
        border: '1px solid white'
    };

    return (
        <div className="weekTab">
            <button value="Monday" style={MonStyle} className="tablinks" onClick={handleSelect}>Mon</button>
            <button value="Tuesday" style={TueStyle} className="tablinks" onClick={handleSelect}>Tue</button>
            <button value="Wednesday" style={WedStyle} className="tablinks" onClick={handleSelect}>Wed</button>
            <button value="Thursday" style={ThuStyle} className="tablinks" onClick={handleSelect}>Thu</button>
            <button value="Friday" style={FriStyle} className="tablinks" onClick={handleSelect}>Fri</button>
            <button value="Saturday" style={SatStyle} className="tablinks" onClick={handleSelect}>Sat</button>
            <button value="Sunday" style={SunStyle} className="tablinks" onClick={handleSelect}>Sun</button>
        </div>
    );
};

export default WeekTab;