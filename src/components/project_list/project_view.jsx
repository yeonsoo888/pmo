import React from 'react';
import { useParams } from 'react-router-dom';
import styles from './project_view.module.css';

const Project_view = ({data}) => {

    const param = useParams();
    console.log(param.item_num);

    const viewItem = data.project.filter(item=>item.num === param.item_num);
    return (
        <div className={styles.viewWrap}>
            <form action="">
                <table>
                    <tbody>
                        <tr>
                            <td><strong>프로젝트영업공유</strong></td>
                            <td>
                                <select name="">
                                    <option>파트너(아웃소싱 발주사연동)</option>
                                    <option>이덕권</option>
                                    <option>한창수</option>
                                </select>
                                <strong>고객노출정보</strong>
                                <select name="">
                                    <option>Workcenter에 계약정보 보이기</option>
                                    <option>계약정보(X)-타사계약인경우만</option>
                                </select>
                            </td>
                        </tr>
                        <tr>
                            <td><strong>프로젝트명</strong></td>
                            <td>
                                <input type="text" name="" placeholder="우리가 기억할 수 있는 명칭" value={viewItem[0].title} />
                                <div><span>중요 상태 정보 / 해지 사유</span><input type="text" name="" value=""   /></div>
                            </td>
                        </tr>
                        <tr>
                            <td><strong>제작진행상황</strong></td>
                            <td>
                                <label>
                                    <input type="radio" name="제작진행상황" hidden />
                                    <span></span>
                                    1. 계약
                                </label>
                                <label>
                                    <input type="radio" name="제작진행상황" hidden />
                                    <span></span>
                                    2. 분석 (벤치마킹)
                                </label>
                                <label>
                                    <input type="radio" name="제작진행상황" hidden />
                                    <span></span>
                                    3. 기획/메인
                                </label>
                                <label>
                                    <input type="radio" name="제작진행상황" hidden />
                                    <span></span>
                                    4. 콘텐츠디자인
                                </label>
                                <label>
                                    <input type="radio" name="제작진행상황" hidden />
                                    <span></span>
                                    5. 마크업
                                </label>
                                <label>
                                    <input type="radio" name="제작진행상황" hidden />
                                    <span></span>
                                    6. 개발
                                </label>
                                <label>
                                    <input type="radio" name="제작진행상황" hidden />
                                    <span></span>
                                    7. QC
                                </label>
                                <label>
                                    <input type="radio" name="제작진행상황" hidden />
                                    <span></span>
                                    8. 기타/이슈
                                </label>
                            </td>
                        </tr>
                        <tr>
                            <td><strong>납기완료일</strong></td>
                            <td><input type="text" name="" /><span>**협업문서**</span></td>
                        </tr>
                        <tr>
                            
                        </tr>
                    </tbody>
                </table>
            </form>
        </div>
    );
};

export default Project_view;