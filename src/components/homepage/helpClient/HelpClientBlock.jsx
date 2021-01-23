import React from 'react'
import styles from "./helpClient.module.sass";
import {NavLink} from "react-router-dom";

const HelpClientBlock = ({img, classNameWrapper, classNameImg, title, subtitle}) =>{
    return (
        <div className={styles.block}>
            <img src={img} alt="Face" className={classNameImg}/>
            <div className={classNameWrapper}>
                <h4 className={styles.content_wrapper_title}>
                    {title}
                </h4>
                <h5 className={styles.content_wrapper_subtitle}>
                    {subtitle}
                </h5>
                <NavLink to={'#'} className={styles.block_btn}>Learn more</NavLink>
            </div>
        </div>
    )
}

export default HelpClientBlock