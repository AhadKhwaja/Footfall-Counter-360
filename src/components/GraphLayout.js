import React, { useContext } from 'react';
import { Traffic, Gender, Age } from './Graphs.js';
import { WeeklyTraffic, WeeklyGender, WeeklyAge } from './WeekGraphs.js';
import { MonthlyTraffic, MonthlyGender, MonthlyAge } from './MonthlyGraphs.js';
import { QuarterlyTraffic, QuarterlyGender, QuarterlyAge } from './QuarterlyGraphs.js';
import PowerHours from './PowerHours.js';
import '../styles/GraphLayout.css';
import { StateContext } from '../contexts/StateContext.js';

const GraphLayout = () => {
    const { value2, value4, value5 } = useContext(StateContext);
    const showPeriodTraffic = value2[0];
    const showPeriodGender = value4[0];
    const showPeriodAge = value5[0];
    console.log(showPeriodTraffic, 'showPeriodTraffic');

    return (
        <div className="graphlayout-column">
            <div className="graphlayout-row">
            </div>
            <div className="graphlayout-row traffic_row">
                <div id="traffic">
                    {(showPeriodTraffic === 'Day') ? <Traffic /> : (showPeriodTraffic === 'Week') ? <WeeklyTraffic /> : (showPeriodTraffic === 'Month') ? <MonthlyTraffic /> : <QuarterlyTraffic />}
                </div>
            </div>
            <div className="graphlayout-row gender_row">
                <div id="gender">
                    {(showPeriodGender === 'Day') ? <Gender /> : (showPeriodGender === 'Week') ? <WeeklyGender /> : (showPeriodGender === 'Month') ? <MonthlyGender /> : <QuarterlyGender />}
                </div>
            </div>
            <div className="graphlayout-row">
                <div id="age">
                    {(showPeriodAge === 'Day') ? <Age /> : (showPeriodAge === 'Week') ? <WeeklyAge /> : (showPeriodAge === 'Month') ? <MonthlyAge /> : <QuarterlyAge />}
                </div>
            </div>
            <div className="graphlayout-row">
                <PowerHours />
            </div>
        </div>
    )
};

export default GraphLayout;