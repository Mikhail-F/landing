import React from 'react'
import styles from './helpClient.module.sass'
import block_1 from '../../../assets/images/block_1.png'
import block_2 from '../../../assets/images/block_2.png'
import block_3 from '../../../assets/images/block_3.png'
import {NavLink} from "react-router-dom";
import HelpClientBlock from "./HelpClientBlock";

const HelpClient = () => {
    return (
        <div className={styles.helpClient}>
            <div className={styles.column_left}>
                <h3 className={styles.description}>
                    What we do to help
                    our client grow in
                    digital era,
                </h3>
                <div className={styles.block_wrapper}>
                    <HelpClientBlock img={block_2} classNameWrapper={styles.content_wrapper}
                                     title={'Make Your business To Be Better Famous In Internet'}
                                     subtitle={'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'}/>
                </div>
            </div>
            <div className={styles.column_right}>
                <HelpClientBlock img={block_3}
                                 classNameWrapper={`${styles.content_wrapper} ${styles.content_wrapper_mt}`}
                                 classNameImg={styles.block_img}
                                 title={'Bring Technology To Your Comfrotable Home'}
                                 subtitle={'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'}/>
                <HelpClientBlock img={block_1} classNameWrapper={styles.content_wrapper}
                                 title={'Build Your Digital Product That Suitable For Your Need'}
                                 subtitle={'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'}/>
            </div>
        </div>
    )
}

export default HelpClient