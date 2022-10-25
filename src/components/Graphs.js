import React, { useEffect, useState, useContext } from 'react';
import { AreaChart, Area, LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip } from 'recharts';
import '../styles/Graphs.css';
import '../styles/Graphs_DarkMode.css';
import { CSVLink } from "react-csv";
import csv from '../public/csv.png';
import { StateContext } from '../contexts/StateContext.js';
import { DateTabTraffic, DateTabGender, DateTabAge } from './DayWeekMonthBar.js';
// import WeekTab from '../Pages/WeekTab.js';


export const Traffic = () => {
    const { set_data, dark_mode } = useContext(StateContext);
    const data = set_data[0];
    const darkMode = dark_mode[0];
    const [totalVisitors, setTotalVisitors] = useState(0);
    const [peakDay, setPeakDay] = useState(0);
    const [leastDay, setLeastDay] = useState(0);
    const [bestDay, setBestDay] = useState('');
    const [worstDay, setWorstDay] = useState('');

    useEffect(() => {
        let total = 0;
        let tempData = [...data];
        let visitorArr = [];
        if (tempData.length) {
            tempData.map(element => {
                visitorArr.push(parseInt(element.count));
            });
            total = visitorArr.reduce((a, b) => (a + b));
            visitorArr.sort();
            let indexP = tempData.findIndex(obj => obj.count === visitorArr[visitorArr.length - 1]);
            let indexL = tempData.findIndex(obj => obj.count === visitorArr[0]);
            setPeakDay(Math.max(...visitorArr));
            setLeastDay(Math.min(...visitorArr));
            setBestDay(tempData[indexP].Date);
            setWorstDay(tempData[indexL].Date);
            setTotalVisitors(total);
        };
    }, [data]);

    const CustomizedYAxisTickDark = () => ({
        render() {
            const { x, y, payload } = this.props;
            return (
                <g transform={`translate(${x},${y})`}>
                    <text x={0} y={0} textAnchor="end" fill="white" >{payload.value}</text>
                </g>
            );
        }
    });

    const CustomizedXAxisTickDark = () => ({
        render() {
            const { x, y, payload } = this.props;
            return (
                <g transform={`translate(${x},${y})`}>
                    <text x={0} y={0} dy={16} textAnchor="end" fill="white" transform="rotate(-35)" style={{ 'fontSize': '12px' }}>{payload.value}</text>
                </g>
            );
        }
    });

    const CustomizedYAxisTick = () => ({
        render() {
            const { x, y, payload } = this.props;
            return (
                <g transform={`translate(${x},${y})`}>
                    <text x={0} y={0} textAnchor="end" fill="#596dd4" >{payload.value}</text>
                </g>
            );
        }
    });

    const CustomizedXAxisTick = () => ({
        render() {
            const { x, y, payload } = this.props;
            return (
                <g transform={`translate(${x},${y})`}>
                    <text x={0} y={0} dy={16} textAnchor="end" fill="#596dd4" transform="rotate(-35)" style={{ 'fontSize': '12px' }}>{payload.value}</text>
                </g>
            );
        }
    });

    const style = {
        overflow: 'visible',
    };

    return (
        <div className="graph-grid-container" >
            < div className={darkMode ? "trafficGraphDark" : "trafficGraph"} >
                <div id="graph-header"> <h3 className={darkMode ? "graph_title_dark" : "graph_title"}>Total Traffic</h3><DateTabTraffic /><CSVLink id="csvLink" data={data}><img id="csvImage" src={csv} alt={'csv'} /></CSVLink></div>
                <LineChart width={800} height={250} style={style} data={data}
                    margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                    <Line  type="monotone" dataKey="count" strokeWidth={4} stroke="orange" fill="orange"  />
                    <XAxis data={data} dataKey="Date" domain={['auto', 'auto']} padding={{ left: 20, right: 20 }}
                        tickLine={false} axisLine={false} tick={darkMode ? <CustomizedXAxisTickDark /> : <CustomizedXAxisTick />} />
                    <YAxis type="number" tickLine={false} axisLine={false} tick={darkMode ? <CustomizedYAxisTickDark /> : <CustomizedYAxisTick />} />
                    <CartesianGrid strokeDasharray="3 6" vertical={false} />
                    <Tooltip />
                </LineChart>
            </div >
            <div id={darkMode ? "total_visitors_dark" : "total_visitors"}>
                <span id={darkMode ? "visitors_heading_dark" : "visitors_heading"}>{totalVisitors}</span>
                <span id={darkMode ? "visitor_subsubHeading_dark" : "visitor_subsubHeading"}>Total Visitors</span>
                <span id={darkMode ? "visitors_heading_dark" : "visitors_heading"}>{peakDay}</span>
                <span id={darkMode ? "visitors_subHeading_dark" : "visitors_subHeading"}>{bestDay}</span>
                <span id={darkMode ? "visitor_subsubHeading_dark" : "visitor_subsubHeading"}>Peak Traffic Day</span>
                <span id={darkMode ? "visitors_heading_dark" : "visitors_heading"}>{leastDay}</span>
                <span id={darkMode ? "visitors_subHeading_dark" : "visitors_subHeading"}>{worstDay}</span>
                <span id={darkMode ? "visitor_subsubHeading_dark" : "visitor_subsubHeading"}>Least Traffic Day</span>
            </div>
        </div >
    );
};

