import React, { useContext, useEffect, useState } from 'react';
import '../styles/Home.css';
import TimePeriod from '../components/TimePeriod.js';
import GraphLayout from '../components/GraphLayout.js';
import { StateContext } from '../contexts/StateContext';
import { format } from 'date-fns';
import JSONData from "../data.json";
const Home = () => {
    const { value6, selected_period_current, power_hours_data, week_traffic, month_traffic, quarter_traffic, total_gender_mq, set_data, week_hourly_graphs_data, age_pie_graph } = useContext(StateContext);
    const setAllData = value6[1];
    const selectedPeriod = selected_period_current[0];
    const setPowerHoursData = power_hours_data[1];
    const [result, setResult] = useState([]);
    const setData = set_data[1];
    const setAgePieGaph = age_pie_graph[1];
    const setWeekHourlyGraphsData = week_hourly_graphs_data[1];
    const setWeekTraffic = week_traffic[1];
    const [monthTraffic, setMonthTraffic] = month_traffic;
    const [quarterTraffic, setQuarterTraffic] = quarter_traffic;
    const setTotalGenderMQ = total_gender_mq[1];

    useEffect(() => {
        getData();
    }, []);

    useEffect(() => {
        makeData();
    }, [result]);

    useEffect(() => {
        makeData();
    }, [selectedPeriod]);

    const makeData = () => {
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
        if (result.length) {
            let mutableArray = [];
            Object.keys(result).map(key => {
                mutableArray.push(result[key]);
            });
            if (mutableArray.length) {
                let tempData = [];
                let tempMonth = [...monthTraffic];
                let tempQuarter = [...quarterTraffic];
                let totalMalesMQ = 0;
                let totalFemalesMQ = 0;

                if (selectedPeriod.endDate) {
                    mutableArray.map(element => {
                        let d = element.Date.split('/');
                        let date = new Date('20' + d[2], d[1] - 1, d[0]);
                        let m = date.getMonth();
                        let q = '';
                        let month = '';
                        let s = date.getDay();
                        let day = '';
                        (m === 0) ? month = 'Jan' : (m === 1) ? month = 'Feb' : (m === 2) ? month = 'Mar' : (m === 3) ? month = 'Apr' : (m === 4) ? month = 'May' : (m === 5) ? month = 'Jun' : (m === 6) ? month = 'Jul' : (m === 7) ? month = 'Aug' : (m === 8) ? month = 'Sep' : (m === 9) ? month = 'Oct' : m === 10 ? month = "Nov" : month = 'Dec';
                        (month === 'Jan' || month === 'Feb' || month === 'Mar') ? q = '1st' : (month === 'Apr' || month === 'May' || month === 'Jun') ? q = '2nd' : (month === 'Jul' || month === 'Aug' || month === 'Sep') ? q = '3rd' : q = '4th';
                        (s === 0) ? day = 'Sunday' : (s === 1) ? day = 'Monday' : (s === 2) ? day = 'Tuesday' : (s === 3) ? day = 'Wednesday' : (s === 4) ? day = 'Thursday' : (s === 5) ? day = 'Friday' : day = 'Saturday';

                        let p = parseInt(element.Time) + '-' + (parseInt(element.Time) + 1);

                        let indexM = tempMonth.findIndex(obj => obj.month === month);
                        let indexQ = tempQuarter.findIndex(obj => obj.quarter === q);

                        if (element.Gender === 'Female') {
                            tempMonth[indexM].females++;
                            tempQuarter[indexQ].females++;
                            totalFemalesMQ++;
                        }
                        else if (element.Gender === 'Male') {
                            tempMonth[indexM].males++;
                            tempQuarter[indexQ].males++;
                            totalMalesMQ++;
                        };

                        if (indexM != -1) {
                            tempMonth[indexM].count++;
                        };
                        if (indexQ != -1) {
                            tempQuarter[indexQ].count++;
                        };
                        (typeof tempMonth[indexM][element.Age] === 'undefined') ? tempMonth[indexM][element.Age] = 1 : tempMonth[indexM][element.Age]++;
                        (typeof tempQuarter[indexQ][element.Age] === 'undefined') ? tempQuarter[indexQ][element.Age] = 1 : tempQuarter[indexQ][element.Age]++;

                        if (date >= selectedPeriod.startDate && date <= selectedPeriod.endDate) {
                            tempData.push(element)
                        };
                    });

                    let tempTotalMQ = [
                        {
                            totalMales: "0." + ((totalMalesMQ / (totalMalesMQ + totalFemalesMQ)) * 100).toFixed(),
                            totalFemales: "0." + ((totalFemalesMQ / (totalMalesMQ + totalFemalesMQ)) * 100).toFixed()
                        }
                    ];
                    setTotalGenderMQ(tempTotalMQ);
                    setQuarterTraffic(tempQuarter);
                    setMonthTraffic(tempMonth);
                };

                let groupedData = [];
                let totalMales = 0;
                let totalFemales = 0;
                let powerHoursData = [];
                let weekHourlyGraphsData = [];
                let weekTraffic = [];
                if (tempData.length) {
                    tempData.map((element, i) => {
                        let d = element.Date.split('/');
                        let t = (new Date('20' + d[2], d[1] - 1, d[0]));
                        let s = t.getDay();
                        let m = t.getMonth();
                        let day = '';
                        let month = '';
                        (m === 0) ? month = 'January' : (m === 1) ? month = 'February' : (m === 2) ? month = 'March' : (m === 3) ? month = 'April' : (m === 4) ? month = 'May' : (m === 5) ? month = 'June' : (m === 6) ? month = 'July' : (m === 7) ? month = 'August' : (m === 8) ? month = 'September' : (m === 9) ? month = 'October' : m === 10 ? month = "November" : month = 'December';
                        (s === 0) ? day = 'Sunday' : (s === 1) ? day = 'Monday' : (s === 2) ? day = 'Tuesday' : (s === 3) ? day = 'Wednesday' : (s === 4) ? day = 'Thursday' : (s === 5) ? day = 'Friday' : day = 'Saturday';
                        let p = parseInt(element.Time) + '-' + (parseInt(element.Time) + 1);
                        let result = format(t, 'I');
                        let index2 = weekTraffic.findIndex(obj => obj.Week === 'Week ' + result + '');

                        if (index2 === -1) {
                            weekTraffic.unshift({ Week: 'Week ' + result + '' });
                            index2 = 0;
                        };
                        (typeof weekTraffic[index2].count === 'undefined') ? weekTraffic[index2].count = 1 : weekTraffic[index2].count++;

                        (typeof weekTraffic[index2][element.Age] === 'undefined') ? weekTraffic[index2][element.Age] = 1 : weekTraffic[index2][element.Age]++;

                        if (element.Gender === 'Female') {
                            (typeof weekTraffic[index2].Female === 'undefined') ? weekTraffic[index2].Female = 1 : weekTraffic[index2].Female++;
                        }
                        else if (element.Gender === 'Male') {
                            (typeof weekTraffic[index2].Male === 'undefined') ? weekTraffic[index2].Male = 1 : weekTraffic[index2].Male++;
                        };

                        let index1 = weekHourlyGraphsData.findIndex(obj => obj.Day === day);
                        if (index1 === -1) {
                            weekHourlyGraphsData.unshift({ Day: day });

                            index1 = 0;
                        };
                        (typeof weekHourlyGraphsData[index1][p] === 'undefined') ? weekHourlyGraphsData[index1][p] = 1 : weekHourlyGraphsData[index1][p]++;
                        let index = powerHoursData.findIndex(obj => obj.hour === p);
                        if (index === -1) {
                            powerHoursData.unshift({ hour: p });
                            index = 0;
                        };
                        (typeof powerHoursData[index][day] === 'undefined') ? powerHoursData[index][day] = 1 : powerHoursData[index][day]++;

                        (element.Gender === 'Female') ? totalFemales++ : totalMales++;

                        let objIndex = groupedData.findIndex(object => object.Date === element.Date);
                        if (objIndex === -1) {
                            groupedData.unshift({ Date: element.Date, count: 1 });
                            objIndex = 0;
                        }
                        else {
                            groupedData[objIndex].count++;
                        };
                        (typeof groupedData[objIndex][element.Gender] === 'undefined') ? groupedData[objIndex][element.Gender] = 1 : groupedData[objIndex][element.Gender]++;
                        (typeof groupedData[objIndex][element.Age] === 'undefined') ? groupedData[objIndex][element.Age] = 1 : groupedData[objIndex][element.Age]++;
                        let ac;
                        let bc;
                        return groupedData.sort((a, b) => (bc = b.Date.split('/'), ac = a.Date.split('/'), new Date('20' + ac[2], ac[1] - 1, ac[0]) - new Date('20' + bc[2], bc[1] - 1, bc[0])));
                    });
                    let agePieData = [
                        {
                            TotalMales: "0." + ((totalMales / (totalMales + totalFemales)) * 100).toFixed(),
                            TotalFemales: "0." + ((totalFemales / (totalMales + totalFemales)) * 100).toFixed()
                        }
                    ];
                    setWeekTraffic(weekTraffic.reverse());
                    setWeekHourlyGraphsData(weekHourlyGraphsData);
                    setPowerHoursData(powerHoursData.reverse());
                    setAgePieGaph(agePieData);
                    setData(groupedData);
                    setAllData(tempData);
                };
            };
        };
    };

    const getData = async () => {
        setResult(JSONData.data);
    };
    const [loaded, setLoaded] = React.useState(false);
    React.useEffect(() => {
        setTimeout(() => {
            setLoaded(true)
        }, 800);

    }, [])
    const style_1 = {
        opacity: loaded ? 1 : 0,
        transition: '0.3s'
    };

    const style_2 = {
        opacity: !loaded ? 1 : 0,
    };

    return (
        <React.Fragment>
            <div style={style_1} className='home-container'>
                <TimePeriod />
                <GraphLayout />
            </div>
            <div style={style_2} class="loader"></div>
        </React.Fragment>
    );
};

export default Home;