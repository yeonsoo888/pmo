import React, { useState } from 'react';
import Calendar_2 from './calendar_2/calendar_2';
import data from '../../data/todo.json';

const Daily_question = () => {
    const today = new Date();
    const currentDay = today.getDate();
    const [currentYear,setCurrentYear] = useState(today.getFullYear());

    const handleAddYear = () => {
        const newCurrentYear = currentYear
        setCurrentYear(newCurrentYear + 1);
    }
    const handleSubtractYear = () => {
        const newCurrentYear = currentYear
        setCurrentYear(newCurrentYear - 1);
    }

    return (
        <div>
            <Calendar_2 data={data} currentDay={currentDay} currentYear={currentYear} handleAddYear={handleAddYear} handleSubtractYear={handleSubtractYear}/>
        </div>
    );
};

export default Daily_question;