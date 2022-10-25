import React, { useContext } from 'react';
import '../styles/TimePeriod.css';
import { DateRangePicker, DateRange } from 'react-date-range';
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';
import { StateContext } from '../contexts/StateContext.js';

const TimePeriod = () => {
    const { dark_mode, selected_period_current, show_date_picker } = useContext(StateContext);
    const selectedPeriodCurrent = selected_period_current[0];
    const darkMode = dark_mode[0];
    const [showDatePicker, setShowDatePicker] = show_date_picker;

    const showDateRange = () => {
        setShowDatePicker(!showDatePicker);
    };

    return (
        <div className="time-period-container">
            {typeof selectedPeriodCurrent.endDate != 'undefined' ? <div className={!darkMode ? "date_text": "date_text_dark"}>{String(selectedPeriodCurrent.startDate).slice(4, 15)} - {String(selectedPeriodCurrent.endDate).slice(4, 15)}</div> : null}
            <button onClick={showDateRange} className={!darkMode ? "select-date": "select-date-dark"}>Select Time Period</button>
            {showDatePicker ? <div className={darkMode ? "date_range_dark" : "date_range"}>
                <CurrentDatePicker showDateRange={showDateRange} />
            </div> : null
            }
        </div >
    );
};

export const CurrentDatePicker = (props) => {
    const { selected_period_current, state_current, quarter_traffic, month_traffic } = useContext(StateContext);
    const [selectedPeriodCurrent, setSelectedPeriodCurrent] = selected_period_current;
    const [stateCurrent, setStateCurrent] = state_current;
    const setQuarterTraffic = quarter_traffic[1];
    const setMonthTraffic = month_traffic[1];

    const handleSelectCurrent = (range) => {
        setStateCurrent([range.selection])
        let startDate = range.selection.startDate;
        let endDate = range.selection.endDate;
        if (String(selectedPeriodCurrent.startDate) != String(startDate) || String(selectedPeriodCurrent.endDate) != String(endDate)) {
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
            setSelectedPeriodCurrent({ startDate: startDate, endDate: endDate });
        };
    };
    const focusChange = (range) => {
        if (range[1] === 0) {
            props.showDateRange()
        };
    };

    return (
        <DateRange
            editableDateInputs={true}
            months={2}
            direction="horizontal"
            maxDate={new Date(2020, 10, 25)}
            minDate={new Date(2020, 9, 25)}
            onChange={handleSelectCurrent}
            moveRangeOnFirstSelection={false}
            ranges={stateCurrent}
            onRangeFocusChange={focusChange}
        />
    );
};

export default TimePeriod;