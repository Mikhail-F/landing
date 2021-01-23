import React from 'react'
import styles from './belovedClient.module.sass'
import Footer from "../footer/Footer";
import {NavLink} from "react-router-dom";

const BelovedClient = () => {
    return (
        <div className={styles.beloved_client_wrapper}>
            <div className={styles.beloved_client}>
                <div className={styles.beloved_client_header}>
                    <h1 className={styles.title}>
                        Our Beloved Client
                    </h1>
                    <h4 className={styles.subtitle}>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut
                        labore et dolore magna aliqua. Ut enim ad minim veniam.
                    </h4>
                </div>
                <div className={styles.block_wrapper}>
                    <div className={`${styles.block} ${styles.brdr_right} ${styles.brdr_bottom}`}>LOGO CLIENT 1</div>
                    <div className={`${styles.block} ${styles.brdr_right} ${styles.brdr_bottom}`}>LOGO CLIENT 2</div>
                    <div className={`${styles.block} ${styles.brdr_right} ${styles.brdr_bottom}`}>LOGO CLIENT 3</div>
                    <div className={`${styles.block} ${styles.brdr_bottom}`}>LOGO CLIENT 4</div>
                    <div className={`${styles.block} ${styles.brdr_right}`}>LOGO CLIENT 5</div>
                    <div className={`${styles.block} ${styles.brdr_right}`}>LOGO CLIENT 6</div>
                    <div className={`${styles.block} ${styles.brdr_right}`}>LOGO CLIENT 7</div>
                    <div className={`${styles.block} ${styles.more_client}`}><NavLink to={'#'}>More Client</NavLink></div>
                </div>
            </div>
            <Footer/>
        </div>
    )
}

export default BelovedClient