export const Gender = () => {
    const { set_data, age_pie_graph, dark_mode } = useContext(StateContext);
    const data = set_data[0];
    const darkMode = dark_mode[0];
    const agePieGraph = age_pie_graph[0];

    const CustomizedYAxisTickDark = () => ({
        render() {
            const { x, y, payload } = this.props;
            return (
                <g transform={`translate(${x},${y})`}>
                    <text x={0} y={0} textAnchor="end" fill="white" >{payload.value}</text>
                </g>
            );
        }
    });

    const CustomizedXAxisTickDark = () => ({
        render() {
            const { x, y, payload } = this.props;
            return (
                <g transform={`translate(${x},${y})`}>
                    <text x={0} y={0} dy={16} textAnchor="end" fill="white" transform="rotate(-35)" style={{ 'fontSize': '12px' }}>{payload.value}</text>
                </g>
            );
        }
    });

    const CustomizedYAxisTick = () => ({
        render() {
            const { x, y, payload } = this.props;
            return (
                <g transform={`translate(${x},${y})`}>
                    <text x={0} y={0} textAnchor="end" fill="#596dd4" >{payload.value}</text>
                </g>
            );
        }
    });

    const CustomizedXAxisTick = () => ({
        render() {
            const { x, y, payload } = this.props;
            return (
                <g transform={`translate(${x},${y})`}>
                    <text x={0} y={0} dy={16} textAnchor="end" fill="#596dd4" transform="rotate(-35)" style={{ 'fontSize': '12px' }}>{payload.value}</text>
                </g>
            );
        }
    });

    const areaChartStyle = {
        zIndex: 2,
    };

    return (
        <div className="graph-grid-container">
            <div className={darkMode ? "gender_graph_dark" : "gender_graph"}>
                <div id="graph-header"> <h3 className={darkMode ? "graph_title_dark" : "graph_title"}>Gender Distribution</h3><DateTabGender /><CSVLink id="csvLink" data={data}><img id="csvImage" src={csv} alt={'csv'} /></CSVLink></div>
                <AreaChart style={areaChartStyle} width={800} height={250} data={data} syncId="GenderGraphs"
                    margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                    <defs>
                        <linearGradient id="colorMale" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="5%" stopColor="rgb(0, 174, 255)" stopOpacity={1} />
                            <stop offset="100%" stopColor="rgb(0, 174, 255)" stopOpacity={0.5} />
                        </linearGradient>
                        <linearGradient id="colorFemale" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="5%" stopColor="#fc7cf0" stopOpacity={1} />
                            <stop offset="100%" stopColor="#fc7cf0" stopOpacity={0.5} />
                        </linearGradient>
                    </defs>
                    <XAxis dataKey="Date" padding={{ left: 20, right: 20 }} tickLine={false} axisLine={false} tick={darkMode ? <CustomizedXAxisTickDark /> : <CustomizedXAxisTick />} />
                    <YAxis type="number" tickLine={false} axisLine={false} tick={darkMode ? <CustomizedYAxisTickDark /> : <CustomizedYAxisTick />} />
                    <CartesianGrid strokeDasharray="3 6" vertical={false} />
                    <Tooltip />
                    <Area type="monotone" dataKey="Male" fill='url(#colorMale)' strokeWidth={2} fillOpacity={1} stroke="rgb(0, 174, 255)" activeDot={{ r: 5 }} />
                    <Area type="monotone" dataKey="Female" fill="url(#colorFemale)" strokeWidth={2} fillOpacity={1} stroke="#fc7cf0" activeDot={{ r: 5 }} />
                </AreaChart>
            </div>
            <div className={darkMode ? "pie_graph_dark" : "pie_graph"}>
                <div className="percentages">
                    <h2 style={{color:'#fc7cf0'}}>{agePieGraph.length ? (agePieGraph[0].TotalFemales).slice(2) + '%' : ''}</h2><h2 style={{color:'#00aeff'}}>{agePieGraph.length ? (agePieGraph[0].TotalMales).slice(2) + '%' : ''}</h2>
                </div>
                <svg className="gender_svg" xmlns="http://www.w3.org/2000/svg" width="250pt" height="176pt" viewBox="0 0 250 176" version="1.1">
                    <defs>
                        <filter id="fillPartialFemale" primitiveUnits="objectBoundingBox" x="0%" y="0%" width="100%" height="100%">
                            <feFlood x="0%" y="0%" width="100%" height="100%" floodColor="#fc7cf0" />
                            <feOffset dy={agePieGraph.length ? agePieGraph[0].TotalMales : 1}>
                                <animate attributeName="dy" from="1" to={agePieGraph.length ? agePieGraph[0].TotalMales : 1} dur="1s" />
                            </feOffset>
                            <feComposite operator="in" in2="SourceGraphic" />
                            <feComposite operator="over" in2="SourceGraphic" />
                        </filter>
                        <filter id="fillPartialMale" primitiveUnits="objectBoundingBox" x="0%" y="0%" width="100%" height="100%">
                            <feFlood x="0%" y="0%" width="100%" height="100%" floodColor="rgb(0, 174, 255)" />
                            <feOffset dy={agePieGraph.length ? agePieGraph[0].TotalFemales : 1}>
                                <animate attributeName="dy" from="1" to={agePieGraph.length ? agePieGraph[0].TotalFemales : 1} dur="1s" />
                            </feOffset>
                            <feComposite operator="in" in2="SourceGraphic" />
                            <feComposite operator="over" in2="SourceGraphic" />
                        </filter>
                    </defs>
                    {darkMode ?
                        <g id="surface1">
                            <path filter="url(#fillPartialMale)" style={{ "fill": "#2a3256", "stroke": "rgb(0, 174, 255)" }} d="M 208.558594 94.871094 C 208.179688 96.441406 207.207031 97.558594 205.753906 98.089844 C 203.367188 98.96875 201.429688 97.910156 200.230469 95.832031 C 200.027344 95.480469 199.867188 95.101562 199.746094 94.714844 L 190.863281 66.667969 C 190.707031 66.175781 189.980469 66.277344 189.964844 66.792969 L 189.449219 83.859375 L 199.242188 157 C 199.585938 159.585938 197.566406 161.882812 194.945312 161.882812 L 188.941406 161.882812 C 186.757812 161.882812 184.914062 160.265625 184.640625 158.105469 L 176.371094 92.648438 L 168.101562 158.105469 C 167.828125 160.265625 165.984375 161.882812 163.800781 161.882812 L 157.800781 161.882812 C 155.179688 161.882812 153.15625 159.585938 153.503906 157 L 163.292969 83.859375 L 162.78125 66.792969 C 162.765625 66.277344 162.035156 66.175781 161.878906 66.667969 L 153 94.714844 C 152.875 95.101562 152.714844 95.480469 152.511719 95.832031 C 151.3125 97.910156 149.375 98.96875 146.988281 98.089844 C 145.539062 97.558594 144.566406 96.441406 144.183594 94.871094 C 143.949219 93.898438 144 92.878906 144.277344 91.917969 L 157.027344 47.972656 C 158.222656 43.84375 162.019531 41 166.339844 41 L 186.40625 41 C 190.722656 41 194.519531 43.84375 195.71875 47.972656 L 208.464844 91.917969 C 208.746094 92.878906 208.792969 93.898438 208.558594 94.871094 Z M 208.558594 94.871094 " />
                            <path style={{ "fill": "#2a3256", "stroke": "rgb(0, 174, 255)" }} d="M 188.261719 27.050781 C 188.261719 33.585938 182.9375 38.886719 176.371094 38.886719 C 169.804688 38.886719 164.484375 33.585938 164.484375 27.050781 C 164.484375 20.515625 169.804688 15.214844 176.371094 15.214844 C 182.9375 15.214844 188.261719 20.515625 188.261719 27.050781 Z M 188.261719 27.050781 " />
                            <path filter="url(#fillPartialFemale)" style={{ "fill": "#2a3256", "stroke": "#fc7cf0" }} d="M 106.640625 94.382812 C 106.191406 95.996094 105.03125 97.121094 103.246094 97.621094 C 100.359375 98.421875 98.230469 97.164062 97.101562 94.53125 L 87.53125 61.875 C 87.460938 61.632812 87.113281 61.65625 87.074219 61.902344 L 85.152344 74.210938 C 84.847656 76.160156 84.996094 78.152344 85.589844 80.03125 L 98.695312 121.632812 C 99.414062 123.90625 97.707031 126.21875 95.3125 126.21875 L 86.199219 126.21875 C 85.65625 126.21875 85.191406 126.621094 85.117188 127.160156 L 80.84375 157.980469 C 80.535156 160.21875 78.617188 161.882812 76.347656 161.882812 L 71.3125 161.882812 C 69.046875 161.882812 67.125 160.21875 66.816406 157.980469 L 62.542969 127.160156 C 62.46875 126.621094 62.007812 126.21875 61.460938 126.21875 L 52.347656 126.21875 C 49.953125 126.21875 48.25 123.90625 48.964844 121.632812 L 62.070312 80.03125 C 62.664062 78.152344 62.8125 76.160156 62.507812 74.210938 L 60.589844 61.902344 C 60.550781 61.65625 60.203125 61.632812 60.132812 61.875 L 50.558594 94.53125 C 49.429688 97.164062 47.300781 98.421875 44.417969 97.621094 C 42.628906 97.121094 41.472656 95.996094 41.019531 94.382812 C 40.75 93.410156 40.796875 92.375 41.105469 91.414062 L 55.589844 46.25 C 56.585938 43.144531 59.484375 41.035156 62.761719 41.035156 L 84.902344 41.035156 C 88.175781 41.035156 91.074219 43.144531 92.070312 46.25 L 106.558594 91.414062 C 106.867188 92.375 106.914062 93.410156 106.640625 94.382812 Z M 106.640625 94.382812 " />
                            <path style={{ "fill": "#2a3256", "stroke": "#fc7cf0" }} d="M 85.890625 27.21875 C 85.890625 33.851562 80.492188 39.222656 73.832031 39.222656 C 67.171875 39.222656 61.769531 33.851562 61.769531 27.21875 C 61.769531 20.589844 67.171875 15.214844 73.832031 15.214844 C 80.492188 15.214844 85.890625 20.589844 85.890625 27.21875 Z M 85.890625 27.21875 " />
                        </g> :
                        <g id="surface1">
                            <path filter="url(#fillPartialMale)" style={{ "fill": "white", "stroke": "rgb(0, 174, 255)" }} d="M 208.558594 94.871094 C 208.179688 96.441406 207.207031 97.558594 205.753906 98.089844 C 203.367188 98.96875 201.429688 97.910156 200.230469 95.832031 C 200.027344 95.480469 199.867188 95.101562 199.746094 94.714844 L 190.863281 66.667969 C 190.707031 66.175781 189.980469 66.277344 189.964844 66.792969 L 189.449219 83.859375 L 199.242188 157 C 199.585938 159.585938 197.566406 161.882812 194.945312 161.882812 L 188.941406 161.882812 C 186.757812 161.882812 184.914062 160.265625 184.640625 158.105469 L 176.371094 92.648438 L 168.101562 158.105469 C 167.828125 160.265625 165.984375 161.882812 163.800781 161.882812 L 157.800781 161.882812 C 155.179688 161.882812 153.15625 159.585938 153.503906 157 L 163.292969 83.859375 L 162.78125 66.792969 C 162.765625 66.277344 162.035156 66.175781 161.878906 66.667969 L 153 94.714844 C 152.875 95.101562 152.714844 95.480469 152.511719 95.832031 C 151.3125 97.910156 149.375 98.96875 146.988281 98.089844 C 145.539062 97.558594 144.566406 96.441406 144.183594 94.871094 C 143.949219 93.898438 144 92.878906 144.277344 91.917969 L 157.027344 47.972656 C 158.222656 43.84375 162.019531 41 166.339844 41 L 186.40625 41 C 190.722656 41 194.519531 43.84375 195.71875 47.972656 L 208.464844 91.917969 C 208.746094 92.878906 208.792969 93.898438 208.558594 94.871094 Z M 208.558594 94.871094 " />
                            <path style={{ "fill": "white", "stroke": "rgb(0, 174, 255)" }} d="M 188.261719 27.050781 C 188.261719 33.585938 182.9375 38.886719 176.371094 38.886719 C 169.804688 38.886719 164.484375 33.585938 164.484375 27.050781 C 164.484375 20.515625 169.804688 15.214844 176.371094 15.214844 C 182.9375 15.214844 188.261719 20.515625 188.261719 27.050781 Z M 188.261719 27.050781 " />
                            <path filter="url(#fillPartialFemale)" style={{ "fill": "white", "stroke": "#fc7cf0" }} d="M 106.640625 94.382812 C 106.191406 95.996094 105.03125 97.121094 103.246094 97.621094 C 100.359375 98.421875 98.230469 97.164062 97.101562 94.53125 L 87.53125 61.875 C 87.460938 61.632812 87.113281 61.65625 87.074219 61.902344 L 85.152344 74.210938 C 84.847656 76.160156 84.996094 78.152344 85.589844 80.03125 L 98.695312 121.632812 C 99.414062 123.90625 97.707031 126.21875 95.3125 126.21875 L 86.199219 126.21875 C 85.65625 126.21875 85.191406 126.621094 85.117188 127.160156 L 80.84375 157.980469 C 80.535156 160.21875 78.617188 161.882812 76.347656 161.882812 L 71.3125 161.882812 C 69.046875 161.882812 67.125 160.21875 66.816406 157.980469 L 62.542969 127.160156 C 62.46875 126.621094 62.007812 126.21875 61.460938 126.21875 L 52.347656 126.21875 C 49.953125 126.21875 48.25 123.90625 48.964844 121.632812 L 62.070312 80.03125 C 62.664062 78.152344 62.8125 76.160156 62.507812 74.210938 L 60.589844 61.902344 C 60.550781 61.65625 60.203125 61.632812 60.132812 61.875 L 50.558594 94.53125 C 49.429688 97.164062 47.300781 98.421875 44.417969 97.621094 C 42.628906 97.121094 41.472656 95.996094 41.019531 94.382812 C 40.75 93.410156 40.796875 92.375 41.105469 91.414062 L 55.589844 46.25 C 56.585938 43.144531 59.484375 41.035156 62.761719 41.035156 L 84.902344 41.035156 C 88.175781 41.035156 91.074219 43.144531 92.070312 46.25 L 106.558594 91.414062 C 106.867188 92.375 106.914062 93.410156 106.640625 94.382812 Z M 106.640625 94.382812 " />
                            <path style={{ "fill": "white", "stroke": "#fc7cf0" }} d="M 85.890625 27.21875 C 85.890625 33.851562 80.492188 39.222656 73.832031 39.222656 C 67.171875 39.222656 61.769531 33.851562 61.769531 27.21875 C 61.769531 20.589844 67.171875 15.214844 73.832031 15.214844 C 80.492188 15.214844 85.890625 20.589844 85.890625 27.21875 Z M 85.890625 27.21875 " />
                        </g>
                    }
                </svg>
            </div>
        </div >
    )
};

