import React, { useContext } from 'react';
import { StateContext } from '../contexts/StateContext';
import '../styles/GraphLayout.css';

export const DateTabTraffic = () => {
    const { value2, active_period_traffic, dark_mode } = useContext(StateContext);
    const setShowPeriodTraffic = value2[1];
    const [active, setActive] = active_period_traffic;
    const darkMode = dark_mode[0];

    const handleClick = (e) => {

        switch (e.target.value) {
            case "Day":
                setShowPeriodTraffic('Day');
                setActive('Day');
                break;
            case "Week":
                setShowPeriodTraffic('Week');
                setActive('Week');
                break;
            case "Month":
                setShowPeriodTraffic('Month');
                setActive('Month');
                break;
            case "Quarter":
                setShowPeriodTraffic('Quarter');
                setActive('Quarter');
                break;
        }
    };

    const dayStyle = {
        background: (active === 'Day') ? darkMode ? 'beige' : 'linear-gradient(to right, #5a6ed4, #785fde)' : 'transparent',
        color: (active === 'Day') ? darkMode ? 'black' : 'white' : darkMode ? 'beige' : '#596dd4'
    };
    const weekStyle = {
        background: (active === 'Week') ? darkMode ? 'beige' : 'linear-gradient(to right, #5a6ed4, #785fde)' : 'transparent',
        color: (active === 'Week') ? darkMode ? 'black' : 'white' : darkMode ? 'beige' : '#596dd4'
    };
    const monthStyle = {
        background: (active === 'Month') ? darkMode ? 'beige' : 'linear-gradient(to right, #5a6ed4, #785fde)' : 'transparent',
        color: (active === 'Month') ? darkMode ? 'black' : 'white' : darkMode ? 'beige' : '#596dd4'
    };
    const quarterStyle = {
        background: (active === 'Quarter') ? darkMode ? 'beige' : 'linear-gradient(to right, #5a6ed4, #785fde)' : 'transparent',
        color: (active === 'Quarter') ? darkMode ? 'black' : 'white' : darkMode ? 'beige' : '#596dd4'
    };

    return (
        <div className={"tab" + (darkMode ? '-dark' : "")}>
            <button value="Day" className={"tablinks" + (active === 'Day' && !darkMode ? '-active' : active === 'Day' && darkMode ? "-active-dark" : active !== 'Day' && darkMode ? "-dark" : "")} onClick={handleClick}>Day</button>
            <button value="Week" className={"tablinks" + (active === 'Week' && !darkMode ? '-active' : active === 'Week' && darkMode ? "-active-dark" : active !== 'Week' && darkMode ? "-dark" : "")} onClick={handleClick}>Week</button>
            <button value="Month" className={"tablinks" + (active === 'Month' && !darkMode ? '-active' : active === 'Month' && darkMode ? "-active-dark" : active !== 'Month' && darkMode ? "-dark" : "")} onClick={handleClick}>Month</button>
            <button value="Quarter" className={"tablinks" + (active === 'Quarter' && !darkMode ? '-active' : active === 'Quarter' && darkMode ? "-active-dark" : active !== 'Quarter' && darkMode ? "-dark" : "")} onClick={handleClick}>Quarter</button>
        </div>
    );
};

