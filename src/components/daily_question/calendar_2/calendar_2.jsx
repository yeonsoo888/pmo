import React from 'react';
import styles from './calendar_2.module.css';

const Calendar_2 = ({ data , currentDay, currentYear , handleAddYear , handleSubtractYear}) => {
    const dateList1 = data.date.map((item,idx)=> {
        if(idx < 7) {
            const todoList = item.todo.map(todoItem => (
                <p>{todoItem}</p>
            ));
            return (
                <td key={idx}>
                    <span className={[styles.date]}>{item.date}</span>
                    <div className={styles.todo}>
                        {todoList}
                    </div>
                </td>
            )
        }
    })
    const dateList2 = data.date.map((item,idx)=>{
        if( idx > 6 && idx < 14) {
            const todoList = item.todo.map(todoItem => (
                <p>{todoItem}</p>
            ));
            return (
                <td key={idx}>
                    <span className={styles.date}>{item.date}</span>
                    <div className={styles.todo}>
                        {todoList}
                    </div>
                </td>
            )
        }
    })
    const dateList3 = data.date.map((item,idx)=>{
        if( idx > 13 && idx < 21) {
            const todoList = item.todo.map(todoItem => (
                <p>{todoItem}</p>
            ));
            return (
                <td key={idx}>
                    <span className={styles.date}>{item.date}</span>
                    <div className={styles.todo}>
                        {todoList}
                    </div>
                </td>
            )
        }
    })
    const dateList4 = data.date.map((item,idx)=>{
        if( idx > 20 && idx < 28) {
            const todoList = item.todo.map(todoItem => (
                <p>{todoItem}</p>
            ));
            return (
                <td key={idx}>
                    <span className={styles.date}>{item.date}</span>
                    <div className={styles.todo}>
                        {todoList}
                    </div>
                </td>
            )
        }
    })
    const dateList5 = data.date.map((item,idx)=>{
        if( idx > 27 && idx < 35) {
            const todoList = item.todo.map(todoItem => (
                <p>{todoItem}</p>
            ));
            return (
                <td key={idx}>
                    <span className={styles.date}>{item.date}</span>
                    <div className={styles.todo}>
                        {todoList}
                    </div>
                </td>
            )
        }
    })
    return (
        <table className={styles.table}>
            <thead>
                <tr className={styles.calendar_headr}>
                    <th colSpan="7">
                        <div onClick={handleSubtractYear}>뺴기</div>
                        <strong>{currentYear}</strong>
                        <div onClick={handleAddYear}>더하기</div>
                    </th>
                </tr>
                <tr className={styles.day}>
                    <td>일</td>
                    <td>월</td>
                    <td>화</td>
                    <td>수</td>
                    <td>목</td>
                    <td>금</td>
                    <td>토</td>
                </tr>
            </thead>
            <tbody className={styles.date_wrap}>
                    <tr>{dateList1}</tr>
                    <tr>{dateList2}</tr>
                    <tr>{dateList3}</tr>
                    <tr>{dateList4}</tr>
                    <tr>{dateList5}</tr>
            </tbody>
        </table>
    );

};

export default Calendar_2;