export const Age = () => {
    const { set_data, dark_mode } = useContext(StateContext);
    const ageGraphData = set_data[0];
    const darkMode = dark_mode[0];

    const CustomizedYAxisTickDark = () => ({
        render() {
            const { x, y, payload } = this.props;
            return (
                <g transform={`translate(${x},${y})`}>
                    <text x={0} y={0} dy={16} textAnchor="end" fill="white" >{payload.value}</text>
                </g>
            );
        }
    });
    const CustomizedXAxisTickDark = () => ({
        render() {
            const { x, y, payload } = this.props;
            return (
                <g transform={`translate(${x},${y})`}>
                    <text x={0} y={0} dy={16} textAnchor="end" fill="white" transform="rotate(-35)">{payload.value}</text>
                </g>
            );
        }
    });
    const CustomizedYAxisTick = () => ({
        render() {
            const { x, y, payload } = this.props;
            return (
                <g transform={`translate(${x},${y})`}>
                    <text x={0} y={0} dy={16} textAnchor="end" fill="#596dd4" >{payload.value}</text>
                </g>
            );
        }
    });
    const CustomizedXAxisTick = () => ({
        render() {
            const { x, y, payload } = this.props;
            return (
                <g transform={`translate(${x},${y})`}>
                    <text x={0} y={0} dy={16} textAnchor="end" fill="#596dd4" style={{ 'fontSize': '13px' }} transform="rotate(-35)">{payload.value}</text>
                </g>
            );
        }
    });

    return (
        <div className="graph-grid-container">
            <div className={darkMode ? "age_graph_dark" : "age_graph"}>
                <div id="graph-header"> <h3 className={darkMode ? "graph_title_dark" : "graph_title"}>Age Distribution</h3><DateTabAge /><CSVLink id="csvLink" data={ageGraphData}><img id="csvImage" src={csv} alt={'csv'} /></CSVLink></div>
                <LineChart width={1160} height={300} data={ageGraphData} strokeWidth={2}
                    margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                    <XAxis dataKey="Date" domain={['auto', 'auto']} padding={{ left: 20, right: 20 }} tickLine={false} axisLine={false} tick={darkMode ? <CustomizedXAxisTickDark /> : <CustomizedXAxisTick />} />
                    <YAxis type="number" tickLine={false} axisLine={false} tick={darkMode ? <CustomizedYAxisTickDark /> : <CustomizedYAxisTick />} />
                    <CartesianGrid strokeDasharray="3 6" vertical={false} />
                    <Tooltip cursor={{ fill: 'transparent' }} />
                    <Line dataKey="Children" fill="#b8b5e8" stroke="#b8b5e8" activeDot={{ r: 4 }} />
                    <Line dataKey="Teenager" fill="#b6dfc4" stroke="#b6dfc4" activeDot={{ r: 4 }} />
                    <Line dataKey="Adult" fill="#d19ff6" stroke="#d19ff6" activeDot={{ r: 4 }} />
                    <Line dataKey="Elderly" fill="#8884d8" stroke="#8884d8" activeDot={{ r: 4 }} />
                </LineChart >
            </div>
        </div>
    )
};
