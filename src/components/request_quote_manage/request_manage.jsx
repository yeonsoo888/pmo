import React from 'react';
import { Route } from 'react-router-dom';
import Quote_list from './quote_list';
import styles from './request_manage.module.css';

const Request_manage = () => {
    return (
        <div>
            <div className="title">
                <strong>[접수] 견적요청 관리</strong>
            </div>
            <Route path="/request_manage" exact>
                <div className={styles.searchArea}>
                    <form>
                        <ul>
                            <li>
                                <label>
                                    <input type="radio" name="a" value="entire" />
                                    <span></span>
                                    전체
                                </label>
                            </li>
                            <li>
                                <label>
                                    <input type="radio" name="a" value="" />
                                    <span></span>
                                    접수
                                </label>
                            </li>
                            <li>
                                <label>
                                    <input type="radio" name="a" value="" />
                                    <span></span>
                                    미팅/실견적
                                </label>
                            </li>
                            <li>
                                <label>
                                    <input type="radio" name="a" value="" />
                                    <span></span>
                                    관리중
                                </label>
                            </li>
                            <li>
                                <label>
                                    <input type="radio" name="a" value="" />
                                    <span></span>
                                    유력/아반선정
                                </label>
                            </li>
                            <li>
                                <label>
                                    <input type="radio" name="a" value="" />
                                    <span></span>
                                    계약검토
                                </label>
                            </li>
                            <li>
                                <label>
                                    <input type="radio" name="a" value="" />
                                    <span></span>
                                    계약
                                </label>
                            </li>
                            <li>
                                <label>
                                    <input type="radio" name="a" value="" />
                                    <span></span>
                                    실패
                                </label>
                            </li>
                            <li>
                                <label>
                                    <input type="radio" name="a" value="" />
                                    <span></span>
                                    보류
                                </label>
                            </li>
                            <li>
                                <label>
                                    <input type="radio" name="a" value="" />
                                    <span></span>
                                    유력(일정보류)
                                </label>
                            </li>
                            <li>
                                <label>
                                    <input type="radio" name="a" value="" />
                                    <span></span>
                                    내 진행건
                                </label>
                            </li>
                            <li>
                                <label>
                                    <input type="radio" name="a" value="" />
                                    <span></span>
                                    팀 전체
                                </label>
                            </li>
                            <li>
                                <label>
                                    <input type="radio" name="a" value="" />
                                    <span></span>
                                    미 분류
                                </label>
                            </li>
                        </ul>
                    </form>
                    <form>
                        <div className={styles.searchBox}>
                            <input type="text" placeholder="검색어를 입력해주세요" />
                            <button type="button">조회</button>
                        </div>
                    </form>
                    <form>
                        <ul>
                            <li>업데이트 순</li>
                            <li>체크 순</li>
                            <li>유력</li>
                            <li>비즈홈피</li>
                        </ul>
                    </form>
                    <Quote_list />
                </div>
            </Route>
            <Route path="/request_manage/view/item_id">
                
            </Route>
        </div>
    );
};

export default Request_manage;