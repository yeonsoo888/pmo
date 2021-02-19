import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './header.module.css';

const Header = () => {

    const [porfileUrl,setPrifileUrl] = useState("/image/main/profile.png");
    
    const [subMenu,setSubmenu] = useState({
        sub1 : false,
        sub2 : false,
        sub3 : false,
        sub4 : false,
        sub5 : false,
        sub6 : false,
        sub7 : false,
    })


    const handleSubmenu = (e) => {
        const newSubMenu = {...subMenu};
        const activeMenu = e.currentTarget.id;
        for (let key in newSubMenu) {
            key === activeMenu
            ? (newSubMenu[key] = true)
            : (newSubMenu[key] = false);
        }
        setSubmenu(newSubMenu);

    }

    return (
        <div className={styles.A_Header}>
            <div className={styles.left_quick}>
                <h1 className={styles.logo}><Link to="/">avancrm</Link></h1>
                <button>search</button>
                <button>add</button>
            </div>
            <nav className={styles.gnb}>
                <div className={styles.profileArea}>
                    <div className={styles.imgWrap}>
                        <img src={porfileUrl} alt="" />
                    </div>
                    <div className={styles.txtArea}>
                        <p className={styles.id}>norange91</p>
                        <p className={styles.team}>Design Team</p>
                    </div>
                </div>
                <div>
                    <ul className={styles.menuWrap}>
                        <li id="sub1" onClick={handleSubmenu} className={subMenu.sub1 ? [styles.activeMenu] : []}>
                            <Link to="/project_list">
                                <div className={styles.icon}></div>
                                <span>프로젝트 리스트</span>
                                <div className={subMenu.sub1 ? [styles.upArrow] : [styles.arrow]}></div>
                            </Link>
                        </li>
                        <li id="sub2" onClick={handleSubmenu} className={subMenu.sub2 ? [styles.activeMenu] : []}>
                            <Link to="/daily_question">
                                <span>일일문의현황</span>
                                <div className={styles.icon}></div>
                                <div className={subMenu.sub2 ? [styles.upArrow] : [styles.arrow]}></div>
                            </Link>
                            </li>
                        <li id="sub3" onClick={handleSubmenu} className={subMenu.sub3 ? [styles.activeMenu] : []} >
                            <Link to="/request_manage">
                                <span>[접수]견적요청관리</span>
                                <div className={styles.icon}></div>
                                <div className={subMenu.sub3 ? [styles.upArrow] : [styles.arrow]}></div>
                            </Link>
                            {/* <div className={subMenu.sub3 ? [styles.onSubmenu] : []}>
                                <ul >
                                    <li><Link to="/">My task</Link></li>
                                    <li><Link to="/">I won</Link></li>
                                    <li><Link to="/">I wrote</Link></li>
                                    <li><Link to="/">Whole task</Link></li>
                                    <li><Link to="/">Campboard board</Link></li>
                                    <li><Link to="/">What to do next</Link></li>
                                </ul>
                            </div> */}
                        </li>
                        <li id="sub4" onClick={handleSubmenu} className={subMenu.sub4 ? [styles.activeMenu] : []}>
                            <Link to="/">
                                <div className={styles.icon}></div>
                                <span>1:1 프로젝트 진행</span>
                                <div className={subMenu.sub4 ? [styles.upArrow] : [styles.arrow]}></div>
                            </Link>
                        </li>
                        <li id="sub5" onClick={handleSubmenu} className={subMenu.sub5 ? [styles.activeMenu] : []}>
                            <Link to="/">
                                <div className={styles.icon}></div>
                                <span>유지보수접수 리스트</span>
                                <div className={subMenu.sub5 ? [styles.upArrow] : [styles.arrow]}></div>
                            </Link>
                        </li>
                        <li id="sub6" onClick={handleSubmenu} className={subMenu.sub6 ? [styles.activeMenu] : []}>
                            <Link to="/">
                                <div className={styles.icon}></div>
                                <span>유지보수(솔루션호스팅)</span>
                                <div className={subMenu.sub6 ? [styles.upArrow] : [styles.arrow]}></div>
                            </Link>
                        </li>
                        <li id="sub7" onClick={handleSubmenu} className={subMenu.sub7 ? [styles.activeMenu] : []}>
                            <Link to="/">
                                <div className={styles.icon}></div>
                                <span>견적서</span>
                                <div className={subMenu.sub7 ? [styles.upArrow] : [styles.arrow]}></div>
                            </Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    );
};

export default Header;