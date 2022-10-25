import React, { useContext } from 'react';
import '../styles/PowerHours.css';
import { CSVLink } from "react-csv";
import csv from '../public/csv.png';
import { StateContext } from '../contexts/StateContext';

const PowerHours = () => {
    const { power_hours_data, dark_mode } = useContext(StateContext);
    const powerHoursData = power_hours_data[0];
    const darkMode = dark_mode[0];
    const createData = (hour, sun, mon, tue, wed, thu, fri, sat) => {
        return (
            { hour: hour, sun: sun, mon: mon, tue: tue, wed: wed, thu: thu, fri: fri, sat: sat }
        )
    }

    const rows = powerHoursData.map(element => {
        return createData(element.hour, element['Sunday'], element['Monday'], element['Tuesday'], element['Wednesday'], element['Thursday'], element['Friday'], element['Saturday']);
    });
    const divStyle = {
        background: '#63abe6',
        color: "black"
    };
    const divStyle2 = {
        background: '#add3f1',
        color: "black"
    };
    const divStyle3 = {
        background: 'white',
        color: "black"
    };
    return (
        <div className={darkMode ? "powerHour-container-dark" : "powerHour-container"}>
            {/* <h3>Average Power Hours</h3> */}
            <div className={darkMode ? "table-container-dark" : "table-container"}>
                <div id="graph-header"> <h3 style={{ color: darkMode ? 'beige' : "#596dd4" }}>Average Power Hours</h3><CSVLink id="csvLink" data={rows}><img id="csvImage" src={csv} /></CSVLink></div>
                <table id={darkMode ? "power-hours-dark" : "power-hours"}>
                    <tr className="table-heading">
                        <th>Hour</th>
                        <th>Sunday</th>
                        <th>Monday</th>
                        <th>Tuesday</th>
                        <th>Wednesday</th>
                        <th>Thursday</th>
                        <th>Friday</th>
                        <th>Saturday</th>
                    </tr>
                    {rows.map(row => {
                        return (
                            <tr>
                                <td className={darkMode ? "row-hour-dark" : "row-hour"}>{row.hour}</td>
                                <td className='td-data' style={(row.sun >= 20) ? divStyle : (row.sun < 10 || row.sun === undefined) ? divStyle3 : divStyle2}>{(row.sun) ? row.sun : 0}</td>
                                <td className='td-data' style={(row.mon >= 20) ? divStyle : (row.mon < 10 || row.mon === undefined) ? divStyle3 : divStyle2}>{(row.mon) ? row.mon : 0}</td>
                                <td className='td-data' style={(row.tue >= 20) ? divStyle : (row.tue < 10 || row.tue === undefined) ? divStyle3 : divStyle2}>{(row.tue) ? row.tue : 0}</td>
                                <td className='td-data' style={(row.wed >= 20) ? divStyle : (row.wed < 10 || row.wed === undefined) ? divStyle3 : divStyle2}>{(row.wed) ? row.wed : 0}</td>
                                <td className='td-data' style={(row.thu >= 20) ? divStyle : (row.thu < 10 || row.thu === undefined) ? divStyle3 : divStyle2}>{(row.thu) ? row.thu : 0}</td>
                                <td className='td-data' style={(row.fri >= 20) ? divStyle : (row.fri < 10 || row.fri === undefined) ? divStyle3 : divStyle2}>{(row.fri) ? row.fri : 0}</td>
                                <td className='td-data' style={(row.sat >= 20) ? divStyle : (row.sat < 10 || row.sat === undefined) ? divStyle3 : divStyle2}>{(row.sat) ? row.sat : 0}</td>
                            </tr>
                        )
                    })}
                </table>
            </div>
        </div>
    )
}

export default PowerHours;