export const DateTabGender = () => {
    const { value4, active_period_gender, dark_mode } = useContext(StateContext);
    const setShowPeriodGender = value4[1];
    const [active, setActive] = active_period_gender;
    const darkMode = dark_mode[0];
    const handleClick = (e) => {
        switch (e.target.value) {
            case "Day":
                setShowPeriodGender('Day');
                setActive('Day');
                break;
            case "Week":
                setShowPeriodGender('Week');
                setActive('Week');
                break;
            case "Month":
                setShowPeriodGender('Month');
                setActive('Month');
                break;
            case "Quarter":
                setShowPeriodGender('Quarter');
                setActive('Quarter');
                break;
        };
    };

    const dayStyle = {
        background: (active === 'Day') ? darkMode ? 'beige' : 'linear-gradient(to right, #5a6ed4, #785fde)' : 'transparent',
        color: (active === 'Day') ? darkMode ? 'black' : 'white' : darkMode ? 'beige' : '#596dd4'
    };
    const weekStyle = {
        background: (active === 'Week') ? darkMode ? 'beige' : 'linear-gradient(to right, #5a6ed4, #785fde)' : 'transparent',
        color: (active === 'Week') ? darkMode ? 'black' : 'white' : darkMode ? 'beige' : '#596dd4'
    };
    const monthStyle = {
        background: (active === 'Month') ? darkMode ? 'beige' : 'linear-gradient(to right, #5a6ed4, #785fde)' : 'transparent',
        color: (active === 'Month') ? darkMode ? 'black' : 'white' : darkMode ? 'beige' : '#596dd4'
    };
    const quarterStyle = {
        background: (active === 'Quarter') ? darkMode ? 'beige' : 'linear-gradient(to right, #5a6ed4, #785fde)' : 'transparent',
        color: (active === 'Quarter') ? darkMode ? 'black' : 'white' : darkMode ? 'beige' : '#596dd4'
    };

    return (
        <div className={"tab" + (darkMode ? '-dark' : "")}>
            <button value="Day" className={"tablinks" + (active === 'Day' && !darkMode ? '-active' : active === 'Day' && darkMode ? "-active-dark" : active !== 'Day' && darkMode ? "-dark" : "")} onClick={handleClick}>Day</button>
            <button value="Week" className={"tablinks" + (active === 'Week' && !darkMode ? '-active' : active === 'Week' && darkMode ? "-active-dark" : active !== 'Week' && darkMode ? "-dark" : "")} onClick={handleClick}>Week</button>
            <button value="Month" className={"tablinks" + (active === 'Month' && !darkMode ? '-active' : active === 'Month' && darkMode ? "-active-dark" : active !== 'Month' && darkMode ? "-dark" : "")} onClick={handleClick}>Month</button>
            <button value="Quarter" className={"tablinks" + (active === 'Quarter' && !darkMode ? '-active' : active === 'Quarter' && darkMode ? "-active-dark" : active !== 'Quarter' && darkMode ? "-dark" : "")} onClick={handleClick}>Quarter</button>
        </div>
    );
};

export const DateTabAge = () => {
    const { value5, active_period_age, dark_mode } = useContext(StateContext);
    const setShowPeriodAge = value5[1];
    const [active, setActive] = active_period_age;
    const darkMode = dark_mode[0];
    const handleClick = (e) => {
        switch (e.target.value) {
            case "Day":
                setShowPeriodAge('Day');
                setActive('Day');
                break;
            case "Week":
                setShowPeriodAge('Week');
                setActive('Week');
                break;
            case "Month":
                setShowPeriodAge('Month');
                setActive('Month');
                break;
            case "Quarter":
                setShowPeriodAge('Quarter');
                setActive('Quarter');
                break;
        };
    };

    const dayStyle = {
        background: (active === 'Day') ? darkMode ? 'beige' : 'linear-gradient(to right, #5a6ed4, #785fde)' : 'transparent',
        color: (active === 'Day') ? darkMode ? 'black' : 'white' : darkMode ? 'beige' : '#596dd4'
    };
    const weekStyle = {
        background: (active === 'Week') ? darkMode ? 'beige' : 'linear-gradient(to right, #5a6ed4, #785fde)' : 'transparent',
        color: (active === 'Week') ? darkMode ? 'black' : 'white' : darkMode ? 'beige' : '#596dd4'
    };
    const monthStyle = {
        background: (active === 'Month') ? darkMode ? 'beige' : 'linear-gradient(to right, #5a6ed4, #785fde)' : 'transparent',
        color: (active === 'Month') ? darkMode ? 'black' : 'white' : darkMode ? 'beige' : '#596dd4'
    };
    const quarterStyle = {
        background: (active === 'Quarter') ? darkMode ? 'beige' : 'linear-gradient(to right, #5a6ed4, #785fde)' : 'transparent',
        color: (active === 'Quarter') ? darkMode ? 'black' : 'white' : darkMode ? 'beige' : '#596dd4'
    };

    return (
        <div className={"tab" + (darkMode ? '-dark' : "")}>
            <button value="Day" className={"tablinks" + (active === 'Day' && !darkMode ? '-active' : active === 'Day' && darkMode ? "-active-dark" : active !== 'Day' && darkMode ? "-dark" : "")} onClick={handleClick}>Day</button>
            <button value="Week" className={"tablinks" + (active === 'Week' && !darkMode ? '-active' : active === 'Week' && darkMode ? "-active-dark" : active !== 'Week' && darkMode ? "-dark" : "")} onClick={handleClick}>Week</button>
            <button value="Month" className={"tablinks" + (active === 'Month' && !darkMode ? '-active' : active === 'Month' && darkMode ? "-active-dark" : active !== 'Month' && darkMode ? "-dark" : "")} onClick={handleClick}>Month</button>
            <button value="Quarter" className={"tablinks" + (active === 'Quarter' && !darkMode ? '-active' : active === 'Quarter' && darkMode ? "-active-dark" : active !== 'Quarter' && darkMode ? "-dark" : "")} onClick={handleClick}>Quarter</button>
        </div>
    );
};
