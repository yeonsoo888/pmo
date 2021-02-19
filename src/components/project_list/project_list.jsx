import React from 'react';
import styles from './project_list.module.css';
import data from '../../data/project.json';
import { Link, Route } from 'react-router-dom';
import Project_view from './project_view';

const Project_list = () => {

    const itemList = data.project.map(item => {

        const managerList = item.manager.map(item => (
            <span>{item}</span>
        ))
        return (
            <tr key={item.num}>
                <td>
                    <Link to={`/project_list/view/${item.num}`}>
                        <div>
                            <em>{item.num}</em>
                            <span>{item.client}</span>
                            <span>Budget : {item.budget}</span>
                        </div>
                        <div>
                            {item.title}
                        </div>
                    </Link>
                </td>
                <td>1</td>
                <td>
                    {managerList}
                </td>
                <td>
                    {item.progress}
                </td>
                <td>
                    {item.start}
                </td>
                <td>
                    {item.end}
                </td>
            </tr>
        )
    })
    
    return (
        <>
            <div className="title">
                <strong>프로젝트 리스트</strong>
            </div>
            <Route path="/project_list" exact>
                <div className={styles.table}>
                    <table>
                        <thead>
                            <tr>
                                <th>프로젝트명</th>
                                <th>진행률</th>
                                <th>담당자</th>
                                <th>진행</th>
                                <th>Starts</th>
                                <th>Ends</th>
                            </tr>
                        </thead>
                        <tbody>
                            {itemList}
                        </tbody>
                    </table>
                </div>
            </Route>
            <Route path="/project_list/view/:item_num">
                <Project_view data={data}/>
            </Route>
        </>
    );
};

export default Project_list;