import React from 'react';
import { Link } from 'react-router-dom';
import styles from './quote_list.module.css';

const Quote_list = () => {

    return (
        <div className={styles.table}>
            <table>
                <thead>
                    <tr>
                        <td>No</td>
                        <td>[회사명]프로젝트명(최초상담)</td>
                        <td>담당자 / 연락처</td>
                        <td>진행단계</td>
                        <td>예산 / 제안견적</td>
                        <td>예측</td>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>
                            <p>8861</p>
                            <em>지형태 / 이덕권</em>
                        </td>
                        <td>
                            <span>0770</span>
                            <strong>2021-02-18 오후 4:18:28</strong>
                            <span>+회사내부입력</span>
                            <span>(a000101)</span>
                        </td>
                        <td>
                            <p>신혜미 eM / 010-0000-0000</p>
                        </td>
                        <td>
                            접수
                        </td>
                        <td>
                            / 만원
                        </td>
                        <td>
                            포스로 전송
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default Quote_list;