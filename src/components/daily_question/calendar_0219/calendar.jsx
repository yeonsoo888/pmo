import React, { Component } from 'react';
import Calendar_contents from './calendar_contents';
import Header from './header';
import './RCA.css';
import moment from 'moment';
import data from '../../../data/todo.json';

class Calendar extends Component {
    state = {
        calendarYM : moment(),
        today : moment()
    }

    moveMonth = (month) => {
        this.setState({
            calendarYM : this.state.calendarYM.add(month,'M')
        })
    }

    render() {
        return (
            <div className="test-layout">
                <div className="RCA-app-container">
                    <Header calendarYM={this.state.calendarYM.format("YYYY년 MM월")}
                        today={this.state.today.format("현재 YYYY - MM - DD")}
                        moveMonth={this.moveMonth}
                    />
                    <Calendar_contents YM={this.state.calendarYM.format("YYYY-MM-DD")} data={data}/>
                </div>
            </div>
        );
    }
}

export default Calendar;