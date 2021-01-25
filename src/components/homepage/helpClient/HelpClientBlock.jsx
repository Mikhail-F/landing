import React from 'react'
import styles from "./helpClient.module.sass";
import {NavLink} from "react-router-dom";
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import SvgIcon from '@material-ui/core/SvgIcon';

const HelpClientBlock = ({img, classNameWrapper, classNameImg, title, subtitle}) => {
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

                <NavLink to={'#'} className={styles.block_btn}>Learn more <SvgIcon
                    className={styles.block_btn_arrow}><ArrowForwardIcon/></SvgIcon></NavLink>
            </div>
        </div>
    )
}

export default HelpClientBlock