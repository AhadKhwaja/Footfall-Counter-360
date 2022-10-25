import React, { useState, createContext } from 'react';
export const StateContext = createContext();

export const StateProvider = props => {

    const [isLoggedIn, setIsLoggedIn] = useState(true);
    
    const [filter, setFilter] = useState('Monday');
    const [showPeriodTraffic, setShowPeriodTraffic] = useState('Day');
    const [showPeriodGender, setShowPeriodGender] = useState('Day');
    const [showSideBar, setShowSideBar] = useState(false);
    const [showPeriodAge, setShowPeriodAge] = useState('Day');
    const [allData, setAllData] = useState([]);
    const [totalVisitors, setTotalVisitors] = useState(0);
    const [peakDay, setPeakDay] = useState(0);
    const [leastDay, setLeastDay] = useState(0);
    const [genderGraphData, setGenderGraphData] = useState([]);
    const [ageGraphData, setAgeGraphData] = useState([]);
    const [trafficGraphData, setTrafficGraphData] = useState([]);
    const [data, setData] = useState([]);
    const [agePieGraph, setAgePieGaph] = useState([]);
    const [powerHoursData, setPowerHoursData] = useState([]);
    const [weekHourlyGraphsData, setWeekHourlyGraphsData] = useState([]);
    const [weekTraffic, setWeekTraffic] = useState([]);
    const [showDatePicker, setShowDatePicker] = useState(false);
    const [monthTraffic, setMonthTraffic] = useState([
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
    const [quarterTraffic, setQuarterTraffic] = useState([
        { quarter: '1st', count: 0, males: 0, females: 0, '4-6': 0, '8-12': 0, '15-20': 0, '25-32': 0, '38-43': 0, '48-53': 0, '60-100': 0 },
        { quarter: '2nd', count: 0, males: 0, females: 0, '4-6': 0, '8-12': 0, '15-20': 0, '25-32': 0, '38-43': 0, '48-53': 0, '60-100': 0 },
        { quarter: '3rd', count: 0, males: 0, females: 0, '4-6': 0, '8-12': 0, '15-20': 0, '25-32': 0, '38-43': 0, '48-53': 0, '60-100': 0 },
        { quarter: '4th', count: 0, males: 0, females: 0, '4-6': 0, '8-12': 0, '15-20': 0, '25-32': 0, '38-43': 0, '48-53': 0, '60-100': 0 },
    ]);
    const [totalGenderMQ, setTotalGenderMQ] = useState([]);

    const [totalVisitorsPrior, setTotalVisitorsPrior] = useState(0);
    const [peakDayPrior, setPeakDayPrior] = useState(0);
    const [leastDayPrior, setLeastDayPrior] = useState(0);
    const [genderGraphDataPrior, setGenderGraphDataPrior] = useState([]);
    const [ageGraphDataPrior, setAgeGraphDataPrior] = useState([]);
    const [trafficGraphDataPrior, setTrafficGraphDataPrior] = useState([]);
    const [dataPrior, setDataPrior] = useState([]);
    const [agePieGraphPrior, setAgePieGaphPrior] = useState([]);
    const [powerHoursDataPrior, setPowerHoursDataPrior] = useState([]);
    const [weekHourlyGraphsDataPrior, setWeekHourlyGraphsDataPrior] = useState([]);
    const [weekTrafficPrior, setWeekTrafficPrior] = useState([]);

    const [active_period_traffic, setActivePeriodTraffic] = useState('Day');
    const [active_period_gender, setActivePeriodGender] = useState('Day');
    const [active_period_age, setActivePeriodAge] = useState('Day');
    const [darkMode, setDarkMode] = useState(false);
    const [stateCurrent, setStateCurrent] = useState([
        {
            startDate: new Date(2020, 10, 25),
            endDate: new Date(2020, 9, 25),
            key: 'selection'
        }
    ]);
    const [statePrior, setStatePrior] = useState([
        {
            startDate: new Date('Mon May 18 2020 00:00:00 GMT+0530 (India Standard Time)'),
            endDate: new Date('Wed Jun 06 2020 00:00:00 GMT+0530 (India Standard Time)'),
            key: 'selection'
        }
    ]);
    const [selectedPeriodCurrent, setSelectedPeriodCurrent] = useState({
        startDate: new Date('Sun Oct 25 2020 00:00:00 GMT+0530 (India Standard Time)'),
        endDate: new Date('Wed Nov 25 2020 00:00:00 GMT+0530 (India Standard Time)'),
    });
    const [selectedPeriodPrior, setSelectedPeriodPrior] = useState([{
        startDate: new Date('Mon May 18 2020 00:00:00 GMT+0530 (India Standard Time)'),
        endDate: new Date('Wed Jun 06 2020 00:00:00 GMT+0530 (India Standard Time)'),
    }]);
    const [showPriorGraphs, setShowPriorGraphs] = useState(false);
    const [locationList, setLocationList] = useState(['35C Chandigarh', 'Allahabad Store', 'Amritsar Store', 'CP Service Center', 'eCommerce', 'Elante Store',
     'Elgin Kolkata', 'Gurgaon Service', 'Head Office', 'Jalandhar Store', 'Jammu Store', 'Jodhpur Store', 'Kota Store', 'Meerut Store', 'MGF Store', 'MI Road',
     'Noida Service', 'Panchkula Store', 'Punjabi Bagh Store', 'PVR Anupam Store', 'SCM Kolkata', 'Select City Walk Store', 'SMB Business', 'Sohna Road', 'SPM Kolkata',
     'Triton Store', 'Udaipur Store', 'Worldmark Store', 'WTP Store']);

    return (
        <StateContext.Provider value={{
            value1: [filter, setFilter],
            value2: [showPeriodTraffic, setShowPeriodTraffic],
            show_sidebar: [showSideBar, setShowSideBar],
            value4: [showPeriodGender, setShowPeriodGender],
            value5: [showPeriodAge, setShowPeriodAge],
            value6: [allData, setAllData],
            selected_period_current: [selectedPeriodCurrent, setSelectedPeriodCurrent],
            selected_period_prior: [selectedPeriodPrior, setSelectedPeriodPrior],
            total_visitors: [totalVisitors, setTotalVisitors],
            peak_day: [peakDay, setPeakDay],
            least_day: [leastDay, setLeastDay],
            gender_graph_data: [genderGraphData, setGenderGraphData],
            age_graph_data: [ageGraphData, setAgeGraphData],
            traffic_graph_data: [trafficGraphData, setTrafficGraphData],
            set_data: [data, setData],
            age_pie_graph: [agePieGraph, setAgePieGaph],
            power_hours_data: [powerHoursData, setPowerHoursData],
            week_hourly_graphs_data: [weekHourlyGraphsData, setWeekHourlyGraphsData],
            week_traffic: [weekTraffic, setWeekTraffic],
            month_traffic: [monthTraffic, setMonthTraffic],
            quarter_traffic: [quarterTraffic, setQuarterTraffic],
            total_gender_mq: [totalGenderMQ, setTotalGenderMQ],
            show_date_picker: [showDatePicker, setShowDatePicker],

            total_visitors_prior: [totalVisitorsPrior, setTotalVisitorsPrior],
            peak_day_prior: [peakDayPrior, setPeakDayPrior],
            least_day_prior: [leastDayPrior, setLeastDayPrior],
            gender_graph_data_prior: [genderGraphDataPrior, setGenderGraphDataPrior],
            age_graph_data_prior: [ageGraphDataPrior, setAgeGraphDataPrior],
            traffic_graph_data_prior: [trafficGraphDataPrior, setTrafficGraphDataPrior],
            set_data_prior: [dataPrior, setDataPrior],
            age_pie_graph_prior: [agePieGraphPrior, setAgePieGaphPrior],
            power_hours_data_prior: [powerHoursDataPrior, setPowerHoursDataPrior],
            week_hourly_graphs_data_prior: [weekHourlyGraphsDataPrior, setWeekHourlyGraphsDataPrior],
            week_traffic_prior: [weekTrafficPrior, setWeekTrafficPrior],
            show_prior_graphs: [showPriorGraphs, setShowPriorGraphs],

            is_logged_in: [isLoggedIn, setIsLoggedIn],
            active_period_traffic: [active_period_traffic, setActivePeriodTraffic],
            active_period_gender: [active_period_gender, setActivePeriodGender],
            active_period_age: [active_period_age, setActivePeriodAge],
            dark_mode: [darkMode, setDarkMode],
            state_current: [stateCurrent, setStateCurrent],
            state_prior: [statePrior, setStatePrior],

            location_list: [locationList, setLocationList],
        }}>
            {props.children}
        </StateContext.Provider>
    )
};
