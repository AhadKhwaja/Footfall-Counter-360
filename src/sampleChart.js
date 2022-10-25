import React from "react";

import { LineChart, Line, XAxis, YAxis, Tooltip } from "recharts";

/** This example illustrates how accessor function in dataKey
 * makes it easier to consume data from different sources,
 * instead of needing to create one single object.
 * This example is fragile, and only works, because data1
 * that is passed in to the contianer, covers the domain of data2 as well.
 * xAxes and yAxes only consider the data passed in to the top level contianer.
 */
const styles = {
    fontFamily: "sans-serif",
    textAlign: "center"
};

const data1 = [
    { year: '24/06/20', value: 900 },
    { year: '25/06/20', value: 800 },
    { year: '26/06/20', value: 500 },
    { year: '27/06/20', value: 900 },
    { year: '28/06/20', value: 300 }
];
const data2 = [
    { year2: '24/05/20', value: 500 },
    { year2: '25/05/20', value: 700 },
    { year2: '26/05/20', value: 100 },
];
let i = -1;
const getXLabels = (data) => {
    return data.year

}


const Charts = () => (
    <div style={styles}>
        <LineChart
            width={500}
            height={300}

            margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
            <Tooltip />
            <Line data={data1} type="monotone" dataKey='value' stroke="#8884d8" />
            <Line type="monotone" dataKey='value' stroke="red" />
            <XAxis data={data1} ticks={['24/06/20', '25/06/20', '26/06/20', '27/06/20', '28/06/20']} dataKey={getXLabels} padding={{ left: 20, right: 20 }}  />
            <YAxis />
        </LineChart>
    </div>
); export default Charts;
