import React from 'react'
import styles from './header.module.sass'
import illustrationHeader from '../../../assets/images/illustration.png'
import HeaderNav from "./Header_nav";

const Header = () => {
    return (
        <div className={styles.header}>
           <HeaderNav/>
            <div className={styles.header_center}>
                <div className={styles.header_center_wrapper}>
                    <div className={styles.article}>
                        <h1 className={styles.article_title}>
                            New Automation <br/>
                            Tool for Your Home
                        </h1>
                        <h4 className={styles.article_subtitle}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus tristique vulputate ultrices
                            ut mauris tellus at. Posuere sollicitudin odio tellus elit.
                        </h4>
                        <button className={styles.article_btn}>See Our Project</button>
                    </div>
                    <div className={styles.image_wrapper}>
                        <img src={illustrationHeader} alt="Иллюстрация"